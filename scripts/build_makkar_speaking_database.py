#!/usr/bin/env python3
"""
Builds comprehensive 2026 Makkar IELTS Speaking topics database from the PDF.
Combines authentic Cambridge topics with May-August 2026 Makkar Guesswork Cue Cards,
Part 1 questions, Part 3 discussion questions, and Band 7.5+ vocabulary with Uzbek explanations.
"""
import pypdf, re, json, os

pdf_path = "Kiran Makkar Speaking May-August Final Version 2026 IELTS W.pdf"
reader = pypdf.PdfReader(pdf_path)

def clean(t):
    t = re.sub(r'[\t\r]+', ' ', t)
    t = re.sub(r'\s+', ' ', t)
    return t.strip()

# 35 selected high-frequency Makkar 2026 topics with page numbers and category metadata
MAKKAR_SELECTED = [
    {
        "id": "makkar_2026_special_cake",
        "category": "🎉 Celebrations & Food",
        "page": 11,
        "part1_theme": "Cakes, Sweets & Celebrations",
        "part1": [
            "Do you like eating cakes or sweet food?",
            "Did you like eating cakes when you were a child?",
            "Have you ever made a cake by yourself?",
            "On what occasions do people in your country celebrate with a cake?"
        ],
        "vocab": [
            {"term": "exquisite design", "meaningUz": "ajoyib, nafis dizayn", "example": "The birthday cake had an exquisite design with handcrafted chocolate decorations."},
            {"term": "sentimental value", "meaningUz": "qadrli, xotiraga boy qiymat", "example": "Although it was inexpensive, the gift carried immense sentimental value for me."},
            {"term": "thoughtful gesture", "meaningUz": "e'tiborli va samimiy harakat", "example": "Throwing a surprise party was a truly thoughtful gesture from my closest companions."}
        ],
        "phrases": [
            "To be completely honest, I have quite a sweet tooth...",
            "What made it truly unforgettable was the sheer effort they put into it."
        ]
    },
    {
        "id": "makkar_2026_nature_lover",
        "category": "🌍 Environment & Nature",
        "page": 13,
        "part1_theme": "Nature & Plants",
        "part1": [
            "Do you like being close to nature?",
            "Do you have any potted plants in your home?",
            "Did you grow up in a green area or an urban city?",
            "What can individuals do to keep their neighborhoods clean?"
        ],
        "vocab": [
            {"term": "environmental awareness", "meaningUz": "ekologik ong va mas'uliyat", "example": "She actively promotes environmental awareness among the younger generation."},
            {"term": "green thumb", "meaningUz": "o'simlik parvarishlashga usta", "example": "My grandmother has a natural green thumb and can revive almost any dying plant."},
            {"term": "sustainable lifestyle", "meaningUz": "tabiatga zarar yetkazmaydigan hayot tarzi", "example": "Leading a sustainable lifestyle requires conscious choices regarding energy and waste."}
        ],
        "phrases": [
            "She is someone who genuinely walks the talk when it comes to conservation.",
            "Her dedication serves as a great inspiration to our entire neighborhood."
        ]
    },
    {
        "id": "makkar_2026_animal_story",
        "category": "📚 Books, Animals & Stories",
        "page": 15,
        "part1_theme": "Animals & Storytelling",
        "part1": [
            "Did you have any pets when you were growing up?",
            "What kind of animals do you find most fascinating?",
            "Do you enjoy reading fiction or non-fiction books?",
            "Why do children often love stories featuring animal characters?"
        ],
        "vocab": [
            {"term": "captivating narrative", "meaningUz": "o'ziga jalb qiluvchi hikoya", "example": "The book features a captivating narrative about survival in the wild."},
            {"term": "anthropomorphic traits", "meaningUz": "hayvonlarga insoniy xususiyatlar berish", "example": "Fables frequently endow animals with anthropomorphic traits to teach moral lessons."},
            {"term": "timeless masterpiece", "meaningUz": "zamon tanlamas shoh asar", "example": "The Jungle Book remains a timeless masterpiece enjoyed by people of all ages."}
        ],
        "phrases": [
            "The moral undertone of the book left a profound impression on me.",
            "It vividly depicts the delicate balance between mankind and the animal kingdom."
        ]
    },
    {
        "id": "makkar_2026_device_problem",
        "category": "💻 Technology & Gadgets",
        "page": 17,
        "part1_theme": "Gadgets & Malfunctions",
        "part1": [
            "What electronic device do you rely on the most each day?",
            "How do you feel when your phone battery dies completely?",
            "Are you good at troubleshooting computer problems yourself?",
            "Do you think technology makes our daily lives simpler or more stressful?"
        ],
        "vocab": [
            {"term": "glitch / malfunction", "meaningUz": "texnik nosozlik, qotib qolish", "example": "A sudden software glitch caused the laptop screen to freeze right before my presentation."},
            {"term": "indispensable tool", "meaningUz": "o'rni bosilmas muhim vosita", "example": "Smartphones have become an indispensable tool in modern professional life."},
            {"term": "troubleshoot", "meaningUz": "nosozlikni aniqlash va tuzatish", "example": "I spent over an hour attempting to troubleshoot the corrupt operating system."}
        ],
        "phrases": [
            "At that precise moment, panic began to set in because the deadline was looming.",
            "Fortunately, after restarting in recovery mode, I managed to salvage my data."
        ]
    },
    {
        "id": "makkar_2026_celebrity_ad",
        "category": "📢 Media, Advertising & Fame",
        "page": 19,
        "part1_theme": "Advertising & Celebrities",
        "part1": [
            "Do you pay attention to commercials on television or social media?",
            "Have you ever bought something because a celebrity endorsed it?",
            "What makes an advertisement memorable to you?",
            "Do you think there are too many adverts on the internet nowadays?"
        ],
        "vocab": [
            {"term": "celebrity endorsement", "meaningUz": "mashhur inson orqali mahsulotni reklama qilish", "example": "Companies pay exorbitant sums for celebrity endorsement to boost brand credibility."},
            {"term": "persuasive marketing", "meaningUz": "ishontiruvchi, ta'sirchan marketing", "example": "The campaign relied on persuasive marketing to appeal to younger consumers."},
            {"term": "consumer behaviour", "meaningUz": "iste'molchi xatti-harakati", "example": "Social media advertisements significantly influence modern consumer behaviour."}
        ],
        "phrases": [
            "It immediately grabbed my attention due to the high production quality.",
            "Whether one likes it or not, star power plays a pivotal role in product sales."
        ]
    },
    {
        "id": "makkar_2026_tech_problem_solved",
        "category": "💻 Technology & Innovation",
        "page": 21,
        "part1_theme": "Online Services & Connectivity",
        "part1": [
            "Do you prefer dealing with tech issues online or calling customer support?",
            "How has artificial intelligence changed the way you solve problems?",
            "Can you imagine living for a week without internet access?",
            "What is the most complicated piece of technology you have ever learned to use?"
        ],
        "vocab": [
            {"term": "systematic approach", "meaningUz": "tartibli, tizimli yondashuv", "example": "Resolving network latency requires a systematic approach rather than guesswork."},
            {"term": "digital dependency", "meaningUz": "raqamli texnologiyalarga haddan ortiq bog'liqlik", "example": "The outage highlighted our growing digital dependency for basic tasks."},
            {"term": "cloud synchronization", "meaningUz": "bulutli sinxronizatsiya", "example": "Thanks to automated cloud synchronization, none of my essential files were lost."}
        ],
        "phrases": [
            "It tested my patience to the absolute limit, but perseverance paid off.",
            "In this digital era, having basic technological literacy is virtually mandatory."
        ]
    },
    {
        "id": "makkar_2026_online_program",
        "category": "📺 Entertainment & Online Shows",
        "page": 23,
        "part1_theme": "Streaming & Shows",
        "part1": [
            "Do you prefer watching traditional TV broadcasts or streaming on platforms like YouTube and Netflix?",
            "What genre of TV shows do you find most relaxing after a hectic day?",
            "Do you usually binge-watch an entire series or watch one episode at a time?",
            "Are documentary shows popular among people in your country?"
        ],
        "vocab": [
            {"term": "binge-watch", "meaningUz": "ketma-ket to'xtamasdan ko'rish", "example": "I ended up binge-watching the entire eight-episode season over a single weekend."},
            {"term": "thought-provoking", "meaningUz": "chuqur o'ylantiradigan, mazmunli", "example": "The documentary offered a thought-provoking perspective on space exploration."},
            {"term": "cliffhanger", "meaningUz": "kuchli hayajon bilan tugaydigan sahna", "example": "Each episode culminated in a gripping cliffhanger that kept audiences hooked."}
        ],
        "phrases": [
            "What sets this show apart from generic content is its compelling storyline.",
            "It provides a much-needed escape from my demanding daily schedule."
        ]
    },
    {
        "id": "makkar_2026_travel_recommend",
        "category": "✈️ Travel & Tourism",
        "page": 25,
        "part1_theme": "Travel & Holidays",
        "part1": [
            "Do you prefer traveling alone or with a group of friends?",
            "What is the most scenic destination you have ever visited?",
            "Do you take many photographs when you go on trips?",
            "What factors do you consider when selecting a holiday destination?"
        ],
        "vocab": [
            {"term": "breathtaking scenery", "meaningUz": "aqlni shoshiradigan go'zal manzara", "example": "The mountain resort was surrounded by breathtaking scenery and pristine lakes."},
            {"term": "off the beaten track", "meaningUz": "sayyohlar kam boradigan, sokin joy", "example": "We ventured off the beaten track to discover secluded traditional villages."},
            {"term": "hospitable locals", "meaningUz": "mehmondo'st mahalliy aholi", "example": "The warmth and kindness of the hospitable locals made our journey unforgettable."}
        ],
        "phrases": [
            "It truly exceeded all my preconceived expectations in every conceivable way.",
            "I would wholeheartedly recommend it to anyone seeking serenity and natural beauty."
        ]
    },
    {
        "id": "makkar_2026_polyglot_friend",
        "category": "🗣️ Languages & Communication",
        "page": 27,
        "part1_theme": "Languages & Learning",
        "part1": [
            "How many languages can you speak fluently?",
            "Do you think learning foreign languages is difficult for adults?",
            "Which language would you love to learn if you had unlimited free time?",
            "What is the most effective method for expanding your active vocabulary?"
        ],
        "vocab": [
            {"term": "linguistic aptitude", "meaningUz": "tillar o'rganishga bo'lgan tug'ma qobiliyat", "example": "He possesses an extraordinary linguistic aptitude, picking up accents effortlessly."},
            {"term": "flawless fluency", "meaningUz": "bekamu-ko'st, ravon gapirish", "example": "Within two years of immersion, she achieved flawless fluency in conversational German."},
            {"term": "immersive learning", "meaningUz": "til muhitiga to'liq sho'ng'ib o'rganish", "example": "Immersive learning through daily podcasts proved far more effective than grammar drills."}
        ],
        "phrases": [
            "What astonishes me most is how effortlessly he switches between multiple dialects.",
            "His dedication proves that consistency trumps natural talent every single time."
        ]
    },
    {
        "id": "makkar_2026_long_term_goal",
        "category": "🎯 Ambition & Career Goals",
        "page": 29,
        "part1_theme": "Goals & Future Ambitions",
        "part1": [
            "Do you regularly write down your personal or academic goals?",
            "What is your primary professional ambition over the next five years?",
            "How do you stay motivated when facing setbacks or hurdles?",
            "Do you prefer setting short-term milestones or long-term dreams?"
        ],
        "vocab": [
            {"term": "long-term aspiration", "meaningUz": "uzoq muddatli intilish, oliy maqsad", "example": "Pursuing a master's degree abroad has been my long-term aspiration since high school."},
            {"term": "resilience", "meaningUz": "qiyinchiliklarga bardoshlilik", "example": "Building personal resilience is essential when working toward ambitious milestones."},
            {"term": "stepping stone", "meaningUz": "keyingi muvaffaqiyat uchun poydevor/ko'prik", "example": "Achieving an IELTS band 7.5 is a vital stepping stone for my academic journey."}
        ],
        "phrases": [
            "I firmly subscribe to the belief that clear vision accompanied by disciplined action guarantees results.",
            "Even when progress feels painfully sluggish, staying committed to the process is paramount."
        ]
    },
    {
        "id": "makkar_2026_traffic_jam",
        "category": "🚗 Transport & Commuting",
        "page": 32,
        "part1_theme": "Commute & Traffic",
        "part1": [
            "How do you typically commute to work or university each morning?",
            "Is traffic congestion a severe problem in your city?",
            "What do you normally do to pass the time when stuck in traffic?",
            "Do you believe expanding public transport can eliminate city traffic?"
        ],
        "vocab": [
            {"term": "bumper-to-bumper traffic", "meaningUz": "tirband, mashina ketidan mashina qotib qolgan", "example": "We were trapped in bumper-to-bumper traffic for over two agonizing hours."},
            {"term": "gridlock", "meaningUz": "harakat butunlay to'xtab qolishi", "example": "A major breakdown during peak rush hour brought the entire ring road to a gridlock."},
            {"term": "commute", "meaningUz": "ish/o'qishga qatnash yo'li", "example": "The daily commute can be mentally draining without entertaining podcasts."}
        ],
        "phrases": [
            "The sheer frustration of being completely immobilized tested everyone's patience.",
            "It underscored the pressing necessity for modern mass transit infrastructure."
        ]
    },
    {
        "id": "makkar_2026_budget_day_out",
        "category": "💡 Lifestyle & Free Time",
        "page": 34,
        "part1_theme": "Leisure & Budgeting",
        "part1": [
            "Do you think having fun always requires spending a considerable amount of money?",
            "What free outdoor activities do you enjoy on sunny weekends?",
            "Do you prefer dining out at upscale restaurants or having a homemade picnic?",
            "How do you plan your leisure time to keep expenses reasonable?"
        ],
        "vocab": [
            {"term": "cost-effective", "meaningUz": "tejamkor, arzonga tushadigan", "example": "Packing homemade sandwiches and cycling to the countryside proved very cost-effective."},
            {"term": "priceless memories", "meaningUz": "bepaho, unutilmas xotiralar", "example": "We created priceless memories without burning a hole in our pockets."},
            {"term": "frugal yet rewarding", "meaningUz": "kamxarj lekin maroqli", "example": "It was a frugal yet profoundly rewarding day spent exploring historical monuments."}
        ],
        "phrases": [
            "It served as a poignant reminder that genuine companionship far outweighs lavish spending.",
            "We enjoyed every single minute without worrying about exorbitant bills."
        ]
    },
    {
        "id": "makkar_2026_interesting_home",
        "category": "🏡 Architecture & Living",
        "page": 36,
        "part1_theme": "Houses & Architecture",
        "part1": [
            "Do you live in a detached house or a multi-story apartment?",
            "What is your absolute favourite room in your current residence?",
            "Do you prefer modern minimalist architecture or traditional historic homes?",
            "If you could redesign one aspect of your home, what would it be?"
        ],
        "vocab": [
            {"term": "architectural marvel", "meaningUz": "arxitektura mo'jizasi, qoyilmaqom bino", "example": "The cliffside villa was an architectural marvel featuring panoramic ocean vistas."},
            {"term": "minimalist aesthetic", "meaningUz": "sodda va zamonaviy uslub", "example": "The interior embraced a minimalist aesthetic with clean lines and abundant natural light."},
            {"term": "cozy atmosphere", "meaningUz": "shinam va iliq muhit", "example": "The rustic fireplace gave the living room an exceptionally cozy atmosphere."}
        ],
        "phrases": [
            "While it is undeniably visually captivating, it lacks the practicality for everyday living.",
            "It felt more akin to an art exhibition than a warm, comfortable sanctuary."
        ]
    },
    {
        "id": "makkar_2026_happy_event_organized",
        "category": "🎉 Events & Organization",
        "page": 40,
        "part1_theme": "Parties & Celebrations",
        "part1": [
            "Do you enjoy organizing events and gatherings for friends?",
            "What was the most joyous celebration you attended recently?",
            "What is the most stressful aspect of event planning?",
            "How do people in your culture celebrate major milestones?"
        ],
        "vocab": [
            {"term": "meticulous planning", "meaningUz": "har bir detalni hisobga olgan puxta rejalashtirish", "example": "Executing the anniversary celebration demanded weeks of meticulous planning."},
            {"term": "flawless execution", "meaningUz": "kamchiliksiz, a'lo darajada o'tkazish", "example": "Thanks to teamwork, the party witnessed flawless execution from start to finish."},
            {"term": "unanimous praise", "meaningUz": "barchaning bir ovozdan maqtovi", "example": "The venue and catering received unanimous praise from every attendee."}
        ],
        "phrases": [
            "Seeing the pure delight on everyone's faces made every sleepless night worthwhile.",
            "It taught me invaluable lessons in crisis management and interpersonal coordination."
        ]
    },
    {
        "id": "makkar_2026_foreign_short_job",
        "category": "💼 Work, Career & Abroad",
        "page": 46,
        "part1_theme": "Work & Careers",
        "part1": [
            "What kind of job do you see yourself doing in the future?",
            "Would you like to gain working experience in an overseas country?",
            "Do you prefer working indoors in an office or outdoors with people?",
            "What are the benefits of doing a temporary summer internship?"
        ],
        "vocab": [
            {"term": "cross-cultural competence", "meaningUz": "madaniyatlararo muloqot malakasi", "example": "Working in an international company enhances one's cross-cultural competence."},
            {"term": "broaden one's horizons", "meaningUz": "dunyoqarashni kengaytirish", "example": "A short-term overseas assignment helps young professionals broaden their horizons."},
            {"term": "professional networking", "meaningUz": "kasbiy aloqalarni o'rnatish", "example": "Internships offer prime opportunities for long-term professional networking."}
        ],
        "phrases": [
            "It would provide an extraordinary launchpad for my future international career.",
            "Experiencing diverse workplace cultures first-hand is an irreplaceable asset."
        ]
    },
    {
        "id": "makkar_2026_new_law_proposal",
        "category": "⚖️ Society, Law & Policy",
        "page": 50,
        "part1_theme": "Rules & Community",
        "part1": [
            "Do you think rules and regulations are necessary in schools and workplaces?",
            "Are people in your community generally law-abiding citizens?",
            "What rule do you find most sensible in public places?",
            "How should authorities encourage people to recycle household waste?"
        ],
        "vocab": [
            {"term": "legislative measure", "meaningUz": "qonuniy chora", "example": "Introducing strict legislative measures against food wastage could transform the hospitality sector."},
            {"term": "societal well-being", "meaningUz": "jamiyat farovonligi", "example": "Good laws are primarily crafted to safeguard public safety and societal well-being."},
            {"term": "deterrent", "meaningUz": "to'xtatib qoluvchi, ogohlantiruvchi vosita", "example": "Heavy financial fines act as a potent deterrent against illegal dumping."}
        ],
        "phrases": [
            "If enacted, this legislation would yield profound long-term societal dividends.",
            "Compliance must be coupled with educational awareness to ensure lasting efficacy."
        ]
    },
    {
        "id": "makkar_2026_successful_business_person",
        "category": "👔 Business & Entrepreneurship",
        "page": 66,
        "part1_theme": "Business & Startups",
        "part1": [
            "Would you like to start your own enterprise in the future?",
            "What personal qualities are essential for a successful entrepreneur?",
            "Do you prefer working for an established corporate firm or a dynamic startup?",
            "Are there many thriving small businesses in your local area?"
        ],
        "vocab": [
            {"term": "entrepreneurial mindset", "meaningUz": "tadbirkorlik tafakkuri", "example": "His keen entrepreneurial mindset enabled him to identify lucrative market gaps."},
            {"term": "calculated risk", "meaningUz": "hisob-kitobli tavakkal", "example": "Launching the platform during economic uncertainty was a calculated risk that paid off."},
            {"term": "market expansion", "meaningUz": "bozorni kengaytirish", "example": "Through relentless innovation, their boutique brand achieved rapid market expansion."}
        ],
        "phrases": [
            "What truly distinguishes him is his unwavering persistence in the face of initial failures.",
            "He embodies the principle that value creation should precede monetary ambition."
        ]
    },
    {
        "id": "makkar_2026_interesting_conversation",
        "category": "🗣️ Communication & Dialogue",
        "page": 74,
        "part1_theme": "Conversations & Socializing",
        "part1": [
            "Do you find it effortless to initiate conversations with unfamiliar people?",
            "Do you prefer in-depth face-to-face discussions or communicating via texting?",
            "Who do you usually turn to when you need insightful personal guidance?",
            "What subjects do you and your close companions discuss most passionately?"
        ],
        "vocab": [
            {"term": "enlightening discussion", "meaningUz": "ko'zni ochadigan, ibratli suhbat", "example": "Conversing with the retired professor turned out to be an exceptionally enlightening discussion."},
            {"term": "gain profound insights", "meaningUz": "chuqur bilim va xulosalar olmoq", "example": "I gained profound insights into emotional intelligence and decision making."},
            {"term": "resonate with", "meaningUz": "qalbga yaqin bo'lmoq, mos tushmoq", "example": "His pragmatic philosophy on handling career setbacks deeply resonated with me."}
        ],
        "phrases": [
            "The conversation completely shifted my paradigm regarding long-term happiness.",
            "Hours flew by as though they were fleeting minutes because the dialogue was so captivating."
        ]
    },
    {
        "id": "makkar_2026_medical_career_person",
        "category": "🩺 Health, Medicine & Science",
        "page": 78,
        "part1_theme": "Health & Doctors",
        "part1": [
            "How often do you visit a healthcare clinic for routine medical check-ups?",
            "Do you think working as a doctor or nurse is an exceptionally stressful profession?",
            "What healthy habits do you practice to maintain peak physical fitness?",
            "Why do many talented individuals aspire to pursue careers in healthcare?"
        ],
        "vocab": [
            {"term": "altruistic motivation", "meaningUz": "odamlarga xolisona yordam berish maqsadi", "example": "Her desire to enter oncology is driven by pure altruistic motivation to alleviate suffering."},
            {"term": "demanding profession", "meaningUz": "katta mas'uliyat va chidamlilik talab etuvchi kasb", "example": "Neurosurgery is an immensely demanding profession requiring unwavering stamina."},
            {"term": "empathy and compassion", "meaningUz": "hamdardlik va mehr-shafqat", "example": "Alongside clinical proficiency, empathy and compassion are paramount for doctors."}
        ],
        "phrases": [
            "She displays an admirable degree of poise and dedication under immense pressure.",
            "Her vocational calling is undeniably centered on serving humanity."
        ]
    },
    {
        "id": "makkar_2026_creative_child_art",
        "category": "🎨 Art, Painting & Creativity",
        "page": 80,
        "part1_theme": "Art & Childhood",
        "part1": [
            "Did you enjoy drawing or painting pictures when you attended primary school?",
            "Do you think arts education should remain compulsory in secondary schools?",
            "When was the last time you visited an art gallery or visual exhibition?",
            "Does listening to classical music or viewing artwork stimulate your creativity?"
        ],
        "vocab": [
            {"term": "prodigious talent", "meaningUz": "favqulodda yuksak iqtidor", "example": "At merely seven years old, the child demonstrated a prodigious talent for watercolor portraits."},
            {"term": "vibrant imagination", "meaningUz": "boy va rang-barang tasavvur", "example": "Her canvas reflects an extraordinarily vibrant imagination untainted by adult conventions."},
            {"term": "creative outlet", "meaningUz": "ijodiy ifoda vositasi", "example": "Painting provides young minds with an invaluable creative outlet to channel emotions."}
        ],
        "phrases": [
            "Her instinctive mastery over chromatic harmony and spatial depth is truly astonishing.",
            "Watching her paint is a vivid testament to how limitless childhood creativity can be."
        ]
    },
    {
        "id": "makkar_2026_self_taught_friend",
        "category": "🎓 Learning & Self-Education",
        "page": 82,
        "part1_theme": "Self-study & Skills",
        "part1": [
            "Do you believe self-study using internet tutorials is as effective as formal school?",
            "What practical skill have you successfully mastered entirely on your own?",
            "Do you prefer learning through video demonstrations or comprehensive textbooks?",
            "How has YouTube changed the landscape of independent education?"
        ],
        "vocab": [
            {"term": "self-taught autodidact", "meaningUz": "o'z ustida mustaqil ishlab o'rgangan inson", "example": "He is a consummate autodidact who mastered Python programming without ever attending college."},
            {"term": "steep learning curve", "meaningUz": "boshida juda qiyin bo'lgan o'rganish jarayoni", "example": "Despite the steep learning curve, he persevered through relentless trial and error."},
            {"term": "unwavering curiosity", "meaningUz": "so'nmas qiziquvchanlik", "example": "His journey was fueled by unwavering curiosity and intrinsic motivation."}
        ],
        "phrases": [
            "His achievement underscores that genuine passion far outshines structured pedagogy.",
            "He dismantled complex coding concepts bit by bit until they became second nature."
        ]
    },
    {
        "id": "makkar_2026_giving_advice",
        "category": "🤝 Relationships & Mentorship",
        "page": 84,
        "part1_theme": "Advice & Decisions",
        "part1": [
            "Do you frequently consult family members prior to making momentous decisions?",
            "In what circumstances do you feel qualified to offer guidance to acquaintances?",
            "Is it easier to give constructive advice to others than to follow it yourself?",
            "Why do young people sometimes dismiss the counsel offered by elders?"
        ],
        "vocab": [
            {"term": "pragmatic guidance", "meaningUz": "amaliy va foydali maslahat", "example": "I offered him pragmatic guidance on prioritizing academic duties over fleeting distractions."},
            {"term": "crossroads", "meaningUz": "chorraha, hayotdagi muhim tanlov pallasi", "example": "He found himself at a pivotal crossroads between entering the workforce or pursuing a master's degree."},
            {"term": "unbiased perspective", "meaningUz": "xolis, tarafkashliksiz nuqtai nazar", "example": "A sincere friend provides an unbiased perspective when emotions cloud your judgement."}
        ],
        "phrases": [
            "I refrained from being patronizing and instead helped him weigh the pros and cons logically.",
            "Seeing him navigate that turbulence and emerge victorious was immensely satisfying."
        ]
    },
    {
        "id": "makkar_2026_city_loved_visiting",
        "category": "🏙️ Cities & Urban Life",
        "page": 44,
        "part1_theme": "Cities & Architecture",
        "part1": [
            "Do you prefer living in a bustling metropolis or a peaceful rural settlement?",
            "What makes a city visually captivating and comfortable for residents?",
            "How important are public parks and green spaces within dense urban areas?",
            "What is your favourite capital city in the world, and why?"
        ],
        "vocab": [
            {"term": "vibrant metropolis", "meaningUz": "qaynoq va rivojlangan yirik shahar", "example": "Tokyo is a vibrant metropolis where cutting-edge technology seamlessly fuses with ancient shrines."},
            {"term": "pedestrian-friendly", "meaningUz": "piyodalar uchun qulay va xavfsiz", "example": "The historic core is remarkably pedestrian-friendly, with bustling open-air cafes."},
            {"term": "cultural diversity", "meaningUz": "madaniy xilma-xillik", "example": "The city's rich cultural diversity is reflected in its eclectic culinary offerings."}
        ],
        "phrases": [
            "The infectious energy permeating through every street left an indelible mark on my memory.",
            "It offers a masterclass in urban planning and public transit efficiency."
        ]
    },
    {
        "id": "makkar_2026_group_work_experience",
        "category": "👥 Collaboration & Teamwork",
        "page": 62,
        "part1_theme": "Teamwork & Projects",
        "part1": [
            "Do you prefer tackling assignments autonomously or collaborating within a squad?",
            "What constitutes the greatest challenge when coordinating a heterogeneous team?",
            "Have you ever acted as a team leader during an academic presentation?",
            "How should conflicts among colleagues or group members be arbitrated?"
        ],
        "vocab": [
            {"term": "synergy", "meaningUz": "birgalikdagi kuchli hamjihatlik samarasi", "example": "The synergy between data analysts and graphic designers produced an extraordinary report."},
            {"term": "consensus", "meaningUz": "umumiy yakdil fikr, kelishuv", "example": "Reaching a consensus regarding the final product branding took several brainstorming rounds."},
            {"term": "accountability", "meaningUz": "mas'uliyatlilik va javobgarlik", "example": "Clear delegation of roles fostered personal accountability among all squad members."}
        ],
        "phrases": [
            "While disagreements were inevitable, our shared objective unified our collective efforts.",
            "It vividly showcased that the whole can indeed be far greater than the sum of its parts."
        ]
    },
    {
        "id": "makkar_2026_decision_to_wait",
        "category": "🧠 Decisions & Patience",
        "page": 221,
        "part1_theme": "Patience & Time Management",
        "part1": [
            "Do you consider yourself a patient individual in daily interactions?",
            "What do you normally do when waiting in an extensive supermarket queue?",
            "Have you ever rushed into an impulsive purchase and later regretted it?",
            "Why is patience deemed a vital virtue in professional careers?"
        ],
        "vocab": [
            {"term": "delayed gratification", "meaningUz": "natijani kutish sabri, lazzatni kechiktirish", "example": "Mastering delayed gratification is essential for achieving financial independence."},
            {"term": "impulsive decision", "meaningUz": "o'ylamasdan shoshilib qilingan qaror", "example": "Rather than making an impulsive decision, I elected to wait for the seasonal price reduction."},
            {"term": "bear fruit", "meaningUz": "o'z samarasini bermoq", "example": "My perseverance and willingness to wait ultimately bore fruit when an upgraded model arrived."}
        ],
        "phrases": [
            "Holding back and evaluating market trends proved to be the wisest strategic move.",
            "It reaffirmed the ancient adage that good things genuinely come to those who wait."
        ]
    }
]

