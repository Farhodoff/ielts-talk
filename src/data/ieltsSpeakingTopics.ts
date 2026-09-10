export interface SpeakingVocabularyItem {
    term: string;
    meaningUz: string;
    example: string;
}

export interface IeltsSpeakingTopic {
    id: string;
    category: string;
    part1: string[];
    part2: {
        title: string;
        bullets: string[];
    };
    part3: string[];
    vocabulary?: SpeakingVocabularyItem[];
    usefulPhrases?: string[];
}

export const CAMBRIDGE_IELTS_TOPICS: IeltsSpeakingTopic[] = [
    // --- Official Cambridge IELTS Benchmark Tests ---
    {
        id: 'cambridge_travel',
        category: '🌍 Travel & Transport',
        part1: [
            "Tell me about your hometown. What do you like most about it?",
            "Do you prefer traveling by car, train, or plane? Why?",
            "How often do you go on trips with your family or friends?",
            "What kind of places do you like to visit on holiday?"
        ],
        part2: {
            title: "Describe a memorable journey you went on.",
            bullets: [
                "Where you went and who you went with",
                "What happened during the journey",
                "Why it was so memorable for you"
            ]
        },
        part3: [
            "How have transportation methods changed in your country over the past few decades?",
            "Do you think tourism always brings positive economic impacts to a local region?",
            "In the future, do you expect eco-friendly travel to become the dominant form of tourism?"
        ],
        vocabulary: [
            { term: "picturesque landscape", meaningUz: "suratdek go'zal manzara", example: "The train passed through a picturesque landscape of rolling green hills." },
            { term: "broaden one's horizon", meaningUz: "dunyoqarashni kengaytirish", example: "Traveling solo helps young people broaden their horizons significantly." }
        ],
        usefulPhrases: [
            "To the best of my recollection, the trip took place two years ago...",
            "What stood out most vividly was the untamed natural beauty."
        ]
    },
    {
        id: 'cambridge_tech',
        category: '💻 Technology & Innovation',
        part1: [
            "What kinds of technology do you use most frequently every day?",
            "Do you think smartphones help people stay more connected or isolated?",
            "What is your favorite mobile application and why?",
            "How did you learn to use computers when you were younger?"
        ],
        part2: {
            title: "Describe a piece of technology that you find extremely useful.",
            bullets: [
                "What it is and when you acquired it",
                "How often you use it in your daily life",
                "Why it is so important and useful to you"
            ]
        },
        part3: [
            "How do you think artificial intelligence will impact employment in the near future?",
            "Do elderly people in your country adapt easily to digital technologies?",
            "Is there a danger that human beings are becoming overly dependent on electronic gadgets?"
        ],
        vocabulary: [
            { term: "cutting-edge device", meaningUz: "eng so'nggi zamonaviy qurilma", example: "Noise-cancelling headphones are a cutting-edge device for focused study." },
            { term: "seamless integration", meaningUz: "qulay, uzluksiz integratsiya", example: "Cloud apps offer seamless integration across all my workstations." }
        ],
        usefulPhrases: [
            "I could scarcely imagine getting through my workday without it.",
            "It has fundamentally revolutionized how I organize my daily workflow."
        ]
    },
    {
        id: 'cambridge_environment',
        category: '🌱 Ecology & Sustainability',
        part1: [
            "Are there many parks or natural spaces near your home?",
            "What environmental issues in your country concern you most?",
            "Do you try to recycle plastic or save electricity at home?",
            "Did you learn about climate change when you were in school?"
        ],
        part2: {
            title: "Describe an environmental problem that your country is currently facing.",
            bullets: [
                "What the problem is and where it occurs",
                "What causes this problem",
                "What measures are being taken to resolve it"
            ]
        },
        part3: [
            "Whose responsibility is it primarily to combat climate change: governments, corporations, or individuals?",
            "Do you think renewable energy will completely replace fossil fuels in our lifetime?",
            "How can schools cultivate stronger environmental awareness among young children?"
        ],
        vocabulary: [
            { term: "catastrophic repercussion", meaningUz: "halokatli oqibat", example: "Unchecked deforestation carries catastrophic repercussions for biodiversity." },
            { term: "carbon footprint", meaningUz: "chiqarilayotgan uglerod miqdori", example: "Adopting a plant-based diet helps diminish one's individual carbon footprint." }
        ],
        usefulPhrases: [
            "It is universally acknowledged that climate change requires urgent collective action.",
            "If stringent regulations are not enforced, future generations will suffer."
        ]
    },
    {
        id: 'cambridge_education',
        category: '🎓 Education & Knowledge',
        part1: [
            "What was your favorite subject when you were in secondary school?",
            "Do you prefer studying alone in a library or in study groups?",
            "How has modern online learning changed the student experience?",
            "Do you think teachers should be strict or friendly with students?"
        ],
        part2: {
            title: "Describe an inspiring teacher who influenced your life.",
            bullets: [
                "Who this teacher was and which subject they taught",
                "What their teaching style was like",
                "How they encouraged or helped you personally"
            ]
        },
        part3: [
            "Do you believe traditional universities will ever become obsolete due to online courses?",
            "Should higher education be funded entirely by the state or by students?",
            "Which skills will be most critical for university graduates over the next decade?"
        ],
        vocabulary: [
            { term: "pedagogical method", meaningUz: "pedagogik usul, o'qitish metodikasi", example: "Her interactive pedagogical methods kept students engaged throughout the lecture." },
            { term: "instill confidence", meaningUz: "o'ziga ishonch uyg'otmoq", example: "He had a rare knack for instilling confidence in struggling students." }
        ],
        usefulPhrases: [
            "He did not merely lecture; he ignited genuine intellectual curiosity.",
            "His guidance served as an enduring compass for my academic ambitions."
        ]
    },
    {
        id: 'cambridge_culture',
        category: '🎭 Arts & Traditions',
        part1: [
            "Do you enjoy attending music concerts or art exhibitions?",
            "What traditional festivals are celebrated with great enthusiasm in your country?",
            "Do you think it is important for young people to learn traditional folk dances or crafts?",
            "How do people in your hometown celebrate New Year?"
        ],
        part2: {
            title: "Describe an important traditional celebration in your culture.",
            bullets: [
                "What the celebration is and when it takes place",
                "What rituals and traditional foods are involved",
                "Why this celebration holds deep cultural significance"
            ]
        },
        part3: [
            "In this era of globalization, are indigenous cultural traditions at risk of disappearing?",
            "How does tourism impact traditional ways of living in historical towns?",
            "Should national governments allocate substantial budgets to preserving cultural heritage?"
        ],
        vocabulary: [
            { term: "cultural heritage", meaningUz: "madaniy meros", example: "Historic mosques and minarets form the bedrock of our cultural heritage." },
            { term: "foster community cohesion", meaningUz: "jamoaviy birdamlikni mustahkamlash", example: "Annual festivals foster community cohesion across diverse age brackets." }
        ],
        usefulPhrases: [
            "It embodies the spirit of generosity and mutual kinship.",
            "Passed down through countless generations, this ritual remains inviolable."
        ]
    },

    // --- Official Makkar 2026 Guesswork Forecast Topics ---
    {
        id: "makkar_2026_special_cake",
        category: "\ud83c\udf89 Celebrations & Food",
        part1: [
            "Do you like eating cakes or sweet food?",
            "Did you like eating cakes when you were a child?",
            "Have you ever made a cake by yourself?",
            "On what occasions do people in your country celebrate with a cake?"
],
        part2: {
            title: "Describe a special cake you received from others",
            bullets: [
                "When and where this occurred",
                "Who was involved or present",
                "What transpired during the experience",
                "And explain how you felt and what impact it left on you"
]
        },
        part3: [
            "What do you think of people using their mobile phones during a meal?",
            "What are the differences between special food in your country and other countries?",
            "Is there any food in your country that is eaten at special times or on special occasions?",
            "Why are some people willing to spend a lot of money on meals on special days?"
],
        vocabulary: [
            {
                        "term": "exquisite design",
                        "meaningUz": "ajoyib, nafis dizayn",
                        "example": "The birthday cake had an exquisite design with handcrafted chocolate decorations."
            },
            {
                        "term": "sentimental value",
                        "meaningUz": "qadrli, xotiraga boy qiymat",
                        "example": "Although it was inexpensive, the gift carried immense sentimental value for me."
            },
            {
                        "term": "thoughtful gesture",
                        "meaningUz": "e'tiborli va samimiy harakat",
                        "example": "Throwing a surprise party was a truly thoughtful gesture from my closest companions."
            }
],
        usefulPhrases: [
            "To be completely honest, I have quite a sweet tooth...",
            "What made it truly unforgettable was the sheer effort they put into it."
]
    },
    {
        id: "makkar_2026_nature_lover",
        category: "\ud83c\udf0d Environment & Nature",
        part1: [
            "Do you like being close to nature?",
            "Do you have any potted plants in your home?",
            "Did you grow up in a green area or an urban city?",
            "What can individuals do to keep their neighborhoods clean?"
],
        part2: {
            title: "Describe a person who likes to look after the natural",
            bullets: [
                "When and where this occurred",
                "Who was involved or present",
                "What transpired during the experience",
                "And explain how you felt and what impact it left on you"
]
        },
        part3: [
            "Do you think parents should teach their children how to protect the environment?",
            "What laws about the environment are effective in your country?",
            "intervention in environmental protection?",
            "Is it easy for children in cities to get close to the natural world?"
],
        vocabulary: [
            {
                        "term": "environmental awareness",
                        "meaningUz": "ekologik ong va mas'uliyat",
                        "example": "She actively promotes environmental awareness among the younger generation."
            },
            {
                        "term": "green thumb",
                        "meaningUz": "o'simlik parvarishlashga usta",
                        "example": "My grandmother has a natural green thumb and can revive almost any dying plant."
            },
            {
                        "term": "sustainable lifestyle",
                        "meaningUz": "tabiatga zarar yetkazmaydigan hayot tarzi",
                        "example": "Leading a sustainable lifestyle requires conscious choices regarding energy and waste."
            }
],
        usefulPhrases: [
            "She is someone who genuinely walks the talk when it comes to conservation.",
            "Her dedication serves as a great inspiration to our entire neighborhood."
]
    },
    {
        id: "makkar_2026_animal_story",
        category: "\ud83d\udcda Books, Animals & Stories",
        part1: [
            "Did you have any pets when you were growing up?",
            "What kind of animals do you find most fascinating?",
            "Do you enjoy reading fiction or non-fiction books?",
            "Why do children often love stories featuring animal characters?"
],
        part2: {
            title: "Describe a story/book with animals in it",
            bullets: [
                "When and where this occurred",
                "Who was involved or present",
                "What transpired during the experience",
                "And explain how you felt and what impact it left on you"
]
        },
        part3: [
            "Should schools teach children about animals?",
            "Some people think pets should not be kept in cities. What do you think?",
            "Many people regard pets as members of their family. What do you think?",
            "Do many people keep pets in your country?"
],
        vocabulary: [
            {
                        "term": "captivating narrative",
                        "meaningUz": "o'ziga jalb qiluvchi hikoya",
                        "example": "The book features a captivating narrative about survival in the wild."
            },
            {
                        "term": "anthropomorphic traits",
                        "meaningUz": "hayvonlarga insoniy xususiyatlar berish",
                        "example": "Fables frequently endow animals with anthropomorphic traits to teach moral lessons."
            },
            {
                        "term": "timeless masterpiece",
                        "meaningUz": "zamon tanlamas shoh asar",
                        "example": "The Jungle Book remains a timeless masterpiece enjoyed by people of all ages."
            }
],
        usefulPhrases: [
            "The moral undertone of the book left a profound impression on me.",
            "It vividly depicts the delicate balance between mankind and the animal kingdom."
]
    },
    {
        id: "makkar_2026_device_problem",
        category: "\ud83d\udcbb Technology & Gadgets",
        part1: [
            "What electronic device do you rely on the most each day?",
            "How do you feel when your phone battery dies completely?",
            "Are you good at troubleshooting computer problems yourself?",
            "Do you think technology makes our daily lives simpler or more stressful?"
],
        part2: {
            title: "Describe a time when you had a problem using an",
            bullets: [
                "When and where this occurred",
                "Who was involved or present",
                "What transpired during the experience",
                "And explain how you felt and what impact it left on you"
]
        },
        part3: [
            "How do perspectives toward \ud83d\udcbb Technology & Gadgets differ between older and younger generations?",
            "Do you think governments should take greater regulatory action regarding this issue?",
            "In what ways might technological innovation transform this domain in the coming decade?"
],
        vocabulary: [
            {
                        "term": "glitch / malfunction",
                        "meaningUz": "texnik nosozlik, qotib qolish",
                        "example": "A sudden software glitch caused the laptop screen to freeze right before my presentation."
            },
            {
                        "term": "indispensable tool",
                        "meaningUz": "o'rni bosilmas muhim vosita",
                        "example": "Smartphones have become an indispensable tool in modern professional life."
            },
            {
                        "term": "troubleshoot",
                        "meaningUz": "nosozlikni aniqlash va tuzatish",
                        "example": "I spent over an hour attempting to troubleshoot the corrupt operating system."
            }
],
        usefulPhrases: [
            "At that precise moment, panic began to set in because the deadline was looming.",
            "Fortunately, after restarting in recovery mode, I managed to salvage my data."
]
    },
    {
        id: "makkar_2026_celebrity_ad",
        category: "\ud83d\udce2 Media, Advertising & Fame",
        part1: [
            "Do you pay attention to commercials on television or social media?",
            "Have you ever bought something because a celebrity endorsed it?",
            "What makes an advertisement memorable to you?",
            "Do you think there are too many adverts on the internet nowadays?"
],
        part2: {
            title: "Describe an advertisement with a famous person in",
            bullets: [
                "When and where this occurred",
                "Who was involved or present",
                "What transpired during the experience",
                "And explain how you felt and what impact it left on you"
]
        },
        part3: [
            "What are the advantages and disadvantages of advertisements?",
            "Why are many advertisements endorsed by celebrities? How useful are they?",
            "What is the most important factor in an advertisement?",
            "Why are some advertisements boring?"
],
        vocabulary: [
            {
                        "term": "celebrity endorsement",
                        "meaningUz": "mashhur inson orqali mahsulotni reklama qilish",
                        "example": "Companies pay exorbitant sums for celebrity endorsement to boost brand credibility."
            },
            {
                        "term": "persuasive marketing",
                        "meaningUz": "ishontiruvchi, ta'sirchan marketing",
                        "example": "The campaign relied on persuasive marketing to appeal to younger consumers."
            },
            {
                        "term": "consumer behaviour",
                        "meaningUz": "iste'molchi xatti-harakati",
                        "example": "Social media advertisements significantly influence modern consumer behaviour."
            }
],
        usefulPhrases: [
            "It immediately grabbed my attention due to the high production quality.",
            "Whether one likes it or not, star power plays a pivotal role in product sales."
]
    },
    {
        id: "makkar_2026_tech_problem_solved",
        category: "\ud83d\udcbb Technology & Innovation",
        part1: [
            "Do you prefer dealing with tech issues online or calling customer support?",
            "How has artificial intelligence changed the way you solve problems?",
            "Can you imagine living for a week without internet access?",
            "What is the most complicated piece of technology you have ever learned to use?"
],
        part2: {
            title: "Describe a challenging technological problem you",
            bullets: [
                "When and where this occurred",
                "Who was involved or present",
                "What transpired during the experience",
                "And explain how you felt and what impact it left on you"
]
        },
        part3: [
            "What are the advantages and disadvantages of AI?",
            "Do you think people today should learn about AI technology?",
            "Should children learn to use AI?",
            "How can AI help in our lives?"
],
        vocabulary: [
            {
                        "term": "systematic approach",
                        "meaningUz": "tartibli, tizimli yondashuv",
                        "example": "Resolving network latency requires a systematic approach rather than guesswork."
            },
            {
                        "term": "digital dependency",
                        "meaningUz": "raqamli texnologiyalarga haddan ortiq bog'liqlik",
                        "example": "The outage highlighted our growing digital dependency for basic tasks."
            },
            {
                        "term": "cloud synchronization",
                        "meaningUz": "bulutli sinxronizatsiya",
                        "example": "Thanks to automated cloud synchronization, none of my essential files were lost."
            }
],
        usefulPhrases: [
            "It tested my patience to the absolute limit, but perseverance paid off.",
            "In this digital era, having basic technological literacy is virtually mandatory."
]
    },
    {
        id: "makkar_2026_online_program",
        category: "\ud83d\udcfa Entertainment & Online Shows",
        part1: [
            "Do you prefer watching traditional TV broadcasts or streaming on platforms like YouTube and Netflix?",
            "What genre of TV shows do you find most relaxing after a hectic day?",
            "Do you usually binge-watch an entire series or watch one episode at a time?",
            "Are documentary shows popular among people in your country?"
],
        part2: {
            title: "Describe a TV show/online program you have",
            bullets: [
                "When and where this occurred",
                "Who was involved or present",
                "What transpired during the experience",
                "And explain how you felt and what impact it left on you"
]
        },
        part3: [
            "people like to watch?",
            "2. What makes a popular TV or online program?",
            "3. What kinds of TV or online programs are popular in your country?"
],
        vocabulary: [
            {
                        "term": "binge-watch",
                        "meaningUz": "ketma-ket to'xtamasdan ko'rish",
                        "example": "I ended up binge-watching the entire eight-episode season over a single weekend."
            },
            {
                        "term": "thought-provoking",
                        "meaningUz": "chuqur o'ylantiradigan, mazmunli",
                        "example": "The documentary offered a thought-provoking perspective on space exploration."
            },
            {
                        "term": "cliffhanger",
                        "meaningUz": "kuchli hayajon bilan tugaydigan sahna",
                        "example": "Each episode culminated in a gripping cliffhanger that kept audiences hooked."
            }
],
        usefulPhrases: [
            "What sets this show apart from generic content is its compelling storyline.",
            "It provides a much-needed escape from my demanding daily schedule."
]
    },
    {
        id: "makkar_2026_travel_recommend",
        category: "\u2708\ufe0f Travel & Tourism",
        part1: [
            "Do you prefer traveling alone or with a group of friends?",
            "What is the most scenic destination you have ever visited?",
            "Do you take many photographs when you go on trips?",
            "What factors do you consider when selecting a holiday destination?"
],
        part2: {
            title: "Describe a place you have travelled to that you",
            bullets: [
                "When and where this occurred",
                "Who was involved or present",
                "What transpired during the experience",
                "And explain how you felt and what impact it left on you"
]
        },
        part3: [
            "1. Where do people in your country often go for holidays?",
            "2. What is the ideal length for a holiday?",
            "3. How do people usually plan holidays?",
            "4. Is it important to plan a holiday?"
],
        vocabulary: [
            {
                        "term": "breathtaking scenery",
                        "meaningUz": "aqlni shoshiradigan go'zal manzara",
                        "example": "The mountain resort was surrounded by breathtaking scenery and pristine lakes."
            },
            {
                        "term": "off the beaten track",
                        "meaningUz": "sayyohlar kam boradigan, sokin joy",
                        "example": "We ventured off the beaten track to discover secluded traditional villages."
            },
            {
                        "term": "hospitable locals",
                        "meaningUz": "mehmondo'st mahalliy aholi",
                        "example": "The warmth and kindness of the hospitable locals made our journey unforgettable."
            }
],
        usefulPhrases: [
            "It truly exceeded all my preconceived expectations in every conceivable way.",
            "I would wholeheartedly recommend it to anyone seeking serenity and natural beauty."
]
    },
    {
        id: "makkar_2026_polyglot_friend",
        category: "\ud83d\udde3\ufe0f Languages & Communication",
        part1: [
            "How many languages can you speak fluently?",
            "Do you think learning foreign languages is difficult for adults?",
            "Which language would you love to learn if you had unlimited free time?",
            "What is the most effective method for expanding your active vocabulary?"
],
        part2: {
            title: "Describe a person who is good at learning and",
            bullets: [
                "When and where this occurred",
                "Who was involved or present",
                "What transpired during the experience",
                "And explain how you felt and what impact it left on you"
]
        },
        part3: [
            "1. Are there many people who can speak foreign languages in your country?",
            "2. Does speaking other languages help at work?",
            "3. Do people learn any languages other than English?",
            "4. Why is it easier for children to learn new things than for adults?"
],
        vocabulary: [
            {
                        "term": "linguistic aptitude",
                        "meaningUz": "tillar o'rganishga bo'lgan tug'ma qobiliyat",
                        "example": "He possesses an extraordinary linguistic aptitude, picking up accents effortlessly."
            },
            {
                        "term": "flawless fluency",
                        "meaningUz": "bekamu-ko'st, ravon gapirish",
                        "example": "Within two years of immersion, she achieved flawless fluency in conversational German."
            },
            {
                        "term": "immersive learning",
                        "meaningUz": "til muhitiga to'liq sho'ng'ib o'rganish",
                        "example": "Immersive learning through daily podcasts proved far more effective than grammar drills."
            }
],
        usefulPhrases: [
            "What astonishes me most is how effortlessly he switches between multiple dialects.",
            "His dedication proves that consistency trumps natural talent every single time."
]
    },
    {
        id: "makkar_2026_long_term_goal",
        category: "\ud83c\udfaf Ambition & Career Goals",
        part1: [
            "Do you regularly write down your personal or academic goals?",
            "What is your primary professional ambition over the next five years?",
            "How do you stay motivated when facing setbacks or hurdles?",
            "Do you prefer setting short-term milestones or long-term dreams?"
],
        part2: {
            title: "Describe a long-term goal/ambition you would",
            bullets: [
                "When and where this occurred",
                "Who was involved or present",
                "What transpired during the experience",
                "And explain how you felt and what impact it left on you"
]
        },
        part3: [
            "How do perspectives toward \ud83c\udfaf Ambition & Career Goals differ between older and younger generations?",
            "Do you think governments should take greater regulatory action regarding this issue?",
            "In what ways might technological innovation transform this domain in the coming decade?"
],
        vocabulary: [
            {
                        "term": "long-term aspiration",
                        "meaningUz": "uzoq muddatli intilish, oliy maqsad",
                        "example": "Pursuing a master's degree abroad has been my long-term aspiration since high school."
            },
            {
                        "term": "resilience",
                        "meaningUz": "qiyinchiliklarga bardoshlilik",
                        "example": "Building personal resilience is essential when working toward ambitious milestones."
            },
            {
                        "term": "stepping stone",
                        "meaningUz": "keyingi muvaffaqiyat uchun poydevor/ko'prik",
                        "example": "Achieving an IELTS band 7.5 is a vital stepping stone for my academic journey."
            }
],
        usefulPhrases: [
            "I firmly subscribe to the belief that clear vision accompanied by disciplined action guarantees results.",
            "Even when progress feels painfully sluggish, staying committed to the process is paramount."
]
    },
    {
        id: "makkar_2026_traffic_jam",
        category: "\ud83d\ude97 Transport & Commuting",
        part1: [
            "How do you typically commute to work or university each morning?",
            "Is traffic congestion a severe problem in your city?",
            "What do you normally do to pass the time when stuck in traffic?",
            "Do you believe expanding public transport can eliminate city traffic?"
],
        part2: {
            title: "Describe a time when you were stuck in a traffic",
            bullets: [
                "When and where this occurred",
                "Who was involved or present",
                "What transpired during the experience",
                "And explain how you felt and what impact it left on you"
]
        },
        part3: [
            "Do you like to use public transport?",
            "Would you rather be in a car or a bus in a traffic jam?",
            "How can we solve the traffic jam problem?",
            "Do you think developing public transport can solve traffic jam problems?"
],
        vocabulary: [
            {
                        "term": "bumper-to-bumper traffic",
                        "meaningUz": "tirband, mashina ketidan mashina qotib qolgan",
                        "example": "We were trapped in bumper-to-bumper traffic for over two agonizing hours."
            },
            {
                        "term": "gridlock",
                        "meaningUz": "harakat butunlay to'xtab qolishi",
                        "example": "A major breakdown during peak rush hour brought the entire ring road to a gridlock."
            },
            {
                        "term": "commute",
                        "meaningUz": "ish/o'qishga qatnash yo'li",
                        "example": "The daily commute can be mentally draining without entertaining podcasts."
            }
],
        usefulPhrases: [
            "The sheer frustration of being completely immobilized tested everyone's patience.",
            "It underscored the pressing necessity for modern mass transit infrastructure."
]
    },
    {
        id: "makkar_2026_budget_day_out",
        category: "\ud83d\udca1 Lifestyle & Free Time",
        part1: [
            "Do you think having fun always requires spending a considerable amount of money?",
            "What free outdoor activities do you enjoy on sunny weekends?",
            "Do you prefer dining out at upscale restaurants or having a homemade picnic?",
            "How do you plan your leisure time to keep expenses reasonable?"
],
        part2: {
            title: "Describe a special day out that cost you little",
            bullets: [
                "When and where this occurred",
                "Who was involved or present",
                "What transpired during the experience",
                "And explain how you felt and what impact it left on you"
]
        },
        part3: [
            "Do people like to spend their leisure time out in your country?",
            "How do people spend their leisure time in your country?",
            "How does technology affect the way people spend their leisure time?",
            "Do you think only old people have time for leisure?"
],
        vocabulary: [
            {
                        "term": "cost-effective",
                        "meaningUz": "tejamkor, arzonga tushadigan",
                        "example": "Packing homemade sandwiches and cycling to the countryside proved very cost-effective."
            },
            {
                        "term": "priceless memories",
                        "meaningUz": "bepaho, unutilmas xotiralar",
                        "example": "We created priceless memories without burning a hole in our pockets."
            },
            {
                        "term": "frugal yet rewarding",
                        "meaningUz": "kamxarj lekin maroqli",
                        "example": "It was a frugal yet profoundly rewarding day spent exploring historical monuments."
            }
],
        usefulPhrases: [
            "It served as a poignant reminder that genuine companionship far outweighs lavish spending.",
            "We enjoyed every single minute without worrying about exorbitant bills."
]
    },
    {
        id: "makkar_2026_interesting_home",
        category: "\ud83c\udfe1 Architecture & Living",
        part1: [
            "Do you live in a detached house or a multi-story apartment?",
            "What is your absolute favourite room in your current residence?",
            "Do you prefer modern minimalist architecture or traditional historic homes?",
            "If you could redesign one aspect of your home, what would it be?"
],
        part2: {
            title: "Describe a home that you like to visit but do not",
            bullets: [
                "When and where this occurred",
                "Who was involved or present",
                "What transpired during the experience",
                "And explain how you felt and what impact it left on you"
]
        },
        part3: [
            "Do Indian people like to visit others\u2019 homes?",
            "What do Indian people do when they visit others?",
            "What kind of place do people in your country like to live in?",
            "What's the difference between homes in cities and those in the countryside?"
],
        vocabulary: [
            {
                        "term": "architectural marvel",
                        "meaningUz": "arxitektura mo'jizasi, qoyilmaqom bino",
                        "example": "The cliffside villa was an architectural marvel featuring panoramic ocean vistas."
            },
            {
                        "term": "minimalist aesthetic",
                        "meaningUz": "sodda va zamonaviy uslub",
                        "example": "The interior embraced a minimalist aesthetic with clean lines and abundant natural light."
            },
            {
                        "term": "cozy atmosphere",
                        "meaningUz": "shinam va iliq muhit",
                        "example": "The rustic fireplace gave the living room an exceptionally cozy atmosphere."
            }
],
        usefulPhrases: [
            "While it is undeniably visually captivating, it lacks the practicality for everyday living.",
            "It felt more akin to an art exhibition than a warm, comfortable sanctuary."
]
    },
    {
        id: "makkar_2026_happy_event_organized",
        category: "\ud83c\udf89 Events & Organization",
        part1: [
            "Do you enjoy organizing events and gatherings for friends?",
            "What was the most joyous celebration you attended recently?",
            "What is the most stressful aspect of event planning?",
            "How do people in your culture celebrate major milestones?"
],
        part2: {
            title: "Describe a time when you organized a happy",
            bullets: [
                "When and where this occurred",
                "Who was involved or present",
                "What transpired during the experience",
                "And explain how you felt and what impact it left on you"
]
        },
        part3: [
            "How would you feel when you were not well prepared for something?",
            "Do you prefer to prepare and organize an activity or just take part in an activity?",
            "How can parents help children to be organized?",
            "On what occasions do people need to be organised?"
],
        vocabulary: [
            {
                        "term": "meticulous planning",
                        "meaningUz": "har bir detalni hisobga olgan puxta rejalashtirish",
                        "example": "Executing the anniversary celebration demanded weeks of meticulous planning."
            },
            {
                        "term": "flawless execution",
                        "meaningUz": "kamchiliksiz, a'lo darajada o'tkazish",
                        "example": "Thanks to teamwork, the party witnessed flawless execution from start to finish."
            },
            {
                        "term": "unanimous praise",
                        "meaningUz": "barchaning bir ovozdan maqtovi",
                        "example": "The venue and catering received unanimous praise from every attendee."
            }
],
        usefulPhrases: [
            "Seeing the pure delight on everyone's faces made every sleepless night worthwhile.",
            "It taught me invaluable lessons in crisis management and interpersonal coordination."
]
    },
    {
        id: "makkar_2026_foreign_short_job",
        category: "\ud83d\udcbc Work, Career & Abroad",
        part1: [
            "What kind of job do you see yourself doing in the future?",
            "Would you like to gain working experience in an overseas country?",
            "Do you prefer working indoors in an office or outdoors with people?",
            "What are the benefits of doing a temporary summer internship?"
],
        part2: {
            title: "Describe a short-term job you want to have in a",
            bullets: [
                "When and where this occurred",
                "Who was involved or present",
                "What transpired during the experience",
                "And explain how you felt and what impact it left on you"
]
        },
        part3: [
            "What short-term jobs do young people do in other countries?",
            "What challenges do young people face when working abroad?",
            "3.What are the benefits of working for an international company?",
            "4. What personal skills are required to work in an international company?"
],
        vocabulary: [
            {
                        "term": "cross-cultural competence",
                        "meaningUz": "madaniyatlararo muloqot malakasi",
                        "example": "Working in an international company enhances one's cross-cultural competence."
            },
            {
                        "term": "broaden one's horizons",
                        "meaningUz": "dunyoqarashni kengaytirish",
                        "example": "A short-term overseas assignment helps young professionals broaden their horizons."
            },
            {
                        "term": "professional networking",
                        "meaningUz": "kasbiy aloqalarni o'rnatish",
                        "example": "Internships offer prime opportunities for long-term professional networking."
            }
],
        usefulPhrases: [
            "It would provide an extraordinary launchpad for my future international career.",
            "Experiencing diverse workplace cultures first-hand is an irreplaceable asset."
]
    },
    {
        id: "makkar_2026_new_law_proposal",
        category: "\u2696\ufe0f Society, Law & Policy",
        part1: [
            "Do you think rules and regulations are necessary in schools and workplaces?",
            "Are people in your community generally law-abiding citizens?",
            "What rule do you find most sensible in public places?",
            "How should authorities encourage people to recycle household waste?"
],
        part2: {
            title: "Describe a new law you would like to introduce",
            bullets: [
                "When and where this occurred",
                "Who was involved or present",
                "What transpired during the experience",
                "And explain how you felt and what impact it left on you"
]
        },
        part3: [
            "What rules should students follow at school?",
            "Do people in your country usually obey the law?",
            "What kinds of behavior are considered as good behavior?",
            "Do you think children can learn about the law outside of school?"
],
        vocabulary: [
            {
                        "term": "legislative measure",
                        "meaningUz": "qonuniy chora",
                        "example": "Introducing strict legislative measures against food wastage could transform the hospitality sector."
            },
            {
                        "term": "societal well-being",
                        "meaningUz": "jamiyat farovonligi",
                        "example": "Good laws are primarily crafted to safeguard public safety and societal well-being."
            },
            {
                        "term": "deterrent",
                        "meaningUz": "to'xtatib qoluvchi, ogohlantiruvchi vosita",
                        "example": "Heavy financial fines act as a potent deterrent against illegal dumping."
            }
],
        usefulPhrases: [
            "If enacted, this legislation would yield profound long-term societal dividends.",
            "Compliance must be coupled with educational awareness to ensure lasting efficacy."
]
    },
    {
        id: "makkar_2026_successful_business_person",
        category: "\ud83d\udc54 Business & Entrepreneurship",
        part1: [
            "Would you like to start your own enterprise in the future?",
            "What personal qualities are essential for a successful entrepreneur?",
            "Do you prefer working for an established corporate firm or a dynamic startup?",
            "Are there many thriving small businesses in your local area?"
],
        part2: {
            title: "Describe a person you know who has a",
            bullets: [
                "When and where this occurred",
                "Who was involved or present",
                "What transpired during the experience",
                "And explain how you felt and what impact it left on you"
]
        },
        part3: [
            "Why do some people start their own business?",
            "Should governments provide financial support to start-ups?",
            "Do most people prefer shopping at big stores or small stores?",
            "What makes a business successful?"
],
        vocabulary: [
            {
                        "term": "entrepreneurial mindset",
                        "meaningUz": "tadbirkorlik tafakkuri",
                        "example": "His keen entrepreneurial mindset enabled him to identify lucrative market gaps."
            },
            {
                        "term": "calculated risk",
                        "meaningUz": "hisob-kitobli tavakkal",
                        "example": "Launching the platform during economic uncertainty was a calculated risk that paid off."
            },
            {
                        "term": "market expansion",
                        "meaningUz": "bozorni kengaytirish",
                        "example": "Through relentless innovation, their boutique brand achieved rapid market expansion."
            }
],
        usefulPhrases: [
            "What truly distinguishes him is his unwavering persistence in the face of initial failures.",
            "He embodies the principle that value creation should precede monetary ambition."
]
    },
    {
        id: "makkar_2026_interesting_conversation",
        category: "\ud83d\udde3\ufe0f Communication & Dialogue",
        part1: [
            "Do you find it effortless to initiate conversations with unfamiliar people?",
            "Do you prefer in-depth face-to-face discussions or communicating via texting?",
            "Who do you usually turn to when you need insightful personal guidance?",
            "What subjects do you and your close companions discuss most passionately?"
],
        part2: {
            title: "Describe a food that people eat on special",
            bullets: [
                "When and where this occurred",
                "Who was involved or present",
                "What transpired during the experience",
                "And explain how you felt and what impact it left on you"
]
        },
        part3: [
            "How do perspectives toward \ud83d\udde3\ufe0f Communication & Dialogue differ between older and younger generations?",
            "Do you think governments should take greater regulatory action regarding this issue?",
            "In what ways might technological innovation transform this domain in the coming decade?"
],
        vocabulary: [
            {
                        "term": "enlightening discussion",
                        "meaningUz": "ko'zni ochadigan, ibratli suhbat",
                        "example": "Conversing with the retired professor turned out to be an exceptionally enlightening discussion."
            },
            {
                        "term": "gain profound insights",
                        "meaningUz": "chuqur bilim va xulosalar olmoq",
                        "example": "I gained profound insights into emotional intelligence and decision making."
            },
            {
                        "term": "resonate with",
                        "meaningUz": "qalbga yaqin bo'lmoq, mos tushmoq",
                        "example": "His pragmatic philosophy on handling career setbacks deeply resonated with me."
            }
],
        usefulPhrases: [
            "The conversation completely shifted my paradigm regarding long-term happiness.",
            "Hours flew by as though they were fleeting minutes because the dialogue was so captivating."
]
    },
    {
        id: "makkar_2026_medical_career_person",
        category: "\ud83e\ude7a Health, Medicine & Science",
        part1: [
            "How often do you visit a healthcare clinic for routine medical check-ups?",
            "Do you think working as a doctor or nurse is an exceptionally stressful profession?",
            "What healthy habits do you practice to maintain peak physical fitness?",
            "Why do many talented individuals aspire to pursue careers in healthcare?"
],
        part2: {
            title: "Describe a person you know who would like to",
            bullets: [
                "When and where this occurred",
                "Who was involved or present",
                "What transpired during the experience",
                "And explain how you felt and what impact it left on you"
]
        },
        part3: [
            "How do perspectives toward \ud83e\ude7a Health, Medicine & Science differ between older and younger generations?",
            "Do you think governments should take greater regulatory action regarding this issue?",
            "In what ways might technological innovation transform this domain in the coming decade?"
],
        vocabulary: [
            {
                        "term": "altruistic motivation",
                        "meaningUz": "odamlarga xolisona yordam berish maqsadi",
                        "example": "Her desire to enter oncology is driven by pure altruistic motivation to alleviate suffering."
            },
            {
                        "term": "demanding profession",
                        "meaningUz": "katta mas'uliyat va chidamlilik talab etuvchi kasb",
                        "example": "Neurosurgery is an immensely demanding profession requiring unwavering stamina."
            },
            {
                        "term": "empathy and compassion",
                        "meaningUz": "hamdardlik va mehr-shafqat",
                        "example": "Alongside clinical proficiency, empathy and compassion are paramount for doctors."
            }
],
        usefulPhrases: [
            "She displays an admirable degree of poise and dedication under immense pressure.",
            "Her vocational calling is undeniably centered on serving humanity."
]
    },
    {
        id: "makkar_2026_creative_child_art",
        category: "\ud83c\udfa8 Art, Painting & Creativity",
        part1: [
            "Did you enjoy drawing or painting pictures when you attended primary school?",
            "Do you think arts education should remain compulsory in secondary schools?",
            "When was the last time you visited an art gallery or visual exhibition?",
            "Does listening to classical music or viewing artwork stimulate your creativity?"
],
        part2: {
            title: "Describe a child who loves drawing/painting",
            bullets: [
                "When and where this occurred",
                "Who was involved or present",
                "What transpired during the experience",
                "And explain how you felt and what impact it left on you"
]
        },
        part3: [
            "1. What is the right age for a child to learn drawing?",
            "2. Why do most children draw more often than adults do?",
            "3. Why do some people visit galleries or museums instead of viewing artworks online?",
            "4. Do you think galleries and museums should be free of charge?"
],
        vocabulary: [
            {
                        "term": "prodigious talent",
                        "meaningUz": "favqulodda yuksak iqtidor",
                        "example": "At merely seven years old, the child demonstrated a prodigious talent for watercolor portraits."
            },
            {
                        "term": "vibrant imagination",
                        "meaningUz": "boy va rang-barang tasavvur",
                        "example": "Her canvas reflects an extraordinarily vibrant imagination untainted by adult conventions."
            },
            {
                        "term": "creative outlet",
                        "meaningUz": "ijodiy ifoda vositasi",
                        "example": "Painting provides young minds with an invaluable creative outlet to channel emotions."
            }
],
        usefulPhrases: [
            "Her instinctive mastery over chromatic harmony and spatial depth is truly astonishing.",
            "Watching her paint is a vivid testament to how limitless childhood creativity can be."
]
    },
    {
        id: "makkar_2026_self_taught_friend",
        category: "\ud83c\udf93 Learning & Self-Education",
        part1: [
            "Do you believe self-study using internet tutorials is as effective as formal school?",
            "What practical skill have you successfully mastered entirely on your own?",
            "Do you prefer learning through video demonstrations or comprehensive textbooks?",
            "How has YouTube changed the landscape of independent education?"
],
        part2: {
            title: "Describe one of your friends who learned",
            bullets: [
                "When and where this occurred",
                "Who was involved or present",
                "What transpired during the experience",
                "And explain how you felt and what impact it left on you"
]
        },
        part3: [
            "Is it necessary to keep learning after graduating from school?",
            "Should teachers make learning in their classes fun?",
            "Do you think there are too many subjects for students to learn?",
            "Is it better to focus on a few subjects or to learn many subjects?"
],
        vocabulary: [
            {
                        "term": "self-taught autodidact",
                        "meaningUz": "o'z ustida mustaqil ishlab o'rgangan inson",
                        "example": "He is a consummate autodidact who mastered Python programming without ever attending college."
            },
            {
                        "term": "steep learning curve",
                        "meaningUz": "boshida juda qiyin bo'lgan o'rganish jarayoni",
                        "example": "Despite the steep learning curve, he persevered through relentless trial and error."
            },
            {
                        "term": "unwavering curiosity",
                        "meaningUz": "so'nmas qiziquvchanlik",
                        "example": "His journey was fueled by unwavering curiosity and intrinsic motivation."
            }
],
        usefulPhrases: [
            "His achievement underscores that genuine passion far outshines structured pedagogy.",
            "He dismantled complex coding concepts bit by bit until they became second nature."
]
    },
    {
        id: "makkar_2026_giving_advice",
        category: "\ud83e\udd1d Relationships & Mentorship",
        part1: [
            "Do you frequently consult family members prior to making momentous decisions?",
            "In what circumstances do you feel qualified to offer guidance to acquaintances?",
            "Is it easier to give constructive advice to others than to follow it yourself?",
            "Why do young people sometimes dismiss the counsel offered by elders?"
],
        part2: {
            title: "Talk about a time when you gave advice to",
            bullets: [
                "When and where this occurred",
                "Who was involved or present",
                "What transpired during the experience",
                "And explain how you felt and what impact it left on you"
]
        },
        part3: [
            "1.  What kind of advice do parents give to their children?",
            "3.  What advice do parents give to teenagers about making friends ?",
            "4.  Whose advice is more helpful? Parents\u2019 or friends\u2019?",
            "Afraid of visa refusal? Want experts to check your file?"
],
        vocabulary: [
            {
                        "term": "pragmatic guidance",
                        "meaningUz": "amaliy va foydali maslahat",
                        "example": "I offered him pragmatic guidance on prioritizing academic duties over fleeting distractions."
            },
            {
                        "term": "crossroads",
                        "meaningUz": "chorraha, hayotdagi muhim tanlov pallasi",
                        "example": "He found himself at a pivotal crossroads between entering the workforce or pursuing a master's degree."
            },
            {
                        "term": "unbiased perspective",
                        "meaningUz": "xolis, tarafkashliksiz nuqtai nazar",
                        "example": "A sincere friend provides an unbiased perspective when emotions cloud your judgement."
            }
],
        usefulPhrases: [
            "I refrained from being patronizing and instead helped him weigh the pros and cons logically.",
            "Seeing him navigate that turbulence and emerge victorious was immensely satisfying."
]
    },
    {
        id: "makkar_2026_city_loved_visiting",
        category: "\ud83c\udfd9\ufe0f Cities & Urban Life",
        part1: [
            "Do you prefer living in a bustling metropolis or a peaceful rural settlement?",
            "What makes a city visually captivating and comfortable for residents?",
            "How important are public parks and green spaces within dense urban areas?",
            "What is your favourite capital city in the world, and why?"
],
        part2: {
            title: "Describe a city you enjoyed visiting",
            bullets: [
                "When and where this occurred",
                "Who was involved or present",
                "What transpired during the experience",
                "And explain how you felt and what impact it left on you"
]
        },
        part3: [
            "What are the disadvantages of living in a very famous city?",
            "Do you prefer to visit well-developed cities or cities with a long history?",
            "For those who live in cities, is it because they want to or have to?"
],
        vocabulary: [
            {
                        "term": "vibrant metropolis",
                        "meaningUz": "qaynoq va rivojlangan yirik shahar",
                        "example": "Tokyo is a vibrant metropolis where cutting-edge technology seamlessly fuses with ancient shrines."
            },
            {
                        "term": "pedestrian-friendly",
                        "meaningUz": "piyodalar uchun qulay va xavfsiz",
                        "example": "The historic core is remarkably pedestrian-friendly, with bustling open-air cafes."
            },
            {
                        "term": "cultural diversity",
                        "meaningUz": "madaniy xilma-xillik",
                        "example": "The city's rich cultural diversity is reflected in its eclectic culinary offerings."
            }
],
        usefulPhrases: [
            "The infectious energy permeating through every street left an indelible mark on my memory.",
            "It offers a masterclass in urban planning and public transit efficiency."
]
    },
    {
        id: "makkar_2026_group_work_experience",
        category: "\ud83d\udc65 Collaboration & Teamwork",
        part1: [
            "Do you prefer tackling assignments autonomously or collaborating within a squad?",
            "What constitutes the greatest challenge when coordinating a heterogeneous team?",
            "Have you ever acted as a team leader during an academic presentation?",
            "How should conflicts among colleagues or group members be arbitrated?"
],
        part2: {
            title: "Describe a time when you worked in a group",
            bullets: [
                "When and where this occurred",
                "Who was involved or present",
                "What transpired during the experience",
                "And explain how you felt and what impact it left on you"
]
        },
        part3: [
            "Why do some people prefer to work by themselves?",
            "What should a leader do to make team members want to follow him or her?",
            "Should students learn to do group work?",
            "What group tasks are there in schools?"
],
        vocabulary: [
            {
                        "term": "synergy",
                        "meaningUz": "birgalikdagi kuchli hamjihatlik samarasi",
                        "example": "The synergy between data analysts and graphic designers produced an extraordinary report."
            },
            {
                        "term": "consensus",
                        "meaningUz": "umumiy yakdil fikr, kelishuv",
                        "example": "Reaching a consensus regarding the final product branding took several brainstorming rounds."
            },
            {
                        "term": "accountability",
                        "meaningUz": "mas'uliyatlilik va javobgarlik",
                        "example": "Clear delegation of roles fostered personal accountability among all squad members."
            }
],
        usefulPhrases: [
            "While disagreements were inevitable, our shared objective unified our collective efforts.",
            "It vividly showcased that the whole can indeed be far greater than the sum of its parts."
]
    },
    {
        id: "makkar_2026_decision_to_wait",
        category: "\ud83e\udde0 Decisions & Patience",
        part1: [
            "Do you consider yourself a patient individual in daily interactions?",
            "What do you normally do when waiting in an extensive supermarket queue?",
            "Have you ever rushed into an impulsive purchase and later regretted it?",
            "Why is patience deemed a vital virtue in professional careers?"
],
        part2: {
            title: "Describe a time you made a decision to wait for",
            bullets: [
                "When and where this occurred",
                "Who was involved or present",
                "What transpired during the experience",
                "And explain how you felt and what impact it left on you"
]
        },
        part3: [
            "1.  What do people in your country often do while waiting?",
            "2.  Why do some people like a slow-paced life?",
            "3.  Is being patient good for people? Why?",
            "4.  Are people less patient now than people in the past? Why?"
],
        vocabulary: [
            {
                        "term": "delayed gratification",
                        "meaningUz": "natijani kutish sabri, lazzatni kechiktirish",
                        "example": "Mastering delayed gratification is essential for achieving financial independence."
            },
            {
                        "term": "impulsive decision",
                        "meaningUz": "o'ylamasdan shoshilib qilingan qaror",
                        "example": "Rather than making an impulsive decision, I elected to wait for the seasonal price reduction."
            },
            {
                        "term": "bear fruit",
                        "meaningUz": "o'z samarasini bermoq",
                        "example": "My perseverance and willingness to wait ultimately bore fruit when an upgraded model arrived."
            }
],
        usefulPhrases: [
            "Holding back and evaluating market trends proved to be the wisest strategic move.",
            "It reaffirmed the ancient adage that good things genuinely come to those who wait."
]
    },
];
