import { describe, it, expect, vi, beforeEach } from 'vitest';
import { TrfCertificateService } from '../TrfCertificateService';
import { DailyReflectionService } from '../DailyReflectionService';
import { safeLocalStorage } from '../../utils/storage/safeLocalStorage';
import { supabase } from '../../lib/supabase';

vi.mock('../../lib/supabase', () => ({
  supabase: {
    from: vi.fn(),
  },
}));

vi.mock('../DailyReflectionService', () => ({
  DailyReflectionService: {
    getReflections: vi.fn(),
  },
}));

vi.mock('../../utils/storage/safeLocalStorage', () => ({
  safeLocalStorage: {
    getJSON: vi.fn(),
    setJSON: vi.fn(),
  },
}));

describe('TrfCertificateService', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('correctly maps IELTS band scores to CEFR levels', () => {
    expect(TrfCertificateService.getCefrFromBand(9.0)).toContain('C2');
    expect(TrfCertificateService.getCefrFromBand(8.5)).toContain('C2');
    expect(TrfCertificateService.getCefrFromBand(7.5)).toContain('C1');
    expect(TrfCertificateService.getCefrFromBand(7.0)).toContain('C1');
    expect(TrfCertificateService.getCefrFromBand(6.5)).toContain('B2');
    expect(TrfCertificateService.getCefrFromBand(5.5)).toContain('B2');
    expect(TrfCertificateService.getCefrFromBand(5.0)).toContain('B1');
    expect(TrfCertificateService.getCefrFromBand(4.0)).toContain('B1');
    expect(TrfCertificateService.getCefrFromBand(3.5)).toContain('A2');
  });

  it('generates a valid verification code with module and year', () => {
    const currentYear = new Date().getFullYear();
    const code = TrfCertificateService.generateVerificationCode('Speaking');
    expect(code).toMatch(new RegExp(`^IT-${currentYear}-SPE-[A-Z0-9]+$`));
  });

  it('generates a valid candidate number in UZ format', () => {
    const candidateNumber = TrfCertificateService.generateCandidateNumber();
    expect(candidateNumber).toMatch(/^UZ-\d{6}$/);
  });

  it('fetches learner diagnostics from local cache for guest user', async () => {
    vi.mocked(DailyReflectionService.getReflections).mockResolvedValue({
      '2026-10-01': {
        date: '2026-10-01',
        text: 'Practiced Part 2 Cue Cards',
        score: 90,
        feedback: 'Great fluency',
        strengths: ['Fluency', 'Good Collocations'],
        timestamp: '2026-10-01T12:00:00Z',
      },
      '2026-10-02': {
        date: '2026-10-02',
        text: 'Writing Task 2 Essay',
        score: 80,
        feedback: 'Watch coherence',
        strengths: ['Grammar', 'Fluency'],
        timestamp: '2026-10-02T12:00:00Z',
      },
    });

    vi.mocked(safeLocalStorage.getJSON).mockReturnValue([
      { word: 'paramount', level: 'C1', uzbekTranslation: 'eng muhim' },
      { word: 'apple', level: 'A1', uzbekTranslation: 'olma' },
      { word: 'ubiquitous', level: 'C2', uzbekTranslation: 'hamma joyda mavjud' },
    ]);

    const diagnostics = await TrfCertificateService.fetchLearnerDiagnostics('guest');

    expect(diagnostics.totalReflections).toBe(2);
    expect(diagnostics.averageReflectionScore).toBe(85);
    expect(diagnostics.recentStrengths).toContain('Fluency');
    expect(diagnostics.recentStrengths).toContain('Good Collocations');
    expect(diagnostics.recentStrengths).toContain('Grammar');
    expect(diagnostics.totalVocabSearched).toBe(3);
    expect(diagnostics.advancedWords.length).toBe(2);
    expect(diagnostics.advancedWords.map((w) => w.word)).toEqual(['paramount', 'ubiquitous']);
  });

  it('fetches learner diagnostics from relational tables for authenticated user', async () => {
    vi.mocked(DailyReflectionService.getReflections).mockResolvedValue({
      '2026-10-03': {
        date: '2026-10-03',
        text: 'Today I studied Band 8 idioms',
        score: 95,
        feedback: 'Outstanding vocabulary accuracy',
        strengths: ['Lexical Variety'],
        timestamp: '2026-10-03T10:00:00Z',
      },
    });

    const mockVocabChain = {
      select: vi.fn().mockReturnThis(),
      eq: vi.fn().mockReturnThis(),
      order: vi.fn().mockReturnThis(),
      limit: vi.fn().mockResolvedValue({
        data: [
          {
            word: 'meticulous',
            language: 'en',
            details: { level: 'C1', uzbekTranslation: 'o‘ta sinchkov' },
          },
          {
            word: 'ephemeral',
            language: 'en',
            details: { level: 'C2', uzbekTranslation: 'o‘tkinchi' },
          },
        ],
        error: null,
      }),
    };

    const mockSignalChain = {
      select: vi.fn().mockReturnThis(),
      eq: vi.fn().mockReturnThis(),
      order: vi.fn().mockReturnThis(),
      limit: vi.fn().mockResolvedValue({
        data: [
          { type: 'completed_lesson', signal_data: { skill: 'speaking' } },
          { type: 'completed_lesson', signal_data: { skill: 'speaking' } },
          { type: 'repeated_error', signal_data: { category: 'prepositions' } },
        ],
        error: null,
      }),
    };

    vi.mocked(supabase.from).mockImplementation((table: string) => {
      if (table === 'user_vocab_history') return mockVocabChain as any;
      if (table === 'user_learning_signals') return mockSignalChain as any;
      return {} as any;
    });

    const diagnostics = await TrfCertificateService.fetchLearnerDiagnostics('auth-user-123');

    expect(diagnostics.totalReflections).toBe(1);
    expect(diagnostics.averageReflectionScore).toBe(95);
    expect(diagnostics.recentStrengths).toEqual(['Lexical Variety']);
    expect(diagnostics.totalVocabSearched).toBe(2);
    expect(diagnostics.advancedWords.map((w) => w.word)).toEqual(['meticulous', 'ephemeral']);
    expect(diagnostics.totalSignals).toBe(3);
    expect(diagnostics.topSkills).toContain('SPEAKING');
    expect(diagnostics.growthAreas).toContain('prepositions');
  });
});
