import { Lesson } from '../../types/lesson';

export const ENGLISH_A1_LESSONS: Lesson[] = [
  {
    id: 'en-a1-u1-l1',
    courseId: 'english-a1',
    unitId: 'en-a1-u1',
    unitTitle: 'Unit 1: Essentials & Greetings',
    language: 'en',
    level: 'A1',
    lessonNumber: 1,
    title: 'Am / Is / Are',
    description: 'Darak va inkor gaplar',
    estimatedDurationMinutes: 15,
    steps: [
      {
        id: 'en-a1-u1-l1-s1',
        type: 'learn',
        title: 'Qoida va misollar',
        estimatedMinutes: 5,
        learnData: {
          title: 'Am / Is / Are',
          explanation:
            'I bilan am, he/she/it bilan is, you/we/they bilan are ishlatiladi. Inkor uchun not qo‘shiladi.',
          vocabulary: [
            {
              term: 'Hello!',
              meaning: 'Salom!',
              exampleSentence: 'Hello! I am Malika.',
              exampleTranslation: 'Salom! Men Malikaman.',
            },
            {
              term: 'My name is…',
              meaning: 'Mening ismim…',
              exampleSentence: 'My name is Aziza.',
              exampleTranslation: 'Mening ismim Aziza.',
            },
            {
              term: 'student',
              meaning: 'talaba',
              exampleSentence: 'I am a student.',
              exampleTranslation: 'Men talabaman.',
            },
            {
              term: 'teacher',
              meaning: 'o‘qituvchi',
              exampleSentence: 'She is a teacher.',
              exampleTranslation: 'U o‘qituvchi.',
            },
            {
              term: 'ready',
              meaning: 'tayyor',
              exampleSentence: 'We are ready for class.',
              exampleTranslation: 'Biz darsga tayyormiz.',
            },
            {
              term: 'tired',
              meaning: 'charchagan',
              exampleSentence: 'I am not tired today.',
              exampleTranslation: 'Men bugun charchamaganman.',
            },
          ],
          grammarRules: [
            {
              pattern:
                'I bilan am, he/she/it bilan is, you/we/they bilan are ishlatiladi. Inkor uchun not qo‘shiladi.',
              meaning: 'Darak va inkor gaplar',
              examples: [
                {
                  sentence: 'Hello! I am Malika.',
                  translation: 'Salom! Men Malikaman.',
                },
              ],
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-l1-s2',
        type: 'practice',
        title: 'Mashq',
        estimatedMinutes: 5,
        practiceData: {
          instructions: 'To‘g‘ri javobni tanlang.',
          exercises: [
            {
              id: 'en-a1-u1-l1-e1',
              options: ['is', 'are', 'am'],
              explanation:
                'I bilan am, he/she/it bilan is, you/we/they bilan are ishlatiladi. Inkor uchun not qo‘shiladi.',
              prompt: 'I ___ a student.',
              type: 'multiple-choice',
              correctAnswer: 2,
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-l1-s3',
        type: 'test',
        title: 'Dars testi',
        estimatedMinutes: 5,
        testData: {
          instructions: 'Bo‘sh joyni to‘ldiring.',
          passingScorePercentage: 80,
          questions: [
            {
              id: 'en-a1-u1-l1-q1',
              options: ['am', 'are', 'is'],
              explanation:
                'I bilan am, he/she/it bilan is, you/we/they bilan are ishlatiladi. Inkor uchun not qo‘shiladi.',
              question: 'She ___ not at home.',
              correctAnswerIndex: 2,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'en-a1-u1-be-questions',
    courseId: 'english-a1',
    unitId: 'en-a1-u1',
    unitTitle: 'Unit 1: Essentials & Greetings',
    language: 'en',
    level: 'A1',
    lessonNumber: 2,
    title: 'Am / Is / Are Questions',
    description: 'Savol va qisqa javoblar',
    estimatedDurationMinutes: 15,
    steps: [
      {
        id: 'en-a1-u1-be-questions-s1',
        type: 'learn',
        title: 'Qoida va misollar',
        estimatedMinutes: 5,
        learnData: {
          title: 'Am / Is / Are Questions',
          explanation: 'Savolda am, is yoki are egadan oldin keladi.',
          grammarRules: [
            {
              pattern: 'Savolda am, is yoki are egadan oldin keladi.',
              meaning: 'Savol va qisqa javoblar',
              examples: [
                {
                  sentence: 'Are you ready? — Yes, I am.',
                  translation: 'Tayyormisiz? — Ha.',
                },
              ],
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-be-questions-s2',
        type: 'practice',
        title: 'Mashq',
        estimatedMinutes: 5,
        practiceData: {
          instructions: 'To‘g‘ri javobni tanlang.',
          exercises: [
            {
              id: 'en-a1-u1-be-questions-e1',
              options: ['Is', 'Am', 'Are'],
              explanation: 'Savolda am, is yoki are egadan oldin keladi.',
              prompt: '___ you ready?',
              type: 'multiple-choice',
              correctAnswer: 2,
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-be-questions-s3',
        type: 'test',
        title: 'Dars testi',
        estimatedMinutes: 5,
        testData: {
          instructions: 'Bo‘sh joyni to‘ldiring.',
          passingScorePercentage: 80,
          questions: [
            {
              id: 'en-a1-u1-be-questions-q1',
              options: ['Are', 'Am', 'Is'],
              explanation: 'Savolda am, is yoki are egadan oldin keladi.',
              question: '___ she at home?',
              correctAnswerIndex: 2,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'en-a1-u1-present-continuous',
    courseId: 'english-a1',
    unitId: 'en-a1-u1',
    unitTitle: 'Unit 1: Essentials & Greetings',
    language: 'en',
    level: 'A1',
    lessonNumber: 3,
    title: 'Present Continuous',
    description: 'Hozir bo‘layotgan ish',
    estimatedDurationMinutes: 15,
    steps: [
      {
        id: 'en-a1-u1-present-continuous-s1',
        type: 'learn',
        title: 'Qoida va misollar',
        estimatedMinutes: 5,
        learnData: {
          title: 'Present Continuous',
          explanation: 'Ega + am/is/are + fe’lning -ing shakli. Inkor uchun not qo‘shiladi.',
          grammarRules: [
            {
              pattern: 'Ega + am/is/are + fe’lning -ing shakli. Inkor uchun not qo‘shiladi.',
              meaning: 'Hozir bo‘layotgan ish',
              examples: [
                {
                  sentence: 'I am reading.',
                  translation: 'Men kitob o‘qiyapman.',
                },
              ],
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-present-continuous-s2',
        type: 'practice',
        title: 'Mashq',
        estimatedMinutes: 5,
        practiceData: {
          instructions: 'To‘g‘ri javobni tanlang.',
          exercises: [
            {
              id: 'en-a1-u1-present-continuous-e1',
              options: ['read', 'reads', 'reading'],
              explanation: 'Ega + am/is/are + fe’lning -ing shakli. Inkor uchun not qo‘shiladi.',
              prompt: 'I am ___ now.',
              type: 'multiple-choice',
              correctAnswer: 2,
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-present-continuous-s3',
        type: 'test',
        title: 'Dars testi',
        estimatedMinutes: 5,
        testData: {
          instructions: 'Bo‘sh joyni to‘ldiring.',
          passingScorePercentage: 80,
          questions: [
            {
              id: 'en-a1-u1-present-continuous-q1',
              options: ['is', 'am', 'are'],
              explanation: 'Ega + am/is/are + fe’lning -ing shakli. Inkor uchun not qo‘shiladi.',
              question: 'They ___ not working.',
              correctAnswerIndex: 2,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'en-a1-u1-present-continuous-questions',
    courseId: 'english-a1',
    unitId: 'en-a1-u1',
    unitTitle: 'Unit 1: Essentials & Greetings',
    language: 'en',
    level: 'A1',
    lessonNumber: 4,
    title: 'Present Continuous Questions',
    description: 'Hozirgi ish haqida savol',
    estimatedDurationMinutes: 15,
    steps: [
      {
        id: 'en-a1-u1-present-continuous-questions-s1',
        type: 'learn',
        title: 'Qoida va misollar',
        estimatedMinutes: 5,
        learnData: {
          title: 'Present Continuous Questions',
          explanation: 'Savolda am/is/are egadan oldin, -ing shakli egadan keyin keladi.',
          grammarRules: [
            {
              pattern: 'Savolda am/is/are egadan oldin, -ing shakli egadan keyin keladi.',
              meaning: 'Hozirgi ish haqida savol',
              examples: [
                {
                  sentence: 'What is she doing?',
                  translation: 'U nima qilyapti?',
                },
              ],
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-present-continuous-questions-s2',
        type: 'practice',
        title: 'Mashq',
        estimatedMinutes: 5,
        practiceData: {
          instructions: 'To‘g‘ri javobni tanlang.',
          exercises: [
            {
              id: 'en-a1-u1-present-continuous-questions-e1',
              options: ['are', 'am', 'is'],
              explanation: 'Savolda am/is/are egadan oldin, -ing shakli egadan keyin keladi.',
              prompt: 'What ___ he doing?',
              type: 'multiple-choice',
              correctAnswer: 2,
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-present-continuous-questions-s3',
        type: 'test',
        title: 'Dars testi',
        estimatedMinutes: 5,
        testData: {
          instructions: 'Bo‘sh joyni to‘ldiring.',
          passingScorePercentage: 80,
          questions: [
            {
              id: 'en-a1-u1-present-continuous-questions-q1',
              options: ['Is', 'Am', 'Are'],
              explanation: 'Savolda am/is/are egadan oldin, -ing shakli egadan keyin keladi.',
              question: '___ they playing?',
              correctAnswerIndex: 2,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'en-a1-u2-l3',
    courseId: 'english-a1',
    unitId: 'en-a1-u1',
    unitTitle: 'Unit 1: Essentials & Greetings',
    language: 'en',
    level: 'A1',
    lessonNumber: 5,
    title: 'Present Simple: Action Verbs (Daily Life)',
    description:
      "Kundalik harakat fe'llari (work, live, study, speak) va 3-shaxs birlikdagi -s/-es qoidasi.",
    estimatedDurationMinutes: 15,
    icon: '⚡',
    steps: [
      {
        id: 'en-a1-u2-l3-s1',
        title: "Harakat Fe'llari & Present Simple",
        type: 'learn',
        estimatedMinutes: 5,
        learnData: {
          title: 'Present Simple va 3-Shaxs Birlik Qoidasi',
          subtitle: 'Unit 2 • 3-Dars: Doimiy odatlar va haqiqatlarni ifodalash',
          explanation:
            'Present Simple zamoni har kuni takrorlanadigan odatlar, qiziqishlar va doimiy haqiqatlar haqida gapirganda ishlatiladi. Bu zamonning eng asosiy oltin qoidasi: Agar ega uchinchi shaxs birlik (He, She, It) bo\'lsa, fe\'lga "-s" yoki "-es" qo\'shiladi.',
          keyPoints: [
            "I / You / We / They + Fe'l (I work, You study, We live, They speak)",
            "He / She / It + Fe'l-S (He works, She studies, It rains)",
            "-o, -ch, -sh, -s, -x bilan tugasa: -es qo'shiladi (go -> goes, watch -> watches)",
            'Undosh + y bilan tugasa: y -> ies ga aylanadi (study -> studies)',
            '⚠️ Keng tarqalgan xato: "He work in Tashkent" (XATO) -> "He workS in Tashkent" (TO\'G\'RI)',
            '⚠️ To Be bilan harakat fe\'lini qorishtirmang: "I am work" (XATO) -> "I work" (TO\'G\'RI)',
          ],
          vocabulary: [
            {
              term: 'Work',
              reading: '/wɜːk/',
              meaning: 'Ishlamoq, mehnat qilmoq',
              exampleSentence: 'I work at an international educational academy.',
              exampleTranslation: "Men xalqaro ta'lim akademiyasida ishlayman.",
            },
            {
              term: 'Study',
              reading: '/ˈstʌd.i/',
              meaning: "O'qimoq, tahsil olmoq",
              exampleSentence: 'She studies English grammar every afternoon.',
              exampleTranslation: "U har kuni tushdan keyin ingliz tili grammatikasini o'rganadi.",
            },
            {
              term: 'Live',
              reading: '/lɪv/',
              meaning: 'Yashamoq, istiqomat qilmoq',
              exampleSentence: 'We live in a quiet and green district of Tashkent.',
              exampleTranslation: 'Biz Toshkentning sokin va yashil tumanida yashaymiz.',
            },
            {
              term: 'Speak',
              reading: '/spiːk/',
              meaning: "Gapirmoq, so'zlashmoq",
              exampleSentence: 'He speaks three languages: Uzbek, Russian, and English.',
              exampleTranslation: "U uchta tilda gapiradi: o'zbek, rus va ingliz tillarida.",
            },
            {
              term: 'Play',
              reading: '/pleɪ/',
              meaning: "O'ynamoq, (cholg'u) chalmoq",
              exampleSentence: 'They play tennis together on Saturday mornings.',
              exampleTranslation: "Ular shanba kuni ertalab birga tennis o'ynashadi.",
            },
            {
              term: 'Read',
              reading: '/riːd/',
              meaning: "O'qimoq (kitob, maqola)",
              exampleSentence: 'My father reads English news articles online.',
              exampleTranslation: "Otam onlayn inglizcha yangiliklar maqolalarini o'qiydi.",
            },
            {
              term: 'Everyday',
              reading: '/ˈev.ri.deɪ/',
              meaning: 'Har kuni, kundalik',
              exampleSentence: 'I practice IELTS listening skills everyday.',
              exampleTranslation: "Men har kuni IELTS tinglash ko'nikmalarini mashq qilaman.",
            },
            {
              term: 'Language',
              reading: '/ˈlæŋ.ɡwɪdʒ/',
              meaning: 'Til (muloqot tili)',
              exampleSentence: 'English is a global language of communication.',
              exampleTranslation: 'Ingliz tili xalqaro muloqotning global tilidir.',
            },
          ],
          grammarRules: [
            {
              pattern: 'Subject (He / She / It) + Verb + -s / -es',
              meaning: 'Odat tusiga kirgan muntazam harakatlar',
              usageNotes:
                "I / You / We / They bilan fe'l o'zgarmaydi. Faqat He / She / It bilan -s qo'shiladi. Misol: study -> studies (y tushib -ies bo'ladi).",
              examples: [
                {
                  sentence: 'My sister studies at university and works part-time.',
                  translation: "Singlim universitetda o'qiydi va yarim stavkada ishlaydi.",
                },
                {
                  sentence: 'They live in London, but their brother lives in New York.',
                  translation:
                    'Ular Londonda yashaydilar, ammo ularning akasi Nyu-Yorkda yashaydi.',
                },
              ],
            },
          ],
          culturalNotes:
            '🎙️ IELTS Speaking Part 1 Foundation Corner:\nImtihon oluvchi: "Do you work or are you a student?"\nNamunaviy javob: "Currently, I study at university. My major is computer science. In addition to my classes, I also work as an online freelancer in the evenings."',
        },
      },
      {
        id: 'en-a1-u2-l3-s2',
        title: 'Interaktiv Amaliy Mashq',
        type: 'practice',
        estimatedMinutes: 5,
        practiceData: {
          instructions: "Present Simple qoidasiga ko'ra fe'lning to'g'ri shaklini tanlang.",
          exercises: [
            {
              id: 'en-a1-u2-l3-e1',
              type: 'multiple-choice',
              prompt: '"She _______ English very fluently." Bo\'sh joyga qaysi shakl qo\'yiladi?',
              options: ['speaks', 'speak', 'speaking', 'is speak'],
              correctAnswer: 0,
              explanation: '"She" (3-shaxs birlik) bilan fe\'lga -s qo\'shiladi: speaks.',
            },
            {
              id: 'en-a1-u2-l3-e2',
              type: 'multiple-choice',
              prompt: '"We _______ in Samarkand with our family."',
              options: ['live', 'lives', 'living', 'are live'],
              correctAnswer: 0,
              explanation:
                "\"We\" ko'plik olmoshi bo'lgani sababli oddiy fe'l shakli olinadi: live.",
            },
            {
              id: 'en-a1-u2-l3-e3',
              type: 'multiple-choice',
              prompt: '"He _______ hard for the IELTS exam every night."',
              options: ['studies', 'studys', 'study', 'is study'],
              correctAnswer: 0,
              explanation: '"Study" fe\'li 3-shaxs birlikda "studies" ga aylanadi (y -> ies).',
            },
            {
              id: 'en-a1-u2-l3-e4',
              type: 'multiple-choice',
              prompt: 'Qaysi gapda grammatik xatolik BOR?',
              options: [
                'John work in a bank.',
                'John works in a bank.',
                'I work in a hospital.',
                'They study English.',
              ],
              correctAnswer: 0,
              explanation:
                '"John work" xato, chunki John uchinchi shaxs birlik bo\'lib "works" bo\'lishi kerak.',
            },
            {
              id: 'en-a1-u2-l3-e5',
              type: 'multiple-choice',
              prompt: '"My brother _______ television after finishing his homework."',
              options: ['watches', 'watchs', 'watch', 'watching'],
              correctAnswer: 0,
              explanation: "-ch bilan tugagan fe'llarga 3-shaxsda -es qo'shiladi: watches.",
            },
          ],
        },
      },
      {
        id: 'en-a1-u2-l3-s3',
        title: 'Dars Sinov Testi',
        type: 'test',
        estimatedMinutes: 5,
        testData: {
          instructions: "Savollarga javob berib, o'zlashtirishni tekshiring.",
          passingScorePercentage: 80,
          questions: [
            {
              id: 'en-a1-u2-l3-q1',
              question: 'Alex _______ two international languages fluently.',
              options: ['speaks', 'speak', 'is speak', 'speaking'],
              correctAnswerIndex: 0,
              explanation: 'Alex birlik (He): speaks.',
            },
            {
              id: 'en-a1-u2-l3-q2',
              question: 'My parents _______ in a quiet town.',
              options: ['live', 'lives', 'living', 'are live'],
              correctAnswerIndex: 0,
              explanation: "Parents ko'plik: live.",
            },
            {
              id: 'en-a1-u2-l3-q3',
              question: 'Sarah _______ at an international bank in Tashkent.',
              options: ['works', 'work', 'workes', 'working'],
              correctAnswerIndex: 0,
              explanation: 'Sarah birlik (She): works.',
            },
            {
              id: 'en-a1-u2-l3-q4',
              question: 'He _______ tennis with his friends every Saturday.',
              options: ['plays', 'play', 'plaies', 'is play'],
              correctAnswerIndex: 0,
              explanation: "Play so'zida unli + y bo'lgani uchun oddiy -s qo'shiladi: plays.",
            },
            {
              id: 'en-a1-u2-l3-q5',
              question: 'We _______ English vocabulary every day.',
              options: ['read', 'reads', 'reading', 'are read'],
              correctAnswerIndex: 0,
              explanation: '"We" bilan fe\'l o\'zgarmaydi: read.',
            },
          ],
        },
      },
    ],
  },
  {
    id: 'en-a1-u2-l4',
    courseId: 'english-a1',
    unitId: 'en-a1-u1',
    unitTitle: 'Unit 1: Essentials & Greetings',
    language: 'en',
    level: 'A1',
    lessonNumber: 6,
    title: "Present Simple Negatives (Don't / Doesn't)",
    description:
      "Inkor gaplar: don't va doesn't yordamchi fe'llari orqali xatolarsiz inkor qurish.",
    estimatedDurationMinutes: 15,
    icon: '⛔',
    steps: [
      {
        id: 'en-a1-u2-l4-s1',
        title: 'Inkor Shakli Qoidalari',
        type: 'learn',
        estimatedMinutes: 5,
        learnData: {
          title: "Present Simple Inkor Qoidasi: Don't va Doesn't",
          subtitle: "Unit 2 • 4-Dars: Harakat fe'llarini inkor qilish sintaksisi",
          explanation:
            "Ingliz tilida harakat fe'llarini inkor qilish uchun \"not\" so'zining o'zi yetarli emas. Bizga yordamchi fe'l kerak: DON'T (do not) yoki DOESN'T (does not). Eng muhim qoida: doesn't ishlatilganda, asosiy fe'ldan \"-s\" qo'shimchasi tushib qoladi!",
          keyPoints: [
            "I / You / We / They + DON'T + Asosiy fe'l (I don't drink coffee)",
            "He / She / It + DOESN'T + Asosiy fe'l (He doesn't eat fast food)",
            '⚠️ Oltin qoida: "He doesn\'t works" (XATO) -> "He doesn\'t WORK" (TO\'G\'RI, -s tushib qoladi)',
            '⚠️ "I not like" (XATO) -> "I DON\'T like" (TO\'G\'RI)',
            'Like (yoqtirmoq), understand (tushunmoq), drive (mashina haydamoq)',
          ],
          vocabulary: [
            {
              term: 'Coffee',
              reading: '/ˈkɒf.i/',
              meaning: 'Qahva, kofe',
              exampleSentence: "I don't drink black coffee in the evening.",
              exampleTranslation: 'Men kechqurun achchiq qahva ichmayman.',
            },
            {
              term: 'Tea',
              reading: '/tiː/',
              meaning: 'Choy',
              exampleSentence: "He drinks green tea, but he doesn't like milk tea.",
              exampleTranslation: "U ko'k choy ichadi, lekin sutli choyni yoqtirmaydi.",
            },
            {
              term: 'Like',
              reading: '/laɪk/',
              meaning: "Yoqtirmoq, ma'qul ko'rmoq",
              exampleSentence: "We don't like noisy and crowded places.",
              exampleTranslation: 'Biz shovqinli va gavjum joylarni yoqtirmaymiz.',
            },
            {
              term: 'Watch',
              reading: '/wɒtʃ/',
              meaning: "Tomosha qilmoq, ko'rmoq",
              exampleSentence: "She doesn't watch television during weekdays.",
              exampleTranslation: 'U ish kunlarida televizor tomosha qilmaydi.',
            },
            {
              term: 'Understand',
              reading: '/ˌʌn.dəˈstænd/',
              meaning: 'Tushunmoq, anglamoq',
              exampleSentence: "I don't understand this difficult grammar rule.",
              exampleTranslation: 'Men bu qiyin grammatika qoidasini tushunmayapman.',
            },
            {
              term: 'Early',
              reading: '/ˈɜː.li/',
              meaning: 'Erta, barvaqt',
              exampleSentence: "He doesn't wake up early on Sunday mornings.",
              exampleTranslation: "U yakshanba ertalablari barvaqt uyg'onmaydi.",
            },
            {
              term: 'Late',
              reading: '/leɪt/',
              meaning: 'Kech, kechikib',
              exampleSentence: "Please don't be late for the speaking session.",
              exampleTranslation: "Iltimos, speaking mashg'ulotiga kechikmang.",
            },
            {
              term: 'Drive',
              reading: '/draɪv/',
              meaning: 'Mashina haydamoq',
              exampleSentence: "My sister doesn't drive a car; she takes the metro.",
              exampleTranslation: 'Singlim mashina haydamaydi; u metroda yuradi.',
            },
          ],
          grammarRules: [
            {
              pattern: "Subject + don't / doesn't + Base Verb (Infinitive without to)",
              meaning: 'Harakat yoki odatning mavjud emasligini bildirish',
              usageNotes:
                "I/You/We/They -> don't; He/She/It -> doesn't. DOESN'T dan keyin fe'lga hech qanday -s qo'shilmaydi!",
              examples: [
                {
                  sentence: "I don't eat sugar because I care about my health.",
                  translation: "Men shakar yemayman, chunki sog'lig'imga e'tibor beraman.",
                },
                {
                  sentence: "He doesn't speak French, but he speaks English well.",
                  translation: 'U fransuzcha gapirmaydi, lekin inglizcha yaxshi gapiradi.',
                },
              ],
            },
          ],
          culturalNotes:
            '🎙️ IELTS Speaking Part 1 Foundation Corner:\nImtihon oluvchi: "Do you prefer drinking coffee or tea?"\nNamunaviy javob: "I definitely prefer hot green tea because I don\'t drink coffee. Strong coffee makes me nervous, so I avoid it, especially before important exams."',
        },
      },
      {
        id: 'en-a1-u2-l4-s2',
        title: 'Interaktiv Amaliy Mashq',
        type: 'practice',
        estimatedMinutes: 5,
        practiceData: {
          instructions: "Inkor gaplar qoidasiga ko'ra to'g'ri shaklni tanlang.",
          exercises: [
            {
              id: 'en-a1-u2-l4-e1',
              type: 'multiple-choice',
              prompt: '"He _______ like fast food." Bo\'sh joyga qaysi inkor shakli qo\'yiladi?',
              options: ["doesn't", "don't", "isn't", 'not'],
              correctAnswer: 0,
              explanation: '"He" bilan harakat fe\'lini inkor qilishda "doesn\'t" ishlatiladi.',
            },
            {
              id: 'en-a1-u2-l4-e2',
              type: 'multiple-choice',
              prompt: '"We _______ understand this complex reading passage."',
              options: ["don't", "doesn't", "aren't", 'not'],
              correctAnswer: 0,
              explanation: '"We" bilan "don\'t" ishlatiladi: We don\'t understand.',
            },
            {
              id: 'en-a1-u2-l4-e3',
              type: 'multiple-choice',
              prompt: "Qaysi gap to'g'ri tuzilgan?",
              options: [
                "She doesn't drive a car.",
                "She doesn't drives a car.",
                "She don't drive a car.",
                'She not drive a car.',
              ],
              correctAnswer: 0,
              explanation:
                "\"doesn't\" dan keyin fe'lning boshlang'ich shakli (drive) keladi, -s qo'shilmaydi.",
            },
            {
              id: 'en-a1-u2-l4-e4',
              type: 'multiple-choice',
              prompt: '"They _______ wake up early on weekends."',
              options: ["don't", "doesn't", "aren't", 'not'],
              correctAnswer: 0,
              explanation: '"They" ko\'plik olmoshi: don\'t wake up.',
            },
            {
              id: 'en-a1-u2-l4-e5',
              type: 'multiple-choice',
              prompt: '"My brother _______ watch TV; he prefers reading books."',
              options: ["doesn't", "don't", "isn't", "hasn't"],
              correctAnswer: 0,
              explanation: "My brother (He): doesn't watch.",
            },
          ],
        },
      },
      {
        id: 'en-a1-u2-l4-s3',
        title: 'Dars Sinov Testi',
        type: 'test',
        estimatedMinutes: 5,
        testData: {
          instructions: "Savollarga javob bering va o'zlashtirishni tekshiring.",
          passingScorePercentage: 80,
          questions: [
            {
              id: 'en-a1-u2-l4-q1',
              question: 'Sarah _______ coffee in the afternoon.',
              options: ["doesn't drink", "doesn't drinks", "don't drink", "isn't drink"],
              correctAnswerIndex: 0,
              explanation: "Sarah birlik (She): doesn't drink.",
            },
            {
              id: 'en-a1-u2-l4-q2',
              question: 'I _______ live in London; I live in Tashkent.',
              options: ["don't", "doesn't", 'am not', 'not'],
              correctAnswerIndex: 0,
              explanation: "I olmoshi bilan: don't.",
            },
            {
              id: 'en-a1-u2-l4-q3',
              question: 'The students _______ have their textbooks today.',
              options: ["don't", "doesn't", "aren't", "haven't"],
              correctAnswerIndex: 0,
              explanation: "The students ko'plik: don't have.",
            },
            {
              id: 'en-a1-u2-l4-q4',
              question: 'He _______ late for work because he leaves home early.',
              options: ["doesn't arrive", "doesn't arrives", "don't arrive", "isn't arrive"],
              correctAnswerIndex: 0,
              explanation: "He doesn't arrive: doesn't dan so'ng oddiy fe'l.",
            },
            {
              id: 'en-a1-u2-l4-q5',
              question: '"Biz shovqinni yoqtirmaymiz" gapining to\'g\'ri tarjimasi qaysi?',
              options: [
                "We don't like noise.",
                "We doesn't like noise.",
                'We not like noise.',
                "We aren't like noise.",
              ],
              correctAnswerIndex: 0,
              explanation: "We don't like noise.",
            },
          ],
        },
      },
    ],
  },
  {
    id: 'en-a1-u2-l5',
    courseId: 'english-a1',
    unitId: 'en-a1-u1',
    unitTitle: 'Unit 1: Essentials & Greetings',
    language: 'en',
    level: 'A1',
    lessonNumber: 7,
    title: 'Present Simple Questions (Do / Does & Wh-)',
    description:
      "Umumiy va maxsus so'roq gaplar: Do/Does, qisqa javoblar hamda Where, What, When savol so'zlari.",
    estimatedDurationMinutes: 15,
    icon: '❓',
    steps: [
      {
        id: 'en-a1-u2-l5-s1',
        title: "So'roq Gaplar Sintaksisi",
        type: 'learn',
        estimatedMinutes: 5,
        learnData: {
          title: 'Do / Does Yordamida Savol Tuzish',
          subtitle: 'Unit 2 • 5-Dars: Savol berish va intervyu muloqoti',
          explanation:
            "Ingliz tilida harakat fe'llari bilan savol tuzish uchun DO yoki DOES yordamchi fe'llari eganing (subject) oldiga chiqadi. IELTS Speaking intervyusida aynan shunday savollarga duch kelasiz va o'zingiz ham to'g'ri savol bera olishingiz zarur.",
          keyPoints: [
            "DO + I / You / We / They + Fe'l? -> Do you speak English? (Yes, I do / No, I don't)",
            "DOES + He / She / It + Fe'l? -> Does she live in Tashkent? (Yes, she does / No, she doesn't)",
            'Maxsus savollar (Wh-): Where (qayerda), What (nima), When (qachon), Why (nega)',
            "Formula: Wh-so'z + DO / DOES + Ega + Fe'l? (Where do you live? / What does he study?)",
            '⚠️ Tipik xato: "Where you work?" (XATO) -> "Where DO you work?" (TO\'G\'RI)',
            '⚠️ "Does he lives here?" (XATO) -> "Does he LIVE here?" (TO\'G\'RI, -s tushadi)',
          ],
          vocabulary: [
            {
              term: 'Question',
              reading: '/ˈkwes.tʃən/',
              meaning: 'Savol',
              exampleSentence: 'Can I ask a question about the test format?',
              exampleTranslation: 'Test formati haqida bitta savol bersam maylimi?',
            },
            {
              term: 'Answer',
              reading: '/ˈɑːn.sər/',
              meaning: 'Javob, javob bermoq',
              exampleSentence: 'Please answer in complete and clear sentences.',
              exampleTranslation: "Iltimos, to'liq va aniq gaplar bilan javob bering.",
            },
            {
              term: 'Where',
              reading: '/weər/',
              meaning: 'Qayerda, qayerga',
              exampleSentence: 'Where do you practice your English speaking?',
              exampleTranslation: "Inglizcha so'zlashuvni qayerda mashq qilasiz?",
            },
            {
              term: 'What',
              reading: '/wɒt/',
              meaning: 'Nima, qanday',
              exampleSentence: 'What do you usually do in your free time?',
              exampleTranslation: "Bo'sh vaqtingizda odatda nima bilan shug'ullanasiz?",
            },
            {
              term: 'When',
              reading: '/wen/',
              meaning: 'Qachon',
              exampleSentence: 'When does your English course begin?',
              exampleTranslation: 'Ingliz tili kursingiz qachon boshlanadi?',
            },
            {
              term: 'Why',
              reading: '/waɪ/',
              meaning: 'Nima uchun, nega',
              exampleSentence: 'Why do you want to achieve a high IELTS score?',
              exampleTranslation: 'Nima uchun yuqori IELTS baliga erishmoqchisiz?',
            },
            {
              term: 'Often',
              reading: '/ˈɒf.ən/',
              meaning: 'Tez-tez',
              exampleSentence: 'How often do you read academic articles?',
              exampleTranslation: "Qanchalik tez-tez ilmiy maqolalar o'qib turasiz?",
            },
            {
              term: 'Weekend',
              reading: '/ˌwiːkˈend/',
              meaning: 'Dam olish kunlari (hafta oxiri)',
              exampleSentence: 'What are your plans for this upcoming weekend?',
              exampleTranslation:
                'Yaqinlashib kelayotgan dam olish kunlari uchun rejalaringiz qanday?',
            },
          ],
          grammarRules: [
            {
              pattern: 'Do / Does + Subject + Base Verb? | Wh- + Do/Does + Subject + Base Verb?',
              meaning: "Umumiy va maxsus so'roq gaplarni to'g'ri shakllantirish",
              usageNotes:
                "Do (I, you, we, they) / Does (he, she, it). Does qatnashgan savolda asosiy fe'l o'zgarmaydi (boshlang'ich shaklida qoladi).",
              examples: [
                {
                  sentence: 'Do you like listening to English podcasts? — Yes, I do.',
                  translation: 'Inglizcha podkastlarni tinglashni yoqtirasizmi? — Ha, yoqtiraman.',
                },
                {
                  sentence: 'Where does your brother work? — He works at an IT company.',
                  translation: 'Akangiz qayerda ishlaydi? — U IT kompaniyasida ishlaydi.',
                },
              ],
            },
          ],
          culturalNotes:
            '🎙️ IELTS Speaking Part 1 Foundation Corner:\nImtihon oluvchi: "What do you usually do on weekends?"\nNamunaviy javob: "On weekends, I usually relax with my family in the morning, and in the afternoon, I often play football with my friends or read books to prepare for IELTS."',
        },
      },
      {
        id: 'en-a1-u2-l5-s2',
        title: 'Interaktiv Amaliy Mashq',
        type: 'practice',
        estimatedMinutes: 5,
        practiceData: {
          instructions: "So'roq gaplar grammatikasi bo'yicha to'g'ri javoblarni tanlang.",
          exercises: [
            {
              id: 'en-a1-u2-l5-e1',
              type: 'multiple-choice',
              prompt:
                "\"_______ you live near the city center?\" Bo'sh joyga qaysi yordamchi fe'l qo'yiladi?",
              options: ['Do', 'Does', 'Are', 'Is'],
              correctAnswer: 0,
              explanation: '"You" bilan harakat fe\'li (live) qatnashganda "Do" ishlatiladi.',
            },
            {
              id: 'en-a1-u2-l5-e2',
              type: 'multiple-choice',
              prompt: '"Where _______ your sister work?"',
              options: ['does', 'do', 'is', 'are'],
              correctAnswer: 0,
              explanation: '"Your sister" birlik (She), shuning uchun "does" to\'g\'ri.',
            },
            {
              id: 'en-a1-u2-l5-e3',
              type: 'multiple-choice',
              prompt: 'Dialog: "— Do you study English every day? — Yes, I _______."',
              options: ['do', 'am', 'have', 'study'],
              correctAnswer: 0,
              explanation: '"Do you...?" savoliga qisqa ijobiy javob: "Yes, I do."',
            },
            {
              id: 'en-a1-u2-l5-e4',
              type: 'multiple-choice',
              prompt: "Qaysi savol to'g'ri tuzilgan?",
              options: [
                'What does he do on weekends?',
                'What does he does on weekends?',
                'What do he do on weekends?',
                'What he does on weekends?',
              ],
              correctAnswer: 0,
              explanation:
                "\"What does he do...\" to'g'ri, chunki does dan so'ng asosiy fe'l \"do\" bo'lib keladi.",
            },
            {
              id: 'en-a1-u2-l5-e5',
              type: 'multiple-choice',
              prompt: '"— Does she speak French? — No, she _______."',
              options: ["doesn't", "don't", "isn't", "hasn't"],
              correctAnswer: 0,
              explanation: 'Qisqa inkor javob: "No, she doesn\'t."',
            },
          ],
        },
      },
      {
        id: 'en-a1-u2-l5-s3',
        title: 'Dars Sinov Testi',
        type: 'test',
        estimatedMinutes: 5,
        testData: {
          instructions: 'Savollarga javob bering va Unit 2 ni muvaffaqiyatli yakunlang.',
          passingScorePercentage: 80,
          questions: [
            {
              id: 'en-a1-u2-l5-q1',
              question: 'Where _______ your parents live?',
              options: ['do', 'does', 'are', 'is'],
              correctAnswerIndex: 0,
              explanation: "Your parents ko'plik: Where do your parents live?",
            },
            {
              id: 'en-a1-u2-l5-q2',
              question: '_______ he like reading English novels?',
              options: ['Does', 'Do', 'Is', 'Are'],
              correctAnswerIndex: 0,
              explanation: 'He bilan: Does he like...?',
            },
            {
              id: 'en-a1-u2-l5-q3',
              question: 'How often _______ you exercise at the gym?',
              options: ['do', 'does', 'are', 'have'],
              correctAnswerIndex: 0,
              explanation: 'You bilan: How often do you exercise?',
            },
            {
              id: 'en-a1-u2-l5-q4',
              question: '_______ you like chocolate ice cream?',
              options: ['Do', 'Are', 'Have', 'Does'],
              correctAnswerIndex: 0,
              explanation: 'Do you like...?',
            },
            {
              id: 'en-a1-u2-l5-q5',
              question: 'What time _______ the bank open on Mondays?',
              options: ['does', 'do', 'is', 'are'],
              correctAnswerIndex: 0,
              explanation: "The bank (it) birlikda bo'lgani uchun: What time does the bank open?",
            },
          ],
        },
      },
    ],
  },
  {
    id: 'en-a1-u4-l5',
    courseId: 'english-a1',
    unitId: 'en-a1-u1',
    unitTitle: 'Unit 1: Essentials & Greetings',
    language: 'en',
    level: 'A1',
    lessonNumber: 8,
    title: 'Present Simple vs Present Continuous',
    description:
      "Doimiy odatlar (Present Simple) va ayni damdagi harakatlar (Present Continuous) farqi, holat fe'llari (Stative Verbs).",
    estimatedDurationMinutes: 14,
    icon: '⚖️',
    steps: [
      {
        id: 'en-a1-u4-l5-s1',
        title: 'Oddiy Zamon va Davomli Zamon Qiyosi',
        type: 'learn',
        estimatedMinutes: 5,
        learnData: {
          title: 'Present Simple vs Continuous & Stative Verbs',
          explanation:
            'Ikki muhim hozirgi zamonning farqlanishi:\n\n1. Ma\'no jihatidan asosiy farq:\n- PRESENT SIMPLE (Doimiy tartib / Odatlar / Faktlar):\n  • Har kuni, haftada, odatda takrorlanadigan ish-harakatlar.\n  • Signal so\'zlar: always, usually, often, sometimes, never, every day.\n  • Misol: "I drink coffee every morning." (Odatim, har tong ichaman).\n- PRESENT CONTINUOUS (Ayni paytdagi yoki vaqtinchalik harakat):\n  • Ayni damda yoki faqat shu kunlarda bo\'layotgan ish.\n  • Signal so\'zlar: now, right now, at the moment, this week, currently.\n  • Misol: "Look! I am drinking green tea right now." (Ayni shu daqiqada ichyapman).\n\n2. Holat fe\'llari (STATIVE VERBS — O\'ta muhim qoida!):\n- Ayrim fe\'llar jismoniy harakatni emas, aqliy holat, his-tuyg\'u yoki egalikni bildiradi.\n- Bu fe\'llar xatto ayni paytda sodir bo\'layotgan bo\'lsa ham, HECH QACHON davomli zamonda (-ing bilan) ishlatilmaydi!\n  • Aqliy holat: know (bilmoq), understand (tushunmoq), remember (eslamoq), believe (ishonmoq).\n  • Xohish / His: want (xohlamoq), need (muhtoj bo\'lmoq), like, love, hate.\n  • Egalik: have (egalik ma\'nosida), own, belong to.\n  • ❌ "I am knowing the answer now." -> ✅ "I KNOW the answer now."\n  • ❌ "Are you wanting water?" -> ✅ "Do you WANT water?"\n  • ❌ "I am understanding you." -> ✅ "I UNDERSTAND you."\n\n3. O\'zbek o\'rganuvchilari uchun xavfli tuzoqlar (Common Pitfalls):\n- ❌ "I am living in Tashkent always." -> ✅ "I live in Tashkent." (Doimiy yashash joyi - Present Simple!).\n- ❌ "What do you do now?" -> ✅ "What are you doing now?" (Ayni paytda nima qilayotganini so\'raganda Continuous kerak; "What do you do?" esa kasbni bildiradi!).\n\n4. IELTS Speaking Part 1 Foundation Corner:\n- Topic: Work / Study vs Current Projects\n- Examiner: "What do you do, and what are you working on at the moment?"\n- Model Band 6.0+ Answer: "Normally, I work as an accountant at a local firm, but this week I am attending an intensive professional development seminar."\n- Grammar Mastery: "Normally I work... but this week I am attending..." - bu ikki zamonning kontrastini namoyish etish imtihon oluvchini hayratda qoldiradi.',
          vocabulary: [
            {
              term: 'understand',
              reading: '/ˌʌndəˈstænd/',
              meaning: "tushunmoq (holat fe'li, -ing olmaydi)",
              exampleSentence: 'I understand the grammar explanation perfectly now.',
              exampleTranslation:
                'Men hozir grammatika tushuntirishini juda yaxshi tushunib turibman.',
            },
            {
              term: 'believe',
              reading: '/bɪˈliːv/',
              meaning: "ishonmoq (holat fe'li)",
              exampleSentence: 'I truly believe that daily practice leads to fluency.',
              exampleTranslation:
                'Men har kungi amaliyot ravonlikka olib kelishiga chin dildan ishonaman.',
            },
            {
              term: 'remember',
              reading: '/rɪˈmembə/',
              meaning: "eslamoq, yodda tutmoq (holat fe'li)",
              exampleSentence: "Do you remember the teacher's instructions?",
              exampleTranslation: "O'qituvchining ko'rsatmalarini eslay olasizmi?",
            },
            {
              term: 'temporary',
              reading: '/ˈtempərəri/',
              meaning: 'vaqtinchalik',
              exampleSentence: 'He is staying in a hotel as a temporary arrangement.',
              exampleTranslation: 'U vaqtinchalik chora sifatida mehmonxonada yashab turibdi.',
            },
            {
              term: 'permanent',
              reading: '/ˈpɜːmənənt/',
              meaning: "doimiy, o'zgarmas",
              exampleSentence: 'They have a permanent home in the suburbs of the city.',
              exampleTranslation: 'Ularning shahar chekkasida doimiy uylari bor.',
            },
            {
              term: 'belong to',
              reading: '/bɪˈlɒŋ tuː/',
              meaning: "tegishli bo'lmoq (holat fe'li)",
              exampleSentence: 'This leather wallet belongs to my colleague.',
              exampleTranslation: 'Bu charm hamyon mening hamkasbimga tegishli.',
            },
            {
              term: 'attend',
              reading: '/əˈtend/',
              meaning: 'qatnashmoq (kursda, seminarda)',
              exampleSentence: 'This month, I am attending evening IELTS classes.',
              exampleTranslation: 'Shu oyda men kechki IELTS darslariga qatnayapman.',
            },
            {
              term: 'routine',
              reading: '/ruːˈtiːn/',
              meaning: 'kun tartibi, odatiy jadval',
              exampleSentence: 'Regular physical exercise is a vital part of my daily routine.',
              exampleTranslation:
                'Muntazam jismoniy mashqlar mening kundalik tartibimning muhim qismidir.',
            },
          ],
        },
      },
      {
        id: 'en-a1-u4-l5-s2',
        title: 'Zamonlar Qiyosi Mashqlari',
        type: 'practice',
        estimatedMinutes: 4,
        practiceData: {
          instructions: 'Contextga qarab Present Simple yoki Present Continuous shaklini tanlang.',
          exercises: [
            {
              id: 'en-a1-u4-l5-e1',
              type: 'multiple-choice',
              prompt:
                "Bo'sh joyni to'ldiring: 'I ___ an apple every day, but right now I ___ a banana.'",
              options: ['eat / am eating', 'am eating / eat', 'eat / eat', 'am eating / am eating'],
              correctAnswer: 0,
              explanation:
                "'Every day' odat (eat - Present Simple), 'right now' ayni paytdagi harakat (am eating - Present Continuous).",
            },
            {
              id: 'en-a1-u4-l5-e2',
              type: 'multiple-choice',
              prompt: "Holat fe'li (stative verb) bo'yicha qaysi jumla to'g'ri?",
              options: [
                'I am needing a glass of water right now.',
                'I need a glass of water right now.',
                'I am need a glass of water right now.',
                'I needing a glass of water right now.',
              ],
              correctAnswer: 1,
              explanation:
                "'Need' holat fe'li bo'lib, 'right now' kelsa ham faqat Present Simple da 'I need' bo'ladi.",
            },
            {
              id: 'en-a1-u4-l5-e3',
              type: 'multiple-choice',
              prompt: "'What do you do?' savoli nimani anglatadi?",
              options: [
                'Ayni paytda nima ish qilyapsiz?',
                'Sizning kasbingiz/asosiy faoliyatingiz nima?',
                'Kecha nima qildingiz?',
                'Qayerga ketyapsiz?',
              ],
              correctAnswer: 1,
              explanation:
                "'What do you do?' - kasb-kor haqidagi savol ('What is your job?'). Hozir nima qilyapsiz deyish uchun 'What are you doing?' deyiladi.",
            },
            {
              id: 'en-a1-u4-l5-e4',
              type: 'multiple-choice',
              prompt: "'Do you ___ what the lecturer is saying?' (tushunyapsizmi?)",
              options: ['understanding', 'understand', 'are understanding', 'understands'],
              correctAnswer: 1,
              explanation:
                "'Understand' stative verb bo'lgani uchun 'Do you understand?' deb so'raladi.",
            },
            {
              id: 'en-a1-u4-l5-e5',
              type: 'multiple-choice',
              prompt:
                "Vaqtinchalik holat uchun to'g'ri gapni tanlang: 'He usually lives in Samarkand, but this month he ___ in Tashkent.'",
              options: ['lives', 'is living', 'live', 'lived'],
              correctAnswer: 1,
              explanation:
                "'This month' vaqtinchalik holatni bildiradi, shuning uchun Present Continuous 'is living' to'g'ri.",
            },
          ],
        },
      },
      {
        id: 'en-a1-u4-l5-s3',
        title: 'Dars Testi: Simple vs Continuous',
        type: 'test',
        estimatedMinutes: 5,
        testData: {
          instructions: "Savollarga to'g'ri javob berib, mavzuni mustahkamlang.",
          passingScorePercentage: 80,
          questions: [
            {
              id: 'en-a1-u4-l5-q1',
              question:
                "Qaysi fe'l holat fe'li (stative verb) bo'lib, odatda Continuous zamonda ishlatilmaydi?",
              options: ['run', 'know', 'write', 'cook'],
              correctAnswerIndex: 1,
              explanation:
                "'Know' (bilmoq) - aqliy holat fe'li bo'lib, davomli zamonda qo'llanilmaydi.",
            },
            {
              id: 'en-a1-u4-l5-q2',
              question: 'Qaysi jumla grammatik jihatdan XATO?',
              options: [
                'I am believing your story.',
                'I believe your story.',
                'She is playing the piano.',
                'They go to school by bus.',
              ],
              correctAnswerIndex: 0,
              explanation:
                "'Believe' stative verb bo'lgani uchun 'I am believing' deb bo'lmaydi, 'I believe' bo'lishi shart.",
            },
            {
              id: 'en-a1-u4-l5-q3',
              question: "'Shhh! The manager ___ with a client right now.'",
              options: ['talks', 'is talking', 'talk', 'are talking'],
              correctAnswerIndex: 1,
              explanation: "'Right now' - ayni damdagi harakat, 'The manager is talking'.",
            },
            {
              id: 'en-a1-u4-l5-q4',
              question: "'This backpack ___ to my younger brother.'",
              options: ['is belonging', 'belongs', 'belong', 'are belonging'],
              correctAnswerIndex: 1,
              explanation:
                "'Belong' holat fe'li va 'backpack' birlikda bo'lgani uchun 'belongs' to'g'ri.",
            },
            {
              id: 'en-a1-u4-l5-q5',
              question:
                "IELTS Speaking: 'Do you prefer to study in the morning or at night?' savoliga eng yaxshi javob qaysi?",
              options: [
                'I am study night.',
                'Generally speaking, I study much better in the early morning because my mind is fresh, although currently I am having to study at night due to my work schedule.',
                'Morning good, night bad.',
                'I study always morning.',
              ],
              correctAnswerIndex: 1,
              explanation:
                "'Generally speaking, I study... although currently I am having to study...' - ikkala zamonning tabiiy uyg'unligini yuqori darajada ko'rsatib beradi.",
            },
          ],
        },
      },
    ],
  },
  {
    id: 'en-a1-u1-have-got',
    courseId: 'english-a1',
    unitId: 'en-a1-u1',
    unitTitle: 'Unit 1: Essentials & Greetings',
    language: 'en',
    level: 'A1',
    lessonNumber: 9,
    title: 'Have / Have Got',
    description: 'Egalikni aytish',
    estimatedDurationMinutes: 15,
    steps: [
      {
        id: 'en-a1-u1-have-got-s1',
        type: 'learn',
        title: 'Qoida va misol',
        estimatedMinutes: 5,
        learnData: {
          title: 'Have / Have Got',
          explanation:
            'I/you/we/they bilan have yoki have got, he/she/it bilan has yoki has got ishlatiladi.',
          grammarRules: [
            {
              pattern:
                'I/you/we/they bilan have yoki have got, he/she/it bilan has yoki has got ishlatiladi.',
              meaning: 'Egalikni aytish',
              examples: [
                {
                  sentence: 'I have a bike. / I’ve got a bike.',
                  translation: 'Mening velosipedim bor.',
                },
              ],
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-have-got-s2',
        type: 'practice',
        title: 'Mashq',
        estimatedMinutes: 5,
        practiceData: {
          instructions: 'To‘g‘ri javobni tanlang.',
          exercises: [
            {
              id: 'en-a1-u1-have-got-e1',
              options: ['have', 'has', 'is'],
              explanation:
                'I/you/we/they bilan have yoki have got, he/she/it bilan has yoki has got ishlatiladi.',
              prompt: 'She ___ got a brother.',
              type: 'multiple-choice',
              correctAnswer: 1,
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-have-got-s3',
        type: 'test',
        title: 'Dars testi',
        estimatedMinutes: 5,
        testData: {
          instructions: 'Bo‘sh joyni to‘ldiring.',
          passingScorePercentage: 80,
          questions: [
            {
              id: 'en-a1-u1-have-got-q1',
              options: ['have', 'has', 'having'],
              explanation:
                'I/you/we/they bilan have yoki have got, he/she/it bilan has yoki has got ishlatiladi.',
              question: 'They ___ a small house.',
              correctAnswerIndex: 0,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'en-a1-u1-was-were',
    courseId: 'english-a1',
    unitId: 'en-a1-u1',
    unitTitle: 'Unit 1: Essentials & Greetings',
    language: 'en',
    level: 'A1',
    lessonNumber: 10,
    title: 'Was / Were',
    description: 'O‘tgan holat yoki joyni aytish',
    estimatedDurationMinutes: 15,
    steps: [
      {
        id: 'en-a1-u1-was-were-s1',
        type: 'learn',
        title: 'Qoida va misol',
        estimatedMinutes: 5,
        learnData: {
          title: 'Was / Were',
          explanation:
            'I/he/she/it bilan was, you/we/they bilan were ishlatiladi. Inkor uchun wasn’t yoki weren’t qo‘llanadi.',
          grammarRules: [
            {
              pattern:
                'I/he/she/it bilan was, you/we/they bilan were ishlatiladi. Inkor uchun wasn’t yoki weren’t qo‘llanadi.',
              meaning: 'O‘tgan holat yoki joyni aytish',
              examples: [
                {
                  sentence: 'We were at home yesterday.',
                  translation: 'Biz kecha uyda edik.',
                },
              ],
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-was-were-s2',
        type: 'practice',
        title: 'Mashq',
        estimatedMinutes: 5,
        practiceData: {
          instructions: 'To‘g‘ri javobni tanlang.',
          exercises: [
            {
              id: 'en-a1-u1-was-were-e1',
              options: ['were', 'am', 'was'],
              explanation:
                'I/he/she/it bilan was, you/we/they bilan were ishlatiladi. Inkor uchun wasn’t yoki weren’t qo‘llanadi.',
              prompt: 'I ___ tired yesterday.',
              type: 'multiple-choice',
              correctAnswer: 2,
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-was-were-s3',
        type: 'test',
        title: 'Dars testi',
        estimatedMinutes: 5,
        testData: {
          instructions: 'Bo‘sh joyni to‘ldiring.',
          passingScorePercentage: 80,
          questions: [
            {
              id: 'en-a1-u1-was-were-q1',
              options: ['were', 'was', 'are'],
              explanation:
                'I/he/she/it bilan was, you/we/they bilan were ishlatiladi. Inkor uchun wasn’t yoki weren’t qo‘llanadi.',
              question: 'They ___ at school yesterday.',
              correctAnswerIndex: 0,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'en-a1-u1-past-simple',
    courseId: 'english-a1',
    unitId: 'en-a1-u1',
    unitTitle: 'Unit 1: Essentials & Greetings',
    language: 'en',
    level: 'A1',
    lessonNumber: 11,
    title: 'Past Simple',
    description: 'O‘tmishda tugagan ishni aytish',
    estimatedDurationMinutes: 15,
    steps: [
      {
        id: 'en-a1-u1-past-simple-s1',
        type: 'learn',
        title: 'Qoida va misol',
        estimatedMinutes: 5,
        learnData: {
          title: 'Past Simple',
          explanation:
            'Ko‘p fe’llarga -ed qo‘shiladi. Noto‘g‘ri fe’llar shakli o‘zgaradi: go → went, get → got.',
          grammarRules: [
            {
              pattern:
                'Ko‘p fe’llarga -ed qo‘shiladi. Noto‘g‘ri fe’llar shakli o‘zgaradi: go → went, get → got.',
              meaning: 'O‘tmishda tugagan ishni aytish',
              examples: [
                {
                  sentence: 'I worked yesterday. She went home.',
                  translation: 'Men kecha ishladim. U uyga ketdi.',
                },
              ],
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-past-simple-s2',
        type: 'practice',
        title: 'Mashq',
        estimatedMinutes: 5,
        practiceData: {
          instructions: 'To‘g‘ri javobni tanlang.',
          exercises: [
            {
              id: 'en-a1-u1-past-simple-e1',
              options: ['go', 'went', 'goes'],
              explanation:
                'Ko‘p fe’llarga -ed qo‘shiladi. Noto‘g‘ri fe’llar shakli o‘zgaradi: go → went, get → got.',
              prompt: 'He ___ home yesterday.',
              type: 'multiple-choice',
              correctAnswer: 1,
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-past-simple-s3',
        type: 'test',
        title: 'Dars testi',
        estimatedMinutes: 5,
        testData: {
          instructions: 'Bo‘sh joyni to‘ldiring.',
          passingScorePercentage: 80,
          questions: [
            {
              id: 'en-a1-u1-past-simple-q1',
              options: ['clean', 'cleans', 'cleaned'],
              explanation:
                'Ko‘p fe’llarga -ed qo‘shiladi. Noto‘g‘ri fe’llar shakli o‘zgaradi: go → went, get → got.',
              question: 'We ___ the room last night.',
              correctAnswerIndex: 2,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'en-a1-u1-past-simple-questions-negatives',
    courseId: 'english-a1',
    unitId: 'en-a1-u1',
    unitTitle: 'Unit 1: Essentials & Greetings',
    language: 'en',
    level: 'A1',
    lessonNumber: 12,
    title: 'Past Simple Questions and Negatives',
    description: 'O‘tgan ish haqida savol va inkor',
    estimatedDurationMinutes: 15,
    steps: [
      {
        id: 'en-a1-u1-past-simple-questions-negatives-s1',
        type: 'learn',
        title: 'Qoida va misol',
        estimatedMinutes: 5,
        learnData: {
          title: 'Past Simple Questions and Negatives',
          explanation:
            'Savol uchun Did egadan oldin keladi. Inkor uchun didn’t ishlatiladi. Did va didn’t dan keyin fe’lning asosiy shakli keladi.',
          grammarRules: [
            {
              pattern:
                'Savol uchun Did egadan oldin keladi. Inkor uchun didn’t ishlatiladi. Did va didn’t dan keyin fe’lning asosiy shakli keladi.',
              meaning: 'O‘tgan ish haqida savol va inkor',
              examples: [
                {
                  sentence: 'Did you call? I didn’t call.',
                  translation: 'Qo‘ng‘iroq qildingizmi? Men qo‘ng‘iroq qilmadim.',
                },
              ],
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-past-simple-questions-negatives-s2',
        type: 'practice',
        title: 'Mashq',
        estimatedMinutes: 5,
        practiceData: {
          instructions: 'To‘g‘ri javobni tanlang.',
          exercises: [
            {
              id: 'en-a1-u1-past-simple-questions-negatives-e1',
              options: ['went', 'goes', 'go'],
              explanation:
                'Savol uchun Did egadan oldin keladi. Inkor uchun didn’t ishlatiladi. Did va didn’t dan keyin fe’lning asosiy shakli keladi.',
              prompt: 'Did she ___ home?',
              type: 'multiple-choice',
              correctAnswer: 2,
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-past-simple-questions-negatives-s3',
        type: 'test',
        title: 'Dars testi',
        estimatedMinutes: 5,
        testData: {
          instructions: 'Bo‘sh joyni to‘ldiring.',
          passingScorePercentage: 80,
          questions: [
            {
              id: 'en-a1-u1-past-simple-questions-negatives-q1',
              options: ['watch', 'watched', 'watches'],
              explanation:
                'Savol uchun Did egadan oldin keladi. Inkor uchun didn’t ishlatiladi. Did va didn’t dan keyin fe’lning asosiy shakli keladi.',
              question: 'I didn’t ___ the film.',
              correctAnswerIndex: 0,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'en-a1-u1-past-continuous',
    courseId: 'english-a1',
    unitId: 'en-a1-u1',
    unitTitle: 'Unit 1: Essentials & Greetings',
    language: 'en',
    level: 'A1',
    lessonNumber: 13,
    title: 'Past Continuous',
    description: 'O‘tmishda davom etayotgan ishni aytish',
    estimatedDurationMinutes: 15,
    steps: [
      {
        id: 'en-a1-u1-past-continuous-s1',
        type: 'learn',
        title: 'Qoida va misol',
        estimatedMinutes: 5,
        learnData: {
          title: 'Past Continuous',
          explanation:
            'Ega + was/were + fe’lning -ing shakli o‘tmishdagi muayyan vaqtda davom etayotgan ishni bildiradi.',
          grammarRules: [
            {
              pattern:
                'Ega + was/were + fe’lning -ing shakli o‘tmishdagi muayyan vaqtda davom etayotgan ishni bildiradi.',
              meaning: 'O‘tmishda davom etayotgan ishni aytish',
              examples: [
                {
                  sentence: 'I was reading at eight.',
                  translation: 'Soat sakkizda kitob o‘qiyotgan edim.',
                },
              ],
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-past-continuous-s2',
        type: 'practice',
        title: 'Mashq',
        estimatedMinutes: 5,
        practiceData: {
          instructions: 'To‘g‘ri javobni tanlang.',
          exercises: [
            {
              id: 'en-a1-u1-past-continuous-e1',
              options: ['was', 'were', 'are'],
              explanation:
                'Ega + was/were + fe’lning -ing shakli o‘tmishdagi muayyan vaqtda davom etayotgan ishni bildiradi.',
              prompt: 'They ___ waiting at six.',
              type: 'multiple-choice',
              correctAnswer: 1,
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-past-continuous-s3',
        type: 'test',
        title: 'Dars testi',
        estimatedMinutes: 5,
        testData: {
          instructions: 'Bo‘sh joyni to‘ldiring.',
          passingScorePercentage: 80,
          questions: [
            {
              id: 'en-a1-u1-past-continuous-q1',
              options: ['worked', 'work', 'working'],
              explanation:
                'Ega + was/were + fe’lning -ing shakli o‘tmishdagi muayyan vaqtda davom etayotgan ishni bildiradi.',
              question: 'She was ___ at noon.',
              correctAnswerIndex: 2,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'en-a1-u1-past-simple-vs-continuous',
    courseId: 'english-a1',
    unitId: 'en-a1-u1',
    unitTitle: 'Unit 1: Essentials & Greetings',
    language: 'en',
    level: 'A1',
    lessonNumber: 14,
    title: 'Past Simple vs Past Continuous',
    description: 'Davom etayotgan va tugagan ishni farqlash',
    estimatedDurationMinutes: 15,
    steps: [
      {
        id: 'en-a1-u1-past-simple-vs-continuous-s1',
        type: 'learn',
        title: 'Qoida va misol',
        estimatedMinutes: 5,
        learnData: {
          title: 'Past Simple vs Past Continuous',
          explanation:
            'Davom etayotgan ish uchun was/were + -ing ishlatiladi. Shu paytda sodir bo‘lgan qisqa voqea uchun Past Simple ishlatiladi.',
          grammarRules: [
            {
              pattern:
                'Davom etayotgan ish uchun was/were + -ing ishlatiladi. Shu paytda sodir bo‘lgan qisqa voqea uchun Past Simple ishlatiladi.',
              meaning: 'Davom etayotgan va tugagan ishni farqlash',
              examples: [
                {
                  sentence: 'I was cooking when you called.',
                  translation: 'Siz qo‘ng‘iroq qilganingizda ovqat tayyorlayotgan edim.',
                },
              ],
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-past-simple-vs-continuous-s2',
        type: 'practice',
        title: 'Mashq',
        estimatedMinutes: 5,
        practiceData: {
          instructions: 'To‘g‘ri javobni tanlang.',
          exercises: [
            {
              id: 'en-a1-u1-past-simple-vs-continuous-e1',
              options: ['rained', 'was raining', 'rain'],
              explanation:
                'Davom etayotgan ish uchun was/were + -ing ishlatiladi. Shu paytda sodir bo‘lgan qisqa voqea uchun Past Simple ishlatiladi.',
              prompt: 'We were walking when it ___.',
              type: 'multiple-choice',
              correctAnswer: 0,
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-past-simple-vs-continuous-s3',
        type: 'test',
        title: 'Dars testi',
        estimatedMinutes: 5,
        testData: {
          instructions: 'Bo‘sh joyni to‘ldiring.',
          passingScorePercentage: 80,
          questions: [
            {
              id: 'en-a1-u1-past-simple-vs-continuous-q1',
              options: ['cook', 'was cooking', 'cooks'],
              explanation:
                'Davom etayotgan ish uchun was/were + -ing ishlatiladi. Shu paytda sodir bo‘lgan qisqa voqea uchun Past Simple ishlatiladi.',
              question: 'I ___ dinner when the phone rang.',
              correctAnswerIndex: 1,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'en-a1-u1-present-perfect',
    courseId: 'english-a1',
    unitId: 'en-a1-u1',
    unitTitle: 'Unit 1: Essentials & Greetings',
    language: 'en',
    level: 'A1',
    lessonNumber: 15,
    title: 'Present Perfect',
    description: 'Hozir natijasi bor ish',
    estimatedDurationMinutes: 15,
    steps: [
      {
        id: 'en-a1-u1-present-perfect-s1',
        type: 'learn',
        title: 'Qoida va misol',
        estimatedMinutes: 5,
        learnData: {
          title: 'Present Perfect',
          explanation: 'Ega + have/has + fe’lning uchinchi shakli. Masalan, lose → lost.',
          grammarRules: [
            {
              pattern: 'Ega + have/has + fe’lning uchinchi shakli. Masalan, lose → lost.',
              meaning: 'Hozir natijasi bor ish',
              examples: [
                {
                  sentence: 'I have lost my key.',
                  translation: 'Kalitimni yo‘qotib qo‘ydim.',
                },
              ],
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-present-perfect-s2',
        type: 'practice',
        title: 'Mashq',
        estimatedMinutes: 5,
        practiceData: {
          instructions: 'To‘g‘ri javobni tanlang.',
          exercises: [
            {
              id: 'en-a1-u1-present-perfect-e1',
              options: ['has', 'have', 'is'],
              explanation: 'Ega + have/has + fe’lning uchinchi shakli. Masalan, lose → lost.',
              prompt: 'She ___ finished her work.',
              type: 'multiple-choice',
              correctAnswer: 0,
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-present-perfect-s3',
        type: 'test',
        title: 'Dars testi',
        estimatedMinutes: 5,
        testData: {
          instructions: 'Bo‘sh joyni to‘ldiring.',
          passingScorePercentage: 80,
          questions: [
            {
              id: 'en-a1-u1-present-perfect-q1',
              options: ['open', 'opened', 'opens'],
              explanation: 'Ega + have/has + fe’lning uchinchi shakli. Masalan, lose → lost.',
              question: 'They have ___ the window.',
              correctAnswerIndex: 1,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'en-a1-u1-present-perfect-just-already-yet',
    courseId: 'english-a1',
    unitId: 'en-a1-u1',
    unitTitle: 'Unit 1: Essentials & Greetings',
    language: 'en',
    level: 'A1',
    lessonNumber: 16,
    title: 'Just, Already and Yet',
    description: 'Yaqinda yoki kutilgan ish',
    estimatedDurationMinutes: 15,
    steps: [
      {
        id: 'en-a1-u1-present-perfect-just-already-yet-s1',
        type: 'learn',
        title: 'Qoida va misol',
        estimatedMinutes: 5,
        learnData: {
          title: 'Just, Already and Yet',
          explanation:
            'Just va already odatda have/has dan keyin keladi. Yet ko‘pincha savol yoki inkor gapning oxirida keladi.',
          grammarRules: [
            {
              pattern:
                'Just va already odatda have/has dan keyin keladi. Yet ko‘pincha savol yoki inkor gapning oxirida keladi.',
              meaning: 'Yaqinda yoki kutilgan ish',
              examples: [
                {
                  sentence: 'I haven’t eaten yet.',
                  translation: 'Men hali ovqatlanmadim.',
                },
              ],
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-present-perfect-just-already-yet-s2',
        type: 'practice',
        title: 'Mashq',
        estimatedMinutes: 5,
        practiceData: {
          instructions: 'To‘g‘ri javobni tanlang.',
          exercises: [
            {
              id: 'en-a1-u1-present-perfect-just-already-yet-e1',
              options: ['yet', 'just', 'ever'],
              explanation:
                'Just va already odatda have/has dan keyin keladi. Yet ko‘pincha savol yoki inkor gapning oxirida keladi.',
              prompt: 'She has ___ arrived. (Hozirgina.)',
              type: 'multiple-choice',
              correctAnswer: 1,
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-present-perfect-just-already-yet-s3',
        type: 'test',
        title: 'Dars testi',
        estimatedMinutes: 5,
        testData: {
          instructions: 'Bo‘sh joyni to‘ldiring.',
          passingScorePercentage: 80,
          questions: [
            {
              id: 'en-a1-u1-present-perfect-just-already-yet-q1',
              options: ['since', 'for', 'yet'],
              explanation:
                'Just va already odatda have/has dan keyin keladi. Yet ko‘pincha savol yoki inkor gapning oxirida keladi.',
              question: 'Have you finished ___?',
              correctAnswerIndex: 2,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'en-a1-u1-present-perfect-experience',
    courseId: 'english-a1',
    unitId: 'en-a1-u1',
    unitTitle: 'Unit 1: Essentials & Greetings',
    language: 'en',
    level: 'A1',
    lessonNumber: 17,
    title: 'Have You Ever…?',
    description: 'Hayotiy tajriba',
    estimatedDurationMinutes: 15,
    steps: [
      {
        id: 'en-a1-u1-present-perfect-experience-s1',
        type: 'learn',
        title: 'Qoida va misol',
        estimatedMinutes: 5,
        learnData: {
          title: 'Have You Ever…?',
          explanation:
            'Have/Has + ega + ever + fe’lning uchinchi shakli tajriba haqida so‘raydi. Never tajriba bo‘lmaganini bildiradi.',
          grammarRules: [
            {
              pattern:
                'Have/Has + ega + ever + fe’lning uchinchi shakli tajriba haqida so‘raydi. Never tajriba bo‘lmaganini bildiradi.',
              meaning: 'Hayotiy tajriba',
              examples: [
                {
                  sentence: 'Have you ever ridden a horse?',
                  translation: 'Hech ot minib ko‘rganmisiz?',
                },
              ],
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-present-perfect-experience-s2',
        type: 'practice',
        title: 'Mashq',
        estimatedMinutes: 5,
        practiceData: {
          instructions: 'To‘g‘ri javobni tanlang.',
          exercises: [
            {
              id: 'en-a1-u1-present-perfect-experience-e1',
              options: ['ago', 'ever', 'since'],
              explanation:
                'Have/Has + ega + ever + fe’lning uchinchi shakli tajriba haqida so‘raydi. Never tajriba bo‘lmaganini bildiradi.',
              prompt: 'Have you ___ visited Bukhara?',
              type: 'multiple-choice',
              correctAnswer: 1,
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-present-perfect-experience-s3',
        type: 'test',
        title: 'Dars testi',
        estimatedMinutes: 5,
        testData: {
          instructions: 'Bo‘sh joyni to‘ldiring.',
          passingScorePercentage: 80,
          questions: [
            {
              id: 'en-a1-u1-present-perfect-experience-q1',
              options: ['try', 'tried', 'trying'],
              explanation:
                'Have/Has + ega + ever + fe’lning uchinchi shakli tajriba haqida so‘raydi. Never tajriba bo‘lmaganini bildiradi.',
              question: 'I have never ___ sushi.',
              correctAnswerIndex: 1,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'en-a1-u1-present-perfect-how-long',
    courseId: 'english-a1',
    unitId: 'en-a1-u1',
    unitTitle: 'Unit 1: Essentials & Greetings',
    language: 'en',
    level: 'A1',
    lessonNumber: 18,
    title: 'How Long Have You…?',
    description: 'Hozirgacha davom etgan holat',
    estimatedDurationMinutes: 15,
    steps: [
      {
        id: 'en-a1-u1-present-perfect-how-long-s1',
        type: 'learn',
        title: 'Qoida va misol',
        estimatedMinutes: 5,
        learnData: {
          title: 'How Long Have You…?',
          explanation:
            'How long + have/has + ega + fe’lning uchinchi shakli davomiylikni so‘raydi.',
          grammarRules: [
            {
              pattern:
                'How long + have/has + ega + fe’lning uchinchi shakli davomiylikni so‘raydi.',
              meaning: 'Hozirgacha davom etgan holat',
              examples: [
                {
                  sentence: 'How long have you lived here?',
                  translation: 'Bu yerda qancha vaqtdan beri yashaysiz?',
                },
              ],
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-present-perfect-how-long-s2',
        type: 'practice',
        title: 'Mashq',
        estimatedMinutes: 5,
        practiceData: {
          instructions: 'To‘g‘ri javobni tanlang.',
          exercises: [
            {
              id: 'en-a1-u1-present-perfect-how-long-e1',
              options: ['has', 'is', 'have'],
              explanation:
                'How long + have/has + ega + fe’lning uchinchi shakli davomiylikni so‘raydi.',
              prompt: 'How long ___ she known Ali?',
              type: 'multiple-choice',
              correctAnswer: 0,
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-present-perfect-how-long-s3',
        type: 'test',
        title: 'Dars testi',
        estimatedMinutes: 5,
        testData: {
          instructions: 'Bo‘sh joyni to‘ldiring.',
          passingScorePercentage: 80,
          questions: [
            {
              id: 'en-a1-u1-present-perfect-how-long-q1',
              options: ['have', 'having', 'had'],
              explanation:
                'How long + have/has + ega + fe’lning uchinchi shakli davomiylikni so‘raydi.',
              question: 'How long have you ___ this bike?',
              correctAnswerIndex: 2,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'en-a1-u1-for-since-ago',
    courseId: 'english-a1',
    unitId: 'en-a1-u1',
    unitTitle: 'Unit 1: Essentials & Greetings',
    language: 'en',
    level: 'A1',
    lessonNumber: 19,
    title: 'For, Since and Ago',
    description: 'Davomiylik, boshlanish va o‘tgan vaqt',
    estimatedDurationMinutes: 15,
    steps: [
      {
        id: 'en-a1-u1-for-since-ago-s1',
        type: 'learn',
        title: 'Qoida va misol',
        estimatedMinutes: 5,
        learnData: {
          title: 'For, Since and Ago',
          explanation:
            'For davomiylikni, since boshlanish nuqtasini bildiradi. Ago o‘tgan vaqtni bildirib, ko‘pincha Past Simple bilan ishlatiladi.',
          grammarRules: [
            {
              pattern:
                'For davomiylikni, since boshlanish nuqtasini bildiradi. Ago o‘tgan vaqtni bildirib, ko‘pincha Past Simple bilan ishlatiladi.',
              meaning: 'Davomiylik, boshlanish va o‘tgan vaqt',
              examples: [
                {
                  sentence: 'I have lived here since 2020.',
                  translation: '2020-yildan beri shu yerda yashayman.',
                },
              ],
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-for-since-ago-s2',
        type: 'practice',
        title: 'Mashq',
        estimatedMinutes: 5,
        practiceData: {
          instructions: 'To‘g‘ri javobni tanlang.',
          exercises: [
            {
              id: 'en-a1-u1-for-since-ago-e1',
              options: ['since', 'for', 'ago'],
              explanation:
                'For davomiylikni, since boshlanish nuqtasini bildiradi. Ago o‘tgan vaqtni bildirib, ko‘pincha Past Simple bilan ishlatiladi.',
              prompt: 'She has worked here ___ three years.',
              type: 'multiple-choice',
              correctAnswer: 1,
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-for-since-ago-s3',
        type: 'test',
        title: 'Dars testi',
        estimatedMinutes: 5,
        testData: {
          instructions: 'Bo‘sh joyni to‘ldiring.',
          passingScorePercentage: 80,
          questions: [
            {
              id: 'en-a1-u1-for-since-ago-q1',
              options: ['since', 'for', 'ago'],
              explanation:
                'For davomiylikni, since boshlanish nuqtasini bildiradi. Ago o‘tgan vaqtni bildirib, ko‘pincha Past Simple bilan ishlatiladi.',
              question: 'They moved here two years ___.',
              correctAnswerIndex: 2,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'en-a1-u1-present-perfect-vs-past-simple',
    courseId: 'english-a1',
    unitId: 'en-a1-u1',
    unitTitle: 'Unit 1: Essentials & Greetings',
    language: 'en',
    level: 'A1',
    lessonNumber: 20,
    title: 'Present Perfect vs Past Simple',
    description: 'Hozirga bog‘liq natija va tugagan vaqt',
    estimatedDurationMinutes: 15,
    steps: [
      {
        id: 'en-a1-u1-present-perfect-vs-past-simple-s1',
        type: 'learn',
        title: 'Qoida va misol',
        estimatedMinutes: 5,
        learnData: {
          title: 'Present Perfect vs Past Simple',
          explanation:
            'Yesterday kabi tugagan vaqt ko‘rsatilsa, Past Simple ishlatiladi. Hozirgi natija muhim bo‘lsa va tugagan vaqt aytilmasa, Present Perfect ishlatilishi mumkin.',
          grammarRules: [
            {
              pattern:
                'Yesterday kabi tugagan vaqt ko‘rsatilsa, Past Simple ishlatiladi. Hozirgi natija muhim bo‘lsa va tugagan vaqt aytilmasa, Present Perfect ishlatilishi mumkin.',
              meaning: 'Hozirga bog‘liq natija va tugagan vaqt',
              examples: [
                {
                  sentence: 'I saw Ali yesterday. I have lost my key.',
                  translation: 'Kecha Alini ko‘rdim. Kalitimni yo‘qotib qo‘ydim.',
                },
              ],
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-present-perfect-vs-past-simple-s2',
        type: 'practice',
        title: 'Mashq',
        estimatedMinutes: 5,
        practiceData: {
          instructions: 'To‘g‘ri javobni tanlang.',
          exercises: [
            {
              id: 'en-a1-u1-present-perfect-vs-past-simple-e1',
              options: ['saw', 'have seen', 'see'],
              explanation:
                'Yesterday kabi tugagan vaqt ko‘rsatilsa, Past Simple ishlatiladi. Hozirgi natija muhim bo‘lsa va tugagan vaqt aytilmasa, Present Perfect ishlatilishi mumkin.',
              prompt: 'I ___ her yesterday.',
              type: 'multiple-choice',
              correctAnswer: 0,
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-present-perfect-vs-past-simple-s3',
        type: 'test',
        title: 'Dars testi',
        estimatedMinutes: 5,
        testData: {
          instructions: 'Bo‘sh joyni to‘ldiring.',
          passingScorePercentage: 80,
          questions: [
            {
              id: 'en-a1-u1-present-perfect-vs-past-simple-q1',
              options: ['lose', 'have lost', 'losing'],
              explanation:
                'Yesterday kabi tugagan vaqt ko‘rsatilsa, Past Simple ishlatiladi. Hozirgi natija muhim bo‘lsa va tugagan vaqt aytilmasa, Present Perfect ishlatilishi mumkin.',
              question: 'I can’t open the door. I ___ my key.',
              correctAnswerIndex: 1,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'en-a1-u1-passive-present-past',
    courseId: 'english-a1',
    unitId: 'en-a1-u1',
    unitTitle: 'Unit 1: Essentials & Greetings',
    language: 'en',
    level: 'A1',
    lessonNumber: 21,
    title: 'Present and Past Passive',
    description: 'Majhul nisbatning hozirgi va o‘tgan shakli',
    estimatedDurationMinutes: 15,
    steps: [
      {
        id: 'en-a1-u1-passive-present-past-s1',
        type: 'learn',
        title: 'Qoida va misol',
        estimatedMinutes: 5,
        learnData: {
          title: 'Present and Past Passive',
          explanation:
            'Majhul nisbatda gap ish bajarilgan narsaga qaratiladi. Hozirgi zamonda am/is/are + V3, o‘tgan zamonda was/were + V3 ishlatiladi.',
          grammarRules: [
            {
              pattern:
                'Majhul nisbatda gap ish bajarilgan narsaga qaratiladi. Hozirgi zamonda am/is/are + V3, o‘tgan zamonda was/were + V3 ishlatiladi.',
              meaning: 'Majhul nisbatning hozirgi va o‘tgan shakli',
              examples: [
                {
                  sentence: 'The windows were cleaned yesterday.',
                  translation: 'Derazalar kecha tozalandi.',
                },
              ],
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-passive-present-past-s2',
        type: 'practice',
        title: 'Mashq',
        estimatedMinutes: 5,
        practiceData: {
          instructions: 'To‘g‘ri javobni tanlang.',
          exercises: [
            {
              id: 'en-a1-u1-passive-present-past-e1',
              options: ['is', 'does', 'has'],
              explanation:
                'Majhul nisbatda gap ish bajarilgan narsaga qaratiladi. Hozirgi zamonda am/is/are + V3, o‘tgan zamonda was/were + V3 ishlatiladi.',
              prompt: 'Rice ___ grown here.',
              type: 'multiple-choice',
              correctAnswer: 0,
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-passive-present-past-s3',
        type: 'test',
        title: 'Dars testi',
        estimatedMinutes: 5,
        testData: {
          instructions: 'Bo‘sh joyni to‘ldiring.',
          passingScorePercentage: 80,
          questions: [
            {
              id: 'en-a1-u1-passive-present-past-q1',
              options: ['is', 'was', 'were'],
              explanation:
                'Majhul nisbatda gap ish bajarilgan narsaga qaratiladi. Hozirgi zamonda am/is/are + V3, o‘tgan zamonda was/were + V3 ishlatiladi.',
              question: 'The bridge ___ built in 2005.',
              correctAnswerIndex: 1,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'en-a1-u1-passive-continuous-perfect',
    courseId: 'english-a1',
    unitId: 'en-a1-u1',
    unitTitle: 'Unit 1: Essentials & Greetings',
    language: 'en',
    level: 'A1',
    lessonNumber: 22,
    title: 'Continuous and Perfect Passive',
    description: 'Davom etayotgan yoki yakunlangan ishning majhul shakli',
    estimatedDurationMinutes: 15,
    steps: [
      {
        id: 'en-a1-u1-passive-continuous-perfect-s1',
        type: 'learn',
        title: 'Qoida va misol',
        estimatedMinutes: 5,
        learnData: {
          title: 'Continuous and Perfect Passive',
          explanation:
            'Hozir bajarilayotgan ish uchun am/is/are + being + V3, natijasi hozir muhim ish uchun have/has + been + V3 ishlatiladi.',
          grammarRules: [
            {
              pattern:
                'Hozir bajarilayotgan ish uchun am/is/are + being + V3, natijasi hozir muhim ish uchun have/has + been + V3 ishlatiladi.',
              meaning: 'Davom etayotgan yoki yakunlangan ishning majhul shakli',
              examples: [
                {
                  sentence: 'The road is being repaired. The door has been painted.',
                  translation: 'Yo‘l ta’mirlanmoqda. Eshik bo‘yalgan.',
                },
              ],
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-passive-continuous-perfect-s2',
        type: 'practice',
        title: 'Mashq',
        estimatedMinutes: 5,
        practiceData: {
          instructions: 'To‘g‘ri javobni tanlang.',
          exercises: [
            {
              id: 'en-a1-u1-passive-continuous-perfect-e1',
              options: ['been', 'being', 'be'],
              explanation:
                'Hozir bajarilayotgan ish uchun am/is/are + being + V3, natijasi hozir muhim ish uchun have/has + been + V3 ishlatiladi.',
              prompt: 'The room is ___ cleaned right now.',
              type: 'multiple-choice',
              correctAnswer: 1,
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-passive-continuous-perfect-s3',
        type: 'test',
        title: 'Dars testi',
        estimatedMinutes: 5,
        testData: {
          instructions: 'Bo‘sh joyni to‘ldiring.',
          passingScorePercentage: 80,
          questions: [
            {
              id: 'en-a1-u1-passive-continuous-perfect-q1',
              options: ['being', 'be', 'been'],
              explanation:
                'Hozir bajarilayotgan ish uchun am/is/are + being + V3, natijasi hozir muhim ish uchun have/has + been + V3 ishlatiladi.',
              question: 'The keys have ___ found.',
              correctAnswerIndex: 2,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'en-a1-u1-auxiliary-be-have-do',
    courseId: 'english-a1',
    unitId: 'en-a1-u1',
    unitTitle: 'Unit 1: Essentials & Greetings',
    language: 'en',
    level: 'A1',
    lessonNumber: 23,
    title: 'Be, Have and Do',
    description: 'Yordamchi fe’llarni farqlash',
    estimatedDurationMinutes: 15,
    steps: [
      {
        id: 'en-a1-u1-auxiliary-be-have-do-s1',
        type: 'learn',
        title: 'Qoida va misol',
        estimatedMinutes: 5,
        learnData: {
          title: 'Be, Have and Do',
          explanation:
            'Be davomli zamon va majhul nisbatda, have Perfect zamonlarda ishlatiladi. Do/does/did Simple zamonlarda savol va inkor yasaydi.',
          grammarRules: [
            {
              pattern:
                'Be davomli zamon va majhul nisbatda, have Perfect zamonlarda ishlatiladi. Do/does/did Simple zamonlarda savol va inkor yasaydi.',
              meaning: 'Yordamchi fe’llarni farqlash',
              examples: [
                {
                  sentence: 'Are you waiting? Have you eaten? Did you call?',
                  translation: 'Kutyapsizmi? Ovqatlandingizmi? Qo‘ng‘iroq qildingizmi?',
                },
              ],
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-auxiliary-be-have-do-s2',
        type: 'practice',
        title: 'Mashq',
        estimatedMinutes: 5,
        practiceData: {
          instructions: 'To‘g‘ri javobni tanlang.',
          exercises: [
            {
              id: 'en-a1-u1-auxiliary-be-have-do-e1',
              options: ['Does', 'Is', 'Has'],
              explanation:
                'Be davomli zamon va majhul nisbatda, have Perfect zamonlarda ishlatiladi. Do/does/did Simple zamonlarda savol va inkor yasaydi.',
              prompt: '___ she finished the report yet?',
              type: 'multiple-choice',
              correctAnswer: 2,
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-auxiliary-be-have-do-s3',
        type: 'test',
        title: 'Dars testi',
        estimatedMinutes: 5,
        testData: {
          instructions: 'Bo‘sh joyni to‘ldiring.',
          passingScorePercentage: 80,
          questions: [
            {
              id: 'en-a1-u1-auxiliary-be-have-do-q1',
              options: ['Did', 'Have', 'Were'],
              explanation:
                'Be davomli zamon va majhul nisbatda, have Perfect zamonlarda ishlatiladi. Do/does/did Simple zamonlarda savol va inkor yasaydi.',
              question: '___ they visit you yesterday?',
              correctAnswerIndex: 0,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'en-a1-u1-regular-irregular-verbs',
    courseId: 'english-a1',
    unitId: 'en-a1-u1',
    unitTitle: 'Unit 1: Essentials & Greetings',
    language: 'en',
    level: 'A1',
    lessonNumber: 24,
    title: 'Regular and Irregular Verbs',
    description: 'V2 va V3 shakllarini farqlash',
    estimatedDurationMinutes: 15,
    steps: [
      {
        id: 'en-a1-u1-regular-irregular-verbs-s1',
        type: 'learn',
        title: 'Qoida va misol',
        estimatedMinutes: 5,
        learnData: {
          title: 'Regular and Irregular Verbs',
          explanation:
            'Muntazam fe’llarda V2 va V3 odatda -ed bilan tugaydi. Noto‘g‘ri fe’llarning shakllari alohida o‘rganiladi: go → went → gone.',
          grammarRules: [
            {
              pattern:
                'Muntazam fe’llarda V2 va V3 odatda -ed bilan tugaydi. Noto‘g‘ri fe’llarning shakllari alohida o‘rganiladi: go → went → gone.',
              meaning: 'V2 va V3 shakllarini farqlash',
              examples: [
                {
                  sentence: 'She went home. She has gone home.',
                  translation: 'U uyga ketdi. U uyga ketgan.',
                },
              ],
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-regular-irregular-verbs-s2',
        type: 'practice',
        title: 'Mashq',
        estimatedMinutes: 5,
        practiceData: {
          instructions: 'To‘g‘ri javobni tanlang.',
          exercises: [
            {
              id: 'en-a1-u1-regular-irregular-verbs-e1',
              options: ['wrote', 'written', 'write'],
              explanation:
                'Muntazam fe’llarda V2 va V3 odatda -ed bilan tugaydi. Noto‘g‘ri fe’llarning shakllari alohida o‘rganiladi: go → went → gone.',
              prompt: 'He has ___ the letter.',
              type: 'multiple-choice',
              correctAnswer: 1,
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-regular-irregular-verbs-s3',
        type: 'test',
        title: 'Dars testi',
        estimatedMinutes: 5,
        testData: {
          instructions: 'Bo‘sh joyni to‘ldiring.',
          passingScorePercentage: 80,
          questions: [
            {
              id: 'en-a1-u1-regular-irregular-verbs-q1',
              options: ['sent', 'send', 'sending'],
              explanation:
                'Muntazam fe’llarda V2 va V3 odatda -ed bilan tugaydi. Noto‘g‘ri fe’llarning shakllari alohida o‘rganiladi: go → went → gone.',
              question: 'I ___ the email yesterday.',
              correctAnswerIndex: 0,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'en-a1-u1-used-to',
    courseId: 'english-a1',
    unitId: 'en-a1-u1',
    unitTitle: 'Unit 1: Essentials & Greetings',
    language: 'en',
    level: 'A1',
    lessonNumber: 25,
    title: 'Used To',
    description: 'O‘tmishdagi odat va holat',
    estimatedDurationMinutes: 15,
    steps: [
      {
        id: 'en-a1-u1-used-to-s1',
        type: 'learn',
        title: 'Qoida va misol',
        estimatedMinutes: 5,
        learnData: {
          title: 'Used To',
          explanation:
            'Used to + fe’lning asosiy shakli hozir o‘zgargan eski odat yoki holatni bildiradi. Savolda Did … use to, inkorda didn’t use to ishlatiladi.',
          grammarRules: [
            {
              pattern:
                'Used to + fe’lning asosiy shakli hozir o‘zgargan eski odat yoki holatni bildiradi. Savolda Did … use to, inkorda didn’t use to ishlatiladi.',
              meaning: 'O‘tmishdagi odat va holat',
              examples: [
                {
                  sentence: 'I used to walk to school. Now I take the bus.',
                  translation: 'Ilgari maktabga piyoda borardim. Hozir avtobusda boraman.',
                },
              ],
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-used-to-s2',
        type: 'practice',
        title: 'Mashq',
        estimatedMinutes: 5,
        practiceData: {
          instructions: 'To‘g‘ri javobni tanlang.',
          exercises: [
            {
              id: 'en-a1-u1-used-to-e1',
              options: ['lived', 'live', 'living'],
              explanation:
                'Used to + fe’lning asosiy shakli hozir o‘zgargan eski odat yoki holatni bildiradi. Savolda Did … use to, inkorda didn’t use to ishlatiladi.',
              prompt: 'She used to ___ here.',
              type: 'multiple-choice',
              correctAnswer: 1,
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-used-to-s3',
        type: 'test',
        title: 'Dars testi',
        estimatedMinutes: 5,
        testData: {
          instructions: 'Bo‘sh joyni to‘ldiring.',
          passingScorePercentage: 80,
          questions: [
            {
              id: 'en-a1-u1-used-to-q1',
              options: ['used', 'using', 'use'],
              explanation:
                'Used to + fe’lning asosiy shakli hozir o‘zgargan eski odat yoki holatni bildiradi. Savolda Did … use to, inkorda didn’t use to ishlatiladi.',
              question: 'Did you ___ to play chess?',
              correctAnswerIndex: 2,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'en-a1-u1-future-arrangements',
    courseId: 'english-a1',
    unitId: 'en-a1-u1',
    unitTitle: 'Unit 1: Essentials & Greetings',
    language: 'en',
    level: 'A1',
    lessonNumber: 26,
    title: 'Present Continuous for Future Arrangements',
    description: 'Oldindan kelishilgan reja',
    estimatedDurationMinutes: 15,
    steps: [
      {
        id: 'en-a1-u1-future-arrangements-s1',
        type: 'learn',
        title: 'Qoida va misol',
        estimatedMinutes: 5,
        learnData: {
          title: 'Present Continuous for Future Arrangements',
          explanation:
            'Present Continuous kelajak vaqti ko‘rsatilganda oldindan kelishilgan rejani ham bildiradi.',
          grammarRules: [
            {
              pattern:
                'Present Continuous kelajak vaqti ko‘rsatilganda oldindan kelishilgan rejani ham bildiradi.',
              meaning: 'Oldindan kelishilgan reja',
              examples: [
                {
                  sentence: 'I’m meeting Lola at six tomorrow.',
                  translation: 'Ertaga soat oltida Lola bilan uchrashaman.',
                },
              ],
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-future-arrangements-s2',
        type: 'practice',
        title: 'Mashq',
        estimatedMinutes: 5,
        practiceData: {
          instructions: 'To‘g‘ri javobni tanlang.',
          exercises: [
            {
              id: 'en-a1-u1-future-arrangements-e1',
              options: ['are seeing', 'saw', 'have seen'],
              explanation:
                'Present Continuous kelajak vaqti ko‘rsatilganda oldindan kelishilgan rejani ham bildiradi.',
              prompt: 'We ___ the doctor at ten tomorrow. (Uchrashuv belgilangan.)',
              type: 'multiple-choice',
              correctAnswer: 0,
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-future-arrangements-s3',
        type: 'test',
        title: 'Dars testi',
        estimatedMinutes: 5,
        testData: {
          instructions: 'Bo‘sh joyni to‘ldiring.',
          passingScorePercentage: 80,
          questions: [
            {
              id: 'en-a1-u1-future-arrangements-q1',
              options: ['did you do', 'are you doing', 'have you done'],
              explanation:
                'Present Continuous kelajak vaqti ko‘rsatilganda oldindan kelishilgan rejani ham bildiradi.',
              question: 'What ___ on Friday evening? (Rejangiz qanday?)',
              correctAnswerIndex: 1,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'en-a1-u1-going-to',
    courseId: 'english-a1',
    unitId: 'en-a1-u1',
    unitTitle: 'Unit 1: Essentials & Greetings',
    language: 'en',
    level: 'A1',
    lessonNumber: 27,
    title: 'Be Going To',
    description: 'Niyat va belgiga asoslangan taxmin',
    estimatedDurationMinutes: 15,
    steps: [
      {
        id: 'en-a1-u1-going-to-s1',
        type: 'learn',
        title: 'Qoida va misol',
        estimatedMinutes: 5,
        learnData: {
          title: 'Be Going To',
          explanation:
            'Am/is/are + going to + fe’lning asosiy shakli oldindan qilingan niyatni yoki hozirgi belgiga asoslangan taxminni bildiradi.',
          grammarRules: [
            {
              pattern:
                'Am/is/are + going to + fe’lning asosiy shakli oldindan qilingan niyatni yoki hozirgi belgiga asoslangan taxminni bildiradi.',
              meaning: 'Niyat va belgiga asoslangan taxmin',
              examples: [
                {
                  sentence: 'Look at those dark clouds. It’s going to rain.',
                  translation: 'Anavi qora bulutlarga qarang. Yomg‘ir yog‘adiganga o‘xshaydi.',
                },
              ],
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-going-to-s2',
        type: 'practice',
        title: 'Mashq',
        estimatedMinutes: 5,
        practiceData: {
          instructions: 'To‘g‘ri javobni tanlang.',
          exercises: [
            {
              id: 'en-a1-u1-going-to-e1',
              options: ['has gone', 'went', 'is going'],
              explanation:
                'Am/is/are + going to + fe’lning asosiy shakli oldindan qilingan niyatni yoki hozirgi belgiga asoslangan taxminni bildiradi.',
              prompt: 'She has decided to study tonight. She ___ to study tonight.',
              type: 'multiple-choice',
              correctAnswer: 2,
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-going-to-s3',
        type: 'test',
        title: 'Dars testi',
        estimatedMinutes: 5,
        testData: {
          instructions: 'Bo‘sh joyni to‘ldiring.',
          passingScorePercentage: 80,
          questions: [
            {
              id: 'en-a1-u1-going-to-q1',
              options: ['is going', 'has gone', 'went'],
              explanation:
                'Am/is/are + going to + fe’lning asosiy shakli oldindan qilingan niyatni yoki hozirgi belgiga asoslangan taxminni bildiradi.',
              question: 'Watch out! That glass ___ to fall.',
              correctAnswerIndex: 0,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'en-a1-u1-will-decisions-offers',
    courseId: 'english-a1',
    unitId: 'en-a1-u1',
    unitTitle: 'Unit 1: Essentials & Greetings',
    language: 'en',
    level: 'A1',
    lessonNumber: 28,
    title: 'Will and Shall for Decisions and Offers',
    description: 'Tezkor qaror, yordam va taklif',
    estimatedDurationMinutes: 15,
    steps: [
      {
        id: 'en-a1-u1-will-decisions-offers-s1',
        type: 'learn',
        title: 'Qoida va misol',
        estimatedMinutes: 5,
        learnData: {
          title: 'Will and Shall for Decisions and Offers',
          explanation:
            'Will + fe’lning asosiy shakli gapirayotgan paytda qilingan qaror yoki yordam taklifini bildirishi mumkin. Shall I…? yordam taklif qilish, Shall we…? birgalikda nimadir qilishni taklif etish uchun ishlatiladi.',
          grammarRules: [
            {
              pattern:
                'Will + fe’lning asosiy shakli gapirayotgan paytda qilingan qaror yoki yordam taklifini bildirishi mumkin. Shall I…? yordam taklif qilish, Shall we…? birgalikda nimadir qilishni taklif etish uchun ishlatiladi.',
              meaning: 'Tezkor qaror, yordam va taklif',
              examples: [
                {
                  sentence: 'The phone is ringing. I’ll answer it.',
                  translation: 'Telefon jiringlayapti. Men javob beraman.',
                },
              ],
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-will-decisions-offers-s2',
        type: 'practice',
        title: 'Mashq',
        estimatedMinutes: 5,
        practiceData: {
          instructions: 'To‘g‘ri javobni tanlang.',
          exercises: [
            {
              id: 'en-a1-u1-will-decisions-offers-e1',
              options: ['Have', 'Shall', 'Did'],
              explanation:
                'Will + fe’lning asosiy shakli gapirayotgan paytda qilingan qaror yoki yordam taklifini bildirishi mumkin. Shall I…? yordam taklif qilish, Shall we…? birgalikda nimadir qilishni taklif etish uchun ishlatiladi.',
              prompt: 'These bags are heavy. ___ I help you?',
              type: 'multiple-choice',
              correctAnswer: 1,
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-will-decisions-offers-s3',
        type: 'test',
        title: 'Dars testi',
        estimatedMinutes: 5,
        testData: {
          instructions: 'Bo‘sh joyni to‘ldiring.',
          passingScorePercentage: 80,
          questions: [
            {
              id: 'en-a1-u1-will-decisions-offers-q1',
              options: ['have', 'did', 'will'],
              explanation:
                'Will + fe’lning asosiy shakli gapirayotgan paytda qilingan qaror yoki yordam taklifini bildirishi mumkin. Shall I…? yordam taklif qilish, Shall we…? birgalikda nimadir qilishni taklif etish uchun ishlatiladi.',
              question: 'Someone is at the door. I ___ open it.',
              correctAnswerIndex: 2,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'en-a1-u1-will-predictions',
    courseId: 'english-a1',
    unitId: 'en-a1-u1',
    unitTitle: 'Unit 1: Essentials & Greetings',
    language: 'en',
    level: 'A1',
    lessonNumber: 29,
    title: 'Will and Shall for Predictions',
    description: 'Kelajak haqida fikr va taxmin',
    estimatedDurationMinutes: 15,
    steps: [
      {
        id: 'en-a1-u1-will-predictions-s1',
        type: 'learn',
        title: 'Qoida va misol',
        estimatedMinutes: 5,
        learnData: {
          title: 'Will and Shall for Predictions',
          explanation:
            'Will + fe’lning asosiy shakli kelajak haqida fikr yoki taxmin bildiradi. Inkor shakli won’t. Britaniya inglizchasida I va we bilan shall rasmiyroq shakl sifatida ham uchraydi.',
          grammarRules: [
            {
              pattern:
                'Will + fe’lning asosiy shakli kelajak haqida fikr yoki taxmin bildiradi. Inkor shakli won’t. Britaniya inglizchasida I va we bilan shall rasmiyroq shakl sifatida ham uchraydi.',
              meaning: 'Kelajak haqida fikr va taxmin',
              examples: [
                {
                  sentence: 'I think our team will win.',
                  translation: 'Menimcha, jamoamiz g‘alaba qozonadi.',
                },
              ],
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-will-predictions-s2',
        type: 'practice',
        title: 'Mashq',
        estimatedMinutes: 5,
        practiceData: {
          instructions: 'To‘g‘ri javobni tanlang.',
          exercises: [
            {
              id: 'en-a1-u1-will-predictions-e1',
              options: ['will', 'has', 'was'],
              explanation:
                'Will + fe’lning asosiy shakli kelajak haqida fikr yoki taxmin bildiradi. Inkor shakli won’t. Britaniya inglizchasida I va we bilan shall rasmiyroq shakl sifatida ham uchraydi.',
              prompt: 'I think it ___ be cold tomorrow.',
              type: 'multiple-choice',
              correctAnswer: 0,
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-will-predictions-s3',
        type: 'test',
        title: 'Dars testi',
        estimatedMinutes: 5,
        testData: {
          instructions: 'Bo‘sh joyni to‘ldiring.',
          passingScorePercentage: 80,
          questions: [
            {
              id: 'en-a1-u1-will-predictions-q1',
              options: ['has', 'will', 'did'],
              explanation:
                'Will + fe’lning asosiy shakli kelajak haqida fikr yoki taxmin bildiradi. Inkor shakli won’t. Britaniya inglizchasida I va we bilan shall rasmiyroq shakl sifatida ham uchraydi.',
              question: 'I don’t think Ali ___ be late.',
              correctAnswerIndex: 1,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'en-a1-u1-might',
    courseId: 'english-a1',
    unitId: 'en-a1-u1',
    unitTitle: 'Unit 1: Essentials & Greetings',
    language: 'en',
    level: 'A1',
    lessonNumber: 30,
    title: 'Might',
    description: 'Noaniq ehtimol',
    estimatedDurationMinutes: 15,
    steps: [
      {
        id: 'en-a1-u1-might-s1',
        type: 'learn',
        title: 'Qoida va misol',
        estimatedMinutes: 5,
        learnData: {
          title: 'Might',
          explanation:
            'Might + fe’lning asosiy shakli biror ish bo‘lishi mumkinligini bildiradi. Might not ish bo‘lmasligi mumkinligini anglatadi.',
          grammarRules: [
            {
              pattern:
                'Might + fe’lning asosiy shakli biror ish bo‘lishi mumkinligini bildiradi. Might not ish bo‘lmasligi mumkinligini anglatadi.',
              meaning: 'Noaniq ehtimol',
              examples: [
                {
                  sentence: 'I might visit Samarkand this weekend.',
                  translation: 'Bu dam olish kunlari Samarqandga borishim mumkin.',
                },
              ],
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-might-s2',
        type: 'practice',
        title: 'Mashq',
        estimatedMinutes: 5,
        practiceData: {
          instructions: 'To‘g‘ri javobni tanlang.',
          exercises: [
            {
              id: 'en-a1-u1-might-e1',
              options: ['does', 'has', 'might'],
              explanation:
                'Might + fe’lning asosiy shakli biror ish bo‘lishi mumkinligini bildiradi. Might not ish bo‘lmasligi mumkinligini anglatadi.',
              prompt: 'It ___ rain tonight. I’m not sure.',
              type: 'multiple-choice',
              correctAnswer: 2,
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-might-s3',
        type: 'test',
        title: 'Dars testi',
        estimatedMinutes: 5,
        testData: {
          instructions: 'Bo‘sh joyni to‘ldiring.',
          passingScorePercentage: 80,
          questions: [
            {
              id: 'en-a1-u1-might-q1',
              options: ['come', 'comes', 'came'],
              explanation:
                'Might + fe’lning asosiy shakli biror ish bo‘lishi mumkinligini bildiradi. Might not ish bo‘lmasligi mumkinligini anglatadi.',
              question: 'She might not ___ tomorrow.',
              correctAnswerIndex: 0,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'en-a1-u1-can-could',
    courseId: 'english-a1',
    unitId: 'en-a1-u1',
    unitTitle: 'Unit 1: Essentials & Greetings',
    language: 'en',
    level: 'A1',
    lessonNumber: 31,
    title: 'Can and Could',
    description: 'Hozirgi va o‘tmishdagi qobiliyat',
    estimatedDurationMinutes: 15,
    steps: [
      {
        id: 'en-a1-u1-can-could-s1',
        type: 'learn',
        title: 'Qoida va misol',
        estimatedMinutes: 5,
        learnData: {
          title: 'Can and Could',
          explanation:
            'Can hozirgi qobiliyatni, could o‘tmishdagi umumiy qobiliyatni bildiradi. Ikkalasidan keyin fe’lning asosiy shakli keladi.',
          grammarRules: [
            {
              pattern:
                'Can hozirgi qobiliyatni, could o‘tmishdagi umumiy qobiliyatni bildiradi. Ikkalasidan keyin fe’lning asosiy shakli keladi.',
              meaning: 'Hozirgi va o‘tmishdagi qobiliyat',
              examples: [
                {
                  sentence: 'I can swim now, but I couldn’t swim when I was five.',
                  translation: 'Hozir suza olaman, lekin besh yoshimda suza olmas edim.',
                },
              ],
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-can-could-s2',
        type: 'practice',
        title: 'Mashq',
        estimatedMinutes: 5,
        practiceData: {
          instructions: 'To‘g‘ri javobni tanlang.',
          exercises: [
            {
              id: 'en-a1-u1-can-could-e1',
              options: ['rides', 'ride', 'riding'],
              explanation:
                'Can hozirgi qobiliyatni, could o‘tmishdagi umumiy qobiliyatni bildiradi. Ikkalasidan keyin fe’lning asosiy shakli keladi.',
              prompt: 'She can ___ a bike.',
              type: 'multiple-choice',
              correctAnswer: 1,
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-can-could-s3',
        type: 'test',
        title: 'Dars testi',
        estimatedMinutes: 5,
        testData: {
          instructions: 'Bo‘sh joyni to‘ldiring.',
          passingScorePercentage: 80,
          questions: [
            {
              id: 'en-a1-u1-can-could-q1',
              options: ['can', 'could', 'must'],
              explanation:
                'Can hozirgi qobiliyatni, could o‘tmishdagi umumiy qobiliyatni bildiradi. Ikkalasidan keyin fe’lning asosiy shakli keladi.',
              question: 'When he was six, he ___ read. (O‘qiy olardi.)',
              correctAnswerIndex: 1,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'en-a1-u1-must-mustnt-neednt',
    courseId: 'english-a1',
    unitId: 'en-a1-u1',
    unitTitle: 'Unit 1: Essentials & Greetings',
    language: 'en',
    level: 'A1',
    lessonNumber: 32,
    title: 'Must, Mustn’t and Needn’t',
    description: 'Majburiyat, taqiq va zarurat yo‘qligi',
    estimatedDurationMinutes: 15,
    steps: [
      {
        id: 'en-a1-u1-must-mustnt-neednt-s1',
        type: 'learn',
        title: 'Qoida va misol',
        estimatedMinutes: 5,
        learnData: {
          title: 'Must, Mustn’t and Needn’t',
          explanation:
            'Must biror ish zarurligini bildiradi. Mustn’t taqiqni, needn’t esa ishni qilish shart emasligini bildiradi.',
          grammarRules: [
            {
              pattern:
                'Must biror ish zarurligini bildiradi. Mustn’t taqiqni, needn’t esa ishni qilish shart emasligini bildiradi.',
              meaning: 'Majburiyat, taqiq va zarurat yo‘qligi',
              examples: [
                {
                  sentence: 'You mustn’t park here. You needn’t pay today.',
                  translation:
                    'Bu yerda mashina qo‘yish taqiqlangan. Bugun to‘lashingiz shart emas.',
                },
              ],
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-must-mustnt-neednt-s2',
        type: 'practice',
        title: 'Mashq',
        estimatedMinutes: 5,
        practiceData: {
          instructions: 'To‘g‘ri javobni tanlang.',
          exercises: [
            {
              id: 'en-a1-u1-must-mustnt-neednt-e1',
              options: ['needn’t', 'must', 'mustn’t'],
              explanation:
                'Must biror ish zarurligini bildiradi. Mustn’t taqiqni, needn’t esa ishni qilish shart emasligini bildiradi.',
              prompt: 'You ___ touch that wire. It’s dangerous.',
              type: 'multiple-choice',
              correctAnswer: 2,
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-must-mustnt-neednt-s3',
        type: 'test',
        title: 'Dars testi',
        estimatedMinutes: 5,
        testData: {
          instructions: 'Bo‘sh joyni to‘ldiring.',
          passingScorePercentage: 80,
          questions: [
            {
              id: 'en-a1-u1-must-mustnt-neednt-q1',
              options: ['needn’t', 'mustn’t', 'must'],
              explanation:
                'Must biror ish zarurligini bildiradi. Mustn’t taqiqni, needn’t esa ishni qilish shart emasligini bildiradi.',
              question: 'You ___ bring a pen. We have pens for everyone.',
              correctAnswerIndex: 0,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'en-a1-u1-should',
    courseId: 'english-a1',
    unitId: 'en-a1-u1',
    unitTitle: 'Unit 1: Essentials & Greetings',
    language: 'en',
    level: 'A1',
    lessonNumber: 33,
    title: 'Should',
    description: 'Maslahat berish',
    estimatedDurationMinutes: 15,
    steps: [
      {
        id: 'en-a1-u1-should-s1',
        type: 'learn',
        title: 'Qoida va misol',
        estimatedMinutes: 5,
        learnData: {
          title: 'Should',
          explanation:
            'Should + fe’lning asosiy shakli maslahat beradi. Shouldn’t biror ishni qilmaslikni maslahat beradi. Savolda should egadan oldin keladi.',
          grammarRules: [
            {
              pattern:
                'Should + fe’lning asosiy shakli maslahat beradi. Shouldn’t biror ishni qilmaslikni maslahat beradi. Savolda should egadan oldin keladi.',
              meaning: 'Maslahat berish',
              examples: [
                {
                  sentence: 'You should get some rest.',
                  translation: 'Biroz dam olganingiz ma’qul.',
                },
              ],
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-should-s2',
        type: 'practice',
        title: 'Mashq',
        estimatedMinutes: 5,
        practiceData: {
          instructions: 'To‘g‘ri javobni tanlang.',
          exercises: [
            {
              id: 'en-a1-u1-should-e1',
              options: ['going', 'go', 'goes'],
              explanation:
                'Should + fe’lning asosiy shakli maslahat beradi. Shouldn’t biror ishni qilmaslikni maslahat beradi. Savolda should egadan oldin keladi.',
              prompt: 'You look tired. You should ___ to bed early.',
              type: 'multiple-choice',
              correctAnswer: 1,
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-should-s3',
        type: 'test',
        title: 'Dars testi',
        estimatedMinutes: 5,
        testData: {
          instructions: 'Bo‘sh joyni to‘ldiring.',
          passingScorePercentage: 80,
          questions: [
            {
              id: 'en-a1-u1-should-q1',
              options: ['Did', 'Has', 'Should'],
              explanation:
                'Should + fe’lning asosiy shakli maslahat beradi. Shouldn’t biror ishni qilmaslikni maslahat beradi. Savolda should egadan oldin keladi.',
              question: '___ I call her now? (Maslahat so‘rayapman.)',
              correctAnswerIndex: 2,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'en-a1-u1-have-to',
    courseId: 'english-a1',
    unitId: 'en-a1-u1',
    unitTitle: 'Unit 1: Essentials & Greetings',
    language: 'en',
    level: 'A1',
    lessonNumber: 34,
    title: 'Have To',
    description: 'Qoidaga yoki vaziyatga ko‘ra majburiyat',
    estimatedDurationMinutes: 15,
    steps: [
      {
        id: 'en-a1-u1-have-to-s1',
        type: 'learn',
        title: 'Qoida va misol',
        estimatedMinutes: 5,
        learnData: {
          title: 'Have To',
          explanation:
            'Hozirgi zamonda have to yoki has to, o‘tgan zamonda had to ishlatiladi. Don’t have to ishni qilish shart emasligini bildiradi.',
          grammarRules: [
            {
              pattern:
                'Hozirgi zamonda have to yoki has to, o‘tgan zamonda had to ishlatiladi. Don’t have to ishni qilish shart emasligini bildiradi.',
              meaning: 'Qoidaga yoki vaziyatga ko‘ra majburiyat',
              examples: [
                {
                  sentence: 'I have to wear a uniform at work.',
                  translation: 'Ishda forma kiyishim kerak.',
                },
              ],
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-have-to-s2',
        type: 'practice',
        title: 'Mashq',
        estimatedMinutes: 5,
        practiceData: {
          instructions: 'To‘g‘ri javobni tanlang.',
          exercises: [
            {
              id: 'en-a1-u1-have-to-e1',
              options: ['have', 'has', 'having'],
              explanation:
                'Hozirgi zamonda have to yoki has to, o‘tgan zamonda had to ishlatiladi. Don’t have to ishni qilish shart emasligini bildiradi.',
              prompt: 'She ___ to show her passport at the airport.',
              type: 'multiple-choice',
              correctAnswer: 1,
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-have-to-s3',
        type: 'test',
        title: 'Dars testi',
        estimatedMinutes: 5,
        testData: {
          instructions: 'Bo‘sh joyni to‘ldiring.',
          passingScorePercentage: 80,
          questions: [
            {
              id: 'en-a1-u1-have-to-q1',
              options: ['had to', 'has to', 'must to'],
              explanation:
                'Hozirgi zamonda have to yoki has to, o‘tgan zamonda had to ishlatiladi. Don’t have to ishni qilish shart emasligini bildiradi.',
              question: 'We ___ pay yesterday. (To‘lashimiz kerak edi.)',
              correctAnswerIndex: 0,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'en-a1-u1-would-like',
    courseId: 'english-a1',
    unitId: 'en-a1-u1',
    unitTitle: 'Unit 1: Essentials & Greetings',
    language: 'en',
    level: 'A1',
    lessonNumber: 35,
    title: 'Would You Like…? and I’d Like…',
    description: 'Muloyim taklif va istak',
    estimatedDurationMinutes: 15,
    steps: [
      {
        id: 'en-a1-u1-would-like-s1',
        type: 'learn',
        title: 'Qoida va misol',
        estimatedMinutes: 5,
        learnData: {
          title: 'Would You Like…? and I’d Like…',
          explanation:
            'Would you like…? muloyim taklif qilish uchun ishlatiladi. I’d like istakni bildiradi. Ot bevosita, fe’l esa to bilan keladi.',
          grammarRules: [
            {
              pattern:
                'Would you like…? muloyim taklif qilish uchun ishlatiladi. I’d like istakni bildiradi. Ot bevosita, fe’l esa to bilan keladi.',
              meaning: 'Muloyim taklif va istak',
              examples: [
                {
                  sentence: 'Would you like some tea? I’d like to try it.',
                  translation: 'Choy ichasizmi? Tatib ko‘rmoqchiman.',
                },
              ],
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-would-like-s2',
        type: 'practice',
        title: 'Mashq',
        estimatedMinutes: 5,
        practiceData: {
          instructions: 'To‘g‘ri javobni tanlang.',
          exercises: [
            {
              id: 'en-a1-u1-would-like-e1',
              options: ['come', 'coming', 'to come'],
              explanation:
                'Would you like…? muloyim taklif qilish uchun ishlatiladi. I’d like istakni bildiradi. Ot bevosita, fe’l esa to bilan keladi.',
              prompt: 'Would you like ___ with us?',
              type: 'multiple-choice',
              correctAnswer: 2,
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-would-like-s3',
        type: 'test',
        title: 'Dars testi',
        estimatedMinutes: 5,
        testData: {
          instructions: 'Bo‘sh joyni to‘ldiring.',
          passingScorePercentage: 80,
          questions: [
            {
              id: 'en-a1-u1-would-like-q1',
              options: ['some', 'to some', 'drinking some to'],
              explanation:
                'Would you like…? muloyim taklif qilish uchun ishlatiladi. I’d like istakni bildiradi. Ot bevosita, fe’l esa to bilan keladi.',
              question: 'I’d like ___ water, please.',
              correctAnswerIndex: 0,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'en-a1-u1-egi-36',
    courseId: 'english-a1',
    unitId: 'en-a1-u1',
    unitTitle: 'Unit 1: Essentials & Greetings',
    language: 'en',
    level: 'A1',
    lessonNumber: 36,
    title: 'There Is and There Are',
    description: 'Birlik uchun there is, ko‘plik uchun there are ishlatiladi.',
    estimatedDurationMinutes: 15,
    steps: [
      {
        id: 'en-a1-u1-egi-36-s1',
        type: 'learn',
        title: 'Qoida va misol',
        estimatedMinutes: 5,
        learnData: {
          title: 'There Is and There Are',
          explanation: 'Birlik uchun there is, ko‘plik uchun there are ishlatiladi.',
          grammarRules: [
            {
              pattern: 'Birlik uchun there is, ko‘plik uchun there are ishlatiladi.',
              meaning: 'There Is and There Are',
              examples: [
                {
                  sentence: 'There are two chairs.',
                  translation: 'Ikkita stul bor.',
                },
              ],
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-36-s2',
        type: 'practice',
        title: 'Mashq',
        estimatedMinutes: 5,
        practiceData: {
          instructions: 'To‘g‘ri javobni tanlang.',
          exercises: [
            {
              id: 'en-a1-u1-egi-36-e1',
              options: [
                'Ertaga yig‘ilish bo‘ladi.',
                'Ikkita stul bor.',
                'Men chekmayman. — Men ham.',
              ],
              explanation: 'Birlik uchun there is, ko‘plik uchun there are ishlatiladi.',
              prompt: 'Mos tarjimani tanlang: There are two chairs.',
              type: 'multiple-choice',
              correctAnswer: 1,
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-36-s3',
        type: 'test',
        title: 'Dars testi',
        estimatedMinutes: 5,
        testData: {
          instructions: 'Bo‘sh joyni to‘ldiring.',
          passingScorePercentage: 80,
          questions: [
            {
              id: 'en-a1-u1-egi-36-q1',
              options: ['is', 'are', 'am'],
              explanation: 'Birlik uchun there is, ko‘plik uchun there are ishlatiladi.',
              question: 'There ___ a book on the desk.',
              correctAnswerIndex: 0,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'en-a1-u1-egi-37',
    courseId: 'english-a1',
    unitId: 'en-a1-u1',
    unitTitle: 'Unit 1: Essentials & Greetings',
    language: 'en',
    level: 'A1',
    lessonNumber: 37,
    title: 'There in Other Tenses',
    description:
      'O‘tgan zamonda there was/were, kelajakda there will be, hozirga bog‘liq natijada there has/have been ishlatiladi.',
    estimatedDurationMinutes: 15,
    steps: [
      {
        id: 'en-a1-u1-egi-37-s1',
        type: 'learn',
        title: 'Qoida va misol',
        estimatedMinutes: 5,
        learnData: {
          title: 'There in Other Tenses',
          explanation:
            'O‘tgan zamonda there was/were, kelajakda there will be, hozirga bog‘liq natijada there has/have been ishlatiladi.',
          grammarRules: [
            {
              pattern:
                'O‘tgan zamonda there was/were, kelajakda there will be, hozirga bog‘liq natijada there has/have been ishlatiladi.',
              meaning: 'There in Other Tenses',
              examples: [
                {
                  sentence: 'There will be a meeting tomorrow.',
                  translation: 'Ertaga yig‘ilish bo‘ladi.',
                },
              ],
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-37-s2',
        type: 'practice',
        title: 'Mashq',
        estimatedMinutes: 5,
        practiceData: {
          instructions: 'To‘g‘ri javobni tanlang.',
          exercises: [
            {
              id: 'en-a1-u1-egi-37-e1',
              options: ['Bugun sovuq.', 'U qo‘ng‘iroq qilmadi.', 'Ertaga yig‘ilish bo‘ladi.'],
              explanation:
                'O‘tgan zamonda there was/were, kelajakda there will be, hozirga bog‘liq natijada there has/have been ishlatiladi.',
              prompt: 'Mos tarjimani tanlang: There will be a meeting tomorrow.',
              type: 'multiple-choice',
              correctAnswer: 2,
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-37-s3',
        type: 'test',
        title: 'Dars testi',
        estimatedMinutes: 5,
        testData: {
          instructions: 'Bo‘sh joyni to‘ldiring.',
          passingScorePercentage: 80,
          questions: [
            {
              id: 'en-a1-u1-egi-37-q1',
              options: ['was', 'were', 'is'],
              explanation:
                'O‘tgan zamonda there was/were, kelajakda there will be, hozirga bog‘liq natijada there has/have been ishlatiladi.',
              question: 'There ___ three guests yesterday.',
              correctAnswerIndex: 1,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'en-a1-u1-egi-38',
    courseId: 'english-a1',
    unitId: 'en-a1-u1',
    unitTitle: 'Unit 1: Essentials & Greetings',
    language: 'en',
    level: 'A1',
    lessonNumber: 38,
    title: 'It as Subject',
    description: 'Vaqt, ob-havo va masofa haqida gapirganda it gap egasi bo‘lib keladi.',
    estimatedDurationMinutes: 15,
    steps: [
      {
        id: 'en-a1-u1-egi-38-s1',
        type: 'learn',
        title: 'Qoida va misol',
        estimatedMinutes: 5,
        learnData: {
          title: 'It as Subject',
          explanation: 'Vaqt, ob-havo va masofa haqida gapirganda it gap egasi bo‘lib keladi.',
          grammarRules: [
            {
              pattern: 'Vaqt, ob-havo va masofa haqida gapirganda it gap egasi bo‘lib keladi.',
              meaning: 'It as Subject',
              examples: [
                {
                  sentence: 'It is cold today.',
                  translation: 'Bugun sovuq.',
                },
              ],
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-38-s2',
        type: 'practice',
        title: 'Mashq',
        estimatedMinutes: 5,
        practiceData: {
          instructions: 'To‘g‘ri javobni tanlang.',
          exercises: [
            {
              id: 'en-a1-u1-egi-38-e1',
              options: [
                'Bugun sovuq.',
                'Men choyni yoqtiraman, Ali esa yoqtirmaydi.',
                'Ular qayerda yashaydi?',
              ],
              explanation: 'Vaqt, ob-havo va masofa haqida gapirganda it gap egasi bo‘lib keladi.',
              prompt: 'Mos tarjimani tanlang: It is cold today.',
              type: 'multiple-choice',
              correctAnswer: 0,
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-38-s3',
        type: 'test',
        title: 'Dars testi',
        estimatedMinutes: 5,
        testData: {
          instructions: 'Bo‘sh joyni to‘ldiring.',
          passingScorePercentage: 80,
          questions: [
            {
              id: 'en-a1-u1-egi-38-q1',
              options: ['They', 'There', 'It'],
              explanation: 'Vaqt, ob-havo va masofa haqida gapirganda it gap egasi bo‘lib keladi.',
              question: '___ is raining.',
              correctAnswerIndex: 2,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'en-a1-u1-egi-39',
    courseId: 'english-a1',
    unitId: 'en-a1-u1',
    unitTitle: 'Unit 1: Essentials & Greetings',
    language: 'en',
    level: 'A1',
    lessonNumber: 39,
    title: 'Short Auxiliary Responses',
    description:
      'Takrorni oldini olish uchun qisqa javobda asosiy fe’l o‘rnida yordamchi fe’l qolishi mumkin.',
    estimatedDurationMinutes: 15,
    steps: [
      {
        id: 'en-a1-u1-egi-39-s1',
        type: 'learn',
        title: 'Qoida va misol',
        estimatedMinutes: 5,
        learnData: {
          title: 'Short Auxiliary Responses',
          explanation:
            'Takrorni oldini olish uchun qisqa javobda asosiy fe’l o‘rnida yordamchi fe’l qolishi mumkin.',
          grammarRules: [
            {
              pattern:
                'Takrorni oldini olish uchun qisqa javobda asosiy fe’l o‘rnida yordamchi fe’l qolishi mumkin.',
              meaning: 'Short Auxiliary Responses',
              examples: [
                {
                  sentence: 'I like tea, but Ali doesn’t.',
                  translation: 'Men choyni yoqtiraman, Ali esa yoqtirmaydi.',
                },
              ],
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-39-s2',
        type: 'practice',
        title: 'Mashq',
        estimatedMinutes: 5,
        practiceData: {
          instructions: 'To‘g‘ri javobni tanlang.',
          exercises: [
            {
              id: 'en-a1-u1-egi-39-e1',
              options: [
                'Topdim. — Rostdanmi?',
                'Men choyni yoqtiraman, Ali esa yoqtirmaydi.',
                'Kim sizga qo‘ng‘iroq qildi? Kimga qo‘ng‘iroq qildingiz?',
              ],
              explanation:
                'Takrorni oldini olish uchun qisqa javobda asosiy fe’l o‘rnida yordamchi fe’l qolishi mumkin.',
              prompt: 'Mos tarjimani tanlang: I like tea, but Ali doesn’t.',
              type: 'multiple-choice',
              correctAnswer: 1,
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-39-s3',
        type: 'test',
        title: 'Dars testi',
        estimatedMinutes: 5,
        testData: {
          instructions: 'Bo‘sh joyni to‘ldiring.',
          passingScorePercentage: 80,
          questions: [
            {
              id: 'en-a1-u1-egi-39-q1',
              options: ['can’t', 'don’t', 'haven’t'],
              explanation:
                'Takrorni oldini olish uchun qisqa javobda asosiy fe’l o‘rnida yordamchi fe’l qolishi mumkin.',
              question: 'She can swim, but I ___.',
              correctAnswerIndex: 0,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'en-a1-u1-egi-40',
    courseId: 'english-a1',
    unitId: 'en-a1-u1',
    unitTitle: 'Unit 1: Essentials & Greetings',
    language: 'en',
    level: 'A1',
    lessonNumber: 40,
    title: 'Echo Questions',
    description:
      'Hayron bo‘lganda yoki aniqlik kiritganda tegishli yordamchi fe’lni egadan oldin qo‘yib qisqa savol beriladi.',
    estimatedDurationMinutes: 15,
    steps: [
      {
        id: 'en-a1-u1-egi-40-s1',
        type: 'learn',
        title: 'Qoida va misol',
        estimatedMinutes: 5,
        learnData: {
          title: 'Echo Questions',
          explanation:
            'Hayron bo‘lganda yoki aniqlik kiritganda tegishli yordamchi fe’lni egadan oldin qo‘yib qisqa savol beriladi.',
          grammarRules: [
            {
              pattern:
                'Hayron bo‘lganda yoki aniqlik kiritganda tegishli yordamchi fe’lni egadan oldin qo‘yib qisqa savol beriladi.',
              meaning: 'Echo Questions',
              examples: [
                {
                  sentence: 'I’ve found it. — Have you?',
                  translation: 'Topdim. — Rostdanmi?',
                },
              ],
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-40-s2',
        type: 'practice',
        title: 'Mashq',
        estimatedMinutes: 5,
        practiceData: {
          instructions: 'To‘g‘ri javobni tanlang.',
          exercises: [
            {
              id: 'en-a1-u1-egi-40-e1',
              options: ['Men chekmayman. — Men ham.', 'Kimni kutyapsiz?', 'Topdim. — Rostdanmi?'],
              explanation:
                'Hayron bo‘lganda yoki aniqlik kiritganda tegishli yordamchi fe’lni egadan oldin qo‘yib qisqa savol beriladi.',
              prompt: 'Mos tarjimani tanlang: I’ve found it. — Have you?',
              type: 'multiple-choice',
              correctAnswer: 2,
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-40-s3',
        type: 'test',
        title: 'Dars testi',
        estimatedMinutes: 5,
        testData: {
          instructions: 'Bo‘sh joyni to‘ldiring.',
          passingScorePercentage: 80,
          questions: [
            {
              id: 'en-a1-u1-egi-40-q1',
              options: ['Are', 'Do', 'Have'],
              explanation:
                'Hayron bo‘lganda yoki aniqlik kiritganda tegishli yordamchi fe’lni egadan oldin qo‘yib qisqa savol beriladi.',
              question: 'I work here. — ___ you?',
              correctAnswerIndex: 1,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'en-a1-u1-egi-41',
    courseId: 'english-a1',
    unitId: 'en-a1-u1',
    unitTitle: 'Unit 1: Essentials & Greetings',
    language: 'en',
    level: 'A1',
    lessonNumber: 41,
    title: 'Too, Either, So and Neither',
    description:
      'Darak gapga qo‘shilish uchun too yoki so, inkorga qo‘shilish uchun either yoki neither ishlatiladi.',
    estimatedDurationMinutes: 15,
    steps: [
      {
        id: 'en-a1-u1-egi-41-s1',
        type: 'learn',
        title: 'Qoida va misol',
        estimatedMinutes: 5,
        learnData: {
          title: 'Too, Either, So and Neither',
          explanation:
            'Darak gapga qo‘shilish uchun too yoki so, inkorga qo‘shilish uchun either yoki neither ishlatiladi.',
          grammarRules: [
            {
              pattern:
                'Darak gapga qo‘shilish uchun too yoki so, inkorga qo‘shilish uchun either yoki neither ishlatiladi.',
              meaning: 'Too, Either, So and Neither',
              examples: [
                {
                  sentence: 'I don’t smoke. — Neither do I.',
                  translation: 'Men chekmayman. — Men ham.',
                },
              ],
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-41-s2',
        type: 'practice',
        title: 'Mashq',
        estimatedMinutes: 5,
        practiceData: {
          instructions: 'To‘g‘ri javobni tanlang.',
          exercises: [
            {
              id: 'en-a1-u1-egi-41-e1',
              options: [
                'Men chekmayman. — Men ham.',
                'U qo‘ng‘iroq qilmadi.',
                'Bekatga qaysi avtobus boradi?',
              ],
              explanation:
                'Darak gapga qo‘shilish uchun too yoki so, inkorga qo‘shilish uchun either yoki neither ishlatiladi.',
              prompt: 'Mos tarjimani tanlang: I don’t smoke. — Neither do I.',
              type: 'multiple-choice',
              correctAnswer: 0,
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-41-s3',
        type: 'test',
        title: 'Dars testi',
        estimatedMinutes: 5,
        testData: {
          instructions: 'Bo‘sh joyni to‘ldiring.',
          passingScorePercentage: 80,
          questions: [
            {
              id: 'en-a1-u1-egi-41-q1',
              options: ['do', 'have', 'am'],
              explanation:
                'Darak gapga qo‘shilish uchun too yoki so, inkorga qo‘shilish uchun either yoki neither ishlatiladi.',
              question: 'I’m tired. — So ___ I.',
              correctAnswerIndex: 2,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'en-a1-u1-egi-42',
    courseId: 'english-a1',
    unitId: 'en-a1-u1',
    unitTitle: 'Unit 1: Essentials & Greetings',
    language: 'en',
    level: 'A1',
    lessonNumber: 42,
    title: 'Negative Forms',
    description:
      'Be, have va modal fe’llardan keyin not keladi. Present Simple va Past Simple inkorida don’t, doesn’t yoki didn’t ishlatiladi.',
    estimatedDurationMinutes: 15,
    steps: [
      {
        id: 'en-a1-u1-egi-42-s1',
        type: 'learn',
        title: 'Qoida va misol',
        estimatedMinutes: 5,
        learnData: {
          title: 'Negative Forms',
          explanation:
            'Be, have va modal fe’llardan keyin not keladi. Present Simple va Past Simple inkorida don’t, doesn’t yoki didn’t ishlatiladi.',
          grammarRules: [
            {
              pattern:
                'Be, have va modal fe’llardan keyin not keladi. Present Simple va Past Simple inkorida don’t, doesn’t yoki didn’t ishlatiladi.',
              meaning: 'Negative Forms',
              examples: [
                {
                  sentence: 'She didn’t call.',
                  translation: 'U qo‘ng‘iroq qilmadi.',
                },
              ],
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-42-s2',
        type: 'practice',
        title: 'Mashq',
        estimatedMinutes: 5,
        practiceData: {
          instructions: 'To‘g‘ri javobni tanlang.',
          exercises: [
            {
              id: 'en-a1-u1-egi-42-e1',
              options: [
                'Ular qayerda yashaydi?',
                'U qo‘ng‘iroq qilmadi.',
                'U yerga piyoda borishga o‘n daqiqa ketadi.',
              ],
              explanation:
                'Be, have va modal fe’llardan keyin not keladi. Present Simple va Past Simple inkorida don’t, doesn’t yoki didn’t ishlatiladi.',
              prompt: 'Mos tarjimani tanlang: She didn’t call.',
              type: 'multiple-choice',
              correctAnswer: 1,
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-42-s3',
        type: 'test',
        title: 'Dars testi',
        estimatedMinutes: 5,
        testData: {
          instructions: 'Bo‘sh joyni to‘ldiring.',
          passingScorePercentage: 80,
          questions: [
            {
              id: 'en-a1-u1-egi-42-q1',
              options: ['doesn’t', 'isn’t', 'hasn’t'],
              explanation:
                'Be, have va modal fe’llardan keyin not keladi. Present Simple va Past Simple inkorida don’t, doesn’t yoki didn’t ishlatiladi.',
              question: 'He ___ like coffee.',
              correctAnswerIndex: 0,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'en-a1-u1-egi-43',
    courseId: 'english-a1',
    unitId: 'en-a1-u1',
    unitTitle: 'Unit 1: Essentials & Greetings',
    language: 'en',
    level: 'A1',
    lessonNumber: 43,
    title: 'Question Word Order',
    description: 'Savolda odatda yordamchi fe’l egadan oldin keladi.',
    estimatedDurationMinutes: 15,
    steps: [
      {
        id: 'en-a1-u1-egi-43-s1',
        type: 'learn',
        title: 'Qoida va misol',
        estimatedMinutes: 5,
        learnData: {
          title: 'Question Word Order',
          explanation: 'Savolda odatda yordamchi fe’l egadan oldin keladi.',
          grammarRules: [
            {
              pattern: 'Savolda odatda yordamchi fe’l egadan oldin keladi.',
              meaning: 'Question Word Order',
              examples: [
                {
                  sentence: 'Where do they live?',
                  translation: 'Ular qayerda yashaydi?',
                },
              ],
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-43-s2',
        type: 'practice',
        title: 'Mashq',
        estimatedMinutes: 5,
        practiceData: {
          instructions: 'To‘g‘ri javobni tanlang.',
          exercises: [
            {
              id: 'en-a1-u1-egi-43-e1',
              options: [
                'Kim sizga qo‘ng‘iroq qildi? Kimga qo‘ng‘iroq qildingiz?',
                'U qayerda yashashini bilasizmi?',
                'Ular qayerda yashaydi?',
              ],
              explanation: 'Savolda odatda yordamchi fe’l egadan oldin keladi.',
              prompt: 'Mos tarjimani tanlang: Where do they live?',
              type: 'multiple-choice',
              correctAnswer: 2,
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-43-s3',
        type: 'test',
        title: 'Dars testi',
        estimatedMinutes: 5,
        testData: {
          instructions: 'Bo‘sh joyni to‘ldiring.',
          passingScorePercentage: 80,
          questions: [
            {
              id: 'en-a1-u1-egi-43-q1',
              options: ['she does', 'does she', 'she'],
              explanation: 'Savolda odatda yordamchi fe’l egadan oldin keladi.',
              question: 'Where ___ live?',
              correctAnswerIndex: 1,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'en-a1-u1-egi-44',
    courseId: 'english-a1',
    unitId: 'en-a1-u1',
    unitTitle: 'Unit 1: Essentials & Greetings',
    language: 'en',
    level: 'A1',
    lessonNumber: 44,
    title: 'Subject and Object Questions',
    description:
      'Who egani so‘rasa do ishlatilmaydi. To‘ldiruvchini so‘rasa odatiy savol tartibi qo‘llanadi.',
    estimatedDurationMinutes: 15,
    steps: [
      {
        id: 'en-a1-u1-egi-44-s1',
        type: 'learn',
        title: 'Qoida va misol',
        estimatedMinutes: 5,
        learnData: {
          title: 'Subject and Object Questions',
          explanation:
            'Who egani so‘rasa do ishlatilmaydi. To‘ldiruvchini so‘rasa odatiy savol tartibi qo‘llanadi.',
          grammarRules: [
            {
              pattern:
                'Who egani so‘rasa do ishlatilmaydi. To‘ldiruvchini so‘rasa odatiy savol tartibi qo‘llanadi.',
              meaning: 'Subject and Object Questions',
              examples: [
                {
                  sentence: 'Who called you? Who did you call?',
                  translation: 'Kim sizga qo‘ng‘iroq qildi? Kimga qo‘ng‘iroq qildingiz?',
                },
              ],
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-44-s2',
        type: 'practice',
        title: 'Mashq',
        estimatedMinutes: 5,
        practiceData: {
          instructions: 'To‘g‘ri javobni tanlang.',
          exercises: [
            {
              id: 'en-a1-u1-egi-44-e1',
              options: [
                'Kim sizga qo‘ng‘iroq qildi? Kimga qo‘ng‘iroq qildingiz?',
                'Kimni kutyapsiz?',
                'U menga charchaganini aytdi.',
              ],
              explanation:
                'Who egani so‘rasa do ishlatilmaydi. To‘ldiruvchini so‘rasa odatiy savol tartibi qo‘llanadi.',
              prompt: 'Mos tarjimani tanlang: Who called you? Who did you call?',
              type: 'multiple-choice',
              correctAnswer: 0,
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-44-s3',
        type: 'test',
        title: 'Dars testi',
        estimatedMinutes: 5,
        testData: {
          instructions: 'Bo‘sh joyni to‘ldiring.',
          passingScorePercentage: 80,
          questions: [
            {
              id: 'en-a1-u1-egi-44-q1',
              options: ['did broke', 'break', 'broke'],
              explanation:
                'Who egani so‘rasa do ishlatilmaydi. To‘ldiruvchini so‘rasa odatiy savol tartibi qo‘llanadi.',
              question: 'Who ___ the window? (Kim sindirdi?)',
              correctAnswerIndex: 2,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'en-a1-u1-egi-45',
    courseId: 'english-a1',
    unitId: 'en-a1-u1',
    unitTitle: 'Unit 1: Essentials & Greetings',
    language: 'en',
    level: 'A1',
    lessonNumber: 45,
    title: 'Questions with Prepositions',
    description:
      'Suhbatda predlog ko‘pincha savol oxirida keladi. What is it like? biror narsaning qandayligini so‘raydi.',
    estimatedDurationMinutes: 15,
    steps: [
      {
        id: 'en-a1-u1-egi-45-s1',
        type: 'learn',
        title: 'Qoida va misol',
        estimatedMinutes: 5,
        learnData: {
          title: 'Questions with Prepositions',
          explanation:
            'Suhbatda predlog ko‘pincha savol oxirida keladi. What is it like? biror narsaning qandayligini so‘raydi.',
          grammarRules: [
            {
              pattern:
                'Suhbatda predlog ko‘pincha savol oxirida keladi. What is it like? biror narsaning qandayligini so‘raydi.',
              meaning: 'Questions with Prepositions',
              examples: [
                {
                  sentence: 'Who are you waiting for?',
                  translation: 'Kimni kutyapsiz?',
                },
              ],
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-45-s2',
        type: 'practice',
        title: 'Mashq',
        estimatedMinutes: 5,
        practiceData: {
          instructions: 'To‘g‘ri javobni tanlang.',
          exercises: [
            {
              id: 'en-a1-u1-egi-45-e1',
              options: [
                'Bekatga qaysi avtobus boradi?',
                'Kimni kutyapsiz?',
                'Men suza olaman. Men suzyapman.',
              ],
              explanation:
                'Suhbatda predlog ko‘pincha savol oxirida keladi. What is it like? biror narsaning qandayligini so‘raydi.',
              prompt: 'Mos tarjimani tanlang: Who are you waiting for?',
              type: 'multiple-choice',
              correctAnswer: 1,
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-45-s3',
        type: 'test',
        title: 'Dars testi',
        estimatedMinutes: 5,
        testData: {
          instructions: 'Bo‘sh joyni to‘ldiring.',
          passingScorePercentage: 80,
          questions: [
            {
              id: 'en-a1-u1-egi-45-q1',
              options: ['to', 'at', 'of'],
              explanation:
                'Suhbatda predlog ko‘pincha savol oxirida keladi. What is it like? biror narsaning qandayligini so‘raydi.',
              question: 'Who is she talking ___?',
              correctAnswerIndex: 0,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'en-a1-u1-egi-46',
    courseId: 'english-a1',
    unitId: 'en-a1-u1',
    unitTitle: 'Unit 1: Essentials & Greetings',
    language: 'en',
    level: 'A1',
    lessonNumber: 46,
    title: 'What, Which and How',
    description:
      'What ochiq savol beradi, which ma’lum variantlardan tanlatadi, how usul yoki darajani so‘raydi.',
    estimatedDurationMinutes: 15,
    steps: [
      {
        id: 'en-a1-u1-egi-46-s1',
        type: 'learn',
        title: 'Qoida va misol',
        estimatedMinutes: 5,
        learnData: {
          title: 'What, Which and How',
          explanation:
            'What ochiq savol beradi, which ma’lum variantlardan tanlatadi, how usul yoki darajani so‘raydi.',
          grammarRules: [
            {
              pattern:
                'What ochiq savol beradi, which ma’lum variantlardan tanlatadi, how usul yoki darajani so‘raydi.',
              meaning: 'What, Which and How',
              examples: [
                {
                  sentence: 'Which bus goes to the station?',
                  translation: 'Bekatga qaysi avtobus boradi?',
                },
              ],
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-46-s2',
        type: 'practice',
        title: 'Mashq',
        estimatedMinutes: 5,
        practiceData: {
          instructions: 'To‘g‘ri javobni tanlang.',
          exercises: [
            {
              id: 'en-a1-u1-egi-46-e1',
              options: [
                'U yerga piyoda borishga o‘n daqiqa ketadi.',
                'Kitob o‘qishni yoqtiraman.',
                'Bekatga qaysi avtobus boradi?',
              ],
              explanation:
                'What ochiq savol beradi, which ma’lum variantlardan tanlatadi, how usul yoki darajani so‘raydi.',
              prompt: 'Mos tarjimani tanlang: Which bus goes to the station?',
              type: 'multiple-choice',
              correctAnswer: 2,
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-46-s3',
        type: 'test',
        title: 'Dars testi',
        estimatedMinutes: 5,
        testData: {
          instructions: 'Bo‘sh joyni to‘ldiring.',
          passingScorePercentage: 80,
          questions: [
            {
              id: 'en-a1-u1-egi-46-q1',
              options: ['What', 'How', 'Which'],
              explanation:
                'What ochiq savol beradi, which ma’lum variantlardan tanlatadi, how usul yoki darajani so‘raydi.',
              question: '___ old are you?',
              correctAnswerIndex: 1,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'en-a1-u1-egi-47',
    courseId: 'english-a1',
    unitId: 'en-a1-u1',
    unitTitle: 'Unit 1: Essentials & Greetings',
    language: 'en',
    level: 'A1',
    lessonNumber: 47,
    title: 'How Long Does It Take?',
    description: 'How long does it take to…? biror ishga qancha vaqt ketishini so‘raydi.',
    estimatedDurationMinutes: 15,
    steps: [
      {
        id: 'en-a1-u1-egi-47-s1',
        type: 'learn',
        title: 'Qoida va misol',
        estimatedMinutes: 5,
        learnData: {
          title: 'How Long Does It Take?',
          explanation: 'How long does it take to…? biror ishga qancha vaqt ketishini so‘raydi.',
          grammarRules: [
            {
              pattern: 'How long does it take to…? biror ishga qancha vaqt ketishini so‘raydi.',
              meaning: 'How Long Does It Take?',
              examples: [
                {
                  sentence: 'It takes ten minutes to walk there.',
                  translation: 'U yerga piyoda borishga o‘n daqiqa ketadi.',
                },
              ],
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-47-s2',
        type: 'practice',
        title: 'Mashq',
        estimatedMinutes: 5,
        practiceData: {
          instructions: 'To‘g‘ri javobni tanlang.',
          exercises: [
            {
              id: 'en-a1-u1-egi-47-e1',
              options: [
                'U yerga piyoda borishga o‘n daqiqa ketadi.',
                'U qayerda yashashini bilasizmi?',
                'Unga kutishni aytdim.',
              ],
              explanation: 'How long does it take to…? biror ishga qancha vaqt ketishini so‘raydi.',
              prompt: 'Mos tarjimani tanlang: It takes ten minutes to walk there.',
              type: 'multiple-choice',
              correctAnswer: 0,
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-47-s3',
        type: 'test',
        title: 'Dars testi',
        estimatedMinutes: 5,
        testData: {
          instructions: 'Bo‘sh joyni to‘ldiring.',
          passingScorePercentage: 80,
          questions: [
            {
              id: 'en-a1-u1-egi-47-q1',
              options: ['takes', 'taking', 'take'],
              explanation: 'How long does it take to…? biror ishga qancha vaqt ketishini so‘raydi.',
              question: 'How long does it ___ to get there?',
              correctAnswerIndex: 2,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'en-a1-u1-egi-48',
    courseId: 'english-a1',
    unitId: 'en-a1-u1',
    unitTitle: 'Unit 1: Essentials & Greetings',
    language: 'en',
    level: 'A1',
    lessonNumber: 48,
    title: 'Indirect Questions',
    description:
      'Bilvosita savolda ega fe’ldan oldin keladi. Ha yoki yo‘q savoli uchun if ishlatilishi mumkin.',
    estimatedDurationMinutes: 15,
    steps: [
      {
        id: 'en-a1-u1-egi-48-s1',
        type: 'learn',
        title: 'Qoida va misol',
        estimatedMinutes: 5,
        learnData: {
          title: 'Indirect Questions',
          explanation:
            'Bilvosita savolda ega fe’ldan oldin keladi. Ha yoki yo‘q savoli uchun if ishlatilishi mumkin.',
          grammarRules: [
            {
              pattern:
                'Bilvosita savolda ega fe’ldan oldin keladi. Ha yoki yo‘q savoli uchun if ishlatilishi mumkin.',
              meaning: 'Indirect Questions',
              examples: [
                {
                  sentence: 'Do you know where she lives?',
                  translation: 'U qayerda yashashini bilasizmi?',
                },
              ],
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-48-s2',
        type: 'practice',
        title: 'Mashq',
        estimatedMinutes: 5,
        practiceData: {
          instructions: 'To‘g‘ri javobni tanlang.',
          exercises: [
            {
              id: 'en-a1-u1-egi-48-e1',
              options: [
                'U menga charchaganini aytdi.',
                'U qayerda yashashini bilasizmi?',
                'Non sotib olish uchun tashqariga chiqdim.',
              ],
              explanation:
                'Bilvosita savolda ega fe’ldan oldin keladi. Ha yoki yo‘q savoli uchun if ishlatilishi mumkin.',
              prompt: 'Mos tarjimani tanlang: Do you know where she lives?',
              type: 'multiple-choice',
              correctAnswer: 1,
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-48-s3',
        type: 'test',
        title: 'Dars testi',
        estimatedMinutes: 5,
        testData: {
          instructions: 'Bo‘sh joyni to‘ldiring.',
          passingScorePercentage: 80,
          questions: [
            {
              id: 'en-a1-u1-egi-48-q1',
              options: ['he works', 'does he work', 'works he'],
              explanation:
                'Bilvosita savolda ega fe’ldan oldin keladi. Ha yoki yo‘q savoli uchun if ishlatilishi mumkin.',
              question: 'Do you know where ___?',
              correctAnswerIndex: 0,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'en-a1-u1-egi-49',
    courseId: 'english-a1',
    unitId: 'en-a1-u1',
    unitTitle: 'Unit 1: Essentials & Greetings',
    language: 'en',
    level: 'A1',
    lessonNumber: 49,
    title: 'Reported Speech',
    description:
      'Say dan keyin odamni aytish shart emas. Tell dan keyin xabar kimga aytilgani ko‘rsatiladi.',
    estimatedDurationMinutes: 15,
    steps: [
      {
        id: 'en-a1-u1-egi-49-s1',
        type: 'learn',
        title: 'Qoida va misol',
        estimatedMinutes: 5,
        learnData: {
          title: 'Reported Speech',
          explanation:
            'Say dan keyin odamni aytish shart emas. Tell dan keyin xabar kimga aytilgani ko‘rsatiladi.',
          grammarRules: [
            {
              pattern:
                'Say dan keyin odamni aytish shart emas. Tell dan keyin xabar kimga aytilgani ko‘rsatiladi.',
              meaning: 'Reported Speech',
              examples: [
                {
                  sentence: 'She told me that she was tired.',
                  translation: 'U menga charchaganini aytdi.',
                },
              ],
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-49-s2',
        type: 'practice',
        title: 'Mashq',
        estimatedMinutes: 5,
        practiceData: {
          instructions: 'To‘g‘ri javobni tanlang.',
          exercises: [
            {
              id: 'en-a1-u1-egi-49-e1',
              options: [
                'Men suza olaman. Men suzyapman.',
                'Biz sayrga chiqdik.',
                'U menga charchaganini aytdi.',
              ],
              explanation:
                'Say dan keyin odamni aytish shart emas. Tell dan keyin xabar kimga aytilgani ko‘rsatiladi.',
              prompt: 'Mos tarjimani tanlang: She told me that she was tired.',
              type: 'multiple-choice',
              correctAnswer: 2,
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-49-s3',
        type: 'test',
        title: 'Dars testi',
        estimatedMinutes: 5,
        testData: {
          instructions: 'Bo‘sh joyni to‘ldiring.',
          passingScorePercentage: 80,
          questions: [
            {
              id: 'en-a1-u1-egi-49-q1',
              options: ['said', 'told', 'spoke'],
              explanation:
                'Say dan keyin odamni aytish shart emas. Tell dan keyin xabar kimga aytilgani ko‘rsatiladi.',
              question: 'He ___ me that he was busy.',
              correctAnswerIndex: 1,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'en-a1-u1-egi-50',
    courseId: 'english-a1',
    unitId: 'en-a1-u1',
    unitTitle: 'Unit 1: Essentials & Greetings',
    language: 'en',
    level: 'A1',
    lessonNumber: 50,
    title: 'Base Forms and -ing',
    description:
      'Modal fe’ldan keyin asosiy shakl, davomli zamonda be dan keyin -ing shakli keladi.',
    estimatedDurationMinutes: 15,
    steps: [
      {
        id: 'en-a1-u1-egi-50-s1',
        type: 'learn',
        title: 'Qoida va misol',
        estimatedMinutes: 5,
        learnData: {
          title: 'Base Forms and -ing',
          explanation:
            'Modal fe’ldan keyin asosiy shakl, davomli zamonda be dan keyin -ing shakli keladi.',
          grammarRules: [
            {
              pattern:
                'Modal fe’ldan keyin asosiy shakl, davomli zamonda be dan keyin -ing shakli keladi.',
              meaning: 'Base Forms and -ing',
              examples: [
                {
                  sentence: 'I can swim. I am swimming.',
                  translation: 'Men suza olaman. Men suzyapman.',
                },
              ],
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-50-s2',
        type: 'practice',
        title: 'Mashq',
        estimatedMinutes: 5,
        practiceData: {
          instructions: 'To‘g‘ri javobni tanlang.',
          exercises: [
            {
              id: 'en-a1-u1-egi-50-e1',
              options: [
                'Men suza olaman. Men suzyapman.',
                'Kitob o‘qishni yoqtiraman.',
                'Qorong‘i tushyapti.',
              ],
              explanation:
                'Modal fe’ldan keyin asosiy shakl, davomli zamonda be dan keyin -ing shakli keladi.',
              prompt: 'Mos tarjimani tanlang: I can swim. I am swimming.',
              type: 'multiple-choice',
              correctAnswer: 0,
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-50-s3',
        type: 'test',
        title: 'Dars testi',
        estimatedMinutes: 5,
        testData: {
          instructions: 'Bo‘sh joyni to‘ldiring.',
          passingScorePercentage: 80,
          questions: [
            {
              id: 'en-a1-u1-egi-50-q1',
              options: ['work', 'works', 'working'],
              explanation:
                'Modal fe’ldan keyin asosiy shakl, davomli zamonda be dan keyin -ing shakli keladi.',
              question: 'They are ___ now.',
              correctAnswerIndex: 2,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'en-a1-u1-egi-51',
    courseId: 'english-a1',
    unitId: 'en-a1-u1',
    unitTitle: 'Unit 1: Essentials & Greetings',
    language: 'en',
    level: 'A1',
    lessonNumber: 51,
    title: 'To and -ing after Verbs',
    description: 'Want dan keyin to + fe’l, enjoy dan keyin -ing shakli ishlatiladi.',
    estimatedDurationMinutes: 15,
    steps: [
      {
        id: 'en-a1-u1-egi-51-s1',
        type: 'learn',
        title: 'Qoida va misol',
        estimatedMinutes: 5,
        learnData: {
          title: 'To and -ing after Verbs',
          explanation: 'Want dan keyin to + fe’l, enjoy dan keyin -ing shakli ishlatiladi.',
          grammarRules: [
            {
              pattern: 'Want dan keyin to + fe’l, enjoy dan keyin -ing shakli ishlatiladi.',
              meaning: 'To and -ing after Verbs',
              examples: [
                {
                  sentence: 'I enjoy reading.',
                  translation: 'Kitob o‘qishni yoqtiraman.',
                },
              ],
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-51-s2',
        type: 'practice',
        title: 'Mashq',
        estimatedMinutes: 5,
        practiceData: {
          instructions: 'To‘g‘ri javobni tanlang.',
          exercises: [
            {
              id: 'en-a1-u1-egi-51-e1',
              options: [
                'Unga kutishni aytdim.',
                'Kitob o‘qishni yoqtiraman.',
                'Uy vazifamni bajardim va kechki ovqat tayyorladim.',
              ],
              explanation: 'Want dan keyin to + fe’l, enjoy dan keyin -ing shakli ishlatiladi.',
              prompt: 'Mos tarjimani tanlang: I enjoy reading.',
              type: 'multiple-choice',
              correctAnswer: 1,
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-51-s3',
        type: 'test',
        title: 'Dars testi',
        estimatedMinutes: 5,
        testData: {
          instructions: 'Bo‘sh joyni to‘ldiring.',
          passingScorePercentage: 80,
          questions: [
            {
              id: 'en-a1-u1-egi-51-q1',
              options: ['to learn', 'learning', 'learn'],
              explanation: 'Want dan keyin to + fe’l, enjoy dan keyin -ing shakli ishlatiladi.',
              question: 'She wants ___ English.',
              correctAnswerIndex: 0,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'en-a1-u1-egi-52',
    courseId: 'english-a1',
    unitId: 'en-a1-u1',
    unitTitle: 'Unit 1: Essentials & Greetings',
    language: 'en',
    level: 'A1',
    lessonNumber: 52,
    title: 'Want and Tell with an Object',
    description: 'Want yoki tell dan keyin odam, undan keyin to + fe’l kelishi mumkin.',
    estimatedDurationMinutes: 15,
    steps: [
      {
        id: 'en-a1-u1-egi-52-s1',
        type: 'learn',
        title: 'Qoida va misol',
        estimatedMinutes: 5,
        learnData: {
          title: 'Want and Tell with an Object',
          explanation: 'Want yoki tell dan keyin odam, undan keyin to + fe’l kelishi mumkin.',
          grammarRules: [
            {
              pattern: 'Want yoki tell dan keyin odam, undan keyin to + fe’l kelishi mumkin.',
              meaning: 'Want and Tell with an Object',
              examples: [
                {
                  sentence: 'I told him to wait.',
                  translation: 'Unga kutishni aytdim.',
                },
              ],
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-52-s2',
        type: 'practice',
        title: 'Mashq',
        estimatedMinutes: 5,
        practiceData: {
          instructions: 'To‘g‘ri javobni tanlang.',
          exercises: [
            {
              id: 'en-a1-u1-egi-52-e1',
              options: [
                'Non sotib olish uchun tashqariga chiqdim.',
                'Soat sakkizda nonushta qildik.',
                'Unga kutishni aytdim.',
              ],
              explanation: 'Want yoki tell dan keyin odam, undan keyin to + fe’l kelishi mumkin.',
              prompt: 'Mos tarjimani tanlang: I told him to wait.',
              type: 'multiple-choice',
              correctAnswer: 2,
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-52-s3',
        type: 'test',
        title: 'Dars testi',
        estimatedMinutes: 5,
        testData: {
          instructions: 'Bo‘sh joyni to‘ldiring.',
          passingScorePercentage: 80,
          questions: [
            {
              id: 'en-a1-u1-egi-52-q1',
              options: ['staying', 'to stay', 'stay'],
              explanation: 'Want yoki tell dan keyin odam, undan keyin to + fe’l kelishi mumkin.',
              question: 'I want you ___ here.',
              correctAnswerIndex: 1,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'en-a1-u1-egi-53',
    courseId: 'english-a1',
    unitId: 'en-a1-u1',
    unitTitle: 'Unit 1: Essentials & Greetings',
    language: 'en',
    level: 'A1',
    lessonNumber: 53,
    title: 'To Express Purpose',
    description: 'To + fe’l biror ish nima maqsadda qilinganini bildiradi.',
    estimatedDurationMinutes: 15,
    steps: [
      {
        id: 'en-a1-u1-egi-53-s1',
        type: 'learn',
        title: 'Qoida va misol',
        estimatedMinutes: 5,
        learnData: {
          title: 'To Express Purpose',
          explanation: 'To + fe’l biror ish nima maqsadda qilinganini bildiradi.',
          grammarRules: [
            {
              pattern: 'To + fe’l biror ish nima maqsadda qilinganini bildiradi.',
              meaning: 'To Express Purpose',
              examples: [
                {
                  sentence: 'I went out to buy bread.',
                  translation: 'Non sotib olish uchun tashqariga chiqdim.',
                },
              ],
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-53-s2',
        type: 'practice',
        title: 'Mashq',
        estimatedMinutes: 5,
        practiceData: {
          instructions: 'To‘g‘ri javobni tanlang.',
          exercises: [
            {
              id: 'en-a1-u1-egi-53-e1',
              options: [
                'Non sotib olish uchun tashqariga chiqdim.',
                'Biz sayrga chiqdik.',
                'U menga qo‘ng‘iroq qildi.',
              ],
              explanation: 'To + fe’l biror ish nima maqsadda qilinganini bildiradi.',
              prompt: 'Mos tarjimani tanlang: I went out to buy bread.',
              type: 'multiple-choice',
              correctAnswer: 0,
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-53-s3',
        type: 'test',
        title: 'Dars testi',
        estimatedMinutes: 5,
        testData: {
          instructions: 'Bo‘sh joyni to‘ldiring.',
          passingScorePercentage: 80,
          questions: [
            {
              id: 'en-a1-u1-egi-53-q1',
              options: ['asking', 'asked', 'to ask'],
              explanation: 'To + fe’l biror ish nima maqsadda qilinganini bildiradi.',
              question: 'We called ___ for help.',
              correctAnswerIndex: 2,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'en-a1-u1-egi-54',
    courseId: 'english-a1',
    unitId: 'en-a1-u1',
    unitTitle: 'Unit 1: Essentials & Greetings',
    language: 'en',
    level: 'A1',
    lessonNumber: 54,
    title: 'Go Patterns',
    description:
      'Manzil uchun go to, faoliyat uchun go + -ing, sayr kabi iborada go for ishlatiladi.',
    estimatedDurationMinutes: 15,
    steps: [
      {
        id: 'en-a1-u1-egi-54-s1',
        type: 'learn',
        title: 'Qoida va misol',
        estimatedMinutes: 5,
        learnData: {
          title: 'Go Patterns',
          explanation:
            'Manzil uchun go to, faoliyat uchun go + -ing, sayr kabi iborada go for ishlatiladi.',
          grammarRules: [
            {
              pattern:
                'Manzil uchun go to, faoliyat uchun go + -ing, sayr kabi iborada go for ishlatiladi.',
              meaning: 'Go Patterns',
              examples: [
                {
                  sentence: 'We went for a walk.',
                  translation: 'Biz sayrga chiqdik.',
                },
              ],
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-54-s2',
        type: 'practice',
        title: 'Mashq',
        estimatedMinutes: 5,
        practiceData: {
          instructions: 'To‘g‘ri javobni tanlang.',
          exercises: [
            {
              id: 'en-a1-u1-egi-54-e1',
              options: [
                'Qorong‘i tushyapti.',
                'Biz sayrga chiqdik.',
                'Ular ota-onasi bilan yashaydi.',
              ],
              explanation:
                'Manzil uchun go to, faoliyat uchun go + -ing, sayr kabi iborada go for ishlatiladi.',
              prompt: 'Mos tarjimani tanlang: We went for a walk.',
              type: 'multiple-choice',
              correctAnswer: 1,
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-54-s3',
        type: 'test',
        title: 'Dars testi',
        estimatedMinutes: 5,
        testData: {
          instructions: 'Bo‘sh joyni to‘ldiring.',
          passingScorePercentage: 80,
          questions: [
            {
              id: 'en-a1-u1-egi-54-q1',
              options: ['swimming', 'to swimming', 'swim'],
              explanation:
                'Manzil uchun go to, faoliyat uchun go + -ing, sayr kabi iborada go for ishlatiladi.',
              question: 'They go ___ every Sunday.',
              correctAnswerIndex: 0,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'en-a1-u1-egi-55',
    courseId: 'english-a1',
    unitId: 'en-a1-u1',
    unitTitle: 'Unit 1: Essentials & Greetings',
    language: 'en',
    level: 'A1',
    lessonNumber: 55,
    title: 'Get',
    description:
      'Get ot bilan olish yoki yetib borish, sifat bilan holat o‘zgarishini anglatishi mumkin.',
    estimatedDurationMinutes: 15,
    steps: [
      {
        id: 'en-a1-u1-egi-55-s1',
        type: 'learn',
        title: 'Qoida va misol',
        estimatedMinutes: 5,
        learnData: {
          title: 'Get',
          explanation:
            'Get ot bilan olish yoki yetib borish, sifat bilan holat o‘zgarishini anglatishi mumkin.',
          grammarRules: [
            {
              pattern:
                'Get ot bilan olish yoki yetib borish, sifat bilan holat o‘zgarishini anglatishi mumkin.',
              meaning: 'Get',
              examples: [
                {
                  sentence: 'It’s getting dark.',
                  translation: 'Qorong‘i tushyapti.',
                },
              ],
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-55-s2',
        type: 'practice',
        title: 'Mashq',
        estimatedMinutes: 5,
        practiceData: {
          instructions: 'To‘g‘ri javobni tanlang.',
          exercises: [
            {
              id: 'en-a1-u1-egi-55-e1',
              options: [
                'Uy vazifamni bajardim va kechki ovqat tayyorladim.',
                'Bu sumka meniki.',
                'Qorong‘i tushyapti.',
              ],
              explanation:
                'Get ot bilan olish yoki yetib borish, sifat bilan holat o‘zgarishini anglatishi mumkin.',
              prompt: 'Mos tarjimani tanlang: It’s getting dark.',
              type: 'multiple-choice',
              correctAnswer: 2,
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-55-s3',
        type: 'test',
        title: 'Dars testi',
        estimatedMinutes: 5,
        testData: {
          instructions: 'Bo‘sh joyni to‘ldiring.',
          passingScorePercentage: 80,
          questions: [
            {
              id: 'en-a1-u1-egi-55-q1',
              options: ['make', 'get', 'do'],
              explanation:
                'Get ot bilan olish yoki yetib borish, sifat bilan holat o‘zgarishini anglatishi mumkin.',
              question: 'What time did you ___ home?',
              correctAnswerIndex: 1,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'en-a1-u1-egi-56',
    courseId: 'english-a1',
    unitId: 'en-a1-u1',
    unitTitle: 'Unit 1: Essentials & Greetings',
    language: 'en',
    level: 'A1',
    lessonNumber: 56,
    title: 'Do and Make',
    description:
      'Do ko‘pincha ish va vazifa bilan, make biror narsani tayyorlash yoki yaratish bilan keladi.',
    estimatedDurationMinutes: 15,
    steps: [
      {
        id: 'en-a1-u1-egi-56-s1',
        type: 'learn',
        title: 'Qoida va misol',
        estimatedMinutes: 5,
        learnData: {
          title: 'Do and Make',
          explanation:
            'Do ko‘pincha ish va vazifa bilan, make biror narsani tayyorlash yoki yaratish bilan keladi.',
          grammarRules: [
            {
              pattern:
                'Do ko‘pincha ish va vazifa bilan, make biror narsani tayyorlash yoki yaratish bilan keladi.',
              meaning: 'Do and Make',
              examples: [
                {
                  sentence: 'I did my homework and made dinner.',
                  translation: 'Uy vazifamni bajardim va kechki ovqat tayyorladim.',
                },
              ],
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-56-s2',
        type: 'practice',
        title: 'Mashq',
        estimatedMinutes: 5,
        practiceData: {
          instructions: 'To‘g‘ri javobni tanlang.',
          exercises: [
            {
              id: 'en-a1-u1-egi-56-e1',
              options: [
                'Uy vazifamni bajardim va kechki ovqat tayyorladim.',
                'Soat sakkizda nonushta qildik.',
                'Ruchkamni topdim. Anavisi ham meniki.',
              ],
              explanation:
                'Do ko‘pincha ish va vazifa bilan, make biror narsani tayyorlash yoki yaratish bilan keladi.',
              prompt: 'Mos tarjimani tanlang: I did my homework and made dinner.',
              type: 'multiple-choice',
              correctAnswer: 0,
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-56-s3',
        type: 'test',
        title: 'Dars testi',
        estimatedMinutes: 5,
        testData: {
          instructions: 'Bo‘sh joyni to‘ldiring.',
          passingScorePercentage: 80,
          questions: [
            {
              id: 'en-a1-u1-egi-56-q1',
              options: ['do', 'get', 'make'],
              explanation:
                'Do ko‘pincha ish va vazifa bilan, make biror narsani tayyorlash yoki yaratish bilan keladi.',
              question: 'Can you ___ a cake?',
              correctAnswerIndex: 2,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'en-a1-u1-egi-57',
    courseId: 'english-a1',
    unitId: 'en-a1-u1',
    unitTitle: 'Unit 1: Essentials & Greetings',
    language: 'en',
    level: 'A1',
    lessonNumber: 57,
    title: 'Have in Everyday Expressions',
    description:
      'Have egalikdan tashqari ovqatlanish, dam olish va boshqa kundalik harakatlar bilan ham keladi.',
    estimatedDurationMinutes: 15,
    steps: [
      {
        id: 'en-a1-u1-egi-57-s1',
        type: 'learn',
        title: 'Qoida va misol',
        estimatedMinutes: 5,
        learnData: {
          title: 'Have in Everyday Expressions',
          explanation:
            'Have egalikdan tashqari ovqatlanish, dam olish va boshqa kundalik harakatlar bilan ham keladi.',
          grammarRules: [
            {
              pattern:
                'Have egalikdan tashqari ovqatlanish, dam olish va boshqa kundalik harakatlar bilan ham keladi.',
              meaning: 'Have in Everyday Expressions',
              examples: [
                {
                  sentence: 'We had breakfast at eight.',
                  translation: 'Soat sakkizda nonushta qildik.',
                },
              ],
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-57-s2',
        type: 'practice',
        title: 'Mashq',
        estimatedMinutes: 5,
        practiceData: {
          instructions: 'To‘g‘ri javobni tanlang.',
          exercises: [
            {
              id: 'en-a1-u1-egi-57-e1',
              options: [
                'U menga qo‘ng‘iroq qildi.',
                'Soat sakkizda nonushta qildik.',
                'U o‘zini kesib oldi.',
              ],
              explanation:
                'Have egalikdan tashqari ovqatlanish, dam olish va boshqa kundalik harakatlar bilan ham keladi.',
              prompt: 'Mos tarjimani tanlang: We had breakfast at eight.',
              type: 'multiple-choice',
              correctAnswer: 1,
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-57-s3',
        type: 'test',
        title: 'Dars testi',
        estimatedMinutes: 5,
        testData: {
          instructions: 'Bo‘sh joyni to‘ldiring.',
          passingScorePercentage: 80,
          questions: [
            {
              id: 'en-a1-u1-egi-57-q1',
              options: ['have', 'make', 'do'],
              explanation:
                'Have egalikdan tashqari ovqatlanish, dam olish va boshqa kundalik harakatlar bilan ham keladi.',
              question: 'Let’s ___ a break.',
              correctAnswerIndex: 0,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'en-a1-u1-egi-58',
    courseId: 'english-a1',
    unitId: 'en-a1-u1',
    unitTitle: 'Unit 1: Essentials & Greetings',
    language: 'en',
    level: 'A1',
    lessonNumber: 58,
    title: 'Subject and Object Pronouns',
    description:
      'I, he, they ega bo‘ladi. Me, him, them fe’l yoki predlogdan keyin to‘ldiruvchi bo‘ladi.',
    estimatedDurationMinutes: 15,
    steps: [
      {
        id: 'en-a1-u1-egi-58-s1',
        type: 'learn',
        title: 'Qoida va misol',
        estimatedMinutes: 5,
        learnData: {
          title: 'Subject and Object Pronouns',
          explanation:
            'I, he, they ega bo‘ladi. Me, him, them fe’l yoki predlogdan keyin to‘ldiruvchi bo‘ladi.',
          grammarRules: [
            {
              pattern:
                'I, he, they ega bo‘ladi. Me, him, them fe’l yoki predlogdan keyin to‘ldiruvchi bo‘ladi.',
              meaning: 'Subject and Object Pronouns',
              examples: [
                {
                  sentence: 'She called me.',
                  translation: 'U menga qo‘ng‘iroq qildi.',
                },
              ],
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-58-s2',
        type: 'practice',
        title: 'Mashq',
        estimatedMinutes: 5,
        practiceData: {
          instructions: 'To‘g‘ri javobni tanlang.',
          exercises: [
            {
              id: 'en-a1-u1-egi-58-e1',
              options: [
                'Ular ota-onasi bilan yashaydi.',
                'Anavi opamning velosipedi.',
                'U menga qo‘ng‘iroq qildi.',
              ],
              explanation:
                'I, he, they ega bo‘ladi. Me, him, them fe’l yoki predlogdan keyin to‘ldiruvchi bo‘ladi.',
              prompt: 'Mos tarjimani tanlang: She called me.',
              type: 'multiple-choice',
              correctAnswer: 2,
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-58-s3',
        type: 'test',
        title: 'Dars testi',
        estimatedMinutes: 5,
        testData: {
          instructions: 'Bo‘sh joyni to‘ldiring.',
          passingScorePercentage: 80,
          questions: [
            {
              id: 'en-a1-u1-egi-58-q1',
              options: ['he', 'him', 'his'],
              explanation:
                'I, he, they ega bo‘ladi. Me, him, them fe’l yoki predlogdan keyin to‘ldiruvchi bo‘ladi.',
              question: 'I saw ___ at school.',
              correctAnswerIndex: 1,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'en-a1-u1-egi-59',
    courseId: 'english-a1',
    unitId: 'en-a1-u1',
    unitTitle: 'Unit 1: Essentials & Greetings',
    language: 'en',
    level: 'A1',
    lessonNumber: 59,
    title: 'Possessive Adjectives',
    description: 'My, your, his, her, its, our va their otdan oldin kelib egalikni bildiradi.',
    estimatedDurationMinutes: 15,
    steps: [
      {
        id: 'en-a1-u1-egi-59-s1',
        type: 'learn',
        title: 'Qoida va misol',
        estimatedMinutes: 5,
        learnData: {
          title: 'Possessive Adjectives',
          explanation:
            'My, your, his, her, its, our va their otdan oldin kelib egalikni bildiradi.',
          grammarRules: [
            {
              pattern:
                'My, your, his, her, its, our va their otdan oldin kelib egalikni bildiradi.',
              meaning: 'Possessive Adjectives',
              examples: [
                {
                  sentence: 'They live with their parents.',
                  translation: 'Ular ota-onasi bilan yashaydi.',
                },
              ],
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-59-s2',
        type: 'practice',
        title: 'Mashq',
        estimatedMinutes: 5,
        practiceData: {
          instructions: 'To‘g‘ri javobni tanlang.',
          exercises: [
            {
              id: 'en-a1-u1-egi-59-e1',
              options: ['Ular ota-onasi bilan yashaydi.', 'Bu sumka meniki.', 'U muhandis.'],
              explanation:
                'My, your, his, her, its, our va their otdan oldin kelib egalikni bildiradi.',
              prompt: 'Mos tarjimani tanlang: They live with their parents.',
              type: 'multiple-choice',
              correctAnswer: 0,
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-59-s3',
        type: 'test',
        title: 'Dars testi',
        estimatedMinutes: 5,
        testData: {
          instructions: 'Bo‘sh joyni to‘ldiring.',
          passingScorePercentage: 80,
          questions: [
            {
              id: 'en-a1-u1-egi-59-q1',
              options: ['hers', 'she', 'her'],
              explanation:
                'My, your, his, her, its, our va their otdan oldin kelib egalikni bildiradi.',
              question: 'She lost ___ keys.',
              correctAnswerIndex: 2,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'en-a1-u1-egi-60',
    courseId: 'english-a1',
    unitId: 'en-a1-u1',
    unitTitle: 'Unit 1: Essentials & Greetings',
    language: 'en',
    level: 'A1',
    lessonNumber: 60,
    title: 'Possessive Pronouns',
    description: 'Mine, yours, his, hers, ours va theirs otni takrorlamasdan egalikni bildiradi.',
    estimatedDurationMinutes: 15,
    steps: [
      {
        id: 'en-a1-u1-egi-60-s1',
        type: 'learn',
        title: 'Qoida va misol',
        estimatedMinutes: 5,
        learnData: {
          title: 'Possessive Pronouns',
          explanation:
            'Mine, yours, his, hers, ours va theirs otni takrorlamasdan egalikni bildiradi.',
          grammarRules: [
            {
              pattern:
                'Mine, yours, his, hers, ours va theirs otni takrorlamasdan egalikni bildiradi.',
              meaning: 'Possessive Pronouns',
              examples: [
                {
                  sentence: 'This bag is mine.',
                  translation: 'Bu sumka meniki.',
                },
              ],
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-60-s2',
        type: 'practice',
        title: 'Mashq',
        estimatedMinutes: 5,
        practiceData: {
          instructions: 'To‘g‘ri javobni tanlang.',
          exercises: [
            {
              id: 'en-a1-u1-egi-60-e1',
              options: [
                'Ruchkamni topdim. Anavisi ham meniki.',
                'Bu sumka meniki.',
                'Ikki bola o‘ynayapti.',
              ],
              explanation:
                'Mine, yours, his, hers, ours va theirs otni takrorlamasdan egalikni bildiradi.',
              prompt: 'Mos tarjimani tanlang: This bag is mine.',
              type: 'multiple-choice',
              correctAnswer: 1,
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-60-s3',
        type: 'test',
        title: 'Dars testi',
        estimatedMinutes: 5,
        testData: {
          instructions: 'Bo‘sh joyni to‘ldiring.',
          passingScorePercentage: 80,
          questions: [
            {
              id: 'en-a1-u1-egi-60-q1',
              options: ['hers', 'her', 'she'],
              explanation:
                'Mine, yours, his, hers, ours va theirs otni takrorlamasdan egalikni bildiradi.',
              question: 'Whose shoes are these? They’re ___.',
              correctAnswerIndex: 0,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'en-a1-u1-egi-61',
    courseId: 'english-a1',
    unitId: 'en-a1-u1',
    unitTitle: 'Unit 1: Essentials & Greetings',
    language: 'en',
    level: 'A1',
    lessonNumber: 61,
    title: 'Pronoun Forms Together',
    description: 'I ega, me to‘ldiruvchi, my otdan oldin, mine esa mustaqil ishlatiladi.',
    estimatedDurationMinutes: 15,
    steps: [
      {
        id: 'en-a1-u1-egi-61-s1',
        type: 'learn',
        title: 'Qoida va misol',
        estimatedMinutes: 5,
        learnData: {
          title: 'Pronoun Forms Together',
          explanation: 'I ega, me to‘ldiruvchi, my otdan oldin, mine esa mustaqil ishlatiladi.',
          grammarRules: [
            {
              pattern: 'I ega, me to‘ldiruvchi, my otdan oldin, mine esa mustaqil ishlatiladi.',
              meaning: 'Pronoun Forms Together',
              examples: [
                {
                  sentence: 'I found my pen. That one is mine too.',
                  translation: 'Ruchkamni topdim. Anavisi ham meniki.',
                },
              ],
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-61-s2',
        type: 'practice',
        title: 'Mashq',
        estimatedMinutes: 5,
        practiceData: {
          instructions: 'To‘g‘ri javobni tanlang.',
          exercises: [
            {
              id: 'en-a1-u1-egi-61-e1',
              options: [
                'U o‘zini kesib oldi.',
                'Stul va non sotib oldik.',
                'Ruchkamni topdim. Anavisi ham meniki.',
              ],
              explanation: 'I ega, me to‘ldiruvchi, my otdan oldin, mine esa mustaqil ishlatiladi.',
              prompt: 'Mos tarjimani tanlang: I found my pen. That one is mine too.',
              type: 'multiple-choice',
              correctAnswer: 2,
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-61-s3',
        type: 'test',
        title: 'Dars testi',
        estimatedMinutes: 5,
        testData: {
          instructions: 'Bo‘sh joyni to‘ldiring.',
          passingScorePercentage: 80,
          questions: [
            {
              id: 'en-a1-u1-egi-61-q1',
              options: ['my', 'me', 'mine'],
              explanation: 'I ega, me to‘ldiruvchi, my otdan oldin, mine esa mustaqil ishlatiladi.',
              question: 'Please give ___ my book.',
              correctAnswerIndex: 1,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'en-a1-u1-egi-62',
    courseId: 'english-a1',
    unitId: 'en-a1-u1',
    unitTitle: 'Unit 1: Essentials & Greetings',
    language: 'en',
    level: 'A1',
    lessonNumber: 62,
    title: 'Reflexive Pronouns',
    description:
      'Ega va to‘ldiruvchi bir odam bo‘lsa myself, yourself, himself kabi shakllar ishlatiladi.',
    estimatedDurationMinutes: 15,
    steps: [
      {
        id: 'en-a1-u1-egi-62-s1',
        type: 'learn',
        title: 'Qoida va misol',
        estimatedMinutes: 5,
        learnData: {
          title: 'Reflexive Pronouns',
          explanation:
            'Ega va to‘ldiruvchi bir odam bo‘lsa myself, yourself, himself kabi shakllar ishlatiladi.',
          grammarRules: [
            {
              pattern:
                'Ega va to‘ldiruvchi bir odam bo‘lsa myself, yourself, himself kabi shakllar ishlatiladi.',
              meaning: 'Reflexive Pronouns',
              examples: [
                {
                  sentence: 'He cut himself.',
                  translation: 'U o‘zini kesib oldi.',
                },
              ],
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-62-s2',
        type: 'practice',
        title: 'Mashq',
        estimatedMinutes: 5,
        practiceData: {
          instructions: 'To‘g‘ri javobni tanlang.',
          exercises: [
            {
              id: 'en-a1-u1-egi-62-e1',
              options: [
                'U o‘zini kesib oldi.',
                'Anavi opamning velosipedi.',
                'Ikki shisha suv oldim.',
              ],
              explanation:
                'Ega va to‘ldiruvchi bir odam bo‘lsa myself, yourself, himself kabi shakllar ishlatiladi.',
              prompt: 'Mos tarjimani tanlang: He cut himself.',
              type: 'multiple-choice',
              correctAnswer: 0,
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-62-s3',
        type: 'test',
        title: 'Dars testi',
        estimatedMinutes: 5,
        testData: {
          instructions: 'Bo‘sh joyni to‘ldiring.',
          passingScorePercentage: 80,
          questions: [
            {
              id: 'en-a1-u1-egi-62-q1',
              options: ['her own', 'she', 'herself'],
              explanation:
                'Ega va to‘ldiruvchi bir odam bo‘lsa myself, yourself, himself kabi shakllar ishlatiladi.',
              question: 'She looked at ___ in the mirror.',
              correctAnswerIndex: 2,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'en-a1-u1-egi-63',
    courseId: 'english-a1',
    unitId: 'en-a1-u1',
    unitTitle: 'Unit 1: Essentials & Greetings',
    language: 'en',
    level: 'A1',
    lessonNumber: 63,
    title: 'Possessive ’s',
    description:
      'Birlikdagi egaga odatda ’s qo‘shiladi. -s bilan tugagan muntazam ko‘plikdan keyin apostrof qo‘yiladi.',
    estimatedDurationMinutes: 15,
    steps: [
      {
        id: 'en-a1-u1-egi-63-s1',
        type: 'learn',
        title: 'Qoida va misol',
        estimatedMinutes: 5,
        learnData: {
          title: 'Possessive ’s',
          explanation:
            'Birlikdagi egaga odatda ’s qo‘shiladi. -s bilan tugagan muntazam ko‘plikdan keyin apostrof qo‘yiladi.',
          grammarRules: [
            {
              pattern:
                'Birlikdagi egaga odatda ’s qo‘shiladi. -s bilan tugagan muntazam ko‘plikdan keyin apostrof qo‘yiladi.',
              meaning: 'Possessive ’s',
              examples: [
                {
                  sentence: 'That is my sister’s bike.',
                  translation: 'Anavi opamning velosipedi.',
                },
              ],
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-63-s2',
        type: 'practice',
        title: 'Mashq',
        estimatedMinutes: 5,
        practiceData: {
          instructions: 'To‘g‘ri javobni tanlang.',
          exercises: [
            {
              id: 'en-a1-u1-egi-63-e1',
              options: [
                'U muhandis.',
                'Anavi opamning velosipedi.',
                'Bir itni ko‘rdim. O‘sha it ho‘l edi.',
              ],
              explanation:
                'Birlikdagi egaga odatda ’s qo‘shiladi. -s bilan tugagan muntazam ko‘plikdan keyin apostrof qo‘yiladi.',
              prompt: 'Mos tarjimani tanlang: That is my sister’s bike.',
              type: 'multiple-choice',
              correctAnswer: 1,
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-63-s3',
        type: 'test',
        title: 'Dars testi',
        estimatedMinutes: 5,
        testData: {
          instructions: 'Bo‘sh joyni to‘ldiring.',
          passingScorePercentage: 80,
          questions: [
            {
              id: 'en-a1-u1-egi-63-q1',
              options: ['Tom’s', 'Toms', 'Tom'],
              explanation:
                'Birlikdagi egaga odatda ’s qo‘shiladi. -s bilan tugagan muntazam ko‘plikdan keyin apostrof qo‘yiladi.',
              question: 'This is ___ room. (Tomning.)',
              correctAnswerIndex: 0,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'en-a1-u1-egi-64',
    courseId: 'english-a1',
    unitId: 'en-a1-u1',
    unitTitle: 'Unit 1: Essentials & Greetings',
    language: 'en',
    level: 'A1',
    lessonNumber: 64,
    title: 'A and An',
    description:
      'Birlikdagi sanaladigan ot oldidan undosh tovush uchun a, unli tovush uchun an ishlatiladi.',
    estimatedDurationMinutes: 15,
    steps: [
      {
        id: 'en-a1-u1-egi-64-s1',
        type: 'learn',
        title: 'Qoida va misol',
        estimatedMinutes: 5,
        learnData: {
          title: 'A and An',
          explanation:
            'Birlikdagi sanaladigan ot oldidan undosh tovush uchun a, unli tovush uchun an ishlatiladi.',
          grammarRules: [
            {
              pattern:
                'Birlikdagi sanaladigan ot oldidan undosh tovush uchun a, unli tovush uchun an ishlatiladi.',
              meaning: 'A and An',
              examples: [
                {
                  sentence: 'She is an engineer.',
                  translation: 'U muhandis.',
                },
              ],
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-64-s2',
        type: 'practice',
        title: 'Mashq',
        estimatedMinutes: 5,
        practiceData: {
          instructions: 'To‘g‘ri javobni tanlang.',
          exercises: [
            {
              id: 'en-a1-u1-egi-64-e1',
              options: ['Ikki bola o‘ynayapti.', 'Iltimos, eshikni yoping.', 'U muhandis.'],
              explanation:
                'Birlikdagi sanaladigan ot oldidan undosh tovush uchun a, unli tovush uchun an ishlatiladi.',
              prompt: 'Mos tarjimani tanlang: She is an engineer.',
              type: 'multiple-choice',
              correctAnswer: 2,
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-64-s3',
        type: 'test',
        title: 'Dars testi',
        estimatedMinutes: 5,
        testData: {
          instructions: 'Bo‘sh joyni to‘ldiring.',
          passingScorePercentage: 80,
          questions: [
            {
              id: 'en-a1-u1-egi-64-q1',
              options: ['a', 'an', 'the'],
              explanation:
                'Birlikdagi sanaladigan ot oldidan undosh tovush uchun a, unli tovush uchun an ishlatiladi.',
              question: 'Choose a or an: I waited for ___ hour.',
              correctAnswerIndex: 1,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'en-a1-u1-egi-65',
    courseId: 'english-a1',
    unitId: 'en-a1-u1',
    unitTitle: 'Unit 1: Essentials & Greetings',
    language: 'en',
    level: 'A1',
    lessonNumber: 65,
    title: 'Singular and Plural',
    description:
      'Ko‘p otlarga -s yoki -es qo‘shiladi. Child → children kabi ayrim ko‘pliklar boshqacha yasaladi.',
    estimatedDurationMinutes: 15,
    steps: [
      {
        id: 'en-a1-u1-egi-65-s1',
        type: 'learn',
        title: 'Qoida va misol',
        estimatedMinutes: 5,
        learnData: {
          title: 'Singular and Plural',
          explanation:
            'Ko‘p otlarga -s yoki -es qo‘shiladi. Child → children kabi ayrim ko‘pliklar boshqacha yasaladi.',
          grammarRules: [
            {
              pattern:
                'Ko‘p otlarga -s yoki -es qo‘shiladi. Child → children kabi ayrim ko‘pliklar boshqacha yasaladi.',
              meaning: 'Singular and Plural',
              examples: [
                {
                  sentence: 'Two children are playing.',
                  translation: 'Ikki bola o‘ynayapti.',
                },
              ],
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-65-s2',
        type: 'practice',
        title: 'Mashq',
        estimatedMinutes: 5,
        practiceData: {
          instructions: 'To‘g‘ri javobni tanlang.',
          exercises: [
            {
              id: 'en-a1-u1-egi-65-e1',
              options: [
                'Ikki bola o‘ynayapti.',
                'Stul va non sotib oldik.',
                'Ishdan keyin uyga bordim.',
              ],
              explanation:
                'Ko‘p otlarga -s yoki -es qo‘shiladi. Child → children kabi ayrim ko‘pliklar boshqacha yasaladi.',
              prompt: 'Mos tarjimani tanlang: Two children are playing.',
              type: 'multiple-choice',
              correctAnswer: 0,
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-65-s3',
        type: 'test',
        title: 'Dars testi',
        estimatedMinutes: 5,
        testData: {
          instructions: 'Bo‘sh joyni to‘ldiring.',
          passingScorePercentage: 80,
          questions: [
            {
              id: 'en-a1-u1-egi-65-q1',
              options: ['bus', 'buss', 'buses'],
              explanation:
                'Ko‘p otlarga -s yoki -es qo‘shiladi. Child → children kabi ayrim ko‘pliklar boshqacha yasaladi.',
              question: 'There are three ___ on the street.',
              correctAnswerIndex: 2,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'en-a1-u1-egi-66',
    courseId: 'english-a1',
    unitId: 'en-a1-u1',
    unitTitle: 'Unit 1: Essentials & Greetings',
    language: 'en',
    level: 'A1',
    lessonNumber: 66,
    title: 'Countable and Uncountable Nouns',
    description:
      'Sanaladigan otning birlik va ko‘pligi bor. Water kabi sanalmaydigan ot oldidan bevosita a/an qo‘yilmaydi.',
    estimatedDurationMinutes: 15,
    steps: [
      {
        id: 'en-a1-u1-egi-66-s1',
        type: 'learn',
        title: 'Qoida va misol',
        estimatedMinutes: 5,
        learnData: {
          title: 'Countable and Uncountable Nouns',
          explanation:
            'Sanaladigan otning birlik va ko‘pligi bor. Water kabi sanalmaydigan ot oldidan bevosita a/an qo‘yilmaydi.',
          grammarRules: [
            {
              pattern:
                'Sanaladigan otning birlik va ko‘pligi bor. Water kabi sanalmaydigan ot oldidan bevosita a/an qo‘yilmaydi.',
              meaning: 'Countable and Uncountable Nouns',
              examples: [
                {
                  sentence: 'We bought a chair and some bread.',
                  translation: 'Stul va non sotib oldik.',
                },
              ],
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-66-s2',
        type: 'practice',
        title: 'Mashq',
        estimatedMinutes: 5,
        practiceData: {
          instructions: 'To‘g‘ri javobni tanlang.',
          exercises: [
            {
              id: 'en-a1-u1-egi-66-e1',
              options: [
                'Ikki shisha suv oldim.',
                'Stul va non sotib oldik.',
                'Musiqa va kitoblarni yoqtiraman.',
              ],
              explanation:
                'Sanaladigan otning birlik va ko‘pligi bor. Water kabi sanalmaydigan ot oldidan bevosita a/an qo‘yilmaydi.',
              prompt: 'Mos tarjimani tanlang: We bought a chair and some bread.',
              type: 'multiple-choice',
              correctAnswer: 1,
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-66-s3',
        type: 'test',
        title: 'Dars testi',
        estimatedMinutes: 5,
        testData: {
          instructions: 'Bo‘sh joyni to‘ldiring.',
          passingScorePercentage: 80,
          questions: [
            {
              id: 'en-a1-u1-egi-66-q1',
              options: ['water', 'a water', 'waters'],
              explanation:
                'Sanaladigan otning birlik va ko‘pligi bor. Water kabi sanalmaydigan ot oldidan bevosita a/an qo‘yilmaydi.',
              question: 'I need some ___.',
              correctAnswerIndex: 0,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'en-a1-u1-egi-67',
    courseId: 'english-a1',
    unitId: 'en-a1-u1',
    unitTitle: 'Unit 1: Essentials & Greetings',
    language: 'en',
    level: 'A1',
    lessonNumber: 67,
    title: 'Quantities with Uncountable Nouns',
    description:
      'Sanalmaydigan ot miqdorini a piece of, a bottle of kabi birliklar bilan ko‘rsatish mumkin.',
    estimatedDurationMinutes: 15,
    steps: [
      {
        id: 'en-a1-u1-egi-67-s1',
        type: 'learn',
        title: 'Qoida va misol',
        estimatedMinutes: 5,
        learnData: {
          title: 'Quantities with Uncountable Nouns',
          explanation:
            'Sanalmaydigan ot miqdorini a piece of, a bottle of kabi birliklar bilan ko‘rsatish mumkin.',
          grammarRules: [
            {
              pattern:
                'Sanalmaydigan ot miqdorini a piece of, a bottle of kabi birliklar bilan ko‘rsatish mumkin.',
              meaning: 'Quantities with Uncountable Nouns',
              examples: [
                {
                  sentence: 'I bought two bottles of water.',
                  translation: 'Ikki shisha suv oldim.',
                },
              ],
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-67-s2',
        type: 'practice',
        title: 'Mashq',
        estimatedMinutes: 5,
        practiceData: {
          instructions: 'To‘g‘ri javobni tanlang.',
          exercises: [
            {
              id: 'en-a1-u1-egi-67-e1',
              options: [
                'Bir itni ko‘rdim. O‘sha it ho‘l edi.',
                'London Temza daryosi bo‘yida joylashgan.',
                'Ikki shisha suv oldim.',
              ],
              explanation:
                'Sanalmaydigan ot miqdorini a piece of, a bottle of kabi birliklar bilan ko‘rsatish mumkin.',
              prompt: 'Mos tarjimani tanlang: I bought two bottles of water.',
              type: 'multiple-choice',
              correctAnswer: 2,
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-67-s3',
        type: 'test',
        title: 'Dars testi',
        estimatedMinutes: 5,
        testData: {
          instructions: 'Bo‘sh joyni to‘ldiring.',
          passingScorePercentage: 80,
          questions: [
            {
              id: 'en-a1-u1-egi-67-q1',
              options: ['advices', 'advice', 'an advice'],
              explanation:
                'Sanalmaydigan ot miqdorini a piece of, a bottle of kabi birliklar bilan ko‘rsatish mumkin.',
              question: 'She gave me a piece of ___.',
              correctAnswerIndex: 1,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'en-a1-u1-egi-68',
    courseId: 'english-a1',
    unitId: 'en-a1-u1',
    unitTitle: 'Unit 1: Essentials & Greetings',
    language: 'en',
    level: 'A1',
    lessonNumber: 68,
    title: 'A, An and The',
    description:
      'A/an ilk bor tilga olingan birlikdagi narsani, the esa suhbatdosh biladigan muayyan narsani bildirishi mumkin.',
    estimatedDurationMinutes: 15,
    steps: [
      {
        id: 'en-a1-u1-egi-68-s1',
        type: 'learn',
        title: 'Qoida va misol',
        estimatedMinutes: 5,
        learnData: {
          title: 'A, An and The',
          explanation:
            'A/an ilk bor tilga olingan birlikdagi narsani, the esa suhbatdosh biladigan muayyan narsani bildirishi mumkin.',
          grammarRules: [
            {
              pattern:
                'A/an ilk bor tilga olingan birlikdagi narsani, the esa suhbatdosh biladigan muayyan narsani bildirishi mumkin.',
              meaning: 'A, An and The',
              examples: [
                {
                  sentence: 'I saw a dog. The dog was wet.',
                  translation: 'Bir itni ko‘rdim. O‘sha it ho‘l edi.',
                },
              ],
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-68-s2',
        type: 'practice',
        title: 'Mashq',
        estimatedMinutes: 5,
        practiceData: {
          instructions: 'To‘g‘ri javobni tanlang.',
          exercises: [
            {
              id: 'en-a1-u1-egi-68-e1',
              options: [
                'Bir itni ko‘rdim. O‘sha it ho‘l edi.',
                'Iltimos, eshikni yoping.',
                'Mana bu oyoq kiyimlar meniki.',
              ],
              explanation:
                'A/an ilk bor tilga olingan birlikdagi narsani, the esa suhbatdosh biladigan muayyan narsani bildirishi mumkin.',
              prompt: 'Mos tarjimani tanlang: I saw a dog. The dog was wet.',
              type: 'multiple-choice',
              correctAnswer: 0,
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-68-s3',
        type: 'test',
        title: 'Dars testi',
        estimatedMinutes: 5,
        testData: {
          instructions: 'Bo‘sh joyni to‘ldiring.',
          passingScorePercentage: 80,
          questions: [
            {
              id: 'en-a1-u1-egi-68-q1',
              options: ['An', 'Two', 'The'],
              explanation:
                'A/an ilk bor tilga olingan birlikdagi narsani, the esa suhbatdosh biladigan muayyan narsani bildirishi mumkin.',
              question: 'I bought a lamp. ___ lamp is blue.',
              correctAnswerIndex: 2,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'en-a1-u1-egi-69',
    courseId: 'english-a1',
    unitId: 'en-a1-u1',
    unitTitle: 'Unit 1: Essentials & Greetings',
    language: 'en',
    level: 'A1',
    lessonNumber: 69,
    title: 'The with Known Things',
    description: 'Qaysi narsa nazarda tutilgani vaziyatdan aniq bo‘lsa the ishlatiladi.',
    estimatedDurationMinutes: 15,
    steps: [
      {
        id: 'en-a1-u1-egi-69-s1',
        type: 'learn',
        title: 'Qoida va misol',
        estimatedMinutes: 5,
        learnData: {
          title: 'The with Known Things',
          explanation: 'Qaysi narsa nazarda tutilgani vaziyatdan aniq bo‘lsa the ishlatiladi.',
          grammarRules: [
            {
              pattern: 'Qaysi narsa nazarda tutilgani vaziyatdan aniq bo‘lsa the ishlatiladi.',
              meaning: 'The with Known Things',
              examples: [
                {
                  sentence: 'Please close the door.',
                  translation: 'Iltimos, eshikni yoping.',
                },
              ],
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-69-s2',
        type: 'practice',
        title: 'Mashq',
        estimatedMinutes: 5,
        practiceData: {
          instructions: 'To‘g‘ri javobni tanlang.',
          exercises: [
            {
              id: 'en-a1-u1-egi-69-e1',
              options: [
                'Ishdan keyin uyga bordim.',
                'Iltimos, eshikni yoping.',
                'Ko‘k ranglisini afzal ko‘raman.',
              ],
              explanation: 'Qaysi narsa nazarda tutilgani vaziyatdan aniq bo‘lsa the ishlatiladi.',
              prompt: 'Mos tarjimani tanlang: Please close the door.',
              type: 'multiple-choice',
              correctAnswer: 1,
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-69-s3',
        type: 'test',
        title: 'Dars testi',
        estimatedMinutes: 5,
        testData: {
          instructions: 'Bo‘sh joyni to‘ldiring.',
          passingScorePercentage: 80,
          questions: [
            {
              id: 'en-a1-u1-egi-69-q1',
              options: ['the', 'an', 'a'],
              explanation: 'Qaysi narsa nazarda tutilgani vaziyatdan aniq bo‘lsa the ishlatiladi.',
              question: 'Look at ___ moon in the night sky.',
              correctAnswerIndex: 0,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'en-a1-u1-egi-70',
    courseId: 'english-a1',
    unitId: 'en-a1-u1',
    unitTitle: 'Unit 1: Essentials & Greetings',
    language: 'en',
    level: 'A1',
    lessonNumber: 70,
    title: 'Articles in Common Place Expressions',
    description:
      'Go to work va go home kabi iboralar artiklsiz keladi. Go to the cinema iborasida the ishlatiladi.',
    estimatedDurationMinutes: 15,
    steps: [
      {
        id: 'en-a1-u1-egi-70-s1',
        type: 'learn',
        title: 'Qoida va misol',
        estimatedMinutes: 5,
        learnData: {
          title: 'Articles in Common Place Expressions',
          explanation:
            'Go to work va go home kabi iboralar artiklsiz keladi. Go to the cinema iborasida the ishlatiladi.',
          grammarRules: [
            {
              pattern:
                'Go to work va go home kabi iboralar artiklsiz keladi. Go to the cinema iborasida the ishlatiladi.',
              meaning: 'Articles in Common Place Expressions',
              examples: [
                {
                  sentence: 'I went home after work.',
                  translation: 'Ishdan keyin uyga bordim.',
                },
              ],
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-70-s2',
        type: 'practice',
        title: 'Mashq',
        estimatedMinutes: 5,
        practiceData: {
          instructions: 'To‘g‘ri javobni tanlang.',
          exercises: [
            {
              id: 'en-a1-u1-egi-70-e1',
              options: [
                'Musiqa va kitoblarni yoqtiraman.',
                'Choy ichasizmi?',
                'Ishdan keyin uyga bordim.',
              ],
              explanation:
                'Go to work va go home kabi iboralar artiklsiz keladi. Go to the cinema iborasida the ishlatiladi.',
              prompt: 'Mos tarjimani tanlang: I went home after work.',
              type: 'multiple-choice',
              correctAnswer: 2,
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-70-s3',
        type: 'test',
        title: 'Dars testi',
        estimatedMinutes: 5,
        testData: {
          instructions: 'Bo‘sh joyni to‘ldiring.',
          passingScorePercentage: 80,
          questions: [
            {
              id: 'en-a1-u1-egi-70-q1',
              options: ['to the', 'to', 'the'],
              explanation:
                'Go to work va go home kabi iboralar artiklsiz keladi. Go to the cinema iborasida the ishlatiladi.',
              question: 'She goes ___ work at eight.',
              correctAnswerIndex: 1,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'en-a1-u1-egi-71',
    courseId: 'english-a1',
    unitId: 'en-a1-u1',
    unitTitle: 'Unit 1: Essentials & Greetings',
    language: 'en',
    level: 'A1',
    lessonNumber: 71,
    title: 'General Nouns without The',
    description:
      'Narsalar haqida umumiy gapirganda ko‘plik va sanalmaydigan otlar odatda artiklsiz ishlatiladi.',
    estimatedDurationMinutes: 15,
    steps: [
      {
        id: 'en-a1-u1-egi-71-s1',
        type: 'learn',
        title: 'Qoida va misol',
        estimatedMinutes: 5,
        learnData: {
          title: 'General Nouns without The',
          explanation:
            'Narsalar haqida umumiy gapirganda ko‘plik va sanalmaydigan otlar odatda artiklsiz ishlatiladi.',
          grammarRules: [
            {
              pattern:
                'Narsalar haqida umumiy gapirganda ko‘plik va sanalmaydigan otlar odatda artiklsiz ishlatiladi.',
              meaning: 'General Nouns without The',
              examples: [
                {
                  sentence: 'I like music and books.',
                  translation: 'Musiqa va kitoblarni yoqtiraman.',
                },
              ],
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-71-s2',
        type: 'practice',
        title: 'Mashq',
        estimatedMinutes: 5,
        practiceData: {
          instructions: 'To‘g‘ri javobni tanlang.',
          exercises: [
            {
              id: 'en-a1-u1-egi-71-e1',
              options: [
                'Musiqa va kitoblarni yoqtiraman.',
                'London Temza daryosi bo‘yida joylashgan.',
                'Qancha chipta qoldi? Hech qancha.',
              ],
              explanation:
                'Narsalar haqida umumiy gapirganda ko‘plik va sanalmaydigan otlar odatda artiklsiz ishlatiladi.',
              prompt: 'Mos tarjimani tanlang: I like music and books.',
              type: 'multiple-choice',
              correctAnswer: 0,
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-71-s3',
        type: 'test',
        title: 'Dars testi',
        estimatedMinutes: 5,
        testData: {
          instructions: 'Bo‘sh joyni to‘ldiring.',
          passingScorePercentage: 80,
          questions: [
            {
              id: 'en-a1-u1-egi-71-q1',
              options: ['A books', 'An books', 'Books'],
              explanation:
                'Narsalar haqida umumiy gapirganda ko‘plik va sanalmaydigan otlar odatda artiklsiz ishlatiladi.',
              question: '___ are useful. (Umuman kitoblar.)',
              correctAnswerIndex: 2,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'en-a1-u1-egi-72',
    courseId: 'english-a1',
    unitId: 'en-a1-u1',
    unitTitle: 'Unit 1: Essentials & Greetings',
    language: 'en',
    level: 'A1',
    lessonNumber: 72,
    title: 'The in Place Names',
    description:
      'Shahar va ko‘p mamlakat nomlari artiklsiz. Daryo nomlari va United Kingdom kabi nomlar the bilan ishlatiladi.',
    estimatedDurationMinutes: 15,
    steps: [
      {
        id: 'en-a1-u1-egi-72-s1',
        type: 'learn',
        title: 'Qoida va misol',
        estimatedMinutes: 5,
        learnData: {
          title: 'The in Place Names',
          explanation:
            'Shahar va ko‘p mamlakat nomlari artiklsiz. Daryo nomlari va United Kingdom kabi nomlar the bilan ishlatiladi.',
          grammarRules: [
            {
              pattern:
                'Shahar va ko‘p mamlakat nomlari artiklsiz. Daryo nomlari va United Kingdom kabi nomlar the bilan ishlatiladi.',
              meaning: 'The in Place Names',
              examples: [
                {
                  sentence: 'London is on the Thames.',
                  translation: 'London Temza daryosi bo‘yida joylashgan.',
                },
              ],
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-72-s2',
        type: 'practice',
        title: 'Mashq',
        estimatedMinutes: 5,
        practiceData: {
          instructions: 'To‘g‘ri javobni tanlang.',
          exercises: [
            {
              id: 'en-a1-u1-egi-72-e1',
              options: [
                'Mana bu oyoq kiyimlar meniki.',
                'London Temza daryosi bo‘yida joylashgan.',
                'Hech kim qo‘ng‘iroq qilmadi.',
              ],
              explanation:
                'Shahar va ko‘p mamlakat nomlari artiklsiz. Daryo nomlari va United Kingdom kabi nomlar the bilan ishlatiladi.',
              prompt: 'Mos tarjimani tanlang: London is on the Thames.',
              type: 'multiple-choice',
              correctAnswer: 1,
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-72-s3',
        type: 'test',
        title: 'Dars testi',
        estimatedMinutes: 5,
        testData: {
          instructions: 'Bo‘sh joyni to‘ldiring.',
          passingScorePercentage: 80,
          questions: [
            {
              id: 'en-a1-u1-egi-72-q1',
              options: ['the', 'a', 'an'],
              explanation:
                'Shahar va ko‘p mamlakat nomlari artiklsiz. Daryo nomlari va United Kingdom kabi nomlar the bilan ishlatiladi.',
              question: 'They live in ___ United Kingdom.',
              correctAnswerIndex: 0,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'en-a1-u1-egi-73',
    courseId: 'english-a1',
    unitId: 'en-a1-u1',
    unitTitle: 'Unit 1: Essentials & Greetings',
    language: 'en',
    level: 'A1',
    lessonNumber: 73,
    title: 'This, That, These and Those',
    description:
      'This va these yaqin narsaga, that va those uzoq narsaga ishora qiladi. These va those ko‘plik uchun ishlatiladi.',
    estimatedDurationMinutes: 15,
    steps: [
      {
        id: 'en-a1-u1-egi-73-s1',
        type: 'learn',
        title: 'Qoida va misol',
        estimatedMinutes: 5,
        learnData: {
          title: 'This, That, These and Those',
          explanation:
            'This va these yaqin narsaga, that va those uzoq narsaga ishora qiladi. These va those ko‘plik uchun ishlatiladi.',
          grammarRules: [
            {
              pattern:
                'This va these yaqin narsaga, that va those uzoq narsaga ishora qiladi. These va those ko‘plik uchun ishlatiladi.',
              meaning: 'This, That, These and Those',
              examples: [
                {
                  sentence: 'These shoes are mine.',
                  translation: 'Mana bu oyoq kiyimlar meniki.',
                },
              ],
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-73-s2',
        type: 'practice',
        title: 'Mashq',
        estimatedMinutes: 5,
        practiceData: {
          instructions: 'To‘g‘ri javobni tanlang.',
          exercises: [
            {
              id: 'en-a1-u1-egi-73-e1',
              options: [
                'Ko‘k ranglisini afzal ko‘raman.',
                'Kimdir xat qoldiribdi.',
                'Mana bu oyoq kiyimlar meniki.',
              ],
              explanation:
                'This va these yaqin narsaga, that va those uzoq narsaga ishora qiladi. These va those ko‘plik uchun ishlatiladi.',
              prompt: 'Mos tarjimani tanlang: These shoes are mine.',
              type: 'multiple-choice',
              correctAnswer: 2,
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-73-s3',
        type: 'test',
        title: 'Dars testi',
        estimatedMinutes: 5,
        testData: {
          instructions: 'Bo‘sh joyni to‘ldiring.',
          passingScorePercentage: 80,
          questions: [
            {
              id: 'en-a1-u1-egi-73-q1',
              options: ['This', 'These', 'That'],
              explanation:
                'This va these yaqin narsaga, that va those uzoq narsaga ishora qiladi. These va those ko‘plik uchun ishlatiladi.',
              question: '___ books here are new.',
              correctAnswerIndex: 1,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'en-a1-u1-egi-74',
    courseId: 'english-a1',
    unitId: 'en-a1-u1',
    unitTitle: 'Unit 1: Essentials & Greetings',
    language: 'en',
    level: 'A1',
    lessonNumber: 74,
    title: 'One and Ones',
    description: 'Sanaladigan otni takrorlamaslik uchun birlikda one, ko‘plikda ones ishlatiladi.',
    estimatedDurationMinutes: 15,
    steps: [
      {
        id: 'en-a1-u1-egi-74-s1',
        type: 'learn',
        title: 'Qoida va misol',
        estimatedMinutes: 5,
        learnData: {
          title: 'One and Ones',
          explanation:
            'Sanaladigan otni takrorlamaslik uchun birlikda one, ko‘plikda ones ishlatiladi.',
          grammarRules: [
            {
              pattern:
                'Sanaladigan otni takrorlamaslik uchun birlikda one, ko‘plikda ones ishlatiladi.',
              meaning: 'One and Ones',
              examples: [
                {
                  sentence: 'I prefer the blue one.',
                  translation: 'Ko‘k ranglisini afzal ko‘raman.',
                },
              ],
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-74-s2',
        type: 'practice',
        title: 'Mashq',
        estimatedMinutes: 5,
        practiceData: {
          instructions: 'To‘g‘ri javobni tanlang.',
          exercises: [
            {
              id: 'en-a1-u1-egi-74-e1',
              options: [
                'Ko‘k ranglisini afzal ko‘raman.',
                'Choy ichasizmi?',
                'Har bir o‘quvchida kitob bor.',
              ],
              explanation:
                'Sanaladigan otni takrorlamaslik uchun birlikda one, ko‘plikda ones ishlatiladi.',
              prompt: 'Mos tarjimani tanlang: I prefer the blue one.',
              type: 'multiple-choice',
              correctAnswer: 0,
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-74-s3',
        type: 'test',
        title: 'Dars testi',
        estimatedMinutes: 5,
        testData: {
          instructions: 'Bo‘sh joyni to‘ldiring.',
          passingScorePercentage: 80,
          questions: [
            {
              id: 'en-a1-u1-egi-74-q1',
              options: ['one', 'them', 'ones'],
              explanation:
                'Sanaladigan otni takrorlamaslik uchun birlikda one, ko‘plikda ones ishlatiladi.',
              question: 'Which shoes? The black ___.',
              correctAnswerIndex: 2,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'en-a1-u1-egi-75',
    courseId: 'english-a1',
    unitId: 'en-a1-u1',
    unitTitle: 'Unit 1: Essentials & Greetings',
    language: 'en',
    level: 'A1',
    lessonNumber: 75,
    title: 'Some and Any',
    description:
      'Some odatda darakda, any savol va inkorda ishlatiladi. Taklif yoki iltimosda some ham keladi.',
    estimatedDurationMinutes: 15,
    steps: [
      {
        id: 'en-a1-u1-egi-75-s1',
        type: 'learn',
        title: 'Qoida va misol',
        estimatedMinutes: 5,
        learnData: {
          title: 'Some and Any',
          explanation:
            'Some odatda darakda, any savol va inkorda ishlatiladi. Taklif yoki iltimosda some ham keladi.',
          grammarRules: [
            {
              pattern:
                'Some odatda darakda, any savol va inkorda ishlatiladi. Taklif yoki iltimosda some ham keladi.',
              meaning: 'Some and Any',
              examples: [
                {
                  sentence: 'Would you like some tea?',
                  translation: 'Choy ichasizmi?',
                },
              ],
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-75-s2',
        type: 'practice',
        title: 'Mashq',
        estimatedMinutes: 5,
        practiceData: {
          instructions: 'To‘g‘ri javobni tanlang.',
          exercises: [
            {
              id: 'en-a1-u1-egi-75-e1',
              options: [
                'Qancha chipta qoldi? Hech qancha.',
                'Choy ichasizmi?',
                'Ularning aksariyati o‘tdi.',
              ],
              explanation:
                'Some odatda darakda, any savol va inkorda ishlatiladi. Taklif yoki iltimosda some ham keladi.',
              prompt: 'Mos tarjimani tanlang: Would you like some tea?',
              type: 'multiple-choice',
              correctAnswer: 1,
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-75-s3',
        type: 'test',
        title: 'Dars testi',
        estimatedMinutes: 5,
        testData: {
          instructions: 'Bo‘sh joyni to‘ldiring.',
          passingScorePercentage: 80,
          questions: [
            {
              id: 'en-a1-u1-egi-75-q1',
              options: ['any', 'no', 'an'],
              explanation:
                'Some odatda darakda, any savol va inkorda ishlatiladi. Taklif yoki iltimosda some ham keladi.',
              question: 'There aren’t ___ apples left.',
              correctAnswerIndex: 0,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'en-a1-u1-egi-76',
    courseId: 'english-a1',
    unitId: 'en-a1-u1',
    unitTitle: 'Unit 1: Essentials & Greetings',
    language: 'en',
    level: 'A1',
    lessonNumber: 76,
    title: 'No, Not Any and None',
    description:
      'No otdan oldin keladi. Not any fe’l inkori bilan ishlatiladi. None otni takrorlamasdan miqdor nol ekanini bildiradi.',
    estimatedDurationMinutes: 15,
    steps: [
      {
        id: 'en-a1-u1-egi-76-s1',
        type: 'learn',
        title: 'Qoida va misol',
        estimatedMinutes: 5,
        learnData: {
          title: 'No, Not Any and None',
          explanation:
            'No otdan oldin keladi. Not any fe’l inkori bilan ishlatiladi. None otni takrorlamasdan miqdor nol ekanini bildiradi.',
          grammarRules: [
            {
              pattern:
                'No otdan oldin keladi. Not any fe’l inkori bilan ishlatiladi. None otni takrorlamasdan miqdor nol ekanini bildiradi.',
              meaning: 'No, Not Any and None',
              examples: [
                {
                  sentence: 'How many tickets are left? None.',
                  translation: 'Qancha chipta qoldi? Hech qancha.',
                },
              ],
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-76-s2',
        type: 'practice',
        title: 'Mashq',
        estimatedMinutes: 5,
        practiceData: {
          instructions: 'To‘g‘ri javobni tanlang.',
          exercises: [
            {
              id: 'en-a1-u1-egi-76-e1',
              options: [
                'Hech kim qo‘ng‘iroq qilmadi.',
                'Ikkala javob ham to‘g‘ri.',
                'Qancha chipta qoldi? Hech qancha.',
              ],
              explanation:
                'No otdan oldin keladi. Not any fe’l inkori bilan ishlatiladi. None otni takrorlamasdan miqdor nol ekanini bildiradi.',
              prompt: 'Mos tarjimani tanlang: How many tickets are left? None.',
              type: 'multiple-choice',
              correctAnswer: 2,
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-76-s3',
        type: 'test',
        title: 'Dars testi',
        estimatedMinutes: 5,
        testData: {
          instructions: 'Bo‘sh joyni to‘ldiring.',
          passingScorePercentage: 80,
          questions: [
            {
              id: 'en-a1-u1-egi-76-q1',
              options: ['any', 'no', 'none'],
              explanation:
                'No otdan oldin keladi. Not any fe’l inkori bilan ishlatiladi. None otni takrorlamasdan miqdor nol ekanini bildiradi.',
              question: 'There are ___ tickets left. (Chipta qolmagan.)',
              correctAnswerIndex: 1,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'en-a1-u1-egi-77',
    courseId: 'english-a1',
    unitId: 'en-a1-u1',
    unitTitle: 'Unit 1: Essentials & Greetings',
    language: 'en',
    level: 'A1',
    lessonNumber: 77,
    title: 'Nobody, Nothing and No One',
    description:
      'Nobody va no one odam yo‘qligini, nothing esa narsa yo‘qligini bildiradi. Bu shakllar bilan fe’l odatda darak shaklida keladi.',
    estimatedDurationMinutes: 15,
    steps: [
      {
        id: 'en-a1-u1-egi-77-s1',
        type: 'learn',
        title: 'Qoida va misol',
        estimatedMinutes: 5,
        learnData: {
          title: 'Nobody, Nothing and No One',
          explanation:
            'Nobody va no one odam yo‘qligini, nothing esa narsa yo‘qligini bildiradi. Bu shakllar bilan fe’l odatda darak shaklida keladi.',
          grammarRules: [
            {
              pattern:
                'Nobody va no one odam yo‘qligini, nothing esa narsa yo‘qligini bildiradi. Bu shakllar bilan fe’l odatda darak shaklida keladi.',
              meaning: 'Nobody, Nothing and No One',
              examples: [
                {
                  sentence: 'Nobody called.',
                  translation: 'Hech kim qo‘ng‘iroq qilmadi.',
                },
              ],
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-77-s2',
        type: 'practice',
        title: 'Mashq',
        estimatedMinutes: 5,
        practiceData: {
          instructions: 'To‘g‘ri javobni tanlang.',
          exercises: [
            {
              id: 'en-a1-u1-egi-77-e1',
              options: [
                'Hech kim qo‘ng‘iroq qilmadi.',
                'Kimdir xat qoldiribdi.',
                'Vaqtimiz ko‘p emas.',
              ],
              explanation:
                'Nobody va no one odam yo‘qligini, nothing esa narsa yo‘qligini bildiradi. Bu shakllar bilan fe’l odatda darak shaklida keladi.',
              prompt: 'Mos tarjimani tanlang: Nobody called.',
              type: 'multiple-choice',
              correctAnswer: 0,
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-77-s3',
        type: 'test',
        title: 'Dars testi',
        estimatedMinutes: 5,
        testData: {
          instructions: 'Bo‘sh joyni to‘ldiring.',
          passingScorePercentage: 80,
          questions: [
            {
              id: 'en-a1-u1-egi-77-q1',
              options: ['nobody', 'no one', 'nothing'],
              explanation:
                'Nobody va no one odam yo‘qligini, nothing esa narsa yo‘qligini bildiradi. Bu shakllar bilan fe’l odatda darak shaklida keladi.',
              question: 'I opened the box. There was ___ inside.',
              correctAnswerIndex: 2,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'en-a1-u1-egi-78',
    courseId: 'english-a1',
    unitId: 'en-a1-u1',
    unitTitle: 'Unit 1: Essentials & Greetings',
    language: 'en',
    level: 'A1',
    lessonNumber: 78,
    title: 'Someone, Anyone and Something',
    description:
      'Some- va any- bilan boshlanadigan shakllar noma’lum odam, narsa yoki joyni bildiradi.',
    estimatedDurationMinutes: 15,
    steps: [
      {
        id: 'en-a1-u1-egi-78-s1',
        type: 'learn',
        title: 'Qoida va misol',
        estimatedMinutes: 5,
        learnData: {
          title: 'Someone, Anyone and Something',
          explanation:
            'Some- va any- bilan boshlanadigan shakllar noma’lum odam, narsa yoki joyni bildiradi.',
          grammarRules: [
            {
              pattern:
                'Some- va any- bilan boshlanadigan shakllar noma’lum odam, narsa yoki joyni bildiradi.',
              meaning: 'Someone, Anyone and Something',
              examples: [
                {
                  sentence: 'Someone left a note.',
                  translation: 'Kimdir xat qoldiribdi.',
                },
              ],
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-78-s2',
        type: 'practice',
        title: 'Mashq',
        estimatedMinutes: 5,
        practiceData: {
          instructions: 'To‘g‘ri javobni tanlang.',
          exercises: [
            {
              id: 'en-a1-u1-egi-78-e1',
              options: [
                'Har bir o‘quvchida kitob bor.',
                'Kimdir xat qoldiribdi.',
                'Bir nechta savolim bor.',
              ],
              explanation:
                'Some- va any- bilan boshlanadigan shakllar noma’lum odam, narsa yoki joyni bildiradi.',
              prompt: 'Mos tarjimani tanlang: Someone left a note.',
              type: 'multiple-choice',
              correctAnswer: 1,
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-78-s3',
        type: 'test',
        title: 'Dars testi',
        estimatedMinutes: 5,
        testData: {
          instructions: 'Bo‘sh joyni to‘ldiring.',
          passingScorePercentage: 80,
          questions: [
            {
              id: 'en-a1-u1-egi-78-q1',
              options: ['anyone', 'no one', 'anything'],
              explanation:
                'Some- va any- bilan boshlanadigan shakllar noma’lum odam, narsa yoki joyni bildiradi.',
              question: 'I didn’t see ___ standing at the door. (Hech kimni ko‘rmadim.)',
              correctAnswerIndex: 0,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'en-a1-u1-egi-79',
    courseId: 'english-a1',
    unitId: 'en-a1-u1',
    unitTitle: 'Unit 1: Essentials & Greetings',
    language: 'en',
    level: 'A1',
    lessonNumber: 79,
    title: 'Every and All',
    description:
      'Every birlikdagi ot bilan guruhning har bir a’zosini, all ko‘plik yoki sanalmaydigan ot bilan butun guruh yoki miqdorni bildiradi.',
    estimatedDurationMinutes: 15,
    steps: [
      {
        id: 'en-a1-u1-egi-79-s1',
        type: 'learn',
        title: 'Qoida va misol',
        estimatedMinutes: 5,
        learnData: {
          title: 'Every and All',
          explanation:
            'Every birlikdagi ot bilan guruhning har bir a’zosini, all ko‘plik yoki sanalmaydigan ot bilan butun guruh yoki miqdorni bildiradi.',
          grammarRules: [
            {
              pattern:
                'Every birlikdagi ot bilan guruhning har bir a’zosini, all ko‘plik yoki sanalmaydigan ot bilan butun guruh yoki miqdorni bildiradi.',
              meaning: 'Every and All',
              examples: [
                {
                  sentence: 'Every student has a book.',
                  translation: 'Har bir o‘quvchida kitob bor.',
                },
              ],
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-79-s2',
        type: 'practice',
        title: 'Mashq',
        estimatedMinutes: 5,
        practiceData: {
          instructions: 'To‘g‘ri javobni tanlang.',
          exercises: [
            {
              id: 'en-a1-u1-egi-79-e1',
              options: [
                'Ularning aksariyati o‘tdi.',
                'Ular ikkita qizil sumka sotib oldi.',
                'Har bir o‘quvchida kitob bor.',
              ],
              explanation:
                'Every birlikdagi ot bilan guruhning har bir a’zosini, all ko‘plik yoki sanalmaydigan ot bilan butun guruh yoki miqdorni bildiradi.',
              prompt: 'Mos tarjimani tanlang: Every student has a book.',
              type: 'multiple-choice',
              correctAnswer: 2,
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-79-s3',
        type: 'test',
        title: 'Dars testi',
        estimatedMinutes: 5,
        testData: {
          instructions: 'Bo‘sh joyni to‘ldiring.',
          passingScorePercentage: 80,
          questions: [
            {
              id: 'en-a1-u1-egi-79-q1',
              options: ['All', 'Every', 'Both'],
              explanation:
                'Every birlikdagi ot bilan guruhning har bir a’zosini, all ko‘plik yoki sanalmaydigan ot bilan butun guruh yoki miqdorni bildiradi.',
              question: '___ room has a window.',
              correctAnswerIndex: 1,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'en-a1-u1-egi-80',
    courseId: 'english-a1',
    unitId: 'en-a1-u1',
    unitTitle: 'Unit 1: Essentials & Greetings',
    language: 'en',
    level: 'A1',
    lessonNumber: 80,
    title: 'All, Most, Some and None of',
    description:
      'Muayyan guruh haqida gapirganda most of the students yoki some of them kabi shakllar ishlatiladi.',
    estimatedDurationMinutes: 15,
    steps: [
      {
        id: 'en-a1-u1-egi-80-s1',
        type: 'learn',
        title: 'Qoida va misol',
        estimatedMinutes: 5,
        learnData: {
          title: 'All, Most, Some and None of',
          explanation:
            'Muayyan guruh haqida gapirganda most of the students yoki some of them kabi shakllar ishlatiladi.',
          grammarRules: [
            {
              pattern:
                'Muayyan guruh haqida gapirganda most of the students yoki some of them kabi shakllar ishlatiladi.',
              meaning: 'All, Most, Some and None of',
              examples: [
                {
                  sentence: 'Most of them passed.',
                  translation: 'Ularning aksariyati o‘tdi.',
                },
              ],
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-80-s2',
        type: 'practice',
        title: 'Mashq',
        estimatedMinutes: 5,
        practiceData: {
          instructions: 'To‘g‘ri javobni tanlang.',
          exercises: [
            {
              id: 'en-a1-u1-egi-80-e1',
              options: [
                'Ularning aksariyati o‘tdi.',
                'Ikkala javob ham to‘g‘ri.',
                'U aniq gapiradi.',
              ],
              explanation:
                'Muayyan guruh haqida gapirganda most of the students yoki some of them kabi shakllar ishlatiladi.',
              prompt: 'Mos tarjimani tanlang: Most of them passed.',
              type: 'multiple-choice',
              correctAnswer: 0,
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-80-s3',
        type: 'test',
        title: 'Dars testi',
        estimatedMinutes: 5,
        testData: {
          instructions: 'Bo‘sh joyni to‘ldiring.',
          passingScorePercentage: 80,
          questions: [
            {
              id: 'en-a1-u1-egi-80-q1',
              options: ['to', 'at', 'of'],
              explanation:
                'Muayyan guruh haqida gapirganda most of the students yoki some of them kabi shakllar ishlatiladi.',
              question: 'Most ___ my friends live here.',
              correctAnswerIndex: 2,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'en-a1-u1-egi-81',
    courseId: 'english-a1',
    unitId: 'en-a1-u1',
    unitTitle: 'Unit 1: Essentials & Greetings',
    language: 'en',
    level: 'A1',
    lessonNumber: 81,
    title: 'Both, Either and Neither',
    description:
      'Both ikki narsaning ikkalasini, either ikkitasidan birini, neither esa ikkalasidan hech birini bildiradi.',
    estimatedDurationMinutes: 15,
    steps: [
      {
        id: 'en-a1-u1-egi-81-s1',
        type: 'learn',
        title: 'Qoida va misol',
        estimatedMinutes: 5,
        learnData: {
          title: 'Both, Either and Neither',
          explanation:
            'Both ikki narsaning ikkalasini, either ikkitasidan birini, neither esa ikkalasidan hech birini bildiradi.',
          grammarRules: [
            {
              pattern:
                'Both ikki narsaning ikkalasini, either ikkitasidan birini, neither esa ikkalasidan hech birini bildiradi.',
              meaning: 'Both, Either and Neither',
              examples: [
                {
                  sentence: 'Both answers are correct.',
                  translation: 'Ikkala javob ham to‘g‘ri.',
                },
              ],
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-81-s2',
        type: 'practice',
        title: 'Mashq',
        estimatedMinutes: 5,
        practiceData: {
          instructions: 'To‘g‘ri javobni tanlang.',
          exercises: [
            {
              id: 'en-a1-u1-egi-81-e1',
              options: ['Vaqtimiz ko‘p emas.', 'Ikkala javob ham to‘g‘ri.', 'Bu yo‘l torroq.'],
              explanation:
                'Both ikki narsaning ikkalasini, either ikkitasidan birini, neither esa ikkalasidan hech birini bildiradi.',
              prompt: 'Mos tarjimani tanlang: Both answers are correct.',
              type: 'multiple-choice',
              correctAnswer: 1,
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-81-s3',
        type: 'test',
        title: 'Dars testi',
        estimatedMinutes: 5,
        testData: {
          instructions: 'Bo‘sh joyni to‘ldiring.',
          passingScorePercentage: 80,
          questions: [
            {
              id: 'en-a1-u1-egi-81-q1',
              options: ['Neither', 'Both', 'Either'],
              explanation:
                'Both ikki narsaning ikkalasini, either ikkitasidan birini, neither esa ikkalasidan hech birini bildiradi.',
              question: '___ of these two keys works. (Ikkalasi ham ishlamaydi.)',
              correctAnswerIndex: 0,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'en-a1-u1-egi-82',
    courseId: 'english-a1',
    unitId: 'en-a1-u1',
    unitTitle: 'Unit 1: Essentials & Greetings',
    language: 'en',
    level: 'A1',
    lessonNumber: 82,
    title: 'A Lot, Much and Many',
    description:
      'Many ko‘plikdagi sanaladigan ot bilan, much sanalmaydigan ot bilan, a lot of esa ikkala tur bilan ishlatiladi.',
    estimatedDurationMinutes: 15,
    steps: [
      {
        id: 'en-a1-u1-egi-82-s1',
        type: 'learn',
        title: 'Qoida va misol',
        estimatedMinutes: 5,
        learnData: {
          title: 'A Lot, Much and Many',
          explanation:
            'Many ko‘plikdagi sanaladigan ot bilan, much sanalmaydigan ot bilan, a lot of esa ikkala tur bilan ishlatiladi.',
          grammarRules: [
            {
              pattern:
                'Many ko‘plikdagi sanaladigan ot bilan, much sanalmaydigan ot bilan, a lot of esa ikkala tur bilan ishlatiladi.',
              meaning: 'A Lot, Much and Many',
              examples: [
                {
                  sentence: 'We don’t have much time.',
                  translation: 'Vaqtimiz ko‘p emas.',
                },
              ],
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-82-s2',
        type: 'practice',
        title: 'Mashq',
        estimatedMinutes: 5,
        practiceData: {
          instructions: 'To‘g‘ri javobni tanlang.',
          exercises: [
            {
              id: 'en-a1-u1-egi-82-e1',
              options: [
                'Bir nechta savolim bor.',
                'Ali Hasandan balandroq.',
                'Vaqtimiz ko‘p emas.',
              ],
              explanation:
                'Many ko‘plikdagi sanaladigan ot bilan, much sanalmaydigan ot bilan, a lot of esa ikkala tur bilan ishlatiladi.',
              prompt: 'Mos tarjimani tanlang: We don’t have much time.',
              type: 'multiple-choice',
              correctAnswer: 2,
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-82-s3',
        type: 'test',
        title: 'Dars testi',
        estimatedMinutes: 5,
        testData: {
          instructions: 'Bo‘sh joyni to‘ldiring.',
          passingScorePercentage: 80,
          questions: [
            {
              id: 'en-a1-u1-egi-82-q1',
              options: ['much', 'many', 'a lot'],
              explanation:
                'Many ko‘plikdagi sanaladigan ot bilan, much sanalmaydigan ot bilan, a lot of esa ikkala tur bilan ishlatiladi.',
              question: 'How ___ books did you buy?',
              correctAnswerIndex: 1,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'en-a1-u1-egi-83',
    courseId: 'english-a1',
    unitId: 'en-a1-u1',
    unitTitle: 'Unit 1: Essentials & Greetings',
    language: 'en',
    level: 'A1',
    lessonNumber: 83,
    title: 'A Little and A Few',
    description:
      'A little sanalmaydigan ot bilan, a few ko‘plikdagi sanaladigan ot bilan oz miqdorni bildiradi.',
    estimatedDurationMinutes: 15,
    steps: [
      {
        id: 'en-a1-u1-egi-83-s1',
        type: 'learn',
        title: 'Qoida va misol',
        estimatedMinutes: 5,
        learnData: {
          title: 'A Little and A Few',
          explanation:
            'A little sanalmaydigan ot bilan, a few ko‘plikdagi sanaladigan ot bilan oz miqdorni bildiradi.',
          grammarRules: [
            {
              pattern:
                'A little sanalmaydigan ot bilan, a few ko‘plikdagi sanaladigan ot bilan oz miqdorni bildiradi.',
              meaning: 'A Little and A Few',
              examples: [
                {
                  sentence: 'I have a few questions.',
                  translation: 'Bir nechta savolim bor.',
                },
              ],
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-83-s2',
        type: 'practice',
        title: 'Mashq',
        estimatedMinutes: 5,
        practiceData: {
          instructions: 'To‘g‘ri javobni tanlang.',
          exercises: [
            {
              id: 'en-a1-u1-egi-83-e1',
              options: [
                'Bir nechta savolim bor.',
                'Ular ikkita qizil sumka sotib oldi.',
                'Bu xona anavisi kabi iliq emas.',
              ],
              explanation:
                'A little sanalmaydigan ot bilan, a few ko‘plikdagi sanaladigan ot bilan oz miqdorni bildiradi.',
              prompt: 'Mos tarjimani tanlang: I have a few questions.',
              type: 'multiple-choice',
              correctAnswer: 0,
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-83-s3',
        type: 'test',
        title: 'Dars testi',
        estimatedMinutes: 5,
        testData: {
          instructions: 'Bo‘sh joyni to‘ldiring.',
          passingScorePercentage: 80,
          questions: [
            {
              id: 'en-a1-u1-egi-83-q1',
              options: ['apples', 'eggs', 'salt'],
              explanation:
                'A little sanalmaydigan ot bilan, a few ko‘plikdagi sanaladigan ot bilan oz miqdorni bildiradi.',
              question: 'Add a little ___.',
              correctAnswerIndex: 2,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'en-a1-u1-egi-84',
    courseId: 'english-a1',
    unitId: 'en-a1-u1',
    unitTitle: 'Unit 1: Essentials & Greetings',
    language: 'en',
    level: 'A1',
    lessonNumber: 84,
    title: 'Adjectives',
    description:
      'Sifat odatda otdan oldin yoki be dan keyin keladi. Ingliz tilida sifat ko‘plik qo‘shimchasini olmaydi.',
    estimatedDurationMinutes: 15,
    steps: [
      {
        id: 'en-a1-u1-egi-84-s1',
        type: 'learn',
        title: 'Qoida va misol',
        estimatedMinutes: 5,
        learnData: {
          title: 'Adjectives',
          explanation:
            'Sifat odatda otdan oldin yoki be dan keyin keladi. Ingliz tilida sifat ko‘plik qo‘shimchasini olmaydi.',
          grammarRules: [
            {
              pattern:
                'Sifat odatda otdan oldin yoki be dan keyin keladi. Ingliz tilida sifat ko‘plik qo‘shimchasini olmaydi.',
              meaning: 'Adjectives',
              examples: [
                {
                  sentence: 'They bought two red bags.',
                  translation: 'Ular ikkita qizil sumka sotib oldi.',
                },
              ],
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-84-s2',
        type: 'practice',
        title: 'Mashq',
        estimatedMinutes: 5,
        practiceData: {
          instructions: 'To‘g‘ri javobni tanlang.',
          exercises: [
            {
              id: 'en-a1-u1-egi-84-e1',
              options: [
                'U aniq gapiradi.',
                'Ular ikkita qizil sumka sotib oldi.',
                'Bu yerdagi eng baland bino shu.',
              ],
              explanation:
                'Sifat odatda otdan oldin yoki be dan keyin keladi. Ingliz tilida sifat ko‘plik qo‘shimchasini olmaydi.',
              prompt: 'Mos tarjimani tanlang: They bought two red bags.',
              type: 'multiple-choice',
              correctAnswer: 1,
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-84-s3',
        type: 'test',
        title: 'Dars testi',
        estimatedMinutes: 5,
        testData: {
          instructions: 'Bo‘sh joyni to‘ldiring.',
          passingScorePercentage: 80,
          questions: [
            {
              id: 'en-a1-u1-egi-84-q1',
              options: ['quiet', 'quietly', 'quiets'],
              explanation:
                'Sifat odatda otdan oldin yoki be dan keyin keladi. Ingliz tilida sifat ko‘plik qo‘shimchasini olmaydi.',
              question: 'The room is ___.',
              correctAnswerIndex: 0,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'en-a1-u1-egi-85',
    courseId: 'english-a1',
    unitId: 'en-a1-u1',
    unitTitle: 'Unit 1: Essentials & Greetings',
    language: 'en',
    level: 'A1',
    lessonNumber: 85,
    title: 'Adverbs',
    description:
      'Ravish ish qanday bajarilganini bildirishi mumkin. Ko‘p ravishlar -ly bilan yasaladi, good ning ravish shakli well.',
    estimatedDurationMinutes: 15,
    steps: [
      {
        id: 'en-a1-u1-egi-85-s1',
        type: 'learn',
        title: 'Qoida va misol',
        estimatedMinutes: 5,
        learnData: {
          title: 'Adverbs',
          explanation:
            'Ravish ish qanday bajarilganini bildirishi mumkin. Ko‘p ravishlar -ly bilan yasaladi, good ning ravish shakli well.',
          grammarRules: [
            {
              pattern:
                'Ravish ish qanday bajarilganini bildirishi mumkin. Ko‘p ravishlar -ly bilan yasaladi, good ning ravish shakli well.',
              meaning: 'Adverbs',
              examples: [
                {
                  sentence: 'She speaks clearly.',
                  translation: 'U aniq gapiradi.',
                },
              ],
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-85-s2',
        type: 'practice',
        title: 'Mashq',
        estimatedMinutes: 5,
        practiceData: {
          instructions: 'To‘g‘ri javobni tanlang.',
          exercises: [
            {
              id: 'en-a1-u1-egi-85-e1',
              options: ['Bu yo‘l torroq.', 'Oziq-ovqatimiz yetarli.', 'U aniq gapiradi.'],
              explanation:
                'Ravish ish qanday bajarilganini bildirishi mumkin. Ko‘p ravishlar -ly bilan yasaladi, good ning ravish shakli well.',
              prompt: 'Mos tarjimani tanlang: She speaks clearly.',
              type: 'multiple-choice',
              correctAnswer: 2,
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-85-s3',
        type: 'test',
        title: 'Dars testi',
        estimatedMinutes: 5,
        testData: {
          instructions: 'Bo‘sh joyni to‘ldiring.',
          passingScorePercentage: 80,
          questions: [
            {
              id: 'en-a1-u1-egi-85-q1',
              options: ['good', 'well', 'bestly'],
              explanation:
                'Ravish ish qanday bajarilganini bildirishi mumkin. Ko‘p ravishlar -ly bilan yasaladi, good ning ravish shakli well.',
              question: 'He plays the piano ___.',
              correctAnswerIndex: 1,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'en-a1-u1-egi-86',
    courseId: 'english-a1',
    unitId: 'en-a1-u1',
    unitTitle: 'Unit 1: Essentials & Greetings',
    language: 'en',
    level: 'A1',
    lessonNumber: 86,
    title: 'Comparatives',
    description: 'Qisqa sifatlarga ko‘pincha -er qo‘shiladi, uzun sifatlarda more ishlatiladi.',
    estimatedDurationMinutes: 15,
    steps: [
      {
        id: 'en-a1-u1-egi-86-s1',
        type: 'learn',
        title: 'Qoida va misol',
        estimatedMinutes: 5,
        learnData: {
          title: 'Comparatives',
          explanation:
            'Qisqa sifatlarga ko‘pincha -er qo‘shiladi, uzun sifatlarda more ishlatiladi.',
          grammarRules: [
            {
              pattern:
                'Qisqa sifatlarga ko‘pincha -er qo‘shiladi, uzun sifatlarda more ishlatiladi.',
              meaning: 'Comparatives',
              examples: [
                {
                  sentence: 'This road is narrower.',
                  translation: 'Bu yo‘l torroq.',
                },
              ],
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-86-s2',
        type: 'practice',
        title: 'Mashq',
        estimatedMinutes: 5,
        practiceData: {
          instructions: 'To‘g‘ri javobni tanlang.',
          exercises: [
            {
              id: 'en-a1-u1-egi-86-e1',
              options: [
                'Bu yo‘l torroq.',
                'Ali Hasandan balandroq.',
                'Sumka ko‘tarib yurishga juda og‘ir.',
              ],
              explanation:
                'Qisqa sifatlarga ko‘pincha -er qo‘shiladi, uzun sifatlarda more ishlatiladi.',
              prompt: 'Mos tarjimani tanlang: This road is narrower.',
              type: 'multiple-choice',
              correctAnswer: 0,
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-86-s3',
        type: 'test',
        title: 'Dars testi',
        estimatedMinutes: 5,
        testData: {
          instructions: 'Bo‘sh joyni to‘ldiring.',
          passingScorePercentage: 80,
          questions: [
            {
              id: 'en-a1-u1-egi-86-q1',
              options: ['most', 'many', 'more'],
              explanation:
                'Qisqa sifatlarga ko‘pincha -er qo‘shiladi, uzun sifatlarda more ishlatiladi.',
              question: 'This bag is ___ expensive.',
              correctAnswerIndex: 2,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'en-a1-u1-egi-87',
    courseId: 'english-a1',
    unitId: 'en-a1-u1',
    unitTitle: 'Unit 1: Essentials & Greetings',
    language: 'en',
    level: 'A1',
    lessonNumber: 87,
    title: 'Comparatives with Than',
    description: 'Ikki narsani solishtirganda qiyosiy sifatdan keyin than ishlatiladi.',
    estimatedDurationMinutes: 15,
    steps: [
      {
        id: 'en-a1-u1-egi-87-s1',
        type: 'learn',
        title: 'Qoida va misol',
        estimatedMinutes: 5,
        learnData: {
          title: 'Comparatives with Than',
          explanation: 'Ikki narsani solishtirganda qiyosiy sifatdan keyin than ishlatiladi.',
          grammarRules: [
            {
              pattern: 'Ikki narsani solishtirganda qiyosiy sifatdan keyin than ishlatiladi.',
              meaning: 'Comparatives with Than',
              examples: [
                {
                  sentence: 'Ali is taller than Hasan.',
                  translation: 'Ali Hasandan balandroq.',
                },
              ],
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-87-s2',
        type: 'practice',
        title: 'Mashq',
        estimatedMinutes: 5,
        practiceData: {
          instructions: 'To‘g‘ri javobni tanlang.',
          exercises: [
            {
              id: 'en-a1-u1-egi-87-e1',
              options: [
                'Bu xona anavisi kabi iliq emas.',
                'Ali Hasandan balandroq.',
                'U inglizchada yaxshi gapiradi.',
              ],
              explanation: 'Ikki narsani solishtirganda qiyosiy sifatdan keyin than ishlatiladi.',
              prompt: 'Mos tarjimani tanlang: Ali is taller than Hasan.',
              type: 'multiple-choice',
              correctAnswer: 1,
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-87-s3',
        type: 'test',
        title: 'Dars testi',
        estimatedMinutes: 5,
        testData: {
          instructions: 'Bo‘sh joyni to‘ldiring.',
          passingScorePercentage: 80,
          questions: [
            {
              id: 'en-a1-u1-egi-87-q1',
              options: ['than', 'as', 'that'],
              explanation: 'Ikki narsani solishtirganda qiyosiy sifatdan keyin than ishlatiladi.',
              question: 'The train is faster ___ the bus.',
              correctAnswerIndex: 0,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'en-a1-u1-egi-88',
    courseId: 'english-a1',
    unitId: 'en-a1-u1',
    unitTitle: 'Unit 1: Essentials & Greetings',
    language: 'en',
    level: 'A1',
    lessonNumber: 88,
    title: 'Not As … As',
    description:
      'Not as + sifat + as birinchi narsa shu sifat bo‘yicha ikkinchisiga teng emasligini bildiradi.',
    estimatedDurationMinutes: 15,
    steps: [
      {
        id: 'en-a1-u1-egi-88-s1',
        type: 'learn',
        title: 'Qoida va misol',
        estimatedMinutes: 5,
        learnData: {
          title: 'Not As … As',
          explanation:
            'Not as + sifat + as birinchi narsa shu sifat bo‘yicha ikkinchisiga teng emasligini bildiradi.',
          grammarRules: [
            {
              pattern:
                'Not as + sifat + as birinchi narsa shu sifat bo‘yicha ikkinchisiga teng emasligini bildiradi.',
              meaning: 'Not As … As',
              examples: [
                {
                  sentence: 'This room isn’t as warm as that one.',
                  translation: 'Bu xona anavisi kabi iliq emas.',
                },
              ],
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-88-s2',
        type: 'practice',
        title: 'Mashq',
        estimatedMinutes: 5,
        practiceData: {
          instructions: 'To‘g‘ri javobni tanlang.',
          exercises: [
            {
              id: 'en-a1-u1-egi-88-e1',
              options: [
                'Bu yerdagi eng baland bino shu.',
                'U odatda erta keladi.',
                'Bu xona anavisi kabi iliq emas.',
              ],
              explanation:
                'Not as + sifat + as birinchi narsa shu sifat bo‘yicha ikkinchisiga teng emasligini bildiradi.',
              prompt: 'Mos tarjimani tanlang: This room isn’t as warm as that one.',
              type: 'multiple-choice',
              correctAnswer: 2,
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-88-s3',
        type: 'test',
        title: 'Dars testi',
        estimatedMinutes: 5,
        testData: {
          instructions: 'Bo‘sh joyni to‘ldiring.',
          passingScorePercentage: 80,
          questions: [
            {
              id: 'en-a1-u1-egi-88-q1',
              options: ['than', 'as', 'that'],
              explanation:
                'Not as + sifat + as birinchi narsa shu sifat bo‘yicha ikkinchisiga teng emasligini bildiradi.',
              question: 'The bus isn’t as fast ___ the train.',
              correctAnswerIndex: 1,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'en-a1-u1-egi-89',
    courseId: 'english-a1',
    unitId: 'en-a1-u1',
    unitTitle: 'Unit 1: Essentials & Greetings',
    language: 'en',
    level: 'A1',
    lessonNumber: 89,
    title: 'Superlatives',
    description: 'Guruh ichida eng yuqori darajani the + -est yoki the most bilan ifodalaymiz.',
    estimatedDurationMinutes: 15,
    steps: [
      {
        id: 'en-a1-u1-egi-89-s1',
        type: 'learn',
        title: 'Qoida va misol',
        estimatedMinutes: 5,
        learnData: {
          title: 'Superlatives',
          explanation:
            'Guruh ichida eng yuqori darajani the + -est yoki the most bilan ifodalaymiz.',
          grammarRules: [
            {
              pattern:
                'Guruh ichida eng yuqori darajani the + -est yoki the most bilan ifodalaymiz.',
              meaning: 'Superlatives',
              examples: [
                {
                  sentence: 'This is the tallest building here.',
                  translation: 'Bu yerdagi eng baland bino shu.',
                },
              ],
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-89-s2',
        type: 'practice',
        title: 'Mashq',
        estimatedMinutes: 5,
        practiceData: {
          instructions: 'To‘g‘ri javobni tanlang.',
          exercises: [
            {
              id: 'en-a1-u1-egi-89-e1',
              options: [
                'Bu yerdagi eng baland bino shu.',
                'Oziq-ovqatimiz yetarli.',
                'Hali ham kutyapsizmi?',
              ],
              explanation:
                'Guruh ichida eng yuqori darajani the + -est yoki the most bilan ifodalaymiz.',
              prompt: 'Mos tarjimani tanlang: This is the tallest building here.',
              type: 'multiple-choice',
              correctAnswer: 0,
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-89-s3',
        type: 'test',
        title: 'Dars testi',
        estimatedMinutes: 5,
        testData: {
          instructions: 'Bo‘sh joyni to‘ldiring.',
          passingScorePercentage: 80,
          questions: [
            {
              id: 'en-a1-u1-egi-89-q1',
              options: ['many more', 'much', 'most'],
              explanation:
                'Guruh ichida eng yuqori darajani the + -est yoki the most bilan ifodalaymiz.',
              question: 'It’s the ___ interesting book in the set.',
              correctAnswerIndex: 2,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'en-a1-u1-egi-90',
    courseId: 'english-a1',
    unitId: 'en-a1-u1',
    unitTitle: 'Unit 1: Essentials & Greetings',
    language: 'en',
    level: 'A1',
    lessonNumber: 90,
    title: 'Enough',
    description: 'Enough otdan oldin, sifat yoki ravishdan keyin keladi.',
    estimatedDurationMinutes: 15,
    steps: [
      {
        id: 'en-a1-u1-egi-90-s1',
        type: 'learn',
        title: 'Qoida va misol',
        estimatedMinutes: 5,
        learnData: {
          title: 'Enough',
          explanation: 'Enough otdan oldin, sifat yoki ravishdan keyin keladi.',
          grammarRules: [
            {
              pattern: 'Enough otdan oldin, sifat yoki ravishdan keyin keladi.',
              meaning: 'Enough',
              examples: [
                {
                  sentence: 'We have enough food.',
                  translation: 'Oziq-ovqatimiz yetarli.',
                },
              ],
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-90-s2',
        type: 'practice',
        title: 'Mashq',
        estimatedMinutes: 5,
        practiceData: {
          instructions: 'To‘g‘ri javobni tanlang.',
          exercises: [
            {
              id: 'en-a1-u1-egi-90-e1',
              options: [
                'Sumka ko‘tarib yurishga juda og‘ir.',
                'Oziq-ovqatimiz yetarli.',
                'Kalitni Aliga bering.',
              ],
              explanation: 'Enough otdan oldin, sifat yoki ravishdan keyin keladi.',
              prompt: 'Mos tarjimani tanlang: We have enough food.',
              type: 'multiple-choice',
              correctAnswer: 1,
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-90-s3',
        type: 'test',
        title: 'Dars testi',
        estimatedMinutes: 5,
        testData: {
          instructions: 'Bo‘sh joyni to‘ldiring.',
          passingScorePercentage: 80,
          questions: [
            {
              id: 'en-a1-u1-egi-90-q1',
              options: ['enough', 'too', 'many'],
              explanation: 'Enough otdan oldin, sifat yoki ravishdan keyin keladi.',
              question: 'The room is warm ___.',
              correctAnswerIndex: 0,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'en-a1-u1-egi-91',
    courseId: 'english-a1',
    unitId: 'en-a1-u1',
    unitTitle: 'Unit 1: Essentials & Greetings',
    language: 'en',
    level: 'A1',
    lessonNumber: 91,
    title: 'Too',
    description: 'Too + sifat yoki ravish miqdor kerakligidan ortiq ekanini bildiradi.',
    estimatedDurationMinutes: 15,
    steps: [
      {
        id: 'en-a1-u1-egi-91-s1',
        type: 'learn',
        title: 'Qoida va misol',
        estimatedMinutes: 5,
        learnData: {
          title: 'Too',
          explanation: 'Too + sifat yoki ravish miqdor kerakligidan ortiq ekanini bildiradi.',
          grammarRules: [
            {
              pattern: 'Too + sifat yoki ravish miqdor kerakligidan ortiq ekanini bildiradi.',
              meaning: 'Too',
              examples: [
                {
                  sentence: 'The bag is too heavy to carry.',
                  translation: 'Sumka ko‘tarib yurishga juda og‘ir.',
                },
              ],
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-91-s2',
        type: 'practice',
        title: 'Mashq',
        estimatedMinutes: 5,
        practiceData: {
          instructions: 'To‘g‘ri javobni tanlang.',
          exercises: [
            {
              id: 'en-a1-u1-egi-91-e1',
              options: [
                'U inglizchada yaxshi gapiradi.',
                'Dushanba kuni uchrashdik.',
                'Sumka ko‘tarib yurishga juda og‘ir.',
              ],
              explanation: 'Too + sifat yoki ravish miqdor kerakligidan ortiq ekanini bildiradi.',
              prompt: 'Mos tarjimani tanlang: The bag is too heavy to carry.',
              type: 'multiple-choice',
              correctAnswer: 2,
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-91-s3',
        type: 'test',
        title: 'Dars testi',
        estimatedMinutes: 5,
        testData: {
          instructions: 'Bo‘sh joyni to‘ldiring.',
          passingScorePercentage: 80,
          questions: [
            {
              id: 'en-a1-u1-egi-91-q1',
              options: ['many', 'too', 'much'],
              explanation: 'Too + sifat yoki ravish miqdor kerakligidan ortiq ekanini bildiradi.',
              question: 'It’s ___ late to call now.',
              correctAnswerIndex: 1,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'en-a1-u1-egi-92',
    courseId: 'english-a1',
    unitId: 'en-a1-u1',
    unitTitle: 'Unit 1: Essentials & Greetings',
    language: 'en',
    level: 'A1',
    lessonNumber: 92,
    title: 'Basic Word Order',
    description:
      'Darak gapda ega, fe’l va to‘ldiruvchi shu tartibda keladi. Tarz ravishi odatda to‘ldiruvchidan keyin keladi.',
    estimatedDurationMinutes: 15,
    steps: [
      {
        id: 'en-a1-u1-egi-92-s1',
        type: 'learn',
        title: 'Qoida va misol',
        estimatedMinutes: 5,
        learnData: {
          title: 'Basic Word Order',
          explanation:
            'Darak gapda ega, fe’l va to‘ldiruvchi shu tartibda keladi. Tarz ravishi odatda to‘ldiruvchidan keyin keladi.',
          grammarRules: [
            {
              pattern:
                'Darak gapda ega, fe’l va to‘ldiruvchi shu tartibda keladi. Tarz ravishi odatda to‘ldiruvchidan keyin keladi.',
              meaning: 'Basic Word Order',
              examples: [
                {
                  sentence: 'She speaks English well.',
                  translation: 'U inglizchada yaxshi gapiradi.',
                },
              ],
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-92-s2',
        type: 'practice',
        title: 'Mashq',
        estimatedMinutes: 5,
        practiceData: {
          instructions: 'To‘g‘ri javobni tanlang.',
          exercises: [
            {
              id: 'en-a1-u1-egi-92-e1',
              options: [
                'U inglizchada yaxshi gapiradi.',
                'U odatda erta keladi.',
                'To‘qqizdan beshgacha ishladim.',
              ],
              explanation:
                'Darak gapda ega, fe’l va to‘ldiruvchi shu tartibda keladi. Tarz ravishi odatda to‘ldiruvchidan keyin keladi.',
              prompt: 'Mos tarjimani tanlang: She speaks English well.',
              type: 'multiple-choice',
              correctAnswer: 0,
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-92-s3',
        type: 'test',
        title: 'Dars testi',
        estimatedMinutes: 5,
        testData: {
          instructions: 'Bo‘sh joyni to‘ldiring.',
          passingScorePercentage: 80,
          questions: [
            {
              id: 'en-a1-u1-egi-92-q1',
              options: [
                'He reads slowly books.',
                'Reads he books slowly.',
                'He reads books slowly.',
              ],
              explanation:
                'Darak gapda ega, fe’l va to‘ldiruvchi shu tartibda keladi. Tarz ravishi odatda to‘ldiruvchidan keyin keladi.',
              question: 'Choose the natural order.',
              correctAnswerIndex: 2,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'en-a1-u1-egi-93',
    courseId: 'english-a1',
    unitId: 'en-a1-u1',
    unitTitle: 'Unit 1: Essentials & Greetings',
    language: 'en',
    level: 'A1',
    lessonNumber: 93,
    title: 'Frequency Adverbs',
    description: 'Always, usually va often asosiy fe’ldan oldin, be dan keyin keladi.',
    estimatedDurationMinutes: 15,
    steps: [
      {
        id: 'en-a1-u1-egi-93-s1',
        type: 'learn',
        title: 'Qoida va misol',
        estimatedMinutes: 5,
        learnData: {
          title: 'Frequency Adverbs',
          explanation: 'Always, usually va often asosiy fe’ldan oldin, be dan keyin keladi.',
          grammarRules: [
            {
              pattern: 'Always, usually va often asosiy fe’ldan oldin, be dan keyin keladi.',
              meaning: 'Frequency Adverbs',
              examples: [
                {
                  sentence: 'She is usually early.',
                  translation: 'U odatda erta keladi.',
                },
              ],
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-93-s2',
        type: 'practice',
        title: 'Mashq',
        estimatedMinutes: 5,
        practiceData: {
          instructions: 'To‘g‘ri javobni tanlang.',
          exercises: [
            {
              id: 'en-a1-u1-egi-93-e1',
              options: [
                'Hali ham kutyapsizmi?',
                'U odatda erta keladi.',
                'Film davomida gaplashmang.',
              ],
              explanation: 'Always, usually va often asosiy fe’ldan oldin, be dan keyin keladi.',
              prompt: 'Mos tarjimani tanlang: She is usually early.',
              type: 'multiple-choice',
              correctAnswer: 1,
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-93-s3',
        type: 'test',
        title: 'Dars testi',
        estimatedMinutes: 5,
        testData: {
          instructions: 'Bo‘sh joyni to‘ldiring.',
          passingScorePercentage: 80,
          questions: [
            {
              id: 'en-a1-u1-egi-93-q1',
              options: ['I often walk to work.', 'I walk often to work.', 'Often I to work walk.'],
              explanation: 'Always, usually va often asosiy fe’ldan oldin, be dan keyin keladi.',
              question: 'Choose the natural order.',
              correctAnswerIndex: 0,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'en-a1-u1-egi-94',
    courseId: 'english-a1',
    unitId: 'en-a1-u1',
    unitTitle: 'Unit 1: Essentials & Greetings',
    language: 'en',
    level: 'A1',
    lessonNumber: 94,
    title: 'Still, Yet and Already',
    description:
      'Still davom etayotgan holatni, already ish allaqachon bajarilganini, yet kutilayotgan ishni bildiradi.',
    estimatedDurationMinutes: 15,
    steps: [
      {
        id: 'en-a1-u1-egi-94-s1',
        type: 'learn',
        title: 'Qoida va misol',
        estimatedMinutes: 5,
        learnData: {
          title: 'Still, Yet and Already',
          explanation:
            'Still davom etayotgan holatni, already ish allaqachon bajarilganini, yet kutilayotgan ishni bildiradi.',
          grammarRules: [
            {
              pattern:
                'Still davom etayotgan holatni, already ish allaqachon bajarilganini, yet kutilayotgan ishni bildiradi.',
              meaning: 'Still, Yet and Already',
              examples: [
                {
                  sentence: 'Are you still waiting?',
                  translation: 'Hali ham kutyapsizmi?',
                },
              ],
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-94-s2',
        type: 'practice',
        title: 'Mashq',
        estimatedMinutes: 5,
        practiceData: {
          instructions: 'To‘g‘ri javobni tanlang.',
          exercises: [
            {
              id: 'en-a1-u1-egi-94-e1',
              options: ['Kalitni Aliga bering.', 'Kalitlar stol ustida.', 'Hali ham kutyapsizmi?'],
              explanation:
                'Still davom etayotgan holatni, already ish allaqachon bajarilganini, yet kutilayotgan ishni bildiradi.',
              prompt: 'Mos tarjimani tanlang: Are you still waiting?',
              type: 'multiple-choice',
              correctAnswer: 2,
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-94-s3',
        type: 'test',
        title: 'Dars testi',
        estimatedMinutes: 5,
        testData: {
          instructions: 'Bo‘sh joyni to‘ldiring.',
          passingScorePercentage: 80,
          questions: [
            {
              id: 'en-a1-u1-egi-94-q1',
              options: ['already', 'yet', 'still'],
              explanation:
                'Still davom etayotgan holatni, already ish allaqachon bajarilganini, yet kutilayotgan ishni bildiradi.',
              question: 'She hasn’t called ___.',
              correctAnswerIndex: 1,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'en-a1-u1-egi-95',
    courseId: 'english-a1',
    unitId: 'en-a1-u1',
    unitTitle: 'Unit 1: Essentials & Greetings',
    language: 'en',
    level: 'A1',
    lessonNumber: 95,
    title: 'Two Objects',
    description:
      'Give kabi fe’llarda odam keyin narsa kelishi mumkin. Narsa birinchi kelsa, odam odatda to bilan beriladi.',
    estimatedDurationMinutes: 15,
    steps: [
      {
        id: 'en-a1-u1-egi-95-s1',
        type: 'learn',
        title: 'Qoida va misol',
        estimatedMinutes: 5,
        learnData: {
          title: 'Two Objects',
          explanation:
            'Give kabi fe’llarda odam keyin narsa kelishi mumkin. Narsa birinchi kelsa, odam odatda to bilan beriladi.',
          grammarRules: [
            {
              pattern:
                'Give kabi fe’llarda odam keyin narsa kelishi mumkin. Narsa birinchi kelsa, odam odatda to bilan beriladi.',
              meaning: 'Two Objects',
              examples: [
                {
                  sentence: 'Give the key to Ali.',
                  translation: 'Kalitni Aliga bering.',
                },
              ],
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-95-s2',
        type: 'practice',
        title: 'Mashq',
        estimatedMinutes: 5,
        practiceData: {
          instructions: 'To‘g‘ri javobni tanlang.',
          exercises: [
            {
              id: 'en-a1-u1-egi-95-e1',
              options: ['Kalitni Aliga bering.', 'Dushanba kuni uchrashdik.', 'U ishda.'],
              explanation:
                'Give kabi fe’llarda odam keyin narsa kelishi mumkin. Narsa birinchi kelsa, odam odatda to bilan beriladi.',
              prompt: 'Mos tarjimani tanlang: Give the key to Ali.',
              type: 'multiple-choice',
              correctAnswer: 0,
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-95-s3',
        type: 'test',
        title: 'Dars testi',
        estimatedMinutes: 5,
        testData: {
          instructions: 'Bo‘sh joyni to‘ldiring.',
          passingScorePercentage: 80,
          questions: [
            {
              id: 'en-a1-u1-egi-95-q1',
              options: ['at', 'from', 'to'],
              explanation:
                'Give kabi fe’llarda odam keyin narsa kelishi mumkin. Narsa birinchi kelsa, odam odatda to bilan beriladi.',
              question: 'Please give it ___ me.',
              correctAnswerIndex: 2,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'en-a1-u1-egi-96',
    courseId: 'english-a1',
    unitId: 'en-a1-u1',
    unitTitle: 'Unit 1: Essentials & Greetings',
    language: 'en',
    level: 'A1',
    lessonNumber: 96,
    title: 'At, On and In for Time',
    description: 'Soat bilan at, kun va sana bilan on, oy va yil bilan in ishlatiladi.',
    estimatedDurationMinutes: 15,
    steps: [
      {
        id: 'en-a1-u1-egi-96-s1',
        type: 'learn',
        title: 'Qoida va misol',
        estimatedMinutes: 5,
        learnData: {
          title: 'At, On and In for Time',
          explanation: 'Soat bilan at, kun va sana bilan on, oy va yil bilan in ishlatiladi.',
          grammarRules: [
            {
              pattern: 'Soat bilan at, kun va sana bilan on, oy va yil bilan in ishlatiladi.',
              meaning: 'At, On and In for Time',
              examples: [
                {
                  sentence: 'We met on Monday.',
                  translation: 'Dushanba kuni uchrashdik.',
                },
              ],
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-96-s2',
        type: 'practice',
        title: 'Mashq',
        estimatedMinutes: 5,
        practiceData: {
          instructions: 'To‘g‘ri javobni tanlang.',
          exercises: [
            {
              id: 'en-a1-u1-egi-96-e1',
              options: [
                'To‘qqizdan beshgacha ishladim.',
                'Dushanba kuni uchrashdik.',
                'Vokzalga yetib keldik.',
              ],
              explanation: 'Soat bilan at, kun va sana bilan on, oy va yil bilan in ishlatiladi.',
              prompt: 'Mos tarjimani tanlang: We met on Monday.',
              type: 'multiple-choice',
              correctAnswer: 1,
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-96-s3',
        type: 'test',
        title: 'Dars testi',
        estimatedMinutes: 5,
        testData: {
          instructions: 'Bo‘sh joyni to‘ldiring.',
          passingScorePercentage: 80,
          questions: [
            {
              id: 'en-a1-u1-egi-96-q1',
              options: ['at', 'on', 'in'],
              explanation: 'Soat bilan at, kun va sana bilan on, oy va yil bilan in ishlatiladi.',
              question: 'The lesson starts ___ nine.',
              correctAnswerIndex: 0,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'en-a1-u1-egi-97',
    courseId: 'english-a1',
    unitId: 'en-a1-u1',
    unitTitle: 'Unit 1: Essentials & Greetings',
    language: 'en',
    level: 'A1',
    lessonNumber: 97,
    title: 'From, To, Until, Since and For',
    description:
      'From va to oraliq chegaralarini, until oxirgi nuqtani, since boshlanishni, for davomiylikni bildiradi.',
    estimatedDurationMinutes: 15,
    steps: [
      {
        id: 'en-a1-u1-egi-97-s1',
        type: 'learn',
        title: 'Qoida va misol',
        estimatedMinutes: 5,
        learnData: {
          title: 'From, To, Until, Since and For',
          explanation:
            'From va to oraliq chegaralarini, until oxirgi nuqtani, since boshlanishni, for davomiylikni bildiradi.',
          grammarRules: [
            {
              pattern:
                'From va to oraliq chegaralarini, until oxirgi nuqtani, since boshlanishni, for davomiylikni bildiradi.',
              meaning: 'From, To, Until, Since and For',
              examples: [
                {
                  sentence: 'I worked from nine to five.',
                  translation: 'To‘qqizdan beshgacha ishladim.',
                },
              ],
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-97-s2',
        type: 'practice',
        title: 'Mashq',
        estimatedMinutes: 5,
        practiceData: {
          instructions: 'To‘g‘ri javobni tanlang.',
          exercises: [
            {
              id: 'en-a1-u1-egi-97-e1',
              options: [
                'Film davomida gaplashmang.',
                'Bank maktab ro‘parasida.',
                'To‘qqizdan beshgacha ishladim.',
              ],
              explanation:
                'From va to oraliq chegaralarini, until oxirgi nuqtani, since boshlanishni, for davomiylikni bildiradi.',
              prompt: 'Mos tarjimani tanlang: I worked from nine to five.',
              type: 'multiple-choice',
              correctAnswer: 2,
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-97-s3',
        type: 'test',
        title: 'Dars testi',
        estimatedMinutes: 5,
        testData: {
          instructions: 'Bo‘sh joyni to‘ldiring.',
          passingScorePercentage: 80,
          questions: [
            {
              id: 'en-a1-u1-egi-97-q1',
              options: ['since', 'until', 'for'],
              explanation:
                'From va to oraliq chegaralarini, until oxirgi nuqtani, since boshlanishni, for davomiylikni bildiradi.',
              question: 'Wait here ___ noon.',
              correctAnswerIndex: 1,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'en-a1-u1-egi-98',
    courseId: 'english-a1',
    unitId: 'en-a1-u1',
    unitTitle: 'Unit 1: Essentials & Greetings',
    language: 'en',
    level: 'A1',
    lessonNumber: 98,
    title: 'Before, After, During and While',
    description:
      'During otdan oldin, while ega va fe’l qatnashgan gapdan oldin keladi. Before va after vaqt tartibini bildiradi.',
    estimatedDurationMinutes: 15,
    steps: [
      {
        id: 'en-a1-u1-egi-98-s1',
        type: 'learn',
        title: 'Qoida va misol',
        estimatedMinutes: 5,
        learnData: {
          title: 'Before, After, During and While',
          explanation:
            'During otdan oldin, while ega va fe’l qatnashgan gapdan oldin keladi. Before va after vaqt tartibini bildiradi.',
          grammarRules: [
            {
              pattern:
                'During otdan oldin, while ega va fe’l qatnashgan gapdan oldin keladi. Before va after vaqt tartibini bildiradi.',
              meaning: 'Before, After, During and While',
              examples: [
                {
                  sentence: 'Don’t talk during the film.',
                  translation: 'Film davomida gaplashmang.',
                },
              ],
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-98-s2',
        type: 'practice',
        title: 'Mashq',
        estimatedMinutes: 5,
        practiceData: {
          instructions: 'To‘g‘ri javobni tanlang.',
          exercises: [
            {
              id: 'en-a1-u1-egi-98-e1',
              options: [
                'Film davomida gaplashmang.',
                'Kalitlar stol ustida.',
                'Biz tunnel ichidan o‘tdik.',
              ],
              explanation:
                'During otdan oldin, while ega va fe’l qatnashgan gapdan oldin keladi. Before va after vaqt tartibini bildiradi.',
              prompt: 'Mos tarjimani tanlang: Don’t talk during the film.',
              type: 'multiple-choice',
              correctAnswer: 0,
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-98-s3',
        type: 'test',
        title: 'Dars testi',
        estimatedMinutes: 5,
        testData: {
          instructions: 'Bo‘sh joyni to‘ldiring.',
          passingScorePercentage: 80,
          questions: [
            {
              id: 'en-a1-u1-egi-98-q1',
              options: ['during', 'since', 'while'],
              explanation:
                'During otdan oldin, while ega va fe’l qatnashgan gapdan oldin keladi. Before va after vaqt tartibini bildiradi.',
              question: 'I listened ___ she was speaking.',
              correctAnswerIndex: 2,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'en-a1-u1-egi-99',
    courseId: 'english-a1',
    unitId: 'en-a1-u1',
    unitTitle: 'Unit 1: Essentials & Greetings',
    language: 'en',
    level: 'A1',
    lessonNumber: 99,
    title: 'In, At and On for Position',
    description: 'In ichkarini, on sirtni, at esa joyni nuqta sifatida bildirishi mumkin.',
    estimatedDurationMinutes: 15,
    steps: [
      {
        id: 'en-a1-u1-egi-99-s1',
        type: 'learn',
        title: 'Qoida va misol',
        estimatedMinutes: 5,
        learnData: {
          title: 'In, At and On for Position',
          explanation: 'In ichkarini, on sirtni, at esa joyni nuqta sifatida bildirishi mumkin.',
          grammarRules: [
            {
              pattern: 'In ichkarini, on sirtni, at esa joyni nuqta sifatida bildirishi mumkin.',
              meaning: 'In, At and On for Position',
              examples: [
                {
                  sentence: 'The keys are on the table.',
                  translation: 'Kalitlar stol ustida.',
                },
              ],
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-99-s2',
        type: 'practice',
        title: 'Mashq',
        estimatedMinutes: 5,
        practiceData: {
          instructions: 'To‘g‘ri javobni tanlang.',
          exercises: [
            {
              id: 'en-a1-u1-egi-99-e1',
              options: ['U ishda.', 'Kalitlar stol ustida.', 'Safar haqida gaplashdik.'],
              explanation:
                'In ichkarini, on sirtni, at esa joyni nuqta sifatida bildirishi mumkin.',
              prompt: 'Mos tarjimani tanlang: The keys are on the table.',
              type: 'multiple-choice',
              correctAnswer: 1,
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-99-s3',
        type: 'test',
        title: 'Dars testi',
        estimatedMinutes: 5,
        testData: {
          instructions: 'Bo‘sh joyni to‘ldiring.',
          passingScorePercentage: 80,
          questions: [
            {
              id: 'en-a1-u1-egi-99-q1',
              options: ['in', 'on', 'at'],
              explanation:
                'In ichkarini, on sirtni, at esa joyni nuqta sifatida bildirishi mumkin.',
              question: 'The milk is ___ the fridge.',
              correctAnswerIndex: 0,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'en-a1-u1-egi-100',
    courseId: 'english-a1',
    unitId: 'en-a1-u1',
    unitTitle: 'Unit 1: Essentials & Greetings',
    language: 'en',
    level: 'A1',
    lessonNumber: 100,
    title: 'In, At and On in Common Places',
    description:
      'At work faoliyat joyini, in bed yotoqda ekanini, on the bus transport ichida ekanini bildiradi.',
    estimatedDurationMinutes: 15,
    steps: [
      {
        id: 'en-a1-u1-egi-100-s1',
        type: 'learn',
        title: 'Qoida va misol',
        estimatedMinutes: 5,
        learnData: {
          title: 'In, At and On in Common Places',
          explanation:
            'At work faoliyat joyini, in bed yotoqda ekanini, on the bus transport ichida ekanini bildiradi.',
          grammarRules: [
            {
              pattern:
                'At work faoliyat joyini, in bed yotoqda ekanini, on the bus transport ichida ekanini bildiradi.',
              meaning: 'In, At and On in Common Places',
              examples: [
                {
                  sentence: 'She is at work.',
                  translation: 'U ishda.',
                },
              ],
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-100-s2',
        type: 'practice',
        title: 'Mashq',
        estimatedMinutes: 5,
        practiceData: {
          instructions: 'To‘g‘ri javobni tanlang.',
          exercises: [
            {
              id: 'en-a1-u1-egi-100-e1',
              options: ['Vokzalga yetib keldik.', 'U rasm chizishga usta.', 'U ishda.'],
              explanation:
                'At work faoliyat joyini, in bed yotoqda ekanini, on the bus transport ichida ekanini bildiradi.',
              prompt: 'Mos tarjimani tanlang: She is at work.',
              type: 'multiple-choice',
              correctAnswer: 2,
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-100-s3',
        type: 'test',
        title: 'Dars testi',
        estimatedMinutes: 5,
        testData: {
          instructions: 'Bo‘sh joyni to‘ldiring.',
          passingScorePercentage: 80,
          questions: [
            {
              id: 'en-a1-u1-egi-100-q1',
              options: ['at', 'on', 'to'],
              explanation:
                'At work faoliyat joyini, in bed yotoqda ekanini, on the bus transport ichida ekanini bildiradi.',
              question: 'I read the message ___ the bus.',
              correctAnswerIndex: 1,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'en-a1-u1-egi-101',
    courseId: 'english-a1',
    unitId: 'en-a1-u1',
    unitTitle: 'Unit 1: Essentials & Greetings',
    language: 'en',
    level: 'A1',
    lessonNumber: 101,
    title: 'To, In and At with Movement',
    description:
      'To yo‘nalishni bildiradi. Arrive dan keyin shahar bilan in, kichik joy bilan at ishlatiladi.',
    estimatedDurationMinutes: 15,
    steps: [
      {
        id: 'en-a1-u1-egi-101-s1',
        type: 'learn',
        title: 'Qoida va misol',
        estimatedMinutes: 5,
        learnData: {
          title: 'To, In and At with Movement',
          explanation:
            'To yo‘nalishni bildiradi. Arrive dan keyin shahar bilan in, kichik joy bilan at ishlatiladi.',
          grammarRules: [
            {
              pattern:
                'To yo‘nalishni bildiradi. Arrive dan keyin shahar bilan in, kichik joy bilan at ishlatiladi.',
              meaning: 'To, In and At with Movement',
              examples: [
                {
                  sentence: 'We arrived at the station.',
                  translation: 'Vokzalga yetib keldik.',
                },
              ],
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-101-s2',
        type: 'practice',
        title: 'Mashq',
        estimatedMinutes: 5,
        practiceData: {
          instructions: 'To‘g‘ri javobni tanlang.',
          exercises: [
            {
              id: 'en-a1-u1-egi-101-e1',
              options: [
                'Vokzalga yetib keldik.',
                'Bank maktab ro‘parasida.',
                'Avtobusni kutyapman.',
              ],
              explanation:
                'To yo‘nalishni bildiradi. Arrive dan keyin shahar bilan in, kichik joy bilan at ishlatiladi.',
              prompt: 'Mos tarjimani tanlang: We arrived at the station.',
              type: 'multiple-choice',
              correctAnswer: 0,
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-101-s3',
        type: 'test',
        title: 'Dars testi',
        estimatedMinutes: 5,
        testData: {
          instructions: 'Bo‘sh joyni to‘ldiring.',
          passingScorePercentage: 80,
          questions: [
            {
              id: 'en-a1-u1-egi-101-q1',
              options: ['at', 'to', 'in'],
              explanation:
                'To yo‘nalishni bildiradi. Arrive dan keyin shahar bilan in, kichik joy bilan at ishlatiladi.',
              question: 'They arrived ___ Tashkent.',
              correctAnswerIndex: 2,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'en-a1-u1-egi-102',
    courseId: 'english-a1',
    unitId: 'en-a1-u1',
    unitTitle: 'Unit 1: Essentials & Greetings',
    language: 'en',
    level: 'A1',
    lessonNumber: 102,
    title: 'Position Prepositions',
    description: 'Under ostida, behind orqasida, opposite ro‘parasida, next to yonida degani.',
    estimatedDurationMinutes: 15,
    steps: [
      {
        id: 'en-a1-u1-egi-102-s1',
        type: 'learn',
        title: 'Qoida va misol',
        estimatedMinutes: 5,
        learnData: {
          title: 'Position Prepositions',
          explanation:
            'Under ostida, behind orqasida, opposite ro‘parasida, next to yonida degani.',
          grammarRules: [
            {
              pattern:
                'Under ostida, behind orqasida, opposite ro‘parasida, next to yonida degani.',
              meaning: 'Position Prepositions',
              examples: [
                {
                  sentence: 'The bank is opposite the school.',
                  translation: 'Bank maktab ro‘parasida.',
                },
              ],
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-102-s2',
        type: 'practice',
        title: 'Mashq',
        estimatedMinutes: 5,
        practiceData: {
          instructions: 'To‘g‘ri javobni tanlang.',
          exercises: [
            {
              id: 'en-a1-u1-egi-102-e1',
              options: [
                'Biz tunnel ichidan o‘tdik.',
                'Bank maktab ro‘parasida.',
                'Mushuk qochib ketdi.',
              ],
              explanation:
                'Under ostida, behind orqasida, opposite ro‘parasida, next to yonida degani.',
              prompt: 'Mos tarjimani tanlang: The bank is opposite the school.',
              type: 'multiple-choice',
              correctAnswer: 1,
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-102-s3',
        type: 'test',
        title: 'Dars testi',
        estimatedMinutes: 5,
        testData: {
          instructions: 'Bo‘sh joyni to‘ldiring.',
          passingScorePercentage: 80,
          questions: [
            {
              id: 'en-a1-u1-egi-102-q1',
              options: ['under', 'behind', 'opposite'],
              explanation:
                'Under ostida, behind orqasida, opposite ro‘parasida, next to yonida degani.',
              question: 'The shoes are ___ the bed. (Tagida.)',
              correctAnswerIndex: 0,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'en-a1-u1-egi-103',
    courseId: 'english-a1',
    unitId: 'en-a1-u1',
    unitTitle: 'Unit 1: Essentials & Greetings',
    language: 'en',
    level: 'A1',
    lessonNumber: 103,
    title: 'Movement Prepositions',
    description: 'Up yuqoriga, over ustidan, through ichidan o‘tishni bildiradi.',
    estimatedDurationMinutes: 15,
    steps: [
      {
        id: 'en-a1-u1-egi-103-s1',
        type: 'learn',
        title: 'Qoida va misol',
        estimatedMinutes: 5,
        learnData: {
          title: 'Movement Prepositions',
          explanation: 'Up yuqoriga, over ustidan, through ichidan o‘tishni bildiradi.',
          grammarRules: [
            {
              pattern: 'Up yuqoriga, over ustidan, through ichidan o‘tishni bildiradi.',
              meaning: 'Movement Prepositions',
              examples: [
                {
                  sentence: 'We walked through the tunnel.',
                  translation: 'Biz tunnel ichidan o‘tdik.',
                },
              ],
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-103-s2',
        type: 'practice',
        title: 'Mashq',
        estimatedMinutes: 5,
        practiceData: {
          instructions: 'To‘g‘ri javobni tanlang.',
          exercises: [
            {
              id: 'en-a1-u1-egi-103-e1',
              options: [
                'Safar haqida gaplashdik.',
                'Ularni kiyib oling.',
                'Biz tunnel ichidan o‘tdik.',
              ],
              explanation: 'Up yuqoriga, over ustidan, through ichidan o‘tishni bildiradi.',
              prompt: 'Mos tarjimani tanlang: We walked through the tunnel.',
              type: 'multiple-choice',
              correctAnswer: 2,
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-103-s3',
        type: 'test',
        title: 'Dars testi',
        estimatedMinutes: 5,
        testData: {
          instructions: 'Bo‘sh joyni to‘ldiring.',
          passingScorePercentage: 80,
          questions: [
            {
              id: 'en-a1-u1-egi-103-q1',
              options: ['under', 'up', 'through'],
              explanation: 'Up yuqoriga, over ustidan, through ichidan o‘tishni bildiradi.',
              question: 'She climbed ___ the stairs.',
              correctAnswerIndex: 1,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'en-a1-u1-egi-104',
    courseId: 'english-a1',
    unitId: 'en-a1-u1',
    unitTitle: 'Unit 1: Essentials & Greetings',
    language: 'en',
    level: 'A1',
    lessonNumber: 104,
    title: 'Common Prepositional Expressions',
    description:
      'By bus transport usulini, with vositani, about suhbat mavzusini bildirishi mumkin.',
    estimatedDurationMinutes: 15,
    steps: [
      {
        id: 'en-a1-u1-egi-104-s1',
        type: 'learn',
        title: 'Qoida va misol',
        estimatedMinutes: 5,
        learnData: {
          title: 'Common Prepositional Expressions',
          explanation:
            'By bus transport usulini, with vositani, about suhbat mavzusini bildirishi mumkin.',
          grammarRules: [
            {
              pattern:
                'By bus transport usulini, with vositani, about suhbat mavzusini bildirishi mumkin.',
              meaning: 'Common Prepositional Expressions',
              examples: [
                {
                  sentence: 'We talked about the trip.',
                  translation: 'Safar haqida gaplashdik.',
                },
              ],
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-104-s2',
        type: 'practice',
        title: 'Mashq',
        estimatedMinutes: 5,
        practiceData: {
          instructions: 'To‘g‘ri javobni tanlang.',
          exercises: [
            {
              id: 'en-a1-u1-egi-104-e1',
              options: [
                'Safar haqida gaplashdik.',
                'U rasm chizishga usta.',
                'Kasal bo‘lganim uchun uyda qoldim.',
              ],
              explanation:
                'By bus transport usulini, with vositani, about suhbat mavzusini bildirishi mumkin.',
              prompt: 'Mos tarjimani tanlang: We talked about the trip.',
              type: 'multiple-choice',
              correctAnswer: 0,
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-104-s3',
        type: 'test',
        title: 'Dars testi',
        estimatedMinutes: 5,
        testData: {
          instructions: 'Bo‘sh joyni to‘ldiring.',
          passingScorePercentage: 80,
          questions: [
            {
              id: 'en-a1-u1-egi-104-q1',
              options: ['about', 'at', 'with'],
              explanation:
                'By bus transport usulini, with vositani, about suhbat mavzusini bildirishi mumkin.',
              question: 'He cut the paper ___ scissors.',
              correctAnswerIndex: 2,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'en-a1-u1-egi-105',
    courseId: 'english-a1',
    unitId: 'en-a1-u1',
    unitTitle: 'Unit 1: Essentials & Greetings',
    language: 'en',
    level: 'A1',
    lessonNumber: 105,
    title: 'Adjectives with Prepositions',
    description:
      'Good at va afraid of kabi birikmalarni birga o‘rganing. Predlogdan keyin fe’l kelsa -ing shakli ishlatiladi.',
    estimatedDurationMinutes: 15,
    steps: [
      {
        id: 'en-a1-u1-egi-105-s1',
        type: 'learn',
        title: 'Qoida va misol',
        estimatedMinutes: 5,
        learnData: {
          title: 'Adjectives with Prepositions',
          explanation:
            'Good at va afraid of kabi birikmalarni birga o‘rganing. Predlogdan keyin fe’l kelsa -ing shakli ishlatiladi.',
          grammarRules: [
            {
              pattern:
                'Good at va afraid of kabi birikmalarni birga o‘rganing. Predlogdan keyin fe’l kelsa -ing shakli ishlatiladi.',
              meaning: 'Adjectives with Prepositions',
              examples: [
                {
                  sentence: 'She is good at drawing.',
                  translation: 'U rasm chizishga usta.',
                },
              ],
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-105-s2',
        type: 'practice',
        title: 'Mashq',
        estimatedMinutes: 5,
        practiceData: {
          instructions: 'To‘g‘ri javobni tanlang.',
          exercises: [
            {
              id: 'en-a1-u1-egi-105-e1',
              options: [
                'Avtobusni kutyapman.',
                'U rasm chizishga usta.',
                'Yetib borganimda qo‘ng‘iroq qilaman.',
              ],
              explanation:
                'Good at va afraid of kabi birikmalarni birga o‘rganing. Predlogdan keyin fe’l kelsa -ing shakli ishlatiladi.',
              prompt: 'Mos tarjimani tanlang: She is good at drawing.',
              type: 'multiple-choice',
              correctAnswer: 1,
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-105-s3',
        type: 'test',
        title: 'Dars testi',
        estimatedMinutes: 5,
        testData: {
          instructions: 'Bo‘sh joyni to‘ldiring.',
          passingScorePercentage: 80,
          questions: [
            {
              id: 'en-a1-u1-egi-105-q1',
              options: ['of', 'at', 'to'],
              explanation:
                'Good at va afraid of kabi birikmalarni birga o‘rganing. Predlogdan keyin fe’l kelsa -ing shakli ishlatiladi.',
              question: 'He is afraid ___ flying.',
              correctAnswerIndex: 0,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'en-a1-u1-egi-106',
    courseId: 'english-a1',
    unitId: 'en-a1-u1',
    unitTitle: 'Unit 1: Essentials & Greetings',
    language: 'en',
    level: 'A1',
    lessonNumber: 106,
    title: 'Verbs with Prepositions',
    description: 'Listen to, look at va wait for kabi fe’llar o‘z predlogi bilan ishlatiladi.',
    estimatedDurationMinutes: 15,
    steps: [
      {
        id: 'en-a1-u1-egi-106-s1',
        type: 'learn',
        title: 'Qoida va misol',
        estimatedMinutes: 5,
        learnData: {
          title: 'Verbs with Prepositions',
          explanation:
            'Listen to, look at va wait for kabi fe’llar o‘z predlogi bilan ishlatiladi.',
          grammarRules: [
            {
              pattern:
                'Listen to, look at va wait for kabi fe’llar o‘z predlogi bilan ishlatiladi.',
              meaning: 'Verbs with Prepositions',
              examples: [
                {
                  sentence: 'I’m waiting for the bus.',
                  translation: 'Avtobusni kutyapman.',
                },
              ],
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-106-s2',
        type: 'practice',
        title: 'Mashq',
        estimatedMinutes: 5,
        practiceData: {
          instructions: 'To‘g‘ri javobni tanlang.',
          exercises: [
            {
              id: 'en-a1-u1-egi-106-e1',
              options: [
                'Mushuk qochib ketdi.',
                'Yomg‘ir yog‘sa, uyda qolamiz.',
                'Avtobusni kutyapman.',
              ],
              explanation:
                'Listen to, look at va wait for kabi fe’llar o‘z predlogi bilan ishlatiladi.',
              prompt: 'Mos tarjimani tanlang: I’m waiting for the bus.',
              type: 'multiple-choice',
              correctAnswer: 2,
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-106-s3',
        type: 'test',
        title: 'Dars testi',
        estimatedMinutes: 5,
        testData: {
          instructions: 'Bo‘sh joyni to‘ldiring.',
          passingScorePercentage: 80,
          questions: [
            {
              id: 'en-a1-u1-egi-106-q1',
              options: ['at', 'to', 'for'],
              explanation:
                'Listen to, look at va wait for kabi fe’llar o‘z predlogi bilan ishlatiladi.',
              question: 'Listen ___ this song.',
              correctAnswerIndex: 1,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'en-a1-u1-egi-107',
    courseId: 'english-a1',
    unitId: 'en-a1-u1',
    unitTitle: 'Unit 1: Essentials & Greetings',
    language: 'en',
    level: 'A1',
    lessonNumber: 107,
    title: 'Phrasal Verbs of Movement',
    description:
      'Fe’lga in, out, off yoki away qo‘shilganda harakatning yo‘nalishi yoki ma’nosi o‘zgaradi.',
    estimatedDurationMinutes: 15,
    steps: [
      {
        id: 'en-a1-u1-egi-107-s1',
        type: 'learn',
        title: 'Qoida va misol',
        estimatedMinutes: 5,
        learnData: {
          title: 'Phrasal Verbs of Movement',
          explanation:
            'Fe’lga in, out, off yoki away qo‘shilganda harakatning yo‘nalishi yoki ma’nosi o‘zgaradi.',
          grammarRules: [
            {
              pattern:
                'Fe’lga in, out, off yoki away qo‘shilganda harakatning yo‘nalishi yoki ma’nosi o‘zgaradi.',
              meaning: 'Phrasal Verbs of Movement',
              examples: [
                {
                  sentence: 'The cat ran away.',
                  translation: 'Mushuk qochib ketdi.',
                },
              ],
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-107-s2',
        type: 'practice',
        title: 'Mashq',
        estimatedMinutes: 5,
        practiceData: {
          instructions: 'To‘g‘ri javobni tanlang.',
          exercises: [
            {
              id: 'en-a1-u1-egi-107-e1',
              options: [
                'Mushuk qochib ketdi.',
                'Ularni kiyib oling.',
                'Vaqtim ko‘proq bo‘lsa, sayohat qilardim.',
              ],
              explanation:
                'Fe’lga in, out, off yoki away qo‘shilganda harakatning yo‘nalishi yoki ma’nosi o‘zgaradi.',
              prompt: 'Mos tarjimani tanlang: The cat ran away.',
              type: 'multiple-choice',
              correctAnswer: 0,
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-107-s3',
        type: 'test',
        title: 'Dars testi',
        estimatedMinutes: 5,
        testData: {
          instructions: 'Bo‘sh joyni to‘ldiring.',
          passingScorePercentage: 80,
          questions: [
            {
              id: 'en-a1-u1-egi-107-q1',
              options: ['off', 'away', 'in'],
              explanation:
                'Fe’lga in, out, off yoki away qo‘shilganda harakatning yo‘nalishi yoki ma’nosi o‘zgaradi.',
              question: 'It was cold outside, so we went ___ to get warm.',
              correctAnswerIndex: 2,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'en-a1-u1-egi-108',
    courseId: 'english-a1',
    unitId: 'en-a1-u1',
    unitTitle: 'Unit 1: Essentials & Greetings',
    language: 'en',
    level: 'A1',
    lessonNumber: 108,
    title: 'Separable Phrasal Verbs',
    description: 'Put on kabi ajraladigan birikmada it yoki them o‘rtaga keladi.',
    estimatedDurationMinutes: 15,
    steps: [
      {
        id: 'en-a1-u1-egi-108-s1',
        type: 'learn',
        title: 'Qoida va misol',
        estimatedMinutes: 5,
        learnData: {
          title: 'Separable Phrasal Verbs',
          explanation: 'Put on kabi ajraladigan birikmada it yoki them o‘rtaga keladi.',
          grammarRules: [
            {
              pattern: 'Put on kabi ajraladigan birikmada it yoki them o‘rtaga keladi.',
              meaning: 'Separable Phrasal Verbs',
              examples: [
                {
                  sentence: 'Put them on.',
                  translation: 'Ularni kiyib oling.',
                },
              ],
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-108-s2',
        type: 'practice',
        title: 'Mashq',
        estimatedMinutes: 5,
        practiceData: {
          instructions: 'To‘g‘ri javobni tanlang.',
          exercises: [
            {
              id: 'en-a1-u1-egi-108-e1',
              options: [
                'Kasal bo‘lganim uchun uyda qoldim.',
                'Ularni kiyib oling.',
                'Ingliz tili o‘qitadigan bir ayolni bilaman.',
              ],
              explanation: 'Put on kabi ajraladigan birikmada it yoki them o‘rtaga keladi.',
              prompt: 'Mos tarjimani tanlang: Put them on.',
              type: 'multiple-choice',
              correctAnswer: 1,
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-108-s3',
        type: 'test',
        title: 'Dars testi',
        estimatedMinutes: 5,
        testData: {
          instructions: 'Bo‘sh joyni to‘ldiring.',
          passingScorePercentage: 80,
          questions: [
            {
              id: 'en-a1-u1-egi-108-q1',
              options: ['Turn it off.', 'Turn off it.', 'Turn it of.'],
              explanation: 'Put on kabi ajraladigan birikmada it yoki them o‘rtaga keladi.',
              question: 'Choose the correct sentence.',
              correctAnswerIndex: 0,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'en-a1-u1-egi-109',
    courseId: 'english-a1',
    unitId: 'en-a1-u1',
    unitTitle: 'Unit 1: Essentials & Greetings',
    language: 'en',
    level: 'A1',
    lessonNumber: 109,
    title: 'And, But, Or, So and Because',
    description:
      'And qo‘shadi, but qarama-qarshilik, or tanlov, so natija va because sabab bildiradi.',
    estimatedDurationMinutes: 15,
    steps: [
      {
        id: 'en-a1-u1-egi-109-s1',
        type: 'learn',
        title: 'Qoida va misol',
        estimatedMinutes: 5,
        learnData: {
          title: 'And, But, Or, So and Because',
          explanation:
            'And qo‘shadi, but qarama-qarshilik, or tanlov, so natija va because sabab bildiradi.',
          grammarRules: [
            {
              pattern:
                'And qo‘shadi, but qarama-qarshilik, or tanlov, so natija va because sabab bildiradi.',
              meaning: 'And, But, Or, So and Because',
              examples: [
                {
                  sentence: 'I stayed home because I was ill.',
                  translation: 'Kasal bo‘lganim uchun uyda qoldim.',
                },
              ],
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-109-s2',
        type: 'practice',
        title: 'Mashq',
        estimatedMinutes: 5,
        practiceData: {
          instructions: 'To‘g‘ri javobni tanlang.',
          exercises: [
            {
              id: 'en-a1-u1-egi-109-e1',
              options: [
                'Yetib borganimda qo‘ng‘iroq qilaman.',
                'Sotib olgan kitobim foydali.',
                'Kasal bo‘lganim uchun uyda qoldim.',
              ],
              explanation:
                'And qo‘shadi, but qarama-qarshilik, or tanlov, so natija va because sabab bildiradi.',
              prompt: 'Mos tarjimani tanlang: I stayed home because I was ill.',
              type: 'multiple-choice',
              correctAnswer: 2,
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-109-s3',
        type: 'test',
        title: 'Dars testi',
        estimatedMinutes: 5,
        testData: {
          instructions: 'Bo‘sh joyni to‘ldiring.',
          passingScorePercentage: 80,
          questions: [
            {
              id: 'en-a1-u1-egi-109-q1',
              options: ['but', 'so', 'or'],
              explanation:
                'And qo‘shadi, but qarama-qarshilik, or tanlov, so natija va because sabab bildiradi.',
              question: 'I was hungry, ___ I made lunch.',
              correctAnswerIndex: 1,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'en-a1-u1-egi-110',
    courseId: 'english-a1',
    unitId: 'en-a1-u1',
    unitTitle: 'Unit 1: Essentials & Greetings',
    language: 'en',
    level: 'A1',
    lessonNumber: 110,
    title: 'When Clauses',
    description: 'Kelajak haqida when bilan boshlangan qismda odatda Present Simple ishlatiladi.',
    estimatedDurationMinutes: 15,
    steps: [
      {
        id: 'en-a1-u1-egi-110-s1',
        type: 'learn',
        title: 'Qoida va misol',
        estimatedMinutes: 5,
        learnData: {
          title: 'When Clauses',
          explanation:
            'Kelajak haqida when bilan boshlangan qismda odatda Present Simple ishlatiladi.',
          grammarRules: [
            {
              pattern:
                'Kelajak haqida when bilan boshlangan qismda odatda Present Simple ishlatiladi.',
              meaning: 'When Clauses',
              examples: [
                {
                  sentence: 'I’ll call you when I arrive.',
                  translation: 'Yetib borganimda qo‘ng‘iroq qilaman.',
                },
              ],
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-110-s2',
        type: 'practice',
        title: 'Mashq',
        estimatedMinutes: 5,
        practiceData: {
          instructions: 'To‘g‘ri javobni tanlang.',
          exercises: [
            {
              id: 'en-a1-u1-egi-110-e1',
              options: [
                'Yetib borganimda qo‘ng‘iroq qilaman.',
                'Yomg‘ir yog‘sa, uyda qolamiz.',
                'Ikkita stul bor.',
              ],
              explanation:
                'Kelajak haqida when bilan boshlangan qismda odatda Present Simple ishlatiladi.',
              prompt: 'Mos tarjimani tanlang: I’ll call you when I arrive.',
              type: 'multiple-choice',
              correctAnswer: 0,
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-110-s3',
        type: 'test',
        title: 'Dars testi',
        estimatedMinutes: 5,
        testData: {
          instructions: 'Bo‘sh joyni to‘ldiring.',
          passingScorePercentage: 80,
          questions: [
            {
              id: 'en-a1-u1-egi-110-q1',
              options: ['will come', 'came', 'comes'],
              explanation:
                'Kelajak haqida when bilan boshlangan qismda odatda Present Simple ishlatiladi.',
              question: 'I’ll tell her when she ___.',
              correctAnswerIndex: 2,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'en-a1-u1-egi-111',
    courseId: 'english-a1',
    unitId: 'en-a1-u1',
    unitTitle: 'Unit 1: Essentials & Greetings',
    language: 'en',
    level: 'A1',
    lessonNumber: 111,
    title: 'Real Conditions',
    description:
      'Haqiqiy kelajak ehtimolida if qismida Present Simple, natija qismida ko‘pincha will ishlatiladi.',
    estimatedDurationMinutes: 15,
    steps: [
      {
        id: 'en-a1-u1-egi-111-s1',
        type: 'learn',
        title: 'Qoida va misol',
        estimatedMinutes: 5,
        learnData: {
          title: 'Real Conditions',
          explanation:
            'Haqiqiy kelajak ehtimolida if qismida Present Simple, natija qismida ko‘pincha will ishlatiladi.',
          grammarRules: [
            {
              pattern:
                'Haqiqiy kelajak ehtimolida if qismida Present Simple, natija qismida ko‘pincha will ishlatiladi.',
              meaning: 'Real Conditions',
              examples: [
                {
                  sentence: 'If it rains, we’ll stay home.',
                  translation: 'Yomg‘ir yog‘sa, uyda qolamiz.',
                },
              ],
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-111-s2',
        type: 'practice',
        title: 'Mashq',
        estimatedMinutes: 5,
        practiceData: {
          instructions: 'To‘g‘ri javobni tanlang.',
          exercises: [
            {
              id: 'en-a1-u1-egi-111-e1',
              options: [
                'Vaqtim ko‘proq bo‘lsa, sayohat qilardim.',
                'Yomg‘ir yog‘sa, uyda qolamiz.',
                'Ertaga yig‘ilish bo‘ladi.',
              ],
              explanation:
                'Haqiqiy kelajak ehtimolida if qismida Present Simple, natija qismida ko‘pincha will ishlatiladi.',
              prompt: 'Mos tarjimani tanlang: If it rains, we’ll stay home.',
              type: 'multiple-choice',
              correctAnswer: 1,
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-111-s3',
        type: 'test',
        title: 'Dars testi',
        estimatedMinutes: 5,
        testData: {
          instructions: 'Bo‘sh joyni to‘ldiring.',
          passingScorePercentage: 80,
          questions: [
            {
              id: 'en-a1-u1-egi-111-q1',
              options: ['see', 'will see', 'saw'],
              explanation:
                'Haqiqiy kelajak ehtimolida if qismida Present Simple, natija qismida ko‘pincha will ishlatiladi.',
              question: 'If you ___ Ali, tell him to call.',
              correctAnswerIndex: 0,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'en-a1-u1-egi-112',
    courseId: 'english-a1',
    unitId: 'en-a1-u1',
    unitTitle: 'Unit 1: Essentials & Greetings',
    language: 'en',
    level: 'A1',
    lessonNumber: 112,
    title: 'Imaginary Conditions',
    description:
      'Tasavvurdagi hozirgi yoki kelajak holatida if + Past Simple, natijada would + fe’l ishlatiladi.',
    estimatedDurationMinutes: 15,
    steps: [
      {
        id: 'en-a1-u1-egi-112-s1',
        type: 'learn',
        title: 'Qoida va misol',
        estimatedMinutes: 5,
        learnData: {
          title: 'Imaginary Conditions',
          explanation:
            'Tasavvurdagi hozirgi yoki kelajak holatida if + Past Simple, natijada would + fe’l ishlatiladi.',
          grammarRules: [
            {
              pattern:
                'Tasavvurdagi hozirgi yoki kelajak holatida if + Past Simple, natijada would + fe’l ishlatiladi.',
              meaning: 'Imaginary Conditions',
              examples: [
                {
                  sentence: 'If I had more time, I would travel.',
                  translation: 'Vaqtim ko‘proq bo‘lsa, sayohat qilardim.',
                },
              ],
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-112-s2',
        type: 'practice',
        title: 'Mashq',
        estimatedMinutes: 5,
        practiceData: {
          instructions: 'To‘g‘ri javobni tanlang.',
          exercises: [
            {
              id: 'en-a1-u1-egi-112-e1',
              options: [
                'Ingliz tili o‘qitadigan bir ayolni bilaman.',
                'Bugun sovuq.',
                'Vaqtim ko‘proq bo‘lsa, sayohat qilardim.',
              ],
              explanation:
                'Tasavvurdagi hozirgi yoki kelajak holatida if + Past Simple, natijada would + fe’l ishlatiladi.',
              prompt: 'Mos tarjimani tanlang: If I had more time, I would travel.',
              type: 'multiple-choice',
              correctAnswer: 2,
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-112-s3',
        type: 'test',
        title: 'Dars testi',
        estimatedMinutes: 5,
        testData: {
          instructions: 'Bo‘sh joyni to‘ldiring.',
          passingScorePercentage: 80,
          questions: [
            {
              id: 'en-a1-u1-egi-112-q1',
              options: ['will', 'would', 'did'],
              explanation:
                'Tasavvurdagi hozirgi yoki kelajak holatida if + Past Simple, natijada would + fe’l ishlatiladi.',
              question: 'If I knew the answer, I ___ tell you.',
              correctAnswerIndex: 1,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'en-a1-u1-egi-113',
    courseId: 'english-a1',
    unitId: 'en-a1-u1',
    unitTitle: 'Unit 1: Essentials & Greetings',
    language: 'en',
    level: 'A1',
    lessonNumber: 113,
    title: 'Relative Clauses with Who and Which',
    description: 'Odam haqida who, narsa haqida which yoki that izoh beruvchi gapni bog‘laydi.',
    estimatedDurationMinutes: 15,
    steps: [
      {
        id: 'en-a1-u1-egi-113-s1',
        type: 'learn',
        title: 'Qoida va misol',
        estimatedMinutes: 5,
        learnData: {
          title: 'Relative Clauses with Who and Which',
          explanation:
            'Odam haqida who, narsa haqida which yoki that izoh beruvchi gapni bog‘laydi.',
          grammarRules: [
            {
              pattern:
                'Odam haqida who, narsa haqida which yoki that izoh beruvchi gapni bog‘laydi.',
              meaning: 'Relative Clauses with Who and Which',
              examples: [
                {
                  sentence: 'I know a woman who teaches English.',
                  translation: 'Ingliz tili o‘qitadigan bir ayolni bilaman.',
                },
              ],
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-113-s2',
        type: 'practice',
        title: 'Mashq',
        estimatedMinutes: 5,
        practiceData: {
          instructions: 'To‘g‘ri javobni tanlang.',
          exercises: [
            {
              id: 'en-a1-u1-egi-113-e1',
              options: [
                'Ingliz tili o‘qitadigan bir ayolni bilaman.',
                'Sotib olgan kitobim foydali.',
                'Men choyni yoqtiraman, Ali esa yoqtirmaydi.',
              ],
              explanation:
                'Odam haqida who, narsa haqida which yoki that izoh beruvchi gapni bog‘laydi.',
              prompt: 'Mos tarjimani tanlang: I know a woman who teaches English.',
              type: 'multiple-choice',
              correctAnswer: 0,
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-113-s3',
        type: 'test',
        title: 'Dars testi',
        estimatedMinutes: 5,
        testData: {
          instructions: 'Bo‘sh joyni to‘ldiring.',
          passingScorePercentage: 80,
          questions: [
            {
              id: 'en-a1-u1-egi-113-q1',
              options: ['where', 'when', 'who'],
              explanation:
                'Odam haqida who, narsa haqida which yoki that izoh beruvchi gapni bog‘laydi.',
              question: 'That’s the man ___ helped us.',
              correctAnswerIndex: 2,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'en-a1-u1-egi-114',
    courseId: 'english-a1',
    unitId: 'en-a1-u1',
    unitTitle: 'Unit 1: Essentials & Greetings',
    language: 'en',
    level: 'A1',
    lessonNumber: 114,
    title: 'Relative Clauses with Omitted Pronouns',
    description:
      'Bog‘lovchi olmosh ergash gapda to‘ldiruvchi bo‘lsa, uni ko‘pincha tushirish mumkin.',
    estimatedDurationMinutes: 15,
    steps: [
      {
        id: 'en-a1-u1-egi-114-s1',
        type: 'learn',
        title: 'Qoida va misol',
        estimatedMinutes: 5,
        learnData: {
          title: 'Relative Clauses with Omitted Pronouns',
          explanation:
            'Bog‘lovchi olmosh ergash gapda to‘ldiruvchi bo‘lsa, uni ko‘pincha tushirish mumkin.',
          grammarRules: [
            {
              pattern:
                'Bog‘lovchi olmosh ergash gapda to‘ldiruvchi bo‘lsa, uni ko‘pincha tushirish mumkin.',
              meaning: 'Relative Clauses with Omitted Pronouns',
              examples: [
                {
                  sentence: 'The book I bought is useful.',
                  translation: 'Sotib olgan kitobim foydali.',
                },
              ],
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-114-s2',
        type: 'practice',
        title: 'Mashq',
        estimatedMinutes: 5,
        practiceData: {
          instructions: 'To‘g‘ri javobni tanlang.',
          exercises: [
            {
              id: 'en-a1-u1-egi-114-e1',
              options: ['Ikkita stul bor.', 'Sotib olgan kitobim foydali.', 'Topdim. — Rostdanmi?'],
              explanation:
                'Bog‘lovchi olmosh ergash gapda to‘ldiruvchi bo‘lsa, uni ko‘pincha tushirish mumkin.',
              prompt: 'Mos tarjimani tanlang: The book I bought is useful.',
              type: 'multiple-choice',
              correctAnswer: 1,
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-egi-114-s3',
        type: 'test',
        title: 'Dars testi',
        estimatedMinutes: 5,
        testData: {
          instructions: 'Bo‘sh joyni to‘ldiring.',
          passingScorePercentage: 80,
          questions: [
            {
              id: 'en-a1-u1-egi-114-q1',
              options: [
                'The film we watched was funny.',
                'The film we watched it was funny.',
                'The film watched we was funny.',
              ],
              explanation:
                'Bog‘lovchi olmosh ergash gapda to‘ldiruvchi bo‘lsa, uni ko‘pincha tushirish mumkin.',
              question: 'Choose the correct sentence.',
              correctAnswerIndex: 0,
            },
          ],
        },
      },
    ],
  },
  {
    id: 'en-a1-u1-l2',
    courseId: 'english-a1',
    unitId: 'en-a1-u1',
    unitTitle: 'Unit 1: Essentials & Greetings',
    language: 'en',
    level: 'A1',
    lessonNumber: 115,
    title: 'Daily Objects & Numbers (Plurals)',
    description:
      "Kundalik kerakli buyumlar, 1-100 gacha sonlar va otlarning ko'plik shakli (-s/-es).",
    estimatedDurationMinutes: 15,
    icon: '🔢',
    steps: [
      {
        id: 'en-a1-u1-l2-s1',
        title: "Lug'at & Grammatik Qoidalar",
        type: 'learn',
        estimatedMinutes: 5,
        learnData: {
          title: 'Kundalik Buyumlar va 1-100 Gacha Sonlar',
          subtitle: "Unit 1 • 2-Dars: Otlarning ko'plik shakli va sanoq hisobi",
          explanation:
            "Kundalik hayotimizda narsalarni nomlash va ularning sonini to'g'ri aytish eng muhim amaliy ko'nikmalardan biridir. Ingliz tilida otlarning ko'pligi so'z oxiriga \"-s\" yoki \"-es\" qo'shish orqali yasaladi.",
          keyPoints: [
            'Odatdagi otlar: book -> books, pen -> pens, phone -> phones',
            '-s, -sh, -ch, -x bilan tugasa: box -> boxes, watch -> watches',
            'O\'zbek tili bilan muhim farqi: O\'zbek tilida "beshta kitob" (birlikda) aytilsa, ingliz tilida majburiy ko\'plik bo\'ladi: "five books"',
            'Sonlar: 1-10 (one, two, three...), 13-19 (-teen bilan: fifteen, sixteen...)',
            "O'nliklar: 20-90 (-ty bilan: twenty, thirty, forty, fifty...)",
            '100 soni: one hundred (yoki a hundred)',
          ],
          vocabulary: [
            {
              term: 'Book',
              reading: '/bʊk/',
              meaning: 'Kitob',
              exampleSentence: 'I read an IELTS preparation book every evening.',
              exampleTranslation: "Men har oqshom IELTS ga tayyorgarlik kitobini o'qiyman.",
            },
            {
              term: 'Pen',
              reading: '/pen/',
              meaning: 'Ruchka',
              exampleSentence: 'Do you have a spare black pen for the test?',
              exampleTranslation: 'Test uchun ortiqcha qora ruchkangiz bormi?',
            },
            {
              term: 'Bag',
              reading: '/bæɡ/',
              meaning: 'Sumka, ryukzak',
              exampleSentence: 'My laptop and notebooks are inside my bag.',
              exampleTranslation: 'Mening noutbukim va daftarlarim sumkam ichida.',
            },
            {
              term: 'Key',
              reading: '/kiː/',
              meaning: 'Kalit',
              exampleSentence: 'Here are the keys to our classroom.',
              exampleTranslation: 'Mana sinf xonamizning kalitlari.',
            },
            {
              term: 'Phone',
              reading: '/foʊn/',
              meaning: 'Telefon, smartfon',
              exampleSentence: 'Please turn off your mobile phone during the exam.',
              exampleTranslation: "Iltimos, imtihon paytida telefoningizni o'chirib qo'ying.",
            },
            {
              term: 'Fifteen',
              reading: '/fɪfˈtiːn/',
              meaning: "O'n besh (15) [urg'u -teen bo'g'inida]",
              exampleSentence: 'The lesson lasts for fifteen minutes.',
              exampleTranslation: "Dars o'n besh daqiqa davom etadi.",
            },
            {
              term: 'Fifty',
              reading: '/ˈfɪf.ti/',
              meaning: "Ellik (50) [urg'u fif- bo'g'inida]",
              exampleSentence: 'There are fifty new words in this vocabulary unit.',
              exampleTranslation: "Ushbu lug'at bo'limida ellikta yangi so'z bor.",
            },
            {
              term: 'Hundred',
              reading: '/ˈhʌn.drəd/',
              meaning: 'Yuz (100)',
              exampleSentence: 'A full Band score test has one hundred points.',
              exampleTranslation: "To'liq balli test yuz balldan iborat.",
            },
          ],
          grammarRules: [
            {
              pattern: 'Singular Noun + -s / -es -> Plural Noun',
              meaning: "Narsa-buyumlarning bittadan ko'p ekanligini bildirish",
              usageNotes:
                'Undosh yoki oddiy unli bilan tugagan so\'zlarga "-s" qo\'shiladi (one pen -> two pens). Agar so\'z -s, -sh, -ch, -x tovushlari bilan tugasa, talaffuz qulayligi uchun "-es" qo\'shiladi (watch -> watches, box -> boxes).',
              examples: [
                {
                  sentence: 'I have three notebooks and two pens on my desk.',
                  translation: 'Stolim ustida uchta daftar va ikkita ruchka bor.',
                },
                {
                  sentence: 'There are four watches in the jewelry shop.',
                  translation: "Zargarlik do'konida to'rtta qo'l soati bor.",
                },
              ],
            },
          ],
          culturalNotes:
            '🎙️ IELTS Speaking Part 1 Foundation Corner:\nImtihon oluvchi: "What do you carry in your bag every day?" deb so\'rashi mumkin.\nNamunaviy javob: "I always carry a few essential items, including my smartphone, my apartment keys, and an English vocabulary notebook. They are very useful for my daily study."',
        },
      },
      {
        id: 'en-a1-u1-l2-s2',
        title: 'Interaktiv Amaliy Mashq',
        type: 'practice',
        estimatedMinutes: 5,
        practiceData: {
          instructions: "Otlarning ko'plik shakli va sonlar bo'yicha to'g'ri variantni tanlang.",
          exercises: [
            {
              id: 'en-a1-u1-l2-e1',
              type: 'multiple-choice',
              prompt:
                "\"I have three _______ in my study backpack.\" Bo'sh o'ringa to'g'ri so'zni tanlang:",
              options: ['books', 'book', 'bookes', 'bookies'],
              correctAnswer: 0,
              explanation: "Raqamdan keyin ingliz tilida ot ko'plik shaklida keladi: three books.",
            },
            {
              id: 'en-a1-u1-l2-e2',
              type: 'multiple-choice',
              prompt: "\"Watch\" (qo'l soati) so'zining to'g'ri ko'plik shakli qaysi?",
              options: ['watches', 'watchs', 'watchies', 'watch'],
              correctAnswer: 0,
              explanation: '-ch bilan tugagan otlarga "-es" qo\'shiladi: watches.',
            },
            {
              id: 'en-a1-u1-l2-e3',
              type: 'multiple-choice',
              prompt: '"50" sonining to\'g\'ri yozilishi qaysi?',
              options: ['Fifty', 'Fifteen', 'Five', 'Fifth'],
              correctAnswer: 0,
              explanation: '50 — Fifty. 15 esa — Fifteen.',
            },
            {
              id: 'en-a1-u1-l2-e4',
              type: 'multiple-choice',
              prompt: 'Qaysi gapda xatolik BOR?',
              options: [
                'I have two phones.',
                'She has three pen.',
                'There are four keys.',
                'We need five books.',
              ],
              correctAnswer: 1,
              explanation:
                '"three pen" xato, chunki son 1 dan ortiq bo\'lsa otga -s qo\'shilishi shart: "three pens".',
            },
            {
              id: 'en-a1-u1-l2-e5',
              type: 'multiple-choice',
              prompt: '"Hundred" so\'zi qaysi sonni bildiradi?',
              options: ['100', '1000', '10', '50'],
              correctAnswer: 0,
              explanation: 'Hundred — 100 soni.',
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-l2-s3',
        title: 'Dars Sinov Testi',
        type: 'test',
        estimatedMinutes: 5,
        testData: {
          instructions: "Savollarga javob berib, o'tilgan darsni mukammal o'zlashtiring.",
          passingScorePercentage: 80,
          questions: [
            {
              id: 'en-a1-u1-l2-q1',
              question: 'There are twelve (12) _______ in the classroom.',
              options: ['students', 'student', 'studentes', 'studenties'],
              correctAnswerIndex: 0,
              explanation: "12 soni bilan ot ko'plikda qo'llanadi: students.",
            },
            {
              id: 'en-a1-u1-l2-q2',
              question: "\"Box\" (quti) so'zining to'g'ri ko'plik shakli qaysi?",
              options: ['boxes', 'boxs', 'boxies', 'box'],
              correctAnswerIndex: 0,
              explanation: '-x bilan tugaydigan otlarga "-es" qo\'shiladi: boxes.',
            },
            {
              id: 'en-a1-u1-l2-q3',
              question: '"15" soni ingliz tilida qanday yoziladi?',
              options: ['Fifteen', 'Fifty', 'Five', 'Fiveteen'],
              correctAnswerIndex: 0,
              explanation: '15 — Fifteen.',
            },
            {
              id: 'en-a1-u1-l2-q4',
              question: 'Where are my apartment _______? I cannot open the door.',
              options: ['keys', 'keyes', 'key', 'keyses'],
              correctAnswerIndex: 0,
              explanation: "Key so'ziga oddiy -s qo'shiladi: keys.",
            },
            {
              id: 'en-a1-u1-l2-q5',
              question: 'He has one hundred (100) _______ in his personal library.',
              options: ['books', 'book', 'bookes', 'a book'],
              correctAnswerIndex: 0,
              explanation: "100 soni bilan ko'plik olinadi: one hundred books.",
            },
          ],
        },
      },
    ],
  },
  {
    id: 'en-a1-u1-l3',
    courseId: 'english-a1',
    unitId: 'en-a1-u1',
    unitTitle: 'Unit 1: Essentials & Greetings',
    language: 'en',
    level: 'A1',
    lessonNumber: 116,
    title: 'Demonstratives: This, That, These, Those',
    description:
      "Yaqin va uzoqdagi narsalarni ko'rsatish olmoshlari hamda ularning birlik/ko'plik fe'l moslashuvi.",
    estimatedDurationMinutes: 15,
    icon: '👉',
    steps: [
      {
        id: 'en-a1-u1-l3-s1',
        title: "Ko'rsatish Olmoshlari Qoidasi",
        type: 'learn',
        estimatedMinutes: 5,
        learnData: {
          title: 'This, That, These, Those Farqlari',
          subtitle: "Unit 1 • 3-Dars: Fazoviy masofa va son bo'yicha ko'rsatish",
          explanation:
            "Ingliz tilida narsa-buyumlar sizga yaqin yoki uzoqligiga hamda ularning soni birlik yoki ko'plikdaligiga qarab to'rtta ko'rsatish olmoshidan biri tanlanadi.",
          keyPoints: [
            "THIS (Bu) -> Yaqindagi bitta narsa: This is my laptop (qo'limdagi/oldimdagi).",
            'THAT (Ana u) -> Uzoqdagi bitta narsa: That is a tall building (naridagi).',
            "THESE (Bular) -> Yaqindagi ko'plik narsalar: These are my study notes.",
            "THOSE (Ana ular) -> Uzoqdagi ko'plik narsalar: Those are cars on the street.",
            "⚠️ Fe'l moslashuvi: This/That bilan IS; These/Those bilan ARE ishlatiladi!",
            '⚠️ Tipik xato: "These is my keys" (XATO) -> "These ARE my keys" (TO\'G\'RI).',
          ],
          vocabulary: [
            {
              term: 'This',
              reading: '/ðɪs/',
              meaning: 'Bu (yaqindagi 1 ta narsa)',
              exampleSentence: 'This is my favorite English dictionary.',
              exampleTranslation: "Bu mening eng sevimli ingliz tili lug'atim.",
            },
            {
              term: 'That',
              reading: '/ðæt/',
              meaning: 'U / Ana u (uzoqdagi 1 ta narsa)',
              exampleSentence: 'That building over there is our university.',
              exampleTranslation: 'Ana u yerdagi bino bizning universitetimiz.',
            },
            {
              term: 'These',
              reading: '/ðiːz/',
              meaning: "Bular (yaqindagi ko'plik narsalar)",
              exampleSentence: 'These documents are very important for the visa.',
              exampleTranslation: 'Ushbu hujjatlar viza uchun juda muhim.',
            },
            {
              term: 'Those',
              reading: '/ðoʊz/',
              meaning: "Ana ular (uzoqdagi ko'plik narsalar)",
              exampleSentence: 'Those trees in the park look very beautiful.',
              exampleTranslation: "Bog'dagi ana u daraxtlar juda chiroyli ko'rinadi.",
            },
            {
              term: 'Table',
              reading: '/ˈteɪ.bəl/',
              meaning: 'Stol',
              exampleSentence: 'Please place your passport on this table.',
              exampleTranslation: "Iltimos, pasportingizni ushbu stol ustiga qo'ying.",
            },
            {
              term: 'Chair',
              reading: '/tʃeər/',
              meaning: "Stul, o'rindiq",
              exampleSentence: 'That chair near the window is comfortable.',
              exampleTranslation: 'Deraza yonidagi ana u stul qulay.',
            },
            {
              term: 'Picture',
              reading: '/ˈpɪk.tʃər/',
              meaning: 'Rasm, surat, fotosurat',
              exampleSentence: 'These pictures show my hometown.',
              exampleTranslation: "Bu suratlar mening ona shahrimni ko'rsatadi.",
            },
            {
              term: 'Over there',
              reading: '/ˈoʊ.vər ðeər/',
              meaning: 'Ana u yerda, narigi tomonda',
              exampleSentence: 'The library is located over there.',
              exampleTranslation: 'Kutubxona ana u yerda joylashgan.',
            },
          ],
          grammarRules: [
            {
              pattern: 'This / That + is + Singular Noun | These / Those + are + Plural Noun',
              meaning: "Yaqin va uzoqdagi narsalarni to'g'ri ko'rsatish va tasvirlash",
              usageNotes:
                "Yaqin (qo'lingiz yetadigan yoki ko'z o'ngingizdagi): This (birlik) / These (ko'plik). Uzoq (naridagi, ko'rsatkich barmog'i bilan ishora qilinadigan): That (birlik) / Those (ko'plik).",
              examples: [
                {
                  sentence: 'This is my new laptop, and those are my notebooks over there.',
                  translation:
                    'Bu mening yangi noutbukim, ana u yerdagilar esa mening daftarlarim.',
                },
                {
                  sentence: 'Are these your sunglasses on the table?',
                  translation: "Stol ustidagi bular sizning quyoshdan saqlovchi ko'zoynagingizmi?",
                },
              ],
            },
          ],
          culturalNotes:
            '🎙️ IELTS Speaking Part 1 Foundation Corner:\nImtihon oluvchi: "Do you prefer paper books or electronic books?" deb so\'rashi mumkin.\nNamunaviy javob: "I definitely prefer this smartphone and e-books because these digital tools allow me to read anywhere without carrying heavy bags."',
        },
      },
      {
        id: 'en-a1-u1-l3-s2',
        title: 'Interaktiv Amaliy Mashq',
        type: 'practice',
        estimatedMinutes: 5,
        practiceData: {
          instructions: "Masofa va son bo'yicha to'g'ri ko'rsatish olmoshini tanlang.",
          exercises: [
            {
              id: 'en-a1-u1-l3-e1',
              type: 'multiple-choice',
              prompt:
                '"Look at _______ tall building over there across the river." Qaysi olmosh to\'g\'ri?',
              options: ['that', 'this', 'these', 'those'],
              correctAnswer: 0,
              explanation: 'Uzoqdagi bitta narsaga ishora qilinganda "that" ishlatiladi.',
            },
            {
              id: 'en-a1-u1-l3-e2',
              type: 'multiple-choice',
              prompt: '"_______ are my keys right here in my hand." Qaysi olmosh to\'g\'ri?',
              options: ['These', 'Those', 'This', 'That'],
              correctAnswer: 0,
              explanation: 'Qo\'ldagi (yaqin) ko\'plik narsalar uchun "These" olinadi.',
            },
            {
              id: 'en-a1-u1-l3-e3',
              type: 'multiple-choice',
              prompt: '"These books _______ very helpful for my IELTS preparation."',
              options: ['are', 'is', 'am', 'be'],
              correctAnswer: 0,
              explanation:
                '"These books" ko\'plik bo\'lgani sababli "are" fe\'li bilan moslashadi.',
            },
            {
              id: 'en-a1-u1-l3-e4',
              type: 'multiple-choice',
              prompt: "Qaysi gap to'g'ri tuzilgan?",
              options: [
                'Those shoes are very stylish.',
                'Those shoes is very stylish.',
                'This shoes are very stylish.',
                'That shoes is very stylish.',
              ],
              correctAnswer: 0,
              explanation: '"Shoes" ko\'plik, u bilan "Those" va "are" to\'g\'ri uyg\'unlashgan.',
            },
            {
              id: 'en-a1-u1-l3-e5',
              type: 'multiple-choice',
              prompt: '"Who is _______ person standing over there near the entrance?"',
              options: ['that', 'this', 'these', 'those'],
              correctAnswer: 0,
              explanation: "Uzoqda turgan bitta kishi haqida so'ralganda: that person.",
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-l3-s3',
        title: 'Dars Sinov Testi',
        type: 'test',
        estimatedMinutes: 5,
        testData: {
          instructions: 'Test savollariga javob berib, mavzuni mustahkamlang.',
          passingScorePercentage: 80,
          questions: [
            {
              id: 'en-a1-u1-l3-q1',
              question: '_______ is my new phone here in my pocket.',
              options: ['This', 'That', 'These', 'Those'],
              correctAnswerIndex: 0,
              explanation: "Yaqindagi (cho'ntakdagi) bitta buyum: This.",
            },
            {
              id: 'en-a1-u1-l3-q2',
              question: 'Are _______ your bags over there near the counter?',
              options: ['those', 'these', 'that', 'this'],
              correctAnswerIndex: 0,
              explanation: "Uzoqdagi ko'plik buyumlar: those.",
            },
            {
              id: 'en-a1-u1-l3-q3',
              question: '_______ pictures on the wall here are from my family album.',
              options: ['These', 'This', 'That', 'Those'],
              correctAnswerIndex: 0,
              explanation: "Yaqindagi ko'plik suratlar: These pictures.",
            },
            {
              id: 'en-a1-u1-l3-q4',
              question: 'That car parked across the street _______ very expensive.',
              options: ['is', 'are', 'am', 'be'],
              correctAnswerIndex: 0,
              explanation: 'That car birlikda: is.',
            },
            {
              id: 'en-a1-u1-l3-q5',
              question: 'What are _______ strange lights high in the sky?',
              options: ['those', 'these', 'this', 'that'],
              correctAnswerIndex: 0,
              explanation: "Osmondagi (uzoq) ko'plik chiroqlar: those lights.",
            },
          ],
        },
      },
    ],
  },
  {
    id: 'en-a1-u1-l4',
    courseId: 'english-a1',
    unitId: 'en-a1-u1',
    unitTitle: 'Unit 1: Essentials & Greetings',
    language: 'en',
    level: 'A1',
    lessonNumber: 117,
    title: 'Articles: A, An, The (Foundations)',
    description:
      "Noaniq (A, An) va aniq (The) artikllarni tovushlar va qoidalar asosida to'g'ri qo'llash.",
    estimatedDurationMinutes: 15,
    icon: '🔤',
    steps: [
      {
        id: 'en-a1-u1-l4-s1',
        title: 'Artikllar Qoidasi va Tovushlar',
        type: 'learn',
        estimatedMinutes: 5,
        learnData: {
          title: "A, An va The Artikllarini To'g'ri Qo'llash",
          subtitle: 'Unit 1 • 4-Dars: Tovush qoidalari va aniqlik kategoriyasi',
          explanation:
            "O'zbek tilida artikl umuman mavjud emas, shu sababli bu mavzu o'zbek o'quvchilari uchun eng ko'p e'tibor talab qiladigan sohadir. Ingliz tilida sanoqli birlik ot oldidan doim artikl bo'lishi kerak. A va An tanlovi harfga emas, balki so'zning boshidagi TOVUSHGA bog'liq!",
          keyPoints: [
            'A -> Undosh tovush oldidan: a car, a book, a student, a university (/j/ tovushi!)',
            "AN -> Unli tovush oldidan: an apple, an engineer, an hour (h o'qilmaydi, /aʊ/ tovushi!)",
            "THE -> Aniq, oldin aytilgan yoki dunyoda yagona bo'lgan narsalar: the sun, the moon, the capital",
            'Kasblar bilan doim: I am A teacher; She is AN architect',
            '⚠️ Oltin qoida: "He is doctor" deb bo\'lmaydi! Doim "He is A doctor" deyiladi.',
          ],
          vocabulary: [
            {
              term: 'Apple',
              reading: '/ˈæp.əl/',
              meaning: 'Olma (unli tovush oldidan: an apple)',
              exampleSentence: 'I eat an apple every morning for breakfast.',
              exampleTranslation: 'Men har kuni nonushtaga bitta olma yeyman.',
            },
            {
              term: 'University',
              reading: '/ˌjuː.nɪˈvɜː.sə.ti/',
              meaning: 'Universitet (/j/ undosh tovushi: a university)',
              exampleSentence: 'She is a student at a top international university.',
              exampleTranslation: 'U nufuzli xalqaro universitetda talaba.',
            },
            {
              term: 'Hour',
              reading: '/aʊər/',
              meaning: "Soat (vaqt o'lchovi; unli tovush: an hour)",
              exampleSentence: 'The speaking mock test takes an hour.',
              exampleTranslation: 'Speaking mock testi bir soat davom etadi.',
            },
            {
              term: 'Doctor',
              reading: '/ˈdɒk.tər/',
              meaning: 'Shifokor, doktor',
              exampleSentence: 'My father is a doctor at the central hospital.',
              exampleTranslation: 'Otam markaziy shifoxonada shifokor.',
            },
            {
              term: 'Engineer',
              reading: '/ˌen.dʒɪˈnɪər/',
              meaning: 'Muhandis (unli tovush: an engineer)',
              exampleSentence: 'Rustam is an experienced software engineer.',
              exampleTranslation: "Rustam tajribali dasturiy ta'minot muhandisi.",
            },
            {
              term: 'Sun',
              reading: '/sʌn/',
              meaning: 'Quyosh (yagona narsa: the sun)',
              exampleSentence: 'The sun is shining brightly today.',
              exampleTranslation: 'Bugun quyosh charoqlab porlamoqda.',
            },
            {
              term: 'World',
              reading: '/wɜːld/',
              meaning: 'Dunyo, olam (yagona: the world)',
              exampleSentence: 'English is spoken all over the world.',
              exampleTranslation: "Ingliz tili butun dunyo bo'ylab gapiriladi.",
            },
            {
              term: 'Apartment',
              reading: '/əˈpɑːt.mənt/',
              meaning: 'Kvartira, xonadon (unli: an apartment)',
              exampleSentence: 'I live in an apartment in the city center.',
              exampleTranslation: 'Men shahar markazidagi kvartirada yashayman.',
            },
          ],
          grammarRules: [
            {
              pattern: 'a + Consonant Sound | an + Vowel Sound | the + Specific / Unique Noun',
              meaning:
                "Noaniq (birinchi marta eslatilgan) va aniq (yagona yoki ma'lum) otlarni belgilash",
              usageNotes:
                "Muhim: Tovushga e'tibor bering! 'University' harfi unli (u) bo'lsa ham, tovushi /j/ (undosh) bo'lgani uchun 'a university'. 'Hour' harfi undosh (h) bo'lsa ham, tovushi /aʊ/ (unli) bo'lgani uchun 'an hour'.",
              examples: [
                {
                  sentence: 'I bought a book yesterday. The book is very interesting.',
                  translation: "Men kecha kitob sotib oldim. Kitob (o'sha kitob) juda qiziqarli.",
                },
                {
                  sentence: 'He is an honest man who works as a teacher.',
                  translation: "U o'qituvchi bo'lib ishlaydigan halol inson.",
                },
              ],
            },
          ],
          culturalNotes:
            '🎙️ IELTS Speaking Part 1 Foundation Corner:\nImtihon oluvchi: "Do you live in a house or an apartment?"\nNamunaviy javob: "I live in an apartment in Tashkent. It is on the fifth floor of a modern building, and the view from the balcony is wonderful."',
        },
      },
      {
        id: 'en-a1-u1-l4-s2',
        title: 'Interaktiv Amaliy Mashq',
        type: 'practice',
        estimatedMinutes: 5,
        practiceData: {
          instructions: "Tovush va aniqlik qoidalariga binoan to'g'ri artiklni tanlang.",
          exercises: [
            {
              id: 'en-a1-u1-l4-e1',
              type: 'multiple-choice',
              prompt:
                '"She wants to become _______ architect in the future." Qaysi artikl to\'g\'ri?',
              options: ['an', 'a', 'the', '— (no article)'],
              correctAnswer: 0,
              explanation: '"Architect" unli /ɑː/ tovushi bilan boshlanadi: an architect.',
            },
            {
              id: 'en-a1-u1-l4-e2',
              type: 'multiple-choice',
              prompt:
                '"It takes _______ hour to complete the reading section." Qaysi variant to\'g\'ri?',
              options: ['an', 'a', 'the', 'two'],
              correctAnswer: 0,
              explanation:
                "\"Hour\" so'zidagi 'h' o'qilmaydi, unli tovush /aʊ/ bilan boshlanadi: an hour.",
            },
            {
              id: 'en-a1-u1-l4-e3',
              type: 'multiple-choice',
              prompt: '"He studies at _______ university in London." Qaysi variant to\'g\'ri?',
              options: ['a', 'an', 'the', '—'],
              correctAnswer: 0,
              explanation: '"University" so\'zi /j/ undosh tovushi bilan boshlanadi: a university.',
            },
            {
              id: 'en-a1-u1-l4-e4',
              type: 'multiple-choice',
              prompt: '"_______ moon moves around the Earth." Qaysi artikl to\'g\'ri?',
              options: ['The', 'A', 'An', 'Those'],
              correctAnswer: 0,
              explanation:
                'Oy (moon) va Yer (Earth) koinotda yagona bo\'lgani uchun "The" olinadi.',
            },
            {
              id: 'en-a1-u1-l4-e5',
              type: 'multiple-choice',
              prompt: 'Qaysi gapda artikl XATO ishlatilgan?',
              options: [
                'She is a doctor.',
                'He is an teacher.',
                'I have an apple.',
                'The sun is bright.',
              ],
              correctAnswer: 1,
              explanation:
                '"Teacher" /t/ undosh tovush bilan boshlanadi, shuning uchun "a teacher" bo\'lishi shart.',
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-l4-s3',
        title: 'Dars Sinov Testi',
        type: 'test',
        estimatedMinutes: 5,
        testData: {
          instructions: 'Savollarga javob berib, darsni yakunlang.',
          passingScorePercentage: 80,
          questions: [
            {
              id: 'en-a1-u1-l4-q1',
              question: 'My father works as _______ engineer at an IT firm.',
              options: ['an', 'a', 'the', 'no article'],
              correctAnswerIndex: 0,
              explanation: 'Engineer unli tovush bilan boshlangani uchun: an engineer.',
            },
            {
              id: 'en-a1-u1-l4-q2',
              question: 'Can I ask _______ quick question, please?',
              options: ['a', 'an', 'the', 'these'],
              correctAnswerIndex: 0,
              explanation: 'Quick undosh bilan boshlanadi: a quick question.',
            },
            {
              id: 'en-a1-u1-l4-q3',
              question: 'We visited _______ capital of France last summer.',
              options: ['the', 'a', 'an', 'this'],
              correctAnswerIndex: 0,
              explanation: 'Fransiyaning poytaxti aniq bitta (Parij), shuning uchun: the capital.',
            },
            {
              id: 'en-a1-u1-l4-q4',
              question: 'She lives in _______ modern apartment with two rooms.',
              options: ['a', 'an', 'the', 'these'],
              correctAnswerIndex: 0,
              explanation: 'Modern undosh tovush /m/ bilan boshlanadi: a modern apartment.',
            },
            {
              id: 'en-a1-u1-l4-q5',
              question: 'He has _______ uniform for school.',
              options: ['a', 'an', 'the', 'these'],
              correctAnswerIndex: 0,
              explanation: 'Uniform /j/ undosh tovush bilan boshlanadi: a uniform.',
            },
          ],
        },
      },
    ],
  },
  {
    id: 'en-a1-u1-l5',
    courseId: 'english-a1',
    unitId: 'en-a1-u1',
    unitTitle: 'Unit 1: Essentials & Greetings',
    language: 'en',
    level: 'A1',
    lessonNumber: 118,
    title: "Possessives: My, Your, His, Her & 's",
    description:
      "Egalik olmoshlari (my, your, his, her, our, their) va kishilik egalik qo'shimchasi ('s) bilan to'g'ri munosabat qurish.",
    estimatedDurationMinutes: 15,
    icon: '🏷️',
    steps: [
      {
        id: 'en-a1-u1-l5-s1',
        title: 'Egalik Shakllari & Qoidalar',
        type: 'learn',
        estimatedMinutes: 5,
        learnData: {
          title: "Egalik Olmoshlari va 's Qo'shimchasi",
          subtitle: 'Unit 1 • 5-Dars: Narsalarning kimga tegishli ekanligini ifodalash',
          explanation:
            "Ingliz tilida narsalarning kimga tegishli ekanligini aytish uchun ikki asosiy usuldan foydalanamiz: egalik olmoshlari (my, your, his, her, our, their) hamda shaxs ismlariga qo'shiladigan \" 's \" qo'shimchasi.",
          keyPoints: [
            'My (mening) | Your (sening / sizning)',
            'His (uning — erkak kishiga!) | Her (uning — ayol kishiga!) | Its (uning — jonsiz/hayvon)',
            'Our (bizning) | Their (ularning)',
            "Egalik 's: Davron's book (Davronning kitobi), My sister's name (Singlimning ismi)",
            '⚠️ O\'zbek tili bilan farqi: O\'zbek tilida erkak va ayolga birdek "uning" deyiladi. Ingliz tilida adashmang: John -> HIS name; Mary -> HER name!',
            '⚠️ Tipik xato: "Her name is John" (XATO) -> "His name is John" (TO\'G\'RI).',
          ],
          vocabulary: [
            {
              term: 'My',
              reading: '/maɪ/',
              meaning: 'Mening',
              exampleSentence: 'My favorite subject is English.',
              exampleTranslation: 'Mening sevimli fanim ingliz tili.',
            },
            {
              term: 'Your',
              reading: '/jɔːr/',
              meaning: 'Sening / Sizning',
              exampleSentence: 'What is your target IELTS score?',
              exampleTranslation: 'Sizning maqsadli IELTS balingiz necha?',
            },
            {
              term: 'His',
              reading: '/hɪz/',
              meaning: 'Uning (erkak kishi)',
              exampleSentence: 'His father is a high school teacher.',
              exampleTranslation: "Uning otasi yuqori sinf o'qituvchisi.",
            },
            {
              term: 'Her',
              reading: '/hɜːr/',
              meaning: 'Uning (ayol kishi)',
              exampleSentence: 'Her pronunciation is very clear.',
              exampleTranslation: 'Uning talaffuzi juda aniq va ravon.',
            },
            {
              term: 'Our',
              reading: '/aʊər/',
              meaning: 'Bizning',
              exampleSentence: 'Our study group practices speaking every day.',
              exampleTranslation: "Bizning o'quv guruhimiz har kuni speaking mashq qiladi.",
            },
            {
              term: 'Their',
              reading: '/ðeər/',
              meaning: 'Ularning',
              exampleSentence: 'Their apartment is close to the station.',
              exampleTranslation: 'Ularning xonadoni bekatga yaqin.',
            },
            {
              term: 'Family',
              reading: '/ˈfæm.əl.i/',
              meaning: 'Oila',
              exampleSentence: 'My family is very supportive of my goals.',
              exampleTranslation: "Oilam mening maqsadlarimni juda qo'llab-quvvatlaydi.",
            },
            {
              term: 'Passport',
              reading: '/ˈpɑːs.pɔːt/',
              meaning: 'Pasport',
              exampleSentence: 'Do not forget your passport for the IELTS test.',
              exampleTranslation: 'IELTS testi uchun pasportingizni unutmang.',
            },
          ],
          grammarRules: [
            {
              pattern: "Possessive Determiner + Noun | Person's + Noun",
              meaning: 'Mulkiy egalik va munosabatlarni aniqlash',
              usageNotes:
                "Egalik olmoshlaridan keyin doim ot keladi (my book, her car). 's qo'shimchasi shaxs ismiga qo'shiladi: Anna's bag (Annaning sumkasi).",
              examples: [
                {
                  sentence: "This is Alex's notebook, and that is his laptop.",
                  translation: 'Bu Aleksning daftari, ana u esa uning noutbuki.',
                },
                {
                  sentence: 'Our teacher always checks our homework carefully.',
                  translation: "Bizning o'qituvchimiz uy vazifamizni doim diqqat bilan tekshiradi.",
                },
              ],
            },
          ],
          culturalNotes:
            '🎙️ IELTS Speaking Part 1 Foundation Corner:\nImtihon oluvchi: "Tell me about a close friend of yours."\nNamunaviy javob: "My best friend is Jasur. His personality is very friendly and energetic. Our friendship started at university, and we often practice English together."',
        },
      },
      {
        id: 'en-a1-u1-l5-s2',
        title: 'Interaktiv Amaliy Mashq',
        type: 'practice',
        estimatedMinutes: 5,
        practiceData: {
          instructions: "Gaplarga mos to'g'ri egalik olmoshini tanlang.",
          exercises: [
            {
              id: 'en-a1-u1-l5-e1',
              type: 'multiple-choice',
              prompt:
                '"Davron is studying hard. _______ goal is to get IELTS 7.5." Qaysi olmosh to\'g\'ri?',
              options: ['His', 'Her', 'Their', 'My'],
              correctAnswer: 0,
              explanation: 'Davron erkak kishi bo\'lgani uchun "His" (uning) ishlatiladi.',
            },
            {
              id: 'en-a1-u1-l5-e2',
              type: 'multiple-choice',
              prompt: '"Madina is an architect. _______ office is located in downtown Tashkent."',
              options: ['Her', 'His', 'Their', 'Our'],
              correctAnswer: 0,
              explanation: "Madina ayol kishi bo'lgani sababli \"Her\" to'g'ri.",
            },
            {
              id: 'en-a1-u1-l5-e3',
              type: 'multiple-choice',
              prompt: '"We love _______ English teacher because she explains everything clearly."',
              options: ['our', 'we', 'us', 'their'],
              correctAnswer: 0,
              explanation: '"We" (biz) ning egalik shakli: our (bizning).',
            },
            {
              id: 'en-a1-u1-l5-e4',
              type: 'multiple-choice',
              prompt: '"This is my _______ car." (Akamning mashinasi)',
              options: ["brother's", 'brothers', 'brother', 'brother is'],
              correctAnswer: 0,
              explanation: "Egalikni bildirish uchun 's qo'shiladi: brother's car.",
            },
            {
              id: 'en-a1-u1-l5-e5',
              type: 'multiple-choice',
              prompt: '"The students are preparing _______ presentations for class tomorrow."',
              options: ['their', 'there', 'they', 'them'],
              correctAnswer: 0,
              explanation: 'The students (ular) ning egalik shakli: their (ularning).',
            },
          ],
        },
      },
      {
        id: 'en-a1-u1-l5-s3',
        title: 'Dars Sinov Testi',
        type: 'test',
        estimatedMinutes: 5,
        testData: {
          instructions: 'Savollarga javob bering va Unit 1 ni muvaffaqiyatli yakunlang.',
          passingScorePercentage: 80,
          questions: [
            {
              id: 'en-a1-u1-l5-q1',
              question: 'Sarah left _______ bag in the library yesterday.',
              options: ['her', 'his', 'its', 'their'],
              correctAnswerIndex: 0,
              explanation: 'Sarah ayol kishi: her bag.',
            },
            {
              id: 'en-a1-u1-l5-q2',
              question: 'Is this _______ passport on the registration desk, David?',
              options: ['your', 'you', 'yours', 'he'],
              correctAnswerIndex: 0,
              explanation: 'Sizning / sening pasporting: your passport.',
            },
            {
              id: 'en-a1-u1-l5-q3',
              question: 'Jack and Jill live with _______ parents in London.',
              options: ['their', 'there', 'they', 'them'],
              correctAnswerIndex: 0,
              explanation: 'Jack and Jill (ular) ning ota-onasi: their parents.',
            },
            {
              id: 'en-a1-u1-l5-q4',
              question: 'What is your _______ occupation? (Otangizning kasbi)',
              options: ["father's", 'fathers', 'father', 'father is'],
              correctAnswerIndex: 0,
              explanation: "Otangizning: father's.",
            },
            {
              id: 'en-a1-u1-l5-q5',
              question: 'We really enjoy _______ lessons at IELTS Talk platform.',
              options: ['our', 'us', 'we', 'they'],
              correctAnswerIndex: 0,
              explanation: 'Bizning darslarimiz: our lessons.',
            },
          ],
        },
      },
    ],
  },
  {
    id: 'en-a1-u2-l1',
    courseId: 'english-a1',
    unitId: 'en-a1-u2',
    unitTitle: 'Unit 2: Family & Everyday Life',
    language: 'en',
    level: 'A1',
    lessonNumber: 1,
    title: 'Family & People (Describing Family)',
    description: "Oila a'zolarini nomlash, oilaviy munosabatlar va shaxslarni tavsiflash.",
    estimatedDurationMinutes: 15,
    icon: '👨‍👩‍👧‍👦',
    steps: [
      {
        id: 'en-a1-u2-l1-s1',
        title: 'Oila Leksikasi & Grammatik Asos',
        type: 'learn',
        estimatedMinutes: 5,
        learnData: {
          title: "Oila A'zolari va Egalik Konstruksiyalari",
          subtitle: 'Unit 2 • 1-Dars: Oila va yaqin insonlar haqida gapirish',
          explanation:
            "Oila va qarindoshlik rishtalari haqida gapirish har qanday tilda, xususan IELTS Speaking Part 1 imtihonida eng ko'p uchraydigan mavzulardan biridir. Ingliz tilida oila haqida gapirishda \"have / has\" (ega bo'lmoq) fe'li va sifatlar keng qo'llaniladi.",
          keyPoints: [
            'Parents — Ota-ona (Father + Mother)',
            'Siblings — Aka-uka va opa-singillar',
            'I have a brother / She has two sisters (3-shaxsda has!)',
            'O\'zbek tili bilan farqi: O\'zbekcha "Mening akam bor" inglizcha "I have a brother" shaklida ifodalanadi',
            '⚠️ Keng tarqalgan xato: "I have two sister" (XATO) -> "I have two sisters" (TO\'G\'RI, -s qo\'shiladi)',
            '⚠️ 3-shaxsda have emas, HAS bo\'ladi: "My mother HAS two brothers"',
          ],
          vocabulary: [
            {
              term: 'Father',
              reading: '/ˈfɑː.ðər/',
              meaning: 'Ota, dada',
              exampleSentence: 'My father is a kind and hardworking person.',
              exampleTranslation: 'Mening otam mehribon va mehnatkash inson.',
            },
            {
              term: 'Mother',
              reading: '/ˈmʌð.ər/',
              meaning: 'Ona, oyi',
              exampleSentence: 'My mother teaches mathematics at school.',
              exampleTranslation: 'Mening onam maktabda matematika fanidan dars beradi.',
            },
            {
              term: 'Parents',
              reading: '/ˈpeə.rənts/',
              meaning: "Ota-ona (doim ko'plikda)",
              exampleSentence: 'My parents live in a quiet neighborhood in Samarkand.',
              exampleTranslation: 'Ota-onam Samarqanddagi sokin mahallada yashaydilar.',
            },
            {
              term: 'Brother',
              reading: '/ˈbrʌð.ər/',
              meaning: 'Aka yoki uka',
              exampleSentence: 'I have an elder brother who works in IT.',
              exampleTranslation: 'Mening IT sohasida ishlaydigan katta akam bor.',
            },
            {
              term: 'Sister',
              reading: '/ˈsɪs.tər/',
              meaning: 'Opa yoki singil',
              exampleSentence: 'Her younger sister is learning English online.',
              exampleTranslation: "Uning singlisi ingliz tilini onlayn o'rganmoqda.",
            },
            {
              term: 'Children',
              reading: '/ˈtʃɪl.drən/',
              meaning: "Bolalar, farzandlar (Child so'zining ko'pligi)",
              exampleSentence: 'They have three intelligent children.',
              exampleTranslation: 'Ularning uchta aqli farzandi bor.',
            },
            {
              term: 'Large family',
              reading: '/lɑːdʒ ˈfæm.əl.i/',
              meaning: 'Katta oila',
              exampleSentence: 'Growing up in a large family is very lively.',
              exampleTranslation: "Katta oilada ulg'ayish juda quvnoq va jonli.",
            },
            {
              term: 'Together',
              reading: '/təˈɡeð.ər/',
              meaning: 'Birgalikda, birga',
              exampleSentence: 'Our family always has dinner together.',
              exampleTranslation: 'Bizning oilamiz doimo birga kechki ovqat tanovul qiladi.',
            },
          ],
          grammarRules: [
            {
              pattern: 'Subject + have / has + Noun Phrase',
              meaning: "Oila a'zolari yoki qarindoshlik rishtalariga egalikni ifodalash",
              usageNotes: 'I / You / We / They bilan HAVE; He / She / It bilan HAS ishlatiladi.',
              examples: [
                {
                  sentence: 'I have two brothers and one sister.',
                  translation: 'Mening ikkita akam va bitta singlim bor.',
                },
                {
                  sentence: 'He has a very supportive family.',
                  translation: "Uning juda qo'llab-quvvatlovchi oilasi bor.",
                },
              ],
            },
          ],
          culturalNotes:
            '🎙️ IELTS Speaking Part 1 Foundation Corner:\nImtihon oluvchi: "Do you have a large family or a small family?"\nNamunaviy javob: "I come from a relatively large family with five members: my parents, my two younger brothers, and myself. We are very close and support each other in everything."',
        },
      },
      {
        id: 'en-a1-u2-l1-s2',
        title: 'Interaktiv Amaliy Mashq',
        type: 'practice',
        estimatedMinutes: 5,
        practiceData: {
          instructions: "Oila a'zolari va grammatika qoidalariga binoan to'g'ri javobni tanlang.",
          exercises: [
            {
              id: 'en-a1-u2-l1-e1',
              type: 'multiple-choice',
              prompt: "\"Ota-ona\" so'zining to'g'ri inglizcha tarjimasi qaysi?",
              options: ['Parents', 'Partners', 'Cousins', 'Children'],
              correctAnswer: 0,
              explanation: 'Parents — Ota-ona.',
            },
            {
              id: 'en-a1-u2-l1-e2',
              type: 'multiple-choice',
              prompt:
                "\"She _______ two younger brothers and one sister.\" Bo'sh joyga qaysi fe'l to'g'ri keladi?",
              options: ['has', 'have', 'is', 'are'],
              correctAnswer: 0,
              explanation: '"She" birlikda bo\'lgani sababli "has" fe\'li ishlatiladi.',
            },
            {
              id: 'en-a1-u2-l1-e3',
              type: 'multiple-choice',
              prompt: "\"Child\" (bola) so'zining to'g'ri ko'plik shakli qaysi?",
              options: ['Children', 'Childs', 'Childes', 'Childrens'],
              correctAnswer: 0,
              explanation: "Child noto'g'ri ot bo'lib, ko'pligi \"children\" shaklida yasaladi.",
            },
            {
              id: 'en-a1-u2-l1-e4',
              type: 'multiple-choice',
              prompt: "Qaysi gap grammatik jihatdan to'g'ri tuzilgan?",
              options: [
                'My brother has two laptops.',
                'My brother have two laptops.',
                'My brother is two laptops.',
                'My brother having two laptops.',
              ],
              correctAnswer: 0,
              explanation: '"My brother" (He) bilan "has" fe\'li to\'g\'ri.',
            },
            {
              id: 'en-a1-u2-l1-e5',
              type: 'multiple-choice',
              prompt: '"We always spend our Sunday holidays _______." (Birgalikda)',
              options: ['together', 'alone', 'each', 'between'],
              correctAnswer: 0,
              explanation: 'Together — Birgalikda, birga.',
            },
          ],
        },
      },
      {
        id: 'en-a1-u2-l1-s3',
        title: 'Dars Sinov Testi',
        type: 'test',
        estimatedMinutes: 5,
        testData: {
          instructions: 'Savollarga javob berib, mavzuni mustahkamlang.',
          passingScorePercentage: 80,
          questions: [
            {
              id: 'en-a1-u2-l1-q1',
              question: 'How many siblings _______ you have?',
              options: ['do', 'does', 'are', 'is'],
              correctAnswerIndex: 0,
              explanation:
                '"You" bilan so\'roq shaklida "do" yordamchi fe\'li ishlatiladi: Do you have...?',
            },
            {
              id: 'en-a1-u2-l1-q2',
              question: 'My _______ are retired; they live in the countryside.',
              options: ['parents', 'parent', 'father', 'mother'],
              correctAnswerIndex: 0,
              explanation: 'Fe\'l "are" ko\'plikda, shuning uchun "parents" (ota-ona) to\'g\'ri.',
            },
            {
              id: 'en-a1-u2-l1-q3',
              question: 'Jasur has three _______: two boys and one girl.',
              options: ['children', 'childs', 'child', 'childrens'],
              correctAnswerIndex: 0,
              explanation: 'Uchta bola: three children.',
            },
            {
              id: 'en-a1-u2-l1-q4',
              question: 'Anna lives with _______ family in a cozy house.',
              options: ['her', 'his', 'its', 'their'],
              correctAnswerIndex: 0,
              explanation: "Anna ayol kishi bo'lgani sababli: her family.",
            },
            {
              id: 'en-a1-u2-l1-q5',
              question: 'I have two _______ and they both study medicine.',
              options: ['sisters', 'sister', 'sisteres', 'sisteris'],
              correctAnswerIndex: 0,
              explanation: 'Ikkita singil/opa: two sisters.',
            },
          ],
        },
      },
    ],
  },
  {
    id: 'en-a1-u2-l2',
    courseId: 'english-a1',
    unitId: 'en-a1-u2',
    unitTitle: 'Unit 2: Family & Everyday Life',
    language: 'en',
    level: 'A1',
    lessonNumber: 2,
    title: 'Colors & Clothes (Adjective + Noun)',
    description: 'Ranglar, kundalik kiyim-kechaklar va sifatlarning ot oldidan kelishi qoidasi.',
    estimatedDurationMinutes: 15,
    icon: '👕',
    steps: [
      {
        id: 'en-a1-u2-l2-s1',
        title: 'Ranglar va Kiyimlar Leksikasi',
        type: 'learn',
        estimatedMinutes: 5,
        learnData: {
          title: 'Ranglar, Kiyimlar va Sifat Qoidalari',
          subtitle: "Unit 2 • 2-Dars: Kiyinish uslubi va sifatlarning o'rni",
          explanation:
            "Ingliz tilida sifatlar (ranglar, o'lchamlar) doimo OTNING OLDIDA keladi va HECH QACHON ko'plik qo'shimchasini olmaydi. Shuningdek, shim (trousers), jinsi (jeans) kabi kiyimlar ingliz tilida doim ko'plikda hisoblanadi.",
          keyPoints: [
            "Sifat + Ot: a blue shirt (bitta ko'k ko'ylak), blue shirts (ko'k ko'ylaklar — blues shirts emas!)",
            "Shim va jinsi doim ko'plik: trousers are, jeans are",
            "Wear fe'li: I wear a jacket (Men kurtka kiyib yuraman)",
            '⚠️ Keng tarqalgan xato: "My jeans is blue" (XATO) -> "My jeans ARE blue" (TO\'G\'RI)',
            '⚠️ Sifatga -s qo\'shilmaydi: "blacks shoes" emas, "black shoes" bo\'ladi',
          ],
          vocabulary: [
            {
              term: 'Shirt',
              reading: '/ʃɜːt/',
              meaning: "Ko'ylak (erkaklar tugmali ko'ylagi)",
              exampleSentence: 'He wears a white shirt for the official interview.',
              exampleTranslation: "U rasmiy suhbat uchun oq ko'ylak kiyadi.",
            },
            {
              term: 'T-shirt',
              reading: '/ˈtiː.ʃɜːt/',
              meaning: 'Futbolka',
              exampleSentence: 'I like wearing a casual cotton T-shirt in summer.',
              exampleTranslation: 'Yozda qulay paxtali futbolka kiyishni yoqtiraman.',
            },
            {
              term: 'Trousers',
              reading: '/ˈtraʊ.zəz/',
              meaning: "Shim (doim ko'plik shaklda)",
              exampleSentence: 'These black trousers fit me perfectly.',
              exampleTranslation: 'Bu qora shim menga juda mos tushdi.',
            },
            {
              term: 'Jeans',
              reading: '/dʒiːnz/',
              meaning: "Jinsi shim (doim ko'plikda)",
              exampleSentence: 'Dark blue jeans are very popular among youth.',
              exampleTranslation: "To'q ko'k jinsilar yoshlar orasida juda ommabop.",
            },
            {
              term: 'Jacket',
              reading: '/ˈdʒæk.ɪt/',
              meaning: 'Kurtka, pidjak',
              exampleSentence: 'It is chilly outside, please put on your warm jacket.',
              exampleTranslation: 'Tashqarida salqin, iliq kurtkangizni kiyib oling.',
            },
            {
              term: 'Shoes',
              reading: '/ʃuːz/',
              meaning: "Poyabzal, tufli (ko'plikda)",
              exampleSentence: 'My running shoes are very comfortable.',
              exampleTranslation: 'Mening yugurish poyabzalim juda qulay.',
            },
            {
              term: 'Blue',
              reading: '/bluː/',
              meaning: "Ko'k, moviy rang",
              exampleSentence: 'The sky is bright blue today.',
              exampleTranslation: "Bugun osmon musaffo ko'k rangda.",
            },
            {
              term: 'Wear',
              reading: '/weər/',
              meaning: 'Kiyib yurmoq, taqmoq',
              exampleSentence: 'What do you usually wear on formal occasions?',
              exampleTranslation: 'Rasmiy tadbirlarda odatda nima kiyasiz?',
            },
          ],
          grammarRules: [
            {
              pattern: 'Adjective + Noun (No plural -s on adjectives!)',
              meaning: "Rang va xususiyatlarni ot bilan bog'lash",
              usageNotes:
                "Sifat hech qachon ko'plikka kirmaydi: a white shirt -> two white shirts. Kiyim turlari (trousers, jeans, glasses) ko'plik fe'li (are) bilan moslashadi.",
              examples: [
                {
                  sentence: 'She has a stylish red jacket.',
                  translation: 'Uning chiroyli qizil kurtkasi bor.',
                },
                {
                  sentence: 'His trousers are clean and ironed.',
                  translation: 'Uning shimi toza va dazmollangan.',
                },
              ],
            },
          ],
          culturalNotes:
            '🎙️ IELTS Speaking Part 1 Foundation Corner:\nImtihon oluvchi: "What kind of clothes do you usually like to wear?"\nNamunaviy javob: "I usually prefer wearing casual and practical clothes, like a plain T-shirt and comfortable blue jeans with sneakers. When I attend formal exams or meetings, I choose a classic white shirt and dark trousers."',
        },
      },
      {
        id: 'en-a1-u2-l2-s2',
        title: 'Interaktiv Amaliy Mashq',
        type: 'practice',
        estimatedMinutes: 5,
        practiceData: {
          instructions: "Ranglar va kiyimlar grammatikasi bo'yicha to'g'ri variantni tanlang.",
          exercises: [
            {
              id: 'en-a1-u2-l2-e1',
              type: 'multiple-choice',
              prompt:
                "\"His blue trousers _______ very modern.\" Bo'sh joyga qaysi fe'l to'g'ri keladi?",
              options: ['are', 'is', 'am', 'be'],
              correctAnswer: 0,
              explanation:
                '"Trousers" (shim) ingliz tilida grammatik jihatdan doim ko\'plikda hisoblanadi: are.',
            },
            {
              id: 'en-a1-u2-l2-e2',
              type: 'multiple-choice',
              prompt: "Qaysi so'z birikmasi to'g'ri yozilgan?",
              options: [
                'two black jackets',
                'two blacks jackets',
                'two black jacket',
                'two jackets black',
              ],
              correctAnswer: 0,
              explanation:
                "Sifatga (black) hech qachon -s qo'shilmaydi, faqat otga (jackets) qo'shiladi: two black jackets.",
            },
            {
              id: 'en-a1-u2-l2-e3',
              type: 'multiple-choice',
              prompt: '"I want to buy a pair of _______ for running."',
              options: ['shoes', 'a shoe', 'shoeses', 'shoen'],
              correctAnswer: 0,
              explanation: 'A pair of shoes — Bir juft poyabzal.',
            },
            {
              id: 'en-a1-u2-l2-e4',
              type: 'multiple-choice',
              prompt: '"What do you usually _______ to work? — A white shirt and a tie."',
              options: ['wear', 'put', 'carry', 'hold'],
              correctAnswer: 0,
              explanation: 'Kiyib yurmoq — to wear.',
            },
            {
              id: 'en-a1-u2-l2-e5',
              type: 'multiple-choice',
              prompt: 'Qaysi gapda xatolik bor?',
              options: [
                'My jeans is in the wardrobe.',
                'My jeans are in the wardrobe.',
                'She wears a blue dress.',
                'They have warm jackets.',
              ],
              correctAnswer: 0,
              explanation:
                '"My jeans is..." xato, chunki jeans ko\'plikda bo\'lib "are" talab qiladi.',
            },
          ],
        },
      },
      {
        id: 'en-a1-u2-l2-s3',
        title: 'Dars Sinov Testi',
        type: 'test',
        estimatedMinutes: 5,
        testData: {
          instructions: 'Savollarga javob bering va darsni yakunlang.',
          passingScorePercentage: 80,
          questions: [
            {
              id: 'en-a1-u2-l2-q1',
              question: 'She bought two _______ yesterday at the shopping mall.',
              options: ['white shirts', 'whites shirts', 'white shirt', 'shirts white'],
              correctAnswerIndex: 0,
              explanation: "Sifat o'zgarmas qoladi, ot ko'plikka kiradi: white shirts.",
            },
            {
              id: 'en-a1-u2-l2-q2',
              question: 'These jeans _______ very comfortable for long walks.',
              options: ['are', 'is', 'am', 'be'],
              correctAnswerIndex: 0,
              explanation: "Jeans doim ko'plik fe'li (are) bilan keladi.",
            },
            {
              id: 'en-a1-u2-l2-q3',
              question: 'He always wears _______ dark jacket in winter.',
              options: ['a', 'an', 'these', 'two'],
              correctAnswerIndex: 0,
              explanation: 'Dark undosh tovush bilan boshlangani uchun: a dark jacket.',
            },
            {
              id: 'en-a1-u2-l2-q4',
              question: 'Where _______ my sports shoes?',
              options: ['are', 'is', 'am', 'does'],
              correctAnswerIndex: 0,
              explanation: "Shoes ko'plikda: Where are...?",
            },
            {
              id: 'en-a1-u2-l2-q5',
              question: "\"Poyabzal\" so'zining to'g'ri inglizcha varianti qaysi?",
              options: ['Shoes', 'Shirt', 'Trousers', 'Jacket'],
              correctAnswerIndex: 0,
              explanation: 'Shoes — Poyabzal.',
            },
          ],
        },
      },
    ],
  },
  {
    id: 'en-a1-u3-l1',
    courseId: 'english-a1',
    unitId: 'en-a1-u3',
    unitTitle: 'Unit 3: Time, Food & Routines',
    language: 'en',
    level: 'A1',
    lessonNumber: 1,
    title: 'Telling Time & Daily Routines',
    description:
      'Soatni aniq va tushunarli aytish, vaqt predloglari (at, in, on) hamda kun tartibini ifodalash.',
    estimatedDurationMinutes: 14,
    icon: '⏰',
    steps: [
      {
        id: 'en-a1-u3-l1-s1',
        title: 'Vaqt va Kun Tartibi Asoslari',
        type: 'learn',
        estimatedMinutes: 5,
        learnData: {
          title: 'What time is it? & Daily Habits',
          explanation:
            'Ingliz tilida vaqtni aytish va kunlik jadvalni ifodalash:\n\n1. Vaqtni aytishning 2 xil usuli bor:\n- Oddiy / Raqamli usul (Digital): Soat va minut ketma-ket aytiladi.\n  • 7:15 -> "It is seven fifteen."\n  • 8:30 -> "It is eight thirty."\n  • 9:45 -> "It is nine forty-five."\n- An\'anaviy usul (Past & To):\n  • O\'tgan minutlar uchun (1-30 minut): PAST (It is ten past eight - 8 dan 10 minut o\'tdi).\n  • Qolgan minutlar uchun (31-59 minut): TO (It is twenty to nine - 9 ga 20 minut qoldi).\n  • 15 minut: "quarter" (quarter past seven - 7 dan 15 minut o\'tdi, quarter to eight - 8 ga 15 minut qoldi).\n  • 30 minut: "half" (half past eight - 8:30).\n\n2. Vaqt predloglari (Prepositions of Time):\n- Aniq soat vaqtlari uchun har doim \'AT\' ishlatiladi: at 7 o\'clock, at half past eight, at noon, at midnight.\n- Kun qismlari uchun \'IN\': in the morning, in the afternoon, in the evening (LEKIN: at night).\n- Hafta kunlari uchun \'ON\': on Monday, on Friday morning.\n\n3. O\'zbek o\'rganuvchilari uchun xavfli tuzoqlar (Common Pitfalls):\n- ❌ "I wake up in 7 o\'clock." -> ✅ "I wake up AT 7 o\'clock." (Soat oldidan faqat AT bo\'ladi!).\n- ❌ "What time is?" -> ✅ "What time IS IT?" (Ingliz tilida ega tushib qolmaydi).\n- ❌ "It is half to eight." -> ✅ "It is half PAST seven." (Yarimta o\'tdi deb aytiladi, kam deyilmaydi).\n\n4. IELTS Speaking Part 1 Foundation Corner:\n- Topic: Daily Routine\n- Examiner: "What is your typical daily routine like?"\n- Model Band 6.0+ Answer: "Well, on weekdays, my routine is quite structured. I usually wake up at seven o\'clock, have a quick breakfast, and leave home by quarter past eight to catch the bus."\n- Fluency & Connected Speech Tip: "wake up at" iborasi /weɪ.kʌ.pət/ tarzida tutashtirilib aytiladi.',
          vocabulary: [
            {
              term: "o'clock",
              reading: '/əˈklɒk/',
              meaning: 'aniq soat (faqat butun soatlarda)',
              exampleSentence: "My morning lecture begins at nine o'clock sharp.",
              exampleTranslation: "Mening ertalabki ma'ruzam roppa-rosa soat to'qqizda boshlanadi.",
            },
            {
              term: 'half past',
              reading: '/hɑːf pɑːst/',
              meaning: "yarimta o'tdi (30 daqiqa)",
              exampleSentence: 'We usually meet in the library at half past two.',
              exampleTranslation: 'Biz odatda kutubxonada ikki yarimda uchrashamiz.',
            },
            {
              term: 'quarter to',
              reading: '/ˈkwɔːtə tuː/',
              meaning: '15 daqiqa qoldi (chorak kam)',
              exampleSentence: 'It is quarter to eight; hurry up or we will be late.',
              exampleTranslation: "Sakkizga o'n besh daqiqa qoldi; shoshil, aks holda kechikamiz.",
            },
            {
              term: 'quarter past',
              reading: '/ˈkwɔːtə pɑːst/',
              meaning: "15 daqiqa o'tdi (chorak o'tdi)",
              exampleSentence: 'The express train departs at quarter past six.',
              exampleTranslation:
                "Tezyurar poyezd oltidan o'n besh daqiqa o'tganda yo'lga chiqadi.",
            },
            {
              term: 'wake up',
              reading: '/weɪk ʌp/',
              meaning: "uyg'onmoq",
              exampleSentence: 'I always wake up early, even on Sunday mornings.',
              exampleTranslation: "Men har doim, hatto yakshanba tongida ham erta uyg'onaman.",
            },
            {
              term: 'leave home',
              reading: '/liːv həʊm/',
              meaning: 'uydan chiqib ketmoq',
              exampleSentence: 'He leaves home at half past seven to avoid morning traffic.',
              exampleTranslation:
                'U ertalabki tirbandlikdan qochish uchun yetti yarimda uydan chiqadi.',
            },
            {
              term: 'noon',
              reading: '/nuːn/',
              meaning: 'peshin vaqti (kunduzi soat 12:00)',
              exampleSentence: 'We always take a lunch break at noon.',
              exampleTranslation: 'Biz har doim peshinda tushlik tanaffusiga chiqamiz.',
            },
            {
              term: 'midnight',
              reading: '/ˈmɪdnaɪt/',
              meaning: 'yarim tun (tun soat 00:00)',
              exampleSentence: 'Students should not study until midnight before exams.',
              exampleTranslation:
                'Talabalar imtihondan oldin yarim tungacha dars qilmasliklari kerak.',
            },
          ],
        },
      },
      {
        id: 'en-a1-u3-l1-s2',
        title: 'Vaqt va Jadval Mashqlari',
        type: 'practice',
        estimatedMinutes: 4,
        practiceData: {
          instructions: "To'g'ri soat shakli yoki vaqt predlogini tanlang.",
          exercises: [
            {
              id: 'en-a1-u3-l1-e1',
              type: 'multiple-choice',
              prompt:
                "Qaysi jumla 'Soat sakkizdan o'n besh daqiqa o'tdi' ma'nosini to'g'ri ifodalaydi?",
              options: [
                'It is quarter to eight.',
                'It is quarter past eight.',
                'It is eight quarter.',
                'It is half past eight.',
              ],
              correctAnswer: 1,
              explanation:
                "'Quarter past' 15 daqiqa o'tganini bildiradi. 8:15 -> It is quarter past eight.",
            },
            {
              id: 'en-a1-u3-l1-e2',
              type: 'multiple-choice',
              prompt:
                "Bo'sh joyni to'g'ri predlog bilan to'ldiring: 'My first lesson starts ___ 8:30 AM.'",
              options: ['in', 'on', 'at', 'for'],
              correctAnswer: 2,
              explanation:
                "Aniq soat vaqtlari oldidan har doim 'at' predlogi qo'yiladi (at 8:30 AM).",
            },
            {
              id: 'en-a1-u3-l1-e3',
              type: 'multiple-choice',
              prompt: "7:45 vaqtini an'anaviy usulda qanday aytish to'g'ri?",
              options: [
                'It is quarter to eight.',
                'It is quarter past seven.',
                'It is forty-five past seven.',
                'It is half to eight.',
              ],
              correctAnswer: 0,
              explanation:
                "7:45 bu soat 8 ga 15 minut qolganini bildiradi: 'It is quarter to eight'.",
            },
            {
              id: 'en-a1-u3-l1-e4',
              type: 'multiple-choice',
              prompt:
                "Kun qismi oldidan to'g'ri predlogni tanlang: 'I do my homework ___ the evening.'",
              options: ['at', 'in', 'on', 'to'],
              correctAnswer: 1,
              explanation:
                "Kun qismlari (morning, afternoon, evening) uchun 'in' ishlatiladi: 'in the evening'.",
            },
            {
              id: 'en-a1-u3-l1-e5',
              type: 'multiple-choice',
              prompt: "'What time do you usually wake up?' savoliga eng to'g'ri javobni tanlang:",
              options: [
                "I wake up in seven o'clock.",
                "I wake up at seven o'clock.",
                'I am wake up at seven.',
                "I wakes up on seven o'clock.",
              ],
              correctAnswer: 1,
              explanation:
                "'I wake up at seven o'clock' grammatik jihatdan benuqson: I bilan fe'l o'zgarmaydi va soat oldidan 'at' ishlatiladi.",
            },
          ],
        },
      },
      {
        id: 'en-a1-u3-l1-s3',
        title: 'Dars Testi: Telling Time',
        type: 'test',
        estimatedMinutes: 5,
        testData: {
          instructions: "Savollarga to'g'ri javob berib, mavzuni mustahkamlang.",
          passingScorePercentage: 80,
          questions: [
            {
              id: 'en-a1-u3-l1-q1',
              question: "Vaqtni so'rash uchun eng to'g'ri grammatik savol qaysi?",
              options: [
                'What time is?',
                'What time is it?',
                'What is time it?',
                'How much time is?',
              ],
              correctAnswerIndex: 1,
              explanation:
                "Vaqtni so'rash uchun standart formula: 'What time is it?' yoki 'What's the time?'.",
            },
            {
              id: 'en-a1-u3-l1-q2',
              question: "'Peshin vaqtida' iborasi ingliz tilida qanday ifodalanadi?",
              options: ['in noon', 'on noon', 'at noon', 'to noon'],
              correctAnswerIndex: 2,
              explanation:
                "'Noon' va 'midnight' aniq nuqta vaqtlar hisoblanib, ularning oldidan 'at' keladi (at noon, at midnight).",
            },
            {
              id: 'en-a1-u3-l1-q3',
              question:
                "'U soat 6:30 da uydan chiqadi' jumlasining to'g'ri inglizcha tarjimasi qaysi?",
              options: [
                'He leave home at half past six.',
                'He leaves home at half past six.',
                'He leaves home on six thirty.',
                'He is leave home in half past six.',
              ],
              correctAnswerIndex: 1,
              explanation:
                "'He' uchun fe'lga -s qo'shiladi (leaves) va soat oldidan 'at' qo'yiladi.",
            },
            {
              id: 'en-a1-u3-l1-q4',
              question: "'It is twenty past nine' qaysi raqamli vaqtga to'g'ri keladi?",
              options: ['8:40', '9:20', '9:40', '10:20'],
              correctAnswerIndex: 1,
              explanation: "'Twenty past nine' 9 dan 20 daqiqa o'tganini, ya'ni 9:20 ni bildiradi.",
            },
            {
              id: 'en-a1-u3-l1-q5',
              question:
                "IELTS Speaking: 'When do you usually go to bed?' savoliga qaysi javob tabiiy va grammatik to'g'ri?",
              options: [
                'I go bed on 11.',
                "I normally go to bed at around eleven o'clock.",
                'I am go to bed in midnight.',
                "I goes to bed at 11 o'clock.",
              ],
              correctAnswerIndex: 1,
              explanation:
                "'I normally go to bed at around eleven o'clock' iborasi grammatik jihatdan to'g'ri va 'around' (taxminan) so'zi ravonlik bag'ishlaydi.",
            },
          ],
        },
      },
    ],
  },
  {
    id: 'en-a1-u3-l2',
    courseId: 'english-a1',
    unitId: 'en-a1-u3',
    unitTitle: 'Unit 3: Time, Food & Routines',
    language: 'en',
    level: 'A1',
    lessonNumber: 2,
    title: 'Food, Drinks & Cafe Ordering',
    description:
      'Oziq-ovqat va ichimliklar, sanaladigan/sanalmaydigan otlar hamda kafeda xushmuomala buyurtma berish.',
    estimatedDurationMinutes: 14,
    icon: '☕',
    steps: [
      {
        id: 'en-a1-u3-l2-s1',
        title: 'Oziq-ovqat va Kafeda Muloqot',
        type: 'learn',
        estimatedMinutes: 5,
        learnData: {
          title: 'Countable vs Uncountable Nouns & Polite Ordering',
          explanation:
            'Taomlar va kafeda xushmuomala muloqot qilish qoidalari:\n\n1. Sanaladigan va Sanalmaydigan Otlar (Countable vs Uncountable):\n- Sanaladigan otlar (Countable): Dona-dona qilib sanash mumkin bo\'lgan narsalar (an apple, two eggs, a sandwich). Ko\'plikda -s oladi (apples, sandwiches).\n- Sanalmaydigan otlar (Uncountable): Suyuqliklar, donador yoki massa narsalar (water, milk, bread, rice, sugar). Ularning oldiga \'a/an\' qo\'yilmaydi va ko\'plikda -s qo\'shilmaydi (❌ waters, ❌ breads).\n  • O\'lchov birliklari bilan aytiladi: "a cup of coffee", "a bottle of water", "a slice of bread".\n\n2. Some va Any qoidasi:\n- Some (bir nechta / biroz): Darak gaplarda va xushmuomala takliflarda ishlatiladi.\n  • "I\'d like some water, please."\n  • "Would you like some tea?"\n- Any (hech qanday / biron bir): Inkor gaplar va umumiy savollarda ishlatiladi.\n  • "We do not have any milk."\n  • "Do you have any vegetarian dishes?"\n\n3. Kafeda buyurtma berish odobi (Polite Ordering):\n- ❌ Qo\'pol/To\'g\'ridan-to\'g\'ri: "I want coffee!" (O\'zbekchada "Kofe bering" oddiy bo\'lsa-da, ingliz tilida o\'ta qo\'pol eshitiladi).\n- ✅ Madaniyatli iboralar:\n  • "Could I have a cappuccino, please?"\n  • "I would like (I\'d like) a green tea, please."\n  • "Can we have the bill, please?" (Hisobni olsak bo\'ladimi?).\n\n4. O\'zbek o\'rganuvchilari uchun xavfli tuzoqlar (Common Pitfalls):\n- ❌ "Give me one coffee and two waters." -> ✅ "Could I have a coffee and two bottles of water, please?".\n- ❌ "Dessert" (/dɪˈzɜːt/ - shirinlik) so\'zini "Desert" (/ˈdezət/ - sahro) bilan adashtirish.\n- ❌ "How many sugar do you take?" -> ✅ "How MUCH sugar do you take?" (Shakar sanalmaydi, shuning uchun \'much\').\n\n5. IELTS Speaking Part 1 Foundation Corner:\n- Topic: Food and Restaurants\n- Examiner: "What kind of food do you like the most?"\n- Model Band 6.0+ Answer: "To be honest, I really enjoy traditional food like plov and grilled kebabs because they are rich in flavour. When eating out at a cafe, I usually order a hot cappuccino with a chocolate croissant."\n- Intonation Tip: Buyurtma berish va iltimos so\'roqlarida oxirgi so\'zda ohang biroz ko\'tariladi: "Could I have the bill, please? ⤴".',
          vocabulary: [
            {
              term: 'order',
              reading: '/ˈɔːdə/',
              meaning: 'buyurtma bermoq',
              exampleSentence: 'Are you ready to order, or do you need a few more minutes?',
              exampleTranslation:
                'Buyurtma berishga tayyormisiz yoki yana bir necha daqiqa kerakmi?',
            },
            {
              term: 'bill',
              reading: '/bɪl/',
              meaning: "hisob varaqasi (restoranda to'lov cheki)",
              exampleSentence: 'Excuse me, could we have the bill, please?',
              exampleTranslation: "Kechirasiz, to'lov hisobini bersangiz, iltimos?",
            },
            {
              term: 'still water',
              reading: '/stɪl ˈwɔːtə/',
              meaning: 'gazsiz toza suv',
              exampleSentence: 'I would like a glass of still water with lemon.',
              exampleTranslation: 'Men limonli bir stakan gazsiz suv xohlayman.',
            },
            {
              term: 'sparkling water',
              reading: '/ˈspɑːklɪŋ ˈwɔːtə/',
              meaning: 'gazlangan mineral suv',
              exampleSentence: 'Do you prefer still or sparkling water?',
              exampleTranslation: "Siz gazsiz yoki gazlangan suvni afzal ko'rasizmi?",
            },
            {
              term: 'delicious',
              reading: '/dɪˈlɪʃəs/',
              meaning: 'juda mazali, totli',
              exampleSentence: 'This home-made pasta is absolutely delicious.',
              exampleTranslation: 'Bu uyda tayyorlangan pasta mutlaqo ajoyib mazali.',
            },
            {
              term: 'main course',
              reading: '/meɪn kɔːs/',
              meaning: 'asosiy taom',
              exampleSentence: 'For the main course, I will have roasted chicken with vegetables.',
              exampleTranslation:
                'Asosiy taom sifatida men sabzavotlar bilan qovurilgan tovuq tanlayman.',
            },
            {
              term: 'dessert',
              reading: '/dɪˈzɜːt/',
              meaning: 'shirinlik / desert',
              exampleSentence: 'Would you like some apple pie for dessert?',
              exampleTranslation: 'Desertga olmali pirog xohlaysizmi?',
            },
            {
              term: 'waiter',
              reading: '/ˈweɪtə/',
              meaning: 'ofitsiant (erkak)',
              exampleSentence: 'The polite waiter brought our hot drinks very quickly.',
              exampleTranslation:
                'Xushmuomala ofitsiant issiq ichimliklarimizni juda tez olib keldi.',
            },
          ],
        },
      },
      {
        id: 'en-a1-u3-l2-s2',
        title: 'Kafeda Buyurtma Mashqlari',
        type: 'practice',
        estimatedMinutes: 4,
        practiceData: {
          instructions: "Eng madaniyatli va grammatik jihatdan to'g'ri javobni tanlang.",
          exercises: [
            {
              id: 'en-a1-u3-l2-e1',
              type: 'multiple-choice',
              prompt: 'Kafeda ofitsiantga qahva buyurtma berishning eng xushmuomala usuli qaysi?',
              options: [
                'I want coffee now.',
                'Give me one coffee.',
                'Could I have a coffee, please?',
                'I need coffee immediately.',
              ],
              correctAnswer: 2,
              explanation:
                "'Could I have..., please?' xushmuomala va xalqaro miqyosda eng qabul qilingan so'rov shakli.",
            },
            {
              id: 'en-a1-u3-l2-e2',
              type: 'multiple-choice',
              prompt:
                "Qaysi so'z sanalmaydigan ot (uncountable) hisoblanadi va oldiga 'a/an' ololmaydi?",
              options: ['sandwich', 'bread', 'apple', 'banana'],
              correctAnswer: 1,
              explanation:
                "'Bread' (non) ingliz tilida sanalmaydi. 'a bread' deb bo'lmaydi, 'a piece/slice of bread' yoki 'some bread' deyiladi.",
            },
            {
              id: 'en-a1-u3-l2-e3',
              type: 'multiple-choice',
              prompt: "Bo'sh joyni to'ldiring: 'We don't have ___ fresh milk in the fridge.'",
              options: ['some', 'any', 'a', 'an'],
              correctAnswer: 1,
              explanation:
                "Inkor gaplarda (don't have) sanalmaydigan otlar oldidan 'any' ishlatiladi.",
            },
            {
              id: 'en-a1-u3-l2-e4',
              type: 'multiple-choice',
              prompt: "'Hisobni olsak bo'ladimi?' so'rovining to'g'ri tarjimasi qaysi?",
              options: [
                'Can we have the bill, please?',
                'Where is money paper?',
                'Take our money now.',
                'Give the cheque please.',
              ],
              correctAnswer: 0,
              explanation:
                "Restoranda hisob so'rash uchun 'Can we have the bill, please?' standarti qo'llaniladi.",
            },
            {
              id: 'en-a1-u3-l2-e5',
              type: 'multiple-choice',
              prompt: "Bo'sh joyga to'g'ri so'zni qo'ying: 'Would you like ___ orange juice?'",
              options: ['any', 'some', 'a', 'an'],
              correctAnswer: 1,
              explanation:
                "Xushmuomala taklif bildirilganda (Would you like...?), savol bo'lsa ham 'some' ishlatiladi.",
            },
          ],
        },
      },
      {
        id: 'en-a1-u3-l2-s3',
        title: 'Dars Testi: Food & Drinks',
        type: 'test',
        estimatedMinutes: 5,
        testData: {
          instructions: "Savollarga to'g'ri javob berib, mavzuni mustahkamlang.",
          passingScorePercentage: 80,
          questions: [
            {
              id: 'en-a1-u3-l2-q1',
              question: 'Sanalmaydigan otlar uchun qaysi ifoda grammatik xato hisoblanadi?',
              options: ['two cups of tea', 'three waters', 'a bottle of water', 'some cold milk'],
              correctAnswerIndex: 1,
              explanation:
                "'Water' sanalmaydi, unga to'g'ridan-to'g'ri son va ko'plik qo'shib 'three waters' deyish xatodir (three bottles of water to'g'ri).",
            },
            {
              id: 'en-a1-u3-l2-q2',
              question: "'Shirinlik' so'zining to'g'ri yozilishi va urg'u o'rni qaysi?",
              options: [
                "Desert (urg'u 1-bo'g'inda)",
                "Dessert (urg'u 2-bo'g'inda)",
                "Desert (urg'u 2-bo'g'inda)",
                "Dessert (urg'u 1-bo'g'inda)",
              ],
              correctAnswerIndex: 1,
              explanation:
                "Shirinlik bu 'dessert' bo'lib, ikkita 's' bilan yoziladi va urg'u ikkinchi bo'g'inga tushadi (/dɪˈzɜːt/).",
            },
            {
              id: 'en-a1-u3-l2-q3',
              question:
                "Choy yoki qahvaga shakar miqdorini so'rashda qaysi so'roq iborasi to'g'ri?",
              options: [
                'How many sugar do you take?',
                'How much sugar do you take?',
                'How many sugars you want?',
                'What sugar you take?',
              ],
              correctAnswerIndex: 1,
              explanation: "Shakar sanalmaydigan ot bo'lgani uchun 'How much sugar' deb so'raladi.",
            },
            {
              id: 'en-a1-u3-l2-q4',
              question:
                "'I would like to order a grilled fish for the ___.' Bo'sh joyga qaysi atama mos keladi?",
              options: ['starter bill', 'main course', 'spoon table', 'beverage clock'],
              correctAnswerIndex: 1,
              explanation: "'Main course' - asosiy taom (baliq, go'sht va hk.).",
            },
            {
              id: 'en-a1-u3-l2-q5',
              question:
                "IELTS Speaking: 'Do you prefer cooking at home or eating at restaurants?' savoliga eng yaxshi javob boshlanishi qaysi?",
              options: [
                'I want restaurant because good.',
                'To be honest, I lean towards cooking at home because it is much healthier and more budget-friendly.',
                'Home cooking is have food.',
                'No restaurant, I am eat home always.',
              ],
              correctAnswerIndex: 1,
              explanation:
                "'To be honest, I lean towards... because...' - Band 6.0+ darajasidagi tabiiy, ravon va asosli javob.",
            },
          ],
        },
      },
    ],
  },
  {
    id: 'en-a1-u3-l3',
    courseId: 'english-a1',
    unitId: 'en-a1-u3',
    unitTitle: 'Unit 3: Time, Food & Routines',
    language: 'en',
    level: 'A1',
    lessonNumber: 3,
    title: 'Rooms in a House & Prepositions of Place',
    description:
      'Uy xonalari, mebellar, There is / There are konstruksiyasi hamda joylashuv predloglari.',
    estimatedDurationMinutes: 14,
    icon: '🛋️',
    steps: [
      {
        id: 'en-a1-u3-l3-s1',
        title: 'Uy Xonalari va There is / There are',
        type: 'learn',
        estimatedMinutes: 5,
        learnData: {
          title: 'Describing Rooms & Spatial Prepositions',
          explanation:
            'Uy va xonani tasvirlash, mebellarning joylashuvini ifodalash:\n\n1. There is / There are (Mavjudlik konstruksiyasi):\n- O\'zbek tilida "Xonada bitta stol bor" yoki "Stol ustida kitoblar bor" deb oxirida \'bor\' so\'zi ishlatiladi.\n- Ingliz tilida mavjudlik har doim gap boshida THERE IS yoki THERE ARE bilan boshlanadi!\n  • Birlik va sanalmaydigan otlar: "There is a sofa in the living room." / "There is milk in the fridge."\n  • Ko\'plik otlar: "There are two chairs next to the desk."\n  • Inkor: "There isn\'t a television in my bedroom." / "There aren\'t any pictures on the wall."\n  • Savol: "Is there a balcony?" -> "Yes, there is." / "Are there two bathrooms?" -> "No, there aren\'t."\n\n2. Joylashuv Predloglari (Prepositions of Place):\n- IN: ichida (in the wardrobe, in the kitchen).\n- ON: ustida (on the desk, on the wall).\n- UNDER: tagida (under the bed).\n- NEXT TO: yonida (next to the sofa).\n- BETWEEN: orasida (ikkita narsa o\'rtasida: between the window and the door).\n- IN FRONT OF: ro\'parasida / oldida (in front of the TV).\n- BEHIND: orqasida (behind the door).\n\n3. O\'zbek o\'rganuvchilari uchun xavfli tuzoqlar (Common Pitfalls):\n- ❌ "In my room has a big bed." -> ✅ "There is a big bed in my room." (\'Have/Has\' faqat shaxsning egaligida ishlatiladi, joyda mavjudlik uchun faqat There is/are!).\n- ❌ "There is two windows in the room." -> ✅ "There are two windows in the room." (Ko\'plik bo\'lsa \'are\' bo\'lishi shart).\n- ❌ "I bought new furnitures." -> ✅ "I bought new furniture." (\'Furniture\' so\'zi sanalmaydi, hech qachon -s olmaydi).\n\n4. IELTS Speaking Part 1 Foundation Corner:\n- Topic: Accommodation / Your Home\n- Examiner: "Can you describe your favourite room in your home?"\n- Model Band 6.0+ Answer: "Certainly. My favourite room is undoubtedly my bedroom because it is bright and peaceful. There is a comfortable study desk right next to the window, where I can read books with plenty of natural sunlight."\n- Lexical Resource Tip: "undoubtedly" (shubhasiz), "peaceful" (tinch, osoyishta), "natural sunlight" (tabiiy quyosh nuri).',
          vocabulary: [
            {
              term: 'living room',
              reading: '/ˈlɪvɪŋ ruːm/',
              meaning: 'mehmonxona (umumiy dam olish xonasi)',
              exampleSentence: 'My family gathers in the living room every evening to chat.',
              exampleTranslation: "Oilamiz har oqshom suhbatlashish uchun mehmonxonaga yig'iladi.",
            },
            {
              term: 'kitchen',
              reading: '/ˈkɪtʃɪn/',
              meaning: 'oshxona',
              exampleSentence: 'There is a modern microwave and an oven in our kitchen.',
              exampleTranslation: "Oshxonamizda zamonaviy mikroto'lqinli pech va duxovka bor.",
            },
            {
              term: 'bedroom',
              reading: '/ˈbedruːm/',
              meaning: 'yotoqxona',
              exampleSentence: 'My bedroom has a cozy bed and a wooden wardrobe.',
              exampleTranslation: "Mening yotoqxonamda qulay karavot va yog'och shkaf bor.",
            },
            {
              term: 'furniture',
              reading: '/ˈfɜːnɪtʃə/',
              meaning: 'mebel jihozlari (har doim birlikda)',
              exampleSentence: 'The apartment is rented with elegant, modern furniture.',
              exampleTranslation: 'Kvartira nafis, zamonaviy mebellar bilan ijaraga beriladi.',
            },
            {
              term: 'between',
              reading: '/bɪˈtwiːn/',
              meaning: "orasida (ikki narsa o'rtasida)",
              exampleSentence: 'The small nightstand is between the bed and the wardrobe.',
              exampleTranslation: "Kichkina tumbachka karavot va shkafning o'rtasida joylashgan.",
            },
            {
              term: 'behind',
              reading: '/bɪˈhaɪnd/',
              meaning: 'orqasida',
              exampleSentence: "Don't leave your slippers behind the bedroom door.",
              exampleTranslation: 'Shypak-shippaklaringizni yotoqxona eshigi orqasida qoldirmang.',
            },
            {
              term: 'in front of',
              reading: '/ɪn frʌnt əv/',
              meaning: "oldida, ro'parasida",
              exampleSentence: 'There is a soft rug in front of the warm fireplace.',
              exampleTranslation: 'Issiq kamin oldida yumshoq gilamcha bor.',
            },
            {
              term: 'balcony',
              reading: '/ˈbælkəni/',
              meaning: 'balkon / ayvon',
              exampleSentence: 'We love drinking morning coffee on the open balcony.',
              exampleTranslation: "Biz ochiq balkonda ertalabki qahvani ichishni yaxshi ko'ramiz.",
            },
          ],
        },
      },
      {
        id: 'en-a1-u3-l3-s2',
        title: 'Joylashuv va Mebel Mashqlari',
        type: 'practice',
        estimatedMinutes: 4,
        practiceData: {
          instructions: "Bo'sh joylarni to'g'ri grammatik shakl yoki predlog bilan to'ldiring.",
          exercises: [
            {
              id: 'en-a1-u3-l3-e1',
              type: 'multiple-choice',
              prompt: "Bo'sh joyni to'g'ri to'ldiring: '___ three armchairs in our living room.'",
              options: ['There is', 'There are', 'It is', 'They is'],
              correctAnswer: 1,
              explanation: "'Three armchairs' ko'plikda bo'lgani uchun 'There are' ishlatiladi.",
            },
            {
              id: 'en-a1-u3-l3-e2',
              type: 'multiple-choice',
              prompt:
                "'Stol deraza va eshik o'rtasida joylashgan' jumlasiga qaysi predlog mos keladi?",
              options: ['under', 'between', 'behind', 'on'],
              correctAnswer: 1,
              explanation:
                "Ikki narsaning o'rtasidagi joylashuv 'between' predlogi orqali ifodalanadi.",
            },
            {
              id: 'en-a1-u3-l3-e3',
              type: 'multiple-choice',
              prompt: "Qaysi jumla grammatik jihatdan MUTLAQO TO'G'RI tuzilgan?",
              options: [
                'In my flat have two bathrooms.',
                'There is two bathrooms in my flat.',
                'There are two bathrooms in my flat.',
                'My flat there is two bathrooms.',
              ],
              correctAnswer: 2,
              explanation:
                "Ingliz tilida mavjudlik 'There are two bathrooms in my flat' shaklida ifodalanadi ('in my flat have...' xato).",
            },
            {
              id: 'en-a1-u3-l3-e4',
              type: 'multiple-choice',
              prompt: "'Devorda biron bir rasm bormi?' so'roq jumlasi qanday bo'ladi?",
              options: [
                'Is there any pictures on the wall?',
                'Are there any pictures on the wall?',
                'Do there pictures on the wall?',
                'Have there any pictures on the wall?',
              ],
              correctAnswer: 1,
              explanation:
                "'Pictures' ko'plik ot, shuning uchun so'roq 'Are there any...?' bilan boshlanadi.",
            },
            {
              id: 'en-a1-u3-l3-e5',
              type: 'multiple-choice',
              prompt:
                "'The kitten is sleeping ___ the bed' (mushukcha karavot tagida uxlayapti). Bo'sh joyga qaysi predlog kerak?",
              options: ['under', 'on', 'in', 'between'],
              correctAnswer: 0,
              explanation: "Biror narsaning osti yoki tagi uchun 'under' predlogi ishlatiladi.",
            },
          ],
        },
      },
      {
        id: 'en-a1-u3-l3-s3',
        title: 'Dars Testi: Rooms & Prepositions',
        type: 'test',
        estimatedMinutes: 5,
        testData: {
          instructions: "Savollarga to'g'ri javob berib, mavzuni mustahkamlang.",
          passingScorePercentage: 80,
          questions: [
            {
              id: 'en-a1-u3-l3-q1',
              question: "Qaysi so'z sanalmaydigan ot bo'lib, unga 's' qo'shish xato hisoblanadi?",
              options: ['table', 'furniture', 'chair', 'lamp'],
              correctAnswerIndex: 1,
              explanation:
                "'Furniture' (mebel jihozlari) jamlovchi sanalmaydigan ot bo'lib, unga -s qo'shib bo'lmaydi.",
            },
            {
              id: 'en-a1-u3-l3-q2',
              question: "'There isn't ___ mirror in the hallway.' Bo'sh joyga qaysi artikl mos?",
              options: ['a', 'an', 'some', 'many'],
              correctAnswerIndex: 0,
              explanation:
                "'Mirror' birlikdagi sanaladigan undosh tovush bilan boshlangan ot, inkor shaklda 'a mirror' to'g'ri bo'ladi.",
            },
            {
              id: 'en-a1-u3-l3-q3',
              question: "'Oshxonamizda muzlatgich yo'q' jumlasining to'g'ri tarjimasi qaysi?",
              options: [
                "There isn't a fridge in our kitchen.",
                'In our kitchen not have a fridge.',
                "Our kitchen doesn't have there fridge.",
                "There aren't a fridge in our kitchen.",
              ],
              correctAnswerIndex: 0,
              explanation:
                "'There isn't a fridge in our kitchen' - birlikdagi mavjud emaslikning qat'iy va to'g'ri ifodasi.",
            },
            {
              id: 'en-a1-u3-l3-q4',
              question:
                "'The sofa is placed ___ the television' (Divan televizor ro'parasida turibdi).",
              options: ['between', 'in front of', 'under', 'at'],
              correctAnswerIndex: 1,
              explanation: "'In front of' - oldida, ro'parasida ma'nosini bildiradi.",
            },
            {
              id: 'en-a1-u3-l3-q5',
              question:
                "IELTS Speaking: 'What would you like to change about your room?' savoliga qaysi javob leksik jihatdan boy?",
              options: [
                'I want change bed because small.',
                'If I had the chance, I would add more shelves because there are many books on the floor.',
                'My room is change table.',
                'No change anything, room good.',
              ],
              correctAnswerIndex: 1,
              explanation:
                "'If I had the chance, I would add more shelves because there are many books...' fikrni to'liq va grammatik aniq ochib beradi.",
            },
          ],
        },
      },
    ],
  },
  {
    id: 'en-a1-u3-l4',
    courseId: 'english-a1',
    unitId: 'en-a1-u3',
    unitTitle: 'Unit 3: Time, Food & Routines',
    language: 'en',
    level: 'A1',
    lessonNumber: 4,
    title: 'Places in Town & Giving Simple Directions',
    description:
      "Shahardagi jamoat joylari, manzil so'rash va oddiy yo'l ko'rsatish (Go straight, Turn left).",
    estimatedDurationMinutes: 14,
    icon: '🗺️',
    steps: [
      {
        id: 'en-a1-u3-l4-s1',
        title: "Shaharda Mo'ljal Olish va Yo'l Ko'rsatish",
        type: 'learn',
        estimatedMinutes: 5,
        learnData: {
          title: 'Asking for and Giving Directions',
          explanation:
            "Shaharda sayohat qilish, manzilni so'rash va yo'l tushuntirish qoidalari:\n\n1. Manzil so'rash odobi (Polite Inquiries):\n- Notanish odamdan yo'l so'raganda har doim \"Excuse me\" (Kechirasiz) bilan boshlanadi:\n  • \"Excuse me, where is the nearest pharmacy?\" (Kechirasiz, eng yaqin dorixona qayerda?)\n  • \"Excuse me, how can I get to the central train station?\" (Kechirasiz, vokzalga qanday borsam bo'ladi?)\n  • \"Is there a bank around here?\" (Bu atrofda biron bank bormi?)\n\n2. Yo'l ko'rsatishda Buyruq mayli (Imperatives):\n- Yo'l tushuntirganda to'g'ridan-to'g'ri fe'llardan boshlanadi:\n  • \"Go straight ahead\" (To'g'riga qarab yuring).\n  • \"Turn right\" (O'ngga buriling).\n  • \"Turn left at the traffic lights\" (Svetofordan chapga buriling).\n  • \"Cross the street at the pedestrian crossing\" (Piyodalar yo'lagidan ko'chani kesib o'ting).\n  • \"Take the second turning on your left\" (Chapdagi ikkinchi ko'chaga buriling).\n  • \"It is on your right / opposite the bank\" (U sizning o'ng tomoningizda / bankning ro'parasida).\n\n3. O'zbek o'rganuvchilari uchun xavfli tuzoqlar (Common Pitfalls):\n- ❌ \"Where the pharmacy is?\" -> ✅ \"Where IS the pharmacy?\" (So'roq gapda 'is' egadan oldinda keladi).\n- ❌ \"Go to straight.\" -> ✅ \"Go straight.\" ('Straight' oldidan 'to' qo'yilmaydi).\n- ❌ \"Turn to right.\" -> ✅ \"Turn right.\" ('Turn' dan keyin to'g'ridan-to'g'ri yo'nalish aytiladi).\n\n4. IELTS Speaking Part 1 Foundation Corner:\n- Topic: Hometown & Neighbourhood\n- Examiner: \"What facilities are available near your house?\"\n- Model Band 6.0+ Answer: \"In my local neighbourhood, there are plenty of convenient facilities. For example, there is a large supermarket just across the street, and the subway station is within five minutes' walk.\"\n- Examiner-Friendly Expressions: \"within walking distance\" (piyoda yetib borsa bo'ladigan masofada), \"just across the street\" (ko'chaning narigi tomonida).",
          vocabulary: [
            {
              term: 'crossroads',
              reading: '/ˈkrɒsrəʊdz/',
              meaning: 'chorraha',
              exampleSentence: 'Be very careful when driving through this busy crossroads.',
              exampleTranslation: "Ushbu gavjum chorrahadan o'tayotganda juda ehtiyot bo'ling.",
            },
            {
              term: 'pharmacy',
              reading: '/ˈfɑːməsi/',
              meaning: 'dorixona',
              exampleSentence: 'The 24-hour pharmacy is located opposite the general hospital.',
              exampleTranslation:
                "24 soatlik dorixona umumiy shifoxonaning ro'parasida joylashgan.",
            },
            {
              term: 'turn right',
              reading: '/tɜːn raɪt/',
              meaning: "o'ngga burilmoq",
              exampleSentence: 'Walk past the museum and then turn right into Elm Street.',
              exampleTranslation: "Muzeydan o'tib, keyin Elm ko'chasiga o'ngga buriling.",
            },
            {
              term: 'turn left',
              reading: '/tɜːn left/',
              meaning: 'chapga burilmoq',
              exampleSentence: 'Turn left at the next roundabout to reach the airport.',
              exampleTranslation:
                "Aeroportga yetish uchun keyingi aylanma yo'ldan chapga buriling.",
            },
            {
              term: 'go straight',
              reading: '/ɡəʊ streɪt/',
              meaning: "to'g'riga bormoq",
              exampleSentence: 'Go straight ahead for two hundred metres until you see the cinema.',
              exampleTranslation: "Kinoteatrni ko'rmaguningizcha ikki yuz metr to'g'riga boring.",
            },
            {
              term: 'pedestrian crossing',
              reading: '/pəˈdestriən ˈkrɒsɪŋ/',
              meaning: "piyodalar o'tish yo'lagi (zebra)",
              exampleSentence:
                'Pedestrians should always cross wide roads at the pedestrian crossing.',
              exampleTranslation:
                "Piyodalar keng yo'llarni har doim piyodalar o'tish joyidan kesib o'tishlari kerak.",
            },
            {
              term: 'traffic lights',
              reading: '/ˈtræfɪk laɪts/',
              meaning: 'svetofor',
              exampleSentence: 'Wait until the traffic lights turn green before driving.',
              exampleTranslation: "Mashinani haydashdan oldin svetofor yashil bo'lishini kuting.",
            },
            {
              term: 'bus stop',
              reading: '/bʌs stɒp/',
              meaning: 'avtobus bekati',
              exampleSentence: 'There is a sheltered bus stop right in front of the supermarket.',
              exampleTranslation: 'Supermarketning qoq oldida soyabonli avtobus bekati bor.',
            },
          ],
        },
      },
      {
        id: 'en-a1-u3-l4-s2',
        title: "Yo'l Ko'rsatish Mashqlari",
        type: 'practice',
        estimatedMinutes: 4,
        practiceData: {
          instructions: "Eng to'g'ri yo'l so'rash yoki ko'rsatish iborasini tanlang.",
          exercises: [
            {
              id: 'en-a1-u3-l4-e1',
              type: 'multiple-choice',
              prompt:
                "Notanish kishidan metroga qanday borishni so'rashning eng to'g'ri usuli qaysi?",
              options: [
                'Hey, where is metro?',
                'Excuse me, how can I get to the nearest metro station?',
                'Show me metro quickly.',
                'Where I can find metro go?',
              ],
              correctAnswer: 1,
              explanation:
                "'Excuse me, how can I get to...?' - yo'l so'rashning eng madaniy va to'g'ri shaklidir.",
            },
            {
              id: 'en-a1-u3-l4-e2',
              type: 'multiple-choice',
              prompt:
                "Bo'sh joyni to'ldiring: '___ straight ahead, then turn right at the traffic lights.'",
              options: ['Going', 'Go', 'Go to', 'You are go'],
              correctAnswer: 1,
              explanation: "Yo'l ko'rsatish buyruq fe'li bilan boshlanadi: 'Go straight ahead'.",
            },
            {
              id: 'en-a1-u3-l4-e3',
              type: 'multiple-choice',
              prompt: "'Svetoforda chapga buriling' jumlasi ingliz tilida qanday bo'ladi?",
              options: [
                'Turn to left in traffic light.',
                'Turn left at the traffic lights.',
                'Turn the left on traffic lights.',
                'Turning left at traffic lights.',
              ],
              correctAnswer: 1,
              explanation:
                "'Turn left at the traffic lights' - 'turn' dan so'ng predlogsiz 'left' va nuqta joy uchun 'at' keladi.",
            },
            {
              id: 'en-a1-u3-l4-e4',
              type: 'multiple-choice',
              prompt: "'Kutubxona sizning o'ng tomoningizda bo'ladi' jumlasi qaysi?",
              options: [
                'The library is on your right.',
                'The library is to your right.',
                'The library is in your right hand.',
                'The library on right side you.',
              ],
              correctAnswer: 0,
              explanation:
                "'On your right' yoki 'on your left' - tomonni ko'rsatuvchi standart ibora.",
            },
            {
              id: 'en-a1-u3-l4-e5',
              type: 'multiple-choice',
              prompt: "'Dorixona bankning ro'parasida joylashgan.' Qaysi predlog kerak?",
              options: ['between', 'opposite', 'behind of', 'in'],
              correctAnswer: 1,
              explanation: "'Opposite' - ro'parasida, qarama-qarshi tomonida deganidir.",
            },
          ],
        },
      },
      {
        id: 'en-a1-u3-l4-s3',
        title: 'Dars Testi: Places & Directions',
        type: 'test',
        estimatedMinutes: 5,
        testData: {
          instructions: "Savollarga to'g'ri javob berib, mavzuni mustahkamlang.",
          passingScorePercentage: 80,
          questions: [
            {
              id: 'en-a1-u3-l4-q1',
              question: "Yo'l so'rashda qaysi so'roq gap tuzilishi xato?",
              options: [
                'Excuse me, where is the post office?',
                'Excuse me, how do I get to the museum?',
                'Excuse me, where the supermarket is located?',
                'Excuse me, is there a pharmacy nearby?',
              ],
              correctAnswerIndex: 2,
              explanation:
                "To'g'ridan-to'g'ri so'roq gapda yordamchi fe'l egadan oldinga o'tishi kerak: 'Where is the supermarket located?' bo'lishi lozim.",
            },
            {
              id: 'en-a1-u3-l4-q2',
              question: "'Piyodalar o'tish yo'lagi' ingliz tilida nima deyiladi?",
              options: [
                'pedestrian street',
                'pedestrian crossing',
                'crosswalk light',
                'car street',
              ],
              correctAnswerIndex: 1,
              explanation:
                "Britaniya ingliz tilida 'pedestrian crossing' (yoki 'zebra crossing') deyiladi.",
            },
            {
              id: 'en-a1-u3-l4-q3',
              question: "'Chorrahada to'xtang' jumlasining to'g'ri ifodasi qaysi?",
              options: [
                'Stop at the crossroads.',
                'Stop to the crossroads.',
                'Stop on crossroads road.',
                'Stopping at crossroad.',
              ],
              correctAnswerIndex: 0,
              explanation: "'Stop at the crossroads' - aniq lokatsiyalar uchun 'at' qo'llanadi.",
            },
            {
              id: 'en-a1-u3-l4-q4',
              question:
                "'Take the second turning on your left.' Bu ko'rsatma nima ma'noni bildiradi?",
              options: [
                "Chapdagi birinchi ko'chaga kiring.",
                'Chapdagi ikkinchi burilishga buriling.',
                "O'ng tomonga qarab yuring.",
                'Ikki marta chapga qarang.',
              ],
              correctAnswerIndex: 1,
              explanation:
                "'Take the second turning on your left' - chapdagi ikkinchi ko'chaga / burilishga buriling deganidir.",
            },
            {
              id: 'en-a1-u3-l4-q5',
              question:
                "IELTS Speaking: 'What do you like most about your town?' savoliga qaysi javob ifodasi eng tabiiy?",
              options: [
                'My town have big building.',
                'What I appreciate most is that public transport is very efficient, and all key amenities are within walking distance.',
                'I like city because good.',
                'City is very many people.',
              ],
              correctAnswerIndex: 1,
              explanation:
                "'What I appreciate most is that public transport is very efficient, and all key amenities are within walking distance' - Band 6.5+ darajasidagi tabiiy va boy ifoda.",
            },
          ],
        },
      },
    ],
  },
  {
    id: 'en-a1-u3-l5',
    courseId: 'english-a1',
    unitId: 'en-a1-u3',
    unitTitle: 'Unit 3: Time, Food & Routines',
    language: 'en',
    level: 'A1',
    lessonNumber: 5,
    title: 'Weather & Seasons',
    description:
      "Ob-havo holatlari, yil fasllari, haroratni ifodalash va 'What is the weather like?' savoli.",
    estimatedDurationMinutes: 14,
    icon: '⛅',
    steps: [
      {
        id: 'en-a1-u3-l5-s1',
        title: 'Ob-havo va Yil Fasllari',
        type: 'learn',
        estimatedMinutes: 5,
        learnData: {
          title: 'Weather Conditions & Four Seasons',
          explanation:
            'Ob-havoni tasvirlash va yil fasllari haqida gapirish qoidalari:\n\n1. Ob-havoni aytishda Boshlovchi Ega (Dummy Subject \'IT\'):\n- O\'zbek tilida "Bugun sovuq" yoki "Hozir yomg\'ir yog\'yapti" deb boshlasak-da, ingliz tilida ob-havo har doim **IT** olmoshi bilan boshlanadi!\n  • It is sunny today (Bugun quyoshli).\n  • It is cold and windy (Sovuq va shamolli).\n  • It is freezing outside (Tashqarida sovuq qattiq / muzlatyapti).\n  • It is raining at the moment (Ayni damda yomg\'ir yog\'yapti - hozirgi davomli zamon).\n  • It snows a lot in December (Dekabrda ko\'p qor yog\'adi - odatiy holat).\n\n2. Ob-havoni so\'rash qolipi:\n- "What is the weather like today?" (Bugun ob-havo qanday?)\n- "How is the weather outside?" (Tashqarida havo qanday?)\n- "What\'s the forecast for tomorrow?" (Ertaga ob-havo prognozi qanday?)\n\n3. To\'rt fasl (The Four Seasons):\n- Spring (bahor) - "in spring"\n- Summer (yoz) - "in summer"\n- Autumn / Fall (kuz) - "in autumn"\n- Winter (qish) - "in winter"\n- Fasllar oldidan \'IN\' predlogi ishlatiladi: "I love swimming in summer."\n\n4. O\'zbek o\'rganuvchilari uchun xavfli tuzoqlar (Common Pitfalls):\n- ❌ "Today is very rain." -> ✅ "It is raining today." (fe\'l) yoki "It is rainy today." (sifat).\n- ❌ "The weather is very hot today." (to\'g\'ri, lekin ko\'proq tabiiy variant: "It is very hot today.").\n- ❌ "What the weather is like?" -> ✅ "What IS the weather like?" (So\'roqda yordamchi fe\'l egadan oldinda bo\'ladi).\n\n5. IELTS Speaking Part 1 Foundation Corner:\n- Topic: Weather & Seasons\n- Examiner: "What kind of weather do you like best?"\n- Model Band 6.0+ Answer: "To be honest, I prefer mild and sunny weather, especially in spring. It is neither freezing cold nor scorching hot, which allows me to spend quality time outdoors with friends."\n- High-Scoring Idiomatic Pairs: "mild and pleasant" (mo\'tadil va yoqimli), "freezing cold" (muzdek sovuq), "scorching hot" (jazirama issiq).',
          vocabulary: [
            {
              term: 'sunny',
              reading: '/ˈsʌni/',
              meaning: 'quyoshli, ochiq havo',
              exampleSentence: 'It is a bright and sunny morning, perfect for a picnic.',
              exampleTranslation: 'Yorqin va quyoshli tong, piknik qilish uchun ayni muddao.',
            },
            {
              term: 'rainy',
              reading: '/ˈreɪni/',
              meaning: "yomg'irli",
              exampleSentence: 'Take your umbrella with you because it is a rainy afternoon.',
              exampleTranslation:
                "Soyaboningizni o'zingiz bilan oling, chunki tushdan keyin yomg'irli havo.",
            },
            {
              term: 'forecast',
              reading: '/ˈfɔːkɑːst/',
              meaning: "ob-havo ma'lumoti / prognoz",
              exampleSentence:
                'According to the evening weather forecast, temperatures will drop tomorrow.',
              exampleTranslation: "Kechki ob-havo prognoziga ko'ra, ertaga harorat pasayadi.",
            },
            {
              term: 'freezing',
              reading: '/ˈfriːzɪŋ/',
              meaning: 'qattiq sovuq, muzlatadigan darajada sovuq',
              exampleSentence: 'You should wear a heavy woolen coat; it is freezing outside.',
              exampleTranslation:
                'Qalin jun palto kiyishingiz kerak; tashqarida havo qattiq sovuq.',
            },
            {
              term: 'humid',
              reading: '/ˈhjuːmɪd/',
              meaning: 'nam, dim (havo)',
              exampleSentence: 'Summers in tropical areas can be extremely hot and humid.',
              exampleTranslation: "Tropik zonalarda yoz oylari juda issiq va dim bo'lishi mumkin.",
            },
            {
              term: 'autumn',
              reading: '/ˈɔːtəm/',
              meaning: 'kuz fasli (Amerika inglizchasida: fall)',
              exampleSentence: 'In autumn, the golden leaves fall from the trees.',
              exampleTranslation: "Kuzda tillarang barglar daraxtlardan to'kiladi.",
            },
            {
              term: 'spring',
              reading: '/sprɪŋ/',
              meaning: 'bahor fasli',
              exampleSentence: 'Everything turns green and fresh when spring arrives.',
              exampleTranslation:
                'Bahor kelganda hamma narsa yashillikka burkanadi va yangilanadi.',
            },
            {
              term: 'cloudy',
              reading: '/ˈklaʊdi/',
              meaning: 'bulutli',
              exampleSentence: 'The morning was clear, but now the sky is completely cloudy.',
              exampleTranslation: 'Tong ochiq edi, lekin hozir osmon butunlay bulutli.',
            },
          ],
        },
      },
      {
        id: 'en-a1-u3-l5-s2',
        title: 'Ob-havo Mashqlari',
        type: 'practice',
        estimatedMinutes: 4,
        practiceData: {
          instructions: "Ob-havoga oid to'g'ri so'z va iboralarni tanlang.",
          exercises: [
            {
              id: 'en-a1-u3-l5-e1',
              type: 'multiple-choice',
              prompt: "'Bugun ob-havo qanday?' savolining eng to'g'ri shakli qaysi?",
              options: [
                'What the weather like today?',
                'What is the weather like today?',
                'How weather is today?',
                'Which weather is it today?',
              ],
              correctAnswer: 1,
              explanation:
                "'What is the weather like today?' - ob-havoni so'rash uchun asosiy standart qolipdir.",
            },
            {
              id: 'en-a1-u3-l5-e2',
              type: 'multiple-choice',
              prompt: "Ayni paytda yomg'ir yog'ayotganini qaysi jumla to'g'ri ifodalaydi?",
              options: [
                'It is rain outside.',
                'It is raining outside.',
                'Today is raining outside.',
                'The weather rains outside now.',
              ],
              correctAnswer: 1,
              explanation:
                "Ayni paytdagi holat Present Continuous bilan 'It is raining outside' deb aytiladi.",
            },
            {
              id: 'en-a1-u3-l5-e3',
              type: 'multiple-choice',
              prompt:
                "Fasllar oldidan qaysi predlog ishlatiladi? 'We usually go skiing ___ winter.'",
              options: ['on', 'at', 'in', 'to'],
              correctAnswer: 2,
              explanation:
                "Yil fasllari (in winter, in summer, in spring, in autumn) oldidan har doim 'in' qo'llanadi.",
            },
            {
              id: 'en-a1-u3-l5-e4',
              type: 'multiple-choice',
              prompt:
                "'Tashqarida havo juda sovuq, qalin kiyim kiy.' Bo'sh joyni to'ldiring: 'It is ___ cold outside.'",
              options: ['freezing', 'cloudy', 'sunny', 'humid'],
              correctAnswer: 0,
              explanation:
                "'Freezing cold' - qattiq, qaqshatqich sovuqni ifodalovchi tabiiy iboradir.",
            },
            {
              id: 'en-a1-u3-l5-e5',
              type: 'multiple-choice',
              prompt: "'Kuzda daraxtlar barglarini to'kadi.' Qaysi so'z 'kuz' ma'nosini bildiradi?",
              options: ['spring', 'summer', 'autumn', 'winter'],
              correctAnswer: 2,
              explanation: "'Autumn' (AQSHda 'fall') - kuz fasli.",
            },
          ],
        },
      },
      {
        id: 'en-a1-u3-l5-s3',
        title: 'Dars Testi: Weather & Seasons',
        type: 'test',
        estimatedMinutes: 5,
        testData: {
          instructions: "Savollarga to'g'ri javob berib, mavzuni mustahkamlang.",
          passingScorePercentage: 80,
          questions: [
            {
              id: 'en-a1-u3-l5-q1',
              question: 'Qaysi jumla ingliz tilida grammatik jihatdan xato tuzilgan?',
              options: [
                'It is very warm today.',
                'Today is hot and sunny.',
                'Today is rain a lot.',
                'It snows in January.',
              ],
              correctAnswerIndex: 2,
              explanation:
                "'Today is rain a lot' xato, chunki to be fe'li bilan fe'lning oddiy shakli yonma-yon kela olmaydi. 'It is raining a lot' yoki 'It rains a lot' bo'lishi kerak.",
            },
            {
              id: 'en-a1-u3-l5-q2',
              question: "'Ob-havo ma'lumoti / prognozi' so'zining inglizcha muqobili qaysi?",
              options: ['weather forecast', 'weather newsroom', 'temperature note', 'cloud paper'],
              correctAnswerIndex: 0,
              explanation: "'Weather forecast' - ob-havo prognozi.",
            },
            {
              id: 'en-a1-u3-l5-q3',
              question:
                "'The climate is hot and ___ near the ocean' (havoda namlik yuqori). Qaysi sifat mos keladi?",
              options: ['dry', 'humid', 'freezing', 'clear'],
              correctAnswerIndex: 1,
              explanation: "'Humid' - nam, dim havo holati.",
            },
            {
              id: 'en-a1-u3-l5-q4',
              question:
                "'What is the weather like in Tashkent in summer?' savoliga to'g'ri javob qaysi?",
              options: [
                'It is usually very hot and dry.',
                'In summer it rain snow.',
                'The Tashkent is cold season.',
                'It are hot in summer.',
              ],
              correctAnswerIndex: 0,
              explanation: "'It is usually very hot and dry' grammatik va mazmunan mukammal javob.",
            },
            {
              id: 'en-a1-u3-l5-q5',
              question:
                "IELTS Speaking: 'Do you prefer rainy or sunny days?' savoliga eng to'liq javob qaysi?",
              options: [
                'Sunny day because I like.',
                'I definitely prefer sunny days because good weather always lifts my mood and allows me to go for long walks.',
                'Rain is no good, sun yes.',
                'I am like sunny day everyday.',
              ],
              correctAnswerIndex: 1,
              explanation:
                "'I definitely prefer sunny days because good weather always lifts my mood and allows me to...' - his-tuyg'uni ochib beruvchi, idiomali va yuqori ballga loyiq javob.",
            },
          ],
        },
      },
    ],
  },
  {
    id: 'en-a1-u4-l1',
    courseId: 'english-a1',
    unitId: 'en-a1-u4',
    unitTitle: 'Unit 4: Hobbies & Practical Skills',
    language: 'en',
    level: 'A1',
    lessonNumber: 1,
    title: 'Modal Verb: Can for Ability & Permission',
    description:
      "Qobiliyat, imkoniyat va ruxsat so'rashda 'can' hamda 'can't' modal fe'llarining qo'llanilishi.",
    estimatedDurationMinutes: 14,
    icon: '🏊',
    steps: [
      {
        id: 'en-a1-u4-l1-s1',
        title: "Can va Can't Qoidalari",
        type: 'learn',
        estimatedMinutes: 5,
        learnData: {
          title: "Expressing Ability and Asking Permission with 'Can'",
          explanation:
            'Modal fe\'llar — harakatni bajarish qobiliyati yoki ruxsatni bildiradi:\n\n1. Grammatik xususiyatlari:\n- \'Can\' barcha shaxslar uchun bir xil (he/she uchun -s qo\'shilmaydi: He can, She can).\n- \'Can\' dan keyin fe\'l har doim boshlang\'ich (infinitive) shaklda \'TO\' siz keladi:\n  • ✅ "I can swim." / "She can speak English."\n  • ❌ "She cans speak" yoki "I can to swim".\n- Inkor shakli: cannot yoki qisqartmasi "can\'t" (/kɑːnt/ yoki AQSH: /kænt/):\n  • "He can\'t drive a car."\n- So\'roq shakli: \'Can\' egadan oldinga o\'tadi:\n  • "Can you play the guitar?" -> "Yes, I can." / "No, I can\'t."\n\n2. Ruxsat va iltimos so\'rash (Permission & Requests):\n- "Can I open the window, please?" (Derazani ochsam maylimi?)\n- "Can you help me with this heavy bag?" (Menga bu og\'ir sumka bilan yordam bera olasizmi?).\n\n3. O\'zbek o\'rganuvchilari uchun xavfli tuzoqlar (Common Pitfalls):\n- ❌ "He cans play chess." -> ✅ "He CAN play chess." (\'Can\' hech qachon -s olmaydi).\n- ❌ "I can to dance." -> ✅ "I can dance." (\'Can\' dan keyin \'to\' qo\'yilmaydi).\n- ❌ "Do you can swim?" -> ✅ "CAN you swim?" (Modal fe\'llar \'do/does\' yordamchisiz savol yasaydi).\n\n4. IELTS Speaking Part 1 Foundation Corner:\n- Topic: Skills & Talents\n- Examiner: "What skills or abilities are you proud of?"\n- Model Band 6.0+ Answer: "Well, I can speak two foreign languages fluently, and I can also code simple computer programs. I believe acquiring practical skills is essential for my future career."\n- Pronunciation Tip: Darak gapda "can" odatda kuchsiz talaffuz qilinadi: /kən/ ("I can swim" -> /aɪ kən swɪm/). Inkor "can\'t" esa urg\'u bilan jarangli aytiladi: /kɑːnt/.',
          vocabulary: [
            {
              term: 'swim',
              reading: '/swɪm/',
              meaning: 'suzmoq',
              exampleSentence: 'She can swim across the pool in just thirty seconds.',
              exampleTranslation: "U hovuzni atigi o'ttiz soniyada suzib o'ta oladi.",
            },
            {
              term: 'drive',
              reading: '/draɪv/',
              meaning: 'mashina haydamoq',
              exampleSentence: 'My brother can drive both manual and automatic cars.',
              exampleTranslation: 'Akam ham mexanik, ham avtomat mashinalarni hayday oladi.',
            },
            {
              term: 'play the guitar',
              reading: '/pleɪ ðə ɡɪˈtɑː/',
              meaning: "gitara chalmoq (cholg'u oldidan 'the' keladi)",
              exampleSentence: 'He can play the acoustic guitar beautifully.',
              exampleTranslation: 'U akustik gitarani juda chiroyli chala oladi.',
            },
            {
              term: 'fluently',
              reading: '/ˈfluːəntli/',
              meaning: "ravon, to'xtalmasdan (gapirmoq)",
              exampleSentence: 'Aziza can communicate in English fluently with tourists.',
              exampleTranslation: 'Aziza sayyohlar bilan ingliz tilida ravon muloqot qila oladi.',
            },
            {
              term: 'skill',
              reading: '/skɪl/',
              meaning: "mahorat, ko'nikma",
              exampleSentence: 'Cooking is a vital practical skill for every young adult.',
              exampleTranslation:
                "Taom tayyorlash har bir yosh inson uchun muhim hayotiy ko'nikmadir.",
            },
            {
              term: 'solve',
              reading: '/sɒlv/',
              meaning: 'yechmoq, hal qilmoq (masala, muammo)',
              exampleSentence: 'He can solve complex mathematical equations easily.',
              exampleTranslation: 'U murakkab matematik tenglamalarni osonlikcha yecha oladi.',
            },
            {
              term: 'climb',
              reading: '/klaɪm/',
              meaning: "tirmashib chiqmoq (b harfi o'qilmaydi)",
              exampleSentence: 'Experienced mountaineers can climb this steep rocky mountain.',
              exampleTranslation: 'Tajribali alpinistlar bu tik qoyali toqqa chiqa oladilar.',
            },
            {
              term: 'permission',
              reading: '/pəˈmɪʃən/',
              meaning: 'ruxsat, ijozat',
              exampleSentence: 'You need official permission before recording videos here.',
              exampleTranslation:
                "Bu yerda video tasvirga olishdan oldin sizga rasmiy ruxsat kerak bo'ladi.",
            },
          ],
        },
      },
      {
        id: 'en-a1-u4-l1-s2',
        title: 'Can Mashqlari',
        type: 'practice',
        estimatedMinutes: 4,
        practiceData: {
          instructions: "Bo'sh joylarni to'ldiring yoki eng to'g'ri grammatik javobni tanlang.",
          exercises: [
            {
              id: 'en-a1-u4-l1-e1',
              type: 'multiple-choice',
              prompt: "Qaysi jumla grammatik jihatdan MUTLAQO TO'G'RI?",
              options: [
                'He cans speak German very well.',
                'He can to speak German very well.',
                'He can speak German very well.',
                'He does can speak German very well.',
              ],
              correctAnswer: 2,
              explanation:
                "'Can' barcha shaxslar uchun o'zgarmaydi va o'zidan keyin 'to' siz asosiy fe'lni talab qiladi: 'He can speak'.",
            },
            {
              id: 'en-a1-u4-l1-e2',
              type: 'multiple-choice',
              prompt: "'Siz shaxmat o'ynay olasizmi?' savolining to'g'ri inglizcha shakli qaysi?",
              options: [
                'Do you can play chess?',
                'Can you play chess?',
                'Are you can play chess?',
                'Can you to play chess?',
              ],
              correctAnswer: 1,
              explanation:
                "'Can' bilan so'roq 'Can + ega + fe'l' formulasida yasaladi: 'Can you play chess?'.",
            },
            {
              id: 'en-a1-u4-l1-e3',
              type: 'multiple-choice',
              prompt:
                "Inkor gapni to'g'ri to'ldiring: 'Sarah is only three years old, so she ___ ride a bicycle.'",
              options: ["can't", "doesn't can", "isn't can", 'cannots'],
              correctAnswer: 0,
              explanation: "'Can' ning inkori 'can't' (yoki cannot) bo'ladi.",
            },
            {
              id: 'en-a1-u4-l1-e4',
              type: 'multiple-choice',
              prompt:
                "Musiqa asboblari oldidan qaysi artikl qo'llaniladi? 'He can play ___ piano.'",
              options: ['a', 'an', 'the', 'artikl kerak emas'],
              correctAnswer: 2,
              explanation:
                "Ingliz tilida cholg'u asboblarini chalish haqida gapirganda 'play the + asbob' (play the piano, play the guitar) ishlatiladi.",
            },
            {
              id: 'en-a1-u4-l1-e5',
              type: 'multiple-choice',
              prompt: "'Kechirasiz, qalamingizni olib tursam maylimi?' so'rovi qanday aytiladi?",
              options: [
                'Can I borrow your pencil, please?',
                'Do I can take your pencil?',
                'I can borrow your pencil?',
                'Can borrow your pencil me?',
              ],
              correctAnswer: 0,
              explanation: "Ruxsat so'rash: 'Can I borrow..., please?'.",
            },
          ],
        },
      },
      {
        id: 'en-a1-u4-l1-s3',
        title: 'Dars Testi: Modal Verb Can',
        type: 'test',
        estimatedMinutes: 5,
        testData: {
          instructions: "Savollarga to'g'ri javob berib, mavzuni mustahkamlang.",
          passingScorePercentage: 80,
          questions: [
            {
              id: 'en-a1-u4-l1-q1',
              question: "Modal fe'l 'can' haqidagi qaysi qoida to'g'ri?",
              options: [
                "Uchinchi shaxs birlikda (he/she/it) -s qo'shimchasini oladi.",
                "O'zidan keyingi fe'l bilan 'to' yuklamasi orqali bog'lanadi.",
                "Barcha shaxslar bilan bir xil shaklda va 'to' siz fe'l bilan qo'llanadi.",
                "Savol tuzishda 'do/does' yordamchi fe'liga muhtoj bo'ladi.",
              ],
              correctAnswerIndex: 2,
              explanation:
                "'Can' modal fe'li barcha shaxslar uchun bir xil va fe'lning sof asosi (bare infinitive) bilan keladi.",
            },
            {
              id: 'en-a1-u4-l1-q2',
              question:
                "'Climb' (tirmashib chiqmoq) so'zidagi qaysi harf talaffuz qilinmaydi (silent letter)?",
              options: ['c', 'l', 'm', 'b'],
              correctAnswerIndex: 3,
              explanation: "'Climb' /klaɪm/ so'zida oxirgi 'b' harfi talaffuz etilmaydi.",
            },
            {
              id: 'en-a1-u4-l1-q3',
              question: "'Can you speak French?' savoliga qisqa inkor javob qanday beriladi?",
              options: ["No, I don't.", "No, I can't.", "No, I'm not.", 'No, I not can.'],
              correctAnswerIndex: 1,
              explanation: "'Can' bilan berilgan savolga inkor: 'No, I can't'.",
            },
            {
              id: 'en-a1-u4-l1-q4',
              question:
                "'My grandmother can knit warm sweaters.' Ushbu jumlada 'can' nima ma'noni bildiradi?",
              options: [
                "Ruxsat so'rash",
                'Jismoniy/aqliy mahorat va qobiliyat',
                'Majburiyat',
                'Iltimos',
              ],
              correctAnswerIndex: 1,
              explanation:
                "Bu yerda buvisining to'qish mahorati va qobiliyati (ability) ifodalangan.",
            },
            {
              id: 'en-a1-u4-l1-q5',
              question:
                "IELTS Speaking: 'Is there any skill you would like to learn in the future?' savoliga qaysi javob eng maqbul?",
              options: [
                'I can swim already.',
                'In the future, I would definitely love to learn how to play the guitar because music helps me unwind after a hectic day.',
                'Future skill is no need.',
                'I am learn computer maybe.',
              ],
              correctAnswerIndex: 1,
              explanation:
                "'I would definitely love to learn how to play the guitar because music helps me unwind after a hectic day' - Band 6.5+ darajasidagi tabiiy va asosli javob.",
            },
          ],
        },
      },
    ],
  },
  {
    id: 'en-a1-u4-l2',
    courseId: 'english-a1',
    unitId: 'en-a1-u4',
    unitTitle: 'Unit 4: Hobbies & Practical Skills',
    language: 'en',
    level: 'A1',
    lessonNumber: 2,
    title: 'Hobbies & Free Time Activities',
    description:
      "Bo'sh vaqt mashg'ulotlari, sevimli qiziqishlar va fe'llar uyg'unligi (play, go, do).",
    estimatedDurationMinutes: 14,
    icon: '🎨',
    steps: [
      {
        id: 'en-a1-u4-l2-s1',
        title: "Xobbi va Fe'llar Uyg'unligi",
        type: 'learn',
        estimatedMinutes: 5,
        learnData: {
          title: 'Free Time Activities: Play, Go, Do',
          explanation:
            "Bo'sh vaqt va sevimli mashg'ulotlarni ifodalashda fe'llarning to'g'ri ishlatilishi:\n\n1. Uch asosiy xobbi fe'li (Play, Go, Do qoidasi):\n- PLAY: To'p bilan o'ynaladigan sport turlari va raqobatli o'yinlar uchun:\n  • play football, play tennis, play chess, play video games.\n- GO: -ing bilan tugaydigan ochiq havoda harakatlanish faoliyatlari uchun:\n  • go swimming, go running, go cycling, go hiking, go fishing.\n- DO: Yakkama-yakka sport, jang san'atlari va gimnastika uchun (to'psiz):\n  • do karate, do yoga, do gymnastics, do judo.\n\n2. Boshqa sevimli mashg'ulotlar:\n- read fiction books (badiiy kitoblar o'qimoq)\n- listen to acoustic music (musiqa tinglamoq - 'listen to' har doim 'to' bilan!)\n- take artistic photos (suratga olmoq)\n- watch documentary movies (hujjatli filmlar tomosha qilmoq).\n\n3. O'zbek o'rganuvchilari uchun xavfli tuzoqlar (Common Pitfalls):\n- ❌ \"I play swimming on Sundays.\" -> ✅ \"I GO swimming on Sundays.\" (-ing bilan tugaydigan sportlar 'go' oladi).\n- ❌ \"I listen music.\" -> ✅ \"I listen TO music.\" ('Listen' fe'lidan keyin 'to' tushib qolmasligi shart).\n- ❌ \"I do football.\" -> ✅ \"I PLAY football.\" (To'pli o'yinlar 'play' bo'ladi).\n\n4. IELTS Speaking Part 1 Foundation Corner:\n- Topic: Hobbies and Leisure Time\n- Examiner: \"What do you enjoy doing in your spare time?\"\n- Model Band 6.0+ Answer: \"In my leisure time, I am quite keen on reading historical fiction and cycling in the local park. Doing outdoor activities helps me recharge my batteries after a long study week.\"\n- Examiner-Approved Idiom: \"recharge my batteries\" (kuch to'plab dam olmoq), \"in my spare/leisure time\" (bo'sh vaqtimda).",
          vocabulary: [
            {
              term: 'leisure',
              reading: '/ˈleʒə/',
              meaning: "bo'sh vaqt, dam olish vaqti",
              exampleSentence: 'Most working adults have very little leisure time during the week.',
              exampleTranslation:
                "Aksariyat ishlaydigan insonlarda hafta davomida juda oz bo'sh vaqt bo'ladi.",
            },
            {
              term: 'cycling',
              reading: '/ˈsaɪklɪŋ/',
              meaning: 'velosiped haydash',
              exampleSentence: 'I regularly go cycling around the quiet city lake.',
              exampleTranslation:
                "Men sokin shahar ko'li atrofida muntazam velosiped haydashga boraman.",
            },
            {
              term: 'hiking',
              reading: '/ˈhaɪkɪŋ/',
              meaning: "tog'da piyoda sayr qilish / yurish",
              exampleSentence:
                'We are planning to go hiking in the Chimgan mountains this weekend.',
              exampleTranslation:
                "Biz bu dam olish kunlarida Chimyon tog'larida piyoda sayr qilishni rejalashtiryapmiz.",
            },
            {
              term: 'photography',
              reading: '/fəˈtɒɡrəfi/',
              meaning: "fotosurat olish san'ati",
              exampleSentence:
                'Landscape photography requires plenty of patience and good natural light.',
              exampleTranslation:
                "Manzara fotosurati juda ko'p sabr va yaxshi tabiiy yorug'likni talab qiladi.",
            },
            {
              term: 'gardening',
              reading: '/ˈɡɑːdnɪŋ/',
              meaning: "bog'dorchilik",
              exampleSentence: 'My grandfather finds peace and joy in gardening.',
              exampleTranslation: "Bobom bog'dorchilikdan xotirjamlik va quvonch topadi.",
            },
            {
              term: 'board game',
              reading: '/bɔːd ɡeɪm/',
              meaning: "stol usti o'yini (shaxmat, monopoliyaga o'xshash)",
              exampleSentence: 'Playing board games with close friends is entertaining.',
              exampleTranslation: "Yaqin do'stlar bilan stol usti o'yinlarini o'ynash maroqli.",
            },
            {
              term: 'listen to',
              reading: '/ˈlɪs.ən tuː/',
              meaning: "tinglamoq, quloq solmoq ('to' bilan ishlatiladi)",
              exampleSentence: 'I always listen to podcasts while preparing breakfast.',
              exampleTranslation: 'Men har doim nonushta tayyorlayotganda podkastlarni tinglayman.',
            },
            {
              term: 'martial arts',
              reading: '/ˌmɑːʃəl ˈɑːts/',
              meaning: "jang san'atlari (karate, taekvondo)",
              exampleSentence:
                'Practising martial arts builds physical strength and mental discipline.',
              exampleTranslation:
                "Jang san'ati bilan shug'ullanish jismoniy kuch va ruhiy intizomni tarbiyalaydi.",
            },
          ],
        },
      },
      {
        id: 'en-a1-u4-l2-s2',
        title: 'Xobbi Mashqlari',
        type: 'practice',
        estimatedMinutes: 4,
        practiceData: {
          instructions: "Play, Go, Do va xobbilar bo'yicha to'g'ri variantni tanlang.",
          exercises: [
            {
              id: 'en-a1-u4-l2-e1',
              type: 'multiple-choice',
              prompt:
                "Bo'sh joyni to'g'ri fe'l bilan to'ldiring: 'Every Saturday morning, I ___ swimming at the sports club.'",
              options: ['play', 'go', 'do', 'make'],
              correctAnswer: 1,
              explanation:
                "-ing bilan tugaydigan sport turlari (swimming, cycling, running) 'go' bilan ishlatiladi.",
            },
            {
              id: 'en-a1-u4-l2-e2',
              type: 'multiple-choice',
              prompt: "Judo va karate kabi yakkama-yakka jang san'atlari uchun qaysi fe'l mos?",
              options: ['do', 'play', 'go', 'have'],
              correctAnswer: 0,
              explanation:
                "Yakkama-yakka to'psiz sportlar 'do' bilan ishlatiladi: 'do judo', 'do karate'.",
            },
            {
              id: 'en-a1-u4-l2-e3',
              type: 'multiple-choice',
              prompt: "Qaysi jumla grammatik jihatdan to'g'ri?",
              options: [
                'I love listening music.',
                'I love listening to music.',
                'I love listen music.',
                'I love to listening music.',
              ],
              correctAnswer: 1,
              explanation:
                "'Listen' fe'lidan keyin obyekt kelsa, 'to' predlogi bo'lishi shart: 'listening to music'.",
            },
            {
              id: 'en-a1-u4-l2-e4',
              type: 'multiple-choice',
              prompt: "'Chess' (shaxmat) o'yini uchun qaysi fe'l mos keladi?",
              options: ['go chess', 'do chess', 'play chess', 'make chess'],
              correctAnswer: 2,
              explanation:
                "Stol o'yinlari va musobaqa o'yinlari uchun 'play' ishlatiladi: 'play chess'.",
            },
            {
              id: 'en-a1-u4-l2-e5',
              type: 'multiple-choice',
              prompt: "'Dam olish kunlarida nima bilan shug'ullanishni yoqtirasiz?' savoli qaysi?",
              options: [
                'What do you like doing on weekends?',
                'What you like do on weekends?',
                'What are you like do on weekends?',
                'How do you doing on weekends?',
              ],
              correctAnswer: 0,
              explanation:
                "'What do you like doing on weekends?' - grammatik jihatdan mukammal tuzilgan savol.",
            },
          ],
        },
      },
      {
        id: 'en-a1-u4-l2-s3',
        title: 'Dars Testi: Free Time Activities',
        type: 'test',
        estimatedMinutes: 5,
        testData: {
          instructions: "Savollarga to'g'ri javob berib, mavzuni mustahkamlang.",
          passingScorePercentage: 80,
          questions: [
            {
              id: 'en-a1-u4-l2-q1',
              question: "Qaysi juftlikda fe'l va faoliyat mosligi xato berilgan?",
              options: ['play football', 'go hiking', 'do gymnastics', 'play yoga'],
              correctAnswerIndex: 3,
              explanation:
                "Yoga to'p o'yini emas, shuning uchun 'play yoga' xato; to'g'risi: 'do yoga'.",
            },
            {
              id: 'en-a1-u4-l2-q2',
              question: "'Photography' so'zida urg'u nechanchi bo'g'inga tushadi?",
              options: [
                "1-bo'g'inga (PHO-tography)",
                "2-bo'g'inga (pho-TO-graphy)",
                "3-bo'g'inga (photo-GRA-phy)",
                "4-bo'g'inga (photogra-PHY)",
              ],
              correctAnswerIndex: 1,
              explanation: "'Photography' /fəˈtɒɡrəfi/ so'zida urg'u 2-bo'g'inga tushadi.",
            },
            {
              id: 'en-a1-u4-l2-q3',
              question: "'Bo'sh vaqtimda' ma'nosidagi eng tabiiy akademik ifoda qaysi?",
              options: [
                'in my leisure time',
                'in my empty clock',
                'at my zero time',
                'on my free hour',
              ],
              correctAnswerIndex: 0,
              explanation:
                "'In my leisure time' yoki 'in my spare time' - bo'sh vaqt ma'nosidagi sof tabiiy iboralar.",
            },
            {
              id: 'en-a1-u4-l2-q4',
              question:
                "'He ___ cycling along the river bank every morning.' Bo'sh joyga qaysi fe'l qo'yiladi?",
              options: ['go', 'goes', 'plays', 'does'],
              correctAnswerIndex: 1,
              explanation:
                "'He' uchinchi shaxs birlik bo'lgani sababli fe'lga -es qo'shiladi: 'goes cycling'.",
            },
            {
              id: 'en-a1-u4-l2-q5',
              question:
                "IELTS Speaking: 'Why do you think having a hobby is important?' savoliga qaysi javob kuchli dalil keltiradi?",
              options: [
                'Hobby is good because no work.',
                'Having a hobby is crucial because it reduces mental stress, keeps the mind engaged, and helps maintain a healthy work-life balance.',
                'I have many hobbies like sleep.',
                'People must have hobby.',
              ],
              correctAnswerIndex: 1,
              explanation:
                "'Having a hobby is crucial because it reduces mental stress, keeps the mind engaged, and helps maintain a healthy work-life balance' - Band 7.0 darajasidagi yuqori saviyali javob.",
            },
          ],
        },
      },
    ],
  },
  {
    id: 'en-a1-u4-l3',
    courseId: 'english-a1',
    unitId: 'en-a1-u4',
    unitTitle: 'Unit 4: Hobbies & Practical Skills',
    language: 'en',
    level: 'A1',
    lessonNumber: 3,
    title: 'Likes, Dislikes & Preferences',
    description:
      "Yoqtirish, yoqtirmaslik va afzal ko'rish darajalari (like, love, enjoy, hate + V-ing).",
    estimatedDurationMinutes: 14,
    icon: '❤️',
    steps: [
      {
        id: 'en-a1-u4-l3-s1',
        title: 'Xohish-istak va Gerund (V-ing)',
        type: 'learn',
        estimatedMinutes: 5,
        learnData: {
          title: 'Expressing Preferences: Love, Like, Prefer, Hate + Verb-ing',
          explanation:
            'Ingliz tilida biror faoliyatni yoqtirish yoki yoqtirmaslik darajalari:\n\n1. His-tuyg\'u shkalasi (The Preference Scale):\n- ❤️ Love (juda qattiq yaxshi ko\'rmoq): "I love cooking delicious meals."\n- 😊 Like / Enjoy (yoqtirmoq / rohatlanmoq): "She likes reading detective novels." / "We enjoy spending time together."\n- ⚖️ Prefer ... to ... (afzal ko\'rmoq): "I prefer tea to coffee." / "I prefer walking to driving."\n- 😐 Don\'t mind (farqi yo\'q / qarshi emasman): "I don\'t mind washing the dishes."\n- 👎 Dislike / Don\'t like (yoqtirmaslik): "He doesn\'t like waking up early."\n- 💔 Hate (nafratlanmoq / yomon ko\'rmoq): "I hate standing in long queues."\n\n2. Asosiy Grammatik Qoida — Gerund (V-ing):\n- Ushbu his-tuyg\'u fe\'llaridan keyin harakat fe\'li kelsa, unga **-ing** qo\'shimchasi qo\'shiladi:\n  • ✅ "I enjoy swimming." (NOT: "I enjoy to swim" ❌).\n  • ✅ "She hates cleaning her room."\n\n3. O\'zbek tili bilan qiyosiy tahlil va Xavfli tuzoqlar:\n- O\'zbek tilida "Men kitob o\'qishni yoqtiraman" deyiladi (\'o\'qish\' harakat nomi). Ingliz tilida bu \'reading\' gerundiysi bilan to\'liq mos keladi.\n- ❌ "I like play video games." -> ✅ "I like PLAYING video games." (Harakat bo\'lsa -ing qo\'shilishi shart).\n- ❌ "I prefer tea than coffee." -> ✅ "I prefer tea TO coffee." (\'Prefer\' bilan \'than\' emas, \'to\' ishlatiladi!).\n- ❌ "I very like this song." -> ✅ "I like this song VERY MUCH." (\'Very\' to\'g\'ridan-to\'g\'ri \'like\' oldidan kelmaydi!).\n\n4. IELTS Speaking Part 1 Foundation Corner:\n- Topic: Preferences & Daily Choices\n- Examiner: "Do you prefer tea or coffee?"\n- Model Band 6.0+ Answer: "To be frank, I strongly prefer green tea to coffee. Drinking tea in the morning keeps me alert and energetic without the sudden crash that coffee sometimes gives."\n- Advanced Linker: "To be frank" (ochig\'ini aytganda), "strongly prefer X to Y" (X ni Y dan keskin ustun ko\'rmoq).',
          vocabulary: [
            {
              term: 'enjoy',
              reading: '/ɪnˈdʒɔɪ/',
              meaning: 'rohatlanmoq, maroq olmoq (har doim V-ing oladi)',
              exampleSentence: 'I truly enjoy listening to classical music in the evenings.',
              exampleTranslation:
                'Men oqshomlari mumtoz musiqa tinglashdan chin dildan rohatlanaman.',
            },
            {
              term: 'hate',
              reading: '/heɪt/',
              meaning: 'nafratlanmoq, umuman yoqtirmaslik',
              exampleSentence: 'Most people hate waiting in traffic jams on hot days.',
              exampleTranslation: "Ko'pchilik issiq kunlarda tirbandlikda kutishni yomon ko'radi.",
            },
            {
              term: 'prefer',
              reading: '/prɪˈfɜː/',
              meaning: "afzal ko'rmoq (prefer X to Y)",
              exampleSentence: 'I prefer working in a quiet space to studying in a crowded cafe.',
              exampleTranslation:
                "Men gavjum kafeda o'qishdan ko'ra sokin joyda ishlashni afzal ko'raman.",
            },
            {
              term: "don't mind",
              reading: '/dəʊnt maɪnd/',
              meaning: "qarshi emasman, menga farqi yo'q",
              exampleSentence: "I don't mind helping you with the household chores.",
              exampleTranslation:
                'Menga uy yumushlarida yordam berish qiyin emas / qarshi emasman.',
            },
            {
              term: 'keen on',
              reading: '/kiːn ɒn/',
              meaning: "juda qiziqmoq, ishqibozi bo'lmoq",
              exampleSentence: 'My brother is exceptionally keen on learning foreign languages.',
              exampleTranslation: "Akam xorijiy tillarni o'rganishga o'ta qiziqadi.",
            },
            {
              term: 'fond of',
              reading: '/fɒnd əv/',
              meaning: "yaxshi ko'rmoq, mehr qo'ymoq",
              exampleSentence: 'She is extremely fond of taking care of stray animals.',
              exampleTranslation:
                "U qarovsiz hayvonlarga g'amxo'rlik qilishni juda yaxshi ko'radi.",
            },
            {
              term: 'fan of',
              reading: '/fæn əv/',
              meaning: "ishqibozi / muhlisi bo'lmoq",
              exampleSentence: 'I am a big fan of historical documentary films.',
              exampleTranslation: 'Men tarixiy hujjatli filmlarning katta ishqiboziman.',
            },
            {
              term: 'queue',
              reading: '/kjuː/',
              meaning: 'navbat (Britaniya inglizchasida)',
              exampleSentence: 'Nobody likes standing in a long queue at the supermarket checkout.',
              exampleTranslation:
                'Supermarket kassasida uzun navbatda turishni hech kim yoqtirmaydi.',
            },
          ],
        },
      },
      {
        id: 'en-a1-u4-l3-s2',
        title: 'Likes va Dislikes Mashqlari',
        type: 'practice',
        estimatedMinutes: 4,
        practiceData: {
          instructions: "Bo'sh joylarni to'g'ri fe'l shakli bilan to'ldiring.",
          exercises: [
            {
              id: 'en-a1-u4-l3-e1',
              type: 'multiple-choice',
              prompt: "Bo'sh joyni to'ldiring: 'She really enjoys ___ modern art exhibitions.'",
              options: ['visit', 'visiting', 'to visit', 'visited'],
              correctAnswer: 1,
              explanation:
                "'Enjoy' fe'li o'zidan keyin har doim gerundiy (V-ing) shaklini oladi: 'enjoys visiting'.",
            },
            {
              id: 'en-a1-u4-l3-e2',
              type: 'multiple-choice',
              prompt:
                "'Men qahvadan ko'ra choyni afzal ko'raman' jumlasiga qaysi bog'lovchi kerak? 'I prefer tea ___ coffee.'",
              options: ['than', 'to', 'from', 'over than'],
              correctAnswer: 1,
              explanation:
                "'Prefer' bilan ikki narsani taqqoslaganda 'to' predlogi ishlatiladi: 'prefer tea to coffee'.",
            },
            {
              id: 'en-a1-u4-l3-e3',
              type: 'multiple-choice',
              prompt: "Qaysi jumla ingliz tili qoidalariga ko'ra TO'G'RI?",
              options: [
                'I very like apple juice.',
                'I like very apple juice.',
                'I like apple juice very much.',
                'I like very much apple juice.',
              ],
              correctAnswer: 2,
              explanation:
                "'Very' so'zi to'g'ridan-to'g'ri 'like' bilan kelmaydi; 'very much' gapning oxiriga qo'yiladi: 'I like apple juice very much'.",
            },
            {
              id: 'en-a1-u4-l3-e4',
              type: 'multiple-choice',
              prompt: "'Menga qorong'uda yolg'iz yurish yoqmaydi.' Qaysi variant to'g'ri?",
              options: [
                "I don't like walk alone in the dark.",
                "I don't like walking alone in the dark.",
                'I not like walking alone in the dark.',
                "I don't liking walk alone in the dark.",
              ],
              correctAnswer: 1,
              explanation: "'Don't like + V-ing': 'I don't like walking alone in the dark'.",
            },
            {
              id: 'en-a1-u4-l3-e5',
              type: 'multiple-choice',
              prompt:
                "'He is keen ___ learning how to program in Python.' Bo'sh joyga qaysi predlog mos keladi?",
              options: ['in', 'at', 'on', 'with'],
              correctAnswer: 2,
              explanation: "'Keen on' - biror narsaga qattiq qiziqmoq iborasidir.",
            },
          ],
        },
      },
      {
        id: 'en-a1-u4-l3-s3',
        title: 'Dars Testi: Likes & Preferences',
        type: 'test',
        estimatedMinutes: 5,
        testData: {
          instructions: "Savollarga to'g'ri javob berib, mavzuni mustahkamlang.",
          passingScorePercentage: 80,
          questions: [
            {
              id: 'en-a1-u4-l3-q1',
              question: "Qaysi fe'ldan keyin faqat V-ing (gerund) shakli ishlatiladi?",
              options: ['want', 'need', 'enjoy', 'decide'],
              correctAnswerIndex: 2,
              explanation:
                "'Enjoy' fe'lidan keyin faqat gerund (V-ing) qo'llanadi (I enjoy reading).",
            },
            {
              id: 'en-a1-u4-l3-q2',
              question: "'I don't mind washing the car.' Bu jumla nimani anglatadi?",
              options: [
                "Mashinani yuvishni yomon ko'raman.",
                "Mashinani yuvishga qarshi emasman / farqi yo'q.",
                "Mashina yuvishni juda yaxshi ko'raman.",
                'Mashina yuvishni xohlamayman.',
              ],
              correctAnswerIndex: 1,
              explanation:
                "'Don't mind' - muammo yo'q, qarshiligim yo'q, xursandchilik bilan bajara olaman ma'nosini bildiradi.",
            },
            {
              id: 'en-a1-u4-l3-q3',
              question:
                "'She ___ playing video games; she thinks they are a waste of time.' Bo'sh joyga qaysi so'z mos?",
              options: ['loves', 'enjoys', 'hates', 'keen on'],
              correctAnswerIndex: 2,
              explanation:
                "U vaqtni behuda sarflash deb hisoblagani sababli, 'hates' (yomon ko'radi) so'zi mos keladi.",
            },
            {
              id: 'en-a1-u4-l3-q4',
              question:
                "'Fond' sifati qaysi predlog bilan birikib 'yaxshi ko'rmoq' ma'nosini beradi?",
              options: ['fond in', 'fond of', 'fond with', 'fond at'],
              correctAnswerIndex: 1,
              explanation: "'Fond of' (she is fond of music) - yaxshi ko'rmoq, mehr qo'ymoq.",
            },
            {
              id: 'en-a1-u4-l3-q5',
              question:
                "IELTS Speaking: 'What kind of music do you dislike?' savoliga qaysi javob madaniyatli va yuqori saviyali?",
              options: [
                'I hate loud music very bad.',
                'To be completely honest, I am not particularly fond of heavy rock music because I find it rather jarring and difficult to relax to.',
                'Music dislike is rock.',
                'No dislike music, all like.',
              ],
              correctAnswerIndex: 1,
              explanation:
                "'I am not particularly fond of... because I find it rather jarring...' - xushmuomala, boy leksika va to'liq grammatik aniqlik namoyishi.",
            },
          ],
        },
      },
    ],
  },
  {
    id: 'en-a1-u4-l4',
    courseId: 'english-a1',
    unitId: 'en-a1-u4',
    unitTitle: 'Unit 4: Hobbies & Practical Skills',
    language: 'en',
    level: 'A1',
    lessonNumber: 4,
    title: 'Present Continuous: Actions Happening Now',
    description:
      "Hozirgi davomli zamon (am / is / are + V-ing), imlo qoidalari va vaqt ko'rsatkichlari.",
    estimatedDurationMinutes: 14,
    icon: '⚡',
    steps: [
      {
        id: 'en-a1-u4-l4-s1',
        title: 'Hozirgi Davomli Zamon Asoslari',
        type: 'learn',
        estimatedMinutes: 5,
        learnData: {
          title: 'Present Continuous: Form, Meaning, and Spelling',
          explanation:
            "Ayni gapirilayotgan vaqtda sodir bo'layotgan harakatlarni ifodalash:\n\n1. Grammatik Formulalar:\n- Darak gap: Ega + am / is / are + Fe'l-ing\n  • I am reading a book right now.\n  • He / She / It is writing an email.\n  • We / You / They are studying in the library.\n- Inkor gap: Ega + am not / isn't / aren't + Fe'l-ing\n  • \"She isn't sleeping; she is preparing for the test.\"\n- So'roq gap: Am / Is / Are + Ega + Fe'l-ing?\n  • \"Are you listening to the teacher?\" -> \"Yes, I am.\" / \"No, I'm not.\"\n\n2. Fe'lga -ing qo'shilishining imlo qoidalari (Spelling Rules):\n- Odatiy holat: read -> reading, play -> playing, study -> studying.\n- So'nggi 'e' harfi tushib qoladi: write -> writing, take -> taking, make -> making.\n- Qisqa unli + bitta undosh bilan tugagan bir bo'g'inli fe'llarda oxirgi undosh ikkilanadi:\n  • run -> running, sit -> sitting, swim -> swimming, stop -> stopping.\n- 'ie' bilan tugasa 'y' ga aylanadi: lie -> lying, die -> dying.\n\n3. Vaqt ko'rsatkichlari (Time Markers):\n- now (hozir), right now (aynan hozir), at the moment (ayni paytda), currently (hozirda), Look! (Qara!), Listen! (Eshit!).\n\n4. O'zbek o'rganuvchilari uchun xavfli tuzoqlar (Common Pitfalls):\n- ❌ \"I writing an essay now.\" -> ✅ \"I AM writing an essay now.\" ('to be' yordamchisi tushib qolmasligi shart!).\n- ❌ \"He is runing.\" -> ✅ \"He is RUNNING.\" (Imloda qo'shaloq undosh qoidasi!).\n- ❌ \"Look! The bus comes.\" -> ✅ \"Look! The bus IS COMING.\" (Ko'z o'ngingizdagi harakat Present Continuous da bo'ladi).\n\n5. IELTS Speaking Part 1 Foundation Corner:\n- Topic: Current Activities / Studies\n- Examiner: \"What are you currently studying or working on?\"\n- Model Band 6.0+ Answer: \"At the moment, I am preparing intensively for my university entrance examinations, so I am spending most of my evenings at the public library.\"\n- Examiner Tip: \"At the moment\" va \"Currently\" iboralari imtihonda 'hozirgi bosqichdagi hayot' haqida gapirganda tabiiy akademik jilo beradi.",
          vocabulary: [
            {
              term: 'right now',
              reading: '/raɪt naʊ/',
              meaning: "aynan hozir, shu onning o'zida",
              exampleSentence: 'I cannot take your call because I am driving right now.',
              exampleTranslation:
                "Qo'ng'irog'ingizga javob bera olmayman, chunki aynan hozir mashina haydayapman.",
            },
            {
              term: 'at the moment',
              reading: '/ət ðə ˈməʊmənt/',
              meaning: 'ayni paytda, hozirgi vaqtda',
              exampleSentence: 'The manager is speaking with an important client at the moment.',
              exampleTranslation: 'Menejer ayni paytda muhim mijoz bilan gaplashyapti.',
            },
            {
              term: 'currently',
              reading: '/ˈkʌrəntli/',
              meaning: 'hozirgi kunlarda, ayni davrda',
              exampleSentence: 'She is currently working on an innovative environmental project.',
              exampleTranslation: 'U hozirgi kunda innovatsion ekologik loyiha ustida ishlayapti.',
            },
            {
              term: 'lie',
              reading: '/laɪ/',
              meaning: "yotmoq (ing qo'shilganda: lying)",
              exampleSentence: 'The tired cat is lying in the sunshine on the balcony.',
              exampleTranslation: 'Charchagan mushuk balkonda quyosh nuri ostida yotibdi.',
            },
            {
              term: 'prepare',
              reading: '/prɪˈpeə/',
              meaning: "tayyorgarlik ko'rmoq, tayyorlamoq",
              exampleSentence: 'We are preparing a delicious dinner for our arriving guests.',
              exampleTranslation:
                'Biz yetib kelayotgan mehmonlarimiz uchun mazali kechki ovqat tayyorlayapmiz.',
            },
            {
              term: 'deliver',
              reading: '/dɪˈlɪvə/',
              meaning: 'yetkazib bermoq (kuryer)',
              exampleSentence: 'The courier is delivering your ordered parcel right now.',
              exampleTranslation:
                'Kuryer siz buyurtma qilgan posilkani aynan hozir yetkazib beryapti.',
            },
            {
              term: 'look',
              reading: '/lʊk/',
              meaning: 'qaramoq (Look! diqqatni tortish)',
              exampleSentence: 'Look! The heavy snow is falling over the garden.',
              exampleTranslation: "Qara! Bog' uzra qalin qor yog'yapti.",
            },
            {
              term: 'listen',
              reading: '/ˈlɪs.ən/',
              meaning: 'eshitmoq / quloq solmoq',
              exampleSentence: 'Listen! Someone is knocking loudly on the front door.',
              exampleTranslation: 'Eshit! Kimdir old eshikni qattiq taqillatyapti.',
            },
          ],
        },
      },
      {
        id: 'en-a1-u4-l4-s2',
        title: 'Present Continuous Mashqlari',
        type: 'practice',
        estimatedMinutes: 4,
        practiceData: {
          instructions: "To'g'ri fe'l shakli va yordamchi fe'lni tanlang.",
          exercises: [
            {
              id: 'en-a1-u4-l4-e1',
              type: 'multiple-choice',
              prompt: "Bo'sh joyni to'ldiring: 'Listen! The baby ___ in the nursery room.'",
              options: ['cries', 'is crying', 'are crying', 'crying'],
              correctAnswer: 1,
              explanation:
                "'Listen!' so'zi harakat ayni paytda sodir bo'layotganini bildiradi. 'The baby' birlikda, shuning uchun 'is crying'.",
            },
            {
              id: 'en-a1-u4-l4-e2',
              type: 'multiple-choice',
              prompt: "'Swim' fe'liga -ing qo'shilganda to'g'ri imlo qaysi?",
              options: ['swiming', 'swimming', 'swimeing', 'swimmying'],
              correctAnswer: 1,
              explanation:
                "Qisqa unli va bitta undosh bilan tugagan bir bo'g'inli so'zda oxirgi undosh ikkilanadi: 'swimming'.",
            },
            {
              id: 'en-a1-u4-l4-e3',
              type: 'multiple-choice',
              prompt: "Qaysi jumla grammatik jihatdan to'g'ri?",
              options: [
                'They is watching a documentary right now.',
                'They are watching a documentary right now.',
                'They watching a documentary right now.',
                'They are watch a documentary right now.',
              ],
              correctAnswer: 1,
              explanation:
                "'They' ko'plik olmoshi 'are' bilan keladi va fe'lga -ing qo'shiladi: 'They are watching'.",
            },
            {
              id: 'en-a1-u4-l4-e4',
              type: 'multiple-choice',
              prompt: "'Siz hozir nima qilyapsiz?' savoli qanday tuziladi?",
              options: [
                'What do you do right now?',
                'What are you doing right now?',
                'What you are doing right now?',
                'What is you doing right now?',
              ],
              correctAnswer: 1,
              explanation:
                "Ayni damdagi harakat uchun Present Continuous so'roq shakli: 'What are you doing right now?'.",
            },
            {
              id: 'en-a1-u4-l4-e5',
              type: 'multiple-choice',
              prompt: "'Lie' (yotmoq) fe'lining Present Continuous shakli qaysi?",
              options: ['lieing', 'lying', 'liying', 'laying'],
              correctAnswer: 1,
              explanation:
                "'ie' bilan tugovchi fe'llarda 'ie' harflari 'y' ga aylanadi: lie -> lying.",
            },
          ],
        },
      },
      {
        id: 'en-a1-u4-l4-s3',
        title: 'Dars Testi: Present Continuous',
        type: 'test',
        estimatedMinutes: 5,
        testData: {
          instructions: "Savollarga to'g'ri javob berib, mavzuni mustahkamlang.",
          passingScorePercentage: 80,
          questions: [
            {
              id: 'en-a1-u4-l4-q1',
              question: 'Present Continuous zamonining asosiy tuzilish formulasi qaysi?',
              options: [
                "Ega + do/does + Fe'l",
                "Ega + am/is/are + Fe'l-ing",
                "Ega + have/has + Fe'l",
                "Ega + Fe'l-s",
              ],
              correctAnswerIndex: 1,
              explanation: 'Present Continuous: Ega + to be (am/is/are) + Verb-ing.',
            },
            {
              id: 'en-a1-u4-l4-q2',
              question: "'Run' fe'lining to'g'ri -ing shakli qaysi?",
              options: ['runing', 'running', 'runeing', 'runnying'],
              correctAnswerIndex: 1,
              explanation: "'Run' so'zida oxirgi 'n' ikkilanadi: 'running'.",
            },
            {
              id: 'en-a1-u4-l4-q3',
              question:
                "Qaysi so'z Present Continuous zamonining kalit vaqt ko'rsatkichi hisoblanadi?",
              options: ['yesterday', 'always', 'at the moment', 'last year'],
              correctAnswerIndex: 2,
              explanation: "'At the moment' (ayni paytda) - hozirgi davomli zamon belgisidir.",
            },
            {
              id: 'en-a1-u4-l4-q4',
              question: "'Look! It ___ heavily outside.' Bo'sh joyni to'g'ri to'ldiring:",
              options: ['snows', 'is snowing', 'are snowing', 'is snow'],
              correctAnswerIndex: 1,
              explanation: "'Look!' ko'z o'ngimizdagi ayni damdagi jarayon: 'It is snowing'.",
            },
            {
              id: 'en-a1-u4-l4-q5',
              question:
                "IELTS Speaking: 'What are people in your city doing nowadays?' savoliga eng to'liq javob qaysi?",
              options: [
                'People are work.',
                'Currently, many citizens are adopting healthier lifestyles, so lots of people are exercising in parks and riding bicycles.',
                'In city people walking always.',
                'They does exercise now.',
              ],
              correctAnswerIndex: 1,
              explanation:
                "'Currently, many citizens are adopting... lots of people are exercising...' - hozirgi davrdagi trendlarni to'g'ri grammatik ifodalaydi.",
            },
          ],
        },
      },
    ],
  },
  {
    id: 'en-a1-u5-l1',
    courseId: 'english-a1',
    unitId: 'en-a1-u5',
    unitTitle: 'Unit 5: Travel & Shopping',
    language: 'en',
    level: 'A1',
    lessonNumber: 1,
    title: 'Travel, Transport & Buying Tickets',
    description:
      'Sayohat qilish, jamoat transporti, chipta xarid qilish (single/return) va stansiyada muloqot.',
    estimatedDurationMinutes: 14,
    icon: '🚆',
    steps: [
      {
        id: 'en-a1-u5-l1-s1',
        title: 'Transport va Chipta Xaridi',
        type: 'learn',
        estimatedMinutes: 5,
        learnData: {
          title: 'Travel Vocabulary & Booking Transport',
          explanation:
            'Sayohat va jamoat transportidan foydalanish asoslari:\n\n1. Transport vositalari va Predloglar:\n- \'BY\' predlogi: Har qanday mexanik transport vositasi bilan harakatlanganda ishlatiladi:\n  • by train (poyezdda), by bus (avtobusda), by plane (samolyotda), by car (mashinada), by metro (metroda).\n- LEKIN PIYODA yurish uchun faqat **ON FOOT** ishlatiladi (❌ by foot emas!).\n  • "I usually go to university on foot because it is very close."\n\n2. Chipta xarid qilish iboralari (Buying Tickets):\n- Single ticket: Bir tomonga chipta (One-way ticket).\n- Return ticket: Borish-kelish chiptasi (Round-trip ticket).\n- Madaniy so\'rovlar:\n  • "Could I have a return ticket to Samarkand, please?"\n  • "Which platform does the high-speed train depart from?" (Poyezd nechanchi platformadan jo\'naydi?)\n  • "What time does the next flight arrive?" (Keyingi samolyot soat nechada yetib keladi?).\n\n3. O\'zbek o\'rganuvchilari uchun xavfli tuzoqlar (Common Pitfalls):\n- ❌ "I go to work by foot." -> ✅ "I go to work ON FOOT." (Piyoda faqat \'on foot\'!).\n- ❌ "Which platform the train leaves?" -> ✅ "Which platform DOES the train leave from?" (So\'roq gapda yordamchi fe\'l egadan oldinda!).\n- ❌ "I want two tickets for Samarkand." -> ✅ "Could I have two tickets to Samarkand, please?" (Xushmuomala so\'rov).\n\n4. IELTS Speaking Part 1 Foundation Corner:\n- Topic: Public Transport & Travel\n- Examiner: "How do you usually travel around your city?"\n- Model Band 6.0+ Answer: "Generally speaking, I rely on the underground metro system because it is remarkably punctual and allows me to steer clear of heavy rush-hour traffic."\n- Band 6.5+ Expressions: "rely on" (tayanmoq, foydalanmoq), "remarkably punctual" (hayratlanarli darajada aniq vaqtida yuradigan), "steer clear of" (chetlab o\'tmoq), "rush-hour traffic" (tig\'iz vaqtdagi tirbandlik).',
          vocabulary: [
            {
              term: 'single ticket',
              reading: '/ˈsɪŋɡəl ˈtɪkɪt/',
              meaning: 'bir tomonga chipta',
              exampleSentence: 'I only need a single ticket because my brother will drive me back.',
              exampleTranslation:
                'Menga faqat bir tomonga chipta kerak, chunki akam meni mashinada qaytarib olib keladi.',
            },
            {
              term: 'return ticket',
              reading: '/rɪˈtɜːn ˈtɪkɪt/',
              meaning: 'borish-kelish (ikki tomonlama) chiptasi',
              exampleSentence: 'Buying a return ticket is often more economical than two singles.',
              exampleTranslation:
                "Borish-kelish chiptasini olish odatda ikkita bittalik chiptadan ko'ra arzonroq tushadi.",
            },
            {
              term: 'platform',
              reading: '/ˈplætfɔːm/',
              meaning: "temiryo'l platformasi / perron",
              exampleSentence: 'The high-speed train to Bukhara will depart from platform four.',
              exampleTranslation: "Buxoroga tezyurar poyezd to'rtinchi perrondan yo'lga chiqadi.",
            },
            {
              term: 'passenger',
              reading: '/ˈpæsɪndʒə/',
              meaning: "yo'lovchi",
              exampleSentence: 'All passengers must fasten their seat belts during take-off.',
              exampleTranslation:
                "Barcha yo'lovchilar samolyot ko'tarilayotganda xavfsizlik kamarlarini taqishlari shart.",
            },
            {
              term: 'departure',
              reading: '/dɪˈpɑːtʃə/',
              meaning: "jo'nab ketish (vaqti)",
              exampleSentence: 'Check the electronic board for the estimated departure time.',
              exampleTranslation: "Kutilayotgan jo'nash vaqti uchun elektron tabloga qarang.",
            },
            {
              term: 'arrival',
              reading: '/əˈraɪvəl/',
              meaning: 'yetib kelish / kelish zali',
              exampleSentence: 'Her family was waiting excitedly in the airport arrival hall.',
              exampleTranslation:
                'Uning oilasi aeroportning kutib olish zalida hayajon bilan kutayotgan edi.',
            },
            {
              term: 'luggage',
              reading: '/ˈlʌɡɪdʒ/',
              meaning: 'yuk, chamadonlar (sanalmaydi)',
              exampleSentence: 'How many pieces of luggage are you checking in today?',
              exampleTranslation: 'Bugun nechta yuk birligini topshiryapsiz?',
            },
            {
              term: 'on foot',
              reading: '/ɒn fʊt/',
              meaning: 'piyoda (harakatlanish)',
              exampleSentence:
                'Since the weather was pleasant, we decided to explore the ancient city on foot.',
              exampleTranslation:
                "Ob-havo yoqimli bo'lgani uchun biz qadimiy shaharni piyoda aylanib ko'rishga qaror qildik.",
            },
          ],
        },
      },
      {
        id: 'en-a1-u5-l1-s2',
        title: 'Transport Mashqlari',
        type: 'practice',
        estimatedMinutes: 4,
        practiceData: {
          instructions: "To'g'ri predlog va sayohat iboralarini tanlang.",
          exercises: [
            {
              id: 'en-a1-u5-l1-e1',
              type: 'multiple-choice',
              prompt:
                "'Piyoda maktabga boraman' jumlasidagi to'g'ri predlogni tanlang: 'I go to school ___ foot.'",
              options: ['by', 'on', 'with', 'in'],
              correctAnswer: 1,
              explanation: "Piyoda yurish faqat 'on foot' deb aytiladi ('by foot' xato).",
            },
            {
              id: 'en-a1-u5-l1-e2',
              type: 'multiple-choice',
              prompt: "Kassirga borish-kelish chiptasi so'rashning to'g'ri usuli qaysi?",
              options: [
                'Give me go and back ticket.',
                'Could I have a return ticket to London, please?',
                'I want two-side paper please.',
                'Return ticket give now.',
              ],
              correctAnswer: 1,
              explanation:
                "'Could I have a return ticket to..., please?' - eng to'g'ri va madaniyatli ibora.",
            },
            {
              id: 'en-a1-u5-l1-e3',
              type: 'multiple-choice',
              prompt: "Poyezd qaysi platformadan jo'nashini so'rash qolipi qaysi?",
              options: [
                'Which platform does the train leave from?',
                'Where platform train leaves?',
                'Which platform leaves the train from?',
                'What platform the train is going?',
              ],
              correctAnswer: 0,
              explanation:
                "'Which platform does the train leave from?' - yordamchi fe'l 'does' egadan oldinda bo'lgan to'g'ri so'roq tuzilishi.",
            },
            {
              id: 'en-a1-u5-l1-e4',
              type: 'multiple-choice',
              prompt: "'Luggage' (yuk) so'zi haqidagi qaysi qoida to'g'ri?",
              options: [
                "U sanaladi va unga 'luggages' deb ko'plik qo'shiladi.",
                "U sanalmaydigan ot bo'lib, ko'plikda -s olmaydi.",
                "Oldiga har doim 'a luggage' artikli qo'yiladi.",
                'Faqat samolyotda ishlatiladi.',
              ],
              correctAnswer: 1,
              explanation:
                "'Luggage' ingliz tilida sanalmaydigan ot bo'lib, 'luggages' deb aytish xatodir.",
            },
            {
              id: 'en-a1-u5-l1-e5',
              type: 'multiple-choice',
              prompt: "'Poyezdda sayohat qilish' ingliz tilida qanday ifodalanadi?",
              options: [
                'travel on train',
                'travel by train',
                'travel with train',
                'travel through train',
              ],
              correctAnswer: 1,
              explanation:
                "Transport turlari bilan harakatlanganda 'by' predlogi ishlatiladi: 'by train'.",
            },
          ],
        },
      },
      {
        id: 'en-a1-u5-l1-s3',
        title: 'Dars Testi: Travel & Transport',
        type: 'test',
        estimatedMinutes: 5,
        testData: {
          instructions: "Savollarga to'g'ri javob berib, mavzuni mustahkamlang.",
          passingScorePercentage: 80,
          questions: [
            {
              id: 'en-a1-u5-l1-q1',
              question: 'Qaysi transport ifodasida predlog xato ishlatilgan?',
              options: ['by bus', 'by metro', 'by foot', 'by plane'],
              correctAnswerIndex: 2,
              explanation: "'by foot' noto'g'ri; ingliz tilida faqat 'on foot' qo'llaniladi.",
            },
            {
              id: 'en-a1-u5-l1-q2',
              question: "'Single ticket' nima ma'noni bildiradi?",
              options: [
                'Faqat bir kishilik chipta',
                'Faqat bir tomonga chipta (borish)',
                'Borish va qaytish chiptasi',
                'Chegirmali talaba chiptasi',
              ],
              correctAnswerIndex: 1,
              explanation:
                "'Single ticket' (yoki Amerika inglizchasida 'one-way ticket') - faqat bir tomonga amal qiluvchi chipta.",
            },
            {
              id: 'en-a1-u5-l1-q3',
              question:
                "Aeroportda samolyotlarning yetib kelish vaqti ko'rsatiladigan hudud nima deyiladi?",
              options: ['Departures', 'Arrivals', 'Platforms', 'Checkouts'],
              correctAnswerIndex: 1,
              explanation:
                "'Arrivals' - samolyotlar yoki poyezdlar yetib keladigan hudud (uchib kelish zali).",
            },
            {
              id: 'en-a1-u5-l1-q4',
              question:
                "'The express train arrives ___ platform three.' Bo'sh joyga qaysi predlog mos?",
              options: ['at', 'in', 'to', 'from'],
              correctAnswerIndex: 0,
              explanation: "Platformaga yetib kelish: 'arrives at platform three'.",
            },
            {
              id: 'en-a1-u5-l1-q5',
              question:
                "IELTS Speaking: 'Do you prefer travelling by train or by bus?' savoliga qaysi javob boy leksika va to'g'ri asos keltiradi?",
              options: [
                'Bus because cheap.',
                'I definitely prefer travelling by train because it is considerably more spacious and allows me to read comfortably without experiencing motion sickness.',
                'Train is go fast.',
                'I am like both same.',
              ],
              correctAnswerIndex: 1,
              explanation:
                "'I definitely prefer travelling by train because it is considerably more spacious and allows me to...' - Band 6.5+ darajasidagi tabiiy va kuchli dalillarga ega javob.",
            },
          ],
        },
      },
    ],
  },
  {
    id: 'en-a1-u5-l2',
    courseId: 'english-a1',
    unitId: 'en-a1-u5',
    unitTitle: 'Unit 5: Travel & Shopping',
    language: 'en',
    level: 'A1',
    lessonNumber: 2,
    title: 'Shopping, Clothes & Asking Prices',
    description:
      "Do'konda xarid qilish, narx so'rash (How much is/are?), kiyim o'lchamlari va kiyib ko'rish (try on).",
    estimatedDurationMinutes: 14,
    icon: '🛍️',
    steps: [
      {
        id: 'en-a1-u5-l2-s1',
        title: "Do'konda Narx So'rash va Kiyim Tanlash",
        type: 'learn',
        estimatedMinutes: 5,
        learnData: {
          title: 'Shopping Phrases: Sizes, Fitting Rooms & Payment',
          explanation:
            'Do\'konda xarid qilish va kiyim sotib olish qoidalari:\n\n1. Narx so\'rash qolipi (How much is vs How much are):\n- Birlikdagi buyumlar yoki sanalmaydigan narsalar uchun:\n  • "How much IS this woolen sweater?" -> "It is 25 pounds."\n- Ko\'plikdagi buyumlar (shimlar, poyabzallar, ko\'zoynaklar) uchun:\n  • "How much ARE these leather boots?" -> "They are 80 dollars."\n\n2. Kiyib ko\'rish va O\'lcham (Fitting & Sizes):\n- Fitting room: Kiyim almashtirish / kiyib ko\'rish xonasi.\n- Try on: Kiyib ko\'rmoq.\n  • "Can I try this shirt on?" / "Can I try them on?" (Olmosh o\'rtaga tushadi: try IT on, try THEM on).\n- O\'lcham so\'rash:\n  • "Do you have this jacket in a medium / large size?"\n  • "It is too tight (juda tor) / It is too loose (juda keng)."\n\n3. To\'lov qilish (Payment Methods):\n- "Can I pay by credit card?" (Karta orqali to\'lasam bo\'ladimi? - by card).\n- "I will pay in cash." (Naqd pulda to\'layman - in cash).\n- Receipt (/rɪˈsiːt/): To\'lov cheki (\'p\' harfi o\'qilmaydi!).\n\n4. O\'zbek o\'rganuvchilari uchun xavfli tuzoqlar (Common Pitfalls):\n- ❌ "How many is this shirt?" -> ✅ "How MUCH is this shirt?" (Narx har doim \'how much\' bilan so\'raladi).\n- ❌ "Can I try on it?" -> ✅ "Can I try IT on?" (Frazeologik fe\'lda olmosh o\'rtaga kiradi).\n- ❌ "Receipt" so\'zidagi \'p\' ni o\'qish -> /rɪˈsiːt/ deb talaffuz qilinadi, \'p\' mutlaqo o\'qilmaydi.\n\n5. IELTS Speaking Part 1 Foundation Corner:\n- Topic: Shopping & Buying Clothes\n- Examiner: "Do you enjoy shopping for clothes?"\n- Model Band 6.0+ Answer: "To be honest, I am not a massive fan of shopping in crowded malls. I much prefer browsing online stores because it saves both time and money."\n- Examiner-Friendly Vocabulary: "browse online stores" (onlayn do\'konlarni ko\'zdan kechirmoq), "crowded malls" (gavjum savdo markazlari).',
          vocabulary: [
            {
              term: 'fitting room',
              reading: '/ˈfɪtɪŋ ruːm/',
              meaning: "kiyim kiyib ko'rish xonasi",
              exampleSentence: 'Excuse me, where are the fitting rooms located?',
              exampleTranslation: "Kechirasiz, kiyib ko'rish xonalari qayerda joylashgan?",
            },
            {
              term: 'try on',
              reading: '/traɪ ɒn/',
              meaning: "kiyib ko'rmoq",
              exampleSentence:
                'You should definitely try this stylish jacket on before purchasing it.',
              exampleTranslation:
                "Bu zamonaviy kurtkani sotib olishdan oldin, albatta, kiyib ko'rishingiz kerak.",
            },
            {
              term: 'receipt',
              reading: '/rɪˈsiːt/',
              meaning: "chek, kvitansiya (p harfi o'qilmaydi)",
              exampleSentence: 'Keep your sales receipt safely in case you need an exchange.',
              exampleTranslation:
                "Agar almashtirish kerak bo'lib qolsa deb, to'lov chekingizni ehtiyot qilib saqlang.",
            },
            {
              term: 'discount',
              reading: '/ˈdɪskaʊnt/',
              meaning: 'chegirma',
              exampleSentence: 'They are offering a twenty percent discount on all winter shoes.',
              exampleTranslation:
                'Ular barcha qishki poyabzallarga yigirma foizli chegirma taklif qilmoqdalar.',
            },
            {
              term: 'cashier',
              reading: '/kæˈʃɪə/',
              meaning: "kassir (to'lov qabul qiluvchi)",
              exampleSentence: 'Please pay the cashier at the front counter.',
              exampleTranslation: "Iltimos, to'lovni oldingi peshtaxtadagi kassirga to'lang.",
            },
            {
              term: 'affordable',
              reading: '/əˈfɔːdəbəl/',
              meaning: 'hamyonbop, arzon va qulay narxli',
              exampleSentence: 'This local brand offers high quality at very affordable prices.',
              exampleTranslation:
                'Ushbu mahalliy brend juda hamyonbop narxlarda yuqori sifatni taklif etadi.',
            },
            {
              term: 'tight',
              reading: '/taɪt/',
              meaning: 'tor, siqadigan (kiyim)',
              exampleSentence: 'These shoes are slightly too tight for my feet.',
              exampleTranslation: "Bu poyabzal oyog'imga biroz torlik qilyapti.",
            },
            {
              term: 'size',
              reading: '/saɪz/',
              meaning: "o'lcham (kiyim yoki poyabzal o'lchami)",
              exampleSentence: 'Could you check if you have this coat in size medium?',
              exampleTranslation:
                "Sizda bu paltoning o'rtacha (medium) o'lchami bormi, tekshirib bera olasizmi?",
            },
          ],
        },
      },
      {
        id: 'en-a1-u5-l2-s2',
        title: 'Xarid Mashqlari',
        type: 'practice',
        estimatedMinutes: 4,
        practiceData: {
          instructions: "Bo'sh joylarni to'g'ri grammatik shakl bilan to'ldiring.",
          exercises: [
            {
              id: 'en-a1-u5-l2-e1',
              type: 'multiple-choice',
              prompt:
                "Krassovkaning narxini so'rash uchun qaysi savol to'g'ri? 'How much ___ these sneakers?'",
              options: ['is', 'are', 'do', 'does'],
              correctAnswer: 1,
              explanation:
                "'Sneakers' ko'plik ot bo'lgani sababli 'How much are these sneakers?' bo'ladi.",
            },
            {
              id: 'en-a1-u5-l2-e2',
              type: 'multiple-choice',
              prompt: "'Bu ko'ylakni kiyib ko'rsam maylimi?' jumlasi qaysi?",
              options: [
                'Can I try on it?',
                'Can I try it on?',
                'Do I try on this?',
                'May I try on they?',
              ],
              correctAnswer: 1,
              explanation: "'Try it on' - 'it' olmoshi frazeologik fe'l o'rtasiga qo'yiladi.",
            },
            {
              id: 'en-a1-u5-l2-e3',
              type: 'multiple-choice',
              prompt:
                "Kredit karta bilan to'lashda qaysi predlog ishlatiladi? 'Can I pay ___ card?'",
              options: ['with', 'by', 'in', 'on'],
              correctAnswer: 1,
              explanation:
                "Karta orqali to'lov har doim 'by credit card' yoki 'by card' deb aytiladi.",
            },
            {
              id: 'en-a1-u5-l2-e4',
              type: 'multiple-choice',
              prompt: "'Receipt' (chek) so'zining to'g'ri talaffuzi qaysi?",
              options: [
                '/re-sipt/ (p harfi eshitiladi)',
                "/rɪˈsiːt/ (p harfi o'qilmaydi)",
                "/re-sept/ (p harfi urg'uli)",
                '/ri-kept/',
              ],
              correctAnswer: 1,
              explanation: "'Receipt' so'zida 'p' harfi 'silent' (talaffuz etilmaydi): /rɪˈsiːt/.",
            },
            {
              id: 'en-a1-u5-l2-e5',
              type: 'multiple-choice',
              prompt: "Do'konda kiyim juda tor kelganda sotuvchiga nima deyiladi?",
              options: [
                'It is too tight.',
                'It is too loose.',
                'It is very affordable.',
                'It is too cheap.',
              ],
              correctAnswer: 0,
              explanation: "'It is too tight' - u juda tor keldi deganidir.",
            },
          ],
        },
      },
      {
        id: 'en-a1-u5-l2-s3',
        title: 'Dars Testi: Shopping & Prices',
        type: 'test',
        estimatedMinutes: 5,
        testData: {
          instructions: "Savollarga to'g'ri javob berib, mavzuni mustahkamlang.",
          passingScorePercentage: 80,
          questions: [
            {
              id: 'en-a1-u5-l2-q1',
              question: "Narx so'rashda qaysi jumla xato hisoblanadi?",
              options: [
                'How much is this leather bag?',
                'How much are those black shoes?',
                'How many is this silk scarf?',
                'How much does this jacket cost?',
              ],
              correctAnswerIndex: 2,
              explanation:
                "Narx so'rashda hech qachon 'how many' ishlatilmaydi; 'How much is...' bo'lishi lozim.",
            },
            {
              id: 'en-a1-u5-l2-q2',
              question: "'Naqd pulda to'layman' jumlasining to'g'ri inglizcha tarjimasi qaysi?",
              options: [
                'I will pay by cash.',
                'I will pay in cash.',
                'I pay with cash money.',
                'I will pay on cash.',
              ],
              correctAnswerIndex: 1,
              explanation: "Naqd pulda to'lash: 'in cash' (kartada esa: 'by card').",
            },
            {
              id: 'en-a1-u5-l2-q3',
              question: "Kiyim sotib olishdan oldin uni qayerda o'lchab ko'riladi?",
              options: [
                'at the cashier desk',
                'in the fitting room',
                'in the waiting room',
                'at the platform',
              ],
              correctAnswerIndex: 1,
              explanation: "Kiyim kiyib ko'riladigan maxsus xona 'fitting room' deyiladi.",
            },
            {
              id: 'en-a1-u5-l2-q4',
              question: "'Affordable' so'zining ma'nosi nima?",
              options: [
                'Haddan tashqari qimmat',
                "O'ta sifatli va kamyob",
                "Hamyonbop, cho'ntakbop narxli",
                'Eski va sifatsiz',
              ],
              correctAnswerIndex: 2,
              explanation:
                "'Affordable' - sotib olishga qurb yetadigan, qimmat bo'lmagan, hamyonbop.",
            },
            {
              id: 'en-a1-u5-l2-q5',
              question:
                "IELTS Speaking: 'Do you prefer shopping alone or with friends?' savoliga qaysi javob ravon va to'liq?",
              options: [
                'Alone because fast.',
                'I genuinely prefer shopping alone because I can take my time, compare prices calmly, and make decisions without feeling rushed.',
                'With friends is have fun.',
                'I never buy clothes.',
              ],
              correctAnswerIndex: 1,
              explanation:
                "'I genuinely prefer shopping alone because I can take my time, compare prices calmly...' - Band 6.5+ leksika va to'liq ravonlik.",
            },
          ],
        },
      },
    ],
  },
  {
    id: 'en-a1-u5-l3',
    courseId: 'english-a1',
    unitId: 'en-a1-u5',
    unitTitle: 'Unit 5: Travel & Shopping',
    language: 'en',
    level: 'A1',
    lessonNumber: 3,
    title: 'Hotel Booking & Check-In English',
    description:
      "Mehmonxonada xona band qilish, ro'yxatdan o'tish (check-in / check-out) va xizmatlar so'rash.",
    estimatedDurationMinutes: 14,
    icon: '🏨',
    steps: [
      {
        id: 'en-a1-u5-l3-s1',
        title: 'Mehmonxona Muloqoti Asoslari',
        type: 'learn',
        estimatedMinutes: 5,
        learnData: {
          title: 'Hotel English: Reservations, Key Cards & Amenities',
          explanation:
            'Mehmonxonada xona band qilish va qulay joylashish uchun asosiy iboralar:\n\n1. Mehmonxonaga kirish va Ro\'yxatdan o\'tish (Check-in):\n- Qabulxona xodimiga (receptionist) murojaat:\n  • "Hello, I have a reservation under the name of Sardor Aliyev." (Salom, mening Sardor Aliyev nomiga band qilingan buyurtmam bor).\n  • "Here is my passport and booking confirmation." (Mana pasportim va bron tasdig\'i).\n- Xona turlari:\n  • Single room: Bir kishilik xona (bitta yotoqli).\n  • Double room: Ikki kishilik xona (bitta katta ikki kishilik karavotli).\n  • Twin room: Ikkita alohida bir kishilik karavotli xona.\n\n2. Mehmonxona xizmatlari va savollar:\n- "Does the room price include breakfast?" (Xona narxiga nonushta kiradimi?)\n- "What is the Wi-Fi password, please?" (Wi-Fi paroli qanday?)\n- "What time is check-out tomorrow?" (Ertaga xonani topshirish soat nechada?).\n- "Could I have a wake-up call at 6:30 AM?" (Meni 6:30 da uyg\'otib qo\'ya olasizmi?).\n\n3. O\'zbek o\'rganuvchilari uchun xavfli tuzoqlar (Common Pitfalls):\n- ❌ "I want check-in." -> ✅ "I would like to check in, please."\n- ❌ "Give me key." -> ✅ "Here is your key card, sir." (Zamonaviy mehmonxonalarda kalit o\'rniga plastik \'key card\' beriladi).\n- ❌ "How much clock check out?" -> ✅ "What time is check-out?"\n\n4. IELTS Speaking Part 1 Foundation Corner:\n- Topic: Holidays & Accommodation\n- Examiner: "What kind of accommodation do you prefer when travelling?"\n- Model Band 6.0+ Answer: "When I travel on holiday, I typically opt for boutique hotels or comfortable guesthouses. They tend to offer warm hospitality and give a more authentic taste of the local culture."\n- Examiner-Friendly Vocabulary: "opt for" (tanlamoq, afzal ko\'rmoq), "boutique hotel" (kichik, shinam mehmonxona), "authentic taste" (haqiqiy, asl tajriba), "warm hospitality" (samimiy mehmondo\'stlik).',
          vocabulary: [
            {
              term: 'reservation',
              reading: '/ˌrezəˈveɪʃən/',
              meaning: 'oldindan band qilish (bron)',
              exampleSentence: 'I made a hotel reservation online three weeks in advance.',
              exampleTranslation:
                'Men uch hafta oldin internet orqali mehmonxona xonasini band qilgandim.',
            },
            {
              term: 'receptionist',
              reading: '/rɪˈsepʃənɪst/',
              meaning: 'qabulxona xodimi (administrator)',
              exampleSentence: 'The friendly receptionist handed us our electronic room keys.',
              exampleTranslation:
                'Xushmuomala administrator bizga xonamizning elektron kalitlarini topshirdi.',
            },
            {
              term: 'key card',
              reading: '/kiː kɑːd/',
              meaning: 'elektron kalit-karta',
              exampleSentence: 'Swipe your key card over the sensor to unlock your door.',
              exampleTranslation: 'Eshigingizni ochish uchun kalit-kartangizni sensorga tekkizing.',
            },
            {
              term: 'check in',
              reading: '/tʃek ɪn/',
              meaning: "ro'yxatdan o'tmoq (mehmonxonaga joylashish)",
              exampleSentence: "Guests can check in at the front desk from two o'clock onwards.",
              exampleTranslation:
                "Mehmonlar soat ikkidan boshlab qabulxonada ro'yxatdan o'tishlari mumkin.",
            },
            {
              term: 'check out',
              reading: '/tʃek aʊt/',
              meaning: 'xonani topshirib ketmoq',
              exampleSentence: 'We must check out before noon to avoid extra charges.',
              exampleTranslation:
                "Qo'shimcha to'lovlardan qochish uchun peshingacha xonani topshirishimiz shart.",
            },
            {
              term: 'double room',
              reading: '/ˈdʌbəl ruːm/',
              meaning: 'ikki kishilik katta karavotli xona',
              exampleSentence: 'We booked a quiet double room with a view of the garden.',
              exampleTranslation: "Biz bog'ga qaragan sokin ikki kishilik xona band qildik.",
            },
            {
              term: 'complimentary',
              reading: '/ˌkɒmplɪˈmentəri/',
              meaning: 'bepul (mehmonxona tomonidan taqdim etiladigan)',
              exampleSentence: 'All guests receive a complimentary bottle of mineral water daily.',
              exampleTranslation:
                'Barcha mehmonlar har kuni bepul mineral suv shishasini oladilar.',
            },
            {
              term: 'wake-up call',
              reading: '/ˈweɪk ʌp kɔːl/',
              meaning: "telefon orqali uyg'otish xizmati",
              exampleSentence:
                'I requested a wake-up call at six in the morning for my early flight.',
              exampleTranslation:
                "Erta tongdagi reysim sababli ertalab soat oltiga uyg'otish xizmatiga buyurtma berdim.",
            },
          ],
        },
      },
      {
        id: 'en-a1-u5-l3-s2',
        title: 'Mehmonxona Mashqlari',
        type: 'practice',
        estimatedMinutes: 4,
        practiceData: {
          instructions: "Bo'sh joylarni to'g'ri ibora bilan to'ldiring.",
          exercises: [
            {
              id: 'en-a1-u5-l3-e1',
              type: 'multiple-choice',
              prompt: "Mehmonxona qabulxonasida 'Mening bronim bor' jumlasi qanday aytiladi?",
              options: [
                'I have a reservation.',
                'I have a ticket room.',
                'I want a room today now.',
                'I am booked bed.',
              ],
              correctAnswer: 0,
              explanation:
                "'I have a reservation' - mehmonxonada bron borligini aytishning standart usuli.",
            },
            {
              id: 'en-a1-u5-l3-e2',
              type: 'multiple-choice',
              prompt: "'Xona narxiga nonushta kiradimi?' savoli qaysi?",
              options: [
                'Does the price include breakfast?',
                'Is breakfast inside price?',
                'Have room breakfast money?',
                'Does breakfast price room?',
              ],
              correctAnswer: 0,
              explanation:
                "'Does the price include breakfast?' - xizmatlar narxga kirishini so'rashning eng to'g'ri grammatik qolipi.",
            },
            {
              id: 'en-a1-u5-l3-e3',
              type: 'multiple-choice',
              prompt: 'Mehmonxonada bepul taqdim etiladigan xizmatlar qanday ataladi?',
              options: ['expensive', 'complimentary', 'forbidden', 'tight'],
              correctAnswer: 1,
              explanation:
                "'Complimentary' - mehmonxona yoki aviakompaniya tomonidan bepul tuhfa qilinadigan xizmat.",
            },
            {
              id: 'en-a1-u5-l3-e4',
              type: 'multiple-choice',
              prompt: "'Ertaga xonani topshirish (ketish) soat nechada?' savoli qaysi?",
              options: [
                'What time is check-out tomorrow?',
                'What time you check out me?',
                'When I can leave room free?',
                'How much clock check out?',
              ],
              correctAnswer: 0,
              explanation:
                "'What time is check-out tomorrow?' - mehmonxonadan chiqish vaqtini so'rashning to'g'ri shakli.",
            },
            {
              id: 'en-a1-u5-l3-e5',
              type: 'multiple-choice',
              prompt: "'Twin room' qanday xonani anglatadi?",
              options: [
                'Bitta katta ikki kishilik karavotli xona',
                'Ikkita alohida bir kishilik karavotli xona',
                'Faqat bir kishilik xona',
                'Oshxonasiz xona',
              ],
              correctAnswer: 1,
              explanation: "'Twin room' - ikkita alohida bittalik karavotga ega bo'lgan xonadir.",
            },
          ],
        },
      },
      {
        id: 'en-a1-u5-l3-s3',
        title: 'Dars Testi: Hotel English',
        type: 'test',
        estimatedMinutes: 5,
        testData: {
          instructions: "Savollarga to'g'ri javob berib, mavzuni mustahkamlang.",
          passingScorePercentage: 80,
          questions: [
            {
              id: 'en-a1-u5-l3-q1',
              question:
                'Mehmonxona xonasining eshigini ochish uchun beriladigan plastik karta nima deyiladi?',
              options: ['credit card', 'key card', 'discount card', 'boarding pass'],
              correctAnswerIndex: 1,
              explanation: "Xona eshigini ochuvchi karta 'key card' deb ataladi.",
            },
            {
              id: 'en-a1-u5-l3-q2',
              question: "'Under the name of...' iborasi qaysi vaziyatda ishlatiladi?",
              options: [
                "Do'konda chek so'raganda",
                'Bron kimning nomiga rasmiylashtirilganini aytganda',
                'Aeroportda pasport topshirganda',
                'Restoranda ovqat tanlaganda',
              ],
              correctAnswerIndex: 1,
              explanation:
                "'I have a reservation under the name of...' - bron falonchi nomiga qilinganini bildiradi.",
            },
            {
              id: 'en-a1-u5-l3-q3',
              question:
                "Ertalab poyezd yoki reysga kechikmaslik uchun qabulxonadan qaysi xizmat so'raladi?",
              options: ['check-out call', 'wake-up call', 'single room call', 'luggage call'],
              correctAnswerIndex: 1,
              explanation: "'Wake-up call' - mijozni telefon orqali uyg'otish xizmati.",
            },
            {
              id: 'en-a1-u5-l3-q4',
              question:
                "Mehmonxonaga yetib kelib, xonaga ro'yxatdan o'tib joylashish jarayoni nima deyiladi?",
              options: ['check-out', 'check-in', 'departure', 'try-on'],
              correctAnswerIndex: 1,
              explanation: "Yetib kelib xonani qabul qilib olish jarayoni 'check-in' deyiladi.",
            },
            {
              id: 'en-a1-u5-l3-q5',
              question:
                "IELTS Speaking: 'What makes a hotel stay enjoyable for you?' savoliga eng yaxshi javob qaysi?",
              options: [
                'Bed is good.',
                'In my opinion, what matters most is clean and quiet rooms, high-speed Wi-Fi, and courteous hotel staff who attend to requests promptly.',
                'Hotel have TV.',
                "I don't like any hotel.",
              ],
              correctAnswerIndex: 1,
              explanation:
                "'clean and quiet rooms, high-speed Wi-Fi, and courteous hotel staff who attend to requests promptly' - Band 7.0 darajasidagi mukammal javob.",
            },
          ],
        },
      },
    ],
  },
  {
    id: 'en-a1-u5-l4',
    courseId: 'english-a1',
    unitId: 'en-a1-u5',
    unitTitle: 'Unit 5: Travel & Shopping',
    language: 'en',
    level: 'A1',
    lessonNumber: 4,
    title: 'Past Simple of To Be: Was & Were',
    description:
      "O'tgan zamonda To Be fe'li (was / were), o'tgan zamon vaqt ko'rsatkichlari (yesterday, last night, ago).",
    estimatedDurationMinutes: 14,
    icon: '⏳',
    steps: [
      {
        id: 'en-a1-u5-l4-s1',
        title: 'Was va Were Qoidalari',
        type: 'learn',
        estimatedMinutes: 5,
        learnData: {
          title: "Past Simple of 'To Be': Was & Were",
          explanation:
            "O'tgan zamonda holat va mavjudlikni ifodalash (To Be fe'lining o'tgan zamoni):\n\n1. Was va Were taqsimoti:\n- WAS (Birlik shaxslar uchun: I, He, She, It):\n  • I was at home yesterday. (Men kecha uyda edim).\n  • She was tired after the long journey. (U uzoq safardan keyin charchagan edi).\n  • The weather was wonderful last weekend. (O'tgan dam olish kunlarida ob-havo ajoyib edi).\n- WERE (Ko'plik shaxslar va You uchun: We, You, They):\n  • We were very happy to see our old friends. (Biz do'stlarimizni ko'rishdan juda xursand edik).\n  • You were late for the lecture this morning.\n  • They were in London last month.\n\n2. Inkor shakli (Wasn't / Weren't):\n- was not -> wasn't (/ˈwɒzənt/)\n- were not -> weren't (/wɜːnt/)\n  • \"He wasn't at the meeting.\"\n  • \"They weren't satisfied with the hotel service.\"\n\n3. So'roq shakli:\n- Was / Were egadan oldinga o'tadi:\n  • \"Were you at home last night?\" -> \"Yes, I was.\" / \"No, I wasn't.\"\n  • \"Where were you born?\" -> \"I was born in Samarkand.\"\n\n4. O'tgan zamon vaqt ko'rsatkichlari (Past Time Markers):\n- yesterday (kecha), yesterday morning (kecha ertalab)\n- last night (kecha tunda), last week (o'tgan hafta), last year (o'tgan yili)\n- two days ago (ikki kun oldin), five years ago (besh yil oldin)\n- in 2018 (2018-yilda).\n\n5. O'zbek o'rganuvchilari uchun xavfli tuzoqlar (Common Pitfalls):\n- ❌ \"We was in Tashkent yesterday.\" -> ✅ \"We WERE in Tashkent yesterday.\" (We bilan har doim 'were'!).\n- ❌ \"Yesterday I am exhausted.\" -> ✅ \"Yesterday I WAS exhausted.\" (Kecha bo'lsa 'was' bo'lishi shart!).\n- ❌ \"Where was you?\" -> ✅ \"Where WERE you?\" ('You' birlikda ham, ko'plikda ham 'were' oladi).\n\n6. IELTS Speaking Part 1 Foundation Corner:\n- Topic: Last Weekend / Childhood\n- Examiner: \"How was your last weekend?\"\n- Model Band 6.0+ Answer: \"To be honest, it was quite relaxing. On Saturday, I was at home catching up on some sleep, and on Sunday evening, my friends and I were at a traditional teahouse.\"\n- Examiner Tip: \"catching up on some sleep\" (to'yib uxlab dam olmoq) - ravon va tabiiy idiomadir.",
          vocabulary: [
            {
              term: 'yesterday',
              reading: '/ˈjestədeɪ/',
              meaning: 'kecha',
              exampleSentence: 'I was busy preparing my presentation all day yesterday.',
              exampleTranslation: "Men kecha kun bo'yi taqdimotimni tayyorlash bilan band edim.",
            },
            {
              term: 'last night',
              reading: '/lɑːst naɪt/',
              meaning: 'kecha oqshom / kecha kechasi',
              exampleSentence: "Where were you at ten o'clock last night?",
              exampleTranslation: "Kecha oqshom soat o'nda qayerda edingiz?",
            },
            {
              term: 'ago',
              reading: '/əˈɡəʊ/',
              meaning: "avval, oldin (vaqtdan keyin qo'yiladi)",
              exampleSentence: 'They arrived in this historic city three days ago.',
              exampleTranslation: 'Ular bu tarixiy shaharga uch kun oldin yetib keldilar.',
            },
            {
              term: 'exhausted',
              reading: '/ɪɡˈzɔːstɪd/',
              meaning: "o'ta charchagan, darmonsiz",
              exampleSentence: 'After the eight-hour hike, all of us were completely exhausted.',
              exampleTranslation:
                "Sakkiz soatlik piyoda yurishdan so'ng barchamiz butunlay charchab holdan toygan edik.",
            },
            {
              term: 'crowded',
              reading: '/ˈkraʊdɪd/',
              meaning: "gavjum, odamlar bilan to'la",
              exampleSentence: 'The central train station was extremely crowded yesterday morning.',
              exampleTranslation: "Kecha ertalab markaziy temiryo'l vokzali o'ta gavjum edi.",
            },
            {
              term: 'wonderful',
              reading: '/ˈwʌndəfəl/',
              meaning: "ajoyib, g'oyat go'zal",
              exampleSentence: 'Our family holiday in the mountains was truly wonderful.',
              exampleTranslation: "Tog'dagi oilaviy ta'tilimiz haqiqatan ham ajoyib o'tdi.",
            },
            {
              term: 'born',
              reading: '/bɔːn/',
              meaning: "tug'ilgan (I was born...)",
              exampleSentence: 'I was born in a peaceful village near Bukhara.',
              exampleTranslation: "Men Buxoro yaqinidagi sokin qishloqda tug'ilganman.",
            },
            {
              term: 'satisfied',
              reading: '/ˈsætɪsfaɪd/',
              meaning: "mamnun, rozi bo'lgan",
              exampleSentence: "The manager was highly satisfied with the team's exam results.",
              exampleTranslation: 'Menejer jamoaning imtihon natijalaridan juda mamnun edi.',
            },
          ],
        },
      },
      {
        id: 'en-a1-u5-l4-s2',
        title: 'Was va Were Mashqlari',
        type: 'practice',
        estimatedMinutes: 4,
        practiceData: {
          instructions: "Bo'sh joylarni to'g'ri 'was' yoki 'were' shakli bilan to'ldiring.",
          exercises: [
            {
              id: 'en-a1-u5-l4-e1',
              type: 'multiple-choice',
              prompt:
                "Bo'sh joyni to'g'ri to'ldiring: 'We ___ in the library all afternoon yesterday.'",
              options: ['was', 'were', 'are', 'been'],
              correctAnswer: 1,
              explanation: "'We' ko'plik olmoshi o'tgan zamonda 'were' oladi: 'We were'.",
            },
            {
              id: 'en-a1-u5-l4-e2',
              type: 'multiple-choice',
              prompt: "Savol gapni to'g'ri tuzing: '___ you at home at 8 o'clock last night?'",
              options: ['Was', 'Were', 'Are', 'Did'],
              correctAnswer: 1,
              explanation:
                "'You' bilan o'tgan zamon To Be so'rog'i 'Were' orqali yasaladi: 'Were you...?'.",
            },
            {
              id: 'en-a1-u5-l4-e3',
              type: 'multiple-choice',
              prompt:
                "Inkor gapni to'ldiring: 'She ___ at school yesterday because she had a fever.'",
              options: ["wasn't", "weren't", "isn't", "didn't was"],
              correctAnswer: 0,
              explanation:
                "'She' uchinchi shaxs birlik uchun o'tgan zamon inkori 'wasn't' bo'ladi.",
            },
            {
              id: 'en-a1-u5-l4-e4',
              type: 'multiple-choice',
              prompt: "Qaysi jumla grammatik jihatdan MUTLAQO TO'G'RI?",
              options: [
                'Where was you born?',
                'Where were you born?',
                'Where are you born in 2000?',
                'Where did you born?',
              ],
              correctAnswer: 1,
              explanation:
                "'Where were you born?' - tug'ilgan joyni so'rashning qat'iy va yagona to'g'ri grammatik qolipi.",
            },
            {
              id: 'en-a1-u5-l4-e5',
              type: 'multiple-choice',
              prompt: "'The weather ___ bright and sunny last Sunday.'",
              options: ['was', 'were', 'is', 'are'],
              correctAnswer: 0,
              explanation:
                "'The weather' birlik sanalmaydigan ot, o'tgan zamonda 'was' ishlatiladi.",
            },
          ],
        },
      },
      {
        id: 'en-a1-u5-l4-s3',
        title: 'Dars Testi: Was & Were',
        type: 'test',
        estimatedMinutes: 5,
        testData: {
          instructions: "Savollarga to'g'ri javob berib, mavzuni mustahkamlang.",
          passingScorePercentage: 80,
          questions: [
            {
              id: 'en-a1-u5-l4-q1',
              question: "Qaysi shaxslar bilan 'was' yordamchi fe'li ishlatiladi?",
              options: ['I, He, She, It', 'We, You, They', 'You, He, They', 'Faqat I va You'],
              correctAnswerIndex: 0,
              explanation:
                "'Was' birlik shaxslar bilan qo'llanadi: I was, He was, She was, It was.",
            },
            {
              id: 'en-a1-u5-l4-q2',
              question: 'Qaysi jumla grammatik jihatdan XATO?',
              options: [
                'They were at the cinema last night.',
                'My brother was exhausted after work.',
                'We was very happy with our holiday.',
                'The streets were crowded yesterday.',
              ],
              correctAnswerIndex: 2,
              explanation: "'We was' xato, to'g'risi: 'We WERE very happy'.",
            },
            {
              id: 'en-a1-u5-l4-q3',
              question: "'Three days ago' iborasi nima ma'noni anglatadi?",
              options: ['Uch kundan keyin', 'Uch kun oldin', 'Uch kundan beri', 'Uch kun davomida'],
              correctAnswerIndex: 1,
              explanation: "'Ago' - oldin, avval deganidir (three days ago = uch kun oldin).",
            },
            {
              id: 'en-a1-u5-l4-q4',
              question:
                "'Were they satisfied with the food?' savoliga to'g'ri qisqa inkor javob qaysi?",
              options: [
                "No, they weren't.",
                "No, they wasn't.",
                "No, they didn't.",
                "No, they aren't.",
              ],
              correctAnswerIndex: 0,
              explanation: "'Were they...?' savoliga inkor: 'No, they weren't'.",
            },
            {
              id: 'en-a1-u5-l4-q5',
              question:
                "IELTS Speaking: 'Tell me about a memorable day in your past.' savoliga eng yaxshi boshlanish qaysi?",
              options: [
                'Past day is good.',
                'A particularly memorable day was my high school graduation two years ago. Everyone was ecstatic, and our teachers were deeply proud of our achievements.',
                'I am graduate two years ago.',
                'Yesterday was day memorable.',
              ],
              correctAnswerIndex: 1,
              explanation:
                "'A particularly memorable day was... Everyone was ecstatic, and our teachers were deeply proud...' - Band 6.5+ o'tgan zamon To Be fe'llarini mahorat bilan qo'llagan.",
            },
          ],
        },
      },
    ],
  },
  {
    id: 'en-a1-u5-l5',
    courseId: 'english-a1',
    unitId: 'en-a1-u5',
    unitTitle: 'Unit 5: Travel & Shopping',
    language: 'en',
    level: 'A1',
    lessonNumber: 5,
    title: 'A1 Capstone: Comprehensive Review & IELTS Speaking Simulation',
    description:
      "A1 darajasining barcha grammatik mavzulari bo'yicha to'liq umumlashtiruvchi imtihon va IELTS Speaking Part 1 simulyatsiyasi.",
    estimatedDurationMinutes: 16,
    icon: '🏆',
    steps: [
      {
        id: 'en-a1-u5-l5-s1',
        title: 'A1 Darajasi Xulosasi va IELTS Poydevori',
        type: 'learn',
        estimatedMinutes: 5,
        learnData: {
          title: 'A1 Comprehensive Roadmap & Speaking Strategy',
          explanation:
            'Tabriklaymiz! Siz CEFR A1 (Elementary) darajasining barcha 25 ta darsini to\'liq bosib o\'tdingiz!\n\n1. A1 Grammatika Xaritasi (Master Grammar Blueprint):\n- TO BE (Present & Past): am, is, are & was, were.\n- OT VA EGALIK: Plurals (-s, -es, irregulars), Articles (a/an/the), Possessives (my, your, his, her, \'s).\n- DEMONSTRATIVES: this, that, these, those.\n- PRESENT SIMPLE: Doimiy odatlar, 3-shaxs birlik (-s/es), inkor (don\'t/doesn\'t), so\'roq (Do/Does...?).\n- PRESENT CONTINUOUS: Ayni damdagi harakatlar (am/is/are + V-ing) va Stative Verbs (know, want, understand).\n- MODAL VERB: Can / Can\'t (qobiliyat va ruxsat).\n- THERE IS / THERE ARE: Xona va joylashuv mavjudligi + predloglar (in, on, between, opposite).\n- VAQT VA SAYOHAT: Soatni aytish (at 7:00), jamoat transporti (by bus, on foot), xaridlar (how much is/are).\n\n2. O\'zbek o\'rganuvchilari uchun TOP-5 Halokatli Xatolar (Final Check):\n1. ❌ "I student" -> ✅ "I AM a student" (To be tushib qolmasin!).\n2. ❌ "He work every day" -> ✅ "He WORK-S every day" (3-shaxs birlikda -s unutmaslik!).\n3. ❌ "In my room have a table" -> ✅ "THERE IS a table in my room."\n4. ❌ "I go by foot" -> ✅ "I go ON FOOT."\n5. ❌ "I am knowing you" -> ✅ "I KNOW you" (Holat fe\'llari -ing olmaydi!).\n\n3. IELTS Speaking Part 1 To\'liq Simulyatsiyasi (Band 6.0 - 6.5):\n- Savol 1 (Hometown): "Where are you from?"\n  • Model: "I was born and raised in Tashkent, which is the bustling capital city of Uzbekistan. It is a modern city with great amenities and convenient public transport."\n- Savol 2 (Daily Routine): "What do you normally do on a typical weekday?"\n  • Model: "On weekdays, I usually wake up at seven o\'clock, have a light breakfast, and commute to my university by metro. In the evenings, I enjoy reading fiction books or cycling in the local park."\n- Savol 3 (Free time): "What do you like to do on weekends?"\n  • Model: "At the weekends, I prefer unwinding with my family. We often cook traditional pilaf together or visit my grandparents in the countryside."',
          vocabulary: [
            {
              term: 'achieve',
              reading: '/əˈtʃiːv/',
              meaning: 'erishmoq, zabt etmoq (maqsadga)',
              exampleSentence:
                'With consistent daily practice, you can achieve your target IELTS score.',
              exampleTranslation:
                "Har kungi muntazam mashg'ulotlar orqali siz o'z ko'zlangan IELTS ballingizga erisha olasiz.",
            },
            {
              term: 'confidence',
              reading: '/ˈkɒnfɪdəns/',
              meaning: "o'ziga ishonch",
              exampleSentence:
                'Mastering A1 grammar builds tremendous confidence for spoken English.',
              exampleTranslation:
                "A1 grammatikasini puxta o'zlashtirish ingliz tilida so'zlashishda ulkan ishonch bag'ishlaydi.",
            },
            {
              term: 'fluency',
              reading: '/ˈfluːənsi/',
              meaning: 'nutq ravonligi, erkinligi',
              exampleSentence:
                'Our primary objective is to develop natural fluency and clear pronunciation.',
              exampleTranslation:
                'Bizning asosiy maqsadimiz — tabiiy nutq ravonligi va aniq talaffuzni shakllantirishdir.',
            },
            {
              term: 'accuracy',
              reading: '/ˈækjərəsi/',
              meaning: 'grammatik aniqlik, xatosizlik',
              exampleSentence:
                'Grammatical accuracy is just as crucial as fluency in the IELTS exam.',
              exampleTranslation:
                "IELTS imtihonida grammatik aniqlik ravonlik kabi o'ta muhim ahamiyatga ega.",
            },
            {
              term: 'elementary',
              reading: '/ˌelɪˈmentəri/',
              meaning: "boshlang'ich, asosiy (A1/A2)",
              exampleSentence: 'Congratulations on successfully finishing the elementary level!',
              exampleTranslation:
                "Boshlang'ich (elementary) bosqichni muvaffaqiyatli tamomlaganingiz bilan tabriklaymiz!",
            },
            {
              term: 'progress',
              reading: '/ˈprəʊɡres/',
              meaning: "o'sish, yuksalish, siljish",
              exampleSentence:
                'You have made remarkable progress throughout these twenty-five lessons.',
              exampleTranslation:
                "Siz ushbu yigirma beshta dars davomida hayratlanarli o'sishga erishdingiz.",
            },
            {
              term: 'unwind',
              reading: '/ʌnˈwaɪnd/',
              meaning: 'dam olib hordiq chiqarmoq',
              exampleSentence:
                'Listening to gentle acoustic music helps me unwind after hard work.',
              exampleTranslation:
                'Sokin akustik musiqa tinglash menga mashaqqatli mehnatdan keyin hordiq chiqarishga yordam beradi.',
            },
            {
              term: 'bustling',
              reading: '/ˈbʌslɪŋ/',
              meaning: 'qaynoq, gavjum, hayot qaynagan (shahar)',
              exampleSentence:
                'Samarkand is a bustling historic city that attracts visitors globally.',
              exampleTranslation:
                'Samarqand butun dunyodan sayyohlarni jalb etuvchi gavjum tarixiy shahardir.',
            },
          ],
        },
      },
      {
        id: 'en-a1-u5-l5-s2',
        title: 'A1 Yakuniy Amaliy Mashqlari',
        type: 'practice',
        estimatedMinutes: 5,
        practiceData: {
          instructions:
            "A1 darajasining turli mavzularidagi xatolarni aniqlang va to'g'ri variantni tanlang.",
          exercises: [
            {
              id: 'en-a1-u5-l5-e1',
              type: 'multiple-choice',
              prompt: "Qaysi gapda 3-shaxs birlik qoidasi (Present Simple) to'g'ri qo'llangan?",
              options: [
                'My brother work in a commercial bank.',
                'My brother works in a commercial bank.',
                'My brother is work in a commercial bank.',
                'My brother working in a commercial bank.',
              ],
              correctAnswer: 1,
              explanation:
                "'My brother' (He) uchinchi shaxs birlik, fe'lga -s qo'shiladi: 'works'.",
            },
            {
              id: 'en-a1-u5-l5-e2',
              type: 'multiple-choice',
              prompt: "Ayni damdagi harakat (Present Continuous) uchun to'g'ri gapni tanlang:",
              options: [
                'Listen! Someone knocks at the door.',
                'Listen! Someone is knocking at the door.',
                'Listen! Someone are knocking at the door.',
                'Listen! Someone knocking at the door.',
              ],
              correctAnswer: 1,
              explanation: "'Someone' birlik olmosh hisoblanadi: 'is knocking'.",
            },
            {
              id: 'en-a1-u5-l5-e3',
              type: 'multiple-choice',
              prompt: "'Xonada ikkita qulay divan bor' jumlasining to'g'ri inglizcha shakli qaysi?",
              options: [
                'In the room has two comfortable sofas.',
                'There is two comfortable sofas in the room.',
                'There are two comfortable sofas in the room.',
                'The room have two comfortable sofas.',
              ],
              correctAnswer: 2,
              explanation: "Ko'plikdagi mavjudlik har doim 'There are' bilan ifodalanadi.",
            },
            {
              id: 'en-a1-u5-l5-e4',
              type: 'multiple-choice',
              prompt: "Qaysi jumla o'tgan zamonda (Past Simple To Be) to'g'ri tuzilgan?",
              options: [
                'Yesterday we was at the botanical garden.',
                'Yesterday we were at the botanical garden.',
                'Yesterday we are at the botanical garden.',
                'Yesterday we been at the botanical garden.',
              ],
              correctAnswer: 1,
              explanation: "'We' ko'plik olmoshi o'tgan zamonda 'were' bilan keladi.",
            },
            {
              id: 'en-a1-u5-l5-e5',
              type: 'multiple-choice',
              prompt: "'Can' modal fe'li bilan qaysi jumla to'g'ri berilgan?",
              options: [
                'She can to speak three languages.',
                'She can speaks three languages.',
                'She can speak three languages.',
                'She cans speak three languages.',
              ],
              correctAnswer: 2,
              explanation:
                "'Can' dan keyin fe'l hech qanday qo'shimchasiz va 'to' siz keladi: 'She can speak'.",
            },
          ],
        },
      },
      {
        id: 'en-a1-u5-l5-s3',
        title: 'A1 Yakuniy Baholash Imtihoni',
        type: 'test',
        estimatedMinutes: 6,
        testData: {
          instructions: "A1 darajasi bo'yicha yakuniy imtihon savollariga javob bering.",
          passingScorePercentage: 80,
          questions: [
            {
              id: 'en-a1-u5-l5-q1',
              question:
                "O'zbek o'rganuvchilarining eng ko'p qiladigan 'I student' xatosi qanday tuzatiladi?",
              options: ['I am a student.', 'I is a student.', 'I are student.', 'I be student.'],
              correctAnswerIndex: 0,
              explanation: "Ingliz tilida kesimlik fe'li tushib qolmaydi: 'I am a student'.",
            },
            {
              id: 'en-a1-u5-l5-q2',
              question: "Holat fe'li (stative verb) qaysi javobda to'g'ri qo'llangan?",
              options: [
                'I am understanding you very well now.',
                'I understand you very well now.',
                'I am knowing this grammar.',
                'He is wanting water now.',
              ],
              correctAnswerIndex: 1,
              explanation:
                "'Understand', 'know', 'want' holat fe'llari bo'lib, davomli zamonda (-ing bilan) ishlatilmaydi.",
            },
            {
              id: 'en-a1-u5-l5-q3',
              question: "'Piyoda bormoq' va 'soat 8 da' iboralari qaysi javobda xatosiz berilgan?",
              options: [
                "by foot / in 8 o'clock",
                "on foot / at 8 o'clock",
                "on foot / on 8 o'clock",
                "by foot / at 8 o'clock",
              ],
              correctAnswerIndex: 1,
              explanation: "Piyoda yurish: 'on foot'; soat vaqtlari oldidan: 'at 8 o'clock'.",
            },
            {
              id: 'en-a1-u5-l5-q4',
              question: "'Kecha ob-havo qanday edi?' savolining to'g'ri inglizcha varianti qaysi?",
              options: [
                'What was the weather like yesterday?',
                'What were the weather like yesterday?',
                'How was weather like yesterday?',
                'What the weather was like yesterday?',
              ],
              correctAnswerIndex: 0,
              explanation:
                "'What was the weather like yesterday?' - o'tgan zamondagi ob-havoni so'rash qolipi.",
            },
            {
              id: 'en-a1-u5-l5-q5',
              question:
                "IELTS Speaking Part 1 da 'Tell me about yourself' savoliga eng yaxshi A1/A2 javob qaysi?",
              options: [
                'My name is John. I am 20. I like football.',
                'Well, my name is Sardor. I am currently a university student in Tashkent majoring in economics. In my leisure time, I am keen on reading and learning foreign languages.',
                'I am student, my family four, bye.',
                'Name is Sardor, I live home.',
              ],
              correctAnswerIndex: 1,
              explanation:
                "'Well, my name is... I am currently a university student... majoring in... In my leisure time, I am keen on...' - ravon, bog'lovchilar bilan boyitilgan, A1-A2 darajasidagi eng namunali javob.",
            },
          ],
        },
      },
    ],
  },
];
