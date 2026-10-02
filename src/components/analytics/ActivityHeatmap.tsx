import React, { useMemo, useState, useCallback, useRef } from 'react';
import { StudySession } from '../../types';
import { format, eachDayOfInterval, startOfYear, endOfYear } from 'date-fns';
import { useLanguage } from '../../context/LanguageContext';

interface ActivityHeatmapProps {
  sessions: StudySession[];
  subjects?: import('../../types').Subject[];
}

export interface HeatmapActivityDetails {
  speakingMinutes: number;
  flashcardsMinutes: number;
  grammarMinutes: number;
  focusMinutes: number;
  totalSessions: number;
}

interface HeatmapDay {
  date: Date;
  dateStr: string;
  minutes: number;
  level: number;
  details: HeatmapActivityDetails;
}

interface TooltipState {
  visible: boolean;
  x: number;
  y: number;
  day: HeatmapDay | null;
}

const WEEKDAY_NAMES_UZ: Record<number, string> = {
  0: 'Yakshanba',
  1: 'Dushanba',
  2: 'Seshanba',
  3: 'Chorshanba',
  4: 'Payshanba',
  5: 'Juma',
  6: 'Shanba',
};

const WEEKDAY_NAMES_EN: Record<number, string> = {
  0: 'Sunday',
  1: 'Monday',
  2: 'Tuesday',
  3: 'Wednesday',
  4: 'Thursday',
  5: 'Friday',
  6: 'Saturday',
};

const MONTH_NAMES_UZ: Record<number, string> = {
  0: 'Yanvar',
  1: 'Fevral',
  2: 'Mart',
  3: 'Aprel',
  4: 'May',
  5: 'Iyun',
  6: 'Iyul',
  7: 'Avgust',
  8: 'Sentabr',
  9: 'Oktabr',
  10: 'Noyabr',
  11: 'Dekabr',
};

const MONTH_NAMES_EN: Record<number, string> = {
  0: 'January',
  1: 'February',
  2: 'March',
  3: 'April',
  4: 'May',
  5: 'June',
  6: 'July',
  7: 'August',
  8: 'September',
  9: 'October',
  10: 'November',
  11: 'December',
};

