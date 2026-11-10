import { GrammarRule, Lesson, ListenContent } from '../../types/lesson';

/**
 * A1 ENRICHMENT PACK — Step-by-step standart:
 * Har bir dars: 1) Learn (Vocab 8 + Grammar 1-2 pattern)
 *               2) Listen (TTS audio + 2 comprehension savol)
 *               3) Practice (5 MCQ) -> 4) Test (5 savol)
 *
 * U3-U5 darslarda grammarRules bo'sh edi — shu yerda to'ldiriladi.
 * Listening barcha 25 darsga qo'shiladi (runtime merge orqali).
 */

// ── 1. Yetishmayotgan GRAMMAR qoidalari (U3-U5, 15 dars) ──
export const A1_GRAMMAR_PATCHES: Record<string, GrammarRule[]> = {
  'en-a1-u3-l1': [
    {
      pattern: 'Subject + wake up / get up / have breakfast + at + time',
      meaning: 'Kun tartibi va soatni aytish (at 7 o’clock, in the morning)',
      usageNotes:
        'Soat uchun AT, kun qismi uchun IN (in the morning), hafta kuni uchun ON (on Monday).',
      examples: [
        {
          sentence: 'I wake up at seven o’clock in the morning.',
          translation: 'Men ertalab soat yettida uyg‘onaman.',
        },
        {
          sentence: 'She has breakfast at 8 o’clock.',
          translation: 'U soat 8 da nonushta qiladi.',
        },
      ],
    },
  ],
  'en-a1-u3-l2': [
    {
      pattern: 'I would like + noun / Can I have + noun, please?',
      meaning: 'Kafeda xushmuomala buyurtma berish; some/any farqi',
      usageNotes:
        'Sanaladigan ko‘plik + sanalmaydigan otlar bilan SOME (tasdiq), ANY (so‘roq/inkor).',
      examples: [
        {
          sentence: 'I would like a cup of tea, please.',
          translation: 'Iltimos, menga bir piyola choy.',
        },
        { sentence: 'Do you have any milk?', translation: 'Sizda sut bormi?' },
      ],
    },
  ],
  'en-a1-u3-l3': [
    {
      pattern: 'There is + singular / There are + plural + in/on/under/behind',
      meaning: 'Xona va joylashuvni tasvirlash (There is/are + preposition of place)',
      usageNotes: 'There is + birlik, There are + ko‘plik. Joy: in, on, under, behind, next to.',
      examples: [
        { sentence: 'There is a table in the kitchen.', translation: 'Oshxonada stol bor.' },
        {
          sentence: 'There are two chairs next to the window.',
          translation: 'Deraza yonida ikkita stul bor.',
        },
      ],
    },
  ],
  'en-a1-u3-l4': [
    {
      pattern: 'Go straight + Turn left/right + The bank is on your left',
      meaning: 'Manzil so‘rash va oddiy yo‘l ko‘rsatish',
      usageNotes: 'Excuse me, where is...? — Go straight, turn left, it is opposite / next to...',
      examples: [
        {
          sentence: 'Go straight and turn left. The pharmacy is on your right.',
          translation: 'To‘g‘ri boring va chapga buriling. Dorixona o‘ng tomonda.',
        },
        {
          sentence: 'Excuse me, where is the bus stop?',
          translation: 'Kechirasiz, bekat qayerda?',
        },
      ],
    },
  ],
  'en-a1-u3-l5': [
    {
      pattern: 'It is + adjective / What is the weather like? + It is...',
      meaning: 'Ob-havo va fasllarni tasvirlash (It is sunny/cold + in winter/summer)',
      usageNotes: 'Ob-havo egasi IT: It is rainy. Fasl uchun IN: in winter.',
      examples: [
        { sentence: 'It is sunny and warm today.', translation: 'Bugun havo quyoshli va iliq.' },
        {
          sentence: 'What is the weather like in winter in Tashkent?',
          translation: 'Toshkentda qishda havo qanday bo‘ladi?',
        },
      ],
    },
  ],
  'en-a1-u4-l1': [
    {
      pattern: 'Subject + can / can’t + base verb (for ability & permission)',
      meaning: 'Qobiliyat va ruxsat: can swim, can’t drive; Can I...? — Yes, you can.',
      usageNotes: 'Can dan keyin fe’l to‘siz keladi. Inkor: can’t (=cannot).',
      examples: [
        { sentence: 'He can swim very well.', translation: 'U juda yaxshi suza oladi.' },
        { sentence: 'Can I open the window, please?', translation: 'Derazani ochsam maylimi?' },
      ],
    },
  ],
  'en-a1-u4-l2': [
    {
      pattern: 'play + games / go + -ing / do + exercise (collocations)',
      meaning: 'Hobby fe’l birikmalari: play football, go swimming, do yoga',
      usageNotes:
        'play — jamoaviy o‘yinlar, go + V-ing — yakka harakatli hobby, do — mashq turlari.',
      examples: [
        {
          sentence: 'I play chess every evening.',
          translation: 'Men har oqshom shaxmat o‘ynayman.',
        },
        {
          sentence: 'They go swimming on Sundays.',
          translation: 'Ular yakshanbada suzishga borishadi.',
        },
      ],
    },
  ],
  'en-a1-u4-l3': [
    {
      pattern: 'like / love / enjoy / hate + V-ing',
      meaning: 'Yoqish darajalari: I like reading, She loves cooking, He hates waiting',
      usageNotes: 'like/love/enjoy/hate dan keyin fe’l -ing bilan keladi (A1 oltin qoida).',
      examples: [
        {
          sentence: 'I like reading English books.',
          translation: 'Men inglizcha kitob o‘qishni yoqtiraman.',
        },
        {
          sentence: 'She loves cooking Uzbek food.',
          translation: 'U o‘zbek taomlarini pishirishni juda yaxshi ko‘radi.',
        },
      ],
    },
  ],
  'en-a1-u4-l4': [
    {
      pattern: 'am / is / are + V-ing (Present Continuous)',
      meaning: 'Hozir bo‘layotgan harakat: I am studying now, Look! It is raining.',
      usageNotes:
        'Marker so‘zlar: now, at the moment, Look!, Listen! Imlo: write→writing, run→running.',
      examples: [
        {
          sentence: 'I am studying English now.',
          translation: 'Men hozir ingliz tili o‘rganayapman.',
        },
        {
          sentence: 'They are playing football at the moment.',
          translation: 'Ular hozir futbol o‘ynamoqda.',
        },
      ],
    },
  ],
  'en-a1-u4-l5': [
    {
      pattern: 'Present Simple (always/every day) vs Present Continuous (now/at the moment)',
      meaning: 'Odat vs hozirgi harakat farqi + stative verbs (know, like, want — -ing olmasligi)',
      usageNotes: 'Stative fe’llar Continuous da kelmaydi: I am knowing ❌ → I know ✅.',
      examples: [
        {
          sentence: 'I go to school every day, but today I am staying at home.',
          translation: 'Men har kuni maktabga boraman, lekin bugun uyda qolyapman.',
        },
        {
          sentence: 'She usually drinks tea, but now she is drinking coffee.',
          translation: 'U odatda choy ichadi, lekin hozir kofe ichyapti.',
        },
      ],
    },
  ],
  'en-a1-u5-l1': [
    {
      pattern: 'A single / return ticket to + place + How much is...?',
      meaning:
        'Chipta xarid qilish: single (bir tomon), return (borish-qaytish), platform, departure',
      usageNotes: 'I’d like a return ticket to Samarkand, please. Which platform?',
      examples: [
        {
          sentence: 'A return ticket to Bukhara, please.',
          translation: 'Buxoroga borish-qaytish chiptasi, iltimos.',
        },
        {
          sentence: 'Which platform does the train leave from?',
          translation: 'Poyezd qaysi platformadan jo‘naydi?',
        },
      ],
    },
  ],
  'en-a1-u5-l2': [
    {
      pattern: 'How much is/are...? + Can I try it on? (size, fitting room)',
      meaning: 'Narx so‘rash va kiyib ko‘rish: too big/small, fitting room, discount',
      usageNotes: 'Birlik: How much IS this shirt? Ko‘plik: How much ARE these shoes?',
      examples: [
        { sentence: 'How much is this jacket?', translation: 'Bu kurtka qancha turadi?' },
        {
          sentence: 'Can I try it on? Where is the fitting room?',
          translation: 'Kiyib ko‘rsam bo‘ladimi? Kiyinish xonasi qayerda?',
        },
      ],
    },
  ],
  'en-a1-u5-l3': [
    {
      pattern: 'I’d like to book + a single/double room + for ... nights / check-in & check-out',
      meaning: 'Mehmonxona band qilish: reception, key card, breakfast included',
      usageNotes: 'I have a reservation under the name... Check-in 14:00, check-out 12:00.',
      examples: [
        {
          sentence: 'I’d like to book a double room for two nights.',
          translation: 'Ikki kechaga ikki kishilik xona band qilmoqchiman.',
        },
        { sentence: 'Is breakfast included?', translation: 'Nonushta narxga kiradimi?' },
      ],
    },
  ],
  'en-a1-u5-l4': [
    {
      pattern: 'I / He / She / It + was | You / We / They + were (+ yesterday/last night/ago)',
      meaning: 'Past Simple To Be: was/were + vaqt ko‘rsatkichlari',
      usageNotes: 'Inkor: wasn’t/wasn’t... weren’t. Savol: Was he...? Were they...?',
      examples: [
        {
          sentence: 'I was at home yesterday evening.',
          translation: 'Men kecha oqshom uyda edim.',
        },
        {
          sentence: 'They were tired after the long trip.',
          translation: 'Ular uzoq safardan keyin charchagan edilar.',
        },
      ],
    },
  ],
  'en-a1-u5-l5': [
    {
      pattern: 'A1 Review: am/is/are + was/were + can + Present Simple/Continuous',
      meaning: 'A1 capstone: barcha baza tuzilmalar sintezi (IELTS Speaking Part 1 ko‘prigi)',
      usageNotes: 'My name is... I live in... I can... Yesterday I was... Now I am learning...',
      examples: [
        {
          sentence: 'My name is Jasmina. I live in Tashkent. I can speak English a little.',
          translation: 'Mening ismim Jasmina. Toshkentda yashayman. Biroz inglizcha gapira olaman.',
        },
        {
          sentence: 'Yesterday I was at the market. Now I am studying at home.',
          translation: 'Kecha bozorda edim. Hozir uyda o‘qiyapman.',
        },
      ],
    },
  ],
};

