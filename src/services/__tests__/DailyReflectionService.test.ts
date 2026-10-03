import { describe, it, expect, vi, beforeEach } from 'vitest';
import { DailyReflectionService } from '../DailyReflectionService';
import { supabase } from '../../lib/supabase';

vi.mock('../../lib/supabase', () => {
  const chainable = {
    upsert: vi.fn().mockResolvedValue({ data: null, error: null }),
    select: vi.fn().mockReturnThis(),
    eq: vi.fn().mockReturnThis(),
    order: vi.fn().mockResolvedValue({
      data: [
        {
          reflection_date: '2026-10-01',
          text: 'Learned inversion grammar',
          score: 90,
          feedback: 'Great job!',
          strengths: ['Grammar'],
          created_at: '2026-10-01T12:00:00Z',
        },
      ],
      error: null,
    }),
  };
  return {
    supabase: {
      from: vi.fn(() => chainable),
    },
  };
});

describe('DailyReflectionService', () => {
  beforeEach(() => {
    localStorage.clear();
    vi.clearAllMocks();
  });

  it('saves reflection to local storage and upserts into user_daily_reflections table', async () => {
    await DailyReflectionService.saveReflection(
      'user-123',
      '2026-10-03',
      'Today I reviewed 20 Oxford words',
      95,
      'Excellent progress',
      ['Vocabulary'],
    );

    expect(supabase.from).toHaveBeenCalledWith('user_daily_reflections');
    const cached = JSON.parse(localStorage.getItem('study_planner_daily_reflections') || '{}');
    expect(cached['2026-10-03']).toBeDefined();
    expect(cached['2026-10-03'].score).toBe(95);
    expect(cached['2026-10-03'].text).toBe('Today I reviewed 20 Oxford words');
  });

  it('fetches reflections from DB and updates local storage', async () => {
    const reflections = await DailyReflectionService.getReflections('user-123');

    expect(supabase.from).toHaveBeenCalledWith('user_daily_reflections');
    expect(reflections['2026-10-01']).toBeDefined();
    expect(reflections['2026-10-01'].score).toBe(90);
    expect(reflections['2026-10-01'].text).toBe('Learned inversion grammar');
  });

  it('falls back to local cache when user is guest', async () => {
    localStorage.setItem(
      'study_planner_daily_reflections',
      JSON.stringify({
        '2026-10-02': {
          date: '2026-10-02',
          text: 'Guest learned idioms',
          score: 80,
          timestamp: '2026-10-02T10:00:00Z',
        },
      }),
    );

    const reflections = await DailyReflectionService.getReflections('guest');
    expect(supabase.from).not.toHaveBeenCalled();
    expect(reflections['2026-10-02'].text).toBe('Guest learned idioms');
  });
});
