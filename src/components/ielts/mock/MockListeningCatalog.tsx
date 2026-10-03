import React, { useState } from 'react';
import { Headphones, Volume2, ChevronRight } from 'lucide-react';
import { Button } from '../../ui/Button';
import { IELTS_LISTENING_EXAMS } from '../../../data/ielts/listening_data';
import { MockDifficultyFilter } from '../../../types/ieltsMock';

interface MockListeningCatalogProps {
  onSelectSection: (examIndex: number, sectionIndex: number) => void;
}

export const MockListeningCatalog: React.FC<MockListeningCatalogProps> = ({ onSelectSection }) => {
  const [selectedExamIndex, setSelectedExamIndex] = useState(0);
  const [difficultyFilter, setDifficultyFilter] = useState<MockDifficultyFilter>('all');

  const filteredListeningSections = IELTS_LISTENING_EXAMS[selectedExamIndex].sections.filter(
    (sec) => {
      if (difficultyFilter === 'all') return true;
      if (difficultyFilter === 'pre_ielts') return sec.sectionNumber === 1;
      if (difficultyFilter === 'core') return sec.sectionNumber === 2 || sec.sectionNumber === 3;
      if (difficultyFilter === 'mastery') return sec.sectionNumber === 4;
      return true;
    },
  );

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="flex items-center gap-1.5 text-sm font-black text-foreground sm:gap-2 sm:text-base">
          <Headphones size={18} className="text-purple-500" />
          Listening Testlar
        </h3>
        <span className="text-[11px] text-muted-foreground sm:text-xs">Bo'limlar bo'yicha</span>
      </div>

      {/* Exam Switcher Buttons & Level Filters */}
      <div className="flex flex-col gap-2.5">
        <div className="flex gap-2 overflow-x-auto pb-1">
          {IELTS_LISTENING_EXAMS.map((exam, exIdx) => (
            <button
              key={exam.id}
              onClick={() => setSelectedExamIndex(exIdx)}
              className={`whitespace-nowrap rounded-xl border px-3 py-1.5 text-xs font-black transition-all sm:px-4 sm:py-2 ${
                selectedExamIndex === exIdx
                  ? 'border-purple-600 bg-purple-600 text-white shadow-md'
                  : 'border-border bg-card text-muted-foreground hover:text-foreground'
              }`}
            >
              {exam.title.replace('IELTS Listening Academic Practice ', '')}
            </button>
          ))}
        </div>

        {/* Level & Difficulty Filter Ribbon */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
          <button
            onClick={() => setDifficultyFilter('all')}
            className={`shrink-0 rounded-xl px-2.5 py-1 text-xs font-bold transition-all ${
              difficultyFilter === 'all'
                ? 'bg-purple-600 text-white shadow-xs'
                : 'bg-muted/40 text-muted-foreground hover:text-foreground'
            }`}
          >
            Barcha bo'limlar
          </button>
          <button
            onClick={() => setDifficultyFilter('pre_ielts')}
            className={`shrink-0 rounded-xl px-2.5 py-1 text-xs font-bold transition-all ${
              difficultyFilter === 'pre_ielts'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'border border-emerald-500/20 bg-emerald-500/10 text-emerald-600 hover:bg-emerald-500/20 dark:text-emerald-400'
            }`}
          >
            🌱 Pre-IELTS (S1)
          </button>
          <button
            onClick={() => setDifficultyFilter('core')}
            className={`shrink-0 rounded-xl px-2.5 py-1 text-xs font-bold transition-all ${
              difficultyFilter === 'core'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'border border-blue-500/20 bg-blue-500/10 text-blue-600 hover:bg-blue-500/20 dark:text-blue-400'
            }`}
          >
            🎯 IELTS Core (S2-S3)
          </button>
          <button
            onClick={() => setDifficultyFilter('mastery')}
            className={`shrink-0 rounded-xl px-2.5 py-1 text-xs font-bold transition-all ${
              difficultyFilter === 'mastery'
                ? 'bg-purple-600 text-white shadow-xs'
                : 'border border-purple-500/20 bg-purple-500/10 text-purple-600 hover:bg-purple-500/20 dark:text-purple-400'
            }`}
          >
            ⚡ Academic (S4)
          </button>
        </div>
      </div>

      {/* Sections Grid of Selected Exam */}
      <div className="grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-2">
        {filteredListeningSections.map((sec, sIdx) => (
          <div
            key={sec.sectionNumber}
            className="group flex flex-col justify-between space-y-3 rounded-2xl border border-border bg-card p-4 shadow-xs transition-all hover:border-purple-500/50 hover:shadow-md sm:p-5"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="rounded-full border border-purple-500/20 bg-purple-500/10 px-2.5 py-0.5 text-[10px] font-black uppercase text-purple-600 dark:text-purple-400">
                  Section {sec.sectionNumber}
                </span>
                <span className="flex items-center gap-1 font-mono text-[11px] text-muted-foreground">
                  <Volume2 size={12} /> Audio / TTS
                </span>
              </div>
              <h4 className="text-sm font-black text-foreground transition-colors group-hover:text-purple-600 dark:group-hover:text-purple-400">
                {sec.title}
              </h4>
              <p className="line-clamp-2 text-xs leading-relaxed text-muted-foreground">
                {sec.instruction}
              </p>
            </div>

            <div className="flex items-center justify-between border-t border-border/60 pt-3">
              <span className="text-[11px] font-semibold text-muted-foreground">
                🎧 {sec.questions.length} ta savol
              </span>
              <Button
                onClick={() => onSelectSection(selectedExamIndex, sIdx)}
                className="flex cursor-pointer items-center gap-1 rounded-xl bg-purple-600 px-3.5 py-1.5 text-xs font-black text-white shadow-xs hover:bg-purple-700"
              >
                Boshlash <ChevronRight size={14} />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
