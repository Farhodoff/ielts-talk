import { describe, it, expect } from 'vitest';
import {
  CURRICULUM_MANIFEST,
  getCurriculumLessonMetaById,
  getCurriculumManifestByLevel,
  getCurriculumManifestByLanguage,
} from '../curriculumManifest';
import {
  extractLevelFromLessonId,
  loadCurriculumLevel,
  loadCurriculumLessonById,
  getCurriculumLessonById,
  ALL_ENGLISH_LESSONS,
} from '../curriculumLessons';
import { LessonService } from '../../../services/LessonService';

describe('Curriculum Lazy-Loading Architecture & Manifest Index', () => {
  describe('Lightweight Manifest Metadata (~15 KB index)', () => {
    it('contains exactly 259 English lessons covering all 6 CEFR levels', () => {
      expect(CURRICULUM_MANIFEST).toHaveLength(259);

      const a1 = getCurriculumManifestByLevel('A1');
      const a2 = getCurriculumManifestByLevel('A2');
      const b1 = getCurriculumManifestByLevel('B1');
      const b2 = getCurriculumManifestByLevel('B2');
      const c1 = getCurriculumManifestByLevel('C1');
      const c2 = getCurriculumManifestByLevel('C2');

      expect(a1).toHaveLength(134);
      expect(a1.slice(0, 115).map(({ id }) => id)).toEqual([
        'en-a1-u1-l1',
        'en-a1-u1-be-questions',
        'en-a1-u1-present-continuous',
        'en-a1-u1-present-continuous-questions',
        'en-a1-u2-l3',
        'en-a1-u2-l4',
        'en-a1-u2-l5',
        'en-a1-u4-l5',
        'en-a1-u1-have-got',
        'en-a1-u1-was-were',
        'en-a1-u1-past-simple',
        'en-a1-u1-past-simple-questions-negatives',
        'en-a1-u1-past-continuous',
        'en-a1-u1-past-simple-vs-continuous',
        'en-a1-u1-present-perfect',
        'en-a1-u1-present-perfect-just-already-yet',
        'en-a1-u1-present-perfect-experience',
        'en-a1-u1-present-perfect-how-long',
        'en-a1-u1-for-since-ago',
        'en-a1-u1-present-perfect-vs-past-simple',
        'en-a1-u1-passive-present-past',
        'en-a1-u1-passive-continuous-perfect',
        'en-a1-u1-auxiliary-be-have-do',
        'en-a1-u1-regular-irregular-verbs',
        'en-a1-u1-used-to',
        'en-a1-u1-future-arrangements',
        'en-a1-u1-going-to',
        'en-a1-u1-will-decisions-offers',
        'en-a1-u1-will-predictions',
        'en-a1-u1-might',
        'en-a1-u1-can-could',
        'en-a1-u1-must-mustnt-neednt',
        'en-a1-u1-should',
        'en-a1-u1-have-to',
        'en-a1-u1-would-like',
        ...Array.from({ length: 79 }, (_, i) => `en-a1-u1-egi-${i + 36}`),
        'en-a1-u1-l2',
      ]);
      expect(a2).toHaveLength(25);
      expect(b1).toHaveLength(25);
      expect(b2).toHaveLength(30);
      expect(c1).toHaveLength(25);
      expect(c2).toHaveLength(20);
    });

    it('each manifest item contains complete required metadata and derived skill', () => {
      for (const item of CURRICULUM_MANIFEST) {
        expect(item.id).toMatch(/^en-[a-c][1-2]-/);
        expect(item.courseId).toBeTruthy();
        expect(item.unitId).toBeTruthy();
        expect(item.unitTitle).toBeTruthy();
        expect(item.language).toBe('en');
        expect(item.title).toBeTruthy();
        expect(item.description).toBeTruthy();
        expect(item.estimatedDurationMinutes).toBeGreaterThan(0);
        expect(item.stepCount).toBeGreaterThanOrEqual(2);
        expect(['grammar', 'vocabulary', 'reading', 'listening', 'speaking', 'writing']).toContain(
          item.skill,
        );
      }
    });

    it('retrieves single lesson metadata by ID without loading full content', () => {
      const meta = getCurriculumLessonMetaById('en-a1-u1-l1');
      expect(meta).toBeDefined();
      expect(meta?.title).toBe('Am / Is / Are');
      expect(meta?.level).toBe('A1');
      expect(meta?.skill).toBe('grammar');

      expect(getCurriculumLessonMetaById('non-existent')).toBeUndefined();
    });

    it('filters manifest by language correctly', () => {
      const enManifest = getCurriculumManifestByLanguage('en');
      expect(enManifest).toHaveLength(259);

      const jaManifest = getCurriculumManifestByLanguage('ja');
      expect(jaManifest).toHaveLength(0);
    });
  });

  describe('Level Extraction & Dynamic Routing', () => {
    it('accurately identifies CEFR level from lesson ID', () => {
      expect(extractLevelFromLessonId('en-a1-u1-l1')).toBe('A1');
      expect(extractLevelFromLessonId('en-a2-u2-l3')).toBe('A2');
      expect(extractLevelFromLessonId('en-b1-u3-l5')).toBe('B1');
      expect(extractLevelFromLessonId('en-b2-u1-l1')).toBe('B2');
      expect(extractLevelFromLessonId('en-c1-u4-l16')).toBe('C1');
      expect(extractLevelFromLessonId('en-c2-u4-l20')).toBe('C2');
      expect(extractLevelFromLessonId('invalid-random-id')).toBeNull();
    });
  });

  describe('On-Demand Dynamic Level Chunk Loading', () => {
    it('dynamically loads A1 curriculum chunk on demand with interactive steps', async () => {
      const a1Lessons = await loadCurriculumLevel('A1');
      expect(a1Lessons).toHaveLength(134);

      const firstLesson = a1Lessons[0];
      expect(firstLesson.id).toBe('en-a1-u1-l1');
      expect(firstLesson.steps.length).toBeGreaterThanOrEqual(2);
      expect(firstLesson.steps[0].learnData).toBeDefined();
      expect(firstLesson.steps[0].learnData?.explanation).toBeTruthy();
    });

    it('dynamically loads a specific lesson across chunks and caches it in memory', async () => {
      // Test C1 lesson loading on demand
      const c1Lesson = await loadCurriculumLessonById('en-c1-u1-l1');
      expect(c1Lesson).toBeDefined();
      expect(c1Lesson?.id).toBe('en-c1-u1-l1');
      expect(c1Lesson?.level).toBe('C1');
      expect(c1Lesson?.steps.length).toBeGreaterThanOrEqual(2);

      // Subsequent synchronous lookup must hit cache
      const cached = getCurriculumLessonById('en-c1-u1-l1');
      expect(cached).toBe(c1Lesson);
    });

    it('integrates seamlessly with LessonService async loaders', async () => {
      const loaded = await LessonService.loadLessonById('en-a2-u1-l1');
      expect(loaded).toBeDefined();
      expect(loaded?.id).toBe('en-a2-u1-l1');
      expect(loaded?.level).toBe('A2');

      // Sync getLessonById now succeeds because it is cached
      const syncResult = LessonService.getLessonById('en-a2-u1-l1');
      expect(syncResult).toBeDefined();
      expect(syncResult?.id).toBe('en-a2-u1-l1');
    });

    it('ALL_ENGLISH_LESSONS provides 259 manifest-backed lightweight lessons for metadata callers', () => {
      expect(ALL_ENGLISH_LESSONS).toHaveLength(259);
      ALL_ENGLISH_LESSONS.forEach((l) => {
        expect(l.id).toBeTruthy();
        expect(l.title).toBeTruthy();
        expect(l.level).toBeTruthy();
        expect(l.steps.length).toBeGreaterThanOrEqual(2);
      });
    });
  });
});
