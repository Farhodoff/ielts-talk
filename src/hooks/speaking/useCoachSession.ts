import { useState, useEffect, useRef, useCallback } from 'react';
import {
  analyzeSpeakingSession,
  SessionAnalysisReport,
  extractSpeechAudioText,
} from '../../utils/ai';
import {
  CoachPersona,
  CoachChatMessage,
  PERSONAS_BY_LANG,
} from '../../components/speaking/speakingTypes';
import {
  ConversationScenario,
  ScenarioSessionResult,
} from '../../components/speaking/scenarioTypes';
import { evaluateScenarioSession } from '../../utils/ai/aiScenarioEval';
import { ScenarioService } from '../../services/ScenarioService';
import { ErrorVaultService } from '../../services/ErrorVaultService';
import { AudioStorageService } from '../../services/AudioStorageService';
import { Subject } from '../../types';
import { toast } from '../use-toast';

export const getCoachInitialGreeting = (_lang: 'en' | 'ja', p: CoachPersona): string => {
  switch (p) {
    case 'ielts':
      return 'Good afternoon. My name is Gordon, and I will be your IELTS speaking examiner today. Could you please state your full name and where you are from?';
    case 'roast':
      return 'Hello! Strict British Examiner Gordon here. Speak with confidence, avoid repetition, and showcase your Band 8.0 vocabulary!';
    case 'gentle':
      return "Hello! I'm your Cambridge English speaking tutor. Speak at your own comfortable pace whenever you're ready!";
    case 'interview':
      return 'Good day and welcome to your Global Job Interview. Please introduce yourself and your professional background in English.';
    case 'travel':
      return 'Welcome to London Heathrow Airport. Where are you travelling from today?';
    case 'casual':
      return "Hi there! Let's have a natural, fluent English conversation. What's on your mind today?";
    default:
      return 'Good day! I am your AI IELTS Speaking Coach. How can I help you prepare today?';
  }
};

interface UseCoachSessionOptions {
  scenarioIdParam: string | null;
  user: { id: string; email?: string } | null;
  subjects?: Subject[];
  addCoachSession?: (session: any) => Promise<any>;
  addSession?: (session: any) => Promise<any>;
  awardXP?: (amount: number) => Promise<any>;
  language: 'en' | 'ja';
  persona: CoachPersona;
  languageRef: React.MutableRefObject<'en' | 'ja'>;
  personaRef: React.MutableRefObject<CoachPersona>;
  activeScenario: ConversationScenario | null;
  activeScenarioRef: React.MutableRefObject<ConversationScenario | null>;
  chatHistoryRef: React.MutableRefObject<CoachChatMessage[]>;
  setChatHistory: React.Dispatch<React.SetStateAction<CoachChatMessage[]>>;
  voiceRecorder: {
    stopRecording: () => Promise<Blob | null>;
    recordedUrl: string | null;
    durationSeconds: number;
    isPlaying: boolean;
    audioProgress: number;
    playRecorded: () => void;
    pauseRecorded: () => void;
  };
  recognitionRef: React.RefObject<any>;
  streamAbortControllerRef: React.MutableRefObject<AbortController | null>;
  lastCoachSpokenTextRef: React.MutableRefObject<string>;
  scenarioIntroSpokenRef: React.MutableRefObject<string | null>;
  isSpeakingRef: React.MutableRefObject<boolean>;
  isProcessingRef: React.MutableRefObject<boolean>;
  setIsSpeaking: (v: boolean) => void;
  setIsThinking: (v: boolean) => void;
  setCurrentTranscript: (t: string) => void;
  transcriptBufferRef: React.MutableRefObject<string>;
  setError: (e: string | null) => void;
  unlockAudio: () => void;
  speakText: (t: string) => void;
  stopSpeaking: () => void;
}

