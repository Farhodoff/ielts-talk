export interface IeltsGrammarTopic {
    id: string;
    level: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'A1-A2' | 'B1-B2';
    title: string;
    category: string;
    structure: string;
    uzbekMeaning: string;
    explanation: string;
    ieltsRelevance: string;
    academicExamples: {
        sentence: string;
        translation: string;
        context: 'Task 1' | 'Task 2' | 'Speaking';
    }[];
    commonMistakes: {
        incorrect: string;
        correct: string;
        explanation: string;
    }[];
    quizQuestions: {
        question: string;
        options: string[];
        correctAnswer: string;
        explanation: string;
    }[];
}

export const IELTS_GRAMMAR_DATABASE: IeltsGrammarTopic[] = [
    // =========================================================================
    // RAYMOND MURPHY: ESSENTIAL GRAMMAR IN USE — COMPLETE A1 ELEMENTARY MASTERY
    // =========================================================================

    // --- SECTION 1: TO BE & ESSENTIAL SENTENCES ---
    {
        id: "murphy_u01_am_is_are",
        level: "A1",
        title: "Unit 1: am / is / are (To Be — Darak Gaplar)",
        category: "Essential To Be (A1)",
        structure: "I am (I'm) | He/She/It is (He's/She's/It's) | We/You/They are (We're/You're/They're)",
        uzbekMeaning: "To Be fe'li — bo'lmoq / hisoblanmoq (Ism, yosh, kasb, millat va sifatlarni aytish)",
        explanation: "Essential Grammar in Use 1-qoidasi: Ingliz tilida har bir to'liq gapda albatta fe'l bo'lishi shart. O'zbek tilida 'Men talabaman' deyilganda harakat sezilmaydi, ammo ingliz tilida 'I am a student' deb 'am' bog'lovchi fe'li qo'yilishi majburiydir. To Be fe'li kishining kasbi (She is a doctor), yoshi (I am 24 years old), his-tuyg'usi (He is very happy), millati (They are Uzbek) va joylashuvini (We are at home) bildirishda qo'llanadi.",
        ieltsRelevance: "Speaking Part 1 da o'zingizni, oilangizni, mutaxassisligingizni va yashash shahringizni tanishtirishning eng asosiy poydevoridir.",
        academicExamples: [
            {
                sentence: "I am a university student majoring in software engineering.",
                translation: "Men dasturiy muhandislik yo'nalishida tahsil olayotgan universitet talabasiman.",
                context: "Speaking"
            },
            {
                sentence: "English is a global language of international communication and science.",
                translation: "Ingliz tili xalqaro muloqot va ilm-fanning global tili hisoblanadi.",
                context: "Task 2"
            },
            {
                sentence: "My hometown is Samarkand, which is famous for its ancient architectural monuments.",
                translation: "Mening ona shahrim Samarqand bo'lib, u o'zining qadimiy me'moriy obidalari bilan mashhurdir.",
                context: "Speaking"
            }
        ],
        commonMistakes: [
            {
                incorrect: "I student from Uzbekistan.",
                correct: "I am a student from Uzbekistan.",
                explanation: "Ingliz tilida ega va ot o'rtasida 'to be' fe'li (am) hech qachon tushirib qoldirilmaydi."
            },
            {
                incorrect: "He are very tired today.",
                correct: "He is very tired today.",
                explanation: "He, She, It 3-shaxs birlik olmoshlari bilan 'is' ishlatiladi ('are' emas)."
            }
        ],
        quizQuestions: [
            {
                question: "My brother _______ 25 years old and he _______ an architect in London.",
                options: ["is / is", "am / is", "are / is", "is / are"],
                correctAnswer: "is / is",
                explanation: "'My brother' 3-shaxs birlik (he) bo'lgani sababli ikkala o'rinda ham 'is' ishlatiladi."
            },
            {
                question: "Choose the grammatically correct sentence:",
                options: [
                    "They are from London and they are teachers.",
                    "They from London and they teachers.",
                    "They is from London and they are teachers.",
                    "They are from London and they is teachers."
                ],
                correctAnswer: "They are from London and they are teachers.",
                explanation: "'They' ko'plik olmoshi bo'lgani sababli 'are' to'g'ri bog'lovchi hisoblanadi."
            }
        ]
    },
    {
        id: "murphy_u02_am_is_are_questions",
        level: "A1",
        title: "Unit 2: am / is / are (Savollar va Inkor Shakllari)",
        category: "Essential To Be (A1)",
        structure: "Inkor: S + am/is/are + not | Savol: Am/Is/Are + Subject + ...? | Qisqa javob: Yes, I am. / No, he isn't.",
        uzbekMeaning: "To Be da inkor va savol tuzish (Siz talabamisiz? — Ha / Yo'q, men charchamadim)",
        explanation: "Essential Grammar in Use 2-qoidasi: Savol tuzishda 'am/is/are' egadan oldinga o'tadi: 'Is your father a doctor?' / 'Are you tired?'. Maxsus so'roq so'zlari (What, Where, Who, Why, How) gapning eng boshida keladi: 'Where are you from?' / 'How old is your brother?'. Inkor shaklida esa 'not' qo'shiladi: 'I am not interested in politics' / 'The weather isn't cold today'. Qisqa javobda faqat to be ishlatiladi: 'Yes, I am' (NOT Yes, I'm).",
        ieltsRelevance: "Speaking intervyusida imtihon oluvchining savollariga aniq va to'g'ri grammatik javob qaytarish uchun kerak.",
        academicExamples: [
            {
                sentence: "Why is quality education essential for national economic development?",
                translation: "Nima uchun sifatli ta'lim milliy iqtisodiy rivojlanish uchun o'ta muhim hisoblanadi?",
                context: "Task 2"
            },
            {
                sentence: "Are online learning platforms more flexible than traditional classrooms?",
                translation: "Onlayn ta'lim platformalari an'anaviy darsxonalardan ko'ra moslashuvchanroqmi?",
                context: "Speaking"
            }
        ],
        commonMistakes: [
            {
                incorrect: "Where you are from?",
                correct: "Where are you from?",
                explanation: "Maxsus savollarda 'Where' dan keyin darhol 'are' yordamchi fe'li egadan oldinga chiqadi."
            },
            {
                incorrect: "No, I'm not agree with this statement.",
                correct: "No, I don't agree with this statement. / I am not ready.",
                explanation: "'Agree' (rozi bo'lmoq) bu harakat fe'li, shuning uchun 'don't agree' deyiladi; sifatlar bilan esa 'I am not' ishlatiladi."
            }
        ],
        quizQuestions: [
            {
                question: "_______ your parents at home right now?",
                options: ["Are", "Is", "Do", "Does"],
                correctAnswer: "Are",
                explanation: "'Your parents' (ota-onangiz) ko'plikda bo'lgani sababli savolda 'Are' oldinga chiqadi."
            },
            {
                question: "'Is it cold outside?' — 'No, _______.'",
                options: ["it isn't", "it not", "it doesn't", "is not"],
                correctAnswer: "it isn't",
                explanation: "To Be so'rog'iga qisqa inkor javobi: 'No, it isn't' yoki 'No, it's not'."
            }
        ]
    },
    {
        id: "murphy_u36_there_is_there_are",
        level: "A1",
        title: "Unit 3: there is / there are (Mavjudlik va Borlik)",
        category: "Essential Sentences (A1)",
        structure: "Birlik: There is a/an + Noun | Ko'plik: There are + Nouns | Inkor: There isn't / There aren't",
        uzbekMeaning: "Biror joyda nimadir borligini aytish (Shaharda katta bog' bor / Maktabda 500 ta o'quvchi bor)",
        explanation: "Essential Grammar in Use 36-qoidasi: 'There is/are' biror joyda biror narsaning borligini yoki mavjudligini birinchi marta aytishda ishlatiladi. Birlikdagi sanaladigan otlar oldidan 'There is a book on the table', ko'plikdagi otlar uchun 'There are many students in the library' deyiladi. Sanalmaydigan otlar (water, money, pollution) bilan doim 'There is' keladi: 'There is too much noise'.",
        ieltsRelevance: "Writing Task 1 grafiklarida ('There was a significant increase...') va Task 2 insholarida ('There are several compelling reasons why...') eng ko'p ishlatiladigan struktura.",
        academicExamples: [
            {
                sentence: "There is a striking disparity between urban and rural income levels.",
                translation: "Shahar va qishloq daromadlari darajasi o'rtasida keskin farq bor.",
                context: "Task 1"
            },
            {
                sentence: "There are numerous environmental benefits associated with renewable energy.",
                translation: "Qayta tiklanadigan energiya bilan bog'liq ko'plab ekologik foydalar mavjud.",
                context: "Task 2"
            }
        ],
        commonMistakes: [
            {
                incorrect: "In my city have many historical monuments.",
                correct: "There are many historical monuments in my city.",
                explanation: "O'zbek tilidagi '...da bor' iborasini ingliz tilida 'have' bilan emas, 'There is / There are' bilan ifodalanadi."
            }
        ],
        quizQuestions: [
            {
                question: "_______ twenty-four hours in a day, and _______ a lot of work to complete.",
                options: ["There are / there is", "There is / there are", "There are / there are", "There is / there is"],
                correctAnswer: "There are / there is",
                explanation: "'Twenty-four hours' ko'plik (there are), 'work' sanalmaydigan ot (there is)."
            }
        ]
    },
    {
        id: "murphy_u38_it_pronoun",
        level: "A1",
        title: "Unit 4: It ... (Vaqt, Ob-havo, Masofa va Holat)",
        category: "Essential Sentences (A1)",
        structure: "It is + Time (It's 10:30) | It is + Weather (It's raining / It's cold) | It is + Distance (It's 5 km to...)",
        uzbekMeaning: "Egasi aniq bo'lmagan gaplarda 'It' dan foydalanish (Soat 10 bo'ldi / Yomg'ir yoqyapti / Uzoq)",
        explanation: "Essential Grammar in Use 38-qoidasi: Ingliz tilida egani bo'sh qoldirish mumkin emas. Shuning uchun vaqtni aytganda (It is 8 o'clock), sanani aytganda (It is Monday), ob-havoni aytganda (It is sunny / It is snowing) va masofani aytganda (It is 10 miles to the airport) 'It' soxta egasi (dummy subject) qo'yiladi.",
        ieltsRelevance: "Writing va Speakingda vaziyat, vaqt va masofani to'g'ri kiritish uchun asosiy sintaksis.",
        academicExamples: [
            {
                sentence: "It is crucial to acknowledge the long-term consequences of deforestation.",
                translation: "O'rmonlarning kesilishi keltirib chiqaradigan uzoq muddatli oqibatlarni tan olish o'ta muhimdir.",
                context: "Task 2"
            }
        ],
        commonMistakes: [
            {
                incorrect: "Is raining today.",
                correct: "It is raining today.",
                explanation: "Ingliz tilida ob-havo gaplarida 'It' egasi tushirib qoldirilmaydi."
            }
        ],
        quizQuestions: [
            {
                question: "_______ late now, and _______ a long way to walk home.",
                options: ["It is / it is", "There is / it is", "It is / there is", "There is / there is"],
                correctAnswer: "It is / it is",
                explanation: "Vaqt (It is late) va masofa (it is a long way) uchun 'It is' ishlatiladi."
            }
        ]
    },

    // --- SECTION 2: PRESENT TENSES (CONTINUOUS & SIMPLE) ---
    {
        id: "murphy_u03_present_continuous",
        level: "A1",
        title: "Unit 5: I am doing (Present Continuous — Hozirgi Davomli Zamon)",
        category: "Present Tenses (A1)",
        structure: "S + am/is/are + V-ing | S + am/is/are + not + V-ing | Am/Is/Are + S + V-ing?",
        uzbekMeaning: "Ayni paytda sodir bo'layotgan yoki vaqtinchalik harakatlar (Men yozyapman, U ishlayapti)",
        explanation: "Essential Grammar in Use 3-qoidasi: Present Continuous ayni gapirilayotgan paytda boshlangan va hali tugallanmagan harakatlar (I am studying right now) uchun ishlatiladi. Fe'lga -ing qo'shilish qoidalari: run -> running (oxirgi undosh ikkilanadi), write -> writing ('e' tushib qoladi), lie -> lying ('ie' -> 'y').",
        ieltsRelevance: "Speaking Part 1 da ayni paytdagi mashg'ulotlaringizni aytishda va Writing Task 1/2 da davom etayotgan o'zgarishlarni ifodalashda qo'llaniladi.",
        academicExamples: [
            {
                sentence: "Global temperatures are rising at an alarming pace.",
                translation: "Global harorat xavotirli sur'atda ko'tarilmoqda.",
                context: "Task 2"
            },
            {
                sentence: "At present, I am preparing for the IELTS examination to study overseas.",
                translation: "Ayni paytda chet elda o'qish uchun IELTS imtihoniga tayyorlanyapman.",
                context: "Speaking"
            }
        ],
        commonMistakes: [
            {
                incorrect: "Look! The bus comes.",
                correct: "Look! The bus is coming.",
                explanation: "Ayni paytda ko'z o'ngingizda sodir bo'layotgan harakat uchun Present Continuous ishlatiladi."
            }
        ],
        quizQuestions: [
            {
                question: "Please be quiet. I _______ to concentrate on this essay.",
                options: ["am trying", "try", "have tried", "was trying"],
                correctAnswer: "am trying",
                explanation: "Ayni paytda davom etayotgan harakat: 'I am trying' (harakat qilayapman)."
            }
        ]
    },
    {
        id: "murphy_u04_present_continuous_questions",
        level: "A1",
        title: "Unit 6: Are you doing? (Present Continuous Savollari)",
        category: "Present Tenses (A1)",
        structure: "Am/Is/Are + Subject + V-ing? | Question Word (What/Where/Why) + am/is/are + Subject + V-ing?",
        uzbekMeaning: "Hozirgi davomli zamonda savollar (Nima qilyapsan? Qayerga ketyapti?)",
        explanation: "Essential Grammar in Use 4-qoidasi: So'roq shaklida yordamchi fe'l (am/is/are) egadan oldinga o'tadi: 'Are you feeling okay?' / 'What are you reading?'. Qisqa javoblar: 'Yes, I am' / 'No, I am not'. Maxsus so'roq so'zlari eng oldinda keladi: 'Where is she going?'.",
        ieltsRelevance: "Speaking muloqotida suhbatdosh bilan savol-javob qilishda muhim.",
        academicExamples: [
            {
                sentence: "What strategies are leading educational institutions currently implementing?",
                translation: "Yetakchi ta'lim muassasalari ayni paytda qanday strategiyalarni amalga oshirmoqda?",
                context: "Task 2"
            }
        ],
        commonMistakes: [
            {
                incorrect: "What you are doing tonight?",
                correct: "What are you doing tonight?",
                explanation: "Savolda 'What' dan keyin 'are' yordamchi fe'li egadan oldinga chiqadi."
            }
        ],
        quizQuestions: [
            {
                question: "Why _______ everyone _______ at that strange painting?",
                options: ["is / looking", "are / look", "do / look", "is / look"],
                correctAnswer: "is / looking",
                explanation: "'Everyone' grammatik jihatdan birlik (is) hisoblanadi: 'Why is everyone looking...'."
            }
        ]
    },
    {
        id: "murphy_u05_present_simple",
        level: "A1",
        title: "Unit 7: I do / work / like etc. (Present Simple — Hozirgi Oddiy Zamon)",
        category: "Present Tenses (A1)",
        structure: "I / We / You / They + V1 | He / She / It + V1(s/es)",
        uzbekMeaning: "Doimiy takrorlanuvchi ish-harakatlar, odatlar va umumiy haqiqatlar",
        explanation: "Essential Grammar in Use 5-qoidasi: Present Simple har kuni yoki doimiy ravishda takrorlanadigan ishlar (I drink tea every morning) va umumiy tabiat haqiqatlari (The Earth goes around the Sun) uchun ishlatiladi. He/She/It olmoshlarida fe'lga -s/-es qo'shiladi: pass -> passes, watch -> watches, study -> studies.",
        ieltsRelevance: "Writing Task 1 diagramma va jadvallarni tanishtirishda (The chart shows...) hamda Task 2 da umumiy qonuniyatlarni yozishda asosiy vosita.",
        academicExamples: [
            {
                sentence: "The line graph illustrates fluctuations in consumer spending over a decade.",
                translation: "Chiziqli grafik o'n yil davomida iste'molchilar xarajatlaridagi tebranishlarni tasvirlaydi.",
                context: "Task 1"
            },
            {
                sentence: "Regular physical exercise promotes cardiovascular longevity.",
                translation: "Muntazam jismoniy mashqlar yurak-qon tomir salomatligini yaxshilaydi.",
                context: "Task 2"
            }
        ],
        commonMistakes: [
            {
                incorrect: "My brother live in London.",
                correct: "My brother lives in London.",
                explanation: "'My brother' (he) bo'lgani uchun fe'lga -s qo'shiladi: 'lives'."
            }
        ],
        quizQuestions: [
            {
                question: "The provided table _______ statistical data regarding renewable energy adoption.",
                options: ["provides", "is providing", "provided", "has provided"],
                correctAnswer: "provides",
                explanation: "Akademik Task 1 kirish gaplarida fe'l doim Present Simple da (The table provides...) bo'ladi."
            }
        ]
    },
    {
        id: "murphy_u06_present_simple_negative",
        level: "A1",
        title: "Unit 8: I don't ... (Present Simple Inkor Shakli)",
        category: "Present Tenses (A1)",
        structure: "I / We / You / They + don't (do not) + V1 | He / She / It + doesn't (does not) + V1",
        uzbekMeaning: "Hozirgi oddiy zamonda inkor (Men qilmayman, U yoqtirmaydi)",
        explanation: "Essential Grammar in Use 6-qoidasi: Present Simple inkorida 'don't' yoki 'doesn't' yordamchi fe'llari qo'yiladi. MUHIM: 'doesn't' ishlatilganda asosiy fe'ldan -s/-es qo'shimchasi tushib qoladi (He doesn't like, NOT he doesn't likes).",
        ieltsRelevance: "Speaking va Writingda o'zingiz yoki jamiyat qilmaydigan narsalarni to'g'ri ifodalash uchun.",
        academicExamples: [
            {
                sentence: "Many underdeveloped regions do not possess adequate healthcare facilities.",
                translation: "Ko'plab rivojlanayotgan hududlar yetarli tibbiy muassasalarga ega emas.",
                context: "Task 2"
            }
        ],
        commonMistakes: [
            {
                incorrect: "He doesn't works on weekends.",
                correct: "He doesn't work on weekends.",
                explanation: "'doesn't' dan keyin fe'l asosi (work) qo'shimchasiz keladi."
            }
        ],
        quizQuestions: [
            {
                question: "She _______ coffee because it _______ her sleep.",
                options: ["doesn't drink / disrupts", "don't drink / disrupts", "doesn't drinks / disrupt", "doesn't drink / disrupt"],
                correctAnswer: "doesn't drink / disrupts",
                explanation: "Inkorda 'doesn't drink', ikkinchi qismda darak 3-shaxs birlik 'disrupts'."
            }
        ]
    },
    {
        id: "murphy_u07_present_simple_questions",
        level: "A1",
        title: "Unit 9: Do you ... ? (Present Simple Savollari)",
        category: "Present Tenses (A1)",
        structure: "Do + I/we/you/they + V1? | Does + he/she/it + V1? | Qisqa javob: Yes, I do. / No, he doesn't.",
        uzbekMeaning: "Hozirgi oddiy zamonda savol berish (Siz inglizcha gapirasizmi? U qayerda yashaydi?)",
        explanation: "Essential Grammar in Use 7-qoidasi: Savol tuzishda gap boshiga 'Do' yoki 'Does' chiqadi: 'Do you play tennis?' / 'Does Sarah speak Spanish?'. Maxsus so'roq so'zlar: 'Where do your parents live?' / 'What does this word mean?'.",
        ieltsRelevance: "Speaking Part 3 da savollarni to'g'ri tushunish va javob berishda kerak.",
        academicExamples: [
            {
                sentence: "How does socioeconomic inequality affect academic attainment?",
                translation: "Ijtimoiy-iqtisodiy tengsizlik akademik muvaffaqiyatga qanday ta'sir qiladi?",
                context: "Task 2"
            }
        ],
        commonMistakes: [
            {
                incorrect: "Does he lives in Samarkand?",
                correct: "Does he live in Samarkand?",
                explanation: "'Does' bo'lgani sababli asosiy fe'lda -s qo'shimchasi bo'lmaydi (live)."
            }
        ],
        quizQuestions: [
            {
                question: "What time _______ the morning lecture _______?",
                options: ["does / start", "do / start", "is / start", "does / starts"],
                correctAnswer: "does / start",
                explanation: "'The morning lecture' (it) uchun 'does ... start' to'g'ri bo'ladi."
            }
        ]
    },
    {
        id: "murphy_u08_present_continuous_vs_simple",
        level: "A1",
        title: "Unit 10: I am doing and I do (Continuous va Simple Taqqoslash & Statik Fe'llar)",
        category: "Present Tenses (A1)",
        structure: "Continuous (am/is/are + V-ing) = Hozir/Vaqtinchalik vs. Simple (V/Vs) = Doimiy/Odat",
        uzbekMeaning: "Hozirgi davomli va Hozirgi oddiy zamon farqi hamda Statik fe'llar",
        explanation: "Essential Grammar in Use 8-qoidasi: Doimiy odat uchun: 'I live in Tashkent' (Men Toshkentda yashayman). Vaqtinchalik holat uchun: 'I am living with my cousin this week'. MUHIM: Statik fe'llar (like, love, hate, want, know, understand, remember, depend, believe) davomli zamonda (-ing) ishlatilmaydi: 'I understand' (NOT I am understanding).",
        ieltsRelevance: "IELTS Speaking va Writingda vaqtinchalik hodisalar bilan doimiy holatlarni to'g'ri farqlash grammatik aniqlik (GRA) balini ta'minlaydi.",
        academicExamples: [
            {
                sentence: "The economic outcome depends heavily on international trade agreements.",
                translation: "Iqtisodiy natija xalqaro savdo bitimlariga jiddiy bog'liq bo'ladi.",
                context: "Task 2"
            },
            {
                sentence: "Water boils at 100 degrees Celsius, but right now the water in this pot is not boiling.",
                translation: "Suv 100 darajada qaynaydi (doimiy qonun), lekin ayni paytda bu qozondagi suv qaynamayapti.",
                context: "Task 1"
            }
        ],
        commonMistakes: [
            {
                incorrect: "I am knowing the correct answer.",
                correct: "I know the correct answer.",
                explanation: "'Know' statik fe'l bo'lgani uchun continuous da ishlatilmaydi."
            }
        ],
        quizQuestions: [
            {
                question: "Listen! Somebody _______ the guitar, but I _______ who it is.",
                options: ["is playing / don't know", "plays / don't know", "is playing / am not knowing", "plays / am not knowing"],
                correctAnswer: "is playing / don't know",
                explanation: "Birinchi harakat ayni paytda (is playing), 'know' esa statik fe'l (don't know)."
            }
        ]
    },
    {
        id: "murphy_u09_have_have_got",
        level: "A1",
        title: "Unit 11: I have ... / I've got ... (Egalik Ifodalash)",
        category: "Essential Verbs (A1)",
        structure: "I/We/You/They have got (have) | He/She/It has got (has) | Inkor: haven't got / hasn't got",
        uzbekMeaning: "Menda bor / Unda bor (Mening oilam bor / Uning mashinasi yo'q)",
        explanation: "Essential Grammar in Use 9-qoidasi: Mulk, qarindoshlik va salomatlik holatlarini aytishda: 'I've got a smartphone' / 'She has got two brothers' / 'I've got a headache'. Britaniya inglizchasida 'have got', Amerika inglizchasida 'have' keng qo'llanadi.",
        ieltsRelevance: "Speaking Part 1 da o'z mulkingiz, oilangiz va kundalik holatlaringiz haqida tabiiy gapirish vositasi.",
        academicExamples: [
            {
                sentence: "Governments have an imperative responsibility to safeguard public infrastructure.",
                translation: "Hukumatlar jamoat infratuzilmasini himoya qilish bo'yicha qat'iy mas'uliyatga ega.",
                context: "Task 2"
            }
        ],
        commonMistakes: [
            {
                incorrect: "She have got two cars.",
                correct: "She has got two cars. / She has two cars.",
                explanation: "3-shaxs birlik (he/she/it) bilan doim 'has got' keladi."
            }
        ],
        quizQuestions: [
            {
                question: "Sarah _______ a new laptop, but she _______ a printer.",
                options: ["has got / hasn't got", "have got / haven't got", "has got / haven't got", "have got / hasn't got"],
                correctAnswer: "has got / hasn't got",
                explanation: "Sarah (She) uchun darak shaklda 'has got', inkorda 'hasn't got' to'g'ri keladi."
            }
        ]
    },

    // --- SECTION 3: PAST TENSES ---
    {
        id: "murphy_u10_was_were",
        level: "A1",
        title: "Unit 12: was / were (To Be ning O'tgan Zamoni)",
        category: "Past Tenses (A1)",
        structure: "I / He / She / It was | We / You / They were | Inkor: wasn't / weren't | Savol: Was/Were + S + ...?",
        uzbekMeaning: "O'tgan zamonda bo'lgan edi (Kecha men uyda edim / Ular charchagan edilar)",
        explanation: "Essential Grammar in Use 10-qoidasi: 'am/is' ning o'tgan zamoni 'was', 'are' ning o'tgan zamoni 'were'. O'tgan zamondagi holat, sifat, kasb va joylashuvni ifodalaydi: 'Yesterday I was sick' / 'They were at the cinema last night'.",
        ieltsRelevance: "Speaking Part 2 o'tmish xotiralarini aytishda va Writing Task 1 o'tgan yilgi ma'lumotlarni yozishda kerak.",
        academicExamples: [
            {
                sentence: "In 1990, the literacy rate in developing nations was exceptionally low.",
                translation: "1990 yilda rivojlanayotgan mamlakatlarda savodxonlik darajasi favqulodda past edi.",
                context: "Task 1"
            }
        ],
        commonMistakes: [
            {
                incorrect: "We was very surprised by the announcement.",
                correct: "We were very surprised by the announcement.",
                explanation: "'We' olmoshi bilan 'were' ishlatiladi ('was' emas)."
            }
        ],
        quizQuestions: [
            {
                question: "Where _______ you yesterday at 5 PM? I _______ looking for you.",
                options: ["were / was", "was / were", "were / were", "was / was"],
                correctAnswer: "were / was",
                explanation: "'You' bilan 'were', 'I' bilan 'was' to'g'ri keladi."
            }
        ]
    },
    {
        id: "murphy_u11_past_simple_regular_irregular",
        level: "A1",
        title: "Unit 13: worked / got / went etc. (Past Simple — O'tgan Oddiy Zamon)",
        category: "Past Tenses (A1)",
        structure: "To'g'ri fe'llar: V + -ed (worked, cleaned) | Noto'g'ri fe'llar: V2 (went, saw, bought)",
        uzbekMeaning: "O'tgan zamonda aniq vaqtda sodir bo'lib tugagan harakat",
        explanation: "Essential Grammar in Use 11-qoidasi: Past Simple o'tmishda sodir bo'lgan va butunlay tugagan harakatlar uchun ishlatiladi. To'g'ri fe'llarga -ed qo'shiladi: work -> worked, live -> lived, study -> studied. Noto'g'ri fe'llar maxsus 2-shaklga ega: go -> went, see -> saw, buy -> bought, have -> had, take -> took.",
        ieltsRelevance: "Writing Task 1 da o'tgan yillardagi grafik o'zgarishlarni yozishning asosi (e.g. Sales increased rapidly in 2010).",
        academicExamples: [
            {
                sentence: "Between 2000 and 2015, renewable energy investments increased significantly.",
                translation: "2000 va 2015 yillar oralig'ida qayta tiklanadigan energiya investitsiyalari sezilarli darajada oshdi.",
                context: "Task 1"
            }
        ],
        commonMistakes: [
            {
                incorrect: "Yesterday I goed to the supermarket.",
                correct: "Yesterday I went to the supermarket.",
                explanation: "'Go' noto'g'ri fe'l bo'lgani sababli uning 2-shakli 'went' bo'ladi."
            }
        ],
        quizQuestions: [
            {
                question: "The company _______ its first international branch in 2012.",
                options: ["established", "establishes", "is establishing", "has established"],
                correctAnswer: "established",
                explanation: "2012 yil aniq o'tgan davr bo'lgani sababli fe'lning 2-shakli (established) tanlanadi."
            }
        ]
    },
    {
        id: "murphy_u12_past_simple_negative_questions",
        level: "A1",
        title: "Unit 14: I didn't ... Did you ... ? (Past Simple Inkor va Savol)",
        category: "Past Tenses (A1)",
        structure: "Inkor: S + didn't (did not) + V1 | Savol: Did + Subject + V1? | Qisqa javob: Yes, I did. / No, I didn't.",
        uzbekMeaning: "O'tgan oddiy zamonda inkor va savol (Men bormadim / Siz ko'rdingizmi?)",
        explanation: "Essential Grammar in Use 12-qoidasi: Past Simple ning inkori va so'rog'ida 'did / didn't' ishlatiladi. MUHIM: 'did' yoki 'didn't' kelganda asosiy fe'l 1-shaklga (V1) qaytadi: 'I didn't go' (NOT I didn't went) / 'Did you see Sarah?' (NOT Did you saw).",
        ieltsRelevance: "Speaking intervyusida o'tmishdagi voqealar haqida to'g'ri savol-javob qilishda muhim.",
        academicExamples: [
            {
                sentence: "The municipal council did not allocate sufficient funding for suburban transport.",
                translation: "Shahar kengashi shahar atrofi transporti uchun yetarli mablag' ajratmadi.",
                context: "Task 2"
            }
        ],
        commonMistakes: [
            {
                incorrect: "Did you went to the conference yesterday?",
                correct: "Did you go to the conference yesterday?",
                explanation: "'Did' yordamchi fe'lidan keyin asosiy fe'lning 1-shakli (go) keladi."
            }
        ],
        quizQuestions: [
            {
                question: "Why _______ you _______ the assignment on time?",
                options: ["didn't / submit", "didn't / submitted", "weren't / submit", "don't / submitted"],
                correctAnswer: "didn't / submit",
                explanation: "'didn't' dan keyin asosiy fe'l asosi (submit) keladi."
            }
        ]
    },
    {
        id: "murphy_u13_past_continuous",
        level: "A1",
        title: "Unit 15: I was doing (Past Continuous — O'tgan Davomli Zamon)",
        category: "Past Tenses (A1)",
        structure: "S + was/were + V-ing | S + was/were + not + V-ing | Was/Were + S + V-ing?",
        uzbekMeaning: "O'tmishda ma'lum bir vaqt oralig'ida davom etayotgan jarayon",
        explanation: "Essential Grammar in Use 13-qoidasi: O'tmishdagi aniq bir vaqtda (masalan, kecha soat 4 da) jarayonda bo'lgan harakatlar uchun ishlatiladi: 'At 4 o'clock yesterday, I was playing tennis' (soat 4 dan oldin boshlaganman va hali o'ynayotgan edim).",
        ieltsRelevance: "Speaking Part 2 hikoyalarda foni va vaziyatni tasvirlashda qo'llaniladi.",
        academicExamples: [
            {
                sentence: "While the economy was recovering, inflation remained a persistent threat.",
                translation: "Iqtisodiyot tiklanayotgan bir paytda, inflyatsiya doimiy xavf bo'lib qoldi.",
                context: "Task 2"
            }
        ],
        commonMistakes: [
            {
                incorrect: "Yesterday at 8 PM I watched TV.",
                correct: "Yesterday at 8 PM I was watching TV.",
                explanation: "Aniq vaqt nuqtasida jarayonda bo'lgan harakat uchun Past Continuous ishlatiladi."
            }
        ],
        quizQuestions: [
            {
                question: "What _______ you _______ when the earthquake struck?",
                options: ["were / doing", "was / doing", "did / do", "are / doing"],
                correctAnswer: "were / doing",
                explanation: "Zilzila yuz bergan daqiqada nima bilan mashg'ul edingiz (were doing)."
            }
        ]
    },
    {
        id: "murphy_u14_past_continuous_and_simple",
        level: "A1",
        title: "Unit 16: I was doing and I did (Past Continuous va Past Simple Kesishuvi)",
        category: "Past Tenses (A1)",
        structure: "Davomli jarayon (was/were + V-ing) + WHEN/WHILE + Qisqa harakat (Past Simple V2)",
        uzbekMeaning: "Bir harakat davom etayotganda ikkinchi to'satdan harakatning ro'y berishi",
        explanation: "Essential Grammar in Use 14-qoidasi: O'tmishda bir uzun jarayon davom etayotgan paytda kutilmaganda boshqa qisqa harakat sodir bo'lsa: 'I was walking home when it began to rain' (Uyga ketayotgan edim, yomg'ir yog'ib ketdi). Uzun fon harakat -> Past Continuous, qisqa kesuvchi harakat -> Past Simple.",
        ieltsRelevance: "Speaking Part 2 da shaxsiy sarguzasht va tajribalarni jonli hikoya qilish vositasi.",
        academicExamples: [
            {
                sentence: "Researchers were conducting field surveys when the unexpected breakthrough occurred.",
                translation: "Tadqiqotchilar dala tadqiqotlarini olib borayotganlarida kutilmagan ilmiy kashfiyot yuz berdi.",
                context: "Task 2"
            }
        ],
        commonMistakes: [
            {
                incorrect: "While I walked down the street, I was meeting an old friend.",
                correct: "While I was walking down the street, I met an old friend.",
                explanation: "Ko'chada yurish uzun jarayon (was walking), do'stni uchratish esa qisqa hodisa (met)."
            }
        ],
        quizQuestions: [
            {
                question: "The phone rang while I _______ a shower.",
                options: ["was taking", "took", "have taken", "am taking"],
                correctAnswer: "was taking",
                explanation: "'While' dan keyin o'tmishdagi davomli jarayon: 'was taking'."
            }
        ]
    },

    // --- SECTION 4: PRESENT PERFECT ---
    {
        id: "murphy_u15_present_perfect_1",
        level: "A1",
        title: "Unit 17: I have done (Present Perfect 1 — Hozirgi Tugallangan Zamon)",
        category: "Present Perfect (A1)",
        structure: "I / We / You / They + have + V3/ed | He / She / It + has + V3/ed | Inkor: haven't / hasn't + V3",
        uzbekMeaning: "Natijasi hozirgi kunda ko'rinib turgan yoki muhim bo'lgan o'tgan harakat",
        explanation: "Essential Grammar in Use 15-qoidasi: Present Perfect o'tmishda sodir bo'lgan, lekin natijasi ayni hozirgi daqiqada muhim bo'lgan ish-harakatlar uchun ishlatiladi: 'I have lost my key' (= hozir menda kalit yo'q, uyga kirolmayapman). Fe'lning 3-shakli (Past Participle) ishlatiladi: clean -> cleaned, lose -> lost, see -> seen, write -> written.",
        ieltsRelevance: "Writing Task 2 kirish qismida jamiyatdagi yangi o'zgarishlarni kiritishda (e.g. Technology has revolutionized learning).",
        academicExamples: [
            {
                sentence: "Technological advancements have transformed modern communication systems.",
                translation: "Texnologik yutuqlar zamonaviy aloqa tizimlarini tubdan o'zgartirdi (natijasi bugun mavjud).",
                context: "Task 2"
            }
        ],
        commonMistakes: [
            {
                incorrect: "I have lost my keys yesterday.",
                correct: "I lost my keys yesterday. / I have lost my keys.",
                explanation: "'Yesterday' kabi aniq o'tgan vaqt bilan Present Perfect ishlatilmaydi; u faqat natija hozir muhim bo'lganda qo'llanadi."
            }
        ],
        quizQuestions: [
            {
                question: "Look! Somebody _______ the window. It's wide open.",
                options: ["has broken", "broke", "is breaking", "breaks"],
                correctAnswer: "has broken",
                explanation: "Oyna singan va natijasi hozir ko'rinib turibdi (has broken)."
            }
        ]
    },
    {
        id: "murphy_u16_present_perfect_just_already_yet",
        level: "A1",
        title: "Unit 18: I've just ... I've already ... I haven't ... yet (Present Perfect 2)",
        category: "Present Perfect (A1)",
        structure: "Just = hozirgina | Already = allaqachon (have/has va V3 o'rtasida) | Yet = hali (gap oxirida inkor va so'roqda)",
        uzbekMeaning: "Hozirgina, allaqachon va hali so'zlarining Present Perfect dagi o'rni",
        explanation: "Essential Grammar in Use 16-qoidasi: 1) 'just' = qisqa vaqt oldin: 'I've just arrived'. 2) 'already' = kutilgandan erta yoki allaqachon: 'I've already finished my work'. 3) 'yet' = hali/haliyam (inkor va so'roq gaplarning eng oxirida keladi): 'Have you finished yet?' / 'I haven't eaten yet'.",
        ieltsRelevance: "Speaking va Writingda o'z ishlaringizning holatini tabiiy ifodalash.",
        academicExamples: [
            {
                sentence: "Several European nations have already achieved substantial reductions in greenhouse emissions.",
                translation: "Bir qator Yevropa davlatlari issiqxona gazlari emissiyasini qisqartirishda allaqachon salmoqli natijalarga erishdilar.",
                context: "Task 2"
            }
        ],
        commonMistakes: [
            {
                incorrect: "I didn't finish my homework yet.",
                correct: "I haven't finished my homework yet.",
                explanation: "'Yet' so'zi bilan Present Perfect (haven't finished) ishlatiladi."
            }
        ],
        quizQuestions: [
            {
                question: "Don't forget to pay the electricity bill. — I _______ it.",
                options: ["have already paid", "already paid", "have yet paid", "paid already"],
                correctAnswer: "have already paid",
                explanation: "'Alla qachon to'lab bo'ldim' ma'nosida 'have already paid' to'g'ri keladi."
            }
        ]
    },
    {
        id: "murphy_u17_present_perfect_have_you_ever",
        level: "A1",
        title: "Unit 19: Have you ever ... ? (Present Perfect 3 — Hayotiy Tajriba)",
        category: "Present Perfect (A1)",
        structure: "Have you ever + V3? | I have never + V3 | Ever = umringizda / biror marta | Never = hech qachon",
        uzbekMeaning: "Hayotiy tajribalar haqida so'rash va aytish (Siz biror marta Londonda bo'lganmisiz?)",
        explanation: "Essential Grammar in Use 17-qoidasi: Insonning butun hayoti davomidagi tajribalari haqida gapirganda: 'Have you ever been to Japan?' (Hayotingizda biror marta Yaponiyada bo'lganmisiz?). Javobda: 'Yes, twice' / 'No, I have never been there'.",
        ieltsRelevance: "Speaking Part 1 ning eng mashhur savollari (Have you ever traveled abroad / played an instrument?).",
        academicExamples: [
            {
                sentence: "I have never witnessed such remarkable academic enthusiasm among students.",
                translation: "Men talabalar orasida hech qachon bunday ajoyib akademik ishtiyoqni ko'rmaganman.",
                context: "Speaking"
            }
        ],
        commonMistakes: [
            {
                incorrect: "Have you ever went to Paris?",
                correct: "Have you ever been to Paris?",
                explanation: "Biror joyga borib kelganlik tajribasi haqida 'been to' ishlatiladi ('went' emas)."
            }
        ],
        quizQuestions: [
            {
                question: "_______ you ever _______ an exotic musical instrument?",
                options: ["Have / played", "Did / play", "Were / playing", "Do / play"],
                correctAnswer: "Have / played",
                explanation: "Hayotiy tajriba haqida so'rash: 'Have you ever played...?'."
            }
        ]
    },
    {
        id: "murphy_u18_present_perfect_how_long",
        level: "A1",
        title: "Unit 20: How long have you ... ? (Present Perfect 4 — Davomiylik)",
        category: "Present Perfect (A1)",
        structure: "How long + have/has + Subject + V3/been? | S + have/has lived/worked/been + for/since ...",
        uzbekMeaning: "Qancha vaqtdan beri davom etayotganini so'rash va aytish (Qanchadan beri shu yerda yashaysiz?)",
        explanation: "Essential Grammar in Use 18-qoidasi: O'tmishda boshlanib hozirgacha davom etayotgan holatlar uchun Present Simple emas, balki Present Perfect ishlatiladi: 'I have lived in London for two years' (= Men 2 yildan beri Londonda yashayman, hozir ham u yerdaman).",
        ieltsRelevance: "Speaking Part 1 da 'How long have you been studying English?' savoliga benuqson javob berish kaliti.",
        academicExamples: [
            {
                sentence: "I have been interested in international economics since my high school years.",
                translation: "Men yuqori sinf yillarimdan beri xalqaro iqtisodiyotga qiziqib kelaman.",
                context: "Speaking"
            }
        ],
        commonMistakes: [
            {
                incorrect: "I know him since 2018.",
                correct: "I have known him since 2018.",
                explanation: "'Since' bilan boshlangan davomiylik uchun Present Perfect (have known) talab qilinadi."
            }
        ],
        quizQuestions: [
            {
                question: "How long _______ you _______ in this academic department?",
                options: ["have / worked", "do / work", "are / working", "did / work"],
                correctAnswer: "have / worked",
                explanation: "'Qanchadan beri ishlayapsiz?' ma'nosida 'How long have you worked' to'g'ri."
            }
        ]
    },
    {
        id: "murphy_u19_for_since_ago",
        level: "A1",
        title: "Unit 21: for / since / ago (Vaqt Ko'rsatkichlari Farqi)",
        category: "Time Expressions (A1)",
        structure: "FOR + Vaqt oralig'i (for 3 days, for 5 years) | SINCE + Boshlangan aniq nuqta (since Monday, since 2015) | AGO = oldin (Past Simple bilan)",
        uzbekMeaning: "...davomida (for), ...dan beri (since), ...oldin (ago) so'zlarining to'g'ri ishlatilishi",
        explanation: "Essential Grammar in Use 19-qoidasi: 1) 'FOR' — muddat vaqt oralig'i: for two hours, for ten years. 2) 'SINCE' — ish-harakat boshlangan aniq vaqt nuqtasi: since 9 o'clock, since 2010. 3) 'AGO' — o'tmishda ...oldin (faqat Past Simple bilan): 'He left ten minutes ago'.",
        ieltsRelevance: "Writing Task 1 va Speakingda vaqt ko'rsatkichlarini chalkashtirmasdan aniq qo'llash.",
        academicExamples: [
            {
                sentence: "Global renewable energy capacity has grown exponentially since 2010.",
                translation: "Global qayta tiklanadigan energiya quvvati 2010 yildan beri eksponentsial ravishda o'sdi.",
                context: "Task 1"
            }
        ],
        commonMistakes: [
            {
                incorrect: "I have lived here since three years.",
                correct: "I have lived here for three years. / ...since 2021.",
                explanation: "'Three years' bu vaqt davomiyligi bo'lgani uchun 'for' ishlatiladi ('since' emas)."
            }
        ],
        quizQuestions: [
            {
                question: "They have been married _______ twenty years, having met thirty years _______.",
                options: ["for / ago", "since / ago", "for / since", "since / for"],
                correctAnswer: "for / ago",
                explanation: "Muddat oralig'iga 'for twenty years', o'tmishdagi nuqtaga 'thirty years ago'."
            }
        ]
    },
    {
        id: "murphy_u20_present_perfect_vs_past_simple",
        level: "A1",
        title: "Unit 22: I have done and I did (Present Perfect va Past Simple Taqqoslash)",
        category: "Tense Contrast (A1)",
        structure: "Past Simple: Aniq o'tgan vaqt (yesterday, in 2018, last week) vs. Present Perfect: Noma'lum vaqt / Bugungacha bo'lgan davr (today, recently, this week)",
        uzbekMeaning: "O'tgan oddiy zamon va Hozirgi tugallangan zamonning aniq farqlari",
        explanation: "Essential Grammar in Use 20-qoidasi: Agar vaqt tugagan bo'lsa (yesterday, last year, in 2005) -> Past Simple: 'I finished my essay yesterday'. Agar vaqt davri hali tugamagan bo'lsa (today, this week) yoki natija hozir muhim bo'lsa -> Present Perfect: 'I have written three essays this week'.",
        ieltsRelevance: "IELTS Writing Task 1 va 2 da eng ko'p ball yo'qotiladigan zamonlar to'qnashuvi.",
        academicExamples: [
            {
                sentence: "In 2005, the government launched the initiative, and since then it has benefited millions.",
                translation: "2005 yilda hukumat tashabbusni boshladi (Past Simple) va o'shandan beri u millionlab odamlarga foyda keltirdi (Present Perfect).",
                context: "Task 2"
            }
        ],
        commonMistakes: [
            {
                incorrect: "I have seen that movie last night.",
                correct: "I saw that movie last night.",
                explanation: "'Last night' aniq o'tgan vaqt bo'lgani uchun faqat Past Simple (saw) ishlatiladi."
            }
        ],
        quizQuestions: [
            {
                question: "Shakespeare _______ many world-famous plays, but contemporary writers _______ new genres.",
                options: ["wrote / have developed", "has written / developed", "wrote / developed", "has written / have developed"],
                correctAnswer: "wrote / have developed",
                explanation: "Shekspir hayoti o'tmishda tugagan (wrote), zamonaviy yozuvchilar esa hozir ham rivojlantirmoqda (have developed)."
            }
        ]
    },

    // --- SECTION 5: MODALS & BASIC SENTENCE EXPANSION (A1) ---
    {
        id: "murphy_u31_can_could",
        level: "A1",
        title: "Unit 23: can / could (Qobiliyat va Iltimoslar)",
        category: "Modal Verbs (A1)",
        structure: "S + can + V1 (Hozirgi qobiliyat) | S + could + V1 (O'tgan qobiliyat) | Can/Could you + V1? (Iltimos)",
        uzbekMeaning: "Qo'ldan kelmoq, qila olmoq va xushmuomala iltimos qilish",
        explanation: "Essential Grammar in Use 31-qoidasi: Hozirgi qobiliyat: 'I can speak three languages' / 'Can you swim?'. O'tgan zamondagi qobiliyat: 'When I was young, I could run very fast'. Xushmuomalalik bilan iltimos qilish: 'Could you please open the door?'. Inkor shakli: cannot (can't) va couldn't.",
        ieltsRelevance: "Speaking Part 1 va 2 da o'z ko'nikmalaringiz va imkoniyatlaringizni erkin aytish vositasi.",
        academicExamples: [
            {
                sentence: "Advanced technologies can dramatically enhance diagnostic precision in healthcare.",
                translation: "Ilg'or texnologiyalar sog'liqni saqlashda diagnostika aniqligini keskin oshira oladi.",
                context: "Task 2"
            }
        ],
        commonMistakes: [
            {
                incorrect: "I can to play the piano.",
                correct: "I can play the piano.",
                explanation: "'Can' modal fe'lidan keyin 'to' zarrachasi qo'yilmaydi (to'g'ridan-to'g'ri fe'l asosi V1 keladi)."
            }
        ],
        quizQuestions: [
            {
                question: "She _______ speak English fluently now, but three years ago she _______ barely introduce herself.",
                options: ["can / could", "could / can", "can / can", "could / could"],
                correctAnswer: "can / could",
                explanation: "Hozirgi qobiliyatga 'can', 3 yil oldingi o'tmish qobiliyatiga 'could'."
            }
        ]
    },
    {
        id: "murphy_u33_should",
        level: "A1",
        title: "Unit 24: should (Maslahat va Tavsiya)",
        category: "Modal Verbs (A1)",
        structure: "S + should + V1 (Qilish tavsiya etiladi) | S + shouldn't + V1 (Qilmaslik kerak)",
        uzbekMeaning: "...qilishingiz kerak, maslahat beraman (Siz dam olishingiz kerak)",
        explanation: "Essential Grammar in Use 33-qoidasi: Biror narsani qilish to'g'ri, foydali yoki oqilona deb hisoblanganda maslahat berish uchun ishlatiladi: 'You look exhausted. You should go to sleep' / 'You shouldn't eat so much junk food'.",
        ieltsRelevance: "IELTS Writing Task 2 yechimlar qismida davlat va insonlarga tavsiyalar berishda qo'llanadi.",
        academicExamples: [
            {
                sentence: "Governments should allocate more resources to public healthcare and education.",
                translation: "Hukumatlar sog'liqni saqlash va ta'lim sohalariga ko'proq mablag' ajratishlari kerak.",
                context: "Task 2"
            }
        ],
        commonMistakes: [
            {
                incorrect: "You should to see a specialist.",
                correct: "You should see a specialist.",
                explanation: "'Should' modal fe'lidan keyin 'to' ishlatilmaydi."
            }
        ],
        quizQuestions: [
            {
                question: "Students _______ review grammar rules regularly to avoid systematic errors.",
                options: ["should", "should to", "ought", "must to"],
                correctAnswer: "should",
                explanation: "Tavsiya bildirishda 'should + V1' to'g'ri formuladir."
            }
        ]
    },
    {
        id: "murphy_u34_have_to",
        level: "A1",
        title: "Unit 25: I have to ... (Majburiyat va Shartlik)",
        category: "Modal Verbs (A1)",
        structure: "I/We/You/They have to + V1 | He/She/It has to + V1 | Inkor: don't/doesn't have to + V1",
        uzbekMeaning: "Majbur bo'lmoq / Shart bo'lmoq (Men erta turishim shart)",
        explanation: "Essential Grammar in Use 34-qoidasi: Qonun-qoidalar yoki tashqi vaziyat taqozosi bilan biror narsani bajarish majburiy bo'lganda: 'I have to get up at 7 AM for work' / 'In Britain, you have to drive on the left'. Inkorida 'don't have to' = 'qilish shart emas, ixtiyoriy' ma'nosini bildiradi.",
        ieltsRelevance: "Speaking va Writingda qonuniy majburiyatlar va shartlarni ifodalash.",
        academicExamples: [
            {
                sentence: "Applicants have to submit certified academic transcripts before enrollment.",
                translation: "Abituriyentlar qabuldan oldin tasdiqlangan akademik diplomlarni topshirishlari shart.",
                context: "Task 2"
            }
        ],
        commonMistakes: [
            {
                incorrect: "She have to work on Saturdays.",
                correct: "She has to work on Saturdays.",
                explanation: "'She' 3-shaxs birlik uchun 'has to' qo'llaniladi."
            }
        ],
        quizQuestions: [
            {
                question: "Tomorrow is Sunday, so I _______ wake up early.",
                options: ["don't have to", "mustn't", "haven't to", "am not having to"],
                correctAnswer: "don't have to",
                explanation: "Ertaga yakshanba, shuning uchun erta turishim shart emas (ixtiyoriy: don't have to)."
            }
        ]
    },
    {
        id: "murphy_u35_would_like",
        level: "A1",
        title: "Unit 26: Would you like ... ? / I'd like ... (Xushmuomala Taklif va Istak)",
        category: "Polite Expressions (A1)",
        structure: "Would you like + Noun / to + V1? | I would like (I'd like) + Noun / to + V1",
        uzbekMeaning: "Xohlarmidingiz? / Istagan bo'lardim (Restoranda, mehmonda va rasmiy muloqotda)",
        explanation: "Essential Grammar in Use 35-qoidasi: 'Do you want...?' ga qaraganda ancha xushmuomala va odobli shakl: 'Would you like some tea?' / 'I'd like a cup of coffee, please' / 'Would you like to come to the party tonight?'.",
        ieltsRelevance: "Speaking Part 1 va Part 2 da kelajakdagi orzu va niyatlaringizni xushmuomala aytish.",
        academicExamples: [
            {
                sentence: "I would like to pursue a postgraduate master's degree in sustainable urban planning.",
                translation: "Men barqaror shaharsozlik yo'nalishida magistratura darajasida o'qishni istagan bo'lardim.",
                context: "Speaking"
            }
        ],
        commonMistakes: [
            {
                incorrect: "I would like go to London.",
                correct: "I would like to go to London.",
                explanation: "'Would like' dan keyin fe'l kelsa 'to' zarrachasi (to go) qo'yiladi."
            }
        ],
        quizQuestions: [
            {
                question: "'_______ a cup of tea?' — 'Yes, please. I'd love one.'",
                options: ["Would you like", "Do you like", "Are you liking", "Will you like"],
                correctAnswer: "Would you like",
                explanation: "Xushmuomala taklif bildirishda 'Would you like...' formulasi qo'llaniladi."
            }
        ]
    },

    // --- SECTION 6: PRONOUNS, NOUNS & ARTICLES (A1) ---
    {
        id: "murphy_u58_pronouns",
        level: "A1",
        title: "Unit 27: I/me, he/him, they/them etc. (Kishilik va To'ldiruvchi Olmoshlar)",
        category: "Pronouns & Nouns (A1)",
        structure: "Ega: I / He / She / It / We / You / They ➔ To'ldiruvchi: me / him / her / it / us / you / them",
        uzbekMeaning: "Meni/Menga (me), Uni/Unga (him/her), Ularni/Ularga (them)",
        explanation: "Essential Grammar in Use 58-qoidasi: Fe'ldan oldin ega olmoshlari (I know Tom), fe'ldan yoki predlogdan keyin to'ldiruvchi olmoshlar (Tom knows me / Listen to him / Look at them) ishlatiladi.",
        ieltsRelevance: "Gapda olmoshlarni chalkashtirmasdan to'g'ri bog'lash va takroriylikni yo'qotish.",
        academicExamples: [
            {
                sentence: "The university offered them comprehensive academic scholarships.",
                translation: "Universitet ularga to'liq akademik stipendiyalarni taqdim etdi.",
                context: "Task 2"
            }
        ],
        commonMistakes: [
            {
                incorrect: "Please give the book to I.",
                correct: "Please give the book to me.",
                explanation: "Predlogdan ('to') keyin to'ldiruvchi olmosh 'me' keladi."
            }
        ],
        quizQuestions: [
            {
                question: "Do you know that professor? Yes, I work with _______ on research projects.",
                options: ["him", "he", "his", "himself"],
                correctAnswer: "him",
                explanation: "'with' predlogidan keyin to'ldiruvchi olmosh 'him' qo'yiladi."
            }
        ]
    },
    {
        id: "murphy_u59_possessives",
        level: "A1",
        title: "Unit 28: my/his/their & mine/yours (Egalik Sifatlari va Olmoshlari)",
        category: "Pronouns & Nouns (A1)",
        structure: "Egalik sifati (+ Ot): my car / his book | Mustaqil egalik olmoshi: mine / yours / his / hers / ours / theirs",
        uzbekMeaning: "Mening/Meningki (my/mine), Uning/Uningki (his/hers), Ularning/Ularniki (their/theirs)",
        explanation: "Essential Grammar in Use 59-60 qoidasi: Agar orqasidan ot kelsa: 'This is my bag'. Agar ot aytilmasa: 'This bag is mine' / 'It's not your pen, it's hers'.",
        ieltsRelevance: "Speakingda mulk va shaxsiy munosabatlarni aniq ifodalash.",
        academicExamples: [
            {
                sentence: "Each nation must fulfill its international environmental commitments.",
                translation: "Har bir davlat o'zining xalqaro ekologik majburiyatlarini bajarishi shart.",
                context: "Task 2"
            }
        ],
        commonMistakes: [
            {
                incorrect: "This laptop is my.",
                correct: "This laptop is mine. / This is my laptop.",
                explanation: "Ot bo'lmaganda 'mine' mustaqil egalik olmoshi ishlatiladi."
            }
        ],
        quizQuestions: [
            {
                question: "Is this notebook _______ or is it _______?",
                options: ["yours / mine", "your / my", "yours / my", "your / mine"],
                correctAnswer: "yours / mine",
                explanation: "Ot qo'llanilmagani uchun mustaqil 'yours' va 'mine' shakllari tanlanadi."
            }
        ]
    },
    {
        id: "murphy_u64_a_an_the",
        level: "A1",
        title: "Unit 29: a / an va the (Artikllar Asoslari)",
        category: "Articles & Nouns (A1)",
        structure: "A + Undosh tovush (a car, a university) | AN + Unli tovush (an apple, an hour) | THE + Aniq/Yagona narsa (the sun, the world)",
        uzbekMeaning: "Noaniq (a/an) va Aniq (the) artikllarning asosiy qo'llanilishi",
        explanation: "Essential Grammar in Use 64-68 qoidasi: 1) Biror narsa haqida birinchi marta gapirganda yoki u har qanday bittasi bo'lsa: 'I bought a laptop'. 2) Agar suhbatdoshga qaysi biri ekanligi aniq bo'lsa yoki dunyoda yagona bo'lsa: 'The laptop is very fast' / 'The earth revolves around the sun'.",
        ieltsRelevance: "IELTS Writingda eng ko'p ball olib qo'yadigan mayda xatoliklar artikllardan kelib chiqadi.",
        academicExamples: [
            {
                sentence: "The internet has created an unprecedented platform for global knowledge exchange.",
                translation: "Internet global bilim almashinuvi uchun misli ko'rilmagan platforma yaratdi.",
                context: "Task 2"
            }
        ],
        commonMistakes: [
            {
                incorrect: "I waited for a hour at the station.",
                correct: "I waited for an hour at the station.",
                explanation: "'Hour' so'zining 'h' harfi o'qilmaydi, tovush unli (/aʊər/) bo'lgani uchun 'an hour' deyiladi."
            }
        ],
        quizQuestions: [
            {
                question: "She is _______ university student and lives in _______ center of the city.",
                options: ["a / the", "an / the", "a / a", "an / a"],
                correctAnswer: "a / the",
                explanation: "'University' (/juː.../) undosh tovush bilan boshlangani uchun 'a university', shahar markazi aniq bo'lgani uchun 'the center'."
            }
        ]
    },
    {
        id: "murphy_u73_this_that_these_those",
        level: "A1",
        title: "Unit 30: this / that / these / those (Ko'rsatish Olmoshlari)",
        category: "Articles & Nouns (A1)",
        structure: "Yaqin: This (birlik) / These (ko'plik) | Uzoq: That (birlik) / Those (ko'plik)",
        uzbekMeaning: "Bu / Bular (This/These) va Anavi / Anavilar (That/Those)",
        explanation: "Essential Grammar in Use 73-qoidasi: Fazoda yoki vaqtda yaqin bo'lgan birlik narsa uchun 'this picture', ko'plik uchun 'these pictures'. Uzoq bo'lgan birlik uchun 'that car', ko'plik uchun 'those cars' ishlatiladi.",
        ieltsRelevance: "Writing Task 1 da grafik ko'rsatkichlarini taqqoslashda va ko'rsatishda qo'llanadi.",
        academicExamples: [
            {
                sentence: "These statistical figures highlight a clear upward trajectory in clean energy adoption.",
                translation: "Ushbu statistik raqamlar toza energiyani o'zlashtirishdagi aniq o'sish traektoriyasini ko'rsatadi.",
                context: "Task 1"
            }
        ],
        commonMistakes: [
            {
                incorrect: "This people are waiting in line.",
                correct: "These people are waiting in line.",
                explanation: "'People' ko'plik ot bo'lgani sababli 'these' ko'rsatish olmoshi ishlatiladi."
            }
        ],
        quizQuestions: [
            {
                question: "Do you remember _______ wonderful summer vacation we had in Italy?",
                options: ["that", "this", "these", "those"],
                correctAnswer: "that",
                explanation: "O'tmishdagi uzoq xotirani ko'rsatishda birlik 'that' to'g'ri keladi."
            }
        ]
    },

    // --- SECTION 7: ADJECTIVES, ADVERBS & PREPOSITIONS (A1) ---
    {
        id: "murphy_u86_comparatives",
        level: "A1",
        title: "Unit 31: old/older, expensive / more expensive (Sifat Darajalari — Qiyosiy)",
        category: "Adjectives & Adverbs (A1)",
        structure: "Qisqa sifat: Adj + -er + THAN (faster than, cheaper than) | Uzun sifat: MORE + Adj + THAN (more expensive than)",
        uzbekMeaning: "...roq, nisbatan ...roq (Bu mashina anavisidan tezroq / Qimmatroq)",
        explanation: "Essential Grammar in Use 86-87 qoidasi: 1-2 bo'g'inli qisqa sifatlarga '-er' qo'shiladi: fast -> faster, cheap -> cheaper, easy -> easier. 3 va undan ko'p bo'g'inli uzun sifatlar oldiga 'more' qo'yiladi: more expensive, more interesting. Noto'g'ri sifatlar: good -> better, bad -> worse, far -> further.",
        ieltsRelevance: "Writing Task 1 grafiklarida ikki yoki undan ortiq ko'rsatkichlarni taqqoslashning 100% zaruriy qoidasi.",
        academicExamples: [
            {
                sentence: "Solar power generation became significantly cheaper than fossil fuels by 2020.",
                translation: "Quyosh energiyasini ishlab chiqarish 2020 yilga kelib qazilma yoqilg'ilardan sezilarli darajada arzonroq bo'ldi.",
                context: "Task 1"
            }
        ],
        commonMistakes: [
            {
                incorrect: "This method is more easier than the previous one.",
                correct: "This method is easier than the previous one.",
                explanation: "Qisqa sifatlarda bir vaqtning o'zida 'more' va '-er' qo'llanilmaydi (faqat 'easier')."
            }
        ],
        quizQuestions: [
            {
                question: "Living in a rural area is often _______ and _______ than residing in a metropolis.",
                options: ["cheaper / quieter", "more cheap / more quiet", "cheaper / more quiet", "more cheaper / quieter"],
                correctAnswer: "cheaper / quieter",
                explanation: "Qisqa sifatlar 'cheap' va 'quiet' qiyosiy darajada 'cheaper' va 'quieter' bo'ladi."
            }
        ]
    },
    {
        id: "murphy_u89_superlatives",
        level: "A1",
        title: "Unit 32: the oldest / the most expensive (Sifat Darajalari — Orttirma)",
        category: "Adjectives & Adverbs (A1)",
        structure: "THE + Adj + -est (the fastest, the cheapest) | THE MOST + Adj (the most expensive, the most popular)",
        uzbekMeaning: "Eng ... (Eng tezi, Eng qimmati, Eng mashhuri)",
        explanation: "Essential Grammar in Use 89-qoidasi: Guruh ichida eng yuqori darajani aytganda orttirma daraja ishlatiladi va doim 'THE' artikli qo'yiladi: the highest, the most significant. Noto'g'ri sifatlar: good -> the best, bad -> the worst.",
        ieltsRelevance: "Writing Task 1 da eng yuqori (peak) nuqtalarni bayon qilishda asosiy vosita.",
        academicExamples: [
            {
                sentence: "The manufacturing sector recorded the highest volume of employment in 2018.",
                translation: "Ishlab chiqarish sektori 2018 yilda bandlikning eng yuqori hajmini qayd etdi.",
                context: "Task 1"
            }
        ],
        commonMistakes: [
            {
                incorrect: "It was most difficult exam of my life.",
                correct: "It was the most difficult exam of my life.",
                explanation: "Orttirma daraja oldidan doim 'the' artikli qo'yilishi shart ('the most difficult')."
            }
        ],
        quizQuestions: [
            {
                question: "What is _______ mountain in the world?",
                options: ["the highest", "highest", "the most high", "the most highest"],
                correctAnswer: "the highest",
                explanation: "'High' qisqa sifati orttirma darajada 'the highest' bo'ladi."
            }
        ]
    },
    {
        id: "murphy_u96_prepositions_time",
        level: "A1",
        title: "Unit 33: at 8 o'clock, on Monday, in April (Vaqt Predloglari: at, on, in)",
        category: "Prepositions (A1)",
        structure: "AT + Aniq soat/bayram (at 5 PM, at midnight, at weekend) | ON + Kunlar/Sanalar (on Monday, on 15th May) | IN + Oylar/Yillar/Fasllar (in 2020, in summer, in April)",
        uzbekMeaning: "...da vaqt predloglarining to'g'ri ishlatilishi",
        explanation: "Essential Grammar in Use 96-qoidasi: 1) 'AT' — aniq soat vaqtlari (at 8:30), tun (at night), dam olish kunlari (at the weekend). 2) 'ON' — haftaning kunlari (on Friday), aniq sanalar (on 1st September). 3) 'IN' — uzun vaqt oraliqlari: oylar (in June), yillar (in 2025), fasllar (in winter), asrlar (in the 21st century).",
        ieltsRelevance: "Task 1 da sanalar va yillarni kiritishda xato qilmaslikning asosi.",
        academicExamples: [
            {
                sentence: "The global initiative was officially inaugurated in 2015 on World Environment Day.",
                translation: "Global tashabbus 2015 yilda (in 2015) Butunjahon atrof-muhit kunida (on World Environment Day) rasman boshlandi.",
                context: "Task 2"
            }
        ],
        commonMistakes: [
            {
                incorrect: "The conference will start in Monday at 9 AM.",
                correct: "The conference will start on Monday at 9 AM.",
                explanation: "Hafta kunlari uchun 'in' emas, 'on' predlogi ishlatiladi."
            }
        ],
        quizQuestions: [
            {
                question: "The academic semester begins _______ September _______ Monday morning.",
                options: ["in / on", "on / in", "at / on", "in / at"],
                correctAnswer: "in / on",
                explanation: "Oy nomi uchun 'in September', hafta kuni uchun 'on Monday morning'."
            }
        ]
    },
    {
        id: "murphy_u99_prepositions_place",
        level: "A1",
        title: "Unit 34: in / at / on (Joy Predloglari)",
        category: "Prepositions (A1)",
        structure: "IN + Ichida/Shahar/Mamlakat (in a room, in London, in Uzbekistan) | AT + Aniq nuqta/Bino (at the bus stop, at home, at work) | ON + Sirtida/Ko'chada (on the table, on the wall, on Oxford Street)",
        uzbekMeaning: "Joy va makon predloglari (...ichida, ...da, ...ustida)",
        explanation: "Essential Grammar in Use 99-qoidasi: 1) 'IN' — 3D bo'shliq yoki chegaralangan hudud: in a garden, in a box, in France. 2) 'AT' — aniq nuqta yoki faoliyat joyi: at the station, at the door, at school. 3) 'ON' — tekislik ustida: on the floor, on the ceiling, on the left.",
        ieltsRelevance: "Speaking Part 1 da o'z joylashuvingiz va bino-inshootlarni to'g'ri tasvirlash.",
        academicExamples: [
            {
                sentence: "The primary headquarters are located in Geneva on the shores of Lake Geneva.",
                translation: "Asosiy bosh qarorgoh Jenevada (in Geneva) Jeneva ko'li bo'yida (on the shores) joylashgan.",
                context: "Task 2"
            }
        ],
        commonMistakes: [
            {
                incorrect: "I am studying in university at Tashkent.",
                correct: "I am studying at university in Tashkent.",
                explanation: "Universitet faoliyat joyi sifatida 'at university', shahar hududi esa 'in Tashkent'."
            }
        ],
        quizQuestions: [
            {
                question: "We arrived _______ the airport and waited _______ the departure lounge.",
                options: ["at / in", "in / on", "on / at", "at / at"],
                correctAnswer: "at / in",
                explanation: "Aeroport nuqtasi 'at the airport', zalning ichi esa 'in the lounge'."
            }
        ]
    },
    {
        id: "murphy_u109_conjunctions",
        level: "A1",
        title: "Unit 35: and, but, or, so, because (Asosiy Bog'lovchilar)",
        category: "Sentence Builders (A1)",
        structure: "AND (qo'shimcha) | BUT (qarama-qarshilik) | OR (tanlov) | SO (natija) | BECAUSE (sabab)",
        uzbekMeaning: "Va (and), Ammo (but), Yoki (or), Shuning uchun (so), Chunki (because)",
        explanation: "Essential Grammar in Use 109-qoidasi: Ikkita oddiy gapni bitta mazmunli qo'shma gapga bog'lash: 'I was tired, so I went to bed early' (Natija) / 'I went to bed early because I was tired' (Sabab) / 'He worked hard, but he failed' (Zidlik).",
        ieltsRelevance: "Oddiy gaplardan qo'shma murakkab gaplar (Compound Sentences) yasashning poydevori.",
        academicExamples: [
            {
                sentence: "Public transit investment is vital because it curtails emissions and reduces traffic jams.",
                translation: "Jamoat transporti investitsiyasi juda muhim, chunki u chiqindilarni kamaytiradi va tirbandliklarni qisqartiradi.",
                context: "Task 2"
            }
        ],
        commonMistakes: [
            {
                incorrect: "Because it was raining, so we stayed inside.",
                correct: "Because it was raining, we stayed inside. / It was raining, so we stayed inside.",
                explanation: "'Because' va 'so' bir gapda birgalikda ishlatilmaydi; faqat bittasi qo'yiladi."
            }
        ],
        quizQuestions: [
            {
                question: "The experiment was complex, _______ the research team persevered _______ they believed in the hypothesis.",
                options: ["but / because", "so / but", "and / so", "because / but"],
                correctAnswer: "but / because",
                explanation: "Birinchi bog'lovchi zidlik (but), ikkinchisi sabab (because)."
            }
        ]
    },

    // =========================================================================
    // UPPER LEVELS: A2, B1, B2 & C1 (BAND 7.5 - 9.0 ACADEMY)
    // =========================================================================
    {
        id: "murphy_u21_passive_voice_1",
        level: "A2",
        title: "Unit 21: is done / was done (Passive Voice 1 — Majhul Nisbat)",
        category: "Passive Voice (A2-B1)",
        structure: "Present: S + am/is/are + V3 | Past: S + was/were + V3",
        uzbekMeaning: "Majhul nisbat (Ish-harakat kim tomonidan emas, kim/nima ustida bajarilgani muhim bo'lganda)",
        explanation: "Ish-harakatni bajaruvchi shaxs noma'lum, ahamiyatsiz yoki barchaga ma'lum bo'lganda: 'This house was built in 1965' / 'English is spoken all over the world'.",
        ieltsRelevance: "Writing Task 1 jarayonlar (Process diagrams) va ilmiy Task 2 insholarida xolislikni ta'minlaydi.",
        academicExamples: [
            {
                sentence: "Over 500 million tonnes of plastic are manufactured globally each year.",
                translation: "Har yili dunyo bo'ylab 500 million tonnadan ortiq plastik ishlab chiqariladi.",
                context: "Task 1"
            }
        ],
        commonMistakes: [
            {
                incorrect: "The novel wrote in 1920.",
                correct: "The novel was written in 1920.",
                explanation: "Roman o'zi yozmagan, yozilgan (was written)."
            }
        ],
        quizQuestions: [
            {
                question: "The research findings _______ in a prestigious medical journal last month.",
                options: ["were published", "published", "are published", "have published"],
                correctAnswer: "were published",
                explanation: "O'tgan oyda (last month) majhul nisbat: 'were published'."
            }
        ]
    },
    {
        id: "murphy_u38_first_second_conditionals",
        level: "B1",
        title: "Unit 25: Conditionals 1 & 2 (If I study..., If I had...)",
        category: "Conditionals (B1 Intermediate)",
        structure: "1st: If + Present Simple, S + will + V1 | 2nd: If + Past Simple, S + would + V1",
        uzbekMeaning: "Haqiqiy kelajak sharti (1-shart) va Tasavvuriy noaniq shart (2-shart)",
        explanation: "1-shart mayli kelajakda amalga oshishi mumkin bo'lgan real imkoniyatlar uchun: 'If it rains, I will stay home'. 2-shart mayli esa hozirgi yoki kelajakdagi real bo'lmagan, tasavvuriy vaziyatlar uchun: 'If I had a million dollars, I would travel the world'.",
        ieltsRelevance: "Speaking Part 3 va Writing Task 2 da turli xil ehtimollik va taxminlarni ifodalashda juda muhim.",
        academicExamples: [
            {
                sentence: "If governments subsidize green transport, urban congestion will decline.",
                translation: "Agar hukumatlar yashil transportni subsidiyalasa, shahar tirbandligi kamayadi.",
                context: "Task 2"
            }
        ],
        commonMistakes: [
            {
                incorrect: "If I will win the lottery, I would buy a house.",
                correct: "If I won the lottery, I would buy a house.",
                explanation: "'If' qismida 'will' yoki 'would' ishlatilmaydi; 2-shartda 'If + Past Simple' keladi."
            }
        ],
        quizQuestions: [
            {
                question: "If renewable energy prices continue to fall, more industries _______ clean power.",
                options: ["will adopt", "would adopt", "adopted", "adopt"],
                correctAnswer: "will adopt",
                explanation: "1-shart maylining asosiy qismida 'will + V1' ishlatiladi."
            }
        ]
    },
    {
        id: "murphy_u40_relative_clauses",
        level: "B2",
        title: "Unit 30: Relative Clauses (who, which, that, whose)",
        category: "Complex Clauses (B2 Upper-Intermediate)",
        structure: "Defining: Noun + who/which/that + Clause | Non-defining: Noun, which/who + Clause,",
        uzbekMeaning: "Nisbiy aniqlovchi gaplar (Kimki..., Qaysiki... deb ma'lumot beruvchi bog'lovchilar)",
        explanation: "Odamlar uchun 'who/that', narsa va buyumlar uchun 'which/that', egalik uchun 'whose' qo'llaniladi: 'The woman who lives next door is a doctor'.",
        ieltsRelevance: "Murakkab gaplar tuzishda (Complex Sentence Formation) IELTS Writing GRA mezonida 7.0+ ball kafolati.",
        academicExamples: [
            {
                sentence: "Individuals who maintain active lifestyles exhibit lower rates of chronic disease.",
                translation: "Faol hayot tarzini saqlaydigan insonlar kamroq surunkali kasalliklarga chalinadilar.",
                context: "Task 2"
            }
        ],
        commonMistakes: [
            {
                incorrect: "The report who was published yesterday is important.",
                correct: "The report which was published yesterday is important.",
                explanation: "Buyumlar va hisobotlar uchun 'who' emas, 'which' yoki 'that' ishlatiladi."
            }
        ],
        quizQuestions: [
            {
                question: "Scholars _______ research focuses on environmental sustainability received international awards.",
                options: ["whose", "who", "which", "whom"],
                correctAnswer: "whose",
                explanation: "Egalik ma'nosida (tadqiqoti ekologiyaga qaratilgan olimlar) 'whose' qo'llaniladi."
            }
        ]
    },
    {
        id: "murphy_u33_inversion_emphasis",
        level: "C1",
        title: "Unit 33: Inversion for Emphasis (Not only did..., Seldom have...)",
        category: "Advanced Inversion (C1 Academy)",
        structure: "Negative Adverbial (Not only / Seldom / Rarely / Under no circumstances) + Auxiliary + Subject + Main Verb",
        uzbekMeaning: "Inversiya orqali urg'u berish (Nafaqat..., balki... / Kamdan-kam hollarda...)",
        explanation: "IELTS Band 8.0+ darajasida akademik inshoning ta'sirchanligini oshirish uchun inkor birikmalari gap boshiga chiqariladi va yordamchi fe'l egadan oldinga o'tadi.",
        ieltsRelevance: "IELTS Writing Task 2 argumentatsiyasida Grammatical Range and Accuracy mezonini maksimal qilish.",
        academicExamples: [
            {
                sentence: "Not only does renewable energy curtail greenhouse emissions, but it also creates sustainable employment.",
                translation: "Qayta tiklanadigan energiya nafaqat issiqxona gazlarini qisqartiradi, balki barqaror ish o'rinlarini ham yaratadi.",
                context: "Task 2"
            }
        ],
        commonMistakes: [
            {
                incorrect: "Not only renewable energy reduces pollution, but it also saves costs.",
                correct: "Not only does renewable energy reduce pollution, but it also saves costs.",
                explanation: "'Not only' gap boshida kelganda darhol 'does' yordamchi fe'li egadan oldinga o'tishi shart."
            }
        ],
        quizQuestions: [
            {
                question: "Rarely _______ such rapid transformation in consumer behavior.",
                options: ["have economists observed", "economists have observed", "economists observed", "have observed economists"],
                correctAnswer: "have economists observed",
                explanation: "'Rarely' bilan boshlangan inversiyada 'have' yordamchi fe'li egadan ('economists') oldinga chiqadi."
            }
        ]
    },
    {
        id: "murphy_u34_participle_clauses",
        level: "C1",
        title: "Unit 34: Participle Clauses (Active & Passive Reduction)",
        category: "Complex Sentence Synthesis (C1 Academy)",
        structure: "Active: Having + V3, Subject + Verb | Passive: Driven by / Convinced of + Noun, Subject + Verb",
        uzbekMeaning: "Sifatdoshli gap birikmalari (Qisqartirilgan murakkab ergash gaplar)",
        explanation: "Ikkita gapni bitta ravon akademik gapga birlashtirish: 'Because governments recognized the crisis, they acted' -> 'Recognizing the crisis, governments acted'.",
        ieltsRelevance: "Task 2 insholarining kirish va xulosa qismlarida professional akademik stil yaratadi.",
        academicExamples: [
            {
                sentence: "Having analyzed the statistical discrepancies, economists proposed comprehensive tax reforms.",
                translation: "Statistik tafovutlarni tahlil qilib chiqqach, iqtisodchilar keng qamrovli soliq islohotlarini taklif qildilar.",
                context: "Task 2"
            }
        ],
        commonMistakes: [
            {
                incorrect: "Walking into the room, the test papers were distributed by the teacher.",
                correct: "Walking into the room, the teacher distributed the test papers.",
                explanation: "Sifatdoshli birikmaning egasi asosiy gapning egasi bilan bir xil bo'lishi shart (Dangling modifier xatosi)."
            }
        ],
        quizQuestions: [
            {
                question: "_______ by escalating fossil fuel costs, automotive corporations accelerated electric vehicle production.",
                options: ["Compelled", "Compelling", "Having compelled", "Compel"],
                correctAnswer: "Compelled",
                explanation: "Majhul sifatdosh (Passiv) 'Compelled by...' (majbur qilingan holda) to'g'ri keladi."
            }
        ]
    },
    {
        id: "murphy_u35_cleft_sentences",
        level: "C1",
        title: "Unit 35: Cleft Sentences (What concerns scholars is..., It is X that...)",
        category: "Focus & Cohesion (C1 Academy)",
        structure: "What + Clause + is/was + Noun/Clause | It is/was + Focus + that + Clause",
        uzbekMeaning: "Ajratuvchi ta'kid gaplar (Olimlarni tashvishga solayotgan narsa bu... / Aynan X sababli...)",
        explanation: "Fikrning eng muhim qismini ajratib ko'rsatish uchun gapni ikkiga bo'lish (clefting): 'It is government intervention that will reverse environmental degradation'.",
        ieltsRelevance: "Task 2 ning asosiy argument nuqtasini ta'kidlashda eng kuchli Band 8.5+ sintaktik qurol.",
        academicExamples: [
            {
                sentence: "What distinguishes successful economies is their continuous investment in human capital.",
                translation: "Muvaffaqiyatli iqtisodiyotlarni ajratib turadigan jihat bu ularning inson kapitaliga doimiy investitsiya kiritishidir.",
                context: "Task 2"
            }
        ],
        commonMistakes: [
            {
                incorrect: "What we need it is strict regulation.",
                correct: "What we need is strict regulation.",
                explanation: "'What we need' iborasidan keyin ortiqcha 'it' olmoshi qo'yilmaydi."
            }
        ],
        quizQuestions: [
            {
                question: "It is through comprehensive early education _______ long-term social mobility is achieved.",
                options: ["that", "which", "what", "where"],
                correctAnswer: "that",
                explanation: "'It is [Focus] that [Clause]' cleft strukturasida bog'lovchi 'that' bo'ladi."
            }
        ]
    },
    {
        id: "murphy_u36_academic_nominalisation",
        level: "C1",
        title: "Unit 36: Academic Nominalisation (Transforming Verbs into Nouns)",
        category: "Academic Register (C1 Academy)",
        structure: "Verb/Adjective Clause -> Formal Noun Phrase",
        uzbekMeaning: "Akademik nominalizatsiya (Oddiy fe'llarni yuqori ilmiy ot birikmalariga aylantirish)",
        explanation: "Akademik ingliz tilining eng muhim belgisi — otlashuv (Nominalisation). Oddiy so'zlashuv gaplarini rasmiy ilmiy ot birikmalariga aylantirish: 'The rapid contamination of water resources'.",
        ieltsRelevance: "IELTS Writing Task 2 da Lexical Resource va GRA ballarini Band 8.0+ darajaga chiqarishning eng asosiy usuli.",
        academicExamples: [
            {
                sentence: "The rapid proliferation of digital infrastructure has fundamentally transformed commerce.",
                translation: "Raqamli infratuzilmaning tez kengayishi savdo-sotiqni tubdan o'zgartirdi.",
                context: "Task 2"
            }
        ],
        commonMistakes: [
            {
                incorrect: "Because people are consuming more energy, climate changes.",
                correct: "The escalating consumption of energy directly exacerbates climate change.",
                explanation: "Oddiy sabab gap o'rniga nominalizatsiya qilingan ega ('The escalating consumption...') qo'llash tavsiya etiladi."
            }
        ],
        quizQuestions: [
            {
                question: "The _______ of digital healthcare platforms has streamlined patient consultations.",
                options: ["introduction", "introduce", "introducing", "introductory"],
                correctAnswer: "introduction",
                explanation: "'The [Noun] of...' strukturasida rasmiy ot shakli 'introduction' talab qilinadi."
            }
        ]
    },
    {
        id: "murphy_u37_inverted_conditionals",
        level: "C1",
        title: "Unit 37: Inverted Conditionals (Had we acted..., Were governments to...)",
        category: "Advanced Conditionals (C1 Academy)",
        structure: "Had + S + V3, S + would have + V3 | Were + S + to + V1, S + would + V1",
        uzbekMeaning: "Inversiyalashgan shart gaplar ('If' siz yuqori akademik shart tuzilmalari)",
        explanation: "IELTS Band 8.0+ Task 2 essaylarida 'If' so'zini tushirib qoldirib, inversiya orqali fikr ifodalash Grammatical Range and Accuracy (GRA) mezonini maksimal darajaga ko'taradi.",
        ieltsRelevance: "IELTS Writing Task 2 va Speaking Part 3 da gipotetik va o'tmishdagi yechimlarni ifodalashda qo'llaniladi.",
        academicExamples: [
            {
                sentence: "Had policymakers instituted early carbon taxation, global warming trajectories would have been significantly curtailed.",
                translation: "Agar qonun chiqaruvchilar uglerod solig'ini erta joriy qilganlarida, global isish sur'atlari sezilarli darajada qisqargan bo'lardi.",
                context: "Task 2"
            }
        ],
        commonMistakes: [
            {
                incorrect: "If had we invested more in education, poverty would decrease.",
                correct: "Had we invested more in education, poverty would have decreased.",
                explanation: "Inversiyada 'if' ishlatilmaydi, to'g'ridan-to'g'ri 'Had + Subject + V3' keladi."
            }
        ],
        quizQuestions: [
            {
                question: "_______ the government allocate greater funding to green infrastructure, urban air quality would improve drastically.",
                options: ["Were", "Had", "Should", "If were"],
                correctAnswer: "Were",
                explanation: "2-shart maylining inversiyasida 'Were + Subject + to + Verb' qo'llaniladi."
            }
        ]
    },
    {
        id: "murphy_u38_impersonal_reporting_passives",
        level: "C1",
        title: "Unit 38: Impersonal Reporting Passives (It is contended that..., X is estimated to...)",
        category: "Academic Hedging (C1 Academy)",
        structure: "It is + V3 (argued / maintained / contended / estimated) + that + Clause | Subject + is/are + V3 + to + V1",
        uzbekMeaning: "Xolis ilmiy fikr bildirish (Olimlar tomonidan ta'kidlanishicha..., deb hisoblanadi)",
        explanation: "Akademik inshoda shaxsiy fikrni subyektiv ('I think') emas, balki xolis va ishonchli akademik uslubda ifodalash uchun qo'llaniladi.",
        ieltsRelevance: "IELTS Writing Task 2 muqaddimasida va argumentlarni xolis keltirishda Band 8.0+ darajali vosita.",
        academicExamples: [
            {
                sentence: "It is widely contended that automation will displace low-skilled manual laborers over the coming decade.",
                translation: "Kelgusi o'n yil ichida avtomatlashtirish past malakali ishchilarni siqib chiqarishi keng ta'kidlanadi.",
                context: "Task 2"
            }
        ],
        commonMistakes: [
            {
                incorrect: "I think people believe that money brings happiness.",
                correct: "It is widely believed that financial security contributes significantly to overall well-being.",
                explanation: "Akademik inshoda 'I think' o'rniga 'It is widely believed that...' xolis strukturasi ma'qul."
            }
        ],
        quizQuestions: [
            {
                question: "It is widely _______ that early childhood bilingualism strengthens neuroplasticity.",
                options: ["acknowledged", "acknowledge", "acknowledging", "acknowledgement"],
                correctAnswer: "acknowledged",
                explanation: "'It is + V3 (past participle) + that' passiv ifodasida 'acknowledged' to'g'ri keladi."
            }
        ]
    },
    {
        id: "murphy_u39_advanced_concession",
        level: "C1",
        title: "Unit 39: Advanced Concession & Contrast (Notwithstanding..., Albeit...)",
        category: "Complex Argumentation (C1 Academy)",
        structure: "Notwithstanding + Noun Phrase, Clause | Adj + though/as + Subject + is, Clause | Albeit + Adjective",
        uzbekMeaning: "Yuqori darajadagi qarshilik va yon berish birikmalari (Garchi... bo'lsa-da, Shunga qaramay)",
        explanation: "Oddiy 'Although/But' o'rniga 'Notwithstanding', 'Albeit', 'Adjective + though it may be' kabi tuzilmalarni qo'llash insho ravonligini Band 8.5 darajaga olib chiqadi.",
        ieltsRelevance: "IELTS Task 2 da ikki xil qarama-qarshi nuqtai nazarni muhokama qilishda (Discuss both views) hal qiluvchi ahamiyatga ega.",
        academicExamples: [
            {
                sentence: "Notwithstanding the initial capital expenditure, space exploration yields invaluable meteorological advancements.",
                translation: "Dastlabki yirik xarajatlarga qaramay, fazoni o'rganish meteorologiyada bebaho yutuqlarni taqdim etadi.",
                context: "Task 2"
            }
        ],
        commonMistakes: [
            {
                incorrect: "Although despite the high costs, the plan succeeded.",
                correct: "Notwithstanding the high costs, the plan succeeded.",
                explanation: "'Although' va 'despite' birgalikda ishlatilmaydi; uning o'rniga bitta 'Notwithstanding + noun' yetarli."
            }
        ],
        quizQuestions: [
            {
                question: "_______ the substantial economic benefits of tourism, environmental degradation remains a pressing concern.",
                options: ["Notwithstanding", "Although", "Whereas", "While"],
                correctAnswer: "Notwithstanding",
                explanation: "Ot birikmasi ('the substantial economic benefits') oldidan 'Notwithstanding' keladi."
            }
        ]
    },
    {
        id: "murphy_u40_subjunctive_mood",
        level: "C1",
        title: "Unit 40: Subjunctive Mood & Formal Mandates (It is imperative that... be done)",
        category: "Formal Proposals (C1 Academy)",
        structure: "It is essential / imperative / crucial / vital + that + Subject + [Base Verb / be + V3]",
        uzbekMeaning: "Subyuktiv mayl (Rasmiy yechimlar: ...qilinishi o'ta muhim/shart)",
        explanation: "Davlat va jamiyat yechimlarini taklif qilishda grammatik fe'l asosi (base form) o'zgarmaydi: 'It is imperative that the government implement new legislation'.",
        ieltsRelevance: "Task 2 insholarining Problem-Solution yoki Recommendation qismlarida eng nufuzli sintaksis hisoblanadi.",
        academicExamples: [
            {
                sentence: "It is imperative that international organizations mandate stricter environmental auditing protocols.",
                translation: "Xalqaro tashkilotlar qat'iyroq ekologik audit protokollarini majburiy qilib qo'yishi shart.",
                context: "Task 2"
            }
        ],
        commonMistakes: [
            {
                incorrect: "It is vital that every citizen pays taxes.",
                correct: "It is vital that every citizen pay taxes.",
                explanation: "Subyuktiv maylda 'that' dan keyingi fe'l 3-shaxsda ham 's' qo'shimchasini olmaydi (Base form: pay)."
            }
        ],
        quizQuestions: [
            {
                question: "It is essential that every applicant _______ the prerequisite qualifications before enrolling.",
                options: ["satisfy", "satisfies", "satisfied", "is satisfying"],
                correctAnswer: "satisfy",
                explanation: "'It is essential that...' subyuktiv formulasida fe'l asosi (satisfy) hech qanday qo'shimchasiz keladi."
            }
        ]
    },
    {
        id: "ielts_a2_01_past_continuous_vs_simple",
        level: "A2",
        title: "Unit 41: Past Continuous vs Past Simple (O'tmishdagi Hikoyalar & Kesishuvlar)",
        category: "Past Tenses & Narrative (A2)",
        structure: "While / As + S + was/were + V-ing, S + V2 (Past Simple) | S + was/were + V-ing when + S + V2",
        uzbekMeaning: "O'tmishda davom etayotgan harakat fonida boshqa qisqa harakatning to'satdan sodir bo'lishi",
        explanation: "Past Continuous o'tmishda ma'lum bir vaqtda davom etayotgan uzoq fon harakatini (I was studying in the library), Past Simple esa o'sha paytda sodir bo'lgan qisqa harakatni (a friend called me) bildiradi. 'While' odatda davomli harakat oldidan, 'when' esa qisqa harakat oldidan keladi.",
        ieltsRelevance: "Speaking Part 2 hikoyalarida ('Describe an interesting journey or experience') o'tmish voqealariga jonli fon yaratishda asosiy vosita.",
        academicExamples: [
            {
                sentence: "While I was preparing for my high school graduation, I decided to pursue computer science.",
                translation: "Maktab bitiruv imtihonlariga tayyorlanayotgan vaqtimda men kompyuter fanlari bo'yicha o'qishga qaror qildim.",
                context: "Speaking"
            },
            {
                sentence: "Between 2010 and 2015, while urban populations were increasing rapidly, rural migration declined.",
                translation: "2010 va 2015 yillar oralig'ida shahar aholisi tez sur'atda o'sayotgan bir paytda, qishloq migratsiyasi kamaydi.",
                context: "Task 1"
            },
            {
                sentence: "When the government introduced the new environmental policy, emissions were already reaching critical levels.",
                translation: "Hukumat yangi ekologik siyosatni joriy qilganida, zaharli chiqindilar allaqachon xavfli darajaga yetayotgan edi.",
                context: "Task 2"
            }
        ],
        commonMistakes: [
            {
                incorrect: "While I walked in the park, it was starting to rain.",
                correct: "While I was walking in the park, it started to rain.",
                explanation: "Uzoq fon harakati 'was walking' (Continuous), qisqa boshlanish esa 'started' (Simple) bo'ladi."
            },
            {
                incorrect: "When I was young, I was playing football every day.",
                correct: "When I was young, I played football every day.",
                explanation: "O'tmishdagi doimiy takroriy odatlar uchun Past Continuous emas, Past Simple ishlatiladi."
            }
        ],
        quizQuestions: [
            {
                question: "While international delegates _______ the agreement, a major protest broke out outside.",
                options: ["were discussing", "discussed", "are discussing", "have discussed"],
                correctAnswer: "were discussing",
                explanation: "'While' bilan o'tmishda davom etayotgan ko'plik fon harakati (delegates were discussing) ishlatiladi."
            },
            {
                question: "The power supply suddenly failed when researchers _______ crucial statistical calculations.",
                options: ["were conducting", "conducted", "have conducted", "are conducting"],
                correctAnswer: "were conducting",
                explanation: "'When' qisqa harakatni kiritganda, ikkinchi qismda davom etayotgan fon jarayoni (were conducting) bo'ladi."
            }
        ]
    },
    {
        id: "ielts_a2_02_present_perfect_experience",
        level: "A2",
        title: "Unit 42: Present Perfect (just, already, yet, ever, never)",
        category: "Present Perfect (A2)",
        structure: "S + have/has + (just/already) + V3 | S + have/has not + V3 + yet | Have/Has + S + ever + V3?",
        uzbekMeaning: "Natijasi hozirgi paytga bog'liq bo'lgan yoki yaqinda sodir bo'lgan tajribalar",
        explanation: "Present Perfect harakatning aniq qachon sodir bo'lganini emas, balki uning natijasi hozirgi paytda mavjudligini yoki kishining hayotiy tajribasini (I have visited Paris twice) ifodalaydi. 'Just' \u2014 hozirgina, 'already' \u2014 allaqachon, 'yet' \u2014 hali (inkor va so'roqda), 'ever' \u2014 umringizda (so'roqda), 'never' \u2014 hech qachon ma'nosini beradi.",
        ieltsRelevance: "Speaking Part 1 va Part 3 da o'z hayotiy tajribalaringiz, o'qigan kitoblaringiz va ko'rgan mamlakatlaringiz haqida tabiiy gapirish uchun muhim.",
        academicExamples: [
            {
                sentence: "Modern medical research has already eradicated several infectious diseases.",
                translation: "Zamonaviy tibbiy tadqiqotlar bir nechta yuqumli kasalliklarni allaqachon yo'q qildi.",
                context: "Task 2"
            },
            {
                sentence: "Have you ever considered studying at a foreign university?",
                translation: "Xorijiy universitetda tahsil olish haqida hech o'ylab ko'rganmisiz?",
                context: "Speaking"
            },
            {
                sentence: "The municipal council has not implemented the recycling scheme yet.",
                translation: "Shahar kengashi qayta ishlash dasturini hali joriy qilmadi.",
                context: "Task 2"
            }
        ],
        commonMistakes: [
            {
                incorrect: "I have visited London two years ago.",
                correct: "I visited London two years ago. / I have visited London.",
                explanation: "'Two years ago', 'yesterday', 'in 2020' kabi aniq o'tgan vaqt ko'rsatkichlari bilan Present Perfect ishlatilmaydi, Past Simple kerak."
            },
            {
                incorrect: "She already finished her dissertation.",
                correct: "She has already finished her dissertation.",
                explanation: "Britaniya akademik ingliz tilida 'already' bilan Present Perfect (has finished) ishlatiladi."
            }
        ],
        quizQuestions: [
            {
                question: "Technological innovation _______ the way people communicate globally.",
                options: ["has fundamentally changed", "fundamentally changed", "have fundamentally changed", "is fundamentally changing"],
                correctAnswer: "has fundamentally changed",
                explanation: "'Innovation' birlik ot, hozirgi natijani ifodalash uchun 'has fundamentally changed' to'g'ri."
            },
            {
                question: "The local authorities have not completed the subway extension _______.",
                options: ["yet", "already", "just", "ever"],
                correctAnswer: "yet",
                explanation: "Inkor gaplarning oxirida 'hali' ma'nosida faqat 'yet' ishlatiladi."
            }
        ]
    },
    {
        id: "ielts_a2_03_future_forms",
        level: "A2",
        title: "Unit 43: Future Intentions & Predictions (will vs be going to vs V-ing)",
        category: "Future Expressions (A2)",
        structure: "will + V (spontaneous/prediction) | be going to + V (prior plan/evidence) | am/is/are + V-ing (arrangement)",
        uzbekMeaning: "Kelasi zamon shakllari: Spontan qaror, aniq reja va qat'iy kelishuvlar",
        explanation: "Kelajakni ifodalashda uchta asosiy farq mavjud: 1) 'will' \u2014 suhbat paytida qabul qilingan qaror (I'll help you) yoki shaxsiy fikr/bashorat (I think it will rain); 2) 'be going to' \u2014 oldindan o'ylangan niyat (I am going to take IELTS) yoki ko'z oldingizdagi dalilga asoslangan bashorat (Look at the clouds, it's going to rain); 3) Present Continuous \u2014 vaqti va joyi aniq kelishilgan tadbirlar (I am meeting my professor at 3 PM tomorrow).",
        ieltsRelevance: "Speaking Part 1 da o'z kelajak maqsadlaringizni tushuntirishda va Task 2 da kelajak oqibatlarini modellashtirishda xatosiz gapirishga yordam beradi.",
        academicExamples: [
            {
                sentence: "If greenhouse emissions persist, global temperatures are going to rise significantly.",
                translation: "Agar issiqxona gazlari saqlanib qolsa, global harorat sezilarli darajada ko'tariladi.",
                context: "Task 2"
            },
            {
                sentence: "After completing my undergraduate degree, I am going to apply for a Master's scholarship.",
                translation: "Bakalavr diplomini olgach, men magistratura stipendiyasiga ariza topshirmoqchiman.",
                context: "Speaking"
            },
            {
                sentence: "Experts anticipate that automation will transform the manufacturing sector.",
                translation: "Mutaxassislar avtomatlashtirish ishlab chiqarish sohasini tubdan o'zgartiradi deb hisoblashadi.",
                context: "Task 2"
            }
        ],
        commonMistakes: [
            {
                incorrect: "Tomorrow I will meet the university dean at 10 AM.",
                correct: "Tomorrow I am meeting the university dean at 10 AM.",
                explanation: "Aniq vaqt va kishi bilan kelishilgan rasmiy uchrashuvlar uchun Present Continuous ma'qul."
            },
            {
                incorrect: "I think artificial intelligence is going to replace teachers.",
                correct: "I think artificial intelligence will replace teachers.",
                explanation: "'I think', 'probably', 'I believe' kabi fikriy taxminlar bilan 'will' fe'li ishlatiladi."
            }
        ],
        quizQuestions: [
            {
                question: "Look at the budget deficit figures. The project _______ running out of capital.",
                options: ["is going to end up", "will end up", "ends up", "is ending up"],
                correctAnswer: "is going to end up",
                explanation: "Ko'z o'ngidagi aniq faktik dalil (Look at...) asosidagi bashorat uchun 'is going to' to'g'ri."
            },
            {
                question: "I haven't booked my flights yet, but I think I _______ next Thursday.",
                options: ["will travel", "am travelling", "travel", "was travelling"],
                correctAnswer: "will travel",
                explanation: "'I think' va aniq rejasiz taxminiy qaror uchun 'will travel' to'g'ri."
            }
        ]
    },
    {
        id: "ielts_a2_04_modals_ability_advice",
        level: "A2",
        title: "Unit 44: Modals of Ability & Advice (can, could, should, may)",
        category: "Modal Verbs (A2)",
        structure: "S + can / could / should / may + Base Verb (Inkor: cannot / couldn't / shouldn't / may not)",
        uzbekMeaning: "Qobiliyat, ruxsat, ehtimollik va foydali maslahat beruvchi modal fe'llar",
        explanation: "Modal fe'llardan keyin 'to' qo'yilmaydi (can do, NOT can to do) va 3-shaxsda -s qo'shilmaydi. 'Can' \u2014 hozirgi jismoniy yoki aqliy qobiliyat (I can speak three languages); 'could' \u2014 o'tmishdagi umumiy qobiliyat (I could read at age four); 'should' \u2014 maslahat va to'g'ri yo'l (Students should review regularly); 'may' \u2014 ehtimollik yoki rasmiy ruxsat (This may lead to complications).",
        ieltsRelevance: "Writing Task 2 insholarida hukumat va jismoniy shaxslarga tavsiyalar berishda ('Governments should subsidize solar energy') doimiy ishlatiladi.",
        academicExamples: [
            {
                sentence: "Governments should allocate more budgetary resources toward healthcare infrastructure.",
                translation: "Hukumatlar sog'liqni saqlash infratuzilmasiga ko'proq byudjet mablag'larini ajratishlari lozim.",
                context: "Task 2"
            },
            {
                sentence: "Excessive reliance on private vehicles can exacerbate urban traffic congestion.",
                translation: "Shaxsiy transport vositalariga haddan tashqari tayanish shahar tirbandligini kuchaytirishi mumkin.",
                context: "Task 2"
            },
            {
                sentence: "In my previous job, I could interact with clients from diverse cultural backgrounds.",
                translation: "Oldingi ishimda men turli xil madaniyatlarga mansub mijozlar bilan muloqot qila olar edim.",
                context: "Speaking"
            }
        ],
        commonMistakes: [
            {
                incorrect: "The administration should to improve public transport.",
                correct: "The administration should improve public transport.",
                explanation: "Modal fe'llardan (should, can, could, must) keyin 'to' zarrachasi qo'yilmaydi."
            },
            {
                incorrect: "He cans speak English fluently.",
                correct: "He can speak English fluently.",
                explanation: "Modal fe'llarga 3-shaxsda 's' qo'shilmaydi."
            }
        ],
        quizQuestions: [
            {
                question: "Educational institutions _______ provide psychological counselling for stressed students.",
                options: ["should", "should to", "ought", "must to"],
                correctAnswer: "should",
                explanation: "Maslahat berishda 'should + Base verb' (should provide) to'g'ri formuladir."
            },
            {
                question: "Before the digital revolution, library users _______ only access physical archives.",
                options: ["could", "can", "may", "should"],
                correctAnswer: "could",
                explanation: "O'tmishdagi qobiliyat va imkoniyat uchun 'could' ishlatiladi."
            }
        ]
    },
    {
        id: "ielts_a2_05_comparatives_superlatives",
        level: "A2",
        title: "Unit 45: Comparatives & Superlatives in Data Comparison",
        category: "Adjectives & Adverbs (A2)",
        structure: "Qiyosiy: adj + -er than / more + adj + than | Orttirma: the + adj + -est / the most + adj",
        uzbekMeaning: "Sifat va ravishlarning qiyosiy va orttirma darajalari (Ko'rsatkichlarni taqqoslash)",
        explanation: "Bir bo'g'inli sifatlarga -er / -est qo'shiladi (higher, the highest; faster, the fastest). Ikki yoki undan ortiq bo'g'inlilarga more / the most qo'shiladi (more significant, the most significant). Noto'g'ri sifatlar: good -> better -> best; bad -> worse -> worst; far -> further -> furthest. Kuchaytirgichlar: much higher, far more expensive, slightly lower.",
        ieltsRelevance: "Writing Task 1 grafiklari va diagrammalarining 80% mazmuni aynan qiyosiy taqqoslashlar ustiga quriladi.",
        academicExamples: [
            {
                sentence: "Renewable energy production was considerably higher in 2020 than in the previous decade.",
                translation: "2020 yilda qayta tiklanadigan energiya ishlab chiqarish oldingi o'n yillikka qaraganda ancha yuqori bo'ldi.",
                context: "Task 1"
            },
            {
                sentence: "The United Kingdom was the most popular destination among international scholars.",
                translation: "Birlashgan Qirollik xalqaro talabalar orasida eng ommabop yo'nalish bo'ldi.",
                context: "Task 1"
            },
            {
                sentence: "Living in rural areas is generally far less stressful than residing in a metropolis.",
                translation: "Qishloqda yashash odatda megapolisda yashashdan ancha kamroq stresslidir.",
                context: "Task 2"
            }
        ],
        commonMistakes: [
            {
                incorrect: "The expenditure was more higher in Canada.",
                correct: "The expenditure was much higher in Canada.",
                explanation: "Qiyosiy darajadagi '-er' qo'shimchasi bilan birga 'more' ishlatilmaydi; uning o'rniga 'much' yoki 'far' qo'yiladi."
            },
            {
                incorrect: "This method is the most best solution.",
                correct: "This method is the best solution.",
                explanation: "'Best' o'zi orttirma daraja bo'lgani sababli 'most' so'ziga ehtiyoj yo'q."
            }
        ],
        quizQuestions: [
            {
                question: "The unemployment rate in region A was _______ than that recorded in region B.",
                options: ["substantially lower", "more lower", "lower much", "the lowest"],
                correctAnswer: "substantially lower",
                explanation: "Qiyosiy daraja (lower) oldidan kuchaytiruvchi ravish 'substantially lower' to'g'ri keladi."
            },
            {
                question: "Car manufacturing was _______ industry sector in the region during 2022.",
                options: ["the most profitable", "more profitable", "most profitable", "profitablest"],
                correctAnswer: "the most profitable",
                explanation: "Orttirma darajada artikl bilan birga 'the most profitable' qo'llanadi."
            }
        ]
    },
    {
        id: "ielts_a2_06_quantifiers_countability",
        level: "A2",
        title: "Unit 46: Countable vs Uncountable Nouns & Quantifiers",
        category: "Nouns & Quantifiers (A2)",
        structure: "Sanaladigan: many / few / a few / a number of + Plural | Sanalmaydigan: much / little / a little / an amount of",
        uzbekMeaning: "Sanaladigan va sanalmaydigan otlar hamda ularga mos miqdor so'zlari",
        explanation: "Sanaladigan otlar (students, cars, problems) ko'plikda -s oladi va 'many/few' bilan keladi. Sanalmaydigan otlar (information, advice, research, pollution, traffic) ko'plikda -s OLMAYDI va 'much/little' bilan ishlatiladi. 'Few' va 'little' deyarli yo'q (salbiy), 'a few' va 'a little' esa ozgina bo'lsa ham yetarli (ijobiy) ma'noni beradi.",
        ieltsRelevance: "Writing Task 1 va 2 da eng ko'p ball yo'qotiladigan 'informations', 'advices', 'researches' kabi dag'al xatolarning oldini oladi.",
        academicExamples: [
            {
                sentence: "The survey provided valuable information regarding consumer spending habits.",
                translation: "So'rovnoma iste'molchilarning xarajat odatlari bo'yicha qimmatli ma'lumotlarni taqdim etdi.",
                context: "Task 1"
            },
            {
                sentence: "A substantial amount of research has examined the impact of screen time on youth.",
                translation: "Ekran qarshisida o'tkazilgan vaqtning yoshlarga ta'sirini ko'plab tadqiqotlar o'rgangan.",
                context: "Task 2"
            },
            {
                sentence: "Few individuals possess the patience required for lifelong academic inquiry.",
                translation: "Umrbod ilmiy izlanish uchun zarur bo'lgan sabr-toqatga kamdan-kam insonlar ega.",
                context: "Task 2"
            }
        ],
        commonMistakes: [
            {
                incorrect: "The professor gave me several useful advices and informations.",
                correct: "The professor gave me several pieces of useful advice and information.",
                explanation: "'Advice' va 'information' sanalmaydigan otlar bo'lib, ularga hech qachon 's' qo'shilmaydi."
            },
            {
                incorrect: "The chart illustrates the amount of students who graduated.",
                correct: "The chart illustrates the number of students who graduated.",
                explanation: "Talabalar sanaladigan ot bo'lgani sababli 'amount of' emas, 'number of students' ishlatiladi."
            }
        ],
        quizQuestions: [
            {
                question: "A substantial _______ of electricity was generated via wind turbines.",
                options: ["amount", "number", "few", "many"],
                correctAnswer: "amount",
                explanation: "'Electricity' sanalmaydigan ot bo'lgani uchun 'amount' to'g'ri tanlovdir."
            },
            {
                question: "Recent scientific _______ indicates that sleep deprivation impairs cognitive memory.",
                options: ["research", "researches", "a research", "some researches"],
                correctAnswer: "research",
                explanation: "'Research' sanalmaydigan ot bo'lib, ko'plik qo'shimchasini olmaydi."
            }
        ]
    },
    {
        id: "ielts_a2_07_defining_relative_clauses",
        level: "A2",
        title: "Unit 47: Defining Relative Clauses (who, which, that, where)",
        category: "Relative Clauses (A2)",
        structure: "Person + who/that + Verb | Thing + which/that + Verb | Place + where + Subject + Verb",
        uzbekMeaning: "Aniqlovchi ergash gaplar (Kimki, qaysiki, qayerdaki \u2014 otni aniqlashtirish)",
        explanation: "Defining relative clause qaysi shaxs, narsa yoki joy haqida gap ketayotganini aniqlab beradi va uni gapdan olib tashlasak, gapning asosiy ma'nosi yo'qoladi. Insonlar uchun 'who' yoki 'that', narsalar uchun 'which' yoki 'that', joylar uchun 'where', egalik uchun 'whose' ishlatiladi. Ushbu ergash gaplar vergul bilan AJRATILMAYDI.",
        ieltsRelevance: "Oddiy sodda gaplarni bir-biriga bog'lab, IELTS mezonidagi 'Complex sentence' talabini bajarishning eng qulay yo'li.",
        academicExamples: [
            {
                sentence: "Students who cultivate consistent study routines achieve higher exam scores.",
                translation: "Doimiy o'qish tartibiga amal qiladigan talabalar yuqoriroq imtihon ballariga erishadilar.",
                context: "Task 2"
            },
            {
                sentence: "Countries that heavily invest in solar infrastructure reduce long-term carbon footprints.",
                translation: "Quyosh infratuzilmasiga katta sarmoya kirituvchi davlatlar uzoq muddatli uglerod izini kamaytiradi.",
                context: "Task 2"
            },
            {
                sentence: "The library where I conduct my research offers comprehensive academic databases.",
                translation: "Men tadqiqot olib boradigan kutubxona keng qamrovli akademik ma'lumotlar bazasini taqdim etadi.",
                context: "Speaking"
            }
        ],
        commonMistakes: [
            {
                incorrect: "The people which work in healthcare are very dedicated.",
                correct: "The people who work in healthcare are very dedicated.",
                explanation: "Insonlar uchun 'which' emas, 'who' yoki 'that' ishlatiladi."
            },
            {
                incorrect: "The city where I visited last summer was beautiful.",
                correct: "The city that / which I visited last summer was beautiful.",
                explanation: "'Visited' fe'lining to'ldiruvchisi shahar bo'lgani sababli bu yerda 'where' emas, 'which/that' qo'llanadi."
            }
        ],
        quizQuestions: [
            {
                question: "Individuals _______ regularly engage in volunteering exhibit greater empathy.",
                options: ["who", "which", "whose", "where"],
                correctAnswer: "who",
                explanation: "'Individuals' odamlarni bildirgani uchun 'who' nisbiy olmoshi to'g'ri."
            },
            {
                question: "The university laboratory _______ the experiments were conducted is fully certified.",
                options: ["where", "which", "who", "whom"],
                correctAnswer: "where",
                explanation: "Tajribalar o'tkazilgan 'joyni' ko'rsatgani sababli 'where' ishlatiladi."
            }
        ]
    },
    {
        id: "ielts_a2_08_first_conditional",
        level: "A2",
        title: "Unit 48: First Conditional & Future Reality (If + present, will + V)",
        category: "Conditionals (A2)",
        structure: "If + Present Simple, Subject + will / can / may + Base Verb (Yoki aksincha: S + will + V if + Present Simple)",
        uzbekMeaning: "Birinchi tur shart mayli (Kelajakdagi real shart va uning mantiqiy oqibati)",
        explanation: "First Conditional kelajakda amalga oshishi mumkin bo'lgan real shart-sharoitlar va ularning oqibatlarini ifodalaydi. MUHIM QOIDA: 'If' bo'lgan qismda hech qachon 'will' ISHLATILMAYDI (If it rains, NOT If it will rain). Asosiy qismda esa 'will', 'can', 'may' yoki 'must' ishlatiladi.",
        ieltsRelevance: "IELTS Writing Task 2 insholarida chora-tadbirlar samaradorligini tushuntirishda ('If schools mandate physical education, obesity will decline') asosiy vosita.",
        academicExamples: [
            {
                sentence: "If governments subsidize public transit, commuters will rely less on private automobiles.",
                translation: "Agar hukumatlar jamoat transportini subsidiyalashtirsa, yo'lovchilar shaxsiy avtomobillarga kamroq tayanadi.",
                context: "Task 2"
            },
            {
                sentence: "If a student practices speaking daily, their phonetic fluency will improve markedly.",
                translation: "Agar talaba har kuni gapirishni mashq qilsa, uning fonetik ravonligi sezilarli darajada yaxshilanadi.",
                context: "Speaking"
            },
            {
                sentence: "Municipal pollution levels will escalate if strict vehicle emission limits are not enforced.",
                translation: "Agar avtomobil chiqindilariga qat'iy cheklovlar qo'yilmasa, shahar ifloslanishi darajasi oshadi.",
                context: "Task 2"
            }
        ],
        commonMistakes: [
            {
                incorrect: "If it will rain tomorrow, the outdoor festival will be postponed.",
                correct: "If it rains tomorrow, the outdoor festival will be postponed.",
                explanation: "'If' ergash gapida kelasi zamon ma'nosi bo'lsa ham faqat Present Simple qo'yiladi."
            },
            {
                incorrect: "If the price of tuition increases, fewer people can to afford higher education.",
                correct: "If the price of tuition increases, fewer people can afford higher education.",
                explanation: "'Can' modalidan keyin 'to' qo'yilmaydi."
            }
        ],
        quizQuestions: [
            {
                question: "If authorities _______ cycling infrastructure, pedestrian safety will improve.",
                options: ["expand", "will expand", "expanded", "are expanding"],
                correctAnswer: "expand",
                explanation: "'If' bilan boshlangan shart qismida Present Simple (expand) bo'lishi shart."
            },
            {
                question: "Global sea levels _______ dramatically if Arctic ice continues to melt at current rates.",
                options: ["will rise", "rise", "rose", "would rise"],
                correctAnswer: "will rise",
                explanation: "Real shartning kelajakdagi natijasi uchun asosiy gapda 'will rise' ishlatiladi."
            }
        ]
    },
    {
        id: "ielts_b1_01_second_conditional",
        level: "B1",
        title: "Unit 49: Second Conditional (Hypothetical Situations)",
        category: "Conditionals (B1)",
        structure: "If + Past Simple (were for all subjects), Subject + would / could / might + Base Verb",
        uzbekMeaning: "Ikkinchi tur shart mayli (Hozirgi va kelajakdagi noreal, tasavvuriy farazlar)",
        explanation: "Second Conditional hozirgi paytda imkonsiz yoki haqiqatga zid bo'lgan tasavvuriy farazlarni (If I had more time, I would study medicine) ifodalaydi. O'tmish zamon shakli (Past Simple) ishlatilsa-da, ma'nosi HOZIRGI yoki KELASI zamonga tegishlidir. Rasmiy va akademik uslubda 'was' o'rniga barcha shaxslar uchun 'were' ishlatiladi (If I were you, If the government were to act).",
        ieltsRelevance: "Speaking Part 3 da faraziy savollarga javob berishda va Task 2 da alternativ siyosat oqibatlarini tahlil qilishda kerak.",
        academicExamples: [
            {
                sentence: "If renewable technology were cheaper, developing nations would adopt it far more swiftly.",
                translation: "Agar qayta tiklanuvchi texnologiyalar arzonroq bo'lganida, rivojlanayotgan davlatlar uni ancha tezroq qabul qilgan bo'lar edi.",
                context: "Task 2"
            },
            {
                sentence: "If I were granted the opportunity to study abroad, I would specialize in artificial intelligence.",
                translation: "Agar menga chet elda o'qish imkoniyati berilsa, men sun'iy intellekt bo'yicha ixtisoslashar edim.",
                context: "Speaking"
            },
            {
                sentence: "Metropolitan traffic congestion would diminish significantly if public transit were free.",
                translation: "Agar jamoat transporti bepul bo'lganida, megapolislardagi tirbandlik sezilarli darajada kamaygan bo'lardi.",
                context: "Task 2"
            }
        ],
        commonMistakes: [
            {
                incorrect: "If I would have more money, I would travel worldwide.",
                correct: "If I had more money, I would travel worldwide.",
                explanation: "'If' qismida 'would' ishlatilmaydi; uning o'rniga Past Simple (had) qo'yiladi."
            },
            {
                incorrect: "If the government was investing in schools, literacy would rise.",
                correct: "If the government were investing in schools, literacy would rise.",
                explanation: "Akademik shart gaplarda uchinchi shaxs birlik uchun 'were' qo'llash standart hisoblanadi."
            }
        ],
        quizQuestions: [
            {
                question: "If educational software _______ universally accessible, educational disparities would shrink.",
                options: ["were", "is", "will be", "would be"],
                correctAnswer: "were",
                explanation: "Second Conditional qoidasiga ko'ra 'If' qismida 'were' (Past subjunctive) bo'ladi."
            },
            {
                question: "City residents _______ far healthier if municipal parks were integrated into urban planning.",
                options: ["would be", "will be", "are", "have been"],
                correctAnswer: "would be",
                explanation: "Ikkinchi shartning asosiy natija qismida 'would + base verb' (would be) bo'ladi."
            }
        ]
    },
    {
        id: "ielts_b1_02_third_conditional",
        level: "B1",
        title: "Unit 50: Third Conditional (Past Regrets & Unreal Past)",
        category: "Conditionals (B1)",
        structure: "If + Past Perfect (had + V3), Subject + would / could / might have + V3",
        uzbekMeaning: "Uchinchi tur shart mayli (O'tib ketgan voqealar uchun noreal shart va afsus)",
        explanation: "Third Conditional o'tmishda sodir bo'lmagan voqeaning noreal sharti va uning o'tmishdagi ehtimoliy natijasini ifodalaydi. Voqea allaqachon tugagan, uni o'zgartirib bo'lmaydi: 'If I had studied harder, I would have passed the exam' (lekin o'qimaganman va imtihondan o'tmaganman).",
        ieltsRelevance: "Speaking Part 2/3 da o'tmishdagi muhim qarorlarni tanqidiy tahlil qilishda va Task 2 da tarixiy xatolarni yoritishda yuqori ball olib beradi.",
        academicExamples: [
            {
                sentence: "If the authorities had warned the populace earlier, the casualty rate would have been substantially lower.",
                translation: "Agar hokimiyat aholini ertaroq ogohlantirganida, talafotlar ko'lami ancha past bo'lgan bo'lar edi.",
                context: "Task 2"
            },
            {
                sentence: "Had I not chosen this academic discipline, I might have pursued international law.",
                translation: "Agar ushbu yo'nalishni tanlamaganimda, men xalqaro huquq bo'yicha ketgan bo'lishim mumkin edi.",
                context: "Speaking"
            },
            {
                sentence: "The industrial recession could have been mitigated if fiscal regulators had intervened promptly.",
                translation: "Agar moliya nazoratchilari o'z vaqtida aralashganida, sanoat inqirozining oldi olingan bo'lardi.",
                context: "Task 2"
            }
        ],
        commonMistakes: [
            {
                incorrect: "If I would have known about the deadline, I would have submitted on time.",
                correct: "If I had known about the deadline, I would have submitted on time.",
                explanation: "'If' qismida 'would have' emas, Past Perfect (had known) ishlatiladi."
            },
            {
                incorrect: "If he had trained more, he would won the championship.",
                correct: "If he had trained more, he would have won the championship.",
                explanation: "Natija qismida 'would have + V3' (would have won) to'liq ishlatilishi shart."
            }
        ],
        quizQuestions: [
            {
                question: "If conservationists _______ the ecosystem earlier, the indigenous species might have survived.",
                options: ["had protected", "protected", "would protect", "have protected"],
                correctAnswer: "had protected",
                explanation: "O'tmishdagi noreal shart uchun 'If + had + V3' (had protected) to'g'ri keladi."
            },
            {
                question: "The catastrophic dam breach _______ if routine structural inspections had been conducted.",
                options: ["could have been prevented", "could be prevented", "was prevented", "had prevented"],
                correctAnswer: "could have been prevented",
                explanation: "O'tmishdagi passiv natija: 'could have been prevented' (oldini olish mumkin bo'lardi)."
            }
        ]
    },
    {
        id: "ielts_b1_03_mixed_conditionals",
        level: "B1",
        title: "Unit 51: Mixed Conditionals (Past Cause, Present Effect)",
        category: "Conditionals (B1)",
        structure: "If + had + V3 (Past Condition), Subject + would + Base Verb (Present Result)",
        uzbekMeaning: "Aralash shart mayli (O'tmishdagi harakatning hozirgi paytdagi natijasi)",
        explanation: "Mixed Conditional shart maylining ikki turini birlashtiradi: shart o'tmishda sodir bo'lgan (Past Perfect: If I had learned English in childhood), lekin uning natijasi ayni HOZIRGI paytda seziladi (Second conditional: I would not struggle with my career now). Bu tuzilma nomzodning grammatik tafakkuri chuqurligini ko'rsatadi.",
        ieltsRelevance: "IELTS Writing Task 2 va Speaking Part 3 da Band 7.5\u20138.0 Grammatical Range talabini qanoatlantirish uchun oltin kalit.",
        academicExamples: [
            {
                sentence: "If the nation had invested in green technology decades ago, it would be carbon-neutral today.",
                translation: "Agar mamlakat o'n yillar oldin yashil texnologiyaga sarmoya kiritganida, bugungi kunda u ugleroddan xoli bo'lar edi.",
                context: "Task 2"
            },
            {
                sentence: "If I had not practiced pronunciation rigorously, I would not speak so fluently now.",
                translation: "Agar talaffuz ustida tinimsiz ishlamaganimda, hozir bunday ravon gapirmagan bo'lar edim.",
                context: "Speaking"
            },
            {
                sentence: "If urban planners had anticipated population growth, modern cities would not suffer from chronic congestion.",
                translation: "Agar shaharsozlar aholi o'sishini oldindan hisobga olganida, zamonaviy shaharlar surunkali tirbandlikdan aziyat chekmasdi.",
                context: "Task 2"
            }
        ],
        commonMistakes: [
            {
                incorrect: "If I had passed the exam yesterday, I would have been a university student now.",
                correct: "If I had passed the exam yesterday, I would be a university student now.",
                explanation: "Natija 'now' (hozirgi payt) ga tegishli bo'lgani uchun 'would have been' emas, 'would be' bo'ladi."
            }
        ],
        quizQuestions: [
            {
                question: "If ancient scientists _______ antibiotics, contemporary healthcare would be vastly different.",
                options: ["had not discovered", "did not discover", "would not discover", "have not discovered"],
                correctAnswer: "had not discovered",
                explanation: "O'tmishdagi shart (had not discovered) hozirgi holat (would be) bilan bog'lanmoqda."
            },
            {
                question: "If I had taken that computer science course in college, I _______ as a programmer today.",
                options: ["would be working", "would have worked", "had worked", "will work"],
                correctAnswer: "would be working",
                explanation: "'Today' so'zi borligi sababli hozirgi davomli natija 'would be working' to'g'ri keladi."
            }
        ]
    },
    {
        id: "ielts_b1_04_used_to_be_used_to",
        level: "B1",
        title: "Unit 52: Used to, Would vs Be/Get used to",
        category: "Habits & Adaptation (B1)",
        structure: "used to + V (past habit/state) | would + V (past repeated action) | be/get used to + V-ing/Noun (accustomed to)",
        uzbekMeaning: "O'tmishdagi odat vs Yangi sharoitga ko'nikkanlik va moslashish jarayoni",
        explanation: "1) 'Used to + infinitive' \u2014 o'tmishda bo'lgan, lekin hozir yo'q odat yoki holat (I used to live in Bukhara). 2) 'Would + verb' \u2014 o'tmishda takrorlanuvchi xatti-harakatlar (holat fe'llari bilan ishlatilmaydi). 3) 'Be used to + V-ing' \u2014 biror narsaga o'rganib qolganlik (I am used to waking up early). 4) 'Get used to + V-ing' \u2014 ko'nikish jarayoni (It took me months to get used to living alone).",
        ieltsRelevance: "Speaking Part 1 ('How has your hometown changed?') va Part 2 da eski va yangi hayot tarzini qiyoslashda eng ko'p ishlatiladigan vosita.",
        academicExamples: [
            {
                sentence: "Consumers used to rely on brick-and-mortar stores, whereas digital marketplaces now dominate commerce.",
                translation: "Iste'molchilar avvallari do'konlarga borishga odatlangan bo'lsa, endilikda raqamli bozorlar savdoda ustunlik qilmoqda.",
                context: "Task 2"
            },
            {
                sentence: "When studying in the UK, it took me several weeks to get used to the unpredictable British climate.",
                translation: "Buyuk Britaniyada o'qiyotganimda, kutilmagan ingliz iqlimiga ko'nikishim uchun bir necha hafta kerak bo'ldi.",
                context: "Speaking"
            },
            {
                sentence: "Prior to industrialization, communities would gather around local artisan workshops.",
                translation: "Sanoatlashuvdan avval aholi mahalliy hunarmandlar ustaxonalariga to'planishar edi.",
                context: "Task 2"
            }
        ],
        commonMistakes: [
            {
                incorrect: "I am used to wake up early every morning.",
                correct: "I am used to waking up early every morning.",
                explanation: "'Be used to' iborasidagi 'to' predlog bo'lib, undan keyin gerundiy (waking up) kelishi shart."
            },
            {
                incorrect: "I use to play tennis when I was a child.",
                correct: "I used to play tennis when I was a child.",
                explanation: "O'tmishdagi odat uchun 'used to' (d harfi bilan) yozilishi shart."
            }
        ],
        quizQuestions: [
            {
                question: "International students often find it challenging to _______ independent self-study routines.",
                options: ["get used to", "used to", "use to", "be use to"],
                correctAnswer: "get used to",
                explanation: "Yangi narsaga ko'nikish 'jarayoni' uchun 'get used to' to'g'ri keladi."
            },
            {
                question: "Decades ago, households _______ far fewer electronic appliances than they possess currently.",
                options: ["used to own", "were used to own", "used to owning", "got used to own"],
                correctAnswer: "used to own",
                explanation: "O'tmishdagi holat uchun 'used to own' (egalik qilar edi) to'g'ri formuladir."
            }
        ]
    },
    {
        id: "ielts_b1_05_modals_deduction_present_past",
        level: "B1",
        title: "Unit 53: Modals of Deduction (must, can't, might, must have done)",
        category: "Modal Verbs (B1)",
        structure: "Hozirgi: must / can't / might + Base Verb | O'tgan: must / can't / might + have + V3",
        uzbekMeaning: "Xulosa va mantiqiy ehtimollik modallari (Shubhasiz shunday bo'lsa kerak / Bo'lishi mumkin emas)",
        explanation: "Faktlarga asoslangan mantiqiy xulosa chiqarishda ishlatiladi: 1) 'Must' \u2014 95% ishonch (He works 14 hours a day; he must be exhausted); 2) 'Can't' \u2014 mutlaqo imkonsiz (The test results are negative; he can't be ill); 3) 'Might/May/Could' \u2014 50% ehtimol (Prices might rise). O'tgan zamon uchun 'have + V3' qo'shiladi: 'The ancient civilization must have collapsed due to severe drought'.",
        ieltsRelevance: "Writing Task 2 va Speaking Part 3 da ilmiy farazlar qilish va hodisalar sababini tahlil qilishda talab etiladi.",
        academicExamples: [
            {
                sentence: "The unprecedented spike in fossil fuel demand must have contributed to the atmospheric warming trends.",
                translation: "Qazilma yoqilg'iga bo'lgan misli ko'rilmagan talab shubhasiz atmosferaning isish tendensiyalariga hissa qo'shgan bo'lishi kerak.",
                context: "Task 2"
            },
            {
                sentence: "Given their distinct fossil morphology, these species cannot have inhabited the same geographical era.",
                translation: "Ularning qoldiqlaridagi aniq farqlarni hisobga olsak, bu turlar bir xil geografik davrda yashagan bo'lishi mumkin emas.",
                context: "Task 2"
            },
            {
                sentence: "The candidate appeared exceptionally calm during the interview; she must have prepared thoroughly.",
                translation: "Nomzod intervyuda juda xotirjam ko'rindi; u puxta tayyorgarlik ko'rgan bo'lsa kerak.",
                context: "Speaking"
            }
        ],
        commonMistakes: [
            {
                incorrect: "The economy is struggling, so inflation must to be rising.",
                correct: "The economy is struggling, so inflation must be rising.",
                explanation: "'Must' modal fe'lidan keyin 'to' qo'yilmaydi."
            },
            {
                incorrect: "He didn't answer the phone yesterday; he must be sleeping.",
                correct: "He didn't answer the phone yesterday; he must have been sleeping.",
                explanation: "Kecha sodir bo'lgan voqea xulosasi uchun o'tgan modal zamon 'must have been sleeping' kerak."
            }
        ],
        quizQuestions: [
            {
                question: "The data discrepancies are too severe; the survey sample _______ thoroughly verified.",
                options: ["cannot have been", "must not have been", "couldn't be", "might have not"],
                correctAnswer: "cannot have been",
                explanation: "O'tmishdagi qat'iy inkor mantiqiy xulosasi uchun 'cannot have been' (tekshirilgan bo'lishi aslo mumkin emas) to'g'ri."
            },
            {
                question: "Scientists speculate that ancient agricultural communities _______ extensive irrigation networks.",
                options: ["might have engineered", "might engineer", "must to engineer", "can have engineered"],
                correctAnswer: "might have engineered",
                explanation: "O'tmishdagi ilmiy taxmin uchun 'might have engineered' (qurgan bo'lishi ehtimoldan xoli emas) ishlatiladi."
            }
        ]
    },
    {
        id: "ielts_b1_06_passive_modals_perfect",
        level: "B1",
        title: "Unit 54: Passive Voice with Modals & Perfect Tenses",
        category: "Passive Voice (B1)",
        structure: "Modal Passive: Modal + be + V3 | Perfect Passive: have/has been + V3 | Past Perfect: had been + V3",
        uzbekMeaning: "Modallar va murakkab zamonlarda majhul nisbat (Ish-harakatning o'ziga urg'u berish)",
        explanation: "Akademik ingliz tilida shaxs (I, we, they) o'rniga harakat va natija birinchi o'ringa chiqadi: 'Air pollution can be reduced' (odamlar kamaytirishi mumkin emas, balki ifloslanish kamaytirilishi mumkin). Perfect zamonlarda 'been' kiritiladi: 'Considerable progress has been achieved'.",
        ieltsRelevance: "Writing Task 1 da jarayon (process diagram) tavsifida va Task 2 da xolis akademik uslub (Objective Academic Tone) yaratishda eng muhim qoidadir.",
        academicExamples: [
            {
                sentence: "Significant progress has been made in the development of mRNA vaccine technology.",
                translation: "mRNA vaksina texnologiyasini rivojlantirishda salmoqli yutuqlarga erishildi.",
                context: "Task 2"
            },
            {
                sentence: "Stringent legislative measures must be implemented to curtail industrial effluent.",
                translation: "Sanoat chiqindilarini cheklash uchun qat'iy qonuniy choralar amalga oshirilishi shart.",
                context: "Task 2"
            },
            {
                sentence: "In the diagram, raw cocoa beans are roasted before being crushed into powder.",
                translation: "Diagrammada xom kakao donalari kukun holiga maydalanishidan oldin qovuriladi.",
                context: "Task 1"
            }
        ],
        commonMistakes: [
            {
                incorrect: "The problem can easily solve by education.",
                correct: "The problem can easily be solved by education.",
                explanation: "Majhul nisbatda modal fe'ldan so'ng 'be + V3' (be solved) bo'lishi shart."
            },
            {
                incorrect: "Several new hospitals have constructed in the city.",
                correct: "Several new hospitals have been constructed in the city.",
                explanation: "Kasalxonalar o'zini o'zi qurmaydi, shuning uchun 'have been constructed' (qurildi) bo'lishi kerak."
            }
        ],
        quizQuestions: [
            {
                question: "Renewable energy quotas _______ by local municipalities to meet climate obligations.",
                options: ["must be enforced", "must enforce", "must been enforced", "must to be enforced"],
                correctAnswer: "must be enforced",
                explanation: "'Modal + be + V3' qoidasiga ko'ra 'must be enforced' to'g'ri majhul shakldir."
            },
            {
                question: "Over 500 academic articles _______ on neural networks over the past decade.",
                options: ["have been published", "have published", "has been published", "were publish"],
                correctAnswer: "have been published",
                explanation: "'Articles' ko'plik ot, hozirgacha erishilgan natija uchun 'have been published' to'g'ri."
            }
        ]
    },
    {
        id: "ielts_b1_07_reported_speech_indirect",
        level: "B1",
        title: "Unit 55: Reported Speech & Academic Sourcing",
        category: "Reported Speech (B1)",
        structure: "S + asserted / maintained / concluded + that + [zamon siljishi: Present -> Past | Past -> Past Perfect]",
        uzbekMeaning: "O'zlashtirma gap va ilmiy qarashlarni havola qilish san'ati",
        explanation: "Birovning fikrini yoki tadqiqot natijasini ifodalashda zamonlar bir pog'ona orqaga siljiydi (Backshift): Present Simple -> Past Simple; Present Perfect -> Past Perfect; will -> would; can -> could. Akademik insholarda oddiy 'said' o'rniga nufuzli fe'llar ishlatiladi: argue, contend, assert, demonstrate, conclude.",
        ieltsRelevance: "Writing Task 2 da turli qarashlarni solishtirishda ('Opponents argue that...', 'Economists maintained that...') inshoga ilmiy salobat beradi.",
        academicExamples: [
            {
                sentence: "Sociologists argued that excessive smartphone usage had eroded face-to-face interpersonal skills.",
                translation: "Sotsiologlar smartfondan haddan ortiq foydalanish yuzma-yuz muloqot ko'nikmalarini yemirganini ta'kidladilar.",
                context: "Task 2"
            },
            {
                sentence: "The lead researcher confirmed that the clinical trials had yielded promising results.",
                translation: "Bosh tadqiqotchi klinik sinovlar umidbaxsh natijalar berganini tasdiqladi.",
                context: "Task 2"
            },
            {
                sentence: "My mentor advised me that regular public speaking would boost my professional confidence.",
                translation: "Ustozim muntazam omma oldida so'zlash professional ishonchimni oshirishini maslahat berdi.",
                context: "Speaking"
            }
        ],
        commonMistakes: [
            {
                incorrect: "He explained me that the university was closed.",
                correct: "He explained to me that the university was closed. / He told me that...",
                explanation: "'Explain' fe'lidan so'ng kishi kelsa 'to' qo'yiladi (explained to me) yoki 'told me' ishlatiladi."
            },
            {
                incorrect: "The economist stated that interest rates will decrease next month.",
                correct: "The economist stated that interest rates would decrease the following month.",
                explanation: "O'tgan zamondagi xabarda 'will' so'zi 'would' ga siljishi shart."
            }
        ],
        quizQuestions: [
            {
                question: "The statistical report demonstrated that renewable investments _______ exponentially over five years.",
                options: ["had grown", "have grown", "grow", "will grow"],
                correctAnswer: "had grown",
                explanation: "'Demonstrated' o'tgan zamon bo'lgani sababli, undan oldin sodir bo'lgan o'sish 'had grown' (Past Perfect) bo'ladi."
            },
            {
                question: "Participants confirmed that they _______ completely satisfied with the training modules.",
                options: ["were", "are", "will be", "have been"],
                correctAnswer: "were",
                explanation: "'Confirmed' o'tgan zamon bo'lgani sababli 'are' o'tmishga siljib 'were' bo'ladi."
            }
        ]
    },
    {
        id: "ielts_b1_08_gerunds_vs_infinitives",
        level: "B1",
        title: "Unit 56: Gerunds vs Infinitives in Complex Sentences",
        category: "Verb Complementation (B1)",
        structure: "Gerund (V-ing): enjoy, suggest, avoid, risk, consider | Infinitive (to-V): decide, manage, attempt, tend, aim",
        uzbekMeaning: "Harakat nomi (Gerundiy) va Noaniq shakl (Infinitiv) qoidalari",
        explanation: "Ingliz tilida bitta fe'ldan keyin ikkinchi fe'l kelganda qat'iy qoida amal qiladi: ba'zi fe'llar faqat gerundiy talab qiladi (avoid doing, suggest investing), boshqalari esa faqat to-infinitiv talab qiladi (decide to pursue, fail to comply). Predloglardan (about, of, in, without) keyin HAR DOIM gerundiy (V-ing) keladi.",
        ieltsRelevance: "IELTS yozma va og'zaki nutqida grammatik aniqlik (Accuracy) uchun juda zarur.",
        academicExamples: [
            {
                sentence: "Governments must avoid imposing disproportionate tariffs on essential pharmaceutical imports.",
                translation: "Hukumatlar zarur farmatsevtika importiga mutanosib bo'lmagan bojlarni joriy qilishdan saqlanishlari kerak.",
                context: "Task 2"
            },
            {
                sentence: "Urban authorities aim to construct pedestrianized zones throughout the historic city centre.",
                translation: "Shahar ma'muriyati tarixiy shahar markazi bo'ylab piyodalar hududlarini barpo etishni maqsad qilgan.",
                context: "Task 2"
            },
            {
                sentence: "By implementing stricter recycling policies, municipalities can conserve valuable landfill capacity.",
                translation: "Qat'iyroq qayta ishlash siyosatini qo'llash orqali shahar hokimiyatlari qimmatli poligon hajmini tejashi mumkin.",
                context: "Task 2"
            }
        ],
        commonMistakes: [
            {
                incorrect: "The minister suggested to launch a public consultation.",
                correct: "The minister suggested launching a public consultation.",
                explanation: "'Suggest' fe'lidan so'ng bevosita infinitiv kelmaydi, faqat gerundiy (suggest launching) yoki 'suggest that' keladi."
            },
            {
                incorrect: "She succeeded in to pass the examination.",
                correct: "She succeeded in passing the examination.",
                explanation: "'In' predlogi bo'lgani sababli undan keyin 'passing' gerundiysi kelishi shart."
            }
        ],
        quizQuestions: [
            {
                question: "Policymakers should consider _______ tax credits to corporations adopting solar power.",
                options: ["offering", "to offer", "offer", "offered"],
                correctAnswer: "offering",
                explanation: "'Consider' fe'li doimo gerundiy (considering offering) bilan ishlatiladi."
            },
            {
                question: "The university committee managed _______ sufficient funding for the new laboratory.",
                options: ["to secure", "securing", "secure", "secured"],
                correctAnswer: "to secure",
                explanation: "'Manage' fe'li o'zidan so'ng to-infinitiv (manage to secure) talab qiladi."
            }
        ]
    },
    {
        id: "ielts_b1_09_cohesion_concession",
        level: "B1",
        title: "Unit 57: Cohesive Devices & Concession (Although, Despite, In spite of)",
        category: "Cohesion & Contrast (B1)",
        structure: "Although / Even though / Whereas + Clause | Despite / In spite of + Noun Phrase / V-ing",
        uzbekMeaning: "Zidlovchi va to'siqsiz bog'lovchilar (Garchi ... bo'lsa ham, ...ga qaramasdan)",
        explanation: "Insholarda qarama-qarshi fikrlarni muvozanatlash uchun ishlatiladi. 'Although/Even though' dan keyin to'liq gap (Subject + Verb) keladi: 'Although electric cars are expensive, they save money'. 'Despite/In spite of' dan keyin esa gap emas, balki ot yoki gerundiy keladi: 'Despite their high purchase price, electric cars save money'.",
        ieltsRelevance: "Writing Task 2 Coherence & Cohesion (CC) bo'limida 7.0+ ball olishning eng asosiy poydevori.",
        academicExamples: [
            {
                sentence: "Although digital connectivity fosters global communication, it can inadvertently diminish local community bonds.",
                translation: "Garchi raqamli aloqa global muloqotni rivojlantirsa-da, u bilvosita mahalliy jamoaviy aloqalarni zaiflashtirishi mumkin.",
                context: "Task 2"
            },
            {
                sentence: "Despite facing severe financial constraints, the research team persevered with their vaccine trials.",
                translation: "Jiddiy moliyaviy qiyinchiliklarga qaramasdan, tadqiqot guruhi vaksina sinovlarini qat'iyat bilan davom ettirdi.",
                context: "Task 2"
            },
            {
                sentence: "In spite of rigorous preparation, I felt somewhat apprehensive before the IELTS speaking session.",
                translation: "Puxta tayyorgarlikka qaramay, IELTS speaking suhbati oldidan biroz hayajonlandim.",
                context: "Speaking"
            }
        ],
        commonMistakes: [
            {
                incorrect: "Despite of the heavy traffic, we arrived on schedule.",
                correct: "Despite the heavy traffic, we arrived on schedule. / In spite of the heavy traffic...",
                explanation: "'Despite' so'zidan keyin 'of' ishlatilmaydi; 'in spite of' da esa 'of' bo'ladi."
            },
            {
                incorrect: "Although the economy improved, but unemployment remained high.",
                correct: "Although the economy improved, unemployment remained high.",
                explanation: "'Although' bor gapda 'but' bog'lovchisi ortiqcha hisoblanadi (ikkalasi birga kelmaydi)."
            }
        ],
        quizQuestions: [
            {
                question: "_______ extensive public awareness campaigns, tobacco consumption remains prevalent.",
                options: ["Despite", "Although", "Whereas", "Even though"],
                correctAnswer: "Despite",
                explanation: "'Extensive campaigns' ot birikmasi bo'lgani uchun 'Despite' to'g'ri tanlovdir ('Although' to'liq gap talab qiladi)."
            },
            {
                question: "_______ automated machinery increases manufacturing velocity, it eliminates assembly line jobs.",
                options: ["While", "In spite of", "Despite", "Because of"],
                correctAnswer: "While",
                explanation: "To'liq gap ('automated machinery increases velocity') oldidan zidlovchi ma'noda 'While' to'g'ri."
            }
        ]
    },
    {
        id: "ielts_b2_01_adverbial_clauses",
        level: "B2",
        title: "Unit 58: Complex Adverbial Clauses (Reason, Purpose, Result, Concession)",
        category: "Complex Syntax (B2 Academy)",
        structure: "Maqsad: so that / in order that + clause | Sabab: inasmuch as / given that | Natija: so + adj + that",
        uzbekMeaning: "Murakkab hol ergash gaplar (Maqsad, mantiqiy sabab va natija munosabatlari)",
        explanation: "Akademik tahlilda sabab-oqibatni oddiy 'because' va 'so' dan yuqori darajada bayon qilish vositalari: 'In order that developing nations may prosper' (maqsad); 'Given that natural resources are finite' (sabab); 'Urban sprawl expanded to such an extent that arable land was lost' (natija).",
        ieltsRelevance: "Task 2 insholarida dalillarni chuqur asoslash va Grammatical Range bo'yicha Band 7.5 talabiga javob beradi.",
        academicExamples: [
            {
                sentence: "Governments must regulate emissions in order that future generations may inherit a viable biosphere.",
                translation: "Kelajak avlodlar yashashga yaroqli biosferaga ega bo'lishlari uchun hukumatlar chiqindilarni tartibga solishlari shart.",
                context: "Task 2"
            },
            {
                sentence: "Given that automation displaces repetitive manual labour, educational curriculums must prioritize creativity.",
                translation: "Avtomatlashtirish bir xil qo'l mehnatini siqib chiqarayotganini hisobga olsak, o'quv dasturlari ijodkorlikka ustuvorlik berishi zarur.",
                context: "Task 2"
            },
            {
                sentence: "The price of oil fluctuated so erratically that renewable investments surged dramatically.",
                translation: "Neft narxi shunchalik beqaror tebranganki, natijada qayta tiklanuvchi manbalarga investitsiyalar keskin oshdi.",
                context: "Task 1"
            }
        ],
        commonMistakes: [
            {
                incorrect: "We invested heavily so that to enhance product durability.",
                correct: "We invested heavily in order to enhance product durability. / so that we could enhance...",
                explanation: "'So that' dan keyin to'liq gap (we could enhance) keladi, infinitiv uchun 'in order to' ishlatiladi."
            }
        ],
        quizQuestions: [
            {
                question: "Fiscal authorities lowered interest rates _______ commercial investment might stimulate economic recovery.",
                options: ["in order that", "in order to", "because of", "owing to"],
                correctAnswer: "in order that",
                explanation: "'In order that' to'liq gap va modal fe'l (might stimulate) bilan keladi."
            },
            {
                question: "_______ metropolitan rents have escalated steeply, young professionals are migrating to suburban peripheries.",
                options: ["Given that", "In spite of", "So that", "Despite"],
                correctAnswer: "Given that",
                explanation: "Sababni mantiqiy asoslash uchun 'Given that' (inobatga olganda) to'g'ri."
            }
        ]
    },
    {
        id: "ielts_b2_02_advanced_relatives_prep",
        level: "B2",
        title: "Unit 59: Non-defining Relative Clauses with Prepositions (in which, to whom)",
        category: "Complex Syntax (B2 Academy)",
        structure: "Noun, Preposition + which / whom / whose + Clause, Main Clause",
        uzbekMeaning: "Predlogli ajratilgan aniqlovchi ergash gaplar (Undaki, unda esa, qaysikim)",
        explanation: "Og'zaki tilda predlog gap oxiriga ketadi (the house which I lived in), biroq akademik ingliz tilida predlog nisbiy olmoshdan oldinga chiqariladi (the house in which I resided). Bular vergul bilan ajratiladi va inshoga oliy akademik uslub bag'ishlaydi: 'the framework within which policies operate', 'stakeholders to whom public figures are accountable'.",
        ieltsRelevance: "IELTS Writing Task 2 va Task 1 da Band 7.5+ murakkab akademik jumlalar tuzishning eng nufuzli sintaktik usulidir.",
        academicExamples: [
            {
                sentence: "Higher education establishes a structured environment in which analytical reasoning can flourish.",
                translation: "Oliy ta'lim tahliliy tafakkur rivojlanishi mumkin bo'lgan tizimli muhitni yaratadi.",
                context: "Task 2"
            },
            {
                sentence: "The survey identified several emerging sectors, of which biotechnology demonstrated the most robust growth.",
                translation: "So'rovnoma bir nechta yangi sohalarni aniqladi, ularning ichida biotexnologiya eng barqaror o'sishni ko'rsatdi.",
                context: "Task 1"
            },
            {
                sentence: "Scholars to whom research grants were allocated successfully published their empirical findings.",
                translation: "Tadqiqot grantlari ajratilgan olimlar o'zlarining empirik xulosalarini muvaffaqiyatli nashr etdilar.",
                context: "Task 2"
            }
        ],
        commonMistakes: [
            {
                incorrect: "The framework in that organizations operate must be transparent.",
                correct: "The framework in which organizations operate must be transparent.",
                explanation: "Predlogdan keyin hech qachon 'that' kelmaydi; faqat 'which' (narsalar) yoki 'whom' (insonlar) ishlatiladi."
            }
        ],
        quizQuestions: [
            {
                question: "The global symposium established a treaty, the implications _______ remain contested.",
                options: ["of which", "in that", "for whose", "to which"],
                correctAnswer: "of which",
                explanation: "'The implications of which' (uning oqibatlari) shartnoma oqibatlarini bog'lash uchun to'g'ri sintaksisdir."
            },
            {
                question: "Democratic societies rely on legal mechanisms _______ citizens can hold leaders accountable.",
                options: ["through which", "through that", "whereby that", "in what"],
                correctAnswer: "through which",
                explanation: "'Mexanizmlar orqali' ma'nosida 'through which' akademik iborasi to'g'ri."
            }
        ]
    },
    {
        id: "ielts_b2_03_future_continuous_perfect",
        level: "B2",
        title: "Unit 60: Future Continuous & Future Perfect in Data Forecasting",
        category: "Future Tenses (B2 Academy)",
        structure: "Future Continuous: will be + V-ing | Future Perfect: will have + V3 (by a specific milestone)",
        uzbekMeaning: "Kelasi davomli va kelasi tugallangan zamonlar (Kelajak prognozlari va chegaralari)",
        explanation: "Future Continuous kelajakda aniq belgilangan davrda davom etayotgan bo'ladigan jarayonni ko'rsatadi (In 2035, millions will be telecommuting). Future Perfect esa kelajakdagi ma'lum bir muddatgacha (by 2040, by the end of the century) ish-harakat allaqachon yakunlanib bo'lishini bildiradi: 'By 2050, solar capacity will have doubled'.",
        ieltsRelevance: "Writing Task 1 da kelajak yillariga (2030, 2040) oid chiziqli grafiklar va diagrammalarni tahlil qilishda beqiyos.",
        academicExamples: [
            {
                sentence: "By 2040, urban planners project that renewable energy will have superseded fossil fuels as the principal power source.",
                translation: "Shaharsozlar 2040 yilga kelib qayta tiklanadigan energiya asosiy energiya manbai sifatida qazilma yoqilg'ilarni siqib chiqargan bo'lishini prognoz qilmoqdalar.",
                context: "Task 1"
            },
            {
                sentence: "Throughout the coming decade, automation will be reshaping employment markets across industrialized nations.",
                translation: "Kelgusi o'n yil davomida avtomatlashtirish sanoatlashgan davlatlardagi bandlik bozorlarini qayta shakllantirib turadi.",
                context: "Task 2"
            },
            {
                sentence: "By the time I complete my postgraduate dissertation, I will have acquired substantial research methodology expertise.",
                translation: "Magistratura dissertatsiyamni yakunlagunimga qadar men salmoqli tadqiqot metodologiyasi tajribasini to'plagan bo'laman.",
                context: "Speaking"
            }
        ],
        commonMistakes: [
            {
                incorrect: "By 2030, the global population will reach 8.5 billion.",
                correct: "By 2030, the global population will have reached 8.5 billion.",
                explanation: "'By + kelajak vaqt' chegarasi bilan Future Perfect (will have reached) ishlatilishi shart."
            }
        ],
        quizQuestions: [
            {
                question: "Statistical projections suggest that by mid-century, healthcare costs _______ twofold.",
                options: ["will have multiplied", "will multiply", "are multiplying", "will be multiply"],
                correctAnswer: "will have multiplied",
                explanation: "'By mid-century' chegarasi kelasi tugallangan zamon (will have multiplied) ni talab qiladi."
            },
            {
                question: "At this point in the decade, researchers _______ longitudinal trials on quantum encryption.",
                options: ["will be conducting", "will have conducted", "conduct", "have conducted"],
                correctAnswer: "will be conducting",
                explanation: "Kelajakda davom etib turadigan jarayon uchun Future Continuous (will be conducting) to'g'ri."
            }
        ]
    },
    {
        id: "ielts_b2_04_unreal_past_wishes",
        level: "B2",
        title: "Unit 61: Unreal Past & Hypothetical Desires (I wish, If only, It's time)",
        category: "Hypothetical Syntax (B2 Academy)",
        structure: "I wish / If only + Past Simple (present wish) | I wish + Past Perfect (past regret) | It is high time + S + V2",
        uzbekMeaning: "Noreal o'tgan zamon va qat'iy talablar (Qaniydi..., ...vaqti allaqachon yetib keldi)",
        explanation: "Hozirgi holatdan norozilik va orzuni bildirishda 'I wish / If only + Past Simple' qo'llanadi: 'I wish governments took climate change more seriously'. O'tmishdagi afsus uchun esa 'Past Perfect' ishlatiladi. 'It is high time + Subject + Past Simple' strukturasi kechiktirib bo'lmaydigan qat'iy jamoat talabini ifodalaydi: 'It is high time politicians addressed wealth inequality'.",
        ieltsRelevance: "Speaking Part 3 va Writing Task 2 da jamiyatdagi kamchiliklarni kuchli emotsional va grammatik salmoq bilan ko'rsatish vositasi.",
        academicExamples: [
            {
                sentence: "It is high time international governing bodies enacted punitive sanctions against environmental polluters.",
                translation: "Xalqaro boshqaruv organlari atrof-muhitni ifloslantiruvchilarga qarshi jazo choralarini qo'llash vaqti allaqachon yetib keldi.",
                context: "Task 2"
            },
            {
                sentence: "Many educators wish that standardized testing did not dictate the entirety of school curriculums.",
                translation: "Ko'plab pedagoglar standartlashtirilgan testlar butun maktab o'quv dasturini belgilab bermasligini orzu qiladilar.",
                context: "Task 2"
            },
            {
                sentence: "I wish I had begun learning foreign languages during early childhood.",
                translation: "Qaniydi men chet tillarini o'rganishni erta bolalik chog'imdan boshlaganimda edi.",
                context: "Speaking"
            }
        ],
        commonMistakes: [
            {
                incorrect: "It is high time the government takes action.",
                correct: "It is high time the government took action.",
                explanation: "'It is high time' iborasidan keyin fe'l albatta Past Simple (took) shaklida bo'lishi shart."
            }
        ],
        quizQuestions: [
            {
                question: "Conservation biologists contend that it is high time humanity _______ carbon emissions.",
                options: ["curbed", "curbs", "curbing", "would curb"],
                correctAnswer: "curbed",
                explanation: "'It is high time + Subject + Past Simple' (curbed) formulasiga asosan to'g'ri."
            },
            {
                question: "I wish educational policymakers _______ more attention to practical vocational competencies.",
                options: ["paid", "pay", "will pay", "are paying"],
                correctAnswer: "paid",
                explanation: "Hozirgi paytga oid orzu-istak uchun 'wish + Past Simple' (paid) ishlatiladi."
            }
        ]
    },
    {
        id: "ielts_b2_05_passive_reporting_verbs",
        level: "B2",
        title: "Unit 62: Passive Reporting Structures (It is widely argued that..., Subject is said to...)",
        category: "Objective Hedging (B2 Academy)",
        structure: "It is + V3 (believed / claimed / recognized) + that + Clause | Subject + is/are + V3 + to + Base Verb / have V3",
        uzbekMeaning: "Neytral akademik bayonotlar (Keng e'tirof etilishicha..., ...deb hisoblanadi)",
        explanation: "Akademik yozuvda 'Men o'ylayman' yoki 'Hamma biladiki' deb shaxsiy hissiyotga berilish taqiqlanadi. Uning o'rniga passiv xabar shakllari qo'llanadi: 1) 'It is widely contended that higher education enhances economic resilience'; 2) 'Electric vehicles are estimated to account for 40% of future sales'. Bu usul ilmiy xolislik (Hedging) darajasini ko'taradi.",
        ieltsRelevance: "Writing Task 2 insho kirish qismida parafraz qilishda (Paraphrasing the prompt) eng obro'li sintaktik vositadir.",
        academicExamples: [
            {
                sentence: "It is widely acknowledged that socioeconomic deprivation hinders academic achievement.",
                translation: "Ijtimoiy-iqtisodiy yetishmovchilik akademik muvaffaqiyatga to'sqinlik qilishi keng e'tirof etiladi.",
                context: "Task 2"
            },
            {
                sentence: "Early multilingualism is believed to stimulate neurodevelopmental flexibility in adolescents.",
                translation: "Ilk ko'ptillilik o'smirlarda asab tizimi rivojlanishining moslashuvchanligini rag'batlantirishi ishoniladi.",
                context: "Task 2"
            },
            {
                sentence: "The ancient trade route is reported to have facilitated unprecedented intercultural exchange.",
                translation: "Qadimiy savdo yo'li misli ko'rilmagan madaniyatlararo almashinuvga zamin yaratgani aytiladi.",
                context: "Task 2"
            }
        ],
        commonMistakes: [
            {
                incorrect: "It is believe that technology isolates individuals.",
                correct: "It is believed that technology isolates individuals.",
                explanation: "'It is' dan keyin fe'lning 3-shakli (believed) qo'yilishi shart."
            }
        ],
        quizQuestions: [
            {
                question: "Urban density _______ to foster greater resource efficiency and reduced transit times.",
                options: ["is understood", "understands", "is understanding", "understood"],
                correctAnswer: "is understood",
                explanation: "'Subject + is understood to + Base verb' to'g'ri passiv xabar strukturasidir."
            },
            {
                question: "It is increasingly _______ that artificial intelligence necessitates stringent regulatory oversight.",
                options: ["recognized", "recognize", "recognizing", "recognition"],
                correctAnswer: "recognized",
                explanation: "'It is + V3 (recognized) + that' to'g'ri formuladir."
            }
        ]
    },
    {
        id: "ielts_b2_06_participle_clauses_economy",
        level: "B2",
        title: "Unit 63: Participle Clauses for Sentence Economy & Variety",
        category: "Sentence Reduction (B2 Academy)",
        structure: "Present Participle: V-ing (Active time/reason) | Past Participle: V3 (Passive reason) | Perfect: Having + V3",
        uzbekMeaning: "Sifatdoshli o'ramlar orqali gaplarni ixchamlashtirish va uslubiy boyitish",
        explanation: "Ikkita gapni bitta qilib, keraksiz bog'lovchilarni tushirib qoldirish san'ati: 'Because researchers examined the figures, they concluded...' -> 'Having examined the figures, researchers concluded...'. Active harakatda V-ing (Recognizing the urgency, leaders acted), Passive harakatda V3 (Built in the 19th century, the bridge stands firm).",
        ieltsRelevance: "Writing Task 1 va 2 da gaplar tuzilishini qisqartirib, insho so'z sonini tejash va murakkab sintaksis ko'rsatish vositasi.",
        academicExamples: [
            {
                sentence: "Having analyzed the demographic data, analysts identified an unprecedented influx of young professionals.",
                translation: "Demografik ma'lumotlarni tahlil qilib chiqqach, tahlilchilar yosh mutaxassislarning misli ko'rilmagan oqimini aniqladilar.",
                context: "Task 1"
            },
            {
                sentence: "Driven by escalating living costs, numerous urbanites are relocating to secondary regional towns.",
                translation: "Yashash xarajatlarining oshib borishidan kelib chiqib, ko'plab shahar aholisi viloyat shaharlariga ko'chib o'tmoqda.",
                context: "Task 2"
            },
            {
                sentence: "Facing intense international competition, corporations are investing aggressively in automation.",
                translation: "Kuchli xalqaro raqobatga duch kelib, korporatsiyalar avtomatlashtirishga katta mablag' kiritmoqdalar.",
                context: "Task 2"
            }
        ],
        commonMistakes: [
            {
                incorrect: "Having arrived at the airport, the storm cancelled the flight.",
                correct: "Having arrived at the airport, the passengers discovered their flight was cancelled.",
                explanation: "Dangling participle xatosi: sifatdoshning egasi asosiy gapning egasi bilan bir xil bo'lishi shart (bo'ron aeroportga yetib kelmagan, yo'lovchilar kelgan)."
            }
        ],
        quizQuestions: [
            {
                question: "_______ the preliminary laboratory results, the panel sanctioned further clinical development.",
                options: ["Having validated", "Validated having", "After validate", "Validated"],
                correctAnswer: "Having validated",
                explanation: "Oldinroq tugallangan faol harakat uchun 'Having + V3' (Having validated) ishlatiladi."
            },
            {
                question: "_______ by persistent inflation, consumer purchasing power diminished notably.",
                options: ["Constrained", "Constraining", "Having constrained", "To constrain"],
                correctAnswer: "Constrained",
                explanation: "Passiv sabab (inflyatsiya tomonidan cheklangan holda) uchun Past Participle (Constrained) to'g'ri."
            }
        ]
    },
    {
        id: "ielts_b2_07_double_comparatives",
        level: "B2",
        title: "Unit 64: Double Comparatives for Correlative Trends",
        category: "Comparative Syntax (B2 Academy)",
        structure: "The + comparative adjective/adverb ..., the + comparative adjective/adverb ...",
        uzbekMeaning: "Proporsional qiyoslash (Qanchalik ko'p bo'lsa, shunchalik kuchayadi)",
        explanation: "Ikki hodisaning bir-biriga to'g'ridan-to'g'ri bog'liqligini ifodalovchi eng nafis tuzilma: 'The higher the educational standard, the lower the incidence of poverty'. Ikkala qismda ham albatta 'the' artikli va qiyosiy daraja (more, higher, less, greater) qo'llaniladi.",
        ieltsRelevance: "Writing Task 1 dagi bog'liq tendensiyalarni va Task 2 dagi sabab-oqibat xulosalarini nihoyatda chiroyli ifodalaydi.",
        academicExamples: [
            {
                sentence: "The more accessible tertiary education becomes, the more robust a nation's economic productivity will be.",
                translation: "Oliy ta'lim qanchalik ommabop bo'lsa, mamlakatning iqtisodiy unumdorligi shunchalik mustahkam bo'ladi.",
                context: "Task 2"
            },
            {
                sentence: "In the chart, the older the demographic cohort, the higher the rate of home ownership observed.",
                translation: "Grafikda demografik guruh qanchalik keksa bo'lsa, uy-joyga egalik qilish darajasi shunchalik yuqori bo'lgan.",
                context: "Task 1"
            },
            {
                sentence: "The greater the investment in municipal transit, the fewer emissions urban centers generate.",
                translation: "Shahar transportiga qanchalik ko'p sarmoya kiritilsa, shahar markazlari shunchalik kamroq chiqindi chiqaradi.",
                context: "Task 2"
            }
        ],
        commonMistakes: [
            {
                incorrect: "More you practice, better you become.",
                correct: "The more you practice, the better you become.",
                explanation: "Ikkala qismda ham 'the' artikli majburiydir."
            }
        ],
        quizQuestions: [
            {
                question: "The more sophisticated artificial intelligence becomes, _______ ethical scrutiny it demands.",
                options: ["the greater", "greater", "the more great", "most"],
                correctAnswer: "the greater",
                explanation: "Proporsional qiyosiy formulada ikkinchi tomonda ham 'the + comparative' (the greater) bo'ladi."
            },
            {
                question: "The _______ the air quality index, the higher the hospital admission rates.",
                options: ["poorer", "the poorer", "poor", "more poor"],
                correctAnswer: "poorer",
                explanation: "'The' boshida turgani uchun qiyosiy sifat 'poorer' qo'yiladi."
            }
        ]
    },
    {
        id: "ielts_b2_08_academic_quantifiers_data",
        level: "B2",
        title: "Unit 65: Advanced Quantifiers & Data Approximation in Task 1",
        category: "Data Representation (B2 Academy)",
        structure: "An overwhelming majority of / A negligible fraction of / Roughly threefold / In excess of / A minority of",
        uzbekMeaning: "Akademik miqdor ko'rsatkichlari va foizlarni sifatli so'zlar bilan ifodalash",
        explanation: "Writing Task 1 da raqamlarni faqat '75%' yoki '5%' deb shunchaki ko'chirish Band 6.0 darajasidir. Band 7.5+ olish uchun raqamlar so'zlar bilan qiyoslanadi: 75% -> 'three-quarters / a vast majority'; 5% -> 'a negligible proportion / a tiny fraction'; 300% -> 'a threefold increase / tripled'.",
        ieltsRelevance: "Writing Task 1 Lexical Resource va Task Achievement bo'yicha eng yuqori ball olib beruvchi maxsus vositadir.",
        academicExamples: [
            {
                sentence: "An overwhelming majority of survey respondents favored flexible hybrid working arrangements.",
                translation: "So'rovnoma qatnashchilarining mutlaq ko'pchiligi moslashuvchan gibrid ish tartibini ma'qulladilar.",
                context: "Task 1"
            },
            {
                sentence: "Expenditure on public recreation constituted a negligible fraction of the municipal budget, at merely 2%.",
                translation: "Aholi dam olishiga sarflangan xarajatlar shahar byudjetining atigi 2% ini tashkil etib, sezilarsiz ulushni egalladi.",
                context: "Task 1"
            },
            {
                sentence: "Between 2005 and 2020, solar electricity capacity experienced an approximate fourfold surge.",
                translation: "2005 va 2020 yillar oralig'ida quyosh energiyasi quvvati taxminan to'rt barobar o'sishni boshdan kechirdi.",
                context: "Task 1"
            }
        ],
        commonMistakes: [
            {
                incorrect: "A massive percent of people used bicycles.",
                correct: "A substantial proportion of citizens utilized bicycles.",
                explanation: "'Percent' so'zi oldidan 'massive' noo'rin; 'a substantial proportion/percentage' akademik hisoblanadi."
            }
        ],
        quizQuestions: [
            {
                question: "Hydroelectric generation accounted for _______ of national energy consumption in 2018.",
                options: ["approximately one-third", "about one-three", "around third", "near one-three"],
                correctAnswer: "approximately one-third",
                explanation: "33% ko'rsatkichini ifodalash uchun 'approximately one-third' (taxminan uchdan bir qismi) to'g'ri."
            },
            {
                question: "Only a _______ of surveyed consumers expressed dissatisfaction with digital public services.",
                options: ["negligible minority", "little number", "tiny amount of", "few fraction"],
                correctAnswer: "negligible minority",
                explanation: "Sanaladigan insonlar uchun 'a negligible minority' (sezilarsiz ozchilik) to'g'ri akademik iboradir."
            }
        ]
    },
    {
        id: "ielts_b2_09_causative_structures",
        level: "B2",
        title: "Unit 66: Causative Structures (Have/Get something done & Make/Let)",
        category: "Causative Verbs (B2 Academy)",
        structure: "have / get + Object + V3 (past participle) | make / have + Person + Base Verb | let + Person + Base Verb",
        uzbekMeaning: "Kausativ konstruktsiyalar (Boshqalar orqali bajartirish yoki majburlash)",
        explanation: "Ish-harakatni shaxsan o'zi bajarmasdan, boshqa mutaxassis yoki tashkilot orqali bajartirishni ifodalaydi: 'The government had the highway renovated' (hukumat o'zi ta'mirlamadi, mutaxassislarga ta'mirlattirdi). 'Make someone do' \u2014 majburlash; 'let someone do' \u2014 ruxsat berish (to'siz keladi).",
        ieltsRelevance: "Task 2 insholarida davlatning institutsional va tizimli xizmatlarini yoritishda foydalaniladi.",
        academicExamples: [
            {
                sentence: "Municipalities should have hazardous industrial facilities audited by independent environmental bodies.",
                translation: "Shahar hokimiyatlari xavfli sanoat obyektlarini mustaqil ekologik organlar tomonidan tekshirtirishlari lozim.",
                context: "Task 2"
            },
            {
                sentence: "Stringent vehicle emissions inspections make motorists maintain their catalytic converters properly.",
                translation: "Avtomobil chiqindilarini qat'iy tekshirish haydovchilarni o'z katalizatorlarini to'g'ri sozlashga majbur qiladi.",
                context: "Task 2"
            },
            {
                sentence: "Flexible curriculum policies let university students tailor their academic trajectories.",
                translation: "Moslashuvchan o'quv reja siyosati universitet talabalariga o'zlarining akademik yo'nalishlarini moslashtirishga imkon beradi.",
                context: "Task 2"
            }
        ],
        commonMistakes: [
            {
                incorrect: "The administration made companies to pay higher environmental fines.",
                correct: "The administration made companies pay higher environmental fines.",
                explanation: "'Make' kausativ fe'lidan keyin 'to' qo'yilmaydi (made companies pay)."
            }
        ],
        quizQuestions: [
            {
                question: "Public health agencies must have clinical trial data _______ by independent researchers.",
                options: ["reviewed", "to review", "review", "reviewing"],
                correctAnswer: "reviewed",
                explanation: "'Have + Object + V3' qoidasiga binoan 'reviewed' to'g'ri majhul kausativdir."
            },
            {
                question: "Government regulations should make polluters _______ financial reparations for ecological damage.",
                options: ["pay", "to pay", "paid", "paying"],
                correctAnswer: "pay",
                explanation: "'Make + Person + Base Verb' formulasida 'pay' to'ssiz ishlatiladi."
            }
        ]
    },
    {
        id: "ielts_c1_01_ellipsis_substitution",
        level: "C1",
        title: "Unit 67: Ellipsis and Substitution in Cohesive Discourse",
        category: "Advanced Discourse (C1 Academy)",
        structure: "Substitution: that / those of + Noun | do so / such | Ellipsis: Auxiliary omission in coordinated clauses",
        uzbekMeaning: "Elipsis va o'rnini bosish (Akademik matnda keraksiz so'z takrorini yo'qotish)",
        explanation: "Yozma nutqda bir xil so'zlarni qayta-qayta takrorlash o'rniga 'that of' (birlik) va 'those of' (ko'plik) olmoshlari ishlatiladi: 'The population of Tokyo is larger than that of Paris' (the population of Paris emas). Shuningdek, fe'llar o'rniga 'do so' qo'llaniladi: 'If citizens wish to vote, they may do so digitally'.",
        ieltsRelevance: "Writing Task 1 va 2 da Coherence & Cohesion (CC) bo'yicha Band 8.5\u20139.0 olishning oliy talablaridan biri.",
        academicExamples: [
            {
                sentence: "The ecological impact of air travel significantly surpasses that of electric rail systems.",
                translation: "Havo qatnovining ekologik ta'siri elektr poyezdlari tizimlarinikidan sezilarli darajada oshadi.",
                context: "Task 2"
            },
            {
                sentence: "Should multinational corporations choose to diversify supply chains, they can do so without sacrificing profitability.",
                translation: "Agar transmilliy korporatsiyalar ta'minot zanjirlarini diversifikatsiya qilishni istasalar, buni daromadlilikni qurbon qilmasdan amalga oshirishlari mumkin.",
                context: "Task 2"
            },
            {
                sentence: "Expenditures in the educational domain mirrored those observed in technological infrastructure.",
                translation: "Ta'lim sohasidagi xarajatlar texnologik infratuzilmada kuzatilgan ko'rsatkichlarni aynan takrorladi.",
                context: "Task 1"
            }
        ],
        commonMistakes: [
            {
                incorrect: "The climate in Spain is warmer than the climate in Scotland.",
                correct: "The climate in Spain is warmer than that of Scotland.",
                explanation: "'The climate' so'zini takrorlamaslik uchun 'that of' olmoshi qo'llaniladi."
            }
        ],
        quizQuestions: [
            {
                question: "The renewable output figures for Germany far exceeded _______ recorded by neighboring territories.",
                options: ["those", "that", "them", "these"],
                correctAnswer: "those",
                explanation: "'Figures' ko'plik bo'lgani sababli ularning o'rnini 'those' olmoshi bosadi."
            },
            {
                question: "If participants wish to withdraw from the medical evaluation, they are entitled to _______ at any stage.",
                options: ["do so", "do it so", "make so", "act so"],
                correctAnswer: "do so",
                explanation: "Avval zikr etilgan harakatni (withdraw) takrorlamaslik uchun 'do so' to'g'ri akademik iboradir."
            }
        ]
    },
    {
        id: "ielts_c1_02_fronting_topicalisation",
        level: "C1",
        title: "Unit 68: Fronting & Topicalisation for Academic Salience",
        category: "Stylistic Inversion (C1 Academy)",
        structure: "Adverbial / Prepositional phrase + Verb + Subject | Adjective Phrase + be + Subject",
        uzbekMeaning: "Topikalizatsiya (Mantiqiy asosiy tushunchani gap boshiga chiqarish orqali urg'u berish)",
        explanation: "Gapning eng muhim qismini uning boshiga olib chiqish orqali matnga akademik vazminlik bag'ishlash: 'Particularly troubling is the proliferation of microplastics in aquatic fauna' (oddiy: The proliferation of microplastics is particularly troubling). 'Central to this discourse is the concept of distributive justice'.",
        ieltsRelevance: "Writing Task 2 insho xulosalarida (Conclusion) va asosiy dalil boshida Band 8.5\u20139.0 darajasidagi salobatli sintaksis.",
        academicExamples: [
            {
                sentence: "Central to this philosophical debate is the unresolved tension between individual liberty and public safety.",
                translation: "Ushbu falsafiy bahsning markazida shaxsiy erkinlik va jamoat xavfsizligi o'rtasidagi hal etilmagan ziddiyat turadi.",
                context: "Task 2"
            },
            {
                sentence: "Equally salient is the correlation between early childhood nutrition and long-term cognitive aptitude.",
                translation: "Erta bolalikdagi ovqatlanish va uzoq muddatli aqliy salohiyat o'rtasidagi o'zaro bog'liqlik ham xuddi shunday muhimdir.",
                context: "Task 2"
            },
            {
                sentence: "Of paramount significance in the statistical overview was the sudden downturn in heavy manufacturing.",
                translation: "Statistik sharhda eng katta ahamiyatga ega bo'lgan jihat og'ir ishlab chiqarishdagi to'satdan yuz bergan pasayish bo'ldi.",
                context: "Task 1"
            }
        ],
        commonMistakes: [
            {
                incorrect: "Central to this debate it is the role of regulatory agencies.",
                correct: "Central to this debate is the role of regulatory agencies.",
                explanation: "Fronting tuzilishida 'it' olmoshi kiritilmaydi; fe'ldan so'ng bevosita ega (the role) keladi."
            }
        ],
        quizQuestions: [
            {
                question: "Particularly compelling _______ the arguments presented in favour of decentralised energy grids.",
                options: ["are", "is", "being", "to be"],
                correctAnswer: "are",
                explanation: "Gapning egasi 'arguments' (ko'plik) bo'lgani sababli fe'l 'are' bo'lishi shart."
            },
            {
                question: "Underpinning these technological breakthroughs _______ decades of government-funded research.",
                options: ["is", "are", "have", "being"],
                correctAnswer: "is",
                explanation: "Gapning haqiqiy egasi 'decades of research' (tadqiqot \u2014 birlik) bo'lgani sababli 'is' to'g'ri."
            }
        ]
    },
    {
        id: "ielts_c1_03_prepositional_collocations",
        level: "C1",
        title: "Unit 69: Advanced Prepositional Collocations in Academic Writing",
        category: "Academic Collocations (C1 Academy)",
        structure: "in terms of / by virtue of / in light of / with respect to / at the expense of / on the grounds that",
        uzbekMeaning: "Murakkab predlogli akademik iboralar (Nuqtai nazaridan, tufayli, hisobiga)",
        explanation: "Band 8.0+ Lexical Resource mezoniga erishish uchun so'zlar yakka holda emas, balki murakkab predlogli kolokatsiyalar bilan qo'llaniladi: 'by virtue of' \u2014 fazilati/tufayli; 'in light of' \u2014 ma'lumotlarni hisobga olgan holda; 'at the expense of' \u2014 boshqa narsa hisobiga/evaziga; 'on the grounds that' \u2014 ...degan asos bilan.",
        ieltsRelevance: "Writing Task 1 va 2 da gaplar o'rtasida mustahkam, silliq va tabiiy akademik mantiqiy ko'prik yaratadi.",
        academicExamples: [
            {
                sentence: "Economic expansion should not be relentlessly pursued at the expense of ecological stability.",
                translation: "Iqtisodiy o'sish ekologik barqarorlik hisobiga tinimsiz quvilishi kerak emas.",
                context: "Task 2"
            },
            {
                sentence: "In light of empirical evidence regarding climate change, carbon pricing mechanisms are justified.",
                translation: "Iqlim o'zgarishiga oid empirik dalillar yorug'ida uglerod narxini belgilash mexanizmlari o'zini oqlaydi.",
                context: "Task 2"
            },
            {
                sentence: "With respect to gender representation, women accounted for a substantial proportion of managerial roles.",
                translation: "Gender vakilligi nuqtai nazaridan, ayollar boshqaruv lavozimlarining salmoqli qismini egalladi.",
                context: "Task 1"
            }
        ],
        commonMistakes: [
            {
                incorrect: "The proposal was rejected on the grounds because it lacked funding.",
                correct: "The proposal was rejected on the grounds that it lacked funding.",
                explanation: "'On the grounds that' iborasida 'because' ishlatilmaydi; 'that' dan keyin sabab keltiriladi."
            }
        ],
        quizQuestions: [
            {
                question: "Technological advancement must not be accelerated _______ human psychological welfare.",
                options: ["at the expense of", "in terms with", "by virtue on", "on light of"],
                correctAnswer: "at the expense of",
                explanation: "'Evaziga/hisobiga' ma'nosidagi akademik kolokatsiya 'at the expense of' hisoblanadi."
            },
            {
                question: "_______ recent macro-economic volatility, sovereign wealth funds revised their asset allocations.",
                options: ["In light of", "By grounds of", "With terms to", "In expense of"],
                correctAnswer: "In light of",
                explanation: "'Mavjud voqelikni hisobga olganda' ma'nosidagi ibora 'In light of' dir."
            }
        ]
    },
    {
        id: "ielts_c1_04_complex_participle_reduction",
        level: "C1",
        title: "Unit 70: Complex Gerundial & Participle Reductions",
        category: "Syntactic Complexity (C1 Academy)",
        structure: "Preposition + having been + V3 | Far from doing X, S + does Y | Without prejudice to + Noun",
        uzbekMeaning: "Murakkab gerundiy va sifatdoshli jumlalar (Yuqori darajadagi akademik ixchamlik)",
        explanation: "Eng yuqori akademik maqolalar va IELTS Band 9.0 insholarida qo'llaniladigan murakkab qisqartirishlar: 'Despite having been warned repeatedly, corporations failed to comply' (takroriy ogohlantirilgan bo'lishiga qaramay); 'Far from diminishing inequality, the tax reform exacerbated the gap' (tengsizlikni kamaytirish u yoqda tursin, soliq islohoti bo'shliqni kengaytirdi).",
        ieltsRelevance: "IELTS Writing Task 2 da Band 9.0 Grammatical Range and Accuracy darajasini tasdiqlash uchun xizmat qiladi.",
        academicExamples: [
            {
                sentence: "Far from alleviating traffic congestion, constructing additional highway lanes merely induced greater vehicular demand.",
                translation: "Tirbandlikni kamaytirish u yoqda tursin, qo'shimcha magistral yo'llarni qurish shunchaki yanada ko'proq transport talabini keltirib chiqardi.",
                context: "Task 2"
            },
            {
                sentence: "Despite having been subjected to exhaustive peer review, the experimental findings sparked fervent scientific controversy.",
                translation: "To'liq ilmiy tahlildan o'tkazilgan bo'lishiga qaramay, eksperimental xulosalar qizg'in ilmiy bahslarga sabab bo'ldi.",
                context: "Task 2"
            },
            {
                sentence: "Without prejudice to existing international agreements, signatory nations formulated supplementary climate protocols.",
                translation: "Mavjud xalqaro shartnomalarga ziyon yetkazmagan holda, imzo chekkan davlatlar qo'shimcha iqlim protokollarini ishlab chiqdilar.",
                context: "Task 2"
            }
        ],
        commonMistakes: [
            {
                incorrect: "Far from to help the poor, the measure burdened them.",
                correct: "Far from helping the poor, the measure burdened them.",
                explanation: "'Far from' iborasidan so'ng 'to-infinitive' emas, har doim gerundiy (helping) keladi."
            }
        ],
        quizQuestions: [
            {
                question: "Far from _______ economic disparities, deregulated financial policies exacerbated poverty levels.",
                options: ["alleviating", "alleviate", "to alleviate", "alleviated"],
                correctAnswer: "alleviating",
                explanation: "'Far from' iborasidan keyin gerundiy (alleviating) ishlatiladi."
            },
            {
                question: "Despite _______ into international law, the maritime treaty faced sporadic domestic resistance.",
                options: ["having been codified", "codified having", "had been codified", "having codified"],
                correctAnswer: "having been codified",
                explanation: "O'tmishda yakunlangan passiv holat uchun 'having been codified' (qonuniylashtirilgan bo'lishiga qaramay) to'g'ri."
            }
        ]
    }
];
