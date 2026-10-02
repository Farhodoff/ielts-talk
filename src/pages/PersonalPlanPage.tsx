import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Loader2 } from 'lucide-react';
import { useStudyData } from '../context/StudyPlannerContext';
import { useLanguage } from '../context/LanguageContext';
import { toast } from '../hooks/use-toast';
import {
  PersonalLearningPlanService,
  FeasibilityResult,
} from '../services/PersonalLearningPlanService';
import {
  PersonalLearningPlanEngine,
  isPlanGenerationLockError,
  type PlanGenerationResult,
} from '../services/PersonalLearningPlanEngine';
import { WeeklyEvaluationEngine } from '../services/WeeklyEvaluationEngine';
import { LearningProgressionService } from '../services/LearningProgressionService';
import { LearningSignalService } from '../services/LearningSignalService';
import { MasteryEngine } from '../services/MasteryEngine';
import { DiagnosticService } from '../services/DiagnosticService';
import { PersonalLearningGoal, WeeklyLearningPlan, WeeklyEvaluation } from '../types/learningPlan';
import { generateUUID } from '../utils/uuid';
import { generatePersonalMilestones } from '../utils/roadmapMilestones';
import { telegramService } from '../services/TelegramService';
import { PlanGoalWizard } from '../components/plan/PlanGoalWizard';
import { PlanGoalSummaryCard } from '../components/plan/PlanGoalSummaryCard';
import { PlanEvaluationsList } from '../components/plan/PlanEvaluationsList';
import { PlanWeeklySchedule } from '../components/plan/PlanWeeklySchedule';

/**
 * Generates a weekly plan, degrading to the deterministic pedagogical planner ONLY
 * when the AI itself failed.
 */
const generatePlanWithFallback = async (
  userId: string,
  goal: PersonalLearningGoal,
  weekNumber: number,
): Promise<PlanGenerationResult | null> => {
  try {
    return await PersonalLearningPlanEngine.generateWeeklyPlan(userId, goal, weekNumber);
  } catch (aiErr: any) {
    if (isPlanGenerationLockError(aiErr)) {
      console.warn('[PersonalPlanPage] Plan generation already in progress; skipping fallback.');
      return null;
    }
    console.warn(
      '[PersonalPlanPage] AI plan generation failed, activating pedagogical planner:',
      aiErr?.message,
    );
    return PersonalLearningPlanEngine.generatePedagogicalPlan(userId, goal, weekNumber);
  }
};

