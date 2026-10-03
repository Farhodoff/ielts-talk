import React, { useState } from 'react';
import { BookmarkCheck, Clock, ChevronRight } from 'lucide-react';
import { Button } from '../../ui/Button';
import { IELTS_READING_EXAMS, ReadingPassage } from '../../../data/ielts/reading_data';
import { MockDifficultyFilter } from '../../../types/ieltsMock';

interface MockReadingCatalogProps {
  onSelectPassage: (passage: ReadingPassage) => void;
}

export const MockReadingCatalog: React.FC<MockReadingCatalogProps> = ({ onSelectPassage }) => {
  const [difficultyFilter, setDifficultyFilter] = useState<MockDifficultyFilter>('all');

  const filteredReadingExams = IELTS_READING_EXAMS.filter((passage) => {
    if (difficultyFilter === 'all') return true;
    if (difficultyFilter === 'pre_ielts') return passage.academicLevel === 'Academic 1';
    if (difficultyFilter === 'core') return passage.academicLevel === 'Academic 2';
    if (difficultyFilter === 'mastery') return passage.academicLevel === 'Academic 3';
    return true;
  });

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h3 className="flex items-center gap-1.5 text-sm font-black text-foreground sm:gap-2 sm:text-base">
          <BookmarkCheck size={18} className="text-indigo-500" />
          Reading Matnlari ({filteredReadingExams.length} ta)
        </h3>
        {/* Level & Difficulty Filter Ribbon */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
          <button
            onClick={() => setDifficultyFilter('all')}
            className={`shrink-0 rounded-xl px-2.5 py-1 text-xs font-bold transition-all ${
              difficultyFilter === 'all'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'bg-muted/40 text-muted-foreground hover:text-foreground'
            }`}
          >
            Barchasi
          </button>
          <button
            onClick={() => setDifficultyFilter('pre_ielts')}
            className={`shrink-0 rounded-xl px-2.5 py-1 text-xs font-bold transition-all ${
              difficultyFilter === 'pre_ielts'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'border border-emerald-500/20 bg-emerald-500/10 text-emerald-600 hover:bg-emerald-500/20 dark:text-emerald-400'
            }`}
          >
            🌱 Pre-IELTS (B1)
          </button>
          <button
            onClick={() => setDifficultyFilter('core')}
            className={`shrink-0 rounded-xl px-2.5 py-1 text-xs font-bold transition-all ${
              difficultyFilter === 'core'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'border border-blue-500/20 bg-blue-500/10 text-blue-600 hover:bg-blue-500/20 dark:text-blue-400'
            }`}
          >
            🎯 IELTS Core (B2)
          </button>
          <button
            onClick={() => setDifficultyFilter('mastery')}
            className={`shrink-0 rounded-xl px-2.5 py-1 text-xs font-bold transition-all ${
              difficultyFilter === 'mastery'
                ? 'bg-purple-600 text-white shadow-xs'
                : 'border border-purple-500/20 bg-purple-500/10 text-purple-600 hover:bg-purple-500/20 dark:text-purple-400'
            }`}
          >
            ⚡ Mastery (C1)
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-2">
        {filteredReadingExams.map((passage, index) => (
          <div
            key={passage.id}
            className="group flex flex-col justify-between space-y-3 rounded-2xl border border-border bg-card p-4 shadow-xs transition-all hover:border-indigo-500/50 hover:shadow-md sm:p-5"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="rounded-full border border-indigo-500/20 bg-indigo-500/10 px-2.5 py-0.5 text-[10px] font-black uppercase text-indigo-600 dark:text-indigo-400">
                  Passage {index + 1} • {passage.academicLevel}
                </span>
                <span className="flex items-center gap-1 font-mono text-[11px] text-muted-foreground">
                  <Clock size={12} /> 20 min
                </span>
              </div>
              <h4 className="text-sm font-black text-foreground transition-colors group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                {passage.title}
              </h4>
              <p className="line-clamp-2 text-xs leading-relaxed text-muted-foreground">
                {passage.text}
              </p>
            </div>

            <div className="flex items-center justify-between border-t border-border/60 pt-3">
              <span className="text-[11px] font-semibold text-muted-foreground">
                📝 {passage.questions.length} ta savol
              </span>
              <Button
                onClick={() => onSelectPassage(passage)}
                className="flex cursor-pointer items-center gap-1 rounded-xl bg-indigo-600 px-3.5 py-1.5 text-xs font-black text-white shadow-xs hover:bg-indigo-700"
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
