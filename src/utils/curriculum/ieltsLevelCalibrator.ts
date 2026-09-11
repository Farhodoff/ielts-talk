/**
 * IELTS to CEFR Level Calibrator
 * Calibrates IELTS band scores (e.g. 5.0) to international CEFR levels (A1 - C2),
 * target Oxford 3000 vocabulary decks, and Cambridge Murphy Grammar units.
 */

export type CefrLevel = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';

export interface LevelCurriculumConfig {
    cefr: CefrLevel;
    bandRange: string;
    labelUz: string;
    oxfordDeckId: string;
    oxfordDeckTitle: string;
    murphyRange: {
        start: number;
        end: number;
        category: string;
    };
    dailyDosage: {
        vocabWordsPerDay: number;
        grammarUnitsPerDay: number;
        skillsTasksPerDay: number;
    };
}

/**
 * Standard mapping of IELTS Band to CEFR level.
 * Explicitly maps IELTS 5.0 to A2 level as requested for foundation consolidation.
 */
export function mapIeltsBandToCefr(bandInput: string | number | undefined | null): CefrLevel {
    if (!bandInput) return 'A2';

    const normalized = String(bandInput).trim().toUpperCase();

    // If input is already a CEFR level
    if (['A1', 'A2', 'B1', 'B2', 'C1', 'C2'].includes(normalized)) {
        return normalized as CefrLevel;
    }

    if (normalized.includes('ZERO') || normalized === '0') {
        return 'A1';
    }

    // Extract numerical band score (e.g. "5.0", "5.5", "6.0", "BAND 5")
    const match = normalized.match(/\d+(\.\d+)?/);
    const band = match ? parseFloat(match[0]) : NaN;

    if (isNaN(band)) {
        return 'A2';
    }

    if (band < 4.0) {
        return 'A1';
    }
    // IELTS 4.0 to 5.0 -> A2 (Pre-Intermediate / Foundation)
    if (band <= 5.0) {
        return 'A2';
    }
    // IELTS 5.5 to 6.0 -> B1 (Intermediate)
    if (band <= 6.0) {
        return 'B1';
    }
    // IELTS 6.5 to 7.5 -> B2 (Upper-Intermediate / Academic Foundation)
    if (band <= 7.5) {
        return 'B2';
    }
    // IELTS 8.0 to 8.5 -> C1 (Advanced)
    if (band <= 8.5) {
        return 'C1';
    }
    // IELTS 9.0 -> C2 (Mastery)
    return 'C2';
}

export const LEVEL_CONFIGS: Record<CefrLevel, LevelCurriculumConfig> = {
    A1: {
        cefr: 'A1',
        bandRange: '0.0 - 3.5',
        labelUz: 'Boshlang\'ich poydevor (A1)',
        oxfordDeckId: 'deck_oxford_3000_a1',
        oxfordDeckTitle: 'Oxford 3000 (A1)',
        murphyRange: {
            start: 1,
            end: 20,
            category: 'Essential Grammar (Murphy Elementary)'
        },
        dailyDosage: {
            vocabWordsPerDay: 25,
            grammarUnitsPerDay: 1,
            skillsTasksPerDay: 1
        }
    },
    A2: {
        cefr: 'A2',
        bandRange: '4.0 - 5.0',
        labelUz: 'Bazaviy muloqot va mustahkamlash (A2)',
        oxfordDeckId: 'deck_oxford_3000_a2',
        oxfordDeckTitle: 'Oxford 3000 (A2)',
        murphyRange: {
            start: 21,
            end: 55,
            category: 'Pre-Intermediate Grammar (Murphy A2)'
        },
        dailyDosage: {
            vocabWordsPerDay: 25,
            grammarUnitsPerDay: 1,
            skillsTasksPerDay: 1
        }
    },
    B1: {
        cefr: 'B1',
        bandRange: '5.5 - 6.0',
        labelUz: 'O\'rta daraja (B1 Intermediate)',
        oxfordDeckId: 'deck_oxford_3000_b1',
        oxfordDeckTitle: 'Oxford 3000 (B1)',
        murphyRange: {
            start: 56,
            end: 95,
            category: 'Intermediate Grammar (English Grammar in Use)'
        },
        dailyDosage: {
            vocabWordsPerDay: 30,
            grammarUnitsPerDay: 1,
            skillsTasksPerDay: 1
        }
    },
    B2: {
        cefr: 'B2',
        bandRange: '6.5 - 7.5',
        labelUz: 'Yuqori o\'rta akademik (B2 Upper-Intermediate)',
        oxfordDeckId: 'deck_oxford_3000_b2',
        oxfordDeckTitle: 'Oxford 3000 (B2)',
        murphyRange: {
            start: 96,
            end: 130,
            category: 'Upper-Intermediate Grammar & Academic Structures'
        },
        dailyDosage: {
            vocabWordsPerDay: 35,
            grammarUnitsPerDay: 1,
            skillsTasksPerDay: 2
        }
    },
    C1: {
        cefr: 'C1',
        bandRange: '8.0 - 8.5',
        labelUz: 'Professional akademik (C1 Advanced)',
        oxfordDeckId: 'deck_oxford_3000_b2', // supplemented with C1/C2
        oxfordDeckTitle: 'Oxford 3000 (B2/C1)',
        murphyRange: {
            start: 131,
            end: 145,
            category: 'Advanced Academic Grammar (Hewings/Murphy)'
        },
        dailyDosage: {
            vocabWordsPerDay: 40,
            grammarUnitsPerDay: 1,
            skillsTasksPerDay: 2
        }
    },
    C2: {
        cefr: 'C2',
        bandRange: '9.0',
        labelUz: 'Mukammal daraja (C2 Mastery)',
        oxfordDeckId: 'deck_oxford_3000_b2',
        oxfordDeckTitle: 'Oxford 3000 (Mastery)',
        murphyRange: {
            start: 135,
            end: 145,
            category: 'Mastery Grammar & Nuance'
        },
        dailyDosage: {
            vocabWordsPerDay: 40,
            grammarUnitsPerDay: 1,
            skillsTasksPerDay: 2
        }
    }
};

/**
 * Get curriculum configuration for any IELTS band or CEFR string.
 */
export function getCurriculumConfigForBand(bandOrCefr: string | number | undefined | null): LevelCurriculumConfig {
    const cefr = mapIeltsBandToCefr(bandOrCefr);
    return LEVEL_CONFIGS[cefr] || LEVEL_CONFIGS.A2;
}
