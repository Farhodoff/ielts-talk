import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ShieldAlert, X } from 'lucide-react';
import { extractSpeechAudioText } from '../utils/ai';
import { useStudyData } from '../context/IeltsTalkContext';
import { isAdminEmail, isSuperAdmin } from '../utils/admin';
import { useSEO } from '../hooks/useSEO';
import SessionReportModal from '../components/speaking/SessionReportModal';
import {
  PERSONAS_BY_LANG,
  CoachPersona,
  CoachChatMessage,
} from '../components/speaking/speakingTypes';
import { useSpeechRecognition } from '../hooks/useSpeechRecognition';
import { useTTS, fetchTTSAudioBlob } from '../hooks/useTTS';
import { useVoiceRecorder } from '../hooks/useVoiceRecorder';
import { ConversationScenario } from '../components/speaking/scenarioTypes';
import { ScenarioService } from '../services/ScenarioService';
import { ScenarioReportModal } from '../components/speaking/ScenarioReportModal';
import { CoachTopBar } from '../components/speaking/CoachTopBar';
import { CoachWelcomeScreen } from '../components/speaking/CoachWelcomeScreen';
import { CoachChatArea } from '../components/speaking/CoachChatArea';
import { CoachControlBar } from '../components/speaking/CoachControlBar';
import { CoachSettingsModal } from '../components/speaking/CoachSettingsModal';
import { CoachProgressDashboard } from '../components/speaking/CoachProgressDashboard';
import { RealtimeVoiceOverlay } from '../components/speaking/RealtimeVoiceOverlay';
import { ScenarioBanner } from '../components/speaking/ScenarioBanner';
import { SpeakingAmbientBackground } from '../components/speaking/SpeakingAmbientBackground';

// Custom Hooks
import { useFullscreen } from '../hooks/speaking/useFullscreen';
import { useSpeakingHotkeys } from '../hooks/speaking/useSpeakingHotkeys';
import { useSpeakingVocabExport } from '../hooks/speaking/useSpeakingVocabExport';
import { useCoachDialogue } from '../hooks/speaking/useCoachDialogue';
import { useCoachSession, getCoachInitialGreeting } from '../hooks/speaking/useCoachSession';

export { getCoachInitialGreeting };

const PROMPT_SUGGESTIONS_BY_LANG: Record<
  'en' | 'ja',
  { title: string; text: string; icon: string }[]
> = {
  en: [
    {
      title: 'IELTS Part 1 Warm-up',
      text: "Hello! I'd like to practice IELTS Speaking Part 1. Could you ask me warm-up questions about my hometown, study, and hobbies?",
      icon: '👋',
    },
    {
      title: 'Part 2 Cue Card Speech',
      text: 'Please give me an IELTS Speaking Part 2 Cue Card topic. I will take 1 minute to prepare and speak for 2 minutes.',
      icon: '📝',
    },
    {
      title: 'Part 3 Deep Discussion',
      text: "Let's practice IELTS Speaking Part 3 abstract questions. Challenge my opinions with analytical follow-up questions.",
      icon: '🧠',
    },
    {
      title: 'Band 8+ Vocabulary Roast',
      text: 'Act as a strict IELTS examiner. Point out every repetitive word and grammatical slip, and suggest Band 8+ academic idioms and collocations!',
      icon: '🔥',
    },
  ],
  ja: [
    {
      title: 'IELTS Part 1 Warm-up',
      text: "Hello! I'd like to practice IELTS Speaking Part 1. Could you ask me warm-up questions about my hometown, study, and hobbies?",
      icon: '👋',
    },
    {
      title: 'Part 2 Cue Card Speech',
      text: 'Please give me an IELTS Speaking Part 2 Cue Card topic. I will take 1 minute to prepare and speak for 2 minutes.',
      icon: '📝',
    },
    {
      title: 'Part 3 Deep Discussion',
      text: "Let's practice IELTS Speaking Part 3 abstract questions. Challenge my opinions with analytical follow-up questions.",
      icon: '🧠',
    },
    {
      title: 'Band 8+ Vocabulary Roast',
      text: 'Act as a strict IELTS examiner. Point out every repetitive word and grammatical slip, and suggest Band 8+ academic idioms and collocations!',
      icon: '🔥',
    },
  ],
};

