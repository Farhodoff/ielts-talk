import React from 'react';
import { Sparkles, CheckCircle2 } from 'lucide-react';

interface MockEvaluatingStageProps {
  progressText: string;
}

export const MockEvaluatingStage: React.FC<MockEvaluatingStageProps> = ({ progressText }) => {
  return (
    <div className="mx-auto my-auto w-full max-w-lg space-y-6 rounded-3xl border border-slate-800 bg-slate-900/80 p-8 text-center shadow-2xl backdrop-blur-xl duration-200 animate-in fade-in sm:p-12">
      <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white shadow-xl shadow-blue-500/30">
        <Sparkles size={32} className="animate-spin" />
      </div>

      <div className="space-y-2">
        <h2 className="text-xl font-black text-white sm:text-2xl">
          Imtihon Natijalari Hisoblanmoqda
        </h2>
        <p className="text-xs text-slate-400">{progressText}</p>
      </div>

      <div className="space-y-2.5 text-left text-xs">
        <div className="flex items-center gap-2 text-slate-300">
          <CheckCircle2 size={16} className="text-emerald-400" />
          <span>Listening & Reading avtomatik baholandi</span>
        </div>
        <div className="flex items-center gap-2 text-slate-300">
          <CheckCircle2 size={16} className="text-emerald-400" />
          <span>Writing Task 1 & 2 mezonlari tahlil qilindi</span>
        </div>
        <div className="flex items-center gap-2 text-slate-300">
          <CheckCircle2 size={16} className="text-emerald-400" />
          <span>Speaking ravonligi va talaffuzi baholandi</span>
        </div>
      </div>
    </div>
  );
};
