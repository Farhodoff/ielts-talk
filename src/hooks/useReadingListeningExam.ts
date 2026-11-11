import { useState, useEffect } from 'react';
import { useStudyData } from '../context/IeltsTalkContext';
import { IELTS_READING_EXAMS, ReadingPassage } from '../data/ielts/reading_data';
import { IELTS_LISTENING_EXAMS } from '../data/ielts/listening_data';
import { HistoryService } from '../services/HistoryService';
import { MasteryEngine } from '../services/MasteryEngine';
import { MockPassageData, calculateIeltsBandScore } from '../types/ieltsMock';

export const useReadingListeningExam = () => {
  const { awardXP, user } = useStudyData();
  const [testType, setTestType] = useState<'reading' | 'listening'>('reading');
  const [step, setStep] = useState<'intro' | 'test' | 'report'>('intro');

  // Timer & Session
  const [timeLeft, setTimeLeft] = useState(1200); // 20 mins for reading, 15 for listening
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  // Active Passage/Questions Data
  const [currentPassage, setCurrentPassage] = useState<MockPassageData>({
    id: IELTS_READING_EXAMS[0].id,
    title: IELTS_READING_EXAMS[0].title,
    academicLevel: IELTS_READING_EXAMS[0].academicLevel,
    text: IELTS_READING_EXAMS[0].text,
    questions: IELTS_READING_EXAMS[0].questions,
  });

  // User Answers State
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  const [score, setScore] = useState(0);

  // Timer Effect
  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;
    if (isTimerRunning && timeLeft > 0) {
      timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    } else if (timeLeft === 0 && isTimerRunning) {
      handleSubmitTest();
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isTimerRunning, timeLeft]);

  // Load Specific Reading Passage
  const startReadingPassage = (passage: ReadingPassage) => {
    setUserAnswers({});
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

  // Load Specific Listening Section
  const startListeningSection = (examIndex: number, sectionIndex: number) => {
    setUserAnswers({});
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

  // Start with AI-generated task
  const startAiPassage = (data: MockPassageData) => {
    setCurrentPassage(data);
    setUserAnswers({});
    setStep('test');
    setIsTimerRunning(true);
    setTimeLeft(testType === 'reading' ? 1200 : 900);
  };

  const handleOptionSelect = (questionId: number, answer: string) => {
    setUserAnswers((prev) => ({ ...prev, [questionId]: answer }));
  };

  const handleSubmitTest = async () => {
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
    } catch (e) {
      console.warn('Failed to award XP:', e);
    }

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

  const handleResetToIntro = () => {
    setIsTimerRunning(false);
    setStep('intro');
    setUserAnswers({});
    setTimeLeft(1200);
  };

  return {
    testType,
    setTestType,
    step,
    setStep,
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
  };
};
