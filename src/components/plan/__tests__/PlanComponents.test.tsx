import { render, screen, fireEvent } from '@testing-library/react';
import { describe, expect, it, vi, beforeEach } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import { PlanGoalSummaryCard } from '../PlanGoalSummaryCard';
import { PlanEvaluationsList } from '../PlanEvaluationsList';
import { PlanTaskItem } from '../PlanTaskItem';
import { PlanWeeklySchedule } from '../PlanWeeklySchedule';
import { PlanGoalWizard } from '../PlanGoalWizard';
import {
  PersonalLearningGoal,
  WeeklyLearningPlan,
  WeeklyPlanTask,
  WeeklyEvaluation,
} from '../../../types/learningPlan';

const mockGoal: PersonalLearningGoal = {
  id: 'goal-123',
  userId: 'user-abc',
  language: 'en',
  goalType: 'ielts',
  currentLevel: '5.5',
  targetGoal: 'IELTS Band 7.5',
  targetLevel: '7.5',
  deadline: '2026-12-31',
  dailyMinutes: 60,
  totalWeeks: 24,
  currentWeek: 3,
  status: 'active',
  createdAt: '2026-10-01',
  updatedAt: '2026-10-02',
};

const mockTask: WeeklyPlanTask = {
  id: 'task-1',
  title: 'Raymond Murphy Essential Grammar Unit 1',
  type: 'grammar',
  estimatedMinutes: 30,
  completed: false,
  status: 'pending',
  sourceType: 'curriculum',
  route: '/ielts?tab=grammar&topic=murphy_u01_am_is_are',
  skill: 'grammar',
};

const mockPlan: WeeklyLearningPlan = {
  id: 'plan-1',
  goalId: 'goal-123',
  userId: 'user-abc',
  weekNumber: 3,
  startDate: '2026-10-01',
  endDate: '2026-10-07',
  objectives: ['Master basic tenses', 'Expand academic vocabulary'],
  focusSkills: ['grammar', 'vocabulary'],
  days: [
    {
      day: 'monday',
      tasks: [mockTask],
    },
  ],
  reasoning: 'Strengthening foundation in English grammar and vocabulary.',
  expectedOutcome: 'High accuracy in diagnostic exercises.',
  aiGenerated: true,
  version: 1,
  status: 'active',
  createdAt: '2026-10-01',
};