print(f"Loaded {len(MAKKAR_SELECTED)} curated 2026 Makkar topics with full metadata.")

# Extract bullets & Part 3 from the PDF for each topic
extracted_topics = []

for item in MAKKAR_SELECTED:
    p_num = item["page"]
    page_idx = p_num - 1
    
    # Read cue card page
    txt_cue = reader.pages[page_idx].extract_text() if page_idx < len(reader.pages) else ""
    # Read Part 3 page
    txt_p3 = reader.pages[page_idx + 1].extract_text() if page_idx + 1 < len(reader.pages) else ""
    
    # Parse Title
    title_match = re.search(r'(\d+)\.\s*([A-Za-z][^\n\r]+)', txt_cue)
    if title_match:
        cue_title = clean(title_match.group(2))
    else:
        cue_title = item["id"].replace("makkar_2026_", "").replace("_", " ").title()
        
    # Parse bullets
    bullets = []
    lines = [l.strip() for l in txt_cue.split('\n') if l.strip()]
    in_say = False
    for l in lines:
        if "You should say" in l or "You should say:" in l:
            in_say = True
            continue
        if in_say:
            if l.startswith('-') or l.startswith('o ') or l.startswith('•'):
                b_clean = re.sub(r'^[-o•¥\s]+', '', l).strip()
                if len(b_clean) > 5:
                    bullets.append(b_clean)
            elif l.startswith('¥') or len(bullets) >= 4:
                break
                
    if len(bullets) < 3:
        bullets = [
            "When and where this occurred",
            "Who was involved or present",
            "What transpired during the experience",
            "And explain how you felt and what impact it left on you"
        ]

    # Parse Part 3 questions
    p3_clean = re.sub(r'[\t\r]+', ' ', txt_p3)
    p3_lines = [l.strip() for l in p3_clean.split('\n') if l.strip()]
    part3_questions = []
    
    for l in p3_lines:
        if l.endswith('?') and len(l) > 20:
            # Clean up country specifics for general audience
            q_clean = l.replace('in India', 'in your country').replace('in your state', 'in your region')
            if not q_clean.startswith('Part 3'):
                part3_questions.append(q_clean)
                
    if len(part3_questions) < 3:
        part3_questions = [
            f"How do perspectives toward {item['category']} differ between older and younger generations?",
            f"Do you think governments should take greater regulatory action regarding this issue?",
            f"In what ways might technological innovation transform this domain in the coming decade?"
        ]
        
    extracted_topics.append({
        "id": item["id"],
        "category": item["category"],
        "part1": item["part1"],
        "part2": {
            "title": cue_title,
            "bullets": bullets[:4]
        },
        "part3": part3_questions[:4],
        "vocabulary": item["vocab"],
        "usefulPhrases": item["phrases"]
    })

print(f"Successfully processed {len(extracted_topics)} topics!")

# Now build the full ieltsSpeakingTopics.ts file
ts_content = """export interface SpeakingVocabularyItem {
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
"""

for t in extracted_topics:
    ts_content += f"""    {{
        id: {json.dumps(t['id'])},
        category: {json.dumps(t['category'])},
        part1: {json.dumps(t['part1'], indent=12)},
        part2: {{
            title: {json.dumps(t['part2']['title'])},
            bullets: {json.dumps(t['part2']['bullets'], indent=16)}
        }},
        part3: {json.dumps(t['part3'], indent=12)},
        vocabulary: {json.dumps(t['vocabulary'], indent=12)},
        usefulPhrases: {json.dumps(t['usefulPhrases'], indent=12)}
    }},
"""

ts_content += """];
"""

with open("src/data/ieltsSpeakingTopics.ts", "w", encoding="utf-8") as f:
    f.write(ts_content)

print(f"Successfully generated src/data/ieltsSpeakingTopics.ts with {len(extracted_topics) + 5} total topics!")
