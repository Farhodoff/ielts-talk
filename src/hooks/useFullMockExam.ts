import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useStudyData } from '../context/StudyPlannerContext';
import { FullMockExam, getFullMockById } from '../data/ielts/fullMockData';
import {
  IeltsFullMockService,
  MockStage,
  FullMockAnswers,
  FullMockExamResult,
  FullMockSession,
} from '../services/IeltsFullMockService';
import { toast } from './use-toast';

export const useFullMockExam = () => {
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

  return {
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
  };
};
