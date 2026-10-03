import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Loader2 } from 'lucide-react';
import { usePersonalPlan } from '../hooks/usePersonalPlan';
import { PlanGoalWizard } from '../components/plan/PlanGoalWizard';
import { PlanGoalSummaryCard } from '../components/plan/PlanGoalSummaryCard';
import { PlanEvaluationsList } from '../components/plan/PlanEvaluationsList';
import { PlanWeeklySchedule } from '../components/plan/PlanWeeklySchedule';

export const PersonalPlanPage: React.FC = () => {
  const navigate = useNavigate();
  const {
    isUz,
    loading,
    generationStep,
    activeGoal,
    currentPlan,
    weeklyEvals,
    latestDiag,
    currentLevel,
    setCurrentLevel,
    targetLevel,
    setTargetLevel,
    selectedGoalType,
    setSelectedGoalType,
    deadlineMonths,
    setDeadlineMonths,
    dailyMinutes,
    setDailyMinutes,
    targetsList,
    currentLevelsList,
    feasibility,
    roadmapMilestones,
    regenerating,
    evaluating,
    generatingPlan,
    handleInitializePlan,
    handleToggleTask,
    handleRegenerateCurrentWeek,
    handleEvaluateWeek,
    handleGenerateWeekPlan,
    handleResetPlan,
  } = usePersonalPlan();

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
