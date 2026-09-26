import React from 'react';
import { Cpu, ShieldCheck } from 'lucide-react';

const AIProviderSection: React.FC = () => {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card p-4 shadow-xs sm:p-6">
      <div className="flex flex-col gap-3 sm:gap-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-500 sm:h-11 sm:w-11 sm:rounded-2xl">
            <ShieldCheck size={22} className="sm:size-[26px]" />
          </div>
          <div className="min-w-0">
            <h3 className="flex items-center gap-1.5 text-sm font-bold text-foreground sm:text-base">
              <Cpu size={16} className="text-indigo-500" />
              <span>IELTS Talk Engine</span>
            </h3>
            <p className="text-[11px] text-muted-foreground sm:text-xs">
              DeepSeek V3 & R1 • Markaziy AI Tizimi
            </p>
          </div>
          <div className="ml-auto flex shrink-0 items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-bold text-emerald-600 dark:text-emerald-400 sm:px-2.5">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
            <span>Faol</span>
          </div>
        </div>

        <div className="rounded-xl border border-border/60 bg-muted/40 p-3 text-[11px] leading-relaxed text-muted-foreground sm:p-3.5 sm:text-xs">
          <p>
            Barcha AI xizmatlari (Shaxsiy Reja, Speaking Coach, Lug‘at va Tahlillar) markaziy server
            orqali xavfsiz va barqaror ishlaydi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AIProviderSection;
