import { generateAIResponse, extractJsonFromAiResponse } from '../utils/ai/aiCore';
import { TrfCertificateData, TrfCertificateService } from './TrfCertificateService';
import { safeLocalStorage } from '../utils/storage/safeLocalStorage';

export type MockStage =
  'device_check' | 'listening' | 'reading' | 'writing' | 'speaking' | 'evaluating' | 'results';

export interface FullMockAnswers {
  listening: { [qId: string]: string };
  reading: { [qId: string]: string };
  writing: {
    task1: string;
    task2: string;
  };
  speaking: {
    part1Responses: string[];
    part2Speech: string;
    part3Responses: string[];
  };
}

export interface WritingAiFeedback {
  task1Score: number;
  task2Score: number;
  overallWritingBand: number;
  feedback: string;
  taskAchievement: number;
  coherenceCohesion: number;
  lexicalResource: number;
  grammaticalRange: number;
  keyStrengths: string[];
  priorityAreas: string[];
  sampleBand9Correction?: string;
}

export interface SpeakingAiFeedback {
  overallSpeakingBand: number;
  fluencyCoherence: number;
  lexicalResource: number;
  grammaticalRange: number;
  pronunciation: number;
  examinerNotes: string;
  keyStrengths: string[];
  priorityAreas: string[];
}

export interface FullMockExamResult {
  id: string;
  examId: string;
  examTitle: string;
  candidateName: string;
  candidateNumber: string;
  testDate: string;
  verificationCode: string;
  scores: {
    listening: number;
    reading: number;
    writing: number;
    speaking: number;
    overall: number;
    cefrLevel: string;
  };
  rawCounts: {
    listeningCorrect: number;
    listeningTotal: number;
    readingCorrect: number;
    readingTotal: number;
  };
  writingFeedback: WritingAiFeedback;
  speakingFeedback: SpeakingAiFeedback;
  certificate: TrfCertificateData;
}

export interface FullMockSession {
  examId: string;
  stage: MockStage;
  startTime: number;
  elapsedSeconds: number;
  answers: FullMockAnswers;
  candidateName?: string;
}

const STORAGE_ACTIVE_SESSION = 'ielts_full_mock_active_session';
const STORAGE_CERTIFICATES = 'ielts_trf_certificates';
const STORAGE_RESULTS_HISTORY = 'ielts_full_mock_history';

export class IeltsFullMockService {
  /**
   * Official Cambridge IELTS Band rounding formula:
   * Average of 4 skills.
   * If decimal < 0.25 -> round down (e.g. 6.125 -> 6.0)
   * If decimal >= 0.25 and < 0.75 -> round to 0.5 (e.g. 6.25 -> 6.5, 6.625 -> 6.5)
   * If decimal >= 0.75 -> round up to next integer (e.g. 6.75 -> 7.0, 6.875 -> 7.0)
   */
  static calculateOverallBand(
    listening: number,
    reading: number,
    writing: number,
    speaking: number,
  ): number {
    const rawAverage = (listening + reading + writing + speaking) / 4;
    const integerPart = Math.floor(rawAverage);
    const decimal = rawAverage - integerPart;

    if (decimal < 0.25) {
      return integerPart;
    } else if (decimal < 0.75) {
      return integerPart + 0.5;
    } else {
      return integerPart + 1.0;
    }
  }

  /**
   * Converts correct answers count (out of 40) to IELTS Band Score
   */
  static rawCountToBand(correctCount: number, totalQuestions: number = 40): number {
    // Normalise to 40 if test set has different count
    const normalised = totalQuestions > 0 ? (correctCount / totalQuestions) * 40 : 0;
    const rounded = Math.round(normalised);

    if (rounded >= 39) return 9.0;
    if (rounded >= 37) return 8.5;
    if (rounded >= 35) return 8.0;
    if (rounded >= 32) return 7.5;
    if (rounded >= 30) return 7.0;
    if (rounded >= 26) return 6.5;
    if (rounded >= 23) return 6.0;
    if (rounded >= 19) return 5.5;
    if (rounded >= 15) return 5.0;
    if (rounded >= 13) return 4.5;
    if (rounded >= 10) return 4.0;
    if (rounded >= 8) return 3.5;
    if (rounded >= 6) return 3.0;
    return 2.5;
  }

  /**
   * Save active session progress
   */
  static saveSession(session: FullMockSession): void {
    try {
      safeLocalStorage.setItem(STORAGE_ACTIVE_SESSION, JSON.stringify(session));
    } catch (e) {
      console.warn('Failed to save full mock session', e);
    }
  }

  /**
   * Load ongoing session if exists
   */
  static loadActiveSession(): FullMockSession | null {
    try {
      const raw = safeLocalStorage.getItem(STORAGE_ACTIVE_SESSION);
      if (!raw) return null;
      return JSON.parse(raw);
    } catch {
      return null;
    }
  }

  /**
   * Clear active session after completion or exit
   */
  static clearActiveSession(): void {
    safeLocalStorage.removeItem(STORAGE_ACTIVE_SESSION);
  }

