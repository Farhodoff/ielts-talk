import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import {
  Volume2,
  Mic,
  MicOff,
  Headphones,
  CheckCircle2,
  Clock,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Award,
  ShieldCheck,
  Play,
  Pause,
  ChevronRight,
  Type,
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { useStudyData } from '../context/StudyPlannerContext';
import { FullMockExam, getFullMockById } from '../data/ielts/fullMockData';
import {
  IeltsFullMockService,
  MockStage,
  FullMockAnswers,
  FullMockExamResult,
  FullMockSession,
} from '../services/IeltsFullMockService';
import { IeltsTrfCertificateModal } from '../components/ielts/IeltsTrfCertificateModal';
import { toast } from '../hooks/use-toast';

export const IeltsFullMockPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { user, awardXP } = useStudyData();

  const examIdParam = searchParams.get('examId') || 'full-mock-cambridge-1';
  const [exam] = useState<FullMockExam>(() => getFullMockById(examIdParam));

  // Stage state
  const [stage, setStage] = useState<MockStage>('device_check');

  // Candidate info
  const [candidateName, setCandidateName] = useState(
    user?.user_metadata?.full_name ||
      user?.user_metadata?.name ||
      user?.email?.split('@')[0] ||
      'IELTS Candidate',
  );

  // Device check states
  const [isAudioTested, setIsAudioTested] = useState(false);
  const [isMicTested, setIsMicTested] = useState(false);
  const [micVolume, setMicVolume] = useState(0);

  // Timers (Seconds)
  // Listening: 30m = 1800s | Reading: 60m = 3600s | Writing: 60m = 3600s | Speaking: 15m = 900s
  const [timeLeft, setTimeLeft] = useState(1800);
  const [isTimerActive, setIsTimerActive] = useState(false);

  // User answers
  const [answers, setAnswers] = useState<FullMockAnswers>({
    listening: {},
    reading: {},
    writing: { task1: '', task2: '' },
    speaking: { part1Responses: [], part2Speech: '', part3Responses: [] },
  });

  // Module sub-tab states
  const [listeningSectionIdx, setListeningSectionIdx] = useState(0);
  const [readingPassageIdx, setReadingPassageIdx] = useState(0);
  const [readingFontSize, setReadingFontSize] = useState<'normal' | 'large'>('normal');
  const [writingTaskTab, setWritingTaskTab] = useState<'task1' | 'task2'>('task1');

  // Speaking module states
  const [speakingStep, setSpeakingStep] = useState<
    'part1' | 'part2_prep' | 'part2_speech' | 'part3'
  >('part1');
  const [speakingP1QuestionIdx, setSpeakingP1QuestionIdx] = useState(0);
  const [speakingP3QuestionIdx, setSpeakingP3QuestionIdx] = useState(0);
  const [cueCardPrepTimer, setCueCardPrepTimer] = useState(60);
  const [isRecording, setIsRecording] = useState(false);
  const [speakingTranscript, setSpeakingTranscript] = useState('');
  const recognitionRef = useRef<any>(null);

  // Audio player state for Listening
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  // Evaluation & Results
  const [evalProgressText, setEvalProgressText] = useState('Natijalar tahlil qilinmoqda...');
  const [examResult, setExamResult] = useState<FullMockExamResult | null>(null);
  const [showCertificateModal, setShowCertificateModal] = useState(false);

  // Load previous session if available
  useEffect(() => {
    const saved = IeltsFullMockService.loadActiveSession();
    if (saved && saved.examId === exam.id && saved.stage !== 'results') {
      const confirmResume = window.confirm(
        'Sizda tugallanmagan IELTS Full Mock sessiyasi mavjud. Uni davom ettirmoqchimisiz?',
      );
      if (confirmResume) {
        setStage(saved.stage);
        setAnswers(saved.answers);
        if (saved.candidateName) setCandidateName(saved.candidateName);
      } else {
        IeltsFullMockService.clearActiveSession();
      }
    }
  }, [exam.id]);

  // Save session auto-recovery on answer changes
  useEffect(() => {
    if (stage !== 'device_check' && stage !== 'results' && stage !== 'evaluating') {
      const session: FullMockSession = {
        examId: exam.id,
        stage,
        startTime: Date.now(),
        elapsedSeconds: 0,
        answers,
        candidateName,
      };
      IeltsFullMockService.saveSession(session);
    }
  }, [answers, stage, exam.id, candidateName]);

  // Main countdown timer handler
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isTimerActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            handleTimeExpiry();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isTimerActive, timeLeft, stage]);

  const handleTimeExpiry = () => {
    toast({
      variant: 'destructive',
      title: 'Vaqt tugadi!',
      description: 'Navbatdagi modulga avtomatik ravishda o‘tkazilmoqda.',
    });
    if (stage === 'listening') advanceToStage('reading');
    else if (stage === 'reading') advanceToStage('writing');
    else if (stage === 'writing') advanceToStage('speaking');
    else if (stage === 'speaking') handleFinalSubmission();
  };

  // Stage Transitions
  const advanceToStage = (nextStage: MockStage) => {
    // Stop any ongoing speech recognition or audio
    stopAudio();
    stopMicRecording();

    setStage(nextStage);

    if (nextStage === 'listening') {
      setTimeLeft(1800); // 30 mins
      setIsTimerActive(true);
    } else if (nextStage === 'reading') {
      setTimeLeft(3600); // 60 mins
      setIsTimerActive(true);
    } else if (nextStage === 'writing') {
      setTimeLeft(3600); // 60 mins
      setIsTimerActive(true);
    } else if (nextStage === 'speaking') {
      setTimeLeft(840); // 14 mins
      setIsTimerActive(true);
      setSpeakingStep('part1');
      speakExaminerQuestion(exam.speaking.part1[0]);
    } else if (nextStage === 'evaluating') {
      setIsTimerActive(false);
      handleFinalSubmission();
    }
  };

  // Device check helpers
  const handleTestAudio = () => {
    const speech = new SpeechSynthesisUtterance(
      'This is an audio test for your IELTS Listening and Speaking exam. If you can hear this clearly, your sound is working properly.',
    );
    speech.lang = 'en-GB';
    speech.rate = 0.95;
    window.speechSynthesis.speak(speech);
    setIsAudioTested(true);
    toast({ title: 'Ovoz tekshiruvi ijro etilmoqda' });
  };

  const handleTestMic = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      setIsMicTested(true);
      setMicVolume(85);
      toast({ title: 'Mikrofon muvaffaqiyatli ulandi' });
      setTimeout(() => {
        stream.getTracks().forEach((t) => t.stop());
        setMicVolume(0);
      }, 3000);
    } catch {
      toast({
        variant: 'destructive',
        title: 'Mikrofon xatoligi',
        description: 'Iltimos brauzer sozlamalarida mikrofonga ruxsat bering.',
      });
    }
  };

  // Text-To-Speech helper for Examiner
  const speakExaminerQuestion = (text: string) => {
    if (!text || typeof window === 'undefined' || !window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-GB';
    utterance.rate = 0.92;
    window.speechSynthesis.speak(utterance);
  };

  const stopAudio = () => {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    setIsPlayingAudio(false);
  };

  // Speech Recognition for Speaking
  const startMicRecording = () => {
    const SpeechRec = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRec) {
      toast({
        variant: 'destructive',
        title: 'Nutq aniqlash qo‘llab-quvvatlanmaydi',
        description: 'Iltimos Chrome yoki Edge brauzeridan foydalaning.',
      });
      return;
    }

    try {
      const rec = new SpeechRec();
      rec.lang = 'en-US';
      rec.continuous = true;
      rec.interimResults = true;

      rec.onresult = (e: any) => {
        let transcript = '';
        for (let i = 0; i < e.results.length; i++) {
          transcript += e.results[i][0].transcript + ' ';
        }
        setSpeakingTranscript(transcript.trim());
      };

      rec.onerror = (e: any) => {
        console.warn('Speech rec error:', e);
      };

      rec.onend = () => {
        setIsRecording(false);
      };

      recognitionRef.current = rec;
      rec.start();
      setIsRecording(true);
    } catch (err) {
      console.warn('Speech rec start error', err);
    }
  };

  const stopMicRecording = () => {
    if (recognitionRef.current) {
      try {
        recognitionRef.current.stop();
      } catch {
        // ignore
      }
      recognitionRef.current = null;
    }
    setIsRecording(false);
  };

  // Speaking Stage Flow
  const handleNextSpeakingP1Question = () => {
    stopMicRecording();
    // Save transcript
    const currentQ = exam.speaking.part1[speakingP1QuestionIdx];
    const updated = [...answers.speaking.part1Responses];
    updated[speakingP1QuestionIdx] =
      `Q: ${currentQ} | A: ${speakingTranscript || '(No speech recorded)'}`;
    setAnswers({
      ...answers,
      speaking: { ...answers.speaking, part1Responses: updated },
    });
    setSpeakingTranscript('');

    if (speakingP1QuestionIdx < exam.speaking.part1.length - 1) {
      const nextIdx = speakingP1QuestionIdx + 1;
      setSpeakingP1QuestionIdx(nextIdx);
      speakExaminerQuestion(exam.speaking.part1[nextIdx]);
    } else {
      // Advance to Part 2 Prep
      setSpeakingStep('part2_prep');
      setCueCardPrepTimer(60);
      speakExaminerQuestion(
        `Now, in Part 2, I am going to give you a topic, and I would like you to talk about it for one to two minutes. Before you talk, you have one minute to think about what you are going to say. Here is your topic: ${exam.speaking.part2.title}`,
      );
    }
  };

  // Cue card prep timer countdown
  useEffect(() => {
    let t: NodeJS.Timeout | null = null;
    if (speakingStep === 'part2_prep' && cueCardPrepTimer > 0) {
      t = setInterval(() => {
        setCueCardPrepTimer((prev) => prev - 1);
      }, 1000);
    } else if (speakingStep === 'part2_prep' && cueCardPrepTimer === 0) {
      setSpeakingStep('part2_speech');
      speakExaminerQuestion(
        'All right, your preparation time is up. Please begin speaking now for one to two minutes.',
      );
      startMicRecording();
    }
    return () => {
      if (t) clearInterval(t);
    };
  }, [speakingStep, cueCardPrepTimer]);

  const handleFinishPart2Speech = () => {
    stopMicRecording();
    setAnswers({
      ...answers,
      speaking: { ...answers.speaking, part2Speech: speakingTranscript },
    });
    setSpeakingTranscript('');
    setSpeakingStep('part3');
    setSpeakingP3QuestionIdx(0);
    speakExaminerQuestion(
      `Thank you. Now in Part 3, let us discuss some more general questions related to this. ${exam.speaking.part3[0]}`,
    );
  };

  const handleNextSpeakingP3Question = () => {
    stopMicRecording();
    const currentQ = exam.speaking.part3[speakingP3QuestionIdx];
    const updated = [...answers.speaking.part3Responses];
    updated[speakingP3QuestionIdx] =
      `Q: ${currentQ} | A: ${speakingTranscript || '(No speech recorded)'}`;
    setAnswers({
      ...answers,
      speaking: { ...answers.speaking, part3Responses: updated },
    });
    setSpeakingTranscript('');

    if (speakingP3QuestionIdx < exam.speaking.part3.length - 1) {
      const nextIdx = speakingP3QuestionIdx + 1;
      setSpeakingP3QuestionIdx(nextIdx);
      speakExaminerQuestion(exam.speaking.part3[nextIdx]);
    } else {
      // Completed all speaking
      advanceToStage('evaluating');
    }
  };

  // Final Submission and Evaluation
  const handleFinalSubmission = async () => {
    setStage('evaluating');
    setEvalProgressText('1/4: Listening javoblari tekshirilmoqda...');

    // 1. Calculate Listening score
    let listeningCorrect = 0;
    let listeningTotal = 0;
    exam.listening.sections.forEach((sec) => {
      sec.questions.forEach((q) => {
        listeningTotal++;
        const userAns = (answers.listening[q.id] || '').trim().toLowerCase();
        const correct = q.correctAnswer.trim().toLowerCase();
        if (userAns && (userAns === correct || correct.includes(userAns))) {
          listeningCorrect++;
        }
      });
    });
    const listeningBand = IeltsFullMockService.rawCountToBand(
      listeningCorrect,
      listeningTotal || 40,
    );

    // 2. Calculate Reading score
    setEvalProgressText('2/4: Reading javoblari tekshirilmoqda...');
    let readingCorrect = 0;
    let readingTotal = 0;
    exam.reading.passages.forEach((p) => {
      p.questions.forEach((q) => {
        readingTotal++;
        const userAns = (answers.reading[q.id] || '').trim().toLowerCase();
        const correct = q.correctAnswer.trim().toLowerCase();
        if (userAns && userAns === correct) {
          readingCorrect++;
        }
      });
    });
    const readingBand = IeltsFullMockService.rawCountToBand(readingCorrect, readingTotal || 40);

    // 3. AI Writing Evaluation
    setEvalProgressText('3/4: Writing Task 1 va Task 2 AI orqali baholanmoqda...');
    const writingFeedback = await IeltsFullMockService.evaluateWriting(
      exam.writing.task1.prompt,
      answers.writing.task1,
      exam.writing.task2.prompt,
      answers.writing.task2,
    );
    const writingBand = writingFeedback.overallWritingBand;

    // 4. AI Speaking Evaluation
    setEvalProgressText('4/4: Speaking nutqi va mezonlari baholanmoqda...');
    const speakingFeedback = await IeltsFullMockService.evaluateSpeaking(
      exam.speaking.category,
      answers.speaking,
    );
    const speakingBand = speakingFeedback.overallSpeakingBand;

    // 5. Generate Official Certificate
    setEvalProgressText('Rasmiy Test Report Form (TRF) va QR kod shakllantirilmoqda...');
    const cert = IeltsFullMockService.buildTrfCertificate(
      candidateName,
      listeningBand,
      readingBand,
      writingBand,
      speakingBand,
      writingFeedback,
      speakingFeedback,
    );

    const fullResult: FullMockExamResult = {
      id: `result-${Date.now()}`,
      examId: exam.id,
      examTitle: exam.title,
      candidateName,
      candidateNumber: cert.candidateNumber || 'UZ-102948',
      testDate: cert.testDate,
      verificationCode: cert.verificationCode,
      scores: {
        listening: listeningBand,
        reading: readingBand,
        writing: writingBand,
        speaking: speakingBand,
        overall: cert.scores.overall,
        cefrLevel: cert.scores.cefrLevel,
      },
      rawCounts: {
        listeningCorrect,
        listeningTotal,
        readingCorrect,
        readingTotal,
      },
      writingFeedback,
      speakingFeedback,
      certificate: cert,
    };

    IeltsFullMockService.saveExamResult(fullResult);
    IeltsFullMockService.clearActiveSession();
    setExamResult(fullResult);

    if (awardXP) {
      awardXP(250); // Big reward for completing a 2h 45m full mock!
    }

    setStage('results');
  };

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
                    : 'bg-slate-800/60 text-slate-400'
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
        {/* ========================================================= */}
        {/* 1. DEVICE & CANDIDATE CHECK STAGE                        */}
        {/* ========================================================= */}
        {stage === 'device_check' && (
          <div className="mx-auto my-auto w-full max-w-2xl space-y-6 duration-200 animate-in fade-in">
            <div className="space-y-6 rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-2xl backdrop-blur-xl sm:p-8">
              <div className="space-y-2 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/25">
                  <Headphones size={28} />
                </div>
                <h2 className="text-xl font-black text-white sm:text-2xl">
                  IELTS Full Mock Imtihoniga Xush Kelibsiz
                </h2>
                <p className="mx-auto max-w-md text-xs text-slate-400">
                  Imtihon rasmiy standartda 4 ta ketma-ket moduldan iborat bo‘lib, taxminan 2 soat
                  45 daqiqa davom etadi. Boshlashdan oldin audio va mikrofoningizni sozlab oling.
                </p>
              </div>

              {/* Candidate Info Input */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-300">
                  Nomzod Ismi va Familiyasi (Sertifikat uchun) *
                </label>
                <input
                  type="text"
                  value={candidateName}
                  onChange={(e) => setCandidateName(e.target.value)}
                  placeholder="Ismingiz va familiyangiz"
                  className="focus:outline-hidden w-full rounded-xl border border-slate-700 bg-slate-950 p-3 text-xs font-bold text-white placeholder-slate-500 focus:border-blue-500"
                  required
                />
              </div>

              {/* Hardware Test Panels */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {/* Audio Check */}
                <div className="space-y-3 rounded-2xl border border-slate-800 bg-slate-950 p-4">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-xs font-bold text-slate-200">
                      <Volume2 size={16} className="text-blue-400" /> Quloqchin Ovozini Tekshirish
                    </span>
                    {isAudioTested && <CheckCircle2 size={16} className="text-emerald-400" />}
                  </div>
                  <p className="text-[11px] text-slate-400">
                    Listening va Speaking ovozini tiniq eshitayotganingizga ishonch hosil qiling.
                  </p>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={handleTestAudio}
                    className="w-full text-xs"
                  >
                    🔊 Test Ovozini Eshitish
                  </Button>
                </div>

                {/* Mic Check */}
                <div className="space-y-3 rounded-2xl border border-slate-800 bg-slate-950 p-4">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-xs font-bold text-slate-200">
                      <Mic size={16} className="text-purple-400" /> Mikrofonni Tekshirish
                    </span>
                    {isMicTested && <CheckCircle2 size={16} className="text-emerald-400" />}
                  </div>
                  <p className="text-[11px] text-slate-400">
                    Speaking modulida ovozingiz ravshan yozilishi uchun ruxsat bering.
                  </p>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={handleTestMic}
                    className="w-full text-xs"
                  >
                    🎙️ Mikrofonni Sinash
                  </Button>
                  {micVolume > 0 && (
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-800">
                      <div
                        className="h-full bg-emerald-500 transition-all duration-100"
                        style={{ width: `${micVolume}%` }}
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* Start Button */}
              <button
                type="button"
                onClick={() => advanceToStage('listening')}
                className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 py-3.5 text-sm font-black text-white shadow-xl shadow-blue-500/25 transition-all hover:scale-[1.01] active:scale-[0.99]"
              >
                <span>Imtihonni Boshlash (1-Modul: Listening)</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* 2. LISTENING MODULE (~30 mins)                            */}
        {/* ========================================================= */}
        {stage === 'listening' && (
          <div className="flex flex-1 flex-col space-y-6 duration-150 animate-in fade-in">
            {/* Listening Section Navigator */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                {exam.listening.sections.map((sec, idx) => (
                  <button
                    key={idx}
                    onClick={() => setListeningSectionIdx(idx)}
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
                  onClick={() => {
                    const speech = new SpeechSynthesisUtterance(
                      exam.listening.sections[listeningSectionIdx].script,
                    );
                    speech.lang = 'en-GB';
                    speech.rate = 0.95;
                    speech.onend = () => setIsPlayingAudio(false);
                    if (isPlayingAudio) {
                      window.speechSynthesis.cancel();
                      setIsPlayingAudio(false);
                    } else {
                      window.speechSynthesis.speak(speech);
                      setIsPlayingAudio(true);
                    }
                  }}
                  className={`flex items-center gap-1.5 rounded-xl px-3.5 py-1.5 text-xs font-bold text-white shadow-sm transition-all ${
                    isPlayingAudio
                      ? 'bg-amber-600 hover:bg-amber-500'
                      : 'bg-blue-600 hover:bg-blue-500'
                  }`}
                >
                  {isPlayingAudio ? <Pause size={14} /> : <Play size={14} />}
                  <span>{isPlayingAudio ? 'Audioni To‘xtatish' : 'Audioni Tinglash'}</span>
                </button>
              </div>
            </div>

            {/* Instruction banner */}
            <div className="rounded-2xl border border-blue-500/20 bg-blue-950/30 p-3.5 text-xs text-blue-200">
              <strong>Ko‘rsatma:</strong> {exam.listening.sections[listeningSectionIdx].instruction}
            </div>

            {/* Questions Form */}
            <div className="flex-1 space-y-4 overflow-y-auto rounded-3xl border border-slate-800 bg-slate-900/50 p-5 sm:p-6">
              <h3 className="text-sm font-black text-white">
                {exam.listening.sections[listeningSectionIdx].title}
              </h3>

              <div className="space-y-4">
                {exam.listening.sections[listeningSectionIdx].questions.map((q) => (
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
                              onClick={() =>
                                setAnswers({
                                  ...answers,
                                  listening: {
                                    ...answers.listening,
                                    [q.id]: String(optIdx),
                                  },
                                })
                              }
                              className={`cursor-pointer rounded-xl border p-2.5 text-left transition-all ${
                                answers.listening[q.id] === String(optIdx)
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
                          value={answers.listening[q.id] || ''}
                          onChange={(e) =>
                            setAnswers({
                              ...answers,
                              listening: {
                                ...answers.listening,
                                [q.id]: e.target.value,
                              },
                            })
                          }
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
                To‘ldirilgan savollar:{' '}
                <strong className="text-white">{Object.keys(answers.listening).length} / 40</strong>
              </span>
              <button
                type="button"
                onClick={() => {
                  if (
                    window.confirm(
                      'Listening modulini yakunlab, Reading moduliga o‘tishni tasdiqlaysizmi?',
                    )
                  ) {
                    advanceToStage('reading');
                  }
                }}
                className="flex cursor-pointer items-center gap-1.5 rounded-xl bg-blue-600 px-4 py-2.5 text-xs font-bold text-white shadow-md transition-all hover:bg-blue-500"
              >
                <span>2-Modul: Reading ga o‘tish</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* 3. READING MODULE (60 mins)                               */}
        {/* ========================================================= */}
        {stage === 'reading' && (
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
                  onClick={() =>
                    setReadingFontSize((prev) => (prev === 'normal' ? 'large' : 'normal'))
                  }
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
                  {exam.reading.passages[readingPassageIdx].title}
                </h3>
                <span className="mb-4 block text-[11px] font-bold text-emerald-400">
                  {exam.reading.passages[readingPassageIdx].academicLevel}
                </span>

                <div
                  className={`space-y-3.5 font-serif leading-relaxed text-slate-200 ${
                    readingFontSize === 'large' ? 'text-sm sm:text-base' : 'text-xs sm:text-sm'
                  }`}
                >
                  {exam.reading.passages[readingPassageIdx].text.split('\n\n').map((para, pIdx) => (
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
                  {exam.reading.passages[readingPassageIdx].questions.map((q) => (
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
                              onClick={() =>
                                setAnswers({
                                  ...answers,
                                  reading: {
                                    ...answers.reading,
                                    [q.id]: String(optIdx),
                                  },
                                })
                              }
                              className={`cursor-pointer rounded-xl border p-2 text-left text-xs transition-all ${
                                answers.reading[q.id] === String(optIdx)
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
                          value={answers.reading[q.id] || ''}
                          onChange={(e) =>
                            setAnswers({
                              ...answers,
                              reading: {
                                ...answers.reading,
                                [q.id]: e.target.value,
                              },
                            })
                          }
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
                Belgilangan javoblar:{' '}
                <strong className="text-white">{Object.keys(answers.reading).length} / 40</strong>
              </span>
              <button
                type="button"
                onClick={() => {
                  if (
                    window.confirm(
                      'Reading modulini yakunlab, Writing moduliga o‘tishni tasdiqlaysizmi?',
                    )
                  ) {
                    advanceToStage('writing');
                  }
                }}
                className="flex cursor-pointer items-center gap-1.5 rounded-xl bg-emerald-600 px-4 py-2.5 text-xs font-bold text-white shadow-md transition-all hover:bg-emerald-500"
              >
                <span>3-Modul: Writing ga o‘tish</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* 4. WRITING MODULE (60 mins: Task 1 & Task 2)              */}
        {/* ========================================================= */}
        {stage === 'writing' && (
          <div className="flex flex-1 flex-col space-y-4 duration-150 animate-in fade-in">
            {/* Task Switcher */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setWritingTaskTab('task1')}
                  className={`cursor-pointer rounded-xl px-4 py-2 text-xs font-bold transition-all ${
                    writingTaskTab === 'task1'
                      ? 'bg-amber-600 text-white shadow-sm'
                      : 'bg-slate-800/80 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Writing Task 1 (Min 150 so‘z)
                </button>
                <button
                  onClick={() => setWritingTaskTab('task2')}
                  className={`cursor-pointer rounded-xl px-4 py-2 text-xs font-bold transition-all ${
                    writingTaskTab === 'task2'
                      ? 'bg-amber-600 text-white shadow-sm'
                      : 'bg-slate-800/80 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Writing Task 2 (Min 250 so‘z)
                </button>
              </div>

              {/* Word Count Indicator */}
              <div className="flex items-center gap-2">
                {writingTaskTab === 'task1' ? (
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-bold ${
                      answers.writing.task1.trim().split(/\s+/).filter(Boolean).length >= 150
                        ? 'border border-emerald-500/30 bg-emerald-500/15 text-emerald-400'
                        : 'border border-amber-500/30 bg-amber-500/15 text-amber-400'
                    }`}
                  >
                    Task 1: {answers.writing.task1.trim().split(/\s+/).filter(Boolean).length} / 150
                    so‘z
                  </span>
                ) : (
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-bold ${
                      answers.writing.task2.trim().split(/\s+/).filter(Boolean).length >= 250
                        ? 'border border-emerald-500/30 bg-emerald-500/15 text-emerald-400'
                        : 'border border-amber-500/30 bg-amber-500/15 text-amber-400'
                    }`}
                  >
                    Task 2: {answers.writing.task2.trim().split(/\s+/).filter(Boolean).length} / 250
                    so‘z
                  </span>
                )}
              </div>
            </div>

            {/* Prompt & Editor Split */}
            <div className="grid flex-1 grid-cols-1 gap-5 overflow-hidden lg:grid-cols-12">
              {/* Left Pane: Prompt Card */}
              <div className="max-h-[62vh] space-y-4 overflow-y-auto rounded-3xl border border-slate-800 bg-slate-900/60 p-5 sm:p-6 lg:col-span-5">
                {writingTaskTab === 'task1' ? (
                  <>
                    <span className="rounded-md bg-amber-500/20 px-2 py-0.5 text-[10px] font-bold uppercase text-amber-300">
                      {exam.writing.task1.category}
                    </span>
                    <h3 className="text-sm font-black text-white sm:text-base">
                      {exam.writing.task1.title}
                    </h3>
                    <p className="text-xs leading-relaxed text-slate-300">
                      {exam.writing.task1.prompt}
                    </p>
                    <div className="space-y-1 rounded-xl border border-slate-800 bg-slate-950 p-3 text-[11px] text-slate-400">
                      <strong className="block text-slate-300">Akademik Maslahat:</strong>
                      Kamida 150 ta so‘z yozing. Asosiy trendlarni umumlashtiring (overview) va o‘z
                      shaxsiy fikringizni bildirmang.
                    </div>
                  </>
                ) : (
                  <>
                    <span className="rounded-md bg-amber-500/20 px-2 py-0.5 text-[10px] font-bold uppercase text-amber-300">
                      {exam.writing.task2.category}
                    </span>
                    <h3 className="text-sm font-black text-white sm:text-base">
                      {exam.writing.task2.title}
                    </h3>
                    <p className="text-xs leading-relaxed text-slate-300">
                      {exam.writing.task2.prompt}
                    </p>
                    <div className="space-y-1 rounded-xl border border-slate-800 bg-slate-950 p-3 text-[11px] text-slate-400">
                      <strong className="block text-slate-300">Akademik Maslahat:</strong>
                      Kamida 250 ta so‘z yozing. To‘liq paragraflarga bo‘ling (Introduction, Body 1,
                      Body 2, Conclusion) va har ikki tomonni argumentlar bilan yoriting.
                    </div>
                  </>
                )}
              </div>

              {/* Right Pane: Textarea Editor */}
              <div className="flex flex-col rounded-3xl border border-slate-800 bg-slate-900/70 p-4 lg:col-span-7">
                <textarea
                  rows={16}
                  value={writingTaskTab === 'task1' ? answers.writing.task1 : answers.writing.task2}
                  onChange={(e) =>
                    setAnswers({
                      ...answers,
                      writing: {
                        ...answers.writing,
                        [writingTaskTab]: e.target.value,
                      },
                    })
                  }
                  placeholder={
                    writingTaskTab === 'task1'
                      ? 'Task 1 inshoyingizni shu yerga yozing...'
                      : 'Task 2 akademik inshoyingizni shu yerga yozing...'
                  }
                  className="focus:outline-hidden w-full flex-1 resize-none rounded-2xl border border-slate-700 bg-slate-950 p-4 font-mono text-xs leading-relaxed text-white placeholder-slate-500 focus:border-amber-500 sm:text-sm"
                />
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="flex items-center justify-between pt-2">
              <span className="text-xs text-slate-400">
                Tavsiya: Task 1 ga 20 daqiqa, Task 2 ga 40 daqiqa ajrating.
              </span>
              <button
                type="button"
                onClick={() => {
                  if (
                    window.confirm(
                      'Writing modulini yakunlab, Speaking moduliga o‘tishni tasdiqlaysizmi?',
                    )
                  ) {
                    advanceToStage('speaking');
                  }
                }}
                className="flex cursor-pointer items-center gap-1.5 rounded-xl bg-amber-600 px-4 py-2.5 text-xs font-bold text-white shadow-md transition-all hover:bg-amber-500"
              >
                <span>4-Modul: Speaking ga o‘tish</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* 5. SPEAKING MODULE (11-14 mins: Live AI Examiner)         */}
        {/* ========================================================= */}
        {stage === 'speaking' && (
          <div className="mx-auto my-auto w-full max-w-2xl space-y-6 duration-150 animate-in fade-in">
            <div className="space-y-6 rounded-3xl border border-purple-500/30 bg-slate-900/80 p-6 text-center shadow-2xl backdrop-blur-xl sm:p-8">
              {/* Examiner Avatar */}
              <div className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-tr from-purple-600 to-indigo-600 text-white shadow-xl shadow-purple-500/25">
                <Mic size={36} className={isRecording ? 'animate-pulse text-red-300' : ''} />
                {isRecording && (
                  <span className="absolute -right-1 -top-1 flex h-4 w-4">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
                    <span className="relative inline-flex h-4 w-4 rounded-full bg-red-500" />
                  </span>
                )}
              </div>

              <div>
                <span className="rounded-full bg-purple-500/20 px-3 py-1 text-xs font-black uppercase text-purple-300">
                  {speakingStep === 'part1'
                    ? 'Speaking Part 1: Introduction & Interview'
                    : speakingStep === 'part2_prep'
                      ? 'Speaking Part 2: 1-Minute Preparation'
                      : speakingStep === 'part2_speech'
                        ? 'Speaking Part 2: Individual Long Turn'
                        : 'Speaking Part 3: Two-way Discussion'}
                </span>
                <h3 className="mt-3 text-lg font-black text-white sm:text-xl">
                  {speakingStep === 'part1' && exam.speaking.part1[speakingP1QuestionIdx]}
                  {speakingStep === 'part2_prep' && exam.speaking.part2.title}
                  {speakingStep === 'part2_speech' && exam.speaking.part2.title}
                  {speakingStep === 'part3' && exam.speaking.part3[speakingP3QuestionIdx]}
                </h3>
              </div>

              {/* Cue Card Details during Part 2 */}
              {(speakingStep === 'part2_prep' || speakingStep === 'part2_speech') && (
                <div className="space-y-2 rounded-2xl border border-slate-800 bg-slate-950 p-4 text-left text-xs text-slate-300">
                  <span className="block font-bold text-purple-400">You should say:</span>
                  <ul className="list-disc space-y-1 pl-5">
                    {exam.speaking.part2.bullets.map((b, bIdx) => (
                      <li key={bIdx}>{b}</li>
                    ))}
                  </ul>

                  {speakingStep === 'part2_prep' && (
                    <div className="border-t border-slate-800 pt-3 text-center">
                      <span className="block text-[11px] text-slate-400">Tayyorgarlik vaqti:</span>
                      <span className="font-mono text-3xl font-black text-amber-400">
                        {cueCardPrepTimer}s
                      </span>
                    </div>
                  )}
                </div>
              )}

              {/* Live Transcript Box */}
              <div className="min-h-[70px] rounded-2xl border border-slate-800 bg-slate-950 p-4 text-left font-mono text-xs text-slate-300">
                <span className="mb-1 block text-[10px] font-bold uppercase text-slate-500">
                  Jonli Nutq Matni (Live Transcript):
                </span>
                <p className="italic">
                  {speakingTranscript ||
                    (isRecording
                      ? 'Gapiring, mikrofon yozmoqda...'
                      : 'Nutqni boshlash uchun mikrofon tugmasini bosing')}
                </p>
              </div>

              {/* Speaking Controls */}
              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => {
                    if (isRecording) stopMicRecording();
                    else startMicRecording();
                  }}
                  className={`flex cursor-pointer items-center gap-2 rounded-2xl px-5 py-3 text-xs font-black text-white shadow-md transition-all ${
                    isRecording
                      ? 'bg-red-600 hover:bg-red-500'
                      : 'bg-purple-600 hover:bg-purple-500'
                  }`}
                >
                  {isRecording ? <MicOff size={16} /> : <Mic size={16} />}
                  <span>{isRecording ? 'Yozishni to‘xtatish' : 'Gapirishni boshlash'}</span>
                </button>

                {speakingStep === 'part1' && (
                  <Button type="button" onClick={handleNextSpeakingP1Question} className="text-xs">
                    <span>Keyingi savol</span>
                    <ChevronRight size={14} />
                  </Button>
                )}

                {speakingStep === 'part2_prep' && (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => {
                      setCueCardPrepTimer(0);
                    }}
                    className="text-xs"
                  >
                    Tayyorman (Taymerni o‘tkazish)
                  </Button>
                )}

                {speakingStep === 'part2_speech' && (
                  <Button
                    type="button"
                    onClick={handleFinishPart2Speech}
                    className="bg-emerald-600 text-xs text-white hover:bg-emerald-500"
                  >
                    <span>Part 2 ni yakunlash</span>
                    <ArrowRight size={14} />
                  </Button>
                )}

                {speakingStep === 'part3' && (
                  <Button type="button" onClick={handleNextSpeakingP3Question} className="text-xs">
                    <span>
                      {speakingP3QuestionIdx < exam.speaking.part3.length - 1
                        ? 'Keyingi savol'
                        : 'Imtihonni Yakunlash'}
                    </span>
                    <ArrowRight size={14} />
                  </Button>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* 6. EVALUATING STAGE                                       */}
        {/* ========================================================= */}
        {stage === 'evaluating' && (
          <div className="mx-auto my-auto w-full max-w-lg space-y-6 rounded-3xl border border-slate-800 bg-slate-900/80 p-8 text-center shadow-2xl backdrop-blur-xl duration-200 animate-in fade-in sm:p-12">
            <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white shadow-xl shadow-blue-500/30">
              <Sparkles size={32} className="animate-spin" />
            </div>

            <div className="space-y-2">
              <h2 className="text-xl font-black text-white sm:text-2xl">
                Imtihon Natijalari Hisoblanmoqda
              </h2>
              <p className="text-xs text-slate-400">{evalProgressText}</p>
            </div>

            <div className="space-y-2.5 text-left text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 size={16} className="text-emerald-400" />
                <span>Listening & Reading avtomatik baholandi</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 size={16} className="text-emerald-400" />
                <span>Writing Task 1 & 2 mezonlari tahlil qilindi</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 size={16} className="text-emerald-400" />
                <span>Speaking ravonligi va talaffuzi baholandi</span>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* 7. FINAL RESULTS & TRF CERTIFICATE STAGE                  */}
        {/* ========================================================= */}
        {stage === 'results' && examResult && (
          <div className="flex flex-1 flex-col space-y-6 duration-200 animate-in fade-in">
            {/* Celebratory Hero Card */}
            <div className="relative overflow-hidden rounded-3xl border border-emerald-500/30 bg-gradient-to-r from-emerald-950/40 via-slate-900/80 to-slate-900/90 p-6 shadow-2xl backdrop-blur-xl sm:p-8">
              <div className="relative z-10 flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/15 px-3 py-1 text-xs font-black text-emerald-400">
                    <Award size={15} />
                    <span>IELTS FULL MOCK MUVAFFAQIYATLI YAKUNLANDI</span>
                  </div>
                  <h2 className="text-2xl font-black tracking-tight text-white sm:text-3xl">
                    Tabriklaymiz, {examResult.candidateName}!
                  </h2>
                  <p className="max-w-lg text-xs text-slate-300">
                    Siz 2h 45m davomida to‘liq 4 ta modulni topshirdingiz. Sizning rasmiy Test
                    Report Form (TRF) sertifikatingiz tayyorlandi.
                  </p>
                </div>

                {/* Score Pill */}
                <div className="flex shrink-0 items-center justify-center">
                  <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-red-500 bg-slate-950/90 px-6 py-4 shadow-xl">
                    <span className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                      Overall Band
                    </span>
                    <span className="text-4xl font-black tracking-tight text-red-500">
                      {examResult.scores.overall.toFixed(1)}
                    </span>
                    <span className="mt-1 rounded-md bg-red-500/20 px-2 py-0.5 text-[10px] font-bold text-red-300">
                      {examResult.scores.cefrLevel.split(' ')[0]} CEFR
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* 4 Skill Score Breakdown */}
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                {
                  label: 'Listening',
                  score: examResult.scores.listening,
                  raw: `${examResult.rawCounts.listeningCorrect} / ${examResult.rawCounts.listeningTotal}`,
                  color: 'border-blue-500/30 bg-blue-950/30 text-blue-400',
                },
                {
                  label: 'Reading',
                  score: examResult.scores.reading,
                  raw: `${examResult.rawCounts.readingCorrect} / ${examResult.rawCounts.readingTotal}`,
                  color: 'border-emerald-500/30 bg-emerald-950/30 text-emerald-400',
                },
                {
                  label: 'Writing',
                  score: examResult.scores.writing,
                  raw: `T1: ${examResult.writingFeedback.task1Score} | T2: ${examResult.writingFeedback.task2Score}`,
                  color: 'border-amber-500/30 bg-amber-950/30 text-amber-400',
                },
                {
                  label: 'Speaking',
                  score: examResult.scores.speaking,
                  raw: `Fluency: ${examResult.speakingFeedback.fluencyCoherence}`,
                  color: 'border-purple-500/30 bg-purple-950/30 text-purple-400',
                },
              ].map((s, idx) => (
                <div
                  key={idx}
                  className={`space-y-1.5 rounded-2xl border bg-slate-900/60 p-4 ${s.color}`}
                >
                  <span className="block text-xs font-bold text-slate-300">{s.label}</span>
                  <span className="block text-3xl font-black text-white">{s.score.toFixed(1)}</span>
                  <span className="block font-mono text-[10px] text-slate-400">{s.raw}</span>
                </div>
              ))}
            </div>

            {/* Action Bar: View Certificate, Verify Online */}
            <div className="flex flex-col items-center justify-between gap-4 rounded-3xl border border-slate-800 bg-slate-900/80 p-6 sm:flex-row">
              <div className="space-y-1 text-center sm:text-left">
                <h4 className="flex items-center justify-center gap-1.5 text-sm font-black text-white sm:justify-start">
                  <ShieldCheck size={16} className="text-emerald-400" />
                  Rasmiy TRF Sertifikati va QR Kodi
                </h4>
                <p className="text-xs text-slate-400">
                  Verifikatsiya kodi:{' '}
                  <code className="font-mono font-bold text-white">
                    {examResult.verificationCode}
                  </code>
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={`/verify/${examResult.verificationCode}`}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-slate-700 bg-slate-800 px-4 py-2.5 text-xs font-bold text-white shadow-sm transition-all hover:bg-slate-700"
                >
                  Onlayn Tekshiruv Sahifasi
                </a>
                <button
                  type="button"
                  onClick={() => setShowCertificateModal(true)}
                  className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 px-5 py-2.5 text-xs font-black text-white shadow-lg shadow-red-600/25 transition-all hover:from-red-500 hover:to-rose-500"
                >
                  <Award size={15} />
                  <span>TRF Sertifikatini Ko‘rish & Yuklab Olish</span>
                </button>
              </div>
            </div>

            {/* Modal Certificate */}
            {showCertificateModal && examResult.certificate && (
              <IeltsTrfCertificateModal
                isOpen={showCertificateModal}
                onClose={() => setShowCertificateModal(false)}
                data={examResult.certificate}
              />
            )}
          </div>
        )}
      </main>
    </div>
  );
};