// ── 2. LISTENING matnlari (har dars uchun 40-60 so‘z, A1 daraja) ──
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
        id: `lis-q1-${Math.random().toString(36).slice(2, 6)}`,
        type: 'multiple-choice',
        prompt: q1,
        options: q1opts,
        correctAnswer: q1ans,
        explanation: q1exp,
      },
      {
        id: `lis-q2-${Math.random().toString(36).slice(2, 6)}`,
        type: 'multiple-choice',
        prompt: q2,
        options: q2opts,
        correctAnswer: q2ans,
        explanation: q2exp,
      },
    ],
  };
}

export const A1_LISTENING_STEPS: Record<string, ListenContent> = {
  'en-a1-u1-l1': L(
    'Listening: Meet Anna',
    'Hello! My name is Anna. I am from London. I am a student. I am twenty years old. My teacher is Mr. Brown. He is very kind. Nice to meet you!',
    'Salom! Mening ismim Anna. Londonlikman. Men talabaman. Yigirma yoshdaman. O‘qituvchim janob Braun. U juda mehribon.',
    'Where is Anna from?',
    ['London', 'Tashkent', 'Paris'],
    0,
    'Matnda: I am from London.',
    'How old is Anna?',
    ['Twenty', 'Twelve', 'Thirty'],
    0,
    'Matnda: I am twenty years old.',
  ),
  'en-a1-u1-l2': L(
    'Listening: My Bag',
    'I have a red bag. In my bag, I have three books, two pens, one phone, and four keys. My books are new. My pens are black. The bag is big and very useful.',
    'Menda qizil sumka bor. Sumkamda uchta kitob, ikkita ruchka, bitta telefon va to‘rtta kalit bor.',
    'How many books are in the bag?',
    ['Three', 'Two', 'Four'],
    0,
    'Matnda: three books.',
    'What colour is the bag?',
    ['Red', 'Black', 'Blue'],
    0,
    'Matnda: a red bag.',
  ),
  'en-a1-u1-l3': L(
    'Listening: In the Classroom',
    'This is my classroom. This table is big. That chair near the window is small. These books on the table are mine. Those pictures on the wall are beautiful.',
    'Bu mening sinfim. Bu stol katta. Deraza yonidagi u stul kichkina. Stoldagi bu kitoblar meniki.',
    'Where are the books?',
    ['On the table', 'Under the table', 'On the wall'],
    0,
    'Matnda: on the table.',
    'Where are the pictures?',
    ['On the wall', 'On the table', 'In the bag'],
    0,
    'Matnda: on the wall.',
  ),
  'en-a1-u1-l4': L(
    'Listening: My Family Jobs',
    'My father is a doctor. My mother is an engineer. My brother is a student at a university. We live in an apartment in the city. The apartment is very comfortable.',
    'Otam shifokor. Onam muhandis. Akam universitetda talaba. Shaharda kvartirada yashaymiz.',
    'What is the father?',
    ['A doctor', 'An engineer', 'A teacher'],
    0,
    'Matnda: is a doctor.',
    'Where do they live?',
    ['In an apartment', 'In a house', 'In a hotel'],
    0,
    'Matnda: in an apartment.',
  ),
  'en-a1-u1-l5': L(
    'Listening: My Sister',
    'This is my sister. Her name is Malika. Her bag is red. His brother — oh, my brother — his phone is new. Our house is big. Their car is small.',
    'Bu mening singlim. Uning ismi Malika. Uning sumkasi qizil.',
    'What is the sister’s name?',
    ['Malika', 'Anna', 'Jasmina'],
    0,
    'Matnda: Her name is Malika.',
    'Whose phone is new?',
    ['My brother’s (his)', 'My sister’s (her)', 'My mother’s'],
    0,
    'Matnda: his phone is new.',
  ),
  'en-a1-u2-l1': L(
    'Listening: My Family',
    'I have a big family. My father is tall. My mother is kind. I have one brother and two sisters. We live together in Tashkent. I love my family very much.',
    'Mening katta oilam bor. Otam bo‘yi baland. Onam mehribon.',
    'How many sisters does the speaker have?',
    ['Two', 'One', 'Three'],
    0,
    'Matnda: two sisters.',
    'Where do they live?',
    ['In Tashkent', 'In London', 'In Paris'],
    0,
    'Matnda: in Tashkent.',
  ),
  'en-a1-u2-l2': L(
    'Listening: My Clothes',
    'Today I am wearing a blue shirt, black trousers, and white shoes. My sister is wearing a red dress. Her bag is yellow. I like bright colours in summer.',
    'Bugun men ko‘k ko‘ylak, qora shim va oq oyoq kiyim kiyganman.',
    'What is the speaker wearing?',
    ['Blue shirt', 'Red dress', 'Green shirt'],
    0,
    'Matnda: blue shirt.',
    'What is yellow?',
    ['Her bag', 'His shirt', 'Her dress'],
    0,
    'Matnda: Her bag is yellow.',
  ),
  'en-a1-u2-l3': L(
    'Listening: My Day',
    'I work in a shop. I live in Samarkand. Every day I get up at seven. I speak English with my friends. My brother studies at university. He speaks three languages.',
    'Men do‘konda ishlayman. Samarqandda yashayman. Har kuni yettida turaman.',
    'Where does the speaker work?',
    ['In a shop', 'In a school', 'In a bank'],
    0,
    'Matnda: in a shop.',
    'How many languages does the brother speak?',
    ['Three', 'Two', 'One'],
    0,
    'Matnda: three languages.',
  ),
  'en-a1-u2-l4': L(
    'Listening: Evening',
    'I don’t watch TV in the morning. My sister doesn’t like coffee. She doesn’t drink milk. We don’t work on Sundays. My father doesn’t cook dinner.',
    'Men ertalab televizor ko‘rmayman. Singlim qahvani yoqtirmaydi.',
    'When doesn’t the speaker watch TV?',
    ['In the morning', 'In the evening', 'At night'],
    0,
    'Matnda: in the morning.',
    'Who doesn’t like coffee?',
    ['My sister', 'My father', 'I'],
    0,
    'Matnda: My sister doesn’t like coffee.',
  ),
  'en-a1-u2-l5': L(
    'Listening: Questions',
    'Do you like football? Where do you live? What does your father do? When does the lesson start? I ask my friend many questions every day.',
    'Futbolni yoqtirasizmi? Qayerda yashaysiz? Otangiz nima ish qiladi?',
    'What is the first question?',
    ['Do you like football?', 'Where do you live?', 'What time is it?'],
    0,
    'Matnda birinchi gap.',
    'Who asks many questions?',
    ['I (the speaker)', 'My father', 'My teacher'],
    0,
    'Matnda: I ask my friend.',
  ),
  'en-a1-u3-l1': L(
    'Listening: My Routine',
    'I wake up at seven o’clock. I have breakfast at half past seven. I go to school at eight. In the evening I read books. I go to bed at ten o’clock.',
    'Men soat yettida uyg‘onaman. Yetti yarimda nonushta qilaman. Sakkizda maktabga boraman.',
    'What time does the speaker wake up?',
    ['At 7 o’clock', 'At 8 o’clock', 'At 10 o’clock'],
    0,
    'Matnda: at seven o’clock.',
    'When does the speaker go to bed?',
    ['At 10 o’clock', 'At 8 o’clock', 'At 7 o’clock'],
    0,
    'Matnda: at ten o’clock.',
  ),
  'en-a1-u3-l2': L(
    'Listening: At the Cafe',
    'Good morning! I would like a cup of tea, please. Do you have any fresh bread? Yes, we have some bread and some milk. The tea is hot and sweet. Thank you very much!',
    'Xayrli tong! Menga bir piyola choy, iltimos. Yangi noningiz bormi?',
    'What does the speaker order?',
    ['A cup of tea', 'A cup of coffee', 'A glass of juice'],
    0,
    'Matnda: a cup of tea.',
    'What do they have?',
    ['Bread and milk', 'Meat and rice', 'Fish and salad'],
    0,
    'Matnda: bread and milk.',
  ),
  'en-a1-u3-l3': L(
    'Listening: My House',
    'Our house is big. There is a kitchen and a living room. There are three bedrooms. The table is in the kitchen. The TV is on the table? No — the book is on the table. The cat is under the chair.',
    'Uyimiz katta. Oshxona va mehmonxona bor. Uchta yotoqxona bor.',
    'How many bedrooms are there?',
    ['Three', 'Two', 'One'],
    0,
    'Matnda: three bedrooms.',
    'Where is the cat?',
    ['Under the chair', 'On the table', 'In the kitchen'],
    0,
    'Matnda: under the chair.',
  ),
  'en-a1-u3-l4': L(
    'Listening: Find the Bank',
    'Excuse me, where is the bank? Go straight, then turn left. The bank is on your right, next to the pharmacy. The bus stop is opposite the park. Thank you!',
    'Kechirasiz, bank qayerda? To‘g‘ri boring, keyin chapga buriling. Bank o‘ng tomonda, dorixona yonida.',
    'Where is the bank?',
    ['On the right, next to the pharmacy', 'On the left, near the school', 'Behind the park'],
    0,
    'Matnda: on your right, next to the pharmacy.',
    'Where is the bus stop?',
    ['Opposite the park', 'Next to the bank', 'Behind the school'],
    0,
    'Matnda: opposite the park.',
  ),
  'en-a1-u3-l5': L(
    'Listening: Weather',
    'What is the weather like today? It is sunny and warm. I like summer. In winter it is cold and snowy in Tashkent. In spring it is rainy but beautiful.',
    'Bugun havo qanday? Quyoshli va iliq. Men yozni yoqtiraman.',
    'What is the weather like today?',
    ['Sunny and warm', 'Cold and snowy', 'Rainy and cold'],
    0,
    'Matnda: sunny and warm.',
    'When is it cold and snowy?',
    ['In winter', 'In summer', 'In spring'],
    0,
    'Matnda: in winter.',
  ),
  'en-a1-u4-l1': L(
    'Listening: I Can',
    'I can swim, but I can’t drive a car. My sister can sing very well. Can you speak English? Yes, I can speak a little. Can I open the window, please?',
    'Men suza olaman, lekin mashina hayday olmayman. Singlim juda yaxshi kuylay oladi.',
    'What can the speaker do?',
    ['Swim', 'Drive', 'Fly'],
    0,
    'Matnda: I can swim.',
    'What can the sister do?',
    ['Sing very well', 'Drive a car', 'Swim fast'],
    0,
    'Matnda: can sing very well.',
  ),
  'en-a1-u4-l2': L(
    'Listening: Free Time',
    'In my free time I play football with my friends. On Sundays we go swimming. My sister does yoga every morning. We love sports and games.',
    'Bo‘sh vaqtimda do‘stlarim bilan futbol o‘ynayman. Yakshanbada suzishga boramiz.',
    'What does the speaker play?',
    ['Football', 'Chess', 'Tennis'],
    0,
    'Matnda: play football.',
    'What does the sister do?',
    ['Yoga', 'Swimming', 'Football'],
    0,
    'Matnda: does yoga.',
  ),
  'en-a1-u4-l3': L(
    'Listening: Likes',
    'I like reading books. I love cooking Uzbek food. My brother enjoys playing computer games. But he hates waiting in long lines. What do you like doing?',
    'Men kitob o‘qishni yoqtiraman. O‘zbek taomlarini pishirishni juda yaxshi ko‘raman.',
    'What does the speaker love?',
    ['Cooking Uzbek food', 'Driving a car', 'Cleaning the house'],
    0,
    'Matnda: love cooking.',
    'What does the brother hate?',
    ['Waiting in long lines', 'Playing games', 'Reading books'],
    0,
    'Matnda: hates waiting.',
  ),
  'en-a1-u4-l4': L(
    'Listening: Right Now',
    'Look! It is raining now. I am staying at home. My mother is cooking in the kitchen. My friends are playing football in the rain. Listen! The baby is crying.',
    'Qarang! Hozir yomg‘ir yog‘yapti. Men uyda qolyapman. Onam oshxonada ovqat pishiryapti.',
    'What is the weather doing now?',
    ['Raining', 'Snowing', 'Shining'],
    0,
    'Matnda: It is raining now.',
    'What is the mother doing?',
    ['Cooking', 'Sleeping', 'Reading'],
    0,
    'Matnda: is cooking.',
  ),
  'en-a1-u4-l5': L(
    'Listening: Every Day vs Now',
    'I usually drink tea, but now I am drinking coffee. She goes to school every day, but today she is staying at home. I know the answer. I want a new book.',
    'Men odatda choy ichaman, lekin hozir kofe ichyapman.',
    'What is the speaker drinking now?',
    ['Coffee', 'Tea', 'Milk'],
    0,
    'Matnda: now I am drinking coffee.',
    'Where is she today?',
    ['Staying at home', 'Going to school', 'Going to work'],
    0,
    'Matnda: staying at home.',
  ),
  'en-a1-u5-l1': L(
    'Listening: At the Station',
    'Good morning! A single ticket to Samarkand, please. How much is it? The train leaves from platform two at nine o’clock. Have a nice trip!',
    'Xayrli tong! Samarqandga bir tomonlama chipta, iltimos. Qancha turadi?',
    'What ticket does the speaker want?',
    ['Single to Samarkand', 'Return to Bukhara', 'Single to Tashkent'],
    0,
    'Matnda: single ticket to Samarkand.',
    'Which platform?',
    ['Platform two', 'Platform five', 'Platform one'],
    0,
    'Matnda: platform two.',
  ),
  'en-a1-u5-l2': L(
    'Listening: Shopping',
    'How much is this jacket? It is very nice. Can I try it on? The fitting room is over there. Oh, it is too big. Do you have a smaller size? Yes, here you are.',
    'Bu kurtka qancha? Juda chiroyli. Kiyib ko‘rsam bo‘ladimi?',
    'What does the speaker ask first?',
    ['How much is this jacket?', 'Where is the bank?', 'What time is it?'],
    0,
    'Matnda birinchi gap.',
    'What is the problem?',
    ['Too big', 'Too small', 'Too expensive'],
    0,
    'Matnda: too big.',
  ),
  'en-a1-u5-l3': L(
    'Listening: Hotel',
    'Good evening! I’d like to book a double room for two nights. I have a reservation under the name Karimov. Is breakfast included? Yes. Check-in is at two, check-out at twelve.',
    'Xayrli oqshom! Ikki kechaga ikki kishilik xona band qilmoqchiman.',
    'How many nights?',
    ['Two', 'Three', 'One'],
    0,
    'Matnda: for two nights.',
    'Is breakfast included?',
    ['Yes', 'No', 'Not said'],
    0,
    'Matnda: Yes.',
  ),
  'en-a1-u5-l4': L(
    'Listening: Yesterday',
    'Yesterday I was at the market. My friends were at school. In the evening we were at home. We were tired but happy. It was a good day.',
    'Kecha men bozorda edim. Do‘stlarim maktabda edi.',
    'Where was the speaker yesterday?',
    ['At the market', 'At school', 'At home'],
    0,
    'Matnda: at the market.',
    'How did they feel in the evening?',
    ['Tired but happy', 'Angry and sad', 'Bored'],
    0,
    'Matnda: tired but happy.',
  ),
  'en-a1-u5-l5': L(
    'Listening: My Story',
    'My name is Jasmina. I live in Tashkent. I can speak English a little. Yesterday I was at the library. Now I am studying at home. I want to get Band 7 in IELTS one day!',
    'Mening ismim Jasmina. Toshkentda yashayman. Biroz inglizcha gapira olaman.',
    'Where does Jasmina live?',
    ['In Tashkent', 'In Samarkand', 'In London'],
    0,
    'Matnda: in Tashkent.',
    'What is her goal?',
    ['Band 7 in IELTS', 'Band 5 in IELTS', 'A new car'],
    0,
    'Matnda: Band 7.',
  ),
};

// ── 3. Runtime merge: Learn ga grammar qo‘shish + Listen step kiritish ──
export function applyA1Enrichment(lesson: Lesson): Lesson {
  const lessonId = lesson.id;
  const grammarPatch = A1_GRAMMAR_PATCHES[lessonId];
  const listening = A1_LISTENING_STEPS[lessonId];
  if (!grammarPatch && !listening) return lesson;

  const steps = lesson.steps.map((s) => ({ ...s }));

  // 3a. Grammar patch — birinchi learn step ga qo‘shish
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

  // 3b. Listening step — practice dan oldin kiritish (agar hali yo‘q bo‘lsa)
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
