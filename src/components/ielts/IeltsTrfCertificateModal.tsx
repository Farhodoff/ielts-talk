import React, { useRef, useState } from 'react';
import { Download, Printer, Image, X, ShieldCheck, User } from 'lucide-react';
import { TrfCertificateData, TrfCertificateService } from '../../services/TrfCertificateService';

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
  const certificateRef = useRef<HTMLDivElement>(null);
  const [candidateName, setCandidateName] = useState(data.candidateName || 'IELTS Candidate');
  const [isExporting, setIsExporting] = useState(false);

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
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border p-4 bg-muted/40 rounded-t-3xl">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-red-600 text-white font-black text-xs">
              TRF
            </div>
            <div>
              <h3 className="text-sm font-black text-foreground flex items-center gap-1.5">
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

        {/* Candidate Name Input Control */}
        <div className="flex items-center gap-3 border-b border-border/60 bg-muted/20 px-4 py-2 text-xs">
          <span className="flex items-center gap-1 font-bold text-muted-foreground shrink-0">
            <User size={14} /> Sertifikatdagi Ism-familiya:
          </span>
          <input
            type="text"
            value={candidateName}
            onChange={(e) => setCandidateName(e.target.value)}
            placeholder="F.I.SH kiriting..."
            className="flex-1 rounded-lg border border-border bg-card px-3 py-1 text-xs font-bold text-foreground focus:outline-none focus:ring-1 focus:ring-red-500"
          />
        </div>

        {/* Certificate Viewable & Printable Container */}
        <div className="overflow-y-auto p-4 sm:p-6 bg-neutral-900/50 flex justify-center">
          <div
            ref={certificateRef}
            id="ielts-trf-printable"
            className="relative w-full max-w-[780px] bg-[#ffffff] text-[#1e293b] p-6 sm:p-8 rounded-xl shadow-2xl border-4 border-[#0f172a]/10 font-sans"
            style={{ minHeight: '900px' }}
          >
            {/* Authentic Security Watermark Background */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.03] select-none text-[130px] font-black tracking-tighter text-[#000000]">
              IELTS
            </div>

            {/* Top Official Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b-2 border-red-600 pb-4 gap-4">
              <div className="flex items-center gap-3">
                <div className="bg-red-600 text-white px-3 py-1 font-black text-2xl tracking-tighter rounded">
                  IELTS
                </div>
                <div>
                  <h1 className="text-xs font-black tracking-wider uppercase text-slate-800">
                    International English Language Testing System
                  </h1>
                  <p className="text-[10px] font-bold text-red-600 uppercase tracking-widest">
                    Test Report Form (TRF)
                  </p>
                </div>
              </div>

              <div className="text-right flex flex-col items-end">
                <span className="inline-block rounded border border-slate-300 bg-slate-100 px-2 py-0.5 text-[10px] font-extrabold text-slate-800">
                  {data.testType.toUpperCase()}
                </span>
                <span className="text-[9px] text-slate-500 font-mono mt-1">
                  Centre: UZ042 · Candidate: {data.candidateNumber || 'UZ-202684'}
                </span>
              </div>
            </div>

            {/* Candidate Details Table */}
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3 bg-slate-50 p-4 rounded-lg border border-slate-200 text-xs">
              <div>
                <span className="block text-[10px] font-bold text-slate-500 uppercase">Candidate Name:</span>
                <span className="text-sm font-black text-slate-900">{candidateName}</span>
              </div>
              <div>
                <span className="block text-[10px] font-bold text-slate-500 uppercase">Date of Examination:</span>
                <span className="font-bold text-slate-800">{data.testDate}</span>
              </div>
              <div>
                <span className="block text-[10px] font-bold text-slate-500 uppercase">Examination Module:</span>
                <span className="font-extrabold text-red-600">{data.module} Examination</span>
              </div>
              <div>
                <span className="block text-[10px] font-bold text-slate-500 uppercase">Verification Code:</span>
                <span className="font-mono font-bold text-slate-800">{data.verificationCode}</span>
              </div>
            </div>

            {/* Main Band Score Display Grid */}
            <div className="mt-6 border-2 border-slate-800 rounded-xl p-5 bg-gradient-to-br from-white to-slate-50">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                {/* 4 Skill Scores */}
                <div className="grid grid-cols-4 gap-2.5 flex-1 w-full text-center">
                  <div className="border border-slate-200 p-3 rounded-lg bg-white shadow-xs">
                    <span className="block text-[10px] font-bold text-slate-500 uppercase">Listening</span>
                    <span className="text-lg font-black text-slate-800">
                      {data.scores.listening !== undefined ? data.scores.listening.toFixed(1) : '—'}
                    </span>
                  </div>

                  <div className="border border-slate-200 p-3 rounded-lg bg-white shadow-xs">
                    <span className="block text-[10px] font-bold text-slate-500 uppercase">Reading</span>
                    <span className="text-lg font-black text-slate-800">
                      {data.scores.reading !== undefined ? data.scores.reading.toFixed(1) : '—'}
                    </span>
                  </div>

                  <div className="border border-slate-200 p-3 rounded-lg bg-white shadow-xs">
                    <span className="block text-[10px] font-bold text-slate-500 uppercase">Writing</span>
                    <span className="text-lg font-black text-slate-800">
                      {data.scores.writing !== undefined ? data.scores.writing.toFixed(1) : '—'}
                    </span>
                  </div>

                  <div className="border border-slate-200 p-3 rounded-lg bg-white shadow-xs">
                    <span className="block text-[10px] font-bold text-slate-500 uppercase">Speaking</span>
                    <span className="text-lg font-black text-slate-800">
                      {data.scores.speaking !== undefined ? data.scores.speaking.toFixed(1) : '—'}
                    </span>
                  </div>
                </div>

                {/* Overall Band Box */}
                <div className="border-2 border-red-600 bg-red-50 p-4 rounded-xl text-center min-w-[170px] shadow-sm">
                  <span className="block text-[10px] font-black uppercase text-red-600 tracking-wider">
                    Overall Band Score
                  </span>
                  <span className="text-4xl font-black text-red-600 block mt-0.5">
                    {data.scores.overall.toFixed(1)}
                  </span>
                  <span className="inline-block mt-1 bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                    CEFR: {data.scores.cefrLevel.split(' ')[0]}
                  </span>
                </div>
              </div>

              {/* CEFR Descriptor */}
              <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between text-xs">
                <span className="text-slate-600 font-medium">
                  CEFR Equivalency Description:
                </span>
                <span className="font-extrabold text-slate-900">
                  {data.scores.cefrLevel}
                </span>
              </div>
            </div>

            {/* Criteria Breakdown (Sub-scores) */}
            {data.subCriteria && data.subCriteria.length > 0 && (
              <div className="mt-6">
                <h4 className="text-[11px] font-black uppercase tracking-wider text-slate-700 mb-2.5">
                  Detailed Criteria Assessment Breakdown
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {data.subCriteria.map((crit, idx) => (
                    <div key={idx} className="border border-slate-200 bg-slate-50/70 p-2.5 rounded-lg flex items-center justify-between">
                      <span className="font-bold text-slate-700">{crit.label}:</span>
                      <span className="font-black text-red-600 bg-white px-2 py-0.5 rounded border border-slate-200">
                        {typeof crit.score === 'number' ? crit.score.toFixed(1) : crit.score}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Examiner Commentary */}
            {data.examinerNotes && (
              <div className="mt-5 p-3.5 bg-slate-50 border border-slate-200 rounded-lg text-xs leading-relaxed">
                <span className="block text-[10px] font-black uppercase text-slate-500 mb-1">
                  Examiner Feedback & Analysis Summary:
                </span>
                <p className="text-slate-700 italic">
                  "{data.examinerNotes}"
                </p>
              </div>
            )}

            {/* Official Stamps, Verification & Signatures */}
            <div className="mt-8 pt-6 border-t-2 border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6">
              {/* Circular Certified Stamp */}
              <div className="flex items-center gap-3">
                <div className="h-16 w-16 rounded-full border-2 border-red-600/80 p-1 flex items-center justify-center text-center rotate-[-8deg] shadow-xs">
                  <div className="h-full w-full rounded-full border border-dashed border-red-600 flex flex-col items-center justify-center text-[7px] font-black text-red-600 uppercase leading-tight">
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
                  <p className="text-[9px] text-slate-500 max-w-[200px] leading-tight mt-0.5">
                    Validated by IELTS Talk Cambridge Assessment Protocol.
                  </p>
                </div>
              </div>

              {/* Signatures & Issue Date */}
              <div className="text-center sm:text-right text-xs">
                <div className="font-serif italic text-base text-slate-800 font-bold border-b border-slate-400 pb-1 px-4 inline-block">
                  Dr. Richard Henderson
                </div>
                <span className="block text-[9px] font-bold text-slate-500 uppercase mt-1">
                  Administrator / Lead AI Evaluator
                </span>
                <span className="text-[9px] text-slate-400 font-mono block">
                  TRF No: {data.verificationCode}
                </span>
              </div>
            </div>

            {/* Bottom Disclaimer */}
            <div className="mt-6 pt-3 border-t border-slate-100 text-[8px] text-slate-400 text-center leading-relaxed">
              This Test Report Form is issued by IELTS Talk for mock examination and diagnostic benchmarking purposes based on the IELTS 9-band scale. © {new Date().getFullYear()} IELTS Talk AI. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
