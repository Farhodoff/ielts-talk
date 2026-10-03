import React, { useState } from 'react';
import { ArrowLeft, Clock, BookOpen, FileText, CheckCircle2, ChevronRight } from 'lucide-react';
import { Button } from '../../ui/Button';
import { MockAudioPlayer } from './MockAudioPlayer';
import { MockPassageData } from '../../../types/ieltsMock';

interface MockExamActiveRunnerProps {
  testType: 'reading' | 'listening';
  passage: MockPassageData;
  timeLeft: number;
  userAnswers: Record<number, string>;
  onOptionSelect: (questionId: number, answer: string) => void;
  onSubmit: () => void;
  onCancel: () => void;
}

const formatTime = (secs: number): string => {
  const m = Math.floor(secs / 60);
  const s = Math.floor(secs % 60);
  return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
};

export const MockExamActiveRunner: React.FC<MockExamActiveRunnerProps> = ({
  testType,
  passage,
  timeLeft,
  userAnswers,
  onOptionSelect,
  onSubmit,
  onCancel,
}) => {
  const [mobileTab, setMobileTab] = useState<'passage' | 'questions'>('passage');

  return (
    <div className="space-y-6">
      {/* Sticky Header with Timer & Back */}
      <div className="sticky top-4 z-20 flex items-center justify-between rounded-2xl border border-border bg-card p-4 shadow-xs backdrop-blur-md">
        <div className="flex items-center gap-3">
          <button
            onClick={onCancel}
            className="rounded-xl p-2 text-muted-foreground transition-all hover:bg-muted hover:text-foreground"
            title="Sinovni bekor qilish"
          >
            <ArrowLeft size={18} />
          </button>
          <div>
            <span className="block text-[10px] font-black uppercase tracking-wider text-indigo-500">
              IELTS {testType.toUpperCase()} MOCK
            </span>
            <h3 className="line-clamp-1 text-xs font-bold text-foreground">{passage.title}</h3>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3.5 py-1.5 font-mono text-xs font-black text-indigo-600 dark:text-indigo-400">
            <Clock size={15} />
            <span>{formatTime(timeLeft)}</span>
          </div>
        </div>
      </div>

      {/* Mobile Switcher (Visible only on < lg screens) */}
      <div className="flex rounded-2xl border border-border bg-card p-1.5 shadow-xs lg:hidden">
        <button
          onClick={() => setMobileTab('passage')}
          className={`flex flex-1 items-center justify-center gap-1.5 rounded-xl py-2.5 text-xs font-black transition-all ${
            mobileTab === 'passage'
              ? 'bg-indigo-600 text-white shadow-md'
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          <BookOpen size={14} />
          <span>{testType === 'reading' ? '📖 Matn' : '🎧 Audio'}</span>
        </button>
        <button
          onClick={() => setMobileTab('questions')}
          className={`flex flex-1 items-center justify-center gap-1.5 rounded-xl py-2.5 text-xs font-black transition-all ${
            mobileTab === 'questions'
              ? 'bg-indigo-600 text-white shadow-md'
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          <FileText size={14} />
          <span>
            📝 Savollar ({Object.keys(userAnswers).length}/{passage.questions.length})
          </span>
        </button>
      </div>

      {/* Passage & Questions Grid */}
      <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-2">
        {/* LEFT: Passage or Audio Player */}
        <div
          className={`h-fit space-y-4 rounded-2xl border border-border bg-card p-4 shadow-xs sm:rounded-3xl sm:p-6 ${
            mobileTab === 'questions' ? 'hidden lg:block' : 'block'
          }`}
        >
          <div className="flex items-center justify-between border-b border-border pb-3">
            <h3 className="text-sm font-extrabold text-foreground sm:text-base">{passage.title}</h3>
            {passage.academicLevel && (
              <span className="rounded-md border border-border bg-muted px-2 py-0.5 text-[10px] font-black text-muted-foreground">
                {passage.academicLevel}
              </span>
            )}
          </div>

          {testType === 'listening' ? (
            <div>
              <MockAudioPlayer
                audioUrl={passage.audioUrl}
                script={passage.script}
                text={passage.text}
              />
              <button
                onClick={() => setMobileTab('questions')}
                className="mt-2 flex w-full cursor-pointer items-center justify-center gap-1.5 rounded-xl bg-purple-600 px-4 py-3 text-xs font-black text-white shadow-md transition-all hover:bg-purple-700 active:scale-95 lg:hidden"
              >
                <span>Savollarga o'tish ({passage.questions.length})</span>
                <ChevronRight size={14} />
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="max-h-[450px] space-y-3 overflow-y-auto whitespace-pre-line pr-2 font-serif text-xs leading-relaxed text-foreground/90 sm:max-h-[600px]">
                {passage.text}
              </div>
              <button
                onClick={() => setMobileTab('questions')}
                className="flex w-full cursor-pointer items-center justify-center gap-1.5 rounded-xl bg-indigo-600 px-4 py-3 text-xs font-black text-white shadow-md transition-all hover:bg-indigo-700 active:scale-95 lg:hidden"
              >
                <span>Savollarga o'tish ({passage.questions.length})</span>
                <ChevronRight size={14} />
              </button>
            </div>
          )}
        </div>

        {/* RIGHT: Questions Form */}
        <div className={`space-y-4 ${mobileTab === 'passage' ? 'hidden lg:block' : 'block'}`}>
          <div className="flex items-center justify-between rounded-2xl border border-border/60 bg-muted/30 p-3 text-xs text-muted-foreground">
            <span>
              Savollar: {Object.keys(userAnswers).length} / {passage.questions.length} ta
            </span>
            <button
              onClick={() => setMobileTab('passage')}
              className="flex cursor-pointer items-center gap-1 text-xs font-bold text-indigo-500 hover:underline lg:hidden"
            >
              <BookOpen size={13} /> {testType === 'reading' ? 'Matnga qaytish' : 'Audyoga qaytish'}
            </button>
            <span className="hidden font-bold text-indigo-500 lg:inline">IELTS Formati</span>
          </div>

          {passage.questions.map((q) => (
            <div
              key={q.id}
              className="space-y-3 rounded-2xl border border-border bg-card p-4 shadow-xs sm:p-5"
            >
              <h4 className="flex items-start gap-1.5 text-xs font-black text-foreground">
                <span className="shrink-0 text-indigo-500">Q{q.id}.</span>
                <span>{q.text}</span>
              </h4>

              {/* Question Type: Choice */}
              {q.type === 'choice' && q.options && (
                <div className="space-y-2">
                  {q.options.map((opt, idx) => {
                    const isSelected = userAnswers[q.id] === idx.toString();
                    return (
                      <button
                        key={idx}
                        onClick={() => onOptionSelect(q.id, idx.toString())}
                        className={`flex min-h-[44px] w-full cursor-pointer items-center justify-between rounded-xl border p-3 text-left text-xs font-bold transition-all ${
                          isSelected
                            ? 'border-indigo-500 bg-indigo-500/20 text-indigo-600 shadow-xs dark:text-indigo-400'
                            : 'border-border bg-muted/30 text-muted-foreground hover:bg-muted'
                        }`}
                      >
                        <span>{opt}</span>
                        {isSelected && (
                          <CheckCircle2 size={16} className="shrink-0 text-indigo-500" />
                        )}
                      </button>
                    );
                  })}
                </div>
              )}

              {/* Question Type: Fill in the blank */}
              {q.type === 'fill' && (
                <input
                  type="text"
                  value={userAnswers[q.id] || ''}
                  onChange={(e) => onOptionSelect(q.id, e.target.value)}
                  placeholder="Javobingizni yozing..."
                  className="min-h-[44px] w-full rounded-xl border border-border bg-muted/30 px-3.5 py-2.5 text-xs font-medium text-foreground focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:px-4"
                />
              )}
            </div>
          ))}

          <Button
            onClick={onSubmit}
            className="w-full cursor-pointer rounded-2xl bg-indigo-600 py-3.5 text-sm font-black text-white shadow-xl transition-all hover:bg-indigo-700 hover:shadow-indigo-500/25 sm:py-4"
          >
            Testni Yakunlash 🎯
          </Button>
        </div>
      </div>
    </div>
  );
};
