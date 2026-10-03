import { CheckpointTest, CheckpointSkill } from '../data/ielts/checkpointTestsData';
import { safeLocalStorage } from '../utils/storage/safeLocalStorage';
import { MasteryEngine } from './MasteryEngine';

export interface CheckpointResult {
  id: string;
  checkpointId: string;
  title: string;
  candidateId: string;
  completedAt: string;
  score: number;
  totalQuestions: number;
  percentage: number;
  isPassed: boolean;
  badgeEarned?: string;
  xpEarned: number;
  skillBreakdown: Record<CheckpointSkill, { correct: number; total: number; percentage: number }>;
  weakTopics: string[];
  userAnswers: Record<string, number>;
}

const STORAGE_CHECKPOINTS_KEY = 'ielts_checkpoint_test_results';

export class CheckpointTestService {
  /**
   * Evaluate candidate's selected answers against checkpoint key
   */
  static evaluateAnswers(
    checkpoint: CheckpointTest,
    candidateId: string,
    answers: Record<string, number>,
  ): CheckpointResult {
    let score = 0;
    const weakTopics: string[] = [];

    const skillStats: Record<CheckpointSkill, { correct: number; total: number }> = {
      phonetics: { correct: 0, total: 0 },
      grammar: { correct: 0, total: 0 },
      vocabulary: { correct: 0, total: 0 },
      listening: { correct: 0, total: 0 },
      reading: { correct: 0, total: 0 },
    };

    checkpoint.questions.forEach((q) => {
      skillStats[q.skill].total++;
      const userSelected = answers[q.id];

      if (userSelected !== undefined && userSelected === q.correctAnswerIndex) {
        score++;
        skillStats[q.skill].correct++;
      } else {
        if (!weakTopics.includes(q.topic)) {
          weakTopics.push(q.topic);
        }
      }
    });

    const totalQuestions = checkpoint.questions.length || 20;
    const percentage = Math.round((score / totalQuestions) * 100);
    const isPassed = score >= checkpoint.passingScore;

    const skillBreakdown: Record<
      CheckpointSkill,
      { correct: number; total: number; percentage: number }
    > = {
      phonetics: {
        ...skillStats.phonetics,
        percentage: skillStats.phonetics.total
          ? Math.round((skillStats.phonetics.correct / skillStats.phonetics.total) * 100)
          : 0,
      },
      grammar: {
        ...skillStats.grammar,
        percentage: skillStats.grammar.total
          ? Math.round((skillStats.grammar.correct / skillStats.grammar.total) * 100)
          : 0,
      },
      vocabulary: {
        ...skillStats.vocabulary,
        percentage: skillStats.vocabulary.total
          ? Math.round((skillStats.vocabulary.correct / skillStats.vocabulary.total) * 100)
          : 0,
      },
      listening: {
        ...skillStats.listening,
        percentage: skillStats.listening.total
          ? Math.round((skillStats.listening.correct / skillStats.listening.total) * 100)
          : 0,
      },
      reading: {
        ...skillStats.reading,
        percentage: skillStats.reading.total
          ? Math.round((skillStats.reading.correct / skillStats.reading.total) * 100)
          : 0,
      },
    };

    const result: CheckpointResult = {
      id: `cp_res_${Date.now()}`,
      checkpointId: checkpoint.id,
      title: checkpoint.title,
      candidateId,
      completedAt: new Date().toISOString(),
      score,
      totalQuestions,
      percentage,
      isPassed,
      badgeEarned: isPassed ? checkpoint.badgeName : undefined,
      xpEarned: isPassed ? checkpoint.xpReward : Math.round(checkpoint.xpReward * 0.25),
      skillBreakdown,
      weakTopics,
      userAnswers: answers,
    };

    // Save result to persistence
    this.saveResult(result);

    // Record evidence to Mastery Engine if passed
    if (isPassed && candidateId) {
      MasteryEngine.recordEvidence(candidateId, 'en', {
        id: result.id,
        skill: 'grammar',
        score: percentage,
        timestamp: result.completedAt,
        details: `Passed Checkpoint: ${checkpoint.title} (${score}/${totalQuestions})`,
        type: 'performance',
      });
    }

    return result;
  }

  /**
   * Save result locally and update history
   */
  static saveResult(result: CheckpointResult): void {
    const all = this.getAllResults();
    // Keep highest score or most recent
    const existing = all[result.checkpointId];
    if (!existing || result.score >= existing.score) {
      all[result.checkpointId] = result;
      safeLocalStorage.setItem(STORAGE_CHECKPOINTS_KEY, JSON.stringify(all));
    }
  }

  /**
   * Get single checkpoint result
   */
  static getResult(checkpointId: string): CheckpointResult | null {
    const all = this.getAllResults();
    return all[checkpointId] || null;
  }

  /**
   * Get all checkpoint results map
   */
  static getAllResults(): Record<string, CheckpointResult> {
    const raw = safeLocalStorage.getItem(STORAGE_CHECKPOINTS_KEY);
    if (!raw) return {};
    try {
      return JSON.parse(raw);
    } catch {
      return {};
    }
  }

  /**
   * Check if a checkpoint is passed
   */
  static isCheckpointPassed(checkpointId: string): boolean {
    const res = this.getResult(checkpointId);
    return !!res && res.isPassed;
  }

  /**
   * Check if a roadmap stage is unlocked
   */
  static isStageUnlocked(stageId: number): boolean {
    if (stageId <= 1) return true;
    if (stageId === 2) return this.isCheckpointPassed('checkpoint_a1_foundation');
    if (stageId === 3) return this.isCheckpointPassed('checkpoint_a2_elementary');
    if (stageId === 4) return this.isCheckpointPassed('checkpoint_b1_pre_ielts');
    return false;
  }

  /**
   * Reset checkpoint results for testing
   */
  static resetResults(): void {
    safeLocalStorage.removeItem(STORAGE_CHECKPOINTS_KEY);
  }
}
