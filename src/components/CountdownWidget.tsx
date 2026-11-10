import React, { useMemo } from 'react';
import { Calendar, Clock } from 'lucide-react';
import { useStudyData } from '../context/IeltsTalkContext';
import { EVENT_TYPE_LABELS, EVENT_TYPE_COLORS, Event } from '../types';
import { format, differenceInDays, differenceInHours, addDays, isAfter, isBefore } from 'date-fns';

const CountdownWidget: React.FC = () => {
  const { events } = useStudyData();

  // Get upcoming events (next 30 days)
  const upcomingEvents = useMemo(() => {
    const now = new Date();
    const thirtyDaysLater = addDays(now, 30);

    return events
      .filter((event) => {
        const eventDate = new Date(event.eventDate);
        return isAfter(eventDate, now) && isBefore(eventDate, thirtyDaysLater);
      })
      .sort((a, b) => new Date(a.eventDate).getTime() - new Date(b.eventDate).getTime())
      .slice(0, 3); // Show top 3
  }, [events]);

  if (upcomingEvents.length === 0) {
    return null;
  }

  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
      <div className="mb-4 flex items-center gap-2">
        <Calendar className="text-indigo-600" size={20} />
        <h3 className="font-bold text-gray-900 dark:text-white">Yaqinlashayotgan Tadbirlar</h3>
      </div>

      <div className="space-y-3">
        {upcomingEvents.map((event: Event) => {
          const now = new Date();
          const eventDate = new Date(event.eventDate);
          const daysLeft = differenceInDays(eventDate, now);
          const hoursLeft = differenceInHours(eventDate, now) % 24;

          return (
            <div
              key={event.id}
              className="rounded-xl border-l-4 p-3"
              style={{
                borderLeftColor: EVENT_TYPE_COLORS[event.eventType],
                backgroundColor: `${EVENT_TYPE_COLORS[event.eventType]}10`,
              }}
            >
              <div className="flex items-center justify-between gap-2">
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                    {event.title}
                  </p>
                  <div className="mt-1 flex flex-wrap gap-x-2 gap-y-1">
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {EVENT_TYPE_LABELS[event.eventType]}
                    </p>
                    <p className="flex items-center gap-1 text-xs text-gray-400 dark:text-gray-500">
                      <Clock size={12} />
                      {format(new Date(event.eventDate), 'MMM d, HH:mm')}
                    </p>
                  </div>
                </div>
                <div className="shrink-0 text-right">
                  <p
                    className="text-xl font-bold md:text-2xl"
                    style={{ color: EVENT_TYPE_COLORS[event.eventType] }}
                  >
                    {daysLeft}
                  </p>
                  <p className="text-xs leading-none text-gray-500 dark:text-gray-400">
                    {daysLeft === 0 ? `${hoursLeft}s` : 'kun'}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CountdownWidget;
