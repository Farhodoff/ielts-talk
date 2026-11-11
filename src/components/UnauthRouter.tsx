import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';

// Lazy load auth related and public pages
const AuthPage = lazy(() => import('../pages/AuthPage'));
const LandingPage = lazy(() => import('../pages/LandingPage'));
const DeveloperApiPage = lazy(() => import('../pages/DeveloperApiPage'));
const PricingPage = lazy(() =>
  import('../pages/PricingPage').then((m) => ({ default: m.PricingPage })),
);
const IeltsHubPage = lazy(() => import('../pages/IeltsHubPage'));
const SpeakingCoachPage = lazy(() => import('../pages/SpeakingCoachPage'));
const PublicVerificationPage = lazy(() =>
  import('../pages/PublicVerificationPage').then((m) => ({ default: m.PublicVerificationPage })),
);

/**
 * Router used when the user is not authenticated.
 * It provides public access to indexable educational pages for search engines and guests.
 */
export const UnauthRouter: React.FC = () => (
  <BrowserRouter>
    <Suspense
      fallback={
        <div className="flex h-screen items-center justify-center bg-background text-foreground">
          Yuklanmoqda...
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/twa" element={<Navigate to="/ielts" replace />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/ielts" element={<IeltsHubPage />} />
        <Route path="/jlpt/*" element={<Navigate to="/ielts" replace />} />
        <Route path="/jlpt" element={<Navigate to="/ielts" replace />} />
        <Route path="/speaking" element={<SpeakingCoachPage />} />
        <Route path="/speaking-coach" element={<SpeakingCoachPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/auth/reset-password" element={<AuthPage />} />
        <Route path="/reset-password" element={<AuthPage />} />
        <Route path="/login" element={<AuthPage />} />
        <Route path="/register" element={<AuthPage />} />
        <Route path="/signup" element={<AuthPage />} />
        <Route path="/admin/login" element={<AuthPage />} />
        <Route path="/admin" element={<AuthPage />} />
        <Route path="/developers" element={<DeveloperApiPage />} />
        <Route path="/api-docs" element={<Navigate to="/developers" replace />} />
        <Route path="/verify/:code" element={<PublicVerificationPage />} />
        <Route path="/verify" element={<PublicVerificationPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);

export default UnauthRouter;
