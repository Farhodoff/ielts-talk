import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Clock, Play } from 'lucide-react';
import { WeeklyPlanTask } from '../../types/learningPlan';

interface PlanTaskItemProps {
  task: WeeklyPlanTask;
  dayName: string;
  planId: string;
  activeGoalLanguage?: string;
  activeGoalType?: string;
  onToggle: (dayName: string, taskId: string) => void;
}

export const PlanTaskItem: React.FC<PlanTaskItemProps> = ({
  task,
  dayName,
  planId,
  activeGoalLanguage,
  activeGoalType,
  onToggle,
}) => {
  const navigate = useNavigate();

  const handleStartTask = () => {
    let targetRoute = task.route || '/ielts';
    const isEnglishPlan =
      activeGoalLanguage === 'en' || activeGoalType === 'ielts' || activeGoalType === 'general_en';

    if (isEnglishPlan) {
      if (targetRoute === '/ielts' || !targetRoute) {
        if (task.skill === 'reading' || task.skill === 'listening') {
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
      } else if (targetRoute.includes('topic=') && !targetRoute.includes('tab=')) {
        targetRoute = targetRoute.replace('/ielts?', '/ielts?tab=grammar&');
      }
    }

    navigate(targetRoute, {
      state: {
        personalPlanTask: {
          planId,
          taskId: task.id,
        },
      },
    });
  };

  return (
    <div className="flex items-start justify-between gap-3 rounded-2xl border border-border/80 bg-secondary/20 p-3.5">
      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(dayName, task.id)}
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
        onClick={handleStartTask}
        className="flex shrink-0 items-center gap-1 rounded-xl bg-primary/10 px-3 py-1.5 text-xs font-black text-primary transition-all hover:bg-primary/20 active:scale-95"
      >
        <Play size={10} />
        <span>Boshlash</span>
      </button>
    </div>
  );
};
