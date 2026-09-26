import { MasterySkill } from '../types/mastery';
import { SupportedLanguage } from '../types/lesson';
import { CurriculumLessonNode } from '../types/curriculum';
import {
  PersonalLearningGoal,
  WeeklyLearningPlan,
  WeeklyPlanTask,
  WeeklyPlanDay,
  TaskSourceType,
  PlanGoalType,
  WeeklyEvaluation,
} from '../types/learningPlan';
import { callSelectedAIProvider } from '../utils/ai/aiCore';
import { CurriculumLessonResolver, STATIC_CURRICULUM_MAP } from './CurriculumLessonResolver';
import { CurriculumService } from './CurriculumService';
import { LearningPathEngine } from './LearningPathEngine';
import { PersonalLearningPlanService } from './PersonalLearningPlanService';
import { generateUUID, toDeterministicUUID } from '../utils/uuid';
import {
  mapIeltsBandToCefr,
  getCurriculumConfigForBand,
} from '../utils/curriculum/ieltsLevelCalibrator';
import { IELTS_GRAMMAR_DATABASE } from '../data/ielts/ielts_grammar_data';

const LOCK_KEY_PREFIX = 'study_planner_pending_generation_';

/**
 * Shape of the raw (unsanitized) AI JSON payload before validation.
 * Fields are intentionally loose: the validator clamps and defaults everything.
 */
interface RawAiPlanDay {
  day?: unknown;
  tasks?: unknown;
}

interface RawAiTask {
  title?: unknown;
  type?: unknown;
  skill?: unknown;
  estimatedMinutes?: unknown;
  minutes?: unknown;
  contentId?: unknown;
  route?: unknown;
}

const MASTERY_SKILLS = [
  'vocabulary',
  'grammar',
  'reading',
  'listening',
  'writing',
  'speaking',
  'kanji',
] as const;

export interface PlanGenerationResult {
  plan: WeeklyLearningPlan;
  isFallback: boolean;
  noticeMessage: string | null;
}

/**
 * Raised when another generation for the same goal/week is already in flight.
 * Callers must NOT treat this as an AI failure and silently substitute a
 * deterministic plan — the in-flight generation will deliver the real one.
 */
export const PLAN_LOCK_ERROR_CODE = 'PLAN_GENERATION_IN_PROGRESS';

export function isPlanGenerationLockError(error: unknown): boolean {
  return (error as { code?: string } | null)?.code === PLAN_LOCK_ERROR_CODE;
}

