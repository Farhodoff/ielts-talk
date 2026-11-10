import { describe, it, expect } from 'vitest';
import { CurriculumService } from '../CurriculumService';

describe('CurriculumService Unit Tests', () => {
  it('1. should return complete English curriculum with A1 to C2 levels', () => {
    const course = CurriculumService.getEnglishCurriculum();

    expect(course.language).toBe('en');
    expect(course.levels.length).toBe(6);
    expect(course.levels.map((l) => l.code)).toEqual(['A1', 'A2', 'B1', 'B2', 'C1', 'C2']);
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

  it('links all 114 grammar lessons before the first supplementary lesson', () => {
    const [a1] = CurriculumService.getEnglishCurriculum().levels;
    const { lessons } = a1.units[0];

    expect(lessons.slice(0, 114).map((lesson) => lesson.order)).toEqual(
      Array.from({ length: 114 }, (_, index) => index + 1),
    );
    expect(lessons[113].id).toBe('en-a1-u1-egi-114');
    for (const [index, lesson] of lessons.slice(1, 115).entries()) {
      expect(lesson.prerequisites).toEqual([lessons[index].id]);
    }
  });

  it('3. should resolve English course for platform', () => {
    const enCourse = CurriculumService.getCourse('en');
    const fallbackCourse = CurriculumService.getCourse('ja');

    expect(enCourse.language).toBe('en');
    expect(fallbackCourse.language).toBe('en');
  });
});
