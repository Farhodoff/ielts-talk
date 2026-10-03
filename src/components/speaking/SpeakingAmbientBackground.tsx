import React from 'react';

interface SpeakingAmbientBackgroundProps {
  gradientBg: string;
  isLiveSession: boolean;
}

export const SpeakingAmbientBackground: React.FC<SpeakingAmbientBackgroundProps> = ({
  gradientBg,
  isLiveSession,
}) => {
  return (
    <>
      <div
        className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${gradientBg} transition-all duration-1000`}
      />
      <div className="pointer-events-none absolute left-0 top-0 -z-10 h-full w-full overflow-hidden">
        <div className="absolute -left-40 -top-40 h-[500px] w-[500px] animate-pulse rounded-full bg-primary/10 blur-[120px]" />
        <div
          className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-[#C9A961]/10 blur-[120px]"
          style={{ animationDelay: '2s' }}
        />
        {isLiveSession && (
          <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-primary/5 blur-[150px]" />
        )}
      </div>
    </>
  );
};