export function getLevelPedagogicalDirectives(
  language: SupportedLanguage,
  goalType: PlanGoalType,
  levelCode: string,
  targetLevelCode?: string,
): string {
  if (language === 'ja') {
    const cleanLevel = (levelCode || 'N5').toUpperCase();
    const cleanTarget = (targetLevelCode || cleanLevel).toUpperCase();

    if (
      (goalType as string) === 'zero_ja' ||
      cleanLevel === 'ZERO' ||
      cleanLevel === '0' ||
      cleanLevel === 'N0'
    ) {
      return `JAPANESE ZERO LEVEL (MUTLAQO NOLDAN BOSHLASH) PEDAGOGICAL BLUEPRINT:
- Target: Mutlaqo noldan boshlovchi o'quvchilar uchun poydevor qurish.
- Pedagogical Progression for Week 1:
  * Days 1-3 (Hiragana): 46 ta asosiy hiragana belgilari, tovushlar (dakuon/handakuon: が, ざ, だ, ば, ぱ), cho'ziq unlilar va birikmalar (きゃ, しゅ, ちょ). Yozish va talaffuz mashqlari. Route: /jlpt?tab=kanji&level=N5
  * Days 4-5 (Katakana): Katakana alifbosi, chet eldan kirib kelgan so'zlar (gairaigo: コーヒー, バス, ホテル, テレビ) va o'qish qoidalari. Route: /jlpt?tab=kanji&level=N5
  * Days 6-7 (Eng muhim iboralar): Kundalik salomlashuv (Ohayou gozaimasu, Konnichiwa, Arigatou gozaimasu), o'zini tanishtirish (Hajimemashite, Watashi wa... desu), oddiy ~desu jumla tuzilishi. Route: /speaking-coach?lang=ja
- Non-negotiable Rule: MUTLAQO murakkab kanji yoki N4/N3 grammatikasi bermang. Birinchi haftada faqat Hiragana, Katakana va eng asosiy so'zlashuv iboralariga e'tibor qarating!`;
    }

    if (goalType === 'general_ja') {
      return `JAPANESE KAIWA & DAILY COMMUNICATION DIRECTIVES:
- Emphasize practical conversational phrases, daily situation roleplays, natural responses (aizuchi), and active pronunciation.
- Balance Speaking (/speaking-coach?lang=ja), Dialog Scenarios (/scenarios), Listening (/jlpt?tab=listening&level=N4), and Vocabulary (/study-mode).
- Task titles must represent real-life situations (e.g. "Restoranda taom buyurtma qilish va hisob-kitob", "Do'konda narx va chegirma so'rash", "Mehmonxona va transport yo'nalishlarini aniqlash").
- Avoid dry grammatical jargon; emphasize situational speaking confidence.`;
    }

    const boundaryNotice =
      cleanLevel !== 'N5'
        ? `STRICT LEVEL INTEGRITY REQUIREMENT:\n- The student's current level is ${cleanLevel}, targeting ${cleanTarget}.\n- The student has ALREADY mastered Hiragana, Katakana, and basic Japanese.\n- ABSOLUTELY NEVER assign Hiragana, Katakana, basic greetings, or N5 elementary grammar.\n- Focus strictly on ${cleanLevel} consolidation and progressing towards ${cleanTarget}.\n\n`
        : '';

    switch (cleanLevel) {
      case 'N5':
        return `JLPT N5 PEDAGOGICAL BLUEPRINT (Boshlang'ich daraja):
- Grammar: Hiragana & Katakana mastery, essential particles (は, が, を, に, で, と, も, へ, から, まで), ~desu/~masu polite forms, ~te-form (requests & permission: ~てください, ~てもいいです), ~nai-form (~ないでください), ~ta-form past tense.
- Kanji & Vocabulary: 100 base N5 Kanji (numbers, days of week, directions, basic verbs), 800 core words. Route: /jlpt?tab=kanji&level=N5
- Dokkai (O'qish): Short Furigana texts, daily notices, simple diary entries. Route: /jlpt?tab=reading&level=N5
- Choukai (Tinglash): Basic greetings, train station announcements, shopping numbers and prices. Route: /jlpt?tab=listening&level=N5
- Speaking: Self-introduction (Jikoshoukai), asking prices, daily routine description. Route: /speaking-coach?lang=ja
- Non-negotiable Rule: DO NOT assign N3 or N2 complex grammar or rare Kanji to N5. Keep tasks beginner-friendly and confidence-building.`;

      case 'N4':
        return (
          boundaryNotice +
          `JLPT N4 PEDAGOGICAL BLUEPRINT (O'rta-boshlang'ich daraja):
- Grammar: Potential verbs (~reru/rareru: 食べられる, 読める), Giving/Receiving (あげる, もらう, くれる), Conditionals (~たら, ~ば, ~なら, ~と), Volitional (~よう: 行こう), ~てしまう, ~ておく, ~やすい/~にくい.
- Kanji & Vocabulary: 250 intermediate Kanji, 1,500 everyday words and compound verbs. Route: /jlpt?tab=kanji&level=N4
- Dokkai (O'qish): Information retrieval, library rules, notices, email exchanges, short stories. Route: /jlpt?tab=reading&level=N4
- Choukai (Tinglash): Dialogues in public settings (stations, clinics, supermarkets, schools). Route: /jlpt?tab=listening&level=N4
- Speaking: Requesting permissions, explaining causes and reasons (~から, ~ので), making reservations. Route: /speaking-coach?lang=ja
- Non-negotiable Rule: Equal balance of grammar, kanji, Dokkai and Choukai. Ensure conditional nuances are clearly practiced.`
        );

      case 'N3':
        return (
          boundaryNotice +
          `JLPT N3 PEDAGOGICAL BLUEPRINT (O'rta daraja - Transition to Fluency):
- Grammar: Shinkanzen Bunpou core patterns (~わけだ, ~わけではない, ~ことになっている, ~ようにする, ~をはじめ, ~に対して, ~に関して, ~にとって, ~とおりに, ~としたら).
- Kanji & Vocabulary: 600 Kanji, 3,500 vocabulary words with kanji compounds (Jukugo). Route: /jlpt?tab=kanji&level=N3
- Dokkai (O'qish): Analytical essays, comparison articles, opinion pieces, speed-reading short paragraphs. Route: /jlpt?tab=reading&level=N3
- Choukai (Tinglash): Task comprehension (課題理解), Key points (ポイント理解), Quick response (即時応答). Route: /jlpt?tab=listening&level=N3
- Speaking: Expressing opinions, explaining past events with nuance, polite Keigo foundations. Route: /speaking-coach?lang=ja
- Non-negotiable Rule: Dokkai and Choukai MUST appear at least 2-3 times across the week to develop JLPT exam endurance.`
        );

      case 'N2':
        return (
          boundaryNotice +
          `JLPT N2 PEDAGOGICAL BLUEPRINT (Yuqori-o'rta - Professional & Business):
- Grammar: Advanced functional expressions (~に際して, ~を契機に, ~にほかならない, ~ざるを得ない, ~かねる, ~げ, ~ぬきで), Keigo honorific mastery (Sonkeigo, Kenjougo, Teineigo).
- Kanji & Vocabulary: 1,000 Kanji, 6,000 words, newspaper, economic, and business terminology. Route: /jlpt?tab=kanji&level=N2
- Dokkai (O'qish): Complex editorials, critical commentary, thematic long passages, contrasting viewpoints. Route: /jlpt?tab=reading&level=N2
- Choukai (Tinglash): Integrated comprehension (総合理解), speaker stance, implied meaning and sarcasm. Route: /jlpt?tab=listening&level=N2
- Exam Practice: Full-length timed mock simulation drills. Route: /jlpt?tab=mock&level=N2
- Non-negotiable Rule: High linguistic register. Tasks must involve abstract thematic texts and fast-paced authentic audio.`
        );

      case 'N1':
        return (
          boundaryNotice +
          `JLPT N1 PEDAGOGICAL BLUEPRINT (Oliy daraja - Academic / Literary Nuance):
- Grammar: Classical/literary syntax (~であれ, ~を皮切りに, ~極まりない, ~ならではの, ~と相まって, ~だに), complex stylistic connectors.
- Kanji & Vocabulary: 2,000+ Kanji, 10,000 advanced, abstract, and literary terms. Route: /jlpt?tab=kanji&level=N1
- Dokkai (O'qish): High-difficulty essays, philosophical and scientific treatises, literary criticism. Route: /jlpt?tab=reading&level=N1
- Choukai (Tinglash): Multi-speaker panel debates, academic lectures, subtle irony, rapid unscripted speech. Route: /jlpt?tab=listening&level=N1
- Exam Practice: Full-length official mock exam drills. Route: /jlpt?tab=mock&level=N1
- Non-negotiable Rule: Focus on intellectual nuance and deep comprehension of high-level Japanese discourse.`
        );

      default:
        return `JLPT LEVEL DIRECTIVES: Calibrate tasks directly to JLPT ${cleanLevel} standards.`;
    }
  } else {
    // English Track
    const cefr = mapIeltsBandToCefr(levelCode);
    const config = getCurriculumConfigForBand(levelCode);

    if (goalType === 'ielts') {
      return `IELTS TARGET DIRECTIVES (Current Level: ${levelCode} -> Calibrated CEFR: ${cefr}, Target Band: ${targetLevelCode || '6.5'}):
- PEDAGOGICAL CALIBRATION:
  * For IELTS 5.0 (Band 4.0 - 5.0), the student's foundation is strictly CEFR A2 (Pre-Intermediate).
  * Vocabulary: MUST assign exactly 1 Oxford 3000 A2 part (${config.dailyDosage.vocabWordsPerDay} words per day) using route /study-mode?deck=${config.oxfordDeckId}&part=1..7.
  * Grammar: MUST assign exactly 1 isolated Murphy ${cefr} unit per day from AVAILABLE_CONTENT_IDS with route /ielts?tab=grammar&topic={murphy_unit_id}.
  * Skills Rotation: Assign 1 active skill exercise per day (Speaking Coach / Writing Task / Reading drill).
- Speaking: Part 1 fluency, Part 2 2-minute sustained speech, Part 3 abstract questions. Route: /speaking-coach?lang=en or /ielts/speaking-mock
- Writing: Task 1 academic report & Task 2 structure. Route: /ielts?tab=writing
- Reading & Listening: Cambridge speed drills & keyword prediction. Route: /ielts?tab=reading_listening
- Non-negotiable Daily Dosage ("Me'yor"): Every single day must have distinct, bite-sized tasks: exactly 1 grammar unit, exactly 1 Oxford 3000 level-matched vocabulary part (${config.dailyDosage.vocabWordsPerDay} words), and 1 skill exercise. Do not lump all topics together into generic headings!`;
    } else {
      return `GENERAL ENGLISH DIRECTIVES (CEFR ${cefr}, Current Band: ${levelCode}):
- Vocabulary: Oxford 3000 ${cefr} level parts via /study-mode?deck=${config.oxfordDeckId}&part=1..7
- Grammar: Murphy ${cefr} units via /ielts?tab=grammar&topic={murphy_unit_id}
- Rotate functional grammar, Oxford 3000 flashcard quotas, speaking coach drills, and reading.`;
    }
  }
}

