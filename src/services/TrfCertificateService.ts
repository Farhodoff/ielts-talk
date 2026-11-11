import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { supabase } from '../lib/supabase';
import { DailyReflectionService } from './DailyReflectionService';
import { safeLocalStorage } from '../utils/storage/safeLocalStorage';

export interface TrfScoreBreakdown {
  listening?: number;
  reading?: number;
  writing?: number;
  speaking?: number;
  overall: number;
  cefrLevel: string;
}

export interface TrfSubCriteria {
  label: string;
  score: number | string;
  feedback?: string;
}

export interface AdvancedWordItem {
  word: string;
  level?: string;
  translation?: string;
  partOfSpeech?: string;
}

export interface LearnerDiagnostics {
  totalReflections: number;
  averageReflectionScore: number;
  recentStrengths: string[];
  latestReflectionNotes?: string;
  totalVocabSearched: number;
  advancedWords: AdvancedWordItem[];
  totalSignals: number;
  topSkills: string[];
  growthAreas: string[];
}

export interface TrfCertificateData {
  candidateName: string;
  candidateNumber?: string;
  testDate: string;
  testType: 'Academic' | 'General Training' | 'Diagnostic Assessment';
  module: 'Speaking' | 'Writing' | 'Reading' | 'Listening' | 'Full Mock' | 'Diagnostic';
  scores: TrfScoreBreakdown;
  subCriteria?: TrfSubCriteria[];
  examinerNotes?: string;
  verificationCode: string;
  learnerDiagnostics?: LearnerDiagnostics;
}

export class TrfCertificateService {
  static getCefrFromBand(band: number): string {
    if (band >= 8.5) return 'C2 (Mastery / Native-like)';
    if (band >= 7.0) return 'C1 (Effective Operational Proficiency)';
    if (band >= 5.5) return 'B2 (Independent Vantage)';
    if (band >= 4.0) return 'B1 (Threshold / Intermediate)';
    return 'A2 (Waystage / Elementary)';
  }

  static generateVerificationCode(module: string): string {
    const year = new Date().getFullYear();
    const randomHex = Math.random().toString(36).substring(2, 7).toUpperCase();
    const modCode = module.substring(0, 3).toUpperCase();
    return `IT-${year}-${modCode}-${randomHex}`;
  }

  static generateCandidateNumber(): string {
    const num = Math.floor(100000 + Math.random() * 900000);
    return `UZ-${num}`;
  }

