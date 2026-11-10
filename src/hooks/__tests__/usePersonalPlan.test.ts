import { describe, it, expect, vi, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { usePersonalPlan } from '../usePersonalPlan';
import { PersonalLearningPlanService } from '../../services/PersonalLearningPlanService';

vi.mock('../../context/IeltsTalkContext', () => ({
  useStudyData: () => ({
    awardXP: vi.fn().mockResolvedValue(undefined),
    user: { id: 'test-user-plan', email: 'planner@example.com' },
  }),
}));

vi.mock('../../context/LanguageContext', () => ({
  useLanguage: () => ({
    language: 'uz',
  }),
}));

vi.mock('../../services/PersonalLearningPlanService', () => ({
  PersonalLearningPlanService: {
    getActiveGoal: vi.fn().mockReturnValue(null),
    getLatestWeeklyPlan: vi.fn().mockReturnValue(null),
    getWeeklyEvaluations: vi.fn().mockReturnValue([]),
    fetchActiveGoalFromServer: vi.fn().mockResolvedValue(null),
    fetchWeeklyPlansFromServer: vi.fn().mockResolvedValue([]),
    fetchWeeklyEvaluationsFromServer: vi.fn().mockResolvedValue([]),
    checkFeasibility: vi
      .fn()
      .mockReturnValue({ isFeasible: true, score: 90, verdict: 'Tavsiya etiladi' }),
    isTargetLevelValid: vi.fn().mockReturnValue(true),
    saveGoal: vi.fn().mockResolvedValue(undefined),
    saveWeeklyPlan: vi.fn().mockResolvedValue(undefined),
    resetPlan: vi.fn().mockResolvedValue(undefined),
  },
}));

vi.mock('../../services/LearningProgressionService', () => ({
  LearningProgressionService: {
    getCurrentLevel: vi.fn().mockReturnValue('5.5'),
  },
}));

vi.mock('../../services/DiagnosticService', () => ({
  DiagnosticService: {
    getLatestDiagnosticResult: vi.fn().mockReturnValue(null),
  },
}));

describe('usePersonalPlan', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('initializes default wizard state with current and target levels', () => {
    const { result } = renderHook(() => usePersonalPlan());

    expect(result.current.selectedGoalType).toBe('ielts');
    expect(result.current.targetLevel).toBe('7.0');
    expect(result.current.currentLevel).toBe('5.5');
    expect(result.current.deadlineMonths).toBe(6);
    expect(result.current.dailyMinutes).toBe(60);
    expect(result.current.targetsList).toContain('7.5');
    expect(result.current.currentLevelsList).toContain('6.0');
  });

  it('updates target and current levels properly', () => {
    const { result } = renderHook(() => usePersonalPlan());

    act(() => {
      result.current.setTargetLevel('8.0');
      result.current.setCurrentLevel('6.0');
      result.current.setDeadlineMonths(3);
    });

    expect(result.current.targetLevel).toBe('8.0');
    expect(result.current.currentLevel).toBe('6.0');
    expect(result.current.deadlineMonths).toBe(3);
  });

  it('resets plan when confirmed by user', async () => {
    vi.spyOn(window, 'confirm').mockReturnValue(true);
    const { result } = renderHook(() => usePersonalPlan());

    await act(async () => {
      await result.current.handleResetPlan();
    });

    expect(PersonalLearningPlanService.resetPlan).toHaveBeenCalledWith('test-user-plan');
    expect(result.current.activeGoal).toBeNull();
    expect(result.current.currentPlan).toBeNull();
  });
});