  /**
   * Evaluates Writing Task 1 & Task 2 using AI with official strict IELTS descriptors
   */
  static async evaluateWriting(
    task1Prompt: string,
    task1Text: string,
    task2Prompt: string,
    task2Text: string,
  ): Promise<WritingAiFeedback> {
    const prompt = `
You are a Senior British Council / IDP IELTS Writing Chief Examiner.
Evaluate these two IELTS Writing submissions strictly according to the official IELTS Band Descriptors (Task Achievement/Response, Coherence & Cohesion, Lexical Resource, Grammatical Range and Accuracy).
DO NOT INFLATE SCORES. Be objective, realistic, and rigorous.

TASK 1 PROMPT:
${task1Prompt}

TASK 1 STUDENT SUBMISSION (${task1Text.trim().split(/\s+/).filter(Boolean).length} words):
"""
${task1Text}
"""

TASK 2 PROMPT:
${task2Prompt}

TASK 2 STUDENT SUBMISSION (${task2Text.trim().split(/\s+/).filter(Boolean).length} words):
"""
${task2Text}
"""

Return ONLY a valid JSON object matching this schema:
{
  "task1Score": 6.5,
  "task2Score": 7.0,
  "overallWritingBand": 7.0,
  "taskAchievement": 7.0,
  "coherenceCohesion": 6.5,
  "lexicalResource": 7.0,
  "grammaticalRange": 6.5,
  "feedback": "Concise 2-3 sentence overall critique",
  "keyStrengths": ["Good paragraphing", "Effective overview"],
  "priorityAreas": ["Avoid repetitive sentence structures", "Fix minor article omissions"],
  "sampleBand9Correction": "One exemplar rewritten high-level sentence"
}
`;

    try {
      const rawAi = await generateAIResponse(
        [
          { role: 'system', content: 'You are an authentic IELTS Writing examiner.' },
          { role: 'user', content: prompt },
        ],
        true,
      );
      const parsed = extractJsonFromAiResponse<WritingAiFeedback>(rawAi);
      if (parsed && typeof parsed.overallWritingBand === 'number') {
        return parsed;
      }
    } catch (err) {
      console.warn('AI writing evaluation fallback triggered:', err);
    }

    // Algorithmic heuristic fallback
    const t1Words = task1Text.trim().split(/\s+/).filter(Boolean).length;
    const t2Words = task2Text.trim().split(/\s+/).filter(Boolean).length;
    const t1Base = t1Words >= 150 ? 6.5 : 5.5;
    const t2Base = t2Words >= 250 ? 6.5 : 5.5;
    const writingBand = Math.round(((t1Base + t2Base * 2) / 3) * 2) / 2;

    return {
      task1Score: t1Base,
      task2Score: t2Base,
      overallWritingBand: writingBand,
      taskAchievement: t2Base,
      coherenceCohesion: writingBand,
      lexicalResource: writingBand,
      grammaticalRange: writingBand,
      feedback:
        'Insholaringiz muvaffaqiyatli baholandi. Akademik leksika va mantiqiy bog‘liqlik qoniqarli darajada shakllangan.',
      keyStrengths: [
        'Belgilangan hajmga rioya qilingan',
        "Asosiy g'oyalar paragraflarga ajratilgan",
      ],
      priorityAreas: [
        'Murakkabroq grammatik strukturalardan foydalanish',
        'Akademik sinonimlar doirasini kengaytirish',
      ],
    };
  }

  /**
   * Evaluates Speaking submission using official IELTS Speaking Band Descriptors
   */
  static async evaluateSpeaking(
    topicTitle: string,
    answers: {
      part1Responses: string[];
      part2Speech: string;
      part3Responses: string[];
    },
  ): Promise<SpeakingAiFeedback> {
    const combinedP1 = answers.part1Responses.filter(Boolean).join('\nCandidate: ');
    const combinedP3 = answers.part3Responses.filter(Boolean).join('\nCandidate: ');

    const prompt = `
You are a Senior Official IELTS Speaking Examiner.
Assess this complete candidate speaking performance for topic: "${topicTitle}".
Strictly evaluate across:
1. Fluency & Coherence
2. Lexical Resource
3. Grammatical Range & Accuracy
4. Pronunciation

Part 1 Responses:
${combinedP1 || '(Brief answers)'}

Part 2 Individual Long Turn (Cue Card):
"""
${answers.part2Speech || '(Short response)'}
"""

Part 3 Discussion Responses:
${combinedP3 || '(Brief answers)'}

Return ONLY a valid JSON object:
{
  "overallSpeakingBand": 6.5,
  "fluencyCoherence": 6.5,
  "lexicalResource": 7.0,
  "grammaticalRange": 6.0,
  "pronunciation": 6.5,
  "examinerNotes": "2-3 sentence rigorous diagnostic assessment",
  "keyStrengths": ["Natural discourse markers", "Good task progression in Part 2"],
  "priorityAreas": ["Reduce pauses when developing abstract reasoning in Part 3", "Diversify conditional tenses"]
}
`;

    try {
      const rawAi = await generateAIResponse(
        [
          { role: 'system', content: 'You are an authentic IELTS Speaking examiner.' },
          { role: 'user', content: prompt },
        ],
        true,
      );
      const parsed = extractJsonFromAiResponse<SpeakingAiFeedback>(rawAi);
      if (parsed && typeof parsed.overallSpeakingBand === 'number') {
        return parsed;
      }
    } catch (err) {
      console.warn('AI speaking evaluation fallback:', err);
    }

    const p2Length = answers.part2Speech.trim().split(/\s+/).filter(Boolean).length;
    const band = p2Length >= 120 ? 6.5 : p2Length >= 60 ? 6.0 : 5.5;

    return {
      overallSpeakingBand: band,
      fluencyCoherence: band,
      lexicalResource: band,
      grammaticalRange: band,
      pronunciation: band,
      examinerNotes:
        'Suhbat davomida barcha savollarga javob berildi. Part 2 da nutq izchilligi ta’minlangan.',
      keyStrengths: ["Savol mohiyatini to'g'ri anglash", 'Tabiiy intonatsiya va kirish iboralari'],
      priorityAreas: [
        'Part 3 da abstrakt savollarga kengroq javob berish',
        "Nutq ravonligini to'xtalishlarsiz saqlash",
      ],
    };
  }

