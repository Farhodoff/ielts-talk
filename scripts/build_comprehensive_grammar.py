# -*- coding: utf-8 -*-
"""
Script to expand IELTS Grammar Database with 30 comprehensive units across A2, B1, B2, and C1.
Includes authentic IELTS Academic & Speaking examples, Uzbek translations, formulas, common mistakes, and interactive quizzes.
"""

import os
import json
import re

NEW_TOPICS = [
    # =========================================================================
    # LEVEL A2: PRE-INTERMEDIATE FOUNDATION (8 TOPICS)
    # =========================================================================
    {
        "id": "ielts_a2_01_past_continuous_vs_simple",
        "level": "A2",
        "title": "Unit 41: Past Continuous vs Past Simple (O'tmishdagi Hikoyalar & Kesishuvlar)",
        "category": "Past Tenses & Narrative (A2)",
        "structure": "While / As + S + was/were + V-ing, S + V2 (Past Simple) | S + was/were + V-ing when + S + V2",
        "uzbekMeaning": "O'tmishda davom etayotgan harakat fonida boshqa qisqa harakatning to'satdan sodir bo'lishi",
        "explanation": "Past Continuous o'tmishda ma'lum bir vaqtda davom etayotgan uzoq fon harakatini (I was studying in the library), Past Simple esa o'sha paytda sodir bo'lgan qisqa harakatni (a friend called me) bildiradi. 'While' odatda davomli harakat oldidan, 'when' esa qisqa harakat oldidan keladi.",
        "ieltsRelevance": "Speaking Part 2 hikoyalarida ('Describe an interesting journey or experience') o'tmish voqealariga jonli fon yaratishda asosiy vosita.",
        "academicExamples": [
            {
                "sentence": "While I was preparing for my high school graduation, I decided to pursue computer science.",
                "translation": "Maktab bitiruv imtihonlariga tayyorlanayotgan vaqtimda men kompyuter fanlari bo'yicha o'qishga qaror qildim.",
                "context": "Speaking"
            },
            {
                "sentence": "Between 2010 and 2015, while urban populations were increasing rapidly, rural migration declined.",
                "translation": "2010 va 2015 yillar oralig'ida shahar aholisi tez sur'atda o'sayotgan bir paytda, qishloq migratsiyasi kamaydi.",
                "context": "Task 1"
            },
            {
                "sentence": "When the government introduced the new environmental policy, emissions were already reaching critical levels.",
                "translation": "Hukumat yangi ekologik siyosatni joriy qilganida, zaharli chiqindilar allaqachon xavfli darajaga yetayotgan edi.",
                "context": "Task 2"
            }
        ],
        "commonMistakes": [
            {
                "incorrect": "While I walked in the park, it was starting to rain.",
                "correct": "While I was walking in the park, it started to rain.",
                "explanation": "Uzoq fon harakati 'was walking' (Continuous), qisqa boshlanish esa 'started' (Simple) bo'ladi."
            },
            {
                "incorrect": "When I was young, I was playing football every day.",
                "correct": "When I was young, I played football every day.",
                "explanation": "O'tmishdagi doimiy takroriy odatlar uchun Past Continuous emas, Past Simple ishlatiladi."
            }
        ],
        "quizQuestions": [
            {
                "question": "While international delegates _______ the agreement, a major protest broke out outside.",
                "options": ["were discussing", "discussed", "are discussing", "have discussed"],
                "correctAnswer": "were discussing",
                "explanation": "'While' bilan o'tmishda davom etayotgan ko'plik fon harakati (delegates were discussing) ishlatiladi."
            },
            {
                "question": "The power supply suddenly failed when researchers _______ crucial statistical calculations.",
                "options": ["were conducting", "conducted", "have conducted", "are conducting"],
                "correctAnswer": "were conducting",
                "explanation": "'When' qisqa harakatni kiritganda, ikkinchi qismda davom etayotgan fon jarayoni (were conducting) bo'ladi."
            }
        ]
    },
    {
        "id": "ielts_a2_02_present_perfect_experience",
        "level": "A2",
        "title": "Unit 42: Present Perfect (just, already, yet, ever, never)",
        "category": "Present Perfect (A2)",
        "structure": "S + have/has + (just/already) + V3 | S + have/has not + V3 + yet | Have/Has + S + ever + V3?",
        "uzbekMeaning": "Natijasi hozirgi paytga bog'liq bo'lgan yoki yaqinda sodir bo'lgan tajribalar",
        "explanation": "Present Perfect harakatning aniq qachon sodir bo'lganini emas, balki uning natijasi hozirgi paytda mavjudligini yoki kishining hayotiy tajribasini (I have visited Paris twice) ifodalaydi. 'Just' — hozirgina, 'already' — allaqachon, 'yet' — hali (inkor va so'roqda), 'ever' — umringizda (so'roqda), 'never' — hech qachon ma'nosini beradi.",
        "ieltsRelevance": "Speaking Part 1 va Part 3 da o'z hayotiy tajribalaringiz, o'qigan kitoblaringiz va ko'rgan mamlakatlaringiz haqida tabiiy gapirish uchun muhim.",
        "academicExamples": [
            {
                "sentence": "Modern medical research has already eradicated several infectious diseases.",
                "translation": "Zamonaviy tibbiy tadqiqotlar bir nechta yuqumli kasalliklarni allaqachon yo'q qildi.",
                "context": "Task 2"
            },
            {
                "sentence": "Have you ever considered studying at a foreign university?",
                "translation": "Xorijiy universitetda tahsil olish haqida hech o'ylab ko'rganmisiz?",
                "context": "Speaking"
            },
            {
                "sentence": "The municipal council has not implemented the recycling scheme yet.",
                "translation": "Shahar kengashi qayta ishlash dasturini hali joriy qilmadi.",
                "context": "Task 2"
            }
        ],
        "commonMistakes": [
            {
                "incorrect": "I have visited London two years ago.",
                "correct": "I visited London two years ago. / I have visited London.",
                "explanation": "'Two years ago', 'yesterday', 'in 2020' kabi aniq o'tgan vaqt ko'rsatkichlari bilan Present Perfect ishlatilmaydi, Past Simple kerak."
            },
            {
                "incorrect": "She already finished her dissertation.",
                "correct": "She has already finished her dissertation.",
                "explanation": "Britaniya akademik ingliz tilida 'already' bilan Present Perfect (has finished) ishlatiladi."
            }
        ],
        "quizQuestions": [
            {
                "question": "Technological innovation _______ the way people communicate globally.",
                "options": ["has fundamentally changed", "fundamentally changed", "have fundamentally changed", "is fundamentally changing"],
                "correctAnswer": "has fundamentally changed",
                "explanation": "'Innovation' birlik ot, hozirgi natijani ifodalash uchun 'has fundamentally changed' to'g'ri."
            },
            {
                "question": "The local authorities have not completed the subway extension _______.",
                "options": ["yet", "already", "just", "ever"],
                "correctAnswer": "yet",
                "explanation": "Inkor gaplarning oxirida 'hali' ma'nosida faqat 'yet' ishlatiladi."
            }
        ]
    },
    {
        "id": "ielts_a2_03_future_forms",
        "level": "A2",
        "title": "Unit 43: Future Intentions & Predictions (will vs be going to vs V-ing)",
        "category": "Future Expressions (A2)",
        "structure": "will + V (spontaneous/prediction) | be going to + V (prior plan/evidence) | am/is/are + V-ing (arrangement)",
        "uzbekMeaning": "Kelasi zamon shakllari: Spontan qaror, aniq reja va qat'iy kelishuvlar",
        "explanation": "Kelajakni ifodalashda uchta asosiy farq mavjud: 1) 'will' — suhbat paytida qabul qilingan qaror (I'll help you) yoki shaxsiy fikr/bashorat (I think it will rain); 2) 'be going to' — oldindan o'ylangan niyat (I am going to take IELTS) yoki ko'z oldingizdagi dalilga asoslangan bashorat (Look at the clouds, it's going to rain); 3) Present Continuous — vaqti va joyi aniq kelishilgan tadbirlar (I am meeting my professor at 3 PM tomorrow).",
        "ieltsRelevance": "Speaking Part 1 da o'z kelajak maqsadlaringizni tushuntirishda va Task 2 da kelajak oqibatlarini modellashtirishda xatosiz gapirishga yordam beradi.",
        "academicExamples": [
            {
                "sentence": "If greenhouse emissions persist, global temperatures are going to rise significantly.",
                "translation": "Agar issiqxona gazlari saqlanib qolsa, global harorat sezilarli darajada ko'tariladi.",
                "context": "Task 2"
            },
            {
                "sentence": "After completing my undergraduate degree, I am going to apply for a Master's scholarship.",
                "translation": "Bakalavr diplomini olgach, men magistratura stipendiyasiga ariza topshirmoqchiman.",
                "context": "Speaking"
            },
            {
                "sentence": "Experts anticipate that automation will transform the manufacturing sector.",
                "translation": "Mutaxassislar avtomatlashtirish ishlab chiqarish sohasini tubdan o'zgartiradi deb hisoblashadi.",
                "context": "Task 2"
            }
        ],
        "commonMistakes": [
            {
                "incorrect": "Tomorrow I will meet the university dean at 10 AM.",
                "correct": "Tomorrow I am meeting the university dean at 10 AM.",
                "explanation": "Aniq vaqt va kishi bilan kelishilgan rasmiy uchrashuvlar uchun Present Continuous ma'qul."
            },
            {
                "incorrect": "I think artificial intelligence is going to replace teachers.",
                "correct": "I think artificial intelligence will replace teachers.",
                "explanation": "'I think', 'probably', 'I believe' kabi fikriy taxminlar bilan 'will' fe'li ishlatiladi."
            }
        ],
        "quizQuestions": [
            {
                "question": "Look at the budget deficit figures. The project _______ running out of capital.",
                "options": ["is going to end up", "will end up", "ends up", "is ending up"],
                "correctAnswer": "is going to end up",
                "explanation": "Ko'z o'ngidagi aniq faktik dalil (Look at...) asosidagi bashorat uchun 'is going to' to'g'ri."
            },
            {
                "question": "I haven't booked my flights yet, but I think I _______ next Thursday.",
                "options": ["will travel", "am travelling", "travel", "was travelling"],
                "correctAnswer": "will travel",
                "explanation": "'I think' va aniq rejasiz taxminiy qaror uchun 'will travel' to'g'ri."
            }
        ]
    },
    {
        "id": "ielts_a2_04_modals_ability_advice",
        "level": "A2",
        "title": "Unit 44: Modals of Ability & Advice (can, could, should, may)",
        "category": "Modal Verbs (A2)",
        "structure": "S + can / could / should / may + Base Verb (Inkor: cannot / couldn't / shouldn't / may not)",
        "uzbekMeaning": "Qobiliyat, ruxsat, ehtimollik va foydali maslahat beruvchi modal fe'llar",
        "explanation": "Modal fe'llardan keyin 'to' qo'yilmaydi (can do, NOT can to do) va 3-shaxsda -s qo'shilmaydi. 'Can' — hozirgi jismoniy yoki aqliy qobiliyat (I can speak three languages); 'could' — o'tmishdagi umumiy qobiliyat (I could read at age four); 'should' — maslahat va to'g'ri yo'l (Students should review regularly); 'may' — ehtimollik yoki rasmiy ruxsat (This may lead to complications).",
        "ieltsRelevance": "Writing Task 2 insholarida hukumat va jismoniy shaxslarga tavsiyalar berishda ('Governments should subsidize solar energy') doimiy ishlatiladi.",
        "academicExamples": [
            {
                "sentence": "Governments should allocate more budgetary resources toward healthcare infrastructure.",
                "translation": "Hukumatlar sog'liqni saqlash infratuzilmasiga ko'proq byudjet mablag'larini ajratishlari lozim.",
                "context": "Task 2"
            },
            {
                "sentence": "Excessive reliance on private vehicles can exacerbate urban traffic congestion.",
                "translation": "Shaxsiy transport vositalariga haddan tashqari tayanish shahar tirbandligini kuchaytirishi mumkin.",
                "context": "Task 2"
            },
            {
                "sentence": "In my previous job, I could interact with clients from diverse cultural backgrounds.",
                "translation": "Oldingi ishimda men turli xil madaniyatlarga mansub mijozlar bilan muloqot qila olar edim.",
                "context": "Speaking"
            }
        ],
        "commonMistakes": [
            {
                "incorrect": "The administration should to improve public transport.",
                "correct": "The administration should improve public transport.",
                "explanation": "Modal fe'llardan (should, can, could, must) keyin 'to' zarrachasi qo'yilmaydi."
            },
            {
                "incorrect": "He cans speak English fluently.",
                "correct": "He can speak English fluently.",
                "explanation": "Modal fe'llarga 3-shaxsda 's' qo'shilmaydi."
            }
        ],
        "quizQuestions": [
            {
                "question": "Educational institutions _______ provide psychological counselling for stressed students.",
                "options": ["should", "should to", "ought", "must to"],
                "correctAnswer": "should",
                "explanation": "Maslahat berishda 'should + Base verb' (should provide) to'g'ri formuladir."
            },
            {
                "question": "Before the digital revolution, library users _______ only access physical archives.",
                "options": ["could", "can", "may", "should"],
                "correctAnswer": "could",
                "explanation": "O'tmishdagi qobiliyat va imkoniyat uchun 'could' ishlatiladi."
            }
        ]
    },
    {
        "id": "ielts_a2_05_comparatives_superlatives",
        "level": "A2",
        "title": "Unit 45: Comparatives & Superlatives in Data Comparison",
        "category": "Adjectives & Adverbs (A2)",
        "structure": "Qiyosiy: adj + -er than / more + adj + than | Orttirma: the + adj + -est / the most + adj",
        "uzbekMeaning": "Sifat va ravishlarning qiyosiy va orttirma darajalari (Ko'rsatkichlarni taqqoslash)",
        "explanation": "Bir bo'g'inli sifatlarga -er / -est qo'shiladi (higher, the highest; faster, the fastest). Ikki yoki undan ortiq bo'g'inlilarga more / the most qo'shiladi (more significant, the most significant). Noto'g'ri sifatlar: good -> better -> best; bad -> worse -> worst; far -> further -> furthest. Kuchaytirgichlar: much higher, far more expensive, slightly lower.",
        "ieltsRelevance": "Writing Task 1 grafiklari va diagrammalarining 80% mazmuni aynan qiyosiy taqqoslashlar ustiga quriladi.",
        "academicExamples": [
            {
                "sentence": "Renewable energy production was considerably higher in 2020 than in the previous decade.",
                "translation": "2020 yilda qayta tiklanadigan energiya ishlab chiqarish oldingi o'n yillikka qaraganda ancha yuqori bo'ldi.",
                "context": "Task 1"
            },
            {
                "sentence": "The United Kingdom was the most popular destination among international scholars.",
                "translation": "Birlashgan Qirollik xalqaro talabalar orasida eng ommabop yo'nalish bo'ldi.",
                "context": "Task 1"
            },
            {
                "sentence": "Living in rural areas is generally far less stressful than residing in a metropolis.",
                "translation": "Qishloqda yashash odatda megapolisda yashashdan ancha kamroq stresslidir.",
                "context": "Task 2"
            }
        ],
        "commonMistakes": [
            {
                "incorrect": "The expenditure was more higher in Canada.",
                "correct": "The expenditure was much higher in Canada.",
                "explanation": "Qiyosiy darajadagi '-er' qo'shimchasi bilan birga 'more' ishlatilmaydi; uning o'rniga 'much' yoki 'far' qo'yiladi."
            },
            {
                "incorrect": "This method is the most best solution.",
                "correct": "This method is the best solution.",
                "explanation": "'Best' o'zi orttirma daraja bo'lgani sababli 'most' so'ziga ehtiyoj yo'q."
            }
        ],
        "quizQuestions": [
            {
                "question": "The unemployment rate in region A was _______ than that recorded in region B.",
                "options": ["substantially lower", "more lower", "lower much", "the lowest"],
                "correctAnswer": "substantially lower",
                "explanation": "Qiyosiy daraja (lower) oldidan kuchaytiruvchi ravish 'substantially lower' to'g'ri keladi."
            },
            {
                "question": "Car manufacturing was _______ industry sector in the region during 2022.",
                "options": ["the most profitable", "more profitable", "most profitable", "profitablest"],
                "correctAnswer": "the most profitable",
                "explanation": "Orttirma darajada artikl bilan birga 'the most profitable' qo'llanadi."
            }
        ]
    },
    {
        "id": "ielts_a2_06_quantifiers_countability",
        "level": "A2",
        "title": "Unit 46: Countable vs Uncountable Nouns & Quantifiers",
        "category": "Nouns & Quantifiers (A2)",
        "structure": "Sanaladigan: many / few / a few / a number of + Plural | Sanalmaydigan: much / little / a little / an amount of",
        "uzbekMeaning": "Sanaladigan va sanalmaydigan otlar hamda ularga mos miqdor so'zlari",
        "explanation": "Sanaladigan otlar (students, cars, problems) ko'plikda -s oladi va 'many/few' bilan keladi. Sanalmaydigan otlar (information, advice, research, pollution, traffic) ko'plikda -s OLMAYDI va 'much/little' bilan ishlatiladi. 'Few' va 'little' deyarli yo'q (salbiy), 'a few' va 'a little' esa ozgina bo'lsa ham yetarli (ijobiy) ma'noni beradi.",
        "ieltsRelevance": "Writing Task 1 va 2 da eng ko'p ball yo'qotiladigan 'informations', 'advices', 'researches' kabi dag'al xatolarning oldini oladi.",
        "academicExamples": [
            {
                "sentence": "The survey provided valuable information regarding consumer spending habits.",
                "translation": "So'rovnoma iste'molchilarning xarajat odatlari bo'yicha qimmatli ma'lumotlarni taqdim etdi.",
                "context": "Task 1"
            },
            {
                "sentence": "A substantial amount of research has examined the impact of screen time on youth.",
                "translation": "Ekran qarshisida o'tkazilgan vaqtning yoshlarga ta'sirini ko'plab tadqiqotlar o'rgangan.",
                "context": "Task 2"
            },
            {
                "sentence": "Few individuals possess the patience required for lifelong academic inquiry.",
                "translation": "Umrbod ilmiy izlanish uchun zarur bo'lgan sabr-toqatga kamdan-kam insonlar ega.",
                "context": "Task 2"
            }
        ],
        "commonMistakes": [
            {
                "incorrect": "The professor gave me several useful advices and informations.",
                "correct": "The professor gave me several pieces of useful advice and information.",
                "explanation": "'Advice' va 'information' sanalmaydigan otlar bo'lib, ularga hech qachon 's' qo'shilmaydi."
            },
            {
                "incorrect": "The chart illustrates the amount of students who graduated.",
                "correct": "The chart illustrates the number of students who graduated.",
                "explanation": "Talabalar sanaladigan ot bo'lgani sababli 'amount of' emas, 'number of students' ishlatiladi."
            }
        ],
        "quizQuestions": [
            {
                "question": "A substantial _______ of electricity was generated via wind turbines.",
                "options": ["amount", "number", "few", "many"],
                "correctAnswer": "amount",
                "explanation": "'Electricity' sanalmaydigan ot bo'lgani uchun 'amount' to'g'ri tanlovdir."
            },
            {
                "question": "Recent scientific _______ indicates that sleep deprivation impairs cognitive memory.",
                "options": ["research", "researches", "a research", "some researches"],
                "correctAnswer": "research",
                "explanation": "'Research' sanalmaydigan ot bo'lib, ko'plik qo'shimchasini olmaydi."
            }
        ]
    },
    {
        "id": "ielts_a2_07_defining_relative_clauses",
        "level": "A2",
        "title": "Unit 47: Defining Relative Clauses (who, which, that, where)",
        "category": "Relative Clauses (A2)",
        "structure": "Person + who/that + Verb | Thing + which/that + Verb | Place + where + Subject + Verb",
        "uzbekMeaning": "Aniqlovchi ergash gaplar (Kimki, qaysiki, qayerdaki — otni aniqlashtirish)",
        "explanation": "Defining relative clause qaysi shaxs, narsa yoki joy haqida gap ketayotganini aniqlab beradi va uni gapdan olib tashlasak, gapning asosiy ma'nosi yo'qoladi. Insonlar uchun 'who' yoki 'that', narsalar uchun 'which' yoki 'that', joylar uchun 'where', egalik uchun 'whose' ishlatiladi. Ushbu ergash gaplar vergul bilan AJRATILMAYDI.",
        "ieltsRelevance": "Oddiy sodda gaplarni bir-biriga bog'lab, IELTS mezonidagi 'Complex sentence' talabini bajarishning eng qulay yo'li.",
        "academicExamples": [
            {
                "sentence": "Students who cultivate consistent study routines achieve higher exam scores.",
                "translation": "Doimiy o'qish tartibiga amal qiladigan talabalar yuqoriroq imtihon ballariga erishadilar.",
                "context": "Task 2"
            },
            {
                "sentence": "Countries that heavily invest in solar infrastructure reduce long-term carbon footprints.",
                "translation": "Quyosh infratuzilmasiga katta sarmoya kirituvchi davlatlar uzoq muddatli uglerod izini kamaytiradi.",
                "context": "Task 2"
            },
            {
                "sentence": "The library where I conduct my research offers comprehensive academic databases.",
                "translation": "Men tadqiqot olib boradigan kutubxona keng qamrovli akademik ma'lumotlar bazasini taqdim etadi.",
                "context": "Speaking"
            }
        ],
        "commonMistakes": [
            {
                "incorrect": "The people which work in healthcare are very dedicated.",
                "correct": "The people who work in healthcare are very dedicated.",
                "explanation": "Insonlar uchun 'which' emas, 'who' yoki 'that' ishlatiladi."
            },
            {
                "incorrect": "The city where I visited last summer was beautiful.",
                "correct": "The city that / which I visited last summer was beautiful.",
                "explanation": "'Visited' fe'lining to'ldiruvchisi shahar bo'lgani sababli bu yerda 'where' emas, 'which/that' qo'llanadi."
            }
        ],
        "quizQuestions": [
            {
                "question": "Individuals _______ regularly engage in volunteering exhibit greater empathy.",
                "options": ["who", "which", "whose", "where"],
                "correctAnswer": "who",
                "explanation": "'Individuals' odamlarni bildirgani uchun 'who' nisbiy olmoshi to'g'ri."
            },
            {
                "question": "The university laboratory _______ the experiments were conducted is fully certified.",
                "options": ["where", "which", "who", "whom"],
                "correctAnswer": "where",
                "explanation": "Tajribalar o'tkazilgan 'joyni' ko'rsatgani sababli 'where' ishlatiladi."
            }
        ]
    },
    {
        "id": "ielts_a2_08_first_conditional",
        "level": "A2",
        "title": "Unit 48: First Conditional & Future Reality (If + present, will + V)",
        "category": "Conditionals (A2)",
        "structure": "If + Present Simple, Subject + will / can / may + Base Verb (Yoki aksincha: S + will + V if + Present Simple)",
        "uzbekMeaning": "Birinchi tur shart mayli (Kelajakdagi real shart va uning mantiqiy oqibati)",
        "explanation": "First Conditional kelajakda amalga oshishi mumkin bo'lgan real shart-sharoitlar va ularning oqibatlarini ifodalaydi. MUHIM QOIDA: 'If' bo'lgan qismda hech qachon 'will' ISHLATILMAYDI (If it rains, NOT If it will rain). Asosiy qismda esa 'will', 'can', 'may' yoki 'must' ishlatiladi.",
        "ieltsRelevance": "IELTS Writing Task 2 insholarida chora-tadbirlar samaradorligini tushuntirishda ('If schools mandate physical education, obesity will decline') asosiy vosita.",
        "academicExamples": [
            {
                "sentence": "If governments subsidize public transit, commuters will rely less on private automobiles.",
                "translation": "Agar hukumatlar jamoat transportini subsidiyalashtirsa, yo'lovchilar shaxsiy avtomobillarga kamroq tayanadi.",
                "context": "Task 2"
            },
            {
                "sentence": "If a student practices speaking daily, their phonetic fluency will improve markedly.",
                "translation": "Agar talaba har kuni gapirishni mashq qilsa, uning fonetik ravonligi sezilarli darajada yaxshilanadi.",
                "context": "Speaking"
            },
            {
                "sentence": "Municipal pollution levels will escalate if strict vehicle emission limits are not enforced.",
                "translation": "Agar avtomobil chiqindilariga qat'iy cheklovlar qo'yilmasa, shahar ifloslanishi darajasi oshadi.",
                "context": "Task 2"
            }
        ],
        "commonMistakes": [
            {
                "incorrect": "If it will rain tomorrow, the outdoor festival will be postponed.",
                "correct": "If it rains tomorrow, the outdoor festival will be postponed.",
                "explanation": "'If' ergash gapida kelasi zamon ma'nosi bo'lsa ham faqat Present Simple qo'yiladi."
            },
            {
                "incorrect": "If the price of tuition increases, fewer people can to afford higher education.",
                "correct": "If the price of tuition increases, fewer people can afford higher education.",
                "explanation": "'Can' modalidan keyin 'to' qo'yilmaydi."
            }
        ],
        "quizQuestions": [
            {
                "question": "If authorities _______ cycling infrastructure, pedestrian safety will improve.",
                "options": ["expand", "will expand", "expanded", "are expanding"],
                "correctAnswer": "expand",
                "explanation": "'If' bilan boshlangan shart qismida Present Simple (expand) bo'lishi shart."
            },
            {
                "question": "Global sea levels _______ dramatically if Arctic ice continues to melt at current rates.",
                "options": ["will rise", "rise", "rose", "would rise"],
                "correctAnswer": "will rise",
                "explanation": "Real shartning kelajakdagi natijasi uchun asosiy gapda 'will rise' ishlatiladi."
            }
        ]
    },

    # =========================================================================
    # LEVEL B1: INTERMEDIATE IELTS ESSENTIALS (9 TOPICS)
    # =========================================================================
    {
        "id": "ielts_b1_01_second_conditional",
        "level": "B1",
        "title": "Unit 49: Second Conditional (Hypothetical Situations)",
        "category": "Conditionals (B1)",
        "structure": "If + Past Simple (were for all subjects), Subject + would / could / might + Base Verb",
        "uzbekMeaning": "Ikkinchi tur shart mayli (Hozirgi va kelajakdagi noreal, tasavvuriy farazlar)",
        "explanation": "Second Conditional hozirgi paytda imkonsiz yoki haqiqatga zid bo'lgan tasavvuriy farazlarni (If I had more time, I would study medicine) ifodalaydi. O'tmish zamon shakli (Past Simple) ishlatilsa-da, ma'nosi HOZIRGI yoki KELASI zamonga tegishlidir. Rasmiy va akademik uslubda 'was' o'rniga barcha shaxslar uchun 'were' ishlatiladi (If I were you, If the government were to act).",
        "ieltsRelevance": "Speaking Part 3 da faraziy savollarga javob berishda va Task 2 da alternativ siyosat oqibatlarini tahlil qilishda kerak.",
        "academicExamples": [
            {
                "sentence": "If renewable technology were cheaper, developing nations would adopt it far more swiftly.",
                "translation": "Agar qayta tiklanuvchi texnologiyalar arzonroq bo'lganida, rivojlanayotgan davlatlar uni ancha tezroq qabul qilgan bo'lar edi.",
                "context": "Task 2"
            },
            {
                "sentence": "If I were granted the opportunity to study abroad, I would specialize in artificial intelligence.",
                "translation": "Agar menga chet elda o'qish imkoniyati berilsa, men sun'iy intellekt bo'yicha ixtisoslashar edim.",
                "context": "Speaking"
            },
            {
                "sentence": "Metropolitan traffic congestion would diminish significantly if public transit were free.",
                "translation": "Agar jamoat transporti bepul bo'lganida, megapolislardagi tirbandlik sezilarli darajada kamaygan bo'lardi.",
                "context": "Task 2"
            }
        ],
        "commonMistakes": [
            {
                "incorrect": "If I would have more money, I would travel worldwide.",
                "correct": "If I had more money, I would travel worldwide.",
                "explanation": "'If' qismida 'would' ishlatilmaydi; uning o'rniga Past Simple (had) qo'yiladi."
            },
            {
                "incorrect": "If the government was investing in schools, literacy would rise.",
                "correct": "If the government were investing in schools, literacy would rise.",
                "explanation": "Akademik shart gaplarda uchinchi shaxs birlik uchun 'were' qo'llash standart hisoblanadi."
            }
        ],
        "quizQuestions": [
            {
                "question": "If educational software _______ universally accessible, educational disparities would shrink.",
                "options": ["were", "is", "will be", "would be"],
                "correctAnswer": "were",
                "explanation": "Second Conditional qoidasiga ko'ra 'If' qismida 'were' (Past subjunctive) bo'ladi."
            },
            {
                "question": "City residents _______ far healthier if municipal parks were integrated into urban planning.",
                "options": ["would be", "will be", "are", "have been"],
                "correctAnswer": "would be",
                "explanation": "Ikkinchi shartning asosiy natija qismida 'would + base verb' (would be) bo'ladi."
            }
        ]
    },
    {
        "id": "ielts_b1_02_third_conditional",
        "level": "B1",
        "title": "Unit 50: Third Conditional (Past Regrets & Unreal Past)",
        "category": "Conditionals (B1)",
        "structure": "If + Past Perfect (had + V3), Subject + would / could / might have + V3",
        "uzbekMeaning": "Uchinchi tur shart mayli (O'tib ketgan voqealar uchun noreal shart va afsus)",
        "explanation": "Third Conditional o'tmishda sodir bo'lmagan voqeaning noreal sharti va uning o'tmishdagi ehtimoliy natijasini ifodalaydi. Voqea allaqachon tugagan, uni o'zgartirib bo'lmaydi: 'If I had studied harder, I would have passed the exam' (lekin o'qimaganman va imtihondan o'tmaganman).",
        "ieltsRelevance": "Speaking Part 2/3 da o'tmishdagi muhim qarorlarni tanqidiy tahlil qilishda va Task 2 da tarixiy xatolarni yoritishda yuqori ball olib beradi.",
        "academicExamples": [
            {
                "sentence": "If the authorities had warned the populace earlier, the casualty rate would have been substantially lower.",
                "translation": "Agar hokimiyat aholini ertaroq ogohlantirganida, talafotlar ko'lami ancha past bo'lgan bo'lar edi.",
                "context": "Task 2"
            },
            {
                "sentence": "Had I not chosen this academic discipline, I might have pursued international law.",
                "translation": "Agar ushbu yo'nalishni tanlamaganimda, men xalqaro huquq bo'yicha ketgan bo'lishim mumkin edi.",
                "context": "Speaking"
            },
            {
                "sentence": "The industrial recession could have been mitigated if fiscal regulators had intervened promptly.",
                "translation": "Agar moliya nazoratchilari o'z vaqtida aralashganida, sanoat inqirozining oldi olingan bo'lardi.",
                "context": "Task 2"
            }
        ],
        "commonMistakes": [
            {
                "incorrect": "If I would have known about the deadline, I would have submitted on time.",
                "correct": "If I had known about the deadline, I would have submitted on time.",
                "explanation": "'If' qismida 'would have' emas, Past Perfect (had known) ishlatiladi."
            },
            {
                "incorrect": "If he had trained more, he would won the championship.",
                "correct": "If he had trained more, he would have won the championship.",
                "explanation": "Natija qismida 'would have + V3' (would have won) to'liq ishlatilishi shart."
            }
        ],
        "quizQuestions": [
            {
                "question": "If conservationists _______ the ecosystem earlier, the indigenous species might have survived.",
                "options": ["had protected", "protected", "would protect", "have protected"],
                "correctAnswer": "had protected",
                "explanation": "O'tmishdagi noreal shart uchun 'If + had + V3' (had protected) to'g'ri keladi."
            },
            {
                "question": "The catastrophic dam breach _______ if routine structural inspections had been conducted.",
                "options": ["could have been prevented", "could be prevented", "was prevented", "had prevented"],
                "correctAnswer": "could have been prevented",
                "explanation": "O'tmishdagi passiv natija: 'could have been prevented' (oldini olish mumkin bo'lardi)."
            }
        ]
    },
    {
        "id": "ielts_b1_03_mixed_conditionals",
        "level": "B1",
        "title": "Unit 51: Mixed Conditionals (Past Cause, Present Effect)",
        "category": "Conditionals (B1)",
        "structure": "If + had + V3 (Past Condition), Subject + would + Base Verb (Present Result)",
        "uzbekMeaning": "Aralash shart mayli (O'tmishdagi harakatning hozirgi paytdagi natijasi)",
        "explanation": "Mixed Conditional shart maylining ikki turini birlashtiradi: shart o'tmishda sodir bo'lgan (Past Perfect: If I had learned English in childhood), lekin uning natijasi ayni HOZIRGI paytda seziladi (Second conditional: I would not struggle with my career now). Bu tuzilma nomzodning grammatik tafakkuri chuqurligini ko'rsatadi.",
        "ieltsRelevance": "IELTS Writing Task 2 va Speaking Part 3 da Band 7.5–8.0 Grammatical Range talabini qanoatlantirish uchun oltin kalit.",
        "academicExamples": [
            {
                "sentence": "If the nation had invested in green technology decades ago, it would be carbon-neutral today.",
                "translation": "Agar mamlakat o'n yillar oldin yashil texnologiyaga sarmoya kiritganida, bugungi kunda u ugleroddan xoli bo'lar edi.",
                "context": "Task 2"
            },
            {
                "sentence": "If I had not practiced pronunciation rigorously, I would not speak so fluently now.",
                "translation": "Agar talaffuz ustida tinimsiz ishlamaganimda, hozir bunday ravon gapirmagan bo'lar edim.",
                "context": "Speaking"
            },
            {
                "sentence": "If urban planners had anticipated population growth, modern cities would not suffer from chronic congestion.",
                "translation": "Agar shaharsozlar aholi o'sishini oldindan hisobga olganida, zamonaviy shaharlar surunkali tirbandlikdan aziyat chekmasdi.",
                "context": "Task 2"
            }
        ],
        "commonMistakes": [
            {
                "incorrect": "If I had passed the exam yesterday, I would have been a university student now.",
                "correct": "If I had passed the exam yesterday, I would be a university student now.",
                "explanation": "Natija 'now' (hozirgi payt) ga tegishli bo'lgani uchun 'would have been' emas, 'would be' bo'ladi."
            }
        ],
        "quizQuestions": [
            {
                "question": "If ancient scientists _______ antibiotics, contemporary healthcare would be vastly different.",
                "options": ["had not discovered", "did not discover", "would not discover", "have not discovered"],
                "correctAnswer": "had not discovered",
                "explanation": "O'tmishdagi shart (had not discovered) hozirgi holat (would be) bilan bog'lanmoqda."
            },
            {
                "question": "If I had taken that computer science course in college, I _______ as a programmer today.",
                "options": ["would be working", "would have worked", "had worked", "will work"],
                "correctAnswer": "would be working",
                "explanation": "'Today' so'zi borligi sababli hozirgi davomli natija 'would be working' to'g'ri keladi."
            }
        ]
    },
    {
        "id": "ielts_b1_04_used_to_be_used_to",
        "level": "B1",
        "title": "Unit 52: Used to, Would vs Be/Get used to",
        "category": "Habits & Adaptation (B1)",
        "structure": "used to + V (past habit/state) | would + V (past repeated action) | be/get used to + V-ing/Noun (accustomed to)",
        "uzbekMeaning": "O'tmishdagi odat vs Yangi sharoitga ko'nikkanlik va moslashish jarayoni",
        "explanation": "1) 'Used to + infinitive' — o'tmishda bo'lgan, lekin hozir yo'q odat yoki holat (I used to live in Bukhara). 2) 'Would + verb' — o'tmishda takrorlanuvchi xatti-harakatlar (holat fe'llari bilan ishlatilmaydi). 3) 'Be used to + V-ing' — biror narsaga o'rganib qolganlik (I am used to waking up early). 4) 'Get used to + V-ing' — ko'nikish jarayoni (It took me months to get used to living alone).",
        "ieltsRelevance": "Speaking Part 1 ('How has your hometown changed?') va Part 2 da eski va yangi hayot tarzini qiyoslashda eng ko'p ishlatiladigan vosita.",
        "academicExamples": [
            {
                "sentence": "Consumers used to rely on brick-and-mortar stores, whereas digital marketplaces now dominate commerce.",
                "translation": "Iste'molchilar avvallari do'konlarga borishga odatlangan bo'lsa, endilikda raqamli bozorlar savdoda ustunlik qilmoqda.",
                "context": "Task 2"
            },
            {
                "sentence": "When studying in the UK, it took me several weeks to get used to the unpredictable British climate.",
                "translation": "Buyuk Britaniyada o'qiyotganimda, kutilmagan ingliz iqlimiga ko'nikishim uchun bir necha hafta kerak bo'ldi.",
                "context": "Speaking"
            },
            {
                "sentence": "Prior to industrialization, communities would gather around local artisan workshops.",
                "translation": "Sanoatlashuvdan avval aholi mahalliy hunarmandlar ustaxonalariga to'planishar edi.",
                "context": "Task 2"
            }
        ],
        "commonMistakes": [
            {
                "incorrect": "I am used to wake up early every morning.",
                "correct": "I am used to waking up early every morning.",
                "explanation": "'Be used to' iborasidagi 'to' predlog bo'lib, undan keyin gerundiy (waking up) kelishi shart."
            },
            {
                "incorrect": "I use to play tennis when I was a child.",
                "correct": "I used to play tennis when I was a child.",
                "explanation": "O'tmishdagi odat uchun 'used to' (d harfi bilan) yozilishi shart."
            }
        ],
        "quizQuestions": [
            {
                "question": "International students often find it challenging to _______ independent self-study routines.",
                "options": ["get used to", "used to", "use to", "be use to"],
                "correctAnswer": "get used to",
                "explanation": "Yangi narsaga ko'nikish 'jarayoni' uchun 'get used to' to'g'ri keladi."
            },
            {
                "question": "Decades ago, households _______ far fewer electronic appliances than they possess currently.",
                "options": ["used to own", "were used to own", "used to owning", "got used to own"],
                "correctAnswer": "used to own",
                "explanation": "O'tmishdagi holat uchun 'used to own' (egalik qilar edi) to'g'ri formuladir."
            }
        ]
    },
    {
        "id": "ielts_b1_05_modals_deduction_present_past",
        "level": "B1",
        "title": "Unit 53: Modals of Deduction (must, can't, might, must have done)",
        "category": "Modal Verbs (B1)",
        "structure": "Hozirgi: must / can't / might + Base Verb | O'tgan: must / can't / might + have + V3",
        "uzbekMeaning": "Xulosa va mantiqiy ehtimollik modallari (Shubhasiz shunday bo'lsa kerak / Bo'lishi mumkin emas)",
        "explanation": "Faktlarga asoslangan mantiqiy xulosa chiqarishda ishlatiladi: 1) 'Must' — 95% ishonch (He works 14 hours a day; he must be exhausted); 2) 'Can't' — mutlaqo imkonsiz (The test results are negative; he can't be ill); 3) 'Might/May/Could' — 50% ehtimol (Prices might rise). O'tgan zamon uchun 'have + V3' qo'shiladi: 'The ancient civilization must have collapsed due to severe drought'.",
        "ieltsRelevance": "Writing Task 2 va Speaking Part 3 da ilmiy farazlar qilish va hodisalar sababini tahlil qilishda talab etiladi.",
        "academicExamples": [
            {
                "sentence": "The unprecedented spike in fossil fuel demand must have contributed to the atmospheric warming trends.",
                "translation": "Qazilma yoqilg'iga bo'lgan misli ko'rilmagan talab shubhasiz atmosferaning isish tendensiyalariga hissa qo'shgan bo'lishi kerak.",
                "context": "Task 2"
            },
            {
                "sentence": "Given their distinct fossil morphology, these species cannot have inhabited the same geographical era.",
                "translation": "Ularning qoldiqlaridagi aniq farqlarni hisobga olsak, bu turlar bir xil geografik davrda yashagan bo'lishi mumkin emas.",
                "context": "Task 2"
            },
            {
                "sentence": "The candidate appeared exceptionally calm during the interview; she must have prepared thoroughly.",
                "translation": "Nomzod intervyuda juda xotirjam ko'rindi; u puxta tayyorgarlik ko'rgan bo'lsa kerak.",
                "context": "Speaking"
            }
        ],
        "commonMistakes": [
            {
                "incorrect": "The economy is struggling, so inflation must to be rising.",
                "correct": "The economy is struggling, so inflation must be rising.",
                "explanation": "'Must' modal fe'lidan keyin 'to' qo'yilmaydi."
            },
            {
                "incorrect": "He didn't answer the phone yesterday; he must be sleeping.",
                "correct": "He didn't answer the phone yesterday; he must have been sleeping.",
                "explanation": "Kecha sodir bo'lgan voqea xulosasi uchun o'tgan modal zamon 'must have been sleeping' kerak."
            }
        ],
        "quizQuestions": [
            {
                "question": "The data discrepancies are too severe; the survey sample _______ thoroughly verified.",
                "options": ["cannot have been", "must not have been", "couldn't be", "might have not"],
                "correctAnswer": "cannot have been",
                "explanation": "O'tmishdagi qat'iy inkor mantiqiy xulosasi uchun 'cannot have been' (tekshirilgan bo'lishi aslo mumkin emas) to'g'ri."
            },
            {
                "question": "Scientists speculate that ancient agricultural communities _______ extensive irrigation networks.",
                "options": ["might have engineered", "might engineer", "must to engineer", "can have engineered"],
                "correctAnswer": "might have engineered",
                "explanation": "O'tmishdagi ilmiy taxmin uchun 'might have engineered' (qurgan bo'lishi ehtimoldan xoli emas) ishlatiladi."
            }
        ]
    },
    {
        "id": "ielts_b1_06_passive_modals_perfect",
        "level": "B1",
        "title": "Unit 54: Passive Voice with Modals & Perfect Tenses",
        "category": "Passive Voice (B1)",
        "structure": "Modal Passive: Modal + be + V3 | Perfect Passive: have/has been + V3 | Past Perfect: had been + V3",
        "uzbekMeaning": "Modallar va murakkab zamonlarda majhul nisbat (Ish-harakatning o'ziga urg'u berish)",
        "explanation": "Akademik ingliz tilida shaxs (I, we, they) o'rniga harakat va natija birinchi o'ringa chiqadi: 'Air pollution can be reduced' (odamlar kamaytirishi mumkin emas, balki ifloslanish kamaytirilishi mumkin). Perfect zamonlarda 'been' kiritiladi: 'Considerable progress has been achieved'.",
        "ieltsRelevance": "Writing Task 1 da jarayon (process diagram) tavsifida va Task 2 da xolis akademik uslub (Objective Academic Tone) yaratishda eng muhim qoidadir.",
        "academicExamples": [
            {
                "sentence": "Significant progress has been made in the development of mRNA vaccine technology.",
                "translation": "mRNA vaksina texnologiyasini rivojlantirishda salmoqli yutuqlarga erishildi.",
                "context": "Task 2"
            },
            {
                "sentence": "Stringent legislative measures must be implemented to curtail industrial effluent.",
                "translation": "Sanoat chiqindilarini cheklash uchun qat'iy qonuniy choralar amalga oshirilishi shart.",
                "context": "Task 2"
            },
            {
                "sentence": "In the diagram, raw cocoa beans are roasted before being crushed into powder.",
                "translation": "Diagrammada xom kakao donalari kukun holiga maydalanishidan oldin qovuriladi.",
                "context": "Task 1"
            }
        ],
        "commonMistakes": [
            {
                "incorrect": "The problem can easily solve by education.",
                "correct": "The problem can easily be solved by education.",
                "explanation": "Majhul nisbatda modal fe'ldan so'ng 'be + V3' (be solved) bo'lishi shart."
            },
            {
                "incorrect": "Several new hospitals have constructed in the city.",
                "correct": "Several new hospitals have been constructed in the city.",
                "explanation": "Kasalxonalar o'zini o'zi qurmaydi, shuning uchun 'have been constructed' (qurildi) bo'lishi kerak."
            }
        ],
        "quizQuestions": [
            {
                "question": "Renewable energy quotas _______ by local municipalities to meet climate obligations.",
                "options": ["must be enforced", "must enforce", "must been enforced", "must to be enforced"],
                "correctAnswer": "must be enforced",
                "explanation": "'Modal + be + V3' qoidasiga ko'ra 'must be enforced' to'g'ri majhul shakldir."
            },
            {
                "question": "Over 500 academic articles _______ on neural networks over the past decade.",
                "options": ["have been published", "have published", "has been published", "were publish"],
                "correctAnswer": "have been published",
                "explanation": "'Articles' ko'plik ot, hozirgacha erishilgan natija uchun 'have been published' to'g'ri."
            }
        ]
    },
    {
        "id": "ielts_b1_07_reported_speech_indirect",
        "level": "B1",
        "title": "Unit 55: Reported Speech & Academic Sourcing",
        "category": "Reported Speech (B1)",
        "structure": "S + asserted / maintained / concluded + that + [zamon siljishi: Present -> Past | Past -> Past Perfect]",
        "uzbekMeaning": "O'zlashtirma gap va ilmiy qarashlarni havola qilish san'ati",
        "explanation": "Birovning fikrini yoki tadqiqot natijasini ifodalashda zamonlar bir pog'ona orqaga siljiydi (Backshift): Present Simple -> Past Simple; Present Perfect -> Past Perfect; will -> would; can -> could. Akademik insholarda oddiy 'said' o'rniga nufuzli fe'llar ishlatiladi: argue, contend, assert, demonstrate, conclude.",
        "ieltsRelevance": "Writing Task 2 da turli qarashlarni solishtirishda ('Opponents argue that...', 'Economists maintained that...') inshoga ilmiy salobat beradi.",
        "academicExamples": [
            {
                "sentence": "Sociologists argued that excessive smartphone usage had eroded face-to-face interpersonal skills.",
                "translation": "Sotsiologlar smartfondan haddan ortiq foydalanish yuzma-yuz muloqot ko'nikmalarini yemirganini ta'kidladilar.",
                "context": "Task 2"
            },
            {
                "sentence": "The lead researcher confirmed that the clinical trials had yielded promising results.",
                "translation": "Bosh tadqiqotchi klinik sinovlar umidbaxsh natijalar berganini tasdiqladi.",
                "context": "Task 2"
            },
            {
                "sentence": "My mentor advised me that regular public speaking would boost my professional confidence.",
                "translation": "Ustozim muntazam omma oldida so'zlash professional ishonchimni oshirishini maslahat berdi.",
                "context": "Speaking"
            }
        ],
        "commonMistakes": [
            {
                "incorrect": "He explained me that the university was closed.",
                "correct": "He explained to me that the university was closed. / He told me that...",
                "explanation": "'Explain' fe'lidan so'ng kishi kelsa 'to' qo'yiladi (explained to me) yoki 'told me' ishlatiladi."
            },
            {
                "incorrect": "The economist stated that interest rates will decrease next month.",
                "correct": "The economist stated that interest rates would decrease the following month.",
                "explanation": "O'tgan zamondagi xabarda 'will' so'zi 'would' ga siljishi shart."
            }
        ],
        "quizQuestions": [
            {
                "question": "The statistical report demonstrated that renewable investments _______ exponentially over five years.",
                "options": ["had grown", "have grown", "grow", "will grow"],
                "correctAnswer": "had grown",
                "explanation": "'Demonstrated' o'tgan zamon bo'lgani sababli, undan oldin sodir bo'lgan o'sish 'had grown' (Past Perfect) bo'ladi."
            },
            {
                "question": "Participants confirmed that they _______ completely satisfied with the training modules.",
                "options": ["were", "are", "will be", "have been"],
                "correctAnswer": "were",
                "explanation": "'Confirmed' o'tgan zamon bo'lgani sababli 'are' o'tmishga siljib 'were' bo'ladi."
            }
        ]
    },
    {
        "id": "ielts_b1_08_gerunds_vs_infinitives",
        "level": "B1",
        "title": "Unit 56: Gerunds vs Infinitives in Complex Sentences",
        "category": "Verb Complementation (B1)",
        "structure": "Gerund (V-ing): enjoy, suggest, avoid, risk, consider | Infinitive (to-V): decide, manage, attempt, tend, aim",
        "uzbekMeaning": "Harakat nomi (Gerundiy) va Noaniq shakl (Infinitiv) qoidalari",
        "explanation": "Ingliz tilida bitta fe'ldan keyin ikkinchi fe'l kelganda qat'iy qoida amal qiladi: ba'zi fe'llar faqat gerundiy talab qiladi (avoid doing, suggest investing), boshqalari esa faqat to-infinitiv talab qiladi (decide to pursue, fail to comply). Predloglardan (about, of, in, without) keyin HAR DOIM gerundiy (V-ing) keladi.",
        "ieltsRelevance": "IELTS yozma va og'zaki nutqida grammatik aniqlik (Accuracy) uchun juda zarur.",
        "academicExamples": [
            {
                "sentence": "Governments must avoid imposing disproportionate tariffs on essential pharmaceutical imports.",
                "translation": "Hukumatlar zarur farmatsevtika importiga mutanosib bo'lmagan bojlarni joriy qilishdan saqlanishlari kerak.",
                "context": "Task 2"
            },
            {
                "sentence": "Urban authorities aim to construct pedestrianized zones throughout the historic city centre.",
                "translation": "Shahar ma'muriyati tarixiy shahar markazi bo'ylab piyodalar hududlarini barpo etishni maqsad qilgan.",
                "context": "Task 2"
            },
            {
                "sentence": "By implementing stricter recycling policies, municipalities can conserve valuable landfill capacity.",
                "translation": "Qat'iyroq qayta ishlash siyosatini qo'llash orqali shahar hokimiyatlari qimmatli poligon hajmini tejashi mumkin.",
                "context": "Task 2"
            }
        ],
        "commonMistakes": [
            {
                "incorrect": "The minister suggested to launch a public consultation.",
                "correct": "The minister suggested launching a public consultation.",
                "explanation": "'Suggest' fe'lidan so'ng bevosita infinitiv kelmaydi, faqat gerundiy (suggest launching) yoki 'suggest that' keladi."
            },
            {
                "incorrect": "She succeeded in to pass the examination.",
                "correct": "She succeeded in passing the examination.",
                "explanation": "'In' predlogi bo'lgani sababli undan keyin 'passing' gerundiysi kelishi shart."
            }
        ],
        "quizQuestions": [
            {
                "question": "Policymakers should consider _______ tax credits to corporations adopting solar power.",
                "options": ["offering", "to offer", "offer", "offered"],
                "correctAnswer": "offering",
                "explanation": "'Consider' fe'li doimo gerundiy (considering offering) bilan ishlatiladi."
            },
            {
                "question": "The university committee managed _______ sufficient funding for the new laboratory.",
                "options": ["to secure", "securing", "secure", "secured"],
                "correctAnswer": "to secure",
                "explanation": "'Manage' fe'li o'zidan so'ng to-infinitiv (manage to secure) talab qiladi."
            }
        ]
    },
    {
        "id": "ielts_b1_09_cohesion_concession",
        "level": "B1",
        "title": "Unit 57: Cohesive Devices & Concession (Although, Despite, In spite of)",
        "category": "Cohesion & Contrast (B1)",
        "structure": "Although / Even though / Whereas + Clause | Despite / In spite of + Noun Phrase / V-ing",
        "uzbekMeaning": "Zidlovchi va to'siqsiz bog'lovchilar (Garchi ... bo'lsa ham, ...ga qaramasdan)",
        "explanation": "Insholarda qarama-qarshi fikrlarni muvozanatlash uchun ishlatiladi. 'Although/Even though' dan keyin to'liq gap (Subject + Verb) keladi: 'Although electric cars are expensive, they save money'. 'Despite/In spite of' dan keyin esa gap emas, balki ot yoki gerundiy keladi: 'Despite their high purchase price, electric cars save money'.",
        "ieltsRelevance": "Writing Task 2 Coherence & Cohesion (CC) bo'limida 7.0+ ball olishning eng asosiy poydevori.",
        "academicExamples": [
            {
                "sentence": "Although digital connectivity fosters global communication, it can inadvertently diminish local community bonds.",
                "translation": "Garchi raqamli aloqa global muloqotni rivojlantirsa-da, u bilvosita mahalliy jamoaviy aloqalarni zaiflashtirishi mumkin.",
                "context": "Task 2"
            },
            {
                "sentence": "Despite facing severe financial constraints, the research team persevered with their vaccine trials.",
                "translation": "Jiddiy moliyaviy qiyinchiliklarga qaramasdan, tadqiqot guruhi vaksina sinovlarini qat'iyat bilan davom ettirdi.",
                "context": "Task 2"
            },
            {
                "sentence": "In spite of rigorous preparation, I felt somewhat apprehensive before the IELTS speaking session.",
                "translation": "Puxta tayyorgarlikka qaramay, IELTS speaking suhbati oldidan biroz hayajonlandim.",
                "context": "Speaking"
            }
        ],
        "commonMistakes": [
            {
                "incorrect": "Despite of the heavy traffic, we arrived on schedule.",
                "correct": "Despite the heavy traffic, we arrived on schedule. / In spite of the heavy traffic...",
                "explanation": "'Despite' so'zidan keyin 'of' ishlatilmaydi; 'in spite of' da esa 'of' bo'ladi."
            },
            {
                "incorrect": "Although the economy improved, but unemployment remained high.",
                "correct": "Although the economy improved, unemployment remained high.",
                "explanation": "'Although' bor gapda 'but' bog'lovchisi ortiqcha hisoblanadi (ikkalasi birga kelmaydi)."
            }
        ],
        "quizQuestions": [
            {
                "question": "_______ extensive public awareness campaigns, tobacco consumption remains prevalent.",
                "options": ["Despite", "Although", "Whereas", "Even though"],
                "correctAnswer": "Despite",
                "explanation": "'Extensive campaigns' ot birikmasi bo'lgani uchun 'Despite' to'g'ri tanlovdir ('Although' to'liq gap talab qiladi)."
            },
            {
                "question": "_______ automated machinery increases manufacturing velocity, it eliminates assembly line jobs.",
                "options": ["While", "In spite of", "Despite", "Because of"],
                "correctAnswer": "While",
                "explanation": "To'liq gap ('automated machinery increases velocity') oldidan zidlovchi ma'noda 'While' to'g'ri."
            }
        ]
    },

    # =========================================================================
    # LEVEL B2: UPPER-INTERMEDIATE BAND 7.0–7.5 POWER PACK (9 TOPICS)
    # =========================================================================
    {
        "id": "ielts_b2_01_adverbial_clauses",
        "level": "B2",
        "title": "Unit 58: Complex Adverbial Clauses (Reason, Purpose, Result, Concession)",
        "category": "Complex Syntax (B2 Academy)",
        "structure": "Maqsad: so that / in order that + clause | Sabab: inasmuch as / given that | Natija: so + adj + that",
        "uzbekMeaning": "Murakkab hol ergash gaplar (Maqsad, mantiqiy sabab va natija munosabatlari)",
        "explanation": "Akademik tahlilda sabab-oqibatni oddiy 'because' va 'so' dan yuqori darajada bayon qilish vositalari: 'In order that developing nations may prosper' (maqsad); 'Given that natural resources are finite' (sabab); 'Urban sprawl expanded to such an extent that arable land was lost' (natija).",
        "ieltsRelevance": "Task 2 insholarida dalillarni chuqur asoslash va Grammatical Range bo'yicha Band 7.5 talabiga javob beradi.",
        "academicExamples": [
            {
                "sentence": "Governments must regulate emissions in order that future generations may inherit a viable biosphere.",
                "translation": "Kelajak avlodlar yashashga yaroqli biosferaga ega bo'lishlari uchun hukumatlar chiqindilarni tartibga solishlari shart.",
                "context": "Task 2"
            },
            {
                "sentence": "Given that automation displaces repetitive manual labour, educational curriculums must prioritize creativity.",
                "translation": "Avtomatlashtirish bir xil qo'l mehnatini siqib chiqarayotganini hisobga olsak, o'quv dasturlari ijodkorlikka ustuvorlik berishi zarur.",
                "context": "Task 2"
            },
            {
                "sentence": "The price of oil fluctuated so erratically that renewable investments surged dramatically.",
                "translation": "Neft narxi shunchalik beqaror tebranganki, natijada qayta tiklanuvchi manbalarga investitsiyalar keskin oshdi.",
                "context": "Task 1"
            }
        ],
        "commonMistakes": [
            {
                "incorrect": "We invested heavily so that to enhance product durability.",
                "correct": "We invested heavily in order to enhance product durability. / so that we could enhance...",
                "explanation": "'So that' dan keyin to'liq gap (we could enhance) keladi, infinitiv uchun 'in order to' ishlatiladi."
            }
        ],
        "quizQuestions": [
            {
                "question": "Fiscal authorities lowered interest rates _______ commercial investment might stimulate economic recovery.",
                "options": ["in order that", "in order to", "because of", "owing to"],
                "correctAnswer": "in order that",
                "explanation": "'In order that' to'liq gap va modal fe'l (might stimulate) bilan keladi."
            },
            {
                "question": "_______ metropolitan rents have escalated steeply, young professionals are migrating to suburban peripheries.",
                "options": ["Given that", "In spite of", "So that", "Despite"],
                "correctAnswer": "Given that",
                "explanation": "Sababni mantiqiy asoslash uchun 'Given that' (inobatga olganda) to'g'ri."
            }
        ]
    },
    {
        "id": "ielts_b2_02_advanced_relatives_prep",
        "level": "B2",
        "title": "Unit 59: Non-defining Relative Clauses with Prepositions (in which, to whom)",
        "category": "Complex Syntax (B2 Academy)",
        "structure": "Noun, Preposition + which / whom / whose + Clause, Main Clause",
        "uzbekMeaning": "Predlogli ajratilgan aniqlovchi ergash gaplar (Undaki, unda esa, qaysikim)",
        "explanation": "Og'zaki tilda predlog gap oxiriga ketadi (the house which I lived in), biroq akademik ingliz tilida predlog nisbiy olmoshdan oldinga chiqariladi (the house in which I resided). Bular vergul bilan ajratiladi va inshoga oliy akademik uslub bag'ishlaydi: 'the framework within which policies operate', 'stakeholders to whom public figures are accountable'.",
        "ieltsRelevance": "IELTS Writing Task 2 va Task 1 da Band 7.5+ murakkab akademik jumlalar tuzishning eng nufuzli sintaktik usulidir.",
        "academicExamples": [
            {
                "sentence": "Higher education establishes a structured environment in which analytical reasoning can flourish.",
                "translation": "Oliy ta'lim tahliliy tafakkur rivojlanishi mumkin bo'lgan tizimli muhitni yaratadi.",
                "context": "Task 2"
            },
            {
                "sentence": "The survey identified several emerging sectors, of which biotechnology demonstrated the most robust growth.",
                "translation": "So'rovnoma bir nechta yangi sohalarni aniqladi, ularning ichida biotexnologiya eng barqaror o'sishni ko'rsatdi.",
                "context": "Task 1"
            },
            {
                "sentence": "Scholars to whom research grants were allocated successfully published their empirical findings.",
                "translation": "Tadqiqot grantlari ajratilgan olimlar o'zlarining empirik xulosalarini muvaffaqiyatli nashr etdilar.",
                "context": "Task 2"
            }
        ],
        "commonMistakes": [
            {
                "incorrect": "The framework in that organizations operate must be transparent.",
                "correct": "The framework in which organizations operate must be transparent.",
                "explanation": "Predlogdan keyin hech qachon 'that' kelmaydi; faqat 'which' (narsalar) yoki 'whom' (insonlar) ishlatiladi."
            }
        ],
        "quizQuestions": [
            {
                "question": "The global symposium established a treaty, the implications _______ remain contested.",
                "options": ["of which", "in that", "for whose", "to which"],
                "correctAnswer": "of which",
                "explanation": "'The implications of which' (uning oqibatlari) shartnoma oqibatlarini bog'lash uchun to'g'ri sintaksisdir."
            },
            {
                "question": "Democratic societies rely on legal mechanisms _______ citizens can hold leaders accountable.",
                "options": ["through which", "through that", "whereby that", "in what"],
                "correctAnswer": "through which",
                "explanation": "'Mexanizmlar orqali' ma'nosida 'through which' akademik iborasi to'g'ri."
            }
        ]
    },
    {
        "id": "ielts_b2_03_future_continuous_perfect",
        "level": "B2",
        "title": "Unit 60: Future Continuous & Future Perfect in Data Forecasting",
        "category": "Future Tenses (B2 Academy)",
        "structure": "Future Continuous: will be + V-ing | Future Perfect: will have + V3 (by a specific milestone)",
        "uzbekMeaning": "Kelasi davomli va kelasi tugallangan zamonlar (Kelajak prognozlari va chegaralari)",
        "explanation": "Future Continuous kelajakda aniq belgilangan davrda davom etayotgan bo'ladigan jarayonni ko'rsatadi (In 2035, millions will be telecommuting). Future Perfect esa kelajakdagi ma'lum bir muddatgacha (by 2040, by the end of the century) ish-harakat allaqachon yakunlanib bo'lishini bildiradi: 'By 2050, solar capacity will have doubled'.",
        "ieltsRelevance": "Writing Task 1 da kelajak yillariga (2030, 2040) oid chiziqli grafiklar va diagrammalarni tahlil qilishda beqiyos.",
        "academicExamples": [
            {
                "sentence": "By 2040, urban planners project that renewable energy will have superseded fossil fuels as the principal power source.",
                "translation": "Shaharsozlar 2040 yilga kelib qayta tiklanadigan energiya asosiy energiya manbai sifatida qazilma yoqilg'ilarni siqib chiqargan bo'lishini prognoz qilmoqdalar.",
                "context": "Task 1"
            },
            {
                "sentence": "Throughout the coming decade, automation will be reshaping employment markets across industrialized nations.",
                "translation": "Kelgusi o'n yil davomida avtomatlashtirish sanoatlashgan davlatlardagi bandlik bozorlarini qayta shakllantirib turadi.",
                "context": "Task 2"
            },
            {
                "sentence": "By the time I complete my postgraduate dissertation, I will have acquired substantial research methodology expertise.",
                "translation": "Magistratura dissertatsiyamni yakunlagunimga qadar men salmoqli tadqiqot metodologiyasi tajribasini to'plagan bo'laman.",
                "context": "Speaking"
            }
        ],
        "commonMistakes": [
            {
                "incorrect": "By 2030, the global population will reach 8.5 billion.",
                "correct": "By 2030, the global population will have reached 8.5 billion.",
                "explanation": "'By + kelajak vaqt' chegarasi bilan Future Perfect (will have reached) ishlatilishi shart."
            }
        ],
        "quizQuestions": [
            {
                "question": "Statistical projections suggest that by mid-century, healthcare costs _______ twofold.",
                "options": ["will have multiplied", "will multiply", "are multiplying", "will be multiply"],
                "correctAnswer": "will have multiplied",
                "explanation": "'By mid-century' chegarasi kelasi tugallangan zamon (will have multiplied) ni talab qiladi."
            },
            {
                "question": "At this point in the decade, researchers _______ longitudinal trials on quantum encryption.",
                "options": ["will be conducting", "will have conducted", "conduct", "have conducted"],
                "correctAnswer": "will be conducting",
                "explanation": "Kelajakda davom etib turadigan jarayon uchun Future Continuous (will be conducting) to'g'ri."
            }
        ]
    },
    {
        "id": "ielts_b2_04_unreal_past_wishes",
        "level": "B2",
        "title": "Unit 61: Unreal Past & Hypothetical Desires (I wish, If only, It's time)",
        "category": "Hypothetical Syntax (B2 Academy)",
        "structure": "I wish / If only + Past Simple (present wish) | I wish + Past Perfect (past regret) | It is high time + S + V2",
        "uzbekMeaning": "Noreal o'tgan zamon va qat'iy talablar (Qaniydi..., ...vaqti allaqachon yetib keldi)",
        "explanation": "Hozirgi holatdan norozilik va orzuni bildirishda 'I wish / If only + Past Simple' qo'llanadi: 'I wish governments took climate change more seriously'. O'tmishdagi afsus uchun esa 'Past Perfect' ishlatiladi. 'It is high time + Subject + Past Simple' strukturasi kechiktirib bo'lmaydigan qat'iy jamoat talabini ifodalaydi: 'It is high time politicians addressed wealth inequality'.",
        "ieltsRelevance": "Speaking Part 3 va Writing Task 2 da jamiyatdagi kamchiliklarni kuchli emotsional va grammatik salmoq bilan ko'rsatish vositasi.",
        "academicExamples": [
            {
                "sentence": "It is high time international governing bodies enacted punitive sanctions against environmental polluters.",
                "translation": "Xalqaro boshqaruv organlari atrof-muhitni ifloslantiruvchilarga qarshi jazo choralarini qo'llash vaqti allaqachon yetib keldi.",
                "context": "Task 2"
            },
            {
                "sentence": "Many educators wish that standardized testing did not dictate the entirety of school curriculums.",
                "translation": "Ko'plab pedagoglar standartlashtirilgan testlar butun maktab o'quv dasturini belgilab bermasligini orzu qiladilar.",
                "context": "Task 2"
            },
            {
                "sentence": "I wish I had begun learning foreign languages during early childhood.",
                "translation": "Qaniydi men chet tillarini o'rganishni erta bolalik chog'imdan boshlaganimda edi.",
                "context": "Speaking"
            }
        ],
        "commonMistakes": [
            {
                "incorrect": "It is high time the government takes action.",
                "correct": "It is high time the government took action.",
                "explanation": "'It is high time' iborasidan keyin fe'l albatta Past Simple (took) shaklida bo'lishi shart."
            }
        ],
        "quizQuestions": [
            {
                "question": "Conservation biologists contend that it is high time humanity _______ carbon emissions.",
                "options": ["curbed", "curbs", "curbing", "would curb"],
                "correctAnswer": "curbed",
                "explanation": "'It is high time + Subject + Past Simple' (curbed) formulasiga asosan to'g'ri."
            },
            {
                "question": "I wish educational policymakers _______ more attention to practical vocational competencies.",
                "options": ["paid", "pay", "will pay", "are paying"],
                "correctAnswer": "paid",
                "explanation": "Hozirgi paytga oid orzu-istak uchun 'wish + Past Simple' (paid) ishlatiladi."
            }
        ]
    },
    {
        "id": "ielts_b2_05_passive_reporting_verbs",
        "level": "B2",
        "title": "Unit 62: Passive Reporting Structures (It is widely argued that..., Subject is said to...)",
        "category": "Objective Hedging (B2 Academy)",
        "structure": "It is + V3 (believed / claimed / recognized) + that + Clause | Subject + is/are + V3 + to + Base Verb / have V3",
        "uzbekMeaning": "Neytral akademik bayonotlar (Keng e'tirof etilishicha..., ...deb hisoblanadi)",
        "explanation": "Akademik yozuvda 'Men o'ylayman' yoki 'Hamma biladiki' deb shaxsiy hissiyotga berilish taqiqlanadi. Uning o'rniga passiv xabar shakllari qo'llanadi: 1) 'It is widely contended that higher education enhances economic resilience'; 2) 'Electric vehicles are estimated to account for 40% of future sales'. Bu usul ilmiy xolislik (Hedging) darajasini ko'taradi.",
        "ieltsRelevance": "Writing Task 2 insho kirish qismida parafraz qilishda (Paraphrasing the prompt) eng obro'li sintaktik vositadir.",
        "academicExamples": [
            {
                "sentence": "It is widely acknowledged that socioeconomic deprivation hinders academic achievement.",
                "translation": "Ijtimoiy-iqtisodiy yetishmovchilik akademik muvaffaqiyatga to'sqinlik qilishi keng e'tirof etiladi.",
                "context": "Task 2"
            },
            {
                "sentence": "Early multilingualism is believed to stimulate neurodevelopmental flexibility in adolescents.",
                "translation": "Ilk ko'ptillilik o'smirlarda asab tizimi rivojlanishining moslashuvchanligini rag'batlantirishi ishoniladi.",
                "context": "Task 2"
            },
            {
                "sentence": "The ancient trade route is reported to have facilitated unprecedented intercultural exchange.",
                "translation": "Qadimiy savdo yo'li misli ko'rilmagan madaniyatlararo almashinuvga zamin yaratgani aytiladi.",
                "context": "Task 2"
            }
        ],
        "commonMistakes": [
            {
                "incorrect": "It is believe that technology isolates individuals.",
                "correct": "It is believed that technology isolates individuals.",
                "explanation": "'It is' dan keyin fe'lning 3-shakli (believed) qo'yilishi shart."
            }
        ],
        "quizQuestions": [
            {
                "question": "Urban density _______ to foster greater resource efficiency and reduced transit times.",
                "options": ["is understood", "understands", "is understanding", "understood"],
                "correctAnswer": "is understood",
                "explanation": "'Subject + is understood to + Base verb' to'g'ri passiv xabar strukturasidir."
            },
            {
                "question": "It is increasingly _______ that artificial intelligence necessitates stringent regulatory oversight.",
                "options": ["recognized", "recognize", "recognizing", "recognition"],
                "correctAnswer": "recognized",
                "explanation": "'It is + V3 (recognized) + that' to'g'ri formuladir."
            }
        ]
    },
    {
        "id": "ielts_b2_06_participle_clauses_economy",
        "level": "B2",
        "title": "Unit 63: Participle Clauses for Sentence Economy & Variety",
        "category": "Sentence Reduction (B2 Academy)",
        "structure": "Present Participle: V-ing (Active time/reason) | Past Participle: V3 (Passive reason) | Perfect: Having + V3",
        "uzbekMeaning": "Sifatdoshli o'ramlar orqali gaplarni ixchamlashtirish va uslubiy boyitish",
        "explanation": "Ikkita gapni bitta qilib, keraksiz bog'lovchilarni tushirib qoldirish san'ati: 'Because researchers examined the figures, they concluded...' -> 'Having examined the figures, researchers concluded...'. Active harakatda V-ing (Recognizing the urgency, leaders acted), Passive harakatda V3 (Built in the 19th century, the bridge stands firm).",
        "ieltsRelevance": "Writing Task 1 va 2 da gaplar tuzilishini qisqartirib, insho so'z sonini tejash va murakkab sintaksis ko'rsatish vositasi.",
        "academicExamples": [
            {
                "sentence": "Having analyzed the demographic data, analysts identified an unprecedented influx of young professionals.",
                "translation": "Demografik ma'lumotlarni tahlil qilib chiqqach, tahlilchilar yosh mutaxassislarning misli ko'rilmagan oqimini aniqladilar.",
                "context": "Task 1"
            },
            {
                "sentence": "Driven by escalating living costs, numerous urbanites are relocating to secondary regional towns.",
                "translation": "Yashash xarajatlarining oshib borishidan kelib chiqib, ko'plab shahar aholisi viloyat shaharlariga ko'chib o'tmoqda.",
                "context": "Task 2"
            },
            {
                "sentence": "Facing intense international competition, corporations are investing aggressively in automation.",
                "translation": "Kuchli xalqaro raqobatga duch kelib, korporatsiyalar avtomatlashtirishga katta mablag' kiritmoqdalar.",
                "context": "Task 2"
            }
        ],
        "commonMistakes": [
            {
                "incorrect": "Having arrived at the airport, the storm cancelled the flight.",
                "correct": "Having arrived at the airport, the passengers discovered their flight was cancelled.",
                "explanation": "Dangling participle xatosi: sifatdoshning egasi asosiy gapning egasi bilan bir xil bo'lishi shart (bo'ron aeroportga yetib kelmagan, yo'lovchilar kelgan)."
            }
        ],
        "quizQuestions": [
            {
                "question": "_______ the preliminary laboratory results, the panel sanctioned further clinical development.",
                "options": ["Having validated", "Validated having", "After validate", "Validated"],
                "correctAnswer": "Having validated",
                "explanation": "Oldinroq tugallangan faol harakat uchun 'Having + V3' (Having validated) ishlatiladi."
            },
            {
                "question": "_______ by persistent inflation, consumer purchasing power diminished notably.",
                "options": ["Constrained", "Constraining", "Having constrained", "To constrain"],
                "correctAnswer": "Constrained",
                "explanation": "Passiv sabab (inflyatsiya tomonidan cheklangan holda) uchun Past Participle (Constrained) to'g'ri."
            }
        ]
    },
    {
        "id": "ielts_b2_07_double_comparatives",
        "level": "B2",
        "title": "Unit 64: Double Comparatives for Correlative Trends",
        "category": "Comparative Syntax (B2 Academy)",
        "structure": "The + comparative adjective/adverb ..., the + comparative adjective/adverb ...",
        "uzbekMeaning": "Proporsional qiyoslash (Qanchalik ko'p bo'lsa, shunchalik kuchayadi)",
        "explanation": "Ikki hodisaning bir-biriga to'g'ridan-to'g'ri bog'liqligini ifodalovchi eng nafis tuzilma: 'The higher the educational standard, the lower the incidence of poverty'. Ikkala qismda ham albatta 'the' artikli va qiyosiy daraja (more, higher, less, greater) qo'llaniladi.",
        "ieltsRelevance": "Writing Task 1 dagi bog'liq tendensiyalarni va Task 2 dagi sabab-oqibat xulosalarini nihoyatda chiroyli ifodalaydi.",
        "academicExamples": [
            {
                "sentence": "The more accessible tertiary education becomes, the more robust a nation's economic productivity will be.",
                "translation": "Oliy ta'lim qanchalik ommabop bo'lsa, mamlakatning iqtisodiy unumdorligi shunchalik mustahkam bo'ladi.",
                "context": "Task 2"
            },
            {
                "sentence": "In the chart, the older the demographic cohort, the higher the rate of home ownership observed.",
                "translation": "Grafikda demografik guruh qanchalik keksa bo'lsa, uy-joyga egalik qilish darajasi shunchalik yuqori bo'lgan.",
                "context": "Task 1"
            },
            {
                "sentence": "The greater the investment in municipal transit, the fewer emissions urban centers generate.",
                "translation": "Shahar transportiga qanchalik ko'p sarmoya kiritilsa, shahar markazlari shunchalik kamroq chiqindi chiqaradi.",
                "context": "Task 2"
            }
        ],
        "commonMistakes": [
            {
                "incorrect": "More you practice, better you become.",
                "correct": "The more you practice, the better you become.",
                "explanation": "Ikkala qismda ham 'the' artikli majburiydir."
            }
        ],
        "quizQuestions": [
            {
                "question": "The more sophisticated artificial intelligence becomes, _______ ethical scrutiny it demands.",
                "options": ["the greater", "greater", "the more great", "most"],
                "correctAnswer": "the greater",
                "explanation": "Proporsional qiyosiy formulada ikkinchi tomonda ham 'the + comparative' (the greater) bo'ladi."
            },
            {
                "question": "The _______ the air quality index, the higher the hospital admission rates.",
                "options": ["poorer", "the poorer", "poor", "more poor"],
                "correctAnswer": "poorer",
                "explanation": "'The' boshida turgani uchun qiyosiy sifat 'poorer' qo'yiladi."
            }
        ]
    },
    {
        "id": "ielts_b2_08_academic_quantifiers_data",
        "level": "B2",
        "title": "Unit 65: Advanced Quantifiers & Data Approximation in Task 1",
        "category": "Data Representation (B2 Academy)",
        "structure": "An overwhelming majority of / A negligible fraction of / Roughly threefold / In excess of / A minority of",
        "uzbekMeaning": "Akademik miqdor ko'rsatkichlari va foizlarni sifatli so'zlar bilan ifodalash",
        "explanation": "Writing Task 1 da raqamlarni faqat '75%' yoki '5%' deb shunchaki ko'chirish Band 6.0 darajasidir. Band 7.5+ olish uchun raqamlar so'zlar bilan qiyoslanadi: 75% -> 'three-quarters / a vast majority'; 5% -> 'a negligible proportion / a tiny fraction'; 300% -> 'a threefold increase / tripled'.",
        "ieltsRelevance": "Writing Task 1 Lexical Resource va Task Achievement bo'yicha eng yuqori ball olib beruvchi maxsus vositadir.",
        "academicExamples": [
            {
                "sentence": "An overwhelming majority of survey respondents favored flexible hybrid working arrangements.",
                "translation": "So'rovnoma qatnashchilarining mutlaq ko'pchiligi moslashuvchan gibrid ish tartibini ma'qulladilar.",
                "context": "Task 1"
            },
            {
                "sentence": "Expenditure on public recreation constituted a negligible fraction of the municipal budget, at merely 2%.",
                "translation": "Aholi dam olishiga sarflangan xarajatlar shahar byudjetining atigi 2% ini tashkil etib, sezilarsiz ulushni egalladi.",
                "context": "Task 1"
            },
            {
                "sentence": "Between 2005 and 2020, solar electricity capacity experienced an approximate fourfold surge.",
                "translation": "2005 va 2020 yillar oralig'ida quyosh energiyasi quvvati taxminan to'rt barobar o'sishni boshdan kechirdi.",
                "context": "Task 1"
            }
        ],
        "commonMistakes": [
            {
                "incorrect": "A massive percent of people used bicycles.",
                "correct": "A substantial proportion of citizens utilized bicycles.",
                "explanation": "'Percent' so'zi oldidan 'massive' noo'rin; 'a substantial proportion/percentage' akademik hisoblanadi."
            }
        ],
        "quizQuestions": [
            {
                "question": "Hydroelectric generation accounted for _______ of national energy consumption in 2018.",
                "options": ["approximately one-third", "about one-three", "around third", "near one-three"],
                "correctAnswer": "approximately one-third",
                "explanation": "33% ko'rsatkichini ifodalash uchun 'approximately one-third' (taxminan uchdan bir qismi) to'g'ri."
            },
            {
                "question": "Only a _______ of surveyed consumers expressed dissatisfaction with digital public services.",
                "options": ["negligible minority", "little number", "tiny amount of", "few fraction"],
                "correctAnswer": "negligible minority",
                "explanation": "Sanaladigan insonlar uchun 'a negligible minority' (sezilarsiz ozchilik) to'g'ri akademik iboradir."
            }
        ]
    },
    {
        "id": "ielts_b2_09_causative_structures",
        "level": "B2",
        "title": "Unit 66: Causative Structures (Have/Get something done & Make/Let)",
        "category": "Causative Verbs (B2 Academy)",
        "structure": "have / get + Object + V3 (past participle) | make / have + Person + Base Verb | let + Person + Base Verb",
        "uzbekMeaning": "Kausativ konstruktsiyalar (Boshqalar orqali bajartirish yoki majburlash)",
        "explanation": "Ish-harakatni shaxsan o'zi bajarmasdan, boshqa mutaxassis yoki tashkilot orqali bajartirishni ifodalaydi: 'The government had the highway renovated' (hukumat o'zi ta'mirlamadi, mutaxassislarga ta'mirlattirdi). 'Make someone do' — majburlash; 'let someone do' — ruxsat berish (to'siz keladi).",
        "ieltsRelevance": "Task 2 insholarida davlatning institutsional va tizimli xizmatlarini yoritishda foydalaniladi.",
        "academicExamples": [
            {
                "sentence": "Municipalities should have hazardous industrial facilities audited by independent environmental bodies.",
                "translation": "Shahar hokimiyatlari xavfli sanoat obyektlarini mustaqil ekologik organlar tomonidan tekshirtirishlari lozim.",
                "context": "Task 2"
            },
            {
                "sentence": "Stringent vehicle emissions inspections make motorists maintain their catalytic converters properly.",
                "translation": "Avtomobil chiqindilarini qat'iy tekshirish haydovchilarni o'z katalizatorlarini to'g'ri sozlashga majbur qiladi.",
                "context": "Task 2"
            },
            {
                "sentence": "Flexible curriculum policies let university students tailor their academic trajectories.",
                "translation": "Moslashuvchan o'quv reja siyosati universitet talabalariga o'zlarining akademik yo'nalishlarini moslashtirishga imkon beradi.",
                "context": "Task 2"
            }
        ],
        "commonMistakes": [
            {
                "incorrect": "The administration made companies to pay higher environmental fines.",
                "correct": "The administration made companies pay higher environmental fines.",
                "explanation": "'Make' kausativ fe'lidan keyin 'to' qo'yilmaydi (made companies pay)."
            }
        ],
        "quizQuestions": [
            {
                "question": "Public health agencies must have clinical trial data _______ by independent researchers.",
                "options": ["reviewed", "to review", "review", "reviewing"],
                "correctAnswer": "reviewed",
                "explanation": "'Have + Object + V3' qoidasiga binoan 'reviewed' to'g'ri majhul kausativdir."
            },
            {
                "question": "Government regulations should make polluters _______ financial reparations for ecological damage.",
                "options": ["pay", "to pay", "paid", "paying"],
                "correctAnswer": "pay",
                "explanation": "'Make + Person + Base Verb' formulasida 'pay' to'ssiz ishlatiladi."
            }
        ]
    },

    # =========================================================================
    # LEVEL C1: ADVANCED ACADEMIC DISCOURSE (4 TOPICS)
    # =========================================================================
    {
        "id": "ielts_c1_01_ellipsis_substitution",
        "level": "C1",
        "title": "Unit 67: Ellipsis and Substitution in Cohesive Discourse",
        "category": "Advanced Discourse (C1 Academy)",
        "structure": "Substitution: that / those of + Noun | do so / such | Ellipsis: Auxiliary omission in coordinated clauses",
        "uzbekMeaning": "Elipsis va o'rnini bosish (Akademik matnda keraksiz so'z takrorini yo'qotish)",
        "explanation": "Yozma nutqda bir xil so'zlarni qayta-qayta takrorlash o'rniga 'that of' (birlik) va 'those of' (ko'plik) olmoshlari ishlatiladi: 'The population of Tokyo is larger than that of Paris' (the population of Paris emas). Shuningdek, fe'llar o'rniga 'do so' qo'llaniladi: 'If citizens wish to vote, they may do so digitally'.",
        "ieltsRelevance": "Writing Task 1 va 2 da Coherence & Cohesion (CC) bo'yicha Band 8.5–9.0 olishning oliy talablaridan biri.",
        "academicExamples": [
            {
                "sentence": "The ecological impact of air travel significantly surpasses that of electric rail systems.",
                "translation": "Havo qatnovining ekologik ta'siri elektr poyezdlari tizimlarinikidan sezilarli darajada oshadi.",
                "context": "Task 2"
            },
            {
                "sentence": "Should multinational corporations choose to diversify supply chains, they can do so without sacrificing profitability.",
                "translation": "Agar transmilliy korporatsiyalar ta'minot zanjirlarini diversifikatsiya qilishni istasalar, buni daromadlilikni qurbon qilmasdan amalga oshirishlari mumkin.",
                "context": "Task 2"
            },
            {
                "sentence": "Expenditures in the educational domain mirrored those observed in technological infrastructure.",
                "translation": "Ta'lim sohasidagi xarajatlar texnologik infratuzilmada kuzatilgan ko'rsatkichlarni aynan takrorladi.",
                "context": "Task 1"
            }
        ],
        "commonMistakes": [
            {
                "incorrect": "The climate in Spain is warmer than the climate in Scotland.",
                "correct": "The climate in Spain is warmer than that of Scotland.",
                "explanation": "'The climate' so'zini takrorlamaslik uchun 'that of' olmoshi qo'llaniladi."
            }
        ],
        "quizQuestions": [
            {
                "question": "The renewable output figures for Germany far exceeded _______ recorded by neighboring territories.",
                "options": ["those", "that", "them", "these"],
                "correctAnswer": "those",
                "explanation": "'Figures' ko'plik bo'lgani sababli ularning o'rnini 'those' olmoshi bosadi."
            },
            {
                "question": "If participants wish to withdraw from the medical evaluation, they are entitled to _______ at any stage.",
                "options": ["do so", "do it so", "make so", "act so"],
                "correctAnswer": "do so",
                "explanation": "Avval zikr etilgan harakatni (withdraw) takrorlamaslik uchun 'do so' to'g'ri akademik iboradir."
            }
        ]
    },
    {
        "id": "ielts_c1_02_fronting_topicalisation",
        "level": "C1",
        "title": "Unit 68: Fronting & Topicalisation for Academic Salience",
        "category": "Stylistic Inversion (C1 Academy)",
        "structure": "Adverbial / Prepositional phrase + Verb + Subject | Adjective Phrase + be + Subject",
        "uzbekMeaning": "Topikalizatsiya (Mantiqiy asosiy tushunchani gap boshiga chiqarish orqali urg'u berish)",
        "explanation": "Gapning eng muhim qismini uning boshiga olib chiqish orqali matnga akademik vazminlik bag'ishlash: 'Particularly troubling is the proliferation of microplastics in aquatic fauna' (oddiy: The proliferation of microplastics is particularly troubling). 'Central to this discourse is the concept of distributive justice'.",
        "ieltsRelevance": "Writing Task 2 insho xulosalarida (Conclusion) va asosiy dalil boshida Band 8.5–9.0 darajasidagi salobatli sintaksis.",
        "academicExamples": [
            {
                "sentence": "Central to this philosophical debate is the unresolved tension between individual liberty and public safety.",
                "translation": "Ushbu falsafiy bahsning markazida shaxsiy erkinlik va jamoat xavfsizligi o'rtasidagi hal etilmagan ziddiyat turadi.",
                "context": "Task 2"
            },
            {
                "sentence": "Equally salient is the correlation between early childhood nutrition and long-term cognitive aptitude.",
                "translation": "Erta bolalikdagi ovqatlanish va uzoq muddatli aqliy salohiyat o'rtasidagi o'zaro bog'liqlik ham xuddi shunday muhimdir.",
                "context": "Task 2"
            },
            {
                "sentence": "Of paramount significance in the statistical overview was the sudden downturn in heavy manufacturing.",
                "translation": "Statistik sharhda eng katta ahamiyatga ega bo'lgan jihat og'ir ishlab chiqarishdagi to'satdan yuz bergan pasayish bo'ldi.",
                "context": "Task 1"
            }
        ],
        "commonMistakes": [
            {
                "incorrect": "Central to this debate it is the role of regulatory agencies.",
                "correct": "Central to this debate is the role of regulatory agencies.",
                "explanation": "Fronting tuzilishida 'it' olmoshi kiritilmaydi; fe'ldan so'ng bevosita ega (the role) keladi."
            }
        ],
        "quizQuestions": [
            {
                "question": "Particularly compelling _______ the arguments presented in favour of decentralised energy grids.",
                "options": ["are", "is", "being", "to be"],
                "correctAnswer": "are",
                "explanation": "Gapning egasi 'arguments' (ko'plik) bo'lgani sababli fe'l 'are' bo'lishi shart."
            },
            {
                "question": "Underpinning these technological breakthroughs _______ decades of government-funded research.",
                "options": ["is", "are", "have", "being"],
                "correctAnswer": "is",
                "explanation": "Gapning haqiqiy egasi 'decades of research' (tadqiqot — birlik) bo'lgani sababli 'is' to'g'ri."
            }
        ]
    },
    {
        "id": "ielts_c1_03_prepositional_collocations",
        "level": "C1",
        "title": "Unit 69: Advanced Prepositional Collocations in Academic Writing",
        "category": "Academic Collocations (C1 Academy)",
        "structure": "in terms of / by virtue of / in light of / with respect to / at the expense of / on the grounds that",
        "uzbekMeaning": "Murakkab predlogli akademik iboralar (Nuqtai nazaridan, tufayli, hisobiga)",
        "explanation": "Band 8.0+ Lexical Resource mezoniga erishish uchun so'zlar yakka holda emas, balki murakkab predlogli kolokatsiyalar bilan qo'llaniladi: 'by virtue of' — fazilati/tufayli; 'in light of' — ma'lumotlarni hisobga olgan holda; 'at the expense of' — boshqa narsa hisobiga/evaziga; 'on the grounds that' — ...degan asos bilan.",
        "ieltsRelevance": "Writing Task 1 va 2 da gaplar o'rtasida mustahkam, silliq va tabiiy akademik mantiqiy ko'prik yaratadi.",
        "academicExamples": [
            {
                "sentence": "Economic expansion should not be relentlessly pursued at the expense of ecological stability.",
                "translation": "Iqtisodiy o'sish ekologik barqarorlik hisobiga tinimsiz quvilishi kerak emas.",
                "context": "Task 2"
            },
            {
                "sentence": "In light of empirical evidence regarding climate change, carbon pricing mechanisms are justified.",
                "translation": "Iqlim o'zgarishiga oid empirik dalillar yorug'ida uglerod narxini belgilash mexanizmlari o'zini oqlaydi.",
                "context": "Task 2"
            },
            {
                "sentence": "With respect to gender representation, women accounted for a substantial proportion of managerial roles.",
                "translation": "Gender vakilligi nuqtai nazaridan, ayollar boshqaruv lavozimlarining salmoqli qismini egalladi.",
                "context": "Task 1"
            }
        ],
        "commonMistakes": [
            {
                "incorrect": "The proposal was rejected on the grounds because it lacked funding.",
                "correct": "The proposal was rejected on the grounds that it lacked funding.",
                "explanation": "'On the grounds that' iborasida 'because' ishlatilmaydi; 'that' dan keyin sabab keltiriladi."
            }
        ],
        "quizQuestions": [
            {
                "question": "Technological advancement must not be accelerated _______ human psychological welfare.",
                "options": ["at the expense of", "in terms with", "by virtue on", "on light of"],
                "correctAnswer": "at the expense of",
                "explanation": "'Evaziga/hisobiga' ma'nosidagi akademik kolokatsiya 'at the expense of' hisoblanadi."
            },
            {
                "question": "_______ recent macro-economic volatility, sovereign wealth funds revised their asset allocations.",
                "options": ["In light of", "By grounds of", "With terms to", "In expense of"],
                "correctAnswer": "In light of",
                "explanation": "'Mavjud voqelikni hisobga olganda' ma'nosidagi ibora 'In light of' dir."
            }
        ]
    },
    {
        "id": "ielts_c1_04_complex_participle_reduction",
        "level": "C1",
        "title": "Unit 70: Complex Gerundial & Participle Reductions",
        "category": "Syntactic Complexity (C1 Academy)",
        "structure": "Preposition + having been + V3 | Far from doing X, S + does Y | Without prejudice to + Noun",
        "uzbekMeaning": "Murakkab gerundiy va sifatdoshli jumlalar (Yuqori darajadagi akademik ixchamlik)",
        "explanation": "Eng yuqori akademik maqolalar va IELTS Band 9.0 insholarida qo'llaniladigan murakkab qisqartirishlar: 'Despite having been warned repeatedly, corporations failed to comply' (takroriy ogohlantirilgan bo'lishiga qaramay); 'Far from diminishing inequality, the tax reform exacerbated the gap' (tengsizlikni kamaytirish u yoqda tursin, soliq islohoti bo'shliqni kengaytirdi).",
        "ieltsRelevance": "IELTS Writing Task 2 da Band 9.0 Grammatical Range and Accuracy darajasini tasdiqlash uchun xizmat qiladi.",
        "academicExamples": [
            {
                "sentence": "Far from alleviating traffic congestion, constructing additional highway lanes merely induced greater vehicular demand.",
                "translation": "Tirbandlikni kamaytirish u yoqda tursin, qo'shimcha magistral yo'llarni qurish shunchaki yanada ko'proq transport talabini keltirib chiqardi.",
                "context": "Task 2"
            },
            {
                "sentence": "Despite having been subjected to exhaustive peer review, the experimental findings sparked fervent scientific controversy.",
                "translation": "To'liq ilmiy tahlildan o'tkazilgan bo'lishiga qaramay, eksperimental xulosalar qizg'in ilmiy bahslarga sabab bo'ldi.",
                "context": "Task 2"
            },
            {
                "sentence": "Without prejudice to existing international agreements, signatory nations formulated supplementary climate protocols.",
                "translation": "Mavjud xalqaro shartnomalarga ziyon yetkazmagan holda, imzo chekkan davlatlar qo'shimcha iqlim protokollarini ishlab chiqdilar.",
                "context": "Task 2"
            }
        ],
        "commonMistakes": [
            {
                "incorrect": "Far from to help the poor, the measure burdened them.",
                "correct": "Far from helping the poor, the measure burdened them.",
                "explanation": "'Far from' iborasidan so'ng 'to-infinitive' emas, har doim gerundiy (helping) keladi."
            }
        ],
        "quizQuestions": [
            {
                "question": "Far from _______ economic disparities, deregulated financial policies exacerbated poverty levels.",
                "options": ["alleviating", "alleviate", "to alleviate", "alleviated"],
                "correctAnswer": "alleviating",
                "explanation": "'Far from' iborasidan keyin gerundiy (alleviating) ishlatiladi."
            },
            {
                "question": "Despite _______ into international law, the maritime treaty faced sporadic domestic resistance.",
                "options": ["having been codified", "codified having", "had been codified", "having codified"],
                "correctAnswer": "having been codified",
                "explanation": "O'tmishda yakunlangan passiv holat uchun 'having been codified' (qonuniylashtirilgan bo'lishiga qaramay) to'g'ri."
            }
        ]
    }
]

