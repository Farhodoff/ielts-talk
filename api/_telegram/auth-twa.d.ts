/**
 * Type declarations for api/_telegram/auth-twa.js (Telegram Mini App auth endpoint).
 */

export interface TelegramWebAppUser {
  id: number;
  first_name?: string;
  last_name?: string;
  username?: string;
  photo_url?: string;
}

export interface TelegramInitDataVerification {
  valid: boolean;
  user: TelegramWebAppUser | null;
  authDate?: number;
  reason?: string;
}

export interface TelegramIdentity {
  telegramId: number;
  email: string;
  role: string;
  fullName: string;
}

export interface TwaAuthRequestBody {
  initData?: string;
  mockUser?: TelegramWebAppUser;
}

export interface TwaAuthRequest {
  method?: string;
  body?: TwaAuthRequestBody;
}

export interface TwaAuthResponse {
  setHeader(name: string, value: string): unknown;
  status(code: number): {
    json(data: unknown): unknown;
    end(): unknown;
  };
}

export declare function verifyTelegramWebAppData(
  initData: string,
  botToken: string,
): TelegramInitDataVerification;

export declare function isInitDataFresh(
  authDate: number | null | undefined,
  maxAgeSeconds?: number,
): boolean;

export declare function isMockTelegramUserAllowed(): boolean;

export declare function resolveTelegramIdentity(
  tgUser: Partial<TelegramWebAppUser> | null | undefined,
): TelegramIdentity;

export declare function handler(req: TwaAuthRequest, res: TwaAuthResponse): Promise<void>;

export default handler;
