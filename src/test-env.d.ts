import '@testing-library/jest-dom/vitest';

declare global {
  const __APP_BUILD_TIME__: string | number;
  const __APP_VERSION__: string;
}
