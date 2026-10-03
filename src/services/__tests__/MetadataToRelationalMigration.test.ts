import { describe, it, expect, vi, beforeEach } from 'vitest';
import { DataMigrationService } from '../DataMigrationService';
import { supabase } from '../../lib/supabase';

vi.mock('../../lib/supabase', () => {
  const chainable = {
    upsert: vi.fn().mockResolvedValue({ data: null, error: null }),
    insert: vi.fn().mockResolvedValue({ data: null, error: null }),
    select: vi.fn().mockReturnThis(),
    eq: vi.fn().mockReturnThis(),
  };
  return {
    supabase: {
      from: vi.fn(() => chainable),
    },
  };
});

describe('DataMigrationService.migrateUserMetadataToDB', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('migrates daily_reflections and vocab_saved from user_metadata to relational tables', async () => {
    const mockUser = {
      id: '00000000-0000-4000-8000-000000000001',
      user_metadata: {
        daily_reflections: {
          '2026-10-02': {
            text: 'Completed reading passage',
            score: 90,
            feedback: 'Good job',
            strengths: ['Reading'],
          },
        },
        vocab_saved: [
          {
            word: 'Perseverance',
            language: 'en',
            phonetic: '/ˌpɜː.sɪˈvɪə.rəns/',
            definition: 'Continued effort to do or achieve something',
            uzbekTranslation: 'Sabr-toqat',
          },
        ],
      },
    };

    const result = await DataMigrationService.migrateUserMetadataToDB(mockUser);

    expect(result.migratedReflections).toBe(1);
    expect(result.migratedVocab).toBe(1);
    expect(supabase.from).toHaveBeenCalledWith('user_daily_reflections');
    expect(supabase.from).toHaveBeenCalledWith('user_saved_vocabulary');
  });

  it('gracefully returns zeros if user has no metadata to migrate', async () => {
    const result = await DataMigrationService.migrateUserMetadataToDB({ id: 'guest' });
    expect(result.migratedReflections).toBe(0);
    expect(result.migratedVocab).toBe(0);
    expect(supabase.from).not.toHaveBeenCalled();
  });
});
