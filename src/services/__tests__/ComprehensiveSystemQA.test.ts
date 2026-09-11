import { describe, it, expect } from 'vitest';
import { PRESET_DECKS } from '../../data/presetDecks';
import { IELTS_GRAMMAR_DATABASE } from '../../data/ielts/ielts_grammar_data';
import { CurriculumLessonResolver } from '../CurriculumLessonResolver';
import {
  mapIeltsBandToCefr,
  getCurriculumConfigForBand,
  LEVEL_CONFIGS,
} from '../../utils/curriculum/ieltsLevelCalibrator';

describe('Comprehensive System QA Verification Suite', () => {
  describe('1. Preset Decks & Flashcard Quality Assurance', () => {
    it('verifies all preset decks exist and have required metadata', () => {
      expect(PRESET_DECKS.length).toBeGreaterThanOrEqual(9);
      for (const deck of PRESET_DECKS) {
        expect(deck.id).toBeTruthy();
        expect(deck.title).toBeTruthy();
        expect(deck.description).toBeTruthy();
        expect(typeof deck.cardCount).toBe('number');
        expect(deck.cardCount).toBeGreaterThan(0);
        expect(typeof deck.loadCards).toBe('function');
      }
    });

    it('loads cards from all 4 Oxford 3000 decks and validates card schema', async () => {
      const oxfordDeckIds = [
        'deck_oxford_3000_a1',
        'deck_oxford_3000_a2',
        'deck_oxford_3000_b1',
        'deck_oxford_3000_b2',
      ];

      for (const id of oxfordDeckIds) {
        const deck = PRESET_DECKS.find((d) => d.id === id);
        expect(deck, `Deck ${id} should exist in PRESET_DECKS`).toBeDefined();

        const cards = await deck!.loadCards();
        expect(cards.length, `Deck ${id} should have cards`).toBeGreaterThan(500);

        for (let i = 0; i < cards.length; i++) {
          const card = cards[i];
          expect(card.front, `Card #${i} in ${id} must have front`).toBeTruthy();
          expect(card.back, `Card #${i} in ${id} must have back`).toBeTruthy();

          // Ensure no placeholder or untranslated boilerplate
          expect(
            card.back.trim().toLowerCase(),
            `Card #${i} (${card.front}) must not be a bare placeholder`,
          ).not.toBe("ma'nosi");
          expect(
            card.back.trim().toLowerCase(),
            `Card #${i} (${card.front}) must not be n. ma'nosi`,
          ).not.toBe("n. ma'nosi");
        }
      }
    });
  });

  describe('2. Murphy IELTS Grammar Database Quality Assurance', () => {
    it('verifies all grammar units have complete pedagogical data', () => {
      expect(IELTS_GRAMMAR_DATABASE.length).toBeGreaterThan(30);

      const seenIds = new Set<string>();

      for (const topic of IELTS_GRAMMAR_DATABASE) {
        // Unique ID
        expect(seenIds.has(topic.id), `Duplicate topic ID: ${topic.id}`).toBe(false);
        seenIds.add(topic.id);

        // Core fields
        expect(topic.title).toBeTruthy();
        expect(topic.level).toMatch(/^(A1|A2|B1|B2|C1|A1-A2|B1-B2)$/);
        expect(topic.category).toBeTruthy();
        expect(topic.structure, `Structure for ${topic.id} missing`).toBeTruthy();
        expect(topic.uzbekMeaning, `Uzbek meaning for ${topic.id} missing`).toBeTruthy();
        expect(topic.explanation, `Explanation for ${topic.id} missing`).toBeTruthy();
        expect(topic.ieltsRelevance, `IELTS relevance for ${topic.id} missing`).toBeTruthy();

        // Academic examples
        expect(topic.academicExamples.length).toBeGreaterThan(0);
        for (const ex of topic.academicExamples) {
          expect(ex.sentence).toBeTruthy();
          expect(ex.translation).toBeTruthy();
          expect(['Task 1', 'Task 2', 'Speaking']).toContain(ex.context);
        }

        // Common mistakes
        expect(topic.commonMistakes.length).toBeGreaterThan(0);
        for (const cm of topic.commonMistakes) {
          expect(cm.incorrect).toBeTruthy();
          expect(cm.correct).toBeTruthy();
          expect(cm.explanation).toBeTruthy();
        }

        // Quiz questions
        expect(topic.quizQuestions.length).toBeGreaterThan(0);
        for (const q of topic.quizQuestions) {
          expect(q.question).toBeTruthy();
          expect(q.options.length).toBeGreaterThanOrEqual(3);
          expect(q.options).toContain(q.correctAnswer);
          expect(q.explanation).toBeTruthy();
        }
      }
    });
  });

  describe('3. Curriculum & Smart Level Routing QA', () => {
    it('accurately resolves Oxford 3000 parts 1 through 7', () => {
      for (const level of ['a1', 'a2', 'b1', 'b2']) {
        for (let p = 1; p <= 7; p++) {
          const res = CurriculumLessonResolver.resolveLesson(`deck_oxford_3000_${level}_part_${p}`);
          expect(res.isAvailable).toBe(true);
          expect(res.sourceType).toBe('vocabulary');
          expect(res.route).toBe(`/study-mode?deck=deck_oxford_3000_${level}&part=${p}`);
          expect(res.level).toBe(level.toUpperCase());
        }
      }
    });

    it('maps all IELTS band scores reliably to CEFR tiers', () => {
      const expectations: [string, string][] = [
        ['0.0', 'A1'],
        ['2.5', 'A1'],
        ['3.5', 'A1'],
        ['4.0', 'A2'],
        ['4.5', 'A2'],
        ['5.0', 'A2'], // Core requirement
        ['5.5', 'B1'],
        ['6.0', 'B1'],
        ['6.5', 'B2'],
        ['7.0', 'B2'],
        ['7.5', 'B2'],
        ['8.0', 'C1'],
        ['8.5', 'C1'],
        ['9.0', 'C2'],
      ];

      for (const [band, expectedCefr] of expectations) {
        expect(mapIeltsBandToCefr(band)).toBe(expectedCefr);
      }
    });

    it('checks daily dosage quotas across all CEFR configs', () => {
      const levels = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'] as const;
      for (const lvl of levels) {
        const conf = LEVEL_CONFIGS[lvl];
        expect(conf.dailyDosage.skillsTasksPerDay).toBeGreaterThanOrEqual(1);
      }
    });

    it('retrieves curriculum config for band 5.0 and confirms Oxford A2 deck and quotas', () => {
      const config = getCurriculumConfigForBand('5.0');
      expect(config.cefr).toBe('A2');
      expect(config.oxfordDeckId).toBe('deck_oxford_3000_a2');
      expect(config.dailyDosage.vocabWordsPerDay).toBe(25);
      expect(config.dailyDosage.grammarUnitsPerDay).toBe(1);
    });
  });
});
