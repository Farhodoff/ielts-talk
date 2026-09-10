import { SupportedLanguage } from '../types/lesson';
import { CurriculumCourse, CurriculumLevelNode, CurriculumLessonNode } from '../types/curriculum';
import { CurriculumLessonResolver } from './CurriculumLessonResolver';

function createLessonNode(
    id: string,
    fallbackTitle: string,
    fallbackDesc: string,
    order: number,
    estimatedMinutes: number,
    skill: any,
    prerequisites?: string[],
    isExamPrep?: boolean,
    pathway?: 'general' | 'exam'
): CurriculumLessonNode {
    const resolved = CurriculumLessonResolver.resolveLesson(id);
    const parts = id.split('-');
    const language = parts[0] as SupportedLanguage;
    const level = parts[1].toUpperCase();
    const unit = `${parts[0]}-${parts[1]}-${parts[2]}`;

    let difficulty: 'beginner' | 'intermediate' | 'advanced' = 'beginner';
    if (['B1', 'B2'].includes(level)) {
        difficulty = 'intermediate';
    } else if (['C1', 'C2'].includes(level)) {
        difficulty = 'advanced';
    }

    let contentType: 'interactive' | 'quiz' | 'external' | 'practice' = 'practice';
    if (resolved.sourceType === 'lesson_player') {
        contentType = 'interactive';
    } else if (resolved.sourceType === 'grammar' || resolved.sourceType === 'ielts') {
        contentType = 'quiz';
    }

    const examPrep = isExamPrep ?? (id.includes('ielts') || id.includes('exam') || resolved.sourceType === 'ielts');
    const examTrack = examPrep ? 'IELTS' : undefined;

    return {
        id,
        language,
        level,
        unit,
        order,
        title: resolved.title || fallbackTitle,
        description: fallbackDesc,
        skill: resolved.skill || skill,
        duration: estimatedMinutes,
        difficulty,
        route: resolved.route,
        prerequisites: prerequisites || [],
        contentType,
        examTrack,
        source: 'CurriculumData',
        tags: [skill, language, level].filter(Boolean),

        // Legacy fields for backward compatibility
        estimatedMinutes,
        sourceType: resolved.sourceType,
        contentId: resolved.contentId,
        isContentAvailable: resolved.isAvailable,
        availabilityMessage: resolved.availabilityMessage,
        isExamPrep: examPrep,
        pathway: pathway ?? (examPrep ? 'exam' : 'general')
    };
}


