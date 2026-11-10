import { GrammarRule, Lesson, ListenContent } from '../../types/lesson';

/**
 * A2 ENRICHMENT PACK — Step-by-step standart (A1 bilan bir xil):
 * Har bir dars: 1) Learn (Vocab + Grammar)
 *               2) Listen (TTS audio + 2 comprehension savol)
 *               3) Practice -> 4) Test
 *
 * A2 da U1-U3 darslarda structured grammarRules bo'sh edi — shu yerda to'ldiriladi.
 * Listening barcha 25 darsga qo'shiladi (runtime merge orqali, 60-80 so'z, A2 daraja).
 */

// ── 1. Yetishmayotgan GRAMMAR qoidalari (U1-U3, 15 dars) ──
export const A2_GRAMMAR_PATCHES: Record<string, GrammarRule[]> = {
  'en-a2-u1-l1': [
    {
      pattern: 'Subject + V-ed (regular) — worked, visited, watched',
      meaning: 'O‘tgan zamon muntazam fe’llar: imlo + -ed talaffuzi /t/, /d/, /ɪd/',
      usageNotes:
        'work→worked /t/, play→played /d/, want→wanted /ɪd/. Vaqt markerlari: yesterday, last night, two days ago.',
      examples: [
        {
          sentence: 'I visited my grandmother yesterday.',
          translation: 'Men kecha buvimnikiga bordim.',
        },
        {
          sentence: 'They watched a football match last night.',
          translation: 'Ular kecha oqshom futbol o‘yini ko‘rishdi.',
        },
      ],
    },
  ],
  'en-a2-u1-l2': [
    {
      pattern: 'Subject + irregular past (go→went, see→saw, buy→bought, take→took)',
      meaning: 'Eng ko‘p ishlatiladigan nomuntazam fe’llarning o‘tgan zamoni (yodlash shart)',
      usageNotes:
        'Nomuntazam fe’llarga -ed qo‘shilmaydi: goed ❌ → went ✅. Jadvalni kichik guruhlarda yodlang.',
      examples: [
        {
          sentence: 'We went to Samarkand and saw Registan Square.',
          translation: 'Biz Samarqandga bordik va Registon maydonini ko‘rdik.',
        },
        {
          sentence: 'She bought a new dress and took many photos.',
          translation: 'U yangi ko‘ylak sotib oldi va ko‘p suratga tushdi.',
        },
      ],
    },
  ],
  'en-a2-u1-l3': [
    {
      pattern: 'Did + Subject + base verb? / Subject + didn’t + base verb',
      meaning:
        'Past Simple so‘roq va inkor: did/didn’t dan keyin fe’l boshlang‘ich shaklga qaytadi',
      usageNotes: 'Did you went? ❌ → Did you go? ✅. Javob: Yes, I did. / No, I didn’t.',
      examples: [
        { sentence: 'Did you enjoy the trip?', translation: 'Sayohat sizga yoqdimi?' },
        {
          sentence: 'He didn’t watch the film because he was busy.',
          translation: 'U band bo‘lgani uchun filmni ko‘rmadi.',
        },
      ],
    },
  ],
  'en-a2-u1-l4': [
    {
      pattern: 'was / were + V-ing (Past Continuous)',
      meaning: 'O‘tgan zamonda davom etayotgan harakat: at 8 pm, all evening, parallel jarayonlar',
      usageNotes: 'I/He/She/It + was, You/We/They + were. Markerlar: while, when, at that moment.',
      examples: [
        {
          sentence: 'At 8 pm yesterday I was cooking dinner.',
          translation: 'Kecha soat 8 da men kechki ovqat pishirayotgan edim.',
        },
        {
          sentence: 'While I was reading, my brother was playing games.',
          translation: 'Men kitob o‘qiyotganimda akam o‘yin o‘ynayotgan edi.',
        },
      ],
    },
  ],
  'en-a2-u1-l5': [
    {
      pattern:
        'Past Continuous (davom etayotgan fon) + when + Past Simple (keskin voqea) / while + Past Continuous',
      meaning:
        'Hikoya qilish: When I arrived, they were eating. While-clause ichida Past Simple kelmaydi',
      usageNotes:
        'When + Past Simple (qisqa kesish), While + Past Continuous (uzoq fon). Bog‘lovchilar: suddenly, then, after that.',
      examples: [
        {
          sentence: 'When the phone rang, I was taking a shower.',
          translation: 'Telefon jiringlaganda men dush qabul qilayotgan edim.',
        },
        {
          sentence: 'While we were walking home, it started to rain.',
          translation: 'Biz uyga ketayotganimizda yomg‘ir yog‘a boshladi.',
        },
      ],
    },
  ],
  'en-a2-u2-l1': [
    {
      pattern: 'am / is / are + going to + base verb',
      meaning: 'Oldindan rejalangan niyatlar + ko‘z o‘ngimizdagi dalilga asoslangan bashorat',
      usageNotes:
        'Look at the clouds! It’s going to rain. I’m going to study medicine next year (qaror oldindan qabul qilingan).',
      examples: [
        {
          sentence: 'We are going to visit Bukhara in spring.',
          translation: 'Biz bahorda Buxoroga borishni rejalashtirganmiz.',
        },
        {
          sentence: 'Be careful! You are going to drop your phone.',
          translation: 'Ehtiyot bo‘ling! Telefoningizni tushirib yuborayapsiz.',
        },
      ],
    },
  ],
  'en-a2-u2-l2': [
    {
      pattern: 'will + base verb / won’t + base verb',
      meaning:
        'Gap paytida qabul qilingan tezkor qaror, taklif (I’ll help), va’da (I won’t be late)',
      usageNotes:
        'Oldindan reja = going to; hozir qaror = will. So‘roq taklif: Will you...? / Shall I...?',
      examples: [
        {
          sentence: 'It’s heavy. I’ll carry it for you.',
          translation: 'Og‘ir ekan. Men sizga ko‘tarishib beraman.',
        },
        {
          sentence: 'I promise I won’t forget your birthday.',
          translation: 'Tug‘ilgan kuningni unutmaslikka va’da beraman.',
        },
      ],
    },
  ],
  'en-a2-u2-l3': [
    {
      pattern: 'am / is / are + V-ing (fixed future arrangement)',
      meaning: 'Kelishilgan, vaqti belgilangan rejalar: bilet olingan, uchrashuv tayinlangan',
      usageNotes:
        'I’m meeting my teacher at 5 pm tomorrow (tayinlangan). Vaqt ko‘rsatkichi shart: tomorrow, on Friday, next week.',
      examples: [
        {
          sentence: 'We are flying to Istanbul next Monday.',
          translation: 'Biz kelasi dushanba kuni Istanbulga uchyapmiz (chipta olingan).',
        },
        {
          sentence: 'She is having dinner with her boss tonight.',
          translation: 'U bugun oqshom rahbari bilan kechki ovqatlanmoqda (kelishilgan).',
        },
      ],
    },
  ],
  'en-a2-u2-l4': [
    {
      pattern:
        'will (tezkor qaror) vs going to (oldindan reja) vs Present Continuous (tayinlangan uchrashuv)',
      meaning: 'Uchala kelasi zamon shaklini kontekstga qarab tanlash jadvali',
      usageNotes:
        '— I’ve decided already → going to. — OK, I’ve just decided! → will. — Time and place fixed → Present Continuous.',
      examples: [
        {
          sentence:
            'A: Why are you taking an umbrella? B: I’m going to walk home. It’s going to rain.',
          translation:
            'A: Nega soyabon olyapsan? B: Piyoda ketmoqchiman. Yomg‘ir yog‘adiganga o‘xshaydi.',
        },
        {
          sentence:
            'A: The phone is ringing! B: I’ll answer it. I’m talking to HR at 3 pm, so hurry.',
          translation:
            'A: Telefon jiringlayapti! B: Men javob beraman. Soat 3 da HR bilan gaplashaman, shoshil.',
        },
      ],
    },
  ],
  'en-a2-u2-l5': [
    {
      pattern:
        'Shall we...? / Let’s... / Would you like to...? + Yes, I’d love to / Sorry, I can’t (polite refusal)',
      meaning: 'Taklif bildirish va xushmuomala javob: qabul + muloyim rad etish + muqobil taklif',
      usageNotes: 'Rad etishda sabab + muqobil: I’d love to, but I’m busy. How about Friday?',
      examples: [
        {
          sentence: 'Shall we play tennis on Saturday? — I’d love to!',
          translation: 'Shanba kuni tennis o‘ynaymizmi? — Jonim bilan!',
        },
        {
          sentence:
            'Would you like to come to my party? — Sorry, I can’t. I’m visiting my parents.',
          translation: 'Ziyofatimga kelasanmi? — Kechir, kelolmayman. Ota-onamnikiga boraman.',
        },
      ],
    },
  ],
  'en-a2-u3-l1': [
    {
      pattern:
        'Adj-er / more + Adj + than (comparative) | the + Adj-est / the most + Adj (superlative)',
      meaning:
        'Qiyosiy va orttirma darajalar: taller than, more interesting than; the best, the most beautiful',
      usageNotes:
        'Qisqa sifatlar -er/-est, uzh longer sifatlar more/most. Istisnolar: good→better→best, bad→worse→worst. as...as tenglik.',
      examples: [
        {
          sentence:
            'Reading is more useful than watching TV, and speaking is the most difficult skill.',
          translation: 'O‘qish televizor ko‘rishdan foydaliroq, gapirish esa eng qiyin ko‘nikma.',
        },
        {
          sentence: 'My new phone is cheaper and better than my old one.',
          translation: 'Yangi telefonim eskisidan arzonroq va yaxshiroq.',
        },
      ],
    },
  ],
  'en-a2-u3-l2': [
    {
      pattern:
        'much + uncountable / many + countable / a lot of + both | a few + countable / a little + uncountable',
      meaning: 'Miqdor ko‘rsatkichlari: sanaladigan vs sanalmaydigan otlar bilan to‘g‘ri juftlik',
      usageNotes:
        'a few = bir necha (ijobiy, yetarli), few = kam (salbiy); a little vs little da ham shu farq.',
      examples: [
        {
          sentence: 'I have a few friends in Tashkent and a little free time today.',
          translation: 'Toshkentda bir nechta do‘stim bor va bugun biroz bo‘sh vaqtim bor.',
        },
        {
          sentence: 'There isn’t much milk, but there are many apples.',
          translation: 'Sut ko‘p emas, lekin olmalar ko‘p.',
        },
      ],
    },
  ],
  'en-a2-u3-l3': [
    {
      pattern:
        'must (ichki qat’iy) / have to (tashqi qoida) / should (maslahat) | mustn’t (taqiq) vs don’t have to (shart emas)',
      meaning: 'Majburiyat va maslahat modallari: mustn’t ≠ don’t have to — eng xavfli juftlik',
      usageNotes:
        'You mustn’t smoke here (taqiq!). You don’t have to come early (majburiy emas, lekin mumkin).',
      examples: [
        {
          sentence: 'You must wear a seatbelt. You don’t have to pay for parking today.',
          translation:
            'Xavfsizlik kamarini taqish shart. Bugun avtoturargoh uchun to‘lash shart emas.',
        },
        {
          sentence: 'You should sleep early before the exam.',
          translation: 'Imtihondan oldin erta uxlashing kerak (maslahat).',
        },
      ],
    },
  ],
  'en-a2-u3-l4': [
    {
      pattern:
        'always/usually/often/sometimes/rarely/never + before main verb (but AFTER am/is/are) | Adj + -ly (quick→quickly)',
      meaning: 'Takroriylik ravishlari o‘rni + harakat tarzi ravishlari yasalishi',
      usageNotes:
        'I always get up early. She is always late. Istisnolar: fast, hard, late — shakli o‘zgarmaydi.',
      examples: [
        {
          sentence: 'He rarely watches TV, but he always reads before bed.',
          translation: 'U kamdan-kam televizor ko‘radi, lekin yotishdan oldin doim o‘qiydi.',
        },
        {
          sentence: 'Please drive carefully. The road is dangerous.',
          translation: 'Iltimos, ehtiyotkorlik bilan haydang. Yo‘l xavfli.',
        },
      ],
    },
  ],
  'en-a2-u3-l5': [
    {
      pattern:
        'look forward to + V-ing / give up + V-ing / run out of + noun / turn on-off + device',
      meaning:
        'Kundalik 4 oltin phrasal verb: intizorlik, voz kechish, tugab qolish, yoqish-o‘chirish',
      usageNotes:
        'to predlogidan keyin ham V-ing: look forward to meeting you. Separable: turn the light on / turn it on (olmosh o‘rtada).',
      examples: [
        {
          sentence: 'I look forward to meeting you, but we’ve run out of time today.',
          translation:
            'Siz bilan uchrashishni intizorlik bilan kutaman, lekin bugun vaqtimiz tugab qoldi.',
        },
        {
          sentence: 'He gave up smoking and turned off his phone.',
          translation: 'U chekishni tashladi va telefonini o‘chirib qo‘ydi.',
        },
      ],
    },
  ],
};

