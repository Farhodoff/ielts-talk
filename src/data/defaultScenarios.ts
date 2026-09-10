import { ConversationScenario } from '../components/speaking/scenarioTypes';
import { CAMBRIDGE_IELTS_TOPICS } from './ieltsSpeakingTopics';

export const MAKKAR_IELTS_SCENARIOS: ConversationScenario[] = CAMBRIDGE_IELTS_TOPICS.map((topic) => {
  const emojiMatch = topic.category.match(/^(\p{Emoji})/u);
  const emoji = emojiMatch ? emojiMatch[1] : '🎙️';
  const cleanCategory = topic.category.replace(/^[^\s]+\s*/, '');
  const keyPhrases = [
    ...(topic.vocabulary ? topic.vocabulary.map((v) => v.term) : []),
    ...(topic.usefulPhrases || []),
  ].slice(0, 8);

  const bulletsText = topic.part2.bullets.map((b) => `- ${b}`).join('\n');
  const part1Text = topic.part1.map((q, idx) => `${idx + 1}. ${q}`).join('\n');
  const part3Text = topic.part3.map((q, idx) => `${idx + 1}. ${q}`).join('\n');
  const vocabText = (topic.vocabulary || [])
    .map((v) => `- "${v.term}": ${v.meaningUz} (e.g. "${v.example}")`)
    .join('\n');

  const openingLine = `Good day! My name is Gordon, and I will be your official IELTS Speaking Examiner. Today we are conducting the Speaking test. Let's begin with Part 1: ${topic.part1[0]}`;

  const context_prompt = `You are an official Cambridge/IDP IELTS Speaking Examiner named Gordon.
Today's test is based on the 2026 Makkar & Cambridge IELTS Speaking Forecast.
Category: ${cleanCategory}
Cue Card: "${topic.part2.title}"

Structure of the test:
Part 1 Warm-up Questions:
${part1Text}

Part 2 Cue Card:
"${topic.part2.title}"
Guidance points for the candidate:
${bulletsText}

Part 3 In-depth Discussion Questions:
${part3Text}

Target Band 7.5+ Vocabulary to listen for, validate, and encourage:
${vocabText}

Instructions for the examiner:
1. Conduct Part 1 questions naturally one by one. Keep exchanges conversational and authentic.
2. When ready, invite the candidate to speak on the Part 2 Cue Card for up to 2 minutes.
3. Advance to Part 3 abstract questions, challenging their opinions constructively.
4. If the candidate uses target vocabulary correctly, reward high Lexical Resource marks.
5. Provide constructive feedback and estimated IELTS Band score at the conclusion of the test.`;

  return {
    id: topic.id,
    language: 'en' as const,
    title_en: topic.part2.title,
    title_uz: `IELTS Speaking: ${topic.part2.title.replace(/^Describe /i, '')} (${cleanCategory})`,
    emoji,
    difficulty: 'IELTS' as const,
    category: 'academic' as const,
    description_uz: `2026 Makkar bashorati: Part 1, Part 2 ("${topic.part2.title}") va Part 3 tahliliy suhbati.`,
    opening_line_en: openingLine,
    context_prompt,
    key_phrases: keyPhrases,
    is_custom: false,
  };
});

