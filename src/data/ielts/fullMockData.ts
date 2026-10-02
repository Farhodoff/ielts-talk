import { IELTS_LISTENING_EXAMS, ListeningSection } from './listening_data';
import { IELTS_READING_EXAMS, ReadingPassage } from './reading_data';
import { IELTS_WRITING_PROMPTS, WritingPromptItem } from './writing_prompts';
import { CAMBRIDGE_IELTS_TOPICS, IeltsSpeakingTopic } from '../ieltsSpeakingTopics';

export interface FullMockExam {
  id: string;
  title: string;
  theme: string;
  difficulty: 'Academic' | 'General Training';
  description: string;
  estimatedMinutes: number; // 165 mins (~2h 45m)
  listening: {
    id: string;
    title: string;
    sections: ListeningSection[];
  };
  reading: {
    id: string;
    title: string;
    passages: ReadingPassage[];
  };
  writing: {
    task1: WritingPromptItem;
    task2: WritingPromptItem;
  };
  speaking: IeltsSpeakingTopic;
}

export const IELTS_FULL_MOCKS: FullMockExam[] = [
  {
    id: 'full-mock-cambridge-1',
    title: 'Cambridge Official Full Mock 1',
    theme: 'AI, Clean Energy & Digital Civilization',
    difficulty: 'Academic',
    description:
      'To‘liq rasmiy formatdagi 4 modulli IELTS imtihon simulyatsiyasi: Listening (4 bo‘lim), Reading (3 akademik matn), Writing (Task 1 & Task 2) va jonli AI Speaking Examiner (Part 1, 2, 3).',
    estimatedMinutes: 165,
    listening: {
      id: 'listening-mock-1',
      title: 'IELTS Listening Academic Practice Test 1',
      sections: IELTS_LISTENING_EXAMS[0]?.sections || [],
    },
    reading: {
      id: 'reading-mock-1',
      title: 'Academic Reading Test 1 (AI & Environmental Science)',
      passages: IELTS_READING_EXAMS.slice(0, 3),
    },
    writing: {
      task1: IELTS_WRITING_PROMPTS.task1[0] || {
        id: 't1_line_meat_consumption',
        category: 'Line Graph',
        title: 'Global Meat Consumption Trends (1980–2020)',
        prompt:
          'The line graph below illustrates the per capita consumption of four distinct types of meat in a European nation between 1980 and 2020. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
        keyVocabulary: ['witnessed an upward trajectory', 'plummeted dramatically', 'overtook'],
        sampleOutline: {
          intro: 'Paraphrase the prompt.',
          body1: 'Analyze chicken rise.',
          body2: 'Analyze beef drop.',
          conclusion: 'Overview trend.',
        },
      },
      task2: IELTS_WRITING_PROMPTS.task2[0] || {
        id: 't2_ai_employment_impact',
        category: 'Opinion Essay',
        title: 'Artificial Intelligence & Future of Employment',
        prompt:
          'Some people believe that artificial intelligence and automation will lead to widespread unemployment, while others argue that AI will create superior employment opportunities. Discuss both views and give your own opinion.',
        keyVocabulary: [
          'paradigm shift',
          'technological displacement',
          'unprecedented productivity',
        ],
        sampleOutline: {
          intro: 'Paraphrase and state stance.',
          body1: 'Displacement concerns.',
          body2: 'New industries created.',
          conclusion: 'Balanced synthesis.',
        },
      },
    },
    speaking: CAMBRIDGE_IELTS_TOPICS[1] || CAMBRIDGE_IELTS_TOPICS[0],
  },
  {
    id: 'full-mock-cambridge-2',
    title: 'Cambridge Official Full Mock 2',
    theme: 'Urban Planning, Global Health & Climate',
    difficulty: 'Academic',
    description:
      'Haqiqiy imtihon bosimi ostida o‘tuvchi to‘liq 2h 45m simulyatsiya: Shaxsiy transport o‘zgarishlari, shahar ekologiyasi, zamonaviy tibbiyot va xalqaro turizm.',
    estimatedMinutes: 165,
    listening: {
      id: 'listening-mock-2',
      title: 'IELTS Listening Academic Practice Test 2',
      sections: IELTS_LISTENING_EXAMS[1]?.sections || IELTS_LISTENING_EXAMS[0]?.sections || [],
    },
    reading: {
      id: 'reading-mock-2',
      title: 'Academic Reading Test 2 (Urban Ecology & Anthropology)',
      passages:
        IELTS_READING_EXAMS.length >= 6
          ? IELTS_READING_EXAMS.slice(3, 6)
          : IELTS_READING_EXAMS.slice(0, 3),
    },
    writing: {
      task1: IELTS_WRITING_PROMPTS.task1[1] || IELTS_WRITING_PROMPTS.task1[0],
      task2: IELTS_WRITING_PROMPTS.task2[1] || IELTS_WRITING_PROMPTS.task2[0],
    },
    speaking: CAMBRIDGE_IELTS_TOPICS[0],
  },
  {
    id: 'full-mock-cambridge-3',
    title: 'Cambridge Official Full Mock 3',
    theme: 'Cognitive Science, Higher Education & Macroeconomics',
    difficulty: 'Academic',
    description:
      'Band 7.5 - 9.0 talabgorlari uchun qat’iy sinov: Neyrobiologiya va ko‘p tillilik, xalqaro savdo munosabatlari va yuqori darajadagi akademik bahslashuv.',
    estimatedMinutes: 165,
    listening: {
      id: 'listening-mock-3',
      title: 'IELTS Listening Academic Practice Test 3',
      sections: IELTS_LISTENING_EXAMS[2]?.sections || IELTS_LISTENING_EXAMS[0]?.sections || [],
    },
    reading: {
      id: 'reading-mock-3',
      title: 'Academic Reading Test 3 (Cognitive Linguistics & Global Markets)',
      passages:
        IELTS_READING_EXAMS.length >= 9
          ? IELTS_READING_EXAMS.slice(6, 9)
          : IELTS_READING_EXAMS.slice(0, 3),
    },
    writing: {
      task1: IELTS_WRITING_PROMPTS.task1[2] || IELTS_WRITING_PROMPTS.task1[0],
      task2: IELTS_WRITING_PROMPTS.task2[2] || IELTS_WRITING_PROMPTS.task2[0],
    },
    speaking: CAMBRIDGE_IELTS_TOPICS[2] || CAMBRIDGE_IELTS_TOPICS[0],
  },
];

export function getFullMockById(id: string): FullMockExam {
  const found = IELTS_FULL_MOCKS.find((m) => m.id === id);
  return found || IELTS_FULL_MOCKS[0];
}

export function getDefaultFullMock(): FullMockExam {
  return IELTS_FULL_MOCKS[0];
}
