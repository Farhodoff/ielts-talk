import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ArrowLeft, Clock } from 'lucide-react';
import { useStudyData } from '../context/StudyPlannerContext';
import { FullMockExam, getFullMockById } from '../data/ielts/fullMockData';
import {
  IeltsFullMockService,
  MockStage,
  FullMockAnswers,
  FullMockExamResult,
  FullMockSession,
} from '../services/IeltsFullMockService';
import { toast } from '../hooks/use-toast';
import { MockDeviceCheck } from '../components/ielts/mock/MockDeviceCheck';
import { MockListeningStage } from '../components/ielts/mock/MockListeningStage';
import { MockReadingStage } from '../components/ielts/mock/MockReadingStage';
import { MockWritingStage } from '../components/ielts/mock/MockWritingStage';
import { MockSpeakingStage } from '../components/ielts/mock/MockSpeakingStage';
import { MockEvaluatingStage } from '../components/ielts/mock/MockEvaluatingStage';
import { MockResultsView } from '../components/ielts/mock/MockResultsView';

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

  // Timers (Seconds)
  // Listening: 30m = 1800s | Reading: 60m = 3600s | Writing: 60m = 3600s | Speaking: 14m = 840s
  const [timeLeft, setTimeLeft] = useState(1800);
  const [isTimerActive, setIsTimerActive] = useState(false);

  // User answers
  const [answers, setAnswers] = useState<FullMockAnswers>({
    listening: {},
    reading: {},
    writing: { task1: '', task2: '' },
    speaking: { part1Responses: [], part2Speech: '', part3Responses: [] },
  });

  // Evaluation & Results
  const [evalProgressText, setEvalProgressText] = useState('Natijalar tahlil qilinmoqda...');
  const [examResult, setExamResult] = useState<FullMockExamResult | null>(null);

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
    } else if (nextStage === 'evaluating') {
      setIsTimerActive(false);
      handleFinalSubmission();
    }
  };

  // Answer change handlers
  const handleAnswerListening = (questionId: string | number, value: string) => {
    setAnswers((prev) => ({
      ...prev,
      listening: { ...prev.listening, [String(questionId)]: value },
    }));
  };

  const handleAnswerReading = (questionId: string | number, value: string) => {
    setAnswers((prev) => ({
      ...prev,
      reading: { ...prev.reading, [String(questionId)]: value },
    }));
  };

  const handleAnswerWriting = (task: 'task1' | 'task2', text: string) => {
    setAnswers((prev) => ({
      ...prev,
      writing: { ...prev.writing, [task]: text },
    }));
  };

  const handleSaveSpeakingPart1 = (index: number, response: string) => {
    setAnswers((prev) => {
      const updated = [...prev.speaking.part1Responses];
      updated[index] = response;
      return {
        ...prev,
        speaking: { ...prev.speaking, part1Responses: updated },
      };
    });
  };

  const handleSaveSpeakingPart2 = (speech: string) => {
    setAnswers((prev) => ({
      ...prev,
      speaking: { ...prev.speaking, part2Speech: speech },
    }));
  };

  const handleSaveSpeakingPart3 = (index: number, response: string) => {
    setAnswers((prev) => {
      const updated = [...prev.speaking.part3Responses];
      updated[index] = response;
      return {
        ...prev,
        speaking: { ...prev.speaking, part3Responses: updated },
      };
    });
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
