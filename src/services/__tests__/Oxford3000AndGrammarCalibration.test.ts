import { describe, it, expect } from 'vitest';
import {
  mapIeltsBandToCefr,
  getCurriculumConfigForBand,
  LEVEL_CONFIGS,
} from '../../utils/curriculum/ieltsLevelCalibrator';
import { CurriculumLessonResolver } from '../CurriculumLessonResolver';
import { PRESET_DECKS } from '../../data/presetDecks';

describe('Oxford 3000 and IELTS Level Calibration Suite', () => {
  describe('ieltsLevelCalibrator', () => {
    it('accurately maps IELTS 5.0 to CEFR A2', () => {
      expect(mapIeltsBandToCefr('5.0')).toBe('A2');
      expect(mapIeltsBandToCefr('4.5')).toBe('A2');
      expect(mapIeltsBandToCefr('4.0')).toBe('A2');
    });

    it('maps higher and lower IELTS bands to their respective CEFR tiers', () => {
      expect(mapIeltsBandToCefr('3.5')).toBe('A1');
      expect(mapIeltsBandToCefr('5.5')).toBe('B1');
      expect(mapIeltsBandToCefr('6.5')).toBe('B2');
      expect(mapIeltsBandToCefr('8.0')).toBe('C1');
      expect(mapIeltsBandToCefr('9.0')).toBe('C2');
    });

    it('returns calibrated curriculum config with Oxford A2 deck and daily dosage for 5.0', () => {
      const config = getCurriculumConfigForBand('5.0');
      expect(config.cefr).toBe('A2');
      expect(config.oxfordDeckId).toBe('deck_oxford_3000_a2');
      expect(config.dailyDosage.vocabWordsPerDay).toBe(25);
      expect(config.dailyDosage.grammarUnitsPerDay).toBe(1);
    });

    it('all 4 primary CEFR levels in calibration map specify valid Oxford 3000 deck IDs', () => {
      const levels = ['A1', 'A2', 'B1', 'B2'] as const;
      levels.forEach((lvl) => {
        const item = LEVEL_CONFIGS[lvl];
        expect(item.oxfordDeckId).toBe(`deck_oxford_3000_${lvl.toLowerCase()}`);
        expect(item.dailyDosage.vocabWordsPerDay).toBeGreaterThanOrEqual(20);
      });
    });
  });

  describe('Preset Decks Registration', () => {
    it('contains all 4 Oxford 3000 preset decks', () => {
      const a1Deck = PRESET_DECKS.find((d) => d.id === 'deck_oxford_3000_a1');
      const a2Deck = PRESET_DECKS.find((d) => d.id === 'deck_oxford_3000_a2');
      const b1Deck = PRESET_DECKS.find((d) => d.id === 'deck_oxford_3000_b1');
      const b2Deck = PRESET_DECKS.find((d) => d.id === 'deck_oxford_3000_b2');

      expect(a1Deck).toBeDefined();
      expect(a2Deck).toBeDefined();
      expect(b1Deck).toBeDefined();
      expect(b2Deck).toBeDefined();

      expect(a1Deck?.level).toBe('A1');
      expect(a2Deck?.level).toBe('A2');
      expect(b1Deck?.level).toBe('B1');
      expect(b2Deck?.level).toBe('B2');
    });

    it('loads Oxford 3000 A2 cards asynchronously without placeholder texts', async () => {
      const a2Deck = PRESET_DECKS.find((d) => d.id === 'deck_oxford_3000_a2');
      expect(a2Deck).toBeDefined();
      const cards = await a2Deck!.loadCards();
      expect(cards.length).toBeGreaterThan(800);

      // Verify no 'ma\'nosi' placeholder exists
      const placeholderCard = cards.find(
        (c) => c.back.toLowerCase() === "ma'nosi" || c.back.includes("n. ma'nosi"),
      );
      expect(placeholderCard).toBeUndefined();

      // Check first card structure
      const first = cards[0];
      expect(first.front).toBeTruthy();
      expect(first.back).toBeTruthy();
    });
  });

  describe('CurriculumLessonResolver Oxford & Grammar Routing', () => {
    it('resolves deck_oxford_3000_a2_part_1 to /study-mode?deck=deck_oxford_3000_a2&part=1', () => {
      const res = CurriculumLessonResolver.resolveLesson('deck_oxford_3000_a2_part_1');
      expect(res.isAvailable).toBe(true);
      expect(res.sourceType).toBe('vocabulary');
      expect(res.route).toBe('/study-mode?deck=deck_oxford_3000_a2&part=1');
      expect(res.level).toBe('A2');
      expect(res.skill).toBe('vocabulary');
    });

    it('resolves deck_oxford_3000_b1_part_3 to /study-mode?deck=deck_oxford_3000_b1&part=3', () => {
      const res = CurriculumLessonResolver.resolveLesson('deck_oxford_3000_b1_part_3');
      expect(res.isAvailable).toBe(true);
      expect(res.route).toBe('/study-mode?deck=deck_oxford_3000_b1&part=3');
      expect(res.level).toBe('B1');
    });

    it('resolves Murphy grammar units to /ielts?tab=grammar&topic=...', () => {
      const res = CurriculumLessonResolver.resolveLesson('murphy_u01_am_is_are');
      expect(res.isAvailable).toBe(true);
      expect(res.sourceType).toBe('grammar');
      expect(res.route).toBe('/ielts?tab=grammar&topic=murphy_u01_am_is_are');
      expect(res.skill).toBe('grammar');
    });
  });
});
