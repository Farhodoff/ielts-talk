import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  Clock,
  BookOpen,
  Volume2,
  CheckCircle2,
  ChevronRight,
  Award,
  Play,
  Pause,
  RotateCcw,
  Sparkles,
  AlertCircle,
  RefreshCw,
  BarChart2,
  FileText,
  Eye,
  EyeOff,
  Headphones,
  BookmarkCheck,
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { generateAIResponse, extractJsonFromAiResponse } from '../utils/ai/aiCore';
import { IELTS_LISTENING_EXAMS } from '../data/ielts/listening_data';
import { IELTS_READING_EXAMS, ReadingPassage } from '../data/ielts/reading_data';
import { HistoryService } from '../services/HistoryService';
import { useStudyData } from '../context/StudyPlannerContext';
import { MasteryEngine } from '../services/MasteryEngine';
import { IeltsTrfCertificateModal } from '../components/ielts/IeltsTrfCertificateModal';
import { TrfCertificateService } from '../services/TrfCertificateService';

interface Question {
  id: number;
  text: string;
  options?: string[];
  correctAnswer: string;
  type: 'choice' | 'fill';
  explanation: string;
}

interface PassageData {
  id?: string;
  title: string;
  academicLevel?: string;
  text: string;
  script?: string;
  questions: Question[];
  audioUrl?: string;
}

