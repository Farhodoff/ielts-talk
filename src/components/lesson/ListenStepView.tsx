import React, { useEffect, useState } from 'react';
import { Volume2, Square, Eye, EyeOff, CheckCircle2, XCircle } from 'lucide-react';
import { ListenContent } from '../../types/lesson';
import { speakText, stopAllAudio } from '../../utils/audioTts';

interface ListenStepViewProps {
  content: ListenContent;
  onIncorrectAnswer?: (
    exerciseId: string,
    prompt: string,
    userAnswer: string | number,
    expectedAnswer: string | number,
    explanation?: string,
  ) => void;
}

/**
 * Listening step: TTS audio eshittiradi, transcript ixtiyoriy ochiladi,
 * keyin 2-3 ta comprehension savol beradi.
 * Har bir darsda Vocab+Grammar dan keyin 3-qadam sifatida ishlatiladi.
 */
export const ListenStepView: React.FC<ListenStepViewProps> = ({ content, onIncorrectAnswer }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTranscript, setShowTranscript] = useState(false);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    return () => stopAllAudio();
  }, []);

  const handleToggleAudio = () => {
    if (isPlaying) {
      stopAllAudio();
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
      speakText(content.audioText, 'en-GB');
      const estSeconds = Math.max(4, Math.ceil(content.audioText.length * 0.09));
      setTimeout(() => setIsPlaying(false), estSeconds * 1000);
    }
  };

  const handleSelect = (exerciseId: string, optIdx: number) => {
    if (checked) return;
    setAnswers((prev) => ({ ...prev, [exerciseId]: optIdx }));
  };

  const handleCheck = () => {
    setChecked(true);
    content.exercises.forEach((ex) => {
      const userAns = answers[ex.id];
      const expected = ex.correctAnswer as number;
      if (userAns !== undefined && userAns !== expected && onIncorrectAnswer) {
        onIncorrectAnswer(ex.id, ex.prompt, userAns, expected, ex.explanation);
      }
    });
  };

  const handleRetry = () => {
    setChecked(false);
    setAnswers({});
  };

  const correctCount = content.exercises.filter(
    (ex) => answers[ex.id] === (ex.correctAnswer as number),
  ).length;

  return (
    <div className="mx-auto max-w-3xl space-y-4 animate-in fade-in sm:space-y-6">
      {/* Audio card */}
      <div className="rounded-2xl border border-border bg-gradient-to-br from-card to-secondary/30 p-4 shadow-sm sm:rounded-3xl sm:p-6">
        <div className="mb-1 inline-flex items-center gap-1.5 rounded-md border border-purple-500/20 bg-purple-500/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-purple-500 sm:text-xs">
          🎧 Listening — Eshitib tushunish
        </div>
        <h2 className="mb-1 text-lg font-black text-foreground sm:text-2xl">{content.title}</h2>
        <p className="mb-4 text-xs text-muted-foreground sm:text-sm">{content.instructions}</p>

        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={handleToggleAudio}
            className="flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-xs font-bold text-primary-foreground shadow-md transition-all hover:opacity-90 active:scale-95 sm:py-3"
          >
            {isPlaying ? <Square size={14} className="fill-current" /> : <Volume2 size={16} />}
            <span>{isPlaying ? "To'xtatish" : 'Audioni eshitish 🔊'}</span>
          </button>
          <button
            onClick={() => setShowTranscript((v) => !v)}
            className="flex items-center gap-1.5 rounded-xl border border-border px-4 py-2.5 text-xs font-bold text-muted-foreground transition-all hover:bg-secondary hover:text-foreground"
          >
            {showTranscript ? <EyeOff size={14} /> : <Eye size={14} />}
            <span>{showTranscript ? 'Matnni yashirish' : 'Matnni ko‘rish'}</span>
          </button>
        </div>

        {showTranscript && (
          <div className="mt-4 space-y-2 rounded-xl border border-border/60 bg-secondary/30 p-3.5 text-xs leading-relaxed text-foreground sm:p-4 sm:text-sm">
            <p className="font-medium">{content.transcript}</p>
            {content.translation && (
              <p className="border-t border-border/50 pt-2 text-muted-foreground">
                {content.translation}
              </p>
            )}
          </div>
        )}
      </div>

      {/* Comprehension questions */}
      <div className="space-y-3">
        {content.exercises.map((ex, qIdx) => {
          const userAns = answers[ex.id];
          const expected = ex.correctAnswer as number;
          const isCorrect = checked && userAns === expected;
          const isWrong = checked && userAns !== undefined && userAns !== expected;
          return (
            <div
              key={ex.id}
              className={`rounded-2xl border p-4 transition-all sm:p-5 ${
                isCorrect
                  ? 'border-emerald-500/40 bg-emerald-500/5'
                  : isWrong
                    ? 'border-rose-500/40 bg-rose-500/5'
                    : 'border-border bg-card'
              }`}
            >
              <div className="mb-2.5 flex items-start gap-2">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-secondary text-[11px] font-black text-foreground">
                  {qIdx + 1}
                </span>
                <p className="text-xs font-bold text-foreground sm:text-sm">{ex.prompt}</p>
              </div>
              <div className="grid grid-cols-1 gap-2">
                {(ex.options || []).map((opt, oIdx) => {
                  const selected = userAns === oIdx;
                  return (
                    <button
                      key={oIdx}
                      onClick={() => handleSelect(ex.id, oIdx)}
                      disabled={checked}
                      className={`flex items-center justify-between gap-2 rounded-xl border px-3.5 py-2.5 text-left text-xs transition-all sm:text-sm ${
                        checked && oIdx === expected
                          ? 'border-emerald-500 bg-emerald-500/10 font-bold'
                          : selected
                            ? checked
                              ? 'border-rose-500 bg-rose-500/10'
                              : 'border-primary bg-primary/10 font-bold'
                            : 'border-border hover:border-primary/40'
                      }`}
                    >
                      <span>{opt}</span>
                      {checked && oIdx === expected && (
                        <CheckCircle2 size={15} className="shrink-0 text-emerald-500" />
                      )}
                      {checked && selected && oIdx !== expected && (
                        <XCircle size={15} className="shrink-0 text-rose-500" />
                      )}
                    </button>
                  );
                })}
              </div>
              {checked && ex.explanation && (
                <p className="mt-2 text-[11px] leading-relaxed text-muted-foreground sm:text-xs">
                  💡 {ex.explanation}
                </p>
              )}
            </div>
          );
        })}
      </div>

      {/* Check footer */}
      <div className="flex items-center justify-between rounded-2xl border border-border bg-card p-3.5 sm:p-4">
        <span className="text-xs font-bold text-muted-foreground">
          {checked
            ? `Natija: ${correctCount}/${content.exercises.length} to'g'ri`
            : 'Javoblarni belgilab Tekshirishni bosing'}
        </span>
        {checked ? (
          <button
            onClick={handleRetry}
            className="rounded-xl border border-border px-4 py-2 text-xs font-bold text-foreground hover:bg-secondary"
          >
            Qayta urinish
          </button>
        ) : (
          <button
            onClick={handleCheck}
            disabled={Object.keys(answers).length !== content.exercises.length}
            className="rounded-xl bg-primary px-5 py-2 text-xs font-black text-primary-foreground shadow-md hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Tekshirish
          </button>
        )}
      </div>
    </div>
  );
};

export default ListenStepView;
