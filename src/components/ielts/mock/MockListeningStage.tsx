import React, { useState, useEffect } from 'react';
import { Play, Pause, ArrowRight } from 'lucide-react';
import { FullMockExam } from '../../../data/ielts/fullMockData';

interface MockListeningStageProps {
  exam: FullMockExam;
  answers: Record<string, string>;
  onAnswerChange: (questionId: string | number, value: string) => void;
  onCompleteStage: () => void;
}

export const MockListeningStage: React.FC<MockListeningStageProps> = ({
  exam,
  answers,
  onAnswerChange,
  onCompleteStage,
}) => {
  const [listeningSectionIdx, setListeningSectionIdx] = useState(0);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  useEffect(() => {
    return () => {
      if (typeof window !== 'undefined' && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const handleToggleAudio = () => {
    if (
      typeof window === 'undefined' ||
      !window.speechSynthesis ||
      typeof SpeechSynthesisUtterance === 'undefined'
    )
      return;

    if (isPlayingAudio) {
      window.speechSynthesis.cancel();
      setIsPlayingAudio(false);
    } else {
      const speech = new SpeechSynthesisUtterance(
        exam.listening.sections[listeningSectionIdx].script,
      );
      speech.lang = 'en-GB';
      speech.rate = 0.95;
      speech.onend = () => setIsPlayingAudio(false);
      speech.onerror = () => setIsPlayingAudio(false);
      window.speechSynthesis.speak(speech);
      setIsPlayingAudio(true);
    }
  };

  const handleSectionSwitch = (idx: number) => {
    if (isPlayingAudio && typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.cancel();
      setIsPlayingAudio(false);
    }
    setListeningSectionIdx(idx);
  };

  const answeredCount = Object.keys(answers).length;
  const currentSection = exam.listening.sections[listeningSectionIdx];

  return (
    <div className="flex flex-1 flex-col space-y-6 duration-150 animate-in fade-in">
      {/* Listening Section Navigator */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          {exam.listening.sections.map((sec, idx) => (
            <button
              key={idx}
              onClick={() => handleSectionSwitch(idx)}
              className={`cursor-pointer rounded-xl px-3 py-1.5 text-xs font-bold transition-all ${
                listeningSectionIdx === idx
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-slate-800/80 text-slate-400 hover:text-slate-200'
              }`}
            >
              Section {sec.sectionNumber}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleToggleAudio}
            className={`flex items-center gap-1.5 rounded-xl px-3.5 py-1.5 text-xs font-bold text-white shadow-sm transition-all ${
              isPlayingAudio ? 'bg-amber-600 hover:bg-amber-500' : 'bg-blue-600 hover:bg-blue-500'
            }`}
          >
            {isPlayingAudio ? <Pause size={14} /> : <Play size={14} />}
            <span>{isPlayingAudio ? 'Audioni To‘xtatish' : 'Audioni Tinglash'}</span>
          </button>
        </div>
      </div>

      {/* Instruction banner */}
      <div className="rounded-2xl border border-blue-500/20 bg-blue-950/30 p-3.5 text-xs text-blue-200">
        <strong>Ko‘rsatma:</strong> {currentSection.instruction}
      </div>

      {/* Questions Form */}
      <div className="flex-1 space-y-4 overflow-y-auto rounded-3xl border border-slate-800 bg-slate-900/50 p-5 sm:p-6">
        <h3 className="text-sm font-black text-white">{currentSection.title}</h3>

        <div className="space-y-4">
          {currentSection.questions.map((q) => (
            <div
              key={q.id}
              className="space-y-2 rounded-2xl border border-slate-800 bg-slate-900 p-4"
            >
              <div className="flex items-start gap-2.5">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-xs font-black text-blue-400">
                  {q.id}
                </span>
                <p className="text-xs font-medium leading-relaxed text-slate-200 sm:text-sm">
                  {q.text}
                </p>
              </div>

              <div className="pl-8 pt-1">
                {q.options && q.options.length > 0 ? (
                  <div className="grid grid-cols-1 gap-2 text-xs sm:grid-cols-2">
                    {q.options.map((opt, optIdx) => (
                      <button
                        key={optIdx}
                        type="button"
                        onClick={() => onAnswerChange(q.id, String(optIdx))}
                        className={`cursor-pointer rounded-xl border p-2.5 text-left transition-all ${
                          answers[q.id] === String(optIdx)
                            ? 'border-blue-500 bg-blue-500/15 font-bold text-white'
                            : 'border-slate-800 bg-slate-950 text-slate-300 hover:border-slate-700'
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
                    placeholder="Javobingizni kiriting..."
                    value={answers[q.id] || ''}
                    onChange={(e) => onAnswerChange(q.id, e.target.value)}
                    className="focus:outline-hidden w-full max-w-md rounded-xl border border-slate-700 bg-slate-950 p-2.5 text-xs font-medium text-white focus:border-blue-500"
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Module Bar */}
      <div className="flex items-center justify-between pt-2">
        <span className="text-xs text-slate-400">
          To‘ldirilgan savollar: <strong className="text-white">{answeredCount} / 40</strong>
        </span>
        <button
          type="button"
          onClick={() => {
            if (
              window.confirm(
                'Listening modulini yakunlab, Reading moduliga o‘tishni tasdiqlaysizmi?',
              )
            ) {
              onCompleteStage();
            }
          }}
          className="flex cursor-pointer items-center gap-1.5 rounded-xl bg-blue-600 px-4 py-2.5 text-xs font-bold text-white shadow-md transition-all hover:bg-blue-500"
        >
          <span>2-Modul: Reading ga o‘tish</span>
          <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
};
