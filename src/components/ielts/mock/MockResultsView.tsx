import React, { useState } from 'react';
import { Award, ShieldCheck } from 'lucide-react';
import { FullMockExamResult } from '../../../services/IeltsFullMockService';
import { IeltsTrfCertificateModal } from '../IeltsTrfCertificateModal';

interface MockResultsViewProps {
  examResult: FullMockExamResult;
}

export const MockResultsView: React.FC<MockResultsViewProps> = ({ examResult }) => {
  const [showCertificateModal, setShowCertificateModal] = useState(false);

  return (
    <div className="flex flex-1 flex-col space-y-6 duration-200 animate-in fade-in">
      {/* Celebratory Hero Card */}
      <div className="relative overflow-hidden rounded-3xl border border-emerald-500/30 bg-gradient-to-r from-emerald-950/40 via-slate-900/80 to-slate-900/90 p-6 shadow-2xl backdrop-blur-xl sm:p-8">
        <div className="relative z-10 flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/15 px-3 py-1 text-xs font-black text-emerald-400">
              <Award size={15} />
              <span>IELTS FULL MOCK MUVAFFAQIYATLI YAKUNLANDI</span>
            </div>
            <h2 className="text-2xl font-black tracking-tight text-white sm:text-3xl">
              Tabriklaymiz, {examResult.candidateName}!
            </h2>
            <p className="max-w-lg text-xs text-slate-300">
              Siz 2h 45m davomida to‘liq 4 ta modulni topshirdingiz. Sizning rasmiy Test Report Form
              (TRF) sertifikatingiz tayyorlandi.
            </p>
          </div>

          {/* Score Pill */}
          <div className="flex shrink-0 items-center justify-center">
            <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-red-500 bg-slate-950/90 px-6 py-4 shadow-xl">
              <span className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                Overall Band
              </span>
              <span className="text-4xl font-black tracking-tight text-red-500">
                {examResult.scores.overall.toFixed(1)}
              </span>
              <span className="mt-1 rounded-md bg-red-500/20 px-2 py-0.5 text-[10px] font-bold text-red-300">
                {examResult.scores.cefrLevel.split(' ')[0]} CEFR
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 4 Skill Score Breakdown */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {[
          {
            label: 'Listening',
            score: examResult.scores.listening,
            raw: `${examResult.rawCounts.listeningCorrect} / ${examResult.rawCounts.listeningTotal}`,
            color: 'border-blue-500/30 bg-blue-950/30 text-blue-400',
          },
          {
            label: 'Reading',
            score: examResult.scores.reading,
            raw: `${examResult.rawCounts.readingCorrect} / ${examResult.rawCounts.readingTotal}`,
            color: 'border-emerald-500/30 bg-emerald-950/30 text-emerald-400',
          },
          {
            label: 'Writing',
            score: examResult.scores.writing,
            raw: `T1: ${examResult.writingFeedback.task1Score} | T2: ${examResult.writingFeedback.task2Score}`,
            color: 'border-amber-500/30 bg-amber-950/30 text-amber-400',
          },
          {
            label: 'Speaking',
            score: examResult.scores.speaking,
            raw: `Fluency: ${examResult.speakingFeedback.fluencyCoherence}`,
            color: 'border-purple-500/30 bg-purple-950/30 text-purple-400',
          },
        ].map((s, idx) => (
          <div
            key={idx}
            className={`space-y-1.5 rounded-2xl border bg-slate-900/60 p-4 ${s.color}`}
          >
            <span className="block text-xs font-bold text-slate-300">{s.label}</span>
            <span className="block text-3xl font-black text-white">{s.score.toFixed(1)}</span>
            <span className="block font-mono text-[10px] text-slate-400">{s.raw}</span>
          </div>
        ))}
      </div>

      {/* Action Bar: View Certificate, Verify Online */}
      <div className="flex flex-col items-center justify-between gap-4 rounded-3xl border border-slate-800 bg-slate-900/80 p-6 sm:flex-row">
        <div className="space-y-1 text-center sm:text-left">
          <h4 className="flex items-center justify-center gap-1.5 text-sm font-black text-white sm:justify-start">
            <ShieldCheck size={16} className="text-emerald-400" />
            Rasmiy TRF Sertifikati va QR Kodi
          </h4>
          <p className="text-xs text-slate-400">
            Verifikatsiya kodi:{' '}
            <code className="font-mono font-bold text-white">{examResult.verificationCode}</code>
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href={`/verify/${examResult.verificationCode}`}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-slate-700 bg-slate-800 px-4 py-2.5 text-xs font-bold text-white shadow-sm transition-all hover:bg-slate-700"
          >
            Onlayn Tekshiruv Sahifasi
          </a>
          <button
            type="button"
            onClick={() => setShowCertificateModal(true)}
            className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 px-5 py-2.5 text-xs font-black text-white shadow-lg shadow-red-600/25 transition-all hover:from-red-500 hover:to-rose-500"
          >
            <Award size={15} />
            <span>TRF Sertifikatini Ko‘rish & Yuklab Olish</span>
          </button>
        </div>
      </div>

      {/* Modal Certificate */}
      {showCertificateModal && examResult.certificate && (
        <IeltsTrfCertificateModal
          isOpen={showCertificateModal}
          onClose={() => setShowCertificateModal(false)}
          data={examResult.certificate}
        />
      )}
    </div>
  );
};
