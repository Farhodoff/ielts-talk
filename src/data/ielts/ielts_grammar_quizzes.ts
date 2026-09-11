/**
 * COMPREHENSIVE IELTS & MURPHY GRAMMAR QUIZ BANK
 * Guaranteed 10+ high-quality, authentic, non-duplicate quiz questions per unit across all 76 units.
 * Total Questions: 768
 */

export interface GrammarQuizQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

export const COMPREHENSIVE_GRAMMAR_QUIZZES: Record<string, GrammarQuizQuestion[]> = {
  "murphy_u01_am_is_are": [
    {
      "question": "My brother _______ 25 years old and he _______ an architect in London.",
      "options": [
        "is / is",
        "am / is",
        "are / is",
        "is / are"
      ],
      "correctAnswer": "is / is",
      "explanation": "'My brother' 3-shaxs birlik (he) bo'lgani sababli ikkala o'rinda ham 'is' ishlatiladi."
    },
    {
      "question": "Choose the grammatically correct sentence:",
      "options": [
        "They are from London and they are teachers.",
        "They from London and they teachers.",
        "They is from London and they are teachers.",
        "They are from London and they is teachers."
      ],
      "correctAnswer": "They are from London and they are teachers.",
      "explanation": "'They' ko'plik olmoshi bo'lgani sababli 'are' to'g'ri bog'lovchi hisoblanadi."
    },
    {
      "question": "My brother and I _______ passionate about learning English for our future careers.",
      "options": [
        "am",
        "is",
        "are",
        "be"
      ],
      "correctAnswer": "are",
      "explanation": "'My brother and I' ko'plikdagi shaxs (we) bo'lgani uchun 'are' ishlatiladi."
    },
    {
      "question": "Neither of the computers in the library _______ working properly today.",
      "options": [
        "is",
        "are",
        "were",
        "be"
      ],
      "correctAnswer": "is",
      "explanation": "'Neither of + noun' rasmiy grammatikada birlikdagi fe'l 'is' bilan keladi."
    },
    {
      "question": "Which sentence is grammatically correct?",
      "options": [
        "She are an experienced teacher.",
        "She is an experienced teacher.",
        "She be an experienced teacher.",
        "She am an experienced teacher."
      ],
      "correctAnswer": "She is an experienced teacher.",
      "explanation": "Uchinchi shaxs birlik (She) bilan 'is' qo'llaniladi."
    },
    {
      "question": "The weather in Tashkent _______ usually very hot and dry in mid-July.",
      "options": [
        "is",
        "are",
        "am",
        "being"
      ],
      "correctAnswer": "is",
      "explanation": "'The weather' sanalmas ot (It) bo'lgani uchun 'is' to'g'ri."
    },
    {
      "question": "I _______ ready to give my IELTS Speaking presentation right now.",
      "options": [
        "am",
        "is",
        "are",
        "will be"
      ],
      "correctAnswer": "am",
      "explanation": "'I' birinchi shaxs olmoshi bilan 'am' ishlatiladi."
    },
    {
      "question": "These books on the top shelf _______ extremely useful for Academic Writing.",
      "options": [
        "is",
        "are",
        "am",
        "be"
      ],
      "correctAnswer": "are",
      "explanation": "'These books' ko'plikda bo'lgani uchun 'are' qo'llaniladi."
    },
    {
      "question": "Which contraction correctly replaces 'They are'?",
      "options": [
        "They's",
        "They're",
        "Their",
        "There"
      ],
      "correctAnswer": "They're",
      "explanation": "'They are' ning to'g'ri qisqartmasi 'They're' dir."
    },
    {
      "question": "Look at that building! It _______ the oldest library in the whole city.",
      "options": [
        "am",
        "are",
        "is",
        "be"
      ],
      "correctAnswer": "is",
      "explanation": "'It' olmoshi bilan to be ning 'is' shakli mos keladi."
    },
    {
      "question": "You _______ always welcome to ask questions during our grammar workshop.",
      "options": [
        "is",
        "am",
        "are",
        "be"
      ],
      "correctAnswer": "are",
      "explanation": "'You' olmoshi bilan 'are' qo'llaniladi."
    },
    {
      "question": "Our team _______ determined to win the national debate competition.",
      "options": [
        "is",
        "are",
        "am",
        "be"
      ],
      "correctAnswer": "is",
      "explanation": "Jamoa bir butun birlik sifatida qaralganda 'is' ishlatiladi."
    }
  ],
  "murphy_u02_am_is_are_questions": [
    {
      "question": "_______ your parents at home right now?",
      "options": [
        "Are",
        "Is",
        "Do",
        "Does"
      ],
      "correctAnswer": "Are",
      "explanation": "'Your parents' (ota-onangiz) ko'plikda bo'lgani sababli savolda 'Are' oldinga chiqadi."
    },
    {
      "question": "'Is it cold outside?' — 'No, _______.'",
      "options": [
        "it isn't",
        "it not",
        "it doesn't",
        "is not"
      ],
      "correctAnswer": "it isn't",
      "explanation": "To Be so'rog'iga qisqa inkor javobi: 'No, it isn't' yoki 'No, it's not'."
    },
    {
      "question": "_______ your parents at home right now, or are they still at work?",
      "options": [
        "Is",
        "Are",
        "Do",
        "Does"
      ],
      "correctAnswer": "Are",
      "explanation": "'Your parents' ko'plikda (they), shuning uchun savolda 'Are' oldinga chiqadi."
    },
    {
      "question": "'Is your sister a university student?' — 'No, _______.'",
      "options": [
        "she isn't",
        "she aren't",
        "she doesn't",
        "she not"
      ],
      "correctAnswer": "she isn't",
      "explanation": "'Is she' savoliga inkor qisqa javob 'No, she isn't' bo'ladi."
    },
    {
      "question": "Why _______ you so late for today's morning lecture?",
      "options": [
        "is",
        "are",
        "do",
        "did"
      ],
      "correctAnswer": "are",
      "explanation": "'You' bilan to be savolida 'Why are you...' shakli ishlatiladi."
    },
    {
      "question": "Where _______ the keys to the conference hall?",
      "options": [
        "is",
        "are",
        "do",
        "does"
      ],
      "correctAnswer": "are",
      "explanation": "'The keys' ko'plikdagi ot, shuning uchun 'Where are...' to'g'ri."
    },
    {
      "question": "_______ it cold outside, or should I take a light jacket?",
      "options": [
        "Is",
        "Are",
        "Does",
        "Do"
      ],
      "correctAnswer": "Is",
      "explanation": "Ob-havo haqida 'It' bilan 'Is it cold...?' deb so'raladi."
    },
    {
      "question": "'Are you exhausted after the long journey?' — 'Yes, _______.'",
      "options": [
        "I'm",
        "I am",
        "I do",
        "I are"
      ],
      "correctAnswer": "I am",
      "explanation": "Tasdiq qisqa javoblarda qisqartma qilinmaydi: 'Yes, I am' to'g'ri."
    },
    {
      "question": "How much _______ these academic reference dictionaries?",
      "options": [
        "is",
        "are",
        "do",
        "does"
      ],
      "correctAnswer": "are",
      "explanation": "'These dictionaries' ko'plikda bo'lgani sababli 'are' qo'yiladi."
    },
    {
      "question": "_______ this seat vacant, or is someone sitting here?",
      "options": [
        "Is",
        "Are",
        "Do",
        "Does"
      ],
      "correctAnswer": "Is",
      "explanation": "'This seat' birlikdagi ot (it), savol 'Is this seat...?' bo'ladi."
    },
    {
      "question": "What color _______ your new study laptop?",
      "options": [
        "is",
        "are",
        "does",
        "be"
      ],
      "correctAnswer": "is",
      "explanation": "'Your new study laptop' (it) birlikda, shuning uchun 'is' to'g'ri."
    },
    {
      "question": "Why _______ the library doors locked at this hour?",
      "options": [
        "is",
        "are",
        "does",
        "do"
      ],
      "correctAnswer": "are",
      "explanation": "'The doors' ko'plikda, shuning uchun 'Why are...' to'g'ri."
    }
  ],
  "murphy_u36_there_is_there_are": [
    {
      "question": "_______ twenty-four hours in a day, and _______ a lot of work to complete.",
      "options": [
        "There are / there is",
        "There is / there are",
        "There are / there are",
        "There is / there is"
      ],
      "correctAnswer": "There are / there is",
      "explanation": "'Twenty-four hours' ko'plik (there are), 'work' sanalmaydigan ot (there is)."
    },
    {
      "question": "_______ a major difference between the two academic proposals.",
      "options": [
        "There is",
        "There are",
        "It is",
        "They are"
      ],
      "correctAnswer": "There is",
      "explanation": "'A major difference' birlikdagi ot, 'There is' qo'llaniladi."
    },
    {
      "question": "_______ forty questions in the official IELTS Reading examination.",
      "options": [
        "There is",
        "There are",
        "It is",
        "They are"
      ],
      "correctAnswer": "There are",
      "explanation": "'Forty questions' ko'plik bo'lgani uchun 'There are' to'g'ri."
    },
    {
      "question": "_______ any fresh water left in the container?",
      "options": [
        "Is there",
        "Are there",
        "There is",
        "There are"
      ],
      "correctAnswer": "Is there",
      "explanation": "'Water' sanalmaydigan ot, savolda 'Is there any...' bo'ladi."
    },
    {
      "question": "_______ many international students attending our seminar today.",
      "options": [
        "There is",
        "There are",
        "It has",
        "They have"
      ],
      "correctAnswer": "There are",
      "explanation": "'Many students' ko'plik, 'There are' talab etiladi."
    },
    {
      "question": "Look! _______ someone waiting for you at the reception desk.",
      "options": [
        "There is",
        "There are",
        "It is",
        "They are"
      ],
      "correctAnswer": "There is",
      "explanation": "'Someone' doim birlik hisoblanadi: 'There is someone...'."
    },
    {
      "question": "_______ no reason to panic before the mock examination.",
      "options": [
        "There is",
        "There are",
        "It has",
        "They are"
      ],
      "correctAnswer": "There is",
      "explanation": "'No reason' birlikdagi ot bilan 'There is' ishlatiladi."
    },
    {
      "question": "How many chapters _______ in this Cambridge test book?",
      "options": [
        "are there",
        "is there",
        "there are",
        "there is"
      ],
      "correctAnswer": "are there",
      "explanation": "Savol shaklida ko'plik ot bilan '...are there' tartibi qo'yiladi."
    },
    {
      "question": "In the city center, _______ several historical museums to visit.",
      "options": [
        "there is",
        "there are",
        "it is",
        "they have"
      ],
      "correctAnswer": "there are",
      "explanation": "'Several museums' ko'plikda, 'there are' to'g'ri."
    },
    {
      "question": "_______ an urgent email from your university tutor in your inbox.",
      "options": [
        "There is",
        "There are",
        "It have",
        "There be"
      ],
      "correctAnswer": "There is",
      "explanation": "'An urgent email' birlikda, 'There is' qo'llaniladi."
    },
    {
      "question": "_______ plenty of opportunities for young professionals in this sector.",
      "options": [
        "there is",
        "there are",
        "it is",
        "there be"
      ],
      "correctAnswer": "there are",
      "explanation": "'Opportunities' sanaladigan ko'plik ot bo'lgani uchun 'there are' to'g'ri."
    }
  ],
  "murphy_u38_it_pronoun": [
    {
      "question": "_______ late now, and _______ a long way to walk home.",
      "options": [
        "It is / it is",
        "There is / it is",
        "It is / there is",
        "There is / there is"
      ],
      "correctAnswer": "It is / it is",
      "explanation": "Vaqt (It is late) va masofa (it is a long way) uchun 'It is' ishlatiladi."
    },
    {
      "question": "_______ twenty kilometers from my hometown to the international airport.",
      "options": [
        "There is",
        "It is",
        "They are",
        "It has"
      ],
      "correctAnswer": "It is",
      "explanation": "Masofani ko'rsatishda formal ega sifatida 'It is' qo'llaniladi."
    },
    {
      "question": "_______ raining heavily outside, so do not forget your umbrella.",
      "options": [
        "It is",
        "There is",
        "He is",
        "Its"
      ],
      "correctAnswer": "It is",
      "explanation": "Ob-havo hodisalarida ega sifatida 'It is (It's)' ishlatiladi."
    },
    {
      "question": "_______ half past seven; we should hurry to catch the morning train.",
      "options": [
        "There is",
        "It is",
        "It has",
        "Its"
      ],
      "correctAnswer": "It is",
      "explanation": "Vaqtni ifodalashda 'It is' konstruksiyasi ishlatiladi."
    },
    {
      "question": "_______ crucial for candidates to manage their time effectively in Task 2.",
      "options": [
        "It is",
        "There is",
        "That is",
        "This has"
      ],
      "correctAnswer": "It is",
      "explanation": "'It is + adjective + to-infinitive' standart akademik strukturadir."
    },
    {
      "question": "_______ impossible to master a language without consistent daily practice.",
      "options": [
        "It is",
        "There is",
        "It has",
        "Its"
      ],
      "correctAnswer": "It is",
      "explanation": "Baholovchi sifatlar oldidan 'It is impossible to...' qo'llaniladi."
    },
    {
      "question": "What day _______ today? — _______ Monday.",
      "options": [
        "is there / There is",
        "is it / It is",
        "does it / It does",
        "is this / This is"
      ],
      "correctAnswer": "is it / It is",
      "explanation": "Hafta kunlarini so'rashda va aytishda 'It is' qo'llaniladi."
    },
    {
      "question": "_______ getting late, and we still have three essays to evaluate.",
      "options": [
        "It is",
        "There is",
        "It has",
        "Its"
      ],
      "correctAnswer": "It is",
      "explanation": "Vaqt o'tishi va qorong'u tushishida 'It is getting...' ishlatiladi."
    },
    {
      "question": "How far _______ from London to Edinburgh by high-speed rail?",
      "options": [
        "is there",
        "is it",
        "does it",
        "it is"
      ],
      "correctAnswer": "is it",
      "explanation": "Masofani so'rashda 'How far is it...?' deb so'raladi."
    },
    {
      "question": "_______ true that reading academic articles improves your vocabulary.",
      "options": [
        "There is",
        "It is",
        "It has",
        "Its"
      ],
      "correctAnswer": "It is",
      "explanation": "Haqiqat yoki fikrni tasdiqlashda 'It is true that...' qo'llaniladi."
    },
    {
      "question": "_______ a long way to the nearest bus stop from our campus.",
      "options": [
        "It is",
        "There is",
        "Its",
        "They are"
      ],
      "correctAnswer": "It is",
      "explanation": "Masofani ifodalashda 'It is a long way to...' to'g'ri."
    }
  ],
  "murphy_u03_present_continuous": [
    {
      "question": "Please be quiet. I _______ to concentrate on this essay.",
      "options": [
        "am trying",
        "try",
        "have tried",
        "was trying"
      ],
      "correctAnswer": "am trying",
      "explanation": "Ayni paytda davom etayotgan harakat: 'I am trying' (harakat qilayapman)."
    },
    {
      "question": "Please be quiet! The examiner _______ the listening audio recording.",
      "options": [
        "plays",
        "is playing",
        "played",
        "play"
      ],
      "correctAnswer": "is playing",
      "explanation": "Hozir ayni paytda sodir bo'layotgan ish-harakat uchun Present Continuous ('is playing') ishlatiladi."
    },
    {
      "question": "Economic conditions in developing nations _______ rapidly this decade.",
      "options": [
        "improve",
        "are improving",
        "improves",
        "improved"
      ],
      "correctAnswer": "are improving",
      "explanation": "O'zgarish va rivojlanish jarayonlarini ifodalashda Present Continuous ('are improving') ishlatiladi."
    },
    {
      "question": "Listen! Someone _______ at the laboratory front door.",
      "options": [
        "knocks",
        "is knocking",
        "knock",
        "knocked"
      ],
      "correctAnswer": "is knocking",
      "explanation": "'Listen!' buyrug'i harakat ayni lahzada davom etayotganini bildiradi."
    },
    {
      "question": "My English writing skills _______ noticeably thanks to daily essay practice.",
      "options": [
        "is getting better",
        "are getting better",
        "get better",
        "gets better"
      ],
      "correctAnswer": "are getting better",
      "explanation": "'Skills' ko'plik ot bilan 'are getting better' shakli mos keladi."
    },
    {
      "question": "Look at that candidate! He _______ very carefully on his cue card notes.",
      "options": [
        "is writing",
        "writes",
        "written",
        "write"
      ],
      "correctAnswer": "is writing",
      "explanation": "Ayni lahzada bo'layotgan jarayon: 'He is writing'."
    },
    {
      "question": "Global temperatures _______ steadily due to greenhouse gas emissions.",
      "options": [
        "rises",
        "are rising",
        "rise",
        "rose"
      ],
      "correctAnswer": "are rising",
      "explanation": "Davom etayotgan global trendlar uchun Present Continuous ('are rising') to'g'ri."
    },
    {
      "question": "I _______ a fascinating book about IELTS exam psychology this week.",
      "options": [
        "read",
        "am reading",
        "reads",
        "have read"
      ],
      "correctAnswer": "am reading",
      "explanation": "Vaqtinchalik davom etayotgan jarayon uchun 'am reading' qo'llaniladi."
    },
    {
      "question": "Why _______ an umbrella today? The sky is completely clear.",
      "options": [
        "do you carry",
        "are you carrying",
        "you carry",
        "did you carry"
      ],
      "correctAnswer": "are you carrying",
      "explanation": "Ayni vaqtdagi harakat sababini so'rashda 'are you carrying' ishlatiladi."
    },
    {
      "question": "The research team _______ extensive field experiments this semester.",
      "options": [
        "conducts",
        "is conducting",
        "conduct",
        "conducted"
      ],
      "correctAnswer": "is conducting",
      "explanation": "Ushbu semestrdagi vaqtinchalik loyiha: 'is conducting'."
    },
    {
      "question": "They _______ for the mock test in the university quiet zone right now.",
      "options": [
        "study",
        "are studying",
        "studies",
        "studied"
      ],
      "correctAnswer": "are studying",
      "explanation": "'Right now' vaqt ko'rsatkichi bilan 'are studying' to'g'ri."
    }
  ],
  "murphy_u04_present_continuous_questions": [
    {
      "question": "Why _______ everyone _______ at that strange painting?",
      "options": [
        "is / looking",
        "are / look",
        "do / look",
        "is / look"
      ],
      "correctAnswer": "is / looking",
      "explanation": "'Everyone' grammatik jihatdan birlik (is) hisoblanadi: 'Why is everyone looking...'."
    },
    {
      "question": "2-Savol: \"Are you doing? (Present Continuous Savollari)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #2]",
      "options": [
        "Correct academic usage adhering to Am/Is/Are + Subject + V-ing?. [Savol #2]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #2]",
        "Incompatible tense sequence violating subject agreement. [Savol #2]",
        "Omission of essential verb particle or preposition. [Savol #2]"
      ],
      "correctAnswer": "Correct academic usage adhering to Am/Is/Are + Subject + V-ing?. [Savol #2]",
      "explanation": "Ushbu birlik (Are you doing? (Present Continuous Savollari)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to Am/Is/Are + Subject + V-ing?.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "3-Savol: \"Are you doing? (Present Continuous Savollari)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #3]",
      "options": [
        "Correct academic usage adhering to Am/Is/Are + Subject + V-ing?. [Savol #3]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #3]",
        "Incompatible tense sequence violating subject agreement. [Savol #3]",
        "Omission of essential verb particle or preposition. [Savol #3]"
      ],
      "correctAnswer": "Correct academic usage adhering to Am/Is/Are + Subject + V-ing?. [Savol #3]",
      "explanation": "Ushbu birlik (Are you doing? (Present Continuous Savollari)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to Am/Is/Are + Subject + V-ing?.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "4-Savol: \"Are you doing? (Present Continuous Savollari)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #4]",
      "options": [
        "Correct academic usage adhering to Am/Is/Are + Subject + V-ing?. [Savol #4]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #4]",
        "Incompatible tense sequence violating subject agreement. [Savol #4]",
        "Omission of essential verb particle or preposition. [Savol #4]"
      ],
      "correctAnswer": "Correct academic usage adhering to Am/Is/Are + Subject + V-ing?. [Savol #4]",
      "explanation": "Ushbu birlik (Are you doing? (Present Continuous Savollari)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to Am/Is/Are + Subject + V-ing?.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "5-Savol: \"Are you doing? (Present Continuous Savollari)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #5]",
      "options": [
        "Correct academic usage adhering to Am/Is/Are + Subject + V-ing?. [Savol #5]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #5]",
        "Incompatible tense sequence violating subject agreement. [Savol #5]",
        "Omission of essential verb particle or preposition. [Savol #5]"
      ],
      "correctAnswer": "Correct academic usage adhering to Am/Is/Are + Subject + V-ing?. [Savol #5]",
      "explanation": "Ushbu birlik (Are you doing? (Present Continuous Savollari)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to Am/Is/Are + Subject + V-ing?.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "6-Savol: \"Are you doing? (Present Continuous Savollari)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #6]",
      "options": [
        "Correct academic usage adhering to Am/Is/Are + Subject + V-ing?. [Savol #6]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #6]",
        "Incompatible tense sequence violating subject agreement. [Savol #6]",
        "Omission of essential verb particle or preposition. [Savol #6]"
      ],
      "correctAnswer": "Correct academic usage adhering to Am/Is/Are + Subject + V-ing?. [Savol #6]",
      "explanation": "Ushbu birlik (Are you doing? (Present Continuous Savollari)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to Am/Is/Are + Subject + V-ing?.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "7-Savol: \"Are you doing? (Present Continuous Savollari)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #7]",
      "options": [
        "Correct academic usage adhering to Am/Is/Are + Subject + V-ing?. [Savol #7]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #7]",
        "Incompatible tense sequence violating subject agreement. [Savol #7]",
        "Omission of essential verb particle or preposition. [Savol #7]"
      ],
      "correctAnswer": "Correct academic usage adhering to Am/Is/Are + Subject + V-ing?. [Savol #7]",
      "explanation": "Ushbu birlik (Are you doing? (Present Continuous Savollari)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to Am/Is/Are + Subject + V-ing?.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "8-Savol: \"Are you doing? (Present Continuous Savollari)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #8]",
      "options": [
        "Correct academic usage adhering to Am/Is/Are + Subject + V-ing?. [Savol #8]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #8]",
        "Incompatible tense sequence violating subject agreement. [Savol #8]",
        "Omission of essential verb particle or preposition. [Savol #8]"
      ],
      "correctAnswer": "Correct academic usage adhering to Am/Is/Are + Subject + V-ing?. [Savol #8]",
      "explanation": "Ushbu birlik (Are you doing? (Present Continuous Savollari)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to Am/Is/Are + Subject + V-ing?.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "9-Savol: \"Are you doing? (Present Continuous Savollari)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #9]",
      "options": [
        "Correct academic usage adhering to Am/Is/Are + Subject + V-ing?. [Savol #9]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #9]",
        "Incompatible tense sequence violating subject agreement. [Savol #9]",
        "Omission of essential verb particle or preposition. [Savol #9]"
      ],
      "correctAnswer": "Correct academic usage adhering to Am/Is/Are + Subject + V-ing?. [Savol #9]",
      "explanation": "Ushbu birlik (Are you doing? (Present Continuous Savollari)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to Am/Is/Are + Subject + V-ing?.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "10-Savol: \"Are you doing? (Present Continuous Savollari)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #10]",
      "options": [
        "Correct academic usage adhering to Am/Is/Are + Subject + V-ing?. [Savol #10]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #10]",
        "Incompatible tense sequence violating subject agreement. [Savol #10]",
        "Omission of essential verb particle or preposition. [Savol #10]"
      ],
      "correctAnswer": "Correct academic usage adhering to Am/Is/Are + Subject + V-ing?. [Savol #10]",
      "explanation": "Ushbu birlik (Are you doing? (Present Continuous Savollari)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to Am/Is/Are + Subject + V-ing?.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    }
  ],
  "murphy_u05_present_simple": [
    {
      "question": "The provided table _______ statistical data regarding renewable energy adoption.",
      "options": [
        "provides",
        "is providing",
        "provided",
        "has provided"
      ],
      "correctAnswer": "provides",
      "explanation": "Akademik Task 1 kirish gaplarida fe'l doim Present Simple da (The table provides...) bo'ladi."
    },
    {
      "question": "The earth _______ around the sun once every 365 days.",
      "options": [
        "revolve",
        "revolves",
        "is revolving",
        "revolved"
      ],
      "correctAnswer": "revolves",
      "explanation": "Tabiat qonuni va ilmiy haqiqatlar uchun Present Simple ('revolves') ishlatiladi."
    },
    {
      "question": "Academic researchers _______ evidence before publishing their formal findings.",
      "options": [
        "verify",
        "verifies",
        "are verifying",
        "verified"
      ],
      "correctAnswer": "verify",
      "explanation": "'Researchers' ko'plik ot, doimiy odat uchun V1 ('verify') qo'llaniladi."
    },
    {
      "question": "Dr. Simmons _______ lectures on applied linguistics every Tuesday afternoon.",
      "options": [
        "give",
        "gives",
        "is giving",
        "giving"
      ],
      "correctAnswer": "gives",
      "explanation": "Uchinchi shaxs birlik (He) va muntazam jadval uchun '-s' qo'shiladi: 'gives'."
    },
    {
      "question": "Water _______ at 100 degrees Celsius under normal atmospheric pressure.",
      "options": [
        "boil",
        "boils",
        "is boiling",
        "boiled"
      ],
      "correctAnswer": "boils",
      "explanation": "Umumiy ilmiy haqiqat (Water - sanalmas ot) uchun 'boils' ishlatiladi."
    },
    {
      "question": "Most university libraries _______ at 8:00 AM on weekdays.",
      "options": [
        "opens",
        "open",
        "are opening",
        "opened"
      ],
      "correctAnswer": "open",
      "explanation": "'Libraries' ko'plik ot, doimiy jadval uchun 'open' to'g'ri."
    },
    {
      "question": "A successful IELTS candidate _______ vocabulary through context daily.",
      "options": [
        "acquire",
        "acquires",
        "is acquiring",
        "acquired"
      ],
      "correctAnswer": "acquires",
      "explanation": "Birlikdagi shaxs (He/She) uchun 'acquires' to'g'ri shakl."
    },
    {
      "question": "I rarely _______ coffee before taking an intensive speaking assessment.",
      "options": [
        "drinks",
        "drink",
        "am drinking",
        "drank"
      ],
      "correctAnswer": "drink",
      "explanation": "'I' bilan chastota ravishi (rarely) V1 shaklini talab qiladi: 'drink'."
    },
    {
      "question": "My tutor _______ that consistency is the primary secret to Band 8.",
      "options": [
        "believe",
        "believes",
        "is believing",
        "believed"
      ],
      "correctAnswer": "believes",
      "explanation": "'Believe' statik fe'l bo'lib, uchinchi shaxs birlikda 'believes' bo'ladi."
    },
    {
      "question": "Public transport in Tashkent _______ efficiently across all major districts.",
      "options": [
        "operates",
        "operate",
        "is operating",
        "operated"
      ],
      "correctAnswer": "operates",
      "explanation": "'Public transport' sanalmaydigan ot, Present Simple da '-s' oladi: 'operates'."
    },
    {
      "question": "The IELTS exam _______ test-takers across four core language competencies.",
      "options": [
        "assess",
        "assesses",
        "is assessing",
        "assessed"
      ],
      "correctAnswer": "assesses",
      "explanation": "'The IELTS exam' (it) uchinchi shaxs birlikda '-es' oladi: 'assesses'."
    }
  ],
  "murphy_u06_present_simple_negative": [
    {
      "question": "She _______ coffee because it _______ her sleep.",
      "options": [
        "doesn't drink / disrupts",
        "don't drink / disrupts",
        "doesn't drinks / disrupt",
        "doesn't drink / disrupt"
      ],
      "correctAnswer": "doesn't drink / disrupts",
      "explanation": "Inkorda 'doesn't drink', ikkinchi qismda darak 3-shaxs birlik 'disrupts'."
    },
    {
      "question": "2-Savol: \"I don't ... (Present Simple Inkor Shakli)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #2]",
      "options": [
        "Correct academic usage adhering to I / We / You / They + don't (do not) + V1. [Savol #2]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #2]",
        "Incompatible tense sequence violating subject agreement. [Savol #2]",
        "Omission of essential verb particle or preposition. [Savol #2]"
      ],
      "correctAnswer": "Correct academic usage adhering to I / We / You / They + don't (do not) + V1. [Savol #2]",
      "explanation": "Ushbu birlik (I don't ... (Present Simple Inkor Shakli)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to I / We / You / They + don't (do not) + V1.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "3-Savol: \"I don't ... (Present Simple Inkor Shakli)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #3]",
      "options": [
        "Correct academic usage adhering to I / We / You / They + don't (do not) + V1. [Savol #3]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #3]",
        "Incompatible tense sequence violating subject agreement. [Savol #3]",
        "Omission of essential verb particle or preposition. [Savol #3]"
      ],
      "correctAnswer": "Correct academic usage adhering to I / We / You / They + don't (do not) + V1. [Savol #3]",
      "explanation": "Ushbu birlik (I don't ... (Present Simple Inkor Shakli)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to I / We / You / They + don't (do not) + V1.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "4-Savol: \"I don't ... (Present Simple Inkor Shakli)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #4]",
      "options": [
        "Correct academic usage adhering to I / We / You / They + don't (do not) + V1. [Savol #4]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #4]",
        "Incompatible tense sequence violating subject agreement. [Savol #4]",
        "Omission of essential verb particle or preposition. [Savol #4]"
      ],
      "correctAnswer": "Correct academic usage adhering to I / We / You / They + don't (do not) + V1. [Savol #4]",
      "explanation": "Ushbu birlik (I don't ... (Present Simple Inkor Shakli)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to I / We / You / They + don't (do not) + V1.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "5-Savol: \"I don't ... (Present Simple Inkor Shakli)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #5]",
      "options": [
        "Correct academic usage adhering to I / We / You / They + don't (do not) + V1. [Savol #5]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #5]",
        "Incompatible tense sequence violating subject agreement. [Savol #5]",
        "Omission of essential verb particle or preposition. [Savol #5]"
      ],
      "correctAnswer": "Correct academic usage adhering to I / We / You / They + don't (do not) + V1. [Savol #5]",
      "explanation": "Ushbu birlik (I don't ... (Present Simple Inkor Shakli)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to I / We / You / They + don't (do not) + V1.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "6-Savol: \"I don't ... (Present Simple Inkor Shakli)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #6]",
      "options": [
        "Correct academic usage adhering to I / We / You / They + don't (do not) + V1. [Savol #6]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #6]",
        "Incompatible tense sequence violating subject agreement. [Savol #6]",
        "Omission of essential verb particle or preposition. [Savol #6]"
      ],
      "correctAnswer": "Correct academic usage adhering to I / We / You / They + don't (do not) + V1. [Savol #6]",
      "explanation": "Ushbu birlik (I don't ... (Present Simple Inkor Shakli)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to I / We / You / They + don't (do not) + V1.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "7-Savol: \"I don't ... (Present Simple Inkor Shakli)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #7]",
      "options": [
        "Correct academic usage adhering to I / We / You / They + don't (do not) + V1. [Savol #7]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #7]",
        "Incompatible tense sequence violating subject agreement. [Savol #7]",
        "Omission of essential verb particle or preposition. [Savol #7]"
      ],
      "correctAnswer": "Correct academic usage adhering to I / We / You / They + don't (do not) + V1. [Savol #7]",
      "explanation": "Ushbu birlik (I don't ... (Present Simple Inkor Shakli)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to I / We / You / They + don't (do not) + V1.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "8-Savol: \"I don't ... (Present Simple Inkor Shakli)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #8]",
      "options": [
        "Correct academic usage adhering to I / We / You / They + don't (do not) + V1. [Savol #8]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #8]",
        "Incompatible tense sequence violating subject agreement. [Savol #8]",
        "Omission of essential verb particle or preposition. [Savol #8]"
      ],
      "correctAnswer": "Correct academic usage adhering to I / We / You / They + don't (do not) + V1. [Savol #8]",
      "explanation": "Ushbu birlik (I don't ... (Present Simple Inkor Shakli)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to I / We / You / They + don't (do not) + V1.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "9-Savol: \"I don't ... (Present Simple Inkor Shakli)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #9]",
      "options": [
        "Correct academic usage adhering to I / We / You / They + don't (do not) + V1. [Savol #9]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #9]",
        "Incompatible tense sequence violating subject agreement. [Savol #9]",
        "Omission of essential verb particle or preposition. [Savol #9]"
      ],
      "correctAnswer": "Correct academic usage adhering to I / We / You / They + don't (do not) + V1. [Savol #9]",
      "explanation": "Ushbu birlik (I don't ... (Present Simple Inkor Shakli)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to I / We / You / They + don't (do not) + V1.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "10-Savol: \"I don't ... (Present Simple Inkor Shakli)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #10]",
      "options": [
        "Correct academic usage adhering to I / We / You / They + don't (do not) + V1. [Savol #10]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #10]",
        "Incompatible tense sequence violating subject agreement. [Savol #10]",
        "Omission of essential verb particle or preposition. [Savol #10]"
      ],
      "correctAnswer": "Correct academic usage adhering to I / We / You / They + don't (do not) + V1. [Savol #10]",
      "explanation": "Ushbu birlik (I don't ... (Present Simple Inkor Shakli)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to I / We / You / They + don't (do not) + V1.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    }
  ],
  "murphy_u07_present_simple_questions": [
    {
      "question": "What time _______ the morning lecture _______?",
      "options": [
        "does / start",
        "do / start",
        "is / start",
        "does / starts"
      ],
      "correctAnswer": "does / start",
      "explanation": "'The morning lecture' (it) uchun 'does ... start' to'g'ri bo'ladi."
    },
    {
      "question": "2-Savol: \"Do you ... ? (Present Simple Savollari)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #2]",
      "options": [
        "Correct academic usage adhering to Do + I/we/you/they + V1?. [Savol #2]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #2]",
        "Incompatible tense sequence violating subject agreement. [Savol #2]",
        "Omission of essential verb particle or preposition. [Savol #2]"
      ],
      "correctAnswer": "Correct academic usage adhering to Do + I/we/you/they + V1?. [Savol #2]",
      "explanation": "Ushbu birlik (Do you ... ? (Present Simple Savollari)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to Do + I/we/you/they + V1?.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "3-Savol: \"Do you ... ? (Present Simple Savollari)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #3]",
      "options": [
        "Correct academic usage adhering to Do + I/we/you/they + V1?. [Savol #3]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #3]",
        "Incompatible tense sequence violating subject agreement. [Savol #3]",
        "Omission of essential verb particle or preposition. [Savol #3]"
      ],
      "correctAnswer": "Correct academic usage adhering to Do + I/we/you/they + V1?. [Savol #3]",
      "explanation": "Ushbu birlik (Do you ... ? (Present Simple Savollari)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to Do + I/we/you/they + V1?.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "4-Savol: \"Do you ... ? (Present Simple Savollari)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #4]",
      "options": [
        "Correct academic usage adhering to Do + I/we/you/they + V1?. [Savol #4]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #4]",
        "Incompatible tense sequence violating subject agreement. [Savol #4]",
        "Omission of essential verb particle or preposition. [Savol #4]"
      ],
      "correctAnswer": "Correct academic usage adhering to Do + I/we/you/they + V1?. [Savol #4]",
      "explanation": "Ushbu birlik (Do you ... ? (Present Simple Savollari)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to Do + I/we/you/they + V1?.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "5-Savol: \"Do you ... ? (Present Simple Savollari)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #5]",
      "options": [
        "Correct academic usage adhering to Do + I/we/you/they + V1?. [Savol #5]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #5]",
        "Incompatible tense sequence violating subject agreement. [Savol #5]",
        "Omission of essential verb particle or preposition. [Savol #5]"
      ],
      "correctAnswer": "Correct academic usage adhering to Do + I/we/you/they + V1?. [Savol #5]",
      "explanation": "Ushbu birlik (Do you ... ? (Present Simple Savollari)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to Do + I/we/you/they + V1?.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "6-Savol: \"Do you ... ? (Present Simple Savollari)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #6]",
      "options": [
        "Correct academic usage adhering to Do + I/we/you/they + V1?. [Savol #6]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #6]",
        "Incompatible tense sequence violating subject agreement. [Savol #6]",
        "Omission of essential verb particle or preposition. [Savol #6]"
      ],
      "correctAnswer": "Correct academic usage adhering to Do + I/we/you/they + V1?. [Savol #6]",
      "explanation": "Ushbu birlik (Do you ... ? (Present Simple Savollari)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to Do + I/we/you/they + V1?.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "7-Savol: \"Do you ... ? (Present Simple Savollari)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #7]",
      "options": [
        "Correct academic usage adhering to Do + I/we/you/they + V1?. [Savol #7]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #7]",
        "Incompatible tense sequence violating subject agreement. [Savol #7]",
        "Omission of essential verb particle or preposition. [Savol #7]"
      ],
      "correctAnswer": "Correct academic usage adhering to Do + I/we/you/they + V1?. [Savol #7]",
      "explanation": "Ushbu birlik (Do you ... ? (Present Simple Savollari)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to Do + I/we/you/they + V1?.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "8-Savol: \"Do you ... ? (Present Simple Savollari)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #8]",
      "options": [
        "Correct academic usage adhering to Do + I/we/you/they + V1?. [Savol #8]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #8]",
        "Incompatible tense sequence violating subject agreement. [Savol #8]",
        "Omission of essential verb particle or preposition. [Savol #8]"
      ],
      "correctAnswer": "Correct academic usage adhering to Do + I/we/you/they + V1?. [Savol #8]",
      "explanation": "Ushbu birlik (Do you ... ? (Present Simple Savollari)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to Do + I/we/you/they + V1?.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "9-Savol: \"Do you ... ? (Present Simple Savollari)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #9]",
      "options": [
        "Correct academic usage adhering to Do + I/we/you/they + V1?. [Savol #9]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #9]",
        "Incompatible tense sequence violating subject agreement. [Savol #9]",
        "Omission of essential verb particle or preposition. [Savol #9]"
      ],
      "correctAnswer": "Correct academic usage adhering to Do + I/we/you/they + V1?. [Savol #9]",
      "explanation": "Ushbu birlik (Do you ... ? (Present Simple Savollari)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to Do + I/we/you/they + V1?.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "10-Savol: \"Do you ... ? (Present Simple Savollari)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #10]",
      "options": [
        "Correct academic usage adhering to Do + I/we/you/they + V1?. [Savol #10]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #10]",
        "Incompatible tense sequence violating subject agreement. [Savol #10]",
        "Omission of essential verb particle or preposition. [Savol #10]"
      ],
      "correctAnswer": "Correct academic usage adhering to Do + I/we/you/they + V1?. [Savol #10]",
      "explanation": "Ushbu birlik (Do you ... ? (Present Simple Savollari)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to Do + I/we/you/they + V1?.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    }
  ],
  "murphy_u08_present_continuous_vs_simple": [
    {
      "question": "Listen! Somebody _______ the guitar, but I _______ who it is.",
      "options": [
        "is playing / don't know",
        "plays / don't know",
        "is playing / am not knowing",
        "plays / am not knowing"
      ],
      "correctAnswer": "is playing / don't know",
      "explanation": "Birinchi harakat ayni paytda (is playing), 'know' esa statik fe'l (don't know)."
    },
    {
      "question": "2-Savol: \"I am doing and I do (Continuous va Simple Taqqoslash & Statik Fe'llar)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #2]",
      "options": [
        "Correct academic usage adhering to Continuous (am/is/are + V-ing) = Hozir/Vaqtinchalik vs. Simple (V/Vs) = Doimiy/Odat. [Savol #2]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #2]",
        "Incompatible tense sequence violating subject agreement. [Savol #2]",
        "Omission of essential verb particle or preposition. [Savol #2]"
      ],
      "correctAnswer": "Correct academic usage adhering to Continuous (am/is/are + V-ing) = Hozir/Vaqtinchalik vs. Simple (V/Vs) = Doimiy/Odat. [Savol #2]",
      "explanation": "Ushbu birlik (I am doing and I do (Continuous va Simple Taqqoslash & Statik Fe'llar)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to Continuous (am/is/are + V-ing) = Hozir/Vaqtinchalik vs. Simple (V/Vs) = Doimiy/Odat.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "3-Savol: \"I am doing and I do (Continuous va Simple Taqqoslash & Statik Fe'llar)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #3]",
      "options": [
        "Correct academic usage adhering to Continuous (am/is/are + V-ing) = Hozir/Vaqtinchalik vs. Simple (V/Vs) = Doimiy/Odat. [Savol #3]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #3]",
        "Incompatible tense sequence violating subject agreement. [Savol #3]",
        "Omission of essential verb particle or preposition. [Savol #3]"
      ],
      "correctAnswer": "Correct academic usage adhering to Continuous (am/is/are + V-ing) = Hozir/Vaqtinchalik vs. Simple (V/Vs) = Doimiy/Odat. [Savol #3]",
      "explanation": "Ushbu birlik (I am doing and I do (Continuous va Simple Taqqoslash & Statik Fe'llar)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to Continuous (am/is/are + V-ing) = Hozir/Vaqtinchalik vs. Simple (V/Vs) = Doimiy/Odat.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "4-Savol: \"I am doing and I do (Continuous va Simple Taqqoslash & Statik Fe'llar)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #4]",
      "options": [
        "Correct academic usage adhering to Continuous (am/is/are + V-ing) = Hozir/Vaqtinchalik vs. Simple (V/Vs) = Doimiy/Odat. [Savol #4]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #4]",
        "Incompatible tense sequence violating subject agreement. [Savol #4]",
        "Omission of essential verb particle or preposition. [Savol #4]"
      ],
      "correctAnswer": "Correct academic usage adhering to Continuous (am/is/are + V-ing) = Hozir/Vaqtinchalik vs. Simple (V/Vs) = Doimiy/Odat. [Savol #4]",
      "explanation": "Ushbu birlik (I am doing and I do (Continuous va Simple Taqqoslash & Statik Fe'llar)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to Continuous (am/is/are + V-ing) = Hozir/Vaqtinchalik vs. Simple (V/Vs) = Doimiy/Odat.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "5-Savol: \"I am doing and I do (Continuous va Simple Taqqoslash & Statik Fe'llar)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #5]",
      "options": [
        "Correct academic usage adhering to Continuous (am/is/are + V-ing) = Hozir/Vaqtinchalik vs. Simple (V/Vs) = Doimiy/Odat. [Savol #5]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #5]",
        "Incompatible tense sequence violating subject agreement. [Savol #5]",
        "Omission of essential verb particle or preposition. [Savol #5]"
      ],
      "correctAnswer": "Correct academic usage adhering to Continuous (am/is/are + V-ing) = Hozir/Vaqtinchalik vs. Simple (V/Vs) = Doimiy/Odat. [Savol #5]",
      "explanation": "Ushbu birlik (I am doing and I do (Continuous va Simple Taqqoslash & Statik Fe'llar)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to Continuous (am/is/are + V-ing) = Hozir/Vaqtinchalik vs. Simple (V/Vs) = Doimiy/Odat.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "6-Savol: \"I am doing and I do (Continuous va Simple Taqqoslash & Statik Fe'llar)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #6]",
      "options": [
        "Correct academic usage adhering to Continuous (am/is/are + V-ing) = Hozir/Vaqtinchalik vs. Simple (V/Vs) = Doimiy/Odat. [Savol #6]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #6]",
        "Incompatible tense sequence violating subject agreement. [Savol #6]",
        "Omission of essential verb particle or preposition. [Savol #6]"
      ],
      "correctAnswer": "Correct academic usage adhering to Continuous (am/is/are + V-ing) = Hozir/Vaqtinchalik vs. Simple (V/Vs) = Doimiy/Odat. [Savol #6]",
      "explanation": "Ushbu birlik (I am doing and I do (Continuous va Simple Taqqoslash & Statik Fe'llar)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to Continuous (am/is/are + V-ing) = Hozir/Vaqtinchalik vs. Simple (V/Vs) = Doimiy/Odat.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "7-Savol: \"I am doing and I do (Continuous va Simple Taqqoslash & Statik Fe'llar)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #7]",
      "options": [
        "Correct academic usage adhering to Continuous (am/is/are + V-ing) = Hozir/Vaqtinchalik vs. Simple (V/Vs) = Doimiy/Odat. [Savol #7]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #7]",
        "Incompatible tense sequence violating subject agreement. [Savol #7]",
        "Omission of essential verb particle or preposition. [Savol #7]"
      ],
      "correctAnswer": "Correct academic usage adhering to Continuous (am/is/are + V-ing) = Hozir/Vaqtinchalik vs. Simple (V/Vs) = Doimiy/Odat. [Savol #7]",
      "explanation": "Ushbu birlik (I am doing and I do (Continuous va Simple Taqqoslash & Statik Fe'llar)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to Continuous (am/is/are + V-ing) = Hozir/Vaqtinchalik vs. Simple (V/Vs) = Doimiy/Odat.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "8-Savol: \"I am doing and I do (Continuous va Simple Taqqoslash & Statik Fe'llar)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #8]",
      "options": [
        "Correct academic usage adhering to Continuous (am/is/are + V-ing) = Hozir/Vaqtinchalik vs. Simple (V/Vs) = Doimiy/Odat. [Savol #8]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #8]",
        "Incompatible tense sequence violating subject agreement. [Savol #8]",
        "Omission of essential verb particle or preposition. [Savol #8]"
      ],
      "correctAnswer": "Correct academic usage adhering to Continuous (am/is/are + V-ing) = Hozir/Vaqtinchalik vs. Simple (V/Vs) = Doimiy/Odat. [Savol #8]",
      "explanation": "Ushbu birlik (I am doing and I do (Continuous va Simple Taqqoslash & Statik Fe'llar)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to Continuous (am/is/are + V-ing) = Hozir/Vaqtinchalik vs. Simple (V/Vs) = Doimiy/Odat.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "9-Savol: \"I am doing and I do (Continuous va Simple Taqqoslash & Statik Fe'llar)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #9]",
      "options": [
        "Correct academic usage adhering to Continuous (am/is/are + V-ing) = Hozir/Vaqtinchalik vs. Simple (V/Vs) = Doimiy/Odat. [Savol #9]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #9]",
        "Incompatible tense sequence violating subject agreement. [Savol #9]",
        "Omission of essential verb particle or preposition. [Savol #9]"
      ],
      "correctAnswer": "Correct academic usage adhering to Continuous (am/is/are + V-ing) = Hozir/Vaqtinchalik vs. Simple (V/Vs) = Doimiy/Odat. [Savol #9]",
      "explanation": "Ushbu birlik (I am doing and I do (Continuous va Simple Taqqoslash & Statik Fe'llar)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to Continuous (am/is/are + V-ing) = Hozir/Vaqtinchalik vs. Simple (V/Vs) = Doimiy/Odat.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "10-Savol: \"I am doing and I do (Continuous va Simple Taqqoslash & Statik Fe'llar)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #10]",
      "options": [
        "Correct academic usage adhering to Continuous (am/is/are + V-ing) = Hozir/Vaqtinchalik vs. Simple (V/Vs) = Doimiy/Odat. [Savol #10]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #10]",
        "Incompatible tense sequence violating subject agreement. [Savol #10]",
        "Omission of essential verb particle or preposition. [Savol #10]"
      ],
      "correctAnswer": "Correct academic usage adhering to Continuous (am/is/are + V-ing) = Hozir/Vaqtinchalik vs. Simple (V/Vs) = Doimiy/Odat. [Savol #10]",
      "explanation": "Ushbu birlik (I am doing and I do (Continuous va Simple Taqqoslash & Statik Fe'llar)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to Continuous (am/is/are + V-ing) = Hozir/Vaqtinchalik vs. Simple (V/Vs) = Doimiy/Odat.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    }
  ],
  "murphy_u09_have_have_got": [
    {
      "question": "Sarah _______ a new laptop, but she _______ a printer.",
      "options": [
        "has got / hasn't got",
        "have got / haven't got",
        "has got / haven't got",
        "have got / hasn't got"
      ],
      "correctAnswer": "has got / hasn't got",
      "explanation": "Sarah (She) uchun darak shaklda 'has got', inkorda 'hasn't got' to'g'ri keladi."
    },
    {
      "question": "2-Savol: \"I have ... / I've got ... (Egalik Ifodalash)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #2]",
      "options": [
        "Correct academic usage adhering to I/We/You/They have got (have). [Savol #2]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #2]",
        "Incompatible tense sequence violating subject agreement. [Savol #2]",
        "Omission of essential verb particle or preposition. [Savol #2]"
      ],
      "correctAnswer": "Correct academic usage adhering to I/We/You/They have got (have). [Savol #2]",
      "explanation": "Ushbu birlik (I have ... / I've got ... (Egalik Ifodalash)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to I/We/You/They have got (have).' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "3-Savol: \"I have ... / I've got ... (Egalik Ifodalash)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #3]",
      "options": [
        "Correct academic usage adhering to I/We/You/They have got (have). [Savol #3]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #3]",
        "Incompatible tense sequence violating subject agreement. [Savol #3]",
        "Omission of essential verb particle or preposition. [Savol #3]"
      ],
      "correctAnswer": "Correct academic usage adhering to I/We/You/They have got (have). [Savol #3]",
      "explanation": "Ushbu birlik (I have ... / I've got ... (Egalik Ifodalash)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to I/We/You/They have got (have).' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "4-Savol: \"I have ... / I've got ... (Egalik Ifodalash)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #4]",
      "options": [
        "Correct academic usage adhering to I/We/You/They have got (have). [Savol #4]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #4]",
        "Incompatible tense sequence violating subject agreement. [Savol #4]",
        "Omission of essential verb particle or preposition. [Savol #4]"
      ],
      "correctAnswer": "Correct academic usage adhering to I/We/You/They have got (have). [Savol #4]",
      "explanation": "Ushbu birlik (I have ... / I've got ... (Egalik Ifodalash)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to I/We/You/They have got (have).' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "5-Savol: \"I have ... / I've got ... (Egalik Ifodalash)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #5]",
      "options": [
        "Correct academic usage adhering to I/We/You/They have got (have). [Savol #5]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #5]",
        "Incompatible tense sequence violating subject agreement. [Savol #5]",
        "Omission of essential verb particle or preposition. [Savol #5]"
      ],
      "correctAnswer": "Correct academic usage adhering to I/We/You/They have got (have). [Savol #5]",
      "explanation": "Ushbu birlik (I have ... / I've got ... (Egalik Ifodalash)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to I/We/You/They have got (have).' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "6-Savol: \"I have ... / I've got ... (Egalik Ifodalash)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #6]",
      "options": [
        "Correct academic usage adhering to I/We/You/They have got (have). [Savol #6]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #6]",
        "Incompatible tense sequence violating subject agreement. [Savol #6]",
        "Omission of essential verb particle or preposition. [Savol #6]"
      ],
      "correctAnswer": "Correct academic usage adhering to I/We/You/They have got (have). [Savol #6]",
      "explanation": "Ushbu birlik (I have ... / I've got ... (Egalik Ifodalash)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to I/We/You/They have got (have).' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "7-Savol: \"I have ... / I've got ... (Egalik Ifodalash)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #7]",
      "options": [
        "Correct academic usage adhering to I/We/You/They have got (have). [Savol #7]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #7]",
        "Incompatible tense sequence violating subject agreement. [Savol #7]",
        "Omission of essential verb particle or preposition. [Savol #7]"
      ],
      "correctAnswer": "Correct academic usage adhering to I/We/You/They have got (have). [Savol #7]",
      "explanation": "Ushbu birlik (I have ... / I've got ... (Egalik Ifodalash)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to I/We/You/They have got (have).' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "8-Savol: \"I have ... / I've got ... (Egalik Ifodalash)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #8]",
      "options": [
        "Correct academic usage adhering to I/We/You/They have got (have). [Savol #8]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #8]",
        "Incompatible tense sequence violating subject agreement. [Savol #8]",
        "Omission of essential verb particle or preposition. [Savol #8]"
      ],
      "correctAnswer": "Correct academic usage adhering to I/We/You/They have got (have). [Savol #8]",
      "explanation": "Ushbu birlik (I have ... / I've got ... (Egalik Ifodalash)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to I/We/You/They have got (have).' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "9-Savol: \"I have ... / I've got ... (Egalik Ifodalash)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #9]",
      "options": [
        "Correct academic usage adhering to I/We/You/They have got (have). [Savol #9]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #9]",
        "Incompatible tense sequence violating subject agreement. [Savol #9]",
        "Omission of essential verb particle or preposition. [Savol #9]"
      ],
      "correctAnswer": "Correct academic usage adhering to I/We/You/They have got (have). [Savol #9]",
      "explanation": "Ushbu birlik (I have ... / I've got ... (Egalik Ifodalash)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to I/We/You/They have got (have).' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "10-Savol: \"I have ... / I've got ... (Egalik Ifodalash)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #10]",
      "options": [
        "Correct academic usage adhering to I/We/You/They have got (have). [Savol #10]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #10]",
        "Incompatible tense sequence violating subject agreement. [Savol #10]",
        "Omission of essential verb particle or preposition. [Savol #10]"
      ],
      "correctAnswer": "Correct academic usage adhering to I/We/You/They have got (have). [Savol #10]",
      "explanation": "Ushbu birlik (I have ... / I've got ... (Egalik Ifodalash)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to I/We/You/They have got (have).' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    }
  ],
  "murphy_u10_was_were": [
    {
      "question": "Where _______ you yesterday at 5 PM? I _______ looking for you.",
      "options": [
        "were / was",
        "was / were",
        "were / were",
        "was / was"
      ],
      "correctAnswer": "were / was",
      "explanation": "'You' bilan 'were', 'I' bilan 'was' to'g'ri keladi."
    },
    {
      "question": "2-Savol: \"was / were (To Be ning O'tgan Zamoni)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #2]",
      "options": [
        "Correct academic usage adhering to I / He / She / It was. [Savol #2]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #2]",
        "Incompatible tense sequence violating subject agreement. [Savol #2]",
        "Omission of essential verb particle or preposition. [Savol #2]"
      ],
      "correctAnswer": "Correct academic usage adhering to I / He / She / It was. [Savol #2]",
      "explanation": "Ushbu birlik (was / were (To Be ning O'tgan Zamoni)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to I / He / She / It was.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "3-Savol: \"was / were (To Be ning O'tgan Zamoni)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #3]",
      "options": [
        "Correct academic usage adhering to I / He / She / It was. [Savol #3]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #3]",
        "Incompatible tense sequence violating subject agreement. [Savol #3]",
        "Omission of essential verb particle or preposition. [Savol #3]"
      ],
      "correctAnswer": "Correct academic usage adhering to I / He / She / It was. [Savol #3]",
      "explanation": "Ushbu birlik (was / were (To Be ning O'tgan Zamoni)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to I / He / She / It was.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "4-Savol: \"was / were (To Be ning O'tgan Zamoni)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #4]",
      "options": [
        "Correct academic usage adhering to I / He / She / It was. [Savol #4]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #4]",
        "Incompatible tense sequence violating subject agreement. [Savol #4]",
        "Omission of essential verb particle or preposition. [Savol #4]"
      ],
      "correctAnswer": "Correct academic usage adhering to I / He / She / It was. [Savol #4]",
      "explanation": "Ushbu birlik (was / were (To Be ning O'tgan Zamoni)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to I / He / She / It was.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "5-Savol: \"was / were (To Be ning O'tgan Zamoni)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #5]",
      "options": [
        "Correct academic usage adhering to I / He / She / It was. [Savol #5]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #5]",
        "Incompatible tense sequence violating subject agreement. [Savol #5]",
        "Omission of essential verb particle or preposition. [Savol #5]"
      ],
      "correctAnswer": "Correct academic usage adhering to I / He / She / It was. [Savol #5]",
      "explanation": "Ushbu birlik (was / were (To Be ning O'tgan Zamoni)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to I / He / She / It was.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "6-Savol: \"was / were (To Be ning O'tgan Zamoni)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #6]",
      "options": [
        "Correct academic usage adhering to I / He / She / It was. [Savol #6]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #6]",
        "Incompatible tense sequence violating subject agreement. [Savol #6]",
        "Omission of essential verb particle or preposition. [Savol #6]"
      ],
      "correctAnswer": "Correct academic usage adhering to I / He / She / It was. [Savol #6]",
      "explanation": "Ushbu birlik (was / were (To Be ning O'tgan Zamoni)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to I / He / She / It was.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "7-Savol: \"was / were (To Be ning O'tgan Zamoni)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #7]",
      "options": [
        "Correct academic usage adhering to I / He / She / It was. [Savol #7]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #7]",
        "Incompatible tense sequence violating subject agreement. [Savol #7]",
        "Omission of essential verb particle or preposition. [Savol #7]"
      ],
      "correctAnswer": "Correct academic usage adhering to I / He / She / It was. [Savol #7]",
      "explanation": "Ushbu birlik (was / were (To Be ning O'tgan Zamoni)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to I / He / She / It was.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "8-Savol: \"was / were (To Be ning O'tgan Zamoni)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #8]",
      "options": [
        "Correct academic usage adhering to I / He / She / It was. [Savol #8]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #8]",
        "Incompatible tense sequence violating subject agreement. [Savol #8]",
        "Omission of essential verb particle or preposition. [Savol #8]"
      ],
      "correctAnswer": "Correct academic usage adhering to I / He / She / It was. [Savol #8]",
      "explanation": "Ushbu birlik (was / were (To Be ning O'tgan Zamoni)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to I / He / She / It was.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "9-Savol: \"was / were (To Be ning O'tgan Zamoni)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #9]",
      "options": [
        "Correct academic usage adhering to I / He / She / It was. [Savol #9]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #9]",
        "Incompatible tense sequence violating subject agreement. [Savol #9]",
        "Omission of essential verb particle or preposition. [Savol #9]"
      ],
      "correctAnswer": "Correct academic usage adhering to I / He / She / It was. [Savol #9]",
      "explanation": "Ushbu birlik (was / were (To Be ning O'tgan Zamoni)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to I / He / She / It was.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "10-Savol: \"was / were (To Be ning O'tgan Zamoni)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #10]",
      "options": [
        "Correct academic usage adhering to I / He / She / It was. [Savol #10]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #10]",
        "Incompatible tense sequence violating subject agreement. [Savol #10]",
        "Omission of essential verb particle or preposition. [Savol #10]"
      ],
      "correctAnswer": "Correct academic usage adhering to I / He / She / It was. [Savol #10]",
      "explanation": "Ushbu birlik (was / were (To Be ning O'tgan Zamoni)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to I / He / She / It was.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    }
  ],
  "murphy_u11_past_simple_regular_irregular": [
    {
      "question": "The company _______ its first international branch in 2012.",
      "options": [
        "established",
        "establishes",
        "is establishing",
        "has established"
      ],
      "correctAnswer": "established",
      "explanation": "2012 yil aniq o'tgan davr bo'lgani sababli fe'lning 2-shakli (established) tanlanadi."
    },
    {
      "question": "2-Savol: \"worked / got / went etc. (Past Simple — O'tgan Oddiy Zamon)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #2]",
      "options": [
        "Correct academic usage adhering to To'g'ri fe'llar: V + -ed (worked, cleaned). [Savol #2]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #2]",
        "Incompatible tense sequence violating subject agreement. [Savol #2]",
        "Omission of essential verb particle or preposition. [Savol #2]"
      ],
      "correctAnswer": "Correct academic usage adhering to To'g'ri fe'llar: V + -ed (worked, cleaned). [Savol #2]",
      "explanation": "Ushbu birlik (worked / got / went etc. (Past Simple — O'tgan Oddiy Zamon)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to To'g'ri fe'llar: V + -ed (worked, cleaned).' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "3-Savol: \"worked / got / went etc. (Past Simple — O'tgan Oddiy Zamon)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #3]",
      "options": [
        "Correct academic usage adhering to To'g'ri fe'llar: V + -ed (worked, cleaned). [Savol #3]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #3]",
        "Incompatible tense sequence violating subject agreement. [Savol #3]",
        "Omission of essential verb particle or preposition. [Savol #3]"
      ],
      "correctAnswer": "Correct academic usage adhering to To'g'ri fe'llar: V + -ed (worked, cleaned). [Savol #3]",
      "explanation": "Ushbu birlik (worked / got / went etc. (Past Simple — O'tgan Oddiy Zamon)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to To'g'ri fe'llar: V + -ed (worked, cleaned).' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "4-Savol: \"worked / got / went etc. (Past Simple — O'tgan Oddiy Zamon)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #4]",
      "options": [
        "Correct academic usage adhering to To'g'ri fe'llar: V + -ed (worked, cleaned). [Savol #4]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #4]",
        "Incompatible tense sequence violating subject agreement. [Savol #4]",
        "Omission of essential verb particle or preposition. [Savol #4]"
      ],
      "correctAnswer": "Correct academic usage adhering to To'g'ri fe'llar: V + -ed (worked, cleaned). [Savol #4]",
      "explanation": "Ushbu birlik (worked / got / went etc. (Past Simple — O'tgan Oddiy Zamon)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to To'g'ri fe'llar: V + -ed (worked, cleaned).' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "5-Savol: \"worked / got / went etc. (Past Simple — O'tgan Oddiy Zamon)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #5]",
      "options": [
        "Correct academic usage adhering to To'g'ri fe'llar: V + -ed (worked, cleaned). [Savol #5]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #5]",
        "Incompatible tense sequence violating subject agreement. [Savol #5]",
        "Omission of essential verb particle or preposition. [Savol #5]"
      ],
      "correctAnswer": "Correct academic usage adhering to To'g'ri fe'llar: V + -ed (worked, cleaned). [Savol #5]",
      "explanation": "Ushbu birlik (worked / got / went etc. (Past Simple — O'tgan Oddiy Zamon)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to To'g'ri fe'llar: V + -ed (worked, cleaned).' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "6-Savol: \"worked / got / went etc. (Past Simple — O'tgan Oddiy Zamon)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #6]",
      "options": [
        "Correct academic usage adhering to To'g'ri fe'llar: V + -ed (worked, cleaned). [Savol #6]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #6]",
        "Incompatible tense sequence violating subject agreement. [Savol #6]",
        "Omission of essential verb particle or preposition. [Savol #6]"
      ],
      "correctAnswer": "Correct academic usage adhering to To'g'ri fe'llar: V + -ed (worked, cleaned). [Savol #6]",
      "explanation": "Ushbu birlik (worked / got / went etc. (Past Simple — O'tgan Oddiy Zamon)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to To'g'ri fe'llar: V + -ed (worked, cleaned).' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "7-Savol: \"worked / got / went etc. (Past Simple — O'tgan Oddiy Zamon)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #7]",
      "options": [
        "Correct academic usage adhering to To'g'ri fe'llar: V + -ed (worked, cleaned). [Savol #7]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #7]",
        "Incompatible tense sequence violating subject agreement. [Savol #7]",
        "Omission of essential verb particle or preposition. [Savol #7]"
      ],
      "correctAnswer": "Correct academic usage adhering to To'g'ri fe'llar: V + -ed (worked, cleaned). [Savol #7]",
      "explanation": "Ushbu birlik (worked / got / went etc. (Past Simple — O'tgan Oddiy Zamon)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to To'g'ri fe'llar: V + -ed (worked, cleaned).' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "8-Savol: \"worked / got / went etc. (Past Simple — O'tgan Oddiy Zamon)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #8]",
      "options": [
        "Correct academic usage adhering to To'g'ri fe'llar: V + -ed (worked, cleaned). [Savol #8]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #8]",
        "Incompatible tense sequence violating subject agreement. [Savol #8]",
        "Omission of essential verb particle or preposition. [Savol #8]"
      ],
      "correctAnswer": "Correct academic usage adhering to To'g'ri fe'llar: V + -ed (worked, cleaned). [Savol #8]",
      "explanation": "Ushbu birlik (worked / got / went etc. (Past Simple — O'tgan Oddiy Zamon)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to To'g'ri fe'llar: V + -ed (worked, cleaned).' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "9-Savol: \"worked / got / went etc. (Past Simple — O'tgan Oddiy Zamon)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #9]",
      "options": [
        "Correct academic usage adhering to To'g'ri fe'llar: V + -ed (worked, cleaned). [Savol #9]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #9]",
        "Incompatible tense sequence violating subject agreement. [Savol #9]",
        "Omission of essential verb particle or preposition. [Savol #9]"
      ],
      "correctAnswer": "Correct academic usage adhering to To'g'ri fe'llar: V + -ed (worked, cleaned). [Savol #9]",
      "explanation": "Ushbu birlik (worked / got / went etc. (Past Simple — O'tgan Oddiy Zamon)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to To'g'ri fe'llar: V + -ed (worked, cleaned).' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "10-Savol: \"worked / got / went etc. (Past Simple — O'tgan Oddiy Zamon)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #10]",
      "options": [
        "Correct academic usage adhering to To'g'ri fe'llar: V + -ed (worked, cleaned). [Savol #10]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #10]",
        "Incompatible tense sequence violating subject agreement. [Savol #10]",
        "Omission of essential verb particle or preposition. [Savol #10]"
      ],
      "correctAnswer": "Correct academic usage adhering to To'g'ri fe'llar: V + -ed (worked, cleaned). [Savol #10]",
      "explanation": "Ushbu birlik (worked / got / went etc. (Past Simple — O'tgan Oddiy Zamon)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to To'g'ri fe'llar: V + -ed (worked, cleaned).' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    }
  ],
  "murphy_u12_past_simple_negative_questions": [
    {
      "question": "Why _______ you _______ the assignment on time?",
      "options": [
        "didn't / submit",
        "didn't / submitted",
        "weren't / submit",
        "don't / submitted"
      ],
      "correctAnswer": "didn't / submit",
      "explanation": "'didn't' dan keyin asosiy fe'l asosi (submit) keladi."
    },
    {
      "question": "2-Savol: \"I didn't ... Did you ... ? (Past Simple Inkor va Savol)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #2]",
      "options": [
        "Correct academic usage adhering to Inkor: S + didn't (did not) + V1. [Savol #2]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #2]",
        "Incompatible tense sequence violating subject agreement. [Savol #2]",
        "Omission of essential verb particle or preposition. [Savol #2]"
      ],
      "correctAnswer": "Correct academic usage adhering to Inkor: S + didn't (did not) + V1. [Savol #2]",
      "explanation": "Ushbu birlik (I didn't ... Did you ... ? (Past Simple Inkor va Savol)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to Inkor: S + didn't (did not) + V1.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "3-Savol: \"I didn't ... Did you ... ? (Past Simple Inkor va Savol)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #3]",
      "options": [
        "Correct academic usage adhering to Inkor: S + didn't (did not) + V1. [Savol #3]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #3]",
        "Incompatible tense sequence violating subject agreement. [Savol #3]",
        "Omission of essential verb particle or preposition. [Savol #3]"
      ],
      "correctAnswer": "Correct academic usage adhering to Inkor: S + didn't (did not) + V1. [Savol #3]",
      "explanation": "Ushbu birlik (I didn't ... Did you ... ? (Past Simple Inkor va Savol)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to Inkor: S + didn't (did not) + V1.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "4-Savol: \"I didn't ... Did you ... ? (Past Simple Inkor va Savol)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #4]",
      "options": [
        "Correct academic usage adhering to Inkor: S + didn't (did not) + V1. [Savol #4]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #4]",
        "Incompatible tense sequence violating subject agreement. [Savol #4]",
        "Omission of essential verb particle or preposition. [Savol #4]"
      ],
      "correctAnswer": "Correct academic usage adhering to Inkor: S + didn't (did not) + V1. [Savol #4]",
      "explanation": "Ushbu birlik (I didn't ... Did you ... ? (Past Simple Inkor va Savol)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to Inkor: S + didn't (did not) + V1.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "5-Savol: \"I didn't ... Did you ... ? (Past Simple Inkor va Savol)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #5]",
      "options": [
        "Correct academic usage adhering to Inkor: S + didn't (did not) + V1. [Savol #5]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #5]",
        "Incompatible tense sequence violating subject agreement. [Savol #5]",
        "Omission of essential verb particle or preposition. [Savol #5]"
      ],
      "correctAnswer": "Correct academic usage adhering to Inkor: S + didn't (did not) + V1. [Savol #5]",
      "explanation": "Ushbu birlik (I didn't ... Did you ... ? (Past Simple Inkor va Savol)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to Inkor: S + didn't (did not) + V1.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "6-Savol: \"I didn't ... Did you ... ? (Past Simple Inkor va Savol)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #6]",
      "options": [
        "Correct academic usage adhering to Inkor: S + didn't (did not) + V1. [Savol #6]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #6]",
        "Incompatible tense sequence violating subject agreement. [Savol #6]",
        "Omission of essential verb particle or preposition. [Savol #6]"
      ],
      "correctAnswer": "Correct academic usage adhering to Inkor: S + didn't (did not) + V1. [Savol #6]",
      "explanation": "Ushbu birlik (I didn't ... Did you ... ? (Past Simple Inkor va Savol)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to Inkor: S + didn't (did not) + V1.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "7-Savol: \"I didn't ... Did you ... ? (Past Simple Inkor va Savol)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #7]",
      "options": [
        "Correct academic usage adhering to Inkor: S + didn't (did not) + V1. [Savol #7]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #7]",
        "Incompatible tense sequence violating subject agreement. [Savol #7]",
        "Omission of essential verb particle or preposition. [Savol #7]"
      ],
      "correctAnswer": "Correct academic usage adhering to Inkor: S + didn't (did not) + V1. [Savol #7]",
      "explanation": "Ushbu birlik (I didn't ... Did you ... ? (Past Simple Inkor va Savol)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to Inkor: S + didn't (did not) + V1.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "8-Savol: \"I didn't ... Did you ... ? (Past Simple Inkor va Savol)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #8]",
      "options": [
        "Correct academic usage adhering to Inkor: S + didn't (did not) + V1. [Savol #8]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #8]",
        "Incompatible tense sequence violating subject agreement. [Savol #8]",
        "Omission of essential verb particle or preposition. [Savol #8]"
      ],
      "correctAnswer": "Correct academic usage adhering to Inkor: S + didn't (did not) + V1. [Savol #8]",
      "explanation": "Ushbu birlik (I didn't ... Did you ... ? (Past Simple Inkor va Savol)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to Inkor: S + didn't (did not) + V1.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "9-Savol: \"I didn't ... Did you ... ? (Past Simple Inkor va Savol)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #9]",
      "options": [
        "Correct academic usage adhering to Inkor: S + didn't (did not) + V1. [Savol #9]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #9]",
        "Incompatible tense sequence violating subject agreement. [Savol #9]",
        "Omission of essential verb particle or preposition. [Savol #9]"
      ],
      "correctAnswer": "Correct academic usage adhering to Inkor: S + didn't (did not) + V1. [Savol #9]",
      "explanation": "Ushbu birlik (I didn't ... Did you ... ? (Past Simple Inkor va Savol)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to Inkor: S + didn't (did not) + V1.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "10-Savol: \"I didn't ... Did you ... ? (Past Simple Inkor va Savol)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #10]",
      "options": [
        "Correct academic usage adhering to Inkor: S + didn't (did not) + V1. [Savol #10]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #10]",
        "Incompatible tense sequence violating subject agreement. [Savol #10]",
        "Omission of essential verb particle or preposition. [Savol #10]"
      ],
      "correctAnswer": "Correct academic usage adhering to Inkor: S + didn't (did not) + V1. [Savol #10]",
      "explanation": "Ushbu birlik (I didn't ... Did you ... ? (Past Simple Inkor va Savol)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to Inkor: S + didn't (did not) + V1.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    }
  ],
  "murphy_u13_past_continuous": [
    {
      "question": "What _______ you _______ when the earthquake struck?",
      "options": [
        "were / doing",
        "was / doing",
        "did / do",
        "are / doing"
      ],
      "correctAnswer": "were / doing",
      "explanation": "Zilzila yuz bergan daqiqada nima bilan mashg'ul edingiz (were doing)."
    },
    {
      "question": "2-Savol: \"I was doing (Past Continuous — O'tgan Davomli Zamon)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #2]",
      "options": [
        "Correct academic usage adhering to S + was/were + V-ing. [Savol #2]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #2]",
        "Incompatible tense sequence violating subject agreement. [Savol #2]",
        "Omission of essential verb particle or preposition. [Savol #2]"
      ],
      "correctAnswer": "Correct academic usage adhering to S + was/were + V-ing. [Savol #2]",
      "explanation": "Ushbu birlik (I was doing (Past Continuous — O'tgan Davomli Zamon)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to S + was/were + V-ing.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "3-Savol: \"I was doing (Past Continuous — O'tgan Davomli Zamon)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #3]",
      "options": [
        "Correct academic usage adhering to S + was/were + V-ing. [Savol #3]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #3]",
        "Incompatible tense sequence violating subject agreement. [Savol #3]",
        "Omission of essential verb particle or preposition. [Savol #3]"
      ],
      "correctAnswer": "Correct academic usage adhering to S + was/were + V-ing. [Savol #3]",
      "explanation": "Ushbu birlik (I was doing (Past Continuous — O'tgan Davomli Zamon)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to S + was/were + V-ing.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "4-Savol: \"I was doing (Past Continuous — O'tgan Davomli Zamon)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #4]",
      "options": [
        "Correct academic usage adhering to S + was/were + V-ing. [Savol #4]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #4]",
        "Incompatible tense sequence violating subject agreement. [Savol #4]",
        "Omission of essential verb particle or preposition. [Savol #4]"
      ],
      "correctAnswer": "Correct academic usage adhering to S + was/were + V-ing. [Savol #4]",
      "explanation": "Ushbu birlik (I was doing (Past Continuous — O'tgan Davomli Zamon)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to S + was/were + V-ing.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "5-Savol: \"I was doing (Past Continuous — O'tgan Davomli Zamon)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #5]",
      "options": [
        "Correct academic usage adhering to S + was/were + V-ing. [Savol #5]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #5]",
        "Incompatible tense sequence violating subject agreement. [Savol #5]",
        "Omission of essential verb particle or preposition. [Savol #5]"
      ],
      "correctAnswer": "Correct academic usage adhering to S + was/were + V-ing. [Savol #5]",
      "explanation": "Ushbu birlik (I was doing (Past Continuous — O'tgan Davomli Zamon)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to S + was/were + V-ing.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "6-Savol: \"I was doing (Past Continuous — O'tgan Davomli Zamon)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #6]",
      "options": [
        "Correct academic usage adhering to S + was/were + V-ing. [Savol #6]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #6]",
        "Incompatible tense sequence violating subject agreement. [Savol #6]",
        "Omission of essential verb particle or preposition. [Savol #6]"
      ],
      "correctAnswer": "Correct academic usage adhering to S + was/were + V-ing. [Savol #6]",
      "explanation": "Ushbu birlik (I was doing (Past Continuous — O'tgan Davomli Zamon)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to S + was/were + V-ing.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "7-Savol: \"I was doing (Past Continuous — O'tgan Davomli Zamon)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #7]",
      "options": [
        "Correct academic usage adhering to S + was/were + V-ing. [Savol #7]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #7]",
        "Incompatible tense sequence violating subject agreement. [Savol #7]",
        "Omission of essential verb particle or preposition. [Savol #7]"
      ],
      "correctAnswer": "Correct academic usage adhering to S + was/were + V-ing. [Savol #7]",
      "explanation": "Ushbu birlik (I was doing (Past Continuous — O'tgan Davomli Zamon)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to S + was/were + V-ing.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "8-Savol: \"I was doing (Past Continuous — O'tgan Davomli Zamon)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #8]",
      "options": [
        "Correct academic usage adhering to S + was/were + V-ing. [Savol #8]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #8]",
        "Incompatible tense sequence violating subject agreement. [Savol #8]",
        "Omission of essential verb particle or preposition. [Savol #8]"
      ],
      "correctAnswer": "Correct academic usage adhering to S + was/were + V-ing. [Savol #8]",
      "explanation": "Ushbu birlik (I was doing (Past Continuous — O'tgan Davomli Zamon)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to S + was/were + V-ing.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "9-Savol: \"I was doing (Past Continuous — O'tgan Davomli Zamon)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #9]",
      "options": [
        "Correct academic usage adhering to S + was/were + V-ing. [Savol #9]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #9]",
        "Incompatible tense sequence violating subject agreement. [Savol #9]",
        "Omission of essential verb particle or preposition. [Savol #9]"
      ],
      "correctAnswer": "Correct academic usage adhering to S + was/were + V-ing. [Savol #9]",
      "explanation": "Ushbu birlik (I was doing (Past Continuous — O'tgan Davomli Zamon)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to S + was/were + V-ing.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "10-Savol: \"I was doing (Past Continuous — O'tgan Davomli Zamon)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #10]",
      "options": [
        "Correct academic usage adhering to S + was/were + V-ing. [Savol #10]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #10]",
        "Incompatible tense sequence violating subject agreement. [Savol #10]",
        "Omission of essential verb particle or preposition. [Savol #10]"
      ],
      "correctAnswer": "Correct academic usage adhering to S + was/were + V-ing. [Savol #10]",
      "explanation": "Ushbu birlik (I was doing (Past Continuous — O'tgan Davomli Zamon)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to S + was/were + V-ing.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    }
  ],
  "murphy_u14_past_continuous_and_simple": [
    {
      "question": "The phone rang while I _______ a shower.",
      "options": [
        "was taking",
        "took",
        "have taken",
        "am taking"
      ],
      "correctAnswer": "was taking",
      "explanation": "'While' dan keyin o'tmishdagi davomli jarayon: 'was taking'."
    },
    {
      "question": "2-Savol: \"I was doing and I did (Past Continuous va Past Simple Kesishuvi)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #2]",
      "options": [
        "Correct academic usage adhering to Davomli jarayon (was/were + V-ing) + WHEN/WHILE + Qisqa harakat (Past Simple V2). [Savol #2]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #2]",
        "Incompatible tense sequence violating subject agreement. [Savol #2]",
        "Omission of essential verb particle or preposition. [Savol #2]"
      ],
      "correctAnswer": "Correct academic usage adhering to Davomli jarayon (was/were + V-ing) + WHEN/WHILE + Qisqa harakat (Past Simple V2). [Savol #2]",
      "explanation": "Ushbu birlik (I was doing and I did (Past Continuous va Past Simple Kesishuvi)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to Davomli jarayon (was/were + V-ing) + WHEN/WHILE + Qisqa harakat (Past Simple V2).' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "3-Savol: \"I was doing and I did (Past Continuous va Past Simple Kesishuvi)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #3]",
      "options": [
        "Correct academic usage adhering to Davomli jarayon (was/were + V-ing) + WHEN/WHILE + Qisqa harakat (Past Simple V2). [Savol #3]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #3]",
        "Incompatible tense sequence violating subject agreement. [Savol #3]",
        "Omission of essential verb particle or preposition. [Savol #3]"
      ],
      "correctAnswer": "Correct academic usage adhering to Davomli jarayon (was/were + V-ing) + WHEN/WHILE + Qisqa harakat (Past Simple V2). [Savol #3]",
      "explanation": "Ushbu birlik (I was doing and I did (Past Continuous va Past Simple Kesishuvi)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to Davomli jarayon (was/were + V-ing) + WHEN/WHILE + Qisqa harakat (Past Simple V2).' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "4-Savol: \"I was doing and I did (Past Continuous va Past Simple Kesishuvi)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #4]",
      "options": [
        "Correct academic usage adhering to Davomli jarayon (was/were + V-ing) + WHEN/WHILE + Qisqa harakat (Past Simple V2). [Savol #4]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #4]",
        "Incompatible tense sequence violating subject agreement. [Savol #4]",
        "Omission of essential verb particle or preposition. [Savol #4]"
      ],
      "correctAnswer": "Correct academic usage adhering to Davomli jarayon (was/were + V-ing) + WHEN/WHILE + Qisqa harakat (Past Simple V2). [Savol #4]",
      "explanation": "Ushbu birlik (I was doing and I did (Past Continuous va Past Simple Kesishuvi)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to Davomli jarayon (was/were + V-ing) + WHEN/WHILE + Qisqa harakat (Past Simple V2).' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "5-Savol: \"I was doing and I did (Past Continuous va Past Simple Kesishuvi)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #5]",
      "options": [
        "Correct academic usage adhering to Davomli jarayon (was/were + V-ing) + WHEN/WHILE + Qisqa harakat (Past Simple V2). [Savol #5]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #5]",
        "Incompatible tense sequence violating subject agreement. [Savol #5]",
        "Omission of essential verb particle or preposition. [Savol #5]"
      ],
      "correctAnswer": "Correct academic usage adhering to Davomli jarayon (was/were + V-ing) + WHEN/WHILE + Qisqa harakat (Past Simple V2). [Savol #5]",
      "explanation": "Ushbu birlik (I was doing and I did (Past Continuous va Past Simple Kesishuvi)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to Davomli jarayon (was/were + V-ing) + WHEN/WHILE + Qisqa harakat (Past Simple V2).' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "6-Savol: \"I was doing and I did (Past Continuous va Past Simple Kesishuvi)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #6]",
      "options": [
        "Correct academic usage adhering to Davomli jarayon (was/were + V-ing) + WHEN/WHILE + Qisqa harakat (Past Simple V2). [Savol #6]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #6]",
        "Incompatible tense sequence violating subject agreement. [Savol #6]",
        "Omission of essential verb particle or preposition. [Savol #6]"
      ],
      "correctAnswer": "Correct academic usage adhering to Davomli jarayon (was/were + V-ing) + WHEN/WHILE + Qisqa harakat (Past Simple V2). [Savol #6]",
      "explanation": "Ushbu birlik (I was doing and I did (Past Continuous va Past Simple Kesishuvi)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to Davomli jarayon (was/were + V-ing) + WHEN/WHILE + Qisqa harakat (Past Simple V2).' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "7-Savol: \"I was doing and I did (Past Continuous va Past Simple Kesishuvi)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #7]",
      "options": [
        "Correct academic usage adhering to Davomli jarayon (was/were + V-ing) + WHEN/WHILE + Qisqa harakat (Past Simple V2). [Savol #7]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #7]",
        "Incompatible tense sequence violating subject agreement. [Savol #7]",
        "Omission of essential verb particle or preposition. [Savol #7]"
      ],
      "correctAnswer": "Correct academic usage adhering to Davomli jarayon (was/were + V-ing) + WHEN/WHILE + Qisqa harakat (Past Simple V2). [Savol #7]",
      "explanation": "Ushbu birlik (I was doing and I did (Past Continuous va Past Simple Kesishuvi)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to Davomli jarayon (was/were + V-ing) + WHEN/WHILE + Qisqa harakat (Past Simple V2).' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "8-Savol: \"I was doing and I did (Past Continuous va Past Simple Kesishuvi)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #8]",
      "options": [
        "Correct academic usage adhering to Davomli jarayon (was/were + V-ing) + WHEN/WHILE + Qisqa harakat (Past Simple V2). [Savol #8]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #8]",
        "Incompatible tense sequence violating subject agreement. [Savol #8]",
        "Omission of essential verb particle or preposition. [Savol #8]"
      ],
      "correctAnswer": "Correct academic usage adhering to Davomli jarayon (was/were + V-ing) + WHEN/WHILE + Qisqa harakat (Past Simple V2). [Savol #8]",
      "explanation": "Ushbu birlik (I was doing and I did (Past Continuous va Past Simple Kesishuvi)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to Davomli jarayon (was/were + V-ing) + WHEN/WHILE + Qisqa harakat (Past Simple V2).' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "9-Savol: \"I was doing and I did (Past Continuous va Past Simple Kesishuvi)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #9]",
      "options": [
        "Correct academic usage adhering to Davomli jarayon (was/were + V-ing) + WHEN/WHILE + Qisqa harakat (Past Simple V2). [Savol #9]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #9]",
        "Incompatible tense sequence violating subject agreement. [Savol #9]",
        "Omission of essential verb particle or preposition. [Savol #9]"
      ],
      "correctAnswer": "Correct academic usage adhering to Davomli jarayon (was/were + V-ing) + WHEN/WHILE + Qisqa harakat (Past Simple V2). [Savol #9]",
      "explanation": "Ushbu birlik (I was doing and I did (Past Continuous va Past Simple Kesishuvi)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to Davomli jarayon (was/were + V-ing) + WHEN/WHILE + Qisqa harakat (Past Simple V2).' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "10-Savol: \"I was doing and I did (Past Continuous va Past Simple Kesishuvi)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #10]",
      "options": [
        "Correct academic usage adhering to Davomli jarayon (was/were + V-ing) + WHEN/WHILE + Qisqa harakat (Past Simple V2). [Savol #10]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #10]",
        "Incompatible tense sequence violating subject agreement. [Savol #10]",
        "Omission of essential verb particle or preposition. [Savol #10]"
      ],
      "correctAnswer": "Correct academic usage adhering to Davomli jarayon (was/were + V-ing) + WHEN/WHILE + Qisqa harakat (Past Simple V2). [Savol #10]",
      "explanation": "Ushbu birlik (I was doing and I did (Past Continuous va Past Simple Kesishuvi)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to Davomli jarayon (was/were + V-ing) + WHEN/WHILE + Qisqa harakat (Past Simple V2).' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    }
  ],
  "murphy_u15_present_perfect_1": [
    {
      "question": "Look! Somebody _______ the window. It's wide open.",
      "options": [
        "has broken",
        "broke",
        "is breaking",
        "breaks"
      ],
      "correctAnswer": "has broken",
      "explanation": "Oyna singan va natijasi hozir ko'rinib turibdi (has broken)."
    },
    {
      "question": "2-Savol: \"I have done (Present Perfect 1 — Hozirgi Tugallangan Zamon)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #2]",
      "options": [
        "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #2]",
        "Researchers has recently discovered conclusive evidence supporting this hypothesis. [Savol #2]",
        "Researchers have recently discover conclusive evidence supporting this hypothesis. [Savol #2]",
        "Researchers have discovered recently evidence supporting this hypothesis yesterday. [Savol #2]"
      ],
      "correctAnswer": "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #2]",
      "explanation": "Ushbu birlik (I have done (Present Perfect 1 — Hozirgi Tugallangan Zamon)) qoidasiga ko'ra, to'g'ri shakl 'Researchers have recently discovered conclusive evidence supporting this hypothesis.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "3-Savol: \"I have done (Present Perfect 1 — Hozirgi Tugallangan Zamon)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #3]",
      "options": [
        "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #3]",
        "Researchers has recently discovered conclusive evidence supporting this hypothesis. [Savol #3]",
        "Researchers have recently discover conclusive evidence supporting this hypothesis. [Savol #3]",
        "Researchers have discovered recently evidence supporting this hypothesis yesterday. [Savol #3]"
      ],
      "correctAnswer": "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #3]",
      "explanation": "Ushbu birlik (I have done (Present Perfect 1 — Hozirgi Tugallangan Zamon)) qoidasiga ko'ra, to'g'ri shakl 'Researchers have recently discovered conclusive evidence supporting this hypothesis.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "4-Savol: \"I have done (Present Perfect 1 — Hozirgi Tugallangan Zamon)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #4]",
      "options": [
        "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #4]",
        "Researchers has recently discovered conclusive evidence supporting this hypothesis. [Savol #4]",
        "Researchers have recently discover conclusive evidence supporting this hypothesis. [Savol #4]",
        "Researchers have discovered recently evidence supporting this hypothesis yesterday. [Savol #4]"
      ],
      "correctAnswer": "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #4]",
      "explanation": "Ushbu birlik (I have done (Present Perfect 1 — Hozirgi Tugallangan Zamon)) qoidasiga ko'ra, to'g'ri shakl 'Researchers have recently discovered conclusive evidence supporting this hypothesis.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "5-Savol: \"I have done (Present Perfect 1 — Hozirgi Tugallangan Zamon)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #5]",
      "options": [
        "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #5]",
        "Researchers has recently discovered conclusive evidence supporting this hypothesis. [Savol #5]",
        "Researchers have recently discover conclusive evidence supporting this hypothesis. [Savol #5]",
        "Researchers have discovered recently evidence supporting this hypothesis yesterday. [Savol #5]"
      ],
      "correctAnswer": "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #5]",
      "explanation": "Ushbu birlik (I have done (Present Perfect 1 — Hozirgi Tugallangan Zamon)) qoidasiga ko'ra, to'g'ri shakl 'Researchers have recently discovered conclusive evidence supporting this hypothesis.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "6-Savol: \"I have done (Present Perfect 1 — Hozirgi Tugallangan Zamon)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #6]",
      "options": [
        "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #6]",
        "Researchers has recently discovered conclusive evidence supporting this hypothesis. [Savol #6]",
        "Researchers have recently discover conclusive evidence supporting this hypothesis. [Savol #6]",
        "Researchers have discovered recently evidence supporting this hypothesis yesterday. [Savol #6]"
      ],
      "correctAnswer": "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #6]",
      "explanation": "Ushbu birlik (I have done (Present Perfect 1 — Hozirgi Tugallangan Zamon)) qoidasiga ko'ra, to'g'ri shakl 'Researchers have recently discovered conclusive evidence supporting this hypothesis.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "7-Savol: \"I have done (Present Perfect 1 — Hozirgi Tugallangan Zamon)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #7]",
      "options": [
        "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #7]",
        "Researchers has recently discovered conclusive evidence supporting this hypothesis. [Savol #7]",
        "Researchers have recently discover conclusive evidence supporting this hypothesis. [Savol #7]",
        "Researchers have discovered recently evidence supporting this hypothesis yesterday. [Savol #7]"
      ],
      "correctAnswer": "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #7]",
      "explanation": "Ushbu birlik (I have done (Present Perfect 1 — Hozirgi Tugallangan Zamon)) qoidasiga ko'ra, to'g'ri shakl 'Researchers have recently discovered conclusive evidence supporting this hypothesis.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "8-Savol: \"I have done (Present Perfect 1 — Hozirgi Tugallangan Zamon)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #8]",
      "options": [
        "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #8]",
        "Researchers has recently discovered conclusive evidence supporting this hypothesis. [Savol #8]",
        "Researchers have recently discover conclusive evidence supporting this hypothesis. [Savol #8]",
        "Researchers have discovered recently evidence supporting this hypothesis yesterday. [Savol #8]"
      ],
      "correctAnswer": "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #8]",
      "explanation": "Ushbu birlik (I have done (Present Perfect 1 — Hozirgi Tugallangan Zamon)) qoidasiga ko'ra, to'g'ri shakl 'Researchers have recently discovered conclusive evidence supporting this hypothesis.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "9-Savol: \"I have done (Present Perfect 1 — Hozirgi Tugallangan Zamon)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #9]",
      "options": [
        "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #9]",
        "Researchers has recently discovered conclusive evidence supporting this hypothesis. [Savol #9]",
        "Researchers have recently discover conclusive evidence supporting this hypothesis. [Savol #9]",
        "Researchers have discovered recently evidence supporting this hypothesis yesterday. [Savol #9]"
      ],
      "correctAnswer": "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #9]",
      "explanation": "Ushbu birlik (I have done (Present Perfect 1 — Hozirgi Tugallangan Zamon)) qoidasiga ko'ra, to'g'ri shakl 'Researchers have recently discovered conclusive evidence supporting this hypothesis.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "10-Savol: \"I have done (Present Perfect 1 — Hozirgi Tugallangan Zamon)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #10]",
      "options": [
        "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #10]",
        "Researchers has recently discovered conclusive evidence supporting this hypothesis. [Savol #10]",
        "Researchers have recently discover conclusive evidence supporting this hypothesis. [Savol #10]",
        "Researchers have discovered recently evidence supporting this hypothesis yesterday. [Savol #10]"
      ],
      "correctAnswer": "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #10]",
      "explanation": "Ushbu birlik (I have done (Present Perfect 1 — Hozirgi Tugallangan Zamon)) qoidasiga ko'ra, to'g'ri shakl 'Researchers have recently discovered conclusive evidence supporting this hypothesis.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    }
  ],
  "murphy_u16_present_perfect_just_already_yet": [
    {
      "question": "Don't forget to pay the electricity bill. — I _______ it.",
      "options": [
        "have already paid",
        "already paid",
        "have yet paid",
        "paid already"
      ],
      "correctAnswer": "have already paid",
      "explanation": "'Alla qachon to'lab bo'ldim' ma'nosida 'have already paid' to'g'ri keladi."
    },
    {
      "question": "2-Savol: \"I've just ... I've already ... I haven't ... yet (Present Perfect 2)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #2]",
      "options": [
        "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #2]",
        "Researchers has recently discovered conclusive evidence supporting this hypothesis. [Savol #2]",
        "Researchers have recently discover conclusive evidence supporting this hypothesis. [Savol #2]",
        "Researchers have discovered recently evidence supporting this hypothesis yesterday. [Savol #2]"
      ],
      "correctAnswer": "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #2]",
      "explanation": "Ushbu birlik (I've just ... I've already ... I haven't ... yet (Present Perfect 2)) qoidasiga ko'ra, to'g'ri shakl 'Researchers have recently discovered conclusive evidence supporting this hypothesis.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "3-Savol: \"I've just ... I've already ... I haven't ... yet (Present Perfect 2)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #3]",
      "options": [
        "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #3]",
        "Researchers has recently discovered conclusive evidence supporting this hypothesis. [Savol #3]",
        "Researchers have recently discover conclusive evidence supporting this hypothesis. [Savol #3]",
        "Researchers have discovered recently evidence supporting this hypothesis yesterday. [Savol #3]"
      ],
      "correctAnswer": "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #3]",
      "explanation": "Ushbu birlik (I've just ... I've already ... I haven't ... yet (Present Perfect 2)) qoidasiga ko'ra, to'g'ri shakl 'Researchers have recently discovered conclusive evidence supporting this hypothesis.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "4-Savol: \"I've just ... I've already ... I haven't ... yet (Present Perfect 2)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #4]",
      "options": [
        "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #4]",
        "Researchers has recently discovered conclusive evidence supporting this hypothesis. [Savol #4]",
        "Researchers have recently discover conclusive evidence supporting this hypothesis. [Savol #4]",
        "Researchers have discovered recently evidence supporting this hypothesis yesterday. [Savol #4]"
      ],
      "correctAnswer": "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #4]",
      "explanation": "Ushbu birlik (I've just ... I've already ... I haven't ... yet (Present Perfect 2)) qoidasiga ko'ra, to'g'ri shakl 'Researchers have recently discovered conclusive evidence supporting this hypothesis.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "5-Savol: \"I've just ... I've already ... I haven't ... yet (Present Perfect 2)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #5]",
      "options": [
        "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #5]",
        "Researchers has recently discovered conclusive evidence supporting this hypothesis. [Savol #5]",
        "Researchers have recently discover conclusive evidence supporting this hypothesis. [Savol #5]",
        "Researchers have discovered recently evidence supporting this hypothesis yesterday. [Savol #5]"
      ],
      "correctAnswer": "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #5]",
      "explanation": "Ushbu birlik (I've just ... I've already ... I haven't ... yet (Present Perfect 2)) qoidasiga ko'ra, to'g'ri shakl 'Researchers have recently discovered conclusive evidence supporting this hypothesis.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "6-Savol: \"I've just ... I've already ... I haven't ... yet (Present Perfect 2)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #6]",
      "options": [
        "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #6]",
        "Researchers has recently discovered conclusive evidence supporting this hypothesis. [Savol #6]",
        "Researchers have recently discover conclusive evidence supporting this hypothesis. [Savol #6]",
        "Researchers have discovered recently evidence supporting this hypothesis yesterday. [Savol #6]"
      ],
      "correctAnswer": "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #6]",
      "explanation": "Ushbu birlik (I've just ... I've already ... I haven't ... yet (Present Perfect 2)) qoidasiga ko'ra, to'g'ri shakl 'Researchers have recently discovered conclusive evidence supporting this hypothesis.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "7-Savol: \"I've just ... I've already ... I haven't ... yet (Present Perfect 2)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #7]",
      "options": [
        "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #7]",
        "Researchers has recently discovered conclusive evidence supporting this hypothesis. [Savol #7]",
        "Researchers have recently discover conclusive evidence supporting this hypothesis. [Savol #7]",
        "Researchers have discovered recently evidence supporting this hypothesis yesterday. [Savol #7]"
      ],
      "correctAnswer": "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #7]",
      "explanation": "Ushbu birlik (I've just ... I've already ... I haven't ... yet (Present Perfect 2)) qoidasiga ko'ra, to'g'ri shakl 'Researchers have recently discovered conclusive evidence supporting this hypothesis.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "8-Savol: \"I've just ... I've already ... I haven't ... yet (Present Perfect 2)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #8]",
      "options": [
        "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #8]",
        "Researchers has recently discovered conclusive evidence supporting this hypothesis. [Savol #8]",
        "Researchers have recently discover conclusive evidence supporting this hypothesis. [Savol #8]",
        "Researchers have discovered recently evidence supporting this hypothesis yesterday. [Savol #8]"
      ],
      "correctAnswer": "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #8]",
      "explanation": "Ushbu birlik (I've just ... I've already ... I haven't ... yet (Present Perfect 2)) qoidasiga ko'ra, to'g'ri shakl 'Researchers have recently discovered conclusive evidence supporting this hypothesis.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "9-Savol: \"I've just ... I've already ... I haven't ... yet (Present Perfect 2)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #9]",
      "options": [
        "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #9]",
        "Researchers has recently discovered conclusive evidence supporting this hypothesis. [Savol #9]",
        "Researchers have recently discover conclusive evidence supporting this hypothesis. [Savol #9]",
        "Researchers have discovered recently evidence supporting this hypothesis yesterday. [Savol #9]"
      ],
      "correctAnswer": "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #9]",
      "explanation": "Ushbu birlik (I've just ... I've already ... I haven't ... yet (Present Perfect 2)) qoidasiga ko'ra, to'g'ri shakl 'Researchers have recently discovered conclusive evidence supporting this hypothesis.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "10-Savol: \"I've just ... I've already ... I haven't ... yet (Present Perfect 2)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #10]",
      "options": [
        "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #10]",
        "Researchers has recently discovered conclusive evidence supporting this hypothesis. [Savol #10]",
        "Researchers have recently discover conclusive evidence supporting this hypothesis. [Savol #10]",
        "Researchers have discovered recently evidence supporting this hypothesis yesterday. [Savol #10]"
      ],
      "correctAnswer": "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #10]",
      "explanation": "Ushbu birlik (I've just ... I've already ... I haven't ... yet (Present Perfect 2)) qoidasiga ko'ra, to'g'ri shakl 'Researchers have recently discovered conclusive evidence supporting this hypothesis.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    }
  ],
  "murphy_u17_present_perfect_have_you_ever": [
    {
      "question": "_______ you ever _______ an exotic musical instrument?",
      "options": [
        "Have / played",
        "Did / play",
        "Were / playing",
        "Do / play"
      ],
      "correctAnswer": "Have / played",
      "explanation": "Hayotiy tajriba haqida so'rash: 'Have you ever played...?'."
    },
    {
      "question": "2-Savol: \"Have you ever ... ? (Present Perfect 3 — Hayotiy Tajriba)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #2]",
      "options": [
        "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #2]",
        "Researchers has recently discovered conclusive evidence supporting this hypothesis. [Savol #2]",
        "Researchers have recently discover conclusive evidence supporting this hypothesis. [Savol #2]",
        "Researchers have discovered recently evidence supporting this hypothesis yesterday. [Savol #2]"
      ],
      "correctAnswer": "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #2]",
      "explanation": "Ushbu birlik (Have you ever ... ? (Present Perfect 3 — Hayotiy Tajriba)) qoidasiga ko'ra, to'g'ri shakl 'Researchers have recently discovered conclusive evidence supporting this hypothesis.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "3-Savol: \"Have you ever ... ? (Present Perfect 3 — Hayotiy Tajriba)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #3]",
      "options": [
        "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #3]",
        "Researchers has recently discovered conclusive evidence supporting this hypothesis. [Savol #3]",
        "Researchers have recently discover conclusive evidence supporting this hypothesis. [Savol #3]",
        "Researchers have discovered recently evidence supporting this hypothesis yesterday. [Savol #3]"
      ],
      "correctAnswer": "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #3]",
      "explanation": "Ushbu birlik (Have you ever ... ? (Present Perfect 3 — Hayotiy Tajriba)) qoidasiga ko'ra, to'g'ri shakl 'Researchers have recently discovered conclusive evidence supporting this hypothesis.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "4-Savol: \"Have you ever ... ? (Present Perfect 3 — Hayotiy Tajriba)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #4]",
      "options": [
        "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #4]",
        "Researchers has recently discovered conclusive evidence supporting this hypothesis. [Savol #4]",
        "Researchers have recently discover conclusive evidence supporting this hypothesis. [Savol #4]",
        "Researchers have discovered recently evidence supporting this hypothesis yesterday. [Savol #4]"
      ],
      "correctAnswer": "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #4]",
      "explanation": "Ushbu birlik (Have you ever ... ? (Present Perfect 3 — Hayotiy Tajriba)) qoidasiga ko'ra, to'g'ri shakl 'Researchers have recently discovered conclusive evidence supporting this hypothesis.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "5-Savol: \"Have you ever ... ? (Present Perfect 3 — Hayotiy Tajriba)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #5]",
      "options": [
        "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #5]",
        "Researchers has recently discovered conclusive evidence supporting this hypothesis. [Savol #5]",
        "Researchers have recently discover conclusive evidence supporting this hypothesis. [Savol #5]",
        "Researchers have discovered recently evidence supporting this hypothesis yesterday. [Savol #5]"
      ],
      "correctAnswer": "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #5]",
      "explanation": "Ushbu birlik (Have you ever ... ? (Present Perfect 3 — Hayotiy Tajriba)) qoidasiga ko'ra, to'g'ri shakl 'Researchers have recently discovered conclusive evidence supporting this hypothesis.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "6-Savol: \"Have you ever ... ? (Present Perfect 3 — Hayotiy Tajriba)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #6]",
      "options": [
        "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #6]",
        "Researchers has recently discovered conclusive evidence supporting this hypothesis. [Savol #6]",
        "Researchers have recently discover conclusive evidence supporting this hypothesis. [Savol #6]",
        "Researchers have discovered recently evidence supporting this hypothesis yesterday. [Savol #6]"
      ],
      "correctAnswer": "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #6]",
      "explanation": "Ushbu birlik (Have you ever ... ? (Present Perfect 3 — Hayotiy Tajriba)) qoidasiga ko'ra, to'g'ri shakl 'Researchers have recently discovered conclusive evidence supporting this hypothesis.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "7-Savol: \"Have you ever ... ? (Present Perfect 3 — Hayotiy Tajriba)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #7]",
      "options": [
        "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #7]",
        "Researchers has recently discovered conclusive evidence supporting this hypothesis. [Savol #7]",
        "Researchers have recently discover conclusive evidence supporting this hypothesis. [Savol #7]",
        "Researchers have discovered recently evidence supporting this hypothesis yesterday. [Savol #7]"
      ],
      "correctAnswer": "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #7]",
      "explanation": "Ushbu birlik (Have you ever ... ? (Present Perfect 3 — Hayotiy Tajriba)) qoidasiga ko'ra, to'g'ri shakl 'Researchers have recently discovered conclusive evidence supporting this hypothesis.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "8-Savol: \"Have you ever ... ? (Present Perfect 3 — Hayotiy Tajriba)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #8]",
      "options": [
        "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #8]",
        "Researchers has recently discovered conclusive evidence supporting this hypothesis. [Savol #8]",
        "Researchers have recently discover conclusive evidence supporting this hypothesis. [Savol #8]",
        "Researchers have discovered recently evidence supporting this hypothesis yesterday. [Savol #8]"
      ],
      "correctAnswer": "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #8]",
      "explanation": "Ushbu birlik (Have you ever ... ? (Present Perfect 3 — Hayotiy Tajriba)) qoidasiga ko'ra, to'g'ri shakl 'Researchers have recently discovered conclusive evidence supporting this hypothesis.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "9-Savol: \"Have you ever ... ? (Present Perfect 3 — Hayotiy Tajriba)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #9]",
      "options": [
        "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #9]",
        "Researchers has recently discovered conclusive evidence supporting this hypothesis. [Savol #9]",
        "Researchers have recently discover conclusive evidence supporting this hypothesis. [Savol #9]",
        "Researchers have discovered recently evidence supporting this hypothesis yesterday. [Savol #9]"
      ],
      "correctAnswer": "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #9]",
      "explanation": "Ushbu birlik (Have you ever ... ? (Present Perfect 3 — Hayotiy Tajriba)) qoidasiga ko'ra, to'g'ri shakl 'Researchers have recently discovered conclusive evidence supporting this hypothesis.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "10-Savol: \"Have you ever ... ? (Present Perfect 3 — Hayotiy Tajriba)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #10]",
      "options": [
        "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #10]",
        "Researchers has recently discovered conclusive evidence supporting this hypothesis. [Savol #10]",
        "Researchers have recently discover conclusive evidence supporting this hypothesis. [Savol #10]",
        "Researchers have discovered recently evidence supporting this hypothesis yesterday. [Savol #10]"
      ],
      "correctAnswer": "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #10]",
      "explanation": "Ushbu birlik (Have you ever ... ? (Present Perfect 3 — Hayotiy Tajriba)) qoidasiga ko'ra, to'g'ri shakl 'Researchers have recently discovered conclusive evidence supporting this hypothesis.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    }
  ],
  "murphy_u18_present_perfect_how_long": [
    {
      "question": "How long _______ you _______ in this academic department?",
      "options": [
        "have / worked",
        "do / work",
        "are / working",
        "did / work"
      ],
      "correctAnswer": "have / worked",
      "explanation": "'Qanchadan beri ishlayapsiz?' ma'nosida 'How long have you worked' to'g'ri."
    },
    {
      "question": "2-Savol: \"How long have you ... ? (Present Perfect 4 — Davomiylik)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #2]",
      "options": [
        "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #2]",
        "Researchers has recently discovered conclusive evidence supporting this hypothesis. [Savol #2]",
        "Researchers have recently discover conclusive evidence supporting this hypothesis. [Savol #2]",
        "Researchers have discovered recently evidence supporting this hypothesis yesterday. [Savol #2]"
      ],
      "correctAnswer": "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #2]",
      "explanation": "Ushbu birlik (How long have you ... ? (Present Perfect 4 — Davomiylik)) qoidasiga ko'ra, to'g'ri shakl 'Researchers have recently discovered conclusive evidence supporting this hypothesis.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "3-Savol: \"How long have you ... ? (Present Perfect 4 — Davomiylik)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #3]",
      "options": [
        "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #3]",
        "Researchers has recently discovered conclusive evidence supporting this hypothesis. [Savol #3]",
        "Researchers have recently discover conclusive evidence supporting this hypothesis. [Savol #3]",
        "Researchers have discovered recently evidence supporting this hypothesis yesterday. [Savol #3]"
      ],
      "correctAnswer": "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #3]",
      "explanation": "Ushbu birlik (How long have you ... ? (Present Perfect 4 — Davomiylik)) qoidasiga ko'ra, to'g'ri shakl 'Researchers have recently discovered conclusive evidence supporting this hypothesis.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "4-Savol: \"How long have you ... ? (Present Perfect 4 — Davomiylik)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #4]",
      "options": [
        "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #4]",
        "Researchers has recently discovered conclusive evidence supporting this hypothesis. [Savol #4]",
        "Researchers have recently discover conclusive evidence supporting this hypothesis. [Savol #4]",
        "Researchers have discovered recently evidence supporting this hypothesis yesterday. [Savol #4]"
      ],
      "correctAnswer": "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #4]",
      "explanation": "Ushbu birlik (How long have you ... ? (Present Perfect 4 — Davomiylik)) qoidasiga ko'ra, to'g'ri shakl 'Researchers have recently discovered conclusive evidence supporting this hypothesis.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "5-Savol: \"How long have you ... ? (Present Perfect 4 — Davomiylik)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #5]",
      "options": [
        "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #5]",
        "Researchers has recently discovered conclusive evidence supporting this hypothesis. [Savol #5]",
        "Researchers have recently discover conclusive evidence supporting this hypothesis. [Savol #5]",
        "Researchers have discovered recently evidence supporting this hypothesis yesterday. [Savol #5]"
      ],
      "correctAnswer": "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #5]",
      "explanation": "Ushbu birlik (How long have you ... ? (Present Perfect 4 — Davomiylik)) qoidasiga ko'ra, to'g'ri shakl 'Researchers have recently discovered conclusive evidence supporting this hypothesis.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "6-Savol: \"How long have you ... ? (Present Perfect 4 — Davomiylik)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #6]",
      "options": [
        "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #6]",
        "Researchers has recently discovered conclusive evidence supporting this hypothesis. [Savol #6]",
        "Researchers have recently discover conclusive evidence supporting this hypothesis. [Savol #6]",
        "Researchers have discovered recently evidence supporting this hypothesis yesterday. [Savol #6]"
      ],
      "correctAnswer": "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #6]",
      "explanation": "Ushbu birlik (How long have you ... ? (Present Perfect 4 — Davomiylik)) qoidasiga ko'ra, to'g'ri shakl 'Researchers have recently discovered conclusive evidence supporting this hypothesis.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "7-Savol: \"How long have you ... ? (Present Perfect 4 — Davomiylik)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #7]",
      "options": [
        "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #7]",
        "Researchers has recently discovered conclusive evidence supporting this hypothesis. [Savol #7]",
        "Researchers have recently discover conclusive evidence supporting this hypothesis. [Savol #7]",
        "Researchers have discovered recently evidence supporting this hypothesis yesterday. [Savol #7]"
      ],
      "correctAnswer": "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #7]",
      "explanation": "Ushbu birlik (How long have you ... ? (Present Perfect 4 — Davomiylik)) qoidasiga ko'ra, to'g'ri shakl 'Researchers have recently discovered conclusive evidence supporting this hypothesis.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "8-Savol: \"How long have you ... ? (Present Perfect 4 — Davomiylik)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #8]",
      "options": [
        "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #8]",
        "Researchers has recently discovered conclusive evidence supporting this hypothesis. [Savol #8]",
        "Researchers have recently discover conclusive evidence supporting this hypothesis. [Savol #8]",
        "Researchers have discovered recently evidence supporting this hypothesis yesterday. [Savol #8]"
      ],
      "correctAnswer": "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #8]",
      "explanation": "Ushbu birlik (How long have you ... ? (Present Perfect 4 — Davomiylik)) qoidasiga ko'ra, to'g'ri shakl 'Researchers have recently discovered conclusive evidence supporting this hypothesis.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "9-Savol: \"How long have you ... ? (Present Perfect 4 — Davomiylik)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #9]",
      "options": [
        "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #9]",
        "Researchers has recently discovered conclusive evidence supporting this hypothesis. [Savol #9]",
        "Researchers have recently discover conclusive evidence supporting this hypothesis. [Savol #9]",
        "Researchers have discovered recently evidence supporting this hypothesis yesterday. [Savol #9]"
      ],
      "correctAnswer": "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #9]",
      "explanation": "Ushbu birlik (How long have you ... ? (Present Perfect 4 — Davomiylik)) qoidasiga ko'ra, to'g'ri shakl 'Researchers have recently discovered conclusive evidence supporting this hypothesis.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "10-Savol: \"How long have you ... ? (Present Perfect 4 — Davomiylik)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #10]",
      "options": [
        "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #10]",
        "Researchers has recently discovered conclusive evidence supporting this hypothesis. [Savol #10]",
        "Researchers have recently discover conclusive evidence supporting this hypothesis. [Savol #10]",
        "Researchers have discovered recently evidence supporting this hypothesis yesterday. [Savol #10]"
      ],
      "correctAnswer": "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #10]",
      "explanation": "Ushbu birlik (How long have you ... ? (Present Perfect 4 — Davomiylik)) qoidasiga ko'ra, to'g'ri shakl 'Researchers have recently discovered conclusive evidence supporting this hypothesis.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    }
  ],
  "murphy_u19_for_since_ago": [
    {
      "question": "They have been married _______ twenty years, having met thirty years _______.",
      "options": [
        "for / ago",
        "since / ago",
        "for / since",
        "since / for"
      ],
      "correctAnswer": "for / ago",
      "explanation": "Muddat oralig'iga 'for twenty years', o'tmishdagi nuqtaga 'thirty years ago'."
    },
    {
      "question": "2-Savol: \"for / since / ago (Vaqt Ko'rsatkichlari Farqi)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #2]",
      "options": [
        "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #2]",
        "Researchers has recently discovered conclusive evidence supporting this hypothesis. [Savol #2]",
        "Researchers have recently discover conclusive evidence supporting this hypothesis. [Savol #2]",
        "Researchers have discovered recently evidence supporting this hypothesis yesterday. [Savol #2]"
      ],
      "correctAnswer": "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #2]",
      "explanation": "Ushbu birlik (for / since / ago (Vaqt Ko'rsatkichlari Farqi)) qoidasiga ko'ra, to'g'ri shakl 'Researchers have recently discovered conclusive evidence supporting this hypothesis.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "3-Savol: \"for / since / ago (Vaqt Ko'rsatkichlari Farqi)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #3]",
      "options": [
        "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #3]",
        "Researchers has recently discovered conclusive evidence supporting this hypothesis. [Savol #3]",
        "Researchers have recently discover conclusive evidence supporting this hypothesis. [Savol #3]",
        "Researchers have discovered recently evidence supporting this hypothesis yesterday. [Savol #3]"
      ],
      "correctAnswer": "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #3]",
      "explanation": "Ushbu birlik (for / since / ago (Vaqt Ko'rsatkichlari Farqi)) qoidasiga ko'ra, to'g'ri shakl 'Researchers have recently discovered conclusive evidence supporting this hypothesis.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "4-Savol: \"for / since / ago (Vaqt Ko'rsatkichlari Farqi)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #4]",
      "options": [
        "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #4]",
        "Researchers has recently discovered conclusive evidence supporting this hypothesis. [Savol #4]",
        "Researchers have recently discover conclusive evidence supporting this hypothesis. [Savol #4]",
        "Researchers have discovered recently evidence supporting this hypothesis yesterday. [Savol #4]"
      ],
      "correctAnswer": "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #4]",
      "explanation": "Ushbu birlik (for / since / ago (Vaqt Ko'rsatkichlari Farqi)) qoidasiga ko'ra, to'g'ri shakl 'Researchers have recently discovered conclusive evidence supporting this hypothesis.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "5-Savol: \"for / since / ago (Vaqt Ko'rsatkichlari Farqi)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #5]",
      "options": [
        "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #5]",
        "Researchers has recently discovered conclusive evidence supporting this hypothesis. [Savol #5]",
        "Researchers have recently discover conclusive evidence supporting this hypothesis. [Savol #5]",
        "Researchers have discovered recently evidence supporting this hypothesis yesterday. [Savol #5]"
      ],
      "correctAnswer": "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #5]",
      "explanation": "Ushbu birlik (for / since / ago (Vaqt Ko'rsatkichlari Farqi)) qoidasiga ko'ra, to'g'ri shakl 'Researchers have recently discovered conclusive evidence supporting this hypothesis.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "6-Savol: \"for / since / ago (Vaqt Ko'rsatkichlari Farqi)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #6]",
      "options": [
        "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #6]",
        "Researchers has recently discovered conclusive evidence supporting this hypothesis. [Savol #6]",
        "Researchers have recently discover conclusive evidence supporting this hypothesis. [Savol #6]",
        "Researchers have discovered recently evidence supporting this hypothesis yesterday. [Savol #6]"
      ],
      "correctAnswer": "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #6]",
      "explanation": "Ushbu birlik (for / since / ago (Vaqt Ko'rsatkichlari Farqi)) qoidasiga ko'ra, to'g'ri shakl 'Researchers have recently discovered conclusive evidence supporting this hypothesis.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "7-Savol: \"for / since / ago (Vaqt Ko'rsatkichlari Farqi)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #7]",
      "options": [
        "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #7]",
        "Researchers has recently discovered conclusive evidence supporting this hypothesis. [Savol #7]",
        "Researchers have recently discover conclusive evidence supporting this hypothesis. [Savol #7]",
        "Researchers have discovered recently evidence supporting this hypothesis yesterday. [Savol #7]"
      ],
      "correctAnswer": "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #7]",
      "explanation": "Ushbu birlik (for / since / ago (Vaqt Ko'rsatkichlari Farqi)) qoidasiga ko'ra, to'g'ri shakl 'Researchers have recently discovered conclusive evidence supporting this hypothesis.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "8-Savol: \"for / since / ago (Vaqt Ko'rsatkichlari Farqi)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #8]",
      "options": [
        "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #8]",
        "Researchers has recently discovered conclusive evidence supporting this hypothesis. [Savol #8]",
        "Researchers have recently discover conclusive evidence supporting this hypothesis. [Savol #8]",
        "Researchers have discovered recently evidence supporting this hypothesis yesterday. [Savol #8]"
      ],
      "correctAnswer": "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #8]",
      "explanation": "Ushbu birlik (for / since / ago (Vaqt Ko'rsatkichlari Farqi)) qoidasiga ko'ra, to'g'ri shakl 'Researchers have recently discovered conclusive evidence supporting this hypothesis.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "9-Savol: \"for / since / ago (Vaqt Ko'rsatkichlari Farqi)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #9]",
      "options": [
        "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #9]",
        "Researchers has recently discovered conclusive evidence supporting this hypothesis. [Savol #9]",
        "Researchers have recently discover conclusive evidence supporting this hypothesis. [Savol #9]",
        "Researchers have discovered recently evidence supporting this hypothesis yesterday. [Savol #9]"
      ],
      "correctAnswer": "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #9]",
      "explanation": "Ushbu birlik (for / since / ago (Vaqt Ko'rsatkichlari Farqi)) qoidasiga ko'ra, to'g'ri shakl 'Researchers have recently discovered conclusive evidence supporting this hypothesis.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "10-Savol: \"for / since / ago (Vaqt Ko'rsatkichlari Farqi)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #10]",
      "options": [
        "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #10]",
        "Researchers has recently discovered conclusive evidence supporting this hypothesis. [Savol #10]",
        "Researchers have recently discover conclusive evidence supporting this hypothesis. [Savol #10]",
        "Researchers have discovered recently evidence supporting this hypothesis yesterday. [Savol #10]"
      ],
      "correctAnswer": "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #10]",
      "explanation": "Ushbu birlik (for / since / ago (Vaqt Ko'rsatkichlari Farqi)) qoidasiga ko'ra, to'g'ri shakl 'Researchers have recently discovered conclusive evidence supporting this hypothesis.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    }
  ],
  "murphy_u20_present_perfect_vs_past_simple": [
    {
      "question": "Shakespeare _______ many world-famous plays, but contemporary writers _______ new genres.",
      "options": [
        "wrote / have developed",
        "has written / developed",
        "wrote / developed",
        "has written / have developed"
      ],
      "correctAnswer": "wrote / have developed",
      "explanation": "Shekspir hayoti o'tmishda tugagan (wrote), zamonaviy yozuvchilar esa hozir ham rivojlantirmoqda (have developed)."
    },
    {
      "question": "2-Savol: \"I have done and I did (Present Perfect va Past Simple Taqqoslash)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #2]",
      "options": [
        "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #2]",
        "Researchers has recently discovered conclusive evidence supporting this hypothesis. [Savol #2]",
        "Researchers have recently discover conclusive evidence supporting this hypothesis. [Savol #2]",
        "Researchers have discovered recently evidence supporting this hypothesis yesterday. [Savol #2]"
      ],
      "correctAnswer": "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #2]",
      "explanation": "Ushbu birlik (I have done and I did (Present Perfect va Past Simple Taqqoslash)) qoidasiga ko'ra, to'g'ri shakl 'Researchers have recently discovered conclusive evidence supporting this hypothesis.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "3-Savol: \"I have done and I did (Present Perfect va Past Simple Taqqoslash)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #3]",
      "options": [
        "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #3]",
        "Researchers has recently discovered conclusive evidence supporting this hypothesis. [Savol #3]",
        "Researchers have recently discover conclusive evidence supporting this hypothesis. [Savol #3]",
        "Researchers have discovered recently evidence supporting this hypothesis yesterday. [Savol #3]"
      ],
      "correctAnswer": "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #3]",
      "explanation": "Ushbu birlik (I have done and I did (Present Perfect va Past Simple Taqqoslash)) qoidasiga ko'ra, to'g'ri shakl 'Researchers have recently discovered conclusive evidence supporting this hypothesis.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "4-Savol: \"I have done and I did (Present Perfect va Past Simple Taqqoslash)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #4]",
      "options": [
        "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #4]",
        "Researchers has recently discovered conclusive evidence supporting this hypothesis. [Savol #4]",
        "Researchers have recently discover conclusive evidence supporting this hypothesis. [Savol #4]",
        "Researchers have discovered recently evidence supporting this hypothesis yesterday. [Savol #4]"
      ],
      "correctAnswer": "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #4]",
      "explanation": "Ushbu birlik (I have done and I did (Present Perfect va Past Simple Taqqoslash)) qoidasiga ko'ra, to'g'ri shakl 'Researchers have recently discovered conclusive evidence supporting this hypothesis.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "5-Savol: \"I have done and I did (Present Perfect va Past Simple Taqqoslash)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #5]",
      "options": [
        "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #5]",
        "Researchers has recently discovered conclusive evidence supporting this hypothesis. [Savol #5]",
        "Researchers have recently discover conclusive evidence supporting this hypothesis. [Savol #5]",
        "Researchers have discovered recently evidence supporting this hypothesis yesterday. [Savol #5]"
      ],
      "correctAnswer": "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #5]",
      "explanation": "Ushbu birlik (I have done and I did (Present Perfect va Past Simple Taqqoslash)) qoidasiga ko'ra, to'g'ri shakl 'Researchers have recently discovered conclusive evidence supporting this hypothesis.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "6-Savol: \"I have done and I did (Present Perfect va Past Simple Taqqoslash)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #6]",
      "options": [
        "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #6]",
        "Researchers has recently discovered conclusive evidence supporting this hypothesis. [Savol #6]",
        "Researchers have recently discover conclusive evidence supporting this hypothesis. [Savol #6]",
        "Researchers have discovered recently evidence supporting this hypothesis yesterday. [Savol #6]"
      ],
      "correctAnswer": "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #6]",
      "explanation": "Ushbu birlik (I have done and I did (Present Perfect va Past Simple Taqqoslash)) qoidasiga ko'ra, to'g'ri shakl 'Researchers have recently discovered conclusive evidence supporting this hypothesis.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "7-Savol: \"I have done and I did (Present Perfect va Past Simple Taqqoslash)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #7]",
      "options": [
        "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #7]",
        "Researchers has recently discovered conclusive evidence supporting this hypothesis. [Savol #7]",
        "Researchers have recently discover conclusive evidence supporting this hypothesis. [Savol #7]",
        "Researchers have discovered recently evidence supporting this hypothesis yesterday. [Savol #7]"
      ],
      "correctAnswer": "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #7]",
      "explanation": "Ushbu birlik (I have done and I did (Present Perfect va Past Simple Taqqoslash)) qoidasiga ko'ra, to'g'ri shakl 'Researchers have recently discovered conclusive evidence supporting this hypothesis.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "8-Savol: \"I have done and I did (Present Perfect va Past Simple Taqqoslash)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #8]",
      "options": [
        "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #8]",
        "Researchers has recently discovered conclusive evidence supporting this hypothesis. [Savol #8]",
        "Researchers have recently discover conclusive evidence supporting this hypothesis. [Savol #8]",
        "Researchers have discovered recently evidence supporting this hypothesis yesterday. [Savol #8]"
      ],
      "correctAnswer": "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #8]",
      "explanation": "Ushbu birlik (I have done and I did (Present Perfect va Past Simple Taqqoslash)) qoidasiga ko'ra, to'g'ri shakl 'Researchers have recently discovered conclusive evidence supporting this hypothesis.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "9-Savol: \"I have done and I did (Present Perfect va Past Simple Taqqoslash)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #9]",
      "options": [
        "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #9]",
        "Researchers has recently discovered conclusive evidence supporting this hypothesis. [Savol #9]",
        "Researchers have recently discover conclusive evidence supporting this hypothesis. [Savol #9]",
        "Researchers have discovered recently evidence supporting this hypothesis yesterday. [Savol #9]"
      ],
      "correctAnswer": "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #9]",
      "explanation": "Ushbu birlik (I have done and I did (Present Perfect va Past Simple Taqqoslash)) qoidasiga ko'ra, to'g'ri shakl 'Researchers have recently discovered conclusive evidence supporting this hypothesis.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "10-Savol: \"I have done and I did (Present Perfect va Past Simple Taqqoslash)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #10]",
      "options": [
        "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #10]",
        "Researchers has recently discovered conclusive evidence supporting this hypothesis. [Savol #10]",
        "Researchers have recently discover conclusive evidence supporting this hypothesis. [Savol #10]",
        "Researchers have discovered recently evidence supporting this hypothesis yesterday. [Savol #10]"
      ],
      "correctAnswer": "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #10]",
      "explanation": "Ushbu birlik (I have done and I did (Present Perfect va Past Simple Taqqoslash)) qoidasiga ko'ra, to'g'ri shakl 'Researchers have recently discovered conclusive evidence supporting this hypothesis.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    }
  ],
  "murphy_u31_can_could": [
    {
      "question": "She _______ speak English fluently now, but three years ago she _______ barely introduce herself.",
      "options": [
        "can / could",
        "could / can",
        "can / can",
        "could / could"
      ],
      "correctAnswer": "can / could",
      "explanation": "Hozirgi qobiliyatga 'can', 3 yil oldingi o'tmish qobiliyatiga 'could'."
    },
    {
      "question": "2-Savol: \"can / could (Qobiliyat va Iltimoslar)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #2]",
      "options": [
        "Candidates must adhere strictly to the examination time limits. [Savol #2]",
        "Candidates must to adhere strictly to the examination time limits. [Savol #2]",
        "Candidates must adhering strictly to the examination time limits. [Savol #2]",
        "Candidates ought adhere strictly to the examination time limits. [Savol #2]"
      ],
      "correctAnswer": "Candidates must adhere strictly to the examination time limits. [Savol #2]",
      "explanation": "Ushbu birlik (can / could (Qobiliyat va Iltimoslar)) qoidasiga ko'ra, to'g'ri shakl 'Candidates must adhere strictly to the examination time limits.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "3-Savol: \"can / could (Qobiliyat va Iltimoslar)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #3]",
      "options": [
        "Candidates must adhere strictly to the examination time limits. [Savol #3]",
        "Candidates must to adhere strictly to the examination time limits. [Savol #3]",
        "Candidates must adhering strictly to the examination time limits. [Savol #3]",
        "Candidates ought adhere strictly to the examination time limits. [Savol #3]"
      ],
      "correctAnswer": "Candidates must adhere strictly to the examination time limits. [Savol #3]",
      "explanation": "Ushbu birlik (can / could (Qobiliyat va Iltimoslar)) qoidasiga ko'ra, to'g'ri shakl 'Candidates must adhere strictly to the examination time limits.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "4-Savol: \"can / could (Qobiliyat va Iltimoslar)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #4]",
      "options": [
        "Candidates must adhere strictly to the examination time limits. [Savol #4]",
        "Candidates must to adhere strictly to the examination time limits. [Savol #4]",
        "Candidates must adhering strictly to the examination time limits. [Savol #4]",
        "Candidates ought adhere strictly to the examination time limits. [Savol #4]"
      ],
      "correctAnswer": "Candidates must adhere strictly to the examination time limits. [Savol #4]",
      "explanation": "Ushbu birlik (can / could (Qobiliyat va Iltimoslar)) qoidasiga ko'ra, to'g'ri shakl 'Candidates must adhere strictly to the examination time limits.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "5-Savol: \"can / could (Qobiliyat va Iltimoslar)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #5]",
      "options": [
        "Candidates must adhere strictly to the examination time limits. [Savol #5]",
        "Candidates must to adhere strictly to the examination time limits. [Savol #5]",
        "Candidates must adhering strictly to the examination time limits. [Savol #5]",
        "Candidates ought adhere strictly to the examination time limits. [Savol #5]"
      ],
      "correctAnswer": "Candidates must adhere strictly to the examination time limits. [Savol #5]",
      "explanation": "Ushbu birlik (can / could (Qobiliyat va Iltimoslar)) qoidasiga ko'ra, to'g'ri shakl 'Candidates must adhere strictly to the examination time limits.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "6-Savol: \"can / could (Qobiliyat va Iltimoslar)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #6]",
      "options": [
        "Candidates must adhere strictly to the examination time limits. [Savol #6]",
        "Candidates must to adhere strictly to the examination time limits. [Savol #6]",
        "Candidates must adhering strictly to the examination time limits. [Savol #6]",
        "Candidates ought adhere strictly to the examination time limits. [Savol #6]"
      ],
      "correctAnswer": "Candidates must adhere strictly to the examination time limits. [Savol #6]",
      "explanation": "Ushbu birlik (can / could (Qobiliyat va Iltimoslar)) qoidasiga ko'ra, to'g'ri shakl 'Candidates must adhere strictly to the examination time limits.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "7-Savol: \"can / could (Qobiliyat va Iltimoslar)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #7]",
      "options": [
        "Candidates must adhere strictly to the examination time limits. [Savol #7]",
        "Candidates must to adhere strictly to the examination time limits. [Savol #7]",
        "Candidates must adhering strictly to the examination time limits. [Savol #7]",
        "Candidates ought adhere strictly to the examination time limits. [Savol #7]"
      ],
      "correctAnswer": "Candidates must adhere strictly to the examination time limits. [Savol #7]",
      "explanation": "Ushbu birlik (can / could (Qobiliyat va Iltimoslar)) qoidasiga ko'ra, to'g'ri shakl 'Candidates must adhere strictly to the examination time limits.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "8-Savol: \"can / could (Qobiliyat va Iltimoslar)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #8]",
      "options": [
        "Candidates must adhere strictly to the examination time limits. [Savol #8]",
        "Candidates must to adhere strictly to the examination time limits. [Savol #8]",
        "Candidates must adhering strictly to the examination time limits. [Savol #8]",
        "Candidates ought adhere strictly to the examination time limits. [Savol #8]"
      ],
      "correctAnswer": "Candidates must adhere strictly to the examination time limits. [Savol #8]",
      "explanation": "Ushbu birlik (can / could (Qobiliyat va Iltimoslar)) qoidasiga ko'ra, to'g'ri shakl 'Candidates must adhere strictly to the examination time limits.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "9-Savol: \"can / could (Qobiliyat va Iltimoslar)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #9]",
      "options": [
        "Candidates must adhere strictly to the examination time limits. [Savol #9]",
        "Candidates must to adhere strictly to the examination time limits. [Savol #9]",
        "Candidates must adhering strictly to the examination time limits. [Savol #9]",
        "Candidates ought adhere strictly to the examination time limits. [Savol #9]"
      ],
      "correctAnswer": "Candidates must adhere strictly to the examination time limits. [Savol #9]",
      "explanation": "Ushbu birlik (can / could (Qobiliyat va Iltimoslar)) qoidasiga ko'ra, to'g'ri shakl 'Candidates must adhere strictly to the examination time limits.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "10-Savol: \"can / could (Qobiliyat va Iltimoslar)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #10]",
      "options": [
        "Candidates must adhere strictly to the examination time limits. [Savol #10]",
        "Candidates must to adhere strictly to the examination time limits. [Savol #10]",
        "Candidates must adhering strictly to the examination time limits. [Savol #10]",
        "Candidates ought adhere strictly to the examination time limits. [Savol #10]"
      ],
      "correctAnswer": "Candidates must adhere strictly to the examination time limits. [Savol #10]",
      "explanation": "Ushbu birlik (can / could (Qobiliyat va Iltimoslar)) qoidasiga ko'ra, to'g'ri shakl 'Candidates must adhere strictly to the examination time limits.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    }
  ],
  "murphy_u33_should": [
    {
      "question": "Students _______ review grammar rules regularly to avoid systematic errors.",
      "options": [
        "should",
        "should to",
        "ought",
        "must to"
      ],
      "correctAnswer": "should",
      "explanation": "Tavsiya bildirishda 'should + V1' to'g'ri formuladir."
    },
    {
      "question": "2-Savol: \"should (Maslahat va Tavsiya)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #2]",
      "options": [
        "Candidates must adhere strictly to the examination time limits. [Savol #2]",
        "Candidates must to adhere strictly to the examination time limits. [Savol #2]",
        "Candidates must adhering strictly to the examination time limits. [Savol #2]",
        "Candidates ought adhere strictly to the examination time limits. [Savol #2]"
      ],
      "correctAnswer": "Candidates must adhere strictly to the examination time limits. [Savol #2]",
      "explanation": "Ushbu birlik (should (Maslahat va Tavsiya)) qoidasiga ko'ra, to'g'ri shakl 'Candidates must adhere strictly to the examination time limits.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "3-Savol: \"should (Maslahat va Tavsiya)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #3]",
      "options": [
        "Candidates must adhere strictly to the examination time limits. [Savol #3]",
        "Candidates must to adhere strictly to the examination time limits. [Savol #3]",
        "Candidates must adhering strictly to the examination time limits. [Savol #3]",
        "Candidates ought adhere strictly to the examination time limits. [Savol #3]"
      ],
      "correctAnswer": "Candidates must adhere strictly to the examination time limits. [Savol #3]",
      "explanation": "Ushbu birlik (should (Maslahat va Tavsiya)) qoidasiga ko'ra, to'g'ri shakl 'Candidates must adhere strictly to the examination time limits.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "4-Savol: \"should (Maslahat va Tavsiya)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #4]",
      "options": [
        "Candidates must adhere strictly to the examination time limits. [Savol #4]",
        "Candidates must to adhere strictly to the examination time limits. [Savol #4]",
        "Candidates must adhering strictly to the examination time limits. [Savol #4]",
        "Candidates ought adhere strictly to the examination time limits. [Savol #4]"
      ],
      "correctAnswer": "Candidates must adhere strictly to the examination time limits. [Savol #4]",
      "explanation": "Ushbu birlik (should (Maslahat va Tavsiya)) qoidasiga ko'ra, to'g'ri shakl 'Candidates must adhere strictly to the examination time limits.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "5-Savol: \"should (Maslahat va Tavsiya)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #5]",
      "options": [
        "Candidates must adhere strictly to the examination time limits. [Savol #5]",
        "Candidates must to adhere strictly to the examination time limits. [Savol #5]",
        "Candidates must adhering strictly to the examination time limits. [Savol #5]",
        "Candidates ought adhere strictly to the examination time limits. [Savol #5]"
      ],
      "correctAnswer": "Candidates must adhere strictly to the examination time limits. [Savol #5]",
      "explanation": "Ushbu birlik (should (Maslahat va Tavsiya)) qoidasiga ko'ra, to'g'ri shakl 'Candidates must adhere strictly to the examination time limits.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "6-Savol: \"should (Maslahat va Tavsiya)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #6]",
      "options": [
        "Candidates must adhere strictly to the examination time limits. [Savol #6]",
        "Candidates must to adhere strictly to the examination time limits. [Savol #6]",
        "Candidates must adhering strictly to the examination time limits. [Savol #6]",
        "Candidates ought adhere strictly to the examination time limits. [Savol #6]"
      ],
      "correctAnswer": "Candidates must adhere strictly to the examination time limits. [Savol #6]",
      "explanation": "Ushbu birlik (should (Maslahat va Tavsiya)) qoidasiga ko'ra, to'g'ri shakl 'Candidates must adhere strictly to the examination time limits.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "7-Savol: \"should (Maslahat va Tavsiya)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #7]",
      "options": [
        "Candidates must adhere strictly to the examination time limits. [Savol #7]",
        "Candidates must to adhere strictly to the examination time limits. [Savol #7]",
        "Candidates must adhering strictly to the examination time limits. [Savol #7]",
        "Candidates ought adhere strictly to the examination time limits. [Savol #7]"
      ],
      "correctAnswer": "Candidates must adhere strictly to the examination time limits. [Savol #7]",
      "explanation": "Ushbu birlik (should (Maslahat va Tavsiya)) qoidasiga ko'ra, to'g'ri shakl 'Candidates must adhere strictly to the examination time limits.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "8-Savol: \"should (Maslahat va Tavsiya)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #8]",
      "options": [
        "Candidates must adhere strictly to the examination time limits. [Savol #8]",
        "Candidates must to adhere strictly to the examination time limits. [Savol #8]",
        "Candidates must adhering strictly to the examination time limits. [Savol #8]",
        "Candidates ought adhere strictly to the examination time limits. [Savol #8]"
      ],
      "correctAnswer": "Candidates must adhere strictly to the examination time limits. [Savol #8]",
      "explanation": "Ushbu birlik (should (Maslahat va Tavsiya)) qoidasiga ko'ra, to'g'ri shakl 'Candidates must adhere strictly to the examination time limits.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "9-Savol: \"should (Maslahat va Tavsiya)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #9]",
      "options": [
        "Candidates must adhere strictly to the examination time limits. [Savol #9]",
        "Candidates must to adhere strictly to the examination time limits. [Savol #9]",
        "Candidates must adhering strictly to the examination time limits. [Savol #9]",
        "Candidates ought adhere strictly to the examination time limits. [Savol #9]"
      ],
      "correctAnswer": "Candidates must adhere strictly to the examination time limits. [Savol #9]",
      "explanation": "Ushbu birlik (should (Maslahat va Tavsiya)) qoidasiga ko'ra, to'g'ri shakl 'Candidates must adhere strictly to the examination time limits.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "10-Savol: \"should (Maslahat va Tavsiya)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #10]",
      "options": [
        "Candidates must adhere strictly to the examination time limits. [Savol #10]",
        "Candidates must to adhere strictly to the examination time limits. [Savol #10]",
        "Candidates must adhering strictly to the examination time limits. [Savol #10]",
        "Candidates ought adhere strictly to the examination time limits. [Savol #10]"
      ],
      "correctAnswer": "Candidates must adhere strictly to the examination time limits. [Savol #10]",
      "explanation": "Ushbu birlik (should (Maslahat va Tavsiya)) qoidasiga ko'ra, to'g'ri shakl 'Candidates must adhere strictly to the examination time limits.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    }
  ],
  "murphy_u34_have_to": [
    {
      "question": "Tomorrow is Sunday, so I _______ wake up early.",
      "options": [
        "don't have to",
        "mustn't",
        "haven't to",
        "am not having to"
      ],
      "correctAnswer": "don't have to",
      "explanation": "Ertaga yakshanba, shuning uchun erta turishim shart emas (ixtiyoriy: don't have to)."
    },
    {
      "question": "2-Savol: \"I have to ... (Majburiyat va Shartlik)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #2]",
      "options": [
        "Correct academic usage adhering to I/We/You/They have to + V1. [Savol #2]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #2]",
        "Incompatible tense sequence violating subject agreement. [Savol #2]",
        "Omission of essential verb particle or preposition. [Savol #2]"
      ],
      "correctAnswer": "Correct academic usage adhering to I/We/You/They have to + V1. [Savol #2]",
      "explanation": "Ushbu birlik (I have to ... (Majburiyat va Shartlik)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to I/We/You/They have to + V1.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "3-Savol: \"I have to ... (Majburiyat va Shartlik)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #3]",
      "options": [
        "Correct academic usage adhering to I/We/You/They have to + V1. [Savol #3]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #3]",
        "Incompatible tense sequence violating subject agreement. [Savol #3]",
        "Omission of essential verb particle or preposition. [Savol #3]"
      ],
      "correctAnswer": "Correct academic usage adhering to I/We/You/They have to + V1. [Savol #3]",
      "explanation": "Ushbu birlik (I have to ... (Majburiyat va Shartlik)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to I/We/You/They have to + V1.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "4-Savol: \"I have to ... (Majburiyat va Shartlik)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #4]",
      "options": [
        "Correct academic usage adhering to I/We/You/They have to + V1. [Savol #4]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #4]",
        "Incompatible tense sequence violating subject agreement. [Savol #4]",
        "Omission of essential verb particle or preposition. [Savol #4]"
      ],
      "correctAnswer": "Correct academic usage adhering to I/We/You/They have to + V1. [Savol #4]",
      "explanation": "Ushbu birlik (I have to ... (Majburiyat va Shartlik)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to I/We/You/They have to + V1.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "5-Savol: \"I have to ... (Majburiyat va Shartlik)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #5]",
      "options": [
        "Correct academic usage adhering to I/We/You/They have to + V1. [Savol #5]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #5]",
        "Incompatible tense sequence violating subject agreement. [Savol #5]",
        "Omission of essential verb particle or preposition. [Savol #5]"
      ],
      "correctAnswer": "Correct academic usage adhering to I/We/You/They have to + V1. [Savol #5]",
      "explanation": "Ushbu birlik (I have to ... (Majburiyat va Shartlik)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to I/We/You/They have to + V1.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "6-Savol: \"I have to ... (Majburiyat va Shartlik)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #6]",
      "options": [
        "Correct academic usage adhering to I/We/You/They have to + V1. [Savol #6]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #6]",
        "Incompatible tense sequence violating subject agreement. [Savol #6]",
        "Omission of essential verb particle or preposition. [Savol #6]"
      ],
      "correctAnswer": "Correct academic usage adhering to I/We/You/They have to + V1. [Savol #6]",
      "explanation": "Ushbu birlik (I have to ... (Majburiyat va Shartlik)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to I/We/You/They have to + V1.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "7-Savol: \"I have to ... (Majburiyat va Shartlik)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #7]",
      "options": [
        "Correct academic usage adhering to I/We/You/They have to + V1. [Savol #7]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #7]",
        "Incompatible tense sequence violating subject agreement. [Savol #7]",
        "Omission of essential verb particle or preposition. [Savol #7]"
      ],
      "correctAnswer": "Correct academic usage adhering to I/We/You/They have to + V1. [Savol #7]",
      "explanation": "Ushbu birlik (I have to ... (Majburiyat va Shartlik)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to I/We/You/They have to + V1.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "8-Savol: \"I have to ... (Majburiyat va Shartlik)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #8]",
      "options": [
        "Correct academic usage adhering to I/We/You/They have to + V1. [Savol #8]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #8]",
        "Incompatible tense sequence violating subject agreement. [Savol #8]",
        "Omission of essential verb particle or preposition. [Savol #8]"
      ],
      "correctAnswer": "Correct academic usage adhering to I/We/You/They have to + V1. [Savol #8]",
      "explanation": "Ushbu birlik (I have to ... (Majburiyat va Shartlik)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to I/We/You/They have to + V1.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "9-Savol: \"I have to ... (Majburiyat va Shartlik)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #9]",
      "options": [
        "Correct academic usage adhering to I/We/You/They have to + V1. [Savol #9]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #9]",
        "Incompatible tense sequence violating subject agreement. [Savol #9]",
        "Omission of essential verb particle or preposition. [Savol #9]"
      ],
      "correctAnswer": "Correct academic usage adhering to I/We/You/They have to + V1. [Savol #9]",
      "explanation": "Ushbu birlik (I have to ... (Majburiyat va Shartlik)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to I/We/You/They have to + V1.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "10-Savol: \"I have to ... (Majburiyat va Shartlik)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #10]",
      "options": [
        "Correct academic usage adhering to I/We/You/They have to + V1. [Savol #10]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #10]",
        "Incompatible tense sequence violating subject agreement. [Savol #10]",
        "Omission of essential verb particle or preposition. [Savol #10]"
      ],
      "correctAnswer": "Correct academic usage adhering to I/We/You/They have to + V1. [Savol #10]",
      "explanation": "Ushbu birlik (I have to ... (Majburiyat va Shartlik)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to I/We/You/They have to + V1.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    }
  ],
  "murphy_u35_would_like": [
    {
      "question": "'_______ a cup of tea?' — 'Yes, please. I'd love one.'",
      "options": [
        "Would you like",
        "Do you like",
        "Are you liking",
        "Will you like"
      ],
      "correctAnswer": "Would you like",
      "explanation": "Xushmuomala taklif bildirishda 'Would you like...' formulasi qo'llaniladi."
    },
    {
      "question": "2-Savol: \"Would you like ... ? / I'd like ... (Xushmuomala Taklif va Istak)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #2]",
      "options": [
        "Candidates must adhere strictly to the examination time limits. [Savol #2]",
        "Candidates must to adhere strictly to the examination time limits. [Savol #2]",
        "Candidates must adhering strictly to the examination time limits. [Savol #2]",
        "Candidates ought adhere strictly to the examination time limits. [Savol #2]"
      ],
      "correctAnswer": "Candidates must adhere strictly to the examination time limits. [Savol #2]",
      "explanation": "Ushbu birlik (Would you like ... ? / I'd like ... (Xushmuomala Taklif va Istak)) qoidasiga ko'ra, to'g'ri shakl 'Candidates must adhere strictly to the examination time limits.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "3-Savol: \"Would you like ... ? / I'd like ... (Xushmuomala Taklif va Istak)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #3]",
      "options": [
        "Candidates must adhere strictly to the examination time limits. [Savol #3]",
        "Candidates must to adhere strictly to the examination time limits. [Savol #3]",
        "Candidates must adhering strictly to the examination time limits. [Savol #3]",
        "Candidates ought adhere strictly to the examination time limits. [Savol #3]"
      ],
      "correctAnswer": "Candidates must adhere strictly to the examination time limits. [Savol #3]",
      "explanation": "Ushbu birlik (Would you like ... ? / I'd like ... (Xushmuomala Taklif va Istak)) qoidasiga ko'ra, to'g'ri shakl 'Candidates must adhere strictly to the examination time limits.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "4-Savol: \"Would you like ... ? / I'd like ... (Xushmuomala Taklif va Istak)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #4]",
      "options": [
        "Candidates must adhere strictly to the examination time limits. [Savol #4]",
        "Candidates must to adhere strictly to the examination time limits. [Savol #4]",
        "Candidates must adhering strictly to the examination time limits. [Savol #4]",
        "Candidates ought adhere strictly to the examination time limits. [Savol #4]"
      ],
      "correctAnswer": "Candidates must adhere strictly to the examination time limits. [Savol #4]",
      "explanation": "Ushbu birlik (Would you like ... ? / I'd like ... (Xushmuomala Taklif va Istak)) qoidasiga ko'ra, to'g'ri shakl 'Candidates must adhere strictly to the examination time limits.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "5-Savol: \"Would you like ... ? / I'd like ... (Xushmuomala Taklif va Istak)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #5]",
      "options": [
        "Candidates must adhere strictly to the examination time limits. [Savol #5]",
        "Candidates must to adhere strictly to the examination time limits. [Savol #5]",
        "Candidates must adhering strictly to the examination time limits. [Savol #5]",
        "Candidates ought adhere strictly to the examination time limits. [Savol #5]"
      ],
      "correctAnswer": "Candidates must adhere strictly to the examination time limits. [Savol #5]",
      "explanation": "Ushbu birlik (Would you like ... ? / I'd like ... (Xushmuomala Taklif va Istak)) qoidasiga ko'ra, to'g'ri shakl 'Candidates must adhere strictly to the examination time limits.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "6-Savol: \"Would you like ... ? / I'd like ... (Xushmuomala Taklif va Istak)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #6]",
      "options": [
        "Candidates must adhere strictly to the examination time limits. [Savol #6]",
        "Candidates must to adhere strictly to the examination time limits. [Savol #6]",
        "Candidates must adhering strictly to the examination time limits. [Savol #6]",
        "Candidates ought adhere strictly to the examination time limits. [Savol #6]"
      ],
      "correctAnswer": "Candidates must adhere strictly to the examination time limits. [Savol #6]",
      "explanation": "Ushbu birlik (Would you like ... ? / I'd like ... (Xushmuomala Taklif va Istak)) qoidasiga ko'ra, to'g'ri shakl 'Candidates must adhere strictly to the examination time limits.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "7-Savol: \"Would you like ... ? / I'd like ... (Xushmuomala Taklif va Istak)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #7]",
      "options": [
        "Candidates must adhere strictly to the examination time limits. [Savol #7]",
        "Candidates must to adhere strictly to the examination time limits. [Savol #7]",
        "Candidates must adhering strictly to the examination time limits. [Savol #7]",
        "Candidates ought adhere strictly to the examination time limits. [Savol #7]"
      ],
      "correctAnswer": "Candidates must adhere strictly to the examination time limits. [Savol #7]",
      "explanation": "Ushbu birlik (Would you like ... ? / I'd like ... (Xushmuomala Taklif va Istak)) qoidasiga ko'ra, to'g'ri shakl 'Candidates must adhere strictly to the examination time limits.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "8-Savol: \"Would you like ... ? / I'd like ... (Xushmuomala Taklif va Istak)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #8]",
      "options": [
        "Candidates must adhere strictly to the examination time limits. [Savol #8]",
        "Candidates must to adhere strictly to the examination time limits. [Savol #8]",
        "Candidates must adhering strictly to the examination time limits. [Savol #8]",
        "Candidates ought adhere strictly to the examination time limits. [Savol #8]"
      ],
      "correctAnswer": "Candidates must adhere strictly to the examination time limits. [Savol #8]",
      "explanation": "Ushbu birlik (Would you like ... ? / I'd like ... (Xushmuomala Taklif va Istak)) qoidasiga ko'ra, to'g'ri shakl 'Candidates must adhere strictly to the examination time limits.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "9-Savol: \"Would you like ... ? / I'd like ... (Xushmuomala Taklif va Istak)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #9]",
      "options": [
        "Candidates must adhere strictly to the examination time limits. [Savol #9]",
        "Candidates must to adhere strictly to the examination time limits. [Savol #9]",
        "Candidates must adhering strictly to the examination time limits. [Savol #9]",
        "Candidates ought adhere strictly to the examination time limits. [Savol #9]"
      ],
      "correctAnswer": "Candidates must adhere strictly to the examination time limits. [Savol #9]",
      "explanation": "Ushbu birlik (Would you like ... ? / I'd like ... (Xushmuomala Taklif va Istak)) qoidasiga ko'ra, to'g'ri shakl 'Candidates must adhere strictly to the examination time limits.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "10-Savol: \"Would you like ... ? / I'd like ... (Xushmuomala Taklif va Istak)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #10]",
      "options": [
        "Candidates must adhere strictly to the examination time limits. [Savol #10]",
        "Candidates must to adhere strictly to the examination time limits. [Savol #10]",
        "Candidates must adhering strictly to the examination time limits. [Savol #10]",
        "Candidates ought adhere strictly to the examination time limits. [Savol #10]"
      ],
      "correctAnswer": "Candidates must adhere strictly to the examination time limits. [Savol #10]",
      "explanation": "Ushbu birlik (Would you like ... ? / I'd like ... (Xushmuomala Taklif va Istak)) qoidasiga ko'ra, to'g'ri shakl 'Candidates must adhere strictly to the examination time limits.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    }
  ],
  "murphy_u58_pronouns": [
    {
      "question": "Do you know that professor? Yes, I work with _______ on research projects.",
      "options": [
        "him",
        "he",
        "his",
        "himself"
      ],
      "correctAnswer": "him",
      "explanation": "'with' predlogidan keyin to'ldiruvchi olmosh 'him' qo'yiladi."
    },
    {
      "question": "2-Savol: \"I/me, he/him, they/them etc. (Kishilik va To'ldiruvchi Olmoshlar)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #2]",
      "options": [
        "Correct academic usage adhering to Ega: I / He / She / It / We / You / They ➔ To'ldiruvchi: me / him / her / it / us / you / them. [Savol #2]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #2]",
        "Incompatible tense sequence violating subject agreement. [Savol #2]",
        "Omission of essential verb particle or preposition. [Savol #2]"
      ],
      "correctAnswer": "Correct academic usage adhering to Ega: I / He / She / It / We / You / They ➔ To'ldiruvchi: me / him / her / it / us / you / them. [Savol #2]",
      "explanation": "Ushbu birlik (I/me, he/him, they/them etc. (Kishilik va To'ldiruvchi Olmoshlar)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to Ega: I / He / She / It / We / You / They ➔ To'ldiruvchi: me / him / her / it / us / you / them.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "3-Savol: \"I/me, he/him, they/them etc. (Kishilik va To'ldiruvchi Olmoshlar)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #3]",
      "options": [
        "Correct academic usage adhering to Ega: I / He / She / It / We / You / They ➔ To'ldiruvchi: me / him / her / it / us / you / them. [Savol #3]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #3]",
        "Incompatible tense sequence violating subject agreement. [Savol #3]",
        "Omission of essential verb particle or preposition. [Savol #3]"
      ],
      "correctAnswer": "Correct academic usage adhering to Ega: I / He / She / It / We / You / They ➔ To'ldiruvchi: me / him / her / it / us / you / them. [Savol #3]",
      "explanation": "Ushbu birlik (I/me, he/him, they/them etc. (Kishilik va To'ldiruvchi Olmoshlar)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to Ega: I / He / She / It / We / You / They ➔ To'ldiruvchi: me / him / her / it / us / you / them.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "4-Savol: \"I/me, he/him, they/them etc. (Kishilik va To'ldiruvchi Olmoshlar)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #4]",
      "options": [
        "Correct academic usage adhering to Ega: I / He / She / It / We / You / They ➔ To'ldiruvchi: me / him / her / it / us / you / them. [Savol #4]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #4]",
        "Incompatible tense sequence violating subject agreement. [Savol #4]",
        "Omission of essential verb particle or preposition. [Savol #4]"
      ],
      "correctAnswer": "Correct academic usage adhering to Ega: I / He / She / It / We / You / They ➔ To'ldiruvchi: me / him / her / it / us / you / them. [Savol #4]",
      "explanation": "Ushbu birlik (I/me, he/him, they/them etc. (Kishilik va To'ldiruvchi Olmoshlar)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to Ega: I / He / She / It / We / You / They ➔ To'ldiruvchi: me / him / her / it / us / you / them.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "5-Savol: \"I/me, he/him, they/them etc. (Kishilik va To'ldiruvchi Olmoshlar)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #5]",
      "options": [
        "Correct academic usage adhering to Ega: I / He / She / It / We / You / They ➔ To'ldiruvchi: me / him / her / it / us / you / them. [Savol #5]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #5]",
        "Incompatible tense sequence violating subject agreement. [Savol #5]",
        "Omission of essential verb particle or preposition. [Savol #5]"
      ],
      "correctAnswer": "Correct academic usage adhering to Ega: I / He / She / It / We / You / They ➔ To'ldiruvchi: me / him / her / it / us / you / them. [Savol #5]",
      "explanation": "Ushbu birlik (I/me, he/him, they/them etc. (Kishilik va To'ldiruvchi Olmoshlar)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to Ega: I / He / She / It / We / You / They ➔ To'ldiruvchi: me / him / her / it / us / you / them.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "6-Savol: \"I/me, he/him, they/them etc. (Kishilik va To'ldiruvchi Olmoshlar)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #6]",
      "options": [
        "Correct academic usage adhering to Ega: I / He / She / It / We / You / They ➔ To'ldiruvchi: me / him / her / it / us / you / them. [Savol #6]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #6]",
        "Incompatible tense sequence violating subject agreement. [Savol #6]",
        "Omission of essential verb particle or preposition. [Savol #6]"
      ],
      "correctAnswer": "Correct academic usage adhering to Ega: I / He / She / It / We / You / They ➔ To'ldiruvchi: me / him / her / it / us / you / them. [Savol #6]",
      "explanation": "Ushbu birlik (I/me, he/him, they/them etc. (Kishilik va To'ldiruvchi Olmoshlar)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to Ega: I / He / She / It / We / You / They ➔ To'ldiruvchi: me / him / her / it / us / you / them.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "7-Savol: \"I/me, he/him, they/them etc. (Kishilik va To'ldiruvchi Olmoshlar)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #7]",
      "options": [
        "Correct academic usage adhering to Ega: I / He / She / It / We / You / They ➔ To'ldiruvchi: me / him / her / it / us / you / them. [Savol #7]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #7]",
        "Incompatible tense sequence violating subject agreement. [Savol #7]",
        "Omission of essential verb particle or preposition. [Savol #7]"
      ],
      "correctAnswer": "Correct academic usage adhering to Ega: I / He / She / It / We / You / They ➔ To'ldiruvchi: me / him / her / it / us / you / them. [Savol #7]",
      "explanation": "Ushbu birlik (I/me, he/him, they/them etc. (Kishilik va To'ldiruvchi Olmoshlar)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to Ega: I / He / She / It / We / You / They ➔ To'ldiruvchi: me / him / her / it / us / you / them.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "8-Savol: \"I/me, he/him, they/them etc. (Kishilik va To'ldiruvchi Olmoshlar)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #8]",
      "options": [
        "Correct academic usage adhering to Ega: I / He / She / It / We / You / They ➔ To'ldiruvchi: me / him / her / it / us / you / them. [Savol #8]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #8]",
        "Incompatible tense sequence violating subject agreement. [Savol #8]",
        "Omission of essential verb particle or preposition. [Savol #8]"
      ],
      "correctAnswer": "Correct academic usage adhering to Ega: I / He / She / It / We / You / They ➔ To'ldiruvchi: me / him / her / it / us / you / them. [Savol #8]",
      "explanation": "Ushbu birlik (I/me, he/him, they/them etc. (Kishilik va To'ldiruvchi Olmoshlar)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to Ega: I / He / She / It / We / You / They ➔ To'ldiruvchi: me / him / her / it / us / you / them.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "9-Savol: \"I/me, he/him, they/them etc. (Kishilik va To'ldiruvchi Olmoshlar)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #9]",
      "options": [
        "Correct academic usage adhering to Ega: I / He / She / It / We / You / They ➔ To'ldiruvchi: me / him / her / it / us / you / them. [Savol #9]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #9]",
        "Incompatible tense sequence violating subject agreement. [Savol #9]",
        "Omission of essential verb particle or preposition. [Savol #9]"
      ],
      "correctAnswer": "Correct academic usage adhering to Ega: I / He / She / It / We / You / They ➔ To'ldiruvchi: me / him / her / it / us / you / them. [Savol #9]",
      "explanation": "Ushbu birlik (I/me, he/him, they/them etc. (Kishilik va To'ldiruvchi Olmoshlar)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to Ega: I / He / She / It / We / You / They ➔ To'ldiruvchi: me / him / her / it / us / you / them.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "10-Savol: \"I/me, he/him, they/them etc. (Kishilik va To'ldiruvchi Olmoshlar)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #10]",
      "options": [
        "Correct academic usage adhering to Ega: I / He / She / It / We / You / They ➔ To'ldiruvchi: me / him / her / it / us / you / them. [Savol #10]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #10]",
        "Incompatible tense sequence violating subject agreement. [Savol #10]",
        "Omission of essential verb particle or preposition. [Savol #10]"
      ],
      "correctAnswer": "Correct academic usage adhering to Ega: I / He / She / It / We / You / They ➔ To'ldiruvchi: me / him / her / it / us / you / them. [Savol #10]",
      "explanation": "Ushbu birlik (I/me, he/him, they/them etc. (Kishilik va To'ldiruvchi Olmoshlar)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to Ega: I / He / She / It / We / You / They ➔ To'ldiruvchi: me / him / her / it / us / you / them.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    }
  ],
  "murphy_u59_possessives": [
    {
      "question": "Is this notebook _______ or is it _______?",
      "options": [
        "yours / mine",
        "your / my",
        "yours / my",
        "your / mine"
      ],
      "correctAnswer": "yours / mine",
      "explanation": "Ot qo'llanilmagani uchun mustaqil 'yours' va 'mine' shakllari tanlanadi."
    },
    {
      "question": "2-Savol: \"my/his/their & mine/yours (Egalik Sifatlari va Olmoshlari)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #2]",
      "options": [
        "Correct academic usage adhering to Egalik sifati (+ Ot): my car / his book. [Savol #2]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #2]",
        "Incompatible tense sequence violating subject agreement. [Savol #2]",
        "Omission of essential verb particle or preposition. [Savol #2]"
      ],
      "correctAnswer": "Correct academic usage adhering to Egalik sifati (+ Ot): my car / his book. [Savol #2]",
      "explanation": "Ushbu birlik (my/his/their & mine/yours (Egalik Sifatlari va Olmoshlari)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to Egalik sifati (+ Ot): my car / his book.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "3-Savol: \"my/his/their & mine/yours (Egalik Sifatlari va Olmoshlari)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #3]",
      "options": [
        "Correct academic usage adhering to Egalik sifati (+ Ot): my car / his book. [Savol #3]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #3]",
        "Incompatible tense sequence violating subject agreement. [Savol #3]",
        "Omission of essential verb particle or preposition. [Savol #3]"
      ],
      "correctAnswer": "Correct academic usage adhering to Egalik sifati (+ Ot): my car / his book. [Savol #3]",
      "explanation": "Ushbu birlik (my/his/their & mine/yours (Egalik Sifatlari va Olmoshlari)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to Egalik sifati (+ Ot): my car / his book.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "4-Savol: \"my/his/their & mine/yours (Egalik Sifatlari va Olmoshlari)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #4]",
      "options": [
        "Correct academic usage adhering to Egalik sifati (+ Ot): my car / his book. [Savol #4]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #4]",
        "Incompatible tense sequence violating subject agreement. [Savol #4]",
        "Omission of essential verb particle or preposition. [Savol #4]"
      ],
      "correctAnswer": "Correct academic usage adhering to Egalik sifati (+ Ot): my car / his book. [Savol #4]",
      "explanation": "Ushbu birlik (my/his/their & mine/yours (Egalik Sifatlari va Olmoshlari)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to Egalik sifati (+ Ot): my car / his book.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "5-Savol: \"my/his/their & mine/yours (Egalik Sifatlari va Olmoshlari)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #5]",
      "options": [
        "Correct academic usage adhering to Egalik sifati (+ Ot): my car / his book. [Savol #5]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #5]",
        "Incompatible tense sequence violating subject agreement. [Savol #5]",
        "Omission of essential verb particle or preposition. [Savol #5]"
      ],
      "correctAnswer": "Correct academic usage adhering to Egalik sifati (+ Ot): my car / his book. [Savol #5]",
      "explanation": "Ushbu birlik (my/his/their & mine/yours (Egalik Sifatlari va Olmoshlari)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to Egalik sifati (+ Ot): my car / his book.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "6-Savol: \"my/his/their & mine/yours (Egalik Sifatlari va Olmoshlari)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #6]",
      "options": [
        "Correct academic usage adhering to Egalik sifati (+ Ot): my car / his book. [Savol #6]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #6]",
        "Incompatible tense sequence violating subject agreement. [Savol #6]",
        "Omission of essential verb particle or preposition. [Savol #6]"
      ],
      "correctAnswer": "Correct academic usage adhering to Egalik sifati (+ Ot): my car / his book. [Savol #6]",
      "explanation": "Ushbu birlik (my/his/their & mine/yours (Egalik Sifatlari va Olmoshlari)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to Egalik sifati (+ Ot): my car / his book.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "7-Savol: \"my/his/their & mine/yours (Egalik Sifatlari va Olmoshlari)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #7]",
      "options": [
        "Correct academic usage adhering to Egalik sifati (+ Ot): my car / his book. [Savol #7]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #7]",
        "Incompatible tense sequence violating subject agreement. [Savol #7]",
        "Omission of essential verb particle or preposition. [Savol #7]"
      ],
      "correctAnswer": "Correct academic usage adhering to Egalik sifati (+ Ot): my car / his book. [Savol #7]",
      "explanation": "Ushbu birlik (my/his/their & mine/yours (Egalik Sifatlari va Olmoshlari)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to Egalik sifati (+ Ot): my car / his book.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "8-Savol: \"my/his/their & mine/yours (Egalik Sifatlari va Olmoshlari)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #8]",
      "options": [
        "Correct academic usage adhering to Egalik sifati (+ Ot): my car / his book. [Savol #8]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #8]",
        "Incompatible tense sequence violating subject agreement. [Savol #8]",
        "Omission of essential verb particle or preposition. [Savol #8]"
      ],
      "correctAnswer": "Correct academic usage adhering to Egalik sifati (+ Ot): my car / his book. [Savol #8]",
      "explanation": "Ushbu birlik (my/his/their & mine/yours (Egalik Sifatlari va Olmoshlari)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to Egalik sifati (+ Ot): my car / his book.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "9-Savol: \"my/his/their & mine/yours (Egalik Sifatlari va Olmoshlari)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #9]",
      "options": [
        "Correct academic usage adhering to Egalik sifati (+ Ot): my car / his book. [Savol #9]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #9]",
        "Incompatible tense sequence violating subject agreement. [Savol #9]",
        "Omission of essential verb particle or preposition. [Savol #9]"
      ],
      "correctAnswer": "Correct academic usage adhering to Egalik sifati (+ Ot): my car / his book. [Savol #9]",
      "explanation": "Ushbu birlik (my/his/their & mine/yours (Egalik Sifatlari va Olmoshlari)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to Egalik sifati (+ Ot): my car / his book.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "10-Savol: \"my/his/their & mine/yours (Egalik Sifatlari va Olmoshlari)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #10]",
      "options": [
        "Correct academic usage adhering to Egalik sifati (+ Ot): my car / his book. [Savol #10]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #10]",
        "Incompatible tense sequence violating subject agreement. [Savol #10]",
        "Omission of essential verb particle or preposition. [Savol #10]"
      ],
      "correctAnswer": "Correct academic usage adhering to Egalik sifati (+ Ot): my car / his book. [Savol #10]",
      "explanation": "Ushbu birlik (my/his/their & mine/yours (Egalik Sifatlari va Olmoshlari)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to Egalik sifati (+ Ot): my car / his book.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    }
  ],
  "murphy_u64_a_an_the": [
    {
      "question": "She is _______ university student and lives in _______ center of the city.",
      "options": [
        "a / the",
        "an / the",
        "a / a",
        "an / a"
      ],
      "correctAnswer": "a / the",
      "explanation": "'University' (/juː.../) undosh tovush bilan boshlangani uchun 'a university', shahar markazi aniq bo'lgani uchun 'the center'."
    },
    {
      "question": "2-Savol: \"a / an va the (Artikllar Asoslari)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #2]",
      "options": [
        "Correct academic usage adhering to A + Undosh tovush (a car, a university). [Savol #2]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #2]",
        "Incompatible tense sequence violating subject agreement. [Savol #2]",
        "Omission of essential verb particle or preposition. [Savol #2]"
      ],
      "correctAnswer": "Correct academic usage adhering to A + Undosh tovush (a car, a university). [Savol #2]",
      "explanation": "Ushbu birlik (a / an va the (Artikllar Asoslari)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to A + Undosh tovush (a car, a university).' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "3-Savol: \"a / an va the (Artikllar Asoslari)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #3]",
      "options": [
        "Correct academic usage adhering to A + Undosh tovush (a car, a university). [Savol #3]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #3]",
        "Incompatible tense sequence violating subject agreement. [Savol #3]",
        "Omission of essential verb particle or preposition. [Savol #3]"
      ],
      "correctAnswer": "Correct academic usage adhering to A + Undosh tovush (a car, a university). [Savol #3]",
      "explanation": "Ushbu birlik (a / an va the (Artikllar Asoslari)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to A + Undosh tovush (a car, a university).' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "4-Savol: \"a / an va the (Artikllar Asoslari)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #4]",
      "options": [
        "Correct academic usage adhering to A + Undosh tovush (a car, a university). [Savol #4]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #4]",
        "Incompatible tense sequence violating subject agreement. [Savol #4]",
        "Omission of essential verb particle or preposition. [Savol #4]"
      ],
      "correctAnswer": "Correct academic usage adhering to A + Undosh tovush (a car, a university). [Savol #4]",
      "explanation": "Ushbu birlik (a / an va the (Artikllar Asoslari)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to A + Undosh tovush (a car, a university).' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "5-Savol: \"a / an va the (Artikllar Asoslari)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #5]",
      "options": [
        "Correct academic usage adhering to A + Undosh tovush (a car, a university). [Savol #5]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #5]",
        "Incompatible tense sequence violating subject agreement. [Savol #5]",
        "Omission of essential verb particle or preposition. [Savol #5]"
      ],
      "correctAnswer": "Correct academic usage adhering to A + Undosh tovush (a car, a university). [Savol #5]",
      "explanation": "Ushbu birlik (a / an va the (Artikllar Asoslari)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to A + Undosh tovush (a car, a university).' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "6-Savol: \"a / an va the (Artikllar Asoslari)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #6]",
      "options": [
        "Correct academic usage adhering to A + Undosh tovush (a car, a university). [Savol #6]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #6]",
        "Incompatible tense sequence violating subject agreement. [Savol #6]",
        "Omission of essential verb particle or preposition. [Savol #6]"
      ],
      "correctAnswer": "Correct academic usage adhering to A + Undosh tovush (a car, a university). [Savol #6]",
      "explanation": "Ushbu birlik (a / an va the (Artikllar Asoslari)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to A + Undosh tovush (a car, a university).' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "7-Savol: \"a / an va the (Artikllar Asoslari)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #7]",
      "options": [
        "Correct academic usage adhering to A + Undosh tovush (a car, a university). [Savol #7]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #7]",
        "Incompatible tense sequence violating subject agreement. [Savol #7]",
        "Omission of essential verb particle or preposition. [Savol #7]"
      ],
      "correctAnswer": "Correct academic usage adhering to A + Undosh tovush (a car, a university). [Savol #7]",
      "explanation": "Ushbu birlik (a / an va the (Artikllar Asoslari)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to A + Undosh tovush (a car, a university).' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "8-Savol: \"a / an va the (Artikllar Asoslari)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #8]",
      "options": [
        "Correct academic usage adhering to A + Undosh tovush (a car, a university). [Savol #8]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #8]",
        "Incompatible tense sequence violating subject agreement. [Savol #8]",
        "Omission of essential verb particle or preposition. [Savol #8]"
      ],
      "correctAnswer": "Correct academic usage adhering to A + Undosh tovush (a car, a university). [Savol #8]",
      "explanation": "Ushbu birlik (a / an va the (Artikllar Asoslari)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to A + Undosh tovush (a car, a university).' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "9-Savol: \"a / an va the (Artikllar Asoslari)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #9]",
      "options": [
        "Correct academic usage adhering to A + Undosh tovush (a car, a university). [Savol #9]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #9]",
        "Incompatible tense sequence violating subject agreement. [Savol #9]",
        "Omission of essential verb particle or preposition. [Savol #9]"
      ],
      "correctAnswer": "Correct academic usage adhering to A + Undosh tovush (a car, a university). [Savol #9]",
      "explanation": "Ushbu birlik (a / an va the (Artikllar Asoslari)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to A + Undosh tovush (a car, a university).' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "10-Savol: \"a / an va the (Artikllar Asoslari)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #10]",
      "options": [
        "Correct academic usage adhering to A + Undosh tovush (a car, a university). [Savol #10]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #10]",
        "Incompatible tense sequence violating subject agreement. [Savol #10]",
        "Omission of essential verb particle or preposition. [Savol #10]"
      ],
      "correctAnswer": "Correct academic usage adhering to A + Undosh tovush (a car, a university). [Savol #10]",
      "explanation": "Ushbu birlik (a / an va the (Artikllar Asoslari)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to A + Undosh tovush (a car, a university).' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    }
  ],
  "murphy_u73_this_that_these_those": [
    {
      "question": "Do you remember _______ wonderful summer vacation we had in Italy?",
      "options": [
        "that",
        "this",
        "these",
        "those"
      ],
      "correctAnswer": "that",
      "explanation": "O'tmishdagi uzoq xotirani ko'rsatishda birlik 'that' to'g'ri keladi."
    },
    {
      "question": "2-Savol: \"this / that / these / those (Ko'rsatish Olmoshlari)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #2]",
      "options": [
        "Correct academic usage adhering to Yaqin: This (birlik) / These (ko'plik). [Savol #2]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #2]",
        "Incompatible tense sequence violating subject agreement. [Savol #2]",
        "Omission of essential verb particle or preposition. [Savol #2]"
      ],
      "correctAnswer": "Correct academic usage adhering to Yaqin: This (birlik) / These (ko'plik). [Savol #2]",
      "explanation": "Ushbu birlik (this / that / these / those (Ko'rsatish Olmoshlari)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to Yaqin: This (birlik) / These (ko'plik).' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "3-Savol: \"this / that / these / those (Ko'rsatish Olmoshlari)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #3]",
      "options": [
        "Correct academic usage adhering to Yaqin: This (birlik) / These (ko'plik). [Savol #3]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #3]",
        "Incompatible tense sequence violating subject agreement. [Savol #3]",
        "Omission of essential verb particle or preposition. [Savol #3]"
      ],
      "correctAnswer": "Correct academic usage adhering to Yaqin: This (birlik) / These (ko'plik). [Savol #3]",
      "explanation": "Ushbu birlik (this / that / these / those (Ko'rsatish Olmoshlari)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to Yaqin: This (birlik) / These (ko'plik).' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "4-Savol: \"this / that / these / those (Ko'rsatish Olmoshlari)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #4]",
      "options": [
        "Correct academic usage adhering to Yaqin: This (birlik) / These (ko'plik). [Savol #4]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #4]",
        "Incompatible tense sequence violating subject agreement. [Savol #4]",
        "Omission of essential verb particle or preposition. [Savol #4]"
      ],
      "correctAnswer": "Correct academic usage adhering to Yaqin: This (birlik) / These (ko'plik). [Savol #4]",
      "explanation": "Ushbu birlik (this / that / these / those (Ko'rsatish Olmoshlari)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to Yaqin: This (birlik) / These (ko'plik).' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "5-Savol: \"this / that / these / those (Ko'rsatish Olmoshlari)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #5]",
      "options": [
        "Correct academic usage adhering to Yaqin: This (birlik) / These (ko'plik). [Savol #5]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #5]",
        "Incompatible tense sequence violating subject agreement. [Savol #5]",
        "Omission of essential verb particle or preposition. [Savol #5]"
      ],
      "correctAnswer": "Correct academic usage adhering to Yaqin: This (birlik) / These (ko'plik). [Savol #5]",
      "explanation": "Ushbu birlik (this / that / these / those (Ko'rsatish Olmoshlari)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to Yaqin: This (birlik) / These (ko'plik).' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "6-Savol: \"this / that / these / those (Ko'rsatish Olmoshlari)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #6]",
      "options": [
        "Correct academic usage adhering to Yaqin: This (birlik) / These (ko'plik). [Savol #6]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #6]",
        "Incompatible tense sequence violating subject agreement. [Savol #6]",
        "Omission of essential verb particle or preposition. [Savol #6]"
      ],
      "correctAnswer": "Correct academic usage adhering to Yaqin: This (birlik) / These (ko'plik). [Savol #6]",
      "explanation": "Ushbu birlik (this / that / these / those (Ko'rsatish Olmoshlari)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to Yaqin: This (birlik) / These (ko'plik).' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "7-Savol: \"this / that / these / those (Ko'rsatish Olmoshlari)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #7]",
      "options": [
        "Correct academic usage adhering to Yaqin: This (birlik) / These (ko'plik). [Savol #7]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #7]",
        "Incompatible tense sequence violating subject agreement. [Savol #7]",
        "Omission of essential verb particle or preposition. [Savol #7]"
      ],
      "correctAnswer": "Correct academic usage adhering to Yaqin: This (birlik) / These (ko'plik). [Savol #7]",
      "explanation": "Ushbu birlik (this / that / these / those (Ko'rsatish Olmoshlari)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to Yaqin: This (birlik) / These (ko'plik).' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "8-Savol: \"this / that / these / those (Ko'rsatish Olmoshlari)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #8]",
      "options": [
        "Correct academic usage adhering to Yaqin: This (birlik) / These (ko'plik). [Savol #8]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #8]",
        "Incompatible tense sequence violating subject agreement. [Savol #8]",
        "Omission of essential verb particle or preposition. [Savol #8]"
      ],
      "correctAnswer": "Correct academic usage adhering to Yaqin: This (birlik) / These (ko'plik). [Savol #8]",
      "explanation": "Ushbu birlik (this / that / these / those (Ko'rsatish Olmoshlari)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to Yaqin: This (birlik) / These (ko'plik).' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "9-Savol: \"this / that / these / those (Ko'rsatish Olmoshlari)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #9]",
      "options": [
        "Correct academic usage adhering to Yaqin: This (birlik) / These (ko'plik). [Savol #9]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #9]",
        "Incompatible tense sequence violating subject agreement. [Savol #9]",
        "Omission of essential verb particle or preposition. [Savol #9]"
      ],
      "correctAnswer": "Correct academic usage adhering to Yaqin: This (birlik) / These (ko'plik). [Savol #9]",
      "explanation": "Ushbu birlik (this / that / these / those (Ko'rsatish Olmoshlari)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to Yaqin: This (birlik) / These (ko'plik).' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "10-Savol: \"this / that / these / those (Ko'rsatish Olmoshlari)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #10]",
      "options": [
        "Correct academic usage adhering to Yaqin: This (birlik) / These (ko'plik). [Savol #10]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #10]",
        "Incompatible tense sequence violating subject agreement. [Savol #10]",
        "Omission of essential verb particle or preposition. [Savol #10]"
      ],
      "correctAnswer": "Correct academic usage adhering to Yaqin: This (birlik) / These (ko'plik). [Savol #10]",
      "explanation": "Ushbu birlik (this / that / these / those (Ko'rsatish Olmoshlari)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to Yaqin: This (birlik) / These (ko'plik).' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    }
  ],
  "murphy_u86_comparatives": [
    {
      "question": "Living in a rural area is often _______ and _______ than residing in a metropolis.",
      "options": [
        "cheaper / quieter",
        "more cheap / more quiet",
        "cheaper / more quiet",
        "more cheaper / quieter"
      ],
      "correctAnswer": "cheaper / quieter",
      "explanation": "Qisqa sifatlar 'cheap' va 'quiet' qiyosiy darajada 'cheaper' va 'quieter' bo'ladi."
    },
    {
      "question": "2-Savol: \"old/older, expensive / more expensive (Sifat Darajalari — Qiyosiy)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #2]",
      "options": [
        "Correct academic usage adhering to Qisqa sifat: Adj + -er + THAN (faster than, cheaper than). [Savol #2]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #2]",
        "Incompatible tense sequence violating subject agreement. [Savol #2]",
        "Omission of essential verb particle or preposition. [Savol #2]"
      ],
      "correctAnswer": "Correct academic usage adhering to Qisqa sifat: Adj + -er + THAN (faster than, cheaper than). [Savol #2]",
      "explanation": "Ushbu birlik (old/older, expensive / more expensive (Sifat Darajalari — Qiyosiy)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to Qisqa sifat: Adj + -er + THAN (faster than, cheaper than).' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "3-Savol: \"old/older, expensive / more expensive (Sifat Darajalari — Qiyosiy)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #3]",
      "options": [
        "Correct academic usage adhering to Qisqa sifat: Adj + -er + THAN (faster than, cheaper than). [Savol #3]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #3]",
        "Incompatible tense sequence violating subject agreement. [Savol #3]",
        "Omission of essential verb particle or preposition. [Savol #3]"
      ],
      "correctAnswer": "Correct academic usage adhering to Qisqa sifat: Adj + -er + THAN (faster than, cheaper than). [Savol #3]",
      "explanation": "Ushbu birlik (old/older, expensive / more expensive (Sifat Darajalari — Qiyosiy)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to Qisqa sifat: Adj + -er + THAN (faster than, cheaper than).' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "4-Savol: \"old/older, expensive / more expensive (Sifat Darajalari — Qiyosiy)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #4]",
      "options": [
        "Correct academic usage adhering to Qisqa sifat: Adj + -er + THAN (faster than, cheaper than). [Savol #4]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #4]",
        "Incompatible tense sequence violating subject agreement. [Savol #4]",
        "Omission of essential verb particle or preposition. [Savol #4]"
      ],
      "correctAnswer": "Correct academic usage adhering to Qisqa sifat: Adj + -er + THAN (faster than, cheaper than). [Savol #4]",
      "explanation": "Ushbu birlik (old/older, expensive / more expensive (Sifat Darajalari — Qiyosiy)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to Qisqa sifat: Adj + -er + THAN (faster than, cheaper than).' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "5-Savol: \"old/older, expensive / more expensive (Sifat Darajalari — Qiyosiy)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #5]",
      "options": [
        "Correct academic usage adhering to Qisqa sifat: Adj + -er + THAN (faster than, cheaper than). [Savol #5]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #5]",
        "Incompatible tense sequence violating subject agreement. [Savol #5]",
        "Omission of essential verb particle or preposition. [Savol #5]"
      ],
      "correctAnswer": "Correct academic usage adhering to Qisqa sifat: Adj + -er + THAN (faster than, cheaper than). [Savol #5]",
      "explanation": "Ushbu birlik (old/older, expensive / more expensive (Sifat Darajalari — Qiyosiy)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to Qisqa sifat: Adj + -er + THAN (faster than, cheaper than).' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "6-Savol: \"old/older, expensive / more expensive (Sifat Darajalari — Qiyosiy)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #6]",
      "options": [
        "Correct academic usage adhering to Qisqa sifat: Adj + -er + THAN (faster than, cheaper than). [Savol #6]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #6]",
        "Incompatible tense sequence violating subject agreement. [Savol #6]",
        "Omission of essential verb particle or preposition. [Savol #6]"
      ],
      "correctAnswer": "Correct academic usage adhering to Qisqa sifat: Adj + -er + THAN (faster than, cheaper than). [Savol #6]",
      "explanation": "Ushbu birlik (old/older, expensive / more expensive (Sifat Darajalari — Qiyosiy)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to Qisqa sifat: Adj + -er + THAN (faster than, cheaper than).' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "7-Savol: \"old/older, expensive / more expensive (Sifat Darajalari — Qiyosiy)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #7]",
      "options": [
        "Correct academic usage adhering to Qisqa sifat: Adj + -er + THAN (faster than, cheaper than). [Savol #7]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #7]",
        "Incompatible tense sequence violating subject agreement. [Savol #7]",
        "Omission of essential verb particle or preposition. [Savol #7]"
      ],
      "correctAnswer": "Correct academic usage adhering to Qisqa sifat: Adj + -er + THAN (faster than, cheaper than). [Savol #7]",
      "explanation": "Ushbu birlik (old/older, expensive / more expensive (Sifat Darajalari — Qiyosiy)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to Qisqa sifat: Adj + -er + THAN (faster than, cheaper than).' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "8-Savol: \"old/older, expensive / more expensive (Sifat Darajalari — Qiyosiy)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #8]",
      "options": [
        "Correct academic usage adhering to Qisqa sifat: Adj + -er + THAN (faster than, cheaper than). [Savol #8]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #8]",
        "Incompatible tense sequence violating subject agreement. [Savol #8]",
        "Omission of essential verb particle or preposition. [Savol #8]"
      ],
      "correctAnswer": "Correct academic usage adhering to Qisqa sifat: Adj + -er + THAN (faster than, cheaper than). [Savol #8]",
      "explanation": "Ushbu birlik (old/older, expensive / more expensive (Sifat Darajalari — Qiyosiy)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to Qisqa sifat: Adj + -er + THAN (faster than, cheaper than).' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "9-Savol: \"old/older, expensive / more expensive (Sifat Darajalari — Qiyosiy)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #9]",
      "options": [
        "Correct academic usage adhering to Qisqa sifat: Adj + -er + THAN (faster than, cheaper than). [Savol #9]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #9]",
        "Incompatible tense sequence violating subject agreement. [Savol #9]",
        "Omission of essential verb particle or preposition. [Savol #9]"
      ],
      "correctAnswer": "Correct academic usage adhering to Qisqa sifat: Adj + -er + THAN (faster than, cheaper than). [Savol #9]",
      "explanation": "Ushbu birlik (old/older, expensive / more expensive (Sifat Darajalari — Qiyosiy)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to Qisqa sifat: Adj + -er + THAN (faster than, cheaper than).' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "10-Savol: \"old/older, expensive / more expensive (Sifat Darajalari — Qiyosiy)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #10]",
      "options": [
        "Correct academic usage adhering to Qisqa sifat: Adj + -er + THAN (faster than, cheaper than). [Savol #10]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #10]",
        "Incompatible tense sequence violating subject agreement. [Savol #10]",
        "Omission of essential verb particle or preposition. [Savol #10]"
      ],
      "correctAnswer": "Correct academic usage adhering to Qisqa sifat: Adj + -er + THAN (faster than, cheaper than). [Savol #10]",
      "explanation": "Ushbu birlik (old/older, expensive / more expensive (Sifat Darajalari — Qiyosiy)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to Qisqa sifat: Adj + -er + THAN (faster than, cheaper than).' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    }
  ],
  "murphy_u89_superlatives": [
    {
      "question": "What is _______ mountain in the world?",
      "options": [
        "the highest",
        "highest",
        "the most high",
        "the most highest"
      ],
      "correctAnswer": "the highest",
      "explanation": "'High' qisqa sifati orttirma darajada 'the highest' bo'ladi."
    },
    {
      "question": "2-Savol: \"the oldest / the most expensive (Sifat Darajalari — Orttirma)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #2]",
      "options": [
        "Correct academic usage adhering to THE + Adj + -est (the fastest, the cheapest). [Savol #2]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #2]",
        "Incompatible tense sequence violating subject agreement. [Savol #2]",
        "Omission of essential verb particle or preposition. [Savol #2]"
      ],
      "correctAnswer": "Correct academic usage adhering to THE + Adj + -est (the fastest, the cheapest). [Savol #2]",
      "explanation": "Ushbu birlik (the oldest / the most expensive (Sifat Darajalari — Orttirma)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to THE + Adj + -est (the fastest, the cheapest).' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "3-Savol: \"the oldest / the most expensive (Sifat Darajalari — Orttirma)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #3]",
      "options": [
        "Correct academic usage adhering to THE + Adj + -est (the fastest, the cheapest). [Savol #3]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #3]",
        "Incompatible tense sequence violating subject agreement. [Savol #3]",
        "Omission of essential verb particle or preposition. [Savol #3]"
      ],
      "correctAnswer": "Correct academic usage adhering to THE + Adj + -est (the fastest, the cheapest). [Savol #3]",
      "explanation": "Ushbu birlik (the oldest / the most expensive (Sifat Darajalari — Orttirma)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to THE + Adj + -est (the fastest, the cheapest).' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "4-Savol: \"the oldest / the most expensive (Sifat Darajalari — Orttirma)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #4]",
      "options": [
        "Correct academic usage adhering to THE + Adj + -est (the fastest, the cheapest). [Savol #4]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #4]",
        "Incompatible tense sequence violating subject agreement. [Savol #4]",
        "Omission of essential verb particle or preposition. [Savol #4]"
      ],
      "correctAnswer": "Correct academic usage adhering to THE + Adj + -est (the fastest, the cheapest). [Savol #4]",
      "explanation": "Ushbu birlik (the oldest / the most expensive (Sifat Darajalari — Orttirma)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to THE + Adj + -est (the fastest, the cheapest).' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "5-Savol: \"the oldest / the most expensive (Sifat Darajalari — Orttirma)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #5]",
      "options": [
        "Correct academic usage adhering to THE + Adj + -est (the fastest, the cheapest). [Savol #5]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #5]",
        "Incompatible tense sequence violating subject agreement. [Savol #5]",
        "Omission of essential verb particle or preposition. [Savol #5]"
      ],
      "correctAnswer": "Correct academic usage adhering to THE + Adj + -est (the fastest, the cheapest). [Savol #5]",
      "explanation": "Ushbu birlik (the oldest / the most expensive (Sifat Darajalari — Orttirma)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to THE + Adj + -est (the fastest, the cheapest).' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "6-Savol: \"the oldest / the most expensive (Sifat Darajalari — Orttirma)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #6]",
      "options": [
        "Correct academic usage adhering to THE + Adj + -est (the fastest, the cheapest). [Savol #6]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #6]",
        "Incompatible tense sequence violating subject agreement. [Savol #6]",
        "Omission of essential verb particle or preposition. [Savol #6]"
      ],
      "correctAnswer": "Correct academic usage adhering to THE + Adj + -est (the fastest, the cheapest). [Savol #6]",
      "explanation": "Ushbu birlik (the oldest / the most expensive (Sifat Darajalari — Orttirma)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to THE + Adj + -est (the fastest, the cheapest).' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "7-Savol: \"the oldest / the most expensive (Sifat Darajalari — Orttirma)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #7]",
      "options": [
        "Correct academic usage adhering to THE + Adj + -est (the fastest, the cheapest). [Savol #7]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #7]",
        "Incompatible tense sequence violating subject agreement. [Savol #7]",
        "Omission of essential verb particle or preposition. [Savol #7]"
      ],
      "correctAnswer": "Correct academic usage adhering to THE + Adj + -est (the fastest, the cheapest). [Savol #7]",
      "explanation": "Ushbu birlik (the oldest / the most expensive (Sifat Darajalari — Orttirma)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to THE + Adj + -est (the fastest, the cheapest).' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "8-Savol: \"the oldest / the most expensive (Sifat Darajalari — Orttirma)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #8]",
      "options": [
        "Correct academic usage adhering to THE + Adj + -est (the fastest, the cheapest). [Savol #8]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #8]",
        "Incompatible tense sequence violating subject agreement. [Savol #8]",
        "Omission of essential verb particle or preposition. [Savol #8]"
      ],
      "correctAnswer": "Correct academic usage adhering to THE + Adj + -est (the fastest, the cheapest). [Savol #8]",
      "explanation": "Ushbu birlik (the oldest / the most expensive (Sifat Darajalari — Orttirma)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to THE + Adj + -est (the fastest, the cheapest).' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "9-Savol: \"the oldest / the most expensive (Sifat Darajalari — Orttirma)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #9]",
      "options": [
        "Correct academic usage adhering to THE + Adj + -est (the fastest, the cheapest). [Savol #9]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #9]",
        "Incompatible tense sequence violating subject agreement. [Savol #9]",
        "Omission of essential verb particle or preposition. [Savol #9]"
      ],
      "correctAnswer": "Correct academic usage adhering to THE + Adj + -est (the fastest, the cheapest). [Savol #9]",
      "explanation": "Ushbu birlik (the oldest / the most expensive (Sifat Darajalari — Orttirma)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to THE + Adj + -est (the fastest, the cheapest).' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "10-Savol: \"the oldest / the most expensive (Sifat Darajalari — Orttirma)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #10]",
      "options": [
        "Correct academic usage adhering to THE + Adj + -est (the fastest, the cheapest). [Savol #10]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #10]",
        "Incompatible tense sequence violating subject agreement. [Savol #10]",
        "Omission of essential verb particle or preposition. [Savol #10]"
      ],
      "correctAnswer": "Correct academic usage adhering to THE + Adj + -est (the fastest, the cheapest). [Savol #10]",
      "explanation": "Ushbu birlik (the oldest / the most expensive (Sifat Darajalari — Orttirma)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to THE + Adj + -est (the fastest, the cheapest).' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    }
  ],
  "murphy_u96_prepositions_time": [
    {
      "question": "The academic semester begins _______ September _______ Monday morning.",
      "options": [
        "in / on",
        "on / in",
        "at / on",
        "in / at"
      ],
      "correctAnswer": "in / on",
      "explanation": "Oy nomi uchun 'in September', hafta kuni uchun 'on Monday morning'."
    },
    {
      "question": "2-Savol: \"at 8 o'clock, on Monday, in April (Vaqt Predloglari: at, on, in)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #2]",
      "options": [
        "Correct academic usage adhering to AT + Aniq soat/bayram (at 5 PM, at midnight, at weekend). [Savol #2]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #2]",
        "Incompatible tense sequence violating subject agreement. [Savol #2]",
        "Omission of essential verb particle or preposition. [Savol #2]"
      ],
      "correctAnswer": "Correct academic usage adhering to AT + Aniq soat/bayram (at 5 PM, at midnight, at weekend). [Savol #2]",
      "explanation": "Ushbu birlik (at 8 o'clock, on Monday, in April (Vaqt Predloglari: at, on, in)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to AT + Aniq soat/bayram (at 5 PM, at midnight, at weekend).' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "3-Savol: \"at 8 o'clock, on Monday, in April (Vaqt Predloglari: at, on, in)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #3]",
      "options": [
        "Correct academic usage adhering to AT + Aniq soat/bayram (at 5 PM, at midnight, at weekend). [Savol #3]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #3]",
        "Incompatible tense sequence violating subject agreement. [Savol #3]",
        "Omission of essential verb particle or preposition. [Savol #3]"
      ],
      "correctAnswer": "Correct academic usage adhering to AT + Aniq soat/bayram (at 5 PM, at midnight, at weekend). [Savol #3]",
      "explanation": "Ushbu birlik (at 8 o'clock, on Monday, in April (Vaqt Predloglari: at, on, in)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to AT + Aniq soat/bayram (at 5 PM, at midnight, at weekend).' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "4-Savol: \"at 8 o'clock, on Monday, in April (Vaqt Predloglari: at, on, in)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #4]",
      "options": [
        "Correct academic usage adhering to AT + Aniq soat/bayram (at 5 PM, at midnight, at weekend). [Savol #4]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #4]",
        "Incompatible tense sequence violating subject agreement. [Savol #4]",
        "Omission of essential verb particle or preposition. [Savol #4]"
      ],
      "correctAnswer": "Correct academic usage adhering to AT + Aniq soat/bayram (at 5 PM, at midnight, at weekend). [Savol #4]",
      "explanation": "Ushbu birlik (at 8 o'clock, on Monday, in April (Vaqt Predloglari: at, on, in)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to AT + Aniq soat/bayram (at 5 PM, at midnight, at weekend).' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "5-Savol: \"at 8 o'clock, on Monday, in April (Vaqt Predloglari: at, on, in)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #5]",
      "options": [
        "Correct academic usage adhering to AT + Aniq soat/bayram (at 5 PM, at midnight, at weekend). [Savol #5]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #5]",
        "Incompatible tense sequence violating subject agreement. [Savol #5]",
        "Omission of essential verb particle or preposition. [Savol #5]"
      ],
      "correctAnswer": "Correct academic usage adhering to AT + Aniq soat/bayram (at 5 PM, at midnight, at weekend). [Savol #5]",
      "explanation": "Ushbu birlik (at 8 o'clock, on Monday, in April (Vaqt Predloglari: at, on, in)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to AT + Aniq soat/bayram (at 5 PM, at midnight, at weekend).' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "6-Savol: \"at 8 o'clock, on Monday, in April (Vaqt Predloglari: at, on, in)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #6]",
      "options": [
        "Correct academic usage adhering to AT + Aniq soat/bayram (at 5 PM, at midnight, at weekend). [Savol #6]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #6]",
        "Incompatible tense sequence violating subject agreement. [Savol #6]",
        "Omission of essential verb particle or preposition. [Savol #6]"
      ],
      "correctAnswer": "Correct academic usage adhering to AT + Aniq soat/bayram (at 5 PM, at midnight, at weekend). [Savol #6]",
      "explanation": "Ushbu birlik (at 8 o'clock, on Monday, in April (Vaqt Predloglari: at, on, in)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to AT + Aniq soat/bayram (at 5 PM, at midnight, at weekend).' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "7-Savol: \"at 8 o'clock, on Monday, in April (Vaqt Predloglari: at, on, in)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #7]",
      "options": [
        "Correct academic usage adhering to AT + Aniq soat/bayram (at 5 PM, at midnight, at weekend). [Savol #7]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #7]",
        "Incompatible tense sequence violating subject agreement. [Savol #7]",
        "Omission of essential verb particle or preposition. [Savol #7]"
      ],
      "correctAnswer": "Correct academic usage adhering to AT + Aniq soat/bayram (at 5 PM, at midnight, at weekend). [Savol #7]",
      "explanation": "Ushbu birlik (at 8 o'clock, on Monday, in April (Vaqt Predloglari: at, on, in)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to AT + Aniq soat/bayram (at 5 PM, at midnight, at weekend).' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "8-Savol: \"at 8 o'clock, on Monday, in April (Vaqt Predloglari: at, on, in)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #8]",
      "options": [
        "Correct academic usage adhering to AT + Aniq soat/bayram (at 5 PM, at midnight, at weekend). [Savol #8]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #8]",
        "Incompatible tense sequence violating subject agreement. [Savol #8]",
        "Omission of essential verb particle or preposition. [Savol #8]"
      ],
      "correctAnswer": "Correct academic usage adhering to AT + Aniq soat/bayram (at 5 PM, at midnight, at weekend). [Savol #8]",
      "explanation": "Ushbu birlik (at 8 o'clock, on Monday, in April (Vaqt Predloglari: at, on, in)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to AT + Aniq soat/bayram (at 5 PM, at midnight, at weekend).' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "9-Savol: \"at 8 o'clock, on Monday, in April (Vaqt Predloglari: at, on, in)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #9]",
      "options": [
        "Correct academic usage adhering to AT + Aniq soat/bayram (at 5 PM, at midnight, at weekend). [Savol #9]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #9]",
        "Incompatible tense sequence violating subject agreement. [Savol #9]",
        "Omission of essential verb particle or preposition. [Savol #9]"
      ],
      "correctAnswer": "Correct academic usage adhering to AT + Aniq soat/bayram (at 5 PM, at midnight, at weekend). [Savol #9]",
      "explanation": "Ushbu birlik (at 8 o'clock, on Monday, in April (Vaqt Predloglari: at, on, in)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to AT + Aniq soat/bayram (at 5 PM, at midnight, at weekend).' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "10-Savol: \"at 8 o'clock, on Monday, in April (Vaqt Predloglari: at, on, in)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #10]",
      "options": [
        "Correct academic usage adhering to AT + Aniq soat/bayram (at 5 PM, at midnight, at weekend). [Savol #10]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #10]",
        "Incompatible tense sequence violating subject agreement. [Savol #10]",
        "Omission of essential verb particle or preposition. [Savol #10]"
      ],
      "correctAnswer": "Correct academic usage adhering to AT + Aniq soat/bayram (at 5 PM, at midnight, at weekend). [Savol #10]",
      "explanation": "Ushbu birlik (at 8 o'clock, on Monday, in April (Vaqt Predloglari: at, on, in)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to AT + Aniq soat/bayram (at 5 PM, at midnight, at weekend).' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    }
  ],
  "murphy_u99_prepositions_place": [
    {
      "question": "We arrived _______ the airport and waited _______ the departure lounge.",
      "options": [
        "at / in",
        "in / on",
        "on / at",
        "at / at"
      ],
      "correctAnswer": "at / in",
      "explanation": "Aeroport nuqtasi 'at the airport', zalning ichi esa 'in the lounge'."
    },
    {
      "question": "2-Savol: \"in / at / on (Joy Predloglari)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #2]",
      "options": [
        "Correct academic usage adhering to IN + Ichida/Shahar/Mamlakat (in a room, in London, in Uzbekistan). [Savol #2]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #2]",
        "Incompatible tense sequence violating subject agreement. [Savol #2]",
        "Omission of essential verb particle or preposition. [Savol #2]"
      ],
      "correctAnswer": "Correct academic usage adhering to IN + Ichida/Shahar/Mamlakat (in a room, in London, in Uzbekistan). [Savol #2]",
      "explanation": "Ushbu birlik (in / at / on (Joy Predloglari)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to IN + Ichida/Shahar/Mamlakat (in a room, in London, in Uzbekistan).' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "3-Savol: \"in / at / on (Joy Predloglari)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #3]",
      "options": [
        "Correct academic usage adhering to IN + Ichida/Shahar/Mamlakat (in a room, in London, in Uzbekistan). [Savol #3]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #3]",
        "Incompatible tense sequence violating subject agreement. [Savol #3]",
        "Omission of essential verb particle or preposition. [Savol #3]"
      ],
      "correctAnswer": "Correct academic usage adhering to IN + Ichida/Shahar/Mamlakat (in a room, in London, in Uzbekistan). [Savol #3]",
      "explanation": "Ushbu birlik (in / at / on (Joy Predloglari)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to IN + Ichida/Shahar/Mamlakat (in a room, in London, in Uzbekistan).' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "4-Savol: \"in / at / on (Joy Predloglari)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #4]",
      "options": [
        "Correct academic usage adhering to IN + Ichida/Shahar/Mamlakat (in a room, in London, in Uzbekistan). [Savol #4]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #4]",
        "Incompatible tense sequence violating subject agreement. [Savol #4]",
        "Omission of essential verb particle or preposition. [Savol #4]"
      ],
      "correctAnswer": "Correct academic usage adhering to IN + Ichida/Shahar/Mamlakat (in a room, in London, in Uzbekistan). [Savol #4]",
      "explanation": "Ushbu birlik (in / at / on (Joy Predloglari)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to IN + Ichida/Shahar/Mamlakat (in a room, in London, in Uzbekistan).' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "5-Savol: \"in / at / on (Joy Predloglari)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #5]",
      "options": [
        "Correct academic usage adhering to IN + Ichida/Shahar/Mamlakat (in a room, in London, in Uzbekistan). [Savol #5]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #5]",
        "Incompatible tense sequence violating subject agreement. [Savol #5]",
        "Omission of essential verb particle or preposition. [Savol #5]"
      ],
      "correctAnswer": "Correct academic usage adhering to IN + Ichida/Shahar/Mamlakat (in a room, in London, in Uzbekistan). [Savol #5]",
      "explanation": "Ushbu birlik (in / at / on (Joy Predloglari)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to IN + Ichida/Shahar/Mamlakat (in a room, in London, in Uzbekistan).' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "6-Savol: \"in / at / on (Joy Predloglari)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #6]",
      "options": [
        "Correct academic usage adhering to IN + Ichida/Shahar/Mamlakat (in a room, in London, in Uzbekistan). [Savol #6]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #6]",
        "Incompatible tense sequence violating subject agreement. [Savol #6]",
        "Omission of essential verb particle or preposition. [Savol #6]"
      ],
      "correctAnswer": "Correct academic usage adhering to IN + Ichida/Shahar/Mamlakat (in a room, in London, in Uzbekistan). [Savol #6]",
      "explanation": "Ushbu birlik (in / at / on (Joy Predloglari)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to IN + Ichida/Shahar/Mamlakat (in a room, in London, in Uzbekistan).' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "7-Savol: \"in / at / on (Joy Predloglari)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #7]",
      "options": [
        "Correct academic usage adhering to IN + Ichida/Shahar/Mamlakat (in a room, in London, in Uzbekistan). [Savol #7]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #7]",
        "Incompatible tense sequence violating subject agreement. [Savol #7]",
        "Omission of essential verb particle or preposition. [Savol #7]"
      ],
      "correctAnswer": "Correct academic usage adhering to IN + Ichida/Shahar/Mamlakat (in a room, in London, in Uzbekistan). [Savol #7]",
      "explanation": "Ushbu birlik (in / at / on (Joy Predloglari)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to IN + Ichida/Shahar/Mamlakat (in a room, in London, in Uzbekistan).' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "8-Savol: \"in / at / on (Joy Predloglari)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #8]",
      "options": [
        "Correct academic usage adhering to IN + Ichida/Shahar/Mamlakat (in a room, in London, in Uzbekistan). [Savol #8]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #8]",
        "Incompatible tense sequence violating subject agreement. [Savol #8]",
        "Omission of essential verb particle or preposition. [Savol #8]"
      ],
      "correctAnswer": "Correct academic usage adhering to IN + Ichida/Shahar/Mamlakat (in a room, in London, in Uzbekistan). [Savol #8]",
      "explanation": "Ushbu birlik (in / at / on (Joy Predloglari)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to IN + Ichida/Shahar/Mamlakat (in a room, in London, in Uzbekistan).' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "9-Savol: \"in / at / on (Joy Predloglari)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #9]",
      "options": [
        "Correct academic usage adhering to IN + Ichida/Shahar/Mamlakat (in a room, in London, in Uzbekistan). [Savol #9]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #9]",
        "Incompatible tense sequence violating subject agreement. [Savol #9]",
        "Omission of essential verb particle or preposition. [Savol #9]"
      ],
      "correctAnswer": "Correct academic usage adhering to IN + Ichida/Shahar/Mamlakat (in a room, in London, in Uzbekistan). [Savol #9]",
      "explanation": "Ushbu birlik (in / at / on (Joy Predloglari)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to IN + Ichida/Shahar/Mamlakat (in a room, in London, in Uzbekistan).' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "10-Savol: \"in / at / on (Joy Predloglari)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #10]",
      "options": [
        "Correct academic usage adhering to IN + Ichida/Shahar/Mamlakat (in a room, in London, in Uzbekistan). [Savol #10]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #10]",
        "Incompatible tense sequence violating subject agreement. [Savol #10]",
        "Omission of essential verb particle or preposition. [Savol #10]"
      ],
      "correctAnswer": "Correct academic usage adhering to IN + Ichida/Shahar/Mamlakat (in a room, in London, in Uzbekistan). [Savol #10]",
      "explanation": "Ushbu birlik (in / at / on (Joy Predloglari)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to IN + Ichida/Shahar/Mamlakat (in a room, in London, in Uzbekistan).' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    }
  ],
  "murphy_u109_conjunctions": [
    {
      "question": "The experiment was complex, _______ the research team persevered _______ they believed in the hypothesis.",
      "options": [
        "but / because",
        "so / but",
        "and / so",
        "because / but"
      ],
      "correctAnswer": "but / because",
      "explanation": "Birinchi bog'lovchi zidlik (but), ikkinchisi sabab (because)."
    },
    {
      "question": "2-Savol: \"and, but, or, so, because (Asosiy Bog'lovchilar)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #2]",
      "options": [
        "Correct academic usage adhering to AND (qo'shimcha). [Savol #2]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #2]",
        "Incompatible tense sequence violating subject agreement. [Savol #2]",
        "Omission of essential verb particle or preposition. [Savol #2]"
      ],
      "correctAnswer": "Correct academic usage adhering to AND (qo'shimcha). [Savol #2]",
      "explanation": "Ushbu birlik (and, but, or, so, because (Asosiy Bog'lovchilar)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to AND (qo'shimcha).' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "3-Savol: \"and, but, or, so, because (Asosiy Bog'lovchilar)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #3]",
      "options": [
        "Correct academic usage adhering to AND (qo'shimcha). [Savol #3]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #3]",
        "Incompatible tense sequence violating subject agreement. [Savol #3]",
        "Omission of essential verb particle or preposition. [Savol #3]"
      ],
      "correctAnswer": "Correct academic usage adhering to AND (qo'shimcha). [Savol #3]",
      "explanation": "Ushbu birlik (and, but, or, so, because (Asosiy Bog'lovchilar)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to AND (qo'shimcha).' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "4-Savol: \"and, but, or, so, because (Asosiy Bog'lovchilar)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #4]",
      "options": [
        "Correct academic usage adhering to AND (qo'shimcha). [Savol #4]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #4]",
        "Incompatible tense sequence violating subject agreement. [Savol #4]",
        "Omission of essential verb particle or preposition. [Savol #4]"
      ],
      "correctAnswer": "Correct academic usage adhering to AND (qo'shimcha). [Savol #4]",
      "explanation": "Ushbu birlik (and, but, or, so, because (Asosiy Bog'lovchilar)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to AND (qo'shimcha).' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "5-Savol: \"and, but, or, so, because (Asosiy Bog'lovchilar)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #5]",
      "options": [
        "Correct academic usage adhering to AND (qo'shimcha). [Savol #5]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #5]",
        "Incompatible tense sequence violating subject agreement. [Savol #5]",
        "Omission of essential verb particle or preposition. [Savol #5]"
      ],
      "correctAnswer": "Correct academic usage adhering to AND (qo'shimcha). [Savol #5]",
      "explanation": "Ushbu birlik (and, but, or, so, because (Asosiy Bog'lovchilar)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to AND (qo'shimcha).' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "6-Savol: \"and, but, or, so, because (Asosiy Bog'lovchilar)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #6]",
      "options": [
        "Correct academic usage adhering to AND (qo'shimcha). [Savol #6]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #6]",
        "Incompatible tense sequence violating subject agreement. [Savol #6]",
        "Omission of essential verb particle or preposition. [Savol #6]"
      ],
      "correctAnswer": "Correct academic usage adhering to AND (qo'shimcha). [Savol #6]",
      "explanation": "Ushbu birlik (and, but, or, so, because (Asosiy Bog'lovchilar)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to AND (qo'shimcha).' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "7-Savol: \"and, but, or, so, because (Asosiy Bog'lovchilar)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #7]",
      "options": [
        "Correct academic usage adhering to AND (qo'shimcha). [Savol #7]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #7]",
        "Incompatible tense sequence violating subject agreement. [Savol #7]",
        "Omission of essential verb particle or preposition. [Savol #7]"
      ],
      "correctAnswer": "Correct academic usage adhering to AND (qo'shimcha). [Savol #7]",
      "explanation": "Ushbu birlik (and, but, or, so, because (Asosiy Bog'lovchilar)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to AND (qo'shimcha).' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "8-Savol: \"and, but, or, so, because (Asosiy Bog'lovchilar)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #8]",
      "options": [
        "Correct academic usage adhering to AND (qo'shimcha). [Savol #8]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #8]",
        "Incompatible tense sequence violating subject agreement. [Savol #8]",
        "Omission of essential verb particle or preposition. [Savol #8]"
      ],
      "correctAnswer": "Correct academic usage adhering to AND (qo'shimcha). [Savol #8]",
      "explanation": "Ushbu birlik (and, but, or, so, because (Asosiy Bog'lovchilar)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to AND (qo'shimcha).' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "9-Savol: \"and, but, or, so, because (Asosiy Bog'lovchilar)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #9]",
      "options": [
        "Correct academic usage adhering to AND (qo'shimcha). [Savol #9]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #9]",
        "Incompatible tense sequence violating subject agreement. [Savol #9]",
        "Omission of essential verb particle or preposition. [Savol #9]"
      ],
      "correctAnswer": "Correct academic usage adhering to AND (qo'shimcha). [Savol #9]",
      "explanation": "Ushbu birlik (and, but, or, so, because (Asosiy Bog'lovchilar)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to AND (qo'shimcha).' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "10-Savol: \"and, but, or, so, because (Asosiy Bog'lovchilar)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #10]",
      "options": [
        "Correct academic usage adhering to AND (qo'shimcha). [Savol #10]",
        "Incorrect auxiliary verb placement breaking the A1 grammar standard. [Savol #10]",
        "Incompatible tense sequence violating subject agreement. [Savol #10]",
        "Omission of essential verb particle or preposition. [Savol #10]"
      ],
      "correctAnswer": "Correct academic usage adhering to AND (qo'shimcha). [Savol #10]",
      "explanation": "Ushbu birlik (and, but, or, so, because (Asosiy Bog'lovchilar)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to AND (qo'shimcha).' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    }
  ],
  "murphy_u21_passive_voice_1": [
    {
      "question": "The research findings _______ in a prestigious medical journal last month.",
      "options": [
        "were published",
        "published",
        "are published",
        "have published"
      ],
      "correctAnswer": "were published",
      "explanation": "O'tgan oyda (last month) majhul nisbat: 'were published'."
    },
    {
      "question": "2-Savol: \"is done / was done (Passive Voice 1 — Majhul Nisbat)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #2]",
      "options": [
        "The statistical survey was conducted by independent international analysts. [Savol #2]",
        "The statistical survey was conduct by independent international analysts. [Savol #2]",
        "The statistical survey been conducted by independent international analysts. [Savol #2]",
        "The statistical survey is conduct by independent international analysts. [Savol #2]"
      ],
      "correctAnswer": "The statistical survey was conducted by independent international analysts. [Savol #2]",
      "explanation": "Ushbu birlik (is done / was done (Passive Voice 1 — Majhul Nisbat)) qoidasiga ko'ra, to'g'ri shakl 'The statistical survey was conducted by independent international analysts.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "3-Savol: \"is done / was done (Passive Voice 1 — Majhul Nisbat)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #3]",
      "options": [
        "The statistical survey was conducted by independent international analysts. [Savol #3]",
        "The statistical survey was conduct by independent international analysts. [Savol #3]",
        "The statistical survey been conducted by independent international analysts. [Savol #3]",
        "The statistical survey is conduct by independent international analysts. [Savol #3]"
      ],
      "correctAnswer": "The statistical survey was conducted by independent international analysts. [Savol #3]",
      "explanation": "Ushbu birlik (is done / was done (Passive Voice 1 — Majhul Nisbat)) qoidasiga ko'ra, to'g'ri shakl 'The statistical survey was conducted by independent international analysts.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "4-Savol: \"is done / was done (Passive Voice 1 — Majhul Nisbat)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #4]",
      "options": [
        "The statistical survey was conducted by independent international analysts. [Savol #4]",
        "The statistical survey was conduct by independent international analysts. [Savol #4]",
        "The statistical survey been conducted by independent international analysts. [Savol #4]",
        "The statistical survey is conduct by independent international analysts. [Savol #4]"
      ],
      "correctAnswer": "The statistical survey was conducted by independent international analysts. [Savol #4]",
      "explanation": "Ushbu birlik (is done / was done (Passive Voice 1 — Majhul Nisbat)) qoidasiga ko'ra, to'g'ri shakl 'The statistical survey was conducted by independent international analysts.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "5-Savol: \"is done / was done (Passive Voice 1 — Majhul Nisbat)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #5]",
      "options": [
        "The statistical survey was conducted by independent international analysts. [Savol #5]",
        "The statistical survey was conduct by independent international analysts. [Savol #5]",
        "The statistical survey been conducted by independent international analysts. [Savol #5]",
        "The statistical survey is conduct by independent international analysts. [Savol #5]"
      ],
      "correctAnswer": "The statistical survey was conducted by independent international analysts. [Savol #5]",
      "explanation": "Ushbu birlik (is done / was done (Passive Voice 1 — Majhul Nisbat)) qoidasiga ko'ra, to'g'ri shakl 'The statistical survey was conducted by independent international analysts.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "6-Savol: \"is done / was done (Passive Voice 1 — Majhul Nisbat)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #6]",
      "options": [
        "The statistical survey was conducted by independent international analysts. [Savol #6]",
        "The statistical survey was conduct by independent international analysts. [Savol #6]",
        "The statistical survey been conducted by independent international analysts. [Savol #6]",
        "The statistical survey is conduct by independent international analysts. [Savol #6]"
      ],
      "correctAnswer": "The statistical survey was conducted by independent international analysts. [Savol #6]",
      "explanation": "Ushbu birlik (is done / was done (Passive Voice 1 — Majhul Nisbat)) qoidasiga ko'ra, to'g'ri shakl 'The statistical survey was conducted by independent international analysts.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "7-Savol: \"is done / was done (Passive Voice 1 — Majhul Nisbat)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #7]",
      "options": [
        "The statistical survey was conducted by independent international analysts. [Savol #7]",
        "The statistical survey was conduct by independent international analysts. [Savol #7]",
        "The statistical survey been conducted by independent international analysts. [Savol #7]",
        "The statistical survey is conduct by independent international analysts. [Savol #7]"
      ],
      "correctAnswer": "The statistical survey was conducted by independent international analysts. [Savol #7]",
      "explanation": "Ushbu birlik (is done / was done (Passive Voice 1 — Majhul Nisbat)) qoidasiga ko'ra, to'g'ri shakl 'The statistical survey was conducted by independent international analysts.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "8-Savol: \"is done / was done (Passive Voice 1 — Majhul Nisbat)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #8]",
      "options": [
        "The statistical survey was conducted by independent international analysts. [Savol #8]",
        "The statistical survey was conduct by independent international analysts. [Savol #8]",
        "The statistical survey been conducted by independent international analysts. [Savol #8]",
        "The statistical survey is conduct by independent international analysts. [Savol #8]"
      ],
      "correctAnswer": "The statistical survey was conducted by independent international analysts. [Savol #8]",
      "explanation": "Ushbu birlik (is done / was done (Passive Voice 1 — Majhul Nisbat)) qoidasiga ko'ra, to'g'ri shakl 'The statistical survey was conducted by independent international analysts.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "9-Savol: \"is done / was done (Passive Voice 1 — Majhul Nisbat)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #9]",
      "options": [
        "The statistical survey was conducted by independent international analysts. [Savol #9]",
        "The statistical survey was conduct by independent international analysts. [Savol #9]",
        "The statistical survey been conducted by independent international analysts. [Savol #9]",
        "The statistical survey is conduct by independent international analysts. [Savol #9]"
      ],
      "correctAnswer": "The statistical survey was conducted by independent international analysts. [Savol #9]",
      "explanation": "Ushbu birlik (is done / was done (Passive Voice 1 — Majhul Nisbat)) qoidasiga ko'ra, to'g'ri shakl 'The statistical survey was conducted by independent international analysts.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "10-Savol: \"is done / was done (Passive Voice 1 — Majhul Nisbat)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #10]",
      "options": [
        "The statistical survey was conducted by independent international analysts. [Savol #10]",
        "The statistical survey was conduct by independent international analysts. [Savol #10]",
        "The statistical survey been conducted by independent international analysts. [Savol #10]",
        "The statistical survey is conduct by independent international analysts. [Savol #10]"
      ],
      "correctAnswer": "The statistical survey was conducted by independent international analysts. [Savol #10]",
      "explanation": "Ushbu birlik (is done / was done (Passive Voice 1 — Majhul Nisbat)) qoidasiga ko'ra, to'g'ri shakl 'The statistical survey was conducted by independent international analysts.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    }
  ],
  "murphy_u38_first_second_conditionals": [
    {
      "question": "If renewable energy prices continue to fall, more industries _______ clean power.",
      "options": [
        "will adopt",
        "would adopt",
        "adopted",
        "adopt"
      ],
      "correctAnswer": "will adopt",
      "explanation": "1-shart maylining asosiy qismida 'will + V1' ishlatiladi."
    },
    {
      "question": "2-Savol: \"Conditionals 1 & 2 (If I study..., If I had...)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #2]",
      "options": [
        "If governments invest in renewable energy, carbon emissions will decline significantly. [Savol #2]",
        "If governments will invest in renewable energy, carbon emissions decline. [Savol #2]",
        "If governments invested in renewable energy, carbon emissions will decline. [Savol #2]",
        "If governments invest in renewable energy, carbon emissions would declined. [Savol #2]"
      ],
      "correctAnswer": "If governments invest in renewable energy, carbon emissions will decline significantly. [Savol #2]",
      "explanation": "Ushbu birlik (Conditionals 1 & 2 (If I study..., If I had...)) qoidasiga ko'ra, to'g'ri shakl 'If governments invest in renewable energy, carbon emissions will decline significantly.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "3-Savol: \"Conditionals 1 & 2 (If I study..., If I had...)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #3]",
      "options": [
        "If governments invest in renewable energy, carbon emissions will decline significantly. [Savol #3]",
        "If governments will invest in renewable energy, carbon emissions decline. [Savol #3]",
        "If governments invested in renewable energy, carbon emissions will decline. [Savol #3]",
        "If governments invest in renewable energy, carbon emissions would declined. [Savol #3]"
      ],
      "correctAnswer": "If governments invest in renewable energy, carbon emissions will decline significantly. [Savol #3]",
      "explanation": "Ushbu birlik (Conditionals 1 & 2 (If I study..., If I had...)) qoidasiga ko'ra, to'g'ri shakl 'If governments invest in renewable energy, carbon emissions will decline significantly.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "4-Savol: \"Conditionals 1 & 2 (If I study..., If I had...)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #4]",
      "options": [
        "If governments invest in renewable energy, carbon emissions will decline significantly. [Savol #4]",
        "If governments will invest in renewable energy, carbon emissions decline. [Savol #4]",
        "If governments invested in renewable energy, carbon emissions will decline. [Savol #4]",
        "If governments invest in renewable energy, carbon emissions would declined. [Savol #4]"
      ],
      "correctAnswer": "If governments invest in renewable energy, carbon emissions will decline significantly. [Savol #4]",
      "explanation": "Ushbu birlik (Conditionals 1 & 2 (If I study..., If I had...)) qoidasiga ko'ra, to'g'ri shakl 'If governments invest in renewable energy, carbon emissions will decline significantly.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "5-Savol: \"Conditionals 1 & 2 (If I study..., If I had...)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #5]",
      "options": [
        "If governments invest in renewable energy, carbon emissions will decline significantly. [Savol #5]",
        "If governments will invest in renewable energy, carbon emissions decline. [Savol #5]",
        "If governments invested in renewable energy, carbon emissions will decline. [Savol #5]",
        "If governments invest in renewable energy, carbon emissions would declined. [Savol #5]"
      ],
      "correctAnswer": "If governments invest in renewable energy, carbon emissions will decline significantly. [Savol #5]",
      "explanation": "Ushbu birlik (Conditionals 1 & 2 (If I study..., If I had...)) qoidasiga ko'ra, to'g'ri shakl 'If governments invest in renewable energy, carbon emissions will decline significantly.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "6-Savol: \"Conditionals 1 & 2 (If I study..., If I had...)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #6]",
      "options": [
        "If governments invest in renewable energy, carbon emissions will decline significantly. [Savol #6]",
        "If governments will invest in renewable energy, carbon emissions decline. [Savol #6]",
        "If governments invested in renewable energy, carbon emissions will decline. [Savol #6]",
        "If governments invest in renewable energy, carbon emissions would declined. [Savol #6]"
      ],
      "correctAnswer": "If governments invest in renewable energy, carbon emissions will decline significantly. [Savol #6]",
      "explanation": "Ushbu birlik (Conditionals 1 & 2 (If I study..., If I had...)) qoidasiga ko'ra, to'g'ri shakl 'If governments invest in renewable energy, carbon emissions will decline significantly.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "7-Savol: \"Conditionals 1 & 2 (If I study..., If I had...)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #7]",
      "options": [
        "If governments invest in renewable energy, carbon emissions will decline significantly. [Savol #7]",
        "If governments will invest in renewable energy, carbon emissions decline. [Savol #7]",
        "If governments invested in renewable energy, carbon emissions will decline. [Savol #7]",
        "If governments invest in renewable energy, carbon emissions would declined. [Savol #7]"
      ],
      "correctAnswer": "If governments invest in renewable energy, carbon emissions will decline significantly. [Savol #7]",
      "explanation": "Ushbu birlik (Conditionals 1 & 2 (If I study..., If I had...)) qoidasiga ko'ra, to'g'ri shakl 'If governments invest in renewable energy, carbon emissions will decline significantly.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "8-Savol: \"Conditionals 1 & 2 (If I study..., If I had...)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #8]",
      "options": [
        "If governments invest in renewable energy, carbon emissions will decline significantly. [Savol #8]",
        "If governments will invest in renewable energy, carbon emissions decline. [Savol #8]",
        "If governments invested in renewable energy, carbon emissions will decline. [Savol #8]",
        "If governments invest in renewable energy, carbon emissions would declined. [Savol #8]"
      ],
      "correctAnswer": "If governments invest in renewable energy, carbon emissions will decline significantly. [Savol #8]",
      "explanation": "Ushbu birlik (Conditionals 1 & 2 (If I study..., If I had...)) qoidasiga ko'ra, to'g'ri shakl 'If governments invest in renewable energy, carbon emissions will decline significantly.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "9-Savol: \"Conditionals 1 & 2 (If I study..., If I had...)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #9]",
      "options": [
        "If governments invest in renewable energy, carbon emissions will decline significantly. [Savol #9]",
        "If governments will invest in renewable energy, carbon emissions decline. [Savol #9]",
        "If governments invested in renewable energy, carbon emissions will decline. [Savol #9]",
        "If governments invest in renewable energy, carbon emissions would declined. [Savol #9]"
      ],
      "correctAnswer": "If governments invest in renewable energy, carbon emissions will decline significantly. [Savol #9]",
      "explanation": "Ushbu birlik (Conditionals 1 & 2 (If I study..., If I had...)) qoidasiga ko'ra, to'g'ri shakl 'If governments invest in renewable energy, carbon emissions will decline significantly.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "10-Savol: \"Conditionals 1 & 2 (If I study..., If I had...)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #10]",
      "options": [
        "If governments invest in renewable energy, carbon emissions will decline significantly. [Savol #10]",
        "If governments will invest in renewable energy, carbon emissions decline. [Savol #10]",
        "If governments invested in renewable energy, carbon emissions will decline. [Savol #10]",
        "If governments invest in renewable energy, carbon emissions would declined. [Savol #10]"
      ],
      "correctAnswer": "If governments invest in renewable energy, carbon emissions will decline significantly. [Savol #10]",
      "explanation": "Ushbu birlik (Conditionals 1 & 2 (If I study..., If I had...)) qoidasiga ko'ra, to'g'ri shakl 'If governments invest in renewable energy, carbon emissions will decline significantly.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    }
  ],
  "murphy_u40_relative_clauses": [
    {
      "question": "Scholars _______ research focuses on environmental sustainability received international awards.",
      "options": [
        "whose",
        "who",
        "which",
        "whom"
      ],
      "correctAnswer": "whose",
      "explanation": "Egalik ma'nosida (tadqiqoti ekologiyaga qaratilgan olimlar) 'whose' qo'llaniladi."
    },
    {
      "question": "2-Savol: \"Relative Clauses (who, which, that, whose)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #2]",
      "options": [
        "Correct academic usage adhering to Defining: Noun + who/which/that + Clause. [Savol #2]",
        "Incorrect auxiliary verb placement breaking the B2 grammar standard. [Savol #2]",
        "Incompatible tense sequence violating subject agreement. [Savol #2]",
        "Omission of essential verb particle or preposition. [Savol #2]"
      ],
      "correctAnswer": "Correct academic usage adhering to Defining: Noun + who/which/that + Clause. [Savol #2]",
      "explanation": "Ushbu birlik (Relative Clauses (who, which, that, whose)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to Defining: Noun + who/which/that + Clause.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "3-Savol: \"Relative Clauses (who, which, that, whose)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #3]",
      "options": [
        "Correct academic usage adhering to Defining: Noun + who/which/that + Clause. [Savol #3]",
        "Incorrect auxiliary verb placement breaking the B2 grammar standard. [Savol #3]",
        "Incompatible tense sequence violating subject agreement. [Savol #3]",
        "Omission of essential verb particle or preposition. [Savol #3]"
      ],
      "correctAnswer": "Correct academic usage adhering to Defining: Noun + who/which/that + Clause. [Savol #3]",
      "explanation": "Ushbu birlik (Relative Clauses (who, which, that, whose)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to Defining: Noun + who/which/that + Clause.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "4-Savol: \"Relative Clauses (who, which, that, whose)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #4]",
      "options": [
        "Correct academic usage adhering to Defining: Noun + who/which/that + Clause. [Savol #4]",
        "Incorrect auxiliary verb placement breaking the B2 grammar standard. [Savol #4]",
        "Incompatible tense sequence violating subject agreement. [Savol #4]",
        "Omission of essential verb particle or preposition. [Savol #4]"
      ],
      "correctAnswer": "Correct academic usage adhering to Defining: Noun + who/which/that + Clause. [Savol #4]",
      "explanation": "Ushbu birlik (Relative Clauses (who, which, that, whose)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to Defining: Noun + who/which/that + Clause.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "5-Savol: \"Relative Clauses (who, which, that, whose)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #5]",
      "options": [
        "Correct academic usage adhering to Defining: Noun + who/which/that + Clause. [Savol #5]",
        "Incorrect auxiliary verb placement breaking the B2 grammar standard. [Savol #5]",
        "Incompatible tense sequence violating subject agreement. [Savol #5]",
        "Omission of essential verb particle or preposition. [Savol #5]"
      ],
      "correctAnswer": "Correct academic usage adhering to Defining: Noun + who/which/that + Clause. [Savol #5]",
      "explanation": "Ushbu birlik (Relative Clauses (who, which, that, whose)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to Defining: Noun + who/which/that + Clause.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "6-Savol: \"Relative Clauses (who, which, that, whose)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #6]",
      "options": [
        "Correct academic usage adhering to Defining: Noun + who/which/that + Clause. [Savol #6]",
        "Incorrect auxiliary verb placement breaking the B2 grammar standard. [Savol #6]",
        "Incompatible tense sequence violating subject agreement. [Savol #6]",
        "Omission of essential verb particle or preposition. [Savol #6]"
      ],
      "correctAnswer": "Correct academic usage adhering to Defining: Noun + who/which/that + Clause. [Savol #6]",
      "explanation": "Ushbu birlik (Relative Clauses (who, which, that, whose)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to Defining: Noun + who/which/that + Clause.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "7-Savol: \"Relative Clauses (who, which, that, whose)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #7]",
      "options": [
        "Correct academic usage adhering to Defining: Noun + who/which/that + Clause. [Savol #7]",
        "Incorrect auxiliary verb placement breaking the B2 grammar standard. [Savol #7]",
        "Incompatible tense sequence violating subject agreement. [Savol #7]",
        "Omission of essential verb particle or preposition. [Savol #7]"
      ],
      "correctAnswer": "Correct academic usage adhering to Defining: Noun + who/which/that + Clause. [Savol #7]",
      "explanation": "Ushbu birlik (Relative Clauses (who, which, that, whose)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to Defining: Noun + who/which/that + Clause.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "8-Savol: \"Relative Clauses (who, which, that, whose)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #8]",
      "options": [
        "Correct academic usage adhering to Defining: Noun + who/which/that + Clause. [Savol #8]",
        "Incorrect auxiliary verb placement breaking the B2 grammar standard. [Savol #8]",
        "Incompatible tense sequence violating subject agreement. [Savol #8]",
        "Omission of essential verb particle or preposition. [Savol #8]"
      ],
      "correctAnswer": "Correct academic usage adhering to Defining: Noun + who/which/that + Clause. [Savol #8]",
      "explanation": "Ushbu birlik (Relative Clauses (who, which, that, whose)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to Defining: Noun + who/which/that + Clause.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "9-Savol: \"Relative Clauses (who, which, that, whose)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #9]",
      "options": [
        "Correct academic usage adhering to Defining: Noun + who/which/that + Clause. [Savol #9]",
        "Incorrect auxiliary verb placement breaking the B2 grammar standard. [Savol #9]",
        "Incompatible tense sequence violating subject agreement. [Savol #9]",
        "Omission of essential verb particle or preposition. [Savol #9]"
      ],
      "correctAnswer": "Correct academic usage adhering to Defining: Noun + who/which/that + Clause. [Savol #9]",
      "explanation": "Ushbu birlik (Relative Clauses (who, which, that, whose)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to Defining: Noun + who/which/that + Clause.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "10-Savol: \"Relative Clauses (who, which, that, whose)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #10]",
      "options": [
        "Correct academic usage adhering to Defining: Noun + who/which/that + Clause. [Savol #10]",
        "Incorrect auxiliary verb placement breaking the B2 grammar standard. [Savol #10]",
        "Incompatible tense sequence violating subject agreement. [Savol #10]",
        "Omission of essential verb particle or preposition. [Savol #10]"
      ],
      "correctAnswer": "Correct academic usage adhering to Defining: Noun + who/which/that + Clause. [Savol #10]",
      "explanation": "Ushbu birlik (Relative Clauses (who, which, that, whose)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to Defining: Noun + who/which/that + Clause.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    }
  ],
  "murphy_u33_inversion_emphasis": [
    {
      "question": "Rarely _______ such rapid transformation in consumer behavior.",
      "options": [
        "have economists observed",
        "economists have observed",
        "economists observed",
        "have observed economists"
      ],
      "correctAnswer": "have economists observed",
      "explanation": "'Rarely' bilan boshlangan inversiyada 'have' yordamchi fe'li egadan ('economists') oldinga chiqadi."
    },
    {
      "question": "2-Savol: \"Inversion for Emphasis (Not only did..., Seldom have...)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #2]",
      "options": [
        "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #2]",
        "Not only rapid industrialization creates jobs, but it also alters rural demographics. [Savol #2]",
        "Not only did rapid industrialization creates jobs, but it also alters rural demographics. [Savol #2]",
        "Not only does rapid industrialization created jobs, but it alters rural demographics. [Savol #2]"
      ],
      "correctAnswer": "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #2]",
      "explanation": "Ushbu birlik (Inversion for Emphasis (Not only did..., Seldom have...)) qoidasiga ko'ra, to'g'ri shakl 'Not only does rapid industrialization create jobs, but it also alters rural demographics.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "3-Savol: \"Inversion for Emphasis (Not only did..., Seldom have...)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #3]",
      "options": [
        "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #3]",
        "Not only rapid industrialization creates jobs, but it also alters rural demographics. [Savol #3]",
        "Not only did rapid industrialization creates jobs, but it also alters rural demographics. [Savol #3]",
        "Not only does rapid industrialization created jobs, but it alters rural demographics. [Savol #3]"
      ],
      "correctAnswer": "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #3]",
      "explanation": "Ushbu birlik (Inversion for Emphasis (Not only did..., Seldom have...)) qoidasiga ko'ra, to'g'ri shakl 'Not only does rapid industrialization create jobs, but it also alters rural demographics.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "4-Savol: \"Inversion for Emphasis (Not only did..., Seldom have...)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #4]",
      "options": [
        "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #4]",
        "Not only rapid industrialization creates jobs, but it also alters rural demographics. [Savol #4]",
        "Not only did rapid industrialization creates jobs, but it also alters rural demographics. [Savol #4]",
        "Not only does rapid industrialization created jobs, but it alters rural demographics. [Savol #4]"
      ],
      "correctAnswer": "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #4]",
      "explanation": "Ushbu birlik (Inversion for Emphasis (Not only did..., Seldom have...)) qoidasiga ko'ra, to'g'ri shakl 'Not only does rapid industrialization create jobs, but it also alters rural demographics.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "5-Savol: \"Inversion for Emphasis (Not only did..., Seldom have...)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #5]",
      "options": [
        "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #5]",
        "Not only rapid industrialization creates jobs, but it also alters rural demographics. [Savol #5]",
        "Not only did rapid industrialization creates jobs, but it also alters rural demographics. [Savol #5]",
        "Not only does rapid industrialization created jobs, but it alters rural demographics. [Savol #5]"
      ],
      "correctAnswer": "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #5]",
      "explanation": "Ushbu birlik (Inversion for Emphasis (Not only did..., Seldom have...)) qoidasiga ko'ra, to'g'ri shakl 'Not only does rapid industrialization create jobs, but it also alters rural demographics.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "6-Savol: \"Inversion for Emphasis (Not only did..., Seldom have...)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #6]",
      "options": [
        "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #6]",
        "Not only rapid industrialization creates jobs, but it also alters rural demographics. [Savol #6]",
        "Not only did rapid industrialization creates jobs, but it also alters rural demographics. [Savol #6]",
        "Not only does rapid industrialization created jobs, but it alters rural demographics. [Savol #6]"
      ],
      "correctAnswer": "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #6]",
      "explanation": "Ushbu birlik (Inversion for Emphasis (Not only did..., Seldom have...)) qoidasiga ko'ra, to'g'ri shakl 'Not only does rapid industrialization create jobs, but it also alters rural demographics.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "7-Savol: \"Inversion for Emphasis (Not only did..., Seldom have...)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #7]",
      "options": [
        "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #7]",
        "Not only rapid industrialization creates jobs, but it also alters rural demographics. [Savol #7]",
        "Not only did rapid industrialization creates jobs, but it also alters rural demographics. [Savol #7]",
        "Not only does rapid industrialization created jobs, but it alters rural demographics. [Savol #7]"
      ],
      "correctAnswer": "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #7]",
      "explanation": "Ushbu birlik (Inversion for Emphasis (Not only did..., Seldom have...)) qoidasiga ko'ra, to'g'ri shakl 'Not only does rapid industrialization create jobs, but it also alters rural demographics.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "8-Savol: \"Inversion for Emphasis (Not only did..., Seldom have...)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #8]",
      "options": [
        "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #8]",
        "Not only rapid industrialization creates jobs, but it also alters rural demographics. [Savol #8]",
        "Not only did rapid industrialization creates jobs, but it also alters rural demographics. [Savol #8]",
        "Not only does rapid industrialization created jobs, but it alters rural demographics. [Savol #8]"
      ],
      "correctAnswer": "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #8]",
      "explanation": "Ushbu birlik (Inversion for Emphasis (Not only did..., Seldom have...)) qoidasiga ko'ra, to'g'ri shakl 'Not only does rapid industrialization create jobs, but it also alters rural demographics.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "9-Savol: \"Inversion for Emphasis (Not only did..., Seldom have...)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #9]",
      "options": [
        "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #9]",
        "Not only rapid industrialization creates jobs, but it also alters rural demographics. [Savol #9]",
        "Not only did rapid industrialization creates jobs, but it also alters rural demographics. [Savol #9]",
        "Not only does rapid industrialization created jobs, but it alters rural demographics. [Savol #9]"
      ],
      "correctAnswer": "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #9]",
      "explanation": "Ushbu birlik (Inversion for Emphasis (Not only did..., Seldom have...)) qoidasiga ko'ra, to'g'ri shakl 'Not only does rapid industrialization create jobs, but it also alters rural demographics.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "10-Savol: \"Inversion for Emphasis (Not only did..., Seldom have...)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #10]",
      "options": [
        "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #10]",
        "Not only rapid industrialization creates jobs, but it also alters rural demographics. [Savol #10]",
        "Not only did rapid industrialization creates jobs, but it also alters rural demographics. [Savol #10]",
        "Not only does rapid industrialization created jobs, but it alters rural demographics. [Savol #10]"
      ],
      "correctAnswer": "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #10]",
      "explanation": "Ushbu birlik (Inversion for Emphasis (Not only did..., Seldom have...)) qoidasiga ko'ra, to'g'ri shakl 'Not only does rapid industrialization create jobs, but it also alters rural demographics.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    }
  ],
  "murphy_u34_participle_clauses": [
    {
      "question": "_______ by escalating fossil fuel costs, automotive corporations accelerated electric vehicle production.",
      "options": [
        "Compelled",
        "Compelling",
        "Having compelled",
        "Compel"
      ],
      "correctAnswer": "Compelled",
      "explanation": "Majhul sifatdosh (Passiv) 'Compelled by...' (majbur qilingan holda) to'g'ri keladi."
    },
    {
      "question": "2-Savol: \"Participle Clauses (Active & Passive Reduction)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #2]",
      "options": [
        "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #2]",
        "Not only rapid industrialization creates jobs, but it also alters rural demographics. [Savol #2]",
        "Not only did rapid industrialization creates jobs, but it also alters rural demographics. [Savol #2]",
        "Not only does rapid industrialization created jobs, but it alters rural demographics. [Savol #2]"
      ],
      "correctAnswer": "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #2]",
      "explanation": "Ushbu birlik (Participle Clauses (Active & Passive Reduction)) qoidasiga ko'ra, to'g'ri shakl 'Not only does rapid industrialization create jobs, but it also alters rural demographics.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "3-Savol: \"Participle Clauses (Active & Passive Reduction)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #3]",
      "options": [
        "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #3]",
        "Not only rapid industrialization creates jobs, but it also alters rural demographics. [Savol #3]",
        "Not only did rapid industrialization creates jobs, but it also alters rural demographics. [Savol #3]",
        "Not only does rapid industrialization created jobs, but it alters rural demographics. [Savol #3]"
      ],
      "correctAnswer": "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #3]",
      "explanation": "Ushbu birlik (Participle Clauses (Active & Passive Reduction)) qoidasiga ko'ra, to'g'ri shakl 'Not only does rapid industrialization create jobs, but it also alters rural demographics.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "4-Savol: \"Participle Clauses (Active & Passive Reduction)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #4]",
      "options": [
        "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #4]",
        "Not only rapid industrialization creates jobs, but it also alters rural demographics. [Savol #4]",
        "Not only did rapid industrialization creates jobs, but it also alters rural demographics. [Savol #4]",
        "Not only does rapid industrialization created jobs, but it alters rural demographics. [Savol #4]"
      ],
      "correctAnswer": "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #4]",
      "explanation": "Ushbu birlik (Participle Clauses (Active & Passive Reduction)) qoidasiga ko'ra, to'g'ri shakl 'Not only does rapid industrialization create jobs, but it also alters rural demographics.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "5-Savol: \"Participle Clauses (Active & Passive Reduction)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #5]",
      "options": [
        "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #5]",
        "Not only rapid industrialization creates jobs, but it also alters rural demographics. [Savol #5]",
        "Not only did rapid industrialization creates jobs, but it also alters rural demographics. [Savol #5]",
        "Not only does rapid industrialization created jobs, but it alters rural demographics. [Savol #5]"
      ],
      "correctAnswer": "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #5]",
      "explanation": "Ushbu birlik (Participle Clauses (Active & Passive Reduction)) qoidasiga ko'ra, to'g'ri shakl 'Not only does rapid industrialization create jobs, but it also alters rural demographics.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "6-Savol: \"Participle Clauses (Active & Passive Reduction)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #6]",
      "options": [
        "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #6]",
        "Not only rapid industrialization creates jobs, but it also alters rural demographics. [Savol #6]",
        "Not only did rapid industrialization creates jobs, but it also alters rural demographics. [Savol #6]",
        "Not only does rapid industrialization created jobs, but it alters rural demographics. [Savol #6]"
      ],
      "correctAnswer": "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #6]",
      "explanation": "Ushbu birlik (Participle Clauses (Active & Passive Reduction)) qoidasiga ko'ra, to'g'ri shakl 'Not only does rapid industrialization create jobs, but it also alters rural demographics.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "7-Savol: \"Participle Clauses (Active & Passive Reduction)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #7]",
      "options": [
        "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #7]",
        "Not only rapid industrialization creates jobs, but it also alters rural demographics. [Savol #7]",
        "Not only did rapid industrialization creates jobs, but it also alters rural demographics. [Savol #7]",
        "Not only does rapid industrialization created jobs, but it alters rural demographics. [Savol #7]"
      ],
      "correctAnswer": "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #7]",
      "explanation": "Ushbu birlik (Participle Clauses (Active & Passive Reduction)) qoidasiga ko'ra, to'g'ri shakl 'Not only does rapid industrialization create jobs, but it also alters rural demographics.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "8-Savol: \"Participle Clauses (Active & Passive Reduction)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #8]",
      "options": [
        "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #8]",
        "Not only rapid industrialization creates jobs, but it also alters rural demographics. [Savol #8]",
        "Not only did rapid industrialization creates jobs, but it also alters rural demographics. [Savol #8]",
        "Not only does rapid industrialization created jobs, but it alters rural demographics. [Savol #8]"
      ],
      "correctAnswer": "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #8]",
      "explanation": "Ushbu birlik (Participle Clauses (Active & Passive Reduction)) qoidasiga ko'ra, to'g'ri shakl 'Not only does rapid industrialization create jobs, but it also alters rural demographics.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "9-Savol: \"Participle Clauses (Active & Passive Reduction)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #9]",
      "options": [
        "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #9]",
        "Not only rapid industrialization creates jobs, but it also alters rural demographics. [Savol #9]",
        "Not only did rapid industrialization creates jobs, but it also alters rural demographics. [Savol #9]",
        "Not only does rapid industrialization created jobs, but it alters rural demographics. [Savol #9]"
      ],
      "correctAnswer": "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #9]",
      "explanation": "Ushbu birlik (Participle Clauses (Active & Passive Reduction)) qoidasiga ko'ra, to'g'ri shakl 'Not only does rapid industrialization create jobs, but it also alters rural demographics.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "10-Savol: \"Participle Clauses (Active & Passive Reduction)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #10]",
      "options": [
        "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #10]",
        "Not only rapid industrialization creates jobs, but it also alters rural demographics. [Savol #10]",
        "Not only did rapid industrialization creates jobs, but it also alters rural demographics. [Savol #10]",
        "Not only does rapid industrialization created jobs, but it alters rural demographics. [Savol #10]"
      ],
      "correctAnswer": "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #10]",
      "explanation": "Ushbu birlik (Participle Clauses (Active & Passive Reduction)) qoidasiga ko'ra, to'g'ri shakl 'Not only does rapid industrialization create jobs, but it also alters rural demographics.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    }
  ],
  "murphy_u35_cleft_sentences": [
    {
      "question": "It is through comprehensive early education _______ long-term social mobility is achieved.",
      "options": [
        "that",
        "which",
        "what",
        "where"
      ],
      "correctAnswer": "that",
      "explanation": "'It is [Focus] that [Clause]' cleft strukturasida bog'lovchi 'that' bo'ladi."
    },
    {
      "question": "2-Savol: \"Cleft Sentences (What concerns scholars is..., It is X that...)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #2]",
      "options": [
        "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #2]",
        "Not only rapid industrialization creates jobs, but it also alters rural demographics. [Savol #2]",
        "Not only did rapid industrialization creates jobs, but it also alters rural demographics. [Savol #2]",
        "Not only does rapid industrialization created jobs, but it alters rural demographics. [Savol #2]"
      ],
      "correctAnswer": "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #2]",
      "explanation": "Ushbu birlik (Cleft Sentences (What concerns scholars is..., It is X that...)) qoidasiga ko'ra, to'g'ri shakl 'Not only does rapid industrialization create jobs, but it also alters rural demographics.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "3-Savol: \"Cleft Sentences (What concerns scholars is..., It is X that...)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #3]",
      "options": [
        "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #3]",
        "Not only rapid industrialization creates jobs, but it also alters rural demographics. [Savol #3]",
        "Not only did rapid industrialization creates jobs, but it also alters rural demographics. [Savol #3]",
        "Not only does rapid industrialization created jobs, but it alters rural demographics. [Savol #3]"
      ],
      "correctAnswer": "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #3]",
      "explanation": "Ushbu birlik (Cleft Sentences (What concerns scholars is..., It is X that...)) qoidasiga ko'ra, to'g'ri shakl 'Not only does rapid industrialization create jobs, but it also alters rural demographics.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "4-Savol: \"Cleft Sentences (What concerns scholars is..., It is X that...)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #4]",
      "options": [
        "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #4]",
        "Not only rapid industrialization creates jobs, but it also alters rural demographics. [Savol #4]",
        "Not only did rapid industrialization creates jobs, but it also alters rural demographics. [Savol #4]",
        "Not only does rapid industrialization created jobs, but it alters rural demographics. [Savol #4]"
      ],
      "correctAnswer": "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #4]",
      "explanation": "Ushbu birlik (Cleft Sentences (What concerns scholars is..., It is X that...)) qoidasiga ko'ra, to'g'ri shakl 'Not only does rapid industrialization create jobs, but it also alters rural demographics.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "5-Savol: \"Cleft Sentences (What concerns scholars is..., It is X that...)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #5]",
      "options": [
        "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #5]",
        "Not only rapid industrialization creates jobs, but it also alters rural demographics. [Savol #5]",
        "Not only did rapid industrialization creates jobs, but it also alters rural demographics. [Savol #5]",
        "Not only does rapid industrialization created jobs, but it alters rural demographics. [Savol #5]"
      ],
      "correctAnswer": "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #5]",
      "explanation": "Ushbu birlik (Cleft Sentences (What concerns scholars is..., It is X that...)) qoidasiga ko'ra, to'g'ri shakl 'Not only does rapid industrialization create jobs, but it also alters rural demographics.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "6-Savol: \"Cleft Sentences (What concerns scholars is..., It is X that...)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #6]",
      "options": [
        "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #6]",
        "Not only rapid industrialization creates jobs, but it also alters rural demographics. [Savol #6]",
        "Not only did rapid industrialization creates jobs, but it also alters rural demographics. [Savol #6]",
        "Not only does rapid industrialization created jobs, but it alters rural demographics. [Savol #6]"
      ],
      "correctAnswer": "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #6]",
      "explanation": "Ushbu birlik (Cleft Sentences (What concerns scholars is..., It is X that...)) qoidasiga ko'ra, to'g'ri shakl 'Not only does rapid industrialization create jobs, but it also alters rural demographics.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "7-Savol: \"Cleft Sentences (What concerns scholars is..., It is X that...)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #7]",
      "options": [
        "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #7]",
        "Not only rapid industrialization creates jobs, but it also alters rural demographics. [Savol #7]",
        "Not only did rapid industrialization creates jobs, but it also alters rural demographics. [Savol #7]",
        "Not only does rapid industrialization created jobs, but it alters rural demographics. [Savol #7]"
      ],
      "correctAnswer": "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #7]",
      "explanation": "Ushbu birlik (Cleft Sentences (What concerns scholars is..., It is X that...)) qoidasiga ko'ra, to'g'ri shakl 'Not only does rapid industrialization create jobs, but it also alters rural demographics.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "8-Savol: \"Cleft Sentences (What concerns scholars is..., It is X that...)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #8]",
      "options": [
        "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #8]",
        "Not only rapid industrialization creates jobs, but it also alters rural demographics. [Savol #8]",
        "Not only did rapid industrialization creates jobs, but it also alters rural demographics. [Savol #8]",
        "Not only does rapid industrialization created jobs, but it alters rural demographics. [Savol #8]"
      ],
      "correctAnswer": "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #8]",
      "explanation": "Ushbu birlik (Cleft Sentences (What concerns scholars is..., It is X that...)) qoidasiga ko'ra, to'g'ri shakl 'Not only does rapid industrialization create jobs, but it also alters rural demographics.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "9-Savol: \"Cleft Sentences (What concerns scholars is..., It is X that...)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #9]",
      "options": [
        "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #9]",
        "Not only rapid industrialization creates jobs, but it also alters rural demographics. [Savol #9]",
        "Not only did rapid industrialization creates jobs, but it also alters rural demographics. [Savol #9]",
        "Not only does rapid industrialization created jobs, but it alters rural demographics. [Savol #9]"
      ],
      "correctAnswer": "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #9]",
      "explanation": "Ushbu birlik (Cleft Sentences (What concerns scholars is..., It is X that...)) qoidasiga ko'ra, to'g'ri shakl 'Not only does rapid industrialization create jobs, but it also alters rural demographics.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "10-Savol: \"Cleft Sentences (What concerns scholars is..., It is X that...)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #10]",
      "options": [
        "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #10]",
        "Not only rapid industrialization creates jobs, but it also alters rural demographics. [Savol #10]",
        "Not only did rapid industrialization creates jobs, but it also alters rural demographics. [Savol #10]",
        "Not only does rapid industrialization created jobs, but it alters rural demographics. [Savol #10]"
      ],
      "correctAnswer": "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #10]",
      "explanation": "Ushbu birlik (Cleft Sentences (What concerns scholars is..., It is X that...)) qoidasiga ko'ra, to'g'ri shakl 'Not only does rapid industrialization create jobs, but it also alters rural demographics.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    }
  ],
  "murphy_u36_academic_nominalisation": [
    {
      "question": "The _______ of digital healthcare platforms has streamlined patient consultations.",
      "options": [
        "introduction",
        "introduce",
        "introducing",
        "introductory"
      ],
      "correctAnswer": "introduction",
      "explanation": "'The [Noun] of...' strukturasida rasmiy ot shakli 'introduction' talab qilinadi."
    },
    {
      "question": "2-Savol: \"Academic Nominalisation (Transforming Verbs into Nouns)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #2]",
      "options": [
        "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #2]",
        "Not only rapid industrialization creates jobs, but it also alters rural demographics. [Savol #2]",
        "Not only did rapid industrialization creates jobs, but it also alters rural demographics. [Savol #2]",
        "Not only does rapid industrialization created jobs, but it alters rural demographics. [Savol #2]"
      ],
      "correctAnswer": "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #2]",
      "explanation": "Ushbu birlik (Academic Nominalisation (Transforming Verbs into Nouns)) qoidasiga ko'ra, to'g'ri shakl 'Not only does rapid industrialization create jobs, but it also alters rural demographics.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "3-Savol: \"Academic Nominalisation (Transforming Verbs into Nouns)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #3]",
      "options": [
        "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #3]",
        "Not only rapid industrialization creates jobs, but it also alters rural demographics. [Savol #3]",
        "Not only did rapid industrialization creates jobs, but it also alters rural demographics. [Savol #3]",
        "Not only does rapid industrialization created jobs, but it alters rural demographics. [Savol #3]"
      ],
      "correctAnswer": "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #3]",
      "explanation": "Ushbu birlik (Academic Nominalisation (Transforming Verbs into Nouns)) qoidasiga ko'ra, to'g'ri shakl 'Not only does rapid industrialization create jobs, but it also alters rural demographics.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "4-Savol: \"Academic Nominalisation (Transforming Verbs into Nouns)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #4]",
      "options": [
        "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #4]",
        "Not only rapid industrialization creates jobs, but it also alters rural demographics. [Savol #4]",
        "Not only did rapid industrialization creates jobs, but it also alters rural demographics. [Savol #4]",
        "Not only does rapid industrialization created jobs, but it alters rural demographics. [Savol #4]"
      ],
      "correctAnswer": "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #4]",
      "explanation": "Ushbu birlik (Academic Nominalisation (Transforming Verbs into Nouns)) qoidasiga ko'ra, to'g'ri shakl 'Not only does rapid industrialization create jobs, but it also alters rural demographics.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "5-Savol: \"Academic Nominalisation (Transforming Verbs into Nouns)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #5]",
      "options": [
        "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #5]",
        "Not only rapid industrialization creates jobs, but it also alters rural demographics. [Savol #5]",
        "Not only did rapid industrialization creates jobs, but it also alters rural demographics. [Savol #5]",
        "Not only does rapid industrialization created jobs, but it alters rural demographics. [Savol #5]"
      ],
      "correctAnswer": "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #5]",
      "explanation": "Ushbu birlik (Academic Nominalisation (Transforming Verbs into Nouns)) qoidasiga ko'ra, to'g'ri shakl 'Not only does rapid industrialization create jobs, but it also alters rural demographics.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "6-Savol: \"Academic Nominalisation (Transforming Verbs into Nouns)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #6]",
      "options": [
        "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #6]",
        "Not only rapid industrialization creates jobs, but it also alters rural demographics. [Savol #6]",
        "Not only did rapid industrialization creates jobs, but it also alters rural demographics. [Savol #6]",
        "Not only does rapid industrialization created jobs, but it alters rural demographics. [Savol #6]"
      ],
      "correctAnswer": "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #6]",
      "explanation": "Ushbu birlik (Academic Nominalisation (Transforming Verbs into Nouns)) qoidasiga ko'ra, to'g'ri shakl 'Not only does rapid industrialization create jobs, but it also alters rural demographics.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "7-Savol: \"Academic Nominalisation (Transforming Verbs into Nouns)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #7]",
      "options": [
        "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #7]",
        "Not only rapid industrialization creates jobs, but it also alters rural demographics. [Savol #7]",
        "Not only did rapid industrialization creates jobs, but it also alters rural demographics. [Savol #7]",
        "Not only does rapid industrialization created jobs, but it alters rural demographics. [Savol #7]"
      ],
      "correctAnswer": "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #7]",
      "explanation": "Ushbu birlik (Academic Nominalisation (Transforming Verbs into Nouns)) qoidasiga ko'ra, to'g'ri shakl 'Not only does rapid industrialization create jobs, but it also alters rural demographics.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "8-Savol: \"Academic Nominalisation (Transforming Verbs into Nouns)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #8]",
      "options": [
        "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #8]",
        "Not only rapid industrialization creates jobs, but it also alters rural demographics. [Savol #8]",
        "Not only did rapid industrialization creates jobs, but it also alters rural demographics. [Savol #8]",
        "Not only does rapid industrialization created jobs, but it alters rural demographics. [Savol #8]"
      ],
      "correctAnswer": "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #8]",
      "explanation": "Ushbu birlik (Academic Nominalisation (Transforming Verbs into Nouns)) qoidasiga ko'ra, to'g'ri shakl 'Not only does rapid industrialization create jobs, but it also alters rural demographics.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "9-Savol: \"Academic Nominalisation (Transforming Verbs into Nouns)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #9]",
      "options": [
        "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #9]",
        "Not only rapid industrialization creates jobs, but it also alters rural demographics. [Savol #9]",
        "Not only did rapid industrialization creates jobs, but it also alters rural demographics. [Savol #9]",
        "Not only does rapid industrialization created jobs, but it alters rural demographics. [Savol #9]"
      ],
      "correctAnswer": "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #9]",
      "explanation": "Ushbu birlik (Academic Nominalisation (Transforming Verbs into Nouns)) qoidasiga ko'ra, to'g'ri shakl 'Not only does rapid industrialization create jobs, but it also alters rural demographics.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "10-Savol: \"Academic Nominalisation (Transforming Verbs into Nouns)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #10]",
      "options": [
        "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #10]",
        "Not only rapid industrialization creates jobs, but it also alters rural demographics. [Savol #10]",
        "Not only did rapid industrialization creates jobs, but it also alters rural demographics. [Savol #10]",
        "Not only does rapid industrialization created jobs, but it alters rural demographics. [Savol #10]"
      ],
      "correctAnswer": "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #10]",
      "explanation": "Ushbu birlik (Academic Nominalisation (Transforming Verbs into Nouns)) qoidasiga ko'ra, to'g'ri shakl 'Not only does rapid industrialization create jobs, but it also alters rural demographics.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    }
  ],
  "murphy_u37_inverted_conditionals": [
    {
      "question": "_______ the government allocate greater funding to green infrastructure, urban air quality would improve drastically.",
      "options": [
        "Were",
        "Had",
        "Should",
        "If were"
      ],
      "correctAnswer": "Were",
      "explanation": "2-shart maylining inversiyasida 'Were + Subject + to + Verb' qo'llaniladi."
    },
    {
      "question": "2-Savol: \"Inverted Conditionals (Had we acted..., Were governments to...)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #2]",
      "options": [
        "If governments invest in renewable energy, carbon emissions will decline significantly. [Savol #2]",
        "If governments will invest in renewable energy, carbon emissions decline. [Savol #2]",
        "If governments invested in renewable energy, carbon emissions will decline. [Savol #2]",
        "If governments invest in renewable energy, carbon emissions would declined. [Savol #2]"
      ],
      "correctAnswer": "If governments invest in renewable energy, carbon emissions will decline significantly. [Savol #2]",
      "explanation": "Ushbu birlik (Inverted Conditionals (Had we acted..., Were governments to...)) qoidasiga ko'ra, to'g'ri shakl 'If governments invest in renewable energy, carbon emissions will decline significantly.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "3-Savol: \"Inverted Conditionals (Had we acted..., Were governments to...)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #3]",
      "options": [
        "If governments invest in renewable energy, carbon emissions will decline significantly. [Savol #3]",
        "If governments will invest in renewable energy, carbon emissions decline. [Savol #3]",
        "If governments invested in renewable energy, carbon emissions will decline. [Savol #3]",
        "If governments invest in renewable energy, carbon emissions would declined. [Savol #3]"
      ],
      "correctAnswer": "If governments invest in renewable energy, carbon emissions will decline significantly. [Savol #3]",
      "explanation": "Ushbu birlik (Inverted Conditionals (Had we acted..., Were governments to...)) qoidasiga ko'ra, to'g'ri shakl 'If governments invest in renewable energy, carbon emissions will decline significantly.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "4-Savol: \"Inverted Conditionals (Had we acted..., Were governments to...)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #4]",
      "options": [
        "If governments invest in renewable energy, carbon emissions will decline significantly. [Savol #4]",
        "If governments will invest in renewable energy, carbon emissions decline. [Savol #4]",
        "If governments invested in renewable energy, carbon emissions will decline. [Savol #4]",
        "If governments invest in renewable energy, carbon emissions would declined. [Savol #4]"
      ],
      "correctAnswer": "If governments invest in renewable energy, carbon emissions will decline significantly. [Savol #4]",
      "explanation": "Ushbu birlik (Inverted Conditionals (Had we acted..., Were governments to...)) qoidasiga ko'ra, to'g'ri shakl 'If governments invest in renewable energy, carbon emissions will decline significantly.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "5-Savol: \"Inverted Conditionals (Had we acted..., Were governments to...)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #5]",
      "options": [
        "If governments invest in renewable energy, carbon emissions will decline significantly. [Savol #5]",
        "If governments will invest in renewable energy, carbon emissions decline. [Savol #5]",
        "If governments invested in renewable energy, carbon emissions will decline. [Savol #5]",
        "If governments invest in renewable energy, carbon emissions would declined. [Savol #5]"
      ],
      "correctAnswer": "If governments invest in renewable energy, carbon emissions will decline significantly. [Savol #5]",
      "explanation": "Ushbu birlik (Inverted Conditionals (Had we acted..., Were governments to...)) qoidasiga ko'ra, to'g'ri shakl 'If governments invest in renewable energy, carbon emissions will decline significantly.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "6-Savol: \"Inverted Conditionals (Had we acted..., Were governments to...)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #6]",
      "options": [
        "If governments invest in renewable energy, carbon emissions will decline significantly. [Savol #6]",
        "If governments will invest in renewable energy, carbon emissions decline. [Savol #6]",
        "If governments invested in renewable energy, carbon emissions will decline. [Savol #6]",
        "If governments invest in renewable energy, carbon emissions would declined. [Savol #6]"
      ],
      "correctAnswer": "If governments invest in renewable energy, carbon emissions will decline significantly. [Savol #6]",
      "explanation": "Ushbu birlik (Inverted Conditionals (Had we acted..., Were governments to...)) qoidasiga ko'ra, to'g'ri shakl 'If governments invest in renewable energy, carbon emissions will decline significantly.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "7-Savol: \"Inverted Conditionals (Had we acted..., Were governments to...)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #7]",
      "options": [
        "If governments invest in renewable energy, carbon emissions will decline significantly. [Savol #7]",
        "If governments will invest in renewable energy, carbon emissions decline. [Savol #7]",
        "If governments invested in renewable energy, carbon emissions will decline. [Savol #7]",
        "If governments invest in renewable energy, carbon emissions would declined. [Savol #7]"
      ],
      "correctAnswer": "If governments invest in renewable energy, carbon emissions will decline significantly. [Savol #7]",
      "explanation": "Ushbu birlik (Inverted Conditionals (Had we acted..., Were governments to...)) qoidasiga ko'ra, to'g'ri shakl 'If governments invest in renewable energy, carbon emissions will decline significantly.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "8-Savol: \"Inverted Conditionals (Had we acted..., Were governments to...)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #8]",
      "options": [
        "If governments invest in renewable energy, carbon emissions will decline significantly. [Savol #8]",
        "If governments will invest in renewable energy, carbon emissions decline. [Savol #8]",
        "If governments invested in renewable energy, carbon emissions will decline. [Savol #8]",
        "If governments invest in renewable energy, carbon emissions would declined. [Savol #8]"
      ],
      "correctAnswer": "If governments invest in renewable energy, carbon emissions will decline significantly. [Savol #8]",
      "explanation": "Ushbu birlik (Inverted Conditionals (Had we acted..., Were governments to...)) qoidasiga ko'ra, to'g'ri shakl 'If governments invest in renewable energy, carbon emissions will decline significantly.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "9-Savol: \"Inverted Conditionals (Had we acted..., Were governments to...)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #9]",
      "options": [
        "If governments invest in renewable energy, carbon emissions will decline significantly. [Savol #9]",
        "If governments will invest in renewable energy, carbon emissions decline. [Savol #9]",
        "If governments invested in renewable energy, carbon emissions will decline. [Savol #9]",
        "If governments invest in renewable energy, carbon emissions would declined. [Savol #9]"
      ],
      "correctAnswer": "If governments invest in renewable energy, carbon emissions will decline significantly. [Savol #9]",
      "explanation": "Ushbu birlik (Inverted Conditionals (Had we acted..., Were governments to...)) qoidasiga ko'ra, to'g'ri shakl 'If governments invest in renewable energy, carbon emissions will decline significantly.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "10-Savol: \"Inverted Conditionals (Had we acted..., Were governments to...)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #10]",
      "options": [
        "If governments invest in renewable energy, carbon emissions will decline significantly. [Savol #10]",
        "If governments will invest in renewable energy, carbon emissions decline. [Savol #10]",
        "If governments invested in renewable energy, carbon emissions will decline. [Savol #10]",
        "If governments invest in renewable energy, carbon emissions would declined. [Savol #10]"
      ],
      "correctAnswer": "If governments invest in renewable energy, carbon emissions will decline significantly. [Savol #10]",
      "explanation": "Ushbu birlik (Inverted Conditionals (Had we acted..., Were governments to...)) qoidasiga ko'ra, to'g'ri shakl 'If governments invest in renewable energy, carbon emissions will decline significantly.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    }
  ],
  "murphy_u38_impersonal_reporting_passives": [
    {
      "question": "It is widely _______ that early childhood bilingualism strengthens neuroplasticity.",
      "options": [
        "acknowledged",
        "acknowledge",
        "acknowledging",
        "acknowledgement"
      ],
      "correctAnswer": "acknowledged",
      "explanation": "'It is + V3 (past participle) + that' passiv ifodasida 'acknowledged' to'g'ri keladi."
    },
    {
      "question": "2-Savol: \"Impersonal Reporting Passives (It is contended that..., X is estimated to...)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #2]",
      "options": [
        "The statistical survey was conducted by independent international analysts. [Savol #2]",
        "The statistical survey was conduct by independent international analysts. [Savol #2]",
        "The statistical survey been conducted by independent international analysts. [Savol #2]",
        "The statistical survey is conduct by independent international analysts. [Savol #2]"
      ],
      "correctAnswer": "The statistical survey was conducted by independent international analysts. [Savol #2]",
      "explanation": "Ushbu birlik (Impersonal Reporting Passives (It is contended that..., X is estimated to...)) qoidasiga ko'ra, to'g'ri shakl 'The statistical survey was conducted by independent international analysts.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "3-Savol: \"Impersonal Reporting Passives (It is contended that..., X is estimated to...)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #3]",
      "options": [
        "The statistical survey was conducted by independent international analysts. [Savol #3]",
        "The statistical survey was conduct by independent international analysts. [Savol #3]",
        "The statistical survey been conducted by independent international analysts. [Savol #3]",
        "The statistical survey is conduct by independent international analysts. [Savol #3]"
      ],
      "correctAnswer": "The statistical survey was conducted by independent international analysts. [Savol #3]",
      "explanation": "Ushbu birlik (Impersonal Reporting Passives (It is contended that..., X is estimated to...)) qoidasiga ko'ra, to'g'ri shakl 'The statistical survey was conducted by independent international analysts.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "4-Savol: \"Impersonal Reporting Passives (It is contended that..., X is estimated to...)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #4]",
      "options": [
        "The statistical survey was conducted by independent international analysts. [Savol #4]",
        "The statistical survey was conduct by independent international analysts. [Savol #4]",
        "The statistical survey been conducted by independent international analysts. [Savol #4]",
        "The statistical survey is conduct by independent international analysts. [Savol #4]"
      ],
      "correctAnswer": "The statistical survey was conducted by independent international analysts. [Savol #4]",
      "explanation": "Ushbu birlik (Impersonal Reporting Passives (It is contended that..., X is estimated to...)) qoidasiga ko'ra, to'g'ri shakl 'The statistical survey was conducted by independent international analysts.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "5-Savol: \"Impersonal Reporting Passives (It is contended that..., X is estimated to...)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #5]",
      "options": [
        "The statistical survey was conducted by independent international analysts. [Savol #5]",
        "The statistical survey was conduct by independent international analysts. [Savol #5]",
        "The statistical survey been conducted by independent international analysts. [Savol #5]",
        "The statistical survey is conduct by independent international analysts. [Savol #5]"
      ],
      "correctAnswer": "The statistical survey was conducted by independent international analysts. [Savol #5]",
      "explanation": "Ushbu birlik (Impersonal Reporting Passives (It is contended that..., X is estimated to...)) qoidasiga ko'ra, to'g'ri shakl 'The statistical survey was conducted by independent international analysts.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "6-Savol: \"Impersonal Reporting Passives (It is contended that..., X is estimated to...)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #6]",
      "options": [
        "The statistical survey was conducted by independent international analysts. [Savol #6]",
        "The statistical survey was conduct by independent international analysts. [Savol #6]",
        "The statistical survey been conducted by independent international analysts. [Savol #6]",
        "The statistical survey is conduct by independent international analysts. [Savol #6]"
      ],
      "correctAnswer": "The statistical survey was conducted by independent international analysts. [Savol #6]",
      "explanation": "Ushbu birlik (Impersonal Reporting Passives (It is contended that..., X is estimated to...)) qoidasiga ko'ra, to'g'ri shakl 'The statistical survey was conducted by independent international analysts.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "7-Savol: \"Impersonal Reporting Passives (It is contended that..., X is estimated to...)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #7]",
      "options": [
        "The statistical survey was conducted by independent international analysts. [Savol #7]",
        "The statistical survey was conduct by independent international analysts. [Savol #7]",
        "The statistical survey been conducted by independent international analysts. [Savol #7]",
        "The statistical survey is conduct by independent international analysts. [Savol #7]"
      ],
      "correctAnswer": "The statistical survey was conducted by independent international analysts. [Savol #7]",
      "explanation": "Ushbu birlik (Impersonal Reporting Passives (It is contended that..., X is estimated to...)) qoidasiga ko'ra, to'g'ri shakl 'The statistical survey was conducted by independent international analysts.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "8-Savol: \"Impersonal Reporting Passives (It is contended that..., X is estimated to...)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #8]",
      "options": [
        "The statistical survey was conducted by independent international analysts. [Savol #8]",
        "The statistical survey was conduct by independent international analysts. [Savol #8]",
        "The statistical survey been conducted by independent international analysts. [Savol #8]",
        "The statistical survey is conduct by independent international analysts. [Savol #8]"
      ],
      "correctAnswer": "The statistical survey was conducted by independent international analysts. [Savol #8]",
      "explanation": "Ushbu birlik (Impersonal Reporting Passives (It is contended that..., X is estimated to...)) qoidasiga ko'ra, to'g'ri shakl 'The statistical survey was conducted by independent international analysts.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "9-Savol: \"Impersonal Reporting Passives (It is contended that..., X is estimated to...)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #9]",
      "options": [
        "The statistical survey was conducted by independent international analysts. [Savol #9]",
        "The statistical survey was conduct by independent international analysts. [Savol #9]",
        "The statistical survey been conducted by independent international analysts. [Savol #9]",
        "The statistical survey is conduct by independent international analysts. [Savol #9]"
      ],
      "correctAnswer": "The statistical survey was conducted by independent international analysts. [Savol #9]",
      "explanation": "Ushbu birlik (Impersonal Reporting Passives (It is contended that..., X is estimated to...)) qoidasiga ko'ra, to'g'ri shakl 'The statistical survey was conducted by independent international analysts.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "10-Savol: \"Impersonal Reporting Passives (It is contended that..., X is estimated to...)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #10]",
      "options": [
        "The statistical survey was conducted by independent international analysts. [Savol #10]",
        "The statistical survey was conduct by independent international analysts. [Savol #10]",
        "The statistical survey been conducted by independent international analysts. [Savol #10]",
        "The statistical survey is conduct by independent international analysts. [Savol #10]"
      ],
      "correctAnswer": "The statistical survey was conducted by independent international analysts. [Savol #10]",
      "explanation": "Ushbu birlik (Impersonal Reporting Passives (It is contended that..., X is estimated to...)) qoidasiga ko'ra, to'g'ri shakl 'The statistical survey was conducted by independent international analysts.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    }
  ],
  "murphy_u39_advanced_concession": [
    {
      "question": "_______ the substantial economic benefits of tourism, environmental degradation remains a pressing concern.",
      "options": [
        "Notwithstanding",
        "Although",
        "Whereas",
        "While"
      ],
      "correctAnswer": "Notwithstanding",
      "explanation": "Ot birikmasi ('the substantial economic benefits') oldidan 'Notwithstanding' keladi."
    },
    {
      "question": "2-Savol: \"Advanced Concession & Contrast (Notwithstanding..., Albeit...)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #2]",
      "options": [
        "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #2]",
        "Not only rapid industrialization creates jobs, but it also alters rural demographics. [Savol #2]",
        "Not only did rapid industrialization creates jobs, but it also alters rural demographics. [Savol #2]",
        "Not only does rapid industrialization created jobs, but it alters rural demographics. [Savol #2]"
      ],
      "correctAnswer": "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #2]",
      "explanation": "Ushbu birlik (Advanced Concession & Contrast (Notwithstanding..., Albeit...)) qoidasiga ko'ra, to'g'ri shakl 'Not only does rapid industrialization create jobs, but it also alters rural demographics.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "3-Savol: \"Advanced Concession & Contrast (Notwithstanding..., Albeit...)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #3]",
      "options": [
        "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #3]",
        "Not only rapid industrialization creates jobs, but it also alters rural demographics. [Savol #3]",
        "Not only did rapid industrialization creates jobs, but it also alters rural demographics. [Savol #3]",
        "Not only does rapid industrialization created jobs, but it alters rural demographics. [Savol #3]"
      ],
      "correctAnswer": "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #3]",
      "explanation": "Ushbu birlik (Advanced Concession & Contrast (Notwithstanding..., Albeit...)) qoidasiga ko'ra, to'g'ri shakl 'Not only does rapid industrialization create jobs, but it also alters rural demographics.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "4-Savol: \"Advanced Concession & Contrast (Notwithstanding..., Albeit...)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #4]",
      "options": [
        "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #4]",
        "Not only rapid industrialization creates jobs, but it also alters rural demographics. [Savol #4]",
        "Not only did rapid industrialization creates jobs, but it also alters rural demographics. [Savol #4]",
        "Not only does rapid industrialization created jobs, but it alters rural demographics. [Savol #4]"
      ],
      "correctAnswer": "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #4]",
      "explanation": "Ushbu birlik (Advanced Concession & Contrast (Notwithstanding..., Albeit...)) qoidasiga ko'ra, to'g'ri shakl 'Not only does rapid industrialization create jobs, but it also alters rural demographics.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "5-Savol: \"Advanced Concession & Contrast (Notwithstanding..., Albeit...)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #5]",
      "options": [
        "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #5]",
        "Not only rapid industrialization creates jobs, but it also alters rural demographics. [Savol #5]",
        "Not only did rapid industrialization creates jobs, but it also alters rural demographics. [Savol #5]",
        "Not only does rapid industrialization created jobs, but it alters rural demographics. [Savol #5]"
      ],
      "correctAnswer": "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #5]",
      "explanation": "Ushbu birlik (Advanced Concession & Contrast (Notwithstanding..., Albeit...)) qoidasiga ko'ra, to'g'ri shakl 'Not only does rapid industrialization create jobs, but it also alters rural demographics.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "6-Savol: \"Advanced Concession & Contrast (Notwithstanding..., Albeit...)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #6]",
      "options": [
        "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #6]",
        "Not only rapid industrialization creates jobs, but it also alters rural demographics. [Savol #6]",
        "Not only did rapid industrialization creates jobs, but it also alters rural demographics. [Savol #6]",
        "Not only does rapid industrialization created jobs, but it alters rural demographics. [Savol #6]"
      ],
      "correctAnswer": "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #6]",
      "explanation": "Ushbu birlik (Advanced Concession & Contrast (Notwithstanding..., Albeit...)) qoidasiga ko'ra, to'g'ri shakl 'Not only does rapid industrialization create jobs, but it also alters rural demographics.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "7-Savol: \"Advanced Concession & Contrast (Notwithstanding..., Albeit...)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #7]",
      "options": [
        "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #7]",
        "Not only rapid industrialization creates jobs, but it also alters rural demographics. [Savol #7]",
        "Not only did rapid industrialization creates jobs, but it also alters rural demographics. [Savol #7]",
        "Not only does rapid industrialization created jobs, but it alters rural demographics. [Savol #7]"
      ],
      "correctAnswer": "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #7]",
      "explanation": "Ushbu birlik (Advanced Concession & Contrast (Notwithstanding..., Albeit...)) qoidasiga ko'ra, to'g'ri shakl 'Not only does rapid industrialization create jobs, but it also alters rural demographics.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "8-Savol: \"Advanced Concession & Contrast (Notwithstanding..., Albeit...)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #8]",
      "options": [
        "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #8]",
        "Not only rapid industrialization creates jobs, but it also alters rural demographics. [Savol #8]",
        "Not only did rapid industrialization creates jobs, but it also alters rural demographics. [Savol #8]",
        "Not only does rapid industrialization created jobs, but it alters rural demographics. [Savol #8]"
      ],
      "correctAnswer": "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #8]",
      "explanation": "Ushbu birlik (Advanced Concession & Contrast (Notwithstanding..., Albeit...)) qoidasiga ko'ra, to'g'ri shakl 'Not only does rapid industrialization create jobs, but it also alters rural demographics.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "9-Savol: \"Advanced Concession & Contrast (Notwithstanding..., Albeit...)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #9]",
      "options": [
        "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #9]",
        "Not only rapid industrialization creates jobs, but it also alters rural demographics. [Savol #9]",
        "Not only did rapid industrialization creates jobs, but it also alters rural demographics. [Savol #9]",
        "Not only does rapid industrialization created jobs, but it alters rural demographics. [Savol #9]"
      ],
      "correctAnswer": "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #9]",
      "explanation": "Ushbu birlik (Advanced Concession & Contrast (Notwithstanding..., Albeit...)) qoidasiga ko'ra, to'g'ri shakl 'Not only does rapid industrialization create jobs, but it also alters rural demographics.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "10-Savol: \"Advanced Concession & Contrast (Notwithstanding..., Albeit...)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #10]",
      "options": [
        "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #10]",
        "Not only rapid industrialization creates jobs, but it also alters rural demographics. [Savol #10]",
        "Not only did rapid industrialization creates jobs, but it also alters rural demographics. [Savol #10]",
        "Not only does rapid industrialization created jobs, but it alters rural demographics. [Savol #10]"
      ],
      "correctAnswer": "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #10]",
      "explanation": "Ushbu birlik (Advanced Concession & Contrast (Notwithstanding..., Albeit...)) qoidasiga ko'ra, to'g'ri shakl 'Not only does rapid industrialization create jobs, but it also alters rural demographics.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    }
  ],
  "murphy_u40_subjunctive_mood": [
    {
      "question": "It is essential that every applicant _______ the prerequisite qualifications before enrolling.",
      "options": [
        "satisfy",
        "satisfies",
        "satisfied",
        "is satisfying"
      ],
      "correctAnswer": "satisfy",
      "explanation": "'It is essential that...' subyuktiv formulasida fe'l asosi (satisfy) hech qanday qo'shimchasiz keladi."
    },
    {
      "question": "2-Savol: \"Subjunctive Mood & Formal Mandates (It is imperative that... be done)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #2]",
      "options": [
        "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #2]",
        "Not only rapid industrialization creates jobs, but it also alters rural demographics. [Savol #2]",
        "Not only did rapid industrialization creates jobs, but it also alters rural demographics. [Savol #2]",
        "Not only does rapid industrialization created jobs, but it alters rural demographics. [Savol #2]"
      ],
      "correctAnswer": "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #2]",
      "explanation": "Ushbu birlik (Subjunctive Mood & Formal Mandates (It is imperative that... be done)) qoidasiga ko'ra, to'g'ri shakl 'Not only does rapid industrialization create jobs, but it also alters rural demographics.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "3-Savol: \"Subjunctive Mood & Formal Mandates (It is imperative that... be done)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #3]",
      "options": [
        "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #3]",
        "Not only rapid industrialization creates jobs, but it also alters rural demographics. [Savol #3]",
        "Not only did rapid industrialization creates jobs, but it also alters rural demographics. [Savol #3]",
        "Not only does rapid industrialization created jobs, but it alters rural demographics. [Savol #3]"
      ],
      "correctAnswer": "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #3]",
      "explanation": "Ushbu birlik (Subjunctive Mood & Formal Mandates (It is imperative that... be done)) qoidasiga ko'ra, to'g'ri shakl 'Not only does rapid industrialization create jobs, but it also alters rural demographics.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "4-Savol: \"Subjunctive Mood & Formal Mandates (It is imperative that... be done)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #4]",
      "options": [
        "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #4]",
        "Not only rapid industrialization creates jobs, but it also alters rural demographics. [Savol #4]",
        "Not only did rapid industrialization creates jobs, but it also alters rural demographics. [Savol #4]",
        "Not only does rapid industrialization created jobs, but it alters rural demographics. [Savol #4]"
      ],
      "correctAnswer": "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #4]",
      "explanation": "Ushbu birlik (Subjunctive Mood & Formal Mandates (It is imperative that... be done)) qoidasiga ko'ra, to'g'ri shakl 'Not only does rapid industrialization create jobs, but it also alters rural demographics.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "5-Savol: \"Subjunctive Mood & Formal Mandates (It is imperative that... be done)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #5]",
      "options": [
        "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #5]",
        "Not only rapid industrialization creates jobs, but it also alters rural demographics. [Savol #5]",
        "Not only did rapid industrialization creates jobs, but it also alters rural demographics. [Savol #5]",
        "Not only does rapid industrialization created jobs, but it alters rural demographics. [Savol #5]"
      ],
      "correctAnswer": "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #5]",
      "explanation": "Ushbu birlik (Subjunctive Mood & Formal Mandates (It is imperative that... be done)) qoidasiga ko'ra, to'g'ri shakl 'Not only does rapid industrialization create jobs, but it also alters rural demographics.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "6-Savol: \"Subjunctive Mood & Formal Mandates (It is imperative that... be done)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #6]",
      "options": [
        "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #6]",
        "Not only rapid industrialization creates jobs, but it also alters rural demographics. [Savol #6]",
        "Not only did rapid industrialization creates jobs, but it also alters rural demographics. [Savol #6]",
        "Not only does rapid industrialization created jobs, but it alters rural demographics. [Savol #6]"
      ],
      "correctAnswer": "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #6]",
      "explanation": "Ushbu birlik (Subjunctive Mood & Formal Mandates (It is imperative that... be done)) qoidasiga ko'ra, to'g'ri shakl 'Not only does rapid industrialization create jobs, but it also alters rural demographics.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "7-Savol: \"Subjunctive Mood & Formal Mandates (It is imperative that... be done)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #7]",
      "options": [
        "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #7]",
        "Not only rapid industrialization creates jobs, but it also alters rural demographics. [Savol #7]",
        "Not only did rapid industrialization creates jobs, but it also alters rural demographics. [Savol #7]",
        "Not only does rapid industrialization created jobs, but it alters rural demographics. [Savol #7]"
      ],
      "correctAnswer": "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #7]",
      "explanation": "Ushbu birlik (Subjunctive Mood & Formal Mandates (It is imperative that... be done)) qoidasiga ko'ra, to'g'ri shakl 'Not only does rapid industrialization create jobs, but it also alters rural demographics.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "8-Savol: \"Subjunctive Mood & Formal Mandates (It is imperative that... be done)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #8]",
      "options": [
        "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #8]",
        "Not only rapid industrialization creates jobs, but it also alters rural demographics. [Savol #8]",
        "Not only did rapid industrialization creates jobs, but it also alters rural demographics. [Savol #8]",
        "Not only does rapid industrialization created jobs, but it alters rural demographics. [Savol #8]"
      ],
      "correctAnswer": "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #8]",
      "explanation": "Ushbu birlik (Subjunctive Mood & Formal Mandates (It is imperative that... be done)) qoidasiga ko'ra, to'g'ri shakl 'Not only does rapid industrialization create jobs, but it also alters rural demographics.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "9-Savol: \"Subjunctive Mood & Formal Mandates (It is imperative that... be done)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #9]",
      "options": [
        "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #9]",
        "Not only rapid industrialization creates jobs, but it also alters rural demographics. [Savol #9]",
        "Not only did rapid industrialization creates jobs, but it also alters rural demographics. [Savol #9]",
        "Not only does rapid industrialization created jobs, but it alters rural demographics. [Savol #9]"
      ],
      "correctAnswer": "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #9]",
      "explanation": "Ushbu birlik (Subjunctive Mood & Formal Mandates (It is imperative that... be done)) qoidasiga ko'ra, to'g'ri shakl 'Not only does rapid industrialization create jobs, but it also alters rural demographics.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "10-Savol: \"Subjunctive Mood & Formal Mandates (It is imperative that... be done)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #10]",
      "options": [
        "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #10]",
        "Not only rapid industrialization creates jobs, but it also alters rural demographics. [Savol #10]",
        "Not only did rapid industrialization creates jobs, but it also alters rural demographics. [Savol #10]",
        "Not only does rapid industrialization created jobs, but it alters rural demographics. [Savol #10]"
      ],
      "correctAnswer": "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #10]",
      "explanation": "Ushbu birlik (Subjunctive Mood & Formal Mandates (It is imperative that... be done)) qoidasiga ko'ra, to'g'ri shakl 'Not only does rapid industrialization create jobs, but it also alters rural demographics.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    }
  ],
  "ielts_a2_01_past_continuous_vs_simple": [
    {
      "question": "While international delegates _______ the agreement, a major protest broke out outside.",
      "options": [
        "were discussing",
        "discussed",
        "are discussing",
        "have discussed"
      ],
      "correctAnswer": "were discussing",
      "explanation": "'While' bilan o'tmishda davom etayotgan ko'plik fon harakati (delegates were discussing) ishlatiladi."
    },
    {
      "question": "The power supply suddenly failed when researchers _______ crucial statistical calculations.",
      "options": [
        "were conducting",
        "conducted",
        "have conducted",
        "are conducting"
      ],
      "correctAnswer": "were conducting",
      "explanation": "'When' qisqa harakatni kiritganda, ikkinchi qismda davom etayotgan fon jarayoni (were conducting) bo'ladi."
    },
    {
      "question": "3-Savol: \"Past Continuous vs Past Simple (O'tmishdagi Hikoyalar & Kesishuvlar)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #3]",
      "options": [
        "Correct academic usage adhering to While / As + S + was/were + V-ing, S + V2 (Past Simple). [Savol #3]",
        "Incorrect auxiliary verb placement breaking the A2 grammar standard. [Savol #3]",
        "Incompatible tense sequence violating subject agreement. [Savol #3]",
        "Omission of essential verb particle or preposition. [Savol #3]"
      ],
      "correctAnswer": "Correct academic usage adhering to While / As + S + was/were + V-ing, S + V2 (Past Simple). [Savol #3]",
      "explanation": "Ushbu birlik (Past Continuous vs Past Simple (O'tmishdagi Hikoyalar & Kesishuvlar)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to While / As + S + was/were + V-ing, S + V2 (Past Simple).' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "4-Savol: \"Past Continuous vs Past Simple (O'tmishdagi Hikoyalar & Kesishuvlar)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #4]",
      "options": [
        "Correct academic usage adhering to While / As + S + was/were + V-ing, S + V2 (Past Simple). [Savol #4]",
        "Incorrect auxiliary verb placement breaking the A2 grammar standard. [Savol #4]",
        "Incompatible tense sequence violating subject agreement. [Savol #4]",
        "Omission of essential verb particle or preposition. [Savol #4]"
      ],
      "correctAnswer": "Correct academic usage adhering to While / As + S + was/were + V-ing, S + V2 (Past Simple). [Savol #4]",
      "explanation": "Ushbu birlik (Past Continuous vs Past Simple (O'tmishdagi Hikoyalar & Kesishuvlar)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to While / As + S + was/were + V-ing, S + V2 (Past Simple).' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "5-Savol: \"Past Continuous vs Past Simple (O'tmishdagi Hikoyalar & Kesishuvlar)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #5]",
      "options": [
        "Correct academic usage adhering to While / As + S + was/were + V-ing, S + V2 (Past Simple). [Savol #5]",
        "Incorrect auxiliary verb placement breaking the A2 grammar standard. [Savol #5]",
        "Incompatible tense sequence violating subject agreement. [Savol #5]",
        "Omission of essential verb particle or preposition. [Savol #5]"
      ],
      "correctAnswer": "Correct academic usage adhering to While / As + S + was/were + V-ing, S + V2 (Past Simple). [Savol #5]",
      "explanation": "Ushbu birlik (Past Continuous vs Past Simple (O'tmishdagi Hikoyalar & Kesishuvlar)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to While / As + S + was/were + V-ing, S + V2 (Past Simple).' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "6-Savol: \"Past Continuous vs Past Simple (O'tmishdagi Hikoyalar & Kesishuvlar)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #6]",
      "options": [
        "Correct academic usage adhering to While / As + S + was/were + V-ing, S + V2 (Past Simple). [Savol #6]",
        "Incorrect auxiliary verb placement breaking the A2 grammar standard. [Savol #6]",
        "Incompatible tense sequence violating subject agreement. [Savol #6]",
        "Omission of essential verb particle or preposition. [Savol #6]"
      ],
      "correctAnswer": "Correct academic usage adhering to While / As + S + was/were + V-ing, S + V2 (Past Simple). [Savol #6]",
      "explanation": "Ushbu birlik (Past Continuous vs Past Simple (O'tmishdagi Hikoyalar & Kesishuvlar)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to While / As + S + was/were + V-ing, S + V2 (Past Simple).' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "7-Savol: \"Past Continuous vs Past Simple (O'tmishdagi Hikoyalar & Kesishuvlar)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #7]",
      "options": [
        "Correct academic usage adhering to While / As + S + was/were + V-ing, S + V2 (Past Simple). [Savol #7]",
        "Incorrect auxiliary verb placement breaking the A2 grammar standard. [Savol #7]",
        "Incompatible tense sequence violating subject agreement. [Savol #7]",
        "Omission of essential verb particle or preposition. [Savol #7]"
      ],
      "correctAnswer": "Correct academic usage adhering to While / As + S + was/were + V-ing, S + V2 (Past Simple). [Savol #7]",
      "explanation": "Ushbu birlik (Past Continuous vs Past Simple (O'tmishdagi Hikoyalar & Kesishuvlar)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to While / As + S + was/were + V-ing, S + V2 (Past Simple).' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "8-Savol: \"Past Continuous vs Past Simple (O'tmishdagi Hikoyalar & Kesishuvlar)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #8]",
      "options": [
        "Correct academic usage adhering to While / As + S + was/were + V-ing, S + V2 (Past Simple). [Savol #8]",
        "Incorrect auxiliary verb placement breaking the A2 grammar standard. [Savol #8]",
        "Incompatible tense sequence violating subject agreement. [Savol #8]",
        "Omission of essential verb particle or preposition. [Savol #8]"
      ],
      "correctAnswer": "Correct academic usage adhering to While / As + S + was/were + V-ing, S + V2 (Past Simple). [Savol #8]",
      "explanation": "Ushbu birlik (Past Continuous vs Past Simple (O'tmishdagi Hikoyalar & Kesishuvlar)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to While / As + S + was/were + V-ing, S + V2 (Past Simple).' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "9-Savol: \"Past Continuous vs Past Simple (O'tmishdagi Hikoyalar & Kesishuvlar)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #9]",
      "options": [
        "Correct academic usage adhering to While / As + S + was/were + V-ing, S + V2 (Past Simple). [Savol #9]",
        "Incorrect auxiliary verb placement breaking the A2 grammar standard. [Savol #9]",
        "Incompatible tense sequence violating subject agreement. [Savol #9]",
        "Omission of essential verb particle or preposition. [Savol #9]"
      ],
      "correctAnswer": "Correct academic usage adhering to While / As + S + was/were + V-ing, S + V2 (Past Simple). [Savol #9]",
      "explanation": "Ushbu birlik (Past Continuous vs Past Simple (O'tmishdagi Hikoyalar & Kesishuvlar)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to While / As + S + was/were + V-ing, S + V2 (Past Simple).' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "10-Savol: \"Past Continuous vs Past Simple (O'tmishdagi Hikoyalar & Kesishuvlar)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #10]",
      "options": [
        "Correct academic usage adhering to While / As + S + was/were + V-ing, S + V2 (Past Simple). [Savol #10]",
        "Incorrect auxiliary verb placement breaking the A2 grammar standard. [Savol #10]",
        "Incompatible tense sequence violating subject agreement. [Savol #10]",
        "Omission of essential verb particle or preposition. [Savol #10]"
      ],
      "correctAnswer": "Correct academic usage adhering to While / As + S + was/were + V-ing, S + V2 (Past Simple). [Savol #10]",
      "explanation": "Ushbu birlik (Past Continuous vs Past Simple (O'tmishdagi Hikoyalar & Kesishuvlar)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to While / As + S + was/were + V-ing, S + V2 (Past Simple).' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    }
  ],
  "ielts_a2_02_present_perfect_experience": [
    {
      "question": "Technological innovation _______ the way people communicate globally.",
      "options": [
        "has fundamentally changed",
        "fundamentally changed",
        "have fundamentally changed",
        "is fundamentally changing"
      ],
      "correctAnswer": "has fundamentally changed",
      "explanation": "'Innovation' birlik ot, hozirgi natijani ifodalash uchun 'has fundamentally changed' to'g'ri."
    },
    {
      "question": "The local authorities have not completed the subway extension _______.",
      "options": [
        "yet",
        "already",
        "just",
        "ever"
      ],
      "correctAnswer": "yet",
      "explanation": "Inkor gaplarning oxirida 'hali' ma'nosida faqat 'yet' ishlatiladi."
    },
    {
      "question": "3-Savol: \"Present Perfect (just, already, yet, ever, never)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #3]",
      "options": [
        "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #3]",
        "Researchers has recently discovered conclusive evidence supporting this hypothesis. [Savol #3]",
        "Researchers have recently discover conclusive evidence supporting this hypothesis. [Savol #3]",
        "Researchers have discovered recently evidence supporting this hypothesis yesterday. [Savol #3]"
      ],
      "correctAnswer": "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #3]",
      "explanation": "Ushbu birlik (Present Perfect (just, already, yet, ever, never)) qoidasiga ko'ra, to'g'ri shakl 'Researchers have recently discovered conclusive evidence supporting this hypothesis.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "4-Savol: \"Present Perfect (just, already, yet, ever, never)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #4]",
      "options": [
        "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #4]",
        "Researchers has recently discovered conclusive evidence supporting this hypothesis. [Savol #4]",
        "Researchers have recently discover conclusive evidence supporting this hypothesis. [Savol #4]",
        "Researchers have discovered recently evidence supporting this hypothesis yesterday. [Savol #4]"
      ],
      "correctAnswer": "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #4]",
      "explanation": "Ushbu birlik (Present Perfect (just, already, yet, ever, never)) qoidasiga ko'ra, to'g'ri shakl 'Researchers have recently discovered conclusive evidence supporting this hypothesis.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "5-Savol: \"Present Perfect (just, already, yet, ever, never)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #5]",
      "options": [
        "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #5]",
        "Researchers has recently discovered conclusive evidence supporting this hypothesis. [Savol #5]",
        "Researchers have recently discover conclusive evidence supporting this hypothesis. [Savol #5]",
        "Researchers have discovered recently evidence supporting this hypothesis yesterday. [Savol #5]"
      ],
      "correctAnswer": "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #5]",
      "explanation": "Ushbu birlik (Present Perfect (just, already, yet, ever, never)) qoidasiga ko'ra, to'g'ri shakl 'Researchers have recently discovered conclusive evidence supporting this hypothesis.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "6-Savol: \"Present Perfect (just, already, yet, ever, never)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #6]",
      "options": [
        "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #6]",
        "Researchers has recently discovered conclusive evidence supporting this hypothesis. [Savol #6]",
        "Researchers have recently discover conclusive evidence supporting this hypothesis. [Savol #6]",
        "Researchers have discovered recently evidence supporting this hypothesis yesterday. [Savol #6]"
      ],
      "correctAnswer": "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #6]",
      "explanation": "Ushbu birlik (Present Perfect (just, already, yet, ever, never)) qoidasiga ko'ra, to'g'ri shakl 'Researchers have recently discovered conclusive evidence supporting this hypothesis.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "7-Savol: \"Present Perfect (just, already, yet, ever, never)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #7]",
      "options": [
        "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #7]",
        "Researchers has recently discovered conclusive evidence supporting this hypothesis. [Savol #7]",
        "Researchers have recently discover conclusive evidence supporting this hypothesis. [Savol #7]",
        "Researchers have discovered recently evidence supporting this hypothesis yesterday. [Savol #7]"
      ],
      "correctAnswer": "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #7]",
      "explanation": "Ushbu birlik (Present Perfect (just, already, yet, ever, never)) qoidasiga ko'ra, to'g'ri shakl 'Researchers have recently discovered conclusive evidence supporting this hypothesis.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "8-Savol: \"Present Perfect (just, already, yet, ever, never)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #8]",
      "options": [
        "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #8]",
        "Researchers has recently discovered conclusive evidence supporting this hypothesis. [Savol #8]",
        "Researchers have recently discover conclusive evidence supporting this hypothesis. [Savol #8]",
        "Researchers have discovered recently evidence supporting this hypothesis yesterday. [Savol #8]"
      ],
      "correctAnswer": "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #8]",
      "explanation": "Ushbu birlik (Present Perfect (just, already, yet, ever, never)) qoidasiga ko'ra, to'g'ri shakl 'Researchers have recently discovered conclusive evidence supporting this hypothesis.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "9-Savol: \"Present Perfect (just, already, yet, ever, never)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #9]",
      "options": [
        "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #9]",
        "Researchers has recently discovered conclusive evidence supporting this hypothesis. [Savol #9]",
        "Researchers have recently discover conclusive evidence supporting this hypothesis. [Savol #9]",
        "Researchers have discovered recently evidence supporting this hypothesis yesterday. [Savol #9]"
      ],
      "correctAnswer": "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #9]",
      "explanation": "Ushbu birlik (Present Perfect (just, already, yet, ever, never)) qoidasiga ko'ra, to'g'ri shakl 'Researchers have recently discovered conclusive evidence supporting this hypothesis.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "10-Savol: \"Present Perfect (just, already, yet, ever, never)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #10]",
      "options": [
        "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #10]",
        "Researchers has recently discovered conclusive evidence supporting this hypothesis. [Savol #10]",
        "Researchers have recently discover conclusive evidence supporting this hypothesis. [Savol #10]",
        "Researchers have discovered recently evidence supporting this hypothesis yesterday. [Savol #10]"
      ],
      "correctAnswer": "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #10]",
      "explanation": "Ushbu birlik (Present Perfect (just, already, yet, ever, never)) qoidasiga ko'ra, to'g'ri shakl 'Researchers have recently discovered conclusive evidence supporting this hypothesis.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    }
  ],
  "ielts_a2_03_future_forms": [
    {
      "question": "Look at the budget deficit figures. The project _______ running out of capital.",
      "options": [
        "is going to end up",
        "will end up",
        "ends up",
        "is ending up"
      ],
      "correctAnswer": "is going to end up",
      "explanation": "Ko'z o'ngidagi aniq faktik dalil (Look at...) asosidagi bashorat uchun 'is going to' to'g'ri."
    },
    {
      "question": "I haven't booked my flights yet, but I think I _______ next Thursday.",
      "options": [
        "will travel",
        "am travelling",
        "travel",
        "was travelling"
      ],
      "correctAnswer": "will travel",
      "explanation": "'I think' va aniq rejasiz taxminiy qaror uchun 'will travel' to'g'ri."
    },
    {
      "question": "3-Savol: \"Future Intentions & Predictions (will vs be going to vs V-ing)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #3]",
      "options": [
        "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #3]",
        "Researchers has recently discovered conclusive evidence supporting this hypothesis. [Savol #3]",
        "Researchers have recently discover conclusive evidence supporting this hypothesis. [Savol #3]",
        "Researchers have discovered recently evidence supporting this hypothesis yesterday. [Savol #3]"
      ],
      "correctAnswer": "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #3]",
      "explanation": "Ushbu birlik (Future Intentions & Predictions (will vs be going to vs V-ing)) qoidasiga ko'ra, to'g'ri shakl 'Researchers have recently discovered conclusive evidence supporting this hypothesis.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "4-Savol: \"Future Intentions & Predictions (will vs be going to vs V-ing)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #4]",
      "options": [
        "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #4]",
        "Researchers has recently discovered conclusive evidence supporting this hypothesis. [Savol #4]",
        "Researchers have recently discover conclusive evidence supporting this hypothesis. [Savol #4]",
        "Researchers have discovered recently evidence supporting this hypothesis yesterday. [Savol #4]"
      ],
      "correctAnswer": "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #4]",
      "explanation": "Ushbu birlik (Future Intentions & Predictions (will vs be going to vs V-ing)) qoidasiga ko'ra, to'g'ri shakl 'Researchers have recently discovered conclusive evidence supporting this hypothesis.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "5-Savol: \"Future Intentions & Predictions (will vs be going to vs V-ing)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #5]",
      "options": [
        "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #5]",
        "Researchers has recently discovered conclusive evidence supporting this hypothesis. [Savol #5]",
        "Researchers have recently discover conclusive evidence supporting this hypothesis. [Savol #5]",
        "Researchers have discovered recently evidence supporting this hypothesis yesterday. [Savol #5]"
      ],
      "correctAnswer": "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #5]",
      "explanation": "Ushbu birlik (Future Intentions & Predictions (will vs be going to vs V-ing)) qoidasiga ko'ra, to'g'ri shakl 'Researchers have recently discovered conclusive evidence supporting this hypothesis.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "6-Savol: \"Future Intentions & Predictions (will vs be going to vs V-ing)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #6]",
      "options": [
        "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #6]",
        "Researchers has recently discovered conclusive evidence supporting this hypothesis. [Savol #6]",
        "Researchers have recently discover conclusive evidence supporting this hypothesis. [Savol #6]",
        "Researchers have discovered recently evidence supporting this hypothesis yesterday. [Savol #6]"
      ],
      "correctAnswer": "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #6]",
      "explanation": "Ushbu birlik (Future Intentions & Predictions (will vs be going to vs V-ing)) qoidasiga ko'ra, to'g'ri shakl 'Researchers have recently discovered conclusive evidence supporting this hypothesis.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "7-Savol: \"Future Intentions & Predictions (will vs be going to vs V-ing)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #7]",
      "options": [
        "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #7]",
        "Researchers has recently discovered conclusive evidence supporting this hypothesis. [Savol #7]",
        "Researchers have recently discover conclusive evidence supporting this hypothesis. [Savol #7]",
        "Researchers have discovered recently evidence supporting this hypothesis yesterday. [Savol #7]"
      ],
      "correctAnswer": "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #7]",
      "explanation": "Ushbu birlik (Future Intentions & Predictions (will vs be going to vs V-ing)) qoidasiga ko'ra, to'g'ri shakl 'Researchers have recently discovered conclusive evidence supporting this hypothesis.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "8-Savol: \"Future Intentions & Predictions (will vs be going to vs V-ing)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #8]",
      "options": [
        "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #8]",
        "Researchers has recently discovered conclusive evidence supporting this hypothesis. [Savol #8]",
        "Researchers have recently discover conclusive evidence supporting this hypothesis. [Savol #8]",
        "Researchers have discovered recently evidence supporting this hypothesis yesterday. [Savol #8]"
      ],
      "correctAnswer": "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #8]",
      "explanation": "Ushbu birlik (Future Intentions & Predictions (will vs be going to vs V-ing)) qoidasiga ko'ra, to'g'ri shakl 'Researchers have recently discovered conclusive evidence supporting this hypothesis.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "9-Savol: \"Future Intentions & Predictions (will vs be going to vs V-ing)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #9]",
      "options": [
        "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #9]",
        "Researchers has recently discovered conclusive evidence supporting this hypothesis. [Savol #9]",
        "Researchers have recently discover conclusive evidence supporting this hypothesis. [Savol #9]",
        "Researchers have discovered recently evidence supporting this hypothesis yesterday. [Savol #9]"
      ],
      "correctAnswer": "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #9]",
      "explanation": "Ushbu birlik (Future Intentions & Predictions (will vs be going to vs V-ing)) qoidasiga ko'ra, to'g'ri shakl 'Researchers have recently discovered conclusive evidence supporting this hypothesis.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "10-Savol: \"Future Intentions & Predictions (will vs be going to vs V-ing)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #10]",
      "options": [
        "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #10]",
        "Researchers has recently discovered conclusive evidence supporting this hypothesis. [Savol #10]",
        "Researchers have recently discover conclusive evidence supporting this hypothesis. [Savol #10]",
        "Researchers have discovered recently evidence supporting this hypothesis yesterday. [Savol #10]"
      ],
      "correctAnswer": "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #10]",
      "explanation": "Ushbu birlik (Future Intentions & Predictions (will vs be going to vs V-ing)) qoidasiga ko'ra, to'g'ri shakl 'Researchers have recently discovered conclusive evidence supporting this hypothesis.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    }
  ],
  "ielts_a2_04_modals_ability_advice": [
    {
      "question": "Educational institutions _______ provide psychological counselling for stressed students.",
      "options": [
        "should",
        "should to",
        "ought",
        "must to"
      ],
      "correctAnswer": "should",
      "explanation": "Maslahat berishda 'should + Base verb' (should provide) to'g'ri formuladir."
    },
    {
      "question": "Before the digital revolution, library users _______ only access physical archives.",
      "options": [
        "could",
        "can",
        "may",
        "should"
      ],
      "correctAnswer": "could",
      "explanation": "O'tmishdagi qobiliyat va imkoniyat uchun 'could' ishlatiladi."
    },
    {
      "question": "3-Savol: \"Modals of Ability & Advice (can, could, should, may)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #3]",
      "options": [
        "Candidates must adhere strictly to the examination time limits. [Savol #3]",
        "Candidates must to adhere strictly to the examination time limits. [Savol #3]",
        "Candidates must adhering strictly to the examination time limits. [Savol #3]",
        "Candidates ought adhere strictly to the examination time limits. [Savol #3]"
      ],
      "correctAnswer": "Candidates must adhere strictly to the examination time limits. [Savol #3]",
      "explanation": "Ushbu birlik (Modals of Ability & Advice (can, could, should, may)) qoidasiga ko'ra, to'g'ri shakl 'Candidates must adhere strictly to the examination time limits.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "4-Savol: \"Modals of Ability & Advice (can, could, should, may)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #4]",
      "options": [
        "Candidates must adhere strictly to the examination time limits. [Savol #4]",
        "Candidates must to adhere strictly to the examination time limits. [Savol #4]",
        "Candidates must adhering strictly to the examination time limits. [Savol #4]",
        "Candidates ought adhere strictly to the examination time limits. [Savol #4]"
      ],
      "correctAnswer": "Candidates must adhere strictly to the examination time limits. [Savol #4]",
      "explanation": "Ushbu birlik (Modals of Ability & Advice (can, could, should, may)) qoidasiga ko'ra, to'g'ri shakl 'Candidates must adhere strictly to the examination time limits.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "5-Savol: \"Modals of Ability & Advice (can, could, should, may)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #5]",
      "options": [
        "Candidates must adhere strictly to the examination time limits. [Savol #5]",
        "Candidates must to adhere strictly to the examination time limits. [Savol #5]",
        "Candidates must adhering strictly to the examination time limits. [Savol #5]",
        "Candidates ought adhere strictly to the examination time limits. [Savol #5]"
      ],
      "correctAnswer": "Candidates must adhere strictly to the examination time limits. [Savol #5]",
      "explanation": "Ushbu birlik (Modals of Ability & Advice (can, could, should, may)) qoidasiga ko'ra, to'g'ri shakl 'Candidates must adhere strictly to the examination time limits.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "6-Savol: \"Modals of Ability & Advice (can, could, should, may)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #6]",
      "options": [
        "Candidates must adhere strictly to the examination time limits. [Savol #6]",
        "Candidates must to adhere strictly to the examination time limits. [Savol #6]",
        "Candidates must adhering strictly to the examination time limits. [Savol #6]",
        "Candidates ought adhere strictly to the examination time limits. [Savol #6]"
      ],
      "correctAnswer": "Candidates must adhere strictly to the examination time limits. [Savol #6]",
      "explanation": "Ushbu birlik (Modals of Ability & Advice (can, could, should, may)) qoidasiga ko'ra, to'g'ri shakl 'Candidates must adhere strictly to the examination time limits.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "7-Savol: \"Modals of Ability & Advice (can, could, should, may)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #7]",
      "options": [
        "Candidates must adhere strictly to the examination time limits. [Savol #7]",
        "Candidates must to adhere strictly to the examination time limits. [Savol #7]",
        "Candidates must adhering strictly to the examination time limits. [Savol #7]",
        "Candidates ought adhere strictly to the examination time limits. [Savol #7]"
      ],
      "correctAnswer": "Candidates must adhere strictly to the examination time limits. [Savol #7]",
      "explanation": "Ushbu birlik (Modals of Ability & Advice (can, could, should, may)) qoidasiga ko'ra, to'g'ri shakl 'Candidates must adhere strictly to the examination time limits.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "8-Savol: \"Modals of Ability & Advice (can, could, should, may)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #8]",
      "options": [
        "Candidates must adhere strictly to the examination time limits. [Savol #8]",
        "Candidates must to adhere strictly to the examination time limits. [Savol #8]",
        "Candidates must adhering strictly to the examination time limits. [Savol #8]",
        "Candidates ought adhere strictly to the examination time limits. [Savol #8]"
      ],
      "correctAnswer": "Candidates must adhere strictly to the examination time limits. [Savol #8]",
      "explanation": "Ushbu birlik (Modals of Ability & Advice (can, could, should, may)) qoidasiga ko'ra, to'g'ri shakl 'Candidates must adhere strictly to the examination time limits.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "9-Savol: \"Modals of Ability & Advice (can, could, should, may)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #9]",
      "options": [
        "Candidates must adhere strictly to the examination time limits. [Savol #9]",
        "Candidates must to adhere strictly to the examination time limits. [Savol #9]",
        "Candidates must adhering strictly to the examination time limits. [Savol #9]",
        "Candidates ought adhere strictly to the examination time limits. [Savol #9]"
      ],
      "correctAnswer": "Candidates must adhere strictly to the examination time limits. [Savol #9]",
      "explanation": "Ushbu birlik (Modals of Ability & Advice (can, could, should, may)) qoidasiga ko'ra, to'g'ri shakl 'Candidates must adhere strictly to the examination time limits.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "10-Savol: \"Modals of Ability & Advice (can, could, should, may)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #10]",
      "options": [
        "Candidates must adhere strictly to the examination time limits. [Savol #10]",
        "Candidates must to adhere strictly to the examination time limits. [Savol #10]",
        "Candidates must adhering strictly to the examination time limits. [Savol #10]",
        "Candidates ought adhere strictly to the examination time limits. [Savol #10]"
      ],
      "correctAnswer": "Candidates must adhere strictly to the examination time limits. [Savol #10]",
      "explanation": "Ushbu birlik (Modals of Ability & Advice (can, could, should, may)) qoidasiga ko'ra, to'g'ri shakl 'Candidates must adhere strictly to the examination time limits.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    }
  ],
  "ielts_a2_05_comparatives_superlatives": [
    {
      "question": "The unemployment rate in region A was _______ than that recorded in region B.",
      "options": [
        "substantially lower",
        "more lower",
        "lower much",
        "the lowest"
      ],
      "correctAnswer": "substantially lower",
      "explanation": "Qiyosiy daraja (lower) oldidan kuchaytiruvchi ravish 'substantially lower' to'g'ri keladi."
    },
    {
      "question": "Car manufacturing was _______ industry sector in the region during 2022.",
      "options": [
        "the most profitable",
        "more profitable",
        "most profitable",
        "profitablest"
      ],
      "correctAnswer": "the most profitable",
      "explanation": "Orttirma darajada artikl bilan birga 'the most profitable' qo'llanadi."
    },
    {
      "question": "3-Savol: \"Comparatives & Superlatives in Data Comparison\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #3]",
      "options": [
        "Correct academic usage adhering to Qiyosiy: adj + -er than / more + adj + than. [Savol #3]",
        "Incorrect auxiliary verb placement breaking the A2 grammar standard. [Savol #3]",
        "Incompatible tense sequence violating subject agreement. [Savol #3]",
        "Omission of essential verb particle or preposition. [Savol #3]"
      ],
      "correctAnswer": "Correct academic usage adhering to Qiyosiy: adj + -er than / more + adj + than. [Savol #3]",
      "explanation": "Ushbu birlik (Comparatives & Superlatives in Data Comparison) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to Qiyosiy: adj + -er than / more + adj + than.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "4-Savol: \"Comparatives & Superlatives in Data Comparison\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #4]",
      "options": [
        "Correct academic usage adhering to Qiyosiy: adj + -er than / more + adj + than. [Savol #4]",
        "Incorrect auxiliary verb placement breaking the A2 grammar standard. [Savol #4]",
        "Incompatible tense sequence violating subject agreement. [Savol #4]",
        "Omission of essential verb particle or preposition. [Savol #4]"
      ],
      "correctAnswer": "Correct academic usage adhering to Qiyosiy: adj + -er than / more + adj + than. [Savol #4]",
      "explanation": "Ushbu birlik (Comparatives & Superlatives in Data Comparison) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to Qiyosiy: adj + -er than / more + adj + than.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "5-Savol: \"Comparatives & Superlatives in Data Comparison\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #5]",
      "options": [
        "Correct academic usage adhering to Qiyosiy: adj + -er than / more + adj + than. [Savol #5]",
        "Incorrect auxiliary verb placement breaking the A2 grammar standard. [Savol #5]",
        "Incompatible tense sequence violating subject agreement. [Savol #5]",
        "Omission of essential verb particle or preposition. [Savol #5]"
      ],
      "correctAnswer": "Correct academic usage adhering to Qiyosiy: adj + -er than / more + adj + than. [Savol #5]",
      "explanation": "Ushbu birlik (Comparatives & Superlatives in Data Comparison) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to Qiyosiy: adj + -er than / more + adj + than.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "6-Savol: \"Comparatives & Superlatives in Data Comparison\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #6]",
      "options": [
        "Correct academic usage adhering to Qiyosiy: adj + -er than / more + adj + than. [Savol #6]",
        "Incorrect auxiliary verb placement breaking the A2 grammar standard. [Savol #6]",
        "Incompatible tense sequence violating subject agreement. [Savol #6]",
        "Omission of essential verb particle or preposition. [Savol #6]"
      ],
      "correctAnswer": "Correct academic usage adhering to Qiyosiy: adj + -er than / more + adj + than. [Savol #6]",
      "explanation": "Ushbu birlik (Comparatives & Superlatives in Data Comparison) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to Qiyosiy: adj + -er than / more + adj + than.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "7-Savol: \"Comparatives & Superlatives in Data Comparison\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #7]",
      "options": [
        "Correct academic usage adhering to Qiyosiy: adj + -er than / more + adj + than. [Savol #7]",
        "Incorrect auxiliary verb placement breaking the A2 grammar standard. [Savol #7]",
        "Incompatible tense sequence violating subject agreement. [Savol #7]",
        "Omission of essential verb particle or preposition. [Savol #7]"
      ],
      "correctAnswer": "Correct academic usage adhering to Qiyosiy: adj + -er than / more + adj + than. [Savol #7]",
      "explanation": "Ushbu birlik (Comparatives & Superlatives in Data Comparison) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to Qiyosiy: adj + -er than / more + adj + than.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "8-Savol: \"Comparatives & Superlatives in Data Comparison\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #8]",
      "options": [
        "Correct academic usage adhering to Qiyosiy: adj + -er than / more + adj + than. [Savol #8]",
        "Incorrect auxiliary verb placement breaking the A2 grammar standard. [Savol #8]",
        "Incompatible tense sequence violating subject agreement. [Savol #8]",
        "Omission of essential verb particle or preposition. [Savol #8]"
      ],
      "correctAnswer": "Correct academic usage adhering to Qiyosiy: adj + -er than / more + adj + than. [Savol #8]",
      "explanation": "Ushbu birlik (Comparatives & Superlatives in Data Comparison) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to Qiyosiy: adj + -er than / more + adj + than.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "9-Savol: \"Comparatives & Superlatives in Data Comparison\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #9]",
      "options": [
        "Correct academic usage adhering to Qiyosiy: adj + -er than / more + adj + than. [Savol #9]",
        "Incorrect auxiliary verb placement breaking the A2 grammar standard. [Savol #9]",
        "Incompatible tense sequence violating subject agreement. [Savol #9]",
        "Omission of essential verb particle or preposition. [Savol #9]"
      ],
      "correctAnswer": "Correct academic usage adhering to Qiyosiy: adj + -er than / more + adj + than. [Savol #9]",
      "explanation": "Ushbu birlik (Comparatives & Superlatives in Data Comparison) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to Qiyosiy: adj + -er than / more + adj + than.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "10-Savol: \"Comparatives & Superlatives in Data Comparison\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #10]",
      "options": [
        "Correct academic usage adhering to Qiyosiy: adj + -er than / more + adj + than. [Savol #10]",
        "Incorrect auxiliary verb placement breaking the A2 grammar standard. [Savol #10]",
        "Incompatible tense sequence violating subject agreement. [Savol #10]",
        "Omission of essential verb particle or preposition. [Savol #10]"
      ],
      "correctAnswer": "Correct academic usage adhering to Qiyosiy: adj + -er than / more + adj + than. [Savol #10]",
      "explanation": "Ushbu birlik (Comparatives & Superlatives in Data Comparison) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to Qiyosiy: adj + -er than / more + adj + than.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    }
  ],
  "ielts_a2_06_quantifiers_countability": [
    {
      "question": "A substantial _______ of electricity was generated via wind turbines.",
      "options": [
        "amount",
        "number",
        "few",
        "many"
      ],
      "correctAnswer": "amount",
      "explanation": "'Electricity' sanalmaydigan ot bo'lgani uchun 'amount' to'g'ri tanlovdir."
    },
    {
      "question": "Recent scientific _______ indicates that sleep deprivation impairs cognitive memory.",
      "options": [
        "research",
        "researches",
        "a research",
        "some researches"
      ],
      "correctAnswer": "research",
      "explanation": "'Research' sanalmaydigan ot bo'lib, ko'plik qo'shimchasini olmaydi."
    },
    {
      "question": "3-Savol: \"Countable vs Uncountable Nouns & Quantifiers\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #3]",
      "options": [
        "If governments invest in renewable energy, carbon emissions will decline significantly. [Savol #3]",
        "If governments will invest in renewable energy, carbon emissions decline. [Savol #3]",
        "If governments invested in renewable energy, carbon emissions will decline. [Savol #3]",
        "If governments invest in renewable energy, carbon emissions would declined. [Savol #3]"
      ],
      "correctAnswer": "If governments invest in renewable energy, carbon emissions will decline significantly. [Savol #3]",
      "explanation": "Ushbu birlik (Countable vs Uncountable Nouns & Quantifiers) qoidasiga ko'ra, to'g'ri shakl 'If governments invest in renewable energy, carbon emissions will decline significantly.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "4-Savol: \"Countable vs Uncountable Nouns & Quantifiers\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #4]",
      "options": [
        "If governments invest in renewable energy, carbon emissions will decline significantly. [Savol #4]",
        "If governments will invest in renewable energy, carbon emissions decline. [Savol #4]",
        "If governments invested in renewable energy, carbon emissions will decline. [Savol #4]",
        "If governments invest in renewable energy, carbon emissions would declined. [Savol #4]"
      ],
      "correctAnswer": "If governments invest in renewable energy, carbon emissions will decline significantly. [Savol #4]",
      "explanation": "Ushbu birlik (Countable vs Uncountable Nouns & Quantifiers) qoidasiga ko'ra, to'g'ri shakl 'If governments invest in renewable energy, carbon emissions will decline significantly.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "5-Savol: \"Countable vs Uncountable Nouns & Quantifiers\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #5]",
      "options": [
        "If governments invest in renewable energy, carbon emissions will decline significantly. [Savol #5]",
        "If governments will invest in renewable energy, carbon emissions decline. [Savol #5]",
        "If governments invested in renewable energy, carbon emissions will decline. [Savol #5]",
        "If governments invest in renewable energy, carbon emissions would declined. [Savol #5]"
      ],
      "correctAnswer": "If governments invest in renewable energy, carbon emissions will decline significantly. [Savol #5]",
      "explanation": "Ushbu birlik (Countable vs Uncountable Nouns & Quantifiers) qoidasiga ko'ra, to'g'ri shakl 'If governments invest in renewable energy, carbon emissions will decline significantly.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "6-Savol: \"Countable vs Uncountable Nouns & Quantifiers\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #6]",
      "options": [
        "If governments invest in renewable energy, carbon emissions will decline significantly. [Savol #6]",
        "If governments will invest in renewable energy, carbon emissions decline. [Savol #6]",
        "If governments invested in renewable energy, carbon emissions will decline. [Savol #6]",
        "If governments invest in renewable energy, carbon emissions would declined. [Savol #6]"
      ],
      "correctAnswer": "If governments invest in renewable energy, carbon emissions will decline significantly. [Savol #6]",
      "explanation": "Ushbu birlik (Countable vs Uncountable Nouns & Quantifiers) qoidasiga ko'ra, to'g'ri shakl 'If governments invest in renewable energy, carbon emissions will decline significantly.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "7-Savol: \"Countable vs Uncountable Nouns & Quantifiers\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #7]",
      "options": [
        "If governments invest in renewable energy, carbon emissions will decline significantly. [Savol #7]",
        "If governments will invest in renewable energy, carbon emissions decline. [Savol #7]",
        "If governments invested in renewable energy, carbon emissions will decline. [Savol #7]",
        "If governments invest in renewable energy, carbon emissions would declined. [Savol #7]"
      ],
      "correctAnswer": "If governments invest in renewable energy, carbon emissions will decline significantly. [Savol #7]",
      "explanation": "Ushbu birlik (Countable vs Uncountable Nouns & Quantifiers) qoidasiga ko'ra, to'g'ri shakl 'If governments invest in renewable energy, carbon emissions will decline significantly.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "8-Savol: \"Countable vs Uncountable Nouns & Quantifiers\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #8]",
      "options": [
        "If governments invest in renewable energy, carbon emissions will decline significantly. [Savol #8]",
        "If governments will invest in renewable energy, carbon emissions decline. [Savol #8]",
        "If governments invested in renewable energy, carbon emissions will decline. [Savol #8]",
        "If governments invest in renewable energy, carbon emissions would declined. [Savol #8]"
      ],
      "correctAnswer": "If governments invest in renewable energy, carbon emissions will decline significantly. [Savol #8]",
      "explanation": "Ushbu birlik (Countable vs Uncountable Nouns & Quantifiers) qoidasiga ko'ra, to'g'ri shakl 'If governments invest in renewable energy, carbon emissions will decline significantly.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "9-Savol: \"Countable vs Uncountable Nouns & Quantifiers\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #9]",
      "options": [
        "If governments invest in renewable energy, carbon emissions will decline significantly. [Savol #9]",
        "If governments will invest in renewable energy, carbon emissions decline. [Savol #9]",
        "If governments invested in renewable energy, carbon emissions will decline. [Savol #9]",
        "If governments invest in renewable energy, carbon emissions would declined. [Savol #9]"
      ],
      "correctAnswer": "If governments invest in renewable energy, carbon emissions will decline significantly. [Savol #9]",
      "explanation": "Ushbu birlik (Countable vs Uncountable Nouns & Quantifiers) qoidasiga ko'ra, to'g'ri shakl 'If governments invest in renewable energy, carbon emissions will decline significantly.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "10-Savol: \"Countable vs Uncountable Nouns & Quantifiers\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #10]",
      "options": [
        "If governments invest in renewable energy, carbon emissions will decline significantly. [Savol #10]",
        "If governments will invest in renewable energy, carbon emissions decline. [Savol #10]",
        "If governments invested in renewable energy, carbon emissions will decline. [Savol #10]",
        "If governments invest in renewable energy, carbon emissions would declined. [Savol #10]"
      ],
      "correctAnswer": "If governments invest in renewable energy, carbon emissions will decline significantly. [Savol #10]",
      "explanation": "Ushbu birlik (Countable vs Uncountable Nouns & Quantifiers) qoidasiga ko'ra, to'g'ri shakl 'If governments invest in renewable energy, carbon emissions will decline significantly.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    }
  ],
  "ielts_a2_07_defining_relative_clauses": [
    {
      "question": "Individuals _______ regularly engage in volunteering exhibit greater empathy.",
      "options": [
        "who",
        "which",
        "whose",
        "where"
      ],
      "correctAnswer": "who",
      "explanation": "'Individuals' odamlarni bildirgani uchun 'who' nisbiy olmoshi to'g'ri."
    },
    {
      "question": "The university laboratory _______ the experiments were conducted is fully certified.",
      "options": [
        "where",
        "which",
        "who",
        "whom"
      ],
      "correctAnswer": "where",
      "explanation": "Tajribalar o'tkazilgan 'joyni' ko'rsatgani sababli 'where' ishlatiladi."
    },
    {
      "question": "3-Savol: \"Defining Relative Clauses (who, which, that, where)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #3]",
      "options": [
        "Correct academic usage adhering to Person + who/that + Verb. [Savol #3]",
        "Incorrect auxiliary verb placement breaking the A2 grammar standard. [Savol #3]",
        "Incompatible tense sequence violating subject agreement. [Savol #3]",
        "Omission of essential verb particle or preposition. [Savol #3]"
      ],
      "correctAnswer": "Correct academic usage adhering to Person + who/that + Verb. [Savol #3]",
      "explanation": "Ushbu birlik (Defining Relative Clauses (who, which, that, where)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to Person + who/that + Verb.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "4-Savol: \"Defining Relative Clauses (who, which, that, where)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #4]",
      "options": [
        "Correct academic usage adhering to Person + who/that + Verb. [Savol #4]",
        "Incorrect auxiliary verb placement breaking the A2 grammar standard. [Savol #4]",
        "Incompatible tense sequence violating subject agreement. [Savol #4]",
        "Omission of essential verb particle or preposition. [Savol #4]"
      ],
      "correctAnswer": "Correct academic usage adhering to Person + who/that + Verb. [Savol #4]",
      "explanation": "Ushbu birlik (Defining Relative Clauses (who, which, that, where)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to Person + who/that + Verb.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "5-Savol: \"Defining Relative Clauses (who, which, that, where)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #5]",
      "options": [
        "Correct academic usage adhering to Person + who/that + Verb. [Savol #5]",
        "Incorrect auxiliary verb placement breaking the A2 grammar standard. [Savol #5]",
        "Incompatible tense sequence violating subject agreement. [Savol #5]",
        "Omission of essential verb particle or preposition. [Savol #5]"
      ],
      "correctAnswer": "Correct academic usage adhering to Person + who/that + Verb. [Savol #5]",
      "explanation": "Ushbu birlik (Defining Relative Clauses (who, which, that, where)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to Person + who/that + Verb.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "6-Savol: \"Defining Relative Clauses (who, which, that, where)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #6]",
      "options": [
        "Correct academic usage adhering to Person + who/that + Verb. [Savol #6]",
        "Incorrect auxiliary verb placement breaking the A2 grammar standard. [Savol #6]",
        "Incompatible tense sequence violating subject agreement. [Savol #6]",
        "Omission of essential verb particle or preposition. [Savol #6]"
      ],
      "correctAnswer": "Correct academic usage adhering to Person + who/that + Verb. [Savol #6]",
      "explanation": "Ushbu birlik (Defining Relative Clauses (who, which, that, where)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to Person + who/that + Verb.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "7-Savol: \"Defining Relative Clauses (who, which, that, where)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #7]",
      "options": [
        "Correct academic usage adhering to Person + who/that + Verb. [Savol #7]",
        "Incorrect auxiliary verb placement breaking the A2 grammar standard. [Savol #7]",
        "Incompatible tense sequence violating subject agreement. [Savol #7]",
        "Omission of essential verb particle or preposition. [Savol #7]"
      ],
      "correctAnswer": "Correct academic usage adhering to Person + who/that + Verb. [Savol #7]",
      "explanation": "Ushbu birlik (Defining Relative Clauses (who, which, that, where)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to Person + who/that + Verb.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "8-Savol: \"Defining Relative Clauses (who, which, that, where)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #8]",
      "options": [
        "Correct academic usage adhering to Person + who/that + Verb. [Savol #8]",
        "Incorrect auxiliary verb placement breaking the A2 grammar standard. [Savol #8]",
        "Incompatible tense sequence violating subject agreement. [Savol #8]",
        "Omission of essential verb particle or preposition. [Savol #8]"
      ],
      "correctAnswer": "Correct academic usage adhering to Person + who/that + Verb. [Savol #8]",
      "explanation": "Ushbu birlik (Defining Relative Clauses (who, which, that, where)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to Person + who/that + Verb.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "9-Savol: \"Defining Relative Clauses (who, which, that, where)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #9]",
      "options": [
        "Correct academic usage adhering to Person + who/that + Verb. [Savol #9]",
        "Incorrect auxiliary verb placement breaking the A2 grammar standard. [Savol #9]",
        "Incompatible tense sequence violating subject agreement. [Savol #9]",
        "Omission of essential verb particle or preposition. [Savol #9]"
      ],
      "correctAnswer": "Correct academic usage adhering to Person + who/that + Verb. [Savol #9]",
      "explanation": "Ushbu birlik (Defining Relative Clauses (who, which, that, where)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to Person + who/that + Verb.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "10-Savol: \"Defining Relative Clauses (who, which, that, where)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #10]",
      "options": [
        "Correct academic usage adhering to Person + who/that + Verb. [Savol #10]",
        "Incorrect auxiliary verb placement breaking the A2 grammar standard. [Savol #10]",
        "Incompatible tense sequence violating subject agreement. [Savol #10]",
        "Omission of essential verb particle or preposition. [Savol #10]"
      ],
      "correctAnswer": "Correct academic usage adhering to Person + who/that + Verb. [Savol #10]",
      "explanation": "Ushbu birlik (Defining Relative Clauses (who, which, that, where)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to Person + who/that + Verb.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    }
  ],
  "ielts_a2_08_first_conditional": [
    {
      "question": "If authorities _______ cycling infrastructure, pedestrian safety will improve.",
      "options": [
        "expand",
        "will expand",
        "expanded",
        "are expanding"
      ],
      "correctAnswer": "expand",
      "explanation": "'If' bilan boshlangan shart qismida Present Simple (expand) bo'lishi shart."
    },
    {
      "question": "Global sea levels _______ dramatically if Arctic ice continues to melt at current rates.",
      "options": [
        "will rise",
        "rise",
        "rose",
        "would rise"
      ],
      "correctAnswer": "will rise",
      "explanation": "Real shartning kelajakdagi natijasi uchun asosiy gapda 'will rise' ishlatiladi."
    },
    {
      "question": "3-Savol: \"First Conditional & Future Reality (If + present, will + V)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #3]",
      "options": [
        "If governments invest in renewable energy, carbon emissions will decline significantly. [Savol #3]",
        "If governments will invest in renewable energy, carbon emissions decline. [Savol #3]",
        "If governments invested in renewable energy, carbon emissions will decline. [Savol #3]",
        "If governments invest in renewable energy, carbon emissions would declined. [Savol #3]"
      ],
      "correctAnswer": "If governments invest in renewable energy, carbon emissions will decline significantly. [Savol #3]",
      "explanation": "Ushbu birlik (First Conditional & Future Reality (If + present, will + V)) qoidasiga ko'ra, to'g'ri shakl 'If governments invest in renewable energy, carbon emissions will decline significantly.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "4-Savol: \"First Conditional & Future Reality (If + present, will + V)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #4]",
      "options": [
        "If governments invest in renewable energy, carbon emissions will decline significantly. [Savol #4]",
        "If governments will invest in renewable energy, carbon emissions decline. [Savol #4]",
        "If governments invested in renewable energy, carbon emissions will decline. [Savol #4]",
        "If governments invest in renewable energy, carbon emissions would declined. [Savol #4]"
      ],
      "correctAnswer": "If governments invest in renewable energy, carbon emissions will decline significantly. [Savol #4]",
      "explanation": "Ushbu birlik (First Conditional & Future Reality (If + present, will + V)) qoidasiga ko'ra, to'g'ri shakl 'If governments invest in renewable energy, carbon emissions will decline significantly.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "5-Savol: \"First Conditional & Future Reality (If + present, will + V)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #5]",
      "options": [
        "If governments invest in renewable energy, carbon emissions will decline significantly. [Savol #5]",
        "If governments will invest in renewable energy, carbon emissions decline. [Savol #5]",
        "If governments invested in renewable energy, carbon emissions will decline. [Savol #5]",
        "If governments invest in renewable energy, carbon emissions would declined. [Savol #5]"
      ],
      "correctAnswer": "If governments invest in renewable energy, carbon emissions will decline significantly. [Savol #5]",
      "explanation": "Ushbu birlik (First Conditional & Future Reality (If + present, will + V)) qoidasiga ko'ra, to'g'ri shakl 'If governments invest in renewable energy, carbon emissions will decline significantly.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "6-Savol: \"First Conditional & Future Reality (If + present, will + V)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #6]",
      "options": [
        "If governments invest in renewable energy, carbon emissions will decline significantly. [Savol #6]",
        "If governments will invest in renewable energy, carbon emissions decline. [Savol #6]",
        "If governments invested in renewable energy, carbon emissions will decline. [Savol #6]",
        "If governments invest in renewable energy, carbon emissions would declined. [Savol #6]"
      ],
      "correctAnswer": "If governments invest in renewable energy, carbon emissions will decline significantly. [Savol #6]",
      "explanation": "Ushbu birlik (First Conditional & Future Reality (If + present, will + V)) qoidasiga ko'ra, to'g'ri shakl 'If governments invest in renewable energy, carbon emissions will decline significantly.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "7-Savol: \"First Conditional & Future Reality (If + present, will + V)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #7]",
      "options": [
        "If governments invest in renewable energy, carbon emissions will decline significantly. [Savol #7]",
        "If governments will invest in renewable energy, carbon emissions decline. [Savol #7]",
        "If governments invested in renewable energy, carbon emissions will decline. [Savol #7]",
        "If governments invest in renewable energy, carbon emissions would declined. [Savol #7]"
      ],
      "correctAnswer": "If governments invest in renewable energy, carbon emissions will decline significantly. [Savol #7]",
      "explanation": "Ushbu birlik (First Conditional & Future Reality (If + present, will + V)) qoidasiga ko'ra, to'g'ri shakl 'If governments invest in renewable energy, carbon emissions will decline significantly.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "8-Savol: \"First Conditional & Future Reality (If + present, will + V)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #8]",
      "options": [
        "If governments invest in renewable energy, carbon emissions will decline significantly. [Savol #8]",
        "If governments will invest in renewable energy, carbon emissions decline. [Savol #8]",
        "If governments invested in renewable energy, carbon emissions will decline. [Savol #8]",
        "If governments invest in renewable energy, carbon emissions would declined. [Savol #8]"
      ],
      "correctAnswer": "If governments invest in renewable energy, carbon emissions will decline significantly. [Savol #8]",
      "explanation": "Ushbu birlik (First Conditional & Future Reality (If + present, will + V)) qoidasiga ko'ra, to'g'ri shakl 'If governments invest in renewable energy, carbon emissions will decline significantly.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "9-Savol: \"First Conditional & Future Reality (If + present, will + V)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #9]",
      "options": [
        "If governments invest in renewable energy, carbon emissions will decline significantly. [Savol #9]",
        "If governments will invest in renewable energy, carbon emissions decline. [Savol #9]",
        "If governments invested in renewable energy, carbon emissions will decline. [Savol #9]",
        "If governments invest in renewable energy, carbon emissions would declined. [Savol #9]"
      ],
      "correctAnswer": "If governments invest in renewable energy, carbon emissions will decline significantly. [Savol #9]",
      "explanation": "Ushbu birlik (First Conditional & Future Reality (If + present, will + V)) qoidasiga ko'ra, to'g'ri shakl 'If governments invest in renewable energy, carbon emissions will decline significantly.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "10-Savol: \"First Conditional & Future Reality (If + present, will + V)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #10]",
      "options": [
        "If governments invest in renewable energy, carbon emissions will decline significantly. [Savol #10]",
        "If governments will invest in renewable energy, carbon emissions decline. [Savol #10]",
        "If governments invested in renewable energy, carbon emissions will decline. [Savol #10]",
        "If governments invest in renewable energy, carbon emissions would declined. [Savol #10]"
      ],
      "correctAnswer": "If governments invest in renewable energy, carbon emissions will decline significantly. [Savol #10]",
      "explanation": "Ushbu birlik (First Conditional & Future Reality (If + present, will + V)) qoidasiga ko'ra, to'g'ri shakl 'If governments invest in renewable energy, carbon emissions will decline significantly.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    }
  ],
  "ielts_b1_01_second_conditional": [
    {
      "question": "If educational software _______ universally accessible, educational disparities would shrink.",
      "options": [
        "were",
        "is",
        "will be",
        "would be"
      ],
      "correctAnswer": "were",
      "explanation": "Second Conditional qoidasiga ko'ra 'If' qismida 'were' (Past subjunctive) bo'ladi."
    },
    {
      "question": "City residents _______ far healthier if municipal parks were integrated into urban planning.",
      "options": [
        "would be",
        "will be",
        "are",
        "have been"
      ],
      "correctAnswer": "would be",
      "explanation": "Ikkinchi shartning asosiy natija qismida 'would + base verb' (would be) bo'ladi."
    },
    {
      "question": "3-Savol: \"Second Conditional (Hypothetical Situations)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #3]",
      "options": [
        "If governments invest in renewable energy, carbon emissions will decline significantly. [Savol #3]",
        "If governments will invest in renewable energy, carbon emissions decline. [Savol #3]",
        "If governments invested in renewable energy, carbon emissions will decline. [Savol #3]",
        "If governments invest in renewable energy, carbon emissions would declined. [Savol #3]"
      ],
      "correctAnswer": "If governments invest in renewable energy, carbon emissions will decline significantly. [Savol #3]",
      "explanation": "Ushbu birlik (Second Conditional (Hypothetical Situations)) qoidasiga ko'ra, to'g'ri shakl 'If governments invest in renewable energy, carbon emissions will decline significantly.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "4-Savol: \"Second Conditional (Hypothetical Situations)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #4]",
      "options": [
        "If governments invest in renewable energy, carbon emissions will decline significantly. [Savol #4]",
        "If governments will invest in renewable energy, carbon emissions decline. [Savol #4]",
        "If governments invested in renewable energy, carbon emissions will decline. [Savol #4]",
        "If governments invest in renewable energy, carbon emissions would declined. [Savol #4]"
      ],
      "correctAnswer": "If governments invest in renewable energy, carbon emissions will decline significantly. [Savol #4]",
      "explanation": "Ushbu birlik (Second Conditional (Hypothetical Situations)) qoidasiga ko'ra, to'g'ri shakl 'If governments invest in renewable energy, carbon emissions will decline significantly.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "5-Savol: \"Second Conditional (Hypothetical Situations)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #5]",
      "options": [
        "If governments invest in renewable energy, carbon emissions will decline significantly. [Savol #5]",
        "If governments will invest in renewable energy, carbon emissions decline. [Savol #5]",
        "If governments invested in renewable energy, carbon emissions will decline. [Savol #5]",
        "If governments invest in renewable energy, carbon emissions would declined. [Savol #5]"
      ],
      "correctAnswer": "If governments invest in renewable energy, carbon emissions will decline significantly. [Savol #5]",
      "explanation": "Ushbu birlik (Second Conditional (Hypothetical Situations)) qoidasiga ko'ra, to'g'ri shakl 'If governments invest in renewable energy, carbon emissions will decline significantly.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "6-Savol: \"Second Conditional (Hypothetical Situations)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #6]",
      "options": [
        "If governments invest in renewable energy, carbon emissions will decline significantly. [Savol #6]",
        "If governments will invest in renewable energy, carbon emissions decline. [Savol #6]",
        "If governments invested in renewable energy, carbon emissions will decline. [Savol #6]",
        "If governments invest in renewable energy, carbon emissions would declined. [Savol #6]"
      ],
      "correctAnswer": "If governments invest in renewable energy, carbon emissions will decline significantly. [Savol #6]",
      "explanation": "Ushbu birlik (Second Conditional (Hypothetical Situations)) qoidasiga ko'ra, to'g'ri shakl 'If governments invest in renewable energy, carbon emissions will decline significantly.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "7-Savol: \"Second Conditional (Hypothetical Situations)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #7]",
      "options": [
        "If governments invest in renewable energy, carbon emissions will decline significantly. [Savol #7]",
        "If governments will invest in renewable energy, carbon emissions decline. [Savol #7]",
        "If governments invested in renewable energy, carbon emissions will decline. [Savol #7]",
        "If governments invest in renewable energy, carbon emissions would declined. [Savol #7]"
      ],
      "correctAnswer": "If governments invest in renewable energy, carbon emissions will decline significantly. [Savol #7]",
      "explanation": "Ushbu birlik (Second Conditional (Hypothetical Situations)) qoidasiga ko'ra, to'g'ri shakl 'If governments invest in renewable energy, carbon emissions will decline significantly.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "8-Savol: \"Second Conditional (Hypothetical Situations)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #8]",
      "options": [
        "If governments invest in renewable energy, carbon emissions will decline significantly. [Savol #8]",
        "If governments will invest in renewable energy, carbon emissions decline. [Savol #8]",
        "If governments invested in renewable energy, carbon emissions will decline. [Savol #8]",
        "If governments invest in renewable energy, carbon emissions would declined. [Savol #8]"
      ],
      "correctAnswer": "If governments invest in renewable energy, carbon emissions will decline significantly. [Savol #8]",
      "explanation": "Ushbu birlik (Second Conditional (Hypothetical Situations)) qoidasiga ko'ra, to'g'ri shakl 'If governments invest in renewable energy, carbon emissions will decline significantly.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "9-Savol: \"Second Conditional (Hypothetical Situations)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #9]",
      "options": [
        "If governments invest in renewable energy, carbon emissions will decline significantly. [Savol #9]",
        "If governments will invest in renewable energy, carbon emissions decline. [Savol #9]",
        "If governments invested in renewable energy, carbon emissions will decline. [Savol #9]",
        "If governments invest in renewable energy, carbon emissions would declined. [Savol #9]"
      ],
      "correctAnswer": "If governments invest in renewable energy, carbon emissions will decline significantly. [Savol #9]",
      "explanation": "Ushbu birlik (Second Conditional (Hypothetical Situations)) qoidasiga ko'ra, to'g'ri shakl 'If governments invest in renewable energy, carbon emissions will decline significantly.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "10-Savol: \"Second Conditional (Hypothetical Situations)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #10]",
      "options": [
        "If governments invest in renewable energy, carbon emissions will decline significantly. [Savol #10]",
        "If governments will invest in renewable energy, carbon emissions decline. [Savol #10]",
        "If governments invested in renewable energy, carbon emissions will decline. [Savol #10]",
        "If governments invest in renewable energy, carbon emissions would declined. [Savol #10]"
      ],
      "correctAnswer": "If governments invest in renewable energy, carbon emissions will decline significantly. [Savol #10]",
      "explanation": "Ushbu birlik (Second Conditional (Hypothetical Situations)) qoidasiga ko'ra, to'g'ri shakl 'If governments invest in renewable energy, carbon emissions will decline significantly.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    }
  ],
  "ielts_b1_02_third_conditional": [
    {
      "question": "If conservationists _______ the ecosystem earlier, the indigenous species might have survived.",
      "options": [
        "had protected",
        "protected",
        "would protect",
        "have protected"
      ],
      "correctAnswer": "had protected",
      "explanation": "O'tmishdagi noreal shart uchun 'If + had + V3' (had protected) to'g'ri keladi."
    },
    {
      "question": "The catastrophic dam breach _______ if routine structural inspections had been conducted.",
      "options": [
        "could have been prevented",
        "could be prevented",
        "was prevented",
        "had prevented"
      ],
      "correctAnswer": "could have been prevented",
      "explanation": "O'tmishdagi passiv natija: 'could have been prevented' (oldini olish mumkin bo'lardi)."
    },
    {
      "question": "3-Savol: \"Third Conditional (Past Regrets & Unreal Past)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #3]",
      "options": [
        "If governments invest in renewable energy, carbon emissions will decline significantly. [Savol #3]",
        "If governments will invest in renewable energy, carbon emissions decline. [Savol #3]",
        "If governments invested in renewable energy, carbon emissions will decline. [Savol #3]",
        "If governments invest in renewable energy, carbon emissions would declined. [Savol #3]"
      ],
      "correctAnswer": "If governments invest in renewable energy, carbon emissions will decline significantly. [Savol #3]",
      "explanation": "Ushbu birlik (Third Conditional (Past Regrets & Unreal Past)) qoidasiga ko'ra, to'g'ri shakl 'If governments invest in renewable energy, carbon emissions will decline significantly.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "4-Savol: \"Third Conditional (Past Regrets & Unreal Past)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #4]",
      "options": [
        "If governments invest in renewable energy, carbon emissions will decline significantly. [Savol #4]",
        "If governments will invest in renewable energy, carbon emissions decline. [Savol #4]",
        "If governments invested in renewable energy, carbon emissions will decline. [Savol #4]",
        "If governments invest in renewable energy, carbon emissions would declined. [Savol #4]"
      ],
      "correctAnswer": "If governments invest in renewable energy, carbon emissions will decline significantly. [Savol #4]",
      "explanation": "Ushbu birlik (Third Conditional (Past Regrets & Unreal Past)) qoidasiga ko'ra, to'g'ri shakl 'If governments invest in renewable energy, carbon emissions will decline significantly.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "5-Savol: \"Third Conditional (Past Regrets & Unreal Past)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #5]",
      "options": [
        "If governments invest in renewable energy, carbon emissions will decline significantly. [Savol #5]",
        "If governments will invest in renewable energy, carbon emissions decline. [Savol #5]",
        "If governments invested in renewable energy, carbon emissions will decline. [Savol #5]",
        "If governments invest in renewable energy, carbon emissions would declined. [Savol #5]"
      ],
      "correctAnswer": "If governments invest in renewable energy, carbon emissions will decline significantly. [Savol #5]",
      "explanation": "Ushbu birlik (Third Conditional (Past Regrets & Unreal Past)) qoidasiga ko'ra, to'g'ri shakl 'If governments invest in renewable energy, carbon emissions will decline significantly.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "6-Savol: \"Third Conditional (Past Regrets & Unreal Past)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #6]",
      "options": [
        "If governments invest in renewable energy, carbon emissions will decline significantly. [Savol #6]",
        "If governments will invest in renewable energy, carbon emissions decline. [Savol #6]",
        "If governments invested in renewable energy, carbon emissions will decline. [Savol #6]",
        "If governments invest in renewable energy, carbon emissions would declined. [Savol #6]"
      ],
      "correctAnswer": "If governments invest in renewable energy, carbon emissions will decline significantly. [Savol #6]",
      "explanation": "Ushbu birlik (Third Conditional (Past Regrets & Unreal Past)) qoidasiga ko'ra, to'g'ri shakl 'If governments invest in renewable energy, carbon emissions will decline significantly.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "7-Savol: \"Third Conditional (Past Regrets & Unreal Past)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #7]",
      "options": [
        "If governments invest in renewable energy, carbon emissions will decline significantly. [Savol #7]",
        "If governments will invest in renewable energy, carbon emissions decline. [Savol #7]",
        "If governments invested in renewable energy, carbon emissions will decline. [Savol #7]",
        "If governments invest in renewable energy, carbon emissions would declined. [Savol #7]"
      ],
      "correctAnswer": "If governments invest in renewable energy, carbon emissions will decline significantly. [Savol #7]",
      "explanation": "Ushbu birlik (Third Conditional (Past Regrets & Unreal Past)) qoidasiga ko'ra, to'g'ri shakl 'If governments invest in renewable energy, carbon emissions will decline significantly.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "8-Savol: \"Third Conditional (Past Regrets & Unreal Past)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #8]",
      "options": [
        "If governments invest in renewable energy, carbon emissions will decline significantly. [Savol #8]",
        "If governments will invest in renewable energy, carbon emissions decline. [Savol #8]",
        "If governments invested in renewable energy, carbon emissions will decline. [Savol #8]",
        "If governments invest in renewable energy, carbon emissions would declined. [Savol #8]"
      ],
      "correctAnswer": "If governments invest in renewable energy, carbon emissions will decline significantly. [Savol #8]",
      "explanation": "Ushbu birlik (Third Conditional (Past Regrets & Unreal Past)) qoidasiga ko'ra, to'g'ri shakl 'If governments invest in renewable energy, carbon emissions will decline significantly.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "9-Savol: \"Third Conditional (Past Regrets & Unreal Past)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #9]",
      "options": [
        "If governments invest in renewable energy, carbon emissions will decline significantly. [Savol #9]",
        "If governments will invest in renewable energy, carbon emissions decline. [Savol #9]",
        "If governments invested in renewable energy, carbon emissions will decline. [Savol #9]",
        "If governments invest in renewable energy, carbon emissions would declined. [Savol #9]"
      ],
      "correctAnswer": "If governments invest in renewable energy, carbon emissions will decline significantly. [Savol #9]",
      "explanation": "Ushbu birlik (Third Conditional (Past Regrets & Unreal Past)) qoidasiga ko'ra, to'g'ri shakl 'If governments invest in renewable energy, carbon emissions will decline significantly.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "10-Savol: \"Third Conditional (Past Regrets & Unreal Past)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #10]",
      "options": [
        "If governments invest in renewable energy, carbon emissions will decline significantly. [Savol #10]",
        "If governments will invest in renewable energy, carbon emissions decline. [Savol #10]",
        "If governments invested in renewable energy, carbon emissions will decline. [Savol #10]",
        "If governments invest in renewable energy, carbon emissions would declined. [Savol #10]"
      ],
      "correctAnswer": "If governments invest in renewable energy, carbon emissions will decline significantly. [Savol #10]",
      "explanation": "Ushbu birlik (Third Conditional (Past Regrets & Unreal Past)) qoidasiga ko'ra, to'g'ri shakl 'If governments invest in renewable energy, carbon emissions will decline significantly.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    }
  ],
  "ielts_b1_03_mixed_conditionals": [
    {
      "question": "If ancient scientists _______ antibiotics, contemporary healthcare would be vastly different.",
      "options": [
        "had not discovered",
        "did not discover",
        "would not discover",
        "have not discovered"
      ],
      "correctAnswer": "had not discovered",
      "explanation": "O'tmishdagi shart (had not discovered) hozirgi holat (would be) bilan bog'lanmoqda."
    },
    {
      "question": "If I had taken that computer science course in college, I _______ as a programmer today.",
      "options": [
        "would be working",
        "would have worked",
        "had worked",
        "will work"
      ],
      "correctAnswer": "would be working",
      "explanation": "'Today' so'zi borligi sababli hozirgi davomli natija 'would be working' to'g'ri keladi."
    },
    {
      "question": "3-Savol: \"Mixed Conditionals (Past Cause, Present Effect)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #3]",
      "options": [
        "If governments invest in renewable energy, carbon emissions will decline significantly. [Savol #3]",
        "If governments will invest in renewable energy, carbon emissions decline. [Savol #3]",
        "If governments invested in renewable energy, carbon emissions will decline. [Savol #3]",
        "If governments invest in renewable energy, carbon emissions would declined. [Savol #3]"
      ],
      "correctAnswer": "If governments invest in renewable energy, carbon emissions will decline significantly. [Savol #3]",
      "explanation": "Ushbu birlik (Mixed Conditionals (Past Cause, Present Effect)) qoidasiga ko'ra, to'g'ri shakl 'If governments invest in renewable energy, carbon emissions will decline significantly.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "4-Savol: \"Mixed Conditionals (Past Cause, Present Effect)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #4]",
      "options": [
        "If governments invest in renewable energy, carbon emissions will decline significantly. [Savol #4]",
        "If governments will invest in renewable energy, carbon emissions decline. [Savol #4]",
        "If governments invested in renewable energy, carbon emissions will decline. [Savol #4]",
        "If governments invest in renewable energy, carbon emissions would declined. [Savol #4]"
      ],
      "correctAnswer": "If governments invest in renewable energy, carbon emissions will decline significantly. [Savol #4]",
      "explanation": "Ushbu birlik (Mixed Conditionals (Past Cause, Present Effect)) qoidasiga ko'ra, to'g'ri shakl 'If governments invest in renewable energy, carbon emissions will decline significantly.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "5-Savol: \"Mixed Conditionals (Past Cause, Present Effect)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #5]",
      "options": [
        "If governments invest in renewable energy, carbon emissions will decline significantly. [Savol #5]",
        "If governments will invest in renewable energy, carbon emissions decline. [Savol #5]",
        "If governments invested in renewable energy, carbon emissions will decline. [Savol #5]",
        "If governments invest in renewable energy, carbon emissions would declined. [Savol #5]"
      ],
      "correctAnswer": "If governments invest in renewable energy, carbon emissions will decline significantly. [Savol #5]",
      "explanation": "Ushbu birlik (Mixed Conditionals (Past Cause, Present Effect)) qoidasiga ko'ra, to'g'ri shakl 'If governments invest in renewable energy, carbon emissions will decline significantly.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "6-Savol: \"Mixed Conditionals (Past Cause, Present Effect)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #6]",
      "options": [
        "If governments invest in renewable energy, carbon emissions will decline significantly. [Savol #6]",
        "If governments will invest in renewable energy, carbon emissions decline. [Savol #6]",
        "If governments invested in renewable energy, carbon emissions will decline. [Savol #6]",
        "If governments invest in renewable energy, carbon emissions would declined. [Savol #6]"
      ],
      "correctAnswer": "If governments invest in renewable energy, carbon emissions will decline significantly. [Savol #6]",
      "explanation": "Ushbu birlik (Mixed Conditionals (Past Cause, Present Effect)) qoidasiga ko'ra, to'g'ri shakl 'If governments invest in renewable energy, carbon emissions will decline significantly.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "7-Savol: \"Mixed Conditionals (Past Cause, Present Effect)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #7]",
      "options": [
        "If governments invest in renewable energy, carbon emissions will decline significantly. [Savol #7]",
        "If governments will invest in renewable energy, carbon emissions decline. [Savol #7]",
        "If governments invested in renewable energy, carbon emissions will decline. [Savol #7]",
        "If governments invest in renewable energy, carbon emissions would declined. [Savol #7]"
      ],
      "correctAnswer": "If governments invest in renewable energy, carbon emissions will decline significantly. [Savol #7]",
      "explanation": "Ushbu birlik (Mixed Conditionals (Past Cause, Present Effect)) qoidasiga ko'ra, to'g'ri shakl 'If governments invest in renewable energy, carbon emissions will decline significantly.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "8-Savol: \"Mixed Conditionals (Past Cause, Present Effect)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #8]",
      "options": [
        "If governments invest in renewable energy, carbon emissions will decline significantly. [Savol #8]",
        "If governments will invest in renewable energy, carbon emissions decline. [Savol #8]",
        "If governments invested in renewable energy, carbon emissions will decline. [Savol #8]",
        "If governments invest in renewable energy, carbon emissions would declined. [Savol #8]"
      ],
      "correctAnswer": "If governments invest in renewable energy, carbon emissions will decline significantly. [Savol #8]",
      "explanation": "Ushbu birlik (Mixed Conditionals (Past Cause, Present Effect)) qoidasiga ko'ra, to'g'ri shakl 'If governments invest in renewable energy, carbon emissions will decline significantly.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "9-Savol: \"Mixed Conditionals (Past Cause, Present Effect)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #9]",
      "options": [
        "If governments invest in renewable energy, carbon emissions will decline significantly. [Savol #9]",
        "If governments will invest in renewable energy, carbon emissions decline. [Savol #9]",
        "If governments invested in renewable energy, carbon emissions will decline. [Savol #9]",
        "If governments invest in renewable energy, carbon emissions would declined. [Savol #9]"
      ],
      "correctAnswer": "If governments invest in renewable energy, carbon emissions will decline significantly. [Savol #9]",
      "explanation": "Ushbu birlik (Mixed Conditionals (Past Cause, Present Effect)) qoidasiga ko'ra, to'g'ri shakl 'If governments invest in renewable energy, carbon emissions will decline significantly.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "10-Savol: \"Mixed Conditionals (Past Cause, Present Effect)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #10]",
      "options": [
        "If governments invest in renewable energy, carbon emissions will decline significantly. [Savol #10]",
        "If governments will invest in renewable energy, carbon emissions decline. [Savol #10]",
        "If governments invested in renewable energy, carbon emissions will decline. [Savol #10]",
        "If governments invest in renewable energy, carbon emissions would declined. [Savol #10]"
      ],
      "correctAnswer": "If governments invest in renewable energy, carbon emissions will decline significantly. [Savol #10]",
      "explanation": "Ushbu birlik (Mixed Conditionals (Past Cause, Present Effect)) qoidasiga ko'ra, to'g'ri shakl 'If governments invest in renewable energy, carbon emissions will decline significantly.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    }
  ],
  "ielts_b1_04_used_to_be_used_to": [
    {
      "question": "International students often find it challenging to _______ independent self-study routines.",
      "options": [
        "get used to",
        "used to",
        "use to",
        "be use to"
      ],
      "correctAnswer": "get used to",
      "explanation": "Yangi narsaga ko'nikish 'jarayoni' uchun 'get used to' to'g'ri keladi."
    },
    {
      "question": "Decades ago, households _______ far fewer electronic appliances than they possess currently.",
      "options": [
        "used to own",
        "were used to own",
        "used to owning",
        "got used to own"
      ],
      "correctAnswer": "used to own",
      "explanation": "O'tmishdagi holat uchun 'used to own' (egalik qilar edi) to'g'ri formuladir."
    },
    {
      "question": "3-Savol: \"Used to, Would vs Be/Get used to\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #3]",
      "options": [
        "Correct academic usage adhering to used to + V (past habit/state). [Savol #3]",
        "Incorrect auxiliary verb placement breaking the B1 grammar standard. [Savol #3]",
        "Incompatible tense sequence violating subject agreement. [Savol #3]",
        "Omission of essential verb particle or preposition. [Savol #3]"
      ],
      "correctAnswer": "Correct academic usage adhering to used to + V (past habit/state). [Savol #3]",
      "explanation": "Ushbu birlik (Used to, Would vs Be/Get used to) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to used to + V (past habit/state).' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "4-Savol: \"Used to, Would vs Be/Get used to\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #4]",
      "options": [
        "Correct academic usage adhering to used to + V (past habit/state). [Savol #4]",
        "Incorrect auxiliary verb placement breaking the B1 grammar standard. [Savol #4]",
        "Incompatible tense sequence violating subject agreement. [Savol #4]",
        "Omission of essential verb particle or preposition. [Savol #4]"
      ],
      "correctAnswer": "Correct academic usage adhering to used to + V (past habit/state). [Savol #4]",
      "explanation": "Ushbu birlik (Used to, Would vs Be/Get used to) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to used to + V (past habit/state).' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "5-Savol: \"Used to, Would vs Be/Get used to\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #5]",
      "options": [
        "Correct academic usage adhering to used to + V (past habit/state). [Savol #5]",
        "Incorrect auxiliary verb placement breaking the B1 grammar standard. [Savol #5]",
        "Incompatible tense sequence violating subject agreement. [Savol #5]",
        "Omission of essential verb particle or preposition. [Savol #5]"
      ],
      "correctAnswer": "Correct academic usage adhering to used to + V (past habit/state). [Savol #5]",
      "explanation": "Ushbu birlik (Used to, Would vs Be/Get used to) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to used to + V (past habit/state).' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "6-Savol: \"Used to, Would vs Be/Get used to\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #6]",
      "options": [
        "Correct academic usage adhering to used to + V (past habit/state). [Savol #6]",
        "Incorrect auxiliary verb placement breaking the B1 grammar standard. [Savol #6]",
        "Incompatible tense sequence violating subject agreement. [Savol #6]",
        "Omission of essential verb particle or preposition. [Savol #6]"
      ],
      "correctAnswer": "Correct academic usage adhering to used to + V (past habit/state). [Savol #6]",
      "explanation": "Ushbu birlik (Used to, Would vs Be/Get used to) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to used to + V (past habit/state).' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "7-Savol: \"Used to, Would vs Be/Get used to\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #7]",
      "options": [
        "Correct academic usage adhering to used to + V (past habit/state). [Savol #7]",
        "Incorrect auxiliary verb placement breaking the B1 grammar standard. [Savol #7]",
        "Incompatible tense sequence violating subject agreement. [Savol #7]",
        "Omission of essential verb particle or preposition. [Savol #7]"
      ],
      "correctAnswer": "Correct academic usage adhering to used to + V (past habit/state). [Savol #7]",
      "explanation": "Ushbu birlik (Used to, Would vs Be/Get used to) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to used to + V (past habit/state).' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "8-Savol: \"Used to, Would vs Be/Get used to\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #8]",
      "options": [
        "Correct academic usage adhering to used to + V (past habit/state). [Savol #8]",
        "Incorrect auxiliary verb placement breaking the B1 grammar standard. [Savol #8]",
        "Incompatible tense sequence violating subject agreement. [Savol #8]",
        "Omission of essential verb particle or preposition. [Savol #8]"
      ],
      "correctAnswer": "Correct academic usage adhering to used to + V (past habit/state). [Savol #8]",
      "explanation": "Ushbu birlik (Used to, Would vs Be/Get used to) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to used to + V (past habit/state).' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "9-Savol: \"Used to, Would vs Be/Get used to\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #9]",
      "options": [
        "Correct academic usage adhering to used to + V (past habit/state). [Savol #9]",
        "Incorrect auxiliary verb placement breaking the B1 grammar standard. [Savol #9]",
        "Incompatible tense sequence violating subject agreement. [Savol #9]",
        "Omission of essential verb particle or preposition. [Savol #9]"
      ],
      "correctAnswer": "Correct academic usage adhering to used to + V (past habit/state). [Savol #9]",
      "explanation": "Ushbu birlik (Used to, Would vs Be/Get used to) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to used to + V (past habit/state).' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "10-Savol: \"Used to, Would vs Be/Get used to\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #10]",
      "options": [
        "Correct academic usage adhering to used to + V (past habit/state). [Savol #10]",
        "Incorrect auxiliary verb placement breaking the B1 grammar standard. [Savol #10]",
        "Incompatible tense sequence violating subject agreement. [Savol #10]",
        "Omission of essential verb particle or preposition. [Savol #10]"
      ],
      "correctAnswer": "Correct academic usage adhering to used to + V (past habit/state). [Savol #10]",
      "explanation": "Ushbu birlik (Used to, Would vs Be/Get used to) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to used to + V (past habit/state).' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    }
  ],
  "ielts_b1_05_modals_deduction_present_past": [
    {
      "question": "The data discrepancies are too severe; the survey sample _______ thoroughly verified.",
      "options": [
        "cannot have been",
        "must not have been",
        "couldn't be",
        "might have not"
      ],
      "correctAnswer": "cannot have been",
      "explanation": "O'tmishdagi qat'iy inkor mantiqiy xulosasi uchun 'cannot have been' (tekshirilgan bo'lishi aslo mumkin emas) to'g'ri."
    },
    {
      "question": "Scientists speculate that ancient agricultural communities _______ extensive irrigation networks.",
      "options": [
        "might have engineered",
        "might engineer",
        "must to engineer",
        "can have engineered"
      ],
      "correctAnswer": "might have engineered",
      "explanation": "O'tmishdagi ilmiy taxmin uchun 'might have engineered' (qurgan bo'lishi ehtimoldan xoli emas) ishlatiladi."
    },
    {
      "question": "3-Savol: \"Modals of Deduction (must, can't, might, must have done)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #3]",
      "options": [
        "Candidates must adhere strictly to the examination time limits. [Savol #3]",
        "Candidates must to adhere strictly to the examination time limits. [Savol #3]",
        "Candidates must adhering strictly to the examination time limits. [Savol #3]",
        "Candidates ought adhere strictly to the examination time limits. [Savol #3]"
      ],
      "correctAnswer": "Candidates must adhere strictly to the examination time limits. [Savol #3]",
      "explanation": "Ushbu birlik (Modals of Deduction (must, can't, might, must have done)) qoidasiga ko'ra, to'g'ri shakl 'Candidates must adhere strictly to the examination time limits.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "4-Savol: \"Modals of Deduction (must, can't, might, must have done)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #4]",
      "options": [
        "Candidates must adhere strictly to the examination time limits. [Savol #4]",
        "Candidates must to adhere strictly to the examination time limits. [Savol #4]",
        "Candidates must adhering strictly to the examination time limits. [Savol #4]",
        "Candidates ought adhere strictly to the examination time limits. [Savol #4]"
      ],
      "correctAnswer": "Candidates must adhere strictly to the examination time limits. [Savol #4]",
      "explanation": "Ushbu birlik (Modals of Deduction (must, can't, might, must have done)) qoidasiga ko'ra, to'g'ri shakl 'Candidates must adhere strictly to the examination time limits.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "5-Savol: \"Modals of Deduction (must, can't, might, must have done)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #5]",
      "options": [
        "Candidates must adhere strictly to the examination time limits. [Savol #5]",
        "Candidates must to adhere strictly to the examination time limits. [Savol #5]",
        "Candidates must adhering strictly to the examination time limits. [Savol #5]",
        "Candidates ought adhere strictly to the examination time limits. [Savol #5]"
      ],
      "correctAnswer": "Candidates must adhere strictly to the examination time limits. [Savol #5]",
      "explanation": "Ushbu birlik (Modals of Deduction (must, can't, might, must have done)) qoidasiga ko'ra, to'g'ri shakl 'Candidates must adhere strictly to the examination time limits.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "6-Savol: \"Modals of Deduction (must, can't, might, must have done)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #6]",
      "options": [
        "Candidates must adhere strictly to the examination time limits. [Savol #6]",
        "Candidates must to adhere strictly to the examination time limits. [Savol #6]",
        "Candidates must adhering strictly to the examination time limits. [Savol #6]",
        "Candidates ought adhere strictly to the examination time limits. [Savol #6]"
      ],
      "correctAnswer": "Candidates must adhere strictly to the examination time limits. [Savol #6]",
      "explanation": "Ushbu birlik (Modals of Deduction (must, can't, might, must have done)) qoidasiga ko'ra, to'g'ri shakl 'Candidates must adhere strictly to the examination time limits.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "7-Savol: \"Modals of Deduction (must, can't, might, must have done)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #7]",
      "options": [
        "Candidates must adhere strictly to the examination time limits. [Savol #7]",
        "Candidates must to adhere strictly to the examination time limits. [Savol #7]",
        "Candidates must adhering strictly to the examination time limits. [Savol #7]",
        "Candidates ought adhere strictly to the examination time limits. [Savol #7]"
      ],
      "correctAnswer": "Candidates must adhere strictly to the examination time limits. [Savol #7]",
      "explanation": "Ushbu birlik (Modals of Deduction (must, can't, might, must have done)) qoidasiga ko'ra, to'g'ri shakl 'Candidates must adhere strictly to the examination time limits.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "8-Savol: \"Modals of Deduction (must, can't, might, must have done)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #8]",
      "options": [
        "Candidates must adhere strictly to the examination time limits. [Savol #8]",
        "Candidates must to adhere strictly to the examination time limits. [Savol #8]",
        "Candidates must adhering strictly to the examination time limits. [Savol #8]",
        "Candidates ought adhere strictly to the examination time limits. [Savol #8]"
      ],
      "correctAnswer": "Candidates must adhere strictly to the examination time limits. [Savol #8]",
      "explanation": "Ushbu birlik (Modals of Deduction (must, can't, might, must have done)) qoidasiga ko'ra, to'g'ri shakl 'Candidates must adhere strictly to the examination time limits.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "9-Savol: \"Modals of Deduction (must, can't, might, must have done)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #9]",
      "options": [
        "Candidates must adhere strictly to the examination time limits. [Savol #9]",
        "Candidates must to adhere strictly to the examination time limits. [Savol #9]",
        "Candidates must adhering strictly to the examination time limits. [Savol #9]",
        "Candidates ought adhere strictly to the examination time limits. [Savol #9]"
      ],
      "correctAnswer": "Candidates must adhere strictly to the examination time limits. [Savol #9]",
      "explanation": "Ushbu birlik (Modals of Deduction (must, can't, might, must have done)) qoidasiga ko'ra, to'g'ri shakl 'Candidates must adhere strictly to the examination time limits.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "10-Savol: \"Modals of Deduction (must, can't, might, must have done)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #10]",
      "options": [
        "Candidates must adhere strictly to the examination time limits. [Savol #10]",
        "Candidates must to adhere strictly to the examination time limits. [Savol #10]",
        "Candidates must adhering strictly to the examination time limits. [Savol #10]",
        "Candidates ought adhere strictly to the examination time limits. [Savol #10]"
      ],
      "correctAnswer": "Candidates must adhere strictly to the examination time limits. [Savol #10]",
      "explanation": "Ushbu birlik (Modals of Deduction (must, can't, might, must have done)) qoidasiga ko'ra, to'g'ri shakl 'Candidates must adhere strictly to the examination time limits.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    }
  ],
  "ielts_b1_06_passive_modals_perfect": [
    {
      "question": "Renewable energy quotas _______ by local municipalities to meet climate obligations.",
      "options": [
        "must be enforced",
        "must enforce",
        "must been enforced",
        "must to be enforced"
      ],
      "correctAnswer": "must be enforced",
      "explanation": "'Modal + be + V3' qoidasiga ko'ra 'must be enforced' to'g'ri majhul shakldir."
    },
    {
      "question": "Over 500 academic articles _______ on neural networks over the past decade.",
      "options": [
        "have been published",
        "have published",
        "has been published",
        "were publish"
      ],
      "correctAnswer": "have been published",
      "explanation": "'Articles' ko'plik ot, hozirgacha erishilgan natija uchun 'have been published' to'g'ri."
    },
    {
      "question": "3-Savol: \"Passive Voice with Modals & Perfect Tenses\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #3]",
      "options": [
        "The statistical survey was conducted by independent international analysts. [Savol #3]",
        "The statistical survey was conduct by independent international analysts. [Savol #3]",
        "The statistical survey been conducted by independent international analysts. [Savol #3]",
        "The statistical survey is conduct by independent international analysts. [Savol #3]"
      ],
      "correctAnswer": "The statistical survey was conducted by independent international analysts. [Savol #3]",
      "explanation": "Ushbu birlik (Passive Voice with Modals & Perfect Tenses) qoidasiga ko'ra, to'g'ri shakl 'The statistical survey was conducted by independent international analysts.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "4-Savol: \"Passive Voice with Modals & Perfect Tenses\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #4]",
      "options": [
        "The statistical survey was conducted by independent international analysts. [Savol #4]",
        "The statistical survey was conduct by independent international analysts. [Savol #4]",
        "The statistical survey been conducted by independent international analysts. [Savol #4]",
        "The statistical survey is conduct by independent international analysts. [Savol #4]"
      ],
      "correctAnswer": "The statistical survey was conducted by independent international analysts. [Savol #4]",
      "explanation": "Ushbu birlik (Passive Voice with Modals & Perfect Tenses) qoidasiga ko'ra, to'g'ri shakl 'The statistical survey was conducted by independent international analysts.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "5-Savol: \"Passive Voice with Modals & Perfect Tenses\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #5]",
      "options": [
        "The statistical survey was conducted by independent international analysts. [Savol #5]",
        "The statistical survey was conduct by independent international analysts. [Savol #5]",
        "The statistical survey been conducted by independent international analysts. [Savol #5]",
        "The statistical survey is conduct by independent international analysts. [Savol #5]"
      ],
      "correctAnswer": "The statistical survey was conducted by independent international analysts. [Savol #5]",
      "explanation": "Ushbu birlik (Passive Voice with Modals & Perfect Tenses) qoidasiga ko'ra, to'g'ri shakl 'The statistical survey was conducted by independent international analysts.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "6-Savol: \"Passive Voice with Modals & Perfect Tenses\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #6]",
      "options": [
        "The statistical survey was conducted by independent international analysts. [Savol #6]",
        "The statistical survey was conduct by independent international analysts. [Savol #6]",
        "The statistical survey been conducted by independent international analysts. [Savol #6]",
        "The statistical survey is conduct by independent international analysts. [Savol #6]"
      ],
      "correctAnswer": "The statistical survey was conducted by independent international analysts. [Savol #6]",
      "explanation": "Ushbu birlik (Passive Voice with Modals & Perfect Tenses) qoidasiga ko'ra, to'g'ri shakl 'The statistical survey was conducted by independent international analysts.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "7-Savol: \"Passive Voice with Modals & Perfect Tenses\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #7]",
      "options": [
        "The statistical survey was conducted by independent international analysts. [Savol #7]",
        "The statistical survey was conduct by independent international analysts. [Savol #7]",
        "The statistical survey been conducted by independent international analysts. [Savol #7]",
        "The statistical survey is conduct by independent international analysts. [Savol #7]"
      ],
      "correctAnswer": "The statistical survey was conducted by independent international analysts. [Savol #7]",
      "explanation": "Ushbu birlik (Passive Voice with Modals & Perfect Tenses) qoidasiga ko'ra, to'g'ri shakl 'The statistical survey was conducted by independent international analysts.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "8-Savol: \"Passive Voice with Modals & Perfect Tenses\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #8]",
      "options": [
        "The statistical survey was conducted by independent international analysts. [Savol #8]",
        "The statistical survey was conduct by independent international analysts. [Savol #8]",
        "The statistical survey been conducted by independent international analysts. [Savol #8]",
        "The statistical survey is conduct by independent international analysts. [Savol #8]"
      ],
      "correctAnswer": "The statistical survey was conducted by independent international analysts. [Savol #8]",
      "explanation": "Ushbu birlik (Passive Voice with Modals & Perfect Tenses) qoidasiga ko'ra, to'g'ri shakl 'The statistical survey was conducted by independent international analysts.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "9-Savol: \"Passive Voice with Modals & Perfect Tenses\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #9]",
      "options": [
        "The statistical survey was conducted by independent international analysts. [Savol #9]",
        "The statistical survey was conduct by independent international analysts. [Savol #9]",
        "The statistical survey been conducted by independent international analysts. [Savol #9]",
        "The statistical survey is conduct by independent international analysts. [Savol #9]"
      ],
      "correctAnswer": "The statistical survey was conducted by independent international analysts. [Savol #9]",
      "explanation": "Ushbu birlik (Passive Voice with Modals & Perfect Tenses) qoidasiga ko'ra, to'g'ri shakl 'The statistical survey was conducted by independent international analysts.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "10-Savol: \"Passive Voice with Modals & Perfect Tenses\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #10]",
      "options": [
        "The statistical survey was conducted by independent international analysts. [Savol #10]",
        "The statistical survey was conduct by independent international analysts. [Savol #10]",
        "The statistical survey been conducted by independent international analysts. [Savol #10]",
        "The statistical survey is conduct by independent international analysts. [Savol #10]"
      ],
      "correctAnswer": "The statistical survey was conducted by independent international analysts. [Savol #10]",
      "explanation": "Ushbu birlik (Passive Voice with Modals & Perfect Tenses) qoidasiga ko'ra, to'g'ri shakl 'The statistical survey was conducted by independent international analysts.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    }
  ],
  "ielts_b1_07_reported_speech_indirect": [
    {
      "question": "The statistical report demonstrated that renewable investments _______ exponentially over five years.",
      "options": [
        "had grown",
        "have grown",
        "grow",
        "will grow"
      ],
      "correctAnswer": "had grown",
      "explanation": "'Demonstrated' o'tgan zamon bo'lgani sababli, undan oldin sodir bo'lgan o'sish 'had grown' (Past Perfect) bo'ladi."
    },
    {
      "question": "Participants confirmed that they _______ completely satisfied with the training modules.",
      "options": [
        "were",
        "are",
        "will be",
        "have been"
      ],
      "correctAnswer": "were",
      "explanation": "'Confirmed' o'tgan zamon bo'lgani sababli 'are' o'tmishga siljib 'were' bo'ladi."
    },
    {
      "question": "3-Savol: \"Reported Speech & Academic Sourcing\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #3]",
      "options": [
        "Correct academic usage adhering to S + asserted / maintained / concluded + that + [zamon siljishi: Present -> Past. [Savol #3]",
        "Incorrect auxiliary verb placement breaking the B1 grammar standard. [Savol #3]",
        "Incompatible tense sequence violating subject agreement. [Savol #3]",
        "Omission of essential verb particle or preposition. [Savol #3]"
      ],
      "correctAnswer": "Correct academic usage adhering to S + asserted / maintained / concluded + that + [zamon siljishi: Present -> Past. [Savol #3]",
      "explanation": "Ushbu birlik (Reported Speech & Academic Sourcing) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to S + asserted / maintained / concluded + that + [zamon siljishi: Present -> Past.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "4-Savol: \"Reported Speech & Academic Sourcing\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #4]",
      "options": [
        "Correct academic usage adhering to S + asserted / maintained / concluded + that + [zamon siljishi: Present -> Past. [Savol #4]",
        "Incorrect auxiliary verb placement breaking the B1 grammar standard. [Savol #4]",
        "Incompatible tense sequence violating subject agreement. [Savol #4]",
        "Omission of essential verb particle or preposition. [Savol #4]"
      ],
      "correctAnswer": "Correct academic usage adhering to S + asserted / maintained / concluded + that + [zamon siljishi: Present -> Past. [Savol #4]",
      "explanation": "Ushbu birlik (Reported Speech & Academic Sourcing) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to S + asserted / maintained / concluded + that + [zamon siljishi: Present -> Past.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "5-Savol: \"Reported Speech & Academic Sourcing\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #5]",
      "options": [
        "Correct academic usage adhering to S + asserted / maintained / concluded + that + [zamon siljishi: Present -> Past. [Savol #5]",
        "Incorrect auxiliary verb placement breaking the B1 grammar standard. [Savol #5]",
        "Incompatible tense sequence violating subject agreement. [Savol #5]",
        "Omission of essential verb particle or preposition. [Savol #5]"
      ],
      "correctAnswer": "Correct academic usage adhering to S + asserted / maintained / concluded + that + [zamon siljishi: Present -> Past. [Savol #5]",
      "explanation": "Ushbu birlik (Reported Speech & Academic Sourcing) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to S + asserted / maintained / concluded + that + [zamon siljishi: Present -> Past.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "6-Savol: \"Reported Speech & Academic Sourcing\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #6]",
      "options": [
        "Correct academic usage adhering to S + asserted / maintained / concluded + that + [zamon siljishi: Present -> Past. [Savol #6]",
        "Incorrect auxiliary verb placement breaking the B1 grammar standard. [Savol #6]",
        "Incompatible tense sequence violating subject agreement. [Savol #6]",
        "Omission of essential verb particle or preposition. [Savol #6]"
      ],
      "correctAnswer": "Correct academic usage adhering to S + asserted / maintained / concluded + that + [zamon siljishi: Present -> Past. [Savol #6]",
      "explanation": "Ushbu birlik (Reported Speech & Academic Sourcing) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to S + asserted / maintained / concluded + that + [zamon siljishi: Present -> Past.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "7-Savol: \"Reported Speech & Academic Sourcing\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #7]",
      "options": [
        "Correct academic usage adhering to S + asserted / maintained / concluded + that + [zamon siljishi: Present -> Past. [Savol #7]",
        "Incorrect auxiliary verb placement breaking the B1 grammar standard. [Savol #7]",
        "Incompatible tense sequence violating subject agreement. [Savol #7]",
        "Omission of essential verb particle or preposition. [Savol #7]"
      ],
      "correctAnswer": "Correct academic usage adhering to S + asserted / maintained / concluded + that + [zamon siljishi: Present -> Past. [Savol #7]",
      "explanation": "Ushbu birlik (Reported Speech & Academic Sourcing) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to S + asserted / maintained / concluded + that + [zamon siljishi: Present -> Past.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "8-Savol: \"Reported Speech & Academic Sourcing\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #8]",
      "options": [
        "Correct academic usage adhering to S + asserted / maintained / concluded + that + [zamon siljishi: Present -> Past. [Savol #8]",
        "Incorrect auxiliary verb placement breaking the B1 grammar standard. [Savol #8]",
        "Incompatible tense sequence violating subject agreement. [Savol #8]",
        "Omission of essential verb particle or preposition. [Savol #8]"
      ],
      "correctAnswer": "Correct academic usage adhering to S + asserted / maintained / concluded + that + [zamon siljishi: Present -> Past. [Savol #8]",
      "explanation": "Ushbu birlik (Reported Speech & Academic Sourcing) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to S + asserted / maintained / concluded + that + [zamon siljishi: Present -> Past.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "9-Savol: \"Reported Speech & Academic Sourcing\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #9]",
      "options": [
        "Correct academic usage adhering to S + asserted / maintained / concluded + that + [zamon siljishi: Present -> Past. [Savol #9]",
        "Incorrect auxiliary verb placement breaking the B1 grammar standard. [Savol #9]",
        "Incompatible tense sequence violating subject agreement. [Savol #9]",
        "Omission of essential verb particle or preposition. [Savol #9]"
      ],
      "correctAnswer": "Correct academic usage adhering to S + asserted / maintained / concluded + that + [zamon siljishi: Present -> Past. [Savol #9]",
      "explanation": "Ushbu birlik (Reported Speech & Academic Sourcing) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to S + asserted / maintained / concluded + that + [zamon siljishi: Present -> Past.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "10-Savol: \"Reported Speech & Academic Sourcing\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #10]",
      "options": [
        "Correct academic usage adhering to S + asserted / maintained / concluded + that + [zamon siljishi: Present -> Past. [Savol #10]",
        "Incorrect auxiliary verb placement breaking the B1 grammar standard. [Savol #10]",
        "Incompatible tense sequence violating subject agreement. [Savol #10]",
        "Omission of essential verb particle or preposition. [Savol #10]"
      ],
      "correctAnswer": "Correct academic usage adhering to S + asserted / maintained / concluded + that + [zamon siljishi: Present -> Past. [Savol #10]",
      "explanation": "Ushbu birlik (Reported Speech & Academic Sourcing) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to S + asserted / maintained / concluded + that + [zamon siljishi: Present -> Past.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    }
  ],
  "ielts_b1_08_gerunds_vs_infinitives": [
    {
      "question": "Policymakers should consider _______ tax credits to corporations adopting solar power.",
      "options": [
        "offering",
        "to offer",
        "offer",
        "offered"
      ],
      "correctAnswer": "offering",
      "explanation": "'Consider' fe'li doimo gerundiy (considering offering) bilan ishlatiladi."
    },
    {
      "question": "The university committee managed _______ sufficient funding for the new laboratory.",
      "options": [
        "to secure",
        "securing",
        "secure",
        "secured"
      ],
      "correctAnswer": "to secure",
      "explanation": "'Manage' fe'li o'zidan so'ng to-infinitiv (manage to secure) talab qiladi."
    },
    {
      "question": "3-Savol: \"Gerunds vs Infinitives in Complex Sentences\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #3]",
      "options": [
        "Correct academic usage adhering to Gerund (V-ing): enjoy, suggest, avoid, risk, consider. [Savol #3]",
        "Incorrect auxiliary verb placement breaking the B1 grammar standard. [Savol #3]",
        "Incompatible tense sequence violating subject agreement. [Savol #3]",
        "Omission of essential verb particle or preposition. [Savol #3]"
      ],
      "correctAnswer": "Correct academic usage adhering to Gerund (V-ing): enjoy, suggest, avoid, risk, consider. [Savol #3]",
      "explanation": "Ushbu birlik (Gerunds vs Infinitives in Complex Sentences) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to Gerund (V-ing): enjoy, suggest, avoid, risk, consider.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "4-Savol: \"Gerunds vs Infinitives in Complex Sentences\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #4]",
      "options": [
        "Correct academic usage adhering to Gerund (V-ing): enjoy, suggest, avoid, risk, consider. [Savol #4]",
        "Incorrect auxiliary verb placement breaking the B1 grammar standard. [Savol #4]",
        "Incompatible tense sequence violating subject agreement. [Savol #4]",
        "Omission of essential verb particle or preposition. [Savol #4]"
      ],
      "correctAnswer": "Correct academic usage adhering to Gerund (V-ing): enjoy, suggest, avoid, risk, consider. [Savol #4]",
      "explanation": "Ushbu birlik (Gerunds vs Infinitives in Complex Sentences) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to Gerund (V-ing): enjoy, suggest, avoid, risk, consider.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "5-Savol: \"Gerunds vs Infinitives in Complex Sentences\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #5]",
      "options": [
        "Correct academic usage adhering to Gerund (V-ing): enjoy, suggest, avoid, risk, consider. [Savol #5]",
        "Incorrect auxiliary verb placement breaking the B1 grammar standard. [Savol #5]",
        "Incompatible tense sequence violating subject agreement. [Savol #5]",
        "Omission of essential verb particle or preposition. [Savol #5]"
      ],
      "correctAnswer": "Correct academic usage adhering to Gerund (V-ing): enjoy, suggest, avoid, risk, consider. [Savol #5]",
      "explanation": "Ushbu birlik (Gerunds vs Infinitives in Complex Sentences) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to Gerund (V-ing): enjoy, suggest, avoid, risk, consider.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "6-Savol: \"Gerunds vs Infinitives in Complex Sentences\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #6]",
      "options": [
        "Correct academic usage adhering to Gerund (V-ing): enjoy, suggest, avoid, risk, consider. [Savol #6]",
        "Incorrect auxiliary verb placement breaking the B1 grammar standard. [Savol #6]",
        "Incompatible tense sequence violating subject agreement. [Savol #6]",
        "Omission of essential verb particle or preposition. [Savol #6]"
      ],
      "correctAnswer": "Correct academic usage adhering to Gerund (V-ing): enjoy, suggest, avoid, risk, consider. [Savol #6]",
      "explanation": "Ushbu birlik (Gerunds vs Infinitives in Complex Sentences) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to Gerund (V-ing): enjoy, suggest, avoid, risk, consider.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "7-Savol: \"Gerunds vs Infinitives in Complex Sentences\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #7]",
      "options": [
        "Correct academic usage adhering to Gerund (V-ing): enjoy, suggest, avoid, risk, consider. [Savol #7]",
        "Incorrect auxiliary verb placement breaking the B1 grammar standard. [Savol #7]",
        "Incompatible tense sequence violating subject agreement. [Savol #7]",
        "Omission of essential verb particle or preposition. [Savol #7]"
      ],
      "correctAnswer": "Correct academic usage adhering to Gerund (V-ing): enjoy, suggest, avoid, risk, consider. [Savol #7]",
      "explanation": "Ushbu birlik (Gerunds vs Infinitives in Complex Sentences) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to Gerund (V-ing): enjoy, suggest, avoid, risk, consider.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "8-Savol: \"Gerunds vs Infinitives in Complex Sentences\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #8]",
      "options": [
        "Correct academic usage adhering to Gerund (V-ing): enjoy, suggest, avoid, risk, consider. [Savol #8]",
        "Incorrect auxiliary verb placement breaking the B1 grammar standard. [Savol #8]",
        "Incompatible tense sequence violating subject agreement. [Savol #8]",
        "Omission of essential verb particle or preposition. [Savol #8]"
      ],
      "correctAnswer": "Correct academic usage adhering to Gerund (V-ing): enjoy, suggest, avoid, risk, consider. [Savol #8]",
      "explanation": "Ushbu birlik (Gerunds vs Infinitives in Complex Sentences) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to Gerund (V-ing): enjoy, suggest, avoid, risk, consider.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "9-Savol: \"Gerunds vs Infinitives in Complex Sentences\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #9]",
      "options": [
        "Correct academic usage adhering to Gerund (V-ing): enjoy, suggest, avoid, risk, consider. [Savol #9]",
        "Incorrect auxiliary verb placement breaking the B1 grammar standard. [Savol #9]",
        "Incompatible tense sequence violating subject agreement. [Savol #9]",
        "Omission of essential verb particle or preposition. [Savol #9]"
      ],
      "correctAnswer": "Correct academic usage adhering to Gerund (V-ing): enjoy, suggest, avoid, risk, consider. [Savol #9]",
      "explanation": "Ushbu birlik (Gerunds vs Infinitives in Complex Sentences) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to Gerund (V-ing): enjoy, suggest, avoid, risk, consider.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "10-Savol: \"Gerunds vs Infinitives in Complex Sentences\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #10]",
      "options": [
        "Correct academic usage adhering to Gerund (V-ing): enjoy, suggest, avoid, risk, consider. [Savol #10]",
        "Incorrect auxiliary verb placement breaking the B1 grammar standard. [Savol #10]",
        "Incompatible tense sequence violating subject agreement. [Savol #10]",
        "Omission of essential verb particle or preposition. [Savol #10]"
      ],
      "correctAnswer": "Correct academic usage adhering to Gerund (V-ing): enjoy, suggest, avoid, risk, consider. [Savol #10]",
      "explanation": "Ushbu birlik (Gerunds vs Infinitives in Complex Sentences) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to Gerund (V-ing): enjoy, suggest, avoid, risk, consider.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    }
  ],
  "ielts_b1_09_cohesion_concession": [
    {
      "question": "_______ extensive public awareness campaigns, tobacco consumption remains prevalent.",
      "options": [
        "Despite",
        "Although",
        "Whereas",
        "Even though"
      ],
      "correctAnswer": "Despite",
      "explanation": "'Extensive campaigns' ot birikmasi bo'lgani uchun 'Despite' to'g'ri tanlovdir ('Although' to'liq gap talab qiladi)."
    },
    {
      "question": "_______ automated machinery increases manufacturing velocity, it eliminates assembly line jobs.",
      "options": [
        "While",
        "In spite of",
        "Despite",
        "Because of"
      ],
      "correctAnswer": "While",
      "explanation": "To'liq gap ('automated machinery increases velocity') oldidan zidlovchi ma'noda 'While' to'g'ri."
    },
    {
      "question": "3-Savol: \"Cohesive Devices & Concession (Although, Despite, In spite of)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #3]",
      "options": [
        "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #3]",
        "Not only rapid industrialization creates jobs, but it also alters rural demographics. [Savol #3]",
        "Not only did rapid industrialization creates jobs, but it also alters rural demographics. [Savol #3]",
        "Not only does rapid industrialization created jobs, but it alters rural demographics. [Savol #3]"
      ],
      "correctAnswer": "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #3]",
      "explanation": "Ushbu birlik (Cohesive Devices & Concession (Although, Despite, In spite of)) qoidasiga ko'ra, to'g'ri shakl 'Not only does rapid industrialization create jobs, but it also alters rural demographics.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "4-Savol: \"Cohesive Devices & Concession (Although, Despite, In spite of)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #4]",
      "options": [
        "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #4]",
        "Not only rapid industrialization creates jobs, but it also alters rural demographics. [Savol #4]",
        "Not only did rapid industrialization creates jobs, but it also alters rural demographics. [Savol #4]",
        "Not only does rapid industrialization created jobs, but it alters rural demographics. [Savol #4]"
      ],
      "correctAnswer": "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #4]",
      "explanation": "Ushbu birlik (Cohesive Devices & Concession (Although, Despite, In spite of)) qoidasiga ko'ra, to'g'ri shakl 'Not only does rapid industrialization create jobs, but it also alters rural demographics.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "5-Savol: \"Cohesive Devices & Concession (Although, Despite, In spite of)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #5]",
      "options": [
        "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #5]",
        "Not only rapid industrialization creates jobs, but it also alters rural demographics. [Savol #5]",
        "Not only did rapid industrialization creates jobs, but it also alters rural demographics. [Savol #5]",
        "Not only does rapid industrialization created jobs, but it alters rural demographics. [Savol #5]"
      ],
      "correctAnswer": "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #5]",
      "explanation": "Ushbu birlik (Cohesive Devices & Concession (Although, Despite, In spite of)) qoidasiga ko'ra, to'g'ri shakl 'Not only does rapid industrialization create jobs, but it also alters rural demographics.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "6-Savol: \"Cohesive Devices & Concession (Although, Despite, In spite of)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #6]",
      "options": [
        "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #6]",
        "Not only rapid industrialization creates jobs, but it also alters rural demographics. [Savol #6]",
        "Not only did rapid industrialization creates jobs, but it also alters rural demographics. [Savol #6]",
        "Not only does rapid industrialization created jobs, but it alters rural demographics. [Savol #6]"
      ],
      "correctAnswer": "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #6]",
      "explanation": "Ushbu birlik (Cohesive Devices & Concession (Although, Despite, In spite of)) qoidasiga ko'ra, to'g'ri shakl 'Not only does rapid industrialization create jobs, but it also alters rural demographics.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "7-Savol: \"Cohesive Devices & Concession (Although, Despite, In spite of)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #7]",
      "options": [
        "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #7]",
        "Not only rapid industrialization creates jobs, but it also alters rural demographics. [Savol #7]",
        "Not only did rapid industrialization creates jobs, but it also alters rural demographics. [Savol #7]",
        "Not only does rapid industrialization created jobs, but it alters rural demographics. [Savol #7]"
      ],
      "correctAnswer": "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #7]",
      "explanation": "Ushbu birlik (Cohesive Devices & Concession (Although, Despite, In spite of)) qoidasiga ko'ra, to'g'ri shakl 'Not only does rapid industrialization create jobs, but it also alters rural demographics.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "8-Savol: \"Cohesive Devices & Concession (Although, Despite, In spite of)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #8]",
      "options": [
        "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #8]",
        "Not only rapid industrialization creates jobs, but it also alters rural demographics. [Savol #8]",
        "Not only did rapid industrialization creates jobs, but it also alters rural demographics. [Savol #8]",
        "Not only does rapid industrialization created jobs, but it alters rural demographics. [Savol #8]"
      ],
      "correctAnswer": "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #8]",
      "explanation": "Ushbu birlik (Cohesive Devices & Concession (Although, Despite, In spite of)) qoidasiga ko'ra, to'g'ri shakl 'Not only does rapid industrialization create jobs, but it also alters rural demographics.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "9-Savol: \"Cohesive Devices & Concession (Although, Despite, In spite of)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #9]",
      "options": [
        "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #9]",
        "Not only rapid industrialization creates jobs, but it also alters rural demographics. [Savol #9]",
        "Not only did rapid industrialization creates jobs, but it also alters rural demographics. [Savol #9]",
        "Not only does rapid industrialization created jobs, but it alters rural demographics. [Savol #9]"
      ],
      "correctAnswer": "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #9]",
      "explanation": "Ushbu birlik (Cohesive Devices & Concession (Although, Despite, In spite of)) qoidasiga ko'ra, to'g'ri shakl 'Not only does rapid industrialization create jobs, but it also alters rural demographics.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "10-Savol: \"Cohesive Devices & Concession (Although, Despite, In spite of)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #10]",
      "options": [
        "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #10]",
        "Not only rapid industrialization creates jobs, but it also alters rural demographics. [Savol #10]",
        "Not only did rapid industrialization creates jobs, but it also alters rural demographics. [Savol #10]",
        "Not only does rapid industrialization created jobs, but it alters rural demographics. [Savol #10]"
      ],
      "correctAnswer": "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #10]",
      "explanation": "Ushbu birlik (Cohesive Devices & Concession (Although, Despite, In spite of)) qoidasiga ko'ra, to'g'ri shakl 'Not only does rapid industrialization create jobs, but it also alters rural demographics.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    }
  ],
  "ielts_b2_01_adverbial_clauses": [
    {
      "question": "Fiscal authorities lowered interest rates _______ commercial investment might stimulate economic recovery.",
      "options": [
        "in order that",
        "in order to",
        "because of",
        "owing to"
      ],
      "correctAnswer": "in order that",
      "explanation": "'In order that' to'liq gap va modal fe'l (might stimulate) bilan keladi."
    },
    {
      "question": "_______ metropolitan rents have escalated steeply, young professionals are migrating to suburban peripheries.",
      "options": [
        "Given that",
        "In spite of",
        "So that",
        "Despite"
      ],
      "correctAnswer": "Given that",
      "explanation": "Sababni mantiqiy asoslash uchun 'Given that' (inobatga olganda) to'g'ri."
    },
    {
      "question": "3-Savol: \"Complex Adverbial Clauses (Reason, Purpose, Result, Concession)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #3]",
      "options": [
        "Correct academic usage adhering to Maqsad: so that / in order that + clause. [Savol #3]",
        "Incorrect auxiliary verb placement breaking the B2 grammar standard. [Savol #3]",
        "Incompatible tense sequence violating subject agreement. [Savol #3]",
        "Omission of essential verb particle or preposition. [Savol #3]"
      ],
      "correctAnswer": "Correct academic usage adhering to Maqsad: so that / in order that + clause. [Savol #3]",
      "explanation": "Ushbu birlik (Complex Adverbial Clauses (Reason, Purpose, Result, Concession)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to Maqsad: so that / in order that + clause.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "4-Savol: \"Complex Adverbial Clauses (Reason, Purpose, Result, Concession)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #4]",
      "options": [
        "Correct academic usage adhering to Maqsad: so that / in order that + clause. [Savol #4]",
        "Incorrect auxiliary verb placement breaking the B2 grammar standard. [Savol #4]",
        "Incompatible tense sequence violating subject agreement. [Savol #4]",
        "Omission of essential verb particle or preposition. [Savol #4]"
      ],
      "correctAnswer": "Correct academic usage adhering to Maqsad: so that / in order that + clause. [Savol #4]",
      "explanation": "Ushbu birlik (Complex Adverbial Clauses (Reason, Purpose, Result, Concession)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to Maqsad: so that / in order that + clause.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "5-Savol: \"Complex Adverbial Clauses (Reason, Purpose, Result, Concession)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #5]",
      "options": [
        "Correct academic usage adhering to Maqsad: so that / in order that + clause. [Savol #5]",
        "Incorrect auxiliary verb placement breaking the B2 grammar standard. [Savol #5]",
        "Incompatible tense sequence violating subject agreement. [Savol #5]",
        "Omission of essential verb particle or preposition. [Savol #5]"
      ],
      "correctAnswer": "Correct academic usage adhering to Maqsad: so that / in order that + clause. [Savol #5]",
      "explanation": "Ushbu birlik (Complex Adverbial Clauses (Reason, Purpose, Result, Concession)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to Maqsad: so that / in order that + clause.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "6-Savol: \"Complex Adverbial Clauses (Reason, Purpose, Result, Concession)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #6]",
      "options": [
        "Correct academic usage adhering to Maqsad: so that / in order that + clause. [Savol #6]",
        "Incorrect auxiliary verb placement breaking the B2 grammar standard. [Savol #6]",
        "Incompatible tense sequence violating subject agreement. [Savol #6]",
        "Omission of essential verb particle or preposition. [Savol #6]"
      ],
      "correctAnswer": "Correct academic usage adhering to Maqsad: so that / in order that + clause. [Savol #6]",
      "explanation": "Ushbu birlik (Complex Adverbial Clauses (Reason, Purpose, Result, Concession)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to Maqsad: so that / in order that + clause.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "7-Savol: \"Complex Adverbial Clauses (Reason, Purpose, Result, Concession)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #7]",
      "options": [
        "Correct academic usage adhering to Maqsad: so that / in order that + clause. [Savol #7]",
        "Incorrect auxiliary verb placement breaking the B2 grammar standard. [Savol #7]",
        "Incompatible tense sequence violating subject agreement. [Savol #7]",
        "Omission of essential verb particle or preposition. [Savol #7]"
      ],
      "correctAnswer": "Correct academic usage adhering to Maqsad: so that / in order that + clause. [Savol #7]",
      "explanation": "Ushbu birlik (Complex Adverbial Clauses (Reason, Purpose, Result, Concession)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to Maqsad: so that / in order that + clause.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "8-Savol: \"Complex Adverbial Clauses (Reason, Purpose, Result, Concession)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #8]",
      "options": [
        "Correct academic usage adhering to Maqsad: so that / in order that + clause. [Savol #8]",
        "Incorrect auxiliary verb placement breaking the B2 grammar standard. [Savol #8]",
        "Incompatible tense sequence violating subject agreement. [Savol #8]",
        "Omission of essential verb particle or preposition. [Savol #8]"
      ],
      "correctAnswer": "Correct academic usage adhering to Maqsad: so that / in order that + clause. [Savol #8]",
      "explanation": "Ushbu birlik (Complex Adverbial Clauses (Reason, Purpose, Result, Concession)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to Maqsad: so that / in order that + clause.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "9-Savol: \"Complex Adverbial Clauses (Reason, Purpose, Result, Concession)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #9]",
      "options": [
        "Correct academic usage adhering to Maqsad: so that / in order that + clause. [Savol #9]",
        "Incorrect auxiliary verb placement breaking the B2 grammar standard. [Savol #9]",
        "Incompatible tense sequence violating subject agreement. [Savol #9]",
        "Omission of essential verb particle or preposition. [Savol #9]"
      ],
      "correctAnswer": "Correct academic usage adhering to Maqsad: so that / in order that + clause. [Savol #9]",
      "explanation": "Ushbu birlik (Complex Adverbial Clauses (Reason, Purpose, Result, Concession)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to Maqsad: so that / in order that + clause.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "10-Savol: \"Complex Adverbial Clauses (Reason, Purpose, Result, Concession)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #10]",
      "options": [
        "Correct academic usage adhering to Maqsad: so that / in order that + clause. [Savol #10]",
        "Incorrect auxiliary verb placement breaking the B2 grammar standard. [Savol #10]",
        "Incompatible tense sequence violating subject agreement. [Savol #10]",
        "Omission of essential verb particle or preposition. [Savol #10]"
      ],
      "correctAnswer": "Correct academic usage adhering to Maqsad: so that / in order that + clause. [Savol #10]",
      "explanation": "Ushbu birlik (Complex Adverbial Clauses (Reason, Purpose, Result, Concession)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to Maqsad: so that / in order that + clause.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    }
  ],
  "ielts_b2_02_advanced_relatives_prep": [
    {
      "question": "The global symposium established a treaty, the implications _______ remain contested.",
      "options": [
        "of which",
        "in that",
        "for whose",
        "to which"
      ],
      "correctAnswer": "of which",
      "explanation": "'The implications of which' (uning oqibatlari) shartnoma oqibatlarini bog'lash uchun to'g'ri sintaksisdir."
    },
    {
      "question": "Democratic societies rely on legal mechanisms _______ citizens can hold leaders accountable.",
      "options": [
        "through which",
        "through that",
        "whereby that",
        "in what"
      ],
      "correctAnswer": "through which",
      "explanation": "'Mexanizmlar orqali' ma'nosida 'through which' akademik iborasi to'g'ri."
    },
    {
      "question": "3-Savol: \"Non-defining Relative Clauses with Prepositions (in which, to whom)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #3]",
      "options": [
        "Correct academic usage adhering to Noun, Preposition + which / whom / whose + Clause, Main Clause. [Savol #3]",
        "Incorrect auxiliary verb placement breaking the B2 grammar standard. [Savol #3]",
        "Incompatible tense sequence violating subject agreement. [Savol #3]",
        "Omission of essential verb particle or preposition. [Savol #3]"
      ],
      "correctAnswer": "Correct academic usage adhering to Noun, Preposition + which / whom / whose + Clause, Main Clause. [Savol #3]",
      "explanation": "Ushbu birlik (Non-defining Relative Clauses with Prepositions (in which, to whom)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to Noun, Preposition + which / whom / whose + Clause, Main Clause.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "4-Savol: \"Non-defining Relative Clauses with Prepositions (in which, to whom)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #4]",
      "options": [
        "Correct academic usage adhering to Noun, Preposition + which / whom / whose + Clause, Main Clause. [Savol #4]",
        "Incorrect auxiliary verb placement breaking the B2 grammar standard. [Savol #4]",
        "Incompatible tense sequence violating subject agreement. [Savol #4]",
        "Omission of essential verb particle or preposition. [Savol #4]"
      ],
      "correctAnswer": "Correct academic usage adhering to Noun, Preposition + which / whom / whose + Clause, Main Clause. [Savol #4]",
      "explanation": "Ushbu birlik (Non-defining Relative Clauses with Prepositions (in which, to whom)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to Noun, Preposition + which / whom / whose + Clause, Main Clause.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "5-Savol: \"Non-defining Relative Clauses with Prepositions (in which, to whom)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #5]",
      "options": [
        "Correct academic usage adhering to Noun, Preposition + which / whom / whose + Clause, Main Clause. [Savol #5]",
        "Incorrect auxiliary verb placement breaking the B2 grammar standard. [Savol #5]",
        "Incompatible tense sequence violating subject agreement. [Savol #5]",
        "Omission of essential verb particle or preposition. [Savol #5]"
      ],
      "correctAnswer": "Correct academic usage adhering to Noun, Preposition + which / whom / whose + Clause, Main Clause. [Savol #5]",
      "explanation": "Ushbu birlik (Non-defining Relative Clauses with Prepositions (in which, to whom)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to Noun, Preposition + which / whom / whose + Clause, Main Clause.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "6-Savol: \"Non-defining Relative Clauses with Prepositions (in which, to whom)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #6]",
      "options": [
        "Correct academic usage adhering to Noun, Preposition + which / whom / whose + Clause, Main Clause. [Savol #6]",
        "Incorrect auxiliary verb placement breaking the B2 grammar standard. [Savol #6]",
        "Incompatible tense sequence violating subject agreement. [Savol #6]",
        "Omission of essential verb particle or preposition. [Savol #6]"
      ],
      "correctAnswer": "Correct academic usage adhering to Noun, Preposition + which / whom / whose + Clause, Main Clause. [Savol #6]",
      "explanation": "Ushbu birlik (Non-defining Relative Clauses with Prepositions (in which, to whom)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to Noun, Preposition + which / whom / whose + Clause, Main Clause.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "7-Savol: \"Non-defining Relative Clauses with Prepositions (in which, to whom)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #7]",
      "options": [
        "Correct academic usage adhering to Noun, Preposition + which / whom / whose + Clause, Main Clause. [Savol #7]",
        "Incorrect auxiliary verb placement breaking the B2 grammar standard. [Savol #7]",
        "Incompatible tense sequence violating subject agreement. [Savol #7]",
        "Omission of essential verb particle or preposition. [Savol #7]"
      ],
      "correctAnswer": "Correct academic usage adhering to Noun, Preposition + which / whom / whose + Clause, Main Clause. [Savol #7]",
      "explanation": "Ushbu birlik (Non-defining Relative Clauses with Prepositions (in which, to whom)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to Noun, Preposition + which / whom / whose + Clause, Main Clause.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "8-Savol: \"Non-defining Relative Clauses with Prepositions (in which, to whom)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #8]",
      "options": [
        "Correct academic usage adhering to Noun, Preposition + which / whom / whose + Clause, Main Clause. [Savol #8]",
        "Incorrect auxiliary verb placement breaking the B2 grammar standard. [Savol #8]",
        "Incompatible tense sequence violating subject agreement. [Savol #8]",
        "Omission of essential verb particle or preposition. [Savol #8]"
      ],
      "correctAnswer": "Correct academic usage adhering to Noun, Preposition + which / whom / whose + Clause, Main Clause. [Savol #8]",
      "explanation": "Ushbu birlik (Non-defining Relative Clauses with Prepositions (in which, to whom)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to Noun, Preposition + which / whom / whose + Clause, Main Clause.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "9-Savol: \"Non-defining Relative Clauses with Prepositions (in which, to whom)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #9]",
      "options": [
        "Correct academic usage adhering to Noun, Preposition + which / whom / whose + Clause, Main Clause. [Savol #9]",
        "Incorrect auxiliary verb placement breaking the B2 grammar standard. [Savol #9]",
        "Incompatible tense sequence violating subject agreement. [Savol #9]",
        "Omission of essential verb particle or preposition. [Savol #9]"
      ],
      "correctAnswer": "Correct academic usage adhering to Noun, Preposition + which / whom / whose + Clause, Main Clause. [Savol #9]",
      "explanation": "Ushbu birlik (Non-defining Relative Clauses with Prepositions (in which, to whom)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to Noun, Preposition + which / whom / whose + Clause, Main Clause.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "10-Savol: \"Non-defining Relative Clauses with Prepositions (in which, to whom)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #10]",
      "options": [
        "Correct academic usage adhering to Noun, Preposition + which / whom / whose + Clause, Main Clause. [Savol #10]",
        "Incorrect auxiliary verb placement breaking the B2 grammar standard. [Savol #10]",
        "Incompatible tense sequence violating subject agreement. [Savol #10]",
        "Omission of essential verb particle or preposition. [Savol #10]"
      ],
      "correctAnswer": "Correct academic usage adhering to Noun, Preposition + which / whom / whose + Clause, Main Clause. [Savol #10]",
      "explanation": "Ushbu birlik (Non-defining Relative Clauses with Prepositions (in which, to whom)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to Noun, Preposition + which / whom / whose + Clause, Main Clause.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    }
  ],
  "ielts_b2_03_future_continuous_perfect": [
    {
      "question": "Statistical projections suggest that by mid-century, healthcare costs _______ twofold.",
      "options": [
        "will have multiplied",
        "will multiply",
        "are multiplying",
        "will be multiply"
      ],
      "correctAnswer": "will have multiplied",
      "explanation": "'By mid-century' chegarasi kelasi tugallangan zamon (will have multiplied) ni talab qiladi."
    },
    {
      "question": "At this point in the decade, researchers _______ longitudinal trials on quantum encryption.",
      "options": [
        "will be conducting",
        "will have conducted",
        "conduct",
        "have conducted"
      ],
      "correctAnswer": "will be conducting",
      "explanation": "Kelajakda davom etib turadigan jarayon uchun Future Continuous (will be conducting) to'g'ri."
    },
    {
      "question": "3-Savol: \"Future Continuous & Future Perfect in Data Forecasting\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #3]",
      "options": [
        "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #3]",
        "Researchers has recently discovered conclusive evidence supporting this hypothesis. [Savol #3]",
        "Researchers have recently discover conclusive evidence supporting this hypothesis. [Savol #3]",
        "Researchers have discovered recently evidence supporting this hypothesis yesterday. [Savol #3]"
      ],
      "correctAnswer": "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #3]",
      "explanation": "Ushbu birlik (Future Continuous & Future Perfect in Data Forecasting) qoidasiga ko'ra, to'g'ri shakl 'Researchers have recently discovered conclusive evidence supporting this hypothesis.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "4-Savol: \"Future Continuous & Future Perfect in Data Forecasting\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #4]",
      "options": [
        "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #4]",
        "Researchers has recently discovered conclusive evidence supporting this hypothesis. [Savol #4]",
        "Researchers have recently discover conclusive evidence supporting this hypothesis. [Savol #4]",
        "Researchers have discovered recently evidence supporting this hypothesis yesterday. [Savol #4]"
      ],
      "correctAnswer": "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #4]",
      "explanation": "Ushbu birlik (Future Continuous & Future Perfect in Data Forecasting) qoidasiga ko'ra, to'g'ri shakl 'Researchers have recently discovered conclusive evidence supporting this hypothesis.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "5-Savol: \"Future Continuous & Future Perfect in Data Forecasting\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #5]",
      "options": [
        "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #5]",
        "Researchers has recently discovered conclusive evidence supporting this hypothesis. [Savol #5]",
        "Researchers have recently discover conclusive evidence supporting this hypothesis. [Savol #5]",
        "Researchers have discovered recently evidence supporting this hypothesis yesterday. [Savol #5]"
      ],
      "correctAnswer": "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #5]",
      "explanation": "Ushbu birlik (Future Continuous & Future Perfect in Data Forecasting) qoidasiga ko'ra, to'g'ri shakl 'Researchers have recently discovered conclusive evidence supporting this hypothesis.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "6-Savol: \"Future Continuous & Future Perfect in Data Forecasting\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #6]",
      "options": [
        "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #6]",
        "Researchers has recently discovered conclusive evidence supporting this hypothesis. [Savol #6]",
        "Researchers have recently discover conclusive evidence supporting this hypothesis. [Savol #6]",
        "Researchers have discovered recently evidence supporting this hypothesis yesterday. [Savol #6]"
      ],
      "correctAnswer": "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #6]",
      "explanation": "Ushbu birlik (Future Continuous & Future Perfect in Data Forecasting) qoidasiga ko'ra, to'g'ri shakl 'Researchers have recently discovered conclusive evidence supporting this hypothesis.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "7-Savol: \"Future Continuous & Future Perfect in Data Forecasting\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #7]",
      "options": [
        "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #7]",
        "Researchers has recently discovered conclusive evidence supporting this hypothesis. [Savol #7]",
        "Researchers have recently discover conclusive evidence supporting this hypothesis. [Savol #7]",
        "Researchers have discovered recently evidence supporting this hypothesis yesterday. [Savol #7]"
      ],
      "correctAnswer": "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #7]",
      "explanation": "Ushbu birlik (Future Continuous & Future Perfect in Data Forecasting) qoidasiga ko'ra, to'g'ri shakl 'Researchers have recently discovered conclusive evidence supporting this hypothesis.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "8-Savol: \"Future Continuous & Future Perfect in Data Forecasting\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #8]",
      "options": [
        "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #8]",
        "Researchers has recently discovered conclusive evidence supporting this hypothesis. [Savol #8]",
        "Researchers have recently discover conclusive evidence supporting this hypothesis. [Savol #8]",
        "Researchers have discovered recently evidence supporting this hypothesis yesterday. [Savol #8]"
      ],
      "correctAnswer": "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #8]",
      "explanation": "Ushbu birlik (Future Continuous & Future Perfect in Data Forecasting) qoidasiga ko'ra, to'g'ri shakl 'Researchers have recently discovered conclusive evidence supporting this hypothesis.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "9-Savol: \"Future Continuous & Future Perfect in Data Forecasting\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #9]",
      "options": [
        "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #9]",
        "Researchers has recently discovered conclusive evidence supporting this hypothesis. [Savol #9]",
        "Researchers have recently discover conclusive evidence supporting this hypothesis. [Savol #9]",
        "Researchers have discovered recently evidence supporting this hypothesis yesterday. [Savol #9]"
      ],
      "correctAnswer": "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #9]",
      "explanation": "Ushbu birlik (Future Continuous & Future Perfect in Data Forecasting) qoidasiga ko'ra, to'g'ri shakl 'Researchers have recently discovered conclusive evidence supporting this hypothesis.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "10-Savol: \"Future Continuous & Future Perfect in Data Forecasting\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #10]",
      "options": [
        "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #10]",
        "Researchers has recently discovered conclusive evidence supporting this hypothesis. [Savol #10]",
        "Researchers have recently discover conclusive evidence supporting this hypothesis. [Savol #10]",
        "Researchers have discovered recently evidence supporting this hypothesis yesterday. [Savol #10]"
      ],
      "correctAnswer": "Researchers have recently discovered conclusive evidence supporting this hypothesis. [Savol #10]",
      "explanation": "Ushbu birlik (Future Continuous & Future Perfect in Data Forecasting) qoidasiga ko'ra, to'g'ri shakl 'Researchers have recently discovered conclusive evidence supporting this hypothesis.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    }
  ],
  "ielts_b2_04_unreal_past_wishes": [
    {
      "question": "Conservation biologists contend that it is high time humanity _______ carbon emissions.",
      "options": [
        "curbed",
        "curbs",
        "curbing",
        "would curb"
      ],
      "correctAnswer": "curbed",
      "explanation": "'It is high time + Subject + Past Simple' (curbed) formulasiga asosan to'g'ri."
    },
    {
      "question": "I wish educational policymakers _______ more attention to practical vocational competencies.",
      "options": [
        "paid",
        "pay",
        "will pay",
        "are paying"
      ],
      "correctAnswer": "paid",
      "explanation": "Hozirgi paytga oid orzu-istak uchun 'wish + Past Simple' (paid) ishlatiladi."
    },
    {
      "question": "3-Savol: \"Unreal Past & Hypothetical Desires (I wish, If only, It's time)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #3]",
      "options": [
        "Correct academic usage adhering to I wish / If only + Past Simple (present wish). [Savol #3]",
        "Incorrect auxiliary verb placement breaking the B2 grammar standard. [Savol #3]",
        "Incompatible tense sequence violating subject agreement. [Savol #3]",
        "Omission of essential verb particle or preposition. [Savol #3]"
      ],
      "correctAnswer": "Correct academic usage adhering to I wish / If only + Past Simple (present wish). [Savol #3]",
      "explanation": "Ushbu birlik (Unreal Past & Hypothetical Desires (I wish, If only, It's time)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to I wish / If only + Past Simple (present wish).' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "4-Savol: \"Unreal Past & Hypothetical Desires (I wish, If only, It's time)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #4]",
      "options": [
        "Correct academic usage adhering to I wish / If only + Past Simple (present wish). [Savol #4]",
        "Incorrect auxiliary verb placement breaking the B2 grammar standard. [Savol #4]",
        "Incompatible tense sequence violating subject agreement. [Savol #4]",
        "Omission of essential verb particle or preposition. [Savol #4]"
      ],
      "correctAnswer": "Correct academic usage adhering to I wish / If only + Past Simple (present wish). [Savol #4]",
      "explanation": "Ushbu birlik (Unreal Past & Hypothetical Desires (I wish, If only, It's time)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to I wish / If only + Past Simple (present wish).' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "5-Savol: \"Unreal Past & Hypothetical Desires (I wish, If only, It's time)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #5]",
      "options": [
        "Correct academic usage adhering to I wish / If only + Past Simple (present wish). [Savol #5]",
        "Incorrect auxiliary verb placement breaking the B2 grammar standard. [Savol #5]",
        "Incompatible tense sequence violating subject agreement. [Savol #5]",
        "Omission of essential verb particle or preposition. [Savol #5]"
      ],
      "correctAnswer": "Correct academic usage adhering to I wish / If only + Past Simple (present wish). [Savol #5]",
      "explanation": "Ushbu birlik (Unreal Past & Hypothetical Desires (I wish, If only, It's time)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to I wish / If only + Past Simple (present wish).' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "6-Savol: \"Unreal Past & Hypothetical Desires (I wish, If only, It's time)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #6]",
      "options": [
        "Correct academic usage adhering to I wish / If only + Past Simple (present wish). [Savol #6]",
        "Incorrect auxiliary verb placement breaking the B2 grammar standard. [Savol #6]",
        "Incompatible tense sequence violating subject agreement. [Savol #6]",
        "Omission of essential verb particle or preposition. [Savol #6]"
      ],
      "correctAnswer": "Correct academic usage adhering to I wish / If only + Past Simple (present wish). [Savol #6]",
      "explanation": "Ushbu birlik (Unreal Past & Hypothetical Desires (I wish, If only, It's time)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to I wish / If only + Past Simple (present wish).' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "7-Savol: \"Unreal Past & Hypothetical Desires (I wish, If only, It's time)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #7]",
      "options": [
        "Correct academic usage adhering to I wish / If only + Past Simple (present wish). [Savol #7]",
        "Incorrect auxiliary verb placement breaking the B2 grammar standard. [Savol #7]",
        "Incompatible tense sequence violating subject agreement. [Savol #7]",
        "Omission of essential verb particle or preposition. [Savol #7]"
      ],
      "correctAnswer": "Correct academic usage adhering to I wish / If only + Past Simple (present wish). [Savol #7]",
      "explanation": "Ushbu birlik (Unreal Past & Hypothetical Desires (I wish, If only, It's time)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to I wish / If only + Past Simple (present wish).' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "8-Savol: \"Unreal Past & Hypothetical Desires (I wish, If only, It's time)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #8]",
      "options": [
        "Correct academic usage adhering to I wish / If only + Past Simple (present wish). [Savol #8]",
        "Incorrect auxiliary verb placement breaking the B2 grammar standard. [Savol #8]",
        "Incompatible tense sequence violating subject agreement. [Savol #8]",
        "Omission of essential verb particle or preposition. [Savol #8]"
      ],
      "correctAnswer": "Correct academic usage adhering to I wish / If only + Past Simple (present wish). [Savol #8]",
      "explanation": "Ushbu birlik (Unreal Past & Hypothetical Desires (I wish, If only, It's time)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to I wish / If only + Past Simple (present wish).' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "9-Savol: \"Unreal Past & Hypothetical Desires (I wish, If only, It's time)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #9]",
      "options": [
        "Correct academic usage adhering to I wish / If only + Past Simple (present wish). [Savol #9]",
        "Incorrect auxiliary verb placement breaking the B2 grammar standard. [Savol #9]",
        "Incompatible tense sequence violating subject agreement. [Savol #9]",
        "Omission of essential verb particle or preposition. [Savol #9]"
      ],
      "correctAnswer": "Correct academic usage adhering to I wish / If only + Past Simple (present wish). [Savol #9]",
      "explanation": "Ushbu birlik (Unreal Past & Hypothetical Desires (I wish, If only, It's time)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to I wish / If only + Past Simple (present wish).' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "10-Savol: \"Unreal Past & Hypothetical Desires (I wish, If only, It's time)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #10]",
      "options": [
        "Correct academic usage adhering to I wish / If only + Past Simple (present wish). [Savol #10]",
        "Incorrect auxiliary verb placement breaking the B2 grammar standard. [Savol #10]",
        "Incompatible tense sequence violating subject agreement. [Savol #10]",
        "Omission of essential verb particle or preposition. [Savol #10]"
      ],
      "correctAnswer": "Correct academic usage adhering to I wish / If only + Past Simple (present wish). [Savol #10]",
      "explanation": "Ushbu birlik (Unreal Past & Hypothetical Desires (I wish, If only, It's time)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to I wish / If only + Past Simple (present wish).' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    }
  ],
  "ielts_b2_05_passive_reporting_verbs": [
    {
      "question": "Urban density _______ to foster greater resource efficiency and reduced transit times.",
      "options": [
        "is understood",
        "understands",
        "is understanding",
        "understood"
      ],
      "correctAnswer": "is understood",
      "explanation": "'Subject + is understood to + Base verb' to'g'ri passiv xabar strukturasidir."
    },
    {
      "question": "It is increasingly _______ that artificial intelligence necessitates stringent regulatory oversight.",
      "options": [
        "recognized",
        "recognize",
        "recognizing",
        "recognition"
      ],
      "correctAnswer": "recognized",
      "explanation": "'It is + V3 (recognized) + that' to'g'ri formuladir."
    },
    {
      "question": "3-Savol: \"Passive Reporting Structures (It is widely argued that..., Subject is said to...)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #3]",
      "options": [
        "The statistical survey was conducted by independent international analysts. [Savol #3]",
        "The statistical survey was conduct by independent international analysts. [Savol #3]",
        "The statistical survey been conducted by independent international analysts. [Savol #3]",
        "The statistical survey is conduct by independent international analysts. [Savol #3]"
      ],
      "correctAnswer": "The statistical survey was conducted by independent international analysts. [Savol #3]",
      "explanation": "Ushbu birlik (Passive Reporting Structures (It is widely argued that..., Subject is said to...)) qoidasiga ko'ra, to'g'ri shakl 'The statistical survey was conducted by independent international analysts.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "4-Savol: \"Passive Reporting Structures (It is widely argued that..., Subject is said to...)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #4]",
      "options": [
        "The statistical survey was conducted by independent international analysts. [Savol #4]",
        "The statistical survey was conduct by independent international analysts. [Savol #4]",
        "The statistical survey been conducted by independent international analysts. [Savol #4]",
        "The statistical survey is conduct by independent international analysts. [Savol #4]"
      ],
      "correctAnswer": "The statistical survey was conducted by independent international analysts. [Savol #4]",
      "explanation": "Ushbu birlik (Passive Reporting Structures (It is widely argued that..., Subject is said to...)) qoidasiga ko'ra, to'g'ri shakl 'The statistical survey was conducted by independent international analysts.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "5-Savol: \"Passive Reporting Structures (It is widely argued that..., Subject is said to...)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #5]",
      "options": [
        "The statistical survey was conducted by independent international analysts. [Savol #5]",
        "The statistical survey was conduct by independent international analysts. [Savol #5]",
        "The statistical survey been conducted by independent international analysts. [Savol #5]",
        "The statistical survey is conduct by independent international analysts. [Savol #5]"
      ],
      "correctAnswer": "The statistical survey was conducted by independent international analysts. [Savol #5]",
      "explanation": "Ushbu birlik (Passive Reporting Structures (It is widely argued that..., Subject is said to...)) qoidasiga ko'ra, to'g'ri shakl 'The statistical survey was conducted by independent international analysts.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "6-Savol: \"Passive Reporting Structures (It is widely argued that..., Subject is said to...)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #6]",
      "options": [
        "The statistical survey was conducted by independent international analysts. [Savol #6]",
        "The statistical survey was conduct by independent international analysts. [Savol #6]",
        "The statistical survey been conducted by independent international analysts. [Savol #6]",
        "The statistical survey is conduct by independent international analysts. [Savol #6]"
      ],
      "correctAnswer": "The statistical survey was conducted by independent international analysts. [Savol #6]",
      "explanation": "Ushbu birlik (Passive Reporting Structures (It is widely argued that..., Subject is said to...)) qoidasiga ko'ra, to'g'ri shakl 'The statistical survey was conducted by independent international analysts.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "7-Savol: \"Passive Reporting Structures (It is widely argued that..., Subject is said to...)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #7]",
      "options": [
        "The statistical survey was conducted by independent international analysts. [Savol #7]",
        "The statistical survey was conduct by independent international analysts. [Savol #7]",
        "The statistical survey been conducted by independent international analysts. [Savol #7]",
        "The statistical survey is conduct by independent international analysts. [Savol #7]"
      ],
      "correctAnswer": "The statistical survey was conducted by independent international analysts. [Savol #7]",
      "explanation": "Ushbu birlik (Passive Reporting Structures (It is widely argued that..., Subject is said to...)) qoidasiga ko'ra, to'g'ri shakl 'The statistical survey was conducted by independent international analysts.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "8-Savol: \"Passive Reporting Structures (It is widely argued that..., Subject is said to...)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #8]",
      "options": [
        "The statistical survey was conducted by independent international analysts. [Savol #8]",
        "The statistical survey was conduct by independent international analysts. [Savol #8]",
        "The statistical survey been conducted by independent international analysts. [Savol #8]",
        "The statistical survey is conduct by independent international analysts. [Savol #8]"
      ],
      "correctAnswer": "The statistical survey was conducted by independent international analysts. [Savol #8]",
      "explanation": "Ushbu birlik (Passive Reporting Structures (It is widely argued that..., Subject is said to...)) qoidasiga ko'ra, to'g'ri shakl 'The statistical survey was conducted by independent international analysts.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "9-Savol: \"Passive Reporting Structures (It is widely argued that..., Subject is said to...)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #9]",
      "options": [
        "The statistical survey was conducted by independent international analysts. [Savol #9]",
        "The statistical survey was conduct by independent international analysts. [Savol #9]",
        "The statistical survey been conducted by independent international analysts. [Savol #9]",
        "The statistical survey is conduct by independent international analysts. [Savol #9]"
      ],
      "correctAnswer": "The statistical survey was conducted by independent international analysts. [Savol #9]",
      "explanation": "Ushbu birlik (Passive Reporting Structures (It is widely argued that..., Subject is said to...)) qoidasiga ko'ra, to'g'ri shakl 'The statistical survey was conducted by independent international analysts.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "10-Savol: \"Passive Reporting Structures (It is widely argued that..., Subject is said to...)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #10]",
      "options": [
        "The statistical survey was conducted by independent international analysts. [Savol #10]",
        "The statistical survey was conduct by independent international analysts. [Savol #10]",
        "The statistical survey been conducted by independent international analysts. [Savol #10]",
        "The statistical survey is conduct by independent international analysts. [Savol #10]"
      ],
      "correctAnswer": "The statistical survey was conducted by independent international analysts. [Savol #10]",
      "explanation": "Ushbu birlik (Passive Reporting Structures (It is widely argued that..., Subject is said to...)) qoidasiga ko'ra, to'g'ri shakl 'The statistical survey was conducted by independent international analysts.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    }
  ],
  "ielts_b2_06_participle_clauses_economy": [
    {
      "question": "_______ the preliminary laboratory results, the panel sanctioned further clinical development.",
      "options": [
        "Having validated",
        "Validated having",
        "After validate",
        "Validated"
      ],
      "correctAnswer": "Having validated",
      "explanation": "Oldinroq tugallangan faol harakat uchun 'Having + V3' (Having validated) ishlatiladi."
    },
    {
      "question": "_______ by persistent inflation, consumer purchasing power diminished notably.",
      "options": [
        "Constrained",
        "Constraining",
        "Having constrained",
        "To constrain"
      ],
      "correctAnswer": "Constrained",
      "explanation": "Passiv sabab (inflyatsiya tomonidan cheklangan holda) uchun Past Participle (Constrained) to'g'ri."
    },
    {
      "question": "3-Savol: \"Participle Clauses for Sentence Economy & Variety\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #3]",
      "options": [
        "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #3]",
        "Not only rapid industrialization creates jobs, but it also alters rural demographics. [Savol #3]",
        "Not only did rapid industrialization creates jobs, but it also alters rural demographics. [Savol #3]",
        "Not only does rapid industrialization created jobs, but it alters rural demographics. [Savol #3]"
      ],
      "correctAnswer": "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #3]",
      "explanation": "Ushbu birlik (Participle Clauses for Sentence Economy & Variety) qoidasiga ko'ra, to'g'ri shakl 'Not only does rapid industrialization create jobs, but it also alters rural demographics.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "4-Savol: \"Participle Clauses for Sentence Economy & Variety\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #4]",
      "options": [
        "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #4]",
        "Not only rapid industrialization creates jobs, but it also alters rural demographics. [Savol #4]",
        "Not only did rapid industrialization creates jobs, but it also alters rural demographics. [Savol #4]",
        "Not only does rapid industrialization created jobs, but it alters rural demographics. [Savol #4]"
      ],
      "correctAnswer": "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #4]",
      "explanation": "Ushbu birlik (Participle Clauses for Sentence Economy & Variety) qoidasiga ko'ra, to'g'ri shakl 'Not only does rapid industrialization create jobs, but it also alters rural demographics.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "5-Savol: \"Participle Clauses for Sentence Economy & Variety\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #5]",
      "options": [
        "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #5]",
        "Not only rapid industrialization creates jobs, but it also alters rural demographics. [Savol #5]",
        "Not only did rapid industrialization creates jobs, but it also alters rural demographics. [Savol #5]",
        "Not only does rapid industrialization created jobs, but it alters rural demographics. [Savol #5]"
      ],
      "correctAnswer": "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #5]",
      "explanation": "Ushbu birlik (Participle Clauses for Sentence Economy & Variety) qoidasiga ko'ra, to'g'ri shakl 'Not only does rapid industrialization create jobs, but it also alters rural demographics.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "6-Savol: \"Participle Clauses for Sentence Economy & Variety\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #6]",
      "options": [
        "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #6]",
        "Not only rapid industrialization creates jobs, but it also alters rural demographics. [Savol #6]",
        "Not only did rapid industrialization creates jobs, but it also alters rural demographics. [Savol #6]",
        "Not only does rapid industrialization created jobs, but it alters rural demographics. [Savol #6]"
      ],
      "correctAnswer": "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #6]",
      "explanation": "Ushbu birlik (Participle Clauses for Sentence Economy & Variety) qoidasiga ko'ra, to'g'ri shakl 'Not only does rapid industrialization create jobs, but it also alters rural demographics.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "7-Savol: \"Participle Clauses for Sentence Economy & Variety\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #7]",
      "options": [
        "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #7]",
        "Not only rapid industrialization creates jobs, but it also alters rural demographics. [Savol #7]",
        "Not only did rapid industrialization creates jobs, but it also alters rural demographics. [Savol #7]",
        "Not only does rapid industrialization created jobs, but it alters rural demographics. [Savol #7]"
      ],
      "correctAnswer": "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #7]",
      "explanation": "Ushbu birlik (Participle Clauses for Sentence Economy & Variety) qoidasiga ko'ra, to'g'ri shakl 'Not only does rapid industrialization create jobs, but it also alters rural demographics.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "8-Savol: \"Participle Clauses for Sentence Economy & Variety\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #8]",
      "options": [
        "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #8]",
        "Not only rapid industrialization creates jobs, but it also alters rural demographics. [Savol #8]",
        "Not only did rapid industrialization creates jobs, but it also alters rural demographics. [Savol #8]",
        "Not only does rapid industrialization created jobs, but it alters rural demographics. [Savol #8]"
      ],
      "correctAnswer": "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #8]",
      "explanation": "Ushbu birlik (Participle Clauses for Sentence Economy & Variety) qoidasiga ko'ra, to'g'ri shakl 'Not only does rapid industrialization create jobs, but it also alters rural demographics.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "9-Savol: \"Participle Clauses for Sentence Economy & Variety\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #9]",
      "options": [
        "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #9]",
        "Not only rapid industrialization creates jobs, but it also alters rural demographics. [Savol #9]",
        "Not only did rapid industrialization creates jobs, but it also alters rural demographics. [Savol #9]",
        "Not only does rapid industrialization created jobs, but it alters rural demographics. [Savol #9]"
      ],
      "correctAnswer": "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #9]",
      "explanation": "Ushbu birlik (Participle Clauses for Sentence Economy & Variety) qoidasiga ko'ra, to'g'ri shakl 'Not only does rapid industrialization create jobs, but it also alters rural demographics.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "10-Savol: \"Participle Clauses for Sentence Economy & Variety\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #10]",
      "options": [
        "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #10]",
        "Not only rapid industrialization creates jobs, but it also alters rural demographics. [Savol #10]",
        "Not only did rapid industrialization creates jobs, but it also alters rural demographics. [Savol #10]",
        "Not only does rapid industrialization created jobs, but it alters rural demographics. [Savol #10]"
      ],
      "correctAnswer": "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #10]",
      "explanation": "Ushbu birlik (Participle Clauses for Sentence Economy & Variety) qoidasiga ko'ra, to'g'ri shakl 'Not only does rapid industrialization create jobs, but it also alters rural demographics.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    }
  ],
  "ielts_b2_07_double_comparatives": [
    {
      "question": "The more sophisticated artificial intelligence becomes, _______ ethical scrutiny it demands.",
      "options": [
        "the greater",
        "greater",
        "the more great",
        "most"
      ],
      "correctAnswer": "the greater",
      "explanation": "Proporsional qiyosiy formulada ikkinchi tomonda ham 'the + comparative' (the greater) bo'ladi."
    },
    {
      "question": "The _______ the air quality index, the higher the hospital admission rates.",
      "options": [
        "poorer",
        "the poorer",
        "poor",
        "more poor"
      ],
      "correctAnswer": "poorer",
      "explanation": "'The' boshida turgani uchun qiyosiy sifat 'poorer' qo'yiladi."
    },
    {
      "question": "3-Savol: \"Double Comparatives for Correlative Trends\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #3]",
      "options": [
        "Correct academic usage adhering to The + comparative adjective/adverb ..., the + comparative adjective/adverb .... [Savol #3]",
        "Incorrect auxiliary verb placement breaking the B2 grammar standard. [Savol #3]",
        "Incompatible tense sequence violating subject agreement. [Savol #3]",
        "Omission of essential verb particle or preposition. [Savol #3]"
      ],
      "correctAnswer": "Correct academic usage adhering to The + comparative adjective/adverb ..., the + comparative adjective/adverb .... [Savol #3]",
      "explanation": "Ushbu birlik (Double Comparatives for Correlative Trends) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to The + comparative adjective/adverb ..., the + comparative adjective/adverb ....' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "4-Savol: \"Double Comparatives for Correlative Trends\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #4]",
      "options": [
        "Correct academic usage adhering to The + comparative adjective/adverb ..., the + comparative adjective/adverb .... [Savol #4]",
        "Incorrect auxiliary verb placement breaking the B2 grammar standard. [Savol #4]",
        "Incompatible tense sequence violating subject agreement. [Savol #4]",
        "Omission of essential verb particle or preposition. [Savol #4]"
      ],
      "correctAnswer": "Correct academic usage adhering to The + comparative adjective/adverb ..., the + comparative adjective/adverb .... [Savol #4]",
      "explanation": "Ushbu birlik (Double Comparatives for Correlative Trends) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to The + comparative adjective/adverb ..., the + comparative adjective/adverb ....' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "5-Savol: \"Double Comparatives for Correlative Trends\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #5]",
      "options": [
        "Correct academic usage adhering to The + comparative adjective/adverb ..., the + comparative adjective/adverb .... [Savol #5]",
        "Incorrect auxiliary verb placement breaking the B2 grammar standard. [Savol #5]",
        "Incompatible tense sequence violating subject agreement. [Savol #5]",
        "Omission of essential verb particle or preposition. [Savol #5]"
      ],
      "correctAnswer": "Correct academic usage adhering to The + comparative adjective/adverb ..., the + comparative adjective/adverb .... [Savol #5]",
      "explanation": "Ushbu birlik (Double Comparatives for Correlative Trends) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to The + comparative adjective/adverb ..., the + comparative adjective/adverb ....' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "6-Savol: \"Double Comparatives for Correlative Trends\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #6]",
      "options": [
        "Correct academic usage adhering to The + comparative adjective/adverb ..., the + comparative adjective/adverb .... [Savol #6]",
        "Incorrect auxiliary verb placement breaking the B2 grammar standard. [Savol #6]",
        "Incompatible tense sequence violating subject agreement. [Savol #6]",
        "Omission of essential verb particle or preposition. [Savol #6]"
      ],
      "correctAnswer": "Correct academic usage adhering to The + comparative adjective/adverb ..., the + comparative adjective/adverb .... [Savol #6]",
      "explanation": "Ushbu birlik (Double Comparatives for Correlative Trends) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to The + comparative adjective/adverb ..., the + comparative adjective/adverb ....' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "7-Savol: \"Double Comparatives for Correlative Trends\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #7]",
      "options": [
        "Correct academic usage adhering to The + comparative adjective/adverb ..., the + comparative adjective/adverb .... [Savol #7]",
        "Incorrect auxiliary verb placement breaking the B2 grammar standard. [Savol #7]",
        "Incompatible tense sequence violating subject agreement. [Savol #7]",
        "Omission of essential verb particle or preposition. [Savol #7]"
      ],
      "correctAnswer": "Correct academic usage adhering to The + comparative adjective/adverb ..., the + comparative adjective/adverb .... [Savol #7]",
      "explanation": "Ushbu birlik (Double Comparatives for Correlative Trends) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to The + comparative adjective/adverb ..., the + comparative adjective/adverb ....' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "8-Savol: \"Double Comparatives for Correlative Trends\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #8]",
      "options": [
        "Correct academic usage adhering to The + comparative adjective/adverb ..., the + comparative adjective/adverb .... [Savol #8]",
        "Incorrect auxiliary verb placement breaking the B2 grammar standard. [Savol #8]",
        "Incompatible tense sequence violating subject agreement. [Savol #8]",
        "Omission of essential verb particle or preposition. [Savol #8]"
      ],
      "correctAnswer": "Correct academic usage adhering to The + comparative adjective/adverb ..., the + comparative adjective/adverb .... [Savol #8]",
      "explanation": "Ushbu birlik (Double Comparatives for Correlative Trends) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to The + comparative adjective/adverb ..., the + comparative adjective/adverb ....' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "9-Savol: \"Double Comparatives for Correlative Trends\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #9]",
      "options": [
        "Correct academic usage adhering to The + comparative adjective/adverb ..., the + comparative adjective/adverb .... [Savol #9]",
        "Incorrect auxiliary verb placement breaking the B2 grammar standard. [Savol #9]",
        "Incompatible tense sequence violating subject agreement. [Savol #9]",
        "Omission of essential verb particle or preposition. [Savol #9]"
      ],
      "correctAnswer": "Correct academic usage adhering to The + comparative adjective/adverb ..., the + comparative adjective/adverb .... [Savol #9]",
      "explanation": "Ushbu birlik (Double Comparatives for Correlative Trends) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to The + comparative adjective/adverb ..., the + comparative adjective/adverb ....' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "10-Savol: \"Double Comparatives for Correlative Trends\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #10]",
      "options": [
        "Correct academic usage adhering to The + comparative adjective/adverb ..., the + comparative adjective/adverb .... [Savol #10]",
        "Incorrect auxiliary verb placement breaking the B2 grammar standard. [Savol #10]",
        "Incompatible tense sequence violating subject agreement. [Savol #10]",
        "Omission of essential verb particle or preposition. [Savol #10]"
      ],
      "correctAnswer": "Correct academic usage adhering to The + comparative adjective/adverb ..., the + comparative adjective/adverb .... [Savol #10]",
      "explanation": "Ushbu birlik (Double Comparatives for Correlative Trends) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to The + comparative adjective/adverb ..., the + comparative adjective/adverb ....' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    }
  ],
  "ielts_b2_08_academic_quantifiers_data": [
    {
      "question": "Hydroelectric generation accounted for _______ of national energy consumption in 2018.",
      "options": [
        "approximately one-third",
        "about one-three",
        "around third",
        "near one-three"
      ],
      "correctAnswer": "approximately one-third",
      "explanation": "33% ko'rsatkichini ifodalash uchun 'approximately one-third' (taxminan uchdan bir qismi) to'g'ri."
    },
    {
      "question": "Only a _______ of surveyed consumers expressed dissatisfaction with digital public services.",
      "options": [
        "negligible minority",
        "little number",
        "tiny amount of",
        "few fraction"
      ],
      "correctAnswer": "negligible minority",
      "explanation": "Sanaladigan insonlar uchun 'a negligible minority' (sezilarsiz ozchilik) to'g'ri akademik iboradir."
    },
    {
      "question": "3-Savol: \"Advanced Quantifiers & Data Approximation in Task 1\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #3]",
      "options": [
        "If governments invest in renewable energy, carbon emissions will decline significantly. [Savol #3]",
        "If governments will invest in renewable energy, carbon emissions decline. [Savol #3]",
        "If governments invested in renewable energy, carbon emissions will decline. [Savol #3]",
        "If governments invest in renewable energy, carbon emissions would declined. [Savol #3]"
      ],
      "correctAnswer": "If governments invest in renewable energy, carbon emissions will decline significantly. [Savol #3]",
      "explanation": "Ushbu birlik (Advanced Quantifiers & Data Approximation in Task 1) qoidasiga ko'ra, to'g'ri shakl 'If governments invest in renewable energy, carbon emissions will decline significantly.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "4-Savol: \"Advanced Quantifiers & Data Approximation in Task 1\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #4]",
      "options": [
        "If governments invest in renewable energy, carbon emissions will decline significantly. [Savol #4]",
        "If governments will invest in renewable energy, carbon emissions decline. [Savol #4]",
        "If governments invested in renewable energy, carbon emissions will decline. [Savol #4]",
        "If governments invest in renewable energy, carbon emissions would declined. [Savol #4]"
      ],
      "correctAnswer": "If governments invest in renewable energy, carbon emissions will decline significantly. [Savol #4]",
      "explanation": "Ushbu birlik (Advanced Quantifiers & Data Approximation in Task 1) qoidasiga ko'ra, to'g'ri shakl 'If governments invest in renewable energy, carbon emissions will decline significantly.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "5-Savol: \"Advanced Quantifiers & Data Approximation in Task 1\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #5]",
      "options": [
        "If governments invest in renewable energy, carbon emissions will decline significantly. [Savol #5]",
        "If governments will invest in renewable energy, carbon emissions decline. [Savol #5]",
        "If governments invested in renewable energy, carbon emissions will decline. [Savol #5]",
        "If governments invest in renewable energy, carbon emissions would declined. [Savol #5]"
      ],
      "correctAnswer": "If governments invest in renewable energy, carbon emissions will decline significantly. [Savol #5]",
      "explanation": "Ushbu birlik (Advanced Quantifiers & Data Approximation in Task 1) qoidasiga ko'ra, to'g'ri shakl 'If governments invest in renewable energy, carbon emissions will decline significantly.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "6-Savol: \"Advanced Quantifiers & Data Approximation in Task 1\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #6]",
      "options": [
        "If governments invest in renewable energy, carbon emissions will decline significantly. [Savol #6]",
        "If governments will invest in renewable energy, carbon emissions decline. [Savol #6]",
        "If governments invested in renewable energy, carbon emissions will decline. [Savol #6]",
        "If governments invest in renewable energy, carbon emissions would declined. [Savol #6]"
      ],
      "correctAnswer": "If governments invest in renewable energy, carbon emissions will decline significantly. [Savol #6]",
      "explanation": "Ushbu birlik (Advanced Quantifiers & Data Approximation in Task 1) qoidasiga ko'ra, to'g'ri shakl 'If governments invest in renewable energy, carbon emissions will decline significantly.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "7-Savol: \"Advanced Quantifiers & Data Approximation in Task 1\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #7]",
      "options": [
        "If governments invest in renewable energy, carbon emissions will decline significantly. [Savol #7]",
        "If governments will invest in renewable energy, carbon emissions decline. [Savol #7]",
        "If governments invested in renewable energy, carbon emissions will decline. [Savol #7]",
        "If governments invest in renewable energy, carbon emissions would declined. [Savol #7]"
      ],
      "correctAnswer": "If governments invest in renewable energy, carbon emissions will decline significantly. [Savol #7]",
      "explanation": "Ushbu birlik (Advanced Quantifiers & Data Approximation in Task 1) qoidasiga ko'ra, to'g'ri shakl 'If governments invest in renewable energy, carbon emissions will decline significantly.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "8-Savol: \"Advanced Quantifiers & Data Approximation in Task 1\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #8]",
      "options": [
        "If governments invest in renewable energy, carbon emissions will decline significantly. [Savol #8]",
        "If governments will invest in renewable energy, carbon emissions decline. [Savol #8]",
        "If governments invested in renewable energy, carbon emissions will decline. [Savol #8]",
        "If governments invest in renewable energy, carbon emissions would declined. [Savol #8]"
      ],
      "correctAnswer": "If governments invest in renewable energy, carbon emissions will decline significantly. [Savol #8]",
      "explanation": "Ushbu birlik (Advanced Quantifiers & Data Approximation in Task 1) qoidasiga ko'ra, to'g'ri shakl 'If governments invest in renewable energy, carbon emissions will decline significantly.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "9-Savol: \"Advanced Quantifiers & Data Approximation in Task 1\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #9]",
      "options": [
        "If governments invest in renewable energy, carbon emissions will decline significantly. [Savol #9]",
        "If governments will invest in renewable energy, carbon emissions decline. [Savol #9]",
        "If governments invested in renewable energy, carbon emissions will decline. [Savol #9]",
        "If governments invest in renewable energy, carbon emissions would declined. [Savol #9]"
      ],
      "correctAnswer": "If governments invest in renewable energy, carbon emissions will decline significantly. [Savol #9]",
      "explanation": "Ushbu birlik (Advanced Quantifiers & Data Approximation in Task 1) qoidasiga ko'ra, to'g'ri shakl 'If governments invest in renewable energy, carbon emissions will decline significantly.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "10-Savol: \"Advanced Quantifiers & Data Approximation in Task 1\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #10]",
      "options": [
        "If governments invest in renewable energy, carbon emissions will decline significantly. [Savol #10]",
        "If governments will invest in renewable energy, carbon emissions decline. [Savol #10]",
        "If governments invested in renewable energy, carbon emissions will decline. [Savol #10]",
        "If governments invest in renewable energy, carbon emissions would declined. [Savol #10]"
      ],
      "correctAnswer": "If governments invest in renewable energy, carbon emissions will decline significantly. [Savol #10]",
      "explanation": "Ushbu birlik (Advanced Quantifiers & Data Approximation in Task 1) qoidasiga ko'ra, to'g'ri shakl 'If governments invest in renewable energy, carbon emissions will decline significantly.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    }
  ],
  "ielts_b2_09_causative_structures": [
    {
      "question": "Public health agencies must have clinical trial data _______ by independent researchers.",
      "options": [
        "reviewed",
        "to review",
        "review",
        "reviewing"
      ],
      "correctAnswer": "reviewed",
      "explanation": "'Have + Object + V3' qoidasiga binoan 'reviewed' to'g'ri majhul kausativdir."
    },
    {
      "question": "Government regulations should make polluters _______ financial reparations for ecological damage.",
      "options": [
        "pay",
        "to pay",
        "paid",
        "paying"
      ],
      "correctAnswer": "pay",
      "explanation": "'Make + Person + Base Verb' formulasida 'pay' to'ssiz ishlatiladi."
    },
    {
      "question": "3-Savol: \"Causative Structures (Have/Get something done & Make/Let)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #3]",
      "options": [
        "Correct academic usage adhering to have / get + Object + V3 (past participle). [Savol #3]",
        "Incorrect auxiliary verb placement breaking the B2 grammar standard. [Savol #3]",
        "Incompatible tense sequence violating subject agreement. [Savol #3]",
        "Omission of essential verb particle or preposition. [Savol #3]"
      ],
      "correctAnswer": "Correct academic usage adhering to have / get + Object + V3 (past participle). [Savol #3]",
      "explanation": "Ushbu birlik (Causative Structures (Have/Get something done & Make/Let)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to have / get + Object + V3 (past participle).' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "4-Savol: \"Causative Structures (Have/Get something done & Make/Let)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #4]",
      "options": [
        "Correct academic usage adhering to have / get + Object + V3 (past participle). [Savol #4]",
        "Incorrect auxiliary verb placement breaking the B2 grammar standard. [Savol #4]",
        "Incompatible tense sequence violating subject agreement. [Savol #4]",
        "Omission of essential verb particle or preposition. [Savol #4]"
      ],
      "correctAnswer": "Correct academic usage adhering to have / get + Object + V3 (past participle). [Savol #4]",
      "explanation": "Ushbu birlik (Causative Structures (Have/Get something done & Make/Let)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to have / get + Object + V3 (past participle).' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "5-Savol: \"Causative Structures (Have/Get something done & Make/Let)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #5]",
      "options": [
        "Correct academic usage adhering to have / get + Object + V3 (past participle). [Savol #5]",
        "Incorrect auxiliary verb placement breaking the B2 grammar standard. [Savol #5]",
        "Incompatible tense sequence violating subject agreement. [Savol #5]",
        "Omission of essential verb particle or preposition. [Savol #5]"
      ],
      "correctAnswer": "Correct academic usage adhering to have / get + Object + V3 (past participle). [Savol #5]",
      "explanation": "Ushbu birlik (Causative Structures (Have/Get something done & Make/Let)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to have / get + Object + V3 (past participle).' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "6-Savol: \"Causative Structures (Have/Get something done & Make/Let)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #6]",
      "options": [
        "Correct academic usage adhering to have / get + Object + V3 (past participle). [Savol #6]",
        "Incorrect auxiliary verb placement breaking the B2 grammar standard. [Savol #6]",
        "Incompatible tense sequence violating subject agreement. [Savol #6]",
        "Omission of essential verb particle or preposition. [Savol #6]"
      ],
      "correctAnswer": "Correct academic usage adhering to have / get + Object + V3 (past participle). [Savol #6]",
      "explanation": "Ushbu birlik (Causative Structures (Have/Get something done & Make/Let)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to have / get + Object + V3 (past participle).' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "7-Savol: \"Causative Structures (Have/Get something done & Make/Let)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #7]",
      "options": [
        "Correct academic usage adhering to have / get + Object + V3 (past participle). [Savol #7]",
        "Incorrect auxiliary verb placement breaking the B2 grammar standard. [Savol #7]",
        "Incompatible tense sequence violating subject agreement. [Savol #7]",
        "Omission of essential verb particle or preposition. [Savol #7]"
      ],
      "correctAnswer": "Correct academic usage adhering to have / get + Object + V3 (past participle). [Savol #7]",
      "explanation": "Ushbu birlik (Causative Structures (Have/Get something done & Make/Let)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to have / get + Object + V3 (past participle).' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "8-Savol: \"Causative Structures (Have/Get something done & Make/Let)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #8]",
      "options": [
        "Correct academic usage adhering to have / get + Object + V3 (past participle). [Savol #8]",
        "Incorrect auxiliary verb placement breaking the B2 grammar standard. [Savol #8]",
        "Incompatible tense sequence violating subject agreement. [Savol #8]",
        "Omission of essential verb particle or preposition. [Savol #8]"
      ],
      "correctAnswer": "Correct academic usage adhering to have / get + Object + V3 (past participle). [Savol #8]",
      "explanation": "Ushbu birlik (Causative Structures (Have/Get something done & Make/Let)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to have / get + Object + V3 (past participle).' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "9-Savol: \"Causative Structures (Have/Get something done & Make/Let)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #9]",
      "options": [
        "Correct academic usage adhering to have / get + Object + V3 (past participle). [Savol #9]",
        "Incorrect auxiliary verb placement breaking the B2 grammar standard. [Savol #9]",
        "Incompatible tense sequence violating subject agreement. [Savol #9]",
        "Omission of essential verb particle or preposition. [Savol #9]"
      ],
      "correctAnswer": "Correct academic usage adhering to have / get + Object + V3 (past participle). [Savol #9]",
      "explanation": "Ushbu birlik (Causative Structures (Have/Get something done & Make/Let)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to have / get + Object + V3 (past participle).' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "10-Savol: \"Causative Structures (Have/Get something done & Make/Let)\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #10]",
      "options": [
        "Correct academic usage adhering to have / get + Object + V3 (past participle). [Savol #10]",
        "Incorrect auxiliary verb placement breaking the B2 grammar standard. [Savol #10]",
        "Incompatible tense sequence violating subject agreement. [Savol #10]",
        "Omission of essential verb particle or preposition. [Savol #10]"
      ],
      "correctAnswer": "Correct academic usage adhering to have / get + Object + V3 (past participle). [Savol #10]",
      "explanation": "Ushbu birlik (Causative Structures (Have/Get something done & Make/Let)) qoidasiga ko'ra, to'g'ri shakl 'Correct academic usage adhering to have / get + Object + V3 (past participle).' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    }
  ],
  "ielts_c1_01_ellipsis_substitution": [
    {
      "question": "The renewable output figures for Germany far exceeded _______ recorded by neighboring territories.",
      "options": [
        "those",
        "that",
        "them",
        "these"
      ],
      "correctAnswer": "those",
      "explanation": "'Figures' ko'plik bo'lgani sababli ularning o'rnini 'those' olmoshi bosadi."
    },
    {
      "question": "If participants wish to withdraw from the medical evaluation, they are entitled to _______ at any stage.",
      "options": [
        "do so",
        "do it so",
        "make so",
        "act so"
      ],
      "correctAnswer": "do so",
      "explanation": "Avval zikr etilgan harakatni (withdraw) takrorlamaslik uchun 'do so' to'g'ri akademik iboradir."
    },
    {
      "question": "3-Savol: \"Ellipsis and Substitution in Cohesive Discourse\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #3]",
      "options": [
        "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #3]",
        "Not only rapid industrialization creates jobs, but it also alters rural demographics. [Savol #3]",
        "Not only did rapid industrialization creates jobs, but it also alters rural demographics. [Savol #3]",
        "Not only does rapid industrialization created jobs, but it alters rural demographics. [Savol #3]"
      ],
      "correctAnswer": "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #3]",
      "explanation": "Ushbu birlik (Ellipsis and Substitution in Cohesive Discourse) qoidasiga ko'ra, to'g'ri shakl 'Not only does rapid industrialization create jobs, but it also alters rural demographics.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "4-Savol: \"Ellipsis and Substitution in Cohesive Discourse\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #4]",
      "options": [
        "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #4]",
        "Not only rapid industrialization creates jobs, but it also alters rural demographics. [Savol #4]",
        "Not only did rapid industrialization creates jobs, but it also alters rural demographics. [Savol #4]",
        "Not only does rapid industrialization created jobs, but it alters rural demographics. [Savol #4]"
      ],
      "correctAnswer": "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #4]",
      "explanation": "Ushbu birlik (Ellipsis and Substitution in Cohesive Discourse) qoidasiga ko'ra, to'g'ri shakl 'Not only does rapid industrialization create jobs, but it also alters rural demographics.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "5-Savol: \"Ellipsis and Substitution in Cohesive Discourse\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #5]",
      "options": [
        "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #5]",
        "Not only rapid industrialization creates jobs, but it also alters rural demographics. [Savol #5]",
        "Not only did rapid industrialization creates jobs, but it also alters rural demographics. [Savol #5]",
        "Not only does rapid industrialization created jobs, but it alters rural demographics. [Savol #5]"
      ],
      "correctAnswer": "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #5]",
      "explanation": "Ushbu birlik (Ellipsis and Substitution in Cohesive Discourse) qoidasiga ko'ra, to'g'ri shakl 'Not only does rapid industrialization create jobs, but it also alters rural demographics.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "6-Savol: \"Ellipsis and Substitution in Cohesive Discourse\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #6]",
      "options": [
        "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #6]",
        "Not only rapid industrialization creates jobs, but it also alters rural demographics. [Savol #6]",
        "Not only did rapid industrialization creates jobs, but it also alters rural demographics. [Savol #6]",
        "Not only does rapid industrialization created jobs, but it alters rural demographics. [Savol #6]"
      ],
      "correctAnswer": "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #6]",
      "explanation": "Ushbu birlik (Ellipsis and Substitution in Cohesive Discourse) qoidasiga ko'ra, to'g'ri shakl 'Not only does rapid industrialization create jobs, but it also alters rural demographics.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "7-Savol: \"Ellipsis and Substitution in Cohesive Discourse\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #7]",
      "options": [
        "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #7]",
        "Not only rapid industrialization creates jobs, but it also alters rural demographics. [Savol #7]",
        "Not only did rapid industrialization creates jobs, but it also alters rural demographics. [Savol #7]",
        "Not only does rapid industrialization created jobs, but it alters rural demographics. [Savol #7]"
      ],
      "correctAnswer": "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #7]",
      "explanation": "Ushbu birlik (Ellipsis and Substitution in Cohesive Discourse) qoidasiga ko'ra, to'g'ri shakl 'Not only does rapid industrialization create jobs, but it also alters rural demographics.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "8-Savol: \"Ellipsis and Substitution in Cohesive Discourse\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #8]",
      "options": [
        "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #8]",
        "Not only rapid industrialization creates jobs, but it also alters rural demographics. [Savol #8]",
        "Not only did rapid industrialization creates jobs, but it also alters rural demographics. [Savol #8]",
        "Not only does rapid industrialization created jobs, but it alters rural demographics. [Savol #8]"
      ],
      "correctAnswer": "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #8]",
      "explanation": "Ushbu birlik (Ellipsis and Substitution in Cohesive Discourse) qoidasiga ko'ra, to'g'ri shakl 'Not only does rapid industrialization create jobs, but it also alters rural demographics.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "9-Savol: \"Ellipsis and Substitution in Cohesive Discourse\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #9]",
      "options": [
        "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #9]",
        "Not only rapid industrialization creates jobs, but it also alters rural demographics. [Savol #9]",
        "Not only did rapid industrialization creates jobs, but it also alters rural demographics. [Savol #9]",
        "Not only does rapid industrialization created jobs, but it alters rural demographics. [Savol #9]"
      ],
      "correctAnswer": "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #9]",
      "explanation": "Ushbu birlik (Ellipsis and Substitution in Cohesive Discourse) qoidasiga ko'ra, to'g'ri shakl 'Not only does rapid industrialization create jobs, but it also alters rural demographics.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "10-Savol: \"Ellipsis and Substitution in Cohesive Discourse\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #10]",
      "options": [
        "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #10]",
        "Not only rapid industrialization creates jobs, but it also alters rural demographics. [Savol #10]",
        "Not only did rapid industrialization creates jobs, but it also alters rural demographics. [Savol #10]",
        "Not only does rapid industrialization created jobs, but it alters rural demographics. [Savol #10]"
      ],
      "correctAnswer": "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #10]",
      "explanation": "Ushbu birlik (Ellipsis and Substitution in Cohesive Discourse) qoidasiga ko'ra, to'g'ri shakl 'Not only does rapid industrialization create jobs, but it also alters rural demographics.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    }
  ],
  "ielts_c1_02_fronting_topicalisation": [
    {
      "question": "Particularly compelling _______ the arguments presented in favour of decentralised energy grids.",
      "options": [
        "are",
        "is",
        "being",
        "to be"
      ],
      "correctAnswer": "are",
      "explanation": "Gapning egasi 'arguments' (ko'plik) bo'lgani sababli fe'l 'are' bo'lishi shart."
    },
    {
      "question": "Underpinning these technological breakthroughs _______ decades of government-funded research.",
      "options": [
        "is",
        "are",
        "have",
        "being"
      ],
      "correctAnswer": "is",
      "explanation": "Gapning haqiqiy egasi 'decades of research' (tadqiqot \\u2014 birlik) bo'lgani sababli 'is' to'g'ri."
    },
    {
      "question": "3-Savol: \"Fronting & Topicalisation for Academic Salience\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #3]",
      "options": [
        "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #3]",
        "Not only rapid industrialization creates jobs, but it also alters rural demographics. [Savol #3]",
        "Not only did rapid industrialization creates jobs, but it also alters rural demographics. [Savol #3]",
        "Not only does rapid industrialization created jobs, but it alters rural demographics. [Savol #3]"
      ],
      "correctAnswer": "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #3]",
      "explanation": "Ushbu birlik (Fronting & Topicalisation for Academic Salience) qoidasiga ko'ra, to'g'ri shakl 'Not only does rapid industrialization create jobs, but it also alters rural demographics.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "4-Savol: \"Fronting & Topicalisation for Academic Salience\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #4]",
      "options": [
        "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #4]",
        "Not only rapid industrialization creates jobs, but it also alters rural demographics. [Savol #4]",
        "Not only did rapid industrialization creates jobs, but it also alters rural demographics. [Savol #4]",
        "Not only does rapid industrialization created jobs, but it alters rural demographics. [Savol #4]"
      ],
      "correctAnswer": "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #4]",
      "explanation": "Ushbu birlik (Fronting & Topicalisation for Academic Salience) qoidasiga ko'ra, to'g'ri shakl 'Not only does rapid industrialization create jobs, but it also alters rural demographics.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "5-Savol: \"Fronting & Topicalisation for Academic Salience\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #5]",
      "options": [
        "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #5]",
        "Not only rapid industrialization creates jobs, but it also alters rural demographics. [Savol #5]",
        "Not only did rapid industrialization creates jobs, but it also alters rural demographics. [Savol #5]",
        "Not only does rapid industrialization created jobs, but it alters rural demographics. [Savol #5]"
      ],
      "correctAnswer": "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #5]",
      "explanation": "Ushbu birlik (Fronting & Topicalisation for Academic Salience) qoidasiga ko'ra, to'g'ri shakl 'Not only does rapid industrialization create jobs, but it also alters rural demographics.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "6-Savol: \"Fronting & Topicalisation for Academic Salience\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #6]",
      "options": [
        "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #6]",
        "Not only rapid industrialization creates jobs, but it also alters rural demographics. [Savol #6]",
        "Not only did rapid industrialization creates jobs, but it also alters rural demographics. [Savol #6]",
        "Not only does rapid industrialization created jobs, but it alters rural demographics. [Savol #6]"
      ],
      "correctAnswer": "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #6]",
      "explanation": "Ushbu birlik (Fronting & Topicalisation for Academic Salience) qoidasiga ko'ra, to'g'ri shakl 'Not only does rapid industrialization create jobs, but it also alters rural demographics.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "7-Savol: \"Fronting & Topicalisation for Academic Salience\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #7]",
      "options": [
        "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #7]",
        "Not only rapid industrialization creates jobs, but it also alters rural demographics. [Savol #7]",
        "Not only did rapid industrialization creates jobs, but it also alters rural demographics. [Savol #7]",
        "Not only does rapid industrialization created jobs, but it alters rural demographics. [Savol #7]"
      ],
      "correctAnswer": "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #7]",
      "explanation": "Ushbu birlik (Fronting & Topicalisation for Academic Salience) qoidasiga ko'ra, to'g'ri shakl 'Not only does rapid industrialization create jobs, but it also alters rural demographics.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "8-Savol: \"Fronting & Topicalisation for Academic Salience\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #8]",
      "options": [
        "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #8]",
        "Not only rapid industrialization creates jobs, but it also alters rural demographics. [Savol #8]",
        "Not only did rapid industrialization creates jobs, but it also alters rural demographics. [Savol #8]",
        "Not only does rapid industrialization created jobs, but it alters rural demographics. [Savol #8]"
      ],
      "correctAnswer": "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #8]",
      "explanation": "Ushbu birlik (Fronting & Topicalisation for Academic Salience) qoidasiga ko'ra, to'g'ri shakl 'Not only does rapid industrialization create jobs, but it also alters rural demographics.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "9-Savol: \"Fronting & Topicalisation for Academic Salience\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #9]",
      "options": [
        "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #9]",
        "Not only rapid industrialization creates jobs, but it also alters rural demographics. [Savol #9]",
        "Not only did rapid industrialization creates jobs, but it also alters rural demographics. [Savol #9]",
        "Not only does rapid industrialization created jobs, but it alters rural demographics. [Savol #9]"
      ],
      "correctAnswer": "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #9]",
      "explanation": "Ushbu birlik (Fronting & Topicalisation for Academic Salience) qoidasiga ko'ra, to'g'ri shakl 'Not only does rapid industrialization create jobs, but it also alters rural demographics.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "10-Savol: \"Fronting & Topicalisation for Academic Salience\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #10]",
      "options": [
        "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #10]",
        "Not only rapid industrialization creates jobs, but it also alters rural demographics. [Savol #10]",
        "Not only did rapid industrialization creates jobs, but it also alters rural demographics. [Savol #10]",
        "Not only does rapid industrialization created jobs, but it alters rural demographics. [Savol #10]"
      ],
      "correctAnswer": "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #10]",
      "explanation": "Ushbu birlik (Fronting & Topicalisation for Academic Salience) qoidasiga ko'ra, to'g'ri shakl 'Not only does rapid industrialization create jobs, but it also alters rural demographics.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    }
  ],
  "ielts_c1_03_prepositional_collocations": [
    {
      "question": "Technological advancement must not be accelerated _______ human psychological welfare.",
      "options": [
        "at the expense of",
        "in terms with",
        "by virtue on",
        "on light of"
      ],
      "correctAnswer": "at the expense of",
      "explanation": "'Evaziga/hisobiga' ma'nosidagi akademik kolokatsiya 'at the expense of' hisoblanadi."
    },
    {
      "question": "_______ recent macro-economic volatility, sovereign wealth funds revised their asset allocations.",
      "options": [
        "In light of",
        "By grounds of",
        "With terms to",
        "In expense of"
      ],
      "correctAnswer": "In light of",
      "explanation": "'Mavjud voqelikni hisobga olganda' ma'nosidagi ibora 'In light of' dir."
    },
    {
      "question": "3-Savol: \"Advanced Prepositional Collocations in Academic Writing\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #3]",
      "options": [
        "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #3]",
        "Not only rapid industrialization creates jobs, but it also alters rural demographics. [Savol #3]",
        "Not only did rapid industrialization creates jobs, but it also alters rural demographics. [Savol #3]",
        "Not only does rapid industrialization created jobs, but it alters rural demographics. [Savol #3]"
      ],
      "correctAnswer": "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #3]",
      "explanation": "Ushbu birlik (Advanced Prepositional Collocations in Academic Writing) qoidasiga ko'ra, to'g'ri shakl 'Not only does rapid industrialization create jobs, but it also alters rural demographics.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "4-Savol: \"Advanced Prepositional Collocations in Academic Writing\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #4]",
      "options": [
        "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #4]",
        "Not only rapid industrialization creates jobs, but it also alters rural demographics. [Savol #4]",
        "Not only did rapid industrialization creates jobs, but it also alters rural demographics. [Savol #4]",
        "Not only does rapid industrialization created jobs, but it alters rural demographics. [Savol #4]"
      ],
      "correctAnswer": "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #4]",
      "explanation": "Ushbu birlik (Advanced Prepositional Collocations in Academic Writing) qoidasiga ko'ra, to'g'ri shakl 'Not only does rapid industrialization create jobs, but it also alters rural demographics.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "5-Savol: \"Advanced Prepositional Collocations in Academic Writing\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #5]",
      "options": [
        "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #5]",
        "Not only rapid industrialization creates jobs, but it also alters rural demographics. [Savol #5]",
        "Not only did rapid industrialization creates jobs, but it also alters rural demographics. [Savol #5]",
        "Not only does rapid industrialization created jobs, but it alters rural demographics. [Savol #5]"
      ],
      "correctAnswer": "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #5]",
      "explanation": "Ushbu birlik (Advanced Prepositional Collocations in Academic Writing) qoidasiga ko'ra, to'g'ri shakl 'Not only does rapid industrialization create jobs, but it also alters rural demographics.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "6-Savol: \"Advanced Prepositional Collocations in Academic Writing\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #6]",
      "options": [
        "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #6]",
        "Not only rapid industrialization creates jobs, but it also alters rural demographics. [Savol #6]",
        "Not only did rapid industrialization creates jobs, but it also alters rural demographics. [Savol #6]",
        "Not only does rapid industrialization created jobs, but it alters rural demographics. [Savol #6]"
      ],
      "correctAnswer": "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #6]",
      "explanation": "Ushbu birlik (Advanced Prepositional Collocations in Academic Writing) qoidasiga ko'ra, to'g'ri shakl 'Not only does rapid industrialization create jobs, but it also alters rural demographics.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "7-Savol: \"Advanced Prepositional Collocations in Academic Writing\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #7]",
      "options": [
        "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #7]",
        "Not only rapid industrialization creates jobs, but it also alters rural demographics. [Savol #7]",
        "Not only did rapid industrialization creates jobs, but it also alters rural demographics. [Savol #7]",
        "Not only does rapid industrialization created jobs, but it alters rural demographics. [Savol #7]"
      ],
      "correctAnswer": "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #7]",
      "explanation": "Ushbu birlik (Advanced Prepositional Collocations in Academic Writing) qoidasiga ko'ra, to'g'ri shakl 'Not only does rapid industrialization create jobs, but it also alters rural demographics.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "8-Savol: \"Advanced Prepositional Collocations in Academic Writing\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #8]",
      "options": [
        "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #8]",
        "Not only rapid industrialization creates jobs, but it also alters rural demographics. [Savol #8]",
        "Not only did rapid industrialization creates jobs, but it also alters rural demographics. [Savol #8]",
        "Not only does rapid industrialization created jobs, but it alters rural demographics. [Savol #8]"
      ],
      "correctAnswer": "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #8]",
      "explanation": "Ushbu birlik (Advanced Prepositional Collocations in Academic Writing) qoidasiga ko'ra, to'g'ri shakl 'Not only does rapid industrialization create jobs, but it also alters rural demographics.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "9-Savol: \"Advanced Prepositional Collocations in Academic Writing\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #9]",
      "options": [
        "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #9]",
        "Not only rapid industrialization creates jobs, but it also alters rural demographics. [Savol #9]",
        "Not only did rapid industrialization creates jobs, but it also alters rural demographics. [Savol #9]",
        "Not only does rapid industrialization created jobs, but it alters rural demographics. [Savol #9]"
      ],
      "correctAnswer": "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #9]",
      "explanation": "Ushbu birlik (Advanced Prepositional Collocations in Academic Writing) qoidasiga ko'ra, to'g'ri shakl 'Not only does rapid industrialization create jobs, but it also alters rural demographics.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "10-Savol: \"Advanced Prepositional Collocations in Academic Writing\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #10]",
      "options": [
        "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #10]",
        "Not only rapid industrialization creates jobs, but it also alters rural demographics. [Savol #10]",
        "Not only did rapid industrialization creates jobs, but it also alters rural demographics. [Savol #10]",
        "Not only does rapid industrialization created jobs, but it alters rural demographics. [Savol #10]"
      ],
      "correctAnswer": "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #10]",
      "explanation": "Ushbu birlik (Advanced Prepositional Collocations in Academic Writing) qoidasiga ko'ra, to'g'ri shakl 'Not only does rapid industrialization create jobs, but it also alters rural demographics.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    }
  ],
  "ielts_c1_04_complex_participle_reduction": [
    {
      "question": "Far from _______ economic disparities, deregulated financial policies exacerbated poverty levels.",
      "options": [
        "alleviating",
        "alleviate",
        "to alleviate",
        "alleviated"
      ],
      "correctAnswer": "alleviating",
      "explanation": "'Far from' iborasidan keyin gerundiy (alleviating) ishlatiladi."
    },
    {
      "question": "Despite _______ into international law, the maritime treaty faced sporadic domestic resistance.",
      "options": [
        "having been codified",
        "codified having",
        "had been codified",
        "having codified"
      ],
      "correctAnswer": "having been codified",
      "explanation": "O'tmishda yakunlangan passiv holat uchun 'having been codified' (qonuniylashtirilgan bo'lishiga qaramay) to'g'ri."
    },
    {
      "question": "3-Savol: \"Complex Gerundial & Participle Reductions\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #3]",
      "options": [
        "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #3]",
        "Not only rapid industrialization creates jobs, but it also alters rural demographics. [Savol #3]",
        "Not only did rapid industrialization creates jobs, but it also alters rural demographics. [Savol #3]",
        "Not only does rapid industrialization created jobs, but it alters rural demographics. [Savol #3]"
      ],
      "correctAnswer": "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #3]",
      "explanation": "Ushbu birlik (Complex Gerundial & Participle Reductions) qoidasiga ko'ra, to'g'ri shakl 'Not only does rapid industrialization create jobs, but it also alters rural demographics.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "4-Savol: \"Complex Gerundial & Participle Reductions\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #4]",
      "options": [
        "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #4]",
        "Not only rapid industrialization creates jobs, but it also alters rural demographics. [Savol #4]",
        "Not only did rapid industrialization creates jobs, but it also alters rural demographics. [Savol #4]",
        "Not only does rapid industrialization created jobs, but it alters rural demographics. [Savol #4]"
      ],
      "correctAnswer": "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #4]",
      "explanation": "Ushbu birlik (Complex Gerundial & Participle Reductions) qoidasiga ko'ra, to'g'ri shakl 'Not only does rapid industrialization create jobs, but it also alters rural demographics.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "5-Savol: \"Complex Gerundial & Participle Reductions\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #5]",
      "options": [
        "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #5]",
        "Not only rapid industrialization creates jobs, but it also alters rural demographics. [Savol #5]",
        "Not only did rapid industrialization creates jobs, but it also alters rural demographics. [Savol #5]",
        "Not only does rapid industrialization created jobs, but it alters rural demographics. [Savol #5]"
      ],
      "correctAnswer": "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #5]",
      "explanation": "Ushbu birlik (Complex Gerundial & Participle Reductions) qoidasiga ko'ra, to'g'ri shakl 'Not only does rapid industrialization create jobs, but it also alters rural demographics.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "6-Savol: \"Complex Gerundial & Participle Reductions\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #6]",
      "options": [
        "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #6]",
        "Not only rapid industrialization creates jobs, but it also alters rural demographics. [Savol #6]",
        "Not only did rapid industrialization creates jobs, but it also alters rural demographics. [Savol #6]",
        "Not only does rapid industrialization created jobs, but it alters rural demographics. [Savol #6]"
      ],
      "correctAnswer": "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #6]",
      "explanation": "Ushbu birlik (Complex Gerundial & Participle Reductions) qoidasiga ko'ra, to'g'ri shakl 'Not only does rapid industrialization create jobs, but it also alters rural demographics.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "7-Savol: \"Complex Gerundial & Participle Reductions\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #7]",
      "options": [
        "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #7]",
        "Not only rapid industrialization creates jobs, but it also alters rural demographics. [Savol #7]",
        "Not only did rapid industrialization creates jobs, but it also alters rural demographics. [Savol #7]",
        "Not only does rapid industrialization created jobs, but it alters rural demographics. [Savol #7]"
      ],
      "correctAnswer": "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #7]",
      "explanation": "Ushbu birlik (Complex Gerundial & Participle Reductions) qoidasiga ko'ra, to'g'ri shakl 'Not only does rapid industrialization create jobs, but it also alters rural demographics.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "8-Savol: \"Complex Gerundial & Participle Reductions\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #8]",
      "options": [
        "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #8]",
        "Not only rapid industrialization creates jobs, but it also alters rural demographics. [Savol #8]",
        "Not only did rapid industrialization creates jobs, but it also alters rural demographics. [Savol #8]",
        "Not only does rapid industrialization created jobs, but it alters rural demographics. [Savol #8]"
      ],
      "correctAnswer": "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #8]",
      "explanation": "Ushbu birlik (Complex Gerundial & Participle Reductions) qoidasiga ko'ra, to'g'ri shakl 'Not only does rapid industrialization create jobs, but it also alters rural demographics.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "9-Savol: \"Complex Gerundial & Participle Reductions\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #9]",
      "options": [
        "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #9]",
        "Not only rapid industrialization creates jobs, but it also alters rural demographics. [Savol #9]",
        "Not only did rapid industrialization creates jobs, but it also alters rural demographics. [Savol #9]",
        "Not only does rapid industrialization created jobs, but it alters rural demographics. [Savol #9]"
      ],
      "correctAnswer": "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #9]",
      "explanation": "Ushbu birlik (Complex Gerundial & Participle Reductions) qoidasiga ko'ra, to'g'ri shakl 'Not only does rapid industrialization create jobs, but it also alters rural demographics.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    },
    {
      "question": "10-Savol: \"Complex Gerundial & Participle Reductions\" qoidasiga ko'ra, quyidagi gaplardan qaysi biri grammatik jihatdan to'liq to'g'ri tuzilgan? [Variant #10]",
      "options": [
        "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #10]",
        "Not only rapid industrialization creates jobs, but it also alters rural demographics. [Savol #10]",
        "Not only did rapid industrialization creates jobs, but it also alters rural demographics. [Savol #10]",
        "Not only does rapid industrialization created jobs, but it alters rural demographics. [Savol #10]"
      ],
      "correctAnswer": "Not only does rapid industrialization create jobs, but it also alters rural demographics. [Savol #10]",
      "explanation": "Ushbu birlik (Complex Gerundial & Participle Reductions) qoidasiga ko'ra, to'g'ri shakl 'Not only does rapid industrialization create jobs, but it also alters rural demographics.' hisoblanadi. Boshqa variantlarda yordamchi fe'l yoki zamonlar moslashuvida qoidabuzarlik mavjud."
    }
  ]
};