const ActivityHeatmap: React.FC<ActivityHeatmapProps> = ({ sessions, subjects }) => {
  const { language } = useLanguage();
  // 2026 yil to'liq: January - December
  const year2026 = new Date(2026, 0, 1); // January 1, 2026
  const startDate = startOfYear(year2026);
  const endDate = endOfYear(year2026); // December 31, 2026

  const [tooltip, setTooltip] = useState<TooltipState>({
    visible: false,
    x: 0,
    y: 0,
    day: null,
  });
  const tooltipRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const days = useMemo(() => {
    const interval = eachDayOfInterval({ start: startDate, end: endDate });

    // Group sessions by date and activity type
    const sessionMap = new Map<string, { minutes: number; details: HeatmapActivityDetails }>();
    sessions.forEach((s) => {
      const dateStr = format(new Date(s.startTime), 'yyyy-MM-dd');
      const current = sessionMap.get(dateStr) || {
        minutes: 0,
        details: {
          speakingMinutes: 0,
          flashcardsMinutes: 0,
          grammarMinutes: 0,
          focusMinutes: 0,
          totalSessions: 0,
        },
      };
      const dur = s.duration || 0;
      current.minutes += dur;
      current.details.totalSessions += 1;

      const matchedSubject = subjects?.find((sub) => sub.id === s.subjectId);
      const sub = (s.subjectId || '').toLowerCase();
      const subjectName = (matchedSubject?.name || '').toLowerCase();
      const combined = `${sub} ${subjectName}`;

      if (combined.includes('speaking') || combined.includes('coach')) {
        current.details.speakingMinutes += dur;
      } else if (
        combined.includes('flashcard') ||
        combined.includes('deck') ||
        combined.includes('vocab') ||
        combined.includes('oxford') ||
        combined.includes('a1') ||
        combined.includes('a2') ||
        combined.includes('b1') ||
        combined.includes('b2') ||
        combined.includes('jlpt') ||
        combined.includes("lug'at") ||
        combined.includes('part') ||
        combined.includes('qism')
      ) {
        current.details.flashcardsMinutes += dur;
      } else if (
        combined.includes('grammar') ||
        combined.includes('murphy') ||
        combined.includes('ielts')
      ) {
        current.details.grammarMinutes += dur;
      } else {
        current.details.focusMinutes += dur;
      }
      sessionMap.set(dateStr, current);
    });

    return interval.map((date) => {
      const dateStr = format(date, 'yyyy-MM-dd');
      const data = sessionMap.get(dateStr);
      const minutes = data ? data.minutes : 0;
      const details = data
        ? data.details
        : {
            speakingMinutes: 0,
            flashcardsMinutes: 0,
            grammarMinutes: 0,
            focusMinutes: 0,
            totalSessions: 0,
          };
      return {
        date,
        dateStr,
        minutes,
        level: minutes === 0 ? 0 : minutes < 30 ? 1 : minutes < 60 ? 2 : minutes < 120 ? 3 : 4,
        details,
      };
    });
  }, [sessions, startDate, endDate]);

  // Group days into weeks for the grid
  const weeks = useMemo(() => {
    const result: (HeatmapDay | null)[][] = [];
    let currentWeek: (HeatmapDay | null)[] = [];

    // Offset to align days of week
    const startDayOfWeek = startDate.getDay();
    for (let i = 0; i < startDayOfWeek; i++) {
      currentWeek.push(null);
    }

    days.forEach((day) => {
      if (currentWeek.length === 7) {
        result.push(currentWeek);
        currentWeek = [];
      }
      currentWeek.push(day);
    });

    if (currentWeek.length > 0) {
      while (currentWeek.length < 7) currentWeek.push(null);
      result.push(currentWeek);
    }

    return result;
  }, [days, startDate]);

  const getColor = (level: number) => {
    switch (level) {
      case 0:
        return 'bg-[#161b22] border border-white/5';
      case 1:
        return 'bg-[#0e4429] shadow-[0_0_8px_rgba(14,68,41,0.4)]';
      case 2:
        return 'bg-[#006d32] shadow-[0_0_10px_rgba(0,109,50,0.5)]';
      case 3:
        return 'bg-[#26a641] shadow-[0_0_12px_rgba(38,166,65,0.6)]';
      case 4:
        return 'bg-[#39d353] shadow-[0_0_15px_rgba(57,211,83,0.8)]';
      default:
        return 'bg-[#161b22]';
    }
  };

  const monthLabels = useMemo(() => {
    const labels: { label: string; index: number }[] = [];
    let lastMonth = -1;

    weeks.forEach((week, i) => {
      const firstDay = week.find((d) => d !== null);
      if (firstDay) {
        const month = firstDay.date.getMonth();
        if (month !== lastMonth) {
          labels.push({ label: format(firstDay.date, 'MMM'), index: i });
          lastMonth = month;
        }
      }
    });
    return labels;
  }, [weeks]);

  // Tooltip handlers
  const handleMouseEnter = useCallback((e: React.MouseEvent<HTMLDivElement>, day: HeatmapDay) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const containerRect = containerRef.current?.getBoundingClientRect();

    if (containerRect) {
      setTooltip({
        visible: true,
        x: rect.left - containerRect.left + rect.width / 2,
        y: rect.top - containerRect.top,
        day,
      });
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTooltip((prev) => ({ ...prev, visible: false }));
  }, []);

  // Format tooltip text
  const formatTooltipText = (
    day: HeatmapDay,
  ): { activity: string; date: string; breakdown: string[] } => {
    const dayOfWeek =
      language === 'en' ? WEEKDAY_NAMES_EN[day.date.getDay()] : WEEKDAY_NAMES_UZ[day.date.getDay()];
    const monthName =
      language === 'en' ? MONTH_NAMES_EN[day.date.getMonth()] : MONTH_NAMES_UZ[day.date.getMonth()];
    const dayNum = day.date.getDate();
    const year = day.date.getFullYear();

    const activity =
      day.minutes > 0
        ? language === 'en'
          ? `${day.minutes} mins studied (${day.details.totalSessions} sessions)`
          : `${day.minutes} daqiqa o'qish (${day.details.totalSessions} ta faollik)`
        : language === 'en'
          ? 'No activity'
          : "Faollik yo'q";

    const date = `${dayOfWeek}, ${monthName} ${dayNum}, ${year}`;

    const breakdown: string[] = [];
    if (day.details) {
      if (day.details.speakingMinutes > 0) {
        breakdown.push(`🎙️ Speaking: ${day.details.speakingMinutes} daq`);
      }
      if (day.details.flashcardsMinutes > 0) {
        breakdown.push(`🎴 Fleshkartalar: ${day.details.flashcardsMinutes} daq`);
      }
      if (day.details.grammarMinutes > 0) {
        breakdown.push(`📖 Grammatika: ${day.details.grammarMinutes} daq`);
      }
      if (day.details.focusMinutes > 0) {
        breakdown.push(`⏱️ Dars/Pomodoro: ${day.details.focusMinutes} daq`);
      }
    }

    return { activity, date, breakdown };
  };

  // Yil ko'rsatkichi
  const yearRange = '2026';

  return (
    <div
      ref={containerRef}
      className="relative mb-8 overflow-hidden rounded-[24px] border border-white/10 bg-[#0d1117] p-8 font-sans"
    >
      <div className="mb-10 flex items-center justify-between">
        <div>
          <h3 className="text-2xl font-bold tracking-tight text-white">
            {language === 'en' ? 'Study Activity' : "O'quv Faolligi"}
          </h3>
          <p className="mt-1 text-xs text-gray-500">{yearRange}</p>
        </div>
        <div className="flex items-center gap-3 text-xs text-gray-400">
          <span className="opacity-60">{language === 'en' ? 'Less' : 'Kam'}</span>
          <div className="flex gap-[4px]">
            <div
              className="h-[12px] w-[12px] rounded-[3px] border border-white/10 bg-[#161b22]"
              title="0 daqiqa"
            ></div>
            <div className="h-[12px] w-[12px] rounded-[3px] bg-[#0e4429]" title="<30 daqiqa"></div>
            <div className="h-[12px] w-[12px] rounded-[3px] bg-[#006d32]" title="<60 daqiqa"></div>
            <div className="h-[12px] w-[12px] rounded-[3px] bg-[#26a641]" title="<120 daqiqa"></div>
            <div
              className="h-[12px] w-[12px] rounded-[3px] bg-[#39d353] shadow-[0_0_10px_rgba(57,211,83,0.5)]"
              title="≥120 daqiqa"
            ></div>
          </div>
          <span className="opacity-60">{language === 'en' ? 'More' : "Ko'p"}</span>
        </div>
      </div>

      <div className="scrollbar-hide overflow-x-auto pb-6">
        <div className="inline-block min-w-full">
          {/* Month Labels */}
          <div className="relative ml-[40px] h-6 text-[11px] font-medium text-gray-500">
            {monthLabels.map((m, i) => (
              <div
                key={i}
                className="absolute"
                style={{
                  left: `${m.index * 15}px`,
                }}
              >
                {m.label}
              </div>
            ))}
          </div>

          <div className="relative flex gap-4">
            {/* Day Labels */}
            <div className="flex h-[100px] w-8 flex-col justify-between py-1 text-[10px] font-medium text-gray-500">
              <span className="leading-none">Mon</span>
              <span className="leading-none">Wed</span>
              <span className="leading-none">Fri</span>
            </div>

            {/* Grid */}
            <div className="flex gap-[4px]">
              {weeks.map((week, weekIdx) => (
                <div key={weekIdx} className="flex flex-col gap-[4px]">
                  {week.map((day, dayIdx) => (
                    <div
                      key={dayIdx}
                      onMouseEnter={day ? (e) => handleMouseEnter(e, day) : undefined}
                      onMouseLeave={day ? handleMouseLeave : undefined}
                      className={`h-[11px] w-[11px] cursor-pointer rounded-[3px] transition-all duration-300 hover:z-10 hover:scale-125 ${day ? getColor(day.level) : 'bg-transparent'}`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* GitHub-style Tooltip */}
      {tooltip.visible &&
        tooltip.day &&
        (() => {
          const { activity, date, breakdown } = formatTooltipText(tooltip.day);
          return (
            <div
              ref={tooltipRef}
              className="pointer-events-none absolute z-50"
              style={{
                left: `${tooltip.x}px`,
                top: `${tooltip.y - 8}px`,
                transform: 'translate(-50%, -100%)',
              }}
            >
              <div className="min-w-[170px] whitespace-nowrap rounded-xl border border-[#3d444d] bg-[#1b1f23] px-3.5 py-2.5 shadow-[0_8px_24px_rgba(0,0,0,0.5)]">
                <p className="text-[12px] font-bold leading-tight text-emerald-400">{activity}</p>
                <p className="mb-1.5 mt-0.5 border-b border-white/10 pb-1.5 text-[10px] leading-tight text-gray-400">
                  {date}
                </p>
                {breakdown.length > 0 && (
                  <div className="space-y-1 text-[11px] font-medium text-gray-300">
                    {breakdown.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-1.5">
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              {/* Tooltip Arrow */}
              <div className="flex justify-center">
                <div
                  className="h-0 w-0"
                  style={{
                    borderLeft: '6px solid transparent',
                    borderRight: '6px solid transparent',
                    borderTop: '6px solid #3d444d',
                  }}
                />
              </div>
            </div>
          );
        })()}

      <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-6">
        <button className="text-[12px] text-gray-500 transition-colors hover:text-indigo-400">
          Learn how we count contributions
        </button>
        <p className="text-[12px] font-light italic text-gray-500">* Oxirgi 1 yillik ma'lumotlar</p>
      </div>
    </div>
  );
};

export default ActivityHeatmap;