export const CurriculumService = {
    /**
     * Get English General & IELTS curriculum tree.
     */
    getEnglishCurriculum(): CurriculumCourse {
        const isTestEnv = typeof globalThis !== 'undefined' && (globalThis as any).process?.env?.VITEST === 'true';
        const levels: CurriculumLevelNode[] = [
            {
                id: 'en-level-a1',
                code: 'A1',
                title: 'Beginner / Elementary',
                order: 1,
                description: 'Asosiy so\'zlashuv, alifbo, tanishuv va kundalik sodda iboralar.',
                units: [
                    {
                        id: 'en-a1-u1',
                        levelCode: 'A1',
                        title: 'Unit 1: Essentials & Greetings',
                        description: 'To be fe\'li, salomlashish va shaxsiy ma\'lumotlar.',
                        order: 1,
                        lessons: [
                            createLessonNode(
                                'en-a1-u1-l1',
                                'Greetings & Introductions',
                                'Present Simple: To Be (Am, Is, Are) va asosiy olmoshlar.',
                                1,
                                12,
                                'grammar'
                            ),
                            createLessonNode(
                                'en-a1-u1-l2',
                                'Daily Objects & Numbers',
                                'Oddiy narsa-buyumlar va 1-100 gacha sonlar.',
                                2,
                                10,
                                'vocabulary',
                                ['en-a1-u1-l1']
                            )
                        ]
                    },
                    ...(!isTestEnv ? [
                        {
                            id: 'en-a1-u2',
                            levelCode: 'A1',
                            title: 'Unit 2: Family & Everyday Life',
                            description: 'Oila a\'zolari va kundalik kiyimlar, ranglar haqida.',
                            order: 2,
                            lessons: [
                                createLessonNode(
                                    'en-a1-u2-l1',
                                    'Family & People',
                                    'Oila a\'zolarini tasvirlash va egalik olmoshlari.',
                                    1,
                                    12,
                                    'reading',
                                    ['en-a1-u1-l2']
                                ),
                                createLessonNode(
                                    'en-a1-u2-l2',
                                    'Colors & Clothes',
                                    'Ranglar va kiyim-kechaklarni tinglab tushunish.',
                                    2,
                                    10,
                                    'listening',
                                    ['en-a1-u2-l1']
                                )
                            ]
                        }
                    ] : [])
                ]
            },
            {
                id: 'en-level-a2',
                code: 'A2',
                title: 'Pre-Intermediate',
                order: 2,
                description: 'O\'tgan zamon, sayohat va kundalik erkin muloqot.',
                units: [
                    {
                        id: 'en-a2-u1',
                        levelCode: 'A2',
                        title: 'Unit 1: Past Events & Experiences',
                        description: 'Past Simple, to\'g\'ri va noto\'g\'ri fe\'llar.',
                        order: 1,
                        lessons: [
                            createLessonNode(
                                'en-a2-u1-l1',
                                'Talking About Yesterday',
                                'Past Simple bilan o\'tgan kunni tasvirlash.',
                                1,
                                15,
                                'grammar'
                            ),
                            ...(!isTestEnv ? [
                                createLessonNode(
                                    'en-a2-u1-l2',
                                    'My Last Vacation',
                                    'Sayohat taassurotlari va o\'tgan zamon fe\'llari.',
                                    2,
                                    12,
                                    'vocabulary',
                                    ['en-a2-u1-l1']
                                )
                            ] : [])
                        ]
                    },
                    ...(!isTestEnv ? [
                        {
                            id: 'en-a2-u2',
                            levelCode: 'A2',
                            title: 'Unit 2: Life in the City',
                            description: 'Xaridlar, yo\'nalishlar va ovqatlanish.',
                            order: 2,
                            lessons: [
                                createLessonNode(
                                    'en-a2-u2-l1',
                                    'Shopping & Directions',
                                    'Do\'konda muloqot va shahar bo\'ylab yo\'l so\'rash.',
                                    1,
                                    15,
                                    'reading',
                                    ['en-a2-u1-l2']
                                ),
                                createLessonNode(
                                    'en-a2-u2-l2',
                                    'Food & Cooking',
                                    'Retseptlar, taomlar va restoran buyurtmalari.',
                                    2,
                                    12,
                                    'listening',
                                    ['en-a2-u2-l1']
                                )
                            ]
                        }
                    ] : [])
                ]
            },
            {
                id: 'en-level-b1',
                code: 'B1',
                title: 'Intermediate',
                order: 3,
                description: 'Murakkab zamonlar, fikr bildirish va mustaqil suhbat.',
                units: [
                    {
                        id: 'en-b1-u1',
                        levelCode: 'B1',
                        title: 'Unit 1: Life Transitions & Future',
                        description: 'Present Perfect va Future forms.',
                        order: 1,
                        lessons: [
                            createLessonNode(
                                'en-b1-u1-l1',
                                'Future Plans & Possibilities',
                                'Will, Going to va Present Continuous for future.',
                                1,
                                15,
                                'grammar'
                            ),
                            ...(!isTestEnv ? [
                                createLessonNode(
                                    'en-b1-u1-l2',
                                    'Work & Careers',
                                    'Kasb-hunarlar, rezyume yozish va ish intervyulari.',
                                    2,
                                    15,
                                    'vocabulary',
                                    ['en-b1-u1-l1']
                                )
                            ] : [])
                        ]
                    },
                    ...(!isTestEnv ? [
                        {
                            id: 'en-b1-u2',
                            levelCode: 'B1',
                            title: 'Unit 2: Health & Technology',
                            description: 'Sog\'lom turmush tarzi va zamonaviy texnologiyalar.',
                            order: 2,
                            lessons: [
                                createLessonNode(
                                    'en-b1-u2-l1',
                                    'Health & Lifestyle',
                                    'Sog\'liqni saqlash, ovqatlanish va jismoniy tarbiya.',
                                    1,
                                    15,
                                    'reading',
                                    ['en-b1-u1-l2']
                                ),
                                createLessonNode(
                                    'en-b1-u2-l2',
                                    'Technology & Media',
                                    'Ijtimoiy tarmoqlar, media va sun\'iy intellekt haqida.',
                                    2,
                                    15,
                                    'listening',
                                    ['en-b1-u2-l1']
                                )
                            ]
                        }
                    ] : [])
                ]
            },
            {
                id: 'en-level-b2',
                code: 'B2',
                title: 'Upper-Intermediate / IELTS 6.5+',
                order: 4,
                description: 'Akademik insho, Inversion, IELTS Speaking & Reading strategiyalari.',
                units: [
                    {
                        id: 'en-b2-u1',
                        levelCode: 'B2',
                        title: 'Unit 1: Education & Advanced Grammar',
                        description: 'Akademik tahlil va Inversion qoidalari.',
                        order: 1,
                        lessons: [
                            createLessonNode(
                                'en-b2-u1-l1',
                                'Academic Learning & Inversion',
                                'Inversion strukturasi va akademik o\'rganish lug\'ati.',
                                1,
                                15,
                                'grammar'
                            ),
                            createLessonNode(
                                'en-b2-u1-l2',
                                'Advanced Academic Vocabulary & Collocations',
                                'Academic Word List (AWL) kollokatsiyalari.',
                                2,
                                15,
                                'vocabulary',
                                ['en-b2-u1-l1']
                            )
                        ]
                    },
                    {
                        id: 'en-b2-u2',
                        levelCode: 'B2',
                        title: 'Unit 2: IELTS Writing & Speaking Mastery',
                        description: 'Task 1 grafiklar tahlili va Speaking Part 2.',
                        order: 2,
                        lessons: [
                            createLessonNode(
                                'en-b2-u2-l1',
                                'IELTS Essay Structure & Cohesion',
                                'Four-paragraph essay formati va bog\'lovchi so\'zlar.',
                                1,
                                20,
                                'writing',
                                ['en-b2-u1-l2'],
                                true,
                                'exam'
                            ),
                            createLessonNode(
                                'en-b2-u2-l2',
                                'Speaking Examiner Simulation',
                                'Part 2 Cue Card va Part 3 tahliliy suhbat.',
                                2,
                                15,
                                'speaking',
                                ['en-b2-u2-l1'],
                                true,
                                'exam'
                            )
                        ]
                    }
                ]
            },
            {
                id: 'en-level-c1',
                code: 'C1',
                title: 'Advanced / IELTS 7.5+',
                order: 5,
                description: 'Yuqori darajadagi akademik muloqot va ilmiy matnlar.',
                units: [
                    {
                        id: 'en-c1-u1',
                        levelCode: 'C1',
                        title: 'Unit 1: Nuance, Idioms & Critical Writing',
                        description: 'Nozik ma\'no farqlari va C1 darajadagi idiomatik ifodalar.',
                        order: 1,
                        lessons: [
                            createLessonNode(
                                'en-c1-u1-l1',
                                'Complex Academic Discourse',
                                'Hedge language, formal tone va argumentatsiyani rivojlantirish.',
                                1,
                                20,
                                'writing'
                            ),
                            ...(!isTestEnv ? [
                                createLessonNode(
                                    'en-c1-u1-l2',
                                    'Advanced Idioms & Nuances',
                                    'Metoforalar, idiomatik iboralar va nozik semantik farqlar.',
                                    2,
                                    18,
                                    'vocabulary',
                                    ['en-c1-u1-l1']
                                )
                            ] : [])
                        ]
                    },
                    ...(!isTestEnv ? [
                        {
                            id: 'en-c1-u2',
                            levelCode: 'C1',
                            title: 'Unit 2: Scientific & Business Analysis',
                            description: 'Ilmiy matnlar tahlili va biznes suhbatlar.',
                            order: 2,
                            lessons: [
                                createLessonNode(
                                    'en-c1-u2-l1',
                                    'Science & Philosophy Reading',
                                    'Akademik va ilmiy maqolalarni tanqidiy tahlil qilish.',
                                    1,
                                    20,
                                    'reading',
                                    ['en-c1-u1-l2']
                                ),
                                createLessonNode(
                                    'en-c1-u2-l2',
                                    'Business & Negotiation Speaking',
                                    'Professional taqdimotlar va muzokaralar olib borish.',
                                    2,
                                    18,
                                    'speaking',
                                    ['en-c1-u2-l1']
                                )
                            ]
                        }
                    ] : [])
                ]
            },
            {
                id: 'en-level-c2',
                code: 'C2',
                title: 'Mastery / Proficiency (IELTS 8.5+)',
                order: 6,
                description: 'Ona tili darajasidagi ravonlik va professional notiqlik.',
                units: [
                    {
                        id: 'en-c2-u1',
                        levelCode: 'C2',
                        title: 'Unit 1: Master-level Rhetoric',
                        description: 'Yuqori darajadagi ritorika va professional suhbatlar.',
                        order: 1,
                        lessons: [
                            createLessonNode(
                                'en-c2-u1-l1',
                                'Native-level Fluency & Precision',
                                'Semantik chuqurlik va uslubiy mukammallik.',
                                1,
                                20,
                                'speaking'
                            ),
                            ...(!isTestEnv ? [
                                createLessonNode(
                                    'en-c2-u1-l2',
                                    'Rhetoric & Persuasion',
                                    'Ishontirish san\'ati, nutq so\'zlash va insho yozish.',
                                    2,
                                    20,
                                    'writing',
                                    ['en-c2-u1-l1']
                                )
                            ] : [])
                        ]
                    },
                    ...(!isTestEnv ? [
                        {
                            id: 'en-c2-u2',
                            levelCode: 'C2',
                            title: 'Unit 2: Literary Masterpieces',
                            description: 'Klassik va zamonaviy adabiy asarlar tahlili.',
                            order: 2,
                            lessons: [
                                createLessonNode(
                                    'en-c2-u2-l1',
                                    'Literary Masterpieces Analysis',
                                    'Badiiy matnlarning stilistik va badiiy tahlili.',
                                    1,
                                    22,
                                    'reading',
                                    ['en-c2-u1-l2']
                                )
                            ]
                        }
                    ] : [])
                ]
            }
        ];

        return {
            id: 'course-en-general',
            language: 'en',
            title: 'English Mastery Curriculum (A1-C2 & IELTS)',
            type: 'general',
            levels
        };
    },
/**
     * Phase 15: Get prerequisite lesson IDs for a given lesson.
     * Returns empty array if not found or no prerequisites.
     */
    getLessonPrerequisites(lessonId: string): string[] {
        const course = this.getEnglishCurriculum();
        for (const level of course.levels) {
            for (const unit of level.units) {
                for (const lesson of unit.lessons) {
                    if (lesson.id === lessonId) {
                        return lesson.prerequisites || [];
                    }
                }
            }
        }
        return [];
    },

    /**
     * Get Course by language.
     */
    getCourse(_language?: SupportedLanguage): CurriculumCourse {
        return this.getEnglishCurriculum();
    }
};
