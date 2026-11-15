import { act, render, screen, waitFor, cleanup } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import App from './App';

const mock = vi.hoisted(() => ({
  listener: undefined as undefined | ((event: string, session: unknown) => void),
  session: { access_token: 'test-session', user: { id: 'test-user', email: 'test@example.com' } },
}));

vi.mock('./lib/supabase', () => ({
  supabase: {
    auth: {
      getSession: async () => ({ data: { session: mock.session } }),
      onAuthStateChange: (listener: typeof mock.listener) => {
        mock.listener = listener;
        return { data: { subscription: { unsubscribe: vi.fn() } } };
      },
    },
  },
}));
vi.mock('./config/previewMode', () => ({ isPublicPreviewActive: () => false }));
vi.mock('./utils/telegramAuth', () => ({ isTelegramWebApp: () => false }));
vi.mock('./context/IeltsTalkContext', () => ({
  IeltsTalkProvider: ({ children }: any) => children,
}));
vi.mock('./context/LanguageContext', () => ({ LanguageProvider: ({ children }: any) => children }));
vi.mock('./context/FocusTimerContext', () => ({
  FocusTimerProvider: ({ children }: any) => children,
}));
vi.mock('./pages/AuthPage', () => ({
  default: ({ recovery }: { recovery?: boolean }) => (
    <h1>{recovery ? 'Password recovery form' : 'Login form'}</h1>
  ),
}));
vi.mock('./AppRoutes', () => ({ default: () => <h1>Signed-in dashboard</h1> }));
vi.mock('./components/UnauthRouter', () => ({ default: () => <h1>Guest page</h1> }));
vi.mock('./components/GlobalAudioPlayer', () => ({ default: () => null }));
vi.mock('./components/OfflineIndicator', () => ({ default: () => null }));
vi.mock('./components/pwa/ReloadPrompt', () => ({ default: () => null }));
vi.mock('./components/pwa/InstallPrompt', () => ({ InstallPrompt: () => null }));
vi.mock('./components/pwa/PushNotificationPrompt', () => ({ PushNotificationPrompt: () => null }));
vi.mock('./components/ui/toaster', () => ({ Toaster: () => null }));

beforeEach(() => {
  localStorage.clear();
  window.history.replaceState({}, '', '/');
  mock.listener = undefined;
});
afterEach(() => {
  cleanup();
  window.history.replaceState({}, '', '/');
});

describe('Password recovery survives authentication', () => {
  it('keeps the recovery form when the recovery link has already created a session', async () => {
    window.history.replaceState({}, '', '/auth/reset-password');
    render(<App />);
    expect(await screen.findByText('Password recovery form')).toBeInTheDocument();
    await waitFor(() => expect(mock.listener).toBeDefined());
    expect(screen.queryByText('Signed-in dashboard')).not.toBeInTheDocument();
  });

  it('switches to recovery on the PASSWORD_RECOVERY event after URL cleanup', async () => {
    render(<App />);
    expect(await screen.findByText('Signed-in dashboard')).toBeInTheDocument();
    act(() => {
      mock.listener?.('PASSWORD_RECOVERY', mock.session);
    });
    expect(await screen.findByText('Password recovery form')).toBeInTheDocument();
    expect(screen.queryByText('Signed-in dashboard')).not.toBeInTheDocument();
  });
});
