import { Lesson } from '../../types/lesson';
import {
  CURRICULUM_MANIFEST,
  LessonManifestItem,
  getCurriculumLessonMetaById,
} from './curriculumManifest';
import { SAMPLE_LESSONS } from './sampleCurriculum';

export type CefrLevel = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';

/**
 * Dynamic level loaders for true on-demand code splitting.
 * Vite/Rollup packages each level as an isolated chunk (e.g. curriculum-en-a1.js).
 * Only loaded when a user actually enters that level's lesson player.
 */
const LEVEL_LOADERS: Record<CefrLevel, () => Promise<{ [key: string]: Lesson[] }>> = {
  A1: () => import('./englishA1'),
  A2: () => import('./englishA2'),
  B1: () => import('./englishB1'),
  B2: () => import('./englishB2'),
  C1: () => import('./englishC1'),
  C2: () => import('./englishC2'),
};

// In-memory cache for dynamically loaded levels and lessons
const loadedLevelsCache = new Map<CefrLevel, Lesson[]>();
const loadedLessonsById = new Map<string, Lesson>();

/**
 * Convert lightweight manifest item into a standard Lesson structure for metadata-only callers
 * (avoids undefined errors when callers inspect .courseId, .unitId, .title, etc.)
 */
function createLightweightLesson(meta: LessonManifestItem): Lesson {
  return {
    id: meta.id,
    courseId: meta.courseId,
    unitId: meta.unitId,
    unitTitle: meta.unitTitle,
    language: meta.language,
    level: meta.level,
    lessonNumber: meta.lessonNumber,
    title: meta.title,
    description: meta.description,
    estimatedDurationMinutes: meta.estimatedDurationMinutes,
    icon: meta.icon,
    steps: Array.from({ length: meta.stepCount }, (_, idx) => ({
      id: `${meta.id}-step-${idx + 1}`,
      title: `${meta.title} (Step ${idx + 1})`,
      type: idx === 0 ? 'learn' : idx === meta.stepCount - 1 ? 'test' : 'practice',
      estimatedMinutes: Math.round(meta.estimatedDurationMinutes / meta.stepCount) || 3,
    })),
  };
}

/**
 * Extract CEFR level code from lesson ID (e.g. 'en-a1-u1-l1' -> 'A1')
 */
export function extractLevelFromLessonId(id: string): CefrLevel | null {
  const meta = getCurriculumLessonMetaById(id);
  if (meta) {
    const lvl = meta.level.toUpperCase() as CefrLevel;
    if (LEVEL_LOADERS[lvl]) return lvl;
  }
  const match = id.match(/^(?:en|ja)-([a-z0-9]+)/i);
  if (match) {
    const lvl = match[1].toUpperCase() as CefrLevel;
    if (LEVEL_LOADERS[lvl]) return lvl;
  }
  return null;
}

/**
 * Dynamically load all lessons for a specific CEFR level (A1, A2, B1, B2, C1, or C2)
 */
export async function loadCurriculumLevel(level: CefrLevel): Promise<Lesson[]> {
  const normalized = level.toUpperCase() as CefrLevel;
  if (loadedLevelsCache.has(normalized)) {
    return loadedLevelsCache.get(normalized)!;
  }

  const loader = LEVEL_LOADERS[normalized];
  if (!loader) {
    console.warn(`[CurriculumLessons] Unknown CEFR level loader: ${level}`);
    return [];
  }

  try {
    const mod = await loader();
    const lessons: Lesson[] = mod[`ENGLISH_${normalized}_LESSONS`] || Object.values(mod)[0] || [];
    loadedLevelsCache.set(normalized, lessons);
    for (const l of lessons) {
      loadedLessonsById.set(l.id, l);
    }
    return lessons;
  } catch (err) {
    console.error(`[CurriculumLessons] Failed to lazy-load level ${level}:`, err);
    return [];
  }
}

/**
 * Asynchronously load a single curriculum lesson by ID.
 * Identifies the exact level, lazy-loads only that level's chunk, and returns the full lesson.
 */
export async function loadCurriculumLessonById(id: string): Promise<Lesson | undefined> {
  // 1. Check in-memory cache
  if (loadedLessonsById.has(id)) {
    return loadedLessonsById.get(id);
  }

  // 2. Check legacy sample lessons
  const legacySample = SAMPLE_LESSONS.find((l) => l.id === id);
  if (legacySample) {
    return legacySample;
  }

  // 3. Extract level and load chunk
  const level = extractLevelFromLessonId(id);
  if (level) {
    await loadCurriculumLevel(level);
    return loadedLessonsById.get(id);
  }

  return undefined;
}

/**
 * Synchronous get lesson by ID.
 * Returns cached lesson, legacy sample lesson, or undefined.
 */
export function getCurriculumLessonById(id: string): Lesson | undefined {
  if (loadedLessonsById.has(id)) {
    return loadedLessonsById.get(id);
  }
  return SAMPLE_LESSONS.find((l) => l.id === id);
}

/**
 * Lightweight representation of all English curriculum lessons.
 * Backed by lightweight manifest (15KB) instead of monolithic 1.5MB steps.
 */
export const ALL_ENGLISH_LESSONS: Lesson[] = CURRICULUM_MANIFEST.map(createLightweightLesson);

/**
 * Backwards-compatible manifest-backed list of all curriculum lessons.
 */
export const ALL_CURRICULUM_LESSONS: Lesson[] = ALL_ENGLISH_LESSONS;

export function getCurriculumLessonsByLanguage(_language: 'en' | 'ja'): Lesson[] {
  return ALL_ENGLISH_LESSONS;
}

export function getCurriculumLessonsByLevel(_language: 'en' | 'ja', level: string): Lesson[] {
  const norm = level.toUpperCase();
  return ALL_ENGLISH_LESSONS.filter((l) => l.level.toUpperCase() === norm);
}

export {
  CURRICULUM_MANIFEST,
  getCurriculumLessonMetaById,
  getCurriculumManifestByLanguage,
  getCurriculumManifestByLevel,
} from './curriculumManifest';