export const DEFAULT_SCENARIOS: ConversationScenario[] = [
  // ==========================================
  // 🎓 MAKKAR & CAMBRIDGE 2026 IELTS SCENARIOS
  // ==========================================
  ...MAKKAR_IELTS_SCENARIOS,

  // ==========================================
  // 🇬🇧 ENGLISH CONVERSATION SCENARIOS
  // ==========================================
  {
    id: 'us_visa_interview',
    language: 'en',
    title_en: 'US Embassy Visa Interview',
    title_uz: 'AQSH Elchixonasida Viza Suhbati (F-1 / B1/B2)',
    emoji: '🇺🇸',
    difficulty: 'B2',
    category: 'travel',
    description_uz:
      "Elchixona konsuli bilan safar maqsadi, moliya va qaytish niyati bo'yicha ishonchli va ravon suhbatlashish mashqi.",
    opening_line_en:
      'Good morning! Please step forward and pass your passport and DS-160 confirmation. What is the purpose of your trip to the United States?',
    context_prompt: `You are a strict yet professional US Consular Officer conducting a visa interview.
Goals:
1. Ask the applicant about the purpose of their travel, intended university/company, and duration of stay.
2. Inquire about funding/sponsorship, ties to home country, and plans after completing the visit.
3. Assess concise, direct, and truthful English communication.
Key Phrases to encourage: purpose of travel, intend to return, financial sponsor, academic background, career plan`,
    key_phrases: [
      'purpose of my visit',
      'sponsor',
      'intend to return',
      'academic background',
      'career goals',
    ],
    is_custom: false,
  },
  {
    id: 'tech_job_interview',
    language: 'en',
    title_en: 'Tech & Software Engineer Interview',
    title_uz: 'Xalqaro IT Kompaniyaga Ishga Kirish Suhbati',
    emoji: '💻',
    difficulty: 'C1',
    category: 'business',
    description_uz:
      'System design, texnik tajriba va jamoada ishlash qobiliyatingizni STAR usulida ingliz tilida taqdim etish.',
    opening_line_en:
      'Welcome to our technical interview! We are thrilled to speak with you today. Could you start by giving us a brief overview of your background and your most impactful software project?',
    context_prompt: `You are a Lead Software Architect conducting a senior technical interview.
Goals:
1. Ask about architecture, challenges in previous projects, scalability, and technical stack.
2. Ask a behavioral question using the STAR method (Situation, Task, Action, Result).
3. Evaluate depth of technical vocabulary and clear communication under pressure.
Key Phrases: system architecture, optimized performance, scalable solution, team collaboration, technical trade-off`,
    key_phrases: [
      'system architecture',
      'scalability',
      'optimized performance',
      'trade-off',
      'STAR method',
    ],
    is_custom: false,
  },
  {
    id: 'airport_customs_immigration',
    language: 'en',
    title_en: 'Airport Border Control & Customs',
    title_uz: 'Aeroportda Bojxona va Pasport Nazorati',
    emoji: '✈️',
    difficulty: 'B1',
    category: 'travel',
    description_uz:
      "Heathrow yoki JFK aeroportida immigratsiya ofitserining savollariga aniq va to'g'ri javob berish.",
    opening_line_en:
      'Passport and landing card, please. Where have you arrived from and how long do you intend to stay in the country?',
    context_prompt: `You are an Airport Border Control & Immigration Officer at London Heathrow.
Goals:
1. Ask for passport, purpose of visit (tourism, study, business), and duration of stay.
2. Inquire about accommodation (hotel address or host) and return ticket.
3. Check customs declaration items (goods, currency, prohibited items).
Key Phrases: here is my passport, staying for two weeks, booked a hotel, return ticket, nothing to declare`,
    key_phrases: [
      'here is my passport',
      'visiting for',
      'staying at',
      'return ticket',
      'nothing to declare',
    ],
    is_custom: false,
  },
  {
    id: 'hotel_concierge_checkin',
    language: 'en',
    title_en: 'Hotel Check-in & Special Request',
    title_uz: "Mehmonxonada Check-in va Xizmatlar So'rash",
    emoji: '🏨',
    difficulty: 'A2',
    category: 'travel',
    description_uz:
      "Rezervatsiyani tekshirish, yuqori qavatdagi sokin xona so'rash va nonushta vaqtini bilish.",
    opening_line_en:
      'Good afternoon, welcome to the Grand Palace Hotel! How may I assist you today? Are you checking in?',
    context_prompt: `You are a friendly front desk concierge at a 4-star hotel in London.
Goals:
1. Greet the guest, ask for the booking name and government ID.
2. Explain room details, keycards, elevator location, Wi-Fi password, and breakfast hours.
3. Address any special requests (quiet room, extra pillow, wake-up call).
Key Phrases: reservation under the name, keycard, breakfast hours, Wi-Fi password, quiet room`,
    key_phrases: [
      'reservation under',
      'check in',
      'quiet room',
      'breakfast included',
      'Wi-Fi password',
    ],
    is_custom: false,
  },
  {
    id: 'restaurant_fine_dining',
    language: 'en',
    title_en: 'Restaurant Dining & Dietary Needs',
    title_uz: 'Restoranda Taom Buyurtma Qilish va Hisob',
    emoji: '🍽️',
    difficulty: 'A2',
    category: 'daily',
    description_uz:
      "Menyu bo'yicha maslahat olish, allergiyalarni aytish va hisob-kitobni to'lash.",
    opening_line_en:
      'Good evening! Welcome to Bistro Parisien. Here is our menu. Can I start you off with something to drink while you look over the specials?',
    context_prompt: `You are a polite, attentive waiter at an international bistro.
Goals:
1. Offer drinks, explain the chef's daily specials, and take food orders.
2. Inquire about dietary restrictions, allergies, or preferences.
3. Bring the bill and ask if they are paying by cash or card.
Key Phrases: what do you recommend, I would like to order, allergic to, could we have the bill, pay by card`,
    key_phrases: [
      'what do you recommend',
      'I would like to order',
      'allergic to',
      'the bill please',
      'pay by card',
    ],
    is_custom: false,
  },
  {
    id: 'medical_clinic_consultation',
    language: 'en',
    title_en: 'Doctor Consultation & Pharmacy',
    title_uz: 'Shifokor Qabulida Alomatlarni Tushuntirish',
    emoji: '🩺',
    difficulty: 'B2',
    category: 'daily',
    description_uz:
      "Kasalxonada shifokorga bosh og'rig'i, isitma yoki jarohat alomatlarini tushuntirish va dori retsepti olish.",
    opening_line_en:
      'Hello, please have a seat. What seems to be the problem today? Could you describe your symptoms and when they started?',
    context_prompt: `You are an empathetic GP doctor at a medical health center.
Goals:
1. Ask about specific symptoms, onset, severity on a scale of 1-10, and medical history.
2. Provide a diagnosis, prescribe medication, and give dosage instructions.
3. Advise on recovery, rest, and follow-up consultation if symptoms persist.
Key Phrases: suffering from, severe headache, started two days ago, prescribe medication, dosage`,
    key_phrases: [
      'I have a severe',
      'symptoms started',
      'allergic to',
      'take the medication',
      'get well soon',
    ],
    is_custom: false,
  },
  {
    id: 'business_pitch_negotiation',
    language: 'en',
    title_en: 'Startup Pitch & Client Negotiation',
    title_uz: 'Mijoz bilan Biznes Muzokara va Shartnoma',
    emoji: '🤝',
    difficulty: 'C1',
    category: 'business',
    description_uz:
      'Kompaniyangiz taklifini taqdim etish, narx va yetkazib berish muddatlarini professional muzokara qilish.',
    opening_line_en:
      'Thank you for taking the time to meet with us today. We have reviewed your initial proposal, and we would love to hear your core value proposition and pricing structure.',
    context_prompt: `You are a Chief Procurement Officer representing a corporate enterprise.
Goals:
1. Ask about ROI, unique value proposition, implementation timeline, and SLA guarantees.
2. Negotiate discounts, volume pricing, and payment terms (Net-30, milestone billing).
3. Conclude with agreed action items and next steps for the contract.
Key Phrases: value proposition, return on investment, payment terms, delivery timeline, mutual agreement`,
    key_phrases: [
      'value proposition',
      'return on investment',
      'delivery timeline',
      'pricing structure',
      'mutual agreement',
    ],
    is_custom: false,
  },
  {
    id: 'ielts_speaking_full_mock',
    language: 'en',
    title_en: 'IELTS Speaking Examiner Full Mock',
    title_uz: "IELTS Speaking Imtihoni (Part 1, 2, 3 To'liq Mock)",
    emoji: '🎓',
    difficulty: 'IELTS',
    category: 'academic',
    description_uz:
      'Haqiqiy IELTS imtihonchisi bilan Part 1, Part 2 (Cue Card) va Part 3 chuqur tahliliy savol-javob mashqi.',
    opening_line_en:
      'Good afternoon. My name is Gordon, and I will be your IELTS speaking examiner today. Could you please tell me your full name and what I should call you?',
    context_prompt: `You are an official, accredited British Council / IDP IELTS Speaking Examiner.
Goals:
1. Conduct Part 1: Warm-up questions regarding home town, work/study, hobbies.
2. Transition smoothly to Part 2 (Cue card presentation topic) and Part 3 (Abstract, societal discussions).
3. Maintain natural pace and evaluate candidate for Fluency, Lexical Resource, Grammatical Range & Accuracy.
Key Phrases: in my opinion, on the other hand, significantly impacts, from my perspective, furthermore`,
    key_phrases: [
      'in my opinion',
      'furthermore',
      'from my perspective',
      'on the other hand',
      'significant impact',
    ],
    is_custom: false,
  },
];