export const PersonalLearningPlanEngine = {
  /**
   * Get idempotency lock key
   */
  getLockKey(userId: string, goalId: string, weekNumber: number): string {
    return `${LOCK_KEY_PREFIX}${userId}:${goalId}:${weekNumber}`;
  },

  /**
   * Acquire generation lock
   */
  acquireLock(userId: string, goalId: string, weekNumber: number): boolean {
    const key = this.getLockKey(userId, goalId, weekNumber);
    const existing = localStorage.getItem(key);
    if (existing) {
      const time = Number(existing);
      // 5 minute timeout for locks
      if (Date.now() - time < 5 * 60 * 1000) {
        return false;
      }
    }
    localStorage.setItem(key, String(Date.now()));
    return true;
  },

  /**
   * Release generation lock
   */
  releaseLock(userId: string, goalId: string, weekNumber: number): void {
    const key = this.getLockKey(userId, goalId, weekNumber);
    localStorage.removeItem(key);
  },

  /**
   * Clean HTML and scripts to avoid XSS injections from AI outputs
   */
  sanitizeText(str: string): string {
    return (str || '')
      .replace(/<[^>]*>/g, '') // Strip HTML tags
      .replace(/javascript:/gi, '')
      .substring(0, 1000)
      .trim();
  },

  /**
   * Generates a 7-day personalized weekly plan using the configured AI provider.
   */
  async generateWeeklyPlan(
    userId: string,
    goal: PersonalLearningGoal,
    weekNumber: number,
    previousWeekResult?: WeeklyEvaluation | null,
  ): Promise<PlanGenerationResult> {
    const hasLock = this.acquireLock(userId, goal.id, weekNumber);
    if (!hasLock) {
      const lockError = new Error(
        'Hozirda ushbu hafta uchun reja generatsiyasi kutilmoqda. Iltimos bir oz kuting.',
      );
      (lockError as Error & { code?: string }).code = PLAN_LOCK_ERROR_CODE;
      throw lockError;
    }

    try {
      // Get user current mastery, weaknesses, and SRS state from orchestrator / engines
      const state = await LearningPathEngine.getLearningPath(userId, {
        forceLanguage: goal.language,
      });
      const srsSummary = state.srsSummary || { dueCount: 0, overdueCount: 0 };
      const completedLessonIds = PersonalLearningPlanService.getCompletedLessonIds(
        userId,
        goal.language,
      );

      const isJa = goal.language === 'ja';

      // Resolve previous week's evaluation if not passed
      let evaluation = previousWeekResult;
      if (!evaluation && weekNumber > 1) {
        try {
          const evals = PersonalLearningPlanService.getWeeklyEvaluations(userId);
          evaluation = evals.find((e) => e.weekNumber === weekNumber - 1);
        } catch {}
      }

      let adjustedDailyMinutes = goal.dailyMinutes;
      let timeNotice: string | null = null;
      if (evaluation) {
        const completion = evaluation.completionRate ?? 100;
        if (completion < 50) {
          adjustedDailyMinutes = Math.max(15, Math.round(goal.dailyMinutes * 0.8));
          timeNotice = isJa
            ? `O'tgan haftadagi topshiriqlar kam bajarilgani uchun (completion: ${completion}%), haftalik yuklama 20% ga kamaytirildi.`
            : `Due to low completion last week (${completion}%), your daily study workload has been reduced by 20%.`;
        } else if (completion === 100) {
          adjustedDailyMinutes = Math.min(180, Math.round(goal.dailyMinutes * 1.2));
          timeNotice = isJa
            ? `O'tgan haftadagi topshiriqlar 100% bajarilgani uchun, haftalik yuklama 20% ga oshirildi.`
            : `Excellent job! Since you completed 100% of your tasks, your daily study workload has been increased by 20%.`;
        }
      }

      // Build available content catalog for the current language and level
      const course = CurriculumService.getCourse(goal.language);
      const cleanCurrent = (goal.currentLevel || '').trim().toUpperCase();
      const targetLevelCode = cleanCurrent === 'ZERO' ? (isJa ? 'N5' : 'A1') : cleanCurrent;
      const availableContent: { id: string; title: string; skill: string }[] = [];

      course.levels?.forEach((lvl) => {
        if (
          lvl.code.toUpperCase() === targetLevelCode ||
          lvl.code.toUpperCase().includes(targetLevelCode)
        ) {
          lvl.units?.forEach((u) => {
            u.lessons?.forEach((l) => {
              if (l.isContentAvailable && !completedLessonIds.includes(l.id)) {
                availableContent.push({ id: l.id, title: l.title, skill: l.skill || 'grammar' });
              }
            });
          });
        }
      });

      // If Japanese track, include authentic curriculum lessons for current and target progression levels
      if (isJa) {
        const JLPT_ORDER = ['ZERO', 'N5', 'N4', 'N3', 'N2', 'N1'];
        const cleanTarget = (goal.targetLevel || 'N5').trim().toUpperCase();
        const currIdx = Math.max(1, JLPT_ORDER.indexOf(cleanCurrent));
        const targIdx = Math.max(currIdx, JLPT_ORDER.indexOf(cleanTarget));
        const activeLevels = JLPT_ORDER.slice(currIdx, targIdx + 1);

        Object.entries(STATIC_CURRICULUM_MAP).forEach(([lessonId, item]) => {
          const matchesLevel = activeLevels.some((lvl) =>
            lessonId.startsWith(`ja-${lvl.toLowerCase()}`),
          );
          if (matchesLevel) {
            if (
              !completedLessonIds.includes(lessonId) &&
              !availableContent.some((c) => c.id === lessonId)
            ) {
              availableContent.push({
                id: lessonId,
                title: item.title,
                skill: item.skill || 'grammar',
              });
            }
          }
        });
      }

      // If English track, populate calibrated Murphy Grammar Units and Oxford 3000 Level Decks
      if (!isJa) {
        const cefr = mapIeltsBandToCefr(goal.currentLevel);
        const levelConfig = getCurriculumConfigForBand(goal.currentLevel);

        // Filter Murphy Grammar Units for this user's CEFR level
        const levelUnits = IELTS_GRAMMAR_DATABASE.filter((t) => {
          if (cefr === 'A1') return t.level.includes('A1');
          if (cefr === 'A2') return t.level.includes('A2') || t.level === 'A1-A2';
          if (cefr === 'B1') return t.level.includes('B1') || t.level === 'B1-B2';
          if (cefr === 'B2') return t.level.includes('B2') || t.level === 'B1-B2';
          if (cefr === 'C1' || cefr === 'C2')
            return t.level.includes('C1') || t.level.includes('B2');
          return true;
        });

        const selectedUnits =
          levelUnits.length > 0 ? levelUnits : IELTS_GRAMMAR_DATABASE.slice(0, 25);
        selectedUnits.slice(0, 15).forEach((u) => {
          if (!completedLessonIds.includes(u.id)) {
            availableContent.push({
              id: u.id,
              title: u.title,
              skill: 'grammar',
            });
          }
        });

        // Add Oxford 3000 level-specific vocabulary parts
        const oxfordDeckId = levelConfig.oxfordDeckId;
        const deckTitle = levelConfig.oxfordDeckTitle;
        for (let p = 1; p <= 7; p++) {
          availableContent.push({
            id: `${oxfordDeckId}_part_${p}`,
            title: `${deckTitle} — ${p}-Qism (${levelConfig.dailyDosage.vocabWordsPerDay} ta so'z)`,
            skill: 'vocabulary',
          });
        }
      }

      const allowedRoutes = isJa
        ? [
            `/jlpt?tab=kanji&level=${targetLevelCode}`,
            `/jlpt?tab=reading&level=${targetLevelCode}`,
            `/jlpt?tab=listening&level=${targetLevelCode}`,
            `/jlpt?tab=mock&level=${targetLevelCode}`,
            '/speaking-coach?lang=ja',
            '/scenarios',
            '/study-mode?lang=ja',
            '/study-mode',
            '/jlpt',
          ]
        : [
            '/ielts?tab=grammar',
            '/scenarios',
            '/speaking-coach?lang=en',
            '/ielts?tab=reading_listening',
            '/ielts?tab=writing',
            '/vocabulary',
            '/study-mode',
            '/ielts/speaking-mock',
          ];

      const strongSkills = state.masteryProfile?.topStrengths.map((s) => s.skill) || [];
      const weaknessesWithSeverity =
        state.masteryProfile?.topWeaknesses.map((w) => ({
          skill: w.skill,
          severity: w.severity || 'medium',
          reason: w.reason,
        })) || [];

      const systemPrompt = `You are Nihon Talk’s Adaptive Learning Planner for English (IELTS/CEFR) and Japanese (JLPT).

Your job is to create one realistic, personalized 7-day study plan using only the student data and valid learning routes provided below.

Return ONLY one valid JSON object. Do not use Markdown, explanations outside JSON, comments, or code fences.

LANGUAGE:
- All task titles, objectives, reasoning, and expectedOutcome MUST be in Uzbek.
- Keep lesson IDs, routes, and skill enum values exactly as provided.

NON-NEGOTIABLE RULES:

1. Generate exactly 7 days in this order:
monday, tuesday, wednesday, thursday, friday, saturday, sunday.

2. Every task MUST contain:
- title
- type
- skill
- estimatedMinutes
- route
- contentId only when a real available content ID is supplied

3. A day’s total estimatedMinutes MUST NOT exceed DAILY_MINUTES.

4. Never generate an SRS-only day.
- DAILY_MINUTES below 30: exactly 2 tasks per day.
- DAILY_MINUTES from 30 to 59: 2 or 3 tasks per day.
- DAILY_MINUTES 60 or higher: 3 tasks per day.
- If the daily time is too limited, rotate skills across the week instead of forcing all skills into every day.

5. SRS:
- Use type "srs", skill "vocabulary", route "/study-mode".
- Include SRS only when DUE_CARDS is greater than 0.
- Give SRS 5–20 minutes depending on DUE_CARDS and OVERDUE_CARDS.
- Higher overdue count means higher SRS priority.

6. Adaptation & Weakness Allocation:
- Weakness weighting: Allocate 60-70% of weekly tasks and study minutes directly to the student's identified weak skills (e.g. Grammar, Dokkai, Choukai, Kanji), and the remaining 30-40% to maintaining strong skills and SRS review.
- High-severity weak skills must appear at least 3-4 times during the week.
- Medium-severity weak skills must appear at least 2-3 times.
- Strong skills should receive maintenance time, but must not disappear completely if they are relevant to the user’s exam goal.
- Use diagnostic, mock, SRS, and previous-week evidence as the highest-priority signals.

7. Goal intensity:
- A higher target score and shorter remaining deadline require more exam-oriented practice.
- IELTS target 7.0+ must include speaking, writing, reading/listening, and mock/exam practice across the week when DAILY_MINUTES permits.
- JLPT plans must balance grammar, vocabulary, kanji, reading, and listening according to level and weakness.
- Do not give beginner material to an advanced learner unless it is explicitly a review/remediation task.

8. Content safety:
- Use only routes from ALLOWED_ROUTES.
- Use a contentId only from AVAILABLE_CONTENT_IDS.
- Never invent content IDs, lessons, books, modules, or routes.
- Never mix English and Japanese content.
- Never assign a completed lesson as a new lesson. It may only appear as review.

9. Quality:
- Tasks must be concrete and actionable, not generic.
- Bad: "English practice"
- Good: "Past Simple: irregular verbs bo‘yicha 15 savollik mashq"
- Do not repeat the same task title on consecutive days unless it is SRS.

OUTPUT JSON SCHEMA:

{
  "objectives": ["string", "string"],
  "focusSkills": ["grammar", "vocabulary"],
  "days": [
    {
      "day": "monday",
      "tasks": [
        {
          "title": "string in Uzbek",
          "type": "lesson | grammar | vocabulary | srs | speaking | reading | listening | writing | practice | mock_test | review",
          "skill": "grammar | vocabulary | reading | listening | speaking | writing | kanji",
          "estimatedMinutes": 20,
          "contentId": "only if included in AVAILABLE_CONTENT_IDS",
          "route": "one route from ALLOWED_ROUTES"
        }
      ]
    }
  ],
  "reasoning": "Talabaning natijalari va zaif ko‘nikmalariga asoslangan qisqa o‘zbekcha izoh.",
  "expectedOutcome": "Hafta oxirida o‘lchab bo‘ladigan o‘zbekcha natija."
}`;

      const prompt = `Create the adaptive weekly plan using this source-of-truth student profile.

Student Parameters:
LANGUAGE_TRACK: ${goal.language}
GOAL_TYPE: ${goal.goalType}
CURRENT_LEVEL: ${goal.currentLevel}
CURRENT_ESTIMATED_SCORE: ${goal.currentLevel || 'A1'}
TARGET_GOAL: ${goal.targetGoal}
TARGET_LEVEL: ${goal.targetLevel}
TARGET_SCORE: ${goal.targetLevel || goal.targetGoal}
DEADLINE: ${goal.deadline || 'Flexible'}
REMAINING_WEEKS: ${Math.max(1, goal.totalWeeks - weekNumber + 1)}
CURRENT_WEEK: ${weekNumber}
DAILY_MINUTES: ${adjustedDailyMinutes}

LEVEL_PEDAGOGICAL_BLUEPRINT:
${getLevelPedagogicalDirectives(goal.language, goal.goalType, cleanCurrent === 'ZERO' ? 'ZERO' : targetLevelCode, goal.targetLevel)}

DIAGNOSTIC_RESULT:
${JSON.stringify(state.diagnosticBaseline?.diagnosticLevel || 'Barcha diagnostik savollar topshirilgan')}

LATEST_MOCK_RESULTS:
${JSON.stringify(state.diagnosticBaseline?.overallScore != null ? { score: state.diagnosticBaseline.overallScore, skills: state.diagnosticBaseline.skills } : 'Oxirgi mock test natijasi mavjud emas')}

ACTIVE_WEAKNESSES:
${JSON.stringify(weaknessesWithSeverity.slice(0, 5))}

STRONG_SKILLS:
${JSON.stringify(strongSkills.slice(0, 5))}

PREVIOUS_WEEK_EVALUATION:
${JSON.stringify(evaluation || 'Birinchi hafta (oldingi evaluation mavjud emas)')}

SRS_STATE:
- DUE_CARDS: ${srsSummary.dueCount}
- OVERDUE_CARDS: ${srsSummary.overdueCount}
- RETENTION: ${state.reviewSummary?.averageRetentionScore || 80}%

COMPLETED_LESSON_IDS:
${JSON.stringify(completedLessonIds.slice(-15))}

AVAILABLE_CONTENT_IDS:
${JSON.stringify(availableContent.slice(0, 20).map((c) => c.id))}

ALLOWED_ROUTES:
${JSON.stringify(allowedRoutes)}

Before returning JSON, verify:
- all 7 days exist;
- every day fits DAILY_MINUTES;
- no SRS-only day exists;
- weak skills receive required priority;
- no invalid route or invented contentId exists;
- English and Japanese content are never mixed.`;

      let cleanJson = '';
      let parsed: WeeklyLearningPlan | null = null;

      // 1. Initial AI call (re-throws immediately on network/HTTP provider error)
      const aiResponse = await callSelectedAIProvider(prompt, systemPrompt, true);
      cleanJson = aiResponse
        .replace(/```json/g, '')
        .replace(/```/g, '')
        .trim();
      parsed = this.parseAndValidateWeeklyPlan(
        cleanJson,
        goal,
        weekNumber,
        userId,
        adjustedDailyMinutes,
      );

      // 2. Controlled 1-time targeted "repair JSON" retry if plan was rejected by validator
      if (!parsed) {
        try {
          const repairPrompt = `The previous JSON response was REJECTED by the validator.
Ensure:
1. All 7 days (monday, tuesday, wednesday, thursday, friday, saturday, sunday) are present.
2. NO day contains ONLY SRS tasks.
3. Daily total minutes must be <= ${adjustedDailyMinutes}.
4. All tasks include title, type, skill, estimatedMinutes, and valid route from ALLOWED_ROUTES.
5. Return ONLY a valid JSON object matching the requested schema. No markdown fences.

Original Student Profile:
${prompt}`;

          const retryResponse = await callSelectedAIProvider(repairPrompt, systemPrompt, true);
          cleanJson = retryResponse
            .replace(/```json/g, '')
            .replace(/```/g, '')
            .trim();
          parsed = this.parseAndValidateWeeklyPlan(
            cleanJson,
            goal,
            weekNumber,
            userId,
            adjustedDailyMinutes,
          );
        } catch (retryErr: unknown) {
          const message = retryErr instanceof Error ? retryErr.message : String(retryErr);
          console.error('[PersonalLearningPlanEngine] Repair generation attempt error:', message);
        }
      }

      if (!parsed) {
        throw new Error(
          "AI_UNAVAILABLE: AI reja formati noto'g'ri qaytdi yoki AI xizmati vaqtincha mavjud emas.",
        );
      }

      this.releaseLock(userId, goal.id, weekNumber);
      return {
        plan: parsed,
        isFallback: false,
        noticeMessage: timeNotice,
      };
    } catch (e) {
      this.releaseLock(userId, goal.id, weekNumber);
      throw e;
    }
  },

  /**
   * Strict JSON validator & sanitizer
   */
  parseAndValidateWeeklyPlan(
    jsonString: string,
    goal: PersonalLearningGoal,
    weekNumber: number,
    userId: string,
    dailyMinutesBudget: number = goal.dailyMinutes,
  ): WeeklyLearningPlan | null {
    try {
      const raw = JSON.parse(jsonString);
      if (!raw || typeof raw !== 'object' || Array.isArray(raw)) return null;

      const completedLessonIds = PersonalLearningPlanService.getCompletedLessonIds(
        userId,
        goal.language,
      );

      const daysOfWeek = [
        'monday',
        'tuesday',
        'wednesday',
        'thursday',
        'friday',
        'saturday',
        'sunday',
      ];
      const objectives = Array.isArray(raw.objectives)
        ? raw.objectives.map((o: unknown) => this.sanitizeText(String(o)))
        : ['Mashq bajarish'];
      const focusSkills = Array.isArray(raw.focusSkills)
        ? raw.focusSkills.map((s: unknown) => this.sanitizeText(String(s)))
        : ['general'];

      const targetLvl = (
        goal.targetLevel ||
        goal.currentLevel ||
        (goal.language === 'ja' ? 'N5' : 'A1')
      ).toUpperCase();
      const validatedDays: WeeklyPlanDay[] = daysOfWeek.map((dayName): WeeklyPlanDay => {
        const rawDay = (Array.isArray(raw.days) ? (raw.days as RawAiPlanDay[]) : []).find(
          (d) => d != null && typeof d === 'object' && String(d.day).toLowerCase() === dayName,
        );
        const rawTasks: RawAiTask[] =
          rawDay && Array.isArray(rawDay.tasks) ? (rawDay.tasks as RawAiTask[]) : [];

        let dayMinutesAllocated = 0;
        const validatedTasks: WeeklyPlanTask[] = [];

        for (let taskIndex = 0; taskIndex < rawTasks.length; taskIndex++) {
          const t = rawTasks[taskIndex];
          if (!t || typeof t !== 'object') continue;

          // Clamp task minutes between 5 and 60 minutes
          let minutes = Number(t.estimatedMinutes || t.minutes || 15);
          if (isNaN(minutes) || minutes < 5) minutes = 10;
          if (minutes > 60) minutes = 60;

          // Respect daily study minutes budget
          if (dayMinutesAllocated + minutes > dailyMinutesBudget) {
            const remaining = dailyMinutesBudget - dayMinutesAllocated;
            if (remaining >= 5) {
              minutes = remaining;
            } else {
              continue; // Skip task if no budget
            }
          }

          dayMinutesAllocated += minutes;

          let actualTitle = this.sanitizeText(
            typeof t.title === 'string' || typeof t.title === 'number' ? String(t.title) : 'Dars',
          );
          let actualType = this.sanitizeText(
            typeof t.type === 'string' || typeof t.type === 'number' ? String(t.type) : 'lesson',
          );
          let actualContentId =
            t.contentId != null && t.contentId !== ''
              ? this.sanitizeText(String(t.contentId))
              : undefined;
          let rawRoute =
            typeof t.route === 'string' && t.route.trim()
              ? t.route.trim()
              : goal.language === 'ja'
                ? '/jlpt'
                : '/ielts';

          // AI-provided skill, narrowed to MasterySkill when it matches the union
          const hasKnownSkill =
            typeof t.skill === 'string' && (MASTERY_SKILLS as readonly string[]).includes(t.skill);
          const taskSkill = hasKnownSkill ? (t.skill as MasterySkill) : undefined;

          // Completed Lesson Deduplication Check (Hard Guard)
          if (
            actualType === 'lesson' &&
            actualContentId &&
            completedLessonIds.includes(actualContentId)
          ) {
            // Find a replacement lesson at the same level and language
            const course = CurriculumService.getCourse(goal.language);
            const cleanCurrent = (goal.currentLevel || '').trim().toUpperCase();
            let targetLevelCode =
              cleanCurrent === 'ZERO' ? (goal.language === 'ja' ? 'N5' : 'A1') : cleanCurrent;

            let replacementNode: CurriculumLessonNode | null = null;
            for (const lvl of course.levels ?? []) {
              if (lvl.code.toUpperCase() !== targetLevelCode) continue;
              for (const u of lvl.units ?? []) {
                for (const l of u.lessons ?? []) {
                  if (
                    l.isContentAvailable &&
                    !completedLessonIds.includes(l.id) &&
                    l.id !== actualContentId
                  ) {
                    replacementNode = l;
                  }
                }
              }
            }

            if (replacementNode) {
              actualContentId = replacementNode.id;
              actualTitle = replacementNode.title;
              rawRoute = replacementNode.route || (goal.language === 'ja' ? '/jlpt' : '/ielts');
            } else {
              // Exhausted level: Fallback to review
              actualType = 'review';
              actualTitle = `${actualTitle} (Takrorlash)`;
            }
          }

          // Route Sanitation & Language isolation check
          let resolvedRoute = rawRoute;
          let sourceType: TaskSourceType = 'ai_generated';

          if (actualContentId) {
            try {
              const resolved = CurriculumLessonResolver.resolveLesson(
                actualContentId,
                goal.language,
              );
              if (resolved && resolved.isAvailable) {
                resolvedRoute = resolved.route;
                sourceType = resolved.sourceType === 'lesson_player' ? 'lesson' : 'curriculum';
              }
            } catch {
              // Resolver failed, fallback to raw or general route
            }
          }

          // Enforce language isolations & Smart Level Routing
          if (goal.language === 'ja') {
            if (
              resolvedRoute.includes('ielts') ||
              resolvedRoute.includes('/lesson/en-') ||
              actualTitle.toLowerCase().includes('ielts') ||
              actualTitle.toLowerCase().includes('english')
            ) {
              resolvedRoute = '/jlpt';
              sourceType = 'curriculum';
            }

            // Smart Level Routing for Japanese skills
            const effectiveSkill = taskSkill || actualType;
            if (effectiveSkill === 'reading' && !resolvedRoute.includes('tab=reading')) {
              resolvedRoute = `/jlpt?tab=reading&level=${targetLvl}`;
            } else if (effectiveSkill === 'listening' && !resolvedRoute.includes('tab=listening')) {
              resolvedRoute = `/jlpt?tab=listening&level=${targetLvl}`;
            } else if (
              (effectiveSkill === 'kanji' || (effectiveSkill === 'grammar' && !actualContentId)) &&
              !resolvedRoute.includes('tab=kanji')
            ) {
              resolvedRoute = `/jlpt?tab=kanji&level=${targetLvl}`;
            } else if (actualType === 'mock_test' && !resolvedRoute.includes('tab=mock')) {
              resolvedRoute = `/jlpt?tab=mock&level=${targetLvl}`;
            } else if (
              effectiveSkill === 'speaking' &&
              (resolvedRoute === '/jlpt' || !resolvedRoute.includes('speaking-coach'))
            ) {
              resolvedRoute = '/speaking-coach?lang=ja';
            } else if (
              (actualType === 'srs' || effectiveSkill === 'vocabulary') &&
              resolvedRoute.startsWith('/study-mode') &&
              !resolvedRoute.includes('lang=')
            ) {
              resolvedRoute = '/study-mode?lang=ja';
            }
          } else {
            if (
              resolvedRoute.includes('jlpt') ||
              resolvedRoute.includes('/lesson/ja-') ||
              actualTitle.toLowerCase().includes('jlpt') ||
              actualTitle.toLowerCase().includes('kanji') ||
              actualTitle.toLowerCase().includes('japanese')
            ) {
              resolvedRoute = '/ielts';
              sourceType = 'curriculum';
            }

            // Smart Level Routing for English / IELTS skills
            const effectiveSkill = taskSkill || actualType;
            if (
              (effectiveSkill === 'reading' || effectiveSkill === 'listening') &&
              !resolvedRoute.includes('tab=reading_listening')
            ) {
              resolvedRoute = '/ielts?tab=reading_listening';
            } else if (effectiveSkill === 'writing' && !resolvedRoute.includes('tab=writing')) {
              resolvedRoute = '/ielts?tab=writing';
            } else if (
              effectiveSkill === 'speaking' &&
              (resolvedRoute === '/ielts' || !resolvedRoute.includes('speaking'))
            ) {
              resolvedRoute = '/ielts/speaking-mock';
            } else if (effectiveSkill === 'vocabulary') {
              if (actualContentId && actualContentId.startsWith('deck_oxford_3000')) {
                const match = actualContentId.match(/(deck_oxford_3000_[ab][12])(?:_part_(\d+))?/i);
                const deckId = match ? match[1].toLowerCase() : actualContentId;
                const part = match && match[2] ? match[2] : '1';
                resolvedRoute = `/study-mode?deck=${deckId}&part=${part}`;
              } else if (resolvedRoute.startsWith('/study-mode')) {
                // Preserve direct study mode routes (e.g. preset deck parameters)
              } else if (!resolvedRoute.startsWith('/vocabulary')) {
                resolvedRoute = '/vocabulary';
              }
            } else if (effectiveSkill === 'grammar') {
              if (actualContentId && actualContentId.startsWith('murphy_')) {
                resolvedRoute = `/ielts?tab=grammar&topic=${actualContentId}`;
              } else if (resolvedRoute.includes('topic=')) {
                if (!resolvedRoute.includes('tab=grammar')) {
                  resolvedRoute = resolvedRoute.replace('/ielts?', '/ielts?tab=grammar&');
                }
              } else if (!resolvedRoute.includes('tab=grammar') && resolvedRoute === '/ielts') {
                resolvedRoute = '/ielts?tab=grammar';
              }
            }
          }

          // Strict route verification mapping
          const validStartingRoutes = [
            '/lesson/',
            '/vocabulary',
            '/study-mode',
            '/speaking-coach',
            '/ielts',
            '/jlpt',
            '/scenarios',
          ];
          const hasValidRoute = validStartingRoutes.some((prefix) =>
            resolvedRoute.startsWith(prefix),
          );
          if (!hasValidRoute) {
            resolvedRoute =
              goal.language === 'ja' ? `/jlpt?tab=kanji&level=${targetLvl}` : '/ielts';
          }

          const deterministicTaskIdSeed = `${goal.id}:${weekNumber}:${dayName}:${taskIndex}:${actualContentId || actualTitle}:${actualType}`;

          validatedTasks.push({
            id: `task-${toDeterministicUUID(deterministicTaskIdSeed).slice(0, 12)}`,
            title: actualTitle,
            type: actualType,
            estimatedMinutes: minutes,
            completed: false,
            status: 'pending',
            sourceType,
            contentId: actualContentId,
            route: resolvedRoute,
            skill:
              (taskSkill ?? (MASTERY_SKILLS as readonly string[]).includes(actualType))
                ? (actualType as MasterySkill)
                : undefined,
          });
        }

        // If tasks are empty, append a default lesson to keep plan intact
        if (validatedTasks.length === 0) {
          const fallbackRoute = goal.language === 'ja' ? '/jlpt' : '/ielts';
          validatedTasks.push({
            id: `task-fallback-${toDeterministicUUID(`${goal.id}:${weekNumber}:${dayName}:fallback`).slice(0, 12)}`,
            title:
              goal.language === 'ja' ? 'Kundalik dars va takrorlash' : 'Daily practice and review',
            type: 'lesson',
            estimatedMinutes: dailyMinutesBudget,
            completed: false,
            status: 'pending',
            sourceType: 'curriculum',
            route: fallbackRoute,
          });
        }

        return {
          day: dayName as WeeklyPlanDay['day'],
          tasks: validatedTasks,
        };
      });

      // Deterministic debt carry-over from previous week (incomplete lesson tasks only)
      const previousWeekPlans = PersonalLearningPlanService.getWeeklyPlans(userId)
        .filter(
          (p) =>
            p.weekNumber === weekNumber - 1 &&
            (p.goalId === goal.id ||
              toDeterministicUUID(p.goalId) === toDeterministicUUID(goal.id)),
        )
        .sort((a, b) => b.version - a.version);

      const previousWeekPlan = previousWeekPlans[0];
      if (previousWeekPlan) {
        const existingContentIds = new Set(
          validatedDays.flatMap((d) => d.tasks.map((t) => t.contentId).filter(Boolean)),
        );

        const debtLessonTasks = previousWeekPlan.days
          .flatMap((d) => d.tasks)
          .filter(
            (t) =>
              t.type === 'lesson' &&
              !!t.contentId &&
              !(t.completed || t.status === 'completed') &&
              !existingContentIds.has(t.contentId),
          );

        const seen = new Set<string>();
        const uniqueDebt = debtLessonTasks.filter((t) => {
          const key = String(t.contentId);
          if (seen.has(key)) return false;
          seen.add(key);
          return true;
        });

        // Keep carry-over bounded so a heavy backlog doesn't overwrite the full weekly structure.
        const maxCarryOver = Math.min(3, uniqueDebt.length);

        for (let i = 0; i < maxCarryOver; i++) {
          const debt = uniqueDebt[i];
          const targetDayIdx = i % validatedDays.length;
          const targetDay = validatedDays[targetDayIdx];

          let debtMinutes = Number(debt.estimatedMinutes || 15);
          if (!Number.isFinite(debtMinutes) || debtMinutes < 5) debtMinutes = 10;
          if (debtMinutes > 60) debtMinutes = 60;
          if (debtMinutes > dailyMinutesBudget) debtMinutes = dailyMinutesBudget;

          const dayTotal = () =>
            targetDay.tasks.reduce((sum, t) => sum + (t.estimatedMinutes || 0), 0);
          while (targetDay.tasks.length > 0 && dayTotal() + debtMinutes > dailyMinutesBudget) {
            targetDay.tasks.pop();
          }

          if (dayTotal() + debtMinutes <= dailyMinutesBudget) {
            targetDay.tasks.unshift({
              id: `task-debt-${toDeterministicUUID(`${goal.id}:${weekNumber}:${targetDay.day}:${debt.contentId}:${i}`).slice(0, 12)}`,
              title: `${debt.title} (Qarzdan carry-over)`,
              type: 'lesson',
              estimatedMinutes: debtMinutes,
              completed: false,
              status: 'pending',
              sourceType: 'lesson',
              contentId: debt.contentId,
              route: debt.route || (goal.language === 'ja' ? '/jlpt' : '/ielts'),
              skill: debt.skill,
              metadata: {
                carryOverFromWeek: weekNumber - 1,
                originalTaskId: debt.id,
              },
            });
          }
        }
      }

      // Get existing plans to determine version history
      const existingPlans = PersonalLearningPlanService.getWeeklyPlans(userId);
      const matchingWeekPlans = existingPlans.filter(
        (p) => p.goalId === goal.id && p.weekNumber === weekNumber,
      );
      const nextVersion =
        matchingWeekPlans.length > 0 ? Math.max(...matchingWeekPlans.map((p) => p.version)) + 1 : 1;

      const reasoning = this.sanitizeText(raw.reasoning || 'Reja tayyorlandi.');
      const expectedOutcome = this.sanitizeText(raw.expectedOutcome || 'Yaxshi natija.');

      const today = new Date();
      const startDay = new Date(today.getTime() + 1 * 86400000); // starts tomorrow
      const endDay = new Date(startDay.getTime() + 6 * 86400000);

      return {
        id: generateUUID(),
        goalId: goal.id,
        userId,
        weekNumber,
        startDate: startDay.toISOString().split('T')[0],
        endDate: endDay.toISOString().split('T')[0],
        objectives,
        focusSkills,
        days: validatedDays,
        reasoning,
        expectedOutcome,
        aiGenerated: true,
        version: nextVersion,
        status: 'active',
        createdAt: new Date().toISOString(),
      };
    } catch (err) {
      console.warn('[PersonalLearningPlanEngine] Validation parse failed:', err);
      return null;
    }
  },

  /**
   * Deterministic Pedagogical Plan Generator
   * Generates an authentic, syllabus-calibrated 7-day plan when AI is slow or unavailable.
   */
  generatePedagogicalPlan(
    userId: string,
    goal: PersonalLearningGoal,
    weekNumber: number,
  ): PlanGenerationResult {
    const isJa = goal.language === 'ja';
    const dailyMinutes = Math.min(Math.max(goal.dailyMinutes || 60, 15), 180);
    const cleanCurrent = (goal.currentLevel || (isJa ? 'N5' : 'A1')).toUpperCase();
    const cleanTarget = (goal.targetLevel || (isJa ? 'N1' : '7.5')).toUpperCase();

    // Determine tasks budget per day
    const taskCount = dailyMinutes < 30 ? 2 : dailyMinutes < 60 ? 2 : 3;
    const minutesPerTask = Math.floor(dailyMinutes / taskCount);

    let grammarLessons: Array<{ title: string; route: string; contentId?: string }> = [];
    let vocabLessons: Array<{ title: string; route: string; contentId?: string }> = [];
    let skillLessons: Array<{ title: string; route: string; skill: MasterySkill }> = [];

    if (!isJa) {
      const cefr = mapIeltsBandToCefr(goal.currentLevel);
      const levelConfig = getCurriculumConfigForBand(goal.currentLevel);

      const relevantUnits = IELTS_GRAMMAR_DATABASE.filter((t) => {
        if (cefr === 'A1') return t.level.includes('A1');
        if (cefr === 'A2') return t.level.includes('A2') || t.level === 'A1-A2';
        if (cefr === 'B1') return t.level.includes('B1') || t.level === 'B1-B2';
        if (cefr === 'B2') return t.level.includes('B2') || t.level === 'B1-B2';
        return t.level.includes('C1') || t.level.includes('B2');
      });
      const selectedUnits = relevantUnits.length > 0 ? relevantUnits : IELTS_GRAMMAR_DATABASE;

      grammarLessons = selectedUnits.slice(0, 10).map((u) => ({
        title: `${u.title}: Qoidalar va interaktiv mashqlar`,
        route: `/ielts?tab=grammar&unit=${u.id}`,
        contentId: u.id,
      }));

      const oxfordDeckId = levelConfig.oxfordDeckId;
      const deckTitle = levelConfig.oxfordDeckTitle;
      for (let p = 1; p <= 7; p++) {
        vocabLessons.push({
          title: `${deckTitle} — ${p}-Qism yangi so'zlar`,
          route: `/study-mode?deck=${oxfordDeckId}&part=${p}`,
          contentId: `${oxfordDeckId}_part_${p}`,
        });
      }

      skillLessons = [
        {
          title: 'Speaking Coach: Part 1 tezkor savollar va ravon talaffuz',
          route: '/speaking-coach?lang=en',
          skill: 'speaking',
        },
        {
          title: 'Writing Task 1: Diagramma va grafik trendlarini tasvirlash',
          route: '/ielts?tab=writing',
          skill: 'writing',
        },
        {
          title: 'Reading: Skimming & Scanning strategiyasi bilan matn tahlili',
          route: '/ielts?tab=reading_listening',
          skill: 'reading',
        },
        {
          title: "Listening: Bo'lim 1 & 2 dialoglar va audio test",
          route: '/ielts?tab=reading_listening',
          skill: 'listening',
        },
        {
          title: "Speaking Coach: Part 2 Cue Card bo'yicha 2 daqiqalik nutq",
          route: '/speaking-coach?lang=en',
          skill: 'speaking',
        },
        {
          title: 'Writing Task 2: Fikrni mantiqiy asoslash va insho strukturasi',
          route: '/ielts?tab=writing',
          skill: 'writing',
        },
        {
          title: 'IELTS Mock Simulyatsiyasi: Xatolar ustida intensiv ishlash',
          route: '/ielts/speaking-mock',
          skill: 'reading',
        },
      ];
    } else {
      grammarLessons = [
        {
          title: `${cleanCurrent} Grammatika: Asosiy bog'lamalar va gap qurilishi`,
          route: `/jlpt?tab=kanji&level=${cleanCurrent}`,
        },
        {
          title: `${cleanCurrent} Bunpou: O'rta darajadagi sintaktik qoliplar`,
          route: `/jlpt?tab=kanji&level=${cleanCurrent}`,
        },
        {
          title: `${cleanCurrent} Grammatik mashqlar va testlar`,
          route: `/jlpt?tab=kanji&level=${cleanCurrent}`,
        },
      ];
      vocabLessons = [
        {
          title: `${cleanCurrent} Kanji & So'z boyligi takrori`,
          route: `/jlpt?tab=kanji&level=${cleanCurrent}`,
        },
        {
          title: 'Fleshkartalar: Kunlik oraliq takrorlash (SRS)',
          route: '/study-mode?lang=ja',
        },
      ];
      skillLessons = [
        {
          title: "Speaking Coach: Kundalik dialog va so'zlashuv amaliyoti",
          route: '/speaking-coach?lang=ja',
          skill: 'speaking',
        },
        {
          title: 'Choukai (Listening): Audio dialoglarni tinglab tushunish',
          route: `/jlpt?tab=listening&level=${cleanCurrent}`,
          skill: 'listening',
        },
        {
          title: 'Dokkai (Reading): Qisqa matnlarni tahlil qilish',
          route: `/jlpt?tab=reading&level=${cleanCurrent}`,
          skill: 'reading',
        },
      ];
    }

    const daysOfWeek = [
      'monday',
      'tuesday',
      'wednesday',
      'thursday',
      'friday',
      'saturday',
      'sunday',
    ] as const;

    const validatedDays: WeeklyPlanDay[] = daysOfWeek.map((dayName, dayIdx) => {
      const dayTasks: WeeklyPlanTask[] = [];

      // Task 1: Grammar lesson
      const gItem = grammarLessons[dayIdx % grammarLessons.length];
      dayTasks.push({
        id: `ped-g-${toDeterministicUUID(`${goal.id}:${weekNumber}:${dayName}:g`).slice(0, 12)}`,
        title: gItem?.title || 'Grammatika darsi va mashqlar',
        type: 'grammar',
        skill: 'grammar',
        estimatedMinutes: minutesPerTask,
        completed: false,
        status: 'pending',
        sourceType: 'curriculum',
        route: gItem?.route || (isJa ? '/jlpt' : '/ielts?tab=grammar'),
        contentId: gItem?.contentId,
      });

      // Task 2: Core skill
      const sItem = skillLessons[dayIdx % skillLessons.length];
      dayTasks.push({
        id: `ped-s-${toDeterministicUUID(`${goal.id}:${weekNumber}:${dayName}:s`).slice(0, 12)}`,
        title: sItem.title,
        type: sItem.skill,
        skill: sItem.skill,
        estimatedMinutes: minutesPerTask,
        completed: false,
        status: 'pending',
        sourceType: 'curriculum',
        route: sItem.route,
      });

      // Task 3: Vocab / SRS if 3 tasks fit dailyMinutes budget
      if (taskCount >= 3) {
        const vItem = vocabLessons[dayIdx % vocabLessons.length];
        const remMinutes = Math.max(10, dailyMinutes - minutesPerTask * 2);
        dayTasks.push({
          id: `ped-v-${toDeterministicUUID(`${goal.id}:${weekNumber}:${dayName}:v`).slice(0, 12)}`,
          title: vItem?.title || "Lug'at va Fleshkartalar (SRS takrorlash)",
          type: 'vocabulary',
          skill: 'vocabulary',
          estimatedMinutes: remMinutes,
          completed: false,
          status: 'pending',
          sourceType: 'srs',
          route: vItem?.route || '/study-mode',
          contentId: vItem?.contentId,
        });
      }

      return {
        day: dayName,
        tasks: dayTasks,
      };
    });

    const today = new Date();
    const startDay = new Date(today.getTime() + 1 * 86400000);
    const endDay = new Date(startDay.getTime() + 6 * 86400000);

    const existingPlans = PersonalLearningPlanService.getWeeklyPlans(userId);
    const matchingWeekPlans = existingPlans.filter(
      (p) => p.goalId === goal.id && p.weekNumber === weekNumber,
    );
    const nextVersion =
      matchingWeekPlans.length > 0 ? Math.max(...matchingWeekPlans.map((p) => p.version)) + 1 : 1;

    const plan: WeeklyLearningPlan = {
      id: generateUUID(),
      goalId: goal.id,
      userId,
      weekNumber,
      startDate: startDay.toISOString().split('T')[0],
      endDate: endDay.toISOString().split('T')[0],
      objectives: isJa
        ? [
            `${cleanCurrent} dan ${cleanTarget} darajaga o'tish uchun grammatik poydevor yaratish`,
            "Kundalik so'zlashuv va tinglab tushunish amaliyotini oshirish",
          ]
        : [
            `${goal.currentLevel} dan ${goal.targetLevel} darajaga o'tish uchun grammatika va leksikani kuchaytirish`,
            "IELTS Speaking va Writing bo'yicha barqaror amaliyot olib borish",
          ],
      focusSkills: ['grammar', 'vocabulary', 'speaking'],
      days: validatedDays,
      reasoning: "Pedagogik o'quv dasturi asosida tuzilgan adaptiv dars jadvali.",
      expectedOutcome:
        "Hafta davomida asosiy grammatik mavzular, leksika va amaliy ko'nikmalar to'liq mustahkamlanadi.",
      aiGenerated: false,
      version: nextVersion,
      status: 'active',
      createdAt: new Date().toISOString(),
    };

    return {
      plan,
      isFallback: true,
      noticeMessage:
        "O'quv rejangiz pedagogik dastur asosida muvaffaqiyatli shakllantirildi. Istalgan vaqtda AI yordamida qayta yangilashingiz mumkin.",
    };
  },
};
export default PersonalLearningPlanEngine;
