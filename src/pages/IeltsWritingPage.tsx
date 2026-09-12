import React, { useState, useEffect, useRef } from 'react';
import {
  FileText,
  Sparkles,
  AlertCircle,
  Award,
  BookOpen,
  RefreshCw,
  Copy,
  Check,
  ArrowRight,
  History,
  Clock,
  Timer,
  Zap,
} from 'lucide-react';
import { evaluateIeltsEssay, IeltsEssayEvaluationReport } from '../utils/ai';
import { HistoryService, WritingHistoryItem } from '../services/HistoryService';
import { MasteryEngine } from '../services/MasteryEngine';
import { LearningSignalService } from '../services/LearningSignalService';
import { SvgLineChart } from '../components/ui/SvgCharts';
import { Task1GraphGenerator } from '../components/ielts/Task1GraphGenerator';
import { WritingBandRadarChart } from '../components/ielts/WritingBandRadarChart';
import { useStudyData } from '../context/StudyPlannerContext';
import { IeltsTrfCertificateModal } from '../components/ielts/IeltsTrfCertificateModal';
import { TrfCertificateService } from '../services/TrfCertificateService';
import { useFreemiumQuota } from '../hooks/useFreemiumQuota';
import { FreemiumLimitModal } from '../components/ielts/FreemiumLimitModal';
import { IELTS_WRITING_PROMPTS, WritingPromptItem } from '../data/ielts/writing_prompts';

