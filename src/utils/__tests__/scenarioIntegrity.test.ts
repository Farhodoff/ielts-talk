import { describe, it, expect } from 'vitest';
import { DEFAULT_SCENARIOS } from '../../data/defaultScenarios';

describe('Speaking Conversation Scenarios Integrity Tests', () => {
  it('1. All scenarios in DEFAULT_SCENARIOS must have unique IDs', () => {
    const ids = DEFAULT_SCENARIOS.map((s) => s.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(ids.length);
  });

  it('2. Core English scenarios like "tech_job_interview" must exist', () => {
    const techInterview = DEFAULT_SCENARIOS.find((s) => s.id === 'tech_job_interview');
    expect(techInterview).toBeDefined();
    expect(techInterview?.difficulty).toBe('C1');
    expect(techInterview?.language).toBe('en');
  });

  it('3. IELTS speaking scenarios must have valid snake_case ID', () => {
    const ieltsScenario = DEFAULT_SCENARIOS.find((s) => s.id === 'ielts_speaking_full_mock');
    expect(ieltsScenario).toBeDefined();
    expect(ieltsScenario?.language).toBe('en');
  });

  it('4. All scenario IDs must match snake_case format', () => {
    for (const scenario of DEFAULT_SCENARIOS) {
      expect(scenario.id).toMatch(/^[a-z0-9_]+$/);
      expect(scenario.id).not.toContain(' ');
    }
  });

  it('5. Verify accurate scenario counts (8 English scenarios total)', () => {
    const enScenarios = DEFAULT_SCENARIOS.filter((s) => s.language === 'en');
    expect(enScenarios.length).toBe(8);
    expect(DEFAULT_SCENARIOS.length).toBe(8);
  });
});
