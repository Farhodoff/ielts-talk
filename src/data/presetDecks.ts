export interface PresetCard {
  front: string;
  back: string;
  phonetic?: string;
  example?: string;
  exampleTranslation?: string;
  category?: string;
}

export interface PresetDeck {
  id: string;
  title: string;
  description: string;
  language: 'en';
  level:
    'A1-A2' | 'B1-B2' | 'C1-C2' | 'IELTS Collocations' | 'IELTS Topics' | 'A1' | 'A2' | 'B1' | 'B2';
  badgeColor: string;
  icon: string;
  cardCount: number;
  isPremiumOnly?: boolean;
  loadCards: () => Promise<PresetCard[]>;
}

export interface PresetSubDeck {
  id: string;
  deckId: string;
  title: string;
  level: string;
  description?: string;
  badgeColor?: string;
  icon?: string;
  partNumber: number;
  cardCount: number;
  cards: PresetCard[];
  createdAt: string;
}

export const PRESET_DECKS: PresetDeck[] = [
  {
    id: 'deck_oxford_3000_a1',
    title: '📘 Oxford 3000 — A1 (Elementary)',
    description:
      "American Oxford 3000 kitobidan A1 darajasidagi eng muhim 897 ta tayanch so'z va iboralar.",
    language: 'en',
    level: 'A1',
    badgeColor: 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20',
    icon: '📘',
    cardCount: 897,
    isPremiumOnly: false,
    loadCards: async () => {
      const data = await import('./decks/oxford_3000_a1.json');
      return data.default as PresetCard[];
    },
  },
  {
    id: 'deck_oxford_3000_a2',
    title: '📗 Oxford 3000 — A2 (Pre-Intermediate)',
    description:
      "IELTS 4.0-5.0 darajasidagi o'quvchilar uchun Oxford 3000 kitobining A2 daraja so'z boyligi.",
    language: 'en',
    level: 'A2',
    badgeColor: 'bg-teal-500/10 text-teal-600 border-teal-500/20',
    icon: '📗',
    cardCount: 864,
    isPremiumOnly: false,
    loadCards: async () => {
      const data = await import('./decks/oxford_3000_a2.json');
      return data.default as PresetCard[];
    },
  },
  {
    id: 'deck_oxford_3000_b1',
    title: '📙 Oxford 3000 — B1 (Intermediate)',
    description:
      "IELTS 5.5-6.0 darajadagi akademik muloqot va o'qish uchun zarur bo'lgan 804 ta oraliq so'zlar.",
    language: 'en',
    level: 'B1',
    badgeColor: 'bg-indigo-500/10 text-indigo-600 border-indigo-500/20',
    icon: '📙',
    cardCount: 804,
    isPremiumOnly: false,
    loadCards: async () => {
      const data = await import('./decks/oxford_3000_b1.json');
      return data.default as PresetCard[];
    },
  },
  {
    id: 'deck_oxford_3000_b2',
    title: '📕 Oxford 3000 — B2 (Upper-Intermediate)',
    description:
      "IELTS 6.5-7.5 Band talabalari uchun murakkab akademik kontekst va maqolalar so'zlari.",
    language: 'en',
    level: 'B2',
    badgeColor: 'bg-rose-500/10 text-rose-600 border-rose-500/20',
    icon: '📕',
    cardCount: 728,
    isPremiumOnly: false,
    loadCards: async () => {
      const data = await import('./decks/oxford_3000_b2.json');
      return data.default as PresetCard[];
    },
  },
  {
    id: 'deck_starter_a1_a2',
    title: '🌱 A1-A2 Starter Vocabulary',
    description:
      "Ingliz tilini noldan boshlayotganlar uchun PDF darsliklardan olingan tayanch so'zlar.",
    language: 'en',
    level: 'A1-A2',
    badgeColor: 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20',
    icon: '🌱',
    cardCount: 1646,
    isPremiumOnly: false,
    loadCards: async () => {
      const data = await import('./decks/starter.json');
      return data.default as PresetCard[];
    },
  },
  {
    id: 'deck_intermediate_b1_b2',
    title: '📈 B1-B2 Pre-IELTS Academic Vocab',
    description: "Band 5.5-6.5 darajasidagi talabalar uchun akademik so'zlar va iboralar to'plami.",
    language: 'en',
    level: 'B1-B2',
    badgeColor: 'bg-indigo-500/10 text-indigo-600 border-indigo-500/20',
    icon: '📈',
    cardCount: 539,
    isPremiumOnly: false,
    loadCards: async () => {
      const data = await import('./decks/academic.json');
      return data.default as PresetCard[];
    },
  },
  {
    id: 'deck_master_c1_c2',
    title: '📙 C1-C2 Master IELTS Collocations',
    description: 'Band 7.5-9.0 darajasidagi insholar uchun akademik birikmalar va iboralar.',
    language: 'en',
    level: 'C1-C2',
    badgeColor: 'bg-amber-500/10 text-amber-600 border-amber-500/20',
    icon: '📙',
    cardCount: 76,
    isPremiumOnly: false,
    loadCards: async () => {
      const data = await import('./decks/c1_c2.json');
      return data.default as PresetCard[];
    },
  },
  {
    id: 'deck_phonetics_foundation',
    title: '🔤 Phonetics & Pronunciation Essentials',
    description:
      "Ingliz tilini noldan boshlovchilar uchun 44 ta fonetik tovush, o'qilmaydigan harflar (silent letters) va urg'u qoidalari.",
    language: 'en',
    level: 'A1-A2',
    badgeColor: 'bg-teal-500/10 text-teal-600 border-teal-500/20',
    icon: '🔤',
    cardCount: 10,
    isPremiumOnly: false,
    loadCards: async () => {
      const data = await import('./decks/phonetics_foundation.json');
      return data.default as PresetCard[];
    },
  },
  {
    id: 'deck_makkar_2026_collocations',
    title: '🔥 Makkar 2026 Band 7.5+ Golden Collocations',
    description:
      "2026-yil may-avgust IELTS imtihon bashorati bo'yicha Speaking va Writing uchun eng yuqori ball beruvchi oltin iboralar va kollokatsiyalar.",
    language: 'en',
    level: 'IELTS Collocations',
    badgeColor: 'bg-rose-500/10 text-rose-600 border-rose-500/20',
    icon: '🔥',
    cardCount: 30,
    isPremiumOnly: false,
    loadCards: async () => {
      const data = await import('./decks/makkar_2026_collocations.json');
      return data.default as PresetCard[];
    },
  },
];