describe('Plan Components Suite', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('PlanGoalSummaryCard', () => {
    it('renders goal details and handles reset plan click', () => {
      const onReset = vi.fn();
      render(<PlanGoalSummaryCard activeGoal={mockGoal} onResetPlan={onReset} />);

      expect(screen.getByText('5.5 → 7.5')).toBeInTheDocument();
      expect(screen.getByText('60 daqiqa')).toBeInTheDocument();
      expect(screen.getByText('24 hafta')).toBeInTheDocument();

      const resetBtn = screen.getByText("Rejani o'chirish");
      fireEvent.click(resetBtn);
      expect(onReset).toHaveBeenCalled();
    });
  });

  describe('PlanEvaluationsList', () => {
    it('renders empty placeholder when no evaluations are present', () => {
      render(<PlanEvaluationsList weeklyEvals={[]} />);
      expect(screen.getByText(/Hozircha yakunlangan haftalar yo'q/i)).toBeInTheDocument();
    });

    it('renders evaluations when list has items', () => {
      const evals: WeeklyEvaluation[] = [
        {
          id: 'eval-1',
          weeklyPlanId: 'plan-1',
          userId: 'user-abc',
          weekNumber: 1,
          completionRate: 90,
          studyMinutesPlanned: 360,
          studyMinutesActual: 320,
          skillScores: { grammar: 85, vocabulary: 80 },
          masteryDelta: { grammar: 5 },
          weakSkills: ['Speed'],
          strongSkills: ['Grammar'],
          aiFeedback: 'Excellent progress on grammar.',
          createdAt: '2026-10-01',
        },
      ];
      render(<PlanEvaluationsList weeklyEvals={evals} />);
      expect(screen.getByText('1-Hafta Natijalari')).toBeInTheDocument();
      expect(screen.getByText('90%')).toBeInTheDocument();
      expect(screen.getByText('"Excellent progress on grammar."')).toBeInTheDocument();
    });
  });

  describe('PlanTaskItem', () => {
    it('renders task details and triggers onToggle', () => {
      const onToggle = vi.fn();
      render(
        <BrowserRouter>
          <PlanTaskItem task={mockTask} dayName="monday" planId="plan-1" onToggle={onToggle} />
        </BrowserRouter>,
      );

      expect(screen.getByText('Raymond Murphy Essential Grammar Unit 1')).toBeInTheDocument();
      expect(screen.getByText(/30 daqiqa/i)).toBeInTheDocument();

      const checkbox = screen.getByRole('checkbox');
      fireEvent.click(checkbox);
      expect(onToggle).toHaveBeenCalledWith('monday', 'task-1');
    });
  });

  describe('PlanWeeklySchedule', () => {
    it('renders weekly plan and expands day tasks', () => {
      const onToggle = vi.fn();
      const onRegenerate = vi.fn();
      const onEvaluate = vi.fn();

      render(
        <BrowserRouter>
          <PlanWeeklySchedule
            currentPlan={mockPlan}
            activeGoal={mockGoal}
            isUz={true}
            regenerating={false}
            evaluating={false}
            onToggleTask={onToggle}
            onRegenerateCurrentWeek={onRegenerate}
            onEvaluateWeek={onEvaluate}
          />
        </BrowserRouter>,
      );

      expect(screen.getByText('3-Hafta Rejasi')).toBeInTheDocument();
      expect(
        screen.getByText(/Strengthening foundation in English grammar and vocabulary/i),
      ).toBeInTheDocument();
      expect(screen.getByText('monday')).toBeInTheDocument();

      const completeBtn = screen.getByRole('button', { name: /Haftani Yakunlash/i });
      fireEvent.click(completeBtn);
      expect(onEvaluate).toHaveBeenCalled();
    });

    it('renders empty schedule prompt when currentPlan is null', () => {
      render(
        <PlanWeeklySchedule
          currentPlan={null}
          activeGoal={mockGoal}
          isUz={true}
          regenerating={false}
          evaluating={false}
          onToggleTask={vi.fn()}
          onRegenerateCurrentWeek={vi.fn()}
          onEvaluateWeek={vi.fn()}
        />,
      );

      expect(screen.getByText('Haftalik reja tayyorlanmoqda')).toBeInTheDocument();
      expect(
        screen.getByRole('button', { name: /Haftalik Jadvalni Yaratish/i }),
      ).toBeInTheDocument();
    });
  });

  describe('PlanGoalWizard', () => {
    it('renders wizard step 1 and transitions to step 2', () => {
      const setCurrentLevel = vi.fn();
      const setTargetLevel = vi.fn();
      const setSelectedGoalType = vi.fn();
      const setDeadlineMonths = vi.fn();
      const setDailyMinutes = vi.fn();
      const onInitialize = vi.fn();
      const onNavigateDiag = vi.fn();

      render(
        <PlanGoalWizard
          isUz={true}
          latestDiag={null}
          currentLevel="5.5"
          setCurrentLevel={setCurrentLevel}
          targetLevel="7.0"
          setTargetLevel={setTargetLevel}
          selectedGoalType="ielts"
          setSelectedGoalType={setSelectedGoalType}
          deadlineMonths={6}
          setDeadlineMonths={setDeadlineMonths}
          dailyMinutes={60}
          setDailyMinutes={setDailyMinutes}
          targetsList={['6.5', '7.0', '7.5']}
          currentLevelsList={['5.0', '5.5', '6.0']}
          feasibility={{
            totalHoursRequired: 120,
            dailyHoursRequired: 1.5,
            status: 'realistic',
            warningMessage: null,
          }}
          roadmapMilestones={[{ month: 1, title: 'Month 1 Foundation', desc: 'Basics' }]}
          onInitializePlan={onInitialize}
          onNavigateToDiag={onNavigateDiag}
        />,
      );

      expect(screen.getByText("Shaxsiy O'quv Rejangizni Yarating")).toBeInTheDocument();
      expect(screen.getByText('1-Bosqich: IELTS Maqsadingizni tanlang')).toBeInTheDocument();

      const continueBtn = screen.getByRole('button', { name: /Davom etish/i });
      fireEvent.click(continueBtn);
      expect(screen.getByText('2-Bosqich: Joriy darajangizni aniqlang')).toBeInTheDocument();
    });
  });
});