const IeltsWritingPage: React.FC = () => {
  const { awardXP, user } = useStudyData();
  const {
    canUseWriting,
    remainingWriting,
    consumeWriting,
    hoursUntilReset,
    minutesUntilReset,
    isAdmin,
  } = useFreemiumQuota();

  const [taskType, setTaskType] = useState<'task1' | 'task2'>('task2');
  const [selectedPromptItem, setSelectedPromptItem] = useState<WritingPromptItem | null>(
    IELTS_WRITING_PROMPTS.task2[0]
  );
  const [promptQuestion, setPromptQuestion] = useState(IELTS_WRITING_PROMPTS.task2[0].prompt);
  const [showPromptGuidance, setShowPromptGuidance] = useState(false);
  const [essayText, setEssayText] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [report, setReport] = useState<IeltsEssayEvaluationReport | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'scores' | 'errors' | 'model'>('scores');
  const [copied, setCopied] = useState(false);
  const [isTrfModalOpen, setIsTrfModalOpen] = useState(false);
  const [isLimitModalOpen, setIsLimitModalOpen] = useState(false);

  // Timer States
  const TIMER_DURATION = taskType === 'task1' ? 20 * 60 : 40 * 60; // 20 or 40 minutes in seconds
  const [timerSeconds, setTimerSeconds] = useState<number | null>(null); // null = not started
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [isTimerExpired, setIsTimerExpired] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // History States
  const [historyList, setHistoryList] = useState<WritingHistoryItem[]>([]);

  const wordCount = essayText.trim().split(/\s+/).filter(Boolean).length;
  const minWords = taskType === 'task1' ? 150 : 250;
  const isWordCountSufficient = wordCount >= minWords;

  const fetchHistory = async () => {
    try {
      const data = await HistoryService.getWritingHistory();
      setHistoryList(data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchHistory();
  }, []);

  // Timer countdown logic
  useEffect(() => {
    if (!isTimerRunning || timerSeconds === null) return;
    if (timerSeconds <= 0) {
      setIsTimerRunning(false);
      setIsTimerExpired(true);
      // Auto-submit when timer runs out
      if (essayText.trim()) {
        handleAnalyze();
      }
      return;
    }
    timerRef.current = setInterval(() => {
      setTimerSeconds((prev) => (prev !== null ? prev - 1 : null));
    }, 1000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isTimerRunning, timerSeconds]);

  const startTimer = () => {
    setTimerSeconds(TIMER_DURATION);
    setIsTimerRunning(true);
    setIsTimerExpired(false);
  };

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setTimerSeconds(null);
    setIsTimerRunning(false);
    setIsTimerExpired(false);
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60)
      .toString()
      .padStart(2, '0');
    const s = (secs % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  const timerProgress = timerSeconds !== null ? (timerSeconds / TIMER_DURATION) * 100 : 100;

  const handleAnalyze = async () => {
    if (!essayText.trim()) {
      setErrorMsg('Iltimos, insho matnini kiriting!');
      return;
    }
    if (!canUseWriting) {
      setIsLimitModalOpen(true);
      return;
    }
    setErrorMsg(null);
    setIsAnalyzing(true);
    try {
      const res = await evaluateIeltsEssay(taskType, promptQuestion, essayText);
      setReport(res);
      consumeWriting();

      // Save Attempt to History
      await HistoryService.saveWritingAttempt({
        taskType: taskType,
        prompt: promptQuestion,
        essay: essayText,
        score: res.overallBand,
        criteriaBreakdown: {
          tr: res.taskResponseScore,
          cc: res.coherenceScore,
          lr: res.lexicalResourceScore,
          gra: res.grammarScore,
        },
        feedback: res.taskResponseFeedback,
      });

      // Record Mastery Evidence and Learning Signal
      const activeUserId = user?.id || 'guest';
      MasteryEngine.recordEvidence(activeUserId, 'en', {
        id: `ielts_writing_${Date.now()}`,
        skill: 'writing',
        score: Math.min(100, Math.round((res.overallBand / 9.0) * 100)),
        timestamp: new Date().toISOString(),
        details: `IELTS Writing ${taskType.toUpperCase()} Band: ${res.overallBand}`,
        type: 'performance',
      });

      LearningSignalService.recordSignal({
        id: `sig_writing_${Date.now()}`,
        type: 'completed_lesson',
        language: 'en',
        userId: activeUserId,
        timestamp: new Date().toISOString(),
        lessonId: `ielts_writing_${taskType}`,
        level: 'C1',
        score: Math.round(res.overallBand),
        total: 9,
        percentage: Math.min(100, Math.round((res.overallBand / 9.0) * 100)),
        newCardsCreated: 0,
        mistakesCount: 0,
      }).catch(() => {});

      // Award XP
      try {
        if (awardXP) {
          await awardXP(50);
        }
      } catch (e) {}

      // Refresh history
      fetchHistory();
    } catch (err: any) {
      setErrorMsg(err?.message || 'Xatolik yuz berdi');
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleCopyModelAnswer = () => {
    if (!report?.modelAnswerBand8) return;
    navigator.clipboard.writeText(report.modelAnswerBand8);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Chart Data mapping
  const chartData = [...historyList].reverse().map((item) => ({
    date: new Date(item.createdAt).toLocaleDateString([], { month: 'short', day: 'numeric' }),
    score: item.score,
  }));

  return (
    <div className="mx-auto max-w-7xl space-y-5 p-3.5 pb-16 sm:space-y-8 sm:p-6 md:p-8">
      {/* Header */}
      <div className="flex flex-col items-start justify-between gap-4 border-b border-border pb-6 md:flex-row md:items-center">
        <div className="flex items-center gap-3">
          <div className="shrink-0 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 p-2.5 text-white shadow-md shadow-indigo-500/20">
            <FileText size={24} />
          </div>
          <div>
            <h1 className="text-xl font-extrabold text-gray-900 dark:text-white sm:text-2xl md:text-3xl">
              IELTS Writing Evaluator ✍️
            </h1>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Task 1 va Task 2 insholaringizni AI orqali rasmiy mezonlar bo'yicha baholatib, Band
              8.0 namunasini oling.
            </p>
          </div>
        </div>

        {/* Task Type Switcher */}
        <div className="flex w-full rounded-2xl border border-gray-200 bg-gray-100 p-1.5 dark:border-gray-700 dark:bg-gray-800 md:w-auto">
          <button
            onClick={() => {
              setTaskType('task1');
              const firstItem = IELTS_WRITING_PROMPTS.task1[0];
              setSelectedPromptItem(firstItem);
              setPromptQuestion(firstItem.prompt);
            }}
            className={`flex-1 rounded-xl px-3 py-2 text-xs font-bold transition-all sm:px-5 md:flex-initial ${
              taskType === 'task1'
                ? 'bg-white text-indigo-600 shadow-sm dark:bg-gray-900 dark:text-indigo-400'
                : 'text-gray-600 hover:text-gray-900 dark:text-gray-400'
            }`}
          >
            Task 1 (Report / Graph)
          </button>
          <button
            onClick={() => {
              setTaskType('task2');
              const firstItem = IELTS_WRITING_PROMPTS.task2[0];
              setSelectedPromptItem(firstItem);
              setPromptQuestion(firstItem.prompt);
            }}
            className={`flex-1 rounded-xl px-3 py-2 text-xs font-bold transition-all sm:px-5 md:flex-initial ${
              taskType === 'task2'
                ? 'bg-white text-indigo-600 shadow-sm dark:bg-gray-900 dark:text-indigo-400'
                : 'text-gray-600 hover:text-gray-900 dark:text-gray-400'
            }`}
          >
            Task 2 (Essay)
          </button>
        </div>
      </div>

      {/* ⏱ Exam Timer Bar */}
      <div
        className={`flex flex-wrap items-center justify-between gap-3 rounded-2xl border p-3.5 transition-all sm:flex-nowrap sm:p-4 ${
          isTimerExpired
            ? 'border-red-500/30 bg-red-500/10'
            : isTimerRunning
              ? 'border-amber-500/20 bg-amber-500/5'
              : 'border-border bg-muted/30'
        }`}
      >
        <div className="flex shrink-0 items-center gap-2">
          <Timer
            size={18}
            className={
              isTimerExpired
                ? 'text-red-500'
                : isTimerRunning
                  ? 'text-amber-500'
                  : 'text-muted-foreground'
            }
          />
          <span
            className={`text-sm font-extrabold tabular-nums ${
              isTimerExpired
                ? 'text-red-600 dark:text-red-400'
                : isTimerRunning && timerSeconds !== null && timerSeconds < 120
                  ? 'animate-pulse text-red-500'
                  : 'text-foreground'
            }`}
          >
            {isTimerExpired
              ? 'VAQT TUGADI!'
              : timerSeconds !== null
                ? formatTime(timerSeconds)
                : `${taskType === 'task1' ? '20:00' : '40:00'}`}
          </span>
          <span className="text-[10px] text-muted-foreground">
            ({taskType === 'task1' ? '20 daqiqa' : '40 daqiqa'} limit)
          </span>
        </div>
        <div className="order-2 flex shrink-0 gap-2 sm:order-3">
          {!isTimerRunning && !isTimerExpired && (
            <button
              onClick={startTimer}
              className="flex items-center gap-1 rounded-xl bg-emerald-600 px-3 py-1.5 text-xs font-bold text-white transition-all hover:bg-emerald-700"
            >
              <Clock size={12} /> Boshlash
            </button>
          )}
          {(isTimerRunning || isTimerExpired) && (
            <button
              onClick={resetTimer}
              className="rounded-xl border border-border bg-muted px-3 py-1.5 text-xs font-bold text-foreground transition-all hover:bg-muted/80"
            >
              Reset
            </button>
          )}
        </div>
        {/* Progress bar */}
        <div className="order-3 h-1.5 w-full overflow-hidden rounded-full bg-muted sm:order-2 sm:h-2 sm:flex-1">
          <div
            className={`h-full rounded-full transition-all duration-1000 ${
              isTimerExpired
                ? 'bg-red-500'
                : timerProgress < 25
                  ? 'bg-red-400'
                  : timerProgress < 50
                    ? 'bg-amber-400'
                    : 'bg-emerald-500'
            }`}
            style={{ width: `${timerProgress}%` }}
          />
        </div>
      </div>

      {/* Analytics & Progression Chart */}
      {chartData.length > 0 && (
        <div className="space-y-4 rounded-3xl border border-border bg-card p-5 shadow-sm">
          <h3 className="flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-foreground">
            <History size={16} className="text-indigo-500" />
            Writing Progression Dinamikasi (Band Score Tarixi)
          </h3>
          <div className="h-44 w-full">
            <SvgLineChart
              data={chartData}
              xKey="date"
              series={[{ dataKey: 'score', stroke: '#6366f1', fill: '#6366f1' }]}
              height={160}
              showArea={true}
              unit="band"
            />
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        {/* Left Column: Input Form */}
        <div className="space-y-6 lg:col-span-6">
          {/* Task 1 Graph Generator */}
          {taskType === 'task1' && (
            <Task1GraphGenerator
              onPromptGenerated={(generatedPrompt) => setPromptQuestion(generatedPrompt)}
            />
          )}
          {/* Prompt Selection */}
          <div className="rounded-2xl border border-border bg-card p-4 shadow-sm sm:rounded-3xl sm:p-6 space-y-3">
            <div className="flex items-center justify-between">
              <label className="block text-xs font-bold text-gray-700 dark:text-gray-300">
                Mavzu / Savol (IELTS {taskType.toUpperCase()} Prompt)
              </label>
              {selectedPromptItem && (
                <button
                  onClick={() => setShowPromptGuidance(!showPromptGuidance)}
                  className="text-[11px] font-bold text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 flex items-center gap-1 transition-colors"
                >
                  <Sparkles size={13} />
                  {showPromptGuidance ? "Maslahatlarni yopish" : "💡 Band 9 Reja & Kollokatsiyalar"}
                </button>
              )}
            </div>

            <textarea
              value={promptQuestion}
              onChange={(e) => setPromptQuestion(e.target.value)}
              rows={3}
              placeholder="Mavzuni kiritishingiz yoki quyidagi tayyor savollardan tanlashingiz mumkin..."
              className="w-full resize-none rounded-2xl border border-border bg-muted/40 px-4 py-3 text-xs text-gray-900 transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:text-white"
            />

            {/* Prompt Selector Pills */}
            <div className="space-y-1.5 pt-1">
              <span className="text-[10px] font-semibold text-gray-400 block">
                Rasmiy IELTS {taskType === 'task1' ? 'Task 1 Turlari' : 'Task 2 Mavzulari'}:
              </span>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {IELTS_WRITING_PROMPTS[taskType].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setSelectedPromptItem(item);
                      setPromptQuestion(item.prompt);
                    }}
                    className={`rounded-full px-3 py-1 text-left text-[11px] font-semibold transition-all border ${
                      promptQuestion === item.prompt
                        ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm'
                        : 'bg-indigo-50/70 dark:bg-indigo-950/30 text-indigo-700 dark:text-indigo-300 border-indigo-200/50 dark:border-indigo-800/40 hover:bg-indigo-100'
                    }`}
                  >
                    <span className="opacity-75 text-[9px] uppercase font-black mr-1.5">[{item.category}]</span>
                    {item.title}
                  </button>
                ))}
              </div>
            </div>

            {/* Band 9 Outline & Vocabulary Guidance Box */}
            {selectedPromptItem && showPromptGuidance && (
              <div className="rounded-2xl border border-indigo-500/20 bg-indigo-500/5 p-4 space-y-3 text-xs">
                <div className="flex items-center justify-between border-b border-indigo-500/10 pb-2">
                  <span className="font-bold text-indigo-700 dark:text-indigo-300 flex items-center gap-1.5 text-xs">
                    <BookOpen size={14} /> Band 9 Tavsiya etilgan Reja: {selectedPromptItem.title}
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-[10px] font-bold">
                    {selectedPromptItem.category}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-[11px]">
                  <div className="p-2.5 rounded-xl bg-card border border-border space-y-1">
                    <span className="font-bold text-foreground block">1. Kirish (Introduction & Overview):</span>
                    <p className="text-muted-foreground">{selectedPromptItem.sampleOutline.intro}</p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-card border border-border space-y-1">
                    <span className="font-bold text-foreground block">2. Asosiy Qism 1 (Body Paragraph 1):</span>
                    <p className="text-muted-foreground">{selectedPromptItem.sampleOutline.body1}</p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-card border border-border space-y-1">
                    <span className="font-bold text-foreground block">3. Asosiy Qism 2 (Body Paragraph 2):</span>
                    <p className="text-muted-foreground">{selectedPromptItem.sampleOutline.body2}</p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-card border border-border space-y-1">
                    <span className="font-bold text-foreground block">4. Xulosa (Conclusion / Summary):</span>
                    <p className="text-muted-foreground">{selectedPromptItem.sampleOutline.conclusion}</p>
                  </div>
                </div>

                {/* Key Collocations */}
                <div className="pt-1">
                  <span className="font-bold text-[11px] text-foreground block mb-1.5">
                    🎯 Foydalanish uchun Band 8+ Kollokatsiyalar:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedPromptItem.keyVocabulary.map((vocab, vIdx) => (
                      <span
                        key={vIdx}
                        className="px-2 py-0.5 rounded-md bg-white dark:bg-gray-800 border border-border text-[10px] font-mono text-indigo-600 dark:text-indigo-400"
                      >
                        {vocab}
                      </span>
                    ))}
                  </div>
                </div>

                {selectedPromptItem.band9Snippet && (
                  <div className="pt-2 border-t border-indigo-500/10 text-[11px] text-muted-foreground italic">
                    <span className="font-semibold text-foreground not-italic">Namunaviy Band 9 jumla: </span>
                    "{selectedPromptItem.band9Snippet}"
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Essay Text Area */}
          <div className="rounded-2xl border border-border bg-card p-4 shadow-sm sm:rounded-3xl sm:p-6">
            <div className="mb-2 flex items-center justify-between">
              <label className="block text-xs font-bold text-gray-700 dark:text-gray-300">
                Sizning Inshongiz (Your Essay)
              </label>
              <span
                className={`rounded-full px-2.5 py-1 text-[10px] font-bold ${
                  isWordCountSufficient
                    ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400'
                    : 'bg-amber-100 text-amber-700 dark:bg-amber-950/40 dark:text-amber-400'
                }`}
              >
                {wordCount} so'z {isWordCountSufficient ? '✓' : `(min ${minWords})`}
              </span>
            </div>
            <textarea
              value={essayText}
              onChange={(e) => !isTimerExpired && setEssayText(e.target.value)}
              rows={10}
              disabled={isTimerExpired}
              placeholder={
                isTimerExpired ? '⛔ Vaqt tugadi — insho yuborildi.' : 'Inshoni bu yerga yozing...'
              }
              className={`w-full resize-y rounded-2xl border border-border bg-muted/40 px-4 py-3 font-serif text-xs leading-relaxed text-gray-900 transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:text-white ${
                isTimerExpired ? 'cursor-not-allowed opacity-60' : ''
              }`}
            />
            <div className="mt-4 flex flex-col items-stretch justify-between gap-3 sm:flex-row sm:items-center">
              <div className="flex items-center gap-2">
                <span
                  className={`inline-flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-bold ${
                    isAdmin || canUseWriting
                      ? 'border border-emerald-500/20 bg-emerald-500/10 text-emerald-500'
                      : 'border border-amber-500/20 bg-amber-500/10 text-amber-400'
                  }`}
                >
                  <Zap
                    size={13}
                    className={canUseWriting ? 'text-emerald-500' : 'text-amber-400'}
                  />
                  <span>
                    {isAdmin
                      ? 'Admin: Cheksiz tekshiruv'
                      : remainingWriting > 0
                        ? 'Bugungi bepul limit: 1/1 qoldi'
                        : 'Bugungi bepul limit tugadi (0/1)'}
                  </span>
                </span>
              </div>
              <button
                onClick={handleAnalyze}
                disabled={isAnalyzing || !essayText.trim()}
                className="active:scale-98 flex w-full cursor-pointer items-center justify-center gap-1.5 rounded-xl bg-indigo-600 px-6 py-3 text-xs font-bold text-white shadow-md transition-all hover:bg-indigo-700 disabled:opacity-50 sm:w-auto"
              >
                {isAnalyzing ? (
                  <RefreshCw className="animate-spin" size={14} />
                ) : (
                  <Sparkles size={14} />
                )}
                <span>{isAnalyzing ? 'Tahlil qilinmoqda...' : 'AI Baholash 🚀'}</span>
              </button>
            </div>
            {errorMsg && (
              <p className="mt-2 flex items-center gap-1 text-xs text-rose-500">
                <AlertCircle size={14} /> {errorMsg}
              </p>
            )}
          </div>

          {/* Previous Attempts History List */}
          {historyList.length > 0 && (
            <div className="space-y-4 rounded-2xl border border-border bg-card p-4 shadow-sm sm:rounded-3xl sm:p-6">
              <h3 className="flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-foreground">
                <History size={16} /> O'tgan urinishlar tarixi
              </h3>
              <div className="max-h-60 space-y-2 overflow-y-auto pr-1">
                {historyList.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      // Mock evaluation report display from historical data
                      setReport({
                        overallBand: item.score,
                        taskResponseScore: item.criteriaBreakdown.tr,
                        coherenceScore: item.criteriaBreakdown.cc,
                        lexicalResourceScore: item.criteriaBreakdown.lr,
                        grammarScore: item.criteriaBreakdown.gra,
                        taskResponseFeedback: item.feedback,
                        coherenceFeedback: 'Historical cohesion overview.',
                        lexicalResourceFeedback: 'Historical vocabulary overview.',
                        grammarFeedback: 'Historical grammar overview.',
                        wordCount: item.essay.split(' ').length,
                        strengths: [],
                        weaknesses: [],
                        grammarErrors: [],
                        advancedVocabularySuggestions: [],
                        modelAnswerBand8: "Tahlil natijasi bo'yicha model insho namunasi.",
                        improvementTips: [],
                      });
                      setEssayText(item.essay);
                      setPromptQuestion(item.prompt);
                      setTaskType(item.taskType);
                    }}
                    className="flex w-full items-center justify-between rounded-xl border border-border bg-muted/40 p-3 text-left text-xs transition-all hover:bg-muted"
                  >
                    <div>
                      <span className="block font-bold capitalize text-foreground">
                        {item.taskType}
                      </span>
                      <span className="mt-0.5 block text-[10px] text-muted-foreground">
                        {new Date(item.createdAt).toLocaleDateString()} ·{' '}
                        {item.essay.split(' ').length} so'z
                      </span>
                    </div>
                    <span className="rounded bg-indigo-500/10 px-2 py-1 font-black text-indigo-500">
                      Band {item.score.toFixed(1)}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Column: AI Report Display */}
        <div className="lg:col-span-6">
          {report === null ? (
            <div className="flex h-full min-h-[350px] flex-col items-center justify-center rounded-3xl border border-dashed border-border bg-muted/30 p-6 text-center text-muted-foreground">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-muted">
                <Award size={24} />
              </div>
              <h4 className="text-xs font-black text-foreground">AI Baholash Reporti Kutilmoqda</h4>
              <p className="mt-1 max-w-xs text-[10px] leading-relaxed">
                Inshoingizni yozib, AI Baholash tugmasini bosing va to'liq tahlilni shu yerda oling.
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Live Radar Chart & Paragraph Breakdown */}
              <WritingBandRadarChart report={report} essayText={essayText} />

              {/* Score Overview Card */}
              <div className="space-y-4 rounded-3xl border border-border bg-card p-6 text-center shadow-sm">
                <div>
                  <span className="block text-[10px] font-extrabold uppercase tracking-wider text-indigo-500">
                    Estimated IELTS Writing Band
                  </span>
                  <h2 className="mt-1 text-4xl font-black text-foreground">
                    Band {report.overallBand.toFixed(1)}
                  </h2>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {report.taskResponseFeedback}
                  </p>
                </div>

                {/* Criteria Scores breakdown grid */}
                <div className="grid grid-cols-4 gap-2 pt-2 text-center">
                  <div className="rounded-xl border border-border bg-muted/40 p-2.5">
                    <span className="block truncate text-[9px] font-bold uppercase text-muted-foreground">
                      TA / TR
                    </span>
                    <span className="text-sm font-black text-foreground">
                      {report.taskResponseScore.toFixed(1)}
                    </span>
                  </div>
                  <div className="rounded-xl border border-border bg-muted/40 p-2.5">
                    <span className="block truncate text-[9px] font-bold uppercase text-muted-foreground">
                      C & C
                    </span>
                    <span className="text-sm font-black text-foreground">
                      {report.coherenceScore.toFixed(1)}
                    </span>
                  </div>
                  <div className="rounded-xl border border-border bg-muted/40 p-2.5">
                    <span className="block truncate text-[9px] font-bold uppercase text-muted-foreground">
                      LR
                    </span>
                    <span className="text-sm font-black text-foreground">
                      {report.lexicalResourceScore.toFixed(1)}
                    </span>
                  </div>
                  <div className="rounded-xl border border-border bg-muted/40 p-2.5">
                    <span className="block truncate text-[9px] font-bold uppercase text-muted-foreground">
                      GRA
                    </span>
                    <span className="text-sm font-black text-foreground">
                      {report.grammarScore.toFixed(1)}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => setIsTrfModalOpen(true)}
                  className="mt-3 flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-red-600 py-3 text-xs font-black text-white shadow-md shadow-red-600/20 transition-all hover:bg-red-700"
                >
                  <FileText size={15} />
                  <span>Writing TRF Sertifikatini Yuklab Olish (PDF)</span>
                </button>
              </div>

              {/* Tab Selection */}
              <div className="flex border-b border-border text-xs">
                <button
                  onClick={() => setActiveTab('scores')}
                  className={`flex-1 border-b-2 py-3 font-bold transition-all ${
                    activeTab === 'scores'
                      ? 'border-indigo-500 text-indigo-600 dark:text-indigo-400'
                      : 'border-transparent text-muted-foreground'
                  }`}
                >
                  Mezonlar Tahlili
                </button>
                <button
                  onClick={() => setActiveTab('errors')}
                  className={`flex-1 border-b-2 py-3 font-bold transition-all ${
                    activeTab === 'errors'
                      ? 'border-indigo-500 text-indigo-600 dark:text-indigo-400'
                      : 'border-transparent text-muted-foreground'
                  }`}
                >
                  Xato & Takliflar ({report.grammarErrors.length})
                </button>
                <button
                  onClick={() => setActiveTab('model')}
                  className={`flex-1 border-b-2 py-3 font-bold transition-all ${
                    activeTab === 'model'
                      ? 'border-indigo-500 text-indigo-600 dark:text-indigo-400'
                      : 'border-transparent text-muted-foreground'
                  }`}
                >
                  Model Answer
                </button>
              </div>

              {/* Tab 1: Criteria Details */}
              {activeTab === 'scores' && (
                <div className="space-y-4">
                  <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-xs font-bold text-foreground">
                        1. Task Achievement / Response
                      </span>
                      <span className="text-xs font-extrabold text-indigo-500">
                        {report.taskResponseScore.toFixed(1)}
                      </span>
                    </div>
                    <p className="text-[11px] leading-relaxed text-muted-foreground">
                      {report.taskResponseFeedback}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-xs font-bold text-foreground">
                        2. Coherence & Cohesion
                      </span>
                      <span className="text-xs font-extrabold text-indigo-500">
                        {report.coherenceScore.toFixed(1)}
                      </span>
                    </div>
                    <p className="text-[11px] leading-relaxed text-muted-foreground">
                      {report.coherenceFeedback}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-xs font-bold text-foreground">3. Lexical Resource</span>
                      <span className="text-xs font-extrabold text-indigo-500">
                        {report.lexicalResourceScore.toFixed(1)}
                      </span>
                    </div>
                    <p className="text-[11px] leading-relaxed text-muted-foreground">
                      {report.lexicalResourceFeedback}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-xs font-bold text-foreground">
                        4. Grammatical Range & Accuracy
                      </span>
                      <span className="text-xs font-extrabold text-indigo-500">
                        {report.grammarScore.toFixed(1)}
                      </span>
                    </div>
                    <p className="text-[11px] leading-relaxed text-muted-foreground">
                      {report.grammarFeedback}
                    </p>
                  </div>
                </div>
              )}

              {/* Tab 2: Errors & Corrections */}
              {activeTab === 'errors' && (
                <div className="space-y-4">
                  <h4 className="flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-foreground">
                    <AlertCircle size={16} className="text-rose-500" /> Grammatik va Lug'at Xatolari
                  </h4>
                  {report.grammarErrors.length === 0 ? (
                    <p className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-4 text-center text-xs text-emerald-500">
                      Ajoyib! Jiddiy grammatik xatolar topilmadi.
                    </p>
                  ) : (
                    report.grammarErrors.map((err, idx) => (
                      <div
                        key={idx}
                        className="space-y-2 rounded-xl border border-border bg-card p-4 shadow-xs"
                      >
                        <div className="flex items-center gap-2 text-xs">
                          <span className="rounded bg-rose-500/15 px-2 py-0.5 font-mono text-rose-600 line-through dark:text-rose-400">
                            {err.original}
                          </span>
                          <ArrowRight size={14} className="text-muted-foreground" />
                          <span className="rounded bg-emerald-500/15 px-2 py-0.5 font-bold text-emerald-600 dark:text-emerald-400">
                            {err.corrected}
                          </span>
                        </div>
                        <p className="text-[11px] text-muted-foreground">💡 {err.explanation}</p>
                      </div>
                    ))
                  )}

                  {report.advancedVocabularySuggestions.length > 0 && (
                    <>
                      <h4 className="flex items-center gap-1.5 pt-4 text-xs font-extrabold uppercase tracking-wider text-foreground">
                        <BookOpen size={16} className="text-indigo-500" /> Band 8.0+ Lug'at
                        Takliflari
                      </h4>
                      {report.advancedVocabularySuggestions.map((vocab, idx) => (
                        <div
                          key={idx}
                          className="space-y-1 rounded-xl border border-indigo-500/20 bg-indigo-500/5 p-4"
                        >
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-muted-foreground line-through">
                              {vocab.original}
                            </span>
                            <span className="rounded bg-indigo-500/10 px-2 py-0.5 font-bold text-indigo-500">
                              {vocab.band8Alternative}
                            </span>
                          </div>
                          <p className="text-[11px] leading-relaxed text-muted-foreground">
                            {vocab.context}
                          </p>
                        </div>
                      ))}
                    </>
                  )}
                </div>
              )}

              {/* Tab 3: Model Answer */}
              {activeTab === 'model' && (
                <div className="relative space-y-4 overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-sm">
                  <div className="flex items-center justify-between">
                    <h4 className="flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-foreground">
                      <Sparkles size={16} className="text-amber-500" /> Band 8.0/9.0 Model Answer
                    </h4>
                    <button
                      onClick={handleCopyModelAnswer}
                      className="flex items-center gap-1.5 rounded-xl bg-indigo-50 px-3 py-1.5 text-xs font-semibold text-indigo-600 transition-all hover:bg-indigo-100 dark:bg-indigo-950/40 dark:text-indigo-400"
                    >
                      {copied ? <Check size={14} /> : <Copy size={14} />}
                      <span>{copied ? 'Nusxalandi!' : 'Nusxalash'}</span>
                    </button>
                  </div>

                  <div className="whitespace-pre-wrap rounded-xl border border-border bg-muted/40 p-4 font-serif text-xs leading-relaxed text-muted-foreground">
                    {report.modelAnswerBand8}
                  </div>
                </div>
              )}

              {isTrfModalOpen && (
                <IeltsTrfCertificateModal
                  isOpen={isTrfModalOpen}
                  onClose={() => setIsTrfModalOpen(false)}
                  data={{
                    candidateName:
                      user?.user_metadata?.full_name ||
                      user?.email?.split('@')[0] ||
                      'IELTS Candidate',
                    testDate: new Date().toLocaleDateString('en-GB', {
                      day: '2-digit',
                      month: 'short',
                      year: 'numeric',
                    }),
                    testType: 'Academic',
                    module: 'Writing',
                    scores: {
                      writing: report.overallBand,
                      overall: report.overallBand,
                      cefrLevel: TrfCertificateService.getCefrFromBand(report.overallBand),
                    },
                    subCriteria: [
                      {
                        label: 'Task Achievement / Response',
                        score: report.taskResponseScore,
                        feedback: report.taskResponseFeedback,
                      },
                      {
                        label: 'Coherence & Cohesion',
                        score: report.coherenceScore,
                        feedback: report.coherenceFeedback,
                      },
                      {
                        label: 'Lexical Resource',
                        score: report.lexicalResourceScore,
                        feedback: report.lexicalResourceFeedback,
                      },
                      {
                        label: 'Grammatical Range & Accuracy',
                        score: report.grammarScore,
                        feedback: report.grammarFeedback,
                      },
                    ],
                    examinerNotes: `Candidate achieved Band ${report.overallBand.toFixed(1)} in IELTS Writing ${taskType.toUpperCase()}. ${report.taskResponseFeedback}`,
                    verificationCode: TrfCertificateService.generateVerificationCode('Writing'),
                  }}
                />
              )}
            </div>
          )}
        </div>
      </div>

      <FreemiumLimitModal
        isOpen={isLimitModalOpen}
        onClose={() => setIsLimitModalOpen(false)}
        feature="writing"
        hoursUntilReset={hoursUntilReset}
        minutesUntilReset={minutesUntilReset}
      />
    </div>
  );
};

export default IeltsWritingPage;