export const IeltsReadingListeningMockPage: React.FC = () => {
  const navigate = useNavigate();
  const { awardXP, user } = useStudyData();
  const [testType, setTestType] = useState<'reading' | 'listening'>('reading');
  const [step, setStep] = useState<'intro' | 'test' | 'report'>('intro');
  const [mobileTestTab, setMobileTestTab] = useState<'passage' | 'questions'>('passage');

  // AI Generation States
  const [aiTopic, setAiTopic] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [aiError, setAiError] = useState<string | null>(null);

  // Timer & Session
  const [timeLeft, setTimeLeft] = useState(1200); // 20 mins for reading, 15 for listening
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  // Active Passage/Questions Data
  const [currentPassage, setCurrentPassage] = useState<PassageData>({
    id: IELTS_READING_EXAMS[0].id,
    title: IELTS_READING_EXAMS[0].title,
    academicLevel: IELTS_READING_EXAMS[0].academicLevel,
    text: IELTS_READING_EXAMS[0].text,
    questions: IELTS_READING_EXAMS[0].questions,
  });

  // User Answers State
  const [userAnswers, setUserAnswers] = useState<{ [qId: number]: string }>({});
  const [score, setScore] = useState(0);
  const [isTrfModalOpen, setIsTrfModalOpen] = useState(false);

  // Listening section features
  const [showTranscriptDuringTest, setShowTranscriptDuringTest] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioDuration, setAudioDuration] = useState(0);
  const [audioProgress, setAudioProgress] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState(1.0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // TTS Fallback SpeechSynthesis state
  const [isUsingTts, setIsUsingTts] = useState(false);
  const ttsUtteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  // Active selected catalog exam
  const [selectedListeningExamIndex, setSelectedListeningExamIndex] = useState(0);

  // Timer Effect
  useEffect(() => {
    let timer: any;
    if (isTimerRunning && timeLeft > 0) {
      timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    } else if (timeLeft === 0 && isTimerRunning) {
      handleSubmitTest();
    }
    return () => clearInterval(timer);
  }, [isTimerRunning, timeLeft]);

  // Cleanup audio & TTS on unmount or view change
  useEffect(() => {
    return () => {
      stopAudioPlayback();
    };
  }, []);

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  // --- Audio Player Logic ---
  const handlePlayPause = () => {
    if (testType !== 'listening') return;

    // If audioUrl is missing or is using TTS fallback
    if (!currentPassage.audioUrl || isUsingTts) {
      triggerTtsPlayback();
      return;
    }

    if (!audioRef.current) {
      const audio = new Audio(currentPassage.audioUrl);
      audioRef.current = audio;
      audio.playbackRate = playbackSpeed;

      audio.addEventListener('loadedmetadata', () => {
        setAudioDuration(audio.duration);
      });
      audio.addEventListener('timeupdate', () => {
        setAudioProgress(audio.currentTime);
      });
      audio.addEventListener('ended', () => {
        setIsPlaying(false);
        setAudioProgress(0);
      });
      audio.addEventListener('error', () => {
        console.warn('Audio loading failed. Switching to TTS fallback.');
        setIsUsingTts(true);
        triggerTtsPlayback();
      });
    }

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().catch(() => {
        setIsUsingTts(true);
        triggerTtsPlayback();
      });
      setIsPlaying(true);
    }
  };

  const triggerTtsPlayback = () => {
    if (isPlaying) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
      const textToSpeak = currentPassage.script || currentPassage.text;
      const utterance = new SpeechSynthesisUtterance(textToSpeak);
      utterance.lang = 'en-GB';
      utterance.rate = playbackSpeed;
      utterance.onend = () => {
        setIsPlaying(false);
      };
      utterance.onerror = () => {
        setIsPlaying(false);
      };
      ttsUtteranceRef.current = utterance;
      window.speechSynthesis.speak(utterance);
    }
  };

  const stopAudioPlayback = () => {
    setIsPlaying(false);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      audioRef.current = null;
    }
    window.speechSynthesis.cancel();
  };

  const handleSpeedChange = (speed: number) => {
    setPlaybackSpeed(speed);
    if (audioRef.current) {
      audioRef.current.playbackRate = speed;
    }
    if (isPlaying && (isUsingTts || !currentPassage.audioUrl)) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
      setTimeout(() => {
        setIsPlaying(true);
        const textToSpeak = currentPassage.script || currentPassage.text;
        const utterance = new SpeechSynthesisUtterance(textToSpeak);
        utterance.lang = 'en-GB';
        utterance.rate = speed;
        utterance.onend = () => setIsPlaying(false);
        utterance.onerror = () => setIsPlaying(false);
        window.speechSynthesis.speak(utterance);
      }, 100);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    setAudioProgress(time);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
    }
  };

  const skipTime = (amount: number) => {
    if (audioRef.current) {
      let next = audioRef.current.currentTime + amount;
      if (next < 0) next = 0;
      if (next > audioRef.current.duration) next = audioRef.current.duration;
      audioRef.current.currentTime = next;
      setAudioProgress(next);
    }
  };

  // --- Dynamic AI Generator ---
  const generatePassageWithAI = async (presetTopic?: string) => {
    const topic = presetTopic || aiTopic.trim() || 'Artificial Intelligence & Global Warming';
    setIsGenerating(true);
    setAiError(null);

    const prompt = `
          Act as an expert IELTS Academic Test Maker.
          Generate one complete IELTS practice task on the topic: "${topic}".
          The task type is: "${testType}" (either "reading" or "listening").
          
          Guidelines for "reading":
          Provide an Academic Reading passage of approximately 300 words, a title, and exactly 4 questions (combination of multiple choice and sentence completion).
          
          Guidelines for "listening":
          Provide an authentic IELTS listening conversation or academic lecture script of approximately 220 words, a title, and exactly 4 questions.
          
          Each question can be 'choice' (multiple choice, options index 0-3) or 'fill' (note/sentence completion with short text).
          
          Return ONLY a valid JSON object matching this structure (DO NOT wrap in markdown, backticks, or write other explanations):
          {
            "title": "Passage/Audio Title",
            "text": "The full reading passage text or listening script...",
            "questions": [
              {
                "id": 1,
                "text": "Question text...",
                "type": "choice",
                "options": ["Option A", "Option B", "Option C", "Option D"],
                "correctAnswer": "0",
                "explanation": "Explanation for why this is correct..."
              },
              {
                "id": 2,
                "text": "Sentence completion question: The primary element is ________.",
                "type": "fill",
                "correctAnswer": "hydrogen",
                "explanation": "Explanation citation..."
              }
            ]
          }
        `;

    try {
      const rawResponse = await generateAIResponse(
        [
          { role: 'system', content: 'You are a JSON only provider.' },
          { role: 'user', content: prompt },
        ],
        { isJson: true },
      );
      const data = extractJsonFromAiResponse<PassageData>(rawResponse);

      if (data.title && data.text && Array.isArray(data.questions)) {
        setCurrentPassage({
          title: data.title,
          text: data.text,
          script: testType === 'listening' ? data.text : undefined,
          questions: data.questions,
        });
        setUserAnswers({});
        setShowTranscriptDuringTest(false);
        setStep('test');
        setIsTimerRunning(true);
        setTimeLeft(testType === 'reading' ? 1200 : 900);
      } else {
        throw new Error('Invalid response format received from AI.');
      }
    } catch (err: any) {
      console.error(err);
      setAiError("Mashq yaratishda xatolik yuz berdi. Iltimos qaytadan urinib ko'ring.");
    } finally {
      setIsGenerating(false);
    }
  };

  // --- Load Specific Reading Passage ---
  const handleSelectReadingPassage = (passage: ReadingPassage) => {
    stopAudioPlayback();
    setUserAnswers({});
    setShowTranscriptDuringTest(false);
    setAiError(null);
    setCurrentPassage({
      id: passage.id,
      title: passage.title,
      academicLevel: passage.academicLevel,
      text: passage.text,
      questions: passage.questions,
    });
    setStep('test');
    setIsTimerRunning(true);
    setTimeLeft(1200); // 20 mins for reading
  };

  // --- Load Specific Listening Section ---
  const handleSelectListeningSection = (examIndex: number, sectionIndex: number) => {
    stopAudioPlayback();
    setUserAnswers({});
    setShowTranscriptDuringTest(false);
    setAiError(null);
    const exam = IELTS_LISTENING_EXAMS[examIndex];
    const section = exam.sections[sectionIndex];
    setCurrentPassage({
      id: `${exam.id}_sec_${section.sectionNumber}`,
      title: `${exam.title} — ${section.title}`,
      academicLevel: `Section ${section.sectionNumber}`,
      text: section.script,
      script: section.script,
      audioUrl: section.audioUrl,
      questions: section.questions,
    });
    setStep('test');
    setIsTimerRunning(true);
    setTimeLeft(900); // 15 mins for listening section
  };

  const handleOptionSelect = (questionId: number, answer: string) => {
    setUserAnswers((prev) => ({ ...prev, [questionId]: answer }));
  };

  const handleSubmitTest = async () => {
    stopAudioPlayback();
    setIsTimerRunning(false);

    let correctCount = 0;
    currentPassage.questions.forEach((q) => {
      const userAns = (userAnswers[q.id] || '').trim().toLowerCase();
      const correctAns = q.correctAnswer.trim().toLowerCase();

      if (userAns === correctAns) {
        correctCount++;
      }
    });

    setScore(correctCount);
    setStep('report');

    // Award XP
    try {
      if (awardXP && correctCount > 0) {
        await awardXP(correctCount * 30);
      }
    } catch (e) {}

    // Calculate band score
    const band = calculateIeltsBandScore(correctCount, currentPassage.questions.length);

    // Save Attempt to History and record Mastery Evidence
    try {
      await HistoryService.saveMockExam({
        examType: testType === 'reading' ? 'ielts_reading' : 'ielts_listening',
        score: correctCount,
        totalQuestions: currentPassage.questions.length,
        bandScore: band,
      });

      const activeUserId = user?.id || 'guest';
      MasteryEngine.recordEvidence(activeUserId, 'en', {
        id: `ielts_${testType}_${Date.now()}`,
        skill: testType === 'reading' ? 'reading' : 'listening',
        score: Math.min(100, Math.round((band / 9.0) * 100)),
        timestamp: new Date().toISOString(),
        details: `IELTS ${testType.toUpperCase()} Band: ${band} (${correctCount}/${currentPassage.questions.length})`,
        type: 'performance',
      });
    } catch (err) {
      console.error('Failed to save mock test score history:', err);
    }
  };

  // Official Proportional IELTS Band Score calculation
  const calculateIeltsBandScore = (correct: number, total: number) => {
    if (total === 0) return 0;
    const ratio = correct / total;
    if (ratio >= 0.9) return 9.0;
    if (ratio >= 0.82) return 8.5;
    if (ratio >= 0.75) return 8.0;
    if (ratio >= 0.68) return 7.5;
    if (ratio >= 0.6) return 7.0;
    if (ratio >= 0.52) return 6.5;
    if (ratio >= 0.45) return 6.0;
    if (ratio >= 0.38) return 5.5;
    if (ratio >= 0.3) return 5.0;
    if (ratio >= 0.22) return 4.5;
    return 4.0;
  };

  const getBandDescriptor = (band: number) => {
    if (band >= 8.5)
      return {
        title: 'Expert User (Mukammal daraja)',
        badge: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
        feedback:
          "Sizning tushunish qobiliyatingiz oliy darajada! Murakkab akademik matnlar va tezkor suhbatlarni bemalol o'zlashtira olasiz.",
      };
    if (band >= 7.5)
      return {
        title: "Very Good User (A'lo daraja)",
        badge: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20',
        feedback:
          "Juda kuchli natija! Bir-ikkita kichik chalg'ituvchilarga e'tibor qaratilsa, 8.5+ gacha bemalol chiqish mumkin.",
      };
    if (band >= 6.5)
      return {
        title: 'Good / Competent User (Yetarli daraja)',
        badge: 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20',
        feedback:
          "Asosiy mazmunni to'g'ri ilg'adingiz. Sinonimlar va so'zlarning yozilish imlosiga (spelling) ko'proq ahamiyat bering.",
      };
    if (band >= 5.5)
      return {
        title: "Modest User (O'rtacha daraja)",
        badge: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20',
        feedback:
          "Savollarni diqqat bilan o'qish va skimming/scanning strategiyalarini chuqurlashtirish tavsiya etiladi.",
      };
    return {
      title: "Limited User (Boshlang'ich daraja)",
      badge: 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20',
      feedback:
        "Baza so'z boyligini kengaytirish va 1-bosqich Foundation mashqlarini takrorlash foydali bo'ladi.",
    };
  };

  return (
    <div className="mx-auto max-w-5xl space-y-6 p-3.5 pb-16 md:p-8">
      {/* Top Bar Navigation */}
      <div className="flex items-center justify-between border-b border-border pb-4">
        <button
          onClick={() => {
            stopAudioPlayback();
            navigate('/ielts');
          }}
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
                <BookOpen size={24} className="sm:hidden" />
              ) : (
                <Headphones size={24} className="sm:hidden" />
              )}
              {testType === 'reading' ? (
                <BookOpen size={28} className="hidden sm:block" />
              ) : (
                <Headphones size={28} className="hidden sm:block" />
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

          {/* READING CATALOG */}
          {testType === 'reading' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="flex items-center gap-1.5 text-sm font-black text-foreground sm:gap-2 sm:text-base">
                  <BookmarkCheck size={18} className="text-indigo-500" />
                  Reading Matnlari ({IELTS_READING_EXAMS.length} ta)
                </h3>
                <span className="text-[11px] text-muted-foreground sm:text-xs">20 daqiqa</span>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-2">
                {IELTS_READING_EXAMS.map((passage, index) => (
                  <div
                    key={passage.id}
                    className="group flex flex-col justify-between space-y-3 rounded-2xl border border-border bg-card p-4 shadow-sm transition-all hover:border-indigo-500/50 hover:shadow-md sm:p-5"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="rounded-full border border-indigo-500/20 bg-indigo-500/10 px-2.5 py-0.5 text-[10px] font-black uppercase text-indigo-600 dark:text-indigo-400">
                          Passage {index + 1} • {passage.academicLevel}
                        </span>
                        <span className="flex items-center gap-1 font-mono text-[11px] text-muted-foreground">
                          <Clock size={12} /> 20 min
                        </span>
                      </div>
                      <h4 className="text-sm font-black text-foreground transition-colors group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                        {passage.title}
                      </h4>
                      <p className="line-clamp-2 text-xs leading-relaxed text-muted-foreground">
                        {passage.text}
                      </p>
                    </div>

                    <div className="flex items-center justify-between border-t border-border/60 pt-3">
                      <span className="text-[11px] font-semibold text-muted-foreground">
                        📝 {passage.questions.length} ta savol
                      </span>
                      <Button
                        onClick={() => handleSelectReadingPassage(passage)}
                        className="flex cursor-pointer items-center gap-1 rounded-xl bg-indigo-600 px-3.5 py-1.5 text-xs font-black text-white shadow-sm hover:bg-indigo-700"
                      >
                        Boshlash <ChevronRight size={14} />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* LISTENING CATALOG */}
          {testType === 'listening' && (
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="flex items-center gap-1.5 text-sm font-black text-foreground sm:gap-2 sm:text-base">
                  <Headphones size={18} className="text-purple-500" />
                  Listening Testlar
                </h3>
                <span className="text-[11px] text-muted-foreground sm:text-xs">
                  Bo'limlar bo'yicha
                </span>
              </div>

              {/* Exam Switcher Buttons */}
              <div className="flex gap-2 overflow-x-auto pb-1">
                {IELTS_LISTENING_EXAMS.map((exam, exIdx) => (
                  <button
                    key={exam.id}
                    onClick={() => setSelectedListeningExamIndex(exIdx)}
                    className={`whitespace-nowrap rounded-xl border px-3 py-1.5 text-xs font-black transition-all sm:px-4 sm:py-2 ${
                      selectedListeningExamIndex === exIdx
                        ? 'border-purple-600 bg-purple-600 text-white shadow-md'
                        : 'border-border bg-card text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {exam.title.replace('IELTS Listening Academic Practice ', '')}
                  </button>
                ))}
              </div>

              {/* Sections Grid of Selected Exam */}
              <div className="grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-2">
                {IELTS_LISTENING_EXAMS[selectedListeningExamIndex].sections.map((sec, sIdx) => (
                  <div
                    key={sec.sectionNumber}
                    className="group flex flex-col justify-between space-y-3 rounded-2xl border border-border bg-card p-4 shadow-sm transition-all hover:border-purple-500/50 hover:shadow-md sm:p-5"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="rounded-full border border-purple-500/20 bg-purple-500/10 px-2.5 py-0.5 text-[10px] font-black uppercase text-purple-600 dark:text-purple-400">
                          Section {sec.sectionNumber}
                        </span>
                        <span className="flex items-center gap-1 font-mono text-[11px] text-muted-foreground">
                          <Volume2 size={12} /> Audio / TTS
                        </span>
                      </div>
                      <h4 className="text-sm font-black text-foreground transition-colors group-hover:text-purple-600 dark:group-hover:text-purple-400">
                        {sec.title}
                      </h4>
                      <p className="line-clamp-2 text-xs leading-relaxed text-muted-foreground">
                        {sec.instruction}
                      </p>
                    </div>

                    <div className="flex items-center justify-between border-t border-border/60 pt-3">
                      <span className="text-[11px] font-semibold text-muted-foreground">
                        🎧 {sec.questions.length} ta savol
                      </span>
                      <Button
                        onClick={() =>
                          handleSelectListeningSection(selectedListeningExamIndex, sIdx)
                        }
                        className="flex cursor-pointer items-center gap-1 rounded-xl bg-purple-600 px-3.5 py-1.5 text-xs font-black text-white shadow-sm hover:bg-purple-700"
                      >
                        Boshlash <ChevronRight size={14} />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* AI DYNAMIC GENERATOR CARD */}
          <div className="space-y-3 rounded-2xl border border-indigo-500/20 bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-transparent p-4 shadow-sm sm:space-y-4 sm:rounded-3xl sm:p-6 md:p-8">
            <div className="flex flex-col justify-between gap-2 sm:gap-3 md:flex-row md:items-center">
              <div className="space-y-1">
                <h4 className="flex items-center gap-2 text-sm font-black text-foreground sm:text-base">
                  <Sparkles size={18} className="text-indigo-500" />
                  Ixtiyoriy Mavzuda AI Generator
                </h4>
                <p className="text-xs text-muted-foreground">
                  Istalgan mavzuni kiriting — AI avtomatik matn, audio va 4 ta savol yaratadi.
                </p>
              </div>
            </div>

            {/* Preset Quick Chips */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {['Global Warming', 'Urban AI', 'Genetics', 'Space Exploration'].map((chip) => (
                <button
                  key={chip}
                  onClick={() => generatePassageWithAI(chip)}
                  disabled={isGenerating}
                  className="cursor-pointer rounded-lg border border-border bg-background/80 px-2.5 py-1 text-[11px] font-bold text-muted-foreground transition-all hover:border-indigo-500/40 hover:bg-background hover:text-foreground sm:px-3"
                >
                  ⚡ {chip}
                </button>
              ))}
            </div>

            <div className="flex gap-2 pt-1">
              <input
                type="text"
                value={aiTopic}
                onChange={(e) => setAiTopic(e.target.value)}
                placeholder="Mavzuni kiriting (AI, Ecology, Space)..."
                disabled={isGenerating}
                className="flex-1 rounded-xl border border-border bg-background px-3 py-2 text-xs text-foreground focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:px-4 sm:py-2.5"
              />
              <Button
                onClick={() => generatePassageWithAI()}
                disabled={isGenerating}
                className="flex shrink-0 cursor-pointer items-center gap-1.5 rounded-xl bg-indigo-600 px-3.5 py-2 text-xs font-extrabold text-white shadow hover:bg-indigo-700 sm:px-5 sm:py-2.5"
              >
                {isGenerating ? (
                  <RefreshCw className="animate-spin" size={14} />
                ) : (
                  <Sparkles size={14} />
                )}
                <span>{isGenerating ? 'Kutilmoqda...' : 'Yaratish'}</span>
              </Button>
            </div>
            {aiError && (
              <p className="flex items-center gap-1.5 text-xs text-rose-500">
                <AlertCircle size={14} /> {aiError}
              </p>
            )}
          </div>
        </div>
      )}

      {/* STEP 2: ACTIVE TEST SCREEN */}
      {step === 'test' && (
        <div className="space-y-6">
          {/* Sticky Header with Timer & Back */}
          <div className="sticky top-4 z-20 flex items-center justify-between rounded-2xl border border-border bg-card p-4 shadow-sm backdrop-blur-md">
            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  stopAudioPlayback();
                  setStep('intro');
                }}
                className="rounded-xl p-2 text-muted-foreground transition-all hover:bg-muted hover:text-foreground"
                title="Sinovni bekor qilish"
              >
                <ArrowLeft size={18} />
              </button>
              <div>
                <span className="block text-[10px] font-black uppercase tracking-wider text-indigo-500">
                  IELTS {testType.toUpperCase()} MOCK
                </span>
                <h3 className="line-clamp-1 text-xs font-bold text-foreground">
                  {currentPassage.title}
                </h3>
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
          <div className="flex rounded-2xl border border-border bg-card p-1.5 shadow-sm lg:hidden">
            <button
              onClick={() => setMobileTestTab('passage')}
              className={`flex flex-1 items-center justify-center gap-1.5 rounded-xl py-2.5 text-xs font-black transition-all ${
                mobileTestTab === 'passage'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <BookOpen size={14} />
              <span>{testType === 'reading' ? '📖 Matn' : '🎧 Audio'}</span>
            </button>
            <button
              onClick={() => setMobileTestTab('questions')}
              className={`flex flex-1 items-center justify-center gap-1.5 rounded-xl py-2.5 text-xs font-black transition-all ${
                mobileTestTab === 'questions'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <FileText size={14} />
              <span>
                📝 Savollar ({Object.keys(userAnswers).length}/{currentPassage.questions.length})
              </span>
            </button>
          </div>

          {/* Passage & Questions Grid */}
          <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-2">
            {/* LEFT: Passage or Audio Player */}
            <div
              className={`h-fit space-y-4 rounded-2xl border border-border bg-card p-4 shadow-sm sm:rounded-3xl sm:p-6 ${mobileTestTab === 'questions' ? 'hidden lg:block' : 'block'}`}
            >
              <div className="flex items-center justify-between border-b border-border pb-3">
                <h3 className="text-sm font-extrabold text-foreground sm:text-base">
                  {currentPassage.title}
                </h3>
                {currentPassage.academicLevel && (
                  <span className="rounded-md border border-border bg-muted px-2 py-0.5 text-[10px] font-black text-muted-foreground">
                    {currentPassage.academicLevel}
                  </span>
                )}
              </div>

              {testType === 'listening' ? (
                <div className="space-y-4 py-1 sm:space-y-5 sm:py-2">
                  <div className="space-y-2 rounded-2xl border border-purple-200/60 bg-purple-50 p-3.5 text-center dark:border-purple-900/40 dark:bg-purple-950/20 sm:space-y-3 sm:p-5">
                    <div className="flex justify-center">
                      <div className="animate-pulse rounded-full bg-purple-500/10 p-3 text-purple-600 dark:text-purple-400 sm:p-4">
                        <Volume2 size={24} className="sm:hidden" />
                        <Volume2 size={28} className="hidden sm:block" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-foreground">Audio Pleyer</h4>
                      <p className="mt-0.5 text-[10px] text-muted-foreground">
                        {currentPassage.audioUrl ? 'Rasmiy Audio Fayl' : 'British Speech Synthesis'}
                      </p>
                    </div>
                  </div>

                  {/* Audio Controller Panel */}
                  <div className="space-y-3 rounded-2xl border border-border bg-muted/40 p-3 sm:p-4">
                    {/* Seek slider */}
                    <div className="flex items-center gap-2 font-mono text-xs">
                      <span>{formatTime(Math.round(audioProgress))}</span>
                      <input
                        type="range"
                        min={0}
                        max={audioDuration || 300}
                        value={audioProgress}
                        onChange={handleSeek}
                        className="flex-1 accent-purple-600"
                      />
                      <span>{formatTime(Math.round(audioDuration || 300))}</span>
                    </div>

                    {/* Play controls */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => skipTime(-10)}
                          className="flex min-h-[40px] min-w-[40px] cursor-pointer items-center justify-center rounded-xl p-2 text-muted-foreground transition-all hover:bg-muted hover:text-foreground"
                          title="10 soniya orqaga"
                        >
                          <RotateCcw size={16} />
                        </button>
                        <Button
                          onClick={handlePlayPause}
                          className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-purple-600 text-white shadow-md hover:bg-purple-700 sm:h-12 sm:w-12"
                        >
                          {isPlaying ? <Pause size={18} /> : <Play size={18} className="ml-0.5" />}
                        </Button>
                        <button
                          onClick={() => skipTime(10)}
                          className="flex min-h-[40px] min-w-[40px] cursor-pointer items-center justify-center rounded-xl p-2 text-muted-foreground transition-all hover:bg-muted hover:text-foreground"
                          title="10 soniya oldinga"
                        >
                          <Play size={16} className="rotate-180" />
                        </button>
                      </div>

                      {/* Speed controls */}
                      <div className="flex gap-1 text-[10px] font-bold">
                        {[0.8, 1.0, 1.2, 1.5].map((speed) => (
                          <button
                            key={speed}
                            onClick={() => handleSpeedChange(speed)}
                            className={`cursor-pointer rounded-md border px-1.5 py-1 sm:px-2 ${
                              playbackSpeed === speed
                                ? 'border-purple-600 bg-purple-600 text-white'
                                : 'border-border bg-background text-muted-foreground'
                            }`}
                          >
                            {speed}x
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Transcript Toggle (With Warning) */}
                  <div className="space-y-2 pt-1">
                    <button
                      onClick={() => setShowTranscriptDuringTest((prev) => !prev)}
                      className="flex w-full cursor-pointer items-center justify-center gap-1.5 rounded-xl border border-border/80 bg-muted/30 px-3 py-2 text-[11px] font-bold text-muted-foreground transition-all hover:bg-muted hover:text-foreground"
                    >
                      {showTranscriptDuringTest ? <EyeOff size={14} /> : <Eye size={14} />}
                      <span>
                        {showTranscriptDuringTest ? 'Skriptni yashirish' : "Skriptni ko'rish"}
                      </span>
                    </button>

                    {showTranscriptDuringTest && currentPassage.script && (
                      <div className="max-h-60 overflow-y-auto whitespace-pre-line rounded-xl border border-border bg-muted/40 p-3 font-mono text-xs leading-relaxed text-muted-foreground sm:p-4">
                        {currentPassage.script}
                      </div>
                    )}
                  </div>

                  {/* Mobile button to proceed to questions */}
                  <button
                    onClick={() => setMobileTestTab('questions')}
                    className="mt-2 flex w-full cursor-pointer items-center justify-center gap-1.5 rounded-xl bg-purple-600 px-4 py-3 text-xs font-black text-white shadow-md transition-all hover:bg-purple-700 active:scale-95 lg:hidden"
                  >
                    <span>Savollarga o'tish ({currentPassage.questions.length})</span>
                    <ChevronRight size={14} />
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="max-h-[450px] space-y-3 overflow-y-auto whitespace-pre-line pr-2 font-serif text-xs leading-relaxed text-foreground/90 sm:max-h-[600px]">
                    {currentPassage.text}
                  </div>
                  <button
                    onClick={() => setMobileTestTab('questions')}
                    className="flex w-full cursor-pointer items-center justify-center gap-1.5 rounded-xl bg-indigo-600 px-4 py-3 text-xs font-black text-white shadow-md transition-all hover:bg-indigo-700 active:scale-95 lg:hidden"
                  >
                    <span>Savollarga o'tish ({currentPassage.questions.length})</span>
                    <ChevronRight size={14} />
                  </button>
                </div>
              )}
            </div>

            {/* RIGHT: Questions Form */}
            <div
              className={`space-y-4 ${mobileTestTab === 'passage' ? 'hidden lg:block' : 'block'}`}
            >
              <div className="flex items-center justify-between rounded-2xl border border-border/60 bg-muted/30 p-3 text-xs text-muted-foreground">
                <span>
                  Savollar: {Object.keys(userAnswers).length} / {currentPassage.questions.length} ta
                </span>
                <button
                  onClick={() => setMobileTestTab('passage')}
                  className="flex cursor-pointer items-center gap-1 text-xs font-bold text-indigo-500 hover:underline lg:hidden"
                >
                  <BookOpen size={13} />{' '}
                  {testType === 'reading' ? 'Matnga qaytish' : 'Audyoga qaytish'}
                </button>
                <span className="hidden font-bold text-indigo-500 lg:inline">IELTS Formati</span>
              </div>

              {currentPassage.questions.map((q) => (
                <div
                  key={q.id}
                  className="space-y-3 rounded-2xl border border-border bg-card p-4 shadow-sm sm:p-5"
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
                            onClick={() => handleOptionSelect(q.id, idx.toString())}
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
                      onChange={(e) => handleOptionSelect(q.id, e.target.value)}
                      placeholder="Javobingizni yozing..."
                      className="min-h-[44px] w-full rounded-xl border border-border bg-muted/30 px-3.5 py-2.5 text-xs font-medium text-foreground focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:px-4"
                    />
                  )}
                </div>
              ))}

              <Button
                onClick={handleSubmitTest}
                className="w-full cursor-pointer rounded-2xl bg-indigo-600 py-3.5 text-sm font-black text-white shadow-xl transition-all hover:bg-indigo-700 hover:shadow-indigo-500/25 sm:py-4"
              >
                Testni Yakunlash 🎯
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* STEP 3: DETAILED REPORT & EXPLANATION */}
      {step === 'report' &&
        (() => {
          const band = calculateIeltsBandScore(score, currentPassage.questions.length);
          const descriptor = getBandDescriptor(band);
          return (
            <div className="mx-auto max-w-3xl space-y-5 rounded-2xl border border-border bg-card p-5 text-center shadow-xl sm:space-y-6 sm:rounded-3xl sm:p-6 md:p-8">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-amber-500/20 to-indigo-500/20 text-indigo-600 shadow-sm sm:h-16 sm:w-16">
                <Award size={28} className="sm:hidden" />
                <Award size={32} className="hidden sm:block" />
              </div>

              <div className="space-y-2">
                <span className="block text-xs font-black uppercase tracking-wider text-indigo-500">
                  IELTS {testType.toUpperCase()} Natijasi
                </span>
                <h2 className="text-3xl font-black text-foreground sm:text-4xl md:text-5xl">
                  Band {band.toFixed(1)}
                </h2>
                <div className="mt-1 inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-bold">
                  <span
                    className={`rounded-full border px-2.5 py-0.5 text-xs font-black ${descriptor.badge}`}
                  >
                    {descriptor.title}
                  </span>
                </div>
                <p className="mx-auto mt-2 max-w-md text-xs text-muted-foreground">
                  Siz {currentPassage.questions.length} ta savoldan{' '}
                  <span className="font-extrabold text-foreground">{score} tasiga</span> to'g'ri
                  javob berdingiz.
                </p>
                <div className="mx-auto max-w-lg rounded-2xl border border-border bg-muted/40 p-3 text-xs text-muted-foreground sm:p-3.5">
                  💡 <b>Tavsiya:</b> {descriptor.feedback}
                </div>
              </div>

              {/* Explanations List */}
              <div className="space-y-3 border-t border-border pt-5 text-left sm:pt-6">
                <h4 className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-foreground">
                  <BarChart2 size={16} className="text-indigo-500" /> Savollar Tahlili:
                </h4>
                {currentPassage.questions.map((q) => {
                  const isCorrect =
                    (userAnswers[q.id] || '').trim().toLowerCase() ===
                    q.correctAnswer.trim().toLowerCase();
                  return (
                    <div
                      key={q.id}
                      className={`space-y-2 rounded-2xl border p-3.5 text-xs sm:p-4 ${isCorrect ? 'border-emerald-500/20 bg-emerald-500/5' : 'border-rose-500/20 bg-rose-500/5'}`}
                    >
                      <div className="flex items-center justify-between font-bold text-foreground">
                        <span>
                          Q{q.id}. {q.text}
                        </span>
                        <span
                          className={`rounded px-2 py-0.5 text-[10px] font-black uppercase ${isCorrect ? 'bg-emerald-500/20 text-emerald-600' : 'bg-rose-500/20 text-rose-600'}`}
                        >
                          {isCorrect ? "To'g'ri" : 'Xato'}
                        </span>
                      </div>
                      <p className="text-[11px] text-muted-foreground">
                        Sizning javobingiz:{' '}
                        <span className="font-bold text-foreground">
                          {userAnswers[q.id] || '(Kiritilmadi)'}
                        </span>
                      </p>
                      <p className="text-[11px] text-muted-foreground">
                        To'g'ri javob:{' '}
                        <span className="font-bold text-indigo-500">
                          {q.type === 'choice' && q.options
                            ? q.options[parseInt(q.correctAnswer)]
                            : q.correctAnswer}
                        </span>
                      </p>
                      <div className="rounded-xl border border-border/60 bg-background/80 p-2.5 text-[11px] text-muted-foreground">
                        💡 <b>Tahlil:</b> {q.explanation}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Full Audio Script for Listening */}
              {testType === 'listening' && currentPassage.script && (
                <div className="space-y-2 border-t border-border pt-4 text-left">
                  <h4 className="flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-foreground">
                    <FileText size={15} className="text-purple-500" /> To'liq Audio Skripti:
                  </h4>
                  <div className="max-h-60 overflow-y-auto whitespace-pre-line rounded-2xl border border-border bg-muted/40 p-3 font-mono text-xs leading-relaxed text-muted-foreground sm:p-4">
                    {currentPassage.script}
                  </div>
                </div>
              )}

              <div className="space-y-3 pt-2">
                <button
                  onClick={() => setIsTrfModalOpen(true)}
                  className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-red-600 py-3 text-xs font-black text-white shadow-lg shadow-red-600/20 transition-all hover:bg-red-700 sm:py-3.5 sm:text-sm"
                >
                  <FileText size={16} />
                  <span>TRF Sertifikati (PDF)</span>
                </button>

                <div className="flex flex-col gap-2.5 sm:flex-row sm:gap-3">
                  <Button
                    onClick={() => {
                      setStep('intro');
                      setUserAnswers({});
                      setTimeLeft(1200);
                    }}
                    className="flex flex-1 cursor-pointer items-center justify-center gap-1.5 rounded-xl bg-indigo-600 py-3 text-xs font-black text-white shadow-md hover:bg-indigo-700 sm:py-3.5"
                  >
                    <RefreshCw size={14} /> Boshqa test
                  </Button>
                  <Button
                    onClick={() => navigate('/ielts')}
                    variant="outline"
                    className="flex-1 cursor-pointer rounded-xl py-3 text-xs font-bold sm:py-3.5"
                  >
                    IELTS Hub
                  </Button>
                </div>
              </div>

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
                    module: testType === 'reading' ? 'Reading' : 'Listening',
                    scores: {
                      reading: testType === 'reading' ? band : undefined,
                      listening: testType === 'listening' ? band : undefined,
                      overall: band,
                      cefrLevel: TrfCertificateService.getCefrFromBand(band),
                    },
                    subCriteria: [
                      {
                        label: 'Raw Correct Answers',
                        score: `${score} / ${currentPassage.questions.length}`,
                      },
                      {
                        label: 'Accuracy Rate',
                        score: `${Math.round((score / currentPassage.questions.length) * 100)}%`,
                      },
                      { label: 'Academic Material', score: currentPassage.title },
                      {
                        label: 'Band Level',
                        score: `Band ${band.toFixed(1)} (${descriptor.title})`,
                      },
                    ],
                    examinerNotes: `Candidate achieved Band ${band.toFixed(1)} in IELTS Academic ${testType === 'reading' ? 'Reading' : 'Listening'}. ${descriptor.feedback}`,
                    verificationCode: TrfCertificateService.generateVerificationCode(testType),
                  }}
                />
              )}
            </div>
          );
        })()}
    </div>
  );
};

export default IeltsReadingListeningMockPage;
