import React, { useState } from 'react';
import { Award, BarChart2, FileText, RefreshCw } from 'lucide-react';
import { Button } from '../../ui/Button';
import { IeltsTrfCertificateModal } from '../IeltsTrfCertificateModal';
import { TrfCertificateService } from '../../../services/TrfCertificateService';
import {
  MockPassageData,
  calculateIeltsBandScore,
  getBandDescriptor,
} from '../../../types/ieltsMock';

interface MockExamReportViewProps {
  testType: 'reading' | 'listening';
  passage: MockPassageData;
  score: number;
  userAnswers: Record<number, string>;
  user: any;
  onRetryOrNewTest: () => void;
  onNavigateHome: () => void;
}

export const MockExamReportView: React.FC<MockExamReportViewProps> = ({
  testType,
  passage,
  score,
  userAnswers,
  user,
  onRetryOrNewTest,
  onNavigateHome,
}) => {
  const [isTrfModalOpen, setIsTrfModalOpen] = useState(false);
  const band = calculateIeltsBandScore(score, passage.questions.length);
  const descriptor = getBandDescriptor(band);

  const candidateName =
    user?.user_metadata?.full_name || user?.email?.split('@')[0] || 'IELTS Candidate';

  return (
    <div className="mx-auto max-w-3xl space-y-5 rounded-2xl border border-border bg-card p-5 text-center shadow-xl sm:space-y-6 sm:rounded-3xl sm:p-6 md:p-8">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-amber-500/20 to-indigo-500/20 text-indigo-600 shadow-xs sm:h-16 sm:w-16">
        <Award size={28} className="sm:hidden" />
        <Award size={32} className="hidden sm:block" />
      </div>

      <div className="space-y-2">
        <span className="block text-xs font-black uppercase tracking-wider text-indigo-500">
          IELTS {testType.toUpperCase()} Natijasi
        </span>
        <h2 className="text-3xl font-black text-foreground sm:text-4xl md:text-5xl">
          Band {band.toFixed(1)}
        </h2>
        <div className="mt-1 inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-bold">
          <span
            className={`rounded-full border px-2.5 py-0.5 text-xs font-black ${descriptor.badge}`}
          >
            {descriptor.title}
          </span>
        </div>
        <p className="mx-auto mt-2 max-w-md text-xs text-muted-foreground">
          Siz {passage.questions.length} ta savoldan{' '}
          <span className="font-extrabold text-foreground">{score} tasiga</span> to'g'ri javob
          berdingiz.
        </p>
        <div className="mx-auto max-w-lg rounded-2xl border border-border bg-muted/40 p-3 text-xs text-muted-foreground sm:p-3.5">
          💡 <b>Tavsiya:</b> {descriptor.feedback}
        </div>
      </div>

      {/* Explanations List */}
      <div className="space-y-3 border-t border-border pt-5 text-left sm:pt-6">
        <h4 className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-foreground">
          <BarChart2 size={16} className="text-indigo-500" /> Savollar Tahlili:
        </h4>
        {passage.questions.map((q) => {
          const isCorrect =
            (userAnswers[q.id] || '').trim().toLowerCase() === q.correctAnswer.trim().toLowerCase();
          return (
            <div
              key={q.id}
              className={`space-y-2 rounded-2xl border p-3.5 text-xs sm:p-4 ${
                isCorrect
                  ? 'border-emerald-500/20 bg-emerald-500/5'
                  : 'border-rose-500/20 bg-rose-500/5'
              }`}
            >
              <div className="flex items-center justify-between font-bold text-foreground">
                <span>
                  Q{q.id}. {q.text}
                </span>
                <span
                  className={`rounded px-2 py-0.5 text-[10px] font-black uppercase ${
                    isCorrect
                      ? 'bg-emerald-500/20 text-emerald-600'
                      : 'bg-rose-500/20 text-rose-600'
                  }`}
                >
                  {isCorrect ? "To'g'ri" : 'Xato'}
                </span>
              </div>
              <p className="text-[11px] text-muted-foreground">
                Sizning javobingiz:{' '}
                <span className="font-bold text-foreground">
                  {userAnswers[q.id] || '(Kiritilmadi)'}
                </span>
              </p>
              <p className="text-[11px] text-muted-foreground">
                To'g'ri javob:{' '}
                <span className="font-bold text-indigo-500">
                  {q.type === 'choice' && q.options
                    ? q.options[parseInt(q.correctAnswer)]
                    : q.correctAnswer}
                </span>
              </p>
              <div className="rounded-xl border border-border/60 bg-background/80 p-2.5 text-[11px] text-muted-foreground">
                💡 <b>Tahlil:</b> {q.explanation}
              </div>
            </div>
          );
        })}
      </div>

      {/* Full Audio Script for Listening */}
      {testType === 'listening' && passage.script && (
        <div className="space-y-2 border-t border-border pt-4 text-left">
          <h4 className="flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-foreground">
            <FileText size={15} className="text-purple-500" /> To'liq Audio Skripti:
          </h4>
          <div className="max-h-60 overflow-y-auto whitespace-pre-line rounded-2xl border border-border bg-muted/40 p-3 font-mono text-xs leading-relaxed text-muted-foreground sm:p-4">
            {passage.script}
          </div>
        </div>
      )}

      <div className="space-y-3 pt-2">
        <button
          onClick={() => setIsTrfModalOpen(true)}
          className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-red-600 py-3 text-xs font-black text-white shadow-lg shadow-red-600/20 transition-all hover:bg-red-700 sm:py-3.5 sm:text-sm"
        >
          <FileText size={16} />
          <span>TRF Sertifikati (PDF)</span>
        </button>

        <div className="flex flex-col gap-2.5 sm:flex-row sm:gap-3">
          <Button
            onClick={onRetryOrNewTest}
            className="flex flex-1 cursor-pointer items-center justify-center gap-1.5 rounded-xl bg-indigo-600 py-3 text-xs font-black text-white shadow-md hover:bg-indigo-700 sm:py-3.5"
          >
            <RefreshCw size={14} /> Boshqa test
          </Button>
          <Button
            onClick={onNavigateHome}
            variant="outline"
            className="flex-1 cursor-pointer rounded-xl py-3 text-xs font-bold sm:py-3.5"
          >
            IELTS Hub
          </Button>
        </div>
      </div>

      {isTrfModalOpen && (
        <IeltsTrfCertificateModal
          isOpen={isTrfModalOpen}
          onClose={() => setIsTrfModalOpen(false)}
          data={{
            candidateName,
            testDate: new Date().toLocaleDateString('en-GB', {
              day: '2-digit',
              month: 'short',
              year: 'numeric',
            }),
            testType: 'Academic',
            module: testType === 'reading' ? 'Reading' : 'Listening',
            scores: {
              reading: testType === 'reading' ? band : undefined,
              listening: testType === 'listening' ? band : undefined,
              overall: band,
              cefrLevel: TrfCertificateService.getCefrFromBand(band),
            },
            subCriteria: [
              {
                label: 'Raw Correct Answers',
                score: `${score} / ${passage.questions.length}`,
              },
              {
                label: 'Accuracy Rate',
                score: `${Math.round((score / passage.questions.length) * 100)}%`,
              },
              { label: 'Academic Material', score: passage.title },
              {
                label: 'Band Level',
                score: `Band ${band.toFixed(1)} (${descriptor.title})`,
              },
            ],
            examinerNotes: `Candidate achieved Band ${band.toFixed(1)} in IELTS Academic ${
              testType === 'reading' ? 'Reading' : 'Listening'
            }. ${descriptor.feedback}`,
            verificationCode: TrfCertificateService.generateVerificationCode(testType),
          }}
        />
      )}
    </div>
  );
};
