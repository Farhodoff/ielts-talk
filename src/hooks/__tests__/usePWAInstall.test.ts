import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { usePWAInstall } from '../usePWAInstall';

describe('usePWAInstall hook', () => {
  beforeEach(() => {
    localStorage.clear();
    vi.restoreAllMocks();
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('initializes with default non-installed state in standard browser', () => {
    const { result } = renderHook(() => usePWAInstall());

    expect(result.current.isReady).toBe(true);
    expect(result.current.isInstalled).toBe(false);
    expect(result.current.isDismissed).toBe(false);
  });

  it('detects standalone display-mode as installed', () => {
    vi.spyOn(window, 'matchMedia').mockImplementation((query) => ({
      matches: query === '(display-mode: standalone)',
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }));

    const { result } = renderHook(() => usePWAInstall());
    expect(result.current.isInstalled).toBe(true);
  });

  it('handles beforeinstallprompt event and becomes installable', async () => {
    const { result } = renderHook(() => usePWAInstall());

    expect(result.current.isInstallable).toBe(false);

    const mockPrompt = vi.fn().mockResolvedValue(undefined);
    const mockEvent = new Event('beforeinstallprompt') as any;
    mockEvent.prompt = mockPrompt;
    mockEvent.userChoice = Promise.resolve({ outcome: 'accepted', platform: 'web' });

    act(() => {
      window.dispatchEvent(mockEvent);
    });

    expect(result.current.isInstallable).toBe(true);

    let outcome: string | undefined;
    await act(async () => {
      outcome = await result.current.promptInstall();
    });

    expect(mockPrompt).toHaveBeenCalled();
    expect(outcome).toBe('accepted');
    expect(result.current.isInstalled).toBe(true);
  });

  it('dismisses banner and remembers dismissal in localStorage', () => {
    const { result } = renderHook(() => usePWAInstall());

    expect(result.current.isDismissed).toBe(false);

    act(() => {
      result.current.dismiss();
    });

    expect(result.current.isDismissed).toBe(true);
    const stored = localStorage.getItem('ielts_talk_pwa_dismissed_until');
    expect(stored).toBeTruthy();
    expect(Number(stored)).toBeGreaterThan(Date.now());
  });
});
