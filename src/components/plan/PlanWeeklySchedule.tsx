import React, { useState, useMemo } from 'react';
import { RotateCcw, ChevronUp, ChevronDown, Loader2, CheckCircle2, Sparkles } from 'lucide-react';
import { WeeklyLearningPlan, PersonalLearningGoal } from '../../types/learningPlan';
import { PlanTaskItem } from './PlanTaskItem';

interface PlanWeeklyScheduleProps {
  currentPlan: WeeklyLearningPlan | null;
  activeGoal: PersonalLearningGoal;
  isUz: boolean;
  regenerating: boolean;
  evaluating: boolean;
  generatingPlan?: boolean;
  onToggleTask: (dayName: string, taskId: string) => void;
  onRegenerateCurrentWeek: () => void;
  onEvaluateWeek: () => void;
  onGenerateWeekPlan?: () => void;
}

export const PlanWeeklySchedule: React.FC<PlanWeeklyScheduleProps> = ({
  currentPlan,
  activeGoal,
  isUz,
  regenerating,
  evaluating,
  generatingPlan = false,
  onToggleTask,
  onRegenerateCurrentWeek,
  onEvaluateWeek,
  onGenerateWeekPlan,
}) => {
  const [expandedDay, setExpandedDay] = useState<string>('monday');

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

  if (!currentPlan) {
    return (
      <div className="space-y-4 rounded-3xl border border-border bg-card p-8 text-center shadow-xl">
        <Sparkles className="mx-auto text-primary" size={32} />
        <h3 className="text-base font-bold text-foreground">Haftalik reja tayyorlanmoqda</h3>
        <p className="mx-auto max-w-sm text-xs text-muted-foreground">
          {activeGoal?.currentWeek || 1}-haftaning adaptiv darslar jadvalini yuklash yoki yangi reja
          yaratish uchun bosing.
        </p>
        <div className="flex justify-center gap-3 pt-2">
          <button
            onClick={onGenerateWeekPlan}
            disabled={generatingPlan}
            className="flex items-center gap-2 rounded-2xl bg-primary px-6 py-2.5 text-xs font-bold text-primary-foreground shadow-md transition-all hover:bg-primary/90"
          >
            {generatingPlan ? (
              <Loader2 size={14} className="animate-spin" />
            ) : (
              <Sparkles size={14} />
            )}
            <span>Haftalik Jadvalni Yaratish</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-3 sm:space-y-4">
      {/* Week Header */}
      <div className="space-y-2 rounded-2xl border border-border bg-card p-4 shadow-xl sm:rounded-3xl sm:p-6">
        <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
          <h2 className="text-base font-black tracking-tight text-foreground sm:text-lg">
            {currentPlan.weekNumber}-Hafta Rejasi
          </h2>
          <button
            onClick={onRegenerateCurrentWeek}
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
                isExpanded ? 'border-primary/40 bg-card shadow-md' : 'border-border bg-card'
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
                    <PlanTaskItem
                      key={task.id}
                      task={task}
                      dayName={dayPlan.day}
                      planId={currentPlan.id}
                      activeGoalLanguage={activeGoal.language}
                      activeGoalType={activeGoal.goalType}
                      onToggle={onToggleTask}
                    />
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
              className={`text-xs font-black sm:text-sm ${
                weeklyCompletionRate >= 80 ? 'text-emerald-500' : 'text-primary'
              }`}
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
          onClick={onEvaluateWeek}
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
  );
};
