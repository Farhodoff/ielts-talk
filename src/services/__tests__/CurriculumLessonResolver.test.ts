import { describe, it, expect } from 'vitest';
import { CurriculumLessonResolver } from '../CurriculumLessonResolver';
import { ALL_CURRICULUM_LESSONS } from '../../data/curriculum/curriculumLessons';

describe('CurriculumLessonResolver Unit Tests', () => {
    describe('Real curriculum resolution (Phase 19)', () => {
        it('1. resolves every real curriculum lesson to the lesson player', () => {
            for (const lesson of ALL_CURRICULUM_LESSONS) {
                const resolved = CurriculumLessonResolver.resolveLesson(lesson.id, lesson.language);
                expect(resolved.sourceType).toBe('lesson_player');
                expect(resolved.route).toBe(`/lesson/${lesson.id}`);
                expect(resolved.language).toBe(lesson.language);
                expect(resolved.level).toBe(lesson.level);
                expect(resolved.isAvailable).toBe(true);
                expect(resolved.title).toBeTruthy();
            }
        });

        it('2. no duplicate lesson IDs in the real registry', () => {
            const ids = ALL_CURRICULUM_LESSONS.map(l => l.id);
            expect(new Set(ids).size).toBe(ids.length);
        });

        it('3. representative English lessons resolve with real titles', () => {
            const a1 = CurriculumLessonResolver.resolveLesson('en-a1-u1-l1', 'en');
            expect(a1.route).toBe('/lesson/en-a1-u1-l1');
            expect(a1.level).toBe('A1');
            expect(a1.isAvailable).toBe(true);

            const b1 = CurriculumLessonResolver.resolveLesson('en-b1-u1-l2', 'en');
            expect(b1.route).toBe('/lesson/en-b1-u1-l2');
            expect(b1.title).toBe('Present Perfect vs Past Simple');
        });

        it('4. representative advanced English lessons resolve with real titles', () => {
            const b2 = CurriculumLessonResolver.resolveLesson('en-b2-u1-l1', 'en');
            expect(b2.route).toBe('/lesson/en-b2-u1-l1');
            expect(b2.level).toBe('B2');
            expect(b2.isAvailable).toBe(true);
            expect(b2.title).toContain('Negative Inversion');
        });

        it('5. English lesson maintains language and level metadata', () => {
            const en = CurriculumLessonResolver.resolveLesson('en-a1-u1-l1', 'en');
            expect(en.language).toBe('en');
            expect(en.level).toBe('A1');
        });

        it('6. provides safe fallback for unregistered IDs without crashing', () => {
            const resolved = CurriculumLessonResolver.resolveLesson('unknown-id-xyz', 'en');
            expect(resolved.isAvailable).toBe(false);
            expect(resolved.route).toBe('/ielts');
        });
    });
});
