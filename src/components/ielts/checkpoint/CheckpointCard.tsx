import React from 'react';
import { Award, CheckCircle2, Lock, ArrowRight, Sparkles } from 'lucide-react';
import { CheckpointTest } from '../../../data/ielts/checkpointTestsData';
import { CheckpointResult } from '../../../services/CheckpointTestService';

interface CheckpointCardProps {
  checkpoint: CheckpointTest;
  result: CheckpointResult | null;
  isUnlocked: boolean;
  onStartTest: (checkpoint: CheckpointTest) => void;
}

export const CheckpointCard: React.FC<CheckpointCardProps> = ({
  checkpoint,
  result,
  isUnlocked,
  onStartTest,
}) => {
  const isPassed = result?.isPassed;

  return (
    <div
      className={`relative overflow-hidden rounded-2xl border p-4 transition-all sm:rounded-3xl sm:p-5 ${
        isPassed
          ? 'border-emerald-500/40 bg-gradient-to-r from-emerald-950/40 via-slate-900 to-slate-900 shadow-md'
          : isUnlocked
            ? 'border-blue-500/30 bg-slate-900/80 shadow-md hover:border-blue-500/50'
            : 'border-slate-800 bg-slate-950/60 opacity-75'
      }`}
    >
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <span
              className={`rounded-full px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider ${
                isPassed
                  ? 'border border-emerald-500/30 bg-emerald-500/15 text-emerald-400'
                  : isUnlocked
                    ? 'border border-blue-500/30 bg-blue-500/15 text-blue-400'
                    : 'border border-slate-700 bg-slate-800 text-slate-400'
              }`}
            >
              {checkpoint.fromLevel} → {checkpoint.toLevel}
            </span>

            {isPassed && (
              <span className="flex items-center gap-1 rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] font-black text-emerald-400">
                <CheckCircle2 size={12} />
                <span>Muvaffaqiyatli ({result.score}/20)</span>
              </span>
            )}
          </div>

          <h4 className="text-sm font-black text-white sm:text-base">{checkpoint.title}</h4>
          <p className="max-w-xl text-xs text-slate-400">{checkpoint.description}</p>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          {!isUnlocked ? (
            <div className="flex items-center gap-1.5 rounded-xl border border-slate-800 bg-slate-900 px-3.5 py-2 text-xs font-bold text-slate-500">
              <Lock size={14} />
              <span>Bloklangan</span>
            </div>
          ) : isPassed ? (
            <div className="flex items-center gap-2">
              <div className="hidden flex-col items-end sm:flex">
                <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-400">
                  <Award size={13} /> {checkpoint.badgeName}
                </span>
                <span className="text-[10px] text-slate-400">+{checkpoint.xpReward} XP olindi</span>
              </div>
              <button
                type="button"
                onClick={() => onStartTest(checkpoint)}
                className="cursor-pointer rounded-xl border border-slate-700 bg-slate-800 px-3.5 py-2 text-xs font-bold text-slate-200 transition-all hover:bg-slate-700"
              >
                Qayta topshirish
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => onStartTest(checkpoint)}
              className="flex cursor-pointer items-center gap-1.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2.5 text-xs font-black text-white shadow-md shadow-blue-500/20 transition-all hover:scale-105 hover:from-blue-500 hover:to-indigo-500 active:scale-95"
            >
              <Sparkles size={14} />
              <span>Imtihonni topshirish (20 ta test)</span>
              <ArrowRight size={13} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
