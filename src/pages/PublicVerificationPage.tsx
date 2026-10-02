import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ShieldCheck,
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
  Printer,
  Sparkles,
  Search,
} from 'lucide-react';
import { TrfCertificateData } from '../services/TrfCertificateService';
import { IeltsFullMockService } from '../services/IeltsFullMockService';

export const PublicVerificationPage: React.FC = () => {
  const { code } = useParams<{ code: string }>();
  const [cert, setCert] = useState<TrfCertificateData | null>(null);
  const [searchedCode, setSearchedCode] = useState(code || '');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (code) {
      const found = IeltsFullMockService.getCertificateByCode(code);
      setCert(found);
    }
    setIsLoading(false);
  }, [code]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchedCode.trim()) return;
    const found = IeltsFullMockService.getCertificateByCode(searchedCode.trim());
    setCert(found);
  };

  const verifyUrl = cert
    ? `${window.location.origin}/verify/${cert.verificationCode}`
    : window.location.href;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 px-4 py-10 sm:px-6">
      <div className="mx-auto max-w-4xl space-y-6">
        {/* Top Branding Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-5">
          <Link to="/" className="group flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-red-600 font-black text-white shadow-lg shadow-red-600/30">
              TRF
            </div>
            <div>
              <span className="text-base font-black tracking-tight text-white transition-colors group-hover:text-red-400">
                IELTS TALK
              </span>
              <span className="block text-[10px] font-bold uppercase tracking-widest text-slate-400">
                Official Verification Portal
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-3">
            <Link
              to="/ielts/full-mock"
              className="inline-flex items-center gap-1.5 rounded-xl bg-blue-600 px-3.5 py-2 text-xs font-bold text-white shadow-md shadow-blue-600/25 transition-all hover:bg-blue-500"
            >
              <Sparkles size={14} />
              <span>Full Mock Topshirish</span>
            </Link>
          </div>
        </div>

        {/* Verification Status Card */}
        {isLoading ? (
          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-12 text-center">
            <div className="mx-auto h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
            <p className="mt-3 text-xs text-slate-400">Tekshiruv kodi tahlil qilinmoqda...</p>
          </div>
        ) : cert ? (
          <div className="space-y-6 duration-200 animate-in fade-in">
            {/* Valid Certificate Hero */}
            <div className="relative overflow-hidden rounded-3xl border border-emerald-500/30 bg-gradient-to-r from-emerald-950/40 via-slate-900/80 to-slate-900/90 p-6 shadow-2xl backdrop-blur-xl sm:p-8">
              <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />

              <div className="relative z-10 flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/15 px-3 py-1 text-xs font-black text-emerald-400">
                    <ShieldCheck size={16} />
                    <span>RASMIY TASDIQLANGAN TEST REPORT FORM (TRF)</span>
                  </div>
                  <h1 className="text-2xl font-black tracking-tight text-white sm:text-3xl">
                    {cert.candidateName}
                  </h1>
                  <p className="text-xs text-slate-300">
                    Ushbu test hisoboti IELTS Talk rasmiy Cambridge baholash tizimi orqali to‘liq
                    tekshirilgan va tasdiqlangan.
                  </p>
                </div>

                {/* Overall Score Stamp */}
                <div className="flex shrink-0 items-center justify-center">
                  <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-red-500 bg-slate-950/90 px-6 py-4 shadow-xl">
                    <span className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                      Overall Band
                    </span>
                    <span className="text-4xl font-black tracking-tight text-red-500">
                      {cert.scores.overall.toFixed(1)}
                    </span>
                    <span className="mt-1 rounded-md bg-red-500/20 px-2 py-0.5 text-[10px] font-bold text-red-300">
                      {cert.scores.cefrLevel.split(' ')[0]} CEFR
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Certificate Details Table */}
            <div className="space-y-6 rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-xl backdrop-blur-md sm:p-8">
              <div className="grid grid-cols-2 gap-4 border-b border-slate-800 pb-6 text-xs sm:grid-cols-4">
                <div className="space-y-1">
                  <span className="block text-[11px] text-slate-400">Nomzod Raqami:</span>
                  <strong className="block font-mono text-sm text-white">
                    {cert.candidateNumber || 'UZ-749201'}
                  </strong>
                </div>
                <div className="space-y-1">
                  <span className="block text-[11px] text-slate-400">Test Sanasi:</span>
                  <strong className="block text-sm text-white">{cert.testDate}</strong>
                </div>
                <div className="space-y-1">
                  <span className="block text-[11px] text-slate-400">Test Turi:</span>
                  <strong className="block text-sm text-white">{cert.testType}</strong>
                </div>
                <div className="space-y-1">
                  <span className="block text-[11px] text-slate-400">Test Markazi:</span>
                  <strong className="block text-sm text-white">UZ088 (IELTS Talk AI)</strong>
                </div>
              </div>

              {/* 4 Skill Score Matrix */}
              <div>
                <h3 className="mb-3 text-xs font-black uppercase tracking-wider text-slate-400">
                  Komponent Ballar Matritsasi (Band Scores)
                </h3>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {[
                    {
                      label: 'Listening',
                      score: cert.scores.listening,
                      color: 'from-blue-600/20 to-blue-950/40 border-blue-500/30 text-blue-400',
                    },
                    {
                      label: 'Reading',
                      score: cert.scores.reading,
                      color:
                        'from-emerald-600/20 to-emerald-950/40 border-emerald-500/30 text-emerald-400',
                    },
                    {
                      label: 'Writing',
                      score: cert.scores.writing,
                      color: 'from-amber-600/20 to-amber-950/40 border-amber-500/30 text-amber-400',
                    },
                    {
                      label: 'Speaking',
                      score: cert.scores.speaking,
                      color:
                        'from-purple-600/20 to-purple-950/40 border-purple-500/30 text-purple-400',
                    },
                  ].map((s, idx) => (
                    <div
                      key={idx}
                      className={`rounded-2xl border bg-gradient-to-br p-4 ${s.color} space-y-1 text-center`}
                    >
                      <span className="block text-[11px] font-bold text-slate-300">{s.label}</span>
                      <span className="block text-2xl font-black text-white">
                        {typeof s.score === 'number' ? s.score.toFixed(1) : '-'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sub-Criteria Breakdown */}
              {cert.subCriteria && cert.subCriteria.length > 0 && (
                <div>
                  <h3 className="mb-3 text-xs font-black uppercase tracking-wider text-slate-400">
                    Batafsil Kriteriyalar Baholanishi (Detailed Criteria Breakdown)
                  </h3>
                  <div className="grid grid-cols-1 gap-2 text-xs sm:grid-cols-2">
                    {cert.subCriteria.map((crit, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/60 p-3"
                      >
                        <span className="font-semibold text-slate-300">{crit.label}</span>
                        <span className="rounded-lg border border-red-800/60 bg-red-950/60 px-2 py-0.5 text-xs font-black text-red-400">
                          {typeof crit.score === 'number' ? crit.score.toFixed(1) : crit.score}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Security Verification & QR Code */}
              <div className="flex flex-col items-center justify-between gap-6 border-t border-slate-800 pt-6 sm:flex-row">
                <div className="flex items-center gap-4">
                  <div className="h-20 w-20 shrink-0 rounded-xl bg-white p-1.5 shadow-md">
                    <img
                      src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(
                        verifyUrl,
                      )}`}
                      alt="Verification QR"
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div className="space-y-1">
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Verifikatsiya Kodi:
                    </span>
                    <strong className="block font-mono text-sm font-black text-white">
                      {cert.verificationCode}
                    </strong>
                    <span className="flex items-center gap-1 text-[10px] text-emerald-400">
                      <CheckCircle2 size={12} /> Raqamli muhr bilan himoyalangan
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => window.print()}
                    className="flex items-center gap-1.5 rounded-xl border border-slate-700 bg-slate-800 px-4 py-2.5 text-xs font-bold text-white shadow-sm transition-all hover:bg-slate-700"
                  >
                    <Printer size={15} /> Chop etish / PDF
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Certificate Not Found State */
          <div className="space-y-6 rounded-3xl border border-slate-800 bg-slate-900/80 p-8 text-center shadow-xl sm:p-12">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-amber-500/30 bg-amber-500/10 text-amber-500">
              <AlertTriangle size={32} />
            </div>

            <div className="mx-auto max-w-md space-y-2">
              <h2 className="text-xl font-black text-white">Sertifikat kodi topilmadi</h2>
              <p className="text-xs text-slate-400">
                Kiritilgan kod ({code || 'kiritilmagan'}) bo‘yicha rasmiy sertifikat mavjud emas
                yoki kod noto‘g‘ri kiritilgan bo‘lishi mumkin.
              </p>
            </div>

            <form onSubmit={handleSearch} className="mx-auto flex max-w-md gap-2">
              <div className="relative flex-1">
                <Search
                  size={16}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                />
                <input
                  type="text"
                  placeholder="Masalan: IT-2026-FMC-XXXXX"
                  value={searchedCode}
                  onChange={(e) => setSearchedCode(e.target.value)}
                  className="focus:outline-hidden w-full rounded-xl border border-slate-700 bg-slate-950 py-2.5 pl-10 pr-3 font-mono text-xs font-bold text-white placeholder-slate-500 focus:border-blue-500"
                />
              </div>
              <button
                type="submit"
                className="rounded-xl bg-blue-600 px-4 py-2.5 text-xs font-bold text-white shadow-md transition-all hover:bg-blue-500"
              >
                Qidirish
              </button>
            </form>

            <div className="border-t border-slate-800 pt-4">
              <Link
                to="/ielts/full-mock"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-400 hover:text-blue-300"
              >
                O‘zingiz Full Mock Imtihon topshiring va sertifikat oling <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
