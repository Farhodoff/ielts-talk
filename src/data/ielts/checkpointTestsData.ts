export type CheckpointSkill = 'phonetics' | 'grammar' | 'vocabulary' | 'listening' | 'reading';

export interface CheckpointQuestion {
  id: string;
  skill: CheckpointSkill;
  topic: string;
  prompt: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
  audioSnippet?: string;
}

export interface CheckpointTest {
  id: string;
  title: string;
  stageId: number;
  fromLevel: string;
  toLevel: string;
  description: string;
  passingScore: number; // e.g. 16/20 (80%)
  badgeName: string;
  xpReward: number;
  questions: CheckpointQuestion[];
}

export const CHECKPOINT_TESTS: CheckpointTest[] = [
  // =========================================================================
  // CHECKPOINT 1: A1 -> A2 FOUNDATION
  // =========================================================================
  {
    id: 'checkpoint_a1_foundation',
    title: 'A1 Foundation Checkpoint: Poydevor Imtihoni',
    stageId: 1,
    fromLevel: 'A1 (Zero / Beginner)',
    toLevel: 'A2 (Elementary)',
    description:
      'Fonetika (tovushlar), To Be, Present Simple, asosiy olmoshlar va Starter 600 ta baza so‘zlari bo‘yicha bilimingizni tekshiruvchi 20 ta rasmiy test.',
    passingScore: 16,
    badgeName: 'A1 Foundation Verified',
    xpReward: 150,
    questions: [
      {
        id: 'cp1-q1',
        skill: 'phonetics',
        topic: 'Th tovushlari (/θ/ vs /ð/)',
        prompt: 'Qaysi so‘zda "th" jarangli (/ð/) tovush bilan o‘qiladi?',
        options: ['Think', 'Thank', 'This', 'Three'],
        correctAnswerIndex: 2,
        explanation: '"This", "that", "mother" so‘zlarida "th" jarangli /ð/ tovushi beradi.',
        audioSnippet: 'This is my book.',
      },
      {
        id: 'cp1-q2',
        skill: 'phonetics',
        topic: 'Silent Letters (O‘qilmaydigan harflar)',
        prompt: 'Qaysi so‘zda "k" harfi mutlaqo talaffuz qilinmaydi (silent)?',
        options: ['King', 'Kite', 'Know', 'Keep'],
        correctAnswerIndex: 2,
        explanation:
          '"Know", "knife", "knee" kabi so‘zlarda "kn" birikmasida "k" harfi o‘qilmaydi.',
        audioSnippet: 'I know the answer.',
      },
      {
        id: 'cp1-q3',
        skill: 'grammar',
        topic: 'To Be (Present)',
        prompt: 'Bo‘sh joyni to‘ldiring: "My brother and I _______ students at the university."',
        options: ['am', 'is', 'are', 'be'],
        correctAnswerIndex: 2,
        explanation:
          '"My brother and I" bu ko‘plik "biz" (we) ma’nosida bo‘lgani uchun "are" ishlatiladi.',
      },
      {
        id: 'cp1-q4',
        skill: 'grammar',
        topic: 'Present Simple Negation',
        prompt: 'To‘g‘ri inkor shaklini toping: "He _______ coffee in the morning."',
        options: ["doesn't drink", "don't drink", 'not drink', "isn't drink"],
        correctAnswerIndex: 0,
        explanation:
          'He/She/It uchinchi shaxs birlikda Present Simple inkori "doesn\'t + V1" bo‘ladi.',
      },
      {
        id: 'cp1-q5',
        skill: 'grammar',
        topic: 'Articles (a / an)',
        prompt: 'Qaysi gapda artikl to‘g‘ri ishlatilgan?',
        options: [
          'She works as a architect.',
          'She works as an architect.',
          'She works as architect.',
          'She works as one architect.',
        ],
        correctAnswerIndex: 1,
        explanation:
          '"Architect" unli tovush bilan boshlangani sababli "an" noaniq artikli qo‘yiladi.',
      },
      {
        id: 'cp1-q6',
        skill: 'vocabulary',
        topic: 'Numbers and Quantities',
        prompt: '"15" va "50" sonlarining to‘g‘ri yozilishi qaysi qatorda berilgan?',
        options: [
          'Fifty va Fifteen',
          'Fifteen va Fifty',
          'Fiveteen va Fivety',
          'Fifthteen va Fifty',
        ],
        correctAnswerIndex: 1,
        explanation: '15 — fifteen, 50 — fifty deb yoziladi.',
      },
      {
        id: 'cp1-q7',
        skill: 'vocabulary',
        topic: 'Family Members',
        prompt: 'Otaning yoki onaning akasi/ukasi ingliz tilida nima deyiladi?',
        options: ['Cousin', 'Nephew', 'Uncle', 'Aunt'],
        correctAnswerIndex: 2,
        explanation: 'Amaki yoki tog‘a ingliz tilida "uncle" deyiladi.',
      },
      {
        id: 'cp1-q8',
        skill: 'grammar',
        topic: 'Possessive Pronouns',
        prompt: 'Gapni to‘ldiring: "This is not my pen. It is _______."',
        options: ['her', 'hers', 'she', 'him'],
        correctAnswerIndex: 1,
        explanation:
          'Otdan keyin keladigan mustaqil egalik olmoshi "hers" (uning qalami) shaklida bo‘ladi.',
      },
      {
        id: 'cp1-q9',
        skill: 'grammar',
        topic: 'Prepositions of Time',
        prompt:
          'Hafta kunlari oldidan qaysi predlog qo‘yiladi: "We have an English lesson _______ Monday."',
        options: ['in', 'at', 'on', 'by'],
        correctAnswerIndex: 2,
        explanation: 'Aniq kunlar va sana oldidan har doim "on" predlogi ishlatiladi (on Monday).',
      },
      {
        id: 'cp1-q10',
        skill: 'listening',
        topic: 'Everyday Dialogues',
        prompt:
          'Audio fraza: "Excuse me, where is the nearest bus station?" Ushbu savolga eng to‘g‘ri javob qaysi?',
        options: [
          'Yes, I like buses.',
          'Go straight ahead, it is on your left.',
          'At 3 o‘clock.',
          'Because I am late.',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Yo‘nalish so‘ralganda "Go straight ahead, it is on your left" deb yo‘l ko‘rsatiladi.',
        audioSnippet: 'Excuse me, where is the nearest bus station?',
      },
      {
        id: 'cp1-q11',
        skill: 'vocabulary',
        topic: 'Daily Routines',
        prompt: '"Ertalab 7 da uyg‘onmoq" birikmasi to‘g‘ri berilgan qatorni toping:',
        options: [
          'Go to bed at 7 AM',
          'Wake up at 7 AM',
          'Have lunch at 7 AM',
          'Come home at 7 AM',
        ],
        correctAnswerIndex: 1,
        explanation: 'Uyg‘onmoq — "wake up" deb tarjima qilinadi.',
      },
      {
        id: 'cp1-q12',
        skill: 'grammar',
        topic: 'Plural Nouns (Ko‘plik)',
        prompt: '"Child" va "Person" so‘zlarining to‘g‘ri ko‘plik shakli qaysi?',
        options: [
          'Childs and Persons',
          'Children and People',
          'Childrens and Peoples',
          'Childes and People',
        ],
        correctAnswerIndex: 1,
        explanation: 'Bu noto‘g‘ri otlar: child -> children, person -> people bo‘lib o‘zgaradi.',
      },
      {
        id: 'cp1-q13',
        skill: 'phonetics',
        topic: 'Schwa /ə/ tovushi',
        prompt: 'Qaysi so‘zda birinchi bo‘g‘inda Schwa (/ə/) kuchsiz tovush talaffuz qilinadi?',
        options: ['Apple', 'About', 'Actor', 'Angry'],
        correctAnswerIndex: 1,
        explanation: '"About" so‘zida birinchi "a" qisqa va urg‘usiz Schwa /ə/ tovushini beradi.',
        audioSnippet: 'About three miles away.',
      },
      {
        id: 'cp1-q14',
        skill: 'grammar',
        topic: 'There is / There are',
        prompt: 'Bo‘sh joyni to‘ldiring: "_______ three apples on the kitchen table."',
        options: ['There is', 'There are', 'There be', 'There has'],
        correctAnswerIndex: 1,
        explanation: 'Ko‘plikdagi otlar (three apples) uchun "There are" ishlatiladi.',
      },
      {
        id: 'cp1-q15',
        skill: 'reading',
        topic: 'Short Passage Comprehension',
        prompt:
          'Matn: "Jack is 22 years old. He lives in Manchester and works in a bank. He has a cat named Luna." Savol: Where does Jack work?',
        options: ['In a hospital', 'In a school', 'In a bank', 'In a restaurant'],
        correctAnswerIndex: 2,
        explanation: 'Matnda aniq aytilgan: "works in a bank".',
      },
      {
        id: 'cp1-q16',
        skill: 'vocabulary',
        topic: 'Common Adjectives',
        prompt: '"Expensive" (qimmat) so‘zining teskari (antonim) ma’nodagi so‘zi qaysi?',
        options: ['Cheap', 'Modern', 'Heavy', 'Quiet'],
        correctAnswerIndex: 0,
        explanation: 'Expensive (qimmat) ning teskarisi — Cheap (arzon).',
      },
      {
        id: 'cp1-q17',
        skill: 'grammar',
        topic: 'Can / Cannot (Modal verb)',
        prompt: 'To‘g‘ri gap tuzilmasini toping:',
        options: [
          'She can to play the piano.',
          'She can plays the piano.',
          'She can play the piano.',
          'She cans play the piano.',
        ],
        correctAnswerIndex: 2,
        explanation:
          '"Can" modal fe\'lidan keyin fe\'l to‘g‘ridan-to‘g‘ri "to"siz va qo‘shimchasiz (V1) keladi.',
      },
      {
        id: 'cp1-q18',
        skill: 'listening',
        topic: 'Time Telling',
        prompt: 'Audio: "The flight departs at half past six." Samolyot soat nechada uchadi?',
        options: ['06:15', '06:30', '07:30', '06:45'],
        correctAnswerIndex: 1,
        explanation: '"Half past six" bu 6 yarim, ya\'ni 06:30 degani.',
        audioSnippet: 'The flight departs at half past six.',
      },
      {
        id: 'cp1-q19',
        skill: 'grammar',
        topic: 'Wh- Questions',
        prompt:
          'Vaqtni so‘rash uchun qaysi so‘roq so‘zi ishlatiladi: "_______ time does the film start?"',
        options: ['Which', 'What', 'Where', 'Who'],
        correctAnswerIndex: 1,
        explanation: '"What time" — soat nechada / qaysi vaqtda ma\'nosini bildiradi.',
      },
      {
        id: 'cp1-q20',
        skill: 'vocabulary',
        topic: 'Classroom & Study Vocabulary',
        prompt: 'Yangi so‘zlarning ma’nosini bilish uchun foydalaniladigan kitob nima deyiladi?',
        options: ['Newspaper', 'Dictionary', 'Notebook', 'Timetable'],
        correctAnswerIndex: 1,
        explanation: 'Lug‘at kitobi ingliz tilida "Dictionary" deyiladi.',
      },
    ],
  },

  // =========================================================================
  // CHECKPOINT 2: A2 -> B1 ELEMENTARY TO PRE-IELTS
  // =========================================================================
  {
    id: 'checkpoint_a2_elementary',
    title: 'A2 Elementary Checkpoint: O‘rta Bosqichga O‘tish',
    stageId: 2,
    fromLevel: 'A2 (Elementary)',
    toLevel: 'B1 (Intermediate / Pre-IELTS)',
    description:
      'Past Simple (o‘tgan zamon noto‘g‘ri fe’llari), qiyosiy darajalar, modal fe’llar va kundalik muloqot bo‘yicha 20 ta savol.',
    passingScore: 16,
    badgeName: 'A2 Elementary Verified',
    xpReward: 200,
    questions: [
      {
        id: 'cp2-q1',
        skill: 'grammar',
        topic: 'Past Simple Irregular Verbs',
        prompt: '"Buy" va "Catch" fe\'llarining o‘tgan zamon (V2) shakllari qaysi qatorda to‘g‘ri?',
        options: ['Buyed va Catched', 'Bought va Caught', 'Brought va Caught', 'Bought va Cought'],
        correctAnswerIndex: 1,
        explanation: 'Buy -> Bought, Catch -> Caught shaklida o‘zgaradi.',
      },
      {
        id: 'cp2-q2',
        skill: 'grammar',
        topic: 'Past Simple Question',
        prompt: 'To‘g‘ri savol shaklini tanlang: "Where _______ your holidays last summer?"',
        options: ['did you spend', 'did you spent', 'you spent', 'were you spend'],
        correctAnswerIndex: 0,
        explanation: 'Past Simple so‘rog‘ida "Did + subject + V1" ishlatiladi.',
      },
      {
        id: 'cp2-q3',
        skill: 'grammar',
        topic: 'Comparatives & Superlatives',
        prompt:
          'Bo‘sh joyni to‘ldiring: "Travelling by plane is _______ than travelling by train."',
        options: ['more fast', 'faster', 'fastest', 'most fast'],
        correctAnswerIndex: 1,
        explanation: 'Bir bo‘g‘inli sifatlar solishtirishda "-er" oladi (faster than).',
      },
      {
        id: 'cp2-q4',
        skill: 'grammar',
        topic: 'Superlatives (Long Adjectives)',
        prompt: 'Qaysi javobda to‘g‘ri orttirma daraja ishlatilgan?',
        options: [
          'This is the most dangerous road in the country.',
          'This is the dangerousest road in the country.',
          'This is more dangerous road in the country.',
          'This is most dangerous road in the country.',
        ],
        correctAnswerIndex: 0,
        explanation: 'Ko‘p bo‘g‘inli sifatlarning orttirma darajasi "the most + sifat" bo‘ladi.',
      },
      {
        id: 'cp2-q5',
        skill: 'grammar',
        topic: 'Modals: Must vs Should',
        prompt:
          'Maslahat (advice) berishda qaysi modal fe\'l ishlatiladi: "You look tired. You _______ go to bed."',
        options: ['must', 'should', 'have to', 'would'],
        correctAnswerIndex: 1,
        explanation: 'Tavsiya va maslahat uchun "should" ishlatiladi.',
      },
      {
        id: 'cp2-q6',
        skill: 'grammar',
        topic: 'Present Continuous for Future',
        prompt:
          '"Ertaga soat 3 da tish shifokori bilan uchrashuvim bor (kelishilgan)" jumlasi inglizchada qanday bo‘ladi?',
        options: [
          'I see my dentist tomorrow at 3.',
          'I am seeing my dentist tomorrow at 3.',
          'I saw my dentist tomorrow at 3.',
          'I have seen my dentist tomorrow at 3.',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Oldindan rejalashtirilgan va kelishilgan ishlar uchun Present Continuous ishlatiladi.',
      },
      {
        id: 'cp2-q7',
        skill: 'vocabulary',
        topic: 'Feelings and Emotions',
        prompt: '"Excited" so‘zining ma’nosi nima?',
        options: ['Xafa / tushkun', 'Hayajonlangan / xursand', 'Charchagan', 'Qo‘rqqan'],
        correctAnswerIndex: 1,
        explanation: '"Excited" quvonchli hayajon va intizorlikni bildiradi.',
      },
      {
        id: 'cp2-q8',
        skill: 'vocabulary',
        topic: 'Jobs and Occupations',
        prompt: 'Buzilgan quvurlarni va suv jo‘mraklarini tuzatadigan mutaxassis kim?',
        options: ['Electrician', 'Plumber', 'Carpenter', 'Mechanic'],
        correctAnswerIndex: 1,
        explanation: 'Suv quvurlari ustasi "plumber" (santexnik) deyiladi.',
      },
      {
        id: 'cp2-q9',
        skill: 'grammar',
        topic: 'Countable vs Uncountable Nouns',
        prompt: 'Qaysi so‘z sanalmaydigan (uncountable) ot hisoblanadi va oldidan "a/an" olmaydi?',
        options: ['Apple', 'Information', 'Problem', 'Chair'],
        correctAnswerIndex: 1,
        explanation: '"Information" ingliz tilida sanalmaydi (an information deb bo‘lmaydi).',
      },
      {
        id: 'cp2-q10',
        skill: 'listening',
        topic: 'Hotel Booking',
        prompt:
          'Audio: "I would like to reserve a double room with breakfast for two nights." Mehmon nimani buyurtma qildi?',
        options: [
          '1 kechaga bitta kishilik xona',
          '2 kechaga nonushtali ikki kishilik xona',
          '3 kechaga kechki ovqatli xona',
          'Nonushtasiz oilaviy xona',
        ],
        correctAnswerIndex: 1,
        explanation:
          '"double room with breakfast for two nights" — 2 kechaga nonushtali 2 kishilik xona.',
        audioSnippet: 'I would like to reserve a double room with breakfast for two nights.',
      },
      {
        id: 'cp2-q11',
        skill: 'reading',
        topic: 'Notice Comprehension',
        prompt: 'E’lon: "Staff Only Beyond This Point". Ushbu yozuv nimani bildiradi?',
        options: [
          'Har kim bu yerdan erkin kirishi mumkin',
          'Faqat xodimlar kirishi mumkin, mijozlar emas',
          'Bu yerda yangi xodimlar ishga olinmoqda',
          'Eshik har doim ochiq turishi shart',
        ],
        correctAnswerIndex: 1,
        explanation: '"Staff only" faqat kompaniya xodimlari uchun ruxsat etilganini bildiradi.',
      },
      {
        id: 'cp2-q12',
        skill: 'grammar',
        topic: 'Adverbs of Frequency',
        prompt: 'Chastota ravishining gapdagi to‘g‘ri o‘rni qaysi?',
        options: [
          'She arrives always early.',
          'Always she arrives early.',
          'She always arrives early.',
          'She arrives early always.',
        ],
        correctAnswerIndex: 2,
        explanation: "Chastota ravishlari (always, usually) asosiy fe'ldan oldin keladi.",
      },
      {
        id: 'cp2-q13',
        skill: 'grammar',
        topic: 'Past Continuous vs Past Simple',
        prompt: 'Bo‘sh joyni to‘ldiring: "While I _______ a book, the phone rang."',
        options: ['read', 'was reading', 'have read', 'were reading'],
        correctAnswerIndex: 1,
        explanation:
          'O‘tmishda davom etayotgan harakat (was reading) paytida boshqa qisqa ish sodir bo‘ldi.',
      },
      {
        id: 'cp2-q14',
        skill: 'vocabulary',
        topic: 'Health & Illness',
        prompt: 'Bosh og‘rig‘i ingliz tilida qanday nomlanadi?',
        options: ['Toothache', 'Headache', 'Stomach ache', 'Sore throat'],
        correctAnswerIndex: 1,
        explanation: 'Bosh og‘rig‘i — "Headache" deyiladi.',
      },
      {
        id: 'cp2-q15',
        skill: 'grammar',
        topic: 'Relative Pronouns (who / which)',
        prompt:
          '"The woman _______ works next door is a friendly teacher." Bo‘sh joyga nima qo‘yiladi?',
        options: ['which', 'who', 'whose', 'where'],
        correctAnswerIndex: 1,
        explanation: 'Insonlar uchun bog‘lovchi olmosh sifatida "who" ishlatiladi.',
      },
      {
        id: 'cp2-q16',
        skill: 'phonetics',
        topic: '-ed qo‘shimchasi talaffuzi',
        prompt: 'Qaysi fe\'lning o‘tgan zamon "-ed" qo‘shimchasi /ɪd/ deb o‘qiladi?',
        options: ['Worked', 'Played', 'Decided', 'Cleaned'],
        correctAnswerIndex: 2,
        explanation:
          '"t" yoki "d" bilan tugaydigan fe\'llarga -ed qo‘shilganda /ɪd/ deb o‘qiladi (Decided).',
        audioSnippet: 'We decided to go home.',
      },
      {
        id: 'cp2-q17',
        skill: 'vocabulary',
        topic: 'Prepositions of Place',
        prompt: 'Ikki narsaning o‘rtasida turganlikni bildiruvchi predlog qaysi?',
        options: ['Among', 'Behind', 'Between', 'Under'],
        correctAnswerIndex: 2,
        explanation: 'Aniq ikki narsa o‘rtasida — "between" ishlatiladi.',
      },
      {
        id: 'cp2-q18',
        skill: 'grammar',
        topic: 'Zero & First Conditional',
        prompt: 'Bo‘sh joyni to‘ldiring: "If it rains tomorrow, we _______ the picnic."',
        options: ['cancel', 'will cancel', 'cancelled', 'would cancel'],
        correctAnswerIndex: 1,
        explanation: 'First Conditional: "If + Present Simple, will + V1".',
      },
      {
        id: 'cp2-q19',
        skill: 'listening',
        topic: 'Directions',
        prompt:
          'Audio: "Turn right at the traffic lights, then take the second left." Haydovchi nima qilishi kerak?',
        options: [
          'Svetofordan chapga burilib, keyin o‘ngga qayrilib borishi kerak',
          'Svetofordan o‘ngga burilib, ikkinchi burilishdan chapga kirishi kerak',
          'To‘g‘riga qarab to‘xtamasdan haydashi kerak',
          'Svetoforda mashinani to‘xtatib kutishi kerak',
        ],
        correctAnswerIndex: 1,
        explanation:
          '"Turn right at lights, take second left" — o‘ngga burilib, ikkinchi chapga kirish.',
        audioSnippet: 'Turn right at the traffic lights, then take the second left.',
      },
      {
        id: 'cp2-q20',
        skill: 'vocabulary',
        topic: 'Collocations (Make vs Do)',
        prompt: 'Qaysi so‘z "make" fe\'li bilan birikadi?',
        options: ['make homework', 'make a mistake', 'make the dishes', 'make research'],
        correctAnswerIndex: 1,
        explanation: 'Xato qilmoq — "make a mistake" kollokatsiyasi bilan aytiladi.',
      },
    ],
  },

  // =========================================================================
  // CHECKPOINT 3: B1 -> IELTS CORE GATEWAY (CAMBRIDGE READINESS)
  // =========================================================================
  {
    id: 'checkpoint_b1_pre_ielts',
    title: 'B1 Pre-IELTS Gateway: Cambridge Test Bazasiga Ruxsatnoma',
    stageId: 3,
    fromLevel: 'B1 (Intermediate)',
    toLevel: 'B2 (IELTS Core Band 6.0 - 7.0)',
    description:
      'Present Perfect, passiv nisbat, murakkab shart ergash gaplar, akademik bog‘lovchilar va Cambridge mini-mock savollari bo‘yicha 20 ta savol.',
    passingScore: 16,
    badgeName: 'IELTS Candidate Ready',
    xpReward: 250,
    questions: [
      {
        id: 'cp3-q1',
        skill: 'grammar',
        topic: 'Present Perfect vs Past Simple',
        prompt:
          'To‘g‘ri zamon shaklini tanlang: "I _______ in London for five years, but now I live in Tashkent."',
        options: ['have lived', 'lived', 'am living', 'was living'],
        correctAnswerIndex: 1,
        explanation:
          'Bu harakat o‘tmishda tugagan va hozir davom etmayapti ("now I live in Tashkent"), shuning uchun Past Simple (lived) ishlatiladi.',
      },
      {
        id: 'cp3-q2',
        skill: 'grammar',
        topic: 'Passive Voice (Present & Past)',
        prompt:
          'Passive Voice shaklini to‘ldiring: "The new academic library _______ by the mayor last month."',
        options: ['is opened', 'opened', 'was opened', 'has opened'],
        correctAnswerIndex: 2,
        explanation: 'O‘tgan zamon passiv shakli: "was/were + V3" (was opened).',
      },
      {
        id: 'cp3-q3',
        skill: 'grammar',
        topic: 'Second Conditional (Imaginary situations)',
        prompt:
          'Bo‘sh joyni to‘ldiring: "If I _______ a million dollars, I _______ a school for disadvantaged children."',
        options: [
          'have / will build',
          'had / would build',
          'had / will build',
          'would have / built',
        ],
        correctAnswerIndex: 1,
        explanation: 'Second Conditional formulasi: "If + Past Simple, would + V1".',
      },
      {
        id: 'cp3-q4',
        skill: 'vocabulary',
        topic: 'Academic Word List (AWL)',
        prompt: '"Significant" so‘zining akademik sinonimi qaysi?',
        options: ['Substantial', 'Tiny', 'Complicated', 'Accidental'],
        correctAnswerIndex: 0,
        explanation:
          '"Significant" va "Substantial" ikkalasi ham sezilarli, muhim degan ma’noni beradi.',
      },
      {
        id: 'cp3-q5',
        skill: 'grammar',
        topic: 'Complex Discourse Markers',
        prompt:
          'Qarama-qarshi fikrlarni bog‘lash uchun qaysi bog‘lovchi mos keladi: "_______ the exam was demanding, most candidates achieved high marks."',
        options: ['Although', 'Because', 'Therefore', 'Furthermore'],
        correctAnswerIndex: 0,
        explanation:
          '"Although" (garchi ... bo‘lsa-da) ziddiyatli fikrlarni bog‘lashda ishlatiladi.',
      },
      {
        id: 'cp3-q6',
        skill: 'listening',
        topic: 'IELTS Section 1 Style: Form Completion',
        prompt:
          'Audio: "My reservation reference code is B-R-7-4-double-9." Ro‘yxatga olish kodi qaysi?',
        options: ['BR749', 'BR7499', 'BR7449', 'BL7499'],
        correctAnswerIndex: 1,
        explanation: '"double-9" ikkita to‘qqiz degani: BR7499.',
        audioSnippet: 'My reservation reference code is B-R-7-4-double-9.',
      },
      {
        id: 'cp3-q7',
        skill: 'reading',
        topic: 'IELTS Reading: True / False / Not Given',
        prompt:
          'Matn: "Solar energy usage increased sharply in 2024 due to government subsidies."\nSavol: Solar power grew because of official financial support.',
        options: ['TRUE', 'FALSE', 'NOT GIVEN'],
        correctAnswerIndex: 0,
        explanation:
          '"government subsidies" bu rasmiy moliyaviy yordam degani. Shuning uchun javob: TRUE.',
      },
      {
        id: 'cp3-q8',
        skill: 'grammar',
        topic: 'Used to vs Be used to',
        prompt:
          'Bo‘sh joyni to‘ldiring: "When I was a student, I _______ study late into the night, but now I sleep early."',
        options: ['used to', 'am used to', 'was used to', 'got used to'],
        correctAnswerIndex: 0,
        explanation:
          'O‘tmishdagi odat bo‘lib, hozir to‘xtatilgan ishlar uchun "used to + V1" ishlatiladi.',
      },
      {
        id: 'cp3-q9',
        skill: 'vocabulary',
        topic: 'IELTS Task 1 Trend Vocabulary',
        prompt:
          "Grafikda ko‘rsatkich birdaniga juda tez pastga tushib ketganida qaysi fe'l ishlatiladi?",
        options: ['Fluctuated', 'Plummeted', 'Remained stable', 'Plateaued'],
        correctAnswerIndex: 1,
        explanation:
          '"Plummet" yoki "drop sharply" keskin sho‘ng‘ish, pasayib ketish ma’nosini beradi.',
      },
      {
        id: 'cp3-q10',
        skill: 'grammar',
        topic: 'Modals of Deduction (Past)',
        prompt:
          'Bo‘sh joyni to‘ldiring: "The ground is completely wet. It _______ heavily last night."',
        options: ['must rain', 'must have rained', 'can have rained', 'should rain'],
        correctAnswerIndex: 1,
        explanation: 'O‘tgan zamondagi kuchli mantiqiy taxmin uchun "must have + V3" qo‘yiladi.',
      },
      {
        id: 'cp3-q11',
        skill: 'reading',
        topic: 'IELTS Reading: Paraphrasing Recognition',
        prompt:
          'Matn: "Technological advancements have altered traditional classroom methodologies." Ushbu gapning eng aniq parafrazasi qaysi?',
        options: [
          'Schools no longer use computers in teaching.',
          'Modern tech innovations have transformed conventional educational practices.',
          'Traditional teaching is superior to digital software.',
          'Classrooms have remained unchanged despite technological growth.',
        ],
        correctAnswerIndex: 1,
        explanation:
          '"Tech advancements" -> "modern tech innovations", "altered" -> "transformed", "traditional classroom methodologies" -> "conventional educational practices".',
      },
      {
        id: 'cp3-q12',
        skill: 'listening',
        topic: 'IELTS Distractor Awareness',
        prompt:
          'Audio: "The lecture was originally scheduled for Room 204, but due to renovation, it will now be held in Room 310." Ma’ruza qayerda bo‘ladi?',
        options: ['Room 204', 'Room 310', 'Room 214', 'Room 304'],
        correctAnswerIndex: 1,
        explanation: 'Room 204 bu chalg‘ituvchi (distractor), haqiqiy joy Room 310.',
        audioSnippet:
          'The lecture was originally scheduled for Room 204, but due to renovation, it will now be held in Room 310.',
      },
      {
        id: 'cp3-q13',
        skill: 'grammar',
        topic: 'Reported Speech (Tense Backshift)',
        prompt:
          '"I will call you tomorrow," he said. Ushbu gap o‘zlashtirma gapda (reported speech) qanday bo‘ladi?',
        options: [
          'He said that he will call me the next day.',
          'He said that he would call me the next day.',
          'He said that he called me tomorrow.',
          'He said that he would call me yesterday.',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Reported speechda "will" -> "would" ga, "tomorrow" -> "the next day" ga o‘zgaradi.',
      },
      {
        id: 'cp3-q14',
        skill: 'vocabulary',
        topic: 'Academic Collocations',
        prompt: '"Tadqiqot olib bormoq" iborasi uchun eng to‘g‘ri akademik fe\'l qaysi?',
        options: ['Conduct a study', 'Do a study', 'Make a study', 'Have a study'],
        correctAnswerIndex: 0,
        explanation:
          'Akademik ingliz tilida "conduct research / conduct a study" qat\'iy kollokatsiya hisoblanadi.',
      },
      {
        id: 'cp3-q15',
        skill: 'grammar',
        topic: 'Gerund vs Infinitive',
        prompt: 'Qaysi gap grammatik jihatdan to‘g‘ri?',
        options: [
          'I avoid to speak in public.',
          'I avoid speaking in public.',
          'I avoid speak in public.',
          'I avoid of speaking in public.',
        ],
        correctAnswerIndex: 1,
        explanation: '"Avoid" fe\'lidan keyin doimo Gerund (-ing) keladi.',
      },
      {
        id: 'cp3-q16',
        skill: 'reading',
        topic: 'Heading Matching Strategy',
        prompt:
          'Paragraf: "Urban areas worldwide are experiencing rapid population influx. City planners face severe traffic gridlocks, shortage of housing, and strained sanitation systems." Ushbu paragrafga eng mos sarlavha (Heading) qaysi?',
        options: [
          'The Benefits of Living in Rural Towns',
          'Challenges Posed by Excessive Urban Growth',
          'History of Industrialization',
          'How to Build High-Speed Highways',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Paragraf to‘liq shaharlashuv keltirib chiqaradigan muammolar (traffic, housing shortage) haqida.',
      },
      {
        id: 'cp3-q17',
        skill: 'grammar',
        topic: 'Inversion for Emphasis',
        prompt: 'To‘g‘ri inversiya (urg‘u berish) strukturasini toping:',
        options: [
          'Never I have seen such dedication.',
          'Never have I seen such dedication.',
          'Never I saw such dedication.',
          'Have I never seen such dedication.',
        ],
        correctAnswerIndex: 1,
        explanation: 'Inkor so‘z bilan boshlanganda inversiya bo‘ladi: "Never have I seen...".',
      },
      {
        id: 'cp3-q18',
        skill: 'vocabulary',
        topic: 'Writing Task 2 Academic Transitions',
        prompt: 'Fikrga qo‘shimcha dalil kiritish uchun qaysi so‘z mos keladi?',
        options: ['Moreover', 'In contrast', 'Nonetheless', 'Conversely'],
        correctAnswerIndex: 0,
        explanation: '"Moreover" (Bundan tashqari / qo‘shimcha ravishda) yangi dalil qo‘shadi.',
      },
      {
        id: 'cp3-q19',
        skill: 'listening',
        topic: 'Number and Address Comprehension',
        prompt:
          'Audio: "The delivery should be sent to 415 Westbourne Avenue." To‘g‘ri manzil qaysi?',
        options: [
          '145 Westbourne Avenue',
          '415 Westbourne Avenue',
          '450 Westbourne Avenue',
          '415 Eastbourne Avenue',
        ],
        correctAnswerIndex: 1,
        explanation: '"415 Westbourne Avenue" aniq aytildi.',
        audioSnippet: 'The delivery should be sent to 415 Westbourne Avenue.',
      },
      {
        id: 'cp3-q20',
        skill: 'grammar',
        topic: 'Third Conditional (Unreal Past)',
        prompt:
          'Bo‘sh joyni to‘ldiring: "If they _______ earlier, they _______ the express train."',
        options: [
          'left / would catch',
          'had left / would have caught',
          'have left / will catch',
          'would leave / had caught',
        ],
        correctAnswerIndex: 1,
        explanation: 'Third Conditional: "If + Past Perfect, would have + V3".',
      },
    ],
  },
];

export const getCheckpointById = (id: string): CheckpointTest | undefined => {
  return CHECKPOINT_TESTS.find((cp) => cp.id === id);
};

export const getCheckpointForStage = (stageId: number): CheckpointTest | undefined => {
  return CHECKPOINT_TESTS.find((cp) => cp.stageId === stageId);
};
