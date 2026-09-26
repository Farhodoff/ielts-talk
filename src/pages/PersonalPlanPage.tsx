import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Sparkles,
  Calendar,
  Clock,
  CheckCircle2,
  AlertTriangle,
  ChevronDown,
  ChevronUp,
  Loader2,
  Award,
  Play,
  RotateCcw,
} from 'lucide-react';
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

/**
 * Generates a weekly plan, degrading to the deterministic pedagogical planner ONLY
 * when the AI itself failed.
 *
 * A lock conflict means another generation for the same goal/week is already in
 * flight: substituting a different plan there would discard the real result and
 * defeat the engine's concurrency guard, so it is surfaced as `null` instead.
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

  // Wizard States - IELTS Academic & General English Track
  const [step, setStep] = useState<1 | 2 | 3>(1);
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
  const [expandedDay, setExpandedDay] = useState<string>('monday');
  const [evaluating, setEvaluating] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [regenerating, setRegenerating] = useState<boolean>(false);

  const totalWeeklyTasks = useMemo(() => {
    if (!currentPlan) return 0;
    return currentPlan.days.reduce((acc, d) => acc + d.tasks.length, 0);
  }, [currentPlan]);

  const completedWeeklyTasks = useMemo(() => {
    if (!currentPlan) return 0;
    return currentPlan.days.reduce((acc, d) => acc + d.tasks.filter((t) => t.completed).length, 0);
  }, [currentPlan]);

  const weeklyCompletionRate =
    totalWeeklyTasks > 0 ? Math.round((completedWeeklyTasks / totalWeeklyTasks) * 100) : 0;

  // Initial load & background sync with server
  useEffect(() => {
    let isMounted = true;
    const loadPlanData = async () => {
      const userId = user?.id || 'guest';
      try {
        // Fetch active goal (with localStorage migration check and 3s timeout)
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

          // Fetch plans & evaluations in parallel
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
          // Check local cache once more before resetting
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

      // Immediately activate plan in local state
      setActiveGoal(newGoal);
      setCurrentPlan(result.plan);
      setGenerationStep(null);

      // Persist locally and sync with server
      try {
        await PersonalLearningPlanService.saveGoal(userId, newGoal);
        await PersonalLearningPlanService.saveWeeklyPlan(result.plan);
      } catch (saveErr) {
        console.warn('[PersonalPlanPage] Remote save notice (saved to local cache):', saveErr);
      }

      // Automatically notify user via Telegram if linked
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
              // Dynamic signals and mastery registration
              if (nextCompleted) {
                // Award XP
                if (awardXP) {
                  awardXP(25).catch(() => {});
                }
                toast({
                  title: isUz ? 'Topshiriq bajarildi! +25 XP' : 'Task completed! +25 XP',
                  description: t.title,
                });

                // Record learning evidence
                MasteryEngine.recordEvidence(userId, activeGoal?.language || selectedLang, {
                  id: `plan_task_${taskId}_${Date.now()}`,
                  skill: t.skill || 'grammar',
                  score: 100,
                  timestamp: new Date().toISOString(),
                  details: `Completed Personal Plan task: ${t.title}`,
                  type: 'completion',
                });

                // Record signal
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

      // Prepare next week plan in background
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

  // Diagnostic navigator
  const handleNavigateToDiag = () => {
    navigate('/diagnostic');
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
        setStep(1);
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

  // Rendering initial loading spinner
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

  // Rendering loading indicator
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
      {/* WIZARD FLOW */}
      {!activeGoal ? (
        <div className="mx-auto max-w-3xl space-y-6 sm:space-y-8">
          <div className="rounded-2xl border border-border bg-card p-5 shadow-xl sm:rounded-3xl sm:p-6 md:p-8">
            <div className="mb-2 flex items-center gap-2">
              <Sparkles size={18} className="animate-pulse text-primary sm:h-5 sm:w-5" />
              <span className="text-xs font-black uppercase tracking-wider text-primary">
                AI-Powered Planning
              </span>
            </div>
            <h1 className="text-xl font-black tracking-tight text-foreground sm:text-2xl md:text-3xl">
              {isUz ? "Shaxsiy O'quv Rejangizni Yarating" : 'Create Your Personalized Study Plan'}
            </h1>
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground sm:text-sm">
              {isUz
                ? 'Darajangiz, maqsadlaringiz va deadlinelardan kelib chiqqan holda haftalik adaptiv reja tuzing.'
                : 'Construct an adaptive study track customized for your level, targets, deadlines, and schedule parameters.'}
            </p>
          </div>

          {/* STEP 1: Goal Selection */}
          {step === 1 && (
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-base font-bold text-foreground sm:text-lg">
                {isUz ? '1-Bosqich: IELTS Maqsadingizni tanlang' : 'Step 1: Choose Your IELTS Goal'}
              </h3>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
                <button
                  type="button"
                  onClick={() => {
                    setSelectedGoalType('ielts');
                    if (!['5.5', '6.0', '6.5', '7.0', '7.5', '8.0', '8.5+'].includes(targetLevel)) {
                      setTargetLevel('7.0');
                    }
                  }}
                  className={`cursor-pointer rounded-2xl border p-4 text-left transition-all sm:rounded-3xl sm:p-6 ${
                    selectedGoalType === 'ielts'
                      ? 'scale-[1.01] border-primary bg-primary/10 shadow-xs ring-2 ring-primary/30'
                      : 'border-border bg-card hover:border-primary/50'
                  }`}
                >
                  <div className="mb-1.5 flex items-center gap-2 sm:mb-2">
                    <span className="text-xl sm:text-2xl">🎯</span>
                    <h4 className="text-sm font-bold text-foreground sm:text-base">
                      IELTS Imtihoni
                    </h4>
                  </div>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    Band Score (5.5 – 8.5+) ko'rsatkichlariga yo'naltirilgan intensiv akademik va
                    umumiy imtihon rejasi.
                  </p>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedGoalType('general_en');
                    if (!['B1', 'B2', 'C1', 'C2'].includes(targetLevel)) {
                      setTargetLevel('B2');
                    }
                  }}
                  className={`rounded-3xl border p-6 text-left transition-all ${
                    selectedGoalType === 'general_en'
                      ? 'scale-[1.01] border-primary bg-primary/10 shadow-xs ring-2 ring-primary/30'
                      : 'border-border bg-card hover:border-primary/50'
                  }`}
                >
                  <div className="mb-2 flex items-center gap-2">
                    <span className="text-2xl">🇬🇧</span>
                    <h4 className="text-base font-bold text-foreground">
                      General & Academic English
                    </h4>
                  </div>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    CEFR (B1 – C2) muloqot, grammatika va akademik so'z boyligini tizimli oshirish.
                  </p>
                </button>
              </div>

              <div className="space-y-2 pt-2">
                <label className="block text-sm font-bold text-foreground">
                  {isUz ? 'Maqsadli Natija (Target Band / Level)' : 'Target Band or Level'}
                </label>
                <select
                  value={targetsList.includes(targetLevel) ? targetLevel : targetsList[0] || ''}
                  onChange={(e) => setTargetLevel(e.target.value)}
                  className="focus:outline-hidden w-full rounded-2xl border border-border bg-card px-4 py-3 font-bold text-foreground focus:ring-2 focus:ring-primary"
                >
                  {targetsList.map((t) => (
                    <option key={t} value={t}>
                      {selectedGoalType === 'ielts' ? `IELTS Band ${t}` : `CEFR ${t}`}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex justify-end pt-4">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="flex items-center gap-2 rounded-2xl bg-primary px-6 py-3 text-sm font-black text-primary-foreground transition-all hover:bg-primary/90"
                >
                  <span>{isUz ? 'Davom etish' : 'Continue'}</span>
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Current Level Assessment */}
          {step === 2 && (
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-foreground">
                {isUz
                  ? '2-Bosqich: Joriy darajangizni aniqlang'
                  : 'Step 2: Establish Starting Level'}
              </h3>

              {latestDiag && (
                <div className="flex flex-col items-center justify-between gap-4 rounded-3xl border border-primary/30 bg-primary/10 p-5 sm:flex-row">
                  <div className="space-y-1 text-left">
                    <div className="flex items-center gap-2">
                      <Sparkles size={16} className="text-primary" />
                      <span className="text-xs font-black uppercase tracking-wider text-primary">
                        Diagnostik Natijangiz Mavjud
                      </span>
                    </div>
                    <p className="text-sm font-bold text-foreground">
                      Oxirgi test natijasi:{' '}
                      <span className="font-black text-primary">
                        {latestDiag.diagnosticLevel || latestDiag.recommendedStartLevel}
                      </span>{' '}
                      ({latestDiag.overallScore || latestDiag.overallConfidence || 0}% aniqlik)
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Tizim ushbu darajani avtomatik tavsiya qiladi.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      const levelToSet =
                        latestDiag.diagnosticLevel || latestDiag.recommendedStartLevel;
                      setCurrentLevel(levelToSet);
                      toast({
                        title: 'Daraja belgilandi',
                        description: `Joriy darajangiz ${levelToSet} qilib o'rnatildi.`,
                      });
                    }}
                    className={`shrink-0 rounded-xl px-4 py-2.5 text-xs font-black transition-all ${
                      currentLevel ===
                      (latestDiag.diagnosticLevel || latestDiag.recommendedStartLevel)
                        ? 'bg-emerald-500 text-white'
                        : 'bg-primary text-primary-foreground shadow-sm hover:bg-primary/90'
                    }`}
                  >
                    {currentLevel ===
                    (latestDiag.diagnosticLevel || latestDiag.recommendedStartLevel)
                      ? '✓ Tanlangan'
                      : "Shu Darajani Qo'llash"}
                  </button>
                </div>
              )}

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="flex flex-col justify-between space-y-3 rounded-3xl border border-border bg-card p-6">
                  <div>
                    <h4 className="text-base font-bold text-foreground">
                      {isUz ? "Bilimimni sinab ko'rmoqchiman" : 'Unsure of Level?'}
                    </h4>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                      {isUz
                        ? '10-15 ta adaptiv savoldan iborat diagnostik test topshirib, aniq darajangizni hisoblang.'
                        : 'Conduct a rapid 10-15 question adaptive placement test first.'}
                    </p>
                  </div>
                  <button
                    onClick={handleNavigateToDiag}
                    className="w-full rounded-2xl bg-primary py-3 text-xs font-black text-primary-foreground shadow-md transition-all hover:bg-primary/90"
                  >
                    Diagnostik Test Topshirish
                  </button>
                </div>

                <div className="flex flex-col justify-between space-y-3 rounded-3xl border border-border bg-card p-6">
                  <div>
                    <h4 className="text-base font-bold text-foreground">
                      {isUz ? 'Taxminiy darajani kiritish' : 'Override Manually'}
                    </h4>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                      Joriy bilimingizni taxminan belgilang va yo'l xaritasini boshlang.
                    </p>
                  </div>
                  <div className="space-y-1">
                    <select
                      value={
                        currentLevelsList.includes(currentLevel)
                          ? currentLevel
                          : currentLevelsList[0] || ''
                      }
                      onChange={(e) => {
                        setCurrentLevel(e.target.value);
                      }}
                      className="w-full rounded-xl border border-border bg-card px-3 py-2 text-xs text-foreground"
                    >
                      {currentLevelsList.map((cl) => (
                        <option key={cl} value={cl}>
                          {cl}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="flex justify-between pt-4">
                <button
                  onClick={() => setStep(1)}
                  className="rounded-xl bg-secondary px-5 py-2.5 text-xs font-bold text-foreground"
                >
                  Orqaga
                </button>
                <button
                  onClick={() => {
                    if (
                      !PersonalLearningPlanService.isTargetLevelValid(
                        currentLevel,
                        targetLevel,
                        selectedGoalType,
                      )
                    ) {
                      toast({
                        variant: 'destructive',
                        title: isUz ? "Noto'g'ri maqsadli daraja" : 'Invalid Target Level',
                        description: isUz
                          ? "Maqsadli daraja joriy darajangizdan yuqori bo'lishi kerak!"
                          : 'Target level must be higher than your current level!',
                      });
                      return;
                    }
                    setStep(3);
                  }}
                  className="rounded-2xl bg-primary px-6 py-3 text-sm font-black text-primary-foreground transition-all hover:bg-primary/90"
                >
                  Davom etish
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Deadline & Confirmation */}
          {step === 3 && (
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-foreground">
                {isUz ? '3-Bosqich: Muddat va dars vaqti' : 'Step 3: Milestones & Schedule'}
              </h3>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-foreground">
                    {isUz ? 'Tayyorgarlik muddati' : 'Preparation Period'}
                  </label>
                  <select
                    value={deadlineMonths}
                    onChange={(e) => setDeadlineMonths(Number(e.target.value))}
                    className="w-full rounded-2xl border border-border bg-card px-4 py-3 text-sm text-foreground"
                  >
                    <option value={1}>1 Oy (Tezkor)</option>
                    <option value={3}>3 Oy (Intensiv)</option>
                    <option value={6}>6 Oy (Standart)</option>
                    <option value={9}>9 Oy (Batafsil)</option>
                    <option value={12}>12 Oy (Erkin)</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="block text-xs font-bold uppercase tracking-wider text-foreground">
                      {isUz ? 'Kunlik dars vaqti (daqiqa)' : 'Daily Minutes Budget'}
                    </label>
                    <span className="text-xs font-bold text-primary">
                      {dailyMinutes || 0} daq / kun
                    </span>
                  </div>
                  <div className="relative">
                    <input
                      type="number"
                      value={dailyMinutes === 0 ? '' : dailyMinutes}
                      onChange={(e) => {
                        const val = e.target.value;
                        if (val === '') {
                          setDailyMinutes(0);
                        } else {
                          const num = parseInt(val, 10);
                          if (!isNaN(num)) {
                            setDailyMinutes(num);
                          }
                        }
                      }}
                      onBlur={() => {
                        if (!dailyMinutes || dailyMinutes < 10) setDailyMinutes(15);
                        if (dailyMinutes > 480) setDailyMinutes(480);
                      }}
                      placeholder="Masalan: 45"
                      min={10}
                      max={480}
                      className="focus:outline-hidden w-full rounded-2xl border border-border bg-card px-4 py-3 text-sm font-medium text-foreground focus:ring-2 focus:ring-primary"
                    />
                    <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-semibold text-muted-foreground">
                      daqiqa
                    </span>
                  </div>
                  {/* Quick Preset Buttons */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {[15, 30, 45, 60, 90, 120].map((preset) => (
                      <button
                        key={preset}
                        type="button"
                        onClick={() => setDailyMinutes(preset)}
                        className={`rounded-lg border px-2.5 py-1 text-xs font-bold transition-all ${
                          dailyMinutes === preset
                            ? 'border-primary bg-primary text-primary-foreground'
                            : 'border-border bg-card text-muted-foreground hover:bg-muted'
                        }`}
                      >
                        {preset} daq
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Feasibility Indicator Warning */}
              {feasibility.warningMessage && (
                <div className="flex items-start gap-3 rounded-2xl border border-amber-500/30 bg-amber-500/10 p-5">
                  <AlertTriangle className="mt-0.5 shrink-0 text-amber-500" size={18} />
                  <div>
                    <h5 className="text-xs font-black text-[#C9A961]">
                      {isUz ? 'Agressiv Maqsad Ogohlantirishi' : 'Highly Ambitious Target'}
                    </h5>
                    <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                      {feasibility.warningMessage}
                    </p>
                  </div>
                </div>
              )}

              {/* Milestone Roadmap preview */}
              <div className="space-y-4 rounded-3xl border border-border bg-card p-6 shadow-xl">
                <h4 className="flex items-center gap-1.5 text-sm font-bold text-foreground">
                  <Calendar size={16} className="text-primary" />
                  {isUz
                    ? "Haqiqiy O'quv Bosqichlari (Pedagogik Yo'l Xaritasi)"
                    : 'Pedagogical Roadmap Milestones'}
                </h4>
                <div className="space-y-4">
                  {roadmapMilestones.map((m) => (
                    <div
                      key={m.month}
                      className="flex gap-3 border-l-2 border-primary/40 py-1 pl-3.5 text-xs leading-relaxed"
                    >
                      <div className="space-y-1">
                        <div className="text-sm font-bold text-foreground">{m.title}</div>
                        <div className="text-muted-foreground">{m.desc}</div>
                        {m.focusAreas && m.focusAreas.length > 0 && (
                          <div className="flex flex-wrap gap-1.5 pt-1">
                            {m.focusAreas.map((fa) => (
                              <span
                                key={fa}
                                className="rounded-md bg-secondary px-2 py-0.5 text-[10px] font-bold text-foreground"
                              >
                                {fa}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-between pt-4">
                <button
                  onClick={() => setStep(2)}
                  className="rounded-xl bg-secondary px-5 py-2.5 text-xs font-bold text-foreground"
                >
                  Orqaga
                </button>
                <button
                  onClick={handleInitializePlan}
                  className="flex items-center gap-2 rounded-2xl bg-primary px-6 py-3.5 text-sm font-black text-primary-foreground shadow-lg transition-all hover:bg-primary/90"
                >
                  <Sparkles size={16} />
                  <span>Shaxsiy Rejani Yaratish</span>
                </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        /* ACTIVE DASHBOARD VIEW */
        <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-3">
          {/* LEFT PANEL: Goal Summary & Evaluations */}
          <div className="order-2 space-y-4 sm:space-y-6 lg:order-1 lg:col-span-1">
            <div className="space-y-3 rounded-2xl border border-border bg-card p-4 shadow-xl sm:space-y-4 sm:rounded-3xl sm:p-6">
              <div className="flex items-center justify-between">
                <span className="rounded-full border border-primary/20 bg-primary/10 px-2.5 py-0.5 text-[11px] font-black uppercase tracking-wider text-primary sm:px-3 sm:py-1 sm:text-xs">
                  {activeGoal.goalType.toUpperCase()} PLAN
                </span>
                <button
                  onClick={handleResetPlan}
                  className="cursor-pointer text-xs font-medium text-destructive hover:underline"
                >
                  Rejani o'chirish
                </button>
              </div>

              <h2 className="text-lg font-black text-foreground sm:text-xl">
                {activeGoal.currentLevel} → {activeGoal.targetLevel}
              </h2>

              <div className="space-y-1.5 text-xs text-muted-foreground sm:space-y-2">
                <div className="flex justify-between">
                  <span>Kunlik:</span>
                  <span className="font-bold text-foreground">
                    {activeGoal.dailyMinutes} daqiqa
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Muddat:</span>
                  <span className="font-bold text-foreground">{activeGoal.totalWeeks} hafta</span>
                </div>
                <div className="flex justify-between">
                  <span>Hafta:</span>
                  <span className="font-bold text-foreground">{activeGoal.currentWeek}-hafta</span>
                </div>
              </div>

              <div className="h-2 w-full overflow-hidden rounded-full bg-secondary sm:h-2.5">
                <div
                  className="h-full bg-primary transition-all duration-300"
                  style={{
                    width: `${Math.round((activeGoal.currentWeek / activeGoal.totalWeeks) * 100)}%`,
                  }}
                />
              </div>
            </div>

            {/* Weekly evaluations history */}
            <div className="space-y-3 rounded-2xl border border-border bg-card p-4 shadow-xl sm:space-y-4 sm:rounded-3xl sm:p-6">
              <h3 className="flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-foreground sm:text-sm">
                <Award size={16} className="text-primary" />
                <span>Haftalik Natijalar Tahlili</span>
              </h3>
              {weeklyEvals.length === 0 ? (
                <p className="text-xs text-muted-foreground">
                  Hozircha yakunlangan haftalar yo'q. Hafta tugagach darslar natijasi tahlil
                  qilinadi.
                </p>
              ) : (
                <div className="space-y-3 sm:space-y-4">
                  {weeklyEvals.map((e, idx) => (
                    <div
                      key={idx}
                      className="space-y-1.5 rounded-xl border border-border bg-secondary/30 p-3 sm:space-y-2 sm:rounded-2xl sm:p-3.5"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-black text-foreground">
                          {e.weekNumber}-Hafta Natijalari
                        </span>
                        <span className="rounded-md bg-emerald-500/10 px-2 py-0.5 text-[10px] font-black text-emerald-500">
                          {e.completionRate}%
                        </span>
                      </div>
                      <p className="text-xs italic leading-relaxed text-muted-foreground">
                        "{e.aiFeedback}"
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* RIGHT PANEL: 7-day checklist and active week view */}
          <div className="order-1 space-y-4 sm:space-y-6 lg:order-2 lg:col-span-2">
            {currentPlan ? (
              <div className="space-y-3 sm:space-y-4">
                <div className="space-y-2 rounded-2xl border border-border bg-card p-4 shadow-xl sm:rounded-3xl sm:p-6">
                  <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                    <h2 className="text-base font-black tracking-tight text-foreground sm:text-lg">
                      {currentPlan.weekNumber}-Hafta Rejasi
                    </h2>
                    <button
                      onClick={handleRegenerateCurrentWeek}
                      disabled={regenerating}
                      title={isUz ? 'Rejani qayta tuzish' : 'Regenerate plan'}
                      className="flex shrink-0 cursor-pointer items-center gap-1.5 rounded-xl border border-border bg-secondary/50 px-3 py-1.5 text-xs font-bold text-muted-foreground transition-all hover:bg-secondary hover:text-foreground"
                    >
                      <RotateCcw size={13} className={regenerating ? 'animate-spin' : ''} />
                      <span>
                        {regenerating
                          ? isUz
                            ? 'Tuzilmoqda...'
                            : 'Generating...'
                          : isUz
                            ? 'Qayta tuzish'
                            : 'Regenerate'}
                      </span>
                    </button>
                  </div>
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    <strong>Fokus:</strong> {currentPlan.reasoning}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {currentPlan.focusSkills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-md bg-secondary px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Monday - Sunday checklist Accordion */}
                <div className="space-y-3">
                  {currentPlan.days.map((dayPlan) => {
                    const isExpanded = expandedDay === dayPlan.day;
                    const completedCount = dayPlan.tasks.filter((t) => t.completed).length;
                    const totalCount = dayPlan.tasks.length;
                    const isDayDone = completedCount === totalCount && totalCount > 0;

                    return (
                      <div
                        key={dayPlan.day}
                        className={`rounded-3xl border transition-all ${
                          isExpanded
                            ? 'border-primary/40 bg-card shadow-md'
                            : 'border-border bg-card'
                        }`}
                      >
                        <button
                          onClick={() => setExpandedDay(isExpanded ? '' : dayPlan.day)}
                          className="flex w-full items-center justify-between gap-4 p-4"
                        >
                          <div className="flex items-center gap-3">
                            <span
                              className={`flex h-8 w-8 items-center justify-center rounded-xl text-xs font-black uppercase ${
                                isDayDone
                                  ? 'bg-emerald-500/10 text-emerald-500'
                                  : 'bg-secondary text-foreground'
                              }`}
                            >
                              {dayPlan.day.substring(0, 3)}
                            </span>
                            <span className="text-sm font-bold capitalize text-foreground">
                              {dayPlan.day}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-semibold text-muted-foreground">
                              {completedCount} / {totalCount}
                            </span>
                            {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                          </div>
                        </button>

                        {isExpanded && (
                          <div className="space-y-3 border-t border-border/40 p-4 pt-0 duration-200 animate-in slide-in-from-top-2">
                            {dayPlan.tasks.map((task) => (
                              <div
                                key={task.id}
                                className="flex items-start justify-between gap-3 rounded-2xl border border-border/80 bg-secondary/20 p-3.5"
                              >
                                <div className="flex items-start gap-3">
                                  <input
                                    type="checkbox"
                                    checked={task.completed}
                                    onChange={() => handleToggleTask(dayPlan.day, task.id)}
                                    className="w-4.5 h-4.5 mt-0.5 cursor-pointer rounded border-border text-primary focus:ring-primary"
                                  />
                                  <div>
                                    <h4
                                      className={`text-sm font-bold text-foreground ${task.completed ? 'line-through opacity-60' : ''}`}
                                    >
                                      {task.title}
                                    </h4>
                                    <div className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
                                      <span className="flex items-center gap-1">
                                        <Clock size={11} /> {task.estimatedMinutes} daqiqa
                                      </span>
                                      {task.skill && (
                                        <span className="rounded bg-secondary px-1.5 py-0.5 text-[10px] font-bold uppercase text-foreground">
                                          {task.skill}
                                        </span>
                                      )}
                                    </div>
                                  </div>
                                </div>

                                {/* Direct navigation action button */}
                                <button
                                  onClick={() => {
                                    let targetRoute = task.route || '/ielts';
                                    const isEnglishPlan =
                                      activeGoal?.language === 'en' ||
                                      activeGoal?.goalType === 'ielts' ||
                                      selectedLang === 'en' ||
                                      selectedGoalType === 'ielts';
                                    if (isEnglishPlan) {
                                      if (targetRoute === '/ielts' || !targetRoute) {
                                        if (
                                          task.skill === 'reading' ||
                                          task.skill === 'listening'
                                        ) {
                                          targetRoute = '/ielts?tab=reading_listening';
                                        } else if (task.skill === 'writing') {
                                          targetRoute = '/ielts?tab=writing';
                                        } else if (task.skill === 'speaking') {
                                          targetRoute = '/ielts/speaking-mock';
                                        } else if (task.skill === 'vocabulary') {
                                          targetRoute = '/vocabulary';
                                        } else if (task.skill === 'grammar') {
                                          targetRoute = task.contentId
                                            ? `/ielts?tab=grammar&topic=${task.contentId}`
                                            : '/ielts?tab=grammar';
                                        }
                                      } else if (
                                        targetRoute.includes('topic=') &&
                                        !targetRoute.includes('tab=')
                                      ) {
                                        targetRoute = targetRoute.replace(
                                          '/ielts?',
                                          '/ielts?tab=grammar&',
                                        );
                                      }
                                    }

                                    navigate(targetRoute, {
                                      state: {
                                        personalPlanTask: {
                                          planId: currentPlan.id,
                                          taskId: task.id,
                                        },
                                      },
                                    });
                                  }}
                                  className="flex shrink-0 items-center gap-1 rounded-xl bg-primary/10 px-3 py-1.5 text-xs font-black text-primary transition-all hover:bg-primary/20 active:scale-95"
                                >
                                  <Play size={10} />
                                  <span>Boshlash</span>
                                </button>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Weekly completion assessment trigger */}
                <div
                  className={`flex flex-col items-center justify-between gap-3 rounded-2xl border p-4 transition-all sm:flex-row sm:gap-4 sm:rounded-3xl sm:p-6 ${
                    weeklyCompletionRate >= 80
                      ? 'border-emerald-500/40 bg-emerald-500/10 shadow-lg'
                      : 'border-primary/20 bg-primary/10'
                  }`}
                >
                  <div className="space-y-1 text-center sm:text-left">
                    <div className="flex items-center justify-center gap-2 sm:justify-start">
                      <h4
                        className={`text-xs font-black sm:text-sm ${weeklyCompletionRate >= 80 ? 'text-emerald-500' : 'text-primary'}`}
                      >
                        {weeklyCompletionRate >= 80
                          ? isUz
                            ? '🔥 Ajoyib natija! Hafta 80%+ bajarildi'
                            : '🔥 Great job! Week 80%+ completed'
                          : isUz
                            ? 'Haftalik darslarni yakunladingizmi?'
                            : 'Finished weekly tasks?'}
                      </h4>
                      {weeklyCompletionRate >= 80 && (
                        <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] font-bold text-emerald-600 dark:text-emerald-400">
                          {weeklyCompletionRate}%
                        </span>
                      )}
                    </div>
                    <p className="text-xs leading-relaxed text-muted-foreground">
                      {weeklyCompletionRate >= 80
                        ? isUz
                          ? "Haftalik darslar yakunlandi. Natijalarni tahlil qiling va keyingi haftaga o'ting!"
                          : "Most weekly tasks are done. Advance to your next week's plan!"
                        : isUz
                          ? "Haftalik tahlilni bajaring va keyingi haftaga o'ting."
                          : 'Evaluate results and generate your next week study plan.'}
                    </p>
                  </div>
                  <button
                    onClick={handleEvaluateWeek}
                    disabled={evaluating}
                    className={`flex shrink-0 cursor-pointer items-center gap-1.5 rounded-xl px-4 py-2 text-xs font-black shadow-md transition-all sm:px-5 sm:py-2.5 ${
                      weeklyCompletionRate >= 80
                        ? 'bg-emerald-600 text-white hover:bg-emerald-500'
                        : 'bg-primary text-primary-foreground hover:bg-primary/90'
                    }`}
                  >
                    {evaluating ? (
                      <>
                        <Loader2 size={13} className="animate-spin" />
                        <span>{isUz ? 'Tahlil qilinmoqda...' : 'Evaluating...'}</span>
                      </>
                    ) : (
                      <>
                        <CheckCircle2 size={13} />
                        <span>{isUz ? 'Haftani Yakunlash' : 'Complete Week'}</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-4 rounded-3xl border border-border bg-card p-8 text-center shadow-xl">
                <Sparkles className="mx-auto text-primary" size={32} />
                <h3 className="text-base font-bold text-foreground">
                  Haftalik reja tayyorlanmoqda
                </h3>
                <p className="mx-auto max-w-sm text-xs text-muted-foreground">
                  {activeGoal?.currentWeek || 1}-haftaning adaptiv darslar jadvalini yuklash yoki
                  yangi reja yaratish uchun bosing.
                </p>
                <div className="flex justify-center gap-3 pt-2">
                  <button
                    onClick={async () => {
                      if (!activeGoal) return;
                      setLoading(true);
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
                            (isUz
                              ? 'Haftalik dars jadvali muvaffaqiyatli yaratildi!'
                              : 'Weekly study plan created!'),
                        });
                      } catch (err: any) {
                        toast({
                          variant: 'destructive',
                          title: isUz ? 'Xatolik' : 'Error',
                          description: err.message || 'Reja generatsiyasida xatolik',
                        });
                      } finally {
                        setLoading(false);
                      }
                    }}
                    disabled={loading}
                    className="flex items-center gap-2 rounded-2xl bg-primary px-6 py-2.5 text-xs font-bold text-primary-foreground shadow-md transition-all hover:bg-primary/90"
                  >
                    {loading ? (
                      <Loader2 size={14} className="animate-spin" />
                    ) : (
                      <Sparkles size={14} />
                    )}
                    <span>Haftalik Jadvalni Yaratish</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
export default PersonalPlanPage;
