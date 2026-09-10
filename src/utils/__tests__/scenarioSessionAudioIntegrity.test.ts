import { describe, it, expect } from 'vitest';
import { DEFAULT_SCENARIOS } from '../../data/defaultScenarios';
import { isAcousticEcho } from '../echoFilter';

describe('Scenario Session Audio and Echo Suppression Integrity Tests', () => {
  it('1. All scenarios must have valid non-empty opening lines in their target language', () => {
    for (const scenario of DEFAULT_SCENARIOS) {
      const isEn = scenario.language === 'en';
      if (isEn) {
        expect(scenario.opening_line_en).toBeDefined();
        expect(scenario.opening_line_en!.trim().length).toBeGreaterThan(5);
      } else {
        expect(scenario.opening_line_ja).toBeDefined();
        expect(scenario.opening_line_ja!.trim().length).toBeGreaterThan(5);
      }
    }
  });

  it('2. Detects acoustic echo loopback for English scenario openings', () => {
    const visaScenario = DEFAULT_SCENARIOS.find((s) => s.id === 'us_visa_interview');
    expect(visaScenario).toBeDefined();
    const coachLine = visaScenario!.opening_line_en!;

    // Full loopback from speaker
    expect(isAcousticEcho(coachLine, coachLine)).toBe(true);

    // Partial substring picked up by mic
    const subChunk = coachLine.slice(0, 20);
    expect(isAcousticEcho(subChunk, coachLine)).toBe(true);
  });

  it('3. Does NOT flag genuine user answers to scenario prompts as echo', () => {
    const visaScenario = DEFAULT_SCENARIOS.find((s) => s.id === 'us_visa_interview');
    const coachLine = visaScenario!.opening_line_en!;

    // Real student responses to the visa interview prompt
    expect(isAcousticEcho('I am traveling to attend an academic conference in New York.', coachLine)).toBe(false);
    expect(isAcousticEcho('Here is my passport and financial documentation.', coachLine)).toBe(false);
  });

  it('4. Detects acoustic echo loopback for English scenario openings', () => {
    const checkinScenario = DEFAULT_SCENARIOS.find((s) => s.id === 'hotel_concierge_checkin');
    expect(checkinScenario).toBeDefined();
    const coachLine = checkinScenario!.opening_line_en!;

    // Full loopback
    expect(isAcousticEcho(coachLine, coachLine)).toBe(true);

    // Partial substring picked up by mic
    const subChunk = coachLine.slice(0, 20);
    expect(isAcousticEcho(subChunk, coachLine)).toBe(true);

    // Genuine user reply
    expect(isAcousticEcho('Yes, I booked a double room under John Smith.', coachLine)).toBe(false);
    expect(isAcousticEcho('Could you check under my name, Farhod?', coachLine)).toBe(false);
  });
});