  /**
   * Compiles deep candidate diagnostics from PostgreSQL tables:
   * - user_daily_reflections (consistency score, strengths, reflections count)
   * - user_vocab_history (lexical research breadth, advanced C1/C2 IELTS collocations)
   * - user_learning_signals (learning patterns, top verified skills, focus areas)
   */
  static async fetchLearnerDiagnostics(userId?: string): Promise<LearnerDiagnostics> {
    const result: LearnerDiagnostics = {
      totalReflections: 0,
      averageReflectionScore: 0,
      recentStrengths: [],
      latestReflectionNotes: undefined,
      totalVocabSearched: 0,
      advancedWords: [],
      totalSignals: 0,
      topSkills: [],
      growthAreas: [],
    };

    if (!userId || userId === 'guest' || userId === 'local_user') {
      // Local storage fallback for guest/offline
      const localReflections = await DailyReflectionService.getReflections(userId || 'guest');
      const reflectionDates = Object.keys(localReflections);
      if (reflectionDates.length > 0) {
        result.totalReflections = reflectionDates.length;
        const totalScore = reflectionDates.reduce(
          (sum, d) => sum + (localReflections[d].score || 85),
          0,
        );
        result.averageReflectionScore = Math.round(totalScore / reflectionDates.length);
        const strengthsSet = new Set<string>();
        reflectionDates.forEach((d) => {
          (localReflections[d].strengths || []).forEach((s) => strengthsSet.add(s));
        });
        result.recentStrengths = Array.from(strengthsSet).slice(0, 5);
        result.latestReflectionNotes =
          localReflections[reflectionDates[0]]?.feedback ||
          localReflections[reflectionDates[0]]?.text;
      }

      const localVocab = safeLocalStorage.getJSON<any[]>('ielts_talk_vocab_history', []);
      result.totalVocabSearched = localVocab.length;
      result.advancedWords = localVocab
        .filter((item) => {
          const lvl = (item.level || '').toUpperCase();
          return lvl === 'C1' || lvl === 'C2' || lvl === 'IELTS' || lvl === 'B2';
        })
        .slice(0, 6)
        .map((item) => ({
          word: item.word,
          level: item.level || 'IELTS',
          translation: item.uzbekTranslation || item.definition,
          partOfSpeech: item.partOfSpeech,
        }));

      return result;
    }

    try {
      // 1. Fetch Reflections from DB / Cache
      const reflections = await DailyReflectionService.getReflections(userId);
      const dates = Object.keys(reflections);
      if (dates.length > 0) {
        result.totalReflections = dates.length;
        const totalScore = dates.reduce((sum, d) => sum + (reflections[d].score || 85), 0);
        result.averageReflectionScore = Math.round(totalScore / dates.length);
        const strengthsSet = new Set<string>();
        dates.forEach((d) => {
          (reflections[d].strengths || []).forEach((s) => strengthsSet.add(s));
        });
        result.recentStrengths = Array.from(strengthsSet).slice(0, 5);
        const latestDate = dates[0];
        result.latestReflectionNotes =
          reflections[latestDate]?.feedback || reflections[latestDate]?.text;
      }

      // 2. Fetch Vocab History from DB
      let vocabItems: any[] = [];
      try {
        const { data: vocabData, error } = await supabase
          .from('user_vocab_history')
          .select('word, language, details, searched_at')
          .eq('user_id', userId)
          .order('searched_at', { ascending: false })
          .limit(50);

        if (!error && vocabData && vocabData.length > 0) {
          vocabItems = vocabData.map((row) => ({
            word: row.word,
            language: row.language,
            ...(typeof row.details === 'object' && row.details !== null ? row.details : {}),
          }));
        } else {
          vocabItems = safeLocalStorage.getJSON<any[]>('ielts_talk_vocab_history', []);
        }
      } catch {
        vocabItems = safeLocalStorage.getJSON<any[]>('ielts_talk_vocab_history', []);
      }

      result.totalVocabSearched = vocabItems.length;
      result.advancedWords = vocabItems
        .filter((item) => {
          const lvl = (item.level || '').toUpperCase();
          return lvl === 'C1' || lvl === 'C2' || lvl === 'IELTS' || lvl === 'B2';
        })
        .slice(0, 6)
        .map((item) => ({
          word: item.word,
          level: item.level || 'IELTS',
          translation: item.uzbekTranslation || item.definition,
          partOfSpeech: item.partOfSpeech,
        }));

      // 3. Fetch Learning Signals from DB
      try {
        const { data: signalData, error: sigError } = await supabase
          .from('user_learning_signals')
          .select('type, signal_data, created_at')
          .eq('user_id', userId)
          .order('created_at', { ascending: false })
          .limit(40);

        if (!sigError && signalData && signalData.length > 0) {
          result.totalSignals = signalData.length;
          const skillsCount: Record<string, number> = {};
          const errorsCount: Record<string, number> = {};

          signalData.forEach((sig) => {
            const data = (sig.signal_data || {}) as any;
            if (sig.type === 'completed_lesson' && data.skill) {
              skillsCount[data.skill] = (skillsCount[data.skill] || 0) + 1;
            } else if (
              (sig.type === 'repeated_error' || sig.type === 'incorrect_answer') &&
              data.category
            ) {
              errorsCount[data.category] = (errorsCount[data.category] || 0) + 1;
            }
          });

          result.topSkills = Object.entries(skillsCount)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 3)
            .map(([s]) => s.toUpperCase());

          result.growthAreas = Object.entries(errorsCount)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 3)
            .map(([e]) => e);
        }
      } catch (err) {
        console.warn('[TrfCertificateService] Error fetching signals:', err);
      }
    } catch (err) {
      console.warn('[TrfCertificateService] Error compiling learner diagnostics:', err);
    }

    return result;
  }

  static async exportToPdf(
    element: HTMLElement,
    filename: string = 'IELTS_Test_Report_Form.pdf',
  ): Promise<void> {
    try {
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff',
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
      });

      const imgWidth = 210; // A4 mm
      const pageHeight = 297; // A4 mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, Math.min(imgHeight, pageHeight));
      pdf.save(filename);
    } catch (error) {
      console.error('Error generating PDF:', error);
      throw error;
    }
  }

  static async exportToImage(
    element: HTMLElement,
    filename: string = 'IELTS_Test_Report_Form.png',
  ): Promise<void> {
    try {
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff',
      });

      const link = document.createElement('a');
      link.download = filename;
      link.href = canvas.toDataURL('image/png');
      link.click();
    } catch (error) {
      console.error('Error generating Image:', error);
      throw error;
    }
  }
}
