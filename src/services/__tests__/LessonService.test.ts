import { describe, it, expect, beforeEach, vi } from 'vitest';
import { LessonService } from '../LessonService';

describe('LessonService', () => {
    beforeEach(() => {
        localStorage.clear();
        vi.clearAllMocks();
    });

    it('retrieves valid lesson by ID', () => {
        const enLesson = LessonService.getLessonById('en-b2-u1-l1');
        expect(enLesson).toBeDefined();
        expect(enLesson?.language).toBe('en');
        expect(enLesson?.level).toBe('B2');
        expect(enLesson?.steps.length).toBe(3);

        const a1Lesson = LessonService.getLessonById('en-a1-u1-l1');
        expect(a1Lesson).toBeDefined();
        expect(a1Lesson?.language).toBe('en');
        expect(a1Lesson?.level).toBe('A1');
    });

    it('returns null for non-existent lesson ID', () => {
        const invalidLesson = LessonService.getLessonById('non-existent-id-999');
        expect(invalidLesson).toBeNull();
    });

    it('filters lessons by language track correctly', () => {
        const enLessons = LessonService.getLessonsForLanguage('en');
        expect(enLessons.length).toBeGreaterThan(0);
        enLessons.forEach(l => expect(l.language).toBe('en'));
    });

    it('retrieves default starting lesson for language and level', () => {
        const defaultA1 = LessonService.getDefaultLessonForLanguage('en', 'A1');
        expect(defaultA1?.id).toBe('en-a1-u1-l1');

        const defaultEn = LessonService.getDefaultLessonForLanguage('en', 'B2');
        expect(defaultEn?.id).toBe('en-b2-u1-l1');
    });

    it('validates lesson step types and structured payload integrity', () => {
        const lesson = LessonService.getLessonById('en-b2-u1-l1')!;
        expect(lesson.steps[0].type).toBe('learn');
        expect(lesson.steps[0].learnData?.explanation).toBeTruthy();
        expect(lesson.steps[0].learnData?.vocabulary?.length).toBeGreaterThan(0);

        expect(lesson.steps[1].type).toBe('practice');
        expect(lesson.steps[1].practiceData?.exercises.length).toBeGreaterThan(0);

        expect(lesson.steps[2].type).toBe('test');
        expect(lesson.steps[2].testData?.questions.length).toBeGreaterThan(0);
        expect(lesson.steps[2].testData?.passingScorePercentage).toBe(75);
    });

    it('persists and retrieves user lesson progress', async () => {
        const userId = 'test-user-123';
        const progress = {
            lessonId: 'ja-n3-u1-l1',
            userId,
            currentStepIndex: 1,
            completedStepIds: ['ja-n3-u1-l1-s1'],
            isCompleted: false,
            lastAttemptedAt: new Date().toISOString()
        };

        await LessonService.saveLessonProgress(userId, progress);

        const loaded = LessonService.getLessonProgress(userId, 'ja-n3-u1-l1');
        expect(loaded).toBeDefined();
        expect(loaded?.currentStepIndex).toBe(1);
        expect(loaded?.completedStepIds).toContain('ja-n3-u1-l1-s1');
        expect(loaded?.isCompleted).toBe(false);
    });

    it('marks lesson as completed with quiz score', async () => {
        const userId = 'test-user-456';
        const quizScore = { score: 4, total: 4, percentage: 100 };

        const result = await LessonService.completeLesson(userId, 'ja-n3-u1-l1', quizScore);
        expect(result.isCompleted).toBe(true);
        expect(result.quizScore).toEqual(quizScore);
        expect(result.completedAt).toBeDefined();

        const stored = LessonService.getLessonProgress(userId, 'ja-n3-u1-l1');
        expect(stored?.isCompleted).toBe(true);
        expect(stored?.quizScore?.percentage).toBe(100);
    });
});