const SpeakingCoachPage: React.FC = () => {
  useSEO({
    title: 'AI IELTS Speaking Coach (Examiner Gordon)',
    description:
      "IELTS Speaking Part 1, Part 2 va Part 3 bo'yicha real vaqtda audio muloqot va Cambridge rubrikasi bo'yicha baholash.",
    canonical: '/speaking-coach',
    keywords:
      'IELTS speaking mock, Examiner Gordon, IELTS coach, Cambridge speaking test, band 8.0 speaking',
  });

  const { primaryLanguage } = useStudyData();
  const [searchParams, setSearchParams] = useSearchParams();
  const {
    user,
    addCoachSession,
    addFlashcardsBatch,
    subjects,
    addSubject,
    flashcards,
    updateFlashcard,
    addSession,
    awardXP,
  } = useStudyData();

  const isAdmin = isAdminEmail(user?.email);
  const isSuper = isSuperAdmin(user?.email);
  const isPaidUser = true;

  // Clean up legacy cards with manba annotation
  const hasCleanedLegacyCardsRef = useRef(false);
  useEffect(() => {
    if (
      !hasCleanedLegacyCardsRef.current &&
      flashcards &&
      flashcards.length > 0 &&
      updateFlashcard
    ) {
      hasCleanedLegacyCardsRef.current = true;
      flashcards.forEach((card) => {
        if (card.back && card.back.includes('🎙️ Manba:')) {
          const cleanedBack = card.back.replace(/\n*🎙️\s*Manba:[^\n]*/gi, '').trim();
          updateFlashcard(card.id, { back: cleanedBack }).catch(() => {});
        }
      });
    }
  }, [flashcards, updateFlashcard]);

  const urlLang = searchParams.get('lang');
  const scenarioIdParam = searchParams.get('scenario');

  const [language, setLanguage] = useState<'en' | 'ja'>('en');
  useEffect(() => {
    setLanguage('en');
  }, [urlLang, primaryLanguage]);

  const handleLanguageChange = (_newLang: 'en' | 'ja') => {
    setLanguage('en');
  };

  const [persona, setPersona] = useState<CoachPersona>('ielts');
  const [targetBand, setTargetBand] = useState<'5.0' | '6.0' | '7.0' | '7.5' | '8.0' | '9.0'>(
    '7.5',
  );
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showPersonaSelector, setShowPersonaSelector] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  // Scenario state
  const [activeScenario, setActiveScenario] = useState<ConversationScenario | null>(() => {
    if (!scenarioIdParam) return null;
    const normalizedParam = scenarioIdParam.trim().replace(/\s+/g, '_');
    const immediate = ScenarioService.getImmediateScenarios();
    return immediate.find((s) => s.id === scenarioIdParam || s.id === normalizedParam) || null;
  });

  const [chatHistory, setChatHistory] = useState<CoachChatMessage[]>(() => {
    if (scenarioIdParam) {
      const normalizedParam = scenarioIdParam.trim().replace(/\s+/g, '_');
      const immediate = ScenarioService.getImmediateScenarios();
      const found = immediate.find((s) => s.id === scenarioIdParam || s.id === normalizedParam);
      if (found) {
        const sLang = found.language || (found.title_en ? 'en' : 'ja');
        const greeting =
          (sLang === 'en' ? found.opening_line_en : found.opening_line_ja) ||
          found.opening_line_ja ||
          found.opening_line_en ||
          "Hello! Let's start our conversation practice.";
        const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        return [{ role: 'assistant', content: greeting, timestamp: timeStr }];
      }
    }
    return [];
  });

  const chatContainerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isProcessingRef = useRef(false);
  const chatHistoryRef = useRef<CoachChatMessage[]>([]);
  const languageRef = useRef(language);
  const personaRef = useRef(persona);
  const activeScenarioRef = useRef(activeScenario);
  const isSpeakingRef = useRef(isSpeaking);
  const scenarioIntroSpokenRef = useRef<string | null>(null);

  useEffect(() => {
    chatHistoryRef.current = chatHistory;
  }, [chatHistory]);

  useEffect(() => {
    languageRef.current = language;
    personaRef.current = persona;
  }, [language, persona]);

  useEffect(() => {
    activeScenarioRef.current = activeScenario;
  }, [activeScenario]);

  useEffect(() => {
    isSpeakingRef.current = isSpeaking;
  }, [isSpeaking]);

  const { isFullscreen, toggleFullscreen } = useFullscreen(containerRef);
  const voiceRecorder = useVoiceRecorder();

  // TTS stable callbacks
  const handleSpeakStart = useCallback(() => {
    setIsSpeaking(true);
    isSpeakingRef.current = true;
    if (recognitionRef.current) {
      try {
        recognitionRef.current.abort();
      } catch {}
    }
    transcriptBufferRef.current = '';
    setCurrentTranscript('');
  }, []);

  const handleSpeakEnd = useCallback(() => {
    setIsSpeaking(false);
    isSpeakingRef.current = false;
    isProcessingRef.current = false;
  }, []);

  const {
    speakText,
    stopSpeaking,
    unlockAudio,
    isPreparingAudio,
    enqueueStreamSentence,
    endStreamPlayback,
    speechSpeed,
    setSpeechSpeed,
  } = useTTS({
    language,
    isLiveSessionRef: { current: true } as any, // dynamic via session ref
    isProcessingRef,
    onSpeakStart: handleSpeakStart,
    onSpeakEnd: handleSpeakEnd,
  });

  // Speech Recognition hook
  const {
    recognitionRef,
    isListening,
    currentTranscript,
    setCurrentTranscript,
    transcriptBufferRef,
    error,
    setError,
    audioVolume,
    startListening,
    commitSpeechNow,
  } = useSpeechRecognition({
    language,
    isLiveSessionRef: { current: true } as any,
    isProcessingRef,
    isSpeaking,
    isSpeakingRef,
    isThinking: false,
    isMuted,
    onValidSpeech: (spokenText) => {
      handleSendUserText(spokenText);
    },
    onResumeListening: () => {},
  });

  // Dialogue & Streaming Engine
  const {
    isThinking,
    setIsThinking,
    liveErrors,
    streamAbortControllerRef,
    lastCoachSpokenTextRef,
    handleBargeIn,
    toggleMic,
    handleSendUserText,
    handleTranslateMessage,
  } = useCoachDialogue({
    chatHistory,
    setChatHistory,
    chatHistoryRef,
    languageRef,
    personaRef,
    activeScenarioRef,
    isSpeaking,
    setIsSpeaking,
    isListening,
    recognitionRef,
    isProcessingRef,
    stopSpeaking,
    speakText,
    unlockAudio,
    enqueueStreamSentence,
    endStreamPlayback,
    startListening,
    setCurrentTranscript,
    transcriptBufferRef,
    setError,
    user,
  });

  // Session Manager Hook
  const {
    isLiveSession,
    setIsLiveSession,
    isLiveSessionRef,
    sessionSeconds,
    formatTimer,
    startSession,
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
  } = useCoachSession({
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
  });

  // Flashcards Export Hook
  const { handleAddVocabToFlashcards } = useSpeakingVocabExport({
    language,
    persona,
    activeScenario,
    user,
    subjects,
    addSubject,
    flashcards,
    addFlashcardsBatch,
  });

  // Hotkeys Hook (Space: Mic, Escape: Barge-in, KeyR: Reset)
  useSpeakingHotkeys({
    toggleMic,
    handleBargeIn,
    handleResetChat,
    isSpeaking,
    isListening,
    recognitionRef,
  });

  // Warm-cache prefetch active coach greeting
  useEffect(() => {
    if (!activeScenario) {
      const activeGreeting = getCoachInitialGreeting(language, persona);
      if (activeGreeting) {
        fetchTTSAudioBlob(activeGreeting, language).catch(() => {});
      }
    }
  }, [language, persona, activeScenario]);

  // Scenario loading and greeting playback
  useEffect(() => {
    if (scenarioIdParam) {
      const normalizedParam = scenarioIdParam.trim().replace(/\s+/g, '_');
      if (scenarioIntroSpokenRef.current === normalizedParam) return;
      scenarioIntroSpokenRef.current = normalizedParam;

      const immediateList = ScenarioService.getImmediateScenarios();
      const immediateFound = immediateList.find(
        (s) => s.id === scenarioIdParam || s.id === normalizedParam,
      );

      const applyScenarioGreeting = (scenario: ConversationScenario) => {
        setActiveScenario((prev) => (prev?.id === scenario.id ? prev : scenario));
        activeScenarioRef.current = scenario;
        const sLang = scenario.language || (scenario.title_en ? 'en' : 'ja');
        setLanguage((prev) => (prev !== sLang ? sLang : prev));

        setIsLiveSession(true);
        isLiveSessionRef.current = true;

        const scenarioGreeting =
          (sLang === 'en' ? scenario.opening_line_en : scenario.opening_line_ja) ||
          scenario.opening_line_ja ||
          scenario.opening_line_en ||
          "Hello! Let's start our conversation practice.";
        const timeStr = new Date().toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        });
        const freshHistory: CoachChatMessage[] = [
          { role: 'assistant', content: scenarioGreeting, timestamp: timeStr },
        ];
        setChatHistory((prev) =>
          prev.length > 0 && prev[0].content === scenarioGreeting ? prev : freshHistory,
        );
        chatHistoryRef.current = freshHistory;

        const speechAudio = extractSpeechAudioText(scenarioGreeting);
        lastCoachSpokenTextRef.current = speechAudio;
        stopSpeaking();
        unlockAudio();
        speakText(speechAudio);
      };

      if (immediateFound) {
        applyScenarioGreeting(immediateFound);
      } else {
        ScenarioService.getScenarios()
          .then((scenarios) => {
            const found = scenarios.find(
              (s) => s.id === scenarioIdParam || s.id === normalizedParam,
            );
            if (found) {
              applyScenarioGreeting(found);
            }
          })
          .catch((err) => {
            console.error('Scenario load error:', err);
          });
      }
    } else {
      scenarioIntroSpokenRef.current = null;
      setActiveScenario((prev) => (prev !== null ? null : prev));
    }
  }, [
    scenarioIdParam,
    unlockAudio,
    speakText,
    stopSpeaking,
    setIsLiveSession,
    isLiveSessionRef,
    lastCoachSpokenTextRef,
  ]);

  // Auto-scroll chat to bottom
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatHistory, isThinking]);

  useEffect(() => {
    if (!isAdmin && language === 'ja' && persona === 'interview') {
      setPersona('casual');
    }
  }, [isAdmin, language, persona]);

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const PERSONAS = PERSONAS_BY_LANG[language];
  const PROMPT_SUGGESTIONS = PROMPT_SUGGESTIONS_BY_LANG[language];
  const currentPersona = PERSONAS[persona];

  return (
    <div
      ref={containerRef}
      onTouchStart={() => unlockAudio()}
      className={`pb-safe relative flex h-[100dvh] w-full select-none flex-col overflow-hidden ${
        isFullscreen ? 'fixed inset-0 z-50 m-0 h-screen w-screen bg-background p-0' : ''
      }`}
    >
      {/* Dynamic Ambient Background */}
      <SpeakingAmbientBackground
        gradientBg={currentPersona.gradientBg}
        isLiveSession={isLiveSession}
      />

      {/* TOP BAR */}
      <CoachTopBar
        language={language}
        persona={persona}
        isLiveSession={isLiveSession}
        sessionSeconds={sessionSeconds}
        chatHistoryLength={chatHistory.length}
        showPersonaSelector={showPersonaSelector}
        setShowPersonaSelector={setShowPersonaSelector}
        handleLanguageChange={handleLanguageChange}
        setPersona={setPersona}
        targetBand={targetBand}
        setTargetBand={setTargetBand}
        isPaidUser={isPaidUser}
        isAdmin={isAdmin}
        isSuperAdmin={isSuper}
        isFullscreen={isFullscreen}
        onToggleFullscreen={toggleFullscreen}
        onOpenSettings={() => setIsSettingsOpen(true)}
        formatTimer={formatTimer}
        activeScenario={activeScenario}
        speechSpeed={speechSpeed}
        onSpeedChange={setSpeechSpeed}
      />

      {/* Active Conversation Scenario Banner */}
      {activeScenario && (
        <ScenarioBanner
          activeScenario={activeScenario}
          onExit={() => setSearchParams({ lang: language })}
        />
      )}

      {/* Error Banner */}
      {error && (
        <div className="mx-3 mb-2 flex items-center justify-center gap-2 rounded-xl border border-rose-500/20 bg-rose-500/10 p-2.5 text-center text-xs text-rose-600 backdrop-blur-sm animate-in fade-in dark:text-rose-400 md:mx-5">
          <ShieldAlert size={14} />
          <span className="font-medium">{error}</span>
          <button
            onClick={() => setError(null)}
            className="ml-2 rounded-md p-0.5 hover:bg-rose-500/20"
          >
            <X size={12} />
          </button>
        </div>
      )}

      {/* MAIN CONTENT AREA */}
      <div className="relative mx-3 mb-2 flex min-h-0 flex-1 flex-col overflow-hidden md:mx-5">
        {chatHistory.length === 0 && !isLiveSession ? (
          <div className="flex-1 space-y-6 overflow-y-auto pr-1">
            <CoachWelcomeScreen
              currentPersona={currentPersona}
              isLiveSession={isLiveSession}
              isSpeaking={isSpeaking}
              isThinking={isThinking}
              isListening={isListening}
              promptSuggestions={PROMPT_SUGGESTIONS}
              onStartSession={() => startSession()}
              onPromptClick={(topicTitle) => startSession(topicTitle)}
            />
            <div className="mx-auto max-w-2xl pb-8">
              <CoachProgressDashboard />
            </div>
          </div>
        ) : (
          <div className="flex flex-1 flex-col gap-2.5 overflow-hidden sm:gap-4">
            <RealtimeVoiceOverlay
              isRecording={isListening}
              isAiSpeaking={isSpeaking}
              audioVolume={audioVolume}
              transcript={currentTranscript}
              errors={liveErrors}
              activeCefrLevel="B2"
              activeJlptLevel={language === 'ja' ? 'N3' : undefined}
              onBargeIn={handleBargeIn}
              onToggleRecording={toggleMic}
              onCommitNow={commitSpeechNow}
              onSpeakText={speakText}
            />
            <CoachChatArea
              chatHistory={chatHistory}
              isLiveSession={isLiveSession}
              currentPersona={currentPersona}
              currentTranscript={currentTranscript}
              isListening={isListening}
              isThinking={isThinking}
              copiedIndex={copiedIndex}
              chatContainerRef={chatContainerRef}
              handleTranslateMessage={handleTranslateMessage}
              copyToClipboard={copyToClipboard}
              speakText={speakText}
              setChatHistory={setChatHistory}
              onAddVocabulary={handleAddVocabToFlashcards}
              activeScenario={activeScenario}
              onSelectHint={handleSendUserText}
            />
          </div>
        )}
      </div>

      {/* BOTTOM CONTROL DOCK */}
      <CoachControlBar
        isLiveSession={isLiveSession}
        isSpeaking={isSpeaking}
        isThinking={isThinking}
        isListening={isListening}
        isMuted={isMuted}
        setIsMuted={setIsMuted}
        sessionSeconds={sessionSeconds}
        chatHistoryLength={chatHistory.length}
        toggleSession={toggleSession}
        onClearHistory={handleResetChat}
        formatTimer={formatTimer}
        onForceStartListening={toggleMic}
        onBargeIn={handleBargeIn}
        isPreparingAudio={isPreparingAudio}
      />

      {/* SETTINGS MODAL */}
      <CoachSettingsModal isOpen={isSettingsOpen} onClose={() => setIsSettingsOpen(false)} />

      {/* SESSION REPORT MODAL */}
      <SessionReportModal
        isOpen={isReportOpen}
        onClose={handleCloseReport}
        report={reportData}
        isLoading={isReportLoading}
        personaTitle={PERSONAS[persona].name}
      />

      {/* SCENARIO EVALUATION REPORT MODAL */}
      <ScenarioReportModal
        isOpen={isScenarioReportOpen}
        onClose={handleCloseScenarioReport}
        result={scenarioEvalResult}
        isLoading={isScenarioEvalLoading}
        recordedUrl={voiceRecorder.recordedUrl}
        durationSeconds={voiceRecorder.durationSeconds}
        isPlayingRecorded={voiceRecorder.isPlaying}
        audioProgressRecorded={voiceRecorder.audioProgress}
        onPlayRecorded={voiceRecorder.playRecorded}
        onPauseRecorded={voiceRecorder.pauseRecorded}
        onRetry={() => startSession()}
      />
    </div>
  );
};

export default SpeakingCoachPage;
