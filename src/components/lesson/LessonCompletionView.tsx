import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Trophy, Zap, ArrowRight, Home, Sparkles, Layers, AlertCircle } from 'lucide-react';
import { Lesson } from '../../types/lesson';
import { LessonService } from '../../services/LessonService';

interface LessonCompletionViewProps {
  lesson: Lesson;
  scoreData?: {
    score: number;
    total: number;
    percentage: number;
  };
  newCardsCount?: number;
  mistakesCount?: number;
  onExit: () => void;
}

export const LessonCompletionView: React.FC<LessonCompletionViewProps> = ({
  lesson,
  scoreData,
  newCardsCount = 0,
  mistakesCount = 0,
  onExit,
}) => {
  const navigate = useNavigate();
  const nextLesson = LessonService.getNextLesson(lesson.id);

  const handleContinue = () => {
    if (nextLesson) {
      navigate(`/lesson/${nextLesson.id}`);
    } else {
      navigate('/ielts');
    }
  };

  return (
    <div className="mx-auto max-w-lg space-y-6 px-3 py-6 text-center duration-300 animate-in fade-in zoom-in-95 sm:space-y-8 sm:px-4 sm:py-8">
      {/* Celebration Icon */}
      <div className="relative inline-block">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-tr from-amber-500 to-yellow-400 text-white shadow-xl shadow-amber-500/30 sm:h-24 sm:w-24">
          <Trophy size={42} className="animate-bounce sm:h-12 sm:w-12" />
        </div>
        <div className="absolute -right-2 -top-2 rounded-full bg-emerald-500 p-1.5 text-white shadow-md sm:p-2">
          <Sparkles size={14} className="sm:h-4 sm:w-4" />
        </div>
      </div>

      {/* Title & Subtitle */}
      <div className="space-y-1.5">
        <span className="text-[11px] font-black uppercase tracking-widest text-primary sm:text-xs">
          🇬🇧 English {lesson.level || 'B2'} Darsi
        </span>
        <h1 className="text-2xl font-black tracking-tight text-foreground sm:text-3xl">
          Dars Yakunlandi! 🎉
        </h1>
        <p className="text-xs text-muted-foreground sm:text-sm">
          «{lesson.title}» darsini muvaffaqiyatli yakunladingiz.
        </p>
      </div>

      {/* Stats Summary Cards */}
      <div className="grid grid-cols-3 gap-3">
        {/* Score */}
        <div className="space-y-1 rounded-2xl border border-border bg-card p-4">
          <div className="text-[11px] font-bold uppercase text-muted-foreground">Test Balli</div>
          <div className="text-lg font-black text-primary">
            {scoreData ? `${scoreData.score}/${scoreData.total}` : '100%'}
          </div>
        </div>

        {/* Steps */}
        <div className="space-y-1 rounded-2xl border border-border bg-card p-4">
          <div className="text-[11px] font-bold uppercase text-muted-foreground">Qadamlar</div>
          <div className="text-lg font-black text-foreground">
            {lesson.steps.length}/{lesson.steps.length}
          </div>
        </div>

        {/* XP */}
        <div className="space-y-1 rounded-2xl border border-border bg-card p-4">
          <div className="text-[11px] font-bold uppercase text-muted-foreground">XP Bonus</div>
          <div className="flex items-center justify-center gap-1 text-lg font-black text-amber-500">
            <Zap size={14} />
            <span>+50 XP</span>
          </div>
        </div>
      </div>

      {/* Automated SRS & Learning Signals Notice */}
      <div className="space-y-2 text-left">
        {newCardsCount > 0 && (
          <div className="flex items-center gap-2.5 rounded-xl border border-emerald-500/20 bg-emerald-500/10 p-3 text-emerald-600 dark:text-emerald-400 sm:gap-3 sm:rounded-2xl sm:p-3.5">
            <div className="shrink-0 rounded-lg bg-emerald-500/20 p-1.5 text-emerald-500 sm:rounded-xl sm:p-2">
              <Layers size={16} />
            </div>
            <div className="text-xs">
              <div className="font-black">
                {newCardsCount} ta yangi so'z Fleshkartalarga qo'shildi
              </div>
              <div className="text-[11px] text-muted-foreground">
                Takrorlash rejasiga kiritildi.
              </div>
            </div>
          </div>
        )}

        {mistakesCount > 0 && (
          <div className="flex items-center gap-2.5 rounded-xl border border-amber-500/20 bg-amber-500/10 p-3 text-amber-600 dark:text-amber-400 sm:gap-3 sm:rounded-2xl sm:p-3.5">
            <div className="shrink-0 rounded-lg bg-amber-500/20 p-1.5 text-amber-500 sm:rounded-xl sm:p-2">
              <AlertCircle size={16} />
            </div>
            <div className="text-xs">
              <div className="font-black">{mistakesCount} ta xato qayd etildi</div>
              <div className="text-[11px] text-muted-foreground">
                Keyingi darslarda qayta mustahkamlanadi.
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="space-y-2.5 pt-1 sm:space-y-3 sm:pt-2">
        {nextLesson ? (
          <button
            onClick={handleContinue}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3.5 text-xs font-black text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:opacity-90 active:scale-95 sm:rounded-2xl sm:py-4 sm:text-sm"
          >
            <span>Keyingi darsga o'tish</span>
            <ArrowRight size={16} />
          </button>
        ) : (
          <div className="rounded-xl border border-border bg-secondary/50 p-3 text-xs text-muted-foreground sm:rounded-2xl sm:p-4">
            ✨ Ushbu modul bo'yicha barcha darslarni yakunladingiz!
          </div>
        )}

        <button
          onClick={onExit}
          aria-label="Bosh Sahifaga Qaytish"
          className="flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-card py-3 text-xs font-bold text-foreground transition-all hover:bg-secondary active:scale-95 sm:rounded-2xl sm:py-3.5"
        >
          <Home size={14} />
          <span>Bosh sahifaga qaytish</span>
        </button>
      </div>
    </div>
  );
};
