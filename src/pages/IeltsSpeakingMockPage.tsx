import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  Mic,
  MicOff,
  Award,
  Clock,
  Sparkles,
  AlertCircle,
  ChevronRight,
  RefreshCw,
  Volume2,
  Dices,
  List,
  Search,
  X,
  BookOpen,
  Bot,
  FileText,
  Zap,
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { evaluateIeltsSpeakingFullMock, SpeakingMockReport } from '../utils/ai';
import { speakText } from '../utils/audioTts';
import { CAMBRIDGE_IELTS_TOPICS, IeltsSpeakingTopic } from '../data/ieltsSpeakingTopics';
import { useStudyData } from '../context/StudyPlannerContext';
import { HistoryService } from '../services/HistoryService';
import { MasteryEngine } from '../services/MasteryEngine';
import { LearningSignalService } from '../services/LearningSignalService';
import { toast } from '../hooks/use-toast';
import { IeltsTrfCertificateModal } from '../components/ielts/IeltsTrfCertificateModal';
import { TrfCertificateService } from '../services/TrfCertificateService';
import { useFreemiumQuota } from '../hooks/useFreemiumQuota';
import { FreemiumLimitModal } from '../components/ielts/FreemiumLimitModal';

const SpeechRecognition =
  (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

export const IeltsSpeakingMockPage: React.FC = () => {
  const navigate = useNavigate();
  const { awardXP, addSession, user } = useStudyData();
  const {
    canUseSpeaking,
    remainingSpeaking,
    consumeSpeaking,
    hoursUntilReset,
    minutesUntilReset,
    isAdmin,
  } = useFreemiumQuota();
  const [isLimitModalOpen, setIsLimitModalOpen] = useState(false);

  // Topic Selection
  const [selectedTopic, setSelectedTopic] = useState<IeltsSpeakingTopic>(() => {
    const randomIndex = Math.floor(Math.random() * CAMBRIDGE_IELTS_TOPICS.length);
    return CAMBRIDGE_IELTS_TOPICS[randomIndex];
  });
  const [isTopicModalOpen, setIsTopicModalOpen] = useState(false);
  const [isTrfModalOpen, setIsTrfModalOpen] = useState(false);
  const [topicSearchQuery, setTopicSearchQuery] = useState('');
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState('All');

  // Steps: 'intro' -> 'part1' -> 'part2_prep' -> 'part2_speech' -> 'part3' -> 'evaluating' -> 'report'
  const [step, setStep] = useState<
    'intro' | 'part1' | 'part2_prep' | 'part2_speech' | 'part3' | 'evaluating' | 'report'
  >('intro');

  // Part 1 Questions
  const PART1_QUESTIONS = selectedTopic.part1;
  const [part1Index, setPart1Index] = useState(0);

  // Part 2 Cue Card Topic
  const CUE_CARD_TOPIC = selectedTopic.part2;
  const [prepSeconds, setPrepSeconds] = useState(60);
  const [speechSeconds, setSpeechSeconds] = useState(120);

  // Part 3 Discussion Questions
  const PART3_QUESTIONS = selectedTopic.part3;
  const [part3Index, setPart3Index] = useState(0);

  const handleSelectTopic = (topic: IeltsSpeakingTopic) => {
    setSelectedTopic(topic);
    setPart1Index(0);
    setPart3Index(0);
    setPrepSeconds(60);
    setSpeechSeconds(120);
    setCurrentAnswerText('');
    setIsTopicModalOpen(false);
  };

  const handleRandomizeTopic = () => {
    const otherTopics = CAMBRIDGE_IELTS_TOPICS.filter((t) => t.id !== selectedTopic.id);
    const random =
      otherTopics[Math.floor(Math.random() * otherTopics.length)] || CAMBRIDGE_IELTS_TOPICS[0];
    handleSelectTopic(random);
  };

  // State for Recording & Answers
  const [isListening, setIsListening] = useState(false);
  const [currentAnswerText, setCurrentAnswerText] = useState('');
  const [transcriptList, setTranscriptList] = useState<
    { part: string; question: string; answer: string }[]
  >([]);
  const [report, setReport] = useState<SpeakingMockReport | null>(null);

  const recognitionRef = useRef<any>(null);
  const silenceTimerRef = useRef<any>(null);

  // Countdown Timers
  useEffect(() => {
    let timer: any;
    if (step === 'part2_prep' && prepSeconds > 0) {
      timer = setTimeout(() => setPrepSeconds((prev) => prev - 1), 1000);
    } else if (step === 'part2_prep' && prepSeconds === 0) {
      setStep('part2_speech');
      startListening();
    }
    return () => clearTimeout(timer);
  }, [step, prepSeconds]);

  useEffect(() => {
    let timer: any;
    if (step === 'part2_speech' && speechSeconds > 0) {
      timer = setTimeout(() => setSpeechSeconds((prev) => prev - 1), 1000);
    } else if (step === 'part2_speech' && speechSeconds === 0) {
      if (isListening) {
        stopListening();
        handleFinishPart2();
      } else {
        handleFinishPart2();
      }
    }
    return () => clearTimeout(timer);
  }, [step, speechSeconds]);

  // Initialize Speech Recognition
  const startListening = () => {
    if (!SpeechRecognition) {
      toast({
        variant: 'destructive',
        title: 'Ovozli yozish mavjud emas',
        description: "Brauzeringiz ovozli yozishni qo'llab-quvvatlamaydi.",
      });
      return;
    }
    if (recognitionRef.current) recognitionRef.current.stop();

    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = 'en-US';

    recognition.onstart = () => setIsListening(true);
    recognition.onend = () => setIsListening(false);

    recognition.onresult = (event: any) => {
      let finalTranscript = '';
      let interimTranscript = '';

      for (let i = 0; i < event.results.length; i++) {
        const transcriptChunk = event.results[i][0].transcript;
        if (event.results[i].isFinal) {
          finalTranscript += transcriptChunk + ' ';
        } else {
          interimTranscript += transcriptChunk;
        }
      }

      const cleanText = (finalTranscript + interimTranscript).replace(/\s+/g, ' ').trim();
      setCurrentAnswerText(cleanText);

      if (silenceTimerRef.current) clearTimeout(silenceTimerRef.current);
      silenceTimerRef.current = setTimeout(() => {
        try {
          recognition.stop();
        } catch {}
      }, 3000);
    };

    recognitionRef.current = recognition;
    recognition.start();
  };

  const stopListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }
    setIsListening(false);
  };

  // Flow controls
  const handleNextPart1 = () => {
    stopListening();
    const currentQ = PART1_QUESTIONS[part1Index];
    const newRecord = {
      part: 'Part 1',
      question: currentQ,
      answer: currentAnswerText.trim() || 'No answer recorded.',
    };
    setTranscriptList((prev) => [...prev, newRecord]);
    setCurrentAnswerText('');

    if (part1Index < PART1_QUESTIONS.length - 1) {
      setPart1Index((prev) => prev + 1);
    } else {
      setStep('part2_prep');
    }
  };

  const handleFinishPart2 = () => {
    stopListening();
    const newRecord = {
      part: 'Part 2 (Cue Card)',
      question: `${CUE_CARD_TOPIC.title} (${CUE_CARD_TOPIC.bullets.join(', ')})`,
      answer: currentAnswerText.trim() || 'No answer recorded.',
    };
    setTranscriptList((prev) => [...prev, newRecord]);
    setCurrentAnswerText('');
    setStep('part3');
  };

  const handleNextPart3 = () => {
    stopListening();
    const currentQ = PART3_QUESTIONS[part3Index];
    const newRecord = {
      part: 'Part 3',
      question: currentQ,
      answer: currentAnswerText.trim() || 'No answer recorded.',
    };
    const updatedList = [...transcriptList, newRecord];
    setTranscriptList(updatedList);
    setCurrentAnswerText('');

    if (part3Index < PART3_QUESTIONS.length - 1) {
      setPart3Index((prev) => prev + 1);
    } else {
      triggerFullEvaluation(updatedList);
    }
  };

  const triggerFullEvaluation = async (
    fullTranscript: { part: string; question: string; answer: string }[],
  ) => {
    setStep('evaluating');
    try {
      const evalReport = await evaluateIeltsSpeakingFullMock(fullTranscript);
      setReport(evalReport);
      consumeSpeaking();

      // Persist to database and gamification
      try {
        if (awardXP) {
          await awardXP(100);
        }
        if (addSession) {
          await addSession({
            duration: 15,
            type: 'focus',
            completed: true,
            startTime: new Date().toISOString(),
          });
        }
        await HistoryService.saveMockExam({
          examType: 'ielts_speaking',
          level: 'Academic Speaking Mock',
          score: Math.round(evalReport.overallBand * 10),
          totalQuestions: 90,
          bandScore: evalReport.overallBand,
        });

        const activeUserId = user?.id || 'guest';
        MasteryEngine.recordEvidence(activeUserId, 'en', {
          id: `ielts_speaking_${Date.now()}`,
          skill: 'speaking',
          score: Math.min(100, Math.round((evalReport.overallBand / 9.0) * 100)),
          timestamp: new Date().toISOString(),
          details: `IELTS Speaking Mock Band: ${evalReport.overallBand}`,
          type: 'performance',
        });

        LearningSignalService.recordSignal({
          id: `sig_speaking_${Date.now()}`,
          type: 'completed_lesson',
          language: 'en',
          userId: activeUserId,
          timestamp: new Date().toISOString(),
          lessonId: 'ielts_speaking_mock',
          level: 'C1',
          score: Math.round(evalReport.overallBand),
          total: 9,
          percentage: Math.min(100, Math.round((evalReport.overallBand / 9.0) * 100)),
          newCardsCreated: 0,
          mistakesCount: 0,
        }).catch(() => {});
      } catch (e) {
        console.warn('Failed to save IELTS speaking mock exam history:', e);
      }

      setStep('report');
    } catch (err) {
      toast({
        variant: 'destructive',
        title: 'Xatolik',
        description: "Examiner baholashida xatolik yuz berdi. Qayta urinib ko'ring.",
      });
      setStep('intro');
    }
  };

  const allCategories = [
    'All',
    ...Array.from(new Set(CAMBRIDGE_IELTS_TOPICS.map((t) => t.category))),
  ];

  const filteredTopics = CAMBRIDGE_IELTS_TOPICS.filter((t) => {
    const matchesCategory =
      selectedCategoryFilter === 'All' || t.category === selectedCategoryFilter;
    const matchesSearch =
      t.part2.title.toLowerCase().includes(topicSearchQuery.toLowerCase()) ||
      t.category.toLowerCase().includes(topicSearchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="mx-auto max-w-5xl space-y-4 p-3 sm:space-y-6 sm:p-4 md:p-8">
      {/* Header Navigation */}
      <div className="flex items-center justify-between border-b border-border pb-3 sm:pb-4">
        <button
          onClick={() => navigate('/ielts')}
          className="rounded-xl border border-border p-2 text-muted-foreground transition-all hover:bg-muted hover:text-foreground sm:p-2.5"
        >
          <ArrowLeft size={18} />
        </button>
        <div className="flex items-center gap-2">
          <span className="rounded-full border border-indigo-500/20 bg-indigo-500/10 px-2.5 py-1 text-[11px] font-extrabold text-indigo-600 dark:text-indigo-400 sm:px-3 sm:text-xs">
            🎙️ Speaking Mock ({CAMBRIDGE_IELTS_TOPICS.length} bilet)
          </span>
        </div>
      </div>

      {/* STEP 1: INTRO */}
      {step === 'intro' && (
        <div className="mx-auto max-w-2xl space-y-4 rounded-2xl border border-border bg-card p-4 text-center shadow-xl sm:space-y-6 sm:rounded-3xl sm:p-6 md:p-8">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-indigo-500/10 text-indigo-600 sm:h-20 sm:w-20">
            <Mic size={32} className="sm:hidden" />
            <Mic size={40} className="hidden sm:block" />
          </div>
          <div>
            <h2 className="text-lg font-black text-foreground sm:text-2xl">
              IELTS Speaking Full Mock Test
            </h2>
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground sm:text-sm">
              Haqiqiy imtihon muhitida Part 1, Part 2 va Part 3 bosqichlarini topshiring.
            </p>
          </div>

          {/* Active Cambridge & Makkar Exam Card */}
          <div className="space-y-3 rounded-2xl border border-indigo-500/20 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 p-4 text-left sm:rounded-3xl sm:p-5">
            <div className="flex flex-col justify-between gap-2.5 sm:flex-row sm:items-start sm:gap-3">
              <div>
                <span className="rounded-full border border-indigo-500/20 bg-indigo-500/10 px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                  {selectedTopic.category}
                </span>
                <h4 className="mt-1.5 text-sm font-extrabold text-foreground md:text-base">
                  Cue Card: "{selectedTopic.part2.title}"
                </h4>
              </div>
              <div className="flex shrink-0 items-center gap-1.5">
                <button
                  onClick={() => setIsTopicModalOpen(true)}
                  className="flex items-center gap-1.5 rounded-xl bg-indigo-600 px-3 py-1.5 text-xs font-bold text-white shadow-md transition-all hover:bg-indigo-700 active:scale-95 sm:py-2"
                  title="Mavzular ro'yxatidan tanlash"
                >
                  <List size={14} /> Biletlar ({CAMBRIDGE_IELTS_TOPICS.length})
                </button>
                <button
                  onClick={handleRandomizeTopic}
                  className="flex items-center gap-1.5 rounded-xl border border-border bg-background px-2.5 py-1.5 text-xs font-bold text-muted-foreground transition-all hover:bg-muted hover:text-foreground active:scale-95 sm:py-2"
                  title="Boshqa imtihon bileti"
                >
                  <Dices size={14} className="text-indigo-500" /> 🎲
                </button>
              </div>
            </div>

            {/* Band 7.5+ Vocabulary Preview */}
            {selectedTopic.vocabulary && selectedTopic.vocabulary.length > 0 && (
              <div className="border-t border-indigo-500/10 pt-2">
                <span className="mb-1.5 flex items-center gap-1 text-[11px] font-bold text-muted-foreground">
                  <Sparkles size={12} className="text-amber-500" /> Ushbu mavzu uchun Band 7.5+
                  iboralar:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedTopic.vocabulary.map((v, idx) => (
                    <span
                      key={idx}
                      className="rounded-lg border border-indigo-500/20 bg-background/80 px-2 py-0.5 text-[11px] font-medium text-foreground sm:px-2.5 sm:py-1 sm:text-xs"
                      title={v.example}
                    >
                      <strong className="text-indigo-600 dark:text-indigo-400">{v.term}</strong>
                      <span className="ml-1 text-[10px] text-muted-foreground sm:text-[11px]">
                        ({v.meaningUz})
                      </span>
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Live AI Examiner Coach button */}
            <div className="border-t border-indigo-500/15 pt-2">
              <button
                onClick={() => navigate(`/speaking-coach?scenario=${selectedTopic.id}`)}
                className="active:scale-98 flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 px-3 py-2.5 text-xs font-black text-white shadow-lg shadow-emerald-500/20 transition-all hover:from-emerald-700 hover:to-cyan-700 hover:shadow-emerald-500/30 sm:rounded-2xl sm:px-4 md:text-sm"
              >
                <Bot size={16} /> 🎙️ AI Examiner Bilan Suhbat
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-2 text-left sm:grid-cols-3 sm:gap-3">
            <div className="rounded-xl border border-border/50 bg-muted/40 p-3 sm:rounded-2xl">
              <span className="block text-xs font-bold text-primary">Part 1</span>
              <span className="text-xs text-muted-foreground">
                {PART1_QUESTIONS.length} ta savol
              </span>
            </div>
            <div className="rounded-xl border border-border/50 bg-muted/40 p-3 sm:rounded-2xl">
              <span className="block text-xs font-bold text-indigo-500">Part 2</span>
              <span className="text-xs text-muted-foreground">60s tayyorgarlik + 120s nutq</span>
            </div>
            <div className="rounded-xl border border-border/50 bg-muted/40 p-3 sm:rounded-2xl">
              <span className="block text-xs font-bold text-purple-500">Part 3</span>
              <span className="text-xs text-muted-foreground">
                {PART3_QUESTIONS.length} ta tahlil savoli
              </span>
            </div>
          </div>

          <div className="flex items-center justify-center pt-1">
            <span
              className={`inline-flex items-center gap-1.5 rounded-xl px-3.5 py-1.5 text-xs font-bold ${
                isAdmin || canUseSpeaking
                  ? 'border border-emerald-500/20 bg-emerald-500/10 text-emerald-500'
                  : 'border border-amber-500/20 bg-amber-500/10 text-amber-400'
              }`}
            >
              <Zap size={13} className={canUseSpeaking ? 'text-emerald-500' : 'text-amber-400'} />
              <span>
                {isAdmin
                  ? 'Admin: Cheksiz'
                  : remainingSpeaking > 0
                    ? 'Bepul limit: 1/1 Mock qoldi'
                    : 'Bepul limit tugadi (0/1)'}
              </span>
            </span>
          </div>

          <Button
            onClick={() => {
              if (!canUseSpeaking) {
                setIsLimitModalOpen(true);
                return;
              }
              setStep('part1');
              speakText(PART1_QUESTIONS[0], 'en-GB');
            }}
            className="active:scale-98 w-full cursor-pointer rounded-xl bg-indigo-600 py-3.5 text-sm font-extrabold text-white shadow-lg shadow-indigo-500/20 hover:bg-indigo-700 sm:rounded-2xl sm:py-4 sm:text-base"
          >
            Imtihonni Boshlash <ChevronRight className="ml-2" size={18} />
          </Button>
        </div>
      )}

      {/* STEP 2: PART 1 */}
      {step === 'part1' && (
        <div className="space-y-4 rounded-2xl border border-border bg-card p-4 shadow-xl sm:space-y-6 sm:rounded-3xl sm:p-6 md:p-8">
          <div className="flex items-center justify-between border-b border-border pb-3 sm:pb-4">
            <span className="text-[11px] font-black uppercase tracking-wider text-indigo-500 sm:text-xs">
              Part 1: Introduction ({part1Index + 1} / {PART1_QUESTIONS.length})
            </span>
            <button
              onClick={() => speakText(PART1_QUESTIONS[part1Index], 'en-GB')}
              className="rounded-xl p-2 text-primary hover:bg-primary/10"
            >
              <Volume2 size={18} />
            </button>
          </div>

          <div className="space-y-2 py-2 text-center sm:space-y-3 sm:py-4">
            <h3 className="text-lg font-extrabold text-foreground sm:text-2xl">
              {PART1_QUESTIONS[part1Index]}
            </h3>
            <p className="text-xs text-muted-foreground">
              Savolga 2-3 ta mukammal gap bilan javob bering.
            </p>
          </div>

          <div className="space-y-3 sm:space-y-4">
            <div className="min-h-20 rounded-xl border border-border bg-muted/40 p-3.5 text-xs font-medium text-foreground sm:min-h-24 sm:rounded-2xl sm:p-4 sm:text-sm">
              {currentAnswerText || (
                <span className="italic text-muted-foreground">
                  Ovozli javobingiz bu yerda ko'rinadi...
                </span>
              )}
            </div>

            <div className="flex flex-col items-stretch gap-2.5 sm:flex-row sm:items-center sm:gap-3">
              <Button
                onClick={isListening ? stopListening : startListening}
                variant={isListening ? 'destructive' : 'default'}
                className="flex-1 rounded-xl py-3 font-bold"
              >
                {isListening ? (
                  <>
                    <MicOff className="mr-2" size={18} /> To'xtatish
                  </>
                ) : (
                  <>
                    <Mic className="mr-2" size={18} /> Ovozli Javob Berish
                  </>
                )}
              </Button>

              <Button
                onClick={handleNextPart1}
                className="rounded-xl bg-indigo-600 px-5 py-3 font-bold text-white sm:px-6"
              >
                Keyingi Savol <ChevronRight className="ml-1" size={18} />
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* STEP 3: PART 2 PREP (CUE CARD 60S COUNTDOWN) */}
      {step === 'part2_prep' && (
        <div className="mx-auto max-w-2xl space-y-4 rounded-2xl border border-border bg-card p-4 shadow-xl sm:space-y-6 sm:rounded-3xl sm:p-6 md:p-8">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-black uppercase tracking-wider text-amber-500 sm:text-xs">
              Part 2: Cue Card Preparation
            </span>
            <div className="flex items-center gap-1.5 rounded-full border border-amber-500/20 bg-amber-500/10 px-2.5 py-1 text-sm font-extrabold text-amber-500 sm:gap-2 sm:px-3 sm:text-lg">
              <Clock size={16} /> {prepSeconds} soniya
            </div>
          </div>

          <div className="space-y-3 rounded-xl border border-amber-500/20 bg-gradient-to-br from-amber-500/10 to-orange-500/10 p-4 text-left sm:space-y-4 sm:rounded-2xl sm:p-6">
            <h3 className="text-lg font-black text-foreground sm:text-xl">
              {CUE_CARD_TOPIC.title}
            </h3>
            <p className="text-xs font-bold uppercase text-muted-foreground">
              Siz quyidagilar haqida gapirishingiz kerak:
            </p>
            <ul className="space-y-1.5 text-xs font-medium text-foreground sm:space-y-2 sm:text-sm">
              {CUE_CARD_TOPIC.bullets.map((b, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" /> {b}
                </li>
              ))}
            </ul>
          </div>

          <p className="text-xs text-muted-foreground">
            Eslatmalaringizni o'ylang. 60 soniyadan so'ng nutq taymeri boshlanadi.
          </p>

          <Button
            onClick={() => setStep('part2_speech')}
            className="w-full rounded-xl bg-amber-500 py-3 text-xs font-extrabold text-white hover:bg-amber-600 sm:py-3.5 sm:text-sm"
          >
            Tayyorman — Nutqni Boshlash (120s)
          </Button>
        </div>
      )}

      {/* STEP 4: PART 2 SPEECH (120S SPEECH COUNTDOWN) */}
      {step === 'part2_speech' && (
        <div className="space-y-4 rounded-2xl border border-border bg-card p-4 shadow-xl sm:space-y-6 sm:rounded-3xl sm:p-6 md:p-8">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-black uppercase tracking-wider text-amber-500 sm:text-xs">
              Part 2: Long Turn Speech
            </span>
            <div className="flex items-center gap-1.5 rounded-full border border-red-500/20 bg-red-500/10 px-2.5 py-1 text-sm font-extrabold text-red-500 sm:gap-2 sm:px-3 sm:text-lg">
              <Clock size={16} /> {speechSeconds}s qoldi
            </div>
          </div>

          <div className="rounded-xl border border-border bg-muted/40 p-3.5 text-left sm:rounded-2xl sm:p-4">
            <h4 className="mb-1 text-xs font-bold text-foreground sm:text-sm">
              {CUE_CARD_TOPIC.title}
            </h4>
            <p className="text-xs text-muted-foreground">{CUE_CARD_TOPIC.bullets.join(' • ')}</p>
          </div>

          <div className="min-h-24 rounded-xl border border-border bg-muted/40 p-3.5 text-xs font-medium text-foreground sm:min-h-32 sm:rounded-2xl sm:p-4 sm:text-sm">
            {currentAnswerText || (
              <span className="italic text-muted-foreground">
                Gapirishni boshlang. Javobingiz yozib olinmoqda...
              </span>
            )}
          </div>

          <div className="flex flex-col items-stretch gap-2.5 sm:flex-row sm:items-center sm:gap-3">
            <Button
              onClick={isListening ? stopListening : startListening}
              variant={isListening ? 'destructive' : 'default'}
              className="flex-1 rounded-xl py-3 font-bold"
            >
              {isListening ? (
                <>
                  <MicOff className="mr-2" size={18} /> To'xtatish
                </>
              ) : (
                <>
                  <Mic className="mr-2" size={18} /> Mikrofonni Yoqish
                </>
              )}
            </Button>
            <Button
              onClick={handleFinishPart2}
              className="rounded-xl bg-amber-500 px-5 py-3 font-bold text-white sm:px-6"
            >
              Part 2 Yakunlash <ChevronRight className="ml-1" size={18} />
            </Button>
          </div>
        </div>
      )}

      {/* STEP 5: PART 3 */}
      {step === 'part3' && (
        <div className="space-y-4 rounded-2xl border border-border bg-card p-4 shadow-xl sm:space-y-6 sm:rounded-3xl sm:p-6 md:p-8">
          <div className="flex items-center justify-between border-b border-border pb-3 sm:pb-4">
            <span className="text-[11px] font-black uppercase tracking-wider text-purple-500 sm:text-xs">
              Part 3: Discussion ({part3Index + 1} / {PART3_QUESTIONS.length})
            </span>
            <button
              onClick={() => speakText(PART3_QUESTIONS[part3Index], 'en-GB')}
              className="rounded-xl p-2 text-primary hover:bg-primary/10"
            >
              <Volume2 size={18} />
            </button>
          </div>

          <div className="space-y-2 py-2 text-center sm:space-y-3 sm:py-4">
            <h3 className="text-lg font-extrabold text-foreground sm:text-2xl">
              {PART3_QUESTIONS[part3Index]}
            </h3>
            <p className="text-xs text-muted-foreground">
              PREP usuli (Point, Reason, Example) bo'yicha batafsil fikringizni ayting.
            </p>
          </div>

          <div className="space-y-3 sm:space-y-4">
            <div className="min-h-20 rounded-xl border border-border bg-muted/40 p-3.5 text-xs font-medium text-foreground sm:min-h-24 sm:rounded-2xl sm:p-4 sm:text-sm">
              {currentAnswerText || (
                <span className="italic text-muted-foreground">
                  Ovozli javobingiz bu yerda ko'rinadi...
                </span>
              )}
            </div>

            <div className="flex flex-col items-stretch gap-2.5 sm:flex-row sm:items-center sm:gap-3">
              <Button
                onClick={isListening ? stopListening : startListening}
                variant={isListening ? 'destructive' : 'default'}
                className="flex-1 rounded-xl py-3 font-bold"
              >
                {isListening ? (
                  <>
                    <MicOff className="mr-2" size={18} /> To'xtatish
                  </>
                ) : (
                  <>
                    <Mic className="mr-2" size={18} /> Ovozli Javob Berish
                  </>
                )}
              </Button>

              <Button
                onClick={handleNextPart3}
                className="rounded-xl bg-purple-600 px-5 py-3 font-bold text-white sm:px-6"
              >
                {part3Index < PART3_QUESTIONS.length - 1 ? 'Keyingi Savol' : 'Testni Yakunlash'}{' '}
                <ChevronRight className="ml-1" size={18} />
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* STEP 6: EVALUATING */}
      {step === 'evaluating' && (
        <div className="mx-auto max-w-lg space-y-4 rounded-2xl border border-border bg-card p-8 text-center shadow-xl sm:space-y-6 sm:rounded-3xl sm:p-12">
          <div className="mx-auto flex h-16 w-16 animate-pulse items-center justify-center rounded-full bg-indigo-500/10 text-indigo-600 sm:h-20 sm:w-20">
            <Sparkles size={32} className="sm:hidden" />
            <Sparkles size={40} className="hidden sm:block" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-foreground sm:text-xl">
              IELTS Examiner Tahlil Qilmoqda...
            </h3>
            <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
              Fluency, Lexical Resource, Grammar va Pronunciation ko'rsatkichlaringiz hisoblanmoqda.
            </p>
          </div>
        </div>
      )}

      {/* STEP 7: FINAL EXAMINER REPORT */}
      {step === 'report' && report && (
        <div className="space-y-6 rounded-2xl border border-border bg-card p-4 shadow-2xl sm:space-y-8 sm:rounded-3xl sm:p-6 md:p-8">
          <div className="flex flex-col justify-between gap-6 border-b border-border pb-6 md:flex-row md:items-center">
            <div>
              <span className="text-xs font-black uppercase text-indigo-500">
                Rasmiy IELTS Examiner Hisoboti
              </span>
              <h2 className="mt-1 text-3xl font-extrabold text-foreground">
                Speaking Mock Natijangiz
              </h2>
            </div>
            <div className="flex items-center gap-3 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 p-4 text-white shadow-lg">
              <Award size={36} />
              <div>
                <span className="block text-xs font-bold uppercase opacity-80">
                  Umumiy Band Score
                </span>
                <span className="text-4xl font-black">{report.overallBand.toFixed(1)}</span>
              </div>
            </div>
          </div>

          {/* 4 Criteria Scores */}
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="space-y-1 rounded-2xl border border-border bg-muted/40 p-4">
              <span className="block text-xs font-bold uppercase text-muted-foreground">
                Fluency (FC)
              </span>
              <span className="text-2xl font-black text-indigo-600 dark:text-indigo-400">
                {report.fluencyScore.toFixed(1)}
              </span>
              <p className="text-xs text-muted-foreground">{report.fluencyFeedback}</p>
            </div>
            <div className="space-y-1 rounded-2xl border border-border bg-muted/40 p-4">
              <span className="block text-xs font-bold uppercase text-muted-foreground">
                Vocabulary (LR)
              </span>
              <span className="text-2xl font-black text-purple-600 dark:text-purple-400">
                {report.lexicalResourceScore.toFixed(1)}
              </span>
              <p className="text-xs text-muted-foreground">{report.lexicalResourceFeedback}</p>
            </div>
            <div className="space-y-1 rounded-2xl border border-border bg-muted/40 p-4">
              <span className="block text-xs font-bold uppercase text-muted-foreground">
                Grammar (GRA)
              </span>
              <span className="text-2xl font-black text-emerald-600 dark:text-emerald-400">
                {report.grammarScore.toFixed(1)}
              </span>
              <p className="text-xs text-muted-foreground">{report.grammarFeedback}</p>
            </div>
            <div className="space-y-1 rounded-2xl border border-border bg-muted/40 p-4">
              <span className="block text-xs font-bold uppercase text-muted-foreground">
                Pronunciation (P)
              </span>
              <span className="text-2xl font-black text-amber-600 dark:text-amber-400">
                {report.pronunciationScore.toFixed(1)}
              </span>
              <p className="text-xs text-muted-foreground">{report.pronunciationFeedback}</p>
            </div>
          </div>

          {/* Grammar & Vocab Highlights */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {report.grammarErrors.length > 0 && (
              <div className="space-y-3 rounded-2xl border border-red-500/20 bg-red-500/5 p-5">
                <h4 className="flex items-center gap-2 text-sm font-bold text-red-500">
                  <AlertCircle size={16} /> Grammatik Xatolar Tahlili:
                </h4>
                <div className="space-y-2">
                  {report.grammarErrors.map((err, i) => (
                    <div
                      key={i}
                      className="space-y-1 rounded-xl border border-border/50 bg-background/50 p-2.5 text-xs"
                    >
                      <p className="text-red-400 line-through">"{err.original}"</p>
                      <p className="font-bold text-emerald-500">➔ "{err.corrected}"</p>
                      <p className="text-[11px] text-muted-foreground">{err.explanation}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {report.advancedVocabSuggestions.length > 0 && (
              <div className="space-y-3 rounded-2xl border border-indigo-500/20 bg-indigo-500/5 p-5">
                <h4 className="flex items-center gap-2 text-sm font-bold text-indigo-500">
                  <Sparkles size={16} /> Band 8.0 So'zlar Almashtiruvi:
                </h4>
                <div className="space-y-2">
                  {report.advancedVocabSuggestions.map((v, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between rounded-xl border border-border/50 bg-background/50 p-2.5 text-xs"
                    >
                      <span className="text-muted-foreground">"{v.original}"</span>
                      <span className="font-bold text-indigo-500">➔ "{v.band8Alternative}"</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-col gap-3 pt-2 sm:flex-row">
            <button
              onClick={() => setIsTrfModalOpen(true)}
              className="flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-2xl bg-red-600 py-4 text-xs font-black text-white shadow-lg shadow-red-600/20 transition-all hover:bg-red-700 sm:text-sm"
            >
              <FileText size={18} />
              <span>Rasmiy TRF Sertifikatini Olish (PDF)</span>
            </button>
            <Button
              onClick={() => setStep('intro')}
              variant="secondary"
              className="flex-1 rounded-2xl py-4 font-bold"
            >
              <RefreshCw className="mr-2" size={18} /> Qayta Test Topshirish
            </Button>
          </div>

          {isTrfModalOpen && (
            <IeltsTrfCertificateModal
              isOpen={isTrfModalOpen}
              onClose={() => setIsTrfModalOpen(false)}
              data={{
                candidateName:
                  user?.user_metadata?.full_name || user?.email?.split('@')[0] || 'IELTS Candidate',
                testDate: new Date().toLocaleDateString('en-GB', {
                  day: '2-digit',
                  month: 'short',
                  year: 'numeric',
                }),
                testType: 'Academic',
                module: 'Speaking',
                scores: {
                  speaking: report.overallBand,
                  overall: report.overallBand,
                  cefrLevel: TrfCertificateService.getCefrFromBand(report.overallBand),
                },
                subCriteria: [
                  {
                    label: 'Fluency & Coherence',
                    score: report.fluencyScore,
                    feedback: report.fluencyFeedback,
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
                  {
                    label: 'Pronunciation',
                    score: report.pronunciationScore,
                    feedback: report.pronunciationFeedback,
                  },
                ],
                examinerNotes: `Candidate achieved Band ${report.overallBand.toFixed(1)} in Full Speaking Mock. ${report.fluencyFeedback}`,
                verificationCode: TrfCertificateService.generateVerificationCode('Speaking'),
              }}
            />
          )}
        </div>
      )}

      {/* TOPIC PICKER MODAL */}
      {isTopicModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
          <div className="flex max-h-[85vh] w-full max-w-2xl flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-2xl duration-200 animate-in fade-in zoom-in-95">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-border p-5">
              <div className="flex items-center gap-2.5">
                <div className="rounded-xl bg-indigo-500/10 p-2.5 text-indigo-600 dark:text-indigo-400">
                  <BookOpen size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-extrabold text-foreground">
                    IELTS Speaking Biletlari (2026)
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    O'zingiz mashq qilmoqchi bo'lgan mavzuni tanlang (
                    {CAMBRIDGE_IELTS_TOPICS.length} ta mavzu)
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsTopicModalOpen(false)}
                className="rounded-xl p-2 text-muted-foreground transition-all hover:bg-muted hover:text-foreground"
              >
                <X size={20} />
              </button>
            </div>

            {/* Search Bar */}
            <div className="border-b border-border bg-muted/20 p-4">
              <div className="relative">
                <Search
                  size={16}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground"
                />
                <input
                  type="text"
                  value={topicSearchQuery}
                  onChange={(e) => setTopicSearchQuery(e.target.value)}
                  placeholder="Mavzu nomi yoki kalit so'z bo'yicha qidiring..."
                  className="w-full rounded-xl border border-border bg-background py-2.5 pl-10 pr-4 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  autoFocus
                />
              </div>

              {/* Category Filter Chips */}
              <div className="scrollbar-none flex gap-1.5 overflow-x-auto pb-1">
                {allCategories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategoryFilter(cat)}
                    className={`whitespace-nowrap rounded-full px-3 py-1 text-xs font-bold transition-all ${
                      selectedCategoryFilter === cat
                        ? 'bg-indigo-600 text-white shadow-sm'
                        : 'border border-border bg-background text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Topics List */}
            <div className="flex-1 space-y-2.5 overflow-y-auto p-4">
              {filteredTopics.map((topic, idx) => (
                <div
                  key={topic.id}
                  onClick={() => handleSelectTopic(topic)}
                  className={`group flex w-full cursor-pointer items-center justify-between gap-3 rounded-2xl border p-4 text-left transition-all ${
                    selectedTopic.id === topic.id
                      ? 'border-indigo-500/40 bg-indigo-500/10 ring-1 ring-indigo-500'
                      : 'border-border bg-card hover:border-indigo-500/30 hover:bg-muted/50'
                  }`}
                >
                  <div className="min-w-0 flex-1 space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="rounded-md border border-indigo-500/20 bg-indigo-500/10 px-2 py-0.5 text-[10px] font-extrabold uppercase text-indigo-600 dark:text-indigo-400">
                        {topic.category}
                      </span>
                      <span className="text-[10px] font-bold text-muted-foreground">
                        #{idx + 1}
                      </span>
                    </div>
                    <h4 className="text-sm font-extrabold text-foreground transition-colors group-hover:text-indigo-500">
                      "{topic.part2.title}"
                    </h4>
                    <p className="truncate text-xs text-muted-foreground">
                      {topic.part2.bullets.slice(0, 2).join(' • ')}
                    </p>
                  </div>
                  <div className="flex shrink-0 items-center gap-2">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/speaking-coach?scenario=${topic.id}`);
                      }}
                      className="flex cursor-pointer items-center gap-1 rounded-xl border border-emerald-500/20 bg-emerald-600/10 px-2.5 py-1.5 text-[11px] font-extrabold text-emerald-600 shadow-xs transition-all hover:bg-emerald-600 hover:text-white active:scale-95"
                      title="AI Examiner bilan jonli muloqot"
                    >
                      <Bot size={13} /> AI Suhbat
                    </button>
                    <ChevronRight
                      size={18}
                      className="shrink-0 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:text-indigo-500"
                    />
                  </div>
                </div>
              ))}
              {filteredTopics.length === 0 && (
                <div className="py-12 text-center text-muted-foreground">
                  <p className="text-sm font-bold">Mos keluvchi mavzu topilmadi.</p>
                  <p className="mt-1 text-xs">Boshqa kalit so'z bilan qidirib ko'ring.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <FreemiumLimitModal
        isOpen={isLimitModalOpen}
        onClose={() => setIsLimitModalOpen(false)}
        feature="speaking"
        hoursUntilReset={hoursUntilReset}
        minutesUntilReset={minutesUntilReset}
      />
    </div>
  );
};

export default IeltsSpeakingMockPage;
