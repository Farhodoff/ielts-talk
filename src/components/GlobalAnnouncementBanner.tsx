import React, { useState, useEffect } from 'react';
import { UserNotificationService } from '../services/UserNotificationService';
import { Megaphone, X, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Announcement {
  id: string;
  title: string;
  message: string;
  tag?: string;
  created_at: string;
}

export const GlobalAnnouncementBanner: React.FC = () => {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [dismissedIds, setDismissedIds] = useState<string[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const dismissedRaw = localStorage.getItem('ielts_talk_dismissed_announcements');
    if (dismissedRaw) {
      try {
        setDismissedIds(JSON.parse(dismissedRaw));
      } catch (e) {}
    }

    UserNotificationService.getActiveBroadcastAnnouncements().then((list) => {
      setAnnouncements(list || []);
    });
  }, []);

  const handleDismiss = (id: string) => {
    const updated = [...dismissedIds, id];
    setDismissedIds(updated);
    localStorage.setItem('ielts_talk_dismissed_announcements', JSON.stringify(updated));
  };

  const activeAnnouncement = announcements.find((a) => !dismissedIds.includes(a.id));

  if (!activeAnnouncement) return null;

  return (
    <div className="relative z-40 bg-gradient-to-r from-amber-600 via-rose-600 to-indigo-600 px-4 py-2.5 text-white shadow-md duration-500 animate-in slide-in-from-top">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 text-xs font-bold">
        <div className="flex min-w-0 flex-1 items-center gap-2">
          <span className="shrink-0 animate-bounce rounded-lg bg-white/20 p-1">
            <Megaphone size={14} />
          </span>
          <span className="shrink-0 rounded bg-black/20 px-2 py-0.5 text-[10px] font-black uppercase tracking-wider">
            {activeAnnouncement.tag || "E'lon"}
          </span>
          <p className="truncate font-extrabold text-white">
            <span className="mr-1.5 font-black text-amber-200">{activeAnnouncement.title}:</span>
            {activeAnnouncement.message}
          </p>
        </div>

        <div className="flex shrink-0 items-center gap-3">
          <button
            onClick={() => navigate('/flashcards')}
            className="hidden items-center gap-1 rounded-lg bg-white/20 px-3 py-1 font-extrabold text-white transition-all hover:bg-white/30 sm:flex"
          >
            Ko'rish <ArrowRight size={12} />
          </button>
          <button
            onClick={() => handleDismiss(activeAnnouncement.id)}
            className="rounded-full p-1 text-white/80 transition-all hover:bg-white/10 hover:text-white"
            title="Yopish"
          >
            <X size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};
