import React, { useState, useEffect } from 'react';
import {
  X,
  Volume2,
  CheckCircle2,
  XCircle,
  Award,
  ChevronLeft,
  ChevronRight,
  AlertCircle,
  RotateCcw,
} from 'lucide-react';
import { CheckpointTest } from '../../../data/ielts/checkpointTestsData';
import { CheckpointTestService, CheckpointResult } from '../../../services/CheckpointTestService';
import { useStudyData } from '../../../context/IeltsTalkContext';

interface CheckpointTestModalProps {
  isOpen: boolean;
  onClose: () => void;
  checkpoint: CheckpointTest | null;
  candidateId?: string;
  onCompleted?: (result: CheckpointResult) => void;
}

export const CheckpointTestModal: React.FC<CheckpointTestModalProps> = ({
  isOpen,
  onClose,
  checkpoint,
  candidateId = 'guest',
  onCompleted,
}) => {
  const { awardXP } = useStudyData();
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [result, setResult] = useState<CheckpointResult | null>(null);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [showReview, setShowReview] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setCurrentIdx(0);
      setAnswers({});
      setIsSubmitted(false);
      setResult(null);
      setShowReview(false);
      setIsPlayingAudio(false);
    }
    return () => {
      if (typeof window !== 'undefined' && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, [isOpen, checkpoint?.id]);

  if (!isOpen || !checkpoint) return null;

  const currentQ = checkpoint.questions[currentIdx];
  const answeredCount = Object.keys(answers).length;
  const isLastQuestion = currentIdx === checkpoint.questions.length - 1;

  const handlePlayAudio = (snippet?: string) => {
    if (
      !snippet ||
      typeof window === 'undefined' ||
      !window.speechSynthesis ||
      typeof SpeechSynthesisUtterance === 'undefined'
    )
      return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(snippet);
    utterance.lang = 'en-GB';
    utterance.rate = 0.95;
    utterance.onend = () => setIsPlayingAudio(false);
    utterance.onerror = () => setIsPlayingAudio(false);
    setIsPlayingAudio(true);
    window.speechSynthesis.speak(utterance);
  };

  const handleSelectAnswer = (optionIdx: number) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQ.id]: optionIdx,
    }));
  };

  const handleSubmit = () => {
    if (answeredCount < checkpoint.questions.length) {
      const confirmSubmit = window.confirm(
        `Siz 20 ta savoldan ${answeredCount} tasiga javob berdingiz. Shunda ham imtihonni yakunlamoqchimisiz?`,
      );
      if (!confirmSubmit) return;
    }

    const evalResult = CheckpointTestService.evaluateAnswers(checkpoint, candidateId, answers);
    setResult(evalResult);
    setIsSubmitted(true);

    if (evalResult.isPassed && awardXP) {
      awardXP(evalResult.xpEarned).catch(() => {});
    }

    if (onCompleted) {
      onCompleted(evalResult);
    }
  };

  const handleRetake = () => {
    setCurrentIdx(0);
    setAnswers({});
    setIsSubmitted(false);
    setResult(null);
    setShowReview(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md">
      <div className="flex max-h-[92vh] w-full max-w-2xl flex-col rounded-3xl border border-slate-800 bg-slate-900 shadow-2xl duration-200 animate-in fade-in zoom-in-95">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 p-5 sm:p-6">
          <div className="space-y-0.5">
            <span className="text-[10px] font-black uppercase tracking-wider text-blue-400">
              {checkpoint.fromLevel} → {checkpoint.toLevel}
            </span>
            <h3 className="text-base font-black text-white sm:text-lg">{checkpoint.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="cursor-pointer rounded-xl p-2 text-slate-400 hover:bg-slate-800 hover:text-white"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6">
          {!isSubmitted ? (
            <div className="space-y-6">
              {/* Progress Bar & Question Counter */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-slate-300">
                  <span>
                    Savol {currentIdx + 1} / {checkpoint.questions.length}
                  </span>
                  <span className="rounded-md bg-blue-500/15 px-2 py-0.5 text-[10px] font-black uppercase text-blue-400">
                    {currentQ.skill} • {currentQ.topic}
                  </span>
                </div>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-800">
                  <div
                    className="h-full bg-blue-500 transition-all duration-200"
                    style={{
                      width: `${((currentIdx + 1) / checkpoint.questions.length) * 100}%`,
                    }}
                  />
                </div>
              </div>

              {/* Audio Snippet button if listening/phonetics */}
              {currentQ.audioSnippet && (
                <div className="flex items-center justify-between rounded-2xl border border-blue-500/20 bg-blue-950/30 p-3.5">
                  <span className="text-xs font-semibold text-blue-200">
                    Audio matnini tinglash:
                  </span>
                  <button
                    type="button"
                    onClick={() => handlePlayAudio(currentQ.audioSnippet)}
                    className="flex cursor-pointer items-center gap-1.5 rounded-xl bg-blue-600 px-3 py-1.5 text-xs font-bold text-white shadow-sm transition hover:bg-blue-500 active:scale-95"
                  >
                    <Volume2 size={14} className={isPlayingAudio ? 'animate-bounce' : ''} />
                    <span>{isPlayingAudio ? 'Ijro etilmoqda...' : 'Audioni Eshitish'}</span>
                  </button>
                </div>
              )}

              {/* Question Prompt */}
              <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4 sm:p-5">
                <p className="whitespace-pre-line text-sm font-bold leading-relaxed text-white sm:text-base">
                  {currentQ.prompt}
                </p>
              </div>

              {/* Options */}
              <div className="space-y-2.5">
                {currentQ.options.map((opt, optIdx) => {
                  const isSelected = answers[currentQ.id] === optIdx;
                  return (
                    <button
                      key={optIdx}
                      type="button"
                      onClick={() => handleSelectAnswer(optIdx)}
                      className={`flex w-full cursor-pointer items-center justify-between rounded-2xl border p-3.5 text-left text-xs font-bold transition-all sm:text-sm ${
                        isSelected
                          ? 'border-blue-500 bg-blue-500/15 text-white shadow-sm'
                          : 'border-slate-800 bg-slate-950 text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-lg text-xs font-black ${
                            isSelected ? 'bg-blue-500 text-white' : 'bg-slate-800 text-slate-400'
                          }`}
                        >
                          {String.fromCharCode(65 + optIdx)}
                        </span>
                        <span>{opt}</span>
                      </div>
                      {isSelected && <CheckCircle2 size={16} className="text-blue-400" />}
                    </button>
                  );
                })}
              </div>
            </div>
          ) : result ? (
            /* Results View */
            <div className="space-y-6">
              {/* Celebratory Hero Pill */}
              <div
                className={`relative overflow-hidden rounded-3xl border p-6 text-center shadow-xl sm:p-8 ${
                  result.isPassed
                    ? 'border-emerald-500/40 bg-gradient-to-b from-emerald-950/50 via-slate-900 to-slate-950'
                    : 'border-amber-500/40 bg-gradient-to-b from-amber-950/50 via-slate-900 to-slate-950'
                }`}
              >
                <div className="space-y-2">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-500 text-white shadow-lg">
                    {result.isPassed ? <Award size={36} /> : <AlertCircle size={36} />}
                  </div>

                  <h3 className="text-xl font-black text-white sm:text-2xl">
                    {result.isPassed
                      ? 'Tabriklaymiz! Bosqich Muvaffaqiyatli O‘zlashtirildi'
                      : 'Natija yetarli emas (Minimal 80% talab qilinadi)'}
                  </h3>

                  <p className="text-xs text-slate-300">
                    {result.isPassed
                      ? `Siz 20 ta savoldan ${result.score} tasiga to‘g‘ri javob berdingiz (${result.percentage}%). Sizga "${checkpoint.badgeName}" nishoni berildi va keyingi bosqich ochildi!`
                      : `Siz 20 ta savoldan ${result.score} tasiga to‘g‘ri javob berdingiz (${result.percentage}%). O‘tish uchun kamida 16 ta to‘g‘ri javob (80%) kerak.`}
                  </p>

                  <div className="flex items-center justify-center gap-2 pt-2">
                    <span className="rounded-full border border-emerald-500/30 bg-emerald-500/15 px-3 py-1 font-mono text-sm font-black text-emerald-400">
                      Ball: {result.score} / {result.totalQuestions} ({result.percentage}%)
                    </span>
                    <span className="rounded-full border border-amber-500/30 bg-amber-500/15 px-3 py-1 text-xs font-bold text-amber-400">
                      +{result.xpEarned} XP
                    </span>
                  </div>
                </div>
              </div>

              {/* Skills Breakdown */}
              <div className="space-y-3 rounded-2xl border border-slate-800 bg-slate-950 p-4 sm:p-5">
                <h4 className="text-xs font-black uppercase tracking-wider text-slate-300">
                  Ko‘nikmalar bo‘yicha natija:
                </h4>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {Object.entries(result.skillBreakdown)
                    .filter(([_, stats]) => stats.total > 0)
                    .map(([skill, stats]) => (
                      <div
                        key={skill}
                        className="rounded-xl border border-slate-800 bg-slate-900/80 p-3"
                      >
                        <span className="block text-[10px] font-black uppercase text-slate-400">
                          {skill}
                        </span>
                        <span className="text-sm font-black text-white">
                          {stats.correct} / {stats.total}
                        </span>
                        <span className="block text-[11px] font-bold text-blue-400">
                          {stats.percentage}%
                        </span>
                      </div>
                    ))}
                </div>
              </div>

              {/* Weak Topics */}
              {result.weakTopics.length > 0 && (
                <div className="space-y-2 rounded-2xl border border-amber-500/20 bg-amber-950/20 p-4">
                  <h4 className="text-xs font-bold text-amber-300">
                    Qayta takrorlash tavsiya etiladigan mavzular:
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {result.weakTopics.map((topic, tIdx) => (
                      <span
                        key={tIdx}
                        className="rounded-md border border-amber-500/30 bg-amber-500/10 px-2 py-0.5 text-[11px] font-semibold text-amber-200"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Review Answers Toggle */}
              <div>
                <button
                  type="button"
                  onClick={() => setShowReview(!showReview)}
                  className="cursor-pointer text-xs font-bold text-blue-400 hover:underline"
                >
                  {showReview
                    ? '▲ Savollar tahlilini yopish'
                    : '▼ Barcha savollar va javoblar tahlilini ko‘rish'}
                </button>

                {showReview && (
                  <div className="mt-4 space-y-3">
                    {checkpoint.questions.map((q, idx) => {
                      const userAns = answers[q.id];
                      const isCorrect = userAns === q.correctAnswerIndex;
                      return (
                        <div
                          key={q.id}
                          className={`space-y-1.5 rounded-2xl border p-3.5 text-xs ${
                            isCorrect
                              ? 'border-emerald-500/30 bg-emerald-950/20'
                              : 'border-red-500/30 bg-red-950/20'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-white">
                              {idx + 1}. {q.prompt}
                            </span>
                            {isCorrect ? (
                              <CheckCircle2 size={16} className="text-emerald-400" />
                            ) : (
                              <XCircle size={16} className="text-red-400" />
                            )}
                          </div>
                          <p className="text-slate-300">
                            <strong>To‘g‘ri javob:</strong> {q.options[q.correctAnswerIndex]}
                          </p>
                          {userAns !== undefined && !isCorrect && (
                            <p className="text-red-300">
                              <strong>Siz tanladingiz:</strong> {q.options[userAns]}
                            </p>
                          )}
                          <p className="italic text-slate-400">{q.explanation}</p>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          ) : null}
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between border-t border-slate-800 p-4 sm:p-5">
          {!isSubmitted ? (
            <>
              <button
                type="button"
                onClick={() => setCurrentIdx((prev) => Math.max(0, prev - 1))}
                disabled={currentIdx === 0}
                className="flex cursor-pointer items-center gap-1 rounded-xl border border-slate-700 bg-slate-800 px-3.5 py-2 text-xs font-bold text-slate-300 transition hover:bg-slate-700 disabled:opacity-40"
              >
                <ChevronLeft size={14} />
                <span>Oldingi</span>
              </button>

              <div className="flex items-center gap-2">
                {isLastQuestion ? (
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="flex cursor-pointer items-center gap-1.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-5 py-2.5 text-xs font-black text-white shadow-md hover:from-emerald-500 hover:to-teal-500"
                  >
                    <CheckCircle2 size={14} />
                    <span>Imtihonni Yakunlash</span>
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() =>
                      setCurrentIdx((prev) => Math.min(checkpoint.questions.length - 1, prev + 1))
                    }
                    className="flex cursor-pointer items-center gap-1 rounded-xl bg-blue-600 px-4 py-2 text-xs font-bold text-white transition hover:bg-blue-500"
                  >
                    <span>Keyingi</span>
                    <ChevronRight size={14} />
                  </button>
                )}
              </div>
            </>
          ) : (
            <div className="flex w-full items-center justify-between">
              <button
                type="button"
                onClick={handleRetake}
                className="flex cursor-pointer items-center gap-1.5 rounded-xl border border-slate-700 bg-slate-800 px-4 py-2 text-xs font-bold text-slate-200 transition hover:bg-slate-700"
              >
                <RotateCcw size={14} />
                <span>Qayta topshirish</span>
              </button>
              <button
                type="button"
                onClick={onClose}
                className="cursor-pointer rounded-xl bg-blue-600 px-5 py-2 text-xs font-black text-white hover:bg-blue-500"
              >
                Yopish
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
