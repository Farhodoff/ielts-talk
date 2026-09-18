/**
 * Type declarations for api/_auth.js (Vercel serverless shared auth helpers).
 */

export interface AuthUser {
  id?: string;
  email?: string;
  role?: string;
  app_metadata?: Record<string, unknown>;
  user_metadata?: Record<string, unknown>;
  [key: string]: unknown;
}

export interface AuthVerifyResult {
  user: AuthUser | null;
  error: string | null;
  status: number;
}

export declare const SUPABASE_ANON_KEY: string;

export declare function getBearerToken(req: unknown): string | null;

export declare function isLegacyTelegramToken(token: unknown): boolean;

export declare function isPrivilegedRole(role: unknown): boolean;

export declare function getUserRole(user: AuthUser | null | undefined): string;

export declare function verifyAuth(req: unknown): Promise<AuthVerifyResult>;
