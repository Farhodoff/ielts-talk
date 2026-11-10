import { supabase } from '../lib/supabase';
import { safeLocalStorage } from '../utils/storage/safeLocalStorage';

export interface DailyReflectionRecord {
  date: string;
  text: string;
  score: number;
  feedback?: string;
  strengths?: string[];
  timestamp: string;
}

const STORAGE_KEY = 'ielts_talk_daily_reflections';

export class DailyReflectionService {
  /**
   * Saves reflection to PostgreSQL `user_daily_reflections` table and syncs to local cache.
   */
  public static async saveReflection(
    userId: string,
    dateStr: string,
    text: string,
    score: number = 85,
    feedback: string = '',
    strengths: string[] = [],
  ): Promise<void> {
    const timestamp = new Date().toISOString();

    // 1. Update local cache immediately
    const cached = safeLocalStorage.getJSON<Record<string, DailyReflectionRecord>>(STORAGE_KEY, {});
    cached[dateStr] = {
      date: dateStr,
      text,
      score,
      feedback,
      strengths,
      timestamp,
    };
    safeLocalStorage.setJSON(STORAGE_KEY, cached);

    // 2. Persist to relational database
    if (userId && userId !== 'guest' && userId !== 'local_user') {
      try {
        const { error } = await supabase.from('user_daily_reflections').upsert(
          {
            user_id: userId,
            reflection_date: dateStr,
            text,
            score,
            feedback,
            strengths,
            updated_at: timestamp,
          },
          { onConflict: 'user_id,reflection_date' },
        );

        if (error) {
          console.warn('[DailyReflectionService] DB upsert notice:', error);
        }
      } catch (err) {
        console.warn('[DailyReflectionService] Failed to persist reflection:', err);
      }
    }
  }

  /**
   * Loads all reflection history from Supabase, falling back to local storage cache.
   */
  public static async getReflections(
    userId: string,
  ): Promise<Record<string, DailyReflectionRecord>> {
    const cached = safeLocalStorage.getJSON<Record<string, DailyReflectionRecord>>(STORAGE_KEY, {});

    if (!userId || userId === 'guest' || userId === 'local_user') {
      return cached;
    }

    try {
      const { data, error } = await supabase
        .from('user_daily_reflections')
        .select('*')
        .eq('user_id', userId)
        .order('reflection_date', { ascending: false });

      if (error) {
        console.warn('[DailyReflectionService] DB fetch error:', error);
        return cached;
      }

      if (data && Array.isArray(data)) {
        const mapped: Record<string, DailyReflectionRecord> = { ...cached };
        data.forEach((row: any) => {
          mapped[row.reflection_date] = {
            date: row.reflection_date,
            text: row.text,
            score: Number(row.score) || 85,
            feedback: row.feedback || '',
            strengths: Array.isArray(row.strengths) ? row.strengths : [],
            timestamp: row.created_at || new Date().toISOString(),
          };
        });
        safeLocalStorage.setJSON(STORAGE_KEY, mapped);
        return mapped;
      }
    } catch (err) {
      console.warn('[DailyReflectionService] Failed to fetch reflections from DB:', err);
    }

    return cached;
  }
}
