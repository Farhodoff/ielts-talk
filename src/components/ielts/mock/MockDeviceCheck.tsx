import React, { useState } from 'react';
import { Headphones, Volume2, Mic, CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '../../ui/Button';
import { toast } from '../../../hooks/use-toast';

interface MockDeviceCheckProps {
  candidateName: string;
  setCandidateName: (name: string) => void;
  onStartExam: () => void;
}

export const MockDeviceCheck: React.FC<MockDeviceCheckProps> = ({
  candidateName,
  setCandidateName,
  onStartExam,
}) => {
  const [isAudioTested, setIsAudioTested] = useState(false);
  const [isMicTested, setIsMicTested] = useState(false);
  const [micVolume, setMicVolume] = useState(0);

  const handleTestAudio = () => {
    if (
      typeof window === 'undefined' ||
      !window.speechSynthesis ||
      typeof SpeechSynthesisUtterance === 'undefined'
    )
      return;
    const speech = new SpeechSynthesisUtterance(
      'This is an audio test for your IELTS Listening and Speaking exam. If you can hear this clearly, your sound is working properly.',
    );
    speech.lang = 'en-GB';
    speech.rate = 0.95;
    window.speechSynthesis.speak(speech);
    setIsAudioTested(true);
    toast({ title: 'Ovoz tekshiruvi ijro etilmoqda' });
  };

  const handleTestMic = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      setIsMicTested(true);
      setMicVolume(85);
      toast({ title: 'Mikrofon muvaffaqiyatli ulandi' });
      setTimeout(() => {
        stream.getTracks().forEach((t) => t.stop());
        setMicVolume(0);
      }, 3000);
    } catch {
      toast({
        variant: 'destructive',
        title: 'Mikrofon xatoligi',
        description: 'Iltimos brauzer sozlamalarida mikrofonga ruxsat bering.',
      });
    }
  };

  return (
    <div className="mx-auto my-auto w-full max-w-2xl space-y-6 duration-200 animate-in fade-in">
      <div className="space-y-6 rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-2xl backdrop-blur-xl sm:p-8">
        <div className="space-y-2 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/25">
            <Headphones size={28} />
          </div>
          <h2 className="text-xl font-black text-white sm:text-2xl">
            IELTS Full Mock Imtihoniga Xush Kelibsiz
          </h2>
          <p className="mx-auto max-w-md text-xs text-slate-400">
            Imtihon rasmiy standartda 4 ta ketma-ket moduldan iborat bo‘lib, taxminan 2 soat 45
            daqiqa davom etadi. Boshlashdan oldin audio va mikrofoningizni sozlab oling.
          </p>
        </div>

        {/* Candidate Info Input */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-slate-300">
            Nomzod Ismi va Familiyasi (Sertifikat uchun) *
          </label>
          <input
            type="text"
            value={candidateName}
            onChange={(e) => setCandidateName(e.target.value)}
            placeholder="Ismingiz va familiyangiz"
            className="focus:outline-hidden w-full rounded-xl border border-slate-700 bg-slate-950 p-3 text-xs font-bold text-white placeholder-slate-500 focus:border-blue-500"
            required
          />
        </div>

        {/* Hardware Test Panels */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {/* Audio Check */}
          <div className="space-y-3 rounded-2xl border border-slate-800 bg-slate-950 p-4">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-xs font-bold text-slate-200">
                <Volume2 size={16} className="text-blue-400" /> Quloqchin Ovozini Tekshirish
              </span>
              {isAudioTested && <CheckCircle2 size={16} className="text-emerald-400" />}
            </div>
            <p className="text-[11px] text-slate-400">
              Listening va Speaking ovozini tiniq eshitayotganingizga ishonch hosil qiling.
            </p>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={handleTestAudio}
              className="w-full text-xs"
            >
              🔊 Test Ovozini Eshitish
            </Button>
          </div>

          {/* Mic Check */}
          <div className="space-y-3 rounded-2xl border border-slate-800 bg-slate-950 p-4">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-xs font-bold text-slate-200">
                <Mic size={16} className="text-purple-400" /> Mikrofonni Tekshirish
              </span>
              {isMicTested && <CheckCircle2 size={16} className="text-emerald-400" />}
            </div>
            <p className="text-[11px] text-slate-400">
              Speaking modulida ovozingiz ravshan yozilishi uchun ruxsat bering.
            </p>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={handleTestMic}
              className="w-full text-xs"
            >
              🎙️ Mikrofonni Sinash
            </Button>
            {micVolume > 0 && (
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-800">
                <div
                  className="h-full bg-emerald-500 transition-all duration-100"
                  style={{ width: `${micVolume}%` }}
                />
              </div>
            )}
          </div>
        </div>

        {/* Start Button */}
        <button
          type="button"
          onClick={onStartExam}
          className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 py-3.5 text-sm font-black text-white shadow-xl shadow-blue-500/25 transition-all hover:scale-[1.01] active:scale-[0.99]"
        >
          <span>Imtihonni Boshlash (1-Modul: Listening)</span>
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
};