// ── 2. LISTENING matnlari (har dars uchun 60-80 so‘z, A2 daraja) ──
function L(
  title: string,
  audioText: string,
  translation: string,
  q1: string,
  q1opts: string[],
  q1ans: number,
  q1exp: string,
  q2: string,
  q2opts: string[],
  q2ans: number,
  q2exp: string,
): ListenContent {
  return {
    title,
    instructions:
      'Audioni 2 marta eshiting, keyin 2 ta savolga javob bering. Matnni avval ochmang!',
    audioText,
    transcript: audioText,
    translation,
    exercises: [
      {
        id: `a2-lis-q1-${Math.random().toString(36).slice(2, 6)}`,
        type: 'multiple-choice',
        prompt: q1,
        options: q1opts,
        correctAnswer: q1ans,
        explanation: q1exp,
      },
      {
        id: `a2-lis-q2-${Math.random().toString(36).slice(2, 6)}`,
        type: 'multiple-choice',
        prompt: q2,
        options: q2opts,
        correctAnswer: q2ans,
        explanation: q2exp,
      },
    ],
  };
}

export const A2_LISTENING_STEPS: Record<string, ListenContent> = {
  'en-a2-u1-l1': L(
    'Listening: Last Weekend',
    'Last weekend was wonderful. On Saturday morning I cleaned my room and visited my grandmother. We cooked lunch together and watched an old film. On Sunday I played football with my friends and talked about the match for hours. I really enjoyed the weekend.',
    'O‘tgan dam olish kuni ajoyib o‘tdi. Shanba ertalab xonamni tozaladim va buvimnikiga bordim.',
    'What did the speaker do on Saturday morning?',
    ['Cleaned and visited grandmother', 'Played football', 'Watched a match'],
    0,
    'Matnda: cleaned my room and visited my grandmother.',
    'What did he do on Sunday?',
    ['Played football with friends', 'Cooked lunch', 'Cleaned the room'],
    0,
    'Matnda: played football with my friends.',
  ),
  'en-a2-u1-l2': L(
    'Listening: Trip to Bukhara',
    'Last month we went to Bukhara by train. We saw the old towers and took a lot of photos. My sister bought beautiful gifts for our parents. In the evening we ate traditional food and had a great time. We came home very late but happy.',
    'O‘tgan oy poyezdda Buxoroga bordik. Qadimiy minoralarni ko‘rdik va ko‘p suratga tushdik.',
    'How did they travel?',
    ['By train', 'By bus', 'By car'],
    0,
    'Matnda: by train.',
    'What did the sister buy?',
    ['Gifts for parents', 'A new phone', 'Traditional food'],
    0,
    'Matnda: bought gifts for our parents.',
  ),
  'en-a2-u1-l3': L(
    'Listening: Did You Sleep Well?',
    'Did you sleep well last night? No, I didn’t. The neighbours played loud music and I didn’t fall asleep until midnight. Did your brother hear the noise? Yes, he did, but he didn’t complain. We were both tired in the morning.',
    'Kecha yaxshi uxlamadingmi? Yo‘q, uxlamadim. Qo‘shnilar baland musiqa qo‘yishdi.',
    'Why didn’t the speaker sleep?',
    ['Loud music from neighbours', 'A phone call', 'A bad dream'],
    0,
    'Matnda: neighbours played loud music.',
    'Did the brother complain?',
    ['No, he didn’t', 'Yes, he did', 'Not said'],
    0,
    'Matnda: he didn’t complain.',
  ),
  'en-a2-u1-l4': L(
    'Listening: Yesterday Evening',
    'At seven yesterday evening I was cooking dinner while my sister was doing her homework. My father was reading a newspaper and my mother was talking on the phone. Everybody was busy, so the house was very quiet. Then we all ate together.',
    'Kecha soat yettida men kechki ovqat pishirayotgan edim, singlim uy vazifasini bajarayotgan edi.',
    'What was the speaker doing at seven?',
    ['Cooking dinner', 'Reading a newspaper', 'Talking on the phone'],
    0,
    'Matnda: I was cooking dinner.',
    'What was the father doing?',
    ['Reading a newspaper', 'Doing homework', 'Cooking dinner'],
    0,
    'Matnda: father was reading a newspaper.',
  ),
  'en-a2-u1-l5': L(
    'Listening: Rainy Story',
    'While we were walking home yesterday, it suddenly started to rain. When we arrived at the bus stop, we were completely wet. While we were waiting for the bus, my friend told a funny story and we all laughed. Then the bus came and took us home.',
    'Kecha uyga ketayotganimizda birdan yomg‘ir yog‘a boshladi. Bekatga yetganimizda butunlay ho‘l bo‘lgan edik.',
    'When did the rain start?',
    ['While walking home', 'While waiting for the bus', 'After arriving home'],
    0,
    'Matnda: While we were walking home.',
    'What did the friend do?',
    ['Told a funny story', 'Sang a song', 'Bought tickets'],
    0,
    'Matnda: told a funny story.',
  ),
  'en-a2-u2-l1': L(
    'Listening: Plans for Summer',
    'Next summer we are going to travel to Turkey. I’m going to swim in the sea every day and my brother is going to learn diving. Look at our tickets — we bought them yesterday! It’s going to be an amazing holiday, I’m sure.',
    'Kelasi yozda Turkiyaga sayohat qilishni rejalashtirganmiz. Har kuni dengizda suzaman.',
    'Where are they going to travel?',
    ['To Turkey', 'To Spain', 'To Egypt'],
    0,
    'Matnda: travel to Turkey.',
    'What is the brother going to learn?',
    ['Diving', 'Swimming', 'Driving'],
    0,
    'Matnda: learn diving.',
  ),
  'en-a2-u2-l2': L(
    'Listening: Don’t Worry',
    'The bags are very heavy. Don’t worry, I’ll help you carry them to the taxi. And I promise I won’t be late tomorrow — I’ll meet you at the station at eight. Will you wait for me near the entrance? Thanks a lot!',
    'Sumkalar juda og‘ir. Xavotir olmang, taksigacha ko‘tarishib beraman.',
    'What does the speaker offer?',
    ['To carry the bags', 'To call a doctor', 'To buy tickets'],
    0,
    'Matnda: I’ll help you carry them.',
    'Where will they meet tomorrow?',
    ['At the station', 'At the airport', 'At the hotel'],
    0,
    'Matnda: meet you at the station.',
  ),
  'en-a2-u2-l3': L(
    'Listening: Busy Friday',
    'This Friday is very busy. In the morning I’m meeting my English teacher at ten. In the afternoon we’re flying to Urgench — our tickets are ready. In the evening I’m having dinner with my cousins. I’m really looking forward to it!',
    'Bu juma juda band. Ertalab soat o‘nda ingliz tili o‘qituvchim bilan uchrashaman.',
    'Who is the speaker meeting in the morning?',
    ['English teacher', 'Doctor', 'Cousins'],
    0,
    'Matnda: meeting my English teacher.',
    'Where are they flying?',
    ['To Urgench', 'To Tashkent', 'To Bukhara'],
    0,
    'Matnda: flying to Urgench.',
  ),
  'en-a2-u2-l4': L(
    'Listening: Three Friends',
    'Three friends are talking about Saturday. Anvar says: I’ve decided — I’m going to clean my room. Dilnoza says: OK, I’ve just decided — I’ll help you! And Kamola says: I’m playing tennis at three, so I’ll join you after my game. Good plan!',
    'Uch do‘st shanba haqida gaplashyapti. Anvar: qaror qildim — xonamni tozalayman.',
    'What is Anvar’s plan?',
    ['To clean his room (decided earlier)', 'To play tennis', 'To help Dilnoza'],
    0,
    'Matnda: I’m going to clean (oldindan qaror).',
    'When will Kamola join?',
    ['After her tennis game', 'Before lunch', 'Tomorrow morning'],
    0,
    'Matnda: after my game (tayinlangan uchrashuv).',
  ),
  'en-a2-u2-l5': L(
    'Listening: Birthday Party',
    'Hi Sardor! Shall we go hiking on Sunday? Would you like to join us? Hmm, I’d love to, but I’m visiting my aunt. How about next Friday? Let’s have dinner together instead. That sounds great! See you then.',
    'Salom Sardor! Yakshanba piyoda sayrga boramizmi? Qo‘shilasanmi?',
    'What is the first invitation?',
    ['Hiking on Sunday', 'Dinner on Friday', 'Cinema on Saturday'],
    0,
    'Matnda: go hiking on Sunday.',
    'What is the final plan?',
    ['Dinner next Friday', 'Hiking on Sunday', 'No plan'],
    0,
    'Matnda: dinner together (muqobil taklif qabul qilindi).',
  ),
  'en-a2-u3-l1': L(
    'Listening: Two Cities',
    'Tashkent is bigger than Samarkand, but Samarkand is older and more beautiful, I think. The metro in Tashkent is faster than buses, and the mountains near Tashkent are the most wonderful place for weekends. Which city do you prefer?',
    'Toshkent Samarqanddan katta, lekin Samarqand qadimiyroq va chiroyliroq, menimcha.',
    'Which city is bigger?',
    ['Tashkent', 'Samarkand', 'Bukhara'],
    0,
    'Matnda: Tashkent is bigger.',
    'What is the most wonderful place?',
    ['Mountains near Tashkent', 'The metro', 'Registan Square'],
    0,
    'Matnda: the most wonderful place.',
  ),
  'en-a2-u3-l2': L(
    'Listening: Market Shopping',
    'At the market I bought many apples but there wasn’t much cheese. I have a few coins in my pocket and a little time, so let’s be quick. We need some bread too — do we have any milk at home? Let’s check the list.',
    'Bozordan ko‘p olma oldim, lekin pishloq ko‘p emasdi. Cho‘ntagimda bir nechta tanga bor.',
    'What did the speaker buy?',
    ['Many apples', 'Much cheese', 'A little milk'],
    0,
    'Matnda: many apples.',
    'What does the speaker ask about?',
    ['Milk at home', 'Bread price', 'Market time'],
    0,
    'Matnda: any milk at home?',
  ),
  'en-a2-u3-l3': L(
    'Listening: School Rules',
    'Attention, students! You must turn off your phones during lessons. You have to wear your uniform every day. You should arrive ten minutes early. You mustn’t run in the corridors, but you don’t have to stay after classes today.',
    'Diqqat, o‘quvchilar! Dars paytida telefonlarni o‘chirib qo‘yish shart.',
    'What must students do?',
    ['Turn off phones', 'Stay after classes', 'Run in corridors'],
    0,
    'Matnda: must turn off phones.',
    'What don’t they have to do today?',
    ['Stay after classes', 'Wear uniform', 'Arrive early'],
    0,
    'Matnda: don’t have to stay.',
  ),
  'en-a2-u3-l4': L(
    'Listening: Good Habits',
    'My grandfather is ninety, but he is never ill. He always gets up early and usually walks in the park. He speaks slowly but very clearly. He drives carefully and always helps his neighbours. Everybody loves him.',
    'Bobom to‘qson yoshda, lekin hech qachon kasal bo‘lmaydi. U doim erta turadi.',
    'How often is he ill?',
    ['Never', 'Often', 'Sometimes'],
    0,
    'Matnda: never ill.',
    'How does he speak?',
    ['Slowly but clearly', 'Quickly and loudly', 'Rarely'],
    0,
    'Matnda: slowly but very clearly.',
  ),
  'en-a2-u3-l5': L(
    'Listening: New Year Promises',
    'This year I gave up eating fast food and I look forward to running every morning. Yesterday we ran out of sugar, so I turned off the TV and went to the shop. My friend turned on some music and we cooked a healthy dinner together.',
    'Bu yil tez ovqat yeyishni tashladim va har tong yugurishni intizorlik bilan kutaman.',
    'What did the speaker give up?',
    ['Fast food', 'Running', 'Cooking'],
    0,
    'Matnda: gave up fast food.',
    'Why did he go to the shop?',
    ['Ran out of sugar', 'Needed a new TV', 'Wanted music'],
    0,
    'Matnda: ran out of sugar.',
  ),
  'en-a2-u4-l1': L(
    'Listening: At the Airport',
    'Good morning! Your passport and ticket, please. Your flight to Dubai leaves at gate five in forty minutes. Your bag is too heavy — you have to pay extra. After passport control, turn left and wait near the screens. Have a safe flight!',
    'Xayrli tong! Pasport va chiptangiz, iltimos. Dubayga parvozingiz qirq daqiqadan keyin beshinchi darvozadan.',
    'Which gate?',
    ['Gate five', 'Gate nine', 'Gate two'],
    0,
    'Matnda: gate five.',
    'What is the problem with the bag?',
    ['Too heavy, extra pay', 'Lost', 'Too small'],
    0,
    'Matnda: too heavy, pay extra.',
  ),
  'en-a2-u4-l2': L(
    'Listening: Doctor Visit',
    'What’s the matter? I have a headache and a sore throat. I also feel a bit dizzy. Did you take your temperature? Yes, it’s a little high. You should drink warm tea, take these pills twice a day, and stay in bed for two days.',
    'Muammo nima? Boshim og‘riyapti va tomog‘im og‘riyapti. Boshim ham biroz ayalyapti.',
    'What symptoms does the patient have?',
    ['Headache and sore throat', 'Broken leg', 'Toothache'],
    0,
    'Matnda: headache and sore throat.',
    'What should the patient do?',
    ['Stay in bed two days', 'Go to work', 'Drink cold water'],
    0,
    'Matnda: stay in bed for two days.',
  ),
  'en-a2-u4-l3': L(
    'Listening: Wrong Size',
    'Excuse me, I bought these shoes yesterday, but they are too small. Can I change them for a bigger size? Do you have the receipt? Yes, here it is. The fitting room is on the left — please try this pair. Perfect, thank you!',
    'Kechirasiz, kecha bu oyoq kiyimni oldim, lekin kichkinalik qilyapti. Kattaroq o‘lchamga almashtirsam bo‘ladimi?',
    'What is the problem?',
    ['Too small', 'Too big', 'Wrong colour'],
    0,
    'Matnda: too small.',
    'What does the shop ask for?',
    ['The receipt', 'The passport', 'The ticket'],
    0,
    'Matnda: Do you have the receipt?',
  ),
  'en-a2-u4-l4': L(
    'Listening: Lost in the Mall',
    'Excuse me, I’m lost. Could you help me? Of course! What are you looking for? I’m looking for the bookstore. Sorry, could you speak more slowly? Sure. Go straight, then it’s on the second floor. Could you spell that? Thanks!',
    'Kechirasiz, adashdim. Yordam bera olasizmi? Albatta! Nima qidiryapsiz?',
    'What is the speaker looking for?',
    ['The bookstore', 'The bus stop', 'The bank'],
    0,
    'Matnda: the bookstore.',
    'What does he ask the helper to do?',
    ['Speak more slowly', 'Walk with him', 'Write an address'],
    0,
    'Matnda: speak more slowly.',
  ),
  'en-a2-u4-l5': L(
    'Listening: If It Rains',
    'If it rains tomorrow, we’ll stay at home and watch films. If you study hard, you’ll pass the exam. Water boils if you heat it to one hundred degrees. If I have free time, I always help my mother in the garden.',
    'Ertaga yomg‘ir yog‘sa, uyda qolib filmlar ko‘ramiz. Qattiq o‘qisang, imtihondan o‘tasan.',
    'What will they do if it rains?',
    ['Stay home and watch films', 'Go hiking', 'Visit friends'],
    0,
    'Matnda: stay at home and watch films.',
    'When does water boil?',
    ['If heated to 100 degrees', 'If frozen', 'If mixed with salt'],
    0,
    'Matnda: Zero Conditional — umumiy haqiqat.',
  ),
  'en-a2-u5-l1': L(
    'Listening: Wedding Invitation',
    'Hi! We’re getting married next month! Would you like to come to our wedding? Of course, I’d love to! When is it? On the twentieth of June. Great — I’m going to buy a nice gift. Thank you! See you there!',
    'Salom! Kelasi oy to‘yimiz! To‘yimizga kelasanmi? Albatta, jonim bilan!',
    'What is the invitation for?',
    ['A wedding', 'A birthday', 'A meeting'],
    0,
    'Matnda: our wedding.',
    'When is it?',
    ['20th of June', '12th of June', '2nd of July'],
    0,
    'Matnda: twentieth of June.',
  ),
  'en-a2-u5-l2': L(
    'Listening: Online Life',
    'I spend two hours online every day. I chat with friends, watch videos, and read the news. But be careful — never share your password! Last week my cousin clicked a strange link and lost his photos. Always think before you click.',
    'Men har kuni ikki soat internetdaman. Do‘stlar bilan yozishaman, videolar ko‘raman.',
    'How much time online daily?',
    ['Two hours', 'Five hours', 'One hour'],
    0,
    'Matnda: two hours.',
    'What happened to the cousin?',
    ['Clicked strange link, lost photos', 'Bought a new phone', 'Won a prize'],
    0,
    'Matnda: clicked a strange link.',
  ),
  'en-a2-u5-l3': L(
    'Listening: Famous Life',
    'Alisher Navoi was born in Herat in 1441. As a child he loved books and wrote his first poems early. Later he moved to Samarkand? No — he lived and worked mostly in Herat. He died in 1501, but people still read his works today.',
    'Alisher Navoiy 1441 yilda Hirotda tug‘ilgan. Bolaligida kitoblarni sevgan.',
    'Where was he born?',
    ['In Herat', 'In Samarkand', 'In Tashkent'],
    0,
    'Matnda: born in Herat.',
    'When did he die?',
    ['In 1501', 'In 1441', 'In 1541'],
    0,
    'Matnda: died in 1501.',
  ),
  'en-a2-u5-l4': L(
    'Listening: Two Opinions',
    'In my opinion, city life is better because there are good schools and hospitals. I see your point, but I disagree — villages are quieter and the air is cleaner. That’s true. So we agree that both have advantages, right? Exactly!',
    'Menimcha, shahar hayoti yaxshiroq, chunki yaxshi maktablar va shifoxonalar bor.',
    'Why does the first speaker prefer the city?',
    ['Good schools and hospitals', 'Clean air', 'Quiet streets'],
    0,
    'Matnda: good schools and hospitals.',
    'What do they finally agree on?',
    ['Both have advantages', 'City is best', 'Village is best'],
    0,
    'Matnda: both have advantages.',
  ),
  'en-a2-u5-l5': L(
    'Listening: My English Journey',
    'Two years ago I couldn’t speak English at all. Then I started learning: first words, then Past Simple, then future forms. Now I can talk about my plans, give opinions, and understand slow speech. My next goal is IELTS Band 5.5 and Speaking Part 2!',
    'Ikki yil oldin umuman inglizcha gapira olmasdim. Keyin o‘rganishni boshladim.',
    'What could he NOT do two years ago?',
    ['Speak English at all', 'Read books', 'Write letters'],
    0,
    'Matnda: couldn’t speak at all.',
    'What is his next goal?',
    ['IELTS Band 5.5 and Speaking Part 2', 'A new job', 'A trip abroad'],
    0,
    'Matnda: Band 5.5 and Part 2.',
  ),
};

