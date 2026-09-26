import React from 'react';
import { Play } from 'lucide-react';
import { LiveAmbientSphere } from './LiveAmbientSphere';

interface PromptSuggestion {
  title: string;
  text: string;
  icon: string;
}

interface CoachWelcomeScreenProps {
  currentPersona: any;
  isLiveSession: boolean;
  isSpeaking: boolean;
  isThinking: boolean;
  isListening: boolean;
  promptSuggestions: PromptSuggestion[];
  onStartSession: () => void;
  onPromptClick: (text: string) => void;
}

export const CoachWelcomeScreen: React.FC<CoachWelcomeScreenProps> = ({
  currentPersona,
  isLiveSession,
  isSpeaking,
  isThinking,
  isListening,
  promptSuggestions,
  onStartSession,
  onPromptClick,
}) => {
  const ActivePersonaIcon = currentPersona.icon;

  return (
    <div className="scrollbar-hide flex flex-1 flex-col items-center justify-center overflow-y-auto px-4 py-6 text-center">
      {/* Dynamic Live Ambient Neon Sphere */}
      <div className="group relative mb-6 cursor-pointer" onClick={onStartSession}>
        {isLiveSession ? (
          <LiveAmbientSphere
            status={
              isSpeaking ? 'speaking' : isThinking ? 'thinking' : isListening ? 'listening' : 'idle'
            }
            size={240}
          />
        ) : (
          <>
            {/* Outer glow rings (fixed bounds, zero overflow jitter) */}
            <div
              className={`absolute -inset-4 rounded-full bg-gradient-to-tr ${currentPersona.color} pointer-events-none animate-pulse opacity-20 blur-xl`}
            />
            <div className="pointer-events-none absolute -inset-2 rounded-full border border-primary/20" />

            {/* Main orb */}
            <div
              className={`relative h-28 w-28 rounded-full bg-gradient-to-tr sm:h-32 sm:w-32 md:h-36 md:w-36 ${currentPersona.color} p-[3px] shadow-2xl transition-transform duration-300 group-hover:scale-105`}
            >
              <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-full bg-card">
                {/* Inner animated gradient */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(232,72,58,0.25)_0%,transparent_70%)] opacity-40" />

                <ActivePersonaIcon
                  size={32}
                  className="relative z-10 text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]"
                />
                <span className="relative z-10 mt-1.5 text-[9px] font-extrabold uppercase tracking-[0.2em] text-[#C9A961]">
                  Boshlash
                </span>
              </div>
            </div>
          </>
        )}
      </div>

      <h3 className="mb-1.5 font-display text-xl font-black text-foreground sm:text-2xl md:text-3xl">
        {currentPersona.name}
      </h3>
      <p className="mb-6 max-w-sm text-xs leading-relaxed text-muted-foreground sm:text-sm">
        {currentPersona.desc}
      </p>

      {/* Quick Prompts — Premium Cards */}
      <div className="grid w-full max-w-lg grid-cols-1 gap-2.5 sm:grid-cols-2">
        {promptSuggestions.map((item, idx) => (
          <button
            key={idx}
            onClick={() => onPromptClick(item.title)}
            className="group relative cursor-pointer rounded-2xl border border-border bg-card/90 p-3.5 text-left shadow-xs backdrop-blur-xl transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/50 hover:bg-card hover:shadow-md active:scale-95"
          >
            <div className="flex items-start gap-2.5">
              <span className="mt-0.5 shrink-0 text-lg">{item.icon}</span>
              <div className="min-w-0">
                <div className="mb-0.5 text-xs font-bold text-foreground transition-colors group-hover:text-primary">
                  {item.title}
                </div>
                <div className="line-clamp-2 text-[10px] leading-relaxed text-muted-foreground">
                  {item.text}
                </div>
              </div>
            </div>
            <Play
              size={12}
              className="absolute right-3.5 top-3.5 fill-current text-primary opacity-0 transition-opacity group-hover:opacity-100"
            />
          </button>
        ))}
      </div>
    </div>
  );
};
