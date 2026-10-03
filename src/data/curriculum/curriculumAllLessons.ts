import { Lesson } from '../../types/lesson';
import { ENGLISH_A1_LESSONS } from './englishA1';
import { ENGLISH_A2_LESSONS } from './englishA2';
import { ENGLISH_B1_LESSONS } from './englishB1';
import { ENGLISH_B2_LESSONS } from './englishB2';
import { ENGLISH_C1_LESSONS } from './englishC1';
import { ENGLISH_C2_LESSONS } from './englishC2';

/**
 * ALL_CURRICULUM_LESSONS
 * Full array of all 150 lessons across all 6 CEFR levels (A1 through C2).
 * Dedicated for comprehensive data quality audits, regression tests, and E2E verifications.
 * NOT to be imported by production runtime bundles to preserve lazy-loading benefits.
 */
export const ALL_CURRICULUM_LESSONS: Lesson[] = [
  ...ENGLISH_A1_LESSONS,
  ...ENGLISH_A2_LESSONS,
  ...ENGLISH_B1_LESSONS,
  ...ENGLISH_B2_LESSONS,
  ...ENGLISH_C1_LESSONS,
  ...ENGLISH_C2_LESSONS,
];
