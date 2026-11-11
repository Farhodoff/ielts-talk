import React, { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import { Button } from '../../components/ui/Button';
import { useNavigate } from 'react-router-dom';
import {
  Plus,
  BookOpen,
  Edit2,
  Loader2,
  Trash2,
  X,
  Award,
  FileText,
  CheckCircle2,
  Search,
  Shield,
  RefreshCw,
  Layers,
} from 'lucide-react';
import { useStudyData } from '../../context/IeltsTalkContext';
import { isAdminEmail } from '../../utils/admin';

import { toast } from '../../hooks/use-toast';

export const ExamsManager: React.FC = () => {
  const { user } = useStudyData();
  const navigate = useNavigate();
  const [exams, setExams] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState<string | null>(null);

  // Filter & Search
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'ALL' | 'IELTS' | 'PUBLISHED'>('ALL');

  // Step-by-Step Creation Wizard State
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [ieltsType, setIeltsType] = useState<'Academic' | 'General'>('Academic');
  const [newTitle, setNewTitle] = useState('');
  const [newDesc, setNewDesc] = useState('');
  const [creating, setCreating] = useState(false);

  const fetchExams = async () => {
    setFetchError(null);
    try {
      const { data, error } = await supabase
        .from('exams')
        .select('*')
        .order('created_at', { ascending: false });
      if (error) {
        console.error('Error fetching exams:', error.message);
        setFetchError(error.message);
        setExams([]);
      } else {
        setExams(data || []);
      }
    } catch (err: any) {
      console.error('Error fetching exams:', err);
      setFetchError(err?.message || 'Imtihonlarni yuklashda kutilmagan xatolik yuz berdi.');
      setExams([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isAdminEmail(user?.email)) {
      fetchExams();
    } else {
      setLoading(false);
    }
  }, [user]);

  const handleCreateExam = async () => {
    const fullType = `IELTS (${ieltsType})`;
    const titleToSave = newTitle.trim() || `${fullType} Mock Test`;

    setCreating(true);
    try {
      const { data, error } = await supabase
        .from('exams')
        .insert({
          title: titleToSave,
          type: fullType,
          description: newDesc.trim() || null,
        })
        .select()
        .single();

      if (error) throw error;

      setShowCreateModal(false);
      setNewTitle('');
      setNewDesc('');
      fetchExams();
      toast({
        title: '✅ Imtihon Yaratildi',
        description: `"${titleToSave}" muvaffaqiyatli saqlandi.`,
      });

      if (data?.id) {
        navigate(`/admin/exams/${data.id}`);
      }
    } catch (err: any) {
      console.error('Exam creation error:', err);
      toast({
        variant: 'destructive',
        title: 'Xatolik',
        description: `Xatolik: ${err?.message || JSON.stringify(err)}`,
      });
    } finally {
      setCreating(false);
    }
  };

  const handleDeleteExam = async (examId: string, examTitle: string) => {
    if (!confirm(`"${examTitle}" imtihonini o'chirishni xohlaysizmi? Bu qaytarib bo'lmaydi.`))
      return;
    try {
      const { error } = await supabase.from('exams').delete().eq('id', examId);
      if (error) throw error;
      fetchExams();
      toast({
        title: "🗑️ O'chirildi",
        description: `"${examTitle}" imtihoni o'chirildi.`,
      });
    } catch (err: any) {
      console.error('Exam delete error:', err);
      toast({
        variant: 'destructive',
        title: 'Xatolik',
        description: `O'chirishda xatolik: ${err?.message || JSON.stringify(err)}`,
      });
    }
  };

  // Filter logic
  const filteredExams = exams.filter((exam) => {
    const matchesSearch =
      exam.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      exam.type.toLowerCase().includes(searchQuery.toLowerCase());
    if (!matchesSearch) return false;

    if (activeTab === 'IELTS') return exam.type.includes('IELTS');
    if (activeTab === 'PUBLISHED') return exam.is_published;
    return true;
  });

  const stats = {
    total: exams.length,
    ielts: exams.filter((e) => e.type?.includes('IELTS')).length,
    academic: exams.filter((e) => e.type?.includes('Academic') || e.title?.includes('Academic'))
      .length,
    general: exams.filter((e) => e.type?.includes('General') || e.title?.includes('General'))
      .length,
    published: exams.filter((e) => e.is_published).length,
  };

  if (loading)
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-3">
        <Loader2 className="h-10 w-10 animate-spin text-indigo-500" />
        <p className="text-sm font-semibold text-slate-500">Imtihonlar yuklanmoqda...</p>
      </div>
    );

  if (!isAdminEmail(user?.email))
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <div className="max-w-md rounded-2xl border border-red-200 bg-red-50 p-8 text-center dark:border-red-500/20 dark:bg-red-500/10">
          <Shield className="mx-auto mb-3 h-12 w-12 text-red-500" />
          <h3 className="text-lg font-bold text-red-600 dark:text-red-400">Ruxsat Yo'q</h3>
          <p className="mt-1 text-sm text-slate-500">
            Siz admin emassiz! Faqat tasdiqlangan adminlar ushbu sahifaga kirishi mumkin.
          </p>
        </div>
      </div>
    );

  return (
    <div className="mx-auto max-w-7xl space-y-8 p-2 duration-300 animate-in fade-in md:p-4">
      {/* Header */}
      <div className="flex flex-col items-start justify-between gap-4 border-b border-slate-200 pb-6 dark:border-slate-800 md:flex-row md:items-center">
        <div>
          <h1 className="text-2xl font-extrabold tracking-tight md:text-4xl">
            IELTS Imtihonlar Markazi
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            Rasmiy IELTS Academic va General Training mock imtihonlarini boshqarish
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={fetchExams}
            disabled={loading}
            className="rounded-xl border border-slate-200 p-2.5 text-slate-600 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
            title="Yangilash"
          >
            <RefreshCw className={`h-5 w-5 ${loading ? 'animate-spin' : ''}`} />
          </button>
          <button
            onClick={() => setShowCreateModal(true)}
            className="flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-bold text-white shadow-lg shadow-indigo-600/20 transition hover:bg-indigo-700 active:scale-95"
          >
            <Plus className="h-5 w-5" />
            <span>Yangi IELTS Imtihoni</span>
          </button>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10 font-bold text-indigo-600 dark:text-indigo-400">
            <Layers className="h-6 w-6" />
          </div>
          <div>
            <div className="text-2xl font-black text-slate-900 dark:text-white">{stats.total}</div>
            <div className="text-xs font-semibold text-slate-400">Jami Imtihonlar</div>
          </div>
        </div>

        <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 font-bold text-blue-600 dark:text-blue-400">
            <FileText className="h-6 w-6" />
          </div>
          <div>
            <div className="text-2xl font-black text-slate-900 dark:text-white">
              {stats.academic}
            </div>
            <div className="text-xs font-semibold text-slate-400">IELTS Academic</div>
          </div>
        </div>

        <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10 font-bold text-amber-600 dark:text-amber-400">
            <Award className="h-6 w-6" />
          </div>
          <div>
            <div className="text-2xl font-black text-slate-900 dark:text-white">
              {stats.general}
            </div>
            <div className="text-xs font-semibold text-slate-400">General Training</div>
          </div>
        </div>

        <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-500/10 font-bold text-green-600 dark:text-green-400">
            <CheckCircle2 className="h-6 w-6" />
          </div>
          <div>
            <div className="text-2xl font-black text-slate-900 dark:text-white">
              {stats.published}
            </div>
            <div className="text-xs font-semibold text-slate-400">Faol Nashr Qilingan</div>
          </div>
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="flex flex-col items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:flex-row">
        <div className="flex w-full gap-1.5 overflow-x-auto pb-1 sm:w-auto sm:pb-0">
          {[
            { id: 'ALL', label: 'Barchasi' },
            { id: 'IELTS', label: 'IELTS Mock Testlar' },
            { id: 'PUBLISHED', label: 'Nashr qilinganlar' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`whitespace-nowrap rounded-xl px-4 py-2 text-xs font-bold transition ${
                activeTab === tab.id
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="relative w-full sm:w-64">
          <Search className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Imtihon nomini izlash..."
            className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2 pl-9 pr-4 text-xs text-slate-900 outline-none focus:ring-2 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
          />
        </div>
      </div>

      {fetchError && (
        <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-600 dark:border-red-500/20 dark:bg-red-500/10">
          ⚠️ {fetchError}
        </div>
      )}

      {/* Exams Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredExams.map((exam) => (
          <div
            key={exam.id}
            className="group flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-indigo-400 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900 dark:hover:border-indigo-500"
          >
            <div className="space-y-3">
              <div className="flex items-start justify-between">
                <span
                  className={`rounded-full px-3 py-1 text-xs font-extrabold ${
                    exam.type.includes('JLPT')
                      ? 'border border-rose-500/20 bg-rose-500/10 text-rose-600 dark:text-rose-400'
                      : 'border border-indigo-500/20 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400'
                  }`}
                >
                  {exam.type}
                </span>
                {exam.is_published ? (
                  <span className="inline-flex items-center gap-1 rounded-full border border-green-500/20 bg-green-500/10 px-2.5 py-0.5 text-[11px] font-bold text-green-600">
                    <CheckCircle2 className="h-3 w-3" /> Active
                  </span>
                ) : (
                  <span className="rounded-full border border-amber-500/20 bg-amber-500/10 px-2.5 py-0.5 text-[11px] font-bold text-amber-600">
                    Draft (Qoralama)
                  </span>
                )}
              </div>

              <h3 className="text-xl font-bold leading-snug text-slate-900 transition group-hover:text-indigo-600 dark:text-white dark:group-hover:text-indigo-400">
                {exam.title}
              </h3>
              {exam.description && (
                <p className="line-clamp-2 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                  {exam.description}
                </p>
              )}
            </div>

            <div className="mt-4 flex gap-2 border-t border-slate-100 pt-5 dark:border-slate-800">
              <Button
                variant="outline"
                className="flex-1 gap-2 text-xs font-bold transition hover:bg-indigo-600 hover:text-white"
                onClick={() => navigate(`/admin/exams/${exam.id}`)}
              >
                <Edit2 className="h-3.5 w-3.5" /> Savollar va Bo'limlar
              </Button>
              <button
                onClick={() => handleDeleteExam(exam.id, exam.title)}
                className="rounded-xl p-2 text-slate-400 transition hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-500/10"
                title="O'chirish"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}

        {filteredExams.length === 0 && !fetchError && (
          <div className="col-span-full space-y-3 rounded-3xl border-2 border-dashed border-slate-200 bg-slate-50 p-12 text-center text-slate-400 dark:border-slate-700 dark:bg-slate-800/40">
            <BookOpen className="mx-auto h-16 w-16 opacity-20" />
            <p className="text-base font-bold text-slate-600 dark:text-slate-300">
              Testlar topilmadi.
            </p>
            <p className="mx-auto max-w-sm text-xs text-slate-400">
              Hali hech qanday imtihon yaratilmagan yoki qidiruv bo'yicha imtihon mavjud emas.
              Yuqoridagi tugmani bosib yaratishingiz mumkin.
            </p>
          </div>
        )}
      </div>

      {/* Step-by-Step Create Exam Modal */}
      {showCreateModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-md animate-in fade-in"
          onClick={() => setShowCreateModal(false)}
        >
          <div
            className="w-full max-w-lg space-y-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl duration-200 animate-in zoom-in-95 dark:border-slate-800 dark:bg-slate-900"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-100 pb-4 dark:border-slate-800">
              <div>
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                  Yangi Imtihon Qo'shish
                </h3>
                <p className="text-xs text-slate-400">Bo'lim va savollarni yaratish rejimi</p>
              </div>
              <button
                onClick={() => setShowCreateModal(false)}
                className="rounded-full p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-800 dark:hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Step 1: IELTS Module Selection */}
            <div className="space-y-2">
              <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-500">
                1. IELTS Modulini Tanlang:
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setIeltsType('Academic')}
                  className={`flex flex-col items-center gap-2 rounded-2xl border p-4 text-sm font-bold transition ${
                    ieltsType === 'Academic'
                      ? 'scale-[1.02] border-indigo-600 bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/20'
                      : 'border-slate-200 bg-slate-50 text-slate-700 hover:border-indigo-300 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300'
                  }`}
                >
                  <FileText className="h-7 w-7" />
                  <span>IELTS Academic</span>
                </button>
                <button
                  type="button"
                  onClick={() => setIeltsType('General')}
                  className={`flex flex-col items-center gap-2 rounded-2xl border p-4 text-sm font-bold transition ${
                    ieltsType === 'General'
                      ? 'scale-[1.02] border-blue-600 bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/20'
                      : 'border-slate-200 bg-slate-50 text-slate-700 hover:border-blue-300 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300'
                  }`}
                >
                  <Award className="h-7 w-7" />
                  <span>IELTS General Training</span>
                </button>
              </div>
            </div>

            {/* Step 3: Title & Description */}
            <div className="space-y-3">
              <div>
                <label className="mb-1 block text-xs font-bold text-slate-500">Imtihon Nomi</label>
                <input
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder={`IELTS ${ieltsType} Mock Test 1`}
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 p-3.5 font-sans text-sm outline-none focus:ring-2 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-800"
                />
              </div>

              <div>
                <label className="mb-1 block text-xs font-bold text-slate-500">
                  Tavsif (ixtiyoriy)
                </label>
                <textarea
                  value={newDesc}
                  onChange={(e) => setNewDesc(e.target.value)}
                  rows={2}
                  placeholder="Imtihon haqida qisqacha ma'lumot..."
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 p-3.5 font-sans text-sm outline-none focus:ring-2 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-800"
                />
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <Button
                variant="outline"
                onClick={() => setShowCreateModal(false)}
                className="rounded-xl"
              >
                Bekor qilish
              </Button>
              <Button
                onClick={handleCreateExam}
                disabled={creating}
                className="gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3 font-bold text-white shadow-lg"
              >
                {creating ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Plus className="h-4 w-4" />
                )}
                Davom etish va Savollar qo'shish ➔
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExamsManager;
