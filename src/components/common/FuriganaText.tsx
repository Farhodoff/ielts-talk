import React from "react";

interface FuriganaTextProps {
  text: string;
  className?: string;
  rubyClassName?: string;
  forceShow?: boolean;
}

export const FuriganaText: React.FC<FuriganaTextProps> = ({
  text,
  className = "",
  rubyClassName = "text-xs text-indigo-400 font-normal select-none",
}) => {
  if (!text) return null;

  const regex =
    /([一-龯々〆ヵヶA-Za-z0-9]+)(?:\[([^\]]+)\]|\(([\u3040-\u309f\u30a0-\u30ff]+)\)|（([\u3040-\u309f\u30a0-\u30ff]+)）)/g;
  const parts: { type: "text" | "ruby"; content?: string; kanji?: string; furigana?: string }[] =
    [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push({ type: "text", content: text.substring(lastIndex, match.index) });
    }
    const reading = match[2] || match[3] || match[4];
    parts.push({ type: "ruby", kanji: match[1], furigana: reading });
    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push({ type: "text", content: text.substring(lastIndex) });
  }

  return (
    <span className={`inline-flex flex-wrap items-baseline leading-relaxed ${className}`}>
      {parts.map((part, idx) => {
        if (part.type === "text") {
          return <span key={idx}>{part.content}</span>;
        }
        return (
          <ruby key={idx} className="inline-flex flex-col items-center leading-none">
            <span>{part.kanji}</span>
            <rt className={rubyClassName}>{part.furigana}</rt>
          </ruby>
        );
      })}
    </span>
  );
};

export default FuriganaText;
