import React from 'react';
import { PersonalLearningGoal } from '../../types/learningPlan';

interface PlanGoalSummaryCardProps {
  activeGoal: PersonalLearningGoal;
  onResetPlan: () => void;
}

export const PlanGoalSummaryCard: React.FC<PlanGoalSummaryCardProps> = ({
  activeGoal,
  onResetPlan,
}) => {
  const progressPercent = Math.min(
    100,
    Math.round((activeGoal.currentWeek / Math.max(1, activeGoal.totalWeeks)) * 100),
  );

  return (
    <div className="space-y-3 rounded-2xl border border-border bg-card p-4 shadow-xl sm:space-y-4 sm:rounded-3xl sm:p-6">
      <div className="flex items-center justify-between">
        <span className="rounded-full border border-primary/20 bg-primary/10 px-2.5 py-0.5 text-[11px] font-black uppercase tracking-wider text-primary sm:px-3 sm:py-1 sm:text-xs">
          {activeGoal.goalType.toUpperCase()} PLAN
        </span>
        <button
          onClick={onResetPlan}
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
          <span className="font-bold text-foreground">{activeGoal.dailyMinutes} daqiqa</span>
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
          style={{ width: `${progressPercent}%` }}
        />
      </div>
    </div>
  );
};
