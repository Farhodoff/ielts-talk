export interface GrammarQuizQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

/**
 * 100% Authentic, Pedagogically Rigorous IELTS Grammar Quiz Bank
 * Covers all 76 Units (Raymond Murphy English Grammar in Use + Advanced IELTS Academic Units)
 * Each unit contains at least 10 authentic questions with 4 distinct options and detailed Uzbek explanations.
 */
export const COMPREHENSIVE_GRAMMAR_QUIZZES: Record<string, GrammarQuizQuestion[]> = {
  "murphy_u01_am_is_are": [
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
      "question": "Neither of the computers in the campus library _______ working properly today.",
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
      "question": "I _______ ready to deliver my IELTS Speaking presentation right now.",
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
      "question": "These reference books on the top shelf _______ extremely useful for Academic Writing.",
      "options": [
        "is",
        "are",
        "am",
        "be"
      ],
      "correctAnswer": "are",
      "explanation": "'These reference books' ko'plikda bo'lgani uchun 'are' qo'llaniladi."
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
      "explanation": "'They are' ning to'g'ri qisqartmasi 'They're' hisoblanadi."
    },
    {
      "question": "Look at that grand historical building! It _______ the oldest library in the city.",
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
      "question": "You _______ always welcome to attend our weekly language exchange sessions.",
      "options": [
        "is",
        "am",
        "are",
        "be"
      ],
      "correctAnswer": "are",
      "explanation": "'You' olmoshi bilan doimo 'are' qo'llaniladi."
    },
    {
      "question": "Our student debate team _______ determined to win the national competition this year.",
      "options": [
        "is",
        "are",
        "am",
        "be"
      ],
      "correctAnswer": "is",
      "explanation": "Jamoa (team) bir butun birlik sifatida qaralganda 'is' ishlatiladi."
    }
  ],
  "murphy_u02_am_is_are_questions": [
    {
      "question": "_______ your parents at home right now, or are they still at work?",
      "options": [
        "Is",
        "Are",
        "Do",
        "Does"
      ],
      "correctAnswer": "Are",
      "explanation": "'Your parents' ko'plikda (they) bo'lgani sababli so'roq gapda 'Are' oldinga chiqadi."
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
      "explanation": "'Is she' so'rog'iga qisqa inkor javob 'No, she isn't' bo'ladi."
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
      "explanation": "'You' bilan to be so'roq shaklida 'Why are you...' to'g'ri keladi."
    },
    {
      "question": "Where _______ the keys to the chemistry laboratory?",
      "options": [
        "is",
        "are",
        "do",
        "does"
      ],
      "correctAnswer": "are",
      "explanation": "'The keys' ko'plikdagi ot bo'lgani sababli 'Where are the keys...?' to'g'ri."
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
      "question": "'Are you exhausted after the long flight?' — 'Yes, _______.'",
      "options": [
        "I'm",
        "I am",
        "I do",
        "I are"
      ],
      "correctAnswer": "I am",
      "explanation": "Tasdiq qisqa javoblarda qisqartma qilinmaydi: 'Yes, I am' to'g'ri shakl."
    },
    {
      "question": "How much _______ these comprehensive academic dictionaries?",
      "options": [
        "is",
        "are",
        "do",
        "does"
      ],
      "correctAnswer": "are",
      "explanation": "'These dictionaries' ko'plikda bo'lgani uchun narx so'rashda 'How much are...' bo'ladi."
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
      "explanation": "'This seat' (it) birlikda, so'roq gap 'Is this seat vacant...?' bo'ladi."
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
      "explanation": "'Your new laptop' birlikda bo'lgani sababli 'What color is...' to'g'ri."
    },
    {
      "question": "Why _______ the main library doors locked at this hour?",
      "options": [
        "is",
        "are",
        "does",
        "do"
      ],
      "correctAnswer": "are",
      "explanation": "'The doors' ko'plik ot, so'roq shakli 'Why are the doors locked...?' bo'ladi."
    }
  ],
  "murphy_u36_there_is_there_are": [
    {
      "question": "_______ a significant difference between the two academic proposals.",
      "options": [
        "There is",
        "There are",
        "It is",
        "They are"
      ],
      "correctAnswer": "There is",
      "explanation": "'A significant difference' birlikdagi ot bo'lgani uchun 'There is' qo'llanadi."
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
      "explanation": "'Forty questions' ko'plik bo'lgani sababli 'There are' to'g'ri."
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
      "explanation": "'Water' sanalmaydigan ot, so'roq shakli 'Is there any...?' bo'ladi."
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
      "explanation": "'Many students' ko'plik ot, 'There are' talab qilinadi."
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
      "explanation": "'No reason' birlikdagi ot bilan 'There is' qo'llaniladi."
    },
    {
      "question": "How many chapters _______ in this Cambridge test preparation book?",
      "options": [
        "are there",
        "is there",
        "there are",
        "there is"
      ],
      "correctAnswer": "are there",
      "explanation": "So'roq gap tartibida ko'plik ot uchun '...are there' bo'ladi."
    },
    {
      "question": "In the city center, _______ several historical museums to explore.",
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
      "question": "_______ an urgent message from your supervisor in your inbox.",
      "options": [
        "There is",
        "There are",
        "It have",
        "There be"
      ],
      "correctAnswer": "There is",
      "explanation": "'An urgent message' birlikda, 'There is' ishlatiladi."
    },
    {
      "question": "_______ plenty of opportunities for young professionals in this growing sector.",
      "options": [
        "there is",
        "there are",
        "it is",
        "there be"
      ],
      "correctAnswer": "there are",
      "explanation": "'Opportunities' sanaladigan ko'plik ot bo'lgani sababli 'there are' to'g'ri."
    }
  ],
  "murphy_u38_it_pronoun": [
    {
      "question": "_______ twenty kilometers from our campus to the international airport.",
      "options": [
        "There is",
        "It is",
        "They are",
        "It has"
      ],
      "correctAnswer": "It is",
      "explanation": "Masofani ifodalashda formal ega sifatida 'It is' ishlatiladi."
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
      "explanation": "Ob-havo holatlarida ega 'It is' (It's) bo'ladi."
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
      "explanation": "Vaqtni ifodalashda 'It is' konstruksiyasi qo'llanadi."
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
      "explanation": "'It is + adjective + to-infinitive' standart grammatik strukturadir."
    },
    {
      "question": "_______ impossible to master academic vocabulary without consistent daily practice.",
      "options": [
        "It is",
        "There is",
        "It has",
        "Its"
      ],
      "correctAnswer": "It is",
      "explanation": "Baholovchi sifatlar bilan 'It is impossible to...' to'g'ri keladi."
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
      "explanation": "Hafta kunlarini so'rash va aytishda 'It is' qo'llaniladi."
    },
    {
      "question": "_______ getting late, and we still have two full essays to review.",
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
      "question": "How far _______ from Tashkent to Samarkand by high-speed train?",
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
      "question": "_______ true that reading scientific journals broadens your academic perspective.",
      "options": [
        "There is",
        "It is",
        "It has",
        "Its"
      ],
      "correctAnswer": "It is",
      "explanation": "Fikrni tasdiqlashda 'It is true that...' qo'llanadi."
    },
    {
      "question": "_______ a long walk to the nearest underground station from here.",
      "options": [
        "It is",
        "There is",
        "Its",
        "They are"
      ],
      "correctAnswer": "It is",
      "explanation": "Masofani tasvirlashda 'It is a long walk...' to'g'ri."
    }
  ],
  "murphy_u03_present_continuous": [
    {
      "question": "Please be quiet! The examiner _______ the listening audio recording.",
      "options": [
        "plays",
        "is playing",
        "played",
        "play"
      ],
      "correctAnswer": "is playing",
      "explanation": "Ayni paytda sodir bo'layotgan jarayon uchun Present Continuous ('is playing') ishlatiladi."
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
      "explanation": "O'zgarish va rivojlanish jarayonlari uchun Present Continuous ('are improving') to'g'ri."
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
      "explanation": "'Listen!' buyrug'i harakat ayni lahzada bo'layotganini ko'rsatadi."
    },
    {
      "question": "My academic writing skills _______ noticeably thanks to daily feedback.",
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
      "question": "Look at that candidate! He _______ notes on his cue card paper.",
      "options": [
        "is writing",
        "writes",
        "written",
        "write"
      ],
      "correctAnswer": "is writing",
      "explanation": "Ayni paytda bo'layotgan harakat: 'He is writing'."
    },
    {
      "question": "Global temperatures _______ steadily due to excessive greenhouse gas emissions.",
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
      "question": "I _______ an inspiring book about memory techniques this week.",
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
      "question": "Why _______ an umbrella today? The sky is completely cloudless.",
      "options": [
        "do you carry",
        "are you carrying",
        "you carry",
        "did you carry"
      ],
      "correctAnswer": "are you carrying",
      "explanation": "Ayni vaqtdagi holat sababini so'rashda 'are you carrying' ishlatiladi."
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
      "question": "They _______ for the mock test in the silent study room right now.",
      "options": [
        "study",
        "are studying",
        "studies",
        "studied"
      ],
      "correctAnswer": "are studying",
      "explanation": "'Right now' ko'rsatkichi bilan 'are studying' to'g'ri."
    }
  ],
  "murphy_u04_present_continuous_questions": [
    {
      "question": "What _______ at the computer? Are you writing your IELTS essay?",
      "options": [
        "do you do",
        "are you doing",
        "did you do",
        "you are doing"
      ],
      "correctAnswer": "are you doing",
      "explanation": "Ayni paytdagi harakat haqida so'rashda 'What are you doing?' so'roq shakli ishlatiladi."
    },
    {
      "question": "Why _______ so fast? The train does not depart for another thirty minutes.",
      "options": [
        "are you walking",
        "do you walk",
        "did you walk",
        "you walk"
      ],
      "correctAnswer": "are you walking",
      "explanation": "Ayni paytda sodir bo'layotgan tez yurish sababi: 'Why are you walking so fast?'"
    },
    {
      "question": "_______ for the university entrance exam this weekend?",
      "options": [
        "Is she studying",
        "Does she study",
        "She is studying",
        "Studying she"
      ],
      "correctAnswer": "Is she studying",
      "explanation": "Present Continuous so'roq shaklida 'Is she studying...?' tartibi to'g'ri."
    },
    {
      "question": "Who _______ to on the telephone right now?",
      "options": [
        "are you talking",
        "do you talk",
        "you are talking",
        "you talk"
      ],
      "correctAnswer": "are you talking",
      "explanation": "'Right now' bilan savol 'Who are you talking to...?' bo'ladi."
    },
    {
      "question": "'Is it raining outside?' — 'No, _______.'",
      "options": [
        "it isn't",
        "it doesn't",
        "it not",
        "it isn't raining not"
      ],
      "correctAnswer": "it isn't",
      "explanation": "'Is it raining?' savoliga qisqa inkor javob: 'No, it isn't'."
    },
    {
      "question": "Where _______ to spend your summer vacation this year?",
      "options": [
        "are you planning",
        "do you plan",
        "did you plan",
        "you plan"
      ],
      "correctAnswer": "are you planning",
      "explanation": "Kelgusi reja va niyatlar haqida 'Where are you planning...?' qo'llaniladi."
    },
    {
      "question": "Why _______ that dark coat today? It is twenty-five degrees outside.",
      "options": [
        "are you wearing",
        "do you wear",
        "did you wear",
        "wear you"
      ],
      "correctAnswer": "are you wearing",
      "explanation": "Ayni vaqtda kiyib turilgan kiyim haqida 'Why are you wearing...?' deb so'raladi."
    },
    {
      "question": "_______ the new software working properly on your computer?",
      "options": [
        "Is",
        "Does",
        "Are",
        "Do"
      ],
      "correctAnswer": "Is",
      "explanation": "'The new software' (it) sanalmaydigan birlik ot, shuning uchun 'Is... working?' to'g'ri."
    },
    {
      "question": "What book _______ at the moment for your English class?",
      "options": [
        "are you reading",
        "do you read",
        "have you read",
        "you read"
      ],
      "correctAnswer": "are you reading",
      "explanation": "'At the moment' ko'rsatkichi bilan 'are you reading' shakli ishlatiladi."
    },
    {
      "question": "_______ the noise outside getting louder and louder?",
      "options": [
        "Is",
        "Does",
        "Are",
        "Do"
      ],
      "correctAnswer": "Is",
      "explanation": "'The noise' birlikda bo'lgani sababli 'Is the noise getting...?' to'g'ri."
    }
  ],
  "murphy_u05_present_simple": [
    {
      "question": "The Earth _______ around the Sun once every 365 days.",
      "options": [
        "revolve",
        "revolves",
        "is revolving",
        "revolved"
      ],
      "correctAnswer": "revolves",
      "explanation": "Ilmiy haqiqat va doimiy tabiat qonunlari uchun Present Simple ('revolves') ishlatiladi."
    },
    {
      "question": "Academic researchers _______ their empirical evidence before publishing conclusions.",
      "options": [
        "verify",
        "verifies",
        "are verifying",
        "verified"
      ],
      "correctAnswer": "verify",
      "explanation": "'Researchers' ko'plik ot, doimiy qoida uchun V1 ('verify') qo'llaniladi."
    },
    {
      "question": "Dr. Simmons _______ lectures on linguistics every Tuesday morning.",
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
      "question": "Pure water _______ at 100 degrees Celsius under standard atmospheric pressure.",
      "options": [
        "boil",
        "boils",
        "is boiling",
        "boiled"
      ],
      "correctAnswer": "boils",
      "explanation": "Umumiy ilmiy haqiqat uchun Present Simple uchinchi shaxsda 'boils' bo'ladi."
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
      "explanation": "'Libraries' ko'plik ot, doimiy belgilangan vaqt jadvali uchun 'open' to'g'ri."
    },
    {
      "question": "A dedicated IELTS student _______ new vocabulary through context daily.",
      "options": [
        "acquire",
        "acquires",
        "is acquiring",
        "acquired"
      ],
      "correctAnswer": "acquires",
      "explanation": "Birlikdagi shaxs (He/She) uchun fe'lga '-s' qo'shiladi: 'acquires'."
    },
    {
      "question": "I rarely _______ strong coffee before taking an intensive speaking test.",
      "options": [
        "drinks",
        "drink",
        "am drinking",
        "drank"
      ],
      "correctAnswer": "drink",
      "explanation": "'I' bilan chastota ravishi (rarely) oddiy hozirgi zamon V1 shaklini talab qiladi: 'drink'."
    },
    {
      "question": "My tutor _______ that consistency is the primary foundation for Band 8.",
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
      "question": "Public transport in this metropolis _______ efficiently across all major districts.",
      "options": [
        "operates",
        "operate",
        "is operating",
        "operated"
      ],
      "correctAnswer": "operates",
      "explanation": "'Public transport' sanalmaydigan birlik ot, fe'l '-s' oladi: 'operates'."
    },
    {
      "question": "The IELTS exam _______ candidates across four essential linguistic skills.",
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
      "question": "She _______ coffee in the evening because it disrupts her sleep.",
      "options": [
        "doesn't drink",
        "don't drink",
        "doesn't drinks",
        "not drinks"
      ],
      "correctAnswer": "doesn't drink",
      "explanation": "He/She/It bilan inkor shaklda 'doesn't + V1' (fe'l qo'shimchasiz) ishlatiladi."
    },
    {
      "question": "They _______ television during examination week to stay focused.",
      "options": [
        "doesn't watch",
        "don't watch",
        "don't watches",
        "not watch"
      ],
      "correctAnswer": "don't watch",
      "explanation": "'They' bilan Present Simple inkori 'don't + V1' bo'ladi."
    },
    {
      "question": "My father _______ to work on Saturdays; it is his day off.",
      "options": [
        "doesn't go",
        "don't go",
        "doesn't goes",
        "isn't go"
      ],
      "correctAnswer": "doesn't go",
      "explanation": "'My father' (he) uchinchi shaxs birlik: 'doesn't go' to'g'ri."
    },
    {
      "question": "I _______ understand this advanced mathematical formula.",
      "options": [
        "doesn't",
        "don't",
        "am not",
        "not"
      ],
      "correctAnswer": "don't",
      "explanation": "'I' bilan oddiy hozirgi zamon inkori 'don't' yordamchi fe'li bilan yasaladi."
    },
    {
      "question": "This smartphone application _______ require an active internet connection to read flashcards.",
      "options": [
        "doesn't",
        "don't",
        "isn't",
        "not"
      ],
      "correctAnswer": "doesn't",
      "explanation": "'This application' (it) birlikda, inkor yordamchisi 'doesn't' bo'ladi."
    },
    {
      "question": "We _______ usually take the highway during morning rush hour.",
      "options": [
        "doesn't",
        "don't",
        "aren't",
        "not"
      ],
      "correctAnswer": "don't",
      "explanation": "'We' bilan inkor 'don't' orqali yasaladi."
    },
    {
      "question": "He _______ want to relocate to another country for his master's degree.",
      "options": [
        "doesn't",
        "don't",
        "isn't",
        "not"
      ],
      "correctAnswer": "doesn't",
      "explanation": "'He' bilan 'doesn't want' to'g'ri ('want' ga '-s' qo'shilmaydi)."
    },
    {
      "question": "The university bus _______ stop near the botanical gardens on Sundays.",
      "options": [
        "doesn't",
        "don't",
        "isn't",
        "not"
      ],
      "correctAnswer": "doesn't",
      "explanation": "'The university bus' (it) birlik ot: 'doesn't stop'."
    },
    {
      "question": "You _______ need to submit your assignment until next Friday.",
      "options": [
        "doesn't",
        "don't",
        "aren't",
        "not"
      ],
      "correctAnswer": "don't",
      "explanation": "'You' bilan 'don't need to...' ishlatiladi."
    },
    {
      "question": "Academic success _______ depend solely on luck; it requires disciplined effort.",
      "options": [
        "doesn't",
        "don't",
        "isn't",
        "not"
      ],
      "correctAnswer": "doesn't",
      "explanation": "'Academic success' (it) sanalmaydigan birlik ot: 'doesn't depend'."
    }
  ],
  "murphy_u07_present_simple_questions": [
    {
      "question": "_______ you speak any foreign languages besides English and Uzbek?",
      "options": [
        "Do",
        "Does",
        "Are",
        "Is"
      ],
      "correctAnswer": "Do",
      "explanation": "'You' olmoshi bilan Present Simple so'roq shaklida 'Do' qo'llaniladi."
    },
    {
      "question": "Where _______ your older brother work at present?",
      "options": [
        "do",
        "does",
        "is",
        "are"
      ],
      "correctAnswer": "does",
      "explanation": "'Your older brother' (he) uchinchi shaxs birlik bo'lgani uchun 'does' ishlatiladi."
    },
    {
      "question": "'Does she live in Samarkand?' — 'Yes, _______.'",
      "options": [
        "she does",
        "she is",
        "she lives",
        "she do"
      ],
      "correctAnswer": "she does",
      "explanation": "'Does she...?' so'rog'iga qisqa tasdiq javob: 'Yes, she does'."
    },
    {
      "question": "How often _______ you review your IELTS vocabulary flashcards?",
      "options": [
        "do",
        "does",
        "are",
        "have"
      ],
      "correctAnswer": "do",
      "explanation": "'How often do you review...?' odatiy chastotani so'rashda 'do' ishlatiladi."
    },
    {
      "question": "_______ this train stop at the international airport station?",
      "options": [
        "Do",
        "Does",
        "Is",
        "Are"
      ],
      "correctAnswer": "Does",
      "explanation": "'This train' (it) birlikda, so'roq yordamchi fe'li 'Does' bo'ladi."
    },
    {
      "question": "What time _______ the morning seminar commence on Mondays?",
      "options": [
        "do",
        "does",
        "is",
        "are"
      ],
      "correctAnswer": "does",
      "explanation": "'The seminar' (it) birlik ot, so'roqda 'does' qo'yiladi."
    },
    {
      "question": "Why _______ people prefer reading digital books over physical copies?",
      "options": [
        "do",
        "does",
        "are",
        "have"
      ],
      "correctAnswer": "do",
      "explanation": "'People' doimo ko'plik ot hisoblanadi (they), shuning uchun 'do' to'g'ri."
    },
    {
      "question": "_______ your university offer financial scholarships to top students?",
      "options": [
        "Do",
        "Does",
        "Is",
        "Are"
      ],
      "correctAnswer": "Does",
      "explanation": "'Your university' (it) birlik ot, so'roq 'Does your university offer...?' bo'ladi."
    },
    {
      "question": "How _______ this electronic dictionary function without a battery?",
      "options": [
        "do",
        "does",
        "is",
        "are"
      ],
      "correctAnswer": "does",
      "explanation": "'This dictionary' birlikda, yordamchi fe'l 'does' ishlatiladi."
    },
    {
      "question": "'Do they play football on Sundays?' — 'No, _______.'",
      "options": [
        "they don't",
        "they doesn't",
        "they aren't",
        "they not"
      ],
      "correctAnswer": "they don't",
      "explanation": "'Do they...?' so'rog'iga qisqa inkor javob 'No, they don't' bo'ladi."
    }
  ],
  "murphy_u08_present_continuous_vs_simple": [
    {
      "question": "I _______ the answer to this complex grammar query right now.",
      "options": [
        "know",
        "am knowing",
        "knows",
        "have known"
      ],
      "correctAnswer": "know",
      "explanation": "'Know' statik (mental state) fe'l bo'lib, odatda Continuous da ishlatilmaydi; Present Simple olinadi."
    },
    {
      "question": "Look at the window! It _______ right now, but it usually _______ here in winter.",
      "options": [
        "is snowing / snows",
        "snows / is snowing",
        "snows / snows",
        "is snowing / is snowing"
      ],
      "correctAnswer": "is snowing / snows",
      "explanation": "Ayni paytda 'is snowing' (Continuous), odatda esa 'snows' (Simple) bo'ladi."
    },
    {
      "question": "He _______ three languages fluently: English, German, and Russian.",
      "options": [
        "speaks",
        "is speaking",
        "speak",
        "is speak"
      ],
      "correctAnswer": "speaks",
      "explanation": "Til bilish doimiy qobiliyat bo'lgani sababli Present Simple ('speaks') ishlatiladi."
    },
    {
      "question": "Don't disturb him! He _______ on his Task 2 essay outline.",
      "options": [
        "works",
        "is working",
        "work",
        "worked"
      ],
      "correctAnswer": "is working",
      "explanation": "'Don't disturb him!' buyrug'i ish ayni lahzada ketayotganini (is working) bildiradi."
    },
    {
      "question": "Do you _______ what the examiner is asking you?",
      "options": [
        "understand",
        "understanding",
        "are understanding",
        "understands"
      ],
      "correctAnswer": "understand",
      "explanation": "'Understand' statik fe'li faqat Simple zamonda 'Do you understand?' deb so'raladi."
    },
    {
      "question": "She usually _______ by bus, but this week she _______ to campus.",
      "options": [
        "travels / is walking",
        "is traveling / walks",
        "travels / walks",
        "is traveling / is walking"
      ],
      "correctAnswer": "travels / is walking",
      "explanation": "Doimiy odat ('usually travels') va vaqtinchalik holat ('this week is walking') farqlanadi."
    },
    {
      "question": "I _______ this soup; it _______ delicious.",
      "options": [
        "am tasting / tastes",
        "taste / is tasting",
        "am tasting / is tasting",
        "taste / tastes"
      ],
      "correctAnswer": "am tasting / tastes",
      "explanation": "Harakat sifatida tatib ko'rish 'am tasting', ta'mga ega bo'lish esa statik 'tastes' bo'ladi."
    },
    {
      "question": "What _______ of the latest educational reform in our country?",
      "options": [
        "do you think",
        "are you thinking",
        "you think",
        "did you think"
      ],
      "correctAnswer": "do you think",
      "explanation": "Fikr va qarashni so'rashda 'What do you think of...?' ishlatiladi."
    },
    {
      "question": "Be quiet, please! I _______ to concentrate on this reading passage.",
      "options": [
        "am trying",
        "try",
        "tried",
        "tries"
      ],
      "correctAnswer": "am trying",
      "explanation": "Ayni damda qilinayotgan harakat: 'I am trying to concentrate'."
    },
    {
      "question": "Water _______ at 0 degrees Celsius under standard pressure.",
      "options": [
        "freezes",
        "is freezing",
        "freeze",
        "froze"
      ],
      "correctAnswer": "freezes",
      "explanation": "Ilmiy qonuniyat doimo Present Simple da ifodalanadi: 'freezes'."
    }
  ],
  "murphy_u09_have_have_got": [
    {
      "question": "I _______ a severe headache, so I cannot attend the evening seminar.",
      "options": [
        "have got",
        "am having",
        "having",
        "got have"
      ],
      "correctAnswer": "have got",
      "explanation": "Bosh og'rig'i yoki kasallikni ifodalashda 'I have got' yoki 'I have' ishlatiladi."
    },
    {
      "question": "_______ you got a spare pencil for the IELTS listening exam?",
      "options": [
        "Have",
        "Do",
        "Are",
        "Did"
      ],
      "correctAnswer": "Have",
      "explanation": "'...got' bilan kelganda so'roq 'Have you got...?' bo'ladi."
    },
    {
      "question": "Do you _______ any siblings studying abroad?",
      "options": [
        "have",
        "have got",
        "has",
        "having"
      ],
      "correctAnswer": "have",
      "explanation": "'Do you...' bilan 'have got' emas, oddiy 'have' ishlatiladi: 'Do you have...?'."
    },
    {
      "question": "She _______ a brand new laptop with high processing speed.",
      "options": [
        "has got",
        "have got",
        "is having",
        "having"
      ],
      "correctAnswer": "has got",
      "explanation": "Uchinchi shaxs birlik (She) bilan 'has got' yoki 'has' qo'llanadi."
    },
    {
      "question": "They _______ much time before the submission deadline.",
      "options": [
        "haven't got",
        "hasn't got",
        "not have",
        "aren't having"
      ],
      "correctAnswer": "haven't got",
      "explanation": "'They' bilan inkor 'haven't got' yoki 'don't have' bo'ladi."
    },
    {
      "question": "_______ he got an official Cambridge IELTS preparation handbook?",
      "options": [
        "Has",
        "Have",
        "Does",
        "Is"
      ],
      "correctAnswer": "Has",
      "explanation": "Uchinchi shaxs birlik (he) bilan so'roq 'Has he got...?' bo'ladi."
    },
    {
      "question": "We usually _______ lunch in the university cafeteria at 1:00 PM.",
      "options": [
        "have",
        "have got",
        "are having got",
        "has"
      ],
      "correctAnswer": "have",
      "explanation": "Ovqatlanish harakati ('have lunch') da 'got' ishlatilmaydi; faqat 'have' bo'ladi."
    },
    {
      "question": "I don't _______ enough credits to take the advanced linguistics course.",
      "options": [
        "have",
        "have got",
        "has",
        "had"
      ],
      "correctAnswer": "have",
      "explanation": "'I don't...' inkoridan keyin asosiy fe'l 'have' ishlatiladi."
    },
    {
      "question": "Excuse me, _______ you got change for a twenty-dollar note?",
      "options": [
        "have",
        "do",
        "are",
        "did"
      ],
      "correctAnswer": "have",
      "explanation": "'Have you got change for...?' standart xushmuomala so'rovdir."
    },
    {
      "question": "Our language center _______ modern multimedia facilities in every classroom.",
      "options": [
        "has",
        "have",
        "are having",
        "is have"
      ],
      "correctAnswer": "has",
      "explanation": "'Our center' (it) birlik ot bo'lgani uchun 'has' qo'llaniladi."
    }
  ],
  "murphy_u10_was_were": [
    {
      "question": "Where _______ you yesterday afternoon when the mock test results were announced?",
      "options": [
        "were",
        "was",
        "are",
        "did"
      ],
      "correctAnswer": "were",
      "explanation": "'You' bilan o'tgan zamonda to be ning 'were' shakli qo'llaniladi."
    },
    {
      "question": "The weather _______ surprisingly pleasant during our study trip to the mountains.",
      "options": [
        "was",
        "were",
        "is",
        "be"
      ],
      "correctAnswer": "was",
      "explanation": "'The weather' (it) sanalmas ot bo'lgani sababli 'was' to'g'ri."
    },
    {
      "question": "Neither of the candidates _______ satisfied with their preliminary writing score.",
      "options": [
        "was",
        "were",
        "are",
        "is"
      ],
      "correctAnswer": "was",
      "explanation": "'Neither of + noun' rasmiy ingliz tilida birlik fe'l 'was' ni oladi."
    },
    {
      "question": "Why _______ the lecture hall so crowded yesterday morning?",
      "options": [
        "was",
        "were",
        "did",
        "is"
      ],
      "correctAnswer": "was",
      "explanation": "'The lecture hall' birlikda bo'lgani sababli 'Why was...' to'g'ri."
    },
    {
      "question": "'Were your friends nervous before the exam?' — 'Yes, _______.'",
      "options": [
        "they were",
        "they was",
        "they did",
        "they were nervous not"
      ],
      "correctAnswer": "they were",
      "explanation": "'Were they...?' so'rog'iga qisqa tasdiq javob 'Yes, they were'."
    },
    {
      "question": "I _______ extremely tired last night, so I fell asleep immediately after dinner.",
      "options": [
        "was",
        "were",
        "am",
        "did"
      ],
      "correctAnswer": "was",
      "explanation": "'I' bilan o'tgan zamonda 'was' ishlatiladi."
    },
    {
      "question": "The questions on the reading paper _______ much harder than we had anticipated.",
      "options": [
        "were",
        "was",
        "are",
        "been"
      ],
      "correctAnswer": "were",
      "explanation": "'The questions' ko'plik ot bo'lgani uchun 'were' qo'llaniladi."
    },
    {
      "question": "Ten years ago, there _______ no high-speed trains connecting these two cities.",
      "options": [
        "were",
        "was",
        "are",
        "is"
      ],
      "correctAnswer": "were",
      "explanation": "'No high-speed trains' ko'plikda, 'there were' to'g'ri."
    },
    {
      "question": "Who _______ that historical scholar who gave the keynote speech?",
      "options": [
        "was",
        "were",
        "did",
        "is"
      ],
      "correctAnswer": "was",
      "explanation": "'That scholar' (he/she) birlikda, 'Who was that scholar?' bo'ladi."
    },
    {
      "question": "We _______ not aware of the recent changes in the visa regulations.",
      "options": [
        "were",
        "was",
        "did",
        "are"
      ],
      "correctAnswer": "were",
      "explanation": "'We' olmoshi bilan o'tgan zamonda 'were not' (weren't) ishlatiladi."
    }
  ],
  "murphy_u11_past_simple_regular_irregular": [
    {
      "question": "Yesterday evening, I _______ three academic essays for my IELTS portfolio.",
      "options": [
        "wrote",
        "writed",
        "write",
        "written"
      ],
      "correctAnswer": "wrote",
      "explanation": "'Write' noto'g'ri fe'lining Past Simple shakli 'wrote' dir."
    },
    {
      "question": "The university committee _______ the grant proposal after thorough review.",
      "options": [
        "approved",
        "approves",
        "approving",
        "approve"
      ],
      "correctAnswer": "approved",
      "explanation": "O'tgan oddiy zamon to'g'ri fe'llari oxiriga '-ed' oladi: 'approved'."
    },
    {
      "question": "Last month, our research team _______ to Oxford for an academic symposium.",
      "options": [
        "went",
        "goed",
        "gone",
        "goes"
      ],
      "correctAnswer": "went",
      "explanation": "'Go' fe'lining o'tgan zamon shakli 'went' dir."
    },
    {
      "question": "She _______ all the required vocabulary flashcards before taking the exam.",
      "options": [
        "memorized",
        "memorizes",
        "memorize",
        "memorizing"
      ],
      "correctAnswer": "memorized",
      "explanation": "Tugallangan o'tgan harakat uchun Past Simple ('memorized') to'g'ri."
    },
    {
      "question": "The candidate _______ very clearly and confidently during Part 2.",
      "options": [
        "spoke",
        "speaked",
        "spoken",
        "speak"
      ],
      "correctAnswer": "spoke",
      "explanation": "'Speak' fe'lining o'tgan zamoni 'spoke' hisoblanadi."
    },
    {
      "question": "They _______ a new online learning platform to assist self-study learners.",
      "options": [
        "developed",
        "develops",
        "develop",
        "developing"
      ],
      "correctAnswer": "developed",
      "explanation": "To'g'ri fe'l Past Simple shaklida '-ed' oladi: 'developed'."
    },
    {
      "question": "He _______ his IELTS exam on the very first attempt last summer.",
      "options": [
        "passed",
        "past",
        "passes",
        "passing"
      ],
      "correctAnswer": "passed",
      "explanation": "Imtihondan o'tish fe'lining o'tgan shakli 'passed' dir."
    },
    {
      "question": "We _______ an insightful documentary on renewable energy technology yesterday.",
      "options": [
        "watched",
        "watch",
        "watches",
        "watching"
      ],
      "correctAnswer": "watched",
      "explanation": "'Yesterday' aniq o'tgan vaqt ko'rsatkichi bilan Past Simple ('watched') keladi."
    },
    {
      "question": "The international examiner _______ several follow-up questions in Part 3.",
      "options": [
        "asked",
        "asks",
        "ask",
        "asking"
      ],
      "correctAnswer": "asked",
      "explanation": "O'tgan voqea uchun Past Simple ('asked') ishlatiladi."
    },
    {
      "question": "She _______ up at 6:00 AM to review her grammar notes before the test.",
      "options": [
        "woke",
        "waked",
        "woken",
        "wake"
      ],
      "correctAnswer": "woke",
      "explanation": "'Wake up' noto'g'ri fe'lining o'tgan shakli 'woke up' dir."
    }
  ],
  "murphy_u12_past_simple_negative_questions": [
    {
      "question": "I _______ understand the speaker's accent during the first listening section.",
      "options": [
        "didn't",
        "don't",
        "wasn't",
        "haven't"
      ],
      "correctAnswer": "didn't",
      "explanation": "Past Simple inkor shakli barcha shaxslar uchun 'didn't + V1' orqali yasaladi."
    },
    {
      "question": "_______ you finish your writing essay before the countdown timer reached zero?",
      "options": [
        "Did",
        "Do",
        "Were",
        "Have"
      ],
      "correctAnswer": "Did",
      "explanation": "Past Simple so'roq shakli 'Did + Subject + V1...?' tartibida bo'ladi."
    },
    {
      "question": "Why _______ she attend the mandatory academic orientation yesterday?",
      "options": [
        "didn't",
        "doesn't",
        "wasn't",
        "isn't"
      ],
      "correctAnswer": "didn't",
      "explanation": "'Yesterday' o'tgan zamon inkor so'rog'i 'Why didn't she attend...?' bo'ladi."
    },
    {
      "question": "'Did you score Band 7.5 on your mock exam?' — 'Yes, _______.'",
      "options": [
        "I did",
        "I scored",
        "I had",
        "I do"
      ],
      "correctAnswer": "I did",
      "explanation": "'Did you...?' so'rog'iga qisqa javob: 'Yes, I did'."
    },
    {
      "question": "They _______ have enough time to review their answers at the end of the test.",
      "options": [
        "didn't",
        "don't",
        "weren't",
        "haven't"
      ],
      "correctAnswer": "didn't",
      "explanation": "O'tgan zamondagi inkor 'didn't have' bo'ladi."
    },
    {
      "question": "Where _______ you buy that comprehensive grammar reference guide?",
      "options": [
        "did",
        "do",
        "were",
        "have"
      ],
      "correctAnswer": "did",
      "explanation": "Past Simple maxsus so'rog'i: 'Where did you buy...?'."
    },
    {
      "question": "He _______ not realize that the exam started at 9:00 AM sharp.",
      "options": [
        "did",
        "does",
        "was",
        "had"
      ],
      "correctAnswer": "did",
      "explanation": "'He did not realize...' o'tgan zamon inkor shaklidir."
    },
    {
      "question": "What _______ the examiner say when you concluded your cue card speech?",
      "options": [
        "did",
        "does",
        "was",
        "is"
      ],
      "correctAnswer": "did",
      "explanation": "O'tgan zamondagi savol: 'What did the examiner say...?'."
    },
    {
      "question": "We _______ go to the language club last week because of heavy rainfall.",
      "options": [
        "didn't",
        "don't",
        "weren't",
        "haven't"
      ],
      "correctAnswer": "didn't",
      "explanation": "'Last week' ko'rsatkichi bilan Past Simple inkori 'didn't go' bo'ladi."
    },
    {
      "question": "_______ they invite international keynote speakers to the academic conference?",
      "options": [
        "Did",
        "Do",
        "Were",
        "Have"
      ],
      "correctAnswer": "Did",
      "explanation": "O'tgan zamondagi umumiy so'roq: 'Did they invite...?'."
    }
  ],
  "murphy_u13_past_continuous": [
    {
      "question": "At 8:00 PM yesterday, I _______ for my IELTS speaking assessment.",
      "options": [
        "was preparing",
        "prepared",
        "am preparing",
        "were preparing"
      ],
      "correctAnswer": "was preparing",
      "explanation": "O'tmishdagi aniq bir vaqtda (At 8:00 PM yesterday) davom etayotgan harakat: 'was preparing'."
    },
    {
      "question": "They _______ a complex data chart when the electricity suddenly went out.",
      "options": [
        "were analyzing",
        "analyzed",
        "are analyzing",
        "was analyzing"
      ],
      "correctAnswer": "were analyzing",
      "explanation": "'They' ko'plik ot bilan o'tgan davomli zamonda 'were analyzing' ishlatiladi."
    },
    {
      "question": "What _______ at this time last Sunday morning?",
      "options": [
        "were you doing",
        "did you do",
        "are you doing",
        "you were doing"
      ],
      "correctAnswer": "were you doing",
      "explanation": "O'tgan zamondagi aniq payt so'rog'i: 'What were you doing at this time...?'."
    },
    {
      "question": "The wind _______ fiercely while we were driving along the mountain highway.",
      "options": [
        "was blowing",
        "blew",
        "is blowing",
        "were blowing"
      ],
      "correctAnswer": "was blowing",
      "explanation": "'The wind' birlikda, o'tgan davomli zamon 'was blowing' bo'ladi."
    },
    {
      "question": "She _______ attentively to the audio track while taking strategic notes.",
      "options": [
        "was listening",
        "listened",
        "is listening",
        "were listening"
      ],
      "correctAnswer": "was listening",
      "explanation": "Birlikdagi ega (She) bilan 'was listening' to'g'ri."
    },
    {
      "question": "While the professor _______ the slides, several students took detailed notes.",
      "options": [
        "was explaining",
        "explained",
        "explains",
        "were explaining"
      ],
      "correctAnswer": "was explaining",
      "explanation": "Uzun davomli fon harakati uchun 'was explaining' ishlatiladi."
    },
    {
      "question": "Why _______ so rapidly when the police officer stopped your vehicle?",
      "options": [
        "were you driving",
        "did you drive",
        "are you driving",
        "you drove"
      ],
      "correctAnswer": "were you driving",
      "explanation": "To'xtatilgan lahzada davom etayotgan harakat: 'Why were you driving so rapidly?'."
    },
    {
      "question": "The computer system _______ automated backups throughout the entire night.",
      "options": [
        "was performing",
        "performed",
        "is performing",
        "were performing"
      ],
      "correctAnswer": "was performing",
      "explanation": "Tun bo'yi davom etgan jarayon: 'was performing'."
    },
    {
      "question": "I _______ of taking the computer-delivered exam instead of the paper format.",
      "options": [
        "was thinking",
        "thought",
        "am thinking",
        "were thinking"
      ],
      "correctAnswer": "was thinking",
      "explanation": "O'tmishdagi mulohaza jarayoni: 'I was thinking of...'."
    },
    {
      "question": "The candidates _______ outside the examination hall when the doors opened.",
      "options": [
        "were waiting",
        "waited",
        "are waiting",
        "was waiting"
      ],
      "correctAnswer": "were waiting",
      "explanation": "'The candidates' ko'plik ot: 'were waiting'."
    }
  ],
  "murphy_u14_past_continuous_and_simple": [
    {
      "question": "I _______ my coffee when the examiner _______ my candidate number.",
      "options": [
        "was drinking / called",
        "drank / was calling",
        "drank / called",
        "was drinking / was calling"
      ],
      "correctAnswer": "was drinking / called",
      "explanation": "Davom etayotgan fon harakat (was drinking) qisqa to'satdan bo'lgan harakat (called) bilan bo'lindi."
    },
    {
      "question": "While we _______ for the bus, it _______ to rain heavily.",
      "options": [
        "were waiting / started",
        "waited / was starting",
        "waited / started",
        "were waiting / was starting"
      ],
      "correctAnswer": "were waiting / started",
      "explanation": "'While' qismida davomli harakat (were waiting), asosiy gapda qisqa harakat (started) keladi."
    },
    {
      "question": "He _______ his hand while he _______ the laboratory glassware.",
      "options": [
        "burned / was cleaning",
        "was burning / cleaned",
        "burned / cleaned",
        "was burning / was cleaning"
      ],
      "correctAnswer": "burned / was cleaning",
      "explanation": "Tozalash jarayonida (was cleaning) qo'lini kuydirib oldi (burned)."
    },
    {
      "question": "What _______ when the earthquake _______ yesterday?",
      "options": [
        "were you doing / occurred",
        "did you do / was occurring",
        "did you do / occurred",
        "were you doing / was occurring"
      ],
      "correctAnswer": "were you doing / occurred",
      "explanation": "Zilzila yuz bergan daqiqada (occurred) nima bilan mashg'ul edingiz (were you doing)?"
    },
    {
      "question": "The fire alarm _______ while the students _______ their writing test.",
      "options": [
        "rang / were taking",
        "was ringing / took",
        "rang / took",
        "was ringing / were taking"
      ],
      "correctAnswer": "rang / were taking",
      "explanation": "Test topshirish jarayoni (were taking) signal chalinishi (rang) bilan to'xtatildi."
    },
    {
      "question": "As I _______ through the library doors, I _______ my English tutor.",
      "options": [
        "was walking / noticed",
        "walked / was noticing",
        "walked / noticed",
        "was walking / was noticing"
      ],
      "correctAnswer": "was walking / noticed",
      "explanation": "Yurib kirayotganda (was walking) payqab qoldim (noticed)."
    },
    {
      "question": "She _______ down the slippery stairs and _______ her ankle.",
      "options": [
        "fell / sprained",
        "was falling / was spraining",
        "fell / was spraining",
        "was falling / sprained"
      ],
      "correctAnswer": "fell / sprained",
      "explanation": "Ketma-ket yuz bergan ikkita qisqa harakat uchun ikkala fe'l ham Past Simple da bo'ladi."
    },
    {
      "question": "While the researcher _______ the statistical data, the computer crashed.",
      "options": [
        "was analyzing",
        "analyzed",
        "analyzes",
        "is analyzing"
      ],
      "correctAnswer": "was analyzing",
      "explanation": "'While' dan keyin davomli harakat 'was analyzing' keladi."
    },
    {
      "question": "I _______ to music with headphones, so I _______ hear the doorbell.",
      "options": [
        "was listening / didn't",
        "listened / wasn't",
        "am listening / don't",
        "was listening / wasn't"
      ],
      "correctAnswer": "was listening / didn't",
      "explanation": "Musiqa eshitayotgan edim (was listening), shuning uchun eshitmadim (didn't hear)."
    },
    {
      "question": "When the supervisor _______ into the room, everyone _______ hard on the assignment.",
      "options": [
        "walked / was working",
        "was walking / worked",
        "walked / worked",
        "was walking / was working"
      ],
      "correctAnswer": "walked / was working",
      "explanation": "Nazoratchi kirib kelganida (walked), hamma ishlab o'tirgan edi (was working)."
    }
  ],
  "murphy_u15_present_perfect_1": [
    {
      "question": "Technological advancements _______ the way modern societies communicate.",
      "options": [
        "have transformed",
        "has transformed",
        "transformed",
        "transforming"
      ],
      "correctAnswer": "have transformed",
      "explanation": "'Advancements' ko'plik ot, hozirgi kunda natijasi yaqqol ko'rinib turgani uchun 'have transformed' to'g'ri."
    },
    {
      "question": "I cannot enter my apartment because I _______ my house keys.",
      "options": [
        "have lost",
        "lost",
        "had lost",
        "am losing"
      ],
      "correctAnswer": "have lost",
      "explanation": "Hozirgi paytdagi natija (kalit yo'q, uyga kirolmayapman) Present Perfect ('have lost') ni talab qiladi."
    },
    {
      "question": "She _______ her master's thesis and submitted it to the faculty committee.",
      "options": [
        "has completed",
        "have completed",
        "completed has",
        "is completing"
      ],
      "correctAnswer": "has completed",
      "explanation": "Uchinchi shaxs birlik (She) bilan 'has + V3' ('has completed') to'g'ri."
    },
    {
      "question": "The government _______ new environmental policies to reduce carbon emissions.",
      "options": [
        "has introduced",
        "have introduced",
        "introduced has",
        "is introduce"
      ],
      "correctAnswer": "has introduced",
      "explanation": "'The government' birlik tashkilot sifatida qaralganda 'has introduced' bo'ladi."
    },
    {
      "question": "Look! Someone _______ a cup of coffee all over the conference table.",
      "options": [
        "has spilled",
        "have spilled",
        "spilled has",
        "is spilling"
      ],
      "correctAnswer": "has spilled",
      "explanation": "'Someone' doim birlik, 'has spilled' natijasi ayni paytda stolda ko'rinib turibdi."
    },
    {
      "question": "We _______ all the necessary data for our Task 1 report.",
      "options": [
        "have gathered",
        "has gathered",
        "gathered have",
        "are gather"
      ],
      "correctAnswer": "have gathered",
      "explanation": "'We' olmoshi bilan 'have gathered' to'g'ri."
    },
    {
      "question": "The price of petrol _______ sharply over the past few weeks.",
      "options": [
        "has increased",
        "have increased",
        "increased has",
        "is increase"
      ],
      "correctAnswer": "has increased",
      "explanation": "'The price' birlik ot: 'has increased'."
    },
    {
      "question": "Dr. Watson _______ dozens of peer-reviewed articles on global economics.",
      "options": [
        "has published",
        "have published",
        "published has",
        "is publishing"
      ],
      "correctAnswer": "has published",
      "explanation": "Hayotiy tajriba va hozirgi natija: 'has published'."
    },
    {
      "question": "They _______ a new scholarship scheme for international researchers.",
      "options": [
        "have launched",
        "has launched",
        "launched have",
        "are launch"
      ],
      "correctAnswer": "have launched",
      "explanation": "'They' bilan 'have launched' to'g'ri."
    },
    {
      "question": "I _______ my decision regarding the university application; I will study in the UK.",
      "options": [
        "have made",
        "has made",
        "made have",
        "am make"
      ],
      "correctAnswer": "have made",
      "explanation": "Qaror qabul qilindi va uning natijasi ma'lum: 'I have made my decision'."
    }
  ],
  "murphy_u16_present_perfect_just_already_yet": [
    {
      "question": "'Would you like a cup of tea?' — 'No, thank you, I have _______ had one.'",
      "options": [
        "just",
        "yet",
        "still",
        "ever"
      ],
      "correctAnswer": "just",
      "explanation": "'Just' ayni ozgina vaqt oldin sodir bo'lgan harakat uchun ishlatiladi: 'I have just had one'."
    },
    {
      "question": "Have you finalized your essay outline _______?",
      "options": [
        "yet",
        "already",
        "just",
        "never"
      ],
      "correctAnswer": "yet",
      "explanation": "'Yet' so'roq va inkor gaplarning oxirida 'hali/allaqachon' ma'nosida ishlatiladi."
    },
    {
      "question": "I have _______ completed the practice exam, even though the deadline is tomorrow.",
      "options": [
        "already",
        "yet",
        "still",
        "never"
      ],
      "correctAnswer": "already",
      "explanation": "'Already' kutilganidan oldinroq bajarilgan ish uchun qo'llanadi: 'I have already completed'."
    },
    {
      "question": "The examination results have not been announced _______.",
      "options": [
        "yet",
        "already",
        "just",
        "ever"
      ],
      "correctAnswer": "yet",
      "explanation": "Inkor gap oxirida 'yet' (hali e'lon qilinmadi) ishlatiladi."
    },
    {
      "question": "Be careful! The paint on that bench has _______ been applied; it is still wet.",
      "options": [
        "just",
        "yet",
        "already",
        "ever"
      ],
      "correctAnswer": "just",
      "explanation": "Yaqindagina bo'yalganini bildirish uchun 'just' qo'yiladi."
    },
    {
      "question": "'Don't forget to send the document.' — 'I have _______ sent it five minutes ago!'",
      "options": [
        "already",
        "yet",
        "ever",
        "still"
      ],
      "correctAnswer": "already",
      "explanation": "'Already' harakat allaqachon bajarib bo'linganini ta'kidlaydi."
    },
    {
      "question": "Has the visiting professor arrived on campus _______?",
      "options": [
        "yet",
        "already",
        "just",
        "still"
      ],
      "correctAnswer": "yet",
      "explanation": "So'roq gap oxirida 'yet' qo'llanadi."
    },
    {
      "question": "We haven't received official confirmation from the admissions office _______.",
      "options": [
        "yet",
        "already",
        "just",
        "ever"
      ],
      "correctAnswer": "yet",
      "explanation": "Inkor gap oxirida 'yet' to'g'ri keladi."
    },
    {
      "question": "She has _______ accepted an unconditional offer from Cambridge University.",
      "options": [
        "already",
        "yet",
        "still",
        "ever"
      ],
      "correctAnswer": "already",
      "explanation": "Ijobiy darak gapda fe'llar o'rtasida 'already' ishlatiladi."
    },
    {
      "question": "The train has _______ pulled into platform three; you can board now.",
      "options": [
        "just",
        "yet",
        "still",
        "ever"
      ],
      "correctAnswer": "just",
      "explanation": "Poyezd hozirgina kelib to'xtaganini bildirishda 'just' to'g'ri."
    }
  ],
  "murphy_u17_present_perfect_have_you_ever": [
    {
      "question": "_______ you ever delivered a speech in front of a large academic audience?",
      "options": [
        "Have",
        "Did",
        "Do",
        "Were"
      ],
      "correctAnswer": "Have",
      "explanation": "Hayotiy tajribani so'rashda 'Have you ever + V3...?' strukturasi qo'llaniladi."
    },
    {
      "question": "I have _______ experienced such intense exam pressure before.",
      "options": [
        "never",
        "ever",
        "yet",
        "already"
      ],
      "correctAnswer": "never",
      "explanation": "Hayotda hech qachon sodir bo'lmagan tajriba uchun 'never' qo'yiladi."
    },
    {
      "question": "Have you ever _______ to a native English-speaking country?",
      "options": [
        "been",
        "gone",
        "went",
        "being"
      ],
      "correctAnswer": "been",
      "explanation": "Borib kelganlik (hayotiy tajriba) haqida 'Have you ever been to...?' deb so'raladi."
    },
    {
      "question": "This is the most challenging IELTS reading passage I have _______ analyzed.",
      "options": [
        "ever",
        "never",
        "yet",
        "already"
      ],
      "correctAnswer": "ever",
      "explanation": "Orttirma sifatlar (the most challenging) dan keyin 'I have ever + V3' ishlatiladi."
    },
    {
      "question": "She has _______ failed any of her university examinations.",
      "options": [
        "never",
        "ever",
        "yet",
        "still"
      ],
      "correctAnswer": "never",
      "explanation": "Inkor ma'noli tajriba uchun 'never' qo'llaniladi."
    },
    {
      "question": "Have you _______ taken a full computer-delivered mock test under exam conditions?",
      "options": [
        "ever",
        "never",
        "yet",
        "already"
      ],
      "correctAnswer": "ever",
      "explanation": "So'roq gapda tajribani tekshirish uchun 'ever' ishlatiladi."
    },
    {
      "question": "My grandfather has _______ traveled by airplane in his entire life.",
      "options": [
        "never",
        "ever",
        "yet",
        "already"
      ],
      "correctAnswer": "never",
      "explanation": "Butun hayoti davomida bo'lmagan ish uchun 'never' to'g'ri."
    },
    {
      "question": "Is this the first time you have _______ visited London?",
      "options": [
        "ever",
        "never",
        "yet",
        "still"
      ],
      "correctAnswer": "ever",
      "explanation": "'Is this the first time...?' konstruksiyasida 'ever' ishlatiladi."
    },
    {
      "question": "Have you ever _______ an academic essay exceeding 500 words?",
      "options": [
        "written",
        "wrote",
        "write",
        "writing"
      ],
      "correctAnswer": "written",
      "explanation": "'Have you ever...' dan keyin fe'lning 3-shakli (Past Participle) keladi: 'written'."
    },
    {
      "question": "We have _______ seen such a comprehensive online learning platform.",
      "options": [
        "never",
        "ever",
        "yet",
        "already"
      ],
      "correctAnswer": "never",
      "explanation": "Hayrat va inkor ma'nosida 'never' ishlatiladi."
    }
  ],
  "murphy_u18_present_perfect_how_long": [
    {
      "question": "How long _______ you lived in this historic city?",
      "options": [
        "have",
        "did",
        "do",
        "are"
      ],
      "correctAnswer": "have",
      "explanation": "O'tmishdan hozirgacha davom etib kelayotgan holat uchun 'How long have you lived...?' bo'ladi."
    },
    {
      "question": "She has known her research partner _______ over five years.",
      "options": [
        "for",
        "since",
        "during",
        "from"
      ],
      "correctAnswer": "for",
      "explanation": "Vaqt davomiyligi (over five years) oldidan 'for' qo'yiladi."
    },
    {
      "question": "I have been interested in applied linguistics _______ I was in secondary school.",
      "options": [
        "since",
        "for",
        "from",
        "during"
      ],
      "correctAnswer": "since",
      "explanation": "Boshlang'ich nuqta yoki o'tgan zamon gapi oldidan 'since' ishlatiladi."
    },
    {
      "question": "How long _______ he worked as an IELTS examiner for the British Council?",
      "options": [
        "has",
        "have",
        "did",
        "does"
      ],
      "correctAnswer": "has",
      "explanation": "'He' bilan Present Perfect so'rog'i 'How long has he worked...?' bo'ladi."
    },
    {
      "question": "They have lived in London _______ October 2021.",
      "options": [
        "since",
        "for",
        "from",
        "in"
      ],
      "correctAnswer": "since",
      "explanation": "Aniq boshlang'ich vaqt (October 2021) bilan 'since' qo'llanadi."
    },
    {
      "question": "How long _______ this specialized library been open to the general public?",
      "options": [
        "has",
        "have",
        "did",
        "is"
      ],
      "correctAnswer": "has",
      "explanation": "'This library' (it) birlikda, 'How long has... been' to'g'ri."
    },
    {
      "question": "Professor Higgins has taught at this university _______ three decades.",
      "options": [
        "for",
        "since",
        "from",
        "during"
      ],
      "correctAnswer": "for",
      "explanation": "Davomiylik (three decades - o'ttiz yil) oldidan 'for' qo'yiladi."
    },
    {
      "question": "We have been close friends _______ our first day of university.",
      "options": [
        "since",
        "for",
        "from",
        "at"
      ],
      "correctAnswer": "since",
      "explanation": "Boshlangan aniq kun ('our first day') bilan 'since' ishlatiladi."
    },
    {
      "question": "How long have you _______ this car? Does it run reliably?",
      "options": [
        "had",
        "have",
        "having",
        "has"
      ],
      "correctAnswer": "had",
      "explanation": "'Have you had...' fe'lning 3-shakli (had) bilan ega bo'lish davomiyligini bildiradi."
    },
    {
      "question": "The weather has been cold and overcast _______ last Thursday.",
      "options": [
        "since",
        "for",
        "from",
        "in"
      ],
      "correctAnswer": "since",
      "explanation": "O'tgan payshanbadan beri: 'since last Thursday'."
    }
  ],
  "murphy_u19_for_since_ago": [
    {
      "question": "He graduated from Oxford University three years _______.",
      "options": [
        "ago",
        "for",
        "since",
        "before"
      ],
      "correctAnswer": "ago",
      "explanation": "Past Simple da o'tgan aniq vaqt orqaga qarab hisoblanganda 'ago' ishlatiladi: 'three years ago'."
    },
    {
      "question": "We have been preparing for our IELTS test _______ six months.",
      "options": [
        "for",
        "since",
        "ago",
        "during"
      ],
      "correctAnswer": "for",
      "explanation": "Davr davomiyligi (six months) uchun 'for' qo'llaniladi."
    },
    {
      "question": "She has been working on this environmental research project _______ last autumn.",
      "options": [
        "since",
        "for",
        "ago",
        "from"
      ],
      "correctAnswer": "since",
      "explanation": "Boshlang'ich vaqt (last autumn) bilan 'since' to'g'ri."
    },
    {
      "question": "The conference commenced twenty minutes _______.",
      "options": [
        "ago",
        "for",
        "since",
        "before"
      ],
      "correctAnswer": "ago",
      "explanation": "Past Simple fe'li ('commenced') bilan 'twenty minutes ago' keladi."
    },
    {
      "question": "I have not seen my foreign language tutor _______ nearly two weeks.",
      "options": [
        "for",
        "since",
        "ago",
        "during"
      ],
      "correctAnswer": "for",
      "explanation": "Davomiylik (nearly two weeks) uchun 'for' ishlatiladi."
    },
    {
      "question": "Many historical traditions have remained unchanged _______ centuries.",
      "options": [
        "for",
        "since",
        "ago",
        "from"
      ],
      "correctAnswer": "for",
      "explanation": "Asrlar davomida: 'for centuries'."
    },
    {
      "question": "The technological landscape has shifted dramatically _______ the introduction of smartphones.",
      "options": [
        "since",
        "for",
        "ago",
        "during"
      ],
      "correctAnswer": "since",
      "explanation": "Voqea boshlangan paytdan beri: 'since the introduction of smartphones'."
    },
    {
      "question": "They moved to their new residential apartment two months _______.",
      "options": [
        "ago",
        "since",
        "for",
        "before"
      ],
      "correctAnswer": "ago",
      "explanation": "Past Simple ('moved') bilan 'two months ago' to'g'ri."
    },
    {
      "question": "She has studied German _______ five consecutive years at the academy.",
      "options": [
        "for",
        "since",
        "ago",
        "during"
      ],
      "correctAnswer": "for",
      "explanation": "Vaqt uzunligi: 'for five consecutive years'."
    },
    {
      "question": "Global internet traffic has expanded exponentially _______ 2010.",
      "options": [
        "since",
        "for",
        "ago",
        "from"
      ],
      "correctAnswer": "since",
      "explanation": "Yil ko'rsatkichi (2010) boshlanish nuqtasi bo'lgani sababli 'since' ishlatiladi."
    }
  ],
  "murphy_u20_present_perfect_vs_past_simple": [
    {
      "question": "In 2015, the international community _______ the sustainable development goals.",
      "options": [
        "adopted",
        "has adopted",
        "adopting",
        "had adopted"
      ],
      "correctAnswer": "adopted",
      "explanation": "'In 2015' tugallangan aniq o'tgan vaqt bo'lgani uchun faqat Past Simple ('adopted') ishlatiladi."
    },
    {
      "question": "I _______ three comprehensive mock tests this week, and I plan to do one more tomorrow.",
      "options": [
        "have taken",
        "took",
        "was taking",
        "take"
      ],
      "correctAnswer": "have taken",
      "explanation": "'This week' hali tugallanmagan vaqt davri, shuning uchun Present Perfect ('have taken') to'g'ri."
    },
    {
      "question": "Shakespeare _______ numerous celebrated plays and sonnets during his lifetime.",
      "options": [
        "wrote",
        "has written",
        "writes",
        "was writing"
      ],
      "correctAnswer": "wrote",
      "explanation": "Shekspir hayoti tugagan tarixiy davr bo'lgani sababli faqat Past Simple ('wrote') ishlatiladi."
    },
    {
      "question": "Look at the certificate! Farhod _______ Band 8.0 on his official IELTS test!",
      "options": [
        "has achieved",
        "achieved",
        "achieves",
        "had achieved"
      ],
      "correctAnswer": "has achieved",
      "explanation": "Natijasi ayni daqiqada nishonlanayotgan yangi xabar uchun Present Perfect ('has achieved') to'g'ri."
    },
    {
      "question": "Did you _______ the news broadcast yesterday evening?",
      "options": [
        "watch",
        "watched",
        "have watched",
        "watching"
      ],
      "correctAnswer": "watch",
      "explanation": "'Did you...' so'rog'ida fe'l asosi V1 ('watch') shaklida keladi."
    },
    {
      "question": "The company _______ its quarterly revenue report yesterday afternoon.",
      "options": [
        "released",
        "has released",
        "releases",
        "was released"
      ],
      "correctAnswer": "released",
      "explanation": "'Yesterday afternoon' aniq o'tgan vaqt, Past Simple ('released') talab qilinadi."
    },
    {
      "question": "So far today, our customer service team _______ over one hundred inquiries.",
      "options": [
        "has answered",
        "answered",
        "was answering",
        "answers"
      ],
      "correctAnswer": "has answered",
      "explanation": "'So far today' (bugun shu paytgacha) davom etayotgan vaqt bo'lib, Present Perfect olinadi."
    },
    {
      "question": "When _______ you first begin preparing for the IELTS exam?",
      "options": [
        "did",
        "have",
        "do",
        "were"
      ],
      "correctAnswer": "did",
      "explanation": "'When...?' so'rog'i bilan odatda o'tgan paytni so'rashda Past Simple ('did') ishlatiladi."
    },
    {
      "question": "I _______ to France twice in my life, and I hope to go again next year.",
      "options": [
        "have been",
        "went",
        "was",
        "have gone"
      ],
      "correctAnswer": "have been",
      "explanation": "Hayotiy tajriba: 'I have been to France twice'."
    },
    {
      "question": "Last night, the power supply _______ for approximately forty-five minutes.",
      "options": [
        "failed",
        "has failed",
        "was failing",
        "fails"
      ],
      "correctAnswer": "failed",
      "explanation": "'Last night' tugallangan vaqt, to'g'ri shakl Past Simple ('failed')."
    }
  ],
  "murphy_u31_can_could": [
    {
      "question": "Excuse me, _______ you speak a little louder, please? I cannot hear you clearly.",
      "options": [
        "could",
        "should",
        "must",
        "might"
      ],
      "correctAnswer": "could",
      "explanation": "Xushmuomala iltimoslarda 'Could you please...?' eng mos keladi."
    },
    {
      "question": "When she was only seven years old, she _______ already play the piano brilliantly.",
      "options": [
        "could",
        "can",
        "should",
        "might"
      ],
      "correctAnswer": "could",
      "explanation": "O'tmishdagi umumiy qobiliyat uchun 'could' ishlatiladi."
    },
    {
      "question": "I am afraid I _______ attend the seminar tomorrow due to a prior commitment.",
      "options": [
        "cannot",
        "could not",
        "must not",
        "should not"
      ],
      "correctAnswer": "cannot",
      "explanation": "Kelgusi yoki hozirgi imkonsizlik uchun 'cannot' (can't) ishlatiladi."
    },
    {
      "question": "_______ you help me carry these heavy dictionaries to the reading room?",
      "options": [
        "Can",
        "May",
        "Should",
        "Shall"
      ],
      "correctAnswer": "Can",
      "explanation": "Do'stona iltimos va yordam so'rashda 'Can you help me...?' qo'llaniladi."
    },
    {
      "question": "Despite the severe storm, the experienced pilot _______ land the aircraft safely.",
      "options": [
        "was able to",
        "could",
        "can",
        "should"
      ],
      "correctAnswer": "was able to",
      "explanation": "Qiyin vaziyatda bitta aniq muvaffaqiyatga erishishda 'was able to' ishlatiladi."
    },
    {
      "question": "_______ I borrow your bilingual dictionary for just a moment?",
      "options": [
        "Could",
        "Must",
        "Should",
        "Would"
      ],
      "correctAnswer": "Could",
      "explanation": "Ruxsat so'rashda 'Could I borrow...?' muloyim va to'g'ri shakl."
    },
    {
      "question": "He _______ swim across the river easily when he was a teenager.",
      "options": [
        "could",
        "can",
        "should",
        "might"
      ],
      "correctAnswer": "could",
      "explanation": "O'tmishdagi jismoniy qobiliyat: 'could swim'."
    },
    {
      "question": "You _______ see the historic minarets from the hotel balcony on a clear day.",
      "options": [
        "can",
        "should",
        "must",
        "might"
      ],
      "correctAnswer": "can",
      "explanation": "Hozirgi imkoniyatni ifodalashda 'can' ishlatiladi."
    },
    {
      "question": "We looked everywhere for the keys, but we _______ find them anywhere.",
      "options": [
        "couldn't",
        "can't",
        "shouldn't",
        "mustn't"
      ],
      "correctAnswer": "couldn't",
      "explanation": "O'tmishda qila olmaslik: 'we couldn't find them'."
    },
    {
      "question": "_______ you hear that strange knocking sound coming from the corridor?",
      "options": [
        "Can",
        "Do",
        "Are",
        "Have"
      ],
      "correctAnswer": "Can",
      "explanation": "Sezgi a'zolari (hear, see, smell) bilan 'Can you hear...?' qo'llaniladi."
    }
  ],
  "murphy_u33_should": [
    {
      "question": "You look completely exhausted; I really think you _______ take a short break.",
      "options": [
        "should",
        "must",
        "could",
        "would"
      ],
      "correctAnswer": "should",
      "explanation": "Maslahat va tavsiya berishda 'should' modal fe'li ishlatiladi."
    },
    {
      "question": "Candidates _______ not look at other students' papers during the examination.",
      "options": [
        "should",
        "would",
        "could",
        "need"
      ],
      "correctAnswer": "should",
      "explanation": "Nomaqbul harakatdan qaytarish va tavsiya: 'should not'."
    },
    {
      "question": "What do you think I _______ wear to the formal academic interview?",
      "options": [
        "should",
        "must",
        "can",
        "would"
      ],
      "correctAnswer": "should",
      "explanation": "Maslahat so'rashda 'What do you think I should wear...?' qo'llanadi."
    },
    {
      "question": "The government _______ invest more resources into renewable energy infrastructure.",
      "options": [
        "should",
        "would",
        "might",
        "can"
      ],
      "correctAnswer": "should",
      "explanation": "Fikr va ijtimoiy burch tavsiyasi uchun 'should invest' ishlatiladi."
    },
    {
      "question": "You _______ eat so many sugary snacks before going to sleep.",
      "options": [
        "shouldn't",
        "mustn't",
        "couldn't",
        "needn't"
      ],
      "correctAnswer": "shouldn't",
      "explanation": "Salbiy maslahat uchun 'shouldn't' eng mos keladi."
    },
    {
      "question": "If you want to achieve Band 8 in Writing, you _______ master complex sentence structures.",
      "options": [
        "should",
        "might",
        "could",
        "would"
      ],
      "correctAnswer": "should",
      "explanation": "Muvaffaqiyatga erishish uchun tavsiya: 'you should master'."
    },
    {
      "question": "I don't think young children _______ spend hours on social media every day.",
      "options": [
        "should",
        "must",
        "might",
        "would"
      ],
      "correctAnswer": "should",
      "explanation": "'I don't think... should' konstruksiyasi ingliz tilida odobli tavsiya hisoblanadi."
    },
    {
      "question": "Where _______ we submit our final research papers by tomorrow noon?",
      "options": [
        "should",
        "must",
        "can",
        "will"
      ],
      "correctAnswer": "should",
      "explanation": "Ko'rsatma va tavsiya so'rash: 'Where should we submit...?'."
    },
    {
      "question": "The train leaves in ten minutes; we _______ probably head towards the platform now.",
      "options": [
        "should",
        "might",
        "must",
        "can"
      ],
      "correctAnswer": "should",
      "explanation": "Mantiqiy harakat tavsiyasi: 'we should probably head'."
    },
    {
      "question": "You _______ apologize to your colleague for the misunderstanding.",
      "options": [
        "should",
        "must",
        "might",
        "would"
      ],
      "correctAnswer": "should",
      "explanation": "Axloqiy tavsiya: 'You should apologize'."
    }
  ],
  "murphy_u34_have_to": [
    {
      "question": "In the UK, all drivers _______ drive on the left side of the road.",
      "options": [
        "have to",
        "has to",
        "should to",
        "must to"
      ],
      "correctAnswer": "have to",
      "explanation": "Qonun va tashqi qoidalar talabi bo'yicha 'have to' ishlatiladi."
    },
    {
      "question": "She _______ wake up at 5:30 AM every weekday to catch the intercity bus.",
      "options": [
        "has to",
        "have to",
        "must to",
        "should to"
      ],
      "correctAnswer": "has to",
      "explanation": "Uchinchi shaxs birlik (She) bilan 'has to' qo'llaniladi."
    },
    {
      "question": "Tomorrow is an official national holiday, so we _______ go to work.",
      "options": [
        "don't have to",
        "mustn't",
        "haven't to",
        "shouldn't to"
      ],
      "correctAnswer": "don't have to",
      "explanation": "Majburiyat yo'qligi (dam olish kuni) 'don't have to' orqali ifodalanadi."
    },
    {
      "question": "Did you _______ pay an additional fee for your express passport renewal?",
      "options": [
        "have to",
        "has to",
        "had to",
        "must"
      ],
      "correctAnswer": "have to",
      "explanation": "'Did you...' so'rog'idan so'ng asosiy shakl 'have to' keladi."
    },
    {
      "question": "All international passengers _______ show their passports at border control.",
      "options": [
        "have to",
        "has to",
        "must to",
        "having to"
      ],
      "correctAnswer": "have to",
      "explanation": "'Passengers' ko'plik ot, rasmiy majburiyat 'have to' bo'ladi."
    },
    {
      "question": "He _______ wear formal business attire at his law firm every day.",
      "options": [
        "has to",
        "have to",
        "must to",
        "should to"
      ],
      "correctAnswer": "has to",
      "explanation": "'He' bilan 'has to' ishlatiladi."
    },
    {
      "question": "You _______ finish this entire test right now; you can resume it later.",
      "options": [
        "don't have to",
        "mustn't",
        "haven't to",
        "shouldn't to"
      ],
      "correctAnswer": "don't have to",
      "explanation": "Majburiyat yo'q: 'You don't have to finish right now'."
    },
    {
      "question": "Why did she _______ leave the lecture so early yesterday?",
      "options": [
        "have to",
        "has to",
        "had to",
        "must"
      ],
      "correctAnswer": "have to",
      "explanation": "'Why did she have to leave...?' o'tgan zamon majburiyat so'rog'i."
    },
    {
      "question": "To qualify for the doctoral scholarship, applicants _______ maintain a high GPA.",
      "options": [
        "have to",
        "has to",
        "must to",
        "having to"
      ],
      "correctAnswer": "have to",
      "explanation": "'Applicants' ko'plik ot: 'have to maintain'."
    },
    {
      "question": "Do we _______ bring our own stationery to the examination hall?",
      "options": [
        "have to",
        "has to",
        "must",
        "should to"
      ],
      "correctAnswer": "have to",
      "explanation": "'Do we have to bring...?' so'roq shakli."
    }
  ],
  "murphy_u35_would_like": [
    {
      "question": "What _______ to order for your main course, sir?",
      "options": [
        "would you like",
        "do you like",
        "will you like",
        "are you liking"
      ],
      "correctAnswer": "would you like",
      "explanation": "Xushmuomala taklif va buyurtma so'rashda 'What would you like...?' ishlatiladi."
    },
    {
      "question": "'Would you like a cup of green tea?' — 'Yes, _______.'",
      "options": [
        "I'd love one, please",
        "I like it",
        "I am liking",
        "I do like"
      ],
      "correctAnswer": "I'd love one, please",
      "explanation": "Taklifga eng odobli ijobiy javob: 'Yes, I'd love one, please'."
    },
    {
      "question": "I _______ to speak with the head of the admissions department, please.",
      "options": [
        "would like",
        "like",
        "am liking",
        "will like"
      ],
      "correctAnswer": "would like",
      "explanation": "Rasmiy va xushmuomala istakni bildirishda 'I would like to...' ishlatiladi."
    },
    {
      "question": "_______ you like to accompany us to the British Council library this afternoon?",
      "options": [
        "Would",
        "Do",
        "Are",
        "Will"
      ],
      "correctAnswer": "Would",
      "explanation": "Taklif bildirishda 'Would you like to...?' qo'llanadi."
    },
    {
      "question": "She _______ to improve her speaking pronunciation before the interview next week.",
      "options": [
        "would like",
        "likes",
        "is liking",
        "will like"
      ],
      "correctAnswer": "would like",
      "explanation": "Aniq bir maqsadli istak: 'She would like to improve'."
    },
    {
      "question": "'Do you like classical music?' — 'Yes, I _______.'",
      "options": [
        "do",
        "would",
        "am",
        "like"
      ],
      "correctAnswer": "do",
      "explanation": "Umumiy yoqtirish haqidagi 'Do you like...?' savoliga 'Yes, I do' deb javob beriladi."
    },
    {
      "question": "Where _______ to sit? Near the window or by the door?",
      "options": [
        "would you like",
        "do you like",
        "will you like",
        "are you like"
      ],
      "correctAnswer": "would you like",
      "explanation": "Xushmuomala tanlov taklifi: 'Where would you like to sit?'."
    },
    {
      "question": "We _______ to thank all the participants for attending our research seminar.",
      "options": [
        "would like",
        "like",
        "are liking",
        "will like"
      ],
      "correctAnswer": "would like",
      "explanation": "Rasmiy minnatdorchilikda 'We would like to thank...' aytiladi."
    },
    {
      "question": "I'd _______ to know more about the IELTS computer-delivered format.",
      "options": [
        "like",
        "likes",
        "liking",
        "to like"
      ],
      "correctAnswer": "like",
      "explanation": "'I'd' (I would) dan keyin fe'l asosi 'like' keladi."
    },
    {
      "question": "_______ they like some refreshments while waiting for the results?",
      "options": [
        "Would",
        "Do",
        "Are",
        "Will"
      ],
      "correctAnswer": "Would",
      "explanation": "Odobli taklif: 'Would they like some refreshments?'."
    }
  ],
  "murphy_u58_pronouns": [
    {
      "question": "My colleague and _______ prepared the statistical slides together.",
      "options": [
        "I",
        "me",
        "myself",
        "mine"
      ],
      "correctAnswer": "I",
      "explanation": "Gapning egasi (Subject) vazifasida kishilik olmoshi 'I' ishlatiladi ('My colleague and I')."
    },
    {
      "question": "The examiner asked _______ to explain the historical context in Part 3.",
      "options": [
        "me",
        "I",
        "mine",
        "myself"
      ],
      "correctAnswer": "me",
      "explanation": "Fe'ldan keyin to'ldiruvchi (Object) vazifasida 'me' ishlatiladi."
    },
    {
      "question": "Between you and _______, I found the reading test rather straightforward.",
      "options": [
        "me",
        "I",
        "my",
        "mine"
      ],
      "correctAnswer": "me",
      "explanation": "Predloglardan (between) keyin doimo to'ldiruvchi olmosh 'me' keladi."
    },
    {
      "question": "We saw _______ waiting at the university bus terminal yesterday afternoon.",
      "options": [
        "them",
        "they",
        "their",
        "theirs"
      ],
      "correctAnswer": "them",
      "explanation": "To'ldiruvchi olmosh: 'We saw them'."
    },
    {
      "question": "She gave _______ a valuable tip for the IELTS Listening section.",
      "options": [
        "us",
        "we",
        "our",
        "ours"
      ],
      "correctAnswer": "us",
      "explanation": "Fe'l to'ldiruvchisi: 'gave us'."
    },
    {
      "question": "_______ is very keen on studying artificial intelligence in Germany.",
      "options": [
        "He",
        "Him",
        "His",
        "Himself"
      ],
      "correctAnswer": "He",
      "explanation": "Gapning egasi: 'He is very keen'."
    },
    {
      "question": "Can you pass _______ those research papers on the desk?",
      "options": [
        "him",
        "he",
        "his",
        "himself"
      ],
      "correctAnswer": "him",
      "explanation": "To'ldiruvchi: 'pass him those papers'."
    },
    {
      "question": "The professor invited _______ to participate in the international forum.",
      "options": [
        "her",
        "she",
        "hers",
        "herself"
      ],
      "correctAnswer": "her",
      "explanation": "To'ldiruvchi olmosh: 'invited her'."
    },
    {
      "question": "Nobody knows the final outcome better than _______.",
      "options": [
        "her",
        "she",
        "hers",
        "herself"
      ],
      "correctAnswer": "her",
      "explanation": "Taqqoslashda 'than' dan keyin ob'ekt olmoshi 'her' ishlatiladi."
    },
    {
      "question": "_______ arrived early to ensure they could secure good seats.",
      "options": [
        "They",
        "Them",
        "Their",
        "Theirs"
      ],
      "correctAnswer": "They",
      "explanation": "Ega vazifasida: 'They arrived early'."
    }
  ],
  "murphy_u59_possessives": [
    {
      "question": "This is not my dictionary; it must be _______.",
      "options": [
        "hers",
        "her",
        "she",
        "herself"
      ],
      "correctAnswer": "hers",
      "explanation": "Otdan keyin keluvchi mustaqil egalik olmoshi 'hers' (uning kitobi) bo'ladi."
    },
    {
      "question": "Is this laptop _______ or does it belong to the faculty center?",
      "options": [
        "yours",
        "your",
        "you",
        "yourself"
      ],
      "correctAnswer": "yours",
      "explanation": "Ot siz keluvchi egalik olmoshi 'yours' dir."
    },
    {
      "question": "The students submitted _______ essays before the digital platform closed.",
      "options": [
        "their",
        "theirs",
        "they",
        "them"
      ],
      "correctAnswer": "their",
      "explanation": "Ot oldidan keluvchi egalik sifati 'their' (ularning insholari) bo'ladi."
    },
    {
      "question": "Our research project succeeded, while _______ encountered unexpected funding delays.",
      "options": [
        "theirs",
        "their",
        "them",
        "they"
      ],
      "correctAnswer": "theirs",
      "explanation": "'Theirs' (= their project) mustaqil egalik olmoshidir."
    },
    {
      "question": "She forgot _______ notebook in the language laboratory yesterday.",
      "options": [
        "her",
        "hers",
        "she",
        "herself"
      ],
      "correctAnswer": "her",
      "explanation": "Ot ('notebook') oldidan 'her' keladi."
    },
    {
      "question": "My score was Band 7.0, but what was _______?",
      "options": [
        "yours",
        "your",
        "you",
        "yourself"
      ],
      "correctAnswer": "yours",
      "explanation": "'Yours' (= your score) o'rnida mustaqil keladi."
    },
    {
      "question": "The cat licked _______ paw after finishing its meal.",
      "options": [
        "its",
        "it's",
        "its'",
        "it"
      ],
      "correctAnswer": "its",
      "explanation": "Hayvon yoki narsa egaligi 'its' bo'ladi ('it's' bu it is qisqartmasi)."
    },
    {
      "question": "Whose pencil is this on the table? — It's _______.",
      "options": [
        "mine",
        "my",
        "me",
        "myself"
      ],
      "correctAnswer": "mine",
      "explanation": "'Whose...?' so'rog'iga mustaqil javob 'It's mine' bo'ladi."
    },
    {
      "question": "We parked _______ vehicle in the underground university garage.",
      "options": [
        "our",
        "ours",
        "us",
        "we"
      ],
      "correctAnswer": "our",
      "explanation": "Ot oldidan 'our vehicle' keladi."
    },
    {
      "question": "His presentation was compelling, whereas _______ lacked empirical evidence.",
      "options": [
        "mine",
        "my",
        "me",
        "I"
      ],
      "correctAnswer": "mine",
      "explanation": "'Mine' (= my presentation) gapning egasi vazifasida kelgan."
    }
  ],
  "murphy_u64_a_an_the": [
    {
      "question": "She has been working as _______ university lecturer for over a decade.",
      "options": [
        "a",
        "an",
        "the",
        "—"
      ],
      "correctAnswer": "a",
      "explanation": "'University' so'zi undosh tovush /j/ bilan boshlangani sababli 'a' artikli olinadi."
    },
    {
      "question": "_______ information provided in this academic report is highly reliable.",
      "options": [
        "The",
        "A",
        "An",
        "—"
      ],
      "correctAnswer": "The",
      "explanation": "Muayyan, aniq hisobotdagi ma'lumot ko'zda tutilgani uchun 'The information' to'g'ri."
    },
    {
      "question": "It takes _______ hour to complete the IELTS Reading section.",
      "options": [
        "an",
        "a",
        "the",
        "—"
      ],
      "correctAnswer": "an",
      "explanation": "'Hour' so'zidagi 'h' o'qilmaydi va unli tovush /aʊ/ bilan boshlanadi: 'an hour'."
    },
    {
      "question": "_______ honesty is universally regarded as a vital character trait.",
      "options": [
        "—",
        "The",
        "A",
        "An"
      ],
      "correctAnswer": "—",
      "explanation": "Abstrakt tushunchalar (honesty) umumiy ma'noda artiklsiz ishlatiladi."
    },
    {
      "question": "Look at _______ moon tonight; it looks extraordinarily bright and clear.",
      "options": [
        "the",
        "a",
        "an",
        "—"
      ],
      "correctAnswer": "the",
      "explanation": "Yagona tabiat ob'ektlari (the moon, the sun, the sky) bilan 'the' ishlatiladi."
    },
    {
      "question": "She bought _______ new computer yesterday. _______ computer works exceptionally fast.",
      "options": [
        "a / The",
        "the / A",
        "a / A",
        "the / The"
      ],
      "correctAnswer": "a / The",
      "explanation": "Birinchi marta tilga olinganda 'a', ikkinchi marta aniq bo'lganda 'the' ishlatiladi."
    },
    {
      "question": "He plays _______ guitar with impressive technical skill.",
      "options": [
        "the",
        "a",
        "an",
        "—"
      ],
      "correctAnswer": "the",
      "explanation": "Musiqa asboblarini chalishda 'play the guitar / the piano' ishlatiladi."
    },
    {
      "question": "_______ Mount Everest is the highest peak above sea level.",
      "options": [
        "—",
        "The",
        "A",
        "An"
      ],
      "correctAnswer": "—",
      "explanation": "Alohida tog' cho'qqilari (Mount Everest) oldidan artikl qo'yilmaydi."
    },
    {
      "question": "_______ United Kingdom consists of four distinct constituent countries.",
      "options": [
        "The",
        "A",
        "An",
        "—"
      ],
      "correctAnswer": "The",
      "explanation": "'Kingdom', 'States', 'Republic' so'zlari bor davlat nomlari 'The' oladi."
    },
    {
      "question": "Breakfast is _______ most important meal of the day for maintaining energy.",
      "options": [
        "the",
        "a",
        "an",
        "—"
      ],
      "correctAnswer": "the",
      "explanation": "Orttirma sifatlar (the most important) oldidan 'the' qo'yiladi."
    }
  ],
  "murphy_u73_this_that_these_those": [
    {
      "question": "Look at _______ birds soaring high up in the distant sky!",
      "options": [
        "those",
        "these",
        "this",
        "that"
      ],
      "correctAnswer": "those",
      "explanation": "Uzoqdagi ko'plik ob'ektlar uchun 'those' ko'rsatish olmoshi ishlatiladi."
    },
    {
      "question": "_______ book here in my hand contains all essential IELTS grammar rules.",
      "options": [
        "This",
        "That",
        "These",
        "Those"
      ],
      "correctAnswer": "This",
      "explanation": "Yaqindagi birlik narsa uchun 'This' ishlatiladi."
    },
    {
      "question": "Who was _______ scholar standing near the door at the start of the lecture?",
      "options": [
        "that",
        "this",
        "those",
        "these"
      ],
      "correctAnswer": "that",
      "explanation": "Uzoqdagi yoki o'tib ketgan paytdagi birlik shaxs uchun 'that' to'g'ri."
    },
    {
      "question": "_______ academic essays I am currently evaluating show remarkable critical depth.",
      "options": [
        "These",
        "This",
        "Those",
        "That"
      ],
      "correctAnswer": "These",
      "explanation": "Ayni paytda qo'lda turgan ko'plik insholar uchun 'These essays' bo'ladi."
    },
    {
      "question": "'Hello, _______ is Farhod speaking. May I speak to Dr. Simmons?'",
      "options": [
        "this",
        "that",
        "it",
        "he"
      ],
      "correctAnswer": "this",
      "explanation": "Telefon suhbatida o'zini tanishtirishda 'This is [ism] speaking' aytiladi."
    },
    {
      "question": "Do you remember _______ wonderful summer days we spent in London?",
      "options": [
        "those",
        "these",
        "that",
        "this"
      ],
      "correctAnswer": "those",
      "explanation": "O'tmishdagi xotiralar va kunlar uchun 'those days' ishlatiladi."
    },
    {
      "question": "Which shoes do you prefer? _______ ones here or the brown pair on the shelf?",
      "options": [
        "These",
        "Those",
        "This",
        "That"
      ],
      "correctAnswer": "These",
      "explanation": "'Here' (bu yerda) bilan yaqindagi ko'plik 'These ones' to'g'ri."
    },
    {
      "question": "_______ is why regular practice is critical for IELTS candidates.",
      "options": [
        "That",
        "Those",
        "These",
        "They"
      ],
      "correctAnswer": "That",
      "explanation": "Yuqorida aytilgan fikrga havola qilishda 'That is why...' konstruksiyasi qo'llaniladi."
    },
    {
      "question": "Are _______ your lecture notes left on the podium?",
      "options": [
        "those",
        "that",
        "this",
        "them"
      ],
      "correctAnswer": "those",
      "explanation": "Uzoqdagi ko'plik narsalar haqida 'Are those your notes...?' bo'ladi."
    },
    {
      "question": "I don't particularly enjoy _______ type of argumentative writing.",
      "options": [
        "this",
        "these",
        "those",
        "them"
      ],
      "correctAnswer": "this",
      "explanation": "'Type' birlik ot bilan 'this type' ishlatiladi."
    }
  ],
  "murphy_u86_comparatives": [
    {
      "question": "Renewable energy is becoming considerably _______ than fossil fuels in many nations.",
      "options": [
        "cheaper",
        "more cheap",
        "more cheaper",
        "cheapest"
      ],
      "correctAnswer": "cheaper",
      "explanation": "Bir bo'g'inli sifatlar (cheap) qiyosiy darajada '-er' oladi: 'cheaper than'."
    },
    {
      "question": "Writing Task 2 is generally considered _______ than Writing Task 1.",
      "options": [
        "more demanding",
        "demanding",
        "most demanding",
        "more demand"
      ],
      "correctAnswer": "more demanding",
      "explanation": "Ko'p bo'g'inli sifatlar 'more + adjective' shaklida qiyoslanadi: 'more demanding than'."
    },
    {
      "question": "My speaking fluency is much _______ now than it was two months ago.",
      "options": [
        "better",
        "gooder",
        "more good",
        "best"
      ],
      "correctAnswer": "better",
      "explanation": "'Good' sifatining qiyosiy darajasi 'better' dir."
    },
    {
      "question": "Public transport in this city is _______ and more reliable than driving a private car.",
      "options": [
        "faster",
        "more fast",
        "fastest",
        "fastly"
      ],
      "correctAnswer": "faster",
      "explanation": "'Fast' sifatiga '-er' qo'shiladi: 'faster'."
    },
    {
      "question": "The second section of the exam was _______ than the initial diagnostic test.",
      "options": [
        "far more difficult",
        "far difficult",
        "more difficulter",
        "most difficult"
      ],
      "correctAnswer": "far more difficult",
      "explanation": "Qiyosiy darajani kuchaytirish uchun 'far more difficult' (ancha qiyinroq) ishlatiladi."
    },
    {
      "question": "Air pollution levels are significantly _______ in urban centers than in rural areas.",
      "options": [
        "worse",
        "badder",
        "more bad",
        "worst"
      ],
      "correctAnswer": "worse",
      "explanation": "'Bad' sifatining qiyosiy darajasi 'worse' hisoblanadi."
    },
    {
      "question": "The newly built campus is slightly _______ from the city center than the old one.",
      "options": [
        "further",
        "more far",
        "farthest",
        "fartherer"
      ],
      "correctAnswer": "further",
      "explanation": "'Far' sifatining qiyosiy darajasi 'further' yoki 'farther' bo'ladi."
    },
    {
      "question": "Candidates who prepare systematically achieve _______ band scores.",
      "options": [
        "higher",
        "more high",
        "highest",
        "more higher"
      ],
      "correctAnswer": "higher",
      "explanation": "'High' sifatiga '-er' qo'shiladi: 'higher'."
    },
    {
      "question": "This analytical software is _______ to navigate than the previous version.",
      "options": [
        "easier",
        "more easy",
        "easiest",
        "more easier"
      ],
      "correctAnswer": "easier",
      "explanation": "'-y' bilan tugagan ikki bo'g'inli sifatlar '-ier' oladi: 'easier'."
    },
    {
      "question": "Life in metropolitan capitals is undeniably _______ than life in quiet hamlets.",
      "options": [
        "more stressful",
        "stressfuler",
        "most stressful",
        "stressfuller"
      ],
      "correctAnswer": "more stressful",
      "explanation": "'Stressful' ko'p bo'g'inli sifat: 'more stressful'."
    }
  ],
  "murphy_u89_superlatives": [
    {
      "question": "Mount Everest is _______ mountain peak in the world.",
      "options": [
        "the highest",
        "highest",
        "the higher",
        "most high"
      ],
      "correctAnswer": "the highest",
      "explanation": "Orttirma daraja doim 'the' artikli va '-est' bilan yasaladi: 'the highest'."
    },
    {
      "question": "This is _______ comprehensive IELTS preparation suite available online.",
      "options": [
        "the most",
        "most",
        "the more",
        "more"
      ],
      "correctAnswer": "the most",
      "explanation": "Ko'p bo'g'inli sifatlar orttirma darajada 'the most' oladi."
    },
    {
      "question": "That was _______ mock examination score I have ever received.",
      "options": [
        "the worst",
        "the baddest",
        "worst",
        "baddest"
      ],
      "correctAnswer": "the worst",
      "explanation": "'Bad' sifatining orttirma darajasi 'the worst' bo'ladi."
    },
    {
      "question": "Who was _______ influential philosopher of the Enlightenment period?",
      "options": [
        "the most",
        "most",
        "the more",
        "the much"
      ],
      "correctAnswer": "the most",
      "explanation": "'Influential' so'zi oldidan 'the most' qo'yiladi."
    },
    {
      "question": "January is typically _______ month of the year in Central Asia.",
      "options": [
        "the coldest",
        "coldest",
        "the colder",
        "most cold"
      ],
      "correctAnswer": "the coldest",
      "explanation": "Bir bo'g'inli sifat (cold) orttirma darajada 'the coldest' bo'ladi."
    },
    {
      "question": "What is _______ efficient route to the international airport during peak hours?",
      "options": [
        "the most",
        "most",
        "the more",
        "more"
      ],
      "correctAnswer": "the most",
      "explanation": "'Efficient' ko'p bo'g'inli sifat: 'the most efficient'."
    },
    {
      "question": "She achieved _______ score in the entire cohort on the Academic Reading test.",
      "options": [
        "the best",
        "the goodest",
        "best",
        "the better"
      ],
      "correctAnswer": "the best",
      "explanation": "'Good' sifatining orttirma shakli 'the best' dir."
    },
    {
      "question": "The Pacific Ocean is _______ ocean on our planet.",
      "options": [
        "the deepest",
        "deepest",
        "the deeper",
        "most deep"
      ],
      "correctAnswer": "the deepest",
      "explanation": "'Deep' sifatiga '-est' qo'shiladi: 'the deepest'."
    },
    {
      "question": "This is by far _______ challenging essay prompt I have encountered.",
      "options": [
        "the most",
        "most",
        "the more",
        "more"
      ],
      "correctAnswer": "the most",
      "explanation": "'By far the most challenging' nufuzli orttirma konstruksiyadir."
    },
    {
      "question": "Tashkent is _______ populated metropolis in Uzbekistan.",
      "options": [
        "the most",
        "most",
        "the more",
        "more"
      ],
      "correctAnswer": "the most",
      "explanation": "Aholisi eng ko'p: 'the most populated'."
    }
  ],
  "murphy_u96_prepositions_time": [
    {
      "question": "The IELTS examination will commence promptly _______ 9:00 AM.",
      "options": [
        "at",
        "on",
        "in",
        "by"
      ],
      "correctAnswer": "at",
      "explanation": "Aniq soat vaqtlari (9:00 AM) bilan 'at' predlogi ishlatiladi."
    },
    {
      "question": "Our final university assessment takes place _______ Monday morning.",
      "options": [
        "on",
        "in",
        "at",
        "during"
      ],
      "correctAnswer": "on",
      "explanation": "Hafta kunlari (Monday) bilan 'on' predlogi qo'yiladi."
    },
    {
      "question": "The university was officially founded _______ 1992.",
      "options": [
        "in",
        "on",
        "at",
        "since"
      ],
      "correctAnswer": "in",
      "explanation": "Yillar (1992) bilan 'in' predlogi ishlatiladi."
    },
    {
      "question": "I prefer reviewing vocabulary flashcards _______ the evening when it is quiet.",
      "options": [
        "in",
        "at",
        "on",
        "by"
      ],
      "correctAnswer": "in",
      "explanation": "Kun qismlari: 'in the morning', 'in the afternoon', 'in the evening'."
    },
    {
      "question": "Many wild nocturnal animals hunt _______ night.",
      "options": [
        "at",
        "in",
        "on",
        "during"
      ],
      "correctAnswer": "at",
      "explanation": "'Night' so'zi bilan doim 'at night' birikmasi qo'llaniladi."
    },
    {
      "question": "The new academic term begins _______ the 15th of September.",
      "options": [
        "on",
        "in",
        "at",
        "by"
      ],
      "correctAnswer": "on",
      "explanation": "Aniq sana (the 15th of September) bilan 'on' ishlatiladi."
    },
    {
      "question": "What do you usually plan to do _______ the weekend?",
      "options": [
        "at",
        "in",
        "to",
        "with"
      ],
      "correctAnswer": "at",
      "explanation": "Britaniya ingliz tilida 'at the weekend' (Amerika tilida on the weekend) to'g'ri."
    },
    {
      "question": "The trees in the park look magnificent _______ autumn.",
      "options": [
        "in",
        "at",
        "on",
        "by"
      ],
      "correctAnswer": "in",
      "explanation": "Yil fasllari (autumn, winter, spring, summer) oldidan 'in' keladi."
    },
    {
      "question": "We arrived at the station just _______ time to catch the departure.",
      "options": [
        "in",
        "at",
        "on",
        "by"
      ],
      "correctAnswer": "in",
      "explanation": "'In time' birikmasi kechikmay, o'z vaqtida ulgurish ma'nosini bildiradi."
    },
    {
      "question": "The train departed exactly _______ time, at 14:00 sharp.",
      "options": [
        "on",
        "in",
        "at",
        "by"
      ],
      "correctAnswer": "on",
      "explanation": "'On time' jadval bo'yicha daqiqama-daqiqa o'z vaqtida harakatlanishni bildiradi."
    }
  ],
  "murphy_u99_prepositions_place": [
    {
      "question": "Dr. Simmons is currently conducting experiments _______ the chemistry laboratory.",
      "options": [
        "in",
        "at",
        "on",
        "by"
      ],
      "correctAnswer": "in",
      "explanation": "Bino yoki xona ichida bo'lish uchun 'in the laboratory' ishlatiladi."
    },
    {
      "question": "I saw an informative notice posted _______ the announcement board.",
      "options": [
        "on",
        "in",
        "at",
        "to"
      ],
      "correctAnswer": "on",
      "explanation": "Sirt va devor yuzasi uchun 'on the board' predlogi qo'yiladi."
    },
    {
      "question": "We will meet you _______ the main entrance of the national library.",
      "options": [
        "at",
        "in",
        "on",
        "into"
      ],
      "correctAnswer": "at",
      "explanation": "Aniq uchrashuv nuqtasi (the entrance) uchun 'at' ishlatiladi."
    },
    {
      "question": "She lives _______ Paris, where she works for an international NGO.",
      "options": [
        "in",
        "at",
        "on",
        "by"
      ],
      "correctAnswer": "in",
      "explanation": "Shahar va mamlakat nomlari oldidan 'in' predlogi keladi."
    },
    {
      "question": "Turn left _______ the traffic lights and continue straight for two hundred meters.",
      "options": [
        "at",
        "on",
        "in",
        "to"
      ],
      "correctAnswer": "at",
      "explanation": "Yo'l ko'rsatish nuqtasi: 'at the traffic lights'."
    },
    {
      "question": "There is a cup of hot green tea _______ the dining table.",
      "options": [
        "on",
        "in",
        "at",
        "under"
      ],
      "correctAnswer": "on",
      "explanation": "Stol ustida: 'on the table'."
    },
    {
      "question": "Were there many international attendees _______ the conference?",
      "options": [
        "at",
        "on",
        "in",
        "to"
      ],
      "correctAnswer": "at",
      "explanation": "Tadbir va anjumanlar uchun 'at the conference' to'g'ri."
    },
    {
      "question": "He was sitting _______ an armchair by the warm fireplace.",
      "options": [
        "in",
        "on",
        "at",
        "into"
      ],
      "correctAnswer": "in",
      "explanation": "Yumshoq kresloga chuqur o'tirish: 'sit in an armchair'."
    },
    {
      "question": "You will find the summary table _______ the bottom of page twenty-four.",
      "options": [
        "at",
        "in",
        "on",
        "to"
      ],
      "correctAnswer": "at",
      "explanation": "Sahifa yoki ro'yxatning quyi qismi: 'at the bottom'."
    },
    {
      "question": "There were thousands of people celebrating _______ the streets.",
      "options": [
        "in",
        "at",
        "to",
        "by"
      ],
      "correctAnswer": "in",
      "explanation": "Ko'chada (hudud ichida) bo'lish: 'in the streets'."
    }
  ],
  "murphy_u109_conjunctions": [
    {
      "question": "She studied rigorously every single evening, _______ she achieved Band 8.5.",
      "options": [
        "so",
        "because",
        "but",
        "although"
      ],
      "correctAnswer": "so",
      "explanation": "Natijani ifodalash uchun 'so' (shuning uchun) bog'lovchisi ishlatiladi."
    },
    {
      "question": "He failed the diagnostic assessment _______ he had not prepared adequately.",
      "options": [
        "because",
        "so",
        "but",
        "although"
      ],
      "correctAnswer": "because",
      "explanation": "Sababni ifodalash uchun 'because' (chunki) qo'yiladi."
    },
    {
      "question": "The task was extraordinarily challenging, _______ she persevered and completed it.",
      "options": [
        "but",
        "so",
        "because",
        "or"
      ],
      "correctAnswer": "but",
      "explanation": "Qarama-qarshilikni ifodalashda 'but' (lekin) to'g'ri."
    },
    {
      "question": "You can take the computer-delivered exam _______ the traditional paper test.",
      "options": [
        "or",
        "so",
        "but",
        "because"
      ],
      "correctAnswer": "or",
      "explanation": "Ikkita variant o'rtasidagi tanlov uchun 'or' (yoki) ishlatiladi."
    },
    {
      "question": "_______ the weather was dreadful, they continued their archaeological survey.",
      "options": [
        "Although",
        "Because",
        "So",
        "However"
      ],
      "correctAnswer": "Although",
      "explanation": "Ergash gap boshida yon berish bog'lovchisi 'Although' (Garchi... bo'lsa-da) keladi."
    },
    {
      "question": "I would love to join your study group, _______ I have a prior lecture at that hour.",
      "options": [
        "but",
        "so",
        "because",
        "or"
      ],
      "correctAnswer": "but",
      "explanation": "Zidlik: 'I would love to..., but I have...'."
    },
    {
      "question": "Global urbanization is accelerating rapidly, _______ demand for clean energy is rising.",
      "options": [
        "and",
        "or",
        "because",
        "although"
      ],
      "correctAnswer": "and",
      "explanation": "Ikki parallel ijobiy fikrni qo'shish uchun 'and' qo'llaniladi."
    },
    {
      "question": "We cancelled the outdoor field trip _______ the meteorological office issued a storm warning.",
      "options": [
        "because",
        "so",
        "but",
        "or"
      ],
      "correctAnswer": "because",
      "explanation": "Bekor qilish sababi: 'because the office issued...'."
    },
    {
      "question": "Hurry up, _______ you will miss the morning registration deadline.",
      "options": [
        "or",
        "so",
        "and",
        "because"
      ],
      "correctAnswer": "or",
      "explanation": "Aks holda ma'nosida ogohlantirish: 'Hurry up, or you will miss...'."
    },
    {
      "question": "He didn't review his cue card notes, _______ he felt somewhat hesitant in Part 2.",
      "options": [
        "so",
        "because",
        "although",
        "while"
      ],
      "correctAnswer": "so",
      "explanation": "Sabab-oqibat natijasi: 'so he felt hesitant'."
    }
  ],
  "murphy_u21_passive_voice_1": [
    {
      "question": "Over five hundred million tonnes of plastics _______ worldwide each year.",
      "options": [
        "are manufactured",
        "manufacture",
        "is manufactured",
        "are manufacturing"
      ],
      "correctAnswer": "are manufactured",
      "explanation": "'Tonnes of plastics' ko'plik ot bo'lgani sababli hozirgi majhul nisbat 'are manufactured' bo'ladi."
    },
    {
      "question": "This historic university library _______ in the seventeenth century.",
      "options": [
        "was built",
        "built",
        "is built",
        "was building"
      ],
      "correctAnswer": "was built",
      "explanation": "O'tmishdagi majhul nisbat (17-asrda qurilgan) 'was built' bo'ladi."
    },
    {
      "question": "English _______ as an official language in more than fifty sovereign countries.",
      "options": [
        "is spoken",
        "speaks",
        "are spoken",
        "is speaking"
      ],
      "correctAnswer": "is spoken",
      "explanation": "'English' birlik tushuncha, 'is spoken' (gapiriladi) to'g'ri."
    },
    {
      "question": "The stolen museum artifacts _______ by customs officials at the border yesterday.",
      "options": [
        "were recovered",
        "recovered",
        "was recovered",
        "are recovered"
      ],
      "correctAnswer": "were recovered",
      "explanation": "'Artifacts' ko'plik ot, o'tgan zamon majhul nisbati 'were recovered'."
    },
    {
      "question": "How often _______ the laboratory computers updated with the latest software patches?",
      "options": [
        "are",
        "is",
        "do",
        "have"
      ],
      "correctAnswer": "are",
      "explanation": "'The computers' ko'plik, so'roqda 'How often are the computers updated...?' bo'ladi."
    },
    {
      "question": "The final examination papers _______ by senior examiners next week.",
      "options": [
        "will be evaluated",
        "will evaluate",
        "are evaluated",
        "were evaluated"
      ],
      "correctAnswer": "will be evaluated",
      "explanation": "Kelgusi majhul nisbat 'will be + V3' ('will be evaluated') orqali ifodalanadi."
    },
    {
      "question": "These traditional ceramic bowls _______ by hand using organic clay.",
      "options": [
        "are crafted",
        "craft",
        "is crafted",
        "are crafting"
      ],
      "correctAnswer": "are crafted",
      "explanation": "Ko'plik ot: 'are crafted by hand'."
    },
    {
      "question": "The candidate's score _______ because of an administrative error in the calculation.",
      "options": [
        "was adjusted",
        "adjusted",
        "is adjust",
        "were adjusted"
      ],
      "correctAnswer": "was adjusted",
      "explanation": "'The score' birlikda, o'tgan majhul nisbat 'was adjusted'."
    },
    {
      "question": "Millions of electronic emails _______ across the globe every single second.",
      "options": [
        "are sent",
        "send",
        "is sent",
        "are sending"
      ],
      "correctAnswer": "are sent",
      "explanation": "Ko'plik ot doimiy harakat: 'are sent'."
    },
    {
      "question": "The scientific discovery _______ by the lead researcher at the annual convention.",
      "options": [
        "was announced",
        "announced",
        "is announce",
        "were announced"
      ],
      "correctAnswer": "was announced",
      "explanation": "Kashfiyot e'lon qilindi: 'was announced'."
    }
  ],
  "murphy_u38_first_second_conditionals": [
    {
      "question": "If governments _______ in renewable energy, carbon emissions will decline significantly.",
      "options": [
        "invest",
        "will invest",
        "invested",
        "would invest"
      ],
      "correctAnswer": "invest",
      "explanation": "1-shart maylida (First Conditional) 'If' qismida Present Simple ('invest') ishlatiladi."
    },
    {
      "question": "If I _______ a million dollars, I would establish an educational scholarship foundation.",
      "options": [
        "had",
        "have",
        "would have",
        "had had"
      ],
      "correctAnswer": "had",
      "explanation": "2-shart maylida (Second Conditional) noaniq tasavvur uchun 'If + Past Simple' ('had') qo'yiladi."
    },
    {
      "question": "What would you do if you _______ your passport while traveling abroad?",
      "options": [
        "lost",
        "lose",
        "will lose",
        "would lose"
      ],
      "correctAnswer": "lost",
      "explanation": "2-shart so'rog'ida 'What would you do if you lost...?' to'g'ri keladi."
    },
    {
      "question": "If you _______ systematically every day, you will comfortably pass the test.",
      "options": [
        "practice",
        "will practice",
        "practiced",
        "would practice"
      ],
      "correctAnswer": "practice",
      "explanation": "1-shart: 'If you practice..., you will pass'."
    },
    {
      "question": "If she _______ more free time, she would take intensive painting lessons.",
      "options": [
        "had",
        "has",
        "will have",
        "would have"
      ],
      "correctAnswer": "had",
      "explanation": "Hozirgi noaniq vaziyat: 'If she had more free time, she would take...'."
    },
    {
      "question": "If the weather _______ favorable tomorrow morning, we will conduct our field survey.",
      "options": [
        "is",
        "will be",
        "was",
        "would be"
      ],
      "correctAnswer": "is",
      "explanation": "1-shartda kelasi zamon ma'nosi bo'lsa ham 'If' qismida 'is' bo'ladi."
    },
    {
      "question": "I would accept that job offer if I _______ you.",
      "options": [
        "were",
        "am",
        "will be",
        "would be"
      ],
      "correctAnswer": "were",
      "explanation": "2-shartda 'I' bilan rasmiy til qoidasida 'were' ishlatiladi ('If I were you')."
    },
    {
      "question": "If they _______ more affordable housing, urban poverty will decrease.",
      "options": [
        "build",
        "built",
        "will build",
        "would build"
      ],
      "correctAnswer": "build",
      "explanation": "1-shart kelajak natijasi: 'If they build...'."
    },
    {
      "question": "If we _______ to the manager right now, she might approve our proposal.",
      "options": [
        "spoke",
        "speak",
        "will speak",
        "would speak"
      ],
      "correctAnswer": "spoke",
      "explanation": "2-shart ehtimoli: 'If we spoke..., she might approve'."
    },
    {
      "question": "Unless you _______ carefully to the recording, you will miss vital details.",
      "options": [
        "listen",
        "will listen",
        "don't listen",
        "listened"
      ],
      "correctAnswer": "listen",
      "explanation": "'Unless' (= if not) o'zi inkor ma'nosiga ega, Present Simple da 'listen' ishlatiladi."
    }
  ],
  "murphy_u40_relative_clauses": [
    {
      "question": "The linguist _______ developed this learning methodology won an international prize.",
      "options": [
        "who",
        "which",
        "whose",
        "where"
      ],
      "correctAnswer": "who",
      "explanation": "Insonlar (The linguist) uchun 'who' nisbiy olmoshi ishlatiladi."
    },
    {
      "question": "The historical building _______ houses the national archives is over two centuries old.",
      "options": [
        "which",
        "who",
        "whom",
        "where"
      ],
      "correctAnswer": "which",
      "explanation": "Narsa va binolar (The building) uchun 'which' yoki 'that' qo'llaniladi."
    },
    {
      "question": "I met a doctoral student _______ dissertation explores cognitive linguistics.",
      "options": [
        "whose",
        "who",
        "whom",
        "which"
      ],
      "correctAnswer": "whose",
      "explanation": "Egalikni ifodalashda (studentning dissertatsiyasi) 'whose' olmoshi ishlatiladi."
    },
    {
      "question": "Samarkand is an ancient city _______ many magnificent architectural monuments are preserved.",
      "options": [
        "where",
        "which",
        "that",
        "who"
      ],
      "correctAnswer": "where",
      "explanation": "Joy va makon ichida harakat yuz berganda 'where' qo'yiladi."
    },
    {
      "question": "The candidate _______ I interviewed yesterday demonstrated remarkable linguistic fluency.",
      "options": [
        "whom",
        "whose",
        "which",
        "where"
      ],
      "correctAnswer": "whom",
      "explanation": "Rasmiy tilda to'ldiruvchi shaxs uchun 'whom' (yoki who) ishlatiladi."
    },
    {
      "question": "All the reference books _______ you requested have arrived at the library.",
      "options": [
        "that",
        "who",
        "whose",
        "where"
      ],
      "correctAnswer": "that",
      "explanation": "Narsalar uchun 'that' yoki 'which' ishlatiladi."
    },
    {
      "question": "The reason _______ he relocated to the capital was to attend the academy.",
      "options": [
        "why",
        "which",
        "where",
        "who"
      ],
      "correctAnswer": "why",
      "explanation": "'The reason why...' sababni ifodalovchi standart birikmadir."
    },
    {
      "question": "The university professor _______ lectures I attended last year has published a new book.",
      "options": [
        "whose",
        "who",
        "which",
        "whom"
      ],
      "correctAnswer": "whose",
      "explanation": "Egalik: 'whose lectures' (ma'ruzalari)."
    },
    {
      "question": "The laboratory equipment _______ was damaged in the storm has now been replaced.",
      "options": [
        "which",
        "who",
        "whom",
        "where"
      ],
      "correctAnswer": "which",
      "explanation": "Narsa (equipment) uchun 'which' ishlatiladi."
    },
    {
      "question": "1991 was the momentous year _______ Uzbekistan declared its national independence.",
      "options": [
        "when",
        "which",
        "where",
        "who"
      ],
      "correctAnswer": "when",
      "explanation": "Vaqt ko'rsatkichi (the year) bilan 'when' qo'llanadi."
    }
  ],
  "murphy_u33_inversion_emphasis": [
    {
      "question": "Not only _______ greenhouse gas emissions, but it also creates sustainable jobs.",
      "options": [
        "does renewable energy reduce",
        "renewable energy reduces",
        "did renewable energy reduces",
        "renewable energy does reduce"
      ],
      "correctAnswer": "does renewable energy reduce",
      "explanation": "'Not only' gap boshida kelganda inversiya bo'lib, yordamchi fe'l egadan oldinga o'tadi: 'does renewable energy reduce'."
    },
    {
      "question": "Seldom _______ such overwhelming consensus among leading climate scientists.",
      "options": [
        "have I witnessed",
        "I have witnessed",
        "did I witnessed",
        "I witnessed"
      ],
      "correctAnswer": "have I witnessed",
      "explanation": "'Seldom' inkor ravishi bilan inversiya 'have I witnessed' bo'ladi."
    },
    {
      "question": "Under no circumstances _______ candidates enter the examination hall after the doors close.",
      "options": [
        "should",
        "they should",
        "should they not",
        "they must"
      ],
      "correctAnswer": "should",
      "explanation": "'Under no circumstances should candidates enter...' inkor iborasi inversiyani talab qiladi."
    },
    {
      "question": "Rarely _______ an educational policy achieve such immediate positive results.",
      "options": [
        "does",
        "is",
        "has",
        "did"
      ],
      "correctAnswer": "does",
      "explanation": "'Rarely does an educational policy achieve...' Present Simple inversiyasi."
    },
    {
      "question": "Hardly _______ into the testing room when the power outage occurred.",
      "options": [
        "had the students walked",
        "the students had walked",
        "did the students walk",
        "have the students walked"
      ],
      "correctAnswer": "had the students walked",
      "explanation": "'Hardly had + Subject + V3... when' klassik C1 inversiya tuzilmasidir."
    },
    {
      "question": "Little _______ that their preliminary discovery would revolutionize medicine.",
      "options": [
        "did the researchers know",
        "the researchers knew",
        "knew the researchers",
        "did the researchers knew"
      ],
      "correctAnswer": "did the researchers know",
      "explanation": "'Little did they know...' o'tgan zamon inversiya shaklidir."
    },
    {
      "question": "Only after the audit was concluded _______ the scale of the financial discrepancy.",
      "options": [
        "did the board realize",
        "the board realized",
        "realized the board",
        "the board did realize"
      ],
      "correctAnswer": "did the board realize",
      "explanation": "'Only after...' ergash gapidan so'ng asosiy gapda inversiya ('did the board realize') sodir bo'ladi."
    },
    {
      "question": "No sooner _______ their cue cards than the speaking examiner started the timer.",
      "options": [
        "had the candidates received",
        "the candidates had received",
        "did the candidates receive",
        "have the candidates received"
      ],
      "correctAnswer": "had the candidates received",
      "explanation": "'No sooner had + S + V3... than' qoidasi bo'yicha inversiya qo'llaniladi."
    },
    {
      "question": "At no time _______ authorized personnel permit visitors into the laboratory.",
      "options": [
        "did",
        "was",
        "has",
        "had"
      ],
      "correctAnswer": "did",
      "explanation": "'At no time did authorized personnel permit...' qat'iy rasmiy inkor inversiyasi."
    },
    {
      "question": "Scarcely _______ the final sentence when the allotted exam time expired.",
      "options": [
        "had she written",
        "she had written",
        "did she write",
        "has she written"
      ],
      "correctAnswer": "had she written",
      "explanation": "'Scarcely had she written... when' C1 darajadagi zamonlar moslashuv inversiyasidir."
    }
  ],
  "murphy_u34_participle_clauses": [
    {
      "question": "_______ by majestic mountain ranges, the secluded valley has its own unique microclimate.",
      "options": [
        "Surrounded",
        "Surrounding",
        "Having surrounded",
        "To surround"
      ],
      "correctAnswer": "Surrounded",
      "explanation": "Majhul ma'nodagi qisqartma sifatdosh (Past Participle) 'Surrounded by...' to'g'ri."
    },
    {
      "question": "_______ their primary laboratory experiments, the researchers compiled the final report.",
      "options": [
        "Having concluded",
        "Concluding",
        "Concluded",
        "Have concluded"
      ],
      "correctAnswer": "Having concluded",
      "explanation": "Bir harakat ikkinchisidan oldin tugaganini bildirish uchun Perfect Participle ('Having concluded') ishlatiladi."
    },
    {
      "question": "_______ into the quiet library reading hall, Farhod noticed several of his classmates.",
      "options": [
        "Walking",
        "Walked",
        "Having walked",
        "To walk"
      ],
      "correctAnswer": "Walking",
      "explanation": "Bir vaqtning o'zida yuz berayotgan faol harakat: 'Walking into the hall...'."
    },
    {
      "question": "_______ from recycled plastic bottles, this synthetic fabric is exceptionally durable.",
      "options": [
        "Manufactured",
        "Manufacturing",
        "Having manufactured",
        "Manufacture"
      ],
      "correctAnswer": "Manufactured",
      "explanation": "Plastikdan ishlab chiqarilgan mato (majhul ma'no): 'Manufactured from...'."
    },
    {
      "question": "_______ the potential risks of unchecked industrial expansion, economists urged prompt intervention.",
      "options": [
        "Recognizing",
        "Recognized",
        "Having recognized",
        "To recognize"
      ],
      "correctAnswer": "Recognizing",
      "explanation": "Sabab ma'nosidagi faol sifatdosh: 'Recognizing the risks...' (= Because they recognized)."
    },
    {
      "question": "_______ in 1895, the historical museum houses over a million valuable artifacts.",
      "options": [
        "Established",
        "Establishing",
        "Having established",
        "Establish"
      ],
      "correctAnswer": "Established",
      "explanation": "1895 yilda tashkil etilgan (majhul sifatdosh): 'Established in 1895'."
    },
    {
      "question": "_______ insufficient sleep before the exam, he struggled to concentrate during the reading section.",
      "options": [
        "Having had",
        "Having",
        "Had",
        "To have"
      ],
      "correctAnswer": "Having had",
      "explanation": "O'tmishda sodir bo'lgan sabab: 'Having had insufficient sleep...'."
    },
    {
      "question": "The candidate stood calmly at the podium, _______ every examiner question with precision.",
      "options": [
        "answering",
        "answered",
        "having answered",
        "to answer"
      ],
      "correctAnswer": "answering",
      "explanation": "Harakat tarzini ifodalovchi ergash sifatdosh: 'answering every question'."
    },
    {
      "question": "_______ by the university faculty, the novel syllabus will be implemented this autumn.",
      "options": [
        "Approved",
        "Approving",
        "Having approved",
        "To approve"
      ],
      "correctAnswer": "Approved",
      "explanation": "Universitet tomonidan ma'qullangan: 'Approved by the faculty'."
    },
    {
      "question": "_______ along the river bank, the botanist discovered an uncatalogued plant species.",
      "options": [
        "Walking",
        "Walked",
        "Having walked",
        "To walk"
      ],
      "correctAnswer": "Walking",
      "explanation": "Daryo bo'yida ketayotgan paytda: 'Walking along the river bank'."
    }
  ],
  "murphy_u35_cleft_sentences": [
    {
      "question": "What concerns international economists most _______ the rapid escalation of sovereign debt.",
      "options": [
        "is",
        "are",
        "being",
        "to be"
      ],
      "correctAnswer": "is",
      "explanation": "Wh-cleft (What...) gaplari butun bir g'oyani birlik deb qarab 'is' fe'lini oladi."
    },
    {
      "question": "It was _______ who spearheaded the groundbreaking renewable energy project.",
      "options": [
        "Dr. Simmons",
        "what Dr. Simmons",
        "where Dr. Simmons",
        "how Dr. Simmons"
      ],
      "correctAnswer": "Dr. Simmons",
      "explanation": "It-cleft tuzilmasi: 'It was [Subject] who spearheaded...' shaxsga urg'u beradi."
    },
    {
      "question": "All that the struggling students needed _______ constructive, timely feedback from their tutors.",
      "options": [
        "was",
        "were",
        "is",
        "are"
      ],
      "correctAnswer": "was",
      "explanation": "'All that they needed was...' butun bir ehtiyojni birlik sifatida ifodalaydi."
    },
    {
      "question": "It is through comprehensive empirical research _______ scientific hypotheses are verified.",
      "options": [
        "that",
        "which",
        "where",
        "what"
      ],
      "correctAnswer": "that",
      "explanation": "It-cleft strukturasida urg'u beriluvchi holatdan so'ng 'that' keladi: 'It is through... that'."
    },
    {
      "question": "What surprised the examiners _______ the candidate's sophisticated use of idiomatic collocations.",
      "options": [
        "was",
        "were",
        "are",
        "being"
      ],
      "correctAnswer": "was",
      "explanation": "Wh-cleft o'tgan zamonda: 'What surprised... was'."
    },
    {
      "question": "It was in 1969 _______ human beings first set foot on the moon.",
      "options": [
        "that",
        "which",
        "where",
        "what"
      ],
      "correctAnswer": "that",
      "explanation": "Vaqtga urg'u beruvchi It-cleft: 'It was in 1969 that...'."
    },
    {
      "question": "The person _______ inspired my passion for linguistics was my high school teacher.",
      "options": [
        "who",
        "which",
        "whose",
        "what"
      ],
      "correctAnswer": "who",
      "explanation": "'The person who inspired...' shaxsga urg'u beruvchi cleft shakli."
    },
    {
      "question": "What candidates must remember _______ time management dictates Task 2 success.",
      "options": [
        "is that",
        "are that",
        "is which",
        "are which"
      ],
      "correctAnswer": "is that",
      "explanation": "'What candidates must remember is that...' to'g'ri bog'lovchi shakl."
    },
    {
      "question": "It was primarily due to inadequate funding _______ the clinical trials were terminated.",
      "options": [
        "that",
        "which",
        "what",
        "where"
      ],
      "correctAnswer": "that",
      "explanation": "Sababga urg'u beruvchi It-cleft: 'It was due to... that'."
    },
    {
      "question": "The reason why she succeeded _______ her unrelenting dedication to daily practice.",
      "options": [
        "was",
        "were",
        "is",
        "being"
      ],
      "correctAnswer": "was",
      "explanation": "'The reason why she succeeded was...' o'tgan zamon cleft formulasi."
    }
  ],
  "murphy_u36_academic_nominalisation": [
    {
      "question": "Instead of saying 'The government reduced taxes rapidly, which stimulated growth', which nominalised sentence is best for IELTS Writing Task 2?",
      "options": [
        "The rapid reduction of taxes stimulated economic growth.",
        "Government reducing taxes very quickly was stimulating growth.",
        "There was a reduction rapid in taxes and growth stimulated.",
        "Because taxes were rapidly reduced, so it stimulated growth."
      ],
      "correctAnswer": "The rapid reduction of taxes stimulated economic growth.",
      "explanation": "Akademik ingliz tilida fe'llar o'rniga ot birikmalari (nominalisation: 'rapid reduction of taxes') ishlatilishi uslubni ancha yuqori (Band 8+) darajaga ko'taradi."
    },
    {
      "question": "Transform into an academic nominal structure: 'Pollution levels increased sharply in urban centers.'",
      "options": [
        "Urban centers saw a sharp increase in pollution levels.",
        "Pollution was increasing sharply in centers of urban.",
        "Increasing sharply pollution happened in cities.",
        "Sharp increasing of pollution was observed."
      ],
      "correctAnswer": "Urban centers saw a sharp increase in pollution levels.",
      "explanation": "'Saw a sharp increase in' nominal birikmasi IELTS Task 1 va Task 2 uchun eng rasmiy akademik model hisoblanadi."
    },
    {
      "question": "Identify the nominalised equivalent of 'Many species are disappearing, which alarms biologists.'",
      "options": [
        "The disappearance of many species is a cause for concern among biologists.",
        "Disappearing of species makes biologists alarmed.",
        "Biologists are alarmed because species disappear.",
        "That species disappear alarms many biologists."
      ],
      "correctAnswer": "The disappearance of many species is a cause for concern among biologists.",
      "explanation": "'The disappearance of...' oti orqali subyektiv jumla xolis akademik bayonotga aylantirilgan."
    },
    {
      "question": "Which sentence demonstrates proper nominalisation for data description?",
      "options": [
        "There was a gradual decline in petroleum consumption over the decade.",
        "Petroleum consumed gradually declining over the ten years.",
        "It declined petroleum gradually over the decade.",
        "Decline gradually was witnessed in petroleum."
      ],
      "correctAnswer": "There was a gradual decline in petroleum consumption over the decade.",
      "explanation": "'There was a [adjective] [noun] in [variable]' strukturasi nominalizatsiyaning asosiy qolipi."
    },
    {
      "question": "'The company expanded internationally, leading to higher revenues.' -> Which nominalised version is correct?",
      "options": [
        "International expansion led to higher revenues.",
        "Expanding international was leading revenues up.",
        "The expand internationally caused higher revenues.",
        "Because company expanded, revenues grew high."
      ],
      "correctAnswer": "International expansion led to higher revenues.",
      "explanation": "'Expand internationally' fe'li 'International expansion' ot birikmasiga aylangan."
    },
    {
      "question": "Why is nominalisation preferred in academic research papers and IELTS essays?",
      "options": [
        "It conveys complex ideas concisely and objectively.",
        "It allows writers to avoid using any punctuation.",
        "It makes sentences longer with emotional adjectives.",
        "It replaces all verbs with present continuous forms."
      ],
      "correctAnswer": "It conveys complex ideas concisely and objectively.",
      "explanation": "Nominalizatsiya matnni ixcham, xolis (ob'yektiv) va akademik jihatdan yetuk ko'rsatadi."
    },
    {
      "question": "Convert: 'People migrate from rural areas because they lack job opportunities.'",
      "options": [
        "Rural-to-urban migration is largely driven by a lack of employment opportunities.",
        "People migrating from countryside lack jobs.",
        "The reason people migrate is they don't have work.",
        "Because of jobs lacking, people do migration."
      ],
      "correctAnswer": "Rural-to-urban migration is largely driven by a lack of employment opportunities.",
      "explanation": "'Rural-to-urban migration' va 'a lack of employment opportunities' ikkalasi ham yuqori darajadagi nominal iboralardir."
    },
    {
      "question": "Choose the most formal academic option:",
      "options": [
        "The implementation of sustainable energy policies requires substantial investment.",
        "Implementing green policies means we have to spend a lot of money.",
        "When governments implement policies, it costs big money.",
        "If we put sustainable energy in place, money is needed."
      ],
      "correctAnswer": "The implementation of sustainable energy policies requires substantial investment.",
      "explanation": "'The implementation of policies' va 'substantial investment' sof akademik leksika va grammatikani ifodalaydi."
    },
    {
      "question": "Which noun corresponds to the verb 'deteriorate' in an academic context?",
      "options": [
        "deterioration",
        "deterioratingly",
        "deteriorance",
        "deteriority"
      ],
      "correctAnswer": "deterioration",
      "explanation": "'Deteriorate' (yomonlashmoq) fe'lining ot shakli 'deterioration' hisoblanadi."
    },
    {
      "question": "'Living standards improved significantly.' -> 'A significant _______ in living standards was observed.'",
      "options": [
        "improvement",
        "improving",
        "improved",
        "improvence"
      ],
      "correctAnswer": "improvement",
      "explanation": "Sifatdan keyin ('significant') ot keladi: 'improvement'."
    }
  ],
  "murphy_u37_inverted_conditionals": [
    {
      "question": "Invert this conditional: 'If you should require further assistance, please contact our office.'",
      "options": [
        "Should you require further assistance, please contact our office.",
        "Were you requiring further assistance, please contact.",
        "Had you required assistance, contact our office.",
        "Do you require assistance, please contact us."
      ],
      "correctAnswer": "Should you require further assistance, please contact our office.",
      "explanation": "1-turdagi rasmiy shart ergash gaplarda 'If you should...' o'rniga 'Should you...' inversiyasi ishlatiladi."
    },
    {
      "question": "'If the government were to raise interest rates, investment would slow down.' -> Inverted form:",
      "options": [
        "Were the government to raise interest rates, investment would slow down.",
        "Should the government to raise interest rates, investment would slow down.",
        "Had the government raise interest rates, investment would slow down.",
        "Did the government raise interest rates, investment would slow down."
      ],
      "correctAnswer": "Were the government to raise interest rates, investment would slow down.",
      "explanation": "2-tur shart gaplar inversiyasi: 'Were + Subject + to-infinitive...' formulasi bilan yasaladi."
    },
    {
      "question": "'If the researchers had analyzed the data correctly, the error would have been prevented.' -> Inverted form:",
      "options": [
        "Had the researchers analyzed the data correctly, the error would have been prevented.",
        "Were the researchers analyzed the data correctly, the error would have been prevented.",
        "Did the researchers have analyzed the data, the error would be prevented.",
        "Should the researchers have analyzed data, errors were prevented."
      ],
      "correctAnswer": "Had the researchers analyzed the data correctly, the error would have been prevented.",
      "explanation": "3-tur shart gap inversiyasi: 'Had + Subject + V3...' (If olib tashlanadi va Had oldinga o'tadi)."
    },
    {
      "question": "Choose the correct negative inverted conditional:",
      "options": [
        "Had they not intervened promptly, the dispute would have escalated.",
        "Had not they intervened promptly, the dispute would have escalated.",
        "Not had they intervened promptly, the dispute would have escalated.",
        "Had they intervened not promptly, the dispute would have escalated."
      ],
      "correctAnswer": "Had they not intervened promptly, the dispute would have escalated.",
      "explanation": "Inversiyali inkorda 'not' olmoshdan keyin keladi: 'Had + subject + not + V3' (Had not they xato!)."
    },
    {
      "question": "_______ it not for the generous donation, the laboratory could not have continued its research.",
      "options": [
        "Had been",
        "Were",
        "Should",
        "Had it"
      ],
      "correctAnswer": "Were",
      "explanation": "'Were it not for + noun' (agar ... bo'lmaganida) — 2-tur shart gapning inversiya qolipi."
    },
    {
      "question": "_______ it not been for the prompt medical intervention, the patient might not have survived.",
      "options": [
        "Had",
        "Were",
        "If",
        "Should"
      ],
      "correctAnswer": "Had",
      "explanation": "'Had it not been for...' o'tgan zamonga tegishli (3-tur) inversiya shart iborasi."
    },
    {
      "question": "Which sentence contains a grammatical error?",
      "options": [
        "Should you will have questions, call us.",
        "Should you have questions, call us.",
        "Were I in your position, I would accept the offer.",
        "Had we known the consequences, we would have acted differently."
      ],
      "correctAnswer": "Should you will have questions, call us.",
      "explanation": "'Should' modal fe'lidan keyin yana 'will' kelishi mumkin emas; oddiy infinitiv bo'lishi kerak: 'Should you have...'."
    },
    {
      "question": "Inverted conditionals are most commonly used in:",
      "options": [
        "Formal writing, academic papers, and official correspondence.",
        "Informal chat messages with close friends.",
        "Children's storybooks only.",
        "Spoken casual street slang."
      ],
      "correctAnswer": "Formal writing, academic papers, and official correspondence.",
      "explanation": "Shart gaplarning inversiyasi rasmiy yozma nutq va IELTS akademik insholariga xosdir."
    },
    {
      "question": "_______ any changes occur in your medical condition, notify your physician immediately.",
      "options": [
        "Should",
        "Were",
        "Had",
        "Unless"
      ],
      "correctAnswer": "Should",
      "explanation": "Kelasi/hozirgi ehtimoliy holat uchun 'Should + subject + bare verb' to'g'ri inversiya hisoblanadi."
    },
    {
      "question": "'Were technological solutions _______ adopted globally, emissions would drop substantially.'",
      "options": [
        "to be",
        "being",
        "been",
        "will be"
      ],
      "correctAnswer": "to be",
      "explanation": "'Were + Subject + to be + V3' (majhul nisbatdagi inversiya: 'Were solutions to be adopted...')."
    }
  ],
  "murphy_u38_impersonal_reporting_passives": [
    {
      "question": "Which sentence represents the impersonal passive pattern 'It is believed that...'?",
      "options": [
        "It is widely believed that renewable energy is the key to reducing emissions.",
        "People widely believe that renewable energy reduces emissions.",
        "Renewable energy believes that emissions will reduce.",
        "It believes people that energy is renewable."
      ],
      "correctAnswer": "It is widely believed that renewable energy is the key to reducing emissions.",
      "explanation": "'It is + V3 (believed/claimed/argued) + that + clause' akademik insholar uchun ob'yektiv xolis fikr bildirish qolipidir."
    },
    {
      "question": "Transform into a personal reporting passive: 'People estimate that the project will cost millions.'",
      "options": [
        "The project is estimated to cost millions.",
        "It estimates that the project costs millions.",
        "The project estimates millions of costs.",
        "Costing millions is project estimated."
      ],
      "correctAnswer": "The project is estimated to cost millions.",
      "explanation": "'Subject + be + estimated/reported/thought + to-infinitive' shaxsiy hisobot majhul nisbatidir."
    },
    {
      "question": "'The ancient artifact is understood _______ by early Phoenician traders.'",
      "options": [
        "to have been crafted",
        "to craft",
        "having crafted",
        "crafting"
      ],
      "correctAnswer": "to have been crafted",
      "explanation": "O'tgan zamonga oid harakat uchun mukammal majhul infinitiv ('to have been + V3') talab qilinadi."
    },
    {
      "question": "Select the correct academic reporting structure:",
      "options": [
        "It is generally acknowledged that bilingualism enhances cognitive flexibility.",
        "It acknowledges generally that bilingual people are flexible.",
        "That bilingualism enhances cognition is people acknowledging.",
        "Generally it is acknowledging bilingualism cognitive flexibility."
      ],
      "correctAnswer": "It is generally acknowledged that bilingualism enhances cognitive flexibility.",
      "explanation": "'It is generally acknowledged that...' keng tan olingan ilmiy faktlarni ifodalashda qo'llanadi."
    },
    {
      "question": "'Regular exercise _______ to decrease the risk of cardiovascular illness.'",
      "options": [
        "has been proven",
        "has proved it",
        "is proving people",
        "was being proven it"
      ],
      "correctAnswer": "has been proven",
      "explanation": "'Subject + has been proven + to-infinitive' (muntazam mashqlar xavfni kamaytirishi isbotlangan)."
    },
    {
      "question": "Which reporting verb is NOT typically used in 'It is [verb]ed that...' structures?",
      "options": [
        "smiled",
        "asserted",
        "hypothesized",
        "suggested"
      ],
      "correctAnswer": "smiled",
      "explanation": "'Smile' noo'timsiz his-tuyg'u fe'li bo'lib, impersonal reporting passivelarda ishlatilmaydi."
    },
    {
      "question": "'The suspect is believed _______ the country under a false identity three days ago.'",
      "options": [
        "to have fled",
        "to flee",
        "fleeing",
        "having fled"
      ],
      "correctAnswer": "to have fled",
      "explanation": "Ish-harakat 3 kun oldin sodir bo'lgani uchun 'to have + V3' (to have fled) qo'yiladi."
    },
    {
      "question": "Rewrite academically: 'Experts claim that AI will replace many manual jobs.'",
      "options": [
        "AI is claimed to replace many manual jobs.",
        "It claims that AI replaces manual jobs.",
        "Manual jobs claim AI to be replacing.",
        "AI claims manual jobs replacement."
      ],
      "correctAnswer": "AI is claimed to replace many manual jobs.",
      "explanation": "'AI is claimed to replace...' (AI ko'plab kasblarning o'rnini egallashi da'vo qilinmoqda)."
    },
    {
      "question": "What is the primary stylistic advantage of using impersonal passive structures in IELTS Writing Task 2?",
      "options": [
        "They provide neutrality and avoid over-reliance on personal pronouns like 'I think'.",
        "They guarantee that the essay contains zero passive voice.",
        "They allow the student to use slang phrases safely.",
        "They make every sentence sound like a fictional story."
      ],
      "correctAnswer": "They provide neutrality and avoid over-reliance on personal pronouns like 'I think'.",
      "explanation": "'It is argued that...' shaxsiy 'I think' o'rnini bosib, matnga neytral ilmiy tushuncha beradi."
    },
    {
      "question": "'It is often _______ that urbanization brings both economic benefits and social challenges.'",
      "options": [
        "contended",
        "contending",
        "contention",
        "contends"
      ],
      "correctAnswer": "contended",
      "explanation": "'It is often + V3 (contended/argued) that' strukturasi."
    }
  ],
  "murphy_u39_advanced_concession": [
    {
      "question": "Choose the sentence with correct syntax using 'Despite':",
      "options": [
        "Despite the adverse economic conditions, the firm increased its market share.",
        "Despite of the adverse economic conditions, the firm increased its share.",
        "Despite the conditions were adverse, the firm increased its share.",
        "Despite having adverse conditions the firm it increased its share."
      ],
      "correctAnswer": "Despite the adverse economic conditions, the firm increased its market share.",
      "explanation": "'Despite' predlogidan keyin 'of' kelmaydi va to'g'ridan-to'g'ri ot/ot birikmasi keladi."
    },
    {
      "question": "Fill in the blank: '_______ intense public opposition, the new highway project was approved.'",
      "options": [
        "In spite of",
        "Although",
        "Even though",
        "Whereas"
      ],
      "correctAnswer": "In spite of",
      "explanation": "'Intense public opposition' ot birikmasi bo'lgani uchun 'In spite of' to'g'ri (Although to'liq gap talab qiladi)."
    },
    {
      "question": "Which connector requires a complete subject-verb clause?",
      "options": [
        "Although",
        "Despite",
        "In spite of",
        "Regardless of"
      ],
      "correctAnswer": "Although",
      "explanation": "'Although' va 'Even though' bog'lovchilaridan keyin ega va kesim kelishi shart."
    },
    {
      "question": "'Difficult _______ the exam was, over 80% of candidates passed successfully.'",
      "options": [
        "as",
        "although",
        "despite",
        "even"
      ],
      "correctAnswer": "as",
      "explanation": "'Adjective + as / though + subject + verb' ziddiyatni ifodalovchi yuqori darajali qolip ('Difficult as the exam was...')."
    },
    {
      "question": "Select the correct punctuation and linker:",
      "options": [
        "Online education offers great flexibility; nevertheless, it can lack interpersonal engagement.",
        "Online education offers great flexibility nevertheless it can lack interpersonal engagement.",
        "Online education offers great flexibility, although, it can lack engagement.",
        "Online education offers great flexibility despite it lacks engagement."
      ],
      "correctAnswer": "Online education offers great flexibility; nevertheless, it can lack interpersonal engagement.",
      "explanation": "'Nevertheless' ergash bog'lovchi emas, balki modal adverbial bo'lib, nuqtali vergul yoki yangi gap bilan ishlatiladi."
    },
    {
      "question": "Which sentence correctly uses 'Notwithstanding'?",
      "options": [
        "Notwithstanding these reservations, the committee endorsed the proposal.",
        "Notwithstanding that the committee had reservations, but they endorsed.",
        "Notwithstanding of the reservations, the proposal was passed.",
        "The committee endorsed notwithstanding they had reservations."
      ],
      "correctAnswer": "Notwithstanding these reservations, the committee endorsed the proposal.",
      "explanation": "'Notwithstanding' (qaramasdan) rasmiy akademik so'z bo'lib, to'g'ridan-to'g'ri ot oladi ('notwithstanding these reservations')."
    },
    {
      "question": "'Much _______ I admire his intellect, I cannot agree with his conclusions.'",
      "options": [
        "as",
        "though that",
        "even",
        "despite"
      ],
      "correctAnswer": "as",
      "explanation": "'Much as I admire...' (qanchalik qoyil qolsam ham) keng tarqalgan konsessiv ibora."
    },
    {
      "question": "Choose the sentence that contrasts two opposing facts correctly:",
      "options": [
        "Whereas industrialized nations generate vast emissions, developing nations often suffer the worst consequences.",
        "Whereas industrialized nations generate emissions, but developing nations suffer.",
        "Industrialized nations generate emissions, in spite developing nations suffer.",
        "Industrialized nations generate emissions whereas that developing nations suffer."
      ],
      "correctAnswer": "Whereas industrialized nations generate vast emissions, developing nations often suffer the worst consequences.",
      "explanation": "'Whereas' (holbuki / esa) ikkita faktni bir-biriga qarama-qarshi qo'yishda ishlatiladi va ketidan 'but' qo'yilmaydi."
    },
    {
      "question": "Complete the sentence: '_______ that she had limited resources, her project was remarkably comprehensive.'",
      "options": [
        "Given",
        "In spite",
        "Although of",
        "Regardless"
      ],
      "correctAnswer": "Given",
      "explanation": "'Given that...' (inobatga olgan holda) sabab va shartni ifodalovchi akademik ibora."
    },
    {
      "question": "Which option is grammatically INCORRECT?",
      "options": [
        "Despite of being tired, he finished the report.",
        "In spite of being tired, he finished the report.",
        "Although he was tired, he finished the report.",
        "Tired though he was, he finished the report."
      ],
      "correctAnswer": "Despite of being tired, he finished the report.",
      "explanation": "'Despite' so'zidan keyin 'of' qo'shilishi qo'pol grammatik xatodir."
    }
  ],
  "murphy_u40_subjunctive_mood": [
    {
      "question": "Which sentence correctly demonstrates the present subjunctive mood?",
      "options": [
        "The committee recommended that the policy be revised immediately.",
        "The committee recommended that the policy is revised immediately.",
        "The committee recommended that the policy will be revised immediately.",
        "The committee recommended that the policy was revised immediately."
      ],
      "correctAnswer": "The committee recommended that the policy be revised immediately.",
      "explanation": "Subjunctive moodda 'recommend that + subject + bare infinitive (be)' qo'llanadi."
    },
    {
      "question": "'It is imperative that every citizen _______ informed about their legal rights.'",
      "options": [
        "be",
        "is",
        "was",
        "are"
      ],
      "correctAnswer": "be",
      "explanation": "'It is imperative that...' dan keyin subjunctive bare form 'be' ishlatiladi."
    },
    {
      "question": "The university regulations demand that each candidate _______ their dissertation by May 1st.",
      "options": [
        "submit",
        "submits",
        "submitted",
        "will submit"
      ],
      "correctAnswer": "submit",
      "explanation": "'Demand that' subjunctive talab qiladi, shuning uchun 'each candidate' bo'lsa ham '-s' qo'shilmaydi ('submit')."
    },
    {
      "question": "Choose the correct negative subjunctive sentence:",
      "options": [
        "The doctor insisted that the patient not undergo unnecessary surgery.",
        "The doctor insisted that the patient does not undergo surgery.",
        "The doctor insisted that the patient not to undergo surgery.",
        "The doctor insisted that the patient undergoes not surgery."
      ],
      "correctAnswer": "The doctor insisted that the patient not undergo unnecessary surgery.",
      "explanation": "Subjunctive inkorda 'do/does' yordamchi fe'lisiz 'not + bare infinitive' ishlatiladi: 'not undergo'."
    },
    {
      "question": "'It is essential that he _______ present at the annual board meeting.'",
      "options": [
        "be",
        "is",
        "would be",
        "being"
      ],
      "correctAnswer": "be",
      "explanation": "'Essential that he be present' — rasmiy ingliz tilidagi klassik subjunctive konstruktsiyasi."
    },
    {
      "question": "Which verb DOES NOT trigger the subjunctive mood in a 'that'-clause?",
      "options": [
        "enjoy",
        "propose",
        "request",
        "stipulate"
      ],
      "correctAnswer": "enjoy",
      "explanation": "'Enjoy' fe'li istak, talab yoki taklif bildiruvchi fe'l emas; gerund bilan keladi."
    },
    {
      "question": "'The judge ordered that the evidence _______ examined by an independent forensic team.'",
      "options": [
        "be",
        "is",
        "was",
        "will be"
      ],
      "correctAnswer": "be",
      "explanation": "'Order that + bare infinitive' -> 'evidence be examined'."
    },
    {
      "question": "In British English, what modal verb is frequently used as an alternative to the bare subjunctive?",
      "options": [
        "should",
        "must",
        "might",
        "would"
      ],
      "correctAnswer": "should",
      "explanation": "Britaniya ingliz tilida 'that he should be present' shakli sof subjunctive ('that he be') o'rnida juda keng qo'llaniladi."
    },
    {
      "question": "'It is crucial that the international community _______ collaborative action against climate change.'",
      "options": [
        "take",
        "takes",
        "took",
        "taking"
      ],
      "correctAnswer": "take",
      "explanation": "'Crucial that the community take action' (bare verb 'take')."
    },
    {
      "question": "Which idiomatic fixed expression preserves the archaic subjunctive?",
      "options": [
        "Be that as it may",
        "Be that as it is",
        "Is that as it be",
        "Was that as it may"
      ],
      "correctAnswer": "Be that as it may",
      "explanation": "'Be that as it may' (qanday bo'lishidan qat'i nazar) turg'un subjunctive iborasidir."
    }
  ],
  "ielts_a2_01_past_continuous_vs_simple": [
    {
      "question": "I _______ home yesterday evening when suddenly the rain started.",
      "options": [
        "was walking",
        "walked",
        "am walking",
        "have walked"
      ],
      "correctAnswer": "was walking",
      "explanation": "Davom etayotgan o'tgan zamon harakatini boshqa qisqa harakat ('the rain started') to'xtatganda Past Continuous qo'yiladi."
    },
    {
      "question": "While my parents were cooking dinner, my sister and I _______ our homework.",
      "options": [
        "were doing",
        "did",
        "have done",
        "are doing"
      ],
      "correctAnswer": "were doing",
      "explanation": "O'tgan zamonda bir vaqtda parallel davom etgan ikkita ish-harakat uchun Past Continuous ishlatiladi."
    },
    {
      "question": "What _______ at 8:00 PM yesterday when I phoned you?",
      "options": [
        "were you doing",
        "did you do",
        "have you done",
        "are you doing"
      ],
      "correctAnswer": "were you doing",
      "explanation": "O'tgan zamondagi aniq vaqt lahzasida davom etayotgan ish-harakat so'ralganda 'were you doing' ishlatiladi."
    },
    {
      "question": "The students _______ attentively when the fire alarm interrupted the lecture.",
      "options": [
        "were listening",
        "listened",
        "have listened",
        "listen"
      ],
      "correctAnswer": "were listening",
      "explanation": "Tinglab turish jarayonida signal chalingan: 'were listening'."
    },
    {
      "question": "He fell off the ladder while he _______ the ceiling.",
      "options": [
        "was painting",
        "painted",
        "has painted",
        "is painting"
      ],
      "correctAnswer": "was painting",
      "explanation": "'While' bog'lovchisidan keyin o'tgan zamon davomli jarayoni: 'was painting'."
    },
    {
      "question": "We _______ each other during our university years in London.",
      "options": [
        "met",
        "were meeting",
        "have met",
        "had been meeting"
      ],
      "correctAnswer": "met",
      "explanation": "Tanishuv bir lahzalik o'tgan tugallangan harakat bo'lgani uchun Past Simple ('met') to'g'ri."
    },
    {
      "question": "As the teacher _______ the grammar rules, several students took notes.",
      "options": [
        "was explaining",
        "explained",
        "explains",
        "has explained"
      ],
      "correctAnswer": "was explaining",
      "explanation": "'As' (vaqtida/jarayonida) davomli o'tgan zamon harakatini ko'rsatadi: 'was explaining'."
    },
    {
      "question": "I _______ anyone yesterday because I stayed home all day.",
      "options": [
        "didn't see",
        "wasn't seeing",
        "haven't seen",
        "don't see"
      ],
      "correctAnswer": "didn't see",
      "explanation": "'See' idrok fe'li bo'lib, odatda Continuous zamonlarda ishlatilmaydi; Past Simple inkor: 'didn't see'."
    },
    {
      "question": "The sun _______ and birds were singing when I stepped out into the garden.",
      "options": [
        "was shining",
        "shone",
        "has shone",
        "is shining"
      ],
      "correctAnswer": "was shining",
      "explanation": "Atrof-muhit tasviri va fon harakati uchun Past Continuous: 'was shining'."
    },
    {
      "question": "Which sentence correctly pairs Past Simple and Past Continuous?",
      "options": [
        "When my phone rang, I was driving on the motorway.",
        "When my phone was ringing, I drove on the motorway.",
        "When my phone rang, I drove on the motorway.",
        "While my phone rang, I was driving on the motorway."
      ],
      "correctAnswer": "When my phone rang, I was driving on the motorway.",
      "explanation": "'When' qisqa to'xtatuvchi harakat (rang), mashina haydash esa fon jarayoni (was driving)."
    }
  ],
  "ielts_a2_02_present_perfect_experience": [
    {
      "question": "Have you ever _______ an academic conference abroad?",
      "options": [
        "attended",
        "attend",
        "attending",
        "have attended"
      ],
      "correctAnswer": "attended",
      "explanation": "'Have you ever + V3 (attended)' hayotiy tajribani so'rashda standart shakldir."
    },
    {
      "question": "I have lived in this city _______ over twelve years.",
      "options": [
        "for",
        "since",
        "during",
        "from"
      ],
      "correctAnswer": "for",
      "explanation": "Vaqt davomiyligi (duration: over twelve years) oldidan 'for' ishlatiladi."
    },
    {
      "question": "She has worked as an IELTS instructor _______ 2018.",
      "options": [
        "since",
        "for",
        "from",
        "in"
      ],
      "correctAnswer": "since",
      "explanation": "Boshlang'ich nuqta (starting point: 2018) oldidan 'since' qo'yiladi."
    },
    {
      "question": "'Have you completed the report yet?' -> 'Yes, I have _______ finished it.'",
      "options": [
        "already",
        "yet",
        "still",
        "ever"
      ],
      "correctAnswer": "already",
      "explanation": "Kutilgandan oldinroq bajarilgan tasdiq gapda 'already' ishlatiladi."
    },
    {
      "question": "They haven't received their exam results _______.",
      "options": [
        "yet",
        "already",
        "never",
        "just"
      ],
      "correctAnswer": "yet",
      "explanation": "Present Perfect inkor gaplarining oxirida 'yet' qo'llaniladi."
    },
    {
      "question": "This is the first time I _______ authentic IELTS materials.",
      "options": [
        "have used",
        "used",
        "am using",
        "had used"
      ],
      "correctAnswer": "have used",
      "explanation": "'This is the first time + Present Perfect' grammatik qoidasi."
    },
    {
      "question": "My colleague has _______ to Japan on business; he will be back next week.",
      "options": [
        "gone",
        "been",
        "went",
        "go"
      ],
      "correctAnswer": "gone",
      "explanation": "Agar shaxs u yerga ketib hali qaytmagan bo'lsa 'gone to', borib kelgan bo'lsa 'been to' deyiladi."
    },
    {
      "question": "I _______ to London three times in my life.",
      "options": [
        "have been",
        "have gone",
        "was",
        "went"
      ],
      "correctAnswer": "have been",
      "explanation": "Hayotdagi borib-qaytish tajribasi uchun 'have been to' to'g'ri."
    },
    {
      "question": "Which sentence is grammatically INCORRECT?",
      "options": [
        "I have seen that documentary two days ago.",
        "I saw that documentary two days ago.",
        "I have seen that documentary twice.",
        "I haven't seen that documentary yet."
      ],
      "correctAnswer": "I have seen that documentary two days ago.",
      "explanation": "Aniq o'tgan zamon ko'rsatkichlari ('two days ago') bilan Present Perfect ishlatilmaydi, Past Simple kerak."
    },
    {
      "question": "How long _______ each other?",
      "options": [
        "have you known",
        "do you know",
        "are you knowing",
        "have you been knowing"
      ],
      "correctAnswer": "have you known",
      "explanation": "'Know' stative fe'l bo'lgani uchun continuous bo'lmaydi: 'How long have you known...?'"
    }
  ],
  "ielts_a2_03_future_forms": [
    {
      "question": "Look at those dark clouds! It _______ rain very soon.",
      "options": [
        "is going to",
        "will",
        "is raining",
        "shall"
      ],
      "correctAnswer": "is going to",
      "explanation": "Hozirgi mavjud dalil va alomatlarga asoslangan bashorat uchun 'be going to' ishlatiladi."
    },
    {
      "question": "I forgot to buy milk. Don't worry, I _______ to the grocery store right now.",
      "options": [
        "will go",
        "am going to go",
        "go",
        "am going"
      ],
      "correctAnswer": "will go",
      "explanation": "Gapirish lahzasida qabul qilingan to'satdan qarorlar (spontaneous decisions) uchun 'will' ishlatiladi."
    },
    {
      "question": "The flight to Sydney _______ at 06:45 tomorrow morning according to the schedule.",
      "options": [
        "departs",
        "is departing",
        "will depart",
        "is going to depart"
      ],
      "correctAnswer": "departs",
      "explanation": "Rasmiy jadval va transport vaqtlari (timetables) uchun Present Simple ishlatiladi."
    },
    {
      "question": "We _______ dinner with the university rector on Friday evening; the reservation is confirmed.",
      "options": [
        "are having",
        "will have",
        "have",
        "are going to have"
      ],
      "correctAnswer": "are having",
      "explanation": "Oldindan aniq kelishilgan va tayyorgarlik ko'rilgan tadbirlar (arrangements) uchun Present Continuous ishlatiladi."
    },
    {
      "question": "I think artificial intelligence _______ transform education over the next decade.",
      "options": [
        "will",
        "is going to",
        "is",
        "shall"
      ],
      "correctAnswer": "will",
      "explanation": "'I think', 'I believe' kabi shaxsiy fikr va taxminlar bilan 'will' keladi."
    },
    {
      "question": "Are you busy tonight? — Yes, I _______ my final essay submission.",
      "options": [
        "am finishing",
        "will finish",
        "finish",
        "am going finish"
      ],
      "correctAnswer": "am finishing",
      "explanation": "Rejalashtirilgan ish uchun Present Continuous: 'am finishing'."
    },
    {
      "question": "I promise I _______ your confidential information to anyone.",
      "options": [
        "will not disclose",
        "am not going to disclose",
        "do not disclose",
        "am not disclosing"
      ],
      "correctAnswer": "will not disclose",
      "explanation": "Va'dalar (promises) berishda 'will / will not' ishlatiladi."
    },
    {
      "question": "As soon as the results _______ announced, we will notify all applicants.",
      "options": [
        "are",
        "will be",
        "are going to be",
        "shall be"
      ],
      "correctAnswer": "are",
      "explanation": "Vaqt ergash gaplarida ('as soon as', 'when', 'before') kelasi zamon o'rniga Present Simple ishlatiladi."
    },
    {
      "question": "What are your plans for the summer vacation? — We _______ across Europe.",
      "options": [
        "are going to travel",
        "will travel",
        "travel",
        "have travelled"
      ],
      "correctAnswer": "are going to travel",
      "explanation": "Oldindan niyat qilingan maqsad va rejalar (intentions) uchun 'be going to'."
    },
    {
      "question": "Hold on, that suitcase looks heavy. I _______ you carry it.",
      "options": [
        "will help",
        "am helping",
        "help",
        "am going to help"
      ],
      "correctAnswer": "will help",
      "explanation": "Yordam taklif qilishda (offers) 'will' ishlatiladi."
    }
  ],
  "ielts_a2_04_modals_ability_advice": [
    {
      "question": "To improve your IELTS Speaking score, you _______ practice fluency daily.",
      "options": [
        "should",
        "must to",
        "ought",
        "could to"
      ],
      "correctAnswer": "should",
      "explanation": "Maslahat berishda 'should + bare infinitive' ishlatiladi."
    },
    {
      "question": "You _______ memorize entire model answers because examiners easily identify memorized responses.",
      "options": [
        "ought not to",
        "should to not",
        "must not to",
        "needn't to"
      ],
      "correctAnswer": "ought not to",
      "explanation": "'Ought not to + bare infinitive' maslahatning rasmiy shakli."
    },
    {
      "question": "When he was just five years old, Mozart _______ play the piano brilliantly.",
      "options": [
        "could",
        "can",
        "was able",
        "might"
      ],
      "correctAnswer": "could",
      "explanation": "O'tgan zamondagi umumiy qobiliyat uchun 'could' ishlatiladi."
    },
    {
      "question": "Despite severe weather conditions, the rescue team _______ reach the stranded climbers.",
      "options": [
        "was able to",
        "could",
        "can",
        "might"
      ],
      "correctAnswer": "was able to",
      "explanation": "Qiyin vaziyatda muayyan bir aniq muvaffaqiyatga erishish uchun 'was/were able to' ishlatiladi ('could' faqat umumiy qobiliyat)."
    },
    {
      "question": "Candidates _______ bring any electronic devices into the examination hall; it is strictly prohibited.",
      "options": [
        "must not",
        "don't have to",
        "needn't",
        "should not to"
      ],
      "correctAnswer": "must not",
      "explanation": "Qat'iy taqiq (prohibition) uchun 'must not' qo'yiladi ('don't have to' shart emaslikni bildiradi)."
    },
    {
      "question": "You _______ pay for the webinar; it is completely free of charge.",
      "options": [
        "don't have to",
        "must not",
        "can't",
        "shouldn't to"
      ],
      "correctAnswer": "don't have to",
      "explanation": "Zarurat yo'qligi (absence of obligation) uchun 'don't have to' yoki 'needn't' ishlatiladi."
    },
    {
      "question": "If you want to achieve Band 7+, you _______ better expand your academic vocabulary.",
      "options": [
        "had",
        "would",
        "did",
        "should"
      ],
      "correctAnswer": "had",
      "explanation": "'Had better + bare verb' (yaxshisi ... qilganing ma'qul) qat'iy maslahat ifodasidir."
    },
    {
      "question": "Excuse me, _______ you please show me the way to the admissions office?",
      "options": [
        "could",
        "must",
        "should",
        "shall"
      ],
      "correctAnswer": "could",
      "explanation": "Xushmuomala iltimos (polite request) uchun 'could you please...' ishlatiladi."
    },
    {
      "question": "I _______ find my passport anywhere this morning, but thankfully I discovered it in my drawer.",
      "options": [
        "couldn't",
        "can't",
        "mustn't",
        "shouldn't"
      ],
      "correctAnswer": "couldn't",
      "explanation": "O'tgan zamondagi qobiliyatsizlik / imkoni bo'lmagan holat: 'couldn't find'."
    },
    {
      "question": "Which sentence carries the strongest moral obligation or warning?",
      "options": [
        "You had better leave now or you will miss your flight.",
        "You could leave now if you feel like it.",
        "You might leave now.",
        "You can leave now."
      ],
      "correctAnswer": "You had better leave now or you will miss your flight.",
      "explanation": "'Had better' oqibati yomon bo'lishi mumkin bo'lgan jiddiy ogohlantirishni bildiradi."
    }
  ],
  "ielts_a2_05_comparatives_superlatives": [
    {
      "question": "Studying abroad is often significantly _______ than attending a local university.",
      "options": [
        "more expensive",
        "expensiver",
        "most expensive",
        "much expensive"
      ],
      "correctAnswer": "more expensive",
      "explanation": "Ko'p bo'g'inli sifatlarning qiyosiy darajasi 'more + adjective' bilan yasaladi."
    },
    {
      "question": "Public transport in this city is far _______ than it was five years ago.",
      "options": [
        "better",
        "gooder",
        "best",
        "more good"
      ],
      "correctAnswer": "better",
      "explanation": "'Good' sifatining qiyosiy darajasi noto'g'ri (irregular) bo'lib, 'better' hisoblanadi."
    },
    {
      "question": "This library is _______ of all the university facilities on campus.",
      "options": [
        "the most modern",
        "most modern",
        "more modern",
        "the modernest"
      ],
      "correctAnswer": "the most modern",
      "explanation": "Orttirma daraja aniqlovchi artikl bilan keladi: 'the most modern'."
    },
    {
      "question": "Solar energy is becoming _______ affordable each year.",
      "options": [
        "increasingly more",
        "more and more",
        "most and most",
        "increasier"
      ],
      "correctAnswer": "more and more",
      "explanation": "Uzluksiz ortib borish jarayonini 'more and more + adjective' ifodalaydi."
    },
    {
      "question": "The second edition of the textbook is not _______ comprehensive as the original version.",
      "options": [
        "as",
        "so",
        "than",
        "more"
      ],
      "correctAnswer": "as",
      "explanation": "Teng qiyos inkori: 'not as/so ... as'."
    },
    {
      "question": "His performance in Task 2 was _______ worse than his performance in Task 1.",
      "options": [
        "slightly",
        "more",
        "as",
        "so"
      ],
      "correctAnswer": "slightly",
      "explanation": "Qiyosiy darajani kuchaytirish yoki pasaytirishda 'slightly', 'far', 'much' qo'llaniladi."
    },
    {
      "question": "Of the three candidates interviewed, Sarah had _______ relevant experience.",
      "options": [
        "the most",
        "more",
        "most",
        "the more"
      ],
      "correctAnswer": "the most",
      "explanation": "Uch yoki undan ortiq narsani solishtirganda orttirma daraja: 'the most'."
    },
    {
      "question": "Which adjective forms its superlative irregularly?",
      "options": [
        "bad -> the worst",
        "fast -> the fastest",
        "clean -> the cleanest",
        "simple -> the simplest"
      ],
      "correctAnswer": "bad -> the worst",
      "explanation": "'Bad' sifatining orttirma darajasi 'the worst' bo'lib, noqonuniy o'zgaradi."
    },
    {
      "question": "The cost of living in rural areas is considerably _______ than in major metropolitan centers.",
      "options": [
        "lower",
        "low",
        "lowest",
        "more low"
      ],
      "correctAnswer": "lower",
      "explanation": "Bir bo'g'inli sifat 'low' -> 'lower'."
    },
    {
      "question": "Which sentence contains a grammatical mistake?",
      "options": [
        "This exam was more easier than the previous one.",
        "This exam was much easier than the previous one.",
        "This exam was far easier than the previous one.",
        "This exam was significantly easier than the previous one."
      ],
      "correctAnswer": "This exam was more easier than the previous one.",
      "explanation": "Ikkita qiyosiy ko'rsatkichni birga qo'yish mumkin emas: 'more easier' xato, 'much easier' to'g'ri."
    }
  ],
  "ielts_a2_06_quantifiers_countability": [
    {
      "question": "The university conducted _______ research before approving the new curriculum.",
      "options": [
        "a great deal of",
        "many",
        "a number of",
        "several"
      ],
      "correctAnswer": "a great deal of",
      "explanation": "'Research' sanalmaydigan ot bo'lgani uchun unga 'a great deal of' yoki 'much' to'g'ri keladi ('many', 'several' sanaladigan ko'plik uchun)."
    },
    {
      "question": "Unfortunately, there is very _______ information available regarding this topic.",
      "options": [
        "little",
        "few",
        "a few",
        "many"
      ],
      "correctAnswer": "little",
      "explanation": "'Information' sanalmaydi, kamligini va yetarli emasligini bildirish uchun 'little' qo'yiladi."
    },
    {
      "question": "_______ students attended the seminar than were initially expected.",
      "options": [
        "Fewer",
        "Less",
        "Lesser",
        "Little"
      ],
      "correctAnswer": "Fewer",
      "explanation": "Sanaladigan ko'plik otlar ('students') bilan 'fewer' ishlatiladi ('less' sanalmaydiganlar uchun)."
    },
    {
      "question": "We faced _______ problems during the transition period.",
      "options": [
        "a number of",
        "a great amount of",
        "much",
        "a little"
      ],
      "correctAnswer": "a number of",
      "explanation": "'A number of + plural countable noun' (a number of problems)."
    },
    {
      "question": "How _______ furniture did you purchase for the new study center?",
      "options": [
        "much",
        "many",
        "few",
        "several"
      ],
      "correctAnswer": "much",
      "explanation": "'Furniture' ingliz tilida har doim sanalmaydigan birlik ot hisoblanadi: 'How much furniture'."
    },
    {
      "question": "There are _______ interesting articles published on this website.",
      "options": [
        "several",
        "much",
        "a little",
        "a large amount of"
      ],
      "correctAnswer": "several",
      "explanation": "'Articles' sanaladigan ko'plik bo'lgani uchun 'several' (bir nechta) to'g'ri."
    },
    {
      "question": "Which of the following nouns is UNCOUNTABLE in standard academic English?",
      "options": [
        "advice",
        "suggestion",
        "recommendation",
        "tip"
      ],
      "correctAnswer": "advice",
      "explanation": "'Advice' sanalmaydi ('an advice' deb bo'lmaydi; 'a piece of advice' deyiladi)."
    },
    {
      "question": "Only _______ people managed to pass the challenging entrance examination.",
      "options": [
        "a few",
        "few",
        "a little",
        "little"
      ],
      "correctAnswer": "a few",
      "explanation": "'Only a few' (faqat bir nechtagina odam) sanaladigan otlar bilan ishlatiladi."
    },
    {
      "question": "The project requires a substantial _______ of time and effort.",
      "options": [
        "amount",
        "number",
        "quantity of numbers",
        "many"
      ],
      "correctAnswer": "amount",
      "explanation": "'A substantial amount of + uncountable noun' (amount of time and effort)."
    },
    {
      "question": "Which sentence contains a quantifier ERROR?",
      "options": [
        "He gave me many useful advices before the test.",
        "He gave me a lot of useful advice before the test.",
        "He gave me several pieces of advice before the test.",
        "He gave me some useful advice before the test."
      ],
      "correctAnswer": "He gave me many useful advices before the test.",
      "explanation": "'Advice' sanalmaydi, unga '-s' qo'shilmaydi va 'many' bilan kelmaydi."
    }
  ],
  "ielts_a2_07_defining_relative_clauses": [
    {
      "question": "The tutor _______ marked my essay provided exceptionally constructive feedback.",
      "options": [
        "who",
        "which",
        "whom",
        "whose"
      ],
      "correctAnswer": "who",
      "explanation": "Shaxslar (insonlar) uchun ega vazifasidagi aniqlovchi olmosh 'who' hisoblanadi."
    },
    {
      "question": "The methodologies _______ were adopted in the study yielded reliable findings.",
      "options": [
        "that",
        "who",
        "whom",
        "whose"
      ],
      "correctAnswer": "that",
      "explanation": "Narsalar va tushunchalar ('methodologies') uchun 'that' yoki 'which' ishlatiladi."
    },
    {
      "question": "The student _______ research won first prize received a full scholarship.",
      "options": [
        "whose",
        "who",
        "whom",
        "which"
      ],
      "correctAnswer": "whose",
      "explanation": "Tegishlilik va egalikni ifodalashda 'whose + noun' (talabaning tadqiqoti) qo'yiladi."
    },
    {
      "question": "Is that the campus building _______ the conference takes place?",
      "options": [
        "where",
        "which",
        "that",
        "whose"
      ],
      "correctAnswer": "where",
      "explanation": "Joy va manzilni ko'rsatishda 'where' nisbiy olmoshi qo'llanadi."
    },
    {
      "question": "In defining relative clauses, when can the relative pronoun be omitted?",
      "options": [
        "When it serves as the object of the relative clause.",
        "When it serves as the subject of the sentence.",
        "Only in informal slang conversations.",
        "Relative pronouns can never be omitted."
      ],
      "correctAnswer": "When it serves as the object of the relative clause.",
      "explanation": "Nisbiy olmosh to'ldiruvchi (object) vazifasida bo'lsa (masalan: 'The book [that] I bought'), uni tushirib qoldirish mumkin."
    },
    {
      "question": "The university _______ I graduated from has an outstanding global reputation.",
      "options": [
        "which",
        "where",
        "what",
        "whose"
      ],
      "correctAnswer": "which",
      "explanation": "Gap oxirida 'from' predlogi bo'lgani uchun 'where' emas, balki 'which' yoki 'that' ishlatiladi ('which I graduated from')."
    },
    {
      "question": "1995 was the year _______ the World Trade Organization was established.",
      "options": [
        "when",
        "where",
        "which",
        "whose"
      ],
      "correctAnswer": "when",
      "explanation": "Vaqt tushunchasi ('the year') uchun 'when' nisbiy olmoshi ishlatiladi."
    },
    {
      "question": "The candidate _______ the committee selected had ten years of field experience.",
      "options": [
        "whom",
        "which",
        "where",
        "what"
      ],
      "correctAnswer": "whom",
      "explanation": "Rasmiy tilda inson to'ldiruvchi vazifasida kelganda 'whom' (yoki 'who') qo'yiladi."
    },
    {
      "question": "Why are commas NOT used in defining relative clauses?",
      "options": [
        "Because the clause provides essential identifying information.",
        "Because commas are never allowed in English grammar.",
        "Because the clause is purely parenthetical and optional.",
        "Because the sentence has two main subjects."
      ],
      "correctAnswer": "Because the clause provides essential identifying information.",
      "explanation": "Defining (chegaralovchi) ergash gaplar gapning ma'nosi uchun zarur bo'lgani sababli vergul bilan ajratilmaydi."
    },
    {
      "question": "Which sentence is grammatically correct?",
      "options": [
        "The software that we tested yesterday crashed twice.",
        "The software, that we tested yesterday, crashed twice.",
        "The software who we tested yesterday crashed twice.",
        "The software what we tested yesterday crashed twice."
      ],
      "correctAnswer": "The software that we tested yesterday crashed twice.",
      "explanation": "'That' bilan boshlanuvchi defining gaplar vergulsiz yoziladi va narsalar uchun ishlatiladi."
    }
  ],
  "ielts_a2_08_first_conditional": [
    {
      "question": "If students _______ regularly, they will achieve higher scores on the IELTS exam.",
      "options": [
        "practice",
        "will practice",
        "practiced",
        "would practice"
      ],
      "correctAnswer": "practice",
      "explanation": "First conditional qoidasi: 'If + Present Simple, will + base verb'."
    },
    {
      "question": "The global temperature _______ continue to rise if greenhouse gas emissions are not reduced.",
      "options": [
        "will",
        "would",
        "did",
        "would have"
      ],
      "correctAnswer": "will",
      "explanation": "Haqiqiy kelajakdagi oqibat uchun bosh gapda 'will' ishlatiladi."
    },
    {
      "question": "Unless the government _______ in renewable infrastructure, energy shortages will worsen.",
      "options": [
        "invests",
        "doesn't invest",
        "will invest",
        "invested"
      ],
      "correctAnswer": "invests",
      "explanation": "'Unless' o'z ichida 'if not' ma'nosini saqlaydi, shuning uchun ketidan inkor qo'yilmaydi va Present Simple qo'yiladi ('invests')."
    },
    {
      "question": "If you don't submit your application on time, the committee _______ your file.",
      "options": [
        "will not review",
        "would not review",
        "did not review",
        "does not review"
      ],
      "correctAnswer": "will not review",
      "explanation": "Kelasi oqibat inkori: 'will not review'."
    },
    {
      "question": "What will happen if the university _______ the tuition fees?",
      "options": [
        "increases",
        "will increase",
        "increased",
        "increase"
      ],
      "correctAnswer": "increases",
      "explanation": "'The university' uchinchi shaxs birlik, shuning uchun 'If ... increases'."
    },
    {
      "question": "As long as you _______ consistently, your speaking fluency will improve steadily.",
      "options": [
        "revise",
        "will revise",
        "revised",
        "would revise"
      ],
      "correctAnswer": "revise",
      "explanation": "'As long as' (modomiki / shart bilan) shart ergash bog'lovchisi bo'lib, Present Simple talab qiladi."
    },
    {
      "question": "Which sentence has a grammatical error in conditional formation?",
      "options": [
        "If it will rain tomorrow, we will cancel the field trip.",
        "If it rains tomorrow, we will cancel the field trip.",
        "Provided that it rains tomorrow, we will cancel the trip.",
        "Unless it stops raining, we will cancel the field trip."
      ],
      "correctAnswer": "If it will rain tomorrow, we will cancel the field trip.",
      "explanation": "'If' qismida hech qachon kelasi zamon 'will' ishlatilmaydi ('If it rains' bo'lishi shart)."
    },
    {
      "question": "If you encounter difficulties during the examination, _______ the invigilator immediately.",
      "options": [
        "inform",
        "you will inform",
        "you would inform",
        "informed"
      ],
      "correctAnswer": "inform",
      "explanation": "First conditional bosh gapida buyruq mayli (imperative: 'inform...') qo'llanishi mumkin."
    },
    {
      "question": "Provided that all conditions _______ met, the contract will be signed tomorrow.",
      "options": [
        "are",
        "will be",
        "were",
        "would be"
      ],
      "correctAnswer": "are",
      "explanation": "'Provided that' (agar / sharti bilan) ketidan Present Simple keladi: 'are met'."
    },
    {
      "question": "If you _______ hard now, you can pass the test without difficulty.",
      "options": [
        "study",
        "will study",
        "studied",
        "are studying hard"
      ],
      "correctAnswer": "study",
      "explanation": "'If you study' — shart qismida Present Simple."
    }
  ],
  "ielts_b1_01_second_conditional": [
    {
      "question": "If governments _______ more funding in public transport, traffic congestion would decrease.",
      "options": [
        "invested",
        "invest",
        "will invest",
        "would invest"
      ],
      "correctAnswer": "invested",
      "explanation": "Second conditional (taxminiy hozirgi/kelasi holat): 'If + Past Simple, would + base verb'."
    },
    {
      "question": "If I _______ in your position, I would consult an academic advisor.",
      "options": [
        "were",
        "was being",
        "am",
        "would be"
      ],
      "correctAnswer": "were",
      "explanation": "Rasmiy ingliz tilida va IELTS yozuvida 'If I were...' barcha shaxslar uchun standart hisoblanadi."
    },
    {
      "question": "What _______ you do if you were offered a full scholarship to Oxford?",
      "options": [
        "would",
        "will",
        "did",
        "can"
      ],
      "correctAnswer": "would",
      "explanation": "Noreal shart gapning so'rog'i: 'What would you do if you were offered...?'"
    },
    {
      "question": "If cities had more green spaces, residents _______ significantly lower stress levels.",
      "options": [
        "would experience",
        "will experience",
        "experienced",
        "experience"
      ],
      "correctAnswer": "would experience",
      "explanation": "Bosh gapda 'would + V1' bo'ladi: 'would experience'."
    },
    {
      "question": "If the tuition fees weren't so exorbitant, more students _______ higher education.",
      "options": [
        "could pursue",
        "can pursue",
        "will pursue",
        "pursue"
      ],
      "correctAnswer": "could pursue",
      "explanation": "Imkoniyatni ifodalashda 'would' o'rnida 'could + base verb' qo'llanilishi mumkin."
    },
    {
      "question": "He would speak English much more fluently if he _______ with native speakers.",
      "options": [
        "practiced",
        "practices",
        "will practice",
        "would practice"
      ],
      "correctAnswer": "practiced",
      "explanation": "'If' qismida Past Simple: 'if he practiced'."
    },
    {
      "question": "Which sentence expresses an imaginary hypothetical situation in the present?",
      "options": [
        "If I had more leisure time, I would take up oil painting.",
        "If I have time tomorrow, I will help you.",
        "If I had known, I would have told you.",
        "When I have time, I read books."
      ],
      "correctAnswer": "If I had more leisure time, I would take up oil painting.",
      "explanation": "Hozirgi vaqtda vaqt yetishmasligini xayolan tasavvur qilish Second Conditionaldir."
    },
    {
      "question": "If the experiment _______ successful, the researchers would publish the results immediately.",
      "options": [
        "were",
        "is",
        "will be",
        "would be"
      ],
      "correctAnswer": "were",
      "explanation": "Gipotetik shart uchun 'were' ishlatiladi."
    },
    {
      "question": "I wouldn't accept that job offer if I _______ you.",
      "options": [
        "were",
        "am",
        "had been",
        "would be"
      ],
      "correctAnswer": "were",
      "explanation": "'If I were you, I wouldn't...' (maslahat berish idiomatik qolipi)."
    },
    {
      "question": "Which sentence is grammatically INCORRECT in formal academic English?",
      "options": [
        "If I would have money, I would buy that software.",
        "If I had money, I would buy that software.",
        "Were I to have money, I would buy that software.",
        "If I possessed sufficient funds, I would purchase that software."
      ],
      "correctAnswer": "If I would have money, I would buy that software.",
      "explanation": "'If' qismida 'would' ishlatilishi qat'iyan xatodir."
    }
  ],
  "ielts_b1_02_third_conditional": [
    {
      "question": "If the government had taken preventative measures, the economic crisis _______ avoided.",
      "options": [
        "would have been",
        "would be",
        "had been",
        "will have been"
      ],
      "correctAnswer": "would have been",
      "explanation": "Third conditional (o'tgan zamondagi noreal afsus): 'If + Past Perfect, would have + V3'."
    },
    {
      "question": "She would have passed the exam if she _______ more consistently.",
      "options": [
        "had studied",
        "studied",
        "would study",
        "has studied"
      ],
      "correctAnswer": "had studied",
      "explanation": "'If' qismida Past Perfect: 'had studied'."
    },
    {
      "question": "If we had known about the schedule change, we _______ our travel plans.",
      "options": [
        "would have adjusted",
        "will adjust",
        "adjusted",
        "had adjusted"
      ],
      "correctAnswer": "would have adjusted",
      "explanation": "Bosh gapda 'would have + V3' (would have adjusted)."
    },
    {
      "question": "The company _______ bankrupt if the bank had refused the emergency loan.",
      "options": [
        "might have gone",
        "might go",
        "had gone",
        "goes"
      ],
      "correctAnswer": "might have gone",
      "explanation": "Ehtimollikni bildirish uchun 'might have + V3' ishlatiladi."
    },
    {
      "question": "If they _______ the warning signs, the tragic accident could have been prevented.",
      "options": [
        "hadn't ignored",
        "didn't ignore",
        "haven't ignored",
        "wouldn't ignore"
      ],
      "correctAnswer": "hadn't ignored",
      "explanation": "O'tgan zamondagi inkor shart: 'If they hadn't ignored'."
    },
    {
      "question": "What _______ differently if you had been the project manager at that time?",
      "options": [
        "would you have done",
        "would you do",
        "had you done",
        "did you do"
      ],
      "correctAnswer": "would you have done",
      "explanation": "Third conditional so'roq shakli: 'What would you have done...?'"
    },
    {
      "question": "If the safety inspector _______ the equipment yesterday, the malfunction would not have occurred.",
      "options": [
        "had checked",
        "checked",
        "has checked",
        "would check"
      ],
      "correctAnswer": "had checked",
      "explanation": "O'tib ketgan voqea sharti uchun Past Perfect ('had checked')."
    },
    {
      "question": "We could have arrived on time if there _______ so much traffic on the highway.",
      "options": [
        "hadn't been",
        "weren't",
        "hasn't been",
        "wouldn't be"
      ],
      "correctAnswer": "hadn't been",
      "explanation": "'If there hadn't been...' (agar tirbandlik bo'lmaganida edi)."
    },
    {
      "question": "Third conditional sentences primarily refer to:",
      "options": [
        "Hypothetical past events that did not actually occur.",
        "General scientific facts that are always true.",
        "Likely events that will probably happen tomorrow.",
        "Current habits and regular daily routines."
      ],
      "correctAnswer": "Hypothetical past events that did not actually occur.",
      "explanation": "Third conditional o'tmishda sodir bo'lmagan gipotetik holatlar va afsuslarni tasvirlaydi."
    },
    {
      "question": "Which sentence is grammatically correct?",
      "options": [
        "If I had known the deadline, I would have submitted the essay earlier.",
        "If I would have known the deadline, I had submitted the essay earlier.",
        "If I knew the deadline, I would submit the essay earlier yesterday.",
        "If I had known the deadline, I will have submitted the essay earlier."
      ],
      "correctAnswer": "If I had known the deadline, I would have submitted the essay earlier.",
      "explanation": "To'g'ri formula: 'If I had known..., I would have submitted...'."
    }
  ],
  "ielts_b1_03_mixed_conditionals": [
    {
      "question": "If I had accepted that job offer in London last year, I _______ in the UK right now.",
      "options": [
        "would be living",
        "would have lived",
        "will live",
        "had lived"
      ],
      "correctAnswer": "would be living",
      "explanation": "O'tgan zamon sharti (Past Perfect: had accepted) hozirgi natijaga (would + be V-ing right now) olib kelganda Mixed Conditional ishlatiladi."
    },
    {
      "question": "If he weren't so arrogant, he _______ more supportive colleagues during the crisis.",
      "options": [
        "would have had",
        "would have",
        "will have",
        "had had"
      ],
      "correctAnswer": "would have had",
      "explanation": "Umumiy doimiy fe'l-atvor (If he weren't so arrogant) o'tgan zamondagi oqibatga (would have had) ta'sir ko'rsatmoqda."
    },
    {
      "question": "If they _______ fluent English, they would have been hired for the managerial post yesterday.",
      "options": [
        "spoke",
        "had spoken",
        "speak",
        "would speak"
      ],
      "correctAnswer": "spoke",
      "explanation": "Hozirgi doimiy xususiyat (If they spoke - hozir bilishmaydi) o'tgan kungi ishga qabul qilinishga (would have been hired) ta'sir qilyapti."
    },
    {
      "question": "She _______ in hospital today if she had worn a seatbelt during the collision.",
      "options": [
        "wouldn't be",
        "wouldn't have been",
        "isn't",
        "won't be"
      ],
      "correctAnswer": "wouldn't be",
      "explanation": "O'tgan zamondagi xato (had worn) bugungi holatni (wouldn't be in hospital today) belgilamoqda."
    },
    {
      "question": "What defines a mixed conditional sentence?",
      "options": [
        "It combines a past condition with a present result, or a present condition with a past result.",
        "It combines two future clauses using 'will' and 'shall'.",
        "It mixes passive voice with imperative commands.",
        "It uses past continuous in both main and subordinate clauses."
      ],
      "correctAnswer": "It combines a past condition with a present result, or a present condition with a past result.",
      "explanation": "Mixed conditional turli zamon qatlamlarini (o'tmish va hozir) mantiqiy bog'laydi."
    },
    {
      "question": "If you had taken my advice earlier, you _______ struggling with this problem now.",
      "options": [
        "wouldn't be",
        "wouldn't have been",
        "weren't",
        "won't be"
      ],
      "correctAnswer": "wouldn't be",
      "explanation": "'Now' ko'rsatkichi bor, shuning uchun 'wouldn't be struggling'."
    },
    {
      "question": "If I _______ born into a wealthy family, I wouldn't have had to work three jobs during university.",
      "options": [
        "were",
        "had been",
        "am",
        "would be"
      ],
      "correctAnswer": "had been",
      "explanation": "Tug'ilish o'tgan zamondagi voqea bo'lgani uchun 'had been born'."
    },
    {
      "question": "If we had missed the train, where _______ staying tonight?",
      "options": [
        "would we be",
        "would we have been",
        "will we be",
        "are we"
      ],
      "correctAnswer": "would we be",
      "explanation": "O'tmishdagi voqea va bugun tunda qayerda qolishimiz: 'would we be staying tonight?'"
    },
    {
      "question": "Which sentence is an example of a mixed conditional?",
      "options": [
        "If he had practiced more, he would be a better pianist today.",
        "If he practices more, he will become a better pianist.",
        "If he practiced more, he would become a better pianist.",
        "If he had practiced more, he would have played better yesterday."
      ],
      "correctAnswer": "If he had practiced more, he would be a better pianist today.",
      "explanation": "'Had practiced' (o'tmish) va 'would be today' (hozir) — klassik aralash shart."
    },
    {
      "question": "If our team weren't so dedicated, the project _______ abandoned weeks ago.",
      "options": [
        "would have been",
        "would be",
        "had been",
        "was"
      ],
      "correctAnswer": "would have been",
      "explanation": "Hozirgi doimiy jamoa xarakteri va haftalar oldingi o'tgan natija: 'would have been abandoned'."
    }
  ],
  "ielts_b1_04_used_to_be_used_to": [
    {
      "question": "I _______ live in a small village, but now I live in a bustling metropolis.",
      "options": [
        "used to",
        "am used to",
        "use to",
        "get used to"
      ],
      "correctAnswer": "used to",
      "explanation": "O'tmishdagi odat yoki holat bo'lib, hozir to'xtagan bo'lsa 'used to + bare infinitive' ishlatiladi."
    },
    {
      "question": "Living in London was difficult at first, but I am gradually getting _______ on the left side of the road.",
      "options": [
        "used to driving",
        "used to drive",
        "use to driving",
        "used driving"
      ],
      "correctAnswer": "used to driving",
      "explanation": "'Get used to + V-ing' (ko'nikish jarayoni): 'getting used to driving'."
    },
    {
      "question": "She has lived in northern Canada for five years, so she _______ freezing temperatures.",
      "options": [
        "is used to",
        "used to",
        "uses to",
        "got used"
      ],
      "correctAnswer": "is used to",
      "explanation": "'Be used to + noun / V-ing' (ko'nikib qolgan, odatlangan bo'lish): 'is used to freezing temperatures'."
    },
    {
      "question": "Did you _______ wake up early when you were in high school?",
      "options": [
        "use to",
        "used to",
        "used",
        "be used to"
      ],
      "correctAnswer": "use to",
      "explanation": "'Did' yordamchi fe'li bo'lgan savolda 'use to' shakli qo'llaniladi ('Did you use to...')."
    },
    {
      "question": "Which sentence means 'I have developed a habit and it feels normal now'?",
      "options": [
        "I am used to waking up at 6 AM.",
        "I used to wake up at 6 AM.",
        "I use to wake up at 6 AM.",
        "I was used to wake up at 6 AM."
      ],
      "correctAnswer": "I am used to waking up at 6 AM.",
      "explanation": "'I am used to waking up' hozir bu narsa odatiy va normal holatga aylanganini bildiradi."
    },
    {
      "question": "I didn't _______ like classical music, but now I appreciate it deeply.",
      "options": [
        "use to",
        "used to",
        "used",
        "be used to"
      ],
      "correctAnswer": "use to",
      "explanation": "Inkor gapda 'didn't use to'."
    },
    {
      "question": "It takes international students several months to get used to _______ academic essays in English.",
      "options": [
        "writing",
        "write",
        "written",
        "be writing"
      ],
      "correctAnswer": "writing",
      "explanation": "'Get used to' birikmasidagi 'to' predlog bo'lgani uchun ketidan gerund (-ing) keladi."
    },
    {
      "question": "There _______ be an ancient library in the center of the old town.",
      "options": [
        "used to",
        "was used to",
        "used",
        "is used to"
      ],
      "correctAnswer": "used to",
      "explanation": "O'tgan zamondagi mavjud bo'lgan holat: 'There used to be...'."
    },
    {
      "question": "Why is 'I am used to live here' grammatically incorrect?",
      "options": [
        "Because 'be used to' requires a gerund (-ing) or noun, not a bare infinitive.",
        "Because 'used' cannot follow the verb 'to be'.",
        "Because 'live' is an irregular verb.",
        "Because 'here' requires past tense."
      ],
      "correctAnswer": "Because 'be used to' requires a gerund (-ing) or noun, not a bare infinitive.",
      "explanation": "'Be used to' strukturasida 'to' predlog bo'lib, unga gerund (living) ulanadi."
    },
    {
      "question": "My grandfather _______ walk five miles to school every day in the winter.",
      "options": [
        "used to",
        "is used to",
        "was using to",
        "got used"
      ],
      "correctAnswer": "used to",
      "explanation": "O'tmishdagi muntazam takrorlangan harakat: 'used to walk'."
    }
  ],
  "ielts_b1_05_modals_deduction_present_past": [
    {
      "question": "Look at the empty parking lot. The professor _______ already left the campus.",
      "options": [
        "must have",
        "can't have",
        "should have",
        "needs to"
      ],
      "correctAnswer": "must have",
      "explanation": "O'tgan zamonga oid qat'iy ishonchli xulosa: 'must have + V3' (ketgan bo'lishi aniq)."
    },
    {
      "question": "He only started learning Spanish last month; he _______ be fluent yet.",
      "options": [
        "can't",
        "mustn't",
        "shouldn't",
        "won't"
      ],
      "correctAnswer": "can't",
      "explanation": "Hozirgi zamondagi mantiqiy inkor xulosa: 'can't be' (bo'lishi mumkin emas). 'Mustn't' xulosada ishlatilmaydi."
    },
    {
      "question": "Where is Sarah? — She _______ be in the library, but I am not entirely certain.",
      "options": [
        "might",
        "must",
        "can't",
        "should"
      ],
      "correctAnswer": "might",
      "explanation": "Noaniq ehtimollik uchun 'might / may / could' ishlatiladi."
    },
    {
      "question": "The lights are off and nobody is answering the doorbell. They _______ be at home.",
      "options": [
        "can't",
        "mustn't",
        "could",
        "shouldn't"
      ],
      "correctAnswer": "can't",
      "explanation": "Mantiqiy imkonsizlik: 'can't be at home'."
    },
    {
      "question": "The scientific paper contains numerous calculation errors. The authors _______ reviewed the data carefully.",
      "options": [
        "can't have",
        "must have",
        "should have",
        "ought to"
      ],
      "correctAnswer": "can't have",
      "explanation": "O'tmishdagi harakatning bo'lishi imkonsizligi: 'can't have + V3' (sinchkovlik bilan tekshirgan bo'lishlari mumkin emas)."
    },
    {
      "question": "I can't find my keys anywhere! — You _______ left them in the lecture theater.",
      "options": [
        "could have",
        "mustn't have",
        "can have",
        "should"
      ],
      "correctAnswer": "could have",
      "explanation": "O'tgan zamondagi ehtimoliy taxmin: 'could have + V3'."
    },
    {
      "question": "She scored Band 9 on her first attempt. She _______ studied exceptionally hard.",
      "options": [
        "must have",
        "can't have",
        "would have",
        "might"
      ],
      "correctAnswer": "must have",
      "explanation": "Mantiqiy kuchli xulosa: 'must have studied'."
    },
    {
      "question": "Which modal expresses certainty that something was impossible in the past?",
      "options": [
        "couldn't have / can't have",
        "mustn't have",
        "shouldn't have",
        "might not have"
      ],
      "correctAnswer": "couldn't have / can't have",
      "explanation": "O'tmishdagi mantiqiy imkonsizlik 'can't have / couldn't have + V3' orqali ifodalanadi."
    },
    {
      "question": "Why is 'He mustn't have stolen the money' incorrect in standard British English for deduction?",
      "options": [
        "Because 'can't have' must be used for negative past deductions instead of 'mustn't have'.",
        "Because 'stolen' is an incorrect past participle.",
        "Because deduction modals cannot be used with money.",
        "Because 'mustn't' only expresses future predictions."
      ],
      "correctAnswer": "Because 'can't have' must be used for negative past deductions instead of 'mustn't have'.",
      "explanation": "Xulosa chiqarishda inkor uchun 'mustn't have' emas, 'can't have / couldn't have' ishlatiladi ('must not' faqat taqiqni bildiradi)."
    },
    {
      "question": "The ground is completely wet this morning. It _______ rained heavily overnight.",
      "options": [
        "must have",
        "can't have",
        "should have",
        "will have"
      ],
      "correctAnswer": "must have",
      "explanation": "Ko'rinib turgan dalil (yer ho'lligi) asosida aniq o'tgan xulosa: 'must have rained'."
    }
  ],
  "ielts_b1_06_passive_modals_perfect": [
    {
      "question": "The historical documents _______ in temperature-controlled vaults to prevent degradation.",
      "options": [
        "must be preserved",
        "must preserve",
        "must have preserved",
        "must to be preserved"
      ],
      "correctAnswer": "must be preserved",
      "explanation": "Modal fe'llarning hozirgi majhul shakli 'modal + be + V3' orqali yasaladi."
    },
    {
      "question": "The final report was full of inaccuracies; it _______ by a senior analyst before publication.",
      "options": [
        "should have been reviewed",
        "should be reviewed",
        "should review",
        "must be reviewed"
      ],
      "correctAnswer": "should have been reviewed",
      "explanation": "O'tmishda bajarilishi kerak bo'lgan, lekin qilinmagan majhul harakat: 'should have been + V3'."
    },
    {
      "question": "Strict environmental regulations _______ by the municipal authorities immediately.",
      "options": [
        "ought to be enforced",
        "ought to enforce",
        "ought enforce",
        "ought being enforced"
      ],
      "correctAnswer": "ought to be enforced",
      "explanation": "'Ought to be + V3' (ought to be enforced) majhul nisbatdagi maslahat/talab."
    },
    {
      "question": "The contaminated water supplies _______ with chlorine immediately after the flood.",
      "options": [
        "could have been treated",
        "could treat",
        "can be treated",
        "could be treating"
      ],
      "correctAnswer": "could have been treated",
      "explanation": "O'tgan zamondagi imkoniyat majhul nisbatda: 'could have been treated'."
    },
    {
      "question": "Confidential medical records _______ without explicit patient consent.",
      "options": [
        "cannot be shared",
        "cannot share",
        "can be shared not",
        "cannot have share"
      ],
      "correctAnswer": "cannot be shared",
      "explanation": "Taqiq va imkonsizlik majhul nisbatda: 'cannot be shared'."
    },
    {
      "question": "The rare artifacts _______ stolen by an organized criminal network.",
      "options": [
        "might have been",
        "might be",
        "might have",
        "might"
      ],
      "correctAnswer": "might have been",
      "explanation": "O'tgan zamondagi ehtimoliy majhul xulosa: 'might have been stolen'."
    },
    {
      "question": "New safety protocols _______ implemented across all manufacturing plants by the end of this month.",
      "options": [
        "have to be",
        "has to be",
        "have to been",
        "having to be"
      ],
      "correctAnswer": "have to be",
      "explanation": "'Protocols' ko'plik ot bo'lgani uchun 'have to be implemented' to'g'ri."
    },
    {
      "question": "Why was the flight delayed? — The engine _______ by ground engineers before takeoff.",
      "options": [
        "had to be inspected",
        "had to inspect",
        "must be inspected",
        "has to be inspected"
      ],
      "correctAnswer": "had to be inspected",
      "explanation": "O'tgan zamondagi zarurat majhul nisbatda: 'had to be inspected'."
    },
    {
      "question": "Which sentence is grammatically INCORRECT?",
      "options": [
        "The research paper should have submitted earlier.",
        "The research paper should have been submitted earlier.",
        "The research paper can be submitted tomorrow.",
        "The research paper must be reviewed carefully."
      ],
      "correctAnswer": "The research paper should have submitted earlier.",
      "explanation": "'The research paper' o'zi topshirmaydi, majhul nisbatda bo'lishi kerak: 'should have been submitted'."
    },
    {
      "question": "These delicate chemicals _______ away from direct sunlight.",
      "options": [
        "need to be kept",
        "need to keep",
        "need keep",
        "needs to be kept"
      ],
      "correctAnswer": "need to be kept",
      "explanation": "'Chemicals need to be kept' majhul infinitiv shakli."
    }
  ],
  "ielts_b1_07_reported_speech_indirect": [
    {
      "question": "Direct: 'I have finished my dissertation,' she said. -> Indirect:",
      "options": [
        "She said that she had finished her dissertation.",
        "She said that she has finished her dissertation.",
        "She said that she finished her dissertation.",
        "She said that she would finish her dissertation."
      ],
      "correctAnswer": "She said that she had finished her dissertation.",
      "explanation": "O'tgan zamondagi hisobotda Present Perfect ('have finished') Past Perfect ('had finished') ga o'zgaradi."
    },
    {
      "question": "Direct: 'Where are the laboratory keys?' the professor asked. -> Indirect:",
      "options": [
        "The professor asked where the laboratory keys were.",
        "The professor asked where were the laboratory keys.",
        "The professor asked where are the laboratory keys.",
        "The professor asked if the laboratory keys were."
      ],
      "correctAnswer": "The professor asked where the laboratory keys were.",
      "explanation": "Bilvosita so'roqlarda so'roq tartibi yo'qolib, to'g'ri so'z tartibi qo'llanadi: 'where the keys were'."
    },
    {
      "question": "Direct: 'Do not touch any electrical cables,' the supervisor warned us. -> Indirect:",
      "options": [
        "The supervisor warned us not to touch any electrical cables.",
        "The supervisor warned us to not touch any electrical cables.",
        "The supervisor warned us that we don't touch cables.",
        "The supervisor warned us not touching any cables."
      ],
      "correctAnswer": "The supervisor warned us not to touch any electrical cables.",
      "explanation": "Inkor buyruq mayli 'warned someone not to + verb' shakliga o'tadi."
    },
    {
      "question": "Direct: 'Can you participate in the pilot trial tomorrow?' she asked me. -> Indirect:",
      "options": [
        "She asked me whether I could participate in the pilot trial the following day.",
        "She asked me could I participate in the pilot trial tomorrow.",
        "She asked me if I can participate in the trial tomorrow.",
        "She asked me that I could participate in the pilot trial."
      ],
      "correctAnswer": "She asked me whether I could participate in the pilot trial the following day.",
      "explanation": "Ha/yo'q so'roqlari 'whether/if', 'can' -> 'could', va 'tomorrow' -> 'the following day' shakliga o'zgaradi."
    },
    {
      "question": "He admitted _______ the data without proper verification.",
      "options": [
        "fabricating",
        "to fabricate",
        "that he fabricate",
        "of fabricating"
      ],
      "correctAnswer": "fabricating",
      "explanation": "'Admit' hisobot fe'lidan keyin gerund (-ing) yoki 'that-clause' keladi: 'admitted fabricating'."
    },
    {
      "question": "The minister denied _______ any bribes from the construction corporation.",
      "options": [
        "accepting",
        "to accept",
        "that he accepts",
        "to have accepted"
      ],
      "correctAnswer": "accepting",
      "explanation": "'Deny' hisobot fe'li gerund talab qiladi: 'denied accepting'."
    },
    {
      "question": "The researcher suggested _______ a larger sample size in future experiments.",
      "options": [
        "using",
        "to use",
        "we will use",
        "us to use"
      ],
      "correctAnswer": "using",
      "explanation": "'Suggest' fe'lidan keyin 'to-infinitive' kelmaydi; to'g'ridan-to'g'ri gerund keladi: 'suggested using'."
    },
    {
      "question": "She congratulated me _______ achieving an overall Band 8.5 on the IELTS.",
      "options": [
        "on",
        "for",
        "at",
        "about"
      ],
      "correctAnswer": "on",
      "explanation": "'Congratulate someone on + V-ing/noun' turg'un predlogli birikmadir."
    },
    {
      "question": "Direct: 'I will attend the lecture,' he said. -> Reported speech:",
      "options": [
        "He said that he would attend the lecture.",
        "He said that he will attend the lecture.",
        "He said that he attends the lecture.",
        "He said that he had attended the lecture."
      ],
      "correctAnswer": "He said that he would attend the lecture.",
      "explanation": "'Will' o'tgan zamondagi ko'chirma gapda 'would' ga aylanadi."
    },
    {
      "question": "Which reporting structure is INCORRECT?",
      "options": [
        "He suggested me to visit the university.",
        "He suggested that I visit the university.",
        "He suggested visiting the university.",
        "He advised me to visit the university."
      ],
      "correctAnswer": "He suggested me to visit the university.",
      "explanation": "'Suggest someone to do' deb bo'lmaydi; 'suggest that...' yoki 'advise someone to do' to'g'ri."
    }
  ],
  "ielts_b1_08_gerunds_vs_infinitives": [
    {
      "question": "Many young professionals avoid _______ in high-pressure corporate environments.",
      "options": [
        "working",
        "to work",
        "work",
        "to working"
      ],
      "correctAnswer": "working",
      "explanation": "'Avoid' fe'li har doim gerund (-ing) talab qiladi: 'avoid working'."
    },
    {
      "question": "The university agreed _______ the tuition fees for students with exceptional academic merit.",
      "options": [
        "to waive",
        "waiving",
        "waive",
        "to waiving"
      ],
      "correctAnswer": "to waive",
      "explanation": "'Agree' fe'li 'to-infinitive' bilan ishlatiladi: 'agreed to waive'."
    },
    {
      "question": "Please remember _______ off the laboratory equipment before leaving the building.",
      "options": [
        "to turn",
        "turning",
        "turn",
        "turned"
      ],
      "correctAnswer": "to turn",
      "explanation": "Kelajakda bajarilishi kerak bo'lgan vazifani eslash uchun 'remember + to-infinitive' ishlatiladi."
    },
    {
      "question": "I distinctly remember _______ the entrance key on the kitchen table this morning.",
      "options": [
        "placing",
        "to place",
        "place",
        "placed"
      ],
      "correctAnswer": "placing",
      "explanation": "O'tmishda sodir bo'lgan xotirani eslash uchun 'remember + V-ing' ishlatiladi."
    },
    {
      "question": "The committee stopped _______ the preliminary proposals to take a brief coffee recess.",
      "options": [
        "evaluating",
        "to evaluate",
        "evaluate",
        "evaluated"
      ],
      "correctAnswer": "evaluating",
      "explanation": "Muayyan faoliyatni to'xtatish (faoliyat tugashi) uchun 'stop + V-ing' ishlatiladi."
    },
    {
      "question": "On the way to the library, she stopped _______ an iced coffee.",
      "options": [
        "to purchase",
        "purchasing",
        "purchase",
        "purchased"
      ],
      "correctAnswer": "to purchase",
      "explanation": "Boshqa bir maqsad uchun to'xtash maqsad ma'nosida 'stop + to-infinitive' talab qiladi."
    },
    {
      "question": "I regret _______ you that your manuscript does not meet our publication standards.",
      "options": [
        "to inform",
        "informing",
        "inform",
        "informed"
      ],
      "correctAnswer": "to inform",
      "explanation": "Nojo'ya yoki rasmiy yomon xabarni yetkazishdan oldin 'regret to inform/say' iborasi qo'llanadi."
    },
    {
      "question": "He deeply regrets _______ so many opportunities during his undergraduate studies.",
      "options": [
        "wasting",
        "to waste",
        "waste",
        "wasted"
      ],
      "correctAnswer": "wasting",
      "explanation": "O'tmishda qilingan xatoga afsuslanish: 'regret + V-ing'."
    },
    {
      "question": "We are looking forward to _______ the cultural heritage sites during our stay.",
      "options": [
        "visiting",
        "visit",
        "visited",
        "be visiting"
      ],
      "correctAnswer": "visiting",
      "explanation": "'Look forward to' birikmasidagi 'to' predlog bo'lgani uchun ketidan gerund (-ing) keladi."
    },
    {
      "question": "Which verb is followed by a gerund ONLY?",
      "options": [
        "postpone",
        "decide",
        "refuse",
        "promise"
      ],
      "correctAnswer": "postpone",
      "explanation": "'Postpone' fe'lidan keyin doim gerund keladi (masalan: postpone making a decision). Boshqalari esa 'to-infinitive' oladi."
    }
  ],
  "ielts_b1_09_cohesion_concession": [
    {
      "question": "Which discourse marker expresses contrast between two independent clauses?",
      "options": [
        "On the contrary",
        "However",
        "Furthermore",
        "In addition"
      ],
      "correctAnswer": "However",
      "explanation": "'However' (ammo / biroq) mustaqil jumlalar orasidagi ziddiyatni ifodalashda qo'llaniladi."
    },
    {
      "question": "The initial cost was high; _______, the long-term savings justified the expenditure.",
      "options": [
        "nevertheless",
        "moreover",
        "as a consequence",
        "similarly"
      ],
      "correctAnswer": "nevertheless",
      "explanation": "'Nevertheless' (shunga qaramay) ziddiyatli ijobiy natijani ko'rsatadi."
    },
    {
      "question": "_______ the rapid expansion of renewable technology, fossil fuels still dominate the energy sector.",
      "options": [
        "Despite",
        "Although",
        "Whereas",
        "While"
      ],
      "correctAnswer": "Despite",
      "explanation": "'The rapid expansion...' ot birikmasi bo'lgani uchun 'Despite' qo'yiladi."
    },
    {
      "question": "Technological innovation boosts productivity; _______, it can exacerbate social isolation.",
      "options": [
        "on the other hand",
        "in conclusion",
        "for instance",
        "likewise"
      ],
      "correctAnswer": "on the other hand",
      "explanation": "Boshqa bir qarama-qarshi jihatni ko'rsatishda 'on the other hand' ishlatiladi."
    },
    {
      "question": "Which linking word is used to add reinforcing supplementary information?",
      "options": [
        "Furthermore",
        "Conversely",
        "Although",
        "Nonetheless"
      ],
      "correctAnswer": "Furthermore",
      "explanation": "'Furthermore' (bundan tashqari / yana shuni ta'kidlash joizki) fikrni kuchaytiruvchi qo'shimcha dalil keltiradi."
    },
    {
      "question": "The study had a small sample size; _______, the preliminary results should be interpreted cautiously.",
      "options": [
        "therefore",
        "nevertheless",
        "on the contrary",
        "conversely"
      ],
      "correctAnswer": "therefore",
      "explanation": "Mantiqiy natijani (oqibatni) bildirish uchun 'therefore' (shuning uchun) ishlatiladi."
    },
    {
      "question": "Which linker is best suited to introduce an opposing viewpoint in IELTS Writing Task 2?",
      "options": [
        "Conversely",
        "In fact",
        "Namely",
        "Thus"
      ],
      "correctAnswer": "Conversely",
      "explanation": "'Conversely' (aksincha / o'z navbatida) mutlaqo teskari mulohazani kiritish uchun akademik vosita hisoblanadi."
    },
    {
      "question": "Electric cars produce zero tailpipe emissions; _______, manufacturing batteries entails notable environmental costs.",
      "options": [
        "yet",
        "so",
        "consequently",
        "because"
      ],
      "correctAnswer": "yet",
      "explanation": "'Yet' (lekin / shunga qaramasdan) qarama-qarshi faktni kiritadi."
    },
    {
      "question": "What is the primary function of cohesive devices in IELTS Writing?",
      "options": [
        "To establish logical relationships between ideas and ensure smooth transitions.",
        "To make every paragraph as long as possible.",
        "To avoid using any full stops or commas.",
        "To translate colloquial idioms into technical jargon."
      ],
      "correctAnswer": "To establish logical relationships between ideas and ensure smooth transitions.",
      "explanation": "Bog'lovchi vositalar g'oyalar o'rtasida ravon mantiqiy aloqani ta'minlaydi (Coherence and Cohesion kriteriyasi)."
    },
    {
      "question": "Which transition word indicates cause and effect?",
      "options": [
        "Consequently",
        "Whereas",
        "Alternatively",
        "Regardless"
      ],
      "correctAnswer": "Consequently",
      "explanation": "'Consequently' (natijada / oqibatda) sabab-natija aloqadorligini ifodalaydi."
    }
  ],
  "ielts_b2_01_adverbial_clauses": [
    {
      "question": "_______ the survey was conducted anonymously, participants answered with total candor.",
      "options": [
        "Since",
        "Although",
        "While",
        "Despite"
      ],
      "correctAnswer": "Since",
      "explanation": "'Since' sabab ma'nosida ('chunki / ... bo'lgani sababli') ishlatilgan."
    },
    {
      "question": "The government increased tariffs _______ protect domestic agricultural industries from foreign competition.",
      "options": [
        "in order to",
        "so that",
        "in case",
        "because of"
      ],
      "correctAnswer": "in order to",
      "explanation": "'In order to + bare infinitive' maqsadni ifodalashda qo'llaniladi."
    },
    {
      "question": "The data was encrypted _______ unauthorized parties might gain access to private records.",
      "options": [
        "lest",
        "so that",
        "provided",
        "unless"
      ],
      "correctAnswer": "lest",
      "explanation": "'Lest' (... bo'lmasin deb / xavfidan qochish uchun) rasmiy akademik holatda salbiy ehtimolni oldini olishni bildiradi."
    },
    {
      "question": "Please carry an umbrella with you _______ it rains during the outdoor ceremony.",
      "options": [
        "in case",
        "if only",
        "unless",
        "provided"
      ],
      "correctAnswer": "in case",
      "explanation": "'In case' (mabodo ... bo'lib qolsa degan maqsadda) ehtiyot chorasini bildiradi."
    },
    {
      "question": "The curriculum was restructured _______ all students would benefit from modern digital competencies.",
      "options": [
        "so that",
        "in order to",
        "lest",
        "because of"
      ],
      "correctAnswer": "so that",
      "explanation": "'So that + subject + modal verb (would benefit)' to'liq maqsad ergash gapini tuzadi."
    },
    {
      "question": "_______ the economic crisis deepened, consumer confidence plummeted steadily.",
      "options": [
        "As",
        "While that",
        "In spite",
        "Provided"
      ],
      "correctAnswer": "As",
      "explanation": "'As' bu yerda 'vaqt o'tishi va voqeaning rivojlanishi bilan' (mutanosib ravishda) ma'nosida ishlatilgan."
    },
    {
      "question": "They postponed the outdoor archaeological excavation _______ the adverse atmospheric conditions.",
      "options": [
        "owing to",
        "because",
        "since",
        "as"
      ],
      "correctAnswer": "owing to",
      "explanation": "'Owing to + noun phrase' (owing to the adverse atmospheric conditions)."
    },
    {
      "question": "Which conjunction introduces an adverbial clause of concession?",
      "options": [
        "Even though",
        "In order that",
        "Provided that",
        "As long as"
      ],
      "correctAnswer": "Even though",
      "explanation": "'Even though' to'siqsiz ziddiyat (concession) ergash gapini hosil qiladi."
    },
    {
      "question": "The experimental drug showed promising efficacy, _______ long-term toxicity remains unverified.",
      "options": [
        "though",
        "because",
        "due to",
        "in case"
      ],
      "correctAnswer": "though",
      "explanation": "'Though' (garchi ... bo'lsa ham) ziddiyatni bildiradi."
    },
    {
      "question": "Which sentence contains an error in conjunction usage?",
      "options": [
        "Owing to he was unqualified, he was rejected.",
        "Owing to his lack of qualifications, he was rejected.",
        "Because he was unqualified, he was rejected.",
        "Since he lacked qualifications, he was rejected."
      ],
      "correctAnswer": "Owing to he was unqualified, he was rejected.",
      "explanation": "'Owing to' to'liq gap olmaydi, ot birikmasi oladi ('Owing to his lack of qualifications')."
    }
  ],
  "ielts_b2_02_advanced_relatives_prep": [
    {
      "question": "The scientific foundation _______ the scholarship was granted congratulated the young researcher.",
      "options": [
        "from which",
        "by whom",
        "where",
        "at that"
      ],
      "correctAnswer": "from which",
      "explanation": "Tashkilotdan grant olish: 'from which the scholarship was granted'."
    },
    {
      "question": "She collaborated with three statisticians, all of _______ held doctorates from Cambridge.",
      "options": [
        "whom",
        "who",
        "which",
        "whose"
      ],
      "correctAnswer": "whom",
      "explanation": "Predlogdan keyin insonlar uchun doim 'whom' ishlatiladi ('all of whom')."
    },
    {
      "question": "The conference covered diverse themes, none of _______ had been thoroughly explored before.",
      "options": [
        "which",
        "whom",
        "that",
        "what"
      ],
      "correctAnswer": "which",
      "explanation": "Narsalar va mavzular uchun predlogdan keyin faqat 'which' keladi ('none of which')."
    },
    {
      "question": "The methodology _______ the investigators reached their conclusions has been questioned.",
      "options": [
        "by which",
        "in whom",
        "whose",
        "at what"
      ],
      "correctAnswer": "by which",
      "explanation": "Usul/metodologiya orqali xulosa chiqarish: 'the methodology by which'."
    },
    {
      "question": "Is that the ancient manuscript _______ you referred in your literature review?",
      "options": [
        "to which",
        "at which",
        "on that",
        "by which"
      ],
      "correctAnswer": "to which",
      "explanation": "'Refer to' fe'li 'to' predlogini oladi, shuning uchun 'to which you referred'."
    },
    {
      "question": "We visited several historical archives, the most notable of _______ was preserved in Florence.",
      "options": [
        "which",
        "whom",
        "that",
        "whose"
      ],
      "correctAnswer": "which",
      "explanation": "'The most notable of which' (ulardan eng e'tiborga loyig'i)."
    },
    {
      "question": "The professor _______ recommendation letter I secured is an esteemed authority in linguistics.",
      "options": [
        "whose",
        "whom",
        "of which",
        "who"
      ],
      "correctAnswer": "whose",
      "explanation": "Egalik ifodasi: 'whose recommendation letter'."
    },
    {
      "question": "The speed _______ the disease disseminated across borders alarmed health officials.",
      "options": [
        "at which",
        "with that",
        "by whom",
        "in what"
      ],
      "correctAnswer": "at which",
      "explanation": "'Speed' tushunchasi 'at' predlogi bilan keladi: 'at which the disease disseminated'."
    },
    {
      "question": "Why is 'The person to that I spoke' grammatically incorrect in standard English?",
      "options": [
        "Because 'that' can never be preceded by a preposition in relative clauses.",
        "Because 'spoke' must always be followed by 'with'.",
        "Because 'person' requires 'which'.",
        "Because relative clauses cannot use past tense."
      ],
      "correctAnswer": "Because 'that' can never be preceded by a preposition in relative clauses.",
      "explanation": "Nisbiy ergash gaplarda predlogdan keyin hech qachon 'that' kelmaydi ('to whom' bo'lishi shart)."
    },
    {
      "question": "The extent _______ poverty influences scholastic performance was carefully evaluated.",
      "options": [
        "to which",
        "in which",
        "at which",
        "from which"
      ],
      "correctAnswer": "to which",
      "explanation": "'To what extent' iborasidan kelib chiqqan holda: 'the extent to which'."
    }
  ],
  "ielts_b2_03_future_continuous_perfect": [
    {
      "question": "By the year 2030, scientists _______ a viable alternative to fossil fuel combustion.",
      "options": [
        "will have developed",
        "will develop",
        "are developing",
        "will be developing"
      ],
      "correctAnswer": "will have developed",
      "explanation": "'By + future time' bilan kelajakdagi aniq muddatgacha tugallanadigan harakat uchun Future Perfect ('will have developed') ishlatiladi."
    },
    {
      "question": "This time next week, candidates _______ their official IELTS examinations in test centers worldwide.",
      "options": [
        "will be sitting",
        "will sit",
        "will have sat",
        "are sat"
      ],
      "correctAnswer": "will be sitting",
      "explanation": "'This time next week' kelasi zamondagi muayyan lahzada davom etayotgan jarayonni bildiradi (Future Continuous: 'will be sitting')."
    },
    {
      "question": "By next November, Professor Evans _______ at this research institute for a quarter of a century.",
      "options": [
        "will have been teaching",
        "will be teaching",
        "is teaching",
        "teaches"
      ],
      "correctAnswer": "will have been teaching",
      "explanation": "Kelajakdagi vaqtgacha qancha vaqt davom etgan bo'lishini ko'rsatishda Future Perfect Continuous ishlatiladi."
    },
    {
      "question": "Don't call me between 2 PM and 4 PM tomorrow because I _______ a crucial clinical interview.",
      "options": [
        "will be conducting",
        "will conduct",
        "will have conducted",
        "conduct"
      ],
      "correctAnswer": "will be conducting",
      "explanation": "Kelajakdagi belgilangan vaqt oralig'ida davom etayotgan harakat: 'will be conducting'."
    },
    {
      "question": "By the time the new metro line opens, the municipal council _______ over two billion dollars.",
      "options": [
        "will have spent",
        "will spend",
        "is spending",
        "spends"
      ],
      "correctAnswer": "will have spent",
      "explanation": "'By the time + Present Simple, Future Perfect (will have spent)'."
    },
    {
      "question": "_______ you be using the digital projector during the afternoon seminar?",
      "options": [
        "Will",
        "Do",
        "Are",
        "Have"
      ],
      "correctAnswer": "Will",
      "explanation": "Xushmuomala rejalashtirilgan savol: 'Will you be using...?'"
    },
    {
      "question": "By the end of this month, our development team _______ the software testing phase.",
      "options": [
        "will have concluded",
        "will conclude",
        "concludes",
        "is concluding"
      ],
      "correctAnswer": "will have concluded",
      "explanation": "'By the end of this month' kelasi muddatni belgilaydi: Future Perfect."
    },
    {
      "question": "In ten years' time, autonomous vehicles _______ the transport landscape of major cities.",
      "options": [
        "will be reshaping",
        "will have reshaped",
        "are reshaping",
        "reshape"
      ],
      "correctAnswer": "will be reshaping",
      "explanation": "Kelajakdagi o'zgarishlar jarayoni tasvirlanmoqda: 'will be reshaping'."
    },
    {
      "question": "Which sentence is grammatically correct?",
      "options": [
        "By midnight, the delegates will have reached an accord.",
        "By midnight, the delegates will reach an accord.",
        "By midnight, the delegates will reaching an accord.",
        "By midnight, the delegates are reaching an accord."
      ],
      "correctAnswer": "By midnight, the delegates will have reached an accord.",
      "explanation": "'By midnight' ko'rsatkichi bilan Future Perfect ('will have reached') to'g'ri moslashadi."
    },
    {
      "question": "Will you _______ your thesis before the preliminary deadline next Monday?",
      "options": [
        "have submitted",
        "be submitting",
        "submit",
        "submitting"
      ],
      "correctAnswer": "have submitted",
      "explanation": "'Will you have submitted... before the deadline' (muddatgacha topshirib bo'lasizmi?)."
    }
  ],
  "ielts_b2_04_unreal_past_wishes": [
    {
      "question": "I wish I _______ more time to focus on academic vocabulary acquisition.",
      "options": [
        "had",
        "have",
        "would have",
        "will have"
      ],
      "correctAnswer": "had",
      "explanation": "Hozirgi holatdan norozilik va istak uchun 'wish + Past Simple' (I wish I had) ishlatiladi."
    },
    {
      "question": "She wishes she _______ harder for the IELTS exam last month.",
      "options": [
        "had revised",
        "revised",
        "would revise",
        "has revised"
      ],
      "correctAnswer": "had revised",
      "explanation": "O'tib ketgan o'tmishdagi voqea haqida afsuslanish uchun 'wish + Past Perfect' (had revised) ishlatiladi."
    },
    {
      "question": "If only governments _______ more urgent measures against global deforestation!",
      "options": [
        "would take",
        "will take",
        "take",
        "are taking"
      ],
      "correctAnswer": "would take",
      "explanation": "Boshqa birovning xatti-harakatini o'zgartirishini istashda 'If only / wish + would + bare infinitive' ishlatiladi."
    },
    {
      "question": "It is high time the administration _______ the deteriorating road network.",
      "options": [
        "repaired",
        "repairs",
        "to repair",
        "will repair"
      ],
      "correctAnswer": "repaired",
      "explanation": "'It is high time / about time + subject + Past Simple' (vaqti yetib keldi, kechikdik)."
    },
    {
      "question": "I would rather you _______ anyone about our research findings until they are peer-reviewed.",
      "options": [
        "didn't tell",
        "don't tell",
        "not tell",
        "won't tell"
      ],
      "correctAnswer": "didn't tell",
      "explanation": "'Would rather + subject + Past Simple' boshqa shaxsning harakatiga talab qo'yishda qo'llanadi."
    },
    {
      "question": "He acts as if he _______ an authority in environmental economics, but he is merely a novice.",
      "options": [
        "were",
        "is",
        "has been",
        "will be"
      ],
      "correctAnswer": "were",
      "explanation": "'As if / As though' noreal holat bilan kelganda 'were' ishlatiladi."
    },
    {
      "question": "I'd rather _______ by high-speed rail than fly, if the choice were mine.",
      "options": [
        "travel",
        "to travel",
        "travelled",
        "travelling"
      ],
      "correctAnswer": "travel",
      "explanation": "O'zining shaxsiy xohish-istagi uchun ega bitta bo'lsa 'would rather + bare infinitive' (travel) ishlatiladi."
    },
    {
      "question": "If only I _______ the cautionary advice of my thesis supervisor!",
      "options": [
        "had followed",
        "followed",
        "would follow",
        "follow"
      ],
      "correctAnswer": "had followed",
      "explanation": "O'tmishdagi qilinmagan ishdan afsus: 'If only I had followed'."
    },
    {
      "question": "Which sentence expresses irritation with someone's annoying current habit?",
      "options": [
        "I wish you wouldn't interrupt me while I'm presenting.",
        "I wish you didn't interrupt me while I'm presenting.",
        "I wish you hadn't interrupted me while I was presenting.",
        "I hope you don't interrupt me while I'm presenting."
      ],
      "correctAnswer": "I wish you wouldn't interrupt me while I'm presenting.",
      "explanation": "Kimgadir xalaqit beruvchi odatidan g'azablanib o'zgartirishni so'rashda 'wish + wouldn't' ishlatiladi."
    },
    {
      "question": "It is about time we _______ this contentious debate and made a definitive decision.",
      "options": [
        "concluded",
        "conclude",
        "have concluded",
        "will conclude"
      ],
      "correctAnswer": "concluded",
      "explanation": "'It is about time + subject + Past Simple' (concluded)."
    }
  ],
  "ielts_b2_05_passive_reporting_verbs": [
    {
      "question": "The economic reform _______ to stimulate domestic manufacturing within two years.",
      "options": [
        "is projected",
        "is projecting",
        "projects",
        "projected"
      ],
      "correctAnswer": "is projected",
      "explanation": "'Subject + is projected + to-infinitive' majhul hisobot qolipi."
    },
    {
      "question": "The lost civilization is thought _______ several centuries before European contact.",
      "options": [
        "to have collapsed",
        "to collapse",
        "having collapsed",
        "collapsing"
      ],
      "correctAnswer": "to have collapsed",
      "explanation": "O'tgan zamondagi voqea haqidagi hozirgi taxmin: 'to have + V3' (to have collapsed)."
    },
    {
      "question": "It is widely _______ that excessive social media usage impairs adolescent concentration.",
      "options": [
        "acknowledged",
        "acknowledging",
        "acknowledge",
        "acknowledges"
      ],
      "correctAnswer": "acknowledged",
      "explanation": "'It is widely acknowledged that...' keng tarqalgan ilmiy haqiqatlarni bildirishda ishlatiladi."
    },
    {
      "question": "The CEO is reported _______ yesterday following allegations of corporate embezzlement.",
      "options": [
        "to have resigned",
        "to resign",
        "resigning",
        "having resigned"
      ],
      "correctAnswer": "to have resigned",
      "explanation": "Kechagi iste'fo uchun o'tgan zamon mukammal infinitiv: 'to have resigned'."
    },
    {
      "question": "Renewable energy technologies are considered _______ crucial in mitigating climate impacts.",
      "options": [
        "to be",
        "being",
        "been",
        "as being"
      ],
      "correctAnswer": "to be",
      "explanation": "'Are considered to be crucial' qolipi."
    },
    {
      "question": "It has been _______ that over forty percent of marine ecosystems face imminent threat.",
      "options": [
        "estimated",
        "estimating",
        "estimate",
        "estimates"
      ],
      "correctAnswer": "estimated",
      "explanation": "'It has been estimated that...' (hisob-kitoblarga ko'ra)."
    },
    {
      "question": "Which verb CANNOT be used in the personal passive pattern 'Subject + be + [verb] + to-infinitive'?",
      "options": [
        "suggest",
        "believe",
        "consider",
        "report"
      ],
      "correctAnswer": "suggest",
      "explanation": "'Suggest' fe'li bu qolipda ishlatilmaydi ('He is suggested to be' xato; 'It is suggested that he...' to'g'ri)."
    },
    {
      "question": "The medieval fortress is understood _______ by King Edward I in the late 13th century.",
      "options": [
        "to have been constructed",
        "to construct",
        "constructing",
        "having constructed"
      ],
      "correctAnswer": "to have been constructed",
      "explanation": "O'tgan zamon majhul infinitiv shakli: 'to have been constructed'."
    },
    {
      "question": "In academic IELTS essays, passive reporting verbs help writers maintain an objective tone by:",
      "options": [
        "Distancing the writer from unsupported personal assertions.",
        "Using complex rhyming patterns.",
        "Eliminating the need for introductory topic sentences.",
        "Shortening paragraph lengths arbitrarily."
      ],
      "correctAnswer": "Distancing the writer from unsupported personal assertions.",
      "explanation": "Ushbu tuzilmalar shaxsiy 'I think' o'rniga xolis, neytral va ilmiy muvozanatli ohangni ta'minlaydi."
    },
    {
      "question": "The suspect is believed _______ in a remote mountain sanctuary.",
      "options": [
        "to be hiding",
        "to hide",
        "hiding",
        "hid"
      ],
      "correctAnswer": "to be hiding",
      "explanation": "Hozirgi vaqtda davom etayotgan jarayon uchun davomli infinitiv: 'to be hiding'."
    }
  ],
  "ielts_b2_06_participle_clauses_economy": [
    {
      "question": "_______ by the remarkable archaeological findings, the historian initiated an exhaustive study.",
      "options": [
        "Fascinated",
        "Fascinating",
        "Having fascinated",
        "To fascinate"
      ],
      "correctAnswer": "Fascinated",
      "explanation": "O'tgan zamon sifatdoshi (Past participle: Fascinated = Because he was fascinated) sabab majhul holatni ifodalaydi."
    },
    {
      "question": "_______ the preliminary laboratory tests, the research team presented their findings to the dean.",
      "options": [
        "Having completed",
        "Completing",
        "Completed",
        "On complete"
      ],
      "correctAnswer": "Having completed",
      "explanation": "Bosh gapdagi harakatdan oldin to'liq yakunlangan harakat uchun Perfect Participle ('Having completed') ishlatiladi."
    },
    {
      "question": "_______ in 1896, the modern Olympic Games have expanded into a global cultural phenomenon.",
      "options": [
        "Founded",
        "Founding",
        "Having founded",
        "To found"
      ],
      "correctAnswer": "Founded",
      "explanation": "O'yinlar o'zi asos solmagan, unga asos solingan: majhul sifatdosh 'Founded' (= As they were founded)."
    },
    {
      "question": "Not _______ enough financial backing, the innovative startup was forced to dissolve.",
      "options": [
        "having",
        "have",
        "had",
        "having had not"
      ],
      "correctAnswer": "having",
      "explanation": "'Because they did not have' = 'Not having enough financial backing'."
    },
    {
      "question": "Which sentence contains a 'dangling participle' error?",
      "options": [
        "Walking down the corridor, the smoke detector sounded loudly.",
        "Walking down the corridor, I heard the smoke detector sound loudly.",
        "Having finished the experiment, the scientist compiled the report.",
        "Examined carefully, the document revealed several discrepancies."
      ],
      "correctAnswer": "Walking down the corridor, the smoke detector sounded loudly.",
      "explanation": "'Dangling participle' xatosi: koridordan tutun detektori yurib bormagan, odam yurgan. Sifatdosh bosh gap egasi bilan mos kelishi shart."
    },
    {
      "question": "_______ with sufficient resources, rural clinics can deliver high-quality preventative healthcare.",
      "options": [
        "Provided",
        "Providing",
        "Provide",
        "To provide"
      ],
      "correctAnswer": "Provided",
      "explanation": "'If they are provided with...' = 'Provided with'."
    },
    {
      "question": "The river burst its banks, _______ extensive damage to neighboring agricultural settlements.",
      "options": [
        "causing",
        "caused",
        "to cause",
        "having caused"
      ],
      "correctAnswer": "causing",
      "explanation": "Natijani ifodalovchi sifatdosh (Result participle clause): 'causing extensive damage'."
    },
    {
      "question": "_______ several hours under the blistering sun, the marathon runners were utterly dehydrated.",
      "options": [
        "Having run",
        "Running",
        "Run",
        "To run"
      ],
      "correctAnswer": "Having run",
      "explanation": "Oldin tugallangan uzoq jarayon: Perfect Participle 'Having run'."
    },
    {
      "question": "Participle clauses enhance academic writing primarily by:",
      "options": [
        "Condensing complex information into concise, elegant clauses.",
        "Adding conversational filler words.",
        "Eliminating nouns from the sentence.",
        "Allowing the writer to avoid punctuation marks."
      ],
      "correctAnswer": "Condensing complex information into concise, elegant clauses.",
      "explanation": "Sifatdoshli ergash gaplar ma'lumotni qisqa, ravon va yuqori darajada ifodalash imkonini beradi."
    },
    {
      "question": "_______ the potential hazards, the safety inspector halted the construction operations.",
      "options": [
        "Recognizing",
        "Recognized",
        "Having recognized",
        "To recognize"
      ],
      "correctAnswer": "Recognizing",
      "explanation": "'Because he recognized...' = 'Recognizing the potential hazards'."
    }
  ],
  "ielts_b2_07_double_comparatives": [
    {
      "question": "The more students read authentic literature, _______ their academic vocabulary becomes.",
      "options": [
        "the broader",
        "broader",
        "the broadest",
        "more broad"
      ],
      "correctAnswer": "the broader",
      "explanation": "'The + comparative ..., the + comparative ...' qolipi: 'The more ..., the broader ...'."
    },
    {
      "question": "The longer the issue remains unaddressed, _______ the remedial solutions become.",
      "options": [
        "the more costly",
        "costlier",
        "the most costly",
        "more costly"
      ],
      "correctAnswer": "the more costly",
      "explanation": "Ikkala qismda ham 'the + comparative' talab qilinadi: 'the more costly'."
    },
    {
      "question": "The _______ a nation's investment in primary healthcare, the lower its infant mortality rate.",
      "options": [
        "higher",
        "highest",
        "more high",
        "as high"
      ],
      "correctAnswer": "higher",
      "explanation": "'The higher ..., the lower ...'."
    },
    {
      "question": "Which sentence correctly demonstrates a proportional double comparative?",
      "options": [
        "The earlier children learn a foreign language, the more naturally they acquire it.",
        "Earlier children learn a foreign language, more naturally they acquire it.",
        "The earlier children learn language, naturally they acquire it.",
        "The earliest children learn language, the most naturally they acquire it."
      ],
      "correctAnswer": "The earlier children learn a foreign language, the more naturally they acquire it.",
      "explanation": "'The earlier ..., the more naturally ...' to'liq mutanosib qolip."
    },
    {
      "question": "The more sophisticated artificial intelligence becomes, _______ the demand for ethical oversight.",
      "options": [
        "the greater",
        "greater",
        "the greatest",
        "more great"
      ],
      "correctAnswer": "the greater",
      "explanation": "'The greater the demand...' (talab shunchalik ortadi)."
    },
    {
      "question": "The more complex the problem, _______ time is required to formulate an efficacious solution.",
      "options": [
        "the more",
        "more",
        "the most",
        "as much"
      ],
      "correctAnswer": "the more",
      "explanation": "'The more time is required...'."
    },
    {
      "question": "Why are double comparatives highly valued in IELTS Task 2 essays?",
      "options": [
        "They express complex cause-and-effect relationships with grammatical sophistication.",
        "They simplify all sentences into single words.",
        "They allow students to avoid complex punctuation.",
        "They are only used to tell informal jokes."
      ],
      "correctAnswer": "They express complex cause-and-effect relationships with grammatical sophistication.",
      "explanation": "Ushbu struktura sabab-oqibat bog'liqligini yuqori darajada (Band 8+) ko'rsatish vositasidir."
    },
    {
      "question": "The less physical exercise individuals undertake, _______ their vulnerability to chronic disease.",
      "options": [
        "the higher",
        "higher",
        "the highest",
        "as high"
      ],
      "correctAnswer": "the higher",
      "explanation": "'The less ..., the higher ...'."
    },
    {
      "question": "Complete the idiom: 'The _______, the merrier.'",
      "options": [
        "more",
        "most",
        "many",
        "much"
      ],
      "correctAnswer": "more",
      "explanation": "'The more, the merrier' (qancha ko'p bo'lsa, shuncha yaxshi)."
    },
    {
      "question": "Which sentence contains a grammatical ERROR in its comparative structure?",
      "options": [
        "The harder you work, the luckiest you get.",
        "The harder you work, the luckier you get.",
        "The more you practice, the more confident you feel.",
        "The sooner we finish, the better."
      ],
      "correctAnswer": "The harder you work, the luckiest you get.",
      "explanation": "Ikkala tomon ham qiyosiy (comparative) bo'lishi kerak, orttirma (luckiest) qo'yish xato."
    }
  ],
  "ielts_b2_08_academic_quantifiers_data": [
    {
      "question": "In IELTS Writing Task 1, which quantifier best describes 78% of respondents?",
      "options": [
        "A significant majority of",
        "A tiny fraction of",
        "Roughly half of",
        "A negligible minority of"
      ],
      "correctAnswer": "A significant majority of",
      "explanation": "78% respondent salmoqli ko'pchilikni ('a significant majority') tashkil etadi."
    },
    {
      "question": "The proportion of households with internet access increased by _______ fifteen percent.",
      "options": [
        "approximately",
        "approximate",
        "approximating",
        "approximated"
      ],
      "correctAnswer": "approximately",
      "explanation": "Raqamlar va foizlar oldidan ravish ('approximately', 'roughly') ishlatiladi."
    },
    {
      "question": "_______ of the budget was allocated to healthcare, while the remainder funded education.",
      "options": [
        "The bulk",
        "The many",
        "The number",
        "The plenty"
      ],
      "correctAnswer": "The bulk",
      "explanation": "'The bulk of the budget' (byudjetning asosiy katta qismi) akademik ibora."
    },
    {
      "question": "Only a tiny _______ of participants reported experiencing negative side effects.",
      "options": [
        "minority",
        "majority",
        "quantity",
        "deal"
      ],
      "correctAnswer": "minority",
      "explanation": "Juda oz qism uchun 'a tiny minority of' (arzimas ozchilik) qo'llaniladi."
    },
    {
      "question": "The chart reveals that _______ three-quarters of the energy consumed originated from fossil fuels.",
      "options": [
        "nearly",
        "near",
        "nearly to",
        "nearing"
      ],
      "correctAnswer": "nearly",
      "explanation": "'Nearly three-quarters' (deyarli to'rtdan uch qismi)."
    },
    {
      "question": "Which quantifier phrase is suitable for uncountable academic concepts like 'wealth' or 'data'?",
      "options": [
        "A considerable amount of",
        "A large number of",
        "Several tens of",
        "Many"
      ],
      "correctAnswer": "A considerable amount of",
      "explanation": "'Amount of' sanalmaydigan otlar bilan ishlatiladi."
    },
    {
      "question": "The number of motor vehicles on urban roads _______ doubled over the two-decade span.",
      "options": [
        "more than",
        "most than",
        "much than",
        "many than"
      ],
      "correctAnswer": "more than",
      "explanation": "'More than doubled' (ikki barobardan ziyod oshdi)."
    },
    {
      "question": "_______ two out of five citizens utilized public transportation on a daily basis.",
      "options": [
        "Roughly",
        "Exact",
        "Approximate",
        "Nearly to"
      ],
      "correctAnswer": "Roughly",
      "explanation": "'Roughly two out of five' (taxminan har beshtadan ikkitasi)."
    },
    {
      "question": "A negligible _______ of surveyed consumers expressed dissatisfaction with the new platform.",
      "options": [
        "percentage",
        "percent",
        "percents",
        "percentage number"
      ],
      "correctAnswer": "percentage",
      "explanation": "Sifatdan keyin ot shakli: 'percentage' ('percent' esa raqamlar bilan keladi: 5 percent)."
    },
    {
      "question": "Which expression denotes exactly 50%?",
      "options": [
        "Exactly half of",
        "A vast majority of",
        "A slight majority of",
        "An overwhelming portion of"
      ],
      "correctAnswer": "Exactly half of",
      "explanation": "50% aynan yarmi degan ma'noni anglatadi: 'exactly half of'."
    }
  ],
  "ielts_b2_09_causative_structures": [
    {
      "question": "The research foundation _______ their laboratory equipment inspected by external auditors.",
      "options": [
        "had",
        "made",
        "got to",
        "did"
      ],
      "correctAnswer": "had",
      "explanation": "'Have something done' (had their equipment inspected) — xizmatni birovga qildirish majhul sababiy tuzilmasi."
    },
    {
      "question": "The university professor _______ the graduate students rewrite their preliminary draft.",
      "options": [
        "made",
        "got",
        "forced to",
        "caused"
      ],
      "correctAnswer": "made",
      "explanation": "'Make someone do something' (made students rewrite) — majburlash/talab qilish."
    },
    {
      "question": "The campaign coordinators managed to get thousands of young voters _______ at polling stations.",
      "options": [
        "to register",
        "register",
        "registered to",
        "registering"
      ],
      "correctAnswer": "to register",
      "explanation": "'Get someone to do something' (ko'ndirmoq, bajartirmoq) 'to-infinitive' talab qiladi."
    },
    {
      "question": "We must _______ our academic credentials verified before the overseas admission deadline.",
      "options": [
        "have",
        "make",
        "cause",
        "let"
      ],
      "correctAnswer": "have",
      "explanation": "'Have credentials verified' — hujjatlarni tasdiqlatish."
    },
    {
      "question": "The laboratory safety officer did not let anyone _______ the chemical storage room without protective gear.",
      "options": [
        "enter",
        "to enter",
        "entering",
        "entered"
      ],
      "correctAnswer": "enter",
      "explanation": "'Let someone do something' (ruxsat bermoq) bare infinitive oladi: 'let anyone enter'."
    },
    {
      "question": "How can we get our local representatives _______ environmental sustainability?",
      "options": [
        "to prioritize",
        "prioritize",
        "prioritizing",
        "prioritized"
      ],
      "correctAnswer": "to prioritize",
      "explanation": "'Get + someone + to-infinitive': 'to prioritize'."
    },
    {
      "question": "Which sentence has a causative structure indicating coercion or mandatory requirement?",
      "options": [
        "The tutor made the students revise their citations.",
        "The tutor got the students to revise their citations.",
        "The tutor had the students revise their citations.",
        "The tutor let the students revise their citations."
      ],
      "correctAnswer": "The tutor made the students revise their citations.",
      "explanation": "'Make' majburiy talabni ifodalaydi."
    },
    {
      "question": "I am going to have my laptop _______ at the computer service center this afternoon.",
      "options": [
        "repaired",
        "repair",
        "to repair",
        "repairing"
      ],
      "correctAnswer": "repaired",
      "explanation": "'Have something + V3': 'have my laptop repaired'."
    },
    {
      "question": "The supervisor had the research assistant _______ the bibliographic entries alphabetically.",
      "options": [
        "organize",
        "to organize",
        "organized",
        "organizing"
      ],
      "correctAnswer": "organize",
      "explanation": "'Have someone do something' (bare infinitive): 'had the assistant organize'."
    },
    {
      "question": "Which sentence is grammatically INCORRECT?",
      "options": [
        "The manager made the team to work overtime.",
        "The manager made the team work overtime.",
        "The manager got the team to work overtime.",
        "The manager had the team work overtime."
      ],
      "correctAnswer": "The manager made the team to work overtime.",
      "explanation": "'Make someone to work' xato; 'make' dan keyin 'to' ishlatilmaydi."
    }
  ],
  "ielts_c1_01_ellipsis_substitution": [
    {
      "question": "Some participants opted to withdraw from the trial, but many chose not _______.",
      "options": [
        "to",
        "to withdraw from",
        "to do",
        "withdrawing"
      ],
      "correctAnswer": "to",
      "explanation": "Ellipsis qoidasi bo'yicha takrorlanishning oldini olish uchun faqat infinitiv zarrachasi 'to' qoldiriladi."
    },
    {
      "question": "'Will the government pass the climate legislation this month?' -> 'I certainly hope _______.'",
      "options": [
        "so",
        "it",
        "that",
        "such"
      ],
      "correctAnswer": "so",
      "explanation": "Oldingi butun bir fikrni almashtirish uchun 'hope so' substitutsiyasi ishlatiladi."
    },
    {
      "question": "'Did the experiments fail due to contamination?' -> 'The laboratory director believes _______.'",
      "options": [
        "not",
        "no",
        "it not",
        "so not"
      ],
      "correctAnswer": "not",
      "explanation": "Salbiy substitutsiya: 'believes not' yoki 'does not believe so'."
    },
    {
      "question": "She completed her literature review in two weeks, and her colleague did _______ in three.",
      "options": [
        "so",
        "it that",
        "such",
        "that one"
      ],
      "correctAnswer": "so",
      "explanation": "'Do so' butun bir harakatni qayta takrorlamaslik uchun ishlatiladigan rasmiy substitutsiyadir."
    },
    {
      "question": "Which sentence correctly demonstrates nominal ellipsis?",
      "options": [
        "There were two preliminary hypotheses proposed; the first was quickly refuted.",
        "There were two hypotheses; the first hypothesis was refuted.",
        "There were two hypotheses, and both hypothesis were refuted.",
        "There were two hypotheses, refuted was the first hypothesis."
      ],
      "correctAnswer": "There were two preliminary hypotheses proposed; the first was quickly refuted.",
      "explanation": "'The first [hypothesis]' so'zi tushirib qoldirilgan (nominal ellipsis)."
    },
    {
      "question": "We wanted to conduct additional focus groups, but we lacked the resources to _______.",
      "options": [
        "do so",
        "do that it",
        "make so",
        "have so"
      ],
      "correctAnswer": "do so",
      "explanation": "'Lacked the resources to do so' akademik nutqqa xos iboradir."
    },
    {
      "question": "Has the proposal been approved? — I'm afraid _______.",
      "options": [
        "not",
        "no",
        "none",
        "never"
      ],
      "correctAnswer": "not",
      "explanation": "'I'm afraid not' (qo'rqamanki, yo'q)."
    },
    {
      "question": "What is the primary stylistic benefit of ellipsis and substitution in C1/C2 writing?",
      "options": [
        "It eliminates redundant repetition and creates compact, cohesive discourse.",
        "It introduces foreign loanwords into the paragraph.",
        "It turns complex arguments into informal dialogue.",
        "It removes the need for subject-verb agreement."
      ],
      "correctAnswer": "It eliminates redundant repetition and creates compact, cohesive discourse.",
      "explanation": "Ellipsis va substitution keraksiz takrorlarni olib tashlab, matnni ixcham va ravon qiladi."
    },
    {
      "question": "If you wish to appeal the committee's decision, you must _______ within fourteen days.",
      "options": [
        "do so",
        "appeal so",
        "make it",
        "do such"
      ],
      "correctAnswer": "do so",
      "explanation": "'Do so' harakatning to'liq o'rnini bosadi."
    },
    {
      "question": "Which option demonstrates verbal ellipsis?",
      "options": [
        "He promised to deliver the lecture, and he did.",
        "He promised to deliver the lecture, and he delivered it.",
        "He promised to deliver the lecture, but delivering was difficult.",
        "He promised to deliver the lecture, and he delivered lecture."
      ],
      "correctAnswer": "He promised to deliver the lecture, and he did.",
      "explanation": "'And he did [deliver the lecture]' qismida fe'l guruhi tushirib qoldirilgan."
    }
  ],
  "ielts_c1_02_fronting_topicalisation": [
    {
      "question": "Which sentence demonstrates grammatical fronting for emphasis and cohesion?",
      "options": [
        "Under no circumstances should confidential patient files be left unattended.",
        "Confidential patient files should not be left unattended under any circumstances.",
        "You should not leave confidential files unattended anywhere.",
        "Files of patients must not be left by staff under circumstances."
      ],
      "correctAnswer": "Under no circumstances should confidential patient files be left unattended.",
      "explanation": "Salbiy holatni oldinga olib chiqish (fronting) inversiya bilan keladi va kuchli emfatik urg'u beradi."
    },
    {
      "question": "Fronting the object: 'I have never witnessed such remarkable academic dedication.'",
      "options": [
        "Never have I witnessed such remarkable academic dedication.",
        "Never I have witnessed such remarkable academic dedication.",
        "Such dedication have I witnessed never.",
        "Witnessed never have I such dedication."
      ],
      "correctAnswer": "Never have I witnessed such remarkable academic dedication.",
      "explanation": "'Never' oldinga o'tganda inversiya hosil bo'ladi: 'Never have I witnessed...'."
    },
    {
      "question": "Seldom _______ such widespread consensus among international climate researchers.",
      "options": [
        "has there been",
        "there has been",
        "there is",
        "was there"
      ],
      "correctAnswer": "has there been",
      "explanation": "'Seldom' (kamdan-kam) oldinda kelganda yordamchi fe'l oldinga chiqadi: 'has there been'."
    },
    {
      "question": "Little _______ the devastating ramifications that would ensue from the financial deregulations.",
      "options": [
        "did the economists anticipate",
        "the economists anticipated",
        "economists did anticipate",
        "had the economists anticipate"
      ],
      "correctAnswer": "did the economists anticipate",
      "explanation": "'Little + did + subject + bare verb': 'did the economists anticipate'."
    },
    {
      "question": "Only after the audit was concluded _______ the extent of the budgetary deficit.",
      "options": [
        "did they realize",
        "they realized",
        "realized they",
        "they did realize"
      ],
      "correctAnswer": "did they realize",
      "explanation": "'Only after ...' iborasi bilan boshlanganda asosiy gapda inversiya bo'ladi: 'did they realize'."
    },
    {
      "question": "Not only _______ publish groundbreaking research, but she also spearheaded international collaborations.",
      "options": [
        "did she",
        "she did",
        "she had",
        "was she"
      ],
      "correctAnswer": "did she",
      "explanation": "'Not only + auxiliary + subject': 'did she publish'."
    },
    {
      "question": "At no time _______ informed of the hazardous contaminants present in the facility.",
      "options": [
        "were the workers",
        "the workers were",
        "workers had been",
        "did the workers be"
      ],
      "correctAnswer": "were the workers",
      "explanation": "'At no time were the workers informed...'."
    },
    {
      "question": "Why is fronting and topicalisation utilized in advanced academic discourse?",
      "options": [
        "To manage the flow of information by connecting new points to previously established themes.",
        "To disguise grammatical weaknesses in the argument.",
        "To make the sentence sound like informal street conversation.",
        "To eliminate all auxiliary verbs from the language."
      ],
      "correctAnswer": "To manage the flow of information by connecting new points to previously established themes.",
      "explanation": "Fronting axborot oqimini tartibga soladi va matn mavzusiga alohida urg'u beradi."
    },
    {
      "question": "No sooner _______ the research grant than new logistical obstacles emerged.",
      "options": [
        "had they received",
        "they had received",
        "did they receive",
        "they received"
      ],
      "correctAnswer": "had they received",
      "explanation": "'No sooner had + subject + V3 ... than': 'had they received'."
    },
    {
      "question": "Which sentence contains an INVERSION ERROR following a fronted negative element?",
      "options": [
        "Rarely we see such profound political transformation.",
        "Rarely do we see such profound political transformation.",
        "Hardly had the meeting begun when an interruption occurred.",
        "Scarcely had the bell chimed when the students dispersed."
      ],
      "correctAnswer": "Rarely we see such profound political transformation.",
      "explanation": "'Rarely' gap boshida kelsa inversiya bo'lishi shart ('Rarely do we see...' to'g'ri, 'Rarely we see' xato)."
    }
  ],
  "ielts_c1_03_prepositional_collocations": [
    {
      "question": "The sharp drop in export revenue is directly attributable _______ fluctuating foreign currency rates.",
      "options": [
        "to",
        "with",
        "from",
        "at"
      ],
      "correctAnswer": "to",
      "explanation": "'Attributable to' (bog'liq / ... bilan izohlanadigan) turg'un akademik birikmadir."
    },
    {
      "question": "The new public health policy was enacted in accordance _______ international sanitary guidelines.",
      "options": [
        "with",
        "to",
        "by",
        "for"
      ],
      "correctAnswer": "with",
      "explanation": "'In accordance with' (muvofiq / mos ravishda) birikmasi."
    },
    {
      "question": "Candidates must be capable _______ synthesizing extensive qualitative and quantitative data.",
      "options": [
        "of",
        "to",
        "in",
        "for"
      ],
      "correctAnswer": "of",
      "explanation": "'Capable of + V-ing' (qobiliyatiga ega bo'lmoq)."
    },
    {
      "question": "The administration is committed _______ fostering an inclusive and diverse learning environment.",
      "options": [
        "to",
        "for",
        "with",
        "on"
      ],
      "correctAnswer": "to",
      "explanation": "'Committed to + V-ing' (sodiq / bel bog'lagan) predlogli turg'un birikmadir."
    },
    {
      "question": "The findings are wholly consistent _______ the theoretical framework established in chapter two.",
      "options": [
        "with",
        "to",
        "by",
        "about"
      ],
      "correctAnswer": "with",
      "explanation": "'Consistent with' (mos tushuvchi / hamohang)."
    },
    {
      "question": "Young professionals are increasingly immune _______ traditional broadcast advertising.",
      "options": [
        "to",
        "from",
        "with",
        "against"
      ],
      "correctAnswer": "to",
      "explanation": "'Immune to' (ta'sir o'tkazmaydigan / immunitetga ega)."
    },
    {
      "question": "The recent legislation impinges _______ fundamental constitutional liberties.",
      "options": [
        "on",
        "with",
        "to",
        "at"
      ],
      "correctAnswer": "on",
      "explanation": "'Impinge on / upon' (tajovuz qilmoq / daxl qilmoq)."
    },
    {
      "question": "The company's marketing strategy is heavily reliant _______ algorithmic consumer profiling.",
      "options": [
        "on",
        "with",
        "in",
        "for"
      ],
      "correctAnswer": "on",
      "explanation": "'Reliant on' (bog'liq / tayanuvchi)."
    },
    {
      "question": "Which preposition collocates correctly with 'prone'?",
      "options": [
        "to",
        "for",
        "with",
        "at"
      ],
      "correctAnswer": "to",
      "explanation": "'Prone to + noun / V-ing' (moyil / beriluvchan)."
    },
    {
      "question": "The proposed amendments are incompatible _______ established international human rights standards.",
      "options": [
        "with",
        "to",
        "from",
        "at"
      ],
      "correctAnswer": "with",
      "explanation": "'Incompatible with' (mos kelmaydigan / nomuvofiq)."
    }
  ],
  "ielts_c1_04_complex_participle_reduction": [
    {
      "question": "Reduce this relative clause: 'The regulations which were adopted by the parliament last month generated widespread debate.'",
      "options": [
        "The regulations adopted by the parliament last month generated widespread debate.",
        "The regulations adopting by parliament last month generated widespread debate.",
        "The regulations being adopted parliament last month generated debate.",
        "The regulations having adopted by parliament generated debate."
      ],
      "correctAnswer": "The regulations adopted by the parliament last month generated widespread debate.",
      "explanation": "Majhul nisbiy ergash gap 'which were adopted' -> 'adopted' sifatdoshiga qisqaradi."
    },
    {
      "question": "Reduce: 'Any passenger who is arriving from overseas must present digital health clearance.'",
      "options": [
        "Any passenger arriving from overseas must present digital health clearance.",
        "Any passenger arrived from overseas must present digital clearance.",
        "Any passenger having arrived from overseas must present clearance.",
        "Any passenger to arrive from overseas must present clearance."
      ],
      "correctAnswer": "Any passenger arriving from overseas must present digital health clearance.",
      "explanation": "Faol nisbatdagi 'who is arriving' -> 'arriving' bo'lib qisqaradi."
    },
    {
      "question": "'Having been denied financial aid, _______.' — Choose the logically sound completion:",
      "options": [
        "the student was unable to matriculate into the university program.",
        "the university program was closed to the student.",
        "it was impossible for matriculation to proceed.",
        "matriculation could not be achieved by the student."
      ],
      "correctAnswer": "the student was unable to matriculate into the university program.",
      "explanation": "Sifatdosh bosh gap egasi bilan to'g'ridan-to'g'ri mantiqiy mos bo'lishi shart (talabaga yordam rad etilgan, shuning uchun 'the student' bosh gap egasi bo'ladi)."
    },
    {
      "question": "Reduce: 'Because she was unaware of the new university protocols, she submitted the essay late.'",
      "options": [
        "Unaware of the new university protocols, she submitted the essay late.",
        "Being unaware she was of protocols, she submitted the essay late.",
        "She submitted late having unaware of protocols.",
        "Because unaware of protocols, she submitted the essay."
      ],
      "correctAnswer": "Unaware of the new university protocols, she submitted the essay late.",
      "explanation": "Sifatli ibora (Adjective phrase) bilan qisqartirish: 'Unaware of ..., she submitted...'."
    },
    {
      "question": "Convert into a perfect participle clause: 'After the scientists had analyzed the spectroscopic data, they published their conclusions.'",
      "options": [
        "Having analyzed the spectroscopic data, the scientists published their conclusions.",
        "Analyzing the spectroscopic data, the scientists published conclusions.",
        "Analyzed the spectroscopic data, the scientists published conclusions.",
        "Having been analyzed the data, scientists published conclusions."
      ],
      "correctAnswer": "Having analyzed the spectroscopic data, the scientists published their conclusions.",
      "explanation": "Oldin tugallangan faol harakat: 'Having analyzed...'."
    },
    {
      "question": "Identify the dangling participle in the options below:",
      "options": [
        "Having examined the ancient manuscript, several crucial discrepancies emerged.",
        "Having examined the ancient manuscript, the scholar discovered several crucial discrepancies.",
        "Exudating toxic smoke, the vehicle was impounded by traffic police.",
        "Surrounded by towering peaks, the alpine village remained isolated."
      ],
      "correctAnswer": "Having examined the ancient manuscript, several crucial discrepancies emerged.",
      "explanation": "'Discrepancies' o'zi qo'lyozmani tekshirmagan; tekshiruvchi shaxs bosh gap egasi bo'lishi shart edi. Bu klassik dangler xatosi."
    },
    {
      "question": "Reduce: 'The skyscraper which is currently being erected in the commercial district will be the tallest in the nation.'",
      "options": [
        "The skyscraper currently being erected in the commercial district will be the tallest in the nation.",
        "The skyscraper currently erected in the commercial district will be tallest.",
        "The skyscraper erecting currently in the commercial district will be tallest.",
        "The skyscraper having been erected will be tallest."
      ],
      "correctAnswer": "The skyscraper currently being erected in the commercial district will be the tallest in the nation.",
      "explanation": "Hozir davom etayotgan majhul jarayon uchun 'being + V3' saqlanadi: 'currently being erected'."
    },
    {
      "question": "Which reduction is grammatically correct for: 'While he was conducting the clinical trials, he observed unexpected side effects'?",
      "options": [
        "While conducting the clinical trials, he observed unexpected side effects.",
        "While conducted the clinical trials, he observed unexpected side effects.",
        "While having conducted the trials, he observed unexpected side effects.",
        "Conducted the clinical trials, he observed unexpected effects."
      ],
      "correctAnswer": "While conducting the clinical trials, he observed unexpected side effects.",
      "explanation": "'While + V-ing' (davomiy vaqt qisqartmasi): 'While conducting...'."
    },
    {
      "question": "Why is participle reduction essential for achieving Band 8+ in IELTS Writing Task 2?",
      "options": [
        "It demonstrates syntactic variety, grammatical agility, and sentence economy.",
        "It replaces all punctuation marks with dashes.",
        "It makes essays much longer without adding ideas.",
        "It allows the author to omit concluding paragraphs."
      ],
      "correctAnswer": "It demonstrates syntactic variety, grammatical agility, and sentence economy.",
      "explanation": "Participle reduction grammatik xilma-xillik (Grammatical Range and Accuracy) mezonida eng yuqori ball beruvchi strukturalardan biridir."
    },
    {
      "question": "Complete the reduction: '_______ exhausted by the relentless schedule, the surgeon made a critical miscalculation.'",
      "options": [
        "Completely",
        "Because of",
        "Having been being",
        "Being that"
      ],
      "correctAnswer": "Completely",
      "explanation": "'Completely exhausted by...' (holat bildiruvchi qisqargan sifatdoshli birikma)."
    }
  ]
};
