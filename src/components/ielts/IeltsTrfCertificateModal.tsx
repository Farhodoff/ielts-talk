import React, { useRef, useState, useEffect } from 'react';
import {
  Download,
  Printer,
  Image,
  X,
  ShieldCheck,
  User,
  Sparkles,
  BookOpen,
  TrendingUp,
  Award,
} from 'lucide-react';
import {
  TrfCertificateData,
  TrfCertificateService,
  LearnerDiagnostics,
} from '../../services/TrfCertificateService';
import { useStudyData } from '../../context/StudyPlannerContext';

interface IeltsTrfCertificateModalProps {
  data: TrfCertificateData;
  isOpen: boolean;
  onClose: () => void;
}

export const IeltsTrfCertificateModal: React.FC<IeltsTrfCertificateModalProps> = ({
  data,
  isOpen,
  onClose,
}) => {
  const { user } = useStudyData();
  const certificateRef = useRef<HTMLDivElement>(null);
  const [candidateName, setCandidateName] = useState(data.candidateName || 'IELTS Candidate');
  const [isExporting, setIsExporting] = useState(false);
  const [includeDiagnostics, setIncludeDiagnostics] = useState(true);
  const [diagnostics, setDiagnostics] = useState<LearnerDiagnostics | null>(
    data.learnerDiagnostics || null,
  );

  // Automatically fetch diagnostics from relational PostgreSQL tables if not provided
  useEffect(() => {
    if (isOpen && !data.learnerDiagnostics) {
      TrfCertificateService.fetchLearnerDiagnostics(user?.id)
        .then((diag) => {
          setDiagnostics(diag);
        })
        .catch((err) => {
          console.warn('[IeltsTrfCertificateModal] Error loading diagnostics:', err);
        });
    } else if (data.learnerDiagnostics) {
      setDiagnostics(data.learnerDiagnostics);
    }
  }, [isOpen, data.learnerDiagnostics, user?.id]);

  if (!isOpen) return null;

  const handleDownloadPdf = async () => {
    if (!certificateRef.current) return;
    setIsExporting(true);
    try {
      const filename = `IELTS_TRF_${candidateName.replace(/\s+/g, '_')}_${data.module}.pdf`;
      await TrfCertificateService.exportToPdf(certificateRef.current, filename);
    } catch (err) {
      console.error(err);
    } finally {
      setIsExporting(false);
    }
  };

  const handleDownloadPng = async () => {
    if (!certificateRef.current) return;
    setIsExporting(true);
    try {
      const filename = `IELTS_TRF_${candidateName.replace(/\s+/g, '_')}_${data.module}.png`;
      await TrfCertificateService.exportToImage(certificateRef.current, filename);
    } catch (err) {
      console.error(err);
    } finally {
      setIsExporting(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/80 p-3 backdrop-blur-md">
      <div className="relative flex max-h-[96vh] w-full max-w-4xl flex-col rounded-3xl border border-border bg-card shadow-2xl">
        {/* Modal Toolbar Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 rounded-t-3xl border-b border-border bg-muted/40 p-4">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-red-600 text-xs font-black text-white">
              TRF
            </div>
            <div>
              <h3 className="flex items-center gap-1.5 text-sm font-black text-foreground">
                Rasmiy IELTS Test Report Form (Sertifikat)
                <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] font-bold text-emerald-500">
                  Tasdiqlangan
                </span>
              </h3>
              <p className="text-[11px] text-muted-foreground">
                Ismingizni tahrirlashingiz va PDF yoki rasm shaklida yuklab olishingiz mumkin.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownloadPdf}
              disabled={isExporting}
              className="flex items-center gap-1.5 rounded-xl bg-red-600 px-3.5 py-2 text-xs font-black text-white shadow-md transition-all hover:bg-red-700 disabled:opacity-50"
            >
              <Download size={14} />
              <span>{isExporting ? 'Yuklanmoqda...' : 'PDF Yuklab Olish'}</span>
            </button>

            <button
              onClick={handleDownloadPng}
              disabled={isExporting}
              className="flex items-center gap-1.5 rounded-xl border border-border bg-card px-3 py-2 text-xs font-bold text-foreground transition-all hover:bg-muted"
              title="Ijtimoiy tarmoqlar uchun PNG rasm"
            >
              <Image size={14} />
              <span className="hidden sm:inline">PNG Rasm</span>
            </button>

            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 rounded-xl border border-border bg-card px-3 py-2 text-xs font-bold text-foreground transition-all hover:bg-muted"
            >
              <Printer size={14} />
            </button>

            <button
              onClick={onClose}
              className="rounded-xl p-2 text-muted-foreground transition-all hover:bg-muted hover:text-foreground"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Candidate Name Input Control & Diagnostics Toggle */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/60 bg-muted/20 px-4 py-2.5 text-xs">
          <div className="flex min-w-[240px] flex-1 items-center gap-3">
            <span className="flex shrink-0 items-center gap-1 font-bold text-muted-foreground">
              <User size={14} /> Sertifikatdagi Ism-familiya:
            </span>
            <input
              type="text"
              value={candidateName}
              onChange={(e) => setCandidateName(e.target.value)}
              placeholder="F.I.SH kiriting..."
              className="max-w-sm flex-1 rounded-lg border border-border bg-card px-3 py-1 text-xs font-bold text-foreground focus:outline-none focus:ring-1 focus:ring-red-500"
            />
          </div>

          <button
            type="button"
            onClick={() => setIncludeDiagnostics(!includeDiagnostics)}
            className={`flex items-center gap-1.5 rounded-xl border px-3 py-1.5 text-xs font-bold transition-all ${
              includeDiagnostics
                ? 'border-indigo-500/40 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400'
                : 'border-border bg-card text-muted-foreground hover:bg-muted'
            }`}
            title="Kundalik tahlillar va lug'at portfoliyosini sertifikatga qo'shish"
          >
            <Sparkles
              size={13}
              className={includeDiagnostics ? 'text-indigo-500' : 'text-muted-foreground'}
            />
            <span>Diagnostika Ilovasi: {includeDiagnostics ? "Qo'shilgan" : "O'chiq"}</span>
          </button>
        </div>

        {/* Certificate Viewable & Printable Container */}
        <div className="flex justify-center overflow-y-auto bg-neutral-900/50 p-4 sm:p-6">
          <div
            ref={certificateRef}
            id="ielts-trf-printable"
            className="relative w-full max-w-[780px] rounded-xl border-4 border-[#0f172a]/10 bg-[#ffffff] p-6 font-sans text-[#1e293b] shadow-2xl sm:p-8"
            style={{ minHeight: '900px' }}
          >
            {/* Authentic Security Watermark Background */}
            <div className="pointer-events-none absolute inset-0 flex select-none items-center justify-center text-[130px] font-black tracking-tighter text-[#000000] opacity-[0.03]">
              IELTS
            </div>

            {/* Top Official Header */}
            <div className="flex flex-col items-start justify-between gap-4 border-b-2 border-red-600 pb-4 sm:flex-row sm:items-center">
              <div className="flex items-center gap-3">
                <div className="rounded bg-red-600 px-3 py-1 text-2xl font-black tracking-tighter text-white">
                  IELTS
                </div>
                <div>
                  <h1 className="text-xs font-black uppercase tracking-wider text-slate-800">
                    International English Language Testing System
                  </h1>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-red-600">
                    Test Report Form (TRF)
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-end text-right">
                <span className="inline-block rounded border border-slate-300 bg-slate-100 px-2 py-0.5 text-[10px] font-extrabold text-slate-800">
                  {data.testType.toUpperCase()}
                </span>
                <span className="mt-1 font-mono text-[9px] text-slate-500">
                  Centre: UZ042 · Candidate: {data.candidateNumber || 'UZ-202684'}
                </span>
              </div>
            </div>

            {/* Candidate Details Table */}
            <div className="mt-5 grid grid-cols-1 gap-3 rounded-lg border border-slate-200 bg-slate-50 p-4 text-xs sm:grid-cols-2">
              <div>
                <span className="block text-[10px] font-bold uppercase text-slate-500">
                  Candidate Name:
                </span>
                <span className="text-sm font-black text-slate-900">{candidateName}</span>
              </div>
              <div>
                <span className="block text-[10px] font-bold uppercase text-slate-500">
                  Date of Examination:
                </span>
                <span className="font-bold text-slate-800">{data.testDate}</span>
              </div>
              <div>
                <span className="block text-[10px] font-bold uppercase text-slate-500">
                  Examination Module:
                </span>
                <span className="font-extrabold text-red-600">{data.module} Examination</span>
              </div>
              <div>
                <span className="block text-[10px] font-bold uppercase text-slate-500">
                  Verification Code:
                </span>
                <span className="font-mono font-bold text-slate-800">{data.verificationCode}</span>
              </div>
            </div>

            {/* Main Band Score Display Grid */}
            <div className="mt-6 rounded-xl border-2 border-slate-800 bg-gradient-to-br from-white to-slate-50 p-5">
              <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                {/* 4 Skill Scores */}
                <div className="grid w-full flex-1 grid-cols-4 gap-2.5 text-center">
                  <div className="rounded-lg border border-slate-200 bg-white p-3 shadow-xs">
                    <span className="block text-[10px] font-bold uppercase text-slate-500">
                      Listening
                    </span>
                    <span className="text-lg font-black text-slate-800">
                      {data.scores.listening !== undefined ? data.scores.listening.toFixed(1) : '—'}
                    </span>
                  </div>

                  <div className="rounded-lg border border-slate-200 bg-white p-3 shadow-xs">
                    <span className="block text-[10px] font-bold uppercase text-slate-500">
                      Reading
                    </span>
                    <span className="text-lg font-black text-slate-800">
                      {data.scores.reading !== undefined ? data.scores.reading.toFixed(1) : '—'}
                    </span>
                  </div>

                  <div className="rounded-lg border border-slate-200 bg-white p-3 shadow-xs">
                    <span className="block text-[10px] font-bold uppercase text-slate-500">
                      Writing
                    </span>
                    <span className="text-lg font-black text-slate-800">
                      {data.scores.writing !== undefined ? data.scores.writing.toFixed(1) : '—'}
                    </span>
                  </div>

                  <div className="rounded-lg border border-slate-200 bg-white p-3 shadow-xs">
                    <span className="block text-[10px] font-bold uppercase text-slate-500">
                      Speaking
                    </span>
                    <span className="text-lg font-black text-slate-800">
                      {data.scores.speaking !== undefined ? data.scores.speaking.toFixed(1) : '—'}
                    </span>
                  </div>
                </div>

                {/* Overall Band Box */}
                <div className="min-w-[170px] rounded-xl border-2 border-red-600 bg-red-50 p-4 text-center shadow-sm">
                  <span className="block text-[10px] font-black uppercase tracking-wider text-red-600">
                    Overall Band Score
                  </span>
                  <span className="mt-0.5 block text-4xl font-black text-red-600">
                    {data.scores.overall.toFixed(1)}
                  </span>
                  <span className="mt-1 inline-block rounded bg-red-600 px-2 py-0.5 text-[10px] font-bold text-white">
                    CEFR: {data.scores.cefrLevel.split(' ')[0]}
                  </span>
                </div>
              </div>

              {/* CEFR Descriptor */}
              <div className="mt-4 flex items-center justify-between border-t border-slate-200 pt-3 text-xs">
                <span className="font-medium text-slate-600">CEFR Equivalency Description:</span>
                <span className="font-extrabold text-slate-900">{data.scores.cefrLevel}</span>
              </div>
            </div>

            {/* Criteria Breakdown (Sub-scores) */}
            {data.subCriteria && data.subCriteria.length > 0 && (
              <div className="mt-6">
                <h4 className="mb-2.5 text-[11px] font-black uppercase tracking-wider text-slate-700">
                  Detailed Criteria Assessment Breakdown
                </h4>
                <div className="grid grid-cols-1 gap-2 text-xs sm:grid-cols-2">
                  {data.subCriteria.map((crit, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between rounded-lg border border-slate-200 bg-slate-50/70 p-2.5"
                    >
                      <span className="font-bold text-slate-700">{crit.label}:</span>
                      <span className="rounded border border-slate-200 bg-white px-2 py-0.5 font-black text-red-600">
                        {typeof crit.score === 'number' ? crit.score.toFixed(1) : crit.score}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Examiner Commentary */}
            {data.examinerNotes && (
              <div className="mt-5 rounded-lg border border-slate-200 bg-slate-50 p-3.5 text-xs leading-relaxed">
                <span className="mb-1 block text-[10px] font-black uppercase text-slate-500">
                  Examiner Feedback & Analysis Summary:
                </span>
                <p className="italic text-slate-700">"{data.examinerNotes}"</p>
              </div>
            )}

            {/* Section C: Candidate Diagnostic & Learning Progression Appendix */}
            {includeDiagnostics &&
              diagnostics &&
              (diagnostics.totalReflections > 0 ||
                diagnostics.totalVocabSearched > 0 ||
                diagnostics.totalSignals > 0) && (
                <div className="mt-6 rounded-xl border-2 border-dashed border-indigo-200 bg-gradient-to-br from-indigo-50/40 via-white to-slate-50 p-4">
                  <div className="mb-3 flex items-center justify-between border-b border-indigo-100 pb-2">
                    <div className="flex items-center gap-2">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-indigo-600 text-[10px] font-black text-white">
                        §
                      </span>
                      <h4 className="text-[11px] font-black uppercase tracking-wider text-indigo-950">
                        Section C: Verified Candidate Diagnostic & Progression Appendix
                      </h4>
                    </div>
                    <span className="rounded-full bg-indigo-100 px-2 py-0.5 text-[9px] font-bold text-indigo-700">
                      Relational Database Portfolio Audit
                    </span>
                  </div>

                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                    {/* Lexical Resource Audit */}
                    <div className="shadow-2xs rounded-lg border border-slate-200 bg-white p-3">
                      <div className="flex items-center gap-1.5 text-slate-800">
                        <BookOpen size={13} className="text-indigo-600" />
                        <span className="text-[10px] font-black uppercase tracking-wider">
                          Lexical Resource Audit
                        </span>
                      </div>
                      <div className="mt-2 flex items-baseline gap-1.5">
                        <span className="text-xl font-black text-slate-900">
                          {diagnostics.totalVocabSearched}
                        </span>
                        <span className="text-[10px] font-medium text-slate-500">
                          so'z o'rganilgan
                        </span>
                      </div>
                      {diagnostics.advancedWords.length > 0 && (
                        <div className="mt-2 space-y-1">
                          <span className="block text-[8px] font-bold uppercase text-slate-400">
                            Academic C1/C2 Collocations:
                          </span>
                          <div className="flex flex-wrap gap-1">
                            {diagnostics.advancedWords.slice(0, 4).map((w, i) => (
                              <span
                                key={i}
                                className="inline-flex items-center gap-1 rounded border border-indigo-100 bg-indigo-50 px-1.5 py-0.5 text-[9px] font-bold text-indigo-700"
                                title={w.translation || w.word}
                              >
                                <span>{w.word}</span>
                                <span className="text-[8px] opacity-75">({w.level})</span>
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Reflective Practice & Study Consistency */}
                    <div className="shadow-2xs rounded-lg border border-slate-200 bg-white p-3">
                      <div className="flex items-center gap-1.5 text-slate-800">
                        <TrendingUp size={13} className="text-emerald-600" />
                        <span className="text-[10px] font-black uppercase tracking-wider">
                          Task Persistence & Discipline
                        </span>
                      </div>
                      <div className="mt-2 flex items-baseline gap-1.5">
                        <span className="text-xl font-black text-emerald-600">
                          {diagnostics.averageReflectionScore > 0
                            ? `${diagnostics.averageReflectionScore}%`
                            : '100%'}
                        </span>
                        <span className="text-[10px] font-medium text-slate-500">
                          intizom indeksi
                        </span>
                      </div>
                      <p className="mt-1 text-[9px] text-slate-600">
                        {diagnostics.totalReflections > 0
                          ? `${diagnostics.totalReflections} kunlik tahlil qaydlari tasdiqlangan`
                          : "Kundalik o'z-o'zini tahlil qilish moduli faol"}
                      </p>
                      {diagnostics.recentStrengths.length > 0 && (
                        <div className="mt-2 flex flex-wrap gap-1">
                          {diagnostics.recentStrengths.slice(0, 3).map((st, i) => (
                            <span
                              key={i}
                              className="rounded border border-emerald-100 bg-emerald-50 px-1.5 py-0.5 text-[8px] font-bold text-emerald-700"
                            >
                              ✓ {st}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Verified Strengths & Recommended Growth */}
                    <div className="shadow-2xs rounded-lg border border-slate-200 bg-white p-3">
                      <div className="flex items-center gap-1.5 text-slate-800">
                        <Award size={13} className="text-amber-600" />
                        <span className="text-[10px] font-black uppercase tracking-wider">
                          Signals & Mastery Areas
                        </span>
                      </div>
                      <div className="mt-2 flex items-baseline gap-1.5">
                        <span className="text-xl font-black text-amber-600">
                          {diagnostics.totalSignals}
                        </span>
                        <span className="text-[10px] font-medium text-slate-500">
                          o'quv signali
                        </span>
                      </div>
                      {diagnostics.topSkills.length > 0 ? (
                        <div className="mt-1">
                          <span className="block text-[8px] font-bold uppercase text-slate-400">
                            Yetakchi ko'nikmalar:
                          </span>
                          <span className="text-[9px] font-bold text-slate-700">
                            {diagnostics.topSkills.join(', ')}
                          </span>
                        </div>
                      ) : (
                        <p className="mt-1 text-[9px] text-slate-500">
                          IELTS Standart 4-skill tekshiruvi yakunlangan.
                        </p>
                      )}
                      {diagnostics.growthAreas.length > 0 && (
                        <div className="mt-1.5">
                          <span className="block text-[8px] font-bold uppercase text-slate-400">
                            Tavsiya etilgan diqqat:
                          </span>
                          <span className="block truncate text-[9px] font-medium text-slate-600">
                            {diagnostics.growthAreas.slice(0, 2).join(', ')}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {diagnostics.latestReflectionNotes && (
                    <div className="mt-2.5 rounded border border-indigo-100 bg-indigo-50/50 p-2 text-[9px] leading-relaxed text-indigo-900">
                      <span className="font-bold">Pedagogik tahlil qaydi: </span>
                      <span className="italic">"{diagnostics.latestReflectionNotes}"</span>
                    </div>
                  )}
                </div>
              )}

            {/* Official Stamps, Verification & Signatures */}
            <div className="mt-8 flex flex-col items-center justify-between gap-6 border-t-2 border-slate-200 pt-6 sm:flex-row">
              {/* Circular Certified Stamp */}
              <div className="flex items-center gap-3">
                <div className="flex h-16 w-16 rotate-[-8deg] items-center justify-center rounded-full border-2 border-red-600/80 p-1 text-center shadow-xs">
                  <div className="flex h-full w-full flex-col items-center justify-center rounded-full border border-dashed border-red-600 text-[7px] font-black uppercase leading-tight text-red-600">
                    <span>IELTS TALK</span>
                    <span className="text-[9px]">★</span>
                    <span>VERIFIED AI</span>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-1 text-[11px] font-black text-slate-800">
                    <ShieldCheck size={14} className="text-emerald-600" />
                    Authentic AI Assessment
                  </div>
                  <p className="mt-0.5 max-w-[200px] text-[9px] leading-tight text-slate-500">
                    Validated by IELTS Talk Cambridge Assessment Protocol.
                  </p>
                </div>
              </div>

              {/* QR Code for Public Online Verification */}
              <div className="flex items-center gap-2.5 rounded-xl border border-slate-200 bg-slate-50 p-2">
                <img
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=90x90&data=${encodeURIComponent(
                    `${typeof window !== 'undefined' ? window.location.origin : ''}/verify/${data.verificationCode}`,
                  )}`}
                  alt="QR Code"
                  className="h-12 w-12 rounded-sm border border-slate-300"
                />
                <div className="text-left">
                  <span className="block text-[8px] font-bold uppercase text-slate-400">
                    Scan to Verify Online
                  </span>
                  <a
                    href={`/verify/${data.verificationCode}`}
                    target="_blank"
                    rel="noreferrer"
                    className="block font-mono text-[10px] font-bold text-blue-600 hover:underline"
                  >
                    /verify/{data.verificationCode.slice(-6)}
                  </a>
                </div>
              </div>

              {/* Signatures & Issue Date */}
              <div className="text-center text-xs sm:text-right">
                <div className="inline-block border-b border-slate-400 px-4 pb-1 font-serif text-base font-bold italic text-slate-800">
                  Dr. Richard Henderson
                </div>
                <span className="mt-1 block text-[9px] font-bold uppercase text-slate-500">
                  Administrator / Lead AI Evaluator
                </span>
                <span className="block font-mono text-[9px] text-slate-400">
                  TRF No: {data.verificationCode}
                </span>
              </div>
            </div>

            {/* Bottom Disclaimer */}
            <div className="mt-6 border-t border-slate-100 pt-3 text-center text-[8px] leading-relaxed text-slate-400">
              This Test Report Form is issued by IELTS Talk for mock examination and diagnostic
              benchmarking purposes based on the IELTS 9-band scale. © {new Date().getFullYear()}{' '}
              IELTS Talk AI. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
