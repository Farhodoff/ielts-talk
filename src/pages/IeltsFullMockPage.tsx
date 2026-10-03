import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock } from 'lucide-react';
import { useFullMockExam } from '../hooks/useFullMockExam';
import { MockDeviceCheck } from '../components/ielts/mock/MockDeviceCheck';
import { MockListeningStage } from '../components/ielts/mock/MockListeningStage';
import { MockReadingStage } from '../components/ielts/mock/MockReadingStage';
import { MockWritingStage } from '../components/ielts/mock/MockWritingStage';
import { MockSpeakingStage } from '../components/ielts/mock/MockSpeakingStage';
import { MockEvaluatingStage } from '../components/ielts/mock/MockEvaluatingStage';
import { MockResultsView } from '../components/ielts/mock/MockResultsView';

export const IeltsFullMockPage: React.FC = () => {
  const navigate = useNavigate();
  const {
    exam,
    stage,
    candidateName,
    setCandidateName,
    timeLeft,
    answers,
    evalProgressText,
    examResult,
    advanceToStage,
    handleAnswerListening,
    handleAnswerReading,
    handleAnswerWriting,
    handleSaveSpeakingPart1,
    handleSaveSpeakingPart2,
    handleSaveSpeakingPart3,
  } = useFullMockExam();

  // Helper to format remaining seconds as MM:SS
  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="flex min-h-screen flex-col bg-slate-950 text-slate-100">
      {/* Top Fixed Header during Exam */}
      <header className="sticky top-0 z-40 border-b border-slate-800 bg-slate-900/90 px-4 py-3 backdrop-blur-md sm:px-6">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                if (
                  stage === 'results' ||
                  window.confirm(
                    'Haqiqatan ham imtihonni tark etmoqchimisiz? Natijangiz saqlanmasligi mumkin.',
                  )
                ) {
                  navigate('/ielts');
                }
              }}
              className="rounded-xl p-1.5 text-slate-400 transition-colors hover:bg-slate-800 hover:text-white"
              title="Chiqish"
            >
              <ArrowLeft size={18} />
            </button>
            <div>
              <div className="flex items-center gap-2">
                <span className="rounded-md bg-red-600 px-1.5 py-0.5 text-[10px] font-black tracking-wider text-white">
                  FULL MOCK
                </span>
                <h1 className="text-xs font-black text-white sm:text-sm">{exam.title}</h1>
              </div>
              <span className="hidden text-[11px] text-slate-400 sm:inline">
                {candidateName} • {exam.difficulty}
              </span>
            </div>
          </div>

          {/* Module Indicator Badges */}
          <div className="hidden items-center gap-1.5 text-xs font-bold lg:flex">
            {[
              { id: 'listening', label: '1. Listening (30m)' },
              { id: 'reading', label: '2. Reading (60m)' },
              { id: 'writing', label: '3. Writing (60m)' },
              { id: 'speaking', label: '4. Speaking (14m)' },
            ].map((m) => (
              <span
                key={m.id}
                className={`rounded-lg px-2.5 py-1 text-[11px] transition-all ${
                  stage === m.id
                    ? 'bg-blue-600 font-black text-white shadow-xs'
                    : 'bg-slate-800/80 text-slate-400'
                }`}
              >
                {m.label}
              </span>
            ))}
          </div>

          {/* Timer & Primary Actions */}
          <div className="flex items-center gap-3">
            {stage !== 'device_check' && stage !== 'evaluating' && stage !== 'results' && (
              <div className="flex items-center gap-1.5 rounded-xl border border-red-500/30 bg-red-500/10 px-3 py-1.5 font-mono text-xs font-black text-red-400 sm:text-sm">
                <Clock size={15} className="animate-pulse" />
                <span>{formatTime(timeLeft)}</span>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Main Dynamic View Area */}
      <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col p-4 sm:p-6">
        {stage === 'device_check' && (
          <MockDeviceCheck
            candidateName={candidateName}
            setCandidateName={setCandidateName}
            onStartExam={() => advanceToStage('listening')}
          />
        )}

        {stage === 'listening' && (
          <MockListeningStage
            exam={exam}
            answers={answers.listening}
            onAnswerChange={handleAnswerListening}
            onCompleteStage={() => advanceToStage('reading')}
          />
        )}

        {stage === 'reading' && (
          <MockReadingStage
            exam={exam}
            answers={answers.reading}
            onAnswerChange={handleAnswerReading}
            onCompleteStage={() => advanceToStage('writing')}
          />
        )}

        {stage === 'writing' && (
          <MockWritingStage
            exam={exam}
            answers={answers.writing}
            onAnswerChange={handleAnswerWriting}
            onCompleteStage={() => advanceToStage('speaking')}
          />
        )}

        {stage === 'speaking' && (
          <MockSpeakingStage
            exam={exam}
            onSavePart1Response={handleSaveSpeakingPart1}
            onSavePart2Speech={handleSaveSpeakingPart2}
            onSavePart3Response={handleSaveSpeakingPart3}
            onCompleteExam={() => advanceToStage('evaluating')}
          />
        )}

        {stage === 'evaluating' && <MockEvaluatingStage progressText={evalProgressText} />}

        {stage === 'results' && examResult && <MockResultsView examResult={examResult} />}
      </main>
    </div>
  );
};

export default IeltsFullMockPage;
