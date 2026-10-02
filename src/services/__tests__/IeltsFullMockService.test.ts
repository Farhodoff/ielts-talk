import { describe, it, expect, beforeEach } from 'vitest';
import { IeltsFullMockService, FullMockSession } from '../IeltsFullMockService';

describe('IeltsFullMockService', () => {
  beforeEach(() => {
    localStorage.clear();
    IeltsFullMockService.clearActiveSession();
  });

  describe('calculateOverallBand', () => {
    it('calculates exact integer bands correctly', () => {
      const overall = IeltsFullMockService.calculateOverallBand(7.0, 7.0, 7.0, 7.0);
      expect(overall).toBe(7.0);
    });

    it('rounds down when decimal remainder is strictly below 0.25 (e.g. 6.125 -> 6.0)', () => {
      // 6.5 + 6.0 + 6.0 + 6.0 = 24.5 / 4 = 6.125
      const overall = IeltsFullMockService.calculateOverallBand(6.5, 6.0, 6.0, 6.0);
      expect(overall).toBe(6.0);
    });

    it('rounds up to 0.5 when decimal remainder is exactly 0.25 (e.g. 6.25 -> 6.5)', () => {
      // 6.5 + 6.5 + 6.0 + 6.0 = 25.0 / 4 = 6.25
      const overall = IeltsFullMockService.calculateOverallBand(6.5, 6.5, 6.0, 6.0);
      expect(overall).toBe(6.5);
    });

    it('rounds to 0.5 when decimal remainder is 0.375 (e.g. 6.375 -> 6.5)', () => {
      // 6.5 + 6.5 + 6.5 + 6.0 = 25.5 / 4 = 6.375
      const overall = IeltsFullMockService.calculateOverallBand(6.5, 6.5, 6.5, 6.0);
      expect(overall).toBe(6.5);
    });

    it('rounds to 0.5 when decimal remainder is 0.625 (e.g. 6.625 -> 6.5)', () => {
      // 7.0 + 6.5 + 6.5 + 6.5 = 26.5 / 4 = 6.625
      const overall = IeltsFullMockService.calculateOverallBand(7.0, 6.5, 6.5, 6.5);
      expect(overall).toBe(6.5);
    });

    it('rounds up to next integer when decimal remainder is 0.75 (e.g. 6.75 -> 7.0)', () => {
      // 7.0 + 7.0 + 6.5 + 6.5 = 27.0 / 4 = 6.75
      const overall = IeltsFullMockService.calculateOverallBand(7.0, 7.0, 6.5, 6.5);
      expect(overall).toBe(7.0);
    });

    it('rounds up to next integer when decimal remainder is 0.875 (e.g. 6.875 -> 7.0)', () => {
      // 7.5 + 7.0 + 6.5 + 6.5 = 27.5 / 4 = 6.875
      const overall = IeltsFullMockService.calculateOverallBand(7.5, 7.0, 6.5, 6.5);
      expect(overall).toBe(7.0);
    });
  });

  describe('rawCountToBand', () => {
    it('correctly maps 39+ correct answers to Band 9.0', () => {
      expect(IeltsFullMockService.rawCountToBand(40, 40)).toBe(9.0);
      expect(IeltsFullMockService.rawCountToBand(39, 40)).toBe(9.0);
    });

    it('correctly maps 30-31 correct answers to Band 7.0', () => {
      expect(IeltsFullMockService.rawCountToBand(30, 40)).toBe(7.0);
      expect(IeltsFullMockService.rawCountToBand(31, 40)).toBe(7.0);
    });

    it('correctly maps 23-25 correct answers to Band 6.0', () => {
      expect(IeltsFullMockService.rawCountToBand(23, 40)).toBe(6.0);
      expect(IeltsFullMockService.rawCountToBand(25, 40)).toBe(6.0);
    });

    it('proportional scaling works when test has fewer questions', () => {
      // 10 out of 20 = 20 out of 40 = Band 5.5
      expect(IeltsFullMockService.rawCountToBand(10, 20)).toBe(5.5);
    });
  });

  describe('session persistence', () => {
    it('saves, loads, and clears active mock session', () => {
      expect(IeltsFullMockService.loadActiveSession()).toBeNull();

      const mockSession: FullMockSession = {
        examId: 'full-mock-1',
        stage: 'reading',
        startTime: Date.now(),
        elapsedSeconds: 300,
        answers: {
          listening: { '1': 'Jackson' },
          reading: { '1': '2' },
          writing: { task1: 'Intro...', task2: 'Essay...' },
          speaking: {
            part1Responses: ['Yes'],
            part2Speech: 'Speech...',
            part3Responses: ['Agree'],
          },
        },
      };

      IeltsFullMockService.saveSession(mockSession);
      const loaded = IeltsFullMockService.loadActiveSession();
      expect(loaded).toBeDefined();
      expect(loaded?.stage).toBe('reading');
      expect(loaded?.answers.listening['1']).toBe('Jackson');

      IeltsFullMockService.clearActiveSession();
      expect(IeltsFullMockService.loadActiveSession()).toBeNull();
    });
  });

  describe('certificate generation & registry', () => {
    it('builds authentic TRF certificate and looks it up by verification code', () => {
      const cert = IeltsFullMockService.buildTrfCertificate(
        'Anvar Alimov',
        7.5,
        7.0,
        6.5,
        7.0,
        {
          task1Score: 6.5,
          task2Score: 6.5,
          overallWritingBand: 6.5,
          feedback: 'Solid vocabulary.',
          taskAchievement: 6.5,
          coherenceCohesion: 6.5,
          lexicalResource: 7.0,
          grammaticalRange: 6.5,
          keyStrengths: ['Good structure'],
          priorityAreas: ['Prepositions'],
        },
        {
          overallSpeakingBand: 7.0,
          fluencyCoherence: 7.0,
          lexicalResource: 7.5,
          grammaticalRange: 6.5,
          pronunciation: 7.0,
          examinerNotes: 'Fluent delivery.',
          keyStrengths: ['Natural idioms'],
          priorityAreas: ['Complex syntax'],
        },
      );

      // (7.5 + 7.0 + 6.5 + 7.0) / 4 = 28 / 4 = 7.0
      expect(cert.scores.overall).toBe(7.0);
      expect(cert.candidateName).toBe('Anvar Alimov');
      expect(cert.verificationCode).toContain('IT-');
      expect(cert.scores.cefrLevel).toContain('C1');

      // Save to registry
      IeltsFullMockService.saveCertificate(cert);

      // Lookup
      const retrieved = IeltsFullMockService.getCertificateByCode(cert.verificationCode);
      expect(retrieved).toBeDefined();
      expect(retrieved?.candidateName).toBe('Anvar Alimov');
      expect(retrieved?.scores.overall).toBe(7.0);

      // Case-insensitive lookup
      const retrievedLower = IeltsFullMockService.getCertificateByCode(
        cert.verificationCode.toLowerCase(),
      );
      expect(retrievedLower).toBeDefined();
    });
  });
});
