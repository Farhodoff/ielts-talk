import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
    ArrowLeft, Clock, BookOpen, Volume2, CheckCircle2, ChevronRight, Award, 
    Play, Pause, RotateCcw, Sparkles, AlertCircle, RefreshCw, BarChart2,
    FileText, Eye, EyeOff, Headphones, BookmarkCheck
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { generateAIResponse, extractJsonFromAiResponse } from '../utils/ai/aiCore';
import { IELTS_LISTENING_EXAMS } from '../data/ielts/listening_data';
import { IELTS_READING_EXAMS, ReadingPassage } from '../data/ielts/reading_data';
import { HistoryService } from '../services/HistoryService';
import { useStudyData } from '../context/StudyPlannerContext';
import { MasteryEngine } from '../services/MasteryEngine';

interface Question {
    id: number;
    text: string;
    options?: string[];
    correctAnswer: string;
    type: 'choice' | 'fill';
    explanation: string;
}

interface PassageData {
    id?: string;
    title: string;
    academicLevel?: string;
    text: string;
    script?: string;
    questions: Question[];
    audioUrl?: string;
}

export const IeltsReadingListeningMockPage: React.FC = () => {
    const navigate = useNavigate();
    const { awardXP, user } = useStudyData();
    const [testType, setTestType] = useState<'reading' | 'listening'>('reading');
    const [step, setStep] = useState<'intro' | 'test' | 'report'>('intro');

    // AI Generation States
    const [aiTopic, setAiTopic] = useState('');
    const [isGenerating, setIsGenerating] = useState(false);
    const [aiError, setAiError] = useState<string | null>(null);

    // Timer & Session
    const [timeLeft, setTimeLeft] = useState(1200); // 20 mins for reading, 15 for listening
    const [isTimerRunning, setIsTimerRunning] = useState(false);

    // Active Passage/Questions Data
    const [currentPassage, setCurrentPassage] = useState<PassageData>({
        id: IELTS_READING_EXAMS[0].id,
        title: IELTS_READING_EXAMS[0].title,
        academicLevel: IELTS_READING_EXAMS[0].academicLevel,
        text: IELTS_READING_EXAMS[0].text,
        questions: IELTS_READING_EXAMS[0].questions
    });

    // User Answers State
    const [userAnswers, setUserAnswers] = useState<{ [qId: number]: string }>({});
    const [score, setScore] = useState(0);

    // Listening section features
    const [showTranscriptDuringTest, setShowTranscriptDuringTest] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [audioDuration, setAudioDuration] = useState(0);
    const [audioProgress, setAudioProgress] = useState(0);
    const [playbackSpeed, setPlaybackSpeed] = useState(1.0);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    // TTS Fallback SpeechSynthesis state
    const [isUsingTts, setIsUsingTts] = useState(false);
    const ttsUtteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

    // Active selected catalog exam
    const [selectedListeningExamIndex, setSelectedListeningExamIndex] = useState(0);

    // Timer Effect
    useEffect(() => {
        let timer: any;
        if (isTimerRunning && timeLeft > 0) {
            timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
        } else if (timeLeft === 0 && isTimerRunning) {
            handleSubmitTest();
        }
        return () => clearInterval(timer);
    }, [isTimerRunning, timeLeft]);

    // Cleanup audio & TTS on unmount or view change
    useEffect(() => {
        return () => {
            stopAudioPlayback();
        };
    }, []);

    const formatTime = (secs: number) => {
        const m = Math.floor(secs / 60);
        const s = secs % 60;
        return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    };

    // --- Audio Player Logic ---
    const handlePlayPause = () => {
        if (testType !== 'listening') return;

        // If audioUrl is missing or is using TTS fallback
        if (!currentPassage.audioUrl || isUsingTts) {
            triggerTtsPlayback();
            return;
        }

        if (!audioRef.current) {
            const audio = new Audio(currentPassage.audioUrl);
            audioRef.current = audio;
            audio.playbackRate = playbackSpeed;

            audio.addEventListener('loadedmetadata', () => {
                setAudioDuration(audio.duration);
            });
            audio.addEventListener('timeupdate', () => {
                setAudioProgress(audio.currentTime);
            });
            audio.addEventListener('ended', () => {
                setIsPlaying(false);
                setAudioProgress(0);
            });
            audio.addEventListener('error', () => {
                console.warn("Audio loading failed. Switching to TTS fallback.");
                setIsUsingTts(true);
                triggerTtsPlayback();
            });
        }

        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);
        } else {
            audioRef.current.play().catch(() => {
                setIsUsingTts(true);
                triggerTtsPlayback();
            });
            setIsPlaying(true);
        }
    };

    const triggerTtsPlayback = () => {
        if (isPlaying) {
            window.speechSynthesis.cancel();
            setIsPlaying(false);
        } else {
            setIsPlaying(true);
            const textToSpeak = currentPassage.script || currentPassage.text;
            const utterance = new SpeechSynthesisUtterance(textToSpeak);
            utterance.lang = 'en-GB';
            utterance.rate = playbackSpeed;
            utterance.onend = () => {
                setIsPlaying(false);
            };
            utterance.onerror = () => {
                setIsPlaying(false);
            };
            ttsUtteranceRef.current = utterance;
            window.speechSynthesis.speak(utterance);
        }
    };

    const stopAudioPlayback = () => {
        setIsPlaying(false);
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
            audioRef.current = null;
        }
        window.speechSynthesis.cancel();
    };

    const handleSpeedChange = (speed: number) => {
        setPlaybackSpeed(speed);
        if (audioRef.current) {
            audioRef.current.playbackRate = speed;
        }
        if (isPlaying && (isUsingTts || !currentPassage.audioUrl)) {
            window.speechSynthesis.cancel();
            setIsPlaying(false);
            setTimeout(() => {
                setIsPlaying(true);
                const textToSpeak = currentPassage.script || currentPassage.text;
                const utterance = new SpeechSynthesisUtterance(textToSpeak);
                utterance.lang = 'en-GB';
                utterance.rate = speed;
                utterance.onend = () => setIsPlaying(false);
                utterance.onerror = () => setIsPlaying(false);
                window.speechSynthesis.speak(utterance);
            }, 100);
        }
    };

    const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
        const time = parseFloat(e.target.value);
        setAudioProgress(time);
        if (audioRef.current) {
            audioRef.current.currentTime = time;
        }
    };

    const skipTime = (amount: number) => {
        if (audioRef.current) {
            let next = audioRef.current.currentTime + amount;
            if (next < 0) next = 0;
            if (next > audioRef.current.duration) next = audioRef.current.duration;
            audioRef.current.currentTime = next;
            setAudioProgress(next);
        }
    };

    // --- Dynamic AI Generator ---
    const generatePassageWithAI = async (presetTopic?: string) => {
        const topic = presetTopic || aiTopic.trim() || "Artificial Intelligence & Global Warming";
        setIsGenerating(true);
        setAiError(null);

        const prompt = `
          Act as an expert IELTS Academic Test Maker.
          Generate one complete IELTS practice task on the topic: "${topic}".
          The task type is: "${testType}" (either "reading" or "listening").
          
          Guidelines for "reading":
          Provide an Academic Reading passage of approximately 300 words, a title, and exactly 4 questions (combination of multiple choice and sentence completion).
          
          Guidelines for "listening":
          Provide an authentic IELTS listening conversation or academic lecture script of approximately 220 words, a title, and exactly 4 questions.
          
          Each question can be 'choice' (multiple choice, options index 0-3) or 'fill' (note/sentence completion with short text).
          
          Return ONLY a valid JSON object matching this structure (DO NOT wrap in markdown, backticks, or write other explanations):
          {
            "title": "Passage/Audio Title",
            "text": "The full reading passage text or listening script...",
            "questions": [
              {
                "id": 1,
                "text": "Question text...",
                "type": "choice",
                "options": ["Option A", "Option B", "Option C", "Option D"],
                "correctAnswer": "0",
                "explanation": "Explanation for why this is correct..."
              },
              {
                "id": 2,
                "text": "Sentence completion question: The primary element is ________.",
                "type": "fill",
                "correctAnswer": "hydrogen",
                "explanation": "Explanation citation..."
              }
            ]
          }
        `;

        try {
            const rawResponse = await generateAIResponse([
                { role: 'system', content: 'You are a JSON only provider.' },
                { role: 'user', content: prompt }
            ], { isJson: true });
            const data = extractJsonFromAiResponse<PassageData>(rawResponse);
            
            if (data.title && data.text && Array.isArray(data.questions)) {
                setCurrentPassage({
                    title: data.title,
                    text: data.text,
                    script: testType === 'listening' ? data.text : undefined,
                    questions: data.questions
                });
                setUserAnswers({});
                setShowTranscriptDuringTest(false);
                setStep('test');
                setIsTimerRunning(true);
                setTimeLeft(testType === 'reading' ? 1200 : 900);
            } else {
                throw new Error("Invalid response format received from AI.");
            }
        } catch (err: any) {
            console.error(err);
            setAiError("Mashq yaratishda xatolik yuz berdi. Iltimos qaytadan urinib ko'ring.");
        } finally {
            setIsGenerating(false);
        }
    };

    // --- Load Specific Reading Passage ---
    const handleSelectReadingPassage = (passage: ReadingPassage) => {
        stopAudioPlayback();
        setUserAnswers({});
        setShowTranscriptDuringTest(false);
        setAiError(null);
        setCurrentPassage({
            id: passage.id,
            title: passage.title,
            academicLevel: passage.academicLevel,
            text: passage.text,
            questions: passage.questions
        });
        setStep('test');
        setIsTimerRunning(true);
        setTimeLeft(1200); // 20 mins for reading
    };

    // --- Load Specific Listening Section ---
    const handleSelectListeningSection = (examIndex: number, sectionIndex: number) => {
        stopAudioPlayback();
        setUserAnswers({});
        setShowTranscriptDuringTest(false);
        setAiError(null);
        const exam = IELTS_LISTENING_EXAMS[examIndex];
        const section = exam.sections[sectionIndex];
        setCurrentPassage({
            id: `${exam.id}_sec_${section.sectionNumber}`,
            title: `${exam.title} — ${section.title}`,
            academicLevel: `Section ${section.sectionNumber}`,
            text: section.script,
            script: section.script,
            audioUrl: section.audioUrl,
            questions: section.questions
        });
        setStep('test');
        setIsTimerRunning(true);
        setTimeLeft(900); // 15 mins for listening section
    };

    const handleOptionSelect = (questionId: number, answer: string) => {
        setUserAnswers(prev => ({ ...prev, [questionId]: answer }));
    };

    const handleSubmitTest = async () => {
        stopAudioPlayback();
        setIsTimerRunning(false);

        let correctCount = 0;
        currentPassage.questions.forEach(q => {
            const userAns = (userAnswers[q.id] || '').trim().toLowerCase();
            const correctAns = q.correctAnswer.trim().toLowerCase();
            
            if (userAns === correctAns) {
                correctCount++;
            }
        });

        setScore(correctCount);
        setStep('report');

        // Award XP
        try {
            if (awardXP && correctCount > 0) {
                await awardXP(correctCount * 30);
            }
        } catch (e) {}

        // Calculate band score
        const band = calculateIeltsBandScore(correctCount, currentPassage.questions.length);

        // Save Attempt to History and record Mastery Evidence
        try {
            await HistoryService.saveMockExam({
                examType: testType === 'reading' ? 'ielts_reading' : 'ielts_listening',
                score: correctCount,
                totalQuestions: currentPassage.questions.length,
                bandScore: band
            });

            const activeUserId = user?.id || 'guest';
            MasteryEngine.recordEvidence(activeUserId, 'en', {
                id: `ielts_${testType}_${Date.now()}`,
                skill: testType === 'reading' ? 'reading' : 'listening',
                score: Math.min(100, Math.round((band / 9.0) * 100)),
                timestamp: new Date().toISOString(),
                details: `IELTS ${testType.toUpperCase()} Band: ${band} (${correctCount}/${currentPassage.questions.length})`,
                type: 'performance'
            });
        } catch (err) {
            console.error("Failed to save mock test score history:", err);
        }
    };

    // Official Proportional IELTS Band Score calculation
    const calculateIeltsBandScore = (correct: number, total: number) => {
        if (total === 0) return 0;
        const ratio = correct / total;
        if (ratio >= 0.90) return 9.0;
        if (ratio >= 0.82) return 8.5;
        if (ratio >= 0.75) return 8.0;
        if (ratio >= 0.68) return 7.5;
        if (ratio >= 0.60) return 7.0;
        if (ratio >= 0.52) return 6.5;
        if (ratio >= 0.45) return 6.0;
        if (ratio >= 0.38) return 5.5;
        if (ratio >= 0.30) return 5.0;
        if (ratio >= 0.22) return 4.5;
        return 4.0;
    };

    const getBandDescriptor = (band: number) => {
        if (band >= 8.5) return { title: "Expert User (Mukammal daraja)", badge: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20", feedback: "Sizning tushunish qobiliyatingiz oliy darajada! Murakkab akademik matnlar va tezkor suhbatlarni bemalol o'zlashtira olasiz." };
        if (band >= 7.5) return { title: "Very Good User (A'lo daraja)", badge: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20", feedback: "Juda kuchli natija! Bir-ikkita kichik chalg'ituvchilarga e'tibor qaratilsa, 8.5+ gacha bemalol chiqish mumkin." };
        if (band >= 6.5) return { title: "Good / Competent User (Yetarli daraja)", badge: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20", feedback: "Asosiy mazmunni to'g'ri ilg'adingiz. Sinonimlar va so'zlarning yozilish imlosiga (spelling) ko'proq ahamiyat bering." };
        if (band >= 5.5) return { title: "Modest User (O'rtacha daraja)", badge: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20", feedback: "Savollarni diqqat bilan o'qish va skimming/scanning strategiyalarini chuqurlashtirish tavsiya etiladi." };
        return { title: "Limited User (Boshlang'ich daraja)", badge: "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20", feedback: "Baza so'z boyligini kengaytirish va 1-bosqich Foundation mashqlarini takrorlash foydali bo'ladi." };
    };

    return (
        <div className="p-3.5 md:p-8 max-w-5xl mx-auto pb-16 space-y-6">
            {/* Top Bar Navigation */}
            <div className="flex items-center justify-between border-b border-border pb-4">
                <button
                    onClick={() => {
                        stopAudioPlayback();
                        navigate('/ielts');
                    }}
                    className="p-2.5 rounded-xl border border-border text-muted-foreground hover:text-foreground hover:bg-muted transition-all"
                >
                    <ArrowLeft size={20} />
                </button>
                <div className="flex items-center gap-2">
                    <span className="px-3 py-1 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-black text-xs rounded-full border border-indigo-500/20 flex items-center gap-1.5">
                        <BookOpen size={14} /> Cambridge & Academic Mock Simulator
                    </span>
                </div>
            </div>

            {/* STEP 1: INTRO & EXAM CATALOG */}
            {step === 'intro' && (
                <div className="space-y-8">
                    {/* Header Banner */}
                    <div className="bg-card border border-border rounded-3xl p-6 md:p-8 text-center space-y-4 shadow-xl max-w-3xl mx-auto">
                        <div className="w-14 h-14 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 text-indigo-600 rounded-2xl flex items-center justify-center mx-auto shadow-md">
                            {testType === 'reading' ? <BookOpen size={28} /> : <Headphones size={28} />}
                        </div>
                        <div>
                            <h2 className="text-2xl md:text-3xl font-black text-foreground">
                                IELTS Academic {testType === 'reading' ? 'Reading' : 'Listening'} Sinovi
                            </h2>
                            <p className="text-xs text-muted-foreground mt-1.5 max-w-xl mx-auto leading-relaxed">
                                Rasmiy Cambridge Academic formatidagi matnlar, audio yozuvlar va DeepSeek AI orqali yaratiladigan mavzuli imtihonlar to'plami.
                            </p>
                        </div>

                        {/* Test Type Tabs */}
                        <div className="grid grid-cols-2 gap-3 max-w-md mx-auto pt-2">
                            <button
                                onClick={() => setTestType('reading')}
                                className={`p-3 rounded-2xl border transition-all text-center ${
                                    testType === 'reading' 
                                        ? 'bg-indigo-600 text-white border-indigo-600 font-black shadow-lg shadow-indigo-500/20' 
                                        : 'bg-muted/40 border-border text-muted-foreground hover:text-foreground hover:bg-muted'
                                }`}
                            >
                                <span className="block text-xs uppercase tracking-wider">Bo'lim 1</span>
                                <span className="text-sm font-extrabold block mt-0.5">📖 Academic Reading</span>
                            </button>
                            <button
                                onClick={() => setTestType('listening')}
                                className={`p-3 rounded-2xl border transition-all text-center ${
                                    testType === 'listening' 
                                        ? 'bg-purple-600 text-white border-purple-600 font-black shadow-lg shadow-purple-500/20' 
                                        : 'bg-muted/40 border-border text-muted-foreground hover:text-foreground hover:bg-muted'
                                }`}
                            >
                                <span className="block text-xs uppercase tracking-wider">Bo'lim 2</span>
                                <span className="text-sm font-extrabold block mt-0.5">🎧 Audio Listening</span>
                            </button>
                        </div>
                    </div>

                    {/* READING CATALOG */}
                    {testType === 'reading' && (
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <h3 className="text-base font-black text-foreground flex items-center gap-2">
                                    <BookmarkCheck size={18} className="text-indigo-500" />
                                    Cambridge Academic Reading Matnlari ({IELTS_READING_EXAMS.length} ta Passaj)
                                </h3>
                                <span className="text-xs text-muted-foreground">Har biri 20 daqiqalik sinov</span>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {IELTS_READING_EXAMS.map((passage, index) => (
                                    <div
                                        key={passage.id}
                                        className="bg-card border border-border hover:border-indigo-500/50 rounded-2xl p-5 space-y-3 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
                                    >
                                        <div className="space-y-2">
                                            <div className="flex items-center justify-between">
                                                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                                                    Passage {index + 1} • {passage.academicLevel}
                                                </span>
                                                <span className="text-[11px] font-mono text-muted-foreground flex items-center gap-1">
                                                    <Clock size={12} /> 20 min
                                                </span>
                                            </div>
                                            <h4 className="text-sm font-black text-foreground group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                                {passage.title}
                                            </h4>
                                            <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                                                {passage.text}
                                            </p>
                                        </div>

                                        <div className="pt-3 border-t border-border/60 flex items-center justify-between">
                                            <span className="text-[11px] text-muted-foreground font-semibold">
                                                📝 {passage.questions.length} ta savol (MCQ & Blank)
                                            </span>
                                            <Button
                                                onClick={() => handleSelectReadingPassage(passage)}
                                                className="px-3.5 py-1.5 text-xs font-black bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl shadow-sm flex items-center gap-1"
                                            >
                                                Boshlash <ChevronRight size={14} />
                                            </Button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* LISTENING CATALOG */}
                    {testType === 'listening' && (
                        <div className="space-y-6">
                            <div className="flex items-center justify-between">
                                <h3 className="text-base font-black text-foreground flex items-center gap-2">
                                    <Headphones size={18} className="text-purple-500" />
                                    Cambridge Listening Mock Testlar
                                </h3>
                                <span className="text-xs text-muted-foreground">Bo'limlar bo'yicha mustaqil topshirish</span>
                            </div>

                            {/* Exam Switcher Buttons */}
                            <div className="flex gap-2">
                                {IELTS_LISTENING_EXAMS.map((exam, exIdx) => (
                                    <button
                                        key={exam.id}
                                        onClick={() => setSelectedListeningExamIndex(exIdx)}
                                        className={`px-4 py-2 text-xs font-black rounded-xl border transition-all ${
                                            selectedListeningExamIndex === exIdx
                                                ? 'bg-purple-600 text-white border-purple-600 shadow-md'
                                                : 'bg-card border-border text-muted-foreground hover:text-foreground'
                                        }`}
                                    >
                                        {exam.title.replace("IELTS Listening Academic Practice ", "")}
                                    </button>
                                ))}
                            </div>

                            {/* Sections Grid of Selected Exam */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {IELTS_LISTENING_EXAMS[selectedListeningExamIndex].sections.map((sec, sIdx) => (
                                    <div
                                        key={sec.sectionNumber}
                                        className="bg-card border border-border hover:border-purple-500/50 rounded-2xl p-5 space-y-3 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
                                    >
                                        <div className="space-y-2">
                                            <div className="flex items-center justify-between">
                                                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20">
                                                    Section {sec.sectionNumber}
                                                </span>
                                                <span className="text-[11px] font-mono text-muted-foreground flex items-center gap-1">
                                                    <Volume2 size={12} /> Audio / TTS
                                                </span>
                                            </div>
                                            <h4 className="text-sm font-black text-foreground group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                                                {sec.title}
                                            </h4>
                                            <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                                                {sec.instruction}
                                            </p>
                                        </div>

                                        <div className="pt-3 border-t border-border/60 flex items-center justify-between">
                                            <span className="text-[11px] text-muted-foreground font-semibold">
                                                🎧 {sec.questions.length} ta savol
                                            </span>
                                            <Button
                                                onClick={() => handleSelectListeningSection(selectedListeningExamIndex, sIdx)}
                                                className="px-3.5 py-1.5 text-xs font-black bg-purple-600 hover:bg-purple-700 text-white rounded-xl shadow-sm flex items-center gap-1"
                                            >
                                                Eshitish & Boshlash <ChevronRight size={14} />
                                            </Button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* AI DYNAMIC GENERATOR CARD */}
                    <div className="bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-transparent border border-indigo-500/20 rounded-3xl p-6 md:p-8 space-y-4 shadow-sm">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                            <div className="space-y-1">
                                <h4 className="text-base font-black text-foreground flex items-center gap-2">
                                    <Sparkles size={18} className="text-indigo-500" />
                                    Ixtiyoriy Mavzuda AI Generator (DeepSeek v4)
                                </h4>
                                <p className="text-xs text-muted-foreground">
                                    Istalgan ilmiy yoki kundalik mavzuni kiriting — AI avtomatik IELTS matni, audiosi va 4 ta sinov savolini yaratadi.
                                </p>
                            </div>
                        </div>

                        {/* Preset Quick Chips */}
                        <div className="flex flex-wrap gap-2">
                            {["Global Warming & Oceans", "Smart Cities & Urban AI", "Genetics & Longevity", "Space Colonization"].map(chip => (
                                <button
                                    key={chip}
                                    onClick={() => generatePassageWithAI(chip)}
                                    disabled={isGenerating}
                                    className="px-3 py-1 bg-background/80 hover:bg-background border border-border hover:border-indigo-500/40 text-[11px] font-bold rounded-lg text-muted-foreground hover:text-foreground transition-all"
                                >
                                    ⚡ {chip}
                                </button>
                            ))}
                        </div>

                        <div className="flex gap-2 pt-1">
                            <input
                                type="text"
                                value={aiTopic}
                                onChange={(e) => setAiTopic(e.target.value)}
                                placeholder="Masalan: Artificial Intelligence, Deep-Sea Marine Biology, renewable energy..."
                                disabled={isGenerating}
                                className="flex-1 px-4 py-2.5 text-xs border border-border rounded-xl bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                            <Button
                                onClick={() => generatePassageWithAI()}
                                disabled={isGenerating}
                                className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-xs rounded-xl flex items-center gap-1.5 shadow"
                            >
                                {isGenerating ? <RefreshCw className="animate-spin" size={14} /> : <Sparkles size={14} />}
                                <span>{isGenerating ? "Yaratilmoqda..." : "Yaratish"}</span>
                            </Button>
                        </div>
                        {aiError && (
                            <p className="text-xs text-rose-500 flex items-center gap-1.5">
                                <AlertCircle size={14} /> {aiError}
                            </p>
                        )}
                    </div>
                </div>
            )}

            {/* STEP 2: ACTIVE TEST SCREEN */}
            {step === 'test' && (
                <div className="space-y-6">
                    {/* Sticky Header with Timer & Back */}
                    <div className="bg-card border border-border p-4 rounded-2xl flex items-center justify-between shadow-sm sticky top-4 z-20 backdrop-blur-md">
                        <div className="flex items-center gap-3">
                            <button
                                onClick={() => {
                                    stopAudioPlayback();
                                    setStep('intro');
                                }}
                                className="p-2 rounded-xl hover:bg-muted text-muted-foreground hover:text-foreground transition-all"
                                title="Sinovni bekor qilish"
                            >
                                <ArrowLeft size={18} />
                            </button>
                            <div>
                                <span className="text-[10px] font-black uppercase text-indigo-500 tracking-wider block">
                                    IELTS {testType.toUpperCase()} MOCK
                                </span>
                                <h3 className="text-xs font-bold text-foreground line-clamp-1">
                                    {currentPassage.title}
                                </h3>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="flex items-center gap-2 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 px-3.5 py-1.5 rounded-full font-mono font-black text-xs border border-indigo-500/20">
                                <Clock size={15} />
                                <span>{formatTime(timeLeft)}</span>
                            </div>
                        </div>
                    </div>

                    {/* Passage & Questions Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        
                        {/* LEFT: Passage or Audio Player */}
                        <div className="bg-card border border-border p-6 rounded-3xl space-y-4 shadow-sm h-fit">
                            <div className="border-b border-border pb-3 flex items-center justify-between">
                                <h3 className="text-base font-extrabold text-foreground">{currentPassage.title}</h3>
                                {currentPassage.academicLevel && (
                                    <span className="text-[10px] font-black px-2 py-0.5 rounded-md bg-muted text-muted-foreground border border-border">
                                        {currentPassage.academicLevel}
                                    </span>
                                )}
                            </div>

                            {testType === 'listening' ? (
                                <div className="space-y-5 py-2">
                                    <div className="p-5 bg-purple-50 dark:bg-purple-950/20 border border-purple-200/60 dark:border-purple-900/40 rounded-2xl text-center space-y-3">
                                        <div className="flex justify-center">
                                            <div className="p-4 bg-purple-500/10 text-purple-600 dark:text-purple-400 rounded-full animate-pulse">
                                                <Volume2 size={32} />
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="text-xs font-bold text-foreground">Listening Audio Oqimi</h4>
                                            <p className="text-[10px] text-muted-foreground mt-0.5">
                                                {currentPassage.audioUrl ? "Rasmiy Audio Fayl" : "Akademik British Speech Synthesis"}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Audio Controller Panel */}
                                    <div className="space-y-3 bg-muted/40 p-4 border border-border rounded-2xl">
                                        {/* Seek slider */}
                                        <div className="flex items-center gap-2 text-xs font-mono">
                                            <span>{formatTime(Math.round(audioProgress))}</span>
                                            <input
                                                type="range"
                                                min={0}
                                                max={audioDuration || 300}
                                                value={audioProgress}
                                                onChange={handleSeek}
                                                className="flex-1 accent-purple-600"
                                            />
                                            <span>{formatTime(Math.round(audioDuration || 300))}</span>
                                        </div>

                                        {/* Play controls */}
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <button
                                                    onClick={() => skipTime(-10)}
                                                    className="p-2 hover:bg-muted rounded-xl transition-all text-muted-foreground hover:text-foreground"
                                                    title="10 soniya orqaga"
                                                >
                                                    <RotateCcw size={16} />
                                                </button>
                                                <Button
                                                    onClick={handlePlayPause}
                                                    className="w-12 h-12 bg-purple-600 hover:bg-purple-700 text-white rounded-full flex items-center justify-center shadow-md"
                                                >
                                                    {isPlaying ? <Pause size={18} /> : <Play size={18} className="ml-0.5" />}
                                                </Button>
                                                <button
                                                    onClick={() => skipTime(10)}
                                                    className="p-2 hover:bg-muted rounded-xl transition-all text-muted-foreground hover:text-foreground"
                                                    title="10 soniya oldinga"
                                                >
                                                    <Play size={16} className="rotate-180" />
                                                </button>
                                            </div>

                                            {/* Speed controls */}
                                            <div className="flex gap-1 text-[10px] font-bold">
                                                {[0.8, 1.0, 1.2, 1.5].map(speed => (
                                                    <button
                                                        key={speed}
                                                        onClick={() => handleSpeedChange(speed)}
                                                        className={`px-2 py-1 rounded-md border ${
                                                            playbackSpeed === speed 
                                                                ? 'bg-purple-600 text-white border-purple-600' 
                                                                : 'bg-background border-border text-muted-foreground'
                                                        }`}
                                                    >
                                                        {speed}x
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Transcript Toggle (With Warning) */}
                                    <div className="space-y-2 pt-1">
                                        <button
                                            onClick={() => setShowTranscriptDuringTest(prev => !prev)}
                                            className="w-full py-2 px-3 text-[11px] font-bold text-muted-foreground hover:text-foreground bg-muted/30 hover:bg-muted border border-border/80 rounded-xl transition-all flex items-center justify-center gap-1.5"
                                        >
                                            {showTranscriptDuringTest ? <EyeOff size={14} /> : <Eye size={14} />}
                                            <span>{showTranscriptDuringTest ? "Audio skriptini yashirish" : "Audio skriptini ko'rish (Yordam)"}</span>
                                        </button>

                                        {showTranscriptDuringTest && currentPassage.script && (
                                            <div className="p-4 bg-muted/40 border border-border rounded-xl text-xs text-muted-foreground font-mono leading-relaxed whitespace-pre-line max-h-60 overflow-y-auto">
                                                {currentPassage.script}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ) : (
                                <div className="text-xs text-foreground/90 leading-relaxed whitespace-pre-line font-serif space-y-3 max-h-[600px] overflow-y-auto pr-2">
                                    {currentPassage.text}
                                </div>
                            )}
                        </div>

                        {/* RIGHT: Questions Form */}
                        <div className="space-y-4">
                            <div className="bg-muted/30 border border-border/60 p-3 rounded-2xl text-xs text-muted-foreground flex items-center justify-between">
                                <span>Savollar: {Object.keys(userAnswers).length} / {currentPassage.questions.length} ta bajarildi</span>
                                <span className="font-bold text-indigo-500">IELTS Formati</span>
                            </div>

                            {currentPassage.questions.map(q => (
                                <div key={q.id} className="bg-card border border-border p-5 rounded-2xl space-y-3 shadow-sm">
                                    <h4 className="text-xs font-black text-foreground flex items-start gap-1.5">
                                        <span className="text-indigo-500 shrink-0">Q{q.id}.</span>
                                        <span>{q.text}</span>
                                    </h4>

                                    {/* Question Type: Choice */}
                                    {q.type === 'choice' && q.options && (
                                        <div className="space-y-2">
                                            {q.options.map((opt, idx) => {
                                                const isSelected = userAnswers[q.id] === idx.toString();
                                                return (
                                                    <button
                                                        key={idx}
                                                        onClick={() => handleOptionSelect(q.id, idx.toString())}
                                                        className={`w-full p-3 rounded-xl border text-left text-xs font-bold transition-all flex items-center justify-between ${
                                                            isSelected 
                                                                ? 'bg-indigo-500/20 border-indigo-500 text-indigo-600 dark:text-indigo-400 shadow-xs' 
                                                                : 'bg-muted/30 border-border text-muted-foreground hover:bg-muted'
                                                        }`}
                                                    >
                                                        <span>{opt}</span>
                                                        {isSelected && <CheckCircle2 size={16} className="text-indigo-500 shrink-0" />}
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    )}

                                    {/* Question Type: Fill in the blank */}
                                    {q.type === 'fill' && (
                                        <input
                                            type="text"
                                            value={userAnswers[q.id] || ''}
                                            onChange={(e) => handleOptionSelect(q.id, e.target.value)}
                                            placeholder="Javobingizni aniq yozing (masalan: Jackson, 453911, hydrogen)..."
                                            className="w-full px-4 py-2.5 text-xs border border-border rounded-xl bg-muted/30 text-foreground focus:outline-none focus:ring-2 focus:ring-indigo-500 font-medium"
                                        />
                                    )}
                                </div>
                            ))}

                            <Button
                                onClick={handleSubmitTest}
                                className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-black text-sm rounded-2xl shadow-xl hover:shadow-indigo-500/25 transition-all"
                            >
                                Testni Yakunlash & Natijani Ko'rish 🎯
                            </Button>
                        </div>
                    </div>
                </div>
            )}

            {/* STEP 3: DETAILED REPORT & EXPLANATION */}
            {step === 'report' && (() => {
                const band = calculateIeltsBandScore(score, currentPassage.questions.length);
                const descriptor = getBandDescriptor(band);
                return (
                    <div className="bg-card border border-border rounded-3xl p-6 md:p-8 space-y-6 shadow-xl max-w-3xl mx-auto text-center">
                        <div className="w-16 h-16 bg-gradient-to-tr from-amber-500/20 to-indigo-500/20 text-indigo-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
                            <Award size={32} />
                        </div>

                        <div className="space-y-2">
                            <span className="text-xs font-black uppercase text-indigo-500 tracking-wider block">
                                IELTS Academic {testType.toUpperCase()} Natijasi
                            </span>
                            <h2 className="text-4xl md:text-5xl font-black text-foreground">
                                Band {band.toFixed(1)}
                            </h2>
                            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border mt-1">
                                <span className={`px-2.5 py-0.5 rounded-full text-xs font-black border ${descriptor.badge}`}>
                                    {descriptor.title}
                                </span>
                            </div>
                            <p className="text-xs text-muted-foreground mt-2 max-w-md mx-auto">
                                Siz {currentPassage.questions.length} ta savoldan <span className="font-extrabold text-foreground">{score} tasiga</span> to'g'ri javob berdingiz.
                            </p>
                            <div className="p-3.5 bg-muted/40 border border-border rounded-2xl text-xs text-muted-foreground max-w-lg mx-auto">
                                💡 <b>Tavsiya:</b> {descriptor.feedback}
                            </div>
                        </div>

                        {/* Explanations List */}
                        <div className="text-left space-y-3 border-t border-border pt-6">
                            <h4 className="text-xs font-black text-foreground uppercase tracking-wider flex items-center gap-2">
                                <BarChart2 size={16} className="text-indigo-500" /> Savollar va Xatolar Tahlili:
                            </h4>
                            {currentPassage.questions.map(q => {
                                const isCorrect = (userAnswers[q.id] || '').trim().toLowerCase() === q.correctAnswer.trim().toLowerCase();
                                return (
                                    <div key={q.id} className={`p-4 rounded-2xl border text-xs space-y-2 ${isCorrect ? 'bg-emerald-500/5 border-emerald-500/20' : 'bg-rose-500/5 border-rose-500/20'}`}>
                                        <div className="font-bold text-foreground flex items-center justify-between">
                                            <span>Q{q.id}. {q.text}</span>
                                            <span className={`px-2 py-0.5 rounded text-[10px] font-black uppercase ${isCorrect ? 'bg-emerald-500/20 text-emerald-600' : 'bg-rose-500/20 text-rose-600'}`}>
                                                {isCorrect ? "To'g'ri" : "Xato"}
                                            </span>
                                        </div>
                                        <p className="text-[11px] text-muted-foreground">
                                            Sizning javobingiz: <span className="font-bold text-foreground">{userAnswers[q.id] || '(Kiritilmadi)'}</span>
                                        </p>
                                        <p className="text-[11px] text-muted-foreground">
                                            To'g'ri javob: <span className="font-bold text-indigo-500">{q.type === 'choice' && q.options ? q.options[parseInt(q.correctAnswer)] : q.correctAnswer}</span>
                                        </p>
                                        <div className="text-muted-foreground text-[11px] bg-background/80 p-2.5 rounded-xl border border-border/60">
                                            💡 <b>Akademik Tahlil:</b> {q.explanation}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Full Audio Script for Listening */}
                        {testType === 'listening' && currentPassage.script && (
                            <div className="text-left space-y-2 border-t border-border pt-4">
                                <h4 className="text-xs font-black text-foreground uppercase tracking-wider flex items-center gap-1.5">
                                    <FileText size={15} className="text-purple-500" /> To'liq Audio Skripti:
                                </h4>
                                <div className="p-4 bg-muted/40 border border-border rounded-2xl text-xs text-muted-foreground font-mono leading-relaxed whitespace-pre-line max-h-60 overflow-y-auto">
                                    {currentPassage.script}
                                </div>
                            </div>
                        )}

                        <div className="flex flex-col sm:flex-row gap-3 pt-2">
                            <Button
                                onClick={() => {
                                    setStep('intro');
                                    setUserAnswers({});
                                    setTimeLeft(1200);
                                }}
                                className="flex-1 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-black text-xs rounded-xl shadow-md flex items-center justify-center gap-1.5"
                            >
                                <RefreshCw size={14} /> Boshqa test tanlash
                            </Button>
                            <Button
                                onClick={() => navigate('/ielts')}
                                variant="outline"
                                className="flex-1 py-3.5 text-xs font-bold rounded-xl"
                            >
                                IELTS Hubga Qaytish
                            </Button>
                        </div>
                    </div>
                );
            })()}
        </div>
    );
};

export default IeltsReadingListeningMockPage;
