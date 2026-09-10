import { describe, it, expect } from 'vitest';
import { CurriculumService } from '../CurriculumService';

describe('CurriculumService Unit Tests', () => {
    it('1. should return complete English curriculum with A1 to C2 levels', () => {
        const course = CurriculumService.getEnglishCurriculum();

        expect(course.language).toBe('en');
        expect(course.levels.length).toBe(6);
        expect(course.levels.map(l => l.code)).toEqual(['A1', 'A2', 'B1', 'B2', 'C1', 'C2']);
    });

    it('2. should enforce correct sequential ordering of units and lessons', () => {
        const course = CurriculumService.getEnglishCurriculum();

        for (const level of course.levels) {
            expect(level.order).toBeGreaterThan(0);
            for (const unit of level.units) {
                expect(unit.order).toBeGreaterThan(0);
                for (const lesson of unit.lessons) {
                    expect(lesson.order).toBeGreaterThan(0);
                    expect(lesson.route).toBeDefined();
                }
            }
        }
    });

    it('3. should resolve English course for platform', () => {
        const enCourse = CurriculumService.getCourse('en');
        const fallbackCourse = CurriculumService.getCourse('ja');

        expect(enCourse.language).toBe('en');
        expect(fallbackCourse.language).toBe('en');
    });
});
