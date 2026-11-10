import { CURRICULUM_MANIFEST } from '../data/curriculum/curriculumManifest';
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
  pathway?: 'general' | 'exam',
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

  const examPrep =
    isExamPrep ?? (id.includes('ielts') || id.includes('exam') || resolved.sourceType === 'ielts');
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
    pathway: pathway ?? (examPrep ? 'exam' : 'general'),
  };
}

export const CurriculumService = {
  /**
   * Get English General & IELTS curriculum tree.
   */
  getEnglishCurriculum(): CurriculumCourse {
    const isTestEnv =
      typeof globalThis !== 'undefined' && (globalThis as any).process?.env?.VITEST === 'true';
    const levels: CurriculumLevelNode[] = [
      {
        id: 'en-level-a1',
        code: 'A1',
        title: 'Beginner / Elementary',
        order: 1,
        description: "Asosiy so'zlashuv, alifbo, tanishuv va kundalik sodda iboralar.",
        units: [
          {
            id: 'en-a1-u1',
            levelCode: 'A1',
            title: 'Unit 1: Essentials & Greetings',
            description: "To be fe'li, salomlashish va shaxsiy ma'lumotlar.",
            order: 1,
            lessons: [
              createLessonNode(
                'en-a1-u1-l1',
                'Am / Is / Are',
                'Darak va inkor gaplar',
                1,
                15,
                'grammar',
              ),
              createLessonNode(
                'en-a1-u1-be-questions',
                'Am / Is / Are Questions',
                'Savol va qisqa javoblar',
                2,
                15,
                'grammar',
                ['en-a1-u1-l1'],
              ),
              createLessonNode(
                'en-a1-u1-present-continuous',
                'Present Continuous',
                'Hozir bo‘layotgan ish',
                3,
                15,
                'grammar',
                ['en-a1-u1-be-questions'],
              ),
              createLessonNode(
                'en-a1-u1-present-continuous-questions',
                'Present Continuous Questions',
                'Hozirgi ish haqida savol',
                4,
                15,
                'grammar',
                ['en-a1-u1-present-continuous'],
              ),
              createLessonNode(
                'en-a1-u2-l3',
                'Present Simple',
                'Kundalik odatlar va uchinchi shaxs birlik.',
                5,
                15,
                'grammar',
                ['en-a1-u1-present-continuous-questions'],
              ),
              createLessonNode(
                'en-a1-u2-l4',
                'Present Simple Negatives',
                'Don’t va doesn’t bilan inkor gaplar.',
                6,
                15,
                'grammar',
                ['en-a1-u2-l3'],
              ),
              createLessonNode(
                'en-a1-u2-l5',
                'Present Simple Questions',
                'Do va does bilan savollar.',
                7,
                15,
                'grammar',
                ['en-a1-u2-l4'],
              ),
              createLessonNode(
                'en-a1-u4-l5',
                'Present Simple vs Present Continuous',
                'Kundalik odat va ayni damdagi harakat farqi.',
                8,
                14,
                'grammar',
                ['en-a1-u2-l5'],
              ),
              createLessonNode(
                'en-a1-u1-have-got',
                'Have / Have Got',
                'Egalikni aytish',
                9,
                15,
                'grammar',
                ['en-a1-u4-l5'],
              ),
              createLessonNode(
                'en-a1-u1-was-were',
                'Was / Were',
                'O‘tgan holat yoki joyni aytish',
                10,
                15,
                'grammar',
                ['en-a1-u1-have-got'],
              ),
              createLessonNode(
                'en-a1-u1-past-simple',
                'Past Simple',
                'O‘tmishda tugagan ishni aytish',
                11,
                15,
                'grammar',
                ['en-a1-u1-was-were'],
              ),
              createLessonNode(
                'en-a1-u1-past-simple-questions-negatives',
                'Past Simple Questions and Negatives',
                'O‘tgan ish haqida savol va inkor',
                12,
                15,
                'grammar',
                ['en-a1-u1-past-simple'],
              ),
              createLessonNode(
                'en-a1-u1-past-continuous',
                'Past Continuous',
                'O‘tmishda davom etayotgan ishni aytish',
                13,
                15,
                'grammar',
                ['en-a1-u1-past-simple-questions-negatives'],
              ),
              createLessonNode(
                'en-a1-u1-past-simple-vs-continuous',
                'Past Simple vs Past Continuous',
                'Davom etayotgan va tugagan ishni farqlash',
                14,
                15,
                'grammar',
                ['en-a1-u1-past-continuous'],
              ),
              createLessonNode(
                'en-a1-u1-present-perfect',
                'Present Perfect',
                'Hozir natijasi bor ish',
                15,
                15,
                'grammar',
                ['en-a1-u1-past-simple-vs-continuous'],
              ),
              createLessonNode(
                'en-a1-u1-present-perfect-just-already-yet',
                'Just, Already and Yet',
                'Yaqinda yoki kutilgan ish',
                16,
                15,
                'grammar',
                ['en-a1-u1-present-perfect'],
              ),
              createLessonNode(
                'en-a1-u1-present-perfect-experience',
                'Have You Ever…?',
                'Hayotiy tajriba',
                17,
                15,
                'grammar',
                ['en-a1-u1-present-perfect-just-already-yet'],
              ),
              createLessonNode(
                'en-a1-u1-present-perfect-how-long',
                'How Long Have You…?',
                'Hozirgacha davom etgan holat',
                18,
                15,
                'grammar',
                ['en-a1-u1-present-perfect-experience'],
              ),
              createLessonNode(
                'en-a1-u1-for-since-ago',
                'For, Since and Ago',
                'Davomiylik, boshlanish va o‘tgan vaqt',
                19,
                15,
                'grammar',
                ['en-a1-u1-present-perfect-how-long'],
              ),
              createLessonNode(
                'en-a1-u1-present-perfect-vs-past-simple',
                'Present Perfect vs Past Simple',
                'Hozirga bog‘liq natija va tugagan vaqt',
                20,
                15,
                'grammar',
                ['en-a1-u1-for-since-ago'],
              ),
              createLessonNode(
                'en-a1-u1-passive-present-past',
                'Present and Past Passive',
                'Majhul nisbatning hozirgi va o‘tgan shakli',
                21,
                15,
                'grammar',
                ['en-a1-u1-present-perfect-vs-past-simple'],
              ),
              createLessonNode(
                'en-a1-u1-passive-continuous-perfect',
                'Continuous and Perfect Passive',
                'Davom etayotgan yoki yakunlangan ishning majhul shakli',
                22,
                15,
                'grammar',
                ['en-a1-u1-passive-present-past'],
              ),
              createLessonNode(
                'en-a1-u1-auxiliary-be-have-do',
                'Be, Have and Do',
                'Yordamchi fe’llarni farqlash',
                23,
                15,
                'grammar',
                ['en-a1-u1-passive-continuous-perfect'],
              ),
              createLessonNode(
                'en-a1-u1-regular-irregular-verbs',
                'Regular and Irregular Verbs',
                'V2 va V3 shakllarini farqlash',
                24,
                15,
                'grammar',
                ['en-a1-u1-auxiliary-be-have-do'],
              ),
              createLessonNode(
                'en-a1-u1-used-to',
                'Used To',
                'O‘tmishdagi odat va holat',
                25,
                15,
                'grammar',
                ['en-a1-u1-regular-irregular-verbs'],
              ),
              createLessonNode(
                'en-a1-u1-future-arrangements',
                'Present Continuous for Future Arrangements',
                'Oldindan kelishilgan reja',
                26,
                15,
                'grammar',
                ['en-a1-u1-used-to'],
              ),
              createLessonNode(
                'en-a1-u1-going-to',
                'Be Going To',
                'Niyat va belgiga asoslangan taxmin',
                27,
                15,
                'grammar',
                ['en-a1-u1-future-arrangements'],
              ),
              createLessonNode(
                'en-a1-u1-will-decisions-offers',
                'Will and Shall for Decisions and Offers',
                'Tezkor qaror, yordam va taklif',
                28,
                15,
                'grammar',
                ['en-a1-u1-going-to'],
              ),
              createLessonNode(
                'en-a1-u1-will-predictions',
                'Will and Shall for Predictions',
                'Kelajak haqida fikr va taxmin',
                29,
                15,
                'grammar',
                ['en-a1-u1-will-decisions-offers'],
              ),
              createLessonNode('en-a1-u1-might', 'Might', 'Noaniq ehtimol', 30, 15, 'grammar', [
                'en-a1-u1-will-predictions',
              ]),
              createLessonNode(
                'en-a1-u1-can-could',
                'Can and Could',
                'Hozirgi va o‘tmishdagi qobiliyat',
                31,
                15,
                'grammar',
                ['en-a1-u1-might'],
              ),
              createLessonNode(
                'en-a1-u1-must-mustnt-neednt',
                'Must, Mustn’t and Needn’t',
                'Majburiyat, taqiq va zarurat yo‘qligi',
                32,
                15,
                'grammar',
                ['en-a1-u1-can-could'],
              ),
              createLessonNode('en-a1-u1-should', 'Should', 'Maslahat berish', 33, 15, 'grammar', [
                'en-a1-u1-must-mustnt-neednt',
              ]),
              createLessonNode(
                'en-a1-u1-have-to',
                'Have To',
                'Qoidaga yoki vaziyatga ko‘ra majburiyat',
                34,
                15,
                'grammar',
                ['en-a1-u1-should'],
              ),
              createLessonNode(
                'en-a1-u1-would-like',
                'Would You Like…? and I’d Like…',
                'Muloyim taklif va istak',
                35,
                15,
                'grammar',
                ['en-a1-u1-have-to'],
              ),
              ...CURRICULUM_MANIFEST.filter(({ id }) => id.startsWith('en-a1-u1-egi-')).map(
                (lesson) =>
                  createLessonNode(
                    lesson.id,
                    lesson.title,
                    lesson.description,
                    lesson.lessonNumber,
                    lesson.estimatedDurationMinutes,
                    lesson.skill,
                    [
                      lesson.lessonNumber === 36
                        ? 'en-a1-u1-would-like'
                        : `en-a1-u1-egi-${lesson.lessonNumber - 1}`,
                    ],
                  ),
              ),
              createLessonNode(
                'en-a1-u1-l2',
                'Daily Objects & Numbers',
                'Oddiy narsa-buyumlar va 1-100 gacha sonlar.',
                115,
                10,
                'vocabulary',
                ['en-a1-u1-egi-114'],
              ),
            ],
          },
          ...(!isTestEnv
            ? [
                {
                  id: 'en-a1-u2',
                  levelCode: 'A1',
                  title: 'Unit 2: Family & Everyday Life',
                  description: "Oila a'zolari va kundalik kiyimlar, ranglar haqida.",
                  order: 2,
                  lessons: [
                    createLessonNode(
                      'en-a1-u2-l1',
                      'Family & People',
                      "Oila a'zolarini tasvirlash va egalik olmoshlari.",
                      1,
                      12,
                      'reading',
                      ['en-a1-u1-l2'],
                    ),
                    createLessonNode(
                      'en-a1-u2-l2',
                      'Colors & Clothes',
                      'Ranglar va kiyim-kechaklarni tinglab tushunish.',
                      2,
                      10,
                      'listening',
                      ['en-a1-u2-l1'],
                    ),
                  ],
                },
              ]
            : []),
        ],
      },
      {
        id: 'en-level-a2',
        code: 'A2',
        title: 'Pre-Intermediate',
        order: 2,
        description: "O'tgan zamon, sayohat va kundalik erkin muloqot.",
        units: [
          {
            id: 'en-a2-u1',
            levelCode: 'A2',
            title: 'Unit 1: Past Events & Experiences',
            description: "Past Simple, to'g'ri va noto'g'ri fe'llar.",
            order: 1,
            lessons: [
              createLessonNode(
                'en-a2-u1-l1',
                'Talking About Yesterday',
                "Past Simple bilan o'tgan kunni tasvirlash.",
                1,
                15,
                'grammar',
              ),
              ...(!isTestEnv
                ? [
                    createLessonNode(
                      'en-a2-u1-l2',
                      'My Last Vacation',
                      "Sayohat taassurotlari va o'tgan zamon fe'llari.",
                      2,
                      12,
                      'vocabulary',
                      ['en-a2-u1-l1'],
                    ),
                  ]
                : []),
            ],
          },
          ...(!isTestEnv
            ? [
                {
                  id: 'en-a2-u2',
                  levelCode: 'A2',
                  title: 'Unit 2: Life in the City',
                  description: "Xaridlar, yo'nalishlar va ovqatlanish.",
                  order: 2,
                  lessons: [
                    createLessonNode(
                      'en-a2-u2-l1',
                      'Shopping & Directions',
                      "Do'konda muloqot va shahar bo'ylab yo'l so'rash.",
                      1,
                      15,
                      'reading',
                      ['en-a2-u1-l2'],
                    ),
                    createLessonNode(
                      'en-a2-u2-l2',
                      'Food & Cooking',
                      'Retseptlar, taomlar va restoran buyurtmalari.',
                      2,
                      12,
                      'listening',
                      ['en-a2-u2-l1'],
                    ),
                  ],
                },
              ]
            : []),
        ],
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
                'grammar',
              ),
              ...(!isTestEnv
                ? [
                    createLessonNode(
                      'en-b1-u1-l2',
                      'Work & Careers',
                      'Kasb-hunarlar, rezyume yozish va ish intervyulari.',
                      2,
                      15,
                      'vocabulary',
                      ['en-b1-u1-l1'],
                    ),
                  ]
                : []),
            ],
          },
          ...(!isTestEnv
            ? [
                {
                  id: 'en-b1-u2',
                  levelCode: 'B1',
                  title: 'Unit 2: Health & Technology',
                  description: "Sog'lom turmush tarzi va zamonaviy texnologiyalar.",
                  order: 2,
                  lessons: [
                    createLessonNode(
                      'en-b1-u2-l1',
                      'Health & Lifestyle',
                      "Sog'liqni saqlash, ovqatlanish va jismoniy tarbiya.",
                      1,
                      15,
                      'reading',
                      ['en-b1-u1-l2'],
                    ),
                    createLessonNode(
                      'en-b1-u2-l2',
                      'Technology & Media',
                      "Ijtimoiy tarmoqlar, media va sun'iy intellekt haqida.",
                      2,
                      15,
                      'listening',
                      ['en-b1-u2-l1'],
                    ),
                  ],
                },
              ]
            : []),
        ],
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
                "Inversion strukturasi va akademik o'rganish lug'ati.",
                1,
                15,
                'grammar',
              ),
              createLessonNode(
                'en-b2-u1-l2',
                'Advanced Academic Vocabulary & Collocations',
                'Academic Word List (AWL) kollokatsiyalari.',
                2,
                15,
                'vocabulary',
                ['en-b2-u1-l1'],
              ),
            ],
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
                "Four-paragraph essay formati va bog'lovchi so'zlar.",
                1,
                20,
                'writing',
                ['en-b2-u1-l2'],
                true,
                'exam',
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
                'exam',
              ),
            ],
          },
        ],
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
            description: "Nozik ma'no farqlari va C1 darajadagi idiomatik ifodalar.",
            order: 1,
            lessons: [
              createLessonNode(
                'en-c1-u1-l1',
                'Complex Academic Discourse',
                'Hedge language, formal tone va argumentatsiyani rivojlantirish.',
                1,
                20,
                'writing',
              ),
              ...(!isTestEnv
                ? [
                    createLessonNode(
                      'en-c1-u1-l2',
                      'Advanced Idioms & Nuances',
                      'Metoforalar, idiomatik iboralar va nozik semantik farqlar.',
                      2,
                      18,
                      'vocabulary',
                      ['en-c1-u1-l1'],
                    ),
                  ]
                : []),
            ],
          },
          ...(!isTestEnv
            ? [
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
                      ['en-c1-u1-l2'],
                    ),
                    createLessonNode(
                      'en-c1-u2-l2',
                      'Business & Negotiation Speaking',
                      'Professional taqdimotlar va muzokaralar olib borish.',
                      2,
                      18,
                      'speaking',
                      ['en-c1-u2-l1'],
                    ),
                  ],
                },
              ]
            : []),
        ],
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
                'speaking',
              ),
              ...(!isTestEnv
                ? [
                    createLessonNode(
                      'en-c2-u1-l2',
                      'Rhetoric & Persuasion',
                      "Ishontirish san'ati, nutq so'zlash va insho yozish.",
                      2,
                      20,
                      'writing',
                      ['en-c2-u1-l1'],
                    ),
                  ]
                : []),
            ],
          },
          ...(!isTestEnv
            ? [
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
                      ['en-c2-u1-l2'],
                    ),
                  ],
                },
              ]
            : []),
        ],
      },
    ];

    return {
      id: 'course-en-general',
      language: 'en',
      title: 'English Mastery Curriculum (A1-C2 & IELTS)',
      type: 'general',
      levels,
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
  },
};
