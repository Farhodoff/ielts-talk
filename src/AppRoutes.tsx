import type { ReactNode } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import PageLoader from './components/PageLoader';
import { isPublicPreviewActive } from './config/previewMode';
import { useAuthStore } from './stores';
import { isUserAdmin } from './utils/admin';
import { lazyWithRetry } from './utils/lazyRetry';

const CalendarPage = lazyWithRetry(() => import('./pages/CalendarPage'));
const DecksPage = lazyWithRetry(() => import('./pages/DecksPage'));
const FlashcardForm = lazyWithRetry(() => import('./pages/FlashcardForm'));
const FocusPage = lazyWithRetry(() => import('./pages/FocusPage'));
const SettingsPage = lazyWithRetry(() => import('./pages/SettingsPage'));
const StudyRoomPage = lazyWithRetry(() => import('./pages/StudyRoomPage'));
const SubjectDetailPage = lazyWithRetry(() => import('./pages/SubjectDetailPage'));
const SubjectsPage = lazyWithRetry(() => import('./pages/SubjectsPage'));
const AdminDashboardPage = lazyWithRetry(() => import('./pages/AdminDashboardPage'));
const SpeakingCoachPage = lazyWithRetry(() => import('./pages/SpeakingCoachPage'));
const IeltsHubPage = lazyWithRetry(() => import('./pages/IeltsHubPage'));
const IeltsSpeakingMockPage = lazyWithRetry(() => import('./pages/IeltsSpeakingMockPage'));
const IeltsFullMockPage = lazyWithRetry(() =>
  import('./pages/IeltsFullMockPage').then((m) => ({ default: m.IeltsFullMockPage })),
);
const PublicVerificationPage = lazyWithRetry(() =>
  import('./pages/PublicVerificationPage').then((m) => ({ default: m.PublicVerificationPage })),
);
const VocabularyBuilderPage = lazyWithRetry(() =>
  import('./pages/VocabularyBuilderPage').then((m) => ({ default: m.VocabularyBuilderPage })),
);
const PricingPage = lazyWithRetry(() =>
  import('./pages/PricingPage').then((m) => ({ default: m.PricingPage })),
);
const ExamsManager = lazyWithRetry(() => import('./pages/admin/ExamsManager'));
const QuestionEditor = lazyWithRetry(() => import('./pages/admin/QuestionEditor'));
const ExamTake = lazyWithRetry(() => import('./pages/exams/ExamTake'));
const DeveloperApiPage = lazyWithRetry(() => import('./pages/DeveloperApiPage'));
const LessonPlayerPage = lazyWithRetry(() => import('./pages/LessonPlayerPage'));
const RoadmapPage = lazyWithRetry(() => import('./pages/RoadmapPage'));
const DiagnosticPage = lazyWithRetry(() =>
  import('./pages/DiagnosticPage').then((m) => ({ default: m.DiagnosticPage })),
);
const PersonalPlanPage = lazyWithRetry(() =>
  import('./pages/PersonalPlanPage').then((m) => ({ default: m.PersonalPlanPage })),
);
const StudyModePage = lazyWithRetry(() => import('./pages/StudyModePage'));
const ScenarioPickerPage = lazyWithRetry(() =>
  import('./pages/ScenarioPickerPage').then((m) => ({ default: m.ScenarioPickerPage })),
);
const ProgressPage = lazyWithRetry(() => import('./pages/ProgressPage'));
const DashboardPage = lazyWithRetry(() => import('./pages/DashboardPage'));
const LandingPage = lazyWithRetry(() => import('./pages/LandingPage'));