def append_topics_to_database():
    db_file = os.path.join(os.path.dirname(__file__), '../src/data/ielts/ielts_grammar_data.ts')
    with open(db_file, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find where the array closes: '];' at the end of IELTS_GRAMMAR_DATABASE
    close_bracket_idx = content.rfind('];')
    if close_bracket_idx == -1:
        raise Exception("Could not find closing '];' in ielts_grammar_data.ts")

    base_content = content[:close_bracket_idx].rstrip()
    if not base_content.endswith(','):
        base_content += ','

    # Format new topics as TypeScript objects
    ts_entries = []
    for topic in NEW_TOPICS:
        ts_entry = "    {\n"
        ts_entry += f'        id: {json.dumps(topic["id"])},\n'
        ts_entry += f'        level: {json.dumps(topic["level"])},\n'
        ts_entry += f'        title: {json.dumps(topic["title"])},\n'
        ts_entry += f'        category: {json.dumps(topic["category"])},\n'
        ts_entry += f'        structure: {json.dumps(topic["structure"])},\n'
        ts_entry += f'        uzbekMeaning: {json.dumps(topic["uzbekMeaning"])},\n'
        ts_entry += f'        explanation: {json.dumps(topic["explanation"])},\n'
        ts_entry += f'        ieltsRelevance: {json.dumps(topic["ieltsRelevance"])},\n'
        
        # academicExamples
        ts_entry += '        academicExamples: [\n'
        for ex in topic["academicExamples"]:
            ts_entry += '            {\n'
            ts_entry += f'                sentence: {json.dumps(ex["sentence"])},\n'
            ts_entry += f'                translation: {json.dumps(ex["translation"])},\n'
            ts_entry += f'                context: {json.dumps(ex["context"])}\n'
            ts_entry += '            },\n'
        ts_entry = ts_entry.rstrip(',\n') + '\n        ],\n'

        # commonMistakes
        ts_entry += '        commonMistakes: [\n'
        for m in topic["commonMistakes"]:
            ts_entry += '            {\n'
            ts_entry += f'                incorrect: {json.dumps(m["incorrect"])},\n'
            ts_entry += f'                correct: {json.dumps(m["correct"])},\n'
            ts_entry += f'                explanation: {json.dumps(m["explanation"])}\n'
            ts_entry += '            },\n'
        ts_entry = ts_entry.rstrip(',\n') + '\n        ],\n'

        # quizQuestions
        ts_entry += '        quizQuestions: [\n'
        for q in topic["quizQuestions"]:
            ts_entry += '            {\n'
            ts_entry += f'                question: {json.dumps(q["question"])},\n'
            ts_entry += f'                options: {json.dumps(q["options"])},\n'
            ts_entry += f'                correctAnswer: {json.dumps(q["correctAnswer"])},\n'
            ts_entry += f'                explanation: {json.dumps(q["explanation"])}\n'
            ts_entry += '            },\n'
        ts_entry = ts_entry.rstrip(',\n') + '\n        ]\n'
        ts_entry += '    }'
        ts_entries.append(ts_entry)

    all_new_ts = ',\n' + ',\n'.join(ts_entries) + '\n];\n'
    final_code = base_content + all_new_ts

    with open(db_file, 'w', encoding='utf-8') as f:
        f.write(final_code)

    print(f"✅ Successfully appended {len(NEW_TOPICS)} new IELTS grammar units to ielts_grammar_data.ts!")

if __name__ == '__main__':
    append_topics_to_database()
