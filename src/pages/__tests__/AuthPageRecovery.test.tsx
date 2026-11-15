import { fireEvent, render, screen, waitFor, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { beforeEach, afterEach, describe, expect, it, vi } from 'vitest';
import AuthPage from '../AuthPage';
import { supabase } from '../../lib/supabase';

vi.mock('../../lib/supabase', () => ({
  supabase: {
    auth: {
      getSession: vi
        .fn()
        .mockResolvedValue({ data: { session: { access_token: 'test' } }, error: null }),
      updateUser: vi.fn().mockResolvedValue({ error: null }),
    },
  },
}));

beforeEach(() => {
  vi.clearAllMocks();
});
afterEach(cleanup);

function renderRecovery() {
  render(
    <MemoryRouter initialEntries={['/auth/reset-password']}>
      <AuthPage recovery />
    </MemoryRouter>,
  );
}

describe('Actual password recovery form', () => {
  it('shows confirmation and submits matching test passwords', async () => {
    renderRecovery();
    const password = screen.getByPlaceholderText('Parolingizni kiriting');
    const confirmation = screen.getByPlaceholderText('Parolingizni qayta kiriting');
    await waitFor(() => expect(confirmation).toBeVisible());
    fireEvent.change(password, { target: { value: 'Example-test-123!' } });
    fireEvent.change(confirmation, { target: { value: 'Example-test-123!' } });
    await waitFor(() =>
      expect(screen.getByRole('button', { name: 'Parolni yangilash' })).toBeEnabled(),
    );
    fireEvent.click(screen.getByRole('button', { name: 'Parolni yangilash' }));
    await waitFor(() =>
      expect(supabase.auth.updateUser).toHaveBeenCalledWith({ password: 'Example-test-123!' }),
    );
    expect(await screen.findByText('Parol yangilandi!')).toBeInTheDocument();
  });

  it('keeps mismatched passwords out of the authentication API', async () => {
    renderRecovery();
    fireEvent.change(screen.getByPlaceholderText('Parolingizni kiriting'), {
      target: { value: 'Example-test-123!' },
    });
    fireEvent.change(screen.getByPlaceholderText('Parolingizni qayta kiriting'), {
      target: { value: 'Different-test-456!' },
    });
    await waitFor(() =>
      expect(screen.getByRole('button', { name: 'Parolni yangilash' })).toBeEnabled(),
    );
    fireEvent.click(screen.getByRole('button', { name: 'Parolni yangilash' }));
    expect(screen.getByText('Kiritilgan parollar bir-biriga mos kelmadi')).toBeInTheDocument();
    expect(supabase.auth.updateUser).not.toHaveBeenCalled();
  });
});