function AdminRoute({ children }: { children: ReactNode }) {
  const user = useAuthStore((s) => s.user);
  const loading = useAuthStore((s) => s.loading);
  if (isPublicPreviewActive()) {
    return <>{children}</>;
  }
  // Authorise strictly on the store's user. Reading `study_planner_user_cache`
  // here would let anyone unlock the panel by editing localStorage, and the
  // dashboard additionally re-verifies against the live Supabase session.
  if (loading && !user) {
    return <PageLoader />;
  }
  if (!isUserAdmin(user)) {
    return <Navigate to="/ielts" replace />;
  }
  return <>{children}</>;
}

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/landing" element={<LandingPage />} />
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/ielts" replace />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route
          path="admin"
          element={
            <AdminRoute>
              <AdminDashboardPage />
            </AdminRoute>
          }
        />
        <Route path="roadmap" element={<RoadmapPage />} />
        <Route path="personal-plan" element={<PersonalPlanPage />} />
        <Route path="diagnostic" element={<DiagnosticPage />} />
        <Route path="lesson/:lessonId" element={<LessonPlayerPage />} />
        <Route path="speaking" element={<SpeakingCoachPage />} />
        <Route path="speaking-coach" element={<SpeakingCoachPage />} />
        <Route path="ielts" element={<IeltsHubPage />} />
        <Route path="ielts/grammar" element={<Navigate to="/ielts?tab=grammar" replace />} />
        <Route path="ielts/writing" element={<Navigate to="/ielts?tab=writing" replace />} />
        <Route path="ielts-writing" element={<Navigate to="/ielts?tab=writing" replace />} />
        <Route path="ielts/speaking-mock" element={<IeltsSpeakingMockPage />} />
        <Route path="ielts/full-mock" element={<IeltsFullMockPage />} />
        <Route path="ielts-full-mock" element={<IeltsFullMockPage />} />
        <Route path="verify/:code" element={<PublicVerificationPage />} />
        <Route path="verify" element={<PublicVerificationPage />} />
        <Route
          path="ielts/reading-listening"
          element={<Navigate to="/ielts?tab=reading_listening" replace />}
        />
        {/* JLPT Legacy Routes -> Redirect to IELTS */}
        <Route path="jlpt/*" element={<Navigate to="/ielts" replace />} />
        <Route path="jlpt" element={<Navigate to="/ielts" replace />} />
        <Route path="jlpt-speaking" element={<Navigate to="/speaking-coach?lang=en" replace />} />
        <Route path="jlpt-writing" element={<Navigate to="/ielts?tab=writing" replace />} />
        <Route path="scenarios" element={<ScenarioPickerPage />} />
        <Route path="calendar" element={<CalendarPage />} />
        <Route path="subjects" element={<SubjectsPage />} />
        <Route path="subjects/:id" element={<SubjectDetailPage />} />
        <Route path="plan" element={<Navigate to="/personal-plan" replace />} />
        <Route path="goals" element={<Navigate to="/personal-plan" replace />} />
        <Route path="tasks" element={<Navigate to="/personal-plan" replace />} />
        <Route path="focus" element={<FocusPage />} />
        <Route path="ai" element={<Navigate to="/speaking-coach" replace />} />
        <Route path="flashcards" element={<DecksPage />} />
        <Route path="deck" element={<Navigate to="/flashcards" replace />} />
        <Route path="decks" element={<Navigate to="/flashcards" replace />} />
        <Route path="deck/:id" element={<Navigate to="/flashcards" replace />} />
        <Route path="decks/:id" element={<Navigate to="/flashcards" replace />} />
        <Route path="flashcards/new" element={<FlashcardForm />} />
        <Route path="study-mode" element={<StudyModePage />} />
        <Route path="study-mode/:subjectId" element={<StudyModePage />} />
        <Route path="flashcards/study/:subjectId" element={<StudyModePage />} />
        <Route path="progress" element={<ProgressPage />} />
        <Route path="vocabulary" element={<VocabularyBuilderPage />} />
        <Route path="pricing" element={<PricingPage />} />
        <Route path="room/:roomId" element={<StudyRoomPage />} />
        <Route path="settings" element={<SettingsPage />} />
        <Route path="twa" element={<Navigate to="/ielts" replace />} />
        <Route path="developers" element={<DeveloperApiPage />} />
        <Route path="api-docs" element={<Navigate to="/developers" replace />} />
        <Route
          path="admin/exams"
          element={
            <AdminRoute>
              <ExamsManager />
            </AdminRoute>
          }
        />
        <Route
          path="admin/exams/:id"
          element={
            <AdminRoute>
              <QuestionEditor />
            </AdminRoute>
          }
        />
        <Route path="exams/:id" element={<ExamTake />} />
        <Route path="auth" element={<Navigate to="/ielts" replace />} />
        <Route path="login" element={<Navigate to="/ielts" replace />} />
        <Route path="register" element={<Navigate to="/ielts" replace />} />
        <Route path="signup" element={<Navigate to="/ielts" replace />} />
        <Route path="*" element={<Navigate to="/ielts" replace />} />
      </Route>
    </Routes>
  );
}