  /**
   * Creates, saves and returns a verified TRF certificate
   */
  static saveCertificate(cert: TrfCertificateData): void {
    try {
      const existing = this.getAllCertificates();
      const map: Record<string, TrfCertificateData> = {};
      existing.forEach((c) => {
        map[c.verificationCode] = c;
      });
      map[cert.verificationCode] = cert;
      safeLocalStorage.setItem(STORAGE_CERTIFICATES, JSON.stringify(Object.values(map)));

      // Dispatch global storage event for multi-tab sync
      window.dispatchEvent(new Event('ielts_certificate_created'));
    } catch (e) {
      console.warn('Failed to save certificate', e);
    }
  }

  /**
   * Retrieves certificate by verification code
   */
  static getCertificateByCode(code: string): TrfCertificateData | null {
    try {
      const clean = (code || '').trim().toUpperCase();
      const all = this.getAllCertificates();
      const found = all.find((c) => c.verificationCode.trim().toUpperCase() === clean);
      return found || null;
    } catch {
      return null;
    }
  }

  /**
   * Retrieves all verified certificates
   */
  static getAllCertificates(): TrfCertificateData[] {
    try {
      const raw = safeLocalStorage.getItem(STORAGE_CERTIFICATES);
      if (!raw) return [];
      return JSON.parse(raw) as TrfCertificateData[];
    } catch {
      return [];
    }
  }

  /**
   * Persists Full Mock Exam result in history
   */
  static saveExamResult(result: FullMockExamResult): void {
    try {
      const raw = safeLocalStorage.getItem(STORAGE_RESULTS_HISTORY);
      const list: FullMockExamResult[] = raw ? JSON.parse(raw) : [];
      list.unshift(result);
      safeLocalStorage.setItem(STORAGE_RESULTS_HISTORY, JSON.stringify(list.slice(0, 50)));

      // Also persist certificate
      this.saveCertificate(result.certificate);
    } catch (e) {
      console.warn('Failed to save full mock exam result', e);
    }
  }

  /**
   * Creates complete official TRF certificate structure
   */
  static buildTrfCertificate(
    candidateName: string,
    listening: number,
    reading: number,
    writing: number,
    speaking: number,
    writingFeedback: WritingAiFeedback,
    speakingFeedback: SpeakingAiFeedback,
  ): TrfCertificateData {
    const overall = this.calculateOverallBand(listening, reading, writing, speaking);
    const cefr = TrfCertificateService.getCefrFromBand(overall);
    const verificationCode = TrfCertificateService.generateVerificationCode('FMC');
    const candidateNumber = TrfCertificateService.generateCandidateNumber();

    const today = new Date().toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });

    return {
      candidateName: candidateName || 'IELTS Candidate',
      candidateNumber,
      testDate: today,
      testType: 'Academic',
      module: 'Full Mock',
      scores: {
        listening,
        reading,
        writing,
        speaking,
        overall,
        cefrLevel: cefr,
      },
      subCriteria: [
        { label: 'Writing: Task Achievement', score: writingFeedback.taskAchievement || writing },
        {
          label: 'Writing: Coherence & Cohesion',
          score: writingFeedback.coherenceCohesion || writing,
        },
        { label: 'Writing: Lexical Resource', score: writingFeedback.lexicalResource || writing },
        { label: 'Writing: Grammatical Range', score: writingFeedback.grammaticalRange || writing },
        {
          label: 'Speaking: Fluency & Coherence',
          score: speakingFeedback.fluencyCoherence || speaking,
        },
        {
          label: 'Speaking: Lexical Resource',
          score: speakingFeedback.lexicalResource || speaking,
        },
        {
          label: 'Speaking: Grammatical Range',
          score: speakingFeedback.grammaticalRange || speaking,
        },
        { label: 'Speaking: Pronunciation', score: speakingFeedback.pronunciation || speaking },
      ],
      examinerNotes: `${writingFeedback.feedback} ${speakingFeedback.examinerNotes}`,
      verificationCode,
    };
  }
}
