import React, { useState, useEffect, useRef } from 'react';
import { Volume2, Play, Pause, RotateCcw, Eye, EyeOff } from 'lucide-react';
import { Button } from '../../ui/Button';

interface MockAudioPlayerProps {
  audioUrl?: string;
  script?: string;
  text?: string;
}

const formatTime = (secs: number): string => {
  const m = Math.floor(secs / 60);
  const s = Math.floor(secs % 60);
  return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
};

export const MockAudioPlayer: React.FC<MockAudioPlayerProps> = ({ audioUrl, script, text }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioDuration, setAudioDuration] = useState(0);
  const [audioProgress, setAudioProgress] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState(1.0);
  const [isUsingTts, setIsUsingTts] = useState(false);
  const [showTranscript, setShowTranscript] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const ttsUtteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  const stopAudio = () => {
    setIsPlaying(false);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      audioRef.current = null;
    }
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
  };

  useEffect(() => {
    return () => {
      stopAudio();
    };
  }, []);

  // When audioUrl changes, reset state
  useEffect(() => {
    stopAudio();
    setAudioProgress(0);
    setAudioDuration(0);
    setIsUsingTts(false);
  }, [audioUrl]);

  const triggerTtsPlayback = (rate = playbackSpeed) => {
    if (typeof window === 'undefined' || !window.speechSynthesis) return;

    if (isPlaying) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
      const textToSpeak = script || text || '';
      const utterance = new SpeechSynthesisUtterance(textToSpeak);
      utterance.lang = 'en-GB';
      utterance.rate = rate;
      utterance.onend = () => setIsPlaying(false);
      utterance.onerror = () => setIsPlaying(false);
      ttsUtteranceRef.current = utterance;
      window.speechSynthesis.speak(utterance);
    }
  };

  const handlePlayPause = () => {
    if (!audioUrl || isUsingTts) {
      triggerTtsPlayback();
      return;
    }

    if (!audioRef.current) {
      const audio = new Audio(audioUrl);
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
        console.warn('Audio loading failed. Switching to TTS fallback.');
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

  const handleSpeedChange = (speed: number) => {
    setPlaybackSpeed(speed);
    if (audioRef.current) {
      audioRef.current.playbackRate = speed;
    }
    if (isPlaying && (isUsingTts || !audioUrl)) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
      setTimeout(() => {
        triggerTtsPlayback(speed);
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

  return (
    <div className="space-y-4 py-1 sm:space-y-5 sm:py-2">
      <div className="space-y-2 rounded-2xl border border-purple-200/60 bg-purple-50 p-3.5 text-center dark:border-purple-900/40 dark:bg-purple-950/20 sm:space-y-3 sm:p-5">
        <div className="flex justify-center">
          <div className="animate-pulse rounded-full bg-purple-500/10 p-3 text-purple-600 dark:text-purple-400 sm:p-4">
            <Volume2 size={24} className="sm:hidden" />
            <Volume2 size={28} className="hidden sm:block" />
          </div>
        </div>
        <div>
          <h4 className="text-xs font-bold text-foreground">Audio Pleyer</h4>
          <p className="mt-0.5 text-[10px] text-muted-foreground">
            {audioUrl && !isUsingTts ? 'Rasmiy Audio Fayl' : 'British Speech Synthesis'}
          </p>
        </div>
      </div>

      {/* Audio Controller Panel */}
      <div className="space-y-3 rounded-2xl border border-border bg-muted/40 p-3 sm:p-4">
        {/* Seek slider */}
        <div className="flex items-center gap-2 font-mono text-xs">
          <span>{formatTime(audioProgress)}</span>
          <input
            type="range"
            min={0}
            max={audioDuration || 300}
            value={audioProgress}
            onChange={handleSeek}
            className="flex-1 accent-purple-600"
          />
          <span>{formatTime(audioDuration || 300)}</span>
        </div>

        {/* Play controls */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              onClick={() => skipTime(-10)}
              className="flex min-h-[40px] min-w-[40px] cursor-pointer items-center justify-center rounded-xl p-2 text-muted-foreground transition-all hover:bg-muted hover:text-foreground"
              title="10 soniya orqaga"
            >
              <RotateCcw size={16} />
            </button>
            <Button
              onClick={handlePlayPause}
              className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-purple-600 text-white shadow-md hover:bg-purple-700 sm:h-12 sm:w-12"
            >
              {isPlaying ? <Pause size={18} /> : <Play size={18} className="ml-0.5" />}
            </Button>
            <button
              onClick={() => skipTime(10)}
              className="flex min-h-[40px] min-w-[40px] cursor-pointer items-center justify-center rounded-xl p-2 text-muted-foreground transition-all hover:bg-muted hover:text-foreground"
              title="10 soniya oldinga"
            >
              <Play size={16} className="rotate-180" />
            </button>
          </div>

          {/* Speed controls */}
          <div className="flex gap-1 text-[10px] font-bold">
            {[0.8, 1.0, 1.2, 1.5].map((speed) => (
              <button
                key={speed}
                onClick={() => handleSpeedChange(speed)}
                className={`cursor-pointer rounded-md border px-1.5 py-1 sm:px-2 ${
                  playbackSpeed === speed
                    ? 'border-purple-600 bg-purple-600 text-white'
                    : 'border-border bg-background text-muted-foreground'
                }`}
              >
                {speed}x
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Transcript Toggle */}
      {script && (
        <div className="space-y-2 pt-1">
          <button
            onClick={() => setShowTranscript((prev) => !prev)}
            className="flex w-full cursor-pointer items-center justify-center gap-1.5 rounded-xl border border-border/80 bg-muted/30 px-3 py-2 text-[11px] font-bold text-muted-foreground transition-all hover:bg-muted hover:text-foreground"
          >
            {showTranscript ? <EyeOff size={14} /> : <Eye size={14} />}
            <span>{showTranscript ? 'Skriptni yashirish' : "Skriptni ko'rish"}</span>
          </button>

          {showTranscript && (
            <div className="max-h-60 overflow-y-auto whitespace-pre-line rounded-xl border border-border bg-muted/40 p-3 font-mono text-xs leading-relaxed text-muted-foreground sm:p-4">
              {script}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
