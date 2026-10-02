import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { FullMockExam } from '../../../data/ielts/fullMockData';

interface MockWritingStageProps {
  exam: FullMockExam;
  answers: { task1: string; task2: string };
  onAnswerChange: (task: 'task1' | 'task2', text: string) => void;
  onCompleteStage: () => void;
}

export const MockWritingStage: React.FC<MockWritingStageProps> = ({
  exam,
  answers,
  onAnswerChange,
  onCompleteStage,
}) => {
  const [writingTaskTab, setWritingTaskTab] = useState<'task1' | 'task2'>('task1');

  const task1Words = answers.task1.trim().split(/\s+/).filter(Boolean).length;
  const task2Words = answers.task2.trim().split(/\s+/).filter(Boolean).length;

  return (
    <div className="flex flex-1 flex-col space-y-4 duration-150 animate-in fade-in">
      {/* Task Switcher */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setWritingTaskTab('task1')}
            className={`cursor-pointer rounded-xl px-4 py-2 text-xs font-bold transition-all ${
              writingTaskTab === 'task1'
                ? 'bg-amber-600 text-white shadow-sm'
                : 'bg-slate-800/80 text-slate-400 hover:text-slate-200'
            }`}
          >
            Writing Task 1 (Min 150 so‘z)
          </button>
          <button
            onClick={() => setWritingTaskTab('task2')}
            className={`cursor-pointer rounded-xl px-4 py-2 text-xs font-bold transition-all ${
              writingTaskTab === 'task2'
                ? 'bg-amber-600 text-white shadow-sm'
                : 'bg-slate-800/80 text-slate-400 hover:text-slate-200'
            }`}
          >
            Writing Task 2 (Min 250 so‘z)
          </button>
        </div>

        {/* Word Count Indicator */}
        <div className="flex items-center gap-2">
          {writingTaskTab === 'task1' ? (
            <span
              className={`rounded-full px-3 py-1 text-xs font-bold ${
                task1Words >= 150
                  ? 'border border-emerald-500/30 bg-emerald-500/15 text-emerald-400'
                  : 'border border-amber-500/30 bg-amber-500/15 text-amber-400'
              }`}
            >
              Task 1: {task1Words} / 150 so‘z
            </span>
          ) : (
            <span
              className={`rounded-full px-3 py-1 text-xs font-bold ${
                task2Words >= 250
                  ? 'border border-emerald-500/30 bg-emerald-500/15 text-emerald-400'
                  : 'border border-amber-500/30 bg-amber-500/15 text-amber-400'
              }`}
            >
              Task 2: {task2Words} / 250 so‘z
            </span>
          )}
        </div>
      </div>

      {/* Prompt & Editor Split */}
      <div className="grid flex-1 grid-cols-1 gap-5 overflow-hidden lg:grid-cols-12">
        {/* Left Pane: Prompt Card */}
        <div className="max-h-[62vh] space-y-4 overflow-y-auto rounded-3xl border border-slate-800 bg-slate-900/60 p-5 sm:p-6 lg:col-span-5">
          {writingTaskTab === 'task1' ? (
            <>
              <span className="rounded-md bg-amber-500/20 px-2 py-0.5 text-[10px] font-bold uppercase text-amber-300">
                {exam.writing.task1.category}
              </span>
              <h3 className="text-sm font-black text-white sm:text-base">
                {exam.writing.task1.title}
              </h3>
              <p className="text-xs leading-relaxed text-slate-300">{exam.writing.task1.prompt}</p>
              <div className="space-y-1 rounded-xl border border-slate-800 bg-slate-950 p-3 text-[11px] text-slate-400">
                <strong className="block text-slate-300">Akademik Maslahat:</strong>
                Kamida 150 ta so‘z yozing. Asosiy trendlarni umumlashtiring (overview) va o‘z
                shaxsiy fikringizni bildirmang.
              </div>
            </>
          ) : (
            <>
              <span className="rounded-md bg-amber-500/20 px-2 py-0.5 text-[10px] font-bold uppercase text-amber-300">
                {exam.writing.task2.category}
              </span>
              <h3 className="text-sm font-black text-white sm:text-base">
                {exam.writing.task2.title}
              </h3>
              <p className="text-xs leading-relaxed text-slate-300">{exam.writing.task2.prompt}</p>
              <div className="space-y-1 rounded-xl border border-slate-800 bg-slate-950 p-3 text-[11px] text-slate-400">
                <strong className="block text-slate-300">Akademik Maslahat:</strong>
                Kamida 250 ta so‘z yozing. To‘liq paragraflarga bo‘ling (Introduction, Body 1, Body
                2, Conclusion) va har ikki tomonni argumentlar bilan yoriting.
              </div>
            </>
          )}
        </div>

        {/* Right Pane: Textarea Editor */}
        <div className="flex flex-col rounded-3xl border border-slate-800 bg-slate-900/70 p-4 lg:col-span-7">
          <textarea
            rows={16}
            value={writingTaskTab === 'task1' ? answers.task1 : answers.task2}
            onChange={(e) => onAnswerChange(writingTaskTab, e.target.value)}
            placeholder={
              writingTaskTab === 'task1'
                ? 'Task 1 inshoyingizni shu yerga yozing...'
                : 'Task 2 akademik inshoyingizni shu yerga yozing...'
            }
            className="focus:outline-hidden w-full flex-1 resize-none rounded-2xl border border-slate-700 bg-slate-950 p-4 font-mono text-xs leading-relaxed text-white placeholder-slate-500 focus:border-amber-500 sm:text-sm"
          />
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex items-center justify-between pt-2">
        <span className="text-xs text-slate-400">
          Tavsiya: Task 1 ga 20 daqiqa, Task 2 ga 40 daqiqa ajrating.
        </span>
        <button
          type="button"
          onClick={() => {
            if (
              window.confirm(
                'Writing modulini yakunlab, Speaking moduliga o‘tishni tasdiqlaysizmi?',
              )
            ) {
              onCompleteStage();
            }
          }}
          className="flex cursor-pointer items-center gap-1.5 rounded-xl bg-amber-600 px-4 py-2.5 text-xs font-bold text-white shadow-md transition-all hover:bg-amber-500"
        >
          <span>4-Modul: Speaking ga o‘tish</span>
          <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
};
