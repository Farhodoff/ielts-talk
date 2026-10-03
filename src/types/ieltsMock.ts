export interface MockQuestion {
  id: number;
  text: string;
  options?: string[];
  correctAnswer: string;
  type: 'choice' | 'fill';
  explanation: string;
}

export interface MockPassageData {
  id?: string;
  title: string;
  academicLevel?: string;
  text: string;
  script?: string;
  questions: MockQuestion[];
  audioUrl?: string;
}

export type MockDifficultyFilter = 'all' | 'pre_ielts' | 'core' | 'mastery';

export interface BandDescriptor {
  title: string;
  badge: string;
  feedback: string;
}

export const calculateIeltsBandScore = (correct: number, total: number): number => {
  if (total === 0) return 0;
  const ratio = correct / total;
  if (ratio >= 0.9) return 9.0;
  if (ratio >= 0.82) return 8.5;
  if (ratio >= 0.75) return 8.0;
  if (ratio >= 0.68) return 7.5;
  if (ratio >= 0.6) return 7.0;
  if (ratio >= 0.52) return 6.5;
  if (ratio >= 0.45) return 6.0;
  if (ratio >= 0.38) return 5.5;
  if (ratio >= 0.3) return 5.0;
  if (ratio >= 0.22) return 4.5;
  return 4.0;
};

export const getBandDescriptor = (band: number): BandDescriptor => {
  if (band >= 8.5) {
    return {
      title: 'Expert User (Mukammal daraja)',
      badge: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
      feedback:
        "Sizning tushunish qobiliyatingiz oliy darajada! Murakkab akademik matnlar va tezkor suhbatlarni bemalol o'zlashtira olasiz.",
    };
  }
  if (band >= 7.5) {
    return {
      title: "Very Good User (A'lo daraja)",
      badge: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20',
      feedback:
        "Juda kuchli natija! Bir-ikkita kichik chalg'ituvchilarga e'tibor qaratilsa, 8.5+ gacha bemalol chiqish mumkin.",
    };
  }
  if (band >= 6.5) {
    return {
      title: 'Good / Competent User (Yetarli daraja)',
      badge: 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20',
      feedback:
        "Asosiy mazmunni to'g'ri ilg'adingiz. Sinonimlar va so'zlarning yozilish imlosiga (spelling) ko'proq ahamiyat bering.",
    };
  }
  if (band >= 5.5) {
    return {
      title: "Modest User (O'rtacha daraja)",
      badge: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20',
      feedback:
        "Savollarni diqqat bilan o'qish va skimming/scanning strategiyalarini chuqurlashtirish tavsiya etiladi.",
    };
  }
  return {
    title: "Limited User (Boshlang'ich daraja)",
    badge: 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20',
    feedback:
      "Baza so'z boyligini kengaytirish va 1-bosqich Foundation mashqlarini takrorlash foydali bo'ladi.",
  };
};
