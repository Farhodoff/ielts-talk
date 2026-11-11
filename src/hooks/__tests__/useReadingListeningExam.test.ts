import { describe, it, expect, vi, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useReadingListeningExam } from '../useReadingListeningExam';
import { IELTS_READING_EXAMS } from '../../data/ielts/reading_data';
import { IELTS_LISTENING_EXAMS } from '../../data/ielts/listening_data';
import { HistoryService } from '../../services/HistoryService';
import { MasteryEngine } from '../../services/MasteryEngine';

// Mock dependencies
const mockAwardXP = vi.fn().mockResolvedValue(undefined);
vi.mock('../../context/IeltsTalkContext', () => ({
  useStudyData: () => ({
    awardXP: mockAwardXP,
    user: { id: 'test-user-1', email: 'candidate@example.com' },
  }),
}));

vi.mock('../../services/HistoryService', () => ({
  HistoryService: {
    saveMockExam: vi.fn().mockResolvedValue(undefined),
  },
}));

vi.mock('../../services/MasteryEngine', () => ({
  MasteryEngine: {
    recordEvidence: vi.fn(),
  },
}));

describe('useReadingListeningExam', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('initializes with reading test in intro step', () => {
    const { result } = renderHook(() => useReadingListeningExam());
    expect(result.current.testType).toBe('reading');
    expect(result.current.step).toBe('intro');
    expect(result.current.score).toBe(0);
    expect(result.current.userAnswers).toEqual({});
  });

  it('starts a reading passage correctly', () => {
    const { result } = renderHook(() => useReadingListeningExam());
    const samplePassage = IELTS_READING_EXAMS[0];

    act(() => {
      result.current.startReadingPassage(samplePassage);
    });

    expect(result.current.step).toBe('test');
    expect(result.current.currentPassage.id).toBe(samplePassage.id);
    expect(result.current.timeLeft).toBe(1200);
    expect(result.current.userAnswers).toEqual({});
  });

  it('starts a listening section correctly', () => {
    const { result } = renderHook(() => useReadingListeningExam());
    const exam = IELTS_LISTENING_EXAMS[0];

    act(() => {
      result.current.startListeningSection(0, 0);
    });

    expect(result.current.step).toBe('test');
    expect(result.current.currentPassage.id).toBe(`${exam.id}_sec_1`);
    expect(result.current.timeLeft).toBe(900);
  });

  it('records answers and evaluates score on submission', async () => {
    const { result } = renderHook(() => useReadingListeningExam());
    const samplePassage = IELTS_READING_EXAMS[0];

    act(() => {
      result.current.startReadingPassage(samplePassage);
    });

    // Provide answers: Answer first question correctly
    const firstQ = samplePassage.questions[0];
    act(() => {
      result.current.handleOptionSelect(firstQ.id, firstQ.correctAnswer);
    });

    expect(result.current.userAnswers[firstQ.id]).toBe(firstQ.correctAnswer);

    await act(async () => {
      await result.current.handleSubmitTest();
    });

    expect(result.current.step).toBe('report');
    expect(result.current.score).toBeGreaterThanOrEqual(1);
    expect(mockAwardXP).toHaveBeenCalled();
    expect(HistoryService.saveMockExam).toHaveBeenCalled();
    expect(MasteryEngine.recordEvidence).toHaveBeenCalled();
  });

  it('resets back to intro step', () => {
    const { result } = renderHook(() => useReadingListeningExam());

    act(() => {
      result.current.startReadingPassage(IELTS_READING_EXAMS[0]);
    });
    expect(result.current.step).toBe('test');

    act(() => {
      result.current.handleResetToIntro();
    });
    expect(result.current.step).toBe('intro');
    expect(result.current.userAnswers).toEqual({});
  });
});