// ── 3. Runtime merge: Learn ga grammar qo‘shish + Listen step kiritish ──
export function applyA2Enrichment(lesson: Lesson): Lesson {
  const lessonId = lesson.id;
  const grammarPatch = A2_GRAMMAR_PATCHES[lessonId];
  const listening = A2_LISTENING_STEPS[lessonId];
  if (!grammarPatch && !listening) return lesson;

  const steps = lesson.steps.map((s) => ({ ...s }));

  // 3a. Grammar patch — birinchi learn step ga qo'shish (faqat bo'sh bo'lsa)
  if (grammarPatch) {
    const learnIdx = steps.findIndex((s) => s.type === 'learn');
    if (learnIdx >= 0 && steps[learnIdx].learnData) {
      const existing = steps[learnIdx].learnData!.grammarRules || [];
      if (existing.length === 0) {
        steps[learnIdx] = {
          ...steps[learnIdx],
          learnData: { ...steps[learnIdx].learnData!, grammarRules: grammarPatch },
        };
      }
    }
  }

  // 3b. Listening step — practice dan oldin kiritish (agar hali yo'q bo'lsa)
  if (listening) {
    const hasListen = steps.some((s) => s.type === 'listen');
    if (!hasListen) {
      const practiceIdx = steps.findIndex((s) => s.type === 'practice');
      const insertAt = practiceIdx >= 0 ? practiceIdx : Math.min(1, steps.length);
      const listenStep = {
        id: `${lessonId}-s-listen`,
        title: 'Eshitib tushunish 🎧',
        type: 'listen' as const,
        estimatedMinutes: 5,
        listenData: listening,
      };
      steps.splice(insertAt, 0, listenStep as never);
    }
  }

  return { ...lesson, steps };
}
