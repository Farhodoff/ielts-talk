import { render, screen, fireEvent } from '@testing-library/react';
import { describe, expect, it, vi, beforeEach } from 'vitest';
import { MockDeviceCheck } from '../MockDeviceCheck';
import { MockListeningStage } from '../MockListeningStage';
import { MockReadingStage } from '../MockReadingStage';
import { MockWritingStage } from '../MockWritingStage';
import { MockSpeakingStage } from '../MockSpeakingStage';
import { MockResultsView } from '../MockResultsView';
import { MockEvaluatingStage } from '../MockEvaluatingStage';
import { IELTS_FULL_MOCKS } from '../../../../data/ielts/fullMockData';
import { FullMockExamResult } from '../../../../services/IeltsFullMockService';

const mockExam = IELTS_FULL_MOCKS[0];

describe('IELTS Full Mock Subcomponents Suite', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    (globalThis as any).SpeechSynthesisUtterance = class {
      lang = '';
      rate = 1;
      text = '';
      onend = () => {};
      onerror = () => {};
      constructor(text: string) {
        this.text = text;
      }
    };
    (window as any).speechSynthesis = {
      speak: vi.fn(),
      cancel: vi.fn(),
    };
  });

  describe('MockDeviceCheck', () => {
    it('renders device check form and triggers audio/mic tests and start exam', () => {
      const setCandidateName = vi.fn();
      const onStartExam = vi.fn();

      render(
        <MockDeviceCheck
          candidateName="Farhod Soyilov"
          setCandidateName={setCandidateName}
          onStartExam={onStartExam}
        />,
      );

      expect(screen.getByText('IELTS Full Mock Imtihoniga Xush Kelibsiz')).toBeInTheDocument();
      expect(screen.getByDisplayValue('Farhod Soyilov')).toBeInTheDocument();

      const audioBtn = screen.getByRole('button', { name: /Test Ovozini Eshitish/i });
      fireEvent.click(audioBtn);
      expect(window.speechSynthesis.speak).toHaveBeenCalled();

      const startBtn = screen.getByRole('button', { name: /Imtihonni Boshlash/i });
      fireEvent.click(startBtn);
      expect(onStartExam).toHaveBeenCalled();
    });
  });

  describe('MockListeningStage', () => {
    it('renders sections and allows answering and completing stage', () => {
      const onAnswerChange = vi.fn();
      const onCompleteStage = vi.fn();
      vi.spyOn(window, 'confirm').mockReturnValue(true);

      render(
        <MockListeningStage
          exam={mockExam}
          answers={{ '1': 'answer 1' }}
          onAnswerChange={onAnswerChange}
          onCompleteStage={onCompleteStage}
        />,
      );

      expect(screen.getByText('Section 1')).toBeInTheDocument();
      expect(screen.getByText(/To‘ldirilgan savollar:/i)).toBeInTheDocument();

      const advanceBtn = screen.getByRole('button', { name: /Reading ga o‘tish/i });
      fireEvent.click(advanceBtn);
      expect(onCompleteStage).toHaveBeenCalled();
    });
  });

  describe('MockReadingStage', () => {
    it('renders reading passage and toggles font size and completes stage', () => {
      const onAnswerChange = vi.fn();
      const onCompleteStage = vi.fn();
      vi.spyOn(window, 'confirm').mockReturnValue(true);

      render(
        <MockReadingStage
          exam={mockExam}
          answers={{}}
          onAnswerChange={onAnswerChange}
          onCompleteStage={onCompleteStage}
        />,
      );

      expect(screen.getByText('Passage 1')).toBeInTheDocument();
      expect(screen.getByText(mockExam.reading.passages[0].title)).toBeInTheDocument();

      const advanceBtn = screen.getByRole('button', { name: /Writing ga o‘tish/i });
      fireEvent.click(advanceBtn);
      expect(onCompleteStage).toHaveBeenCalled();
    });
  });

  describe('MockWritingStage', () => {
    it('allows switching between Task 1 and Task 2 and counts words', () => {
      const onAnswerChange = vi.fn();
      const onCompleteStage = vi.fn();
      vi.spyOn(window, 'confirm').mockReturnValue(true);

      render(
        <MockWritingStage
          exam={mockExam}
          answers={{
            task1: 'The given line graph shows significant changes over time.',
            task2: '',
          }}
          onAnswerChange={onAnswerChange}
          onCompleteStage={onCompleteStage}
        />,
      );

      expect(screen.getByText(/Task 1: 9 \/ 150 so‘z/i)).toBeInTheDocument();

      const task2Btn = screen.getByRole('button', { name: /Writing Task 2/i });
      fireEvent.click(task2Btn);
      expect(screen.getByText(/Task 2: 0 \/ 250 so‘z/i)).toBeInTheDocument();

      const advanceBtn = screen.getByRole('button', { name: /Speaking ga o‘tish/i });
      fireEvent.click(advanceBtn);
      expect(onCompleteStage).toHaveBeenCalled();
    });
  });

  describe('MockSpeakingStage', () => {
    it('renders speaking stage and controls', () => {
      const onSavePart1 = vi.fn();
      const onSavePart2 = vi.fn();
      const onSavePart3 = vi.fn();
      const onCompleteExam = vi.fn();

      render(
        <MockSpeakingStage
          exam={mockExam}
          onSavePart1Response={onSavePart1}
          onSavePart2Speech={onSavePart2}
          onSavePart3Response={onSavePart3}
          onCompleteExam={onCompleteExam}
        />,
      );

      expect(screen.getByText(/Speaking Part 1:/i)).toBeInTheDocument();
      expect(screen.getByText(/Jonli Nutq Matni/i)).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /Keyingi savol/i })).toBeInTheDocument();
    });
  });

  describe('MockEvaluatingStage', () => {
    it('renders progress text properly', () => {
      render(<MockEvaluatingStage progressText="Baholanmoqda..." />);
      expect(screen.getByText('Baholanmoqda...')).toBeInTheDocument();
      expect(screen.getByText('Imtihon Natijalari Hisoblanmoqda')).toBeInTheDocument();
    });
  });

  describe('MockResultsView', () => {
    it('renders scores and candidate information', () => {
      const mockResult: FullMockExamResult = {
        id: 'test-res-1',
        examId: mockExam.id,
        examTitle: mockExam.title,
        candidateName: 'Alisher Navoiy',
        candidateNumber: 'UZ-999888',
        testDate: '02 Oct 2026',
        verificationCode: 'IELTS-TRF-TESTCODE',
        scores: {
          listening: 8.5,
          reading: 8.0,
          writing: 7.5,
          speaking: 8.0,
          overall: 8.0,
          cefrLevel: 'C1 Effective Operational Proficiency',
        },
        rawCounts: {
          listeningCorrect: 37,
          listeningTotal: 40,
          readingCorrect: 36,
          readingTotal: 40,
        },
        writingFeedback: {
          task1Score: 7.5,
          task2Score: 7.5,
          overallWritingBand: 7.5,
          taskAchievement: 8.0,
          coherenceCohesion: 7.5,
          lexicalResource: 7.5,
          grammaticalRange: 7.0,
          feedback: 'Excellent task response.',
          keyStrengths: ['Great coherence'],
          priorityAreas: ['Minor grammar'],
        },
        speakingFeedback: {
          overallSpeakingBand: 8.0,
          fluencyCoherence: 8.0,
          lexicalResource: 8.0,
          grammaticalRange: 8.0,
          pronunciation: 8.0,
          examinerNotes: 'Fluent and natural delivery.',
          keyStrengths: ['Natural delivery'],
          priorityAreas: ['Idiomatic language'],
        },
        certificate: {
          candidateName: 'Alisher Navoiy',
          candidateNumber: 'UZ-999888',
          testDate: '02 Oct 2026',
          testType: 'Academic',
          module: 'Full Mock',
          scores: {
            listening: 8.5,
            reading: 8.0,
            writing: 7.5,
            speaking: 8.0,
            overall: 8.0,
            cefrLevel: 'C1 Effective Operational Proficiency',
          },
          verificationCode: 'IELTS-TRF-TESTCODE',
        },
      };

      render(<MockResultsView examResult={mockResult} />);
      expect(screen.getByText('Tabriklaymiz, Alisher Navoiy!')).toBeInTheDocument();
      expect(screen.getAllByText('8.0').length).toBeGreaterThanOrEqual(1);
      expect(screen.getByText('IELTS-TRF-TESTCODE')).toBeInTheDocument();
    });
  });
});