export const PersonalPlanPage: React.FC = () => {
  const { user, awardXP } = useStudyData();
  const { language } = useLanguage();
  const isUz = language !== 'en';
  const navigate = useNavigate();

  // Wizard States
  const selectedLang = 'en';
  const [selectedGoalType, setSelectedGoalType] = useState<'ielts' | 'general_en'>('ielts');
  const [targetLevel, setTargetLevel] = useState<string>('7.0');
  const [currentLevel, setCurrentLevel] = useState<string>('5.5');
  const [deadlineMonths, setDeadlineMonths] = useState<number>(6);
  const [dailyMinutes, setDailyMinutes] = useState<number>(60);

  const latestDiag = useMemo(() => {
    return DiagnosticService.getLatestDiagnosticResult(user?.id || 'guest', selectedLang);
  }, [user?.id, selectedLang]);

  // AI Generation progress states
  const [generationStep, setGenerationStep] = useState<string | null>(null);

  // Active plan states
  const [activeGoal, setActiveGoal] = useState<PersonalLearningGoal | null>(() => {
    const userId = user?.id || 'guest';
    return PersonalLearningPlanService.getActiveGoal(userId);
  });
  const [currentPlan, setCurrentPlan] = useState<WeeklyLearningPlan | null>(() => {
    const userId = user?.id || 'guest';
    const goal = PersonalLearningPlanService.getActiveGoal(userId);
    return goal ? PersonalLearningPlanService.getLatestWeeklyPlan(userId, goal.id) : null;
  });
  const [weeklyEvals, setWeeklyEvals] = useState<WeeklyEvaluation[]>(() => {
    const userId = user?.id || 'guest';
    return PersonalLearningPlanService.getWeeklyEvaluations(userId);
  });
  const [evaluating, setEvaluating] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [regenerating, setRegenerating] = useState<boolean>(false);
  const [generatingPlan, setGeneratingPlan] = useState<boolean>(false);

  // Initial load & background sync with server
  useEffect(() => {
    let isMounted = true;
    const loadPlanData = async () => {
      const userId = user?.id || 'guest';
      try {
        const goalPromise = PersonalLearningPlanService.fetchActiveGoalFromServer(userId);
        const timeoutPromise = new Promise<null>((resolve) =>
          setTimeout(() => resolve(null), 3000),
        );
        const goal =
          (await Promise.race([goalPromise, timeoutPromise])) ||
          PersonalLearningPlanService.getActiveGoal(userId);

        if (!isMounted) return;

        if (goal) {
          setActiveGoal(goal);

          await Promise.allSettled([
            PersonalLearningPlanService.fetchWeeklyPlansFromServer(userId),
            PersonalLearningPlanService.fetchWeeklyEvaluationsFromServer(userId),
          ]);
          if (!isMounted) return;

          let plan = PersonalLearningPlanService.getLatestWeeklyPlan(userId, goal.id);
          if (!plan) {
            const genResult = await generatePlanWithFallback(userId, goal, goal.currentWeek || 1);
            if (genResult) {
              plan = genResult.plan;
              try {
                await PersonalLearningPlanService.saveWeeklyPlan(plan);
              } catch (saveErr) {
                console.warn('[PersonalPlanPage] Plan save notice (kept in local cache):', saveErr);
              }
            }
          }
          if (plan && isMounted) setCurrentPlan(plan);
          if (isMounted) setWeeklyEvals(PersonalLearningPlanService.getWeeklyEvaluations(userId));
        } else {
          const localCached = PersonalLearningPlanService.getActiveGoal(userId);
          if (localCached) {
            setActiveGoal(localCached);
            let plan = PersonalLearningPlanService.getLatestWeeklyPlan(userId, localCached.id);
            if (!plan) {
              const genResult = await generatePlanWithFallback(
                userId,
                localCached,
                localCached.currentWeek || 1,
              );
              if (genResult) {
                plan = genResult.plan;
                try {
                  await PersonalLearningPlanService.saveWeeklyPlan(plan);
                } catch (saveErr) {
                  console.warn(
                    '[PersonalPlanPage] Plan save notice (kept in local cache):',
                    saveErr,
                  );
                }
              }
            }
            if (plan && isMounted) setCurrentPlan(plan);
            if (isMounted) setWeeklyEvals(PersonalLearningPlanService.getWeeklyEvaluations(userId));
          } else {
            setActiveGoal(null);
            setCurrentPlan(null);
            setWeeklyEvals([]);
          }
        }
      } catch (err) {
        console.error('[PersonalPlanPage] Error loading plan data:', err);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    loadPlanData();

    const confirmedLevel = LearningProgressionService.getCurrentLevel(
      user?.id || 'guest',
      selectedLang,
    );
    setCurrentLevel(confirmedLevel);

    return () => {
      isMounted = false;
    };
  }, [user?.id, selectedLang]);

  // Available target options
  const targetsList = useMemo(() => {
    if (selectedGoalType === 'ielts') {
      return ['5.5', '6.0', '6.5', '7.0', '7.5', '8.0', '8.5+'];
    }
    return ['B1', 'B2', 'C1', 'C2'];
  }, [selectedGoalType]);

  // Available current level options
  const currentLevelsList = useMemo(() => {
    if (selectedGoalType === 'ielts') {
      return ['ZERO', '4.0', '4.5', '5.0', '5.5', '6.0', '6.5', '7.0'];
    }
    return ['ZERO', 'A1', 'A2', 'B1', 'B2', 'C1'];
  }, [selectedGoalType]);

  // Calculate Feasibility
  const feasibility: FeasibilityResult = useMemo(() => {
    const days = deadlineMonths * 30;
    return PersonalLearningPlanService.checkFeasibility(
      selectedLang,
      selectedGoalType,
      currentLevel,
      targetLevel,
      days,
      dailyMinutes,
    );
  }, [selectedLang, selectedGoalType, currentLevel, targetLevel, deadlineMonths, dailyMinutes]);

  // High level Milestone roadmaps
  const roadmapMilestones = useMemo(() => {
    return generatePersonalMilestones(
      selectedLang,
      selectedGoalType,
      currentLevel,
      targetLevel,
      deadlineMonths,
      isUz,
    );
  }, [selectedLang, selectedGoalType, currentLevel, targetLevel, deadlineMonths, isUz]);

  // Start plan generation wizard
  const handleInitializePlan = async () => {
    if (
      !PersonalLearningPlanService.isTargetLevelValid(currentLevel, targetLevel, selectedGoalType)
    ) {
      toast({
        variant: 'destructive',
        title: isUz ? 'Xatolik' : 'Error',
        description: isUz
          ? "Maqsadli daraja joriy darajadan yuqori bo'lishi shart!"
          : 'Target level must be higher than current level!',
      });
      return;
    }

    setGenerationStep('initializing');
    const userId = user?.id || 'guest';
    const totalWeeks = deadlineMonths * 4;

    const newGoal: PersonalLearningGoal = {
      id: generateUUID(),
      userId,
      language: selectedLang,
      goalType: selectedGoalType,
      currentLevel,
      targetGoal:
        selectedGoalType === 'ielts' ? `IELTS Band ${targetLevel}` : `English ${targetLevel}`,
      targetLevel,
      deadline: new Date(Date.now() + deadlineMonths * 30 * 24 * 60 * 60 * 1000).toISOString(),
      dailyMinutes,
      totalWeeks,
      currentWeek: 1,
      status: 'active',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    try {
      setGenerationStep('analyzing');
      await new Promise((r) => setTimeout(r, 800));
      setGenerationStep('selecting');
      await new Promise((r) => setTimeout(r, 800));
      setGenerationStep('generating');

      const result = await generatePlanWithFallback(userId, newGoal, 1);

      if (!result) {
        setGenerationStep(null);
        toast({
          title: isUz ? 'Kuting' : 'Please wait',
          description: isUz
            ? "Reja generatsiyasi allaqachon davom etmoqda. Iltimos bir oz kutib, qayta urinib ko'ring."
            : 'A plan generation is already in progress. Please wait a moment and try again.',
        });
        return;
      }

      setActiveGoal(newGoal);
      setCurrentPlan(result.plan);
      setGenerationStep(null);

      try {
        await PersonalLearningPlanService.saveGoal(userId, newGoal);
        await PersonalLearningPlanService.saveWeeklyPlan(result.plan);
      } catch (saveErr) {
        console.warn('[PersonalPlanPage] Remote save notice (saved to local cache):', saveErr);
      }

      if (userId && userId !== 'guest') {
        telegramService.sendPlanCreatedNotification(userId, newGoal, result.plan).catch((e) => {
          console.warn('[PersonalPlanPage] Telegram notification notice:', e);
        });
      }

      if (result.isFallback) {
        toast({
          title: isUz ? 'Pedagogik Reja Tuzildi' : 'Pedagogical Plan Ready',
          description:
            result.noticeMessage ||
            (isUz
              ? "O'quv rejangiz pedagogik dastur asosida muvaffaqiyatli shakllantirildi. AI orqali istalgan payt yangilashingiz mumkin."
              : 'Study plan generated based on pedagogical curriculum. You can regenerate with AI anytime.'),
        });
      } else if (result.noticeMessage) {
        toast({
          title: isUz ? 'Reja tayyor' : 'Plan Ready',
          description: result.noticeMessage,
        });
      } else {
        toast({
          title: isUz ? 'Reja tayyor' : 'Plan Ready',
          description: isUz
            ? 'Haftalik rejangiz muvaffaqiyatli yaratildi!'
            : 'Your weekly study plan has been successfully created!',
        });
      }
    } catch (err: any) {
      console.error(err);
      setGenerationStep(null);
      toast({
        variant: 'destructive',
        title: isUz ? 'Xatolik' : 'Error',
        description: err.message || 'Plan yaratishda muammo yuz berdi.',
      });
    }
  };

  // Checkbox checklist toggle logic
  const handleToggleTask = async (dayName: string, taskId: string) => {
    if (!currentPlan) return;

    const updatedDays = currentPlan.days.map((day) => {
      if (day.day === dayName) {
        return {
          ...day,
          tasks: day.tasks.map((t) => {
            if (t.id === taskId) {
              const nextCompleted = !t.completed;
              const nextStatus: any = nextCompleted ? 'completed' : 'pending';

              const userId = user?.id || 'guest';
              if (nextCompleted) {
                if (awardXP) {
                  awardXP(25).catch(() => {});
                }
                toast({
                  title: isUz ? 'Topshiriq bajarildi! +25 XP' : 'Task completed! +25 XP',
                  description: t.title,
                });

                MasteryEngine.recordEvidence(userId, activeGoal?.language || selectedLang, {
                  id: `plan_task_${taskId}_${Date.now()}`,
                  skill: t.skill || 'grammar',
                  score: 100,
                  timestamp: new Date().toISOString(),
                  details: `Completed Personal Plan task: ${t.title}`,
                  type: 'completion',
                });

                LearningSignalService.recordSignal({
                  id: `sig_task_${taskId}_${Date.now()}`,
                  type: 'completed_lesson',
                  language: activeGoal?.language || selectedLang,
                  userId,
                  timestamp: new Date().toISOString(),
                  lessonId: t.contentId || 'custom_plan_task',
                  level: activeGoal?.currentLevel || 'A1',
                  score: 1,
                  total: 1,
                  percentage: 100,
                  newCardsCreated: 0,
                  mistakesCount: 0,
                }).catch(() => {});
              }

              return { ...t, completed: nextCompleted, status: nextStatus };
            }
            return t;
          }),
        };
      }
      return day;
    });

    const updatedPlan: WeeklyLearningPlan = {
      ...currentPlan,
      days: updatedDays,
    };

    setCurrentPlan(updatedPlan);
    await PersonalLearningPlanService.saveWeeklyPlan(updatedPlan);
  };

  // On-demand plan regeneration with AI
  const handleRegenerateCurrentWeek = async () => {
    if (!activeGoal || !currentPlan) return;
    const confirmed = window.confirm(
      isUz
        ? "Joriy haftalik o'quv rejasini AI orqali qayta shakllantirishni xohlaysizmi?"
        : "Do you want to regenerate this week's study plan with AI?",
    );
    if (!confirmed) return;

    setRegenerating(true);
    try {
      const userId = user?.id || 'guest';
      const result = await PersonalLearningPlanEngine.generateWeeklyPlan(
        userId,
        activeGoal,
        currentPlan.weekNumber,
      );
      await PersonalLearningPlanService.saveWeeklyPlan(result.plan);
      setCurrentPlan(result.plan);
      toast({
        title: isUz ? 'Reja yangilandi' : 'Plan Regenerated',
        description: isUz
          ? "Joriy hafta uchun yangi moslashtirilgan o'quv rejasi tuzildi."
          : 'A new adaptive weekly plan has been generated.',
      });
    } catch (err: any) {
      toast({
        variant: 'destructive',
        title: isUz ? 'Xatolik' : 'Error',
        description: err.message || 'Qayta rejalashtirishda xatolik yuz berdi.',
      });
    } finally {
      setRegenerating(false);
    }
  };

  // End week evaluation triggers next week adaptation
  const handleEvaluateWeek = async () => {
    if (!activeGoal || !currentPlan) return;
    setEvaluating(true);
    try {
      const userId = user?.id || 'guest';
      const evaluation = await WeeklyEvaluationEngine.evaluateWeek(userId, activeGoal, currentPlan);

      const nextWeek = currentPlan.weekNumber + 1;
      const updatedGoal = PersonalLearningPlanService.getActiveGoal(userId);

      if (updatedGoal && updatedGoal.status === 'active') {
        const nextPlanResult = await PersonalLearningPlanEngine.generateWeeklyPlan(
          userId,
          updatedGoal,
          nextWeek,
          evaluation,
        );
        await PersonalLearningPlanService.saveWeeklyPlan(nextPlanResult.plan);
        setCurrentPlan(nextPlanResult.plan);
      }

      setWeeklyEvals(PersonalLearningPlanService.getWeeklyEvaluations(userId));
      setEvaluating(false);
      toast({
        title: 'Hafta Yakunlandi',
        description: 'Haftalik natijalar tahlil qilindi va keyingi hafta adaptatsiya qilindi!',
      });
    } catch (e: any) {
      console.error(e);
      setEvaluating(false);
      toast({
        variant: 'destructive',
        title: 'Xatolik',
        description: e.message || 'Baholashda muammo yuz berdi.',
      });
    }
  };

  // Generate week plan for active goal without plan
  const handleGenerateWeekPlan = async () => {
    if (!activeGoal) return;
    setGeneratingPlan(true);
    const userId = user?.id || 'guest';
    try {
      const genResult = await generatePlanWithFallback(
        userId,
        activeGoal,
        activeGoal.currentWeek || 1,
      );
      if (!genResult) {
        toast({
          title: isUz ? 'Kuting' : 'Please wait',
          description: isUz
            ? 'Reja generatsiyasi allaqachon davom etmoqda. Iltimos bir oz kuting.'
            : 'A plan generation is already in progress. Please wait a moment.',
        });
        return;
      }
      await PersonalLearningPlanService.saveWeeklyPlan(genResult.plan);
      setCurrentPlan(genResult.plan);
      toast({
        title: isUz ? 'Reja tayyor' : 'Plan Ready',
        description:
          genResult.noticeMessage ||
          (isUz ? 'Haftalik dars jadvali muvaffaqiyatli yaratildi!' : 'Weekly study plan created!'),
      });
    } catch (err: any) {
      toast({
        variant: 'destructive',
        title: isUz ? 'Xatolik' : 'Error',
        description: err.message || 'Reja generatsiyasida xatolik',
      });
    } finally {
      setGeneratingPlan(false);
    }
  };

  // Reset whole plan (restart wizard)
  const handleResetPlan = async () => {
    if (
      window.confirm(
        isUz
          ? "Haqiqatan ham rejangizni o'chirishni va boshidan boshlashni xohlaysizmi?"
          : 'Are you sure you want to delete this plan and start over?',
      )
    ) {
      const userId = user?.id || 'guest';
      try {
        await PersonalLearningPlanService.resetPlan(userId);
        setActiveGoal(null);
        setCurrentPlan(null);
        toast({
          title: 'Plan reset',
          description: isUz ? "Reja to'liq o'chirildi." : 'Plan has been successfully reset.',
        });
      } catch (err: any) {
        console.error(err);
        toast({
          variant: 'destructive',
          title: 'Xatolik',
          description: err.message || "Plan o'chirishda xatolik yuz berdi.",
        });
      }
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center space-y-4">
        <Loader2 className="h-10 w-10 animate-spin text-primary" />
        <p className="font-medium text-gray-500">
          {isUz ? 'Reja yuklanmoqda...' : 'Loading plan data...'}
        </p>
      </div>
    );
  }

  if (generationStep) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center space-y-6">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
        <div className="space-y-2 text-center">
          <h3 className="text-lg font-bold text-foreground">
            {generationStep === 'initializing' &&
              (isUz ? 'Tizim yuklanmoqda...' : 'Initializing planner...')}
            {generationStep === 'analyzing' &&
              (isUz
                ? "Zaif ko'nikmalaringiz tahlil qilinmoqda..."
                : 'Analyzing weaknesses and learning profile...')}
            {generationStep === 'selecting' &&
              (isUz
                ? 'Haftalik vazifalar saralanmoqda...'
                : 'Resolving matching curriculum items...')}
            {generationStep === 'generating' &&
              (isUz
                ? 'AI shaxsiy haftalik rejangizni tayyorlamoqda...'
                : 'Generating Week 1 personalized plan...')}
          </h3>
          <p className="text-sm text-muted-foreground">Bu bir necha soniya vaqt olishi mumkin.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl max-w-full space-y-6 overflow-x-hidden p-3.5 duration-200 animate-in fade-in sm:space-y-8 sm:p-4 md:p-8">
      {!activeGoal ? (
        <PlanGoalWizard
          isUz={isUz}
          latestDiag={latestDiag}
          currentLevel={currentLevel}
          setCurrentLevel={setCurrentLevel}
          targetLevel={targetLevel}
          setTargetLevel={setTargetLevel}
          selectedGoalType={selectedGoalType}
          setSelectedGoalType={setSelectedGoalType}
          deadlineMonths={deadlineMonths}
          setDeadlineMonths={setDeadlineMonths}
          dailyMinutes={dailyMinutes}
          setDailyMinutes={setDailyMinutes}
          targetsList={targetsList}
          currentLevelsList={currentLevelsList}
          feasibility={feasibility}
          roadmapMilestones={roadmapMilestones}
          onInitializePlan={handleInitializePlan}
          onNavigateToDiag={() => navigate('/diagnostic')}
        />
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-3">
          {/* LEFT PANEL: Goal Summary & Evaluations */}
          <div className="order-2 space-y-4 sm:space-y-6 lg:order-1 lg:col-span-1">
            <PlanGoalSummaryCard activeGoal={activeGoal} onResetPlan={handleResetPlan} />
            <PlanEvaluationsList weeklyEvals={weeklyEvals} />
          </div>

          {/* RIGHT PANEL: 7-day checklist and active week view */}
          <div className="order-1 space-y-4 sm:space-y-6 lg:order-2 lg:col-span-2">
            <PlanWeeklySchedule
              currentPlan={currentPlan}
              activeGoal={activeGoal}
              isUz={isUz}
              regenerating={regenerating}
              evaluating={evaluating}
              generatingPlan={generatingPlan}
              onToggleTask={handleToggleTask}
              onRegenerateCurrentWeek={handleRegenerateCurrentWeek}
              onEvaluateWeek={handleEvaluateWeek}
              onGenerateWeekPlan={handleGenerateWeekPlan}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default PersonalPlanPage;
