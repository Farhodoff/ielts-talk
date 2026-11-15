import { describe, expect, it } from 'vitest';
import { getPasswordRecoveryRedirect, isPasswordRecoveryLocation } from '../passwordRecovery';

describe('Password recovery URL handling', () => {
  it('keeps reset redirects on the current application origin', () => {
    expect(getPasswordRecoveryRedirect('https://ielts-talk.vercel.app')).toBe(
      'https://ielts-talk.vercel.app/auth/reset-password',
    );
    expect(getPasswordRecoveryRedirect('http://localhost:5173')).toBe(
      'http://localhost:5173/auth/reset-password',
    );
  });

  it('recognizes the dedicated page after Supabase consumes the URL tokens', () => {
    expect(
      isPasswordRecoveryLocation({ pathname: '/auth/reset-password', search: '', hash: '' }),
    ).toBe(true);
    expect(isPasswordRecoveryLocation({ pathname: '/reset-password', search: '', hash: '' })).toBe(
      true,
    );
    expect(
      isPasswordRecoveryLocation({
        pathname: '/',
        search: '',
        hash: '#access_token=test&type=recovery',
      }),
    ).toBe(true);
    expect(isPasswordRecoveryLocation({ pathname: '/', search: '?type=recovery', hash: '' })).toBe(
      true,
    );
    expect(
      isPasswordRecoveryLocation({ pathname: '/', search: '?next=type=recovery', hash: '' }),
    ).toBe(false);
  });
});
