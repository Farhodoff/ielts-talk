import { describe, it, expect, beforeEach } from 'vitest';
import { FreemiumService } from '../FreemiumService';

describe('FreemiumService', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('provides default 1 free writing and 1 free speaking for new users', () => {
    const status = FreemiumService.getQuotaStatus('test-user-1');
    expect(status.canUseWriting).toBe(true);
    expect(status.canUseSpeaking).toBe(true);
    expect(status.remainingWriting).toBe(1);
    expect(status.remainingSpeaking).toBe(1);
    expect(status.writingUsed).toBe(0);
    expect(status.speakingUsed).toBe(0);
  });

  it('correctly decrements remaining writing after 1 usage and blocks subsequent usage', () => {
    FreemiumService.recordWritingUsage('test-user-1');
    const status = FreemiumService.getQuotaStatus('test-user-1');
    expect(status.writingUsed).toBe(1);
    expect(status.remainingWriting).toBe(0);
    expect(status.canUseWriting).toBe(false);

    // Speaking should still be available
    expect(status.canUseSpeaking).toBe(true);
    expect(status.remainingSpeaking).toBe(1);
  });

  it('correctly decrements remaining speaking after 1 usage and blocks subsequent usage', () => {
    FreemiumService.recordSpeakingUsage('test-user-1');
    const status = FreemiumService.getQuotaStatus('test-user-1');
    expect(status.speakingUsed).toBe(1);
    expect(status.remainingSpeaking).toBe(0);
    expect(status.canUseSpeaking).toBe(false);

    // Writing should still be available
    expect(status.canUseWriting).toBe(true);
    expect(status.remainingWriting).toBe(1);
  });

  it('grants unlimited quota to admin users regardless of usage', () => {
    FreemiumService.recordWritingUsage('admin-user');
    FreemiumService.recordSpeakingUsage('admin-user');
    const status = FreemiumService.getQuotaStatus('admin-user', true); // isAdmin = true
    expect(status.canUseWriting).toBe(true);
    expect(status.canUseSpeaking).toBe(true);
    expect(status.remainingWriting).toBeGreaterThan(100);
    expect(status.remainingSpeaking).toBeGreaterThan(100);
  });

  it('registers users into pro waitlist safely', async () => {
    const success = await FreemiumService.registerForProWaitlist(
      'user@example.com',
      'writing',
      'test-user-1',
    );
    expect(success).toBe(true);
    const raw = localStorage.getItem('ielts_pro_waitlist');
    expect(raw).toBeTruthy();
    const parsed = JSON.parse(raw!);
    expect(parsed[0].contact).toBe('user@example.com');
  });
});
