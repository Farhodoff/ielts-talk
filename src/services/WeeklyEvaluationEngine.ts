import {
    WeeklyLearningPlan,
    WeeklyEvaluation,
    PersonalLearningGoal
} from '../types/learningPlan';
import { callSelectedAIProvider } from '../utils/ai/aiCore';
import { PersonalLearningPlanService } from './PersonalLearningPlanService';
import { LearningPathEngine } from './LearningPathEngine';
import { MasteryEngine } from './MasteryEngine';
import { computeMasteryImpact, resolveCategory, EvidenceCategory } from '../types/learningEvidence';
import { SupportedLanguage } from '../types/lesson';
import { toDeterministicUUID } from '../utils/uuid';


/**
 * Phase 19 (D) — compute a REAL per-skill mastery delta from actual evidence
 * recorded in the last 7 days. Replaces the previous simulated ±5 trend delta.
 *
 * Each evidence record contributes its deterministic mastery impact
 * (computeMasteryImpact). The per-skill delta is the average impact of the
 * week's evidence, rounded and clamped to [-50, 50]. No evidence → 0.
 */
export function computeRealMasteryDelta(
    userId: string,
    language: SupportedLanguage,
    skills: string[]
): Record<string, number> {
    const allEvidence = MasteryEngine.getUserEvidence(userId, language);
    const now = Date.now();
    const sevenDaysAgo = now - 7 * 24 * 60 * 60 * 1000;

    const delta: Record<string, number> = {};
    for (const skill of skills) {
        const recent = allEvidence.filter(e => {
            if (e.skill !== skill) return false;
            const ts = new Date(e.timestamp || '').getTime();
            return !isNaN(ts) && ts >= sevenDaysAgo;
        });

        if (recent.length === 0) {
            delta[skill] = 0;
            continue;
        }

        let totalImpact = 0;
        for (const e of recent) {
            const category: EvidenceCategory = resolveCategory(e as any);
            totalImpact += computeMasteryImpact(e.activityType, e.score, category);
        }
        const avg = totalImpact / recent.length;
        delta[skill] = Math.max(-50, Math.min(50, Math.round(avg)));
    }
    return delta;
}

