import React, { useState } from 'react';
import { Type, ArrowRight } from 'lucide-react';
import { FullMockExam } from '../../../data/ielts/fullMockData';

interface MockReadingStageProps {
  exam: FullMockExam;
  answers: Record<string, string>;
  onAnswerChange: (questionId: string | number, value: string) => void;
  onCompleteStage: () => void;
}

export const MockReadingStage: React.FC<MockReadingStageProps> = ({
  exam,
  answers,
  onAnswerChange,
  onCompleteStage,
}) => {
  const [readingPassageIdx, setReadingPassageIdx] = useState(0);
  const [readingFontSize, setReadingFontSize] = useState<'normal' | 'large'>('normal');

  const currentPassage = exam.reading.passages[readingPassageIdx];
  const answeredCount = Object.keys(answers).length;

  return (
    <div className="flex flex-1 flex-col space-y-4 duration-150 animate-in fade-in">
      {/* Reading Passage Selector & Font Size */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          {exam.reading.passages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setReadingPassageIdx(idx)}
              className={`cursor-pointer rounded-xl px-3 py-1.5 text-xs font-bold transition-all ${
                readingPassageIdx === idx
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'bg-slate-800/80 text-slate-400 hover:text-slate-200'
              }`}
            >
              Passage {idx + 1}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setReadingFontSize((prev) => (prev === 'normal' ? 'large' : 'normal'))}
            className="rounded-xl border border-slate-800 bg-slate-900 px-2.5 py-1 text-xs text-slate-300 hover:bg-slate-800"
            title="Shrift hajmini o‘zgartirish"
          >
            <Type size={14} />
          </button>
        </div>
      </div>

      {/* Split Screen: Left Passage, Right Questions */}
      <div className="grid flex-1 grid-cols-1 gap-5 overflow-hidden lg:grid-cols-12">
        {/* Left Pane: Academic Reading Passage */}
        <div className="flex max-h-[62vh] flex-col overflow-y-auto rounded-3xl border border-slate-800 bg-slate-900/60 p-5 sm:p-6 lg:col-span-7">
          <h3 className="mb-2 text-base font-black text-white sm:text-lg">
            {currentPassage.title}
          </h3>
          <span className="mb-4 block text-[11px] font-bold text-emerald-400">
            {currentPassage.academicLevel}
          </span>

          <div
            className={`space-y-3.5 font-serif leading-relaxed text-slate-200 ${
              readingFontSize === 'large' ? 'text-sm sm:text-base' : 'text-xs sm:text-sm'
            }`}
          >
            {currentPassage.text.split('\n\n').map((para, pIdx) => (
              <p key={pIdx} className="indent-4">
                {para}
              </p>
            ))}
          </div>
        </div>

        {/* Right Pane: Interactive Questions */}
        <div className="flex max-h-[62vh] flex-col space-y-4 overflow-y-auto rounded-3xl border border-slate-800 bg-slate-900/70 p-5 lg:col-span-5">
          <h4 className="text-xs font-black uppercase tracking-wider text-slate-400">
            Passage {readingPassageIdx + 1} Savollari
          </h4>

          <div className="space-y-3.5">
            {currentPassage.questions.map((q) => (
              <div
                key={q.id}
                className="space-y-2 rounded-2xl border border-slate-800 bg-slate-950 p-3.5 text-xs"
              >
                <div className="flex items-start gap-2">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-emerald-500/15 text-[11px] font-black text-emerald-400">
                    {q.id}
                  </span>
                  <p className="font-medium text-slate-200">{q.text}</p>
                </div>

                {q.options && q.options.length > 0 ? (
                  <div className="grid grid-cols-1 gap-1.5 pt-1">
                    {q.options.map((opt, optIdx) => (
                      <button
                        key={optIdx}
                        type="button"
                        onClick={() => onAnswerChange(q.id, String(optIdx))}
                        className={`cursor-pointer rounded-xl border p-2 text-left text-xs transition-all ${
                          answers[q.id] === String(optIdx)
                            ? 'border-emerald-500 bg-emerald-500/15 font-bold text-white'
                            : 'border-slate-800 bg-slate-900 text-slate-300 hover:border-slate-700'
                        }`}
                      >
                        <span className="mr-1.5 font-bold text-slate-400">
                          {String.fromCharCode(65 + optIdx)}.
                        </span>
                        {opt}
                      </button>
                    ))}
                  </div>
                ) : (
                  <input
                    type="text"
                    placeholder="Javob..."
                    value={answers[q.id] || ''}
                    onChange={(e) => onAnswerChange(q.id, e.target.value)}
                    className="focus:outline-hidden w-full rounded-xl border border-slate-700 bg-slate-900 p-2 text-xs text-white focus:border-emerald-500"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex items-center justify-between pt-2">
        <span className="text-xs text-slate-400">
          Belgilangan javoblar: <strong className="text-white">{answeredCount} / 40</strong>
        </span>
        <button
          type="button"
          onClick={() => {
            if (
              window.confirm('Reading modulini yakunlab, Writing moduliga o‘tishni tasdiqlaysizmi?')
            ) {
              onCompleteStage();
            }
          }}
          className="flex cursor-pointer items-center gap-1.5 rounded-xl bg-emerald-600 px-4 py-2.5 text-xs font-bold text-white shadow-md transition-all hover:bg-emerald-500"
        >
          <span>3-Modul: Writing ga o‘tish</span>
          <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
};
