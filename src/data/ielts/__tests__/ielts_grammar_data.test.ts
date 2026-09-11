import { describe, it, expect } from 'vitest';
import { IELTS_GRAMMAR_DATABASE } from '../ielts_grammar_data';

describe('IELTS Grammar Database Quality & Depth', () => {
  it('contains all 76 essential grammar units across A1 to C1', () => {
    expect(IELTS_GRAMMAR_DATABASE.length).toBe(76);
  });

  it('guarantees that every single topic has at least 10 high-quality quiz questions', () => {
    for (const topic of IELTS_GRAMMAR_DATABASE) {
      expect(
        topic.quizQuestions.length,
        `Topic "${topic.id}" (${topic.title}) must have >= 10 questions but has ${topic.quizQuestions.length}`,
      ).toBeGreaterThanOrEqual(10);
    }
  });

  it('has zero duplicate questions within any topic', () => {
    for (const topic of IELTS_GRAMMAR_DATABASE) {
      const seen = new Set<string>();
      for (const q of topic.quizQuestions) {
        const normalized = q.question.toLowerCase().trim();
        expect(
          seen.has(normalized),
          `Topic "${topic.id}" has duplicate question: "${q.question}"`,
        ).toBe(false);
        seen.add(normalized);
      }
    }
  });

  it('ensures each question has 4 distinct options and valid correct answer', () => {
    for (const topic of IELTS_GRAMMAR_DATABASE) {
      for (const q of topic.quizQuestions) {
        expect(q.options.length).toBe(4);
        expect(q.options).toContain(q.correctAnswer);
        const uniqueOptions = new Set(q.options);
        expect(uniqueOptions.size).toBe(4);
        expect(q.explanation).toBeTruthy();
      }
    }
  });
});