export const WeeklyEvaluationEngine = {
    /**
     * Complete the evaluation for a weekly plan
     */
    async evaluateWeek(
        userId: string,
        goal: PersonalLearningGoal,
        plan: WeeklyLearningPlan
    ): Promise<WeeklyEvaluation> {
        // 1. Calculate actual completion metrics from plan tasks
        let totalTasks = 0;
        let completedTasks = 0;
        let studyMinutesPlanned = 0;
        let studyMinutesActual = 0;

        plan.days.forEach(day => {
            day.tasks.forEach(t => {
                totalTasks++;
                studyMinutesPlanned += t.estimatedMinutes;
                if (t.completed || t.status === 'completed') {
                    completedTasks++;
                    studyMinutesActual += t.estimatedMinutes;
                }
            });
        });

        const completionRate = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

        // 2. Fetch current mastery state to compute deltas and skills profile
        const state = await LearningPathEngine.getLearningPath(userId, { forceLanguage: goal.language });
        const skillsProfile = state.masteryProfile?.skills || {};

        const skillScores: Record<string, number> = {};
        const masteryDelta: Record<string, number> = {};
        const weakSkills: string[] = state.masteryProfile?.topWeaknesses.map(w => w.skill) || [];
        const strongSkills: string[] = state.masteryProfile?.topStrengths.map(s => s.skill) || [];

        Object.keys(skillsProfile).forEach(skillName => {
            const mastery = skillsProfile[skillName];
            skillScores[skillName] = mastery.score;
        });

        // Phase 19 (D): REAL mastery delta from the last 7 days of evidence.
        Object.assign(masteryDelta, computeRealMasteryDelta(userId, goal.language, Object.keys(skillsProfile)));

        const srsRetention = state.reviewSummary?.averageRetentionScore || 80;

        const { generateUUID } = await import('../utils/uuid');
        const evaluationId = generateUUID();

        // 3. Dynamic feedback from AI
        const prompt = `Act as an expert EdTech evaluation engine. Evaluate the student's study week performance:
- Language: ${goal.language}
- Target: ${goal.targetGoal}
- Week Number: ${plan.weekNumber}
- Tasks Completed: ${completedTasks} of ${totalTasks} (${completionRate}%)
- Study Time: Planned ${studyMinutesPlanned} min, Completed ${studyMinutesActual} min
- Mastery profile: ${JSON.stringify(skillScores)}
- Weak Skills: ${weakSkills.join(', ')}
- Strong Skills: ${strongSkills.join(', ')}
- Spaced Repetition (SRS) Retention: ${srsRetention}%

Generate a brief constructive assessment (max 150 words) in Uzbek explaining:
1. What went well (e.g. good consistency, strong vocab progress).
2. What went poorly (e.g. low writing/listening completion).
3. Exact minutes adjustment recommendation for next week (e.g. increase listening by 10m, decrease speaking by 5m).

Output ONLY the text feedback in Uzbek, no markdown fences.`;

        let aiFeedback = '';
        try {
            const response = await callSelectedAIProvider(prompt, undefined, false);
            aiFeedback = response.trim();
        } catch (err) {
            console.warn('[WeeklyEvaluationEngine] AI feedback call failed, using fallback feedback:', err);
        }

        // Fallback Uzbek evaluation feedback if AI fails
        if (!aiFeedback) {
            if (completionRate >= 80) {
                aiFeedback = "Ajoyib natija! Siz haftalik rejadagi topshiriqlarni juda yaxshi bajardingiz. IELTS grammatikasi va akademik leksika bo'yicha mustahkam progress kuzatilmoqda. Kelasi haftada ham shu tempda davom etishni va mock testlar bilan mustahkamlashni tavsiya etamiz.";
            } else if (completionRate >= 50) {
                aiFeedback = "Yaxshi natija, ammo ba'zi kunlarni o'tkazib yubordingiz. IELTS Speaking va Writing ko'nikmalarini rivojlantirishga ko'proq vaqt ajratishingiz kerak. Kelasi haftada vazifalar vaqtini 5-10 daqiqaga qisqartirishni tavsiya etamiz.";
            } else {
                aiFeedback = "Afsuski, darslarga yetarlicha vaqt ajratmadingiz. Kelgusi haftada dars yuklamasini moslashtiramiz va asosiy IELTS poydevor darslariga qaytamiz.";
            }
        }

        const evaluation: WeeklyEvaluation = {
            id: evaluationId,
            weeklyPlanId: plan.id,
            userId,
            weekNumber: plan.weekNumber,
            completionRate,
            studyMinutesPlanned,
            studyMinutesActual,
            skillScores,
            masteryDelta,
            srsRetention,
            weakSkills,
            strongSkills,
            aiFeedback,
            createdAt: new Date().toISOString()
        };

        // Save evaluation
        await PersonalLearningPlanService.saveWeeklyEvaluation(evaluation);

        // Update plan status to completed
        const updatedPlan: WeeklyLearningPlan = {
            ...plan,
            status: 'completed'
        };
        await PersonalLearningPlanService.saveWeeklyPlan(updatedPlan);

        // Increment currentWeek on the goal
        const activeGoal = PersonalLearningPlanService.getActiveGoal(userId);
        if (activeGoal && (activeGoal.id === goal.id || toDeterministicUUID(activeGoal.id) === toDeterministicUUID(goal.id))) {
            const updatedGoal: PersonalLearningGoal = {
                ...activeGoal,
                currentWeek: activeGoal.currentWeek + 1,
                updatedAt: new Date().toISOString()
            };
            if (updatedGoal.currentWeek > updatedGoal.totalWeeks) {
                updatedGoal.status = 'completed';
            }
            await PersonalLearningPlanService.saveGoal(userId, updatedGoal);
        }

        return evaluation;
    }
};
export default WeeklyEvaluationEngine;