export const useCoachSession = ({
  scenarioIdParam,
  user,
  subjects,
  addCoachSession,
  addSession,
  awardXP,
  language,
  persona,
  languageRef,
  personaRef,
  activeScenario,
  activeScenarioRef,
  chatHistoryRef,
  setChatHistory,
  voiceRecorder,
  recognitionRef,
  streamAbortControllerRef,
  lastCoachSpokenTextRef,
  scenarioIntroSpokenRef,
  isSpeakingRef,
  isProcessingRef,
  setIsSpeaking,
  setIsThinking,
  setCurrentTranscript,
  transcriptBufferRef,
  setError,
  unlockAudio,
  speakText,
  stopSpeaking,
}: UseCoachSessionOptions) => {
  const [isLiveSession, setIsLiveSession] = useState(() => Boolean(scenarioIdParam));
  const isLiveSessionRef = useRef(Boolean(scenarioIdParam));
  const [sessionSeconds, setSessionSeconds] = useState(0);

  // Session Analysis Report Modal state
  const [isReportOpen, setIsReportOpen] = useState(false);
  const [isReportLoading, setIsReportLoading] = useState(false);
  const [reportData, setReportData] = useState<SessionAnalysisReport | null>(null);

  // Scenario Evaluation Modal state
  const [isScenarioReportOpen, setIsScenarioReportOpen] = useState(false);
  const [isScenarioEvalLoading, setIsScenarioEvalLoading] = useState(false);
  const [scenarioEvalResult, setScenarioEvalResult] = useState<ScenarioSessionResult | null>(null);

  useEffect(() => {
    isLiveSessionRef.current = isLiveSession;
  }, [isLiveSession]);

  // Timer logic
  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | undefined;
    if (isLiveSession) {
      interval = setInterval(() => {
        setSessionSeconds((prev) => prev + 1);
      }, 1000);
    } else {
      setSessionSeconds(0);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isLiveSession]);

  const formatTimer = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleResetChat = useCallback(() => {
    if (streamAbortControllerRef.current) {
      streamAbortControllerRef.current.abort();
      streamAbortControllerRef.current = null;
    }
    stopSpeaking();
    setIsSpeaking(false);
    setIsThinking(false);
    const currentScenario = activeScenarioRef.current || activeScenario;
    let greeting = getCoachInitialGreeting(language, persona);
    if (currentScenario) {
      greeting =
        (language === 'en' ? currentScenario.opening_line_en : currentScenario.opening_line_ja) ||
        currentScenario.opening_line_ja ||
        currentScenario.opening_line_en ||
        "Hello! Let's start our conversation practice.";
    }
    const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const freshHistory: CoachChatMessage[] = [
      { role: 'assistant', content: greeting, timestamp: timeStr },
    ];
    setChatHistory(freshHistory);
    chatHistoryRef.current = freshHistory;
    const speechAudio = extractSpeechAudioText(greeting);
    lastCoachSpokenTextRef.current = speechAudio;
    if (currentScenario) {
      scenarioIntroSpokenRef.current = currentScenario.id;
    } else {
      scenarioIntroSpokenRef.current = null;
    }
    unlockAudio();
    speakText(speechAudio);
  }, [
    language,
    persona,
    activeScenario,
    activeScenarioRef,
    unlockAudio,
    speakText,
    stopSpeaking,
    setIsSpeaking,
    setIsThinking,
    setChatHistory,
    chatHistoryRef,
    streamAbortControllerRef,
    lastCoachSpokenTextRef,
    scenarioIntroSpokenRef,
  ]);

  const startSession = (topicTitle?: unknown) => {
    unlockAudio();
    setIsLiveSession(true);
    isLiveSessionRef.current = true;
    setCurrentTranscript('');
    setError(null);

    if (isSpeakingRef.current) {
      return;
    }

    const currentScenario = activeScenarioRef.current || activeScenario;
    const normalizedScenarioId = currentScenario?.id
      ? currentScenario.id.trim().replace(/\s+/g, '_')
      : null;

    if (
      currentScenario &&
      scenarioIntroSpokenRef.current === normalizedScenarioId &&
      chatHistoryRef.current.length > 0
    ) {
      return;
    }

    const cleanTopic =
      typeof topicTitle === 'string' &&
      topicTitle.trim().length > 0 &&
      !topicTitle.includes('[object')
        ? topicTitle.trim()
        : undefined;

    let greeting = getCoachInitialGreeting(language, persona);
    if (currentScenario) {
      greeting =
        (language === 'en' ? currentScenario.opening_line_en : currentScenario.opening_line_ja) ||
        currentScenario.opening_line_ja ||
        currentScenario.opening_line_en ||
        "Hello! Let's start our conversation practice.";
    } else if (cleanTopic) {
      if (language === 'ja') {
        greeting = `こんにちは！「${cleanTopic}」ですね。準備ができたら話しかけてください！`;
      } else {
        greeting = `Hello! Let's practice with "${cleanTopic}". Feel free to speak whenever you are ready!`;
      }
    }

    const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const initHistory: CoachChatMessage[] = [
      { role: 'assistant', content: greeting, timestamp: timeStr },
    ];

    setChatHistory(initHistory);
    chatHistoryRef.current = initHistory;

    const speechAudio = extractSpeechAudioText(greeting);
    lastCoachSpokenTextRef.current = speechAudio;
    speakText(speechAudio);
  };

  const endSession = async () => {
    if (streamAbortControllerRef.current) {
      streamAbortControllerRef.current.abort();
      streamAbortControllerRef.current = null;
    }
    const historyToAnalyze = [...chatHistoryRef.current];
    const durSecs = sessionSeconds;

    // Stop voice recording and retrieve recorded Blob
    const audioBlob = await voiceRecorder.stopRecording();

    setIsLiveSession(false);
    isLiveSessionRef.current = false;
    isProcessingRef.current = false;
    setIsSpeaking(false);
    setIsThinking(false);
    setCurrentTranscript('');
    transcriptBufferRef.current = '';
    if (recognitionRef.current) {
      try {
        recognitionRef.current.stop();
      } catch {}
    }
    stopSpeaking();

    // Generate valid UUID for session record
    const sessionUuid: string =
      typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function'
        ? crypto.randomUUID()
        : `${Date.now().toString(16).padStart(8, '0')}-0000-4000-8000-000000000000`;

    // Upload audio file to Supabase Storage in the background (100% non-blocking)
    let uploadedAudioPath: string | undefined;
    if (audioBlob && audioBlob.size > 0 && user?.id) {
      try {
        const uploadResult = await AudioStorageService.uploadSpeakingAudio(
          user.id,
          sessionUuid || `rec_${Date.now()}`,
          audioBlob,
        );
        if (uploadResult) {
          uploadedAudioPath = uploadResult;
        }
      } catch (storageErr) {
        console.warn('[SpeakingCoachSession] Audio upload skipped (non-blocking):', storageErr);
      }
    }

    // Trigger AI analysis report if user sent any messages
    const userSpoke = historyToAnalyze.some((h) => h.role === 'user');
    if (userSpoke) {
      if (activeScenario) {
        // Scenario Evaluation Flow
        setIsScenarioReportOpen(true);
        setIsScenarioEvalLoading(true);
        try {
          const evalResult = await evaluateScenarioSession({
            scenario: activeScenario,
            chatHistory: historyToAnalyze.map((h) => ({ role: h.role, content: h.content })),
            durationSeconds: durSecs,
            recordedUrl: voiceRecorder.recordedUrl,
          });

          evalResult.transcript = historyToAnalyze.map((h) => ({
            role: h.role,
            content: h.content,
            timestamp: h.timestamp,
            translation: h.translation,
          }));
          evalResult.audio_path = uploadedAudioPath;
          evalResult.audio_url = uploadedAudioPath;
          if (sessionUuid) {
            evalResult.id = sessionUuid;
          }

          setScenarioEvalResult(evalResult);
          await ScenarioService.saveSessionResult(evalResult, user?.id);
        } catch (err) {
          console.error('Scenario evaluation error:', err);
        } finally {
          setIsScenarioEvalLoading(false);
        }
      } else {
        // Standard Speaking Coach Report Flow
        setIsReportOpen(true);
        setIsReportLoading(true);
        try {
          const report = await analyzeSpeakingSession(
            historyToAnalyze.map((h) => ({ role: h.role, content: h.content })),
            languageRef.current,
            personaRef.current,
          );
          setReportData(report);

          if (report.grammar_corrections && report.grammar_corrections.length > 0) {
            ErrorVaultService.logErrors(
              report.grammar_corrections.map((c) => ({
                verbatim: c.original,
                correction: c.corrected,
                category: 'grammar',
                explanation: c.explanation,
                language: languageRef.current,
              })),
            );
          }

          const personaTitle = PERSONAS_BY_LANG[languageRef.current][personaRef.current].name;
          const fluency = report.fluency_score || 75;
          const vocab = Math.max(0, 100 - (report.better_vocabulary?.length || 0) * 5);
          const grammar = Math.max(0, 100 - (report.grammar_corrections?.length || 0) * 5);
          const overall = Math.round((fluency + vocab + grammar) / 3);

          if (addCoachSession) {
            await addCoachSession({
              personaTitle,
              fluencyScore: fluency,
              vocabularyScore: vocab,
              grammarScore: grammar,
              pronunciationScore: fluency,
              feedback: report.overall_feedback || '',
            });
          }

          // Save session with transcript into Supabase speaking_sessions
          await ScenarioService.saveSessionResult(
            {
              id: sessionUuid,
              scenario_id: 'general_speaking',
              scenario_title: personaTitle,
              fluency_score: fluency,
              vocabulary_score: vocab,
              grammar_score: grammar,
              pronunciation_score: fluency,
              overall_score: overall,
              duration_seconds: durSecs,
              audio_path: uploadedAudioPath,
              audio_url: uploadedAudioPath,
              ai_feedback: report.overall_feedback || 'Bajarildi',
              key_phrases_used: [],
              key_phrases_missed: [],
              transcript: historyToAnalyze.map((h) => ({
                role: h.role,
                content: h.content,
                timestamp: h.timestamp,
                translation: h.translation,
              })),
              created_at: new Date().toISOString(),
            },
            user?.id,
          );
        } catch (err) {
          console.error('Report generation error:', err);
        } finally {
          setIsReportLoading(false);
        }
      }

      // Automatically award XP & record session in Activity Heatmap
      const sessionMinutes = Math.max(1, Math.round(durSecs / 60));
      const earnedXp = Math.max(10, Math.round(sessionMinutes * 3));
      try {
        if (awardXP) {
          await awardXP(earnedXp);
        }
        if (addSession) {
          const speakingSub = subjects?.find(
            (s) =>
              s.name.toLowerCase().includes('speaking') || s.name.toLowerCase().includes('ielts'),
          );
          await addSession({
            duration: sessionMinutes,
            type: 'focus',
            completed: true,
            subjectId: speakingSub?.id || undefined,
            startTime: new Date().toISOString(),
          });
        }
        toast({
          title: `🎙️ Speaking faolligi saqlandi! (+${earnedXp} XP)`,
          description: `${sessionMinutes} daqiqa jonli muloqot o'quv faolligi (Heatmap)ga qo'shildi.`,
        });
      } catch (sessErr) {
        console.warn('[SpeakingCoach] Failed to save study session:', sessErr);
      }
    }
  };

  const toggleSession = () => {
    if (isLiveSession) {
      endSession();
    } else {
      startSession();
    }
  };

  const handleCloseReport = () => {
    setIsReportOpen(false);
    setChatHistory([]);
    chatHistoryRef.current = [];
  };

  const handleCloseScenarioReport = () => {
    setIsScenarioReportOpen(false);
    setChatHistory([]);
    chatHistoryRef.current = [];
  };

  return {
    isLiveSession,
    setIsLiveSession,
    isLiveSessionRef,
    sessionSeconds,
    formatTimer,
    startSession,
    endSession,
    toggleSession,
    handleResetChat,
    isReportOpen,
    isReportLoading,
    reportData,
    handleCloseReport,
    isScenarioReportOpen,
    isScenarioEvalLoading,
    scenarioEvalResult,
    handleCloseScenarioReport,
  };
};
