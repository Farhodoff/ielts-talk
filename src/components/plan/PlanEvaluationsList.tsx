import React from 'react';
import { Award } from 'lucide-react';
import { WeeklyEvaluation } from '../../types/learningPlan';

interface PlanEvaluationsListProps {
  weeklyEvals: WeeklyEvaluation[];
}

export const PlanEvaluationsList: React.FC<PlanEvaluationsListProps> = ({ weeklyEvals }) => {
  return (
    <div className="space-y-3 rounded-2xl border border-border bg-card p-4 shadow-xl sm:space-y-4 sm:rounded-3xl sm:p-6">
      <h3 className="flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-foreground sm:text-sm">
        <Award size={16} className="text-primary" />
        <span>Haftalik Natijalar Tahlili</span>
      </h3>
      {weeklyEvals.length === 0 ? (
        <p className="text-xs text-muted-foreground">
          Hozircha yakunlangan haftalar yo'q. Hafta tugagach darslar natijasi tahlil qilinadi.
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
  );
};
