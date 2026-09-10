import { describe, it, expect } from 'vitest';
import { getLevelPedagogicalDirectives } from '../PersonalLearningPlanEngine';

describe('Level Pedagogical Blueprints & Expanded Content', () => {
  it('provides comprehensive directives for IELTS and General English', () => {
    const ieltsDirectives = getLevelPedagogicalDirectives('en', 'ielts', '7.0');
    expect(ieltsDirectives).toContain('IELTS TARGET DIRECTIVES');
    expect(ieltsDirectives).toContain('Speaking: Part 1 fluency');
    expect(ieltsDirectives).toContain('Writing: Task 1 academic report');

    const generalEnDirectives = getLevelPedagogicalDirectives('en', 'general_en', 'B2');
    expect(generalEnDirectives).toContain('GENERAL ENGLISH DIRECTIVES');
  });
});
