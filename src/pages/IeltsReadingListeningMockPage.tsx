import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, BookOpen, Headphones, Sparkles } from 'lucide-react';
import { useReadingListeningExam } from '../hooks/useReadingListeningExam';
import { MockReadingCatalog } from '../components/ielts/mock/MockReadingCatalog';
import { MockListeningCatalog } from '../components/ielts/mock/MockListeningCatalog';
import { MockAiTopicGenerator } from '../components/ielts/mock/MockAiTopicGenerator';
import { MockExamActiveRunner } from '../components/ielts/mock/MockExamActiveRunner';
import { MockExamReportView } from '../components/ielts/mock/MockExamReportView';

export const IeltsReadingListeningMockPage: React.FC = () => {
  const navigate = useNavigate();
  const {
    testType,
    setTestType,
    step,
    timeLeft,
    currentPassage,
    userAnswers,
    score,
    user,
    startReadingPassage,
    startListeningSection,
    startAiPassage,
    handleOptionSelect,
    handleSubmitTest,
    handleResetToIntro,
  } = useReadingListeningExam();

  return (
    <div className="mx-auto max-w-5xl space-y-6 p-3.5 pb-16 md:p-8">
      {/* Top Bar Navigation */}
      <div className="flex items-center justify-between border-b border-border pb-4">
        <button
          onClick={() => navigate('/ielts')}
          className="rounded-xl border border-border p-2.5 text-muted-foreground transition-all hover:bg-muted hover:text-foreground"
        >
          <ArrowLeft size={20} />
        </button>
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1 text-xs font-black text-indigo-600 dark:text-indigo-400">
            <BookOpen size={14} /> Mock Test Simulator
          </span>
        </div>
      </div>

      {/* STEP 1: INTRO & EXAM CATALOG */}
      {step === 'intro' && (
        <div className="space-y-6 sm:space-y-8">
          {/* Header Banner */}
          <div className="mx-auto max-w-3xl space-y-3 rounded-2xl border border-border bg-card p-5 text-center shadow-xl sm:space-y-4 sm:rounded-3xl sm:p-6 md:p-8">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 text-indigo-600 shadow-md sm:h-14 sm:w-14">
              {testType === 'reading' ? (
                <>
                  <BookOpen size={24} className="sm:hidden" />
                  <BookOpen size={28} className="hidden sm:block" />
                </>
              ) : (
                <>
                  <Headphones size={24} className="sm:hidden" />
                  <Headphones size={28} className="hidden sm:block" />
                </>
              )}
            </div>
            <div>
              <h2 className="text-xl font-black text-foreground sm:text-2xl md:text-3xl">
                IELTS Academic {testType === 'reading' ? 'Reading' : 'Listening'} Sinovi
              </h2>
              <p className="mx-auto mt-1 max-w-xl text-xs leading-relaxed text-muted-foreground">
                Cambridge formatidagi matnlar, audiolar va AI imtihonlari to'plami.
              </p>
            </div>

            {/* Test Type Tabs */}
            <div className="mx-auto grid max-w-md grid-cols-2 gap-2.5 pt-1 sm:gap-3 sm:pt-2">
              <button
                onClick={() => setTestType('reading')}
                className={`rounded-xl border p-2.5 text-center transition-all sm:rounded-2xl sm:p-3 ${
                  testType === 'reading'
                    ? 'border-indigo-600 bg-indigo-600 font-black text-white shadow-lg shadow-indigo-500/20'
                    : 'border-border bg-muted/40 text-muted-foreground hover:bg-muted hover:text-foreground'
                }`}
              >
                <span className="block text-[11px] uppercase tracking-wider">1-Bo'lim</span>
                <span className="mt-0.5 block text-xs font-extrabold sm:text-sm">📖 Reading</span>
              </button>
              <button
                onClick={() => setTestType('listening')}
                className={`rounded-xl border p-2.5 text-center transition-all sm:rounded-2xl sm:p-3 ${
                  testType === 'listening'
                    ? 'border-purple-600 bg-purple-600 font-black text-white shadow-lg shadow-purple-500/20'
                    : 'border-border bg-muted/40 text-muted-foreground hover:bg-muted hover:text-foreground'
                }`}
              >
                <span className="block text-[11px] uppercase tracking-wider">2-Bo'lim</span>
                <span className="mt-0.5 block text-xs font-extrabold sm:text-sm">🎧 Listening</span>
              </button>
            </div>

            {/* Full 4-Skill Mock Banner Link */}
            <div className="mx-auto max-w-md rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-3 text-center sm:p-4">
              <div className="flex items-center justify-between gap-3">
                <div className="text-left">
                  <div className="flex items-center gap-1.5 text-xs font-black text-emerald-600 dark:text-emerald-400">
                    <Sparkles size={14} />
                    <span>To'liq 4 modulli imtihon</span>
                  </div>
                  <p className="text-[11px] text-muted-foreground">
                    Listening + Reading + Writing + Speaking (~2h 45m)
                  </p>
                </div>
                <button
                  onClick={() => navigate('/ielts/full-mock')}
                  className="shrink-0 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-3.5 py-2 text-xs font-black text-white shadow-md transition-all hover:scale-105 active:scale-95"
                >
                  Boshlash ⚡
                </button>
              </div>
            </div>
          </div>

          {/* Test Catalog */}
          {testType === 'reading' ? (
            <MockReadingCatalog onSelectPassage={startReadingPassage} />
          ) : (
            <MockListeningCatalog onSelectSection={startListeningSection} />
          )}

          {/* AI Generator Card */}
          <MockAiTopicGenerator testType={testType} onGenerated={startAiPassage} />
        </div>
      )}

      {/* STEP 2: ACTIVE TEST SCREEN */}
      {step === 'test' && (
        <MockExamActiveRunner
          testType={testType}
          passage={currentPassage}
          timeLeft={timeLeft}
          userAnswers={userAnswers}
          onOptionSelect={handleOptionSelect}
          onSubmit={handleSubmitTest}
          onCancel={handleResetToIntro}
        />
      )}

      {/* STEP 3: DETAILED REPORT & EXPLANATION */}
      {step === 'report' && (
        <MockExamReportView
          testType={testType}
          passage={currentPassage}
          score={score}
          userAnswers={userAnswers}
          user={user}
          onRetryOrNewTest={handleResetToIntro}
          onNavigateHome={() => navigate('/ielts')}
        />
      )}
    </div>
  );
};

export default IeltsReadingListeningMockPage;
