import { describe, it, expect, beforeEach } from 'vitest';
import { CheckpointTestService } from '../CheckpointTestService';
import {
  CHECKPOINT_TESTS,
  getCheckpointById,
  getCheckpointForStage,
} from '../../data/ielts/checkpointTestsData';

describe('CheckpointTestService & Checkpoint Tests Data', () => {
  beforeEach(() => {
    localStorage.clear();
    CheckpointTestService.resetResults();
  });

  describe('Data Integrity', () => {
    it('contains 3 full benchmark checkpoints', () => {
      expect(CHECKPOINT_TESTS).toHaveLength(3);
      expect(CHECKPOINT_TESTS.map((c) => c.id)).toEqual([
        'checkpoint_a1_foundation',
        'checkpoint_a2_elementary',
        'checkpoint_b1_pre_ielts',
      ]);
    });

    it('each checkpoint has exactly 20 questions with 4 options and valid answer indices', () => {
      CHECKPOINT_TESTS.forEach((cp) => {
        expect(cp.questions).toHaveLength(20);
        expect(cp.passingScore).toBe(16); // 80% passing threshold

        cp.questions.forEach((q) => {
          expect(q.id).toBeDefined();
          expect(q.prompt.length).toBeGreaterThan(5);
          expect(q.options.length).toBeGreaterThanOrEqual(3);
          expect(q.correctAnswerIndex).toBeGreaterThanOrEqual(0);
          expect(q.correctAnswerIndex).toBeLessThan(q.options.length);
          expect(q.explanation.length).toBeGreaterThan(5);
          expect(['phonetics', 'grammar', 'vocabulary', 'listening', 'reading']).toContain(q.skill);
        });
      });
    });

    it('retrieves checkpoint by stage correctly', () => {
      expect(getCheckpointForStage(1)?.id).toBe('checkpoint_a1_foundation');
      expect(getCheckpointForStage(2)?.id).toBe('checkpoint_a2_elementary');
      expect(getCheckpointForStage(3)?.id).toBe('checkpoint_b1_pre_ielts');
      expect(getCheckpointForStage(4)).toBeUndefined();
    });

    it('retrieves checkpoint by ID correctly', () => {
      expect(getCheckpointById('checkpoint_a1_foundation')?.stageId).toBe(1);
      expect(getCheckpointById('non_existent')).toBeUndefined();
    });
  });

  describe('evaluateAnswers', () => {
    const a1Checkpoint = CHECKPOINT_TESTS[0];

    it('evaluates a perfect score (20/20 = 100%)', () => {
      const perfectAnswers: Record<string, number> = {};
      a1Checkpoint.questions.forEach((q) => {
        perfectAnswers[q.id] = q.correctAnswerIndex;
      });

      const res = CheckpointTestService.evaluateAnswers(a1Checkpoint, 'user_1', perfectAnswers);

      expect(res.score).toBe(20);
      expect(res.totalQuestions).toBe(20);
      expect(res.percentage).toBe(100);
      expect(res.isPassed).toBe(true);
      expect(res.badgeEarned).toBe(a1Checkpoint.badgeName);
      expect(res.xpEarned).toBe(a1Checkpoint.xpReward);
      expect(res.weakTopics).toHaveLength(0);
      expect(res.skillBreakdown.phonetics.percentage).toBe(100);
      expect(res.skillBreakdown.grammar.percentage).toBe(100);
    });

    it('evaluates threshold passing score (16/20 = 80%)', () => {
      const answers: Record<string, number> = {};
      a1Checkpoint.questions.forEach((q, idx) => {
        // Answer correctly for first 16, incorrectly for last 4
        answers[q.id] = idx < 16 ? q.correctAnswerIndex : (q.correctAnswerIndex + 1) % 4;
      });

      const res = CheckpointTestService.evaluateAnswers(a1Checkpoint, 'user_1', answers);

      expect(res.score).toBe(16);
      expect(res.percentage).toBe(80);
      expect(res.isPassed).toBe(true);
      expect(res.badgeEarned).toBe(a1Checkpoint.badgeName);
      expect(res.xpEarned).toBe(a1Checkpoint.xpReward);
      expect(res.weakTopics.length).toBeGreaterThan(0);
    });

    it('evaluates failing score (15/20 = 75%)', () => {
      const answers: Record<string, number> = {};
      a1Checkpoint.questions.forEach((q, idx) => {
        // Answer correctly for 15, incorrectly for 5
        answers[q.id] = idx < 15 ? q.correctAnswerIndex : (q.correctAnswerIndex + 1) % 4;
      });

      const res = CheckpointTestService.evaluateAnswers(a1Checkpoint, 'user_1', answers);

      expect(res.score).toBe(15);
      expect(res.percentage).toBe(75);
      expect(res.isPassed).toBe(false);
      expect(res.badgeEarned).toBeUndefined();
      expect(res.xpEarned).toBe(Math.round(a1Checkpoint.xpReward * 0.25));
    });
  });

  describe('Stage Progression & Unlocking', () => {
    it('Stage 1 is unlocked by default', () => {
      expect(CheckpointTestService.isStageUnlocked(1)).toBe(true);
    });

    it('Stage 2 is locked until A1 Foundation is passed', () => {
      expect(CheckpointTestService.isStageUnlocked(2)).toBe(false);

      // Pass A1
      const a1Cp = CHECKPOINT_TESTS[0];
      const answers: Record<string, number> = {};
      a1Cp.questions.forEach((q) => {
        answers[q.id] = q.correctAnswerIndex;
      });
      CheckpointTestService.evaluateAnswers(a1Cp, 'user_test', answers);

      expect(CheckpointTestService.isCheckpointPassed('checkpoint_a1_foundation')).toBe(true);
      expect(CheckpointTestService.isStageUnlocked(2)).toBe(true);
      expect(CheckpointTestService.isStageUnlocked(3)).toBe(false);
    });

    it('Stage 3 is locked until A2 Elementary is passed', () => {
      expect(CheckpointTestService.isStageUnlocked(3)).toBe(false);

      // Pass A2
      const a2Cp = CHECKPOINT_TESTS[1];
      const answers: Record<string, number> = {};
      a2Cp.questions.forEach((q) => {
        answers[q.id] = q.correctAnswerIndex;
      });
      CheckpointTestService.evaluateAnswers(a2Cp, 'user_test', answers);

      expect(CheckpointTestService.isCheckpointPassed('checkpoint_a2_elementary')).toBe(true);
      expect(CheckpointTestService.isStageUnlocked(3)).toBe(true);
    });

    it('Stage 4 is locked until B1 Pre-IELTS is passed', () => {
      expect(CheckpointTestService.isStageUnlocked(4)).toBe(false);

      // Pass B1
      const b1Cp = CHECKPOINT_TESTS[2];
      const answers: Record<string, number> = {};
      b1Cp.questions.forEach((q) => {
        answers[q.id] = q.correctAnswerIndex;
      });
      CheckpointTestService.evaluateAnswers(b1Cp, 'user_test', answers);

      expect(CheckpointTestService.isCheckpointPassed('checkpoint_b1_pre_ielts')).toBe(true);
      expect(CheckpointTestService.isStageUnlocked(4)).toBe(true);
    });
  });
});
