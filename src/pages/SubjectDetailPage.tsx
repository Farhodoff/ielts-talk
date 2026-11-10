import { ArrowLeft, Calendar, Clock, Sparkles } from 'lucide-react';
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
// import ResourceRecommendations from '../components/ResourceRecommendations';
import { Button } from '../components/ui/Button';
import { ProgressBar } from '../components/ui/ProgressBar';
import SubjectNotes from '../components/SubjectNotes';
import { Suspense, lazy } from 'react';
const Whiteboard = lazy(() => import('../components/Whiteboard'));
import { useStudyData } from '../context/IeltsTalkContext';
import { calculateMasteryScore } from '../utils/analytics';

const SubjectDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { subjects, tasks, toggleTask, deleteSubject, flashcards } = useStudyData();
  const [activeTab, setActiveTab] = useState<'tasks' | 'resources' | 'notes' | 'whiteboard'>(
    'tasks',
  );

  const subject = subjects.find((s) => s.id === id);
  if (!subject) {
    return (
      <div className="mx-auto max-w-xl space-y-4 p-8 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-muted text-2xl font-bold">
          📚
        </div>
        <h3 className="text-xl font-black text-foreground">Fan Topilmadi</h3>
        <p className="text-xs text-muted-foreground">Ushbu fan o'chirilgan yoki mavjud emas.</p>
        <Button onClick={() => navigate('/subjects')} className="text-xs font-bold">
          <ArrowLeft size={14} className="mr-1.5" /> Fanlar Ro'yxatiga Qaytish
        </Button>
      </div>
    );
  }

  const subjectTasks = tasks
    .filter((t) => t.subjectId === id)
    .sort((a, b) => {
      const dateA = new Date(a.deadline || a.dueDate || 0).getTime();
      const dateB = new Date(b.deadline || b.dueDate || 0).getTime();
      if (dateA === dateB) {
        return new Date(a.createdAt || 0).getTime() - new Date(b.createdAt || 0).getTime();
      }
      return dateA - dateB;
    });
  const subjectCards = flashcards.filter((c) => c.subjectId === id);
  const masteryScore = calculateMasteryScore(subjectCards);

  const handleDelete = () => {
    if (confirm("Ushbu fanni o'chirishga ishonchingiz komilmi?")) {
      deleteSubject(subject.id);
      navigate('/subjects');
    }
  };

  return (
    <div className="mx-auto max-w-7xl p-4 md:p-8">
      <div className="mb-8 flex items-center justify-between">
        <button
          onClick={() => navigate('/subjects')}
          className="flex items-center text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft size={20} className="mr-2" /> Orqaga
        </button>
        <div className="flex gap-2">
          <Button
            variant="secondary"
            onClick={handleDelete}
            className="text-red-500 hover:bg-red-50"
          >
            O'chirish
          </Button>
        </div>
      </div>

      <div className="glass-card relative mb-8 overflow-hidden rounded-3xl p-8">
        <div
          className="absolute left-0 top-0 h-2 w-full"
          style={{ backgroundColor: subject.color }}
        />
        <h1 className="mb-4 text-4xl font-bold text-foreground">{subject.name}</h1>
        <div className="flex flex-wrap gap-6 text-muted-foreground">
          {subject.schedule && subject.schedule.length > 0 && (
            <span className="flex items-center">
              <Calendar size={18} className="mr-2 text-primary" /> {subject.schedule.join(', ')}
            </span>
          )}
        </div>

        <div className="mt-6 max-w-md">
          <div className="mb-1 flex justify-between text-sm font-medium text-muted-foreground">
            <span>O'zlashtirish Darajasi</span>
            <span>{masteryScore}%</span>
          </div>
          <ProgressBar progress={masteryScore} color={subject.color} height={8} />
        </div>
      </div>

      {/* Tabs */}
      <div className="mb-6 flex gap-8 border-b border-border/50">
        <button
          onClick={() => setActiveTab('tasks')}
          className={`pb-4 font-medium transition-all ${activeTab === 'tasks' ? 'border-b-2 border-primary text-primary' : 'text-muted-foreground hover:text-foreground'}`}
        >
          Vazifalar ({subjectTasks.length})
        </button>
        <button
          onClick={() => setActiveTab('resources')}
          className={`flex items-center gap-2 pb-4 font-medium transition-all ${activeTab === 'resources' ? 'border-b-2 border-primary text-primary' : 'text-muted-foreground hover:text-foreground'}`}
        >
          <Sparkles size={16} /> Aqlli Manbalar
        </button>
        <button
          onClick={() => setActiveTab('notes')}
          className={`pb-4 font-medium transition-all ${activeTab === 'notes' ? 'border-b-2 border-primary text-primary' : 'text-muted-foreground hover:text-foreground'}`}
        >
          Konspektlar
        </button>
        <button
          onClick={() => setActiveTab('whiteboard')}
          className={`pb-4 font-medium transition-all ${activeTab === 'whiteboard' ? 'border-b-2 border-primary text-primary' : 'text-muted-foreground hover:text-foreground'}`}
        >
          Doska
        </button>
      </div>

      {activeTab === 'tasks' && (
        <div className="space-y-3">
          {subjectTasks.map((task) => (
            <div
              key={task.id}
              className={`glass-card flex items-center rounded-xl border border-border/50 p-4 ${task.completed ? 'opacity-50' : ''}`}
            >
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
                className="mr-4 h-5 w-5 rounded border-border bg-background/50 text-primary focus:ring-primary"
              />
              <div className="flex-1">
                <span
                  className={`font-medium text-foreground ${task.completed ? 'line-through' : ''}`}
                >
                  {task.title}
                </span>
                {(task.deadline || task.dueDate) && (
                  <div className="mt-1 flex items-center text-xs text-muted-foreground">
                    <Clock size={12} className="mr-1" />{' '}
                    {new Date(task.deadline || task.dueDate || '').toLocaleDateString()}
                  </div>
                )}
              </div>
            </div>
          ))}
          {subjectTasks.length === 0 && (
            <div className="py-10 text-center text-muted-foreground">
              Bu fan uchun hali vazifalar yo'q.
            </div>
          )}
        </div>
      )}

      {activeTab === 'resources' && (
        <div className="duration-500 animate-in fade-in slide-in-from-bottom-4">
          {/* <ResourceRecommendations initialTopic={subject.name} /> */}
          <div className="p-4 text-center text-muted-foreground">
            Manbalar funksiyasi hozircha mavjud emas
          </div>
        </div>
      )}

      {activeTab === 'notes' && (
        <div className="duration-500 animate-in fade-in slide-in-from-bottom-4">
          <SubjectNotes subjectId={subject.id} />
        </div>
      )}

      {activeTab === 'whiteboard' && (
        <div className="duration-500 animate-in fade-in slide-in-from-bottom-4">
          <Suspense
            fallback={
              <div className="flex h-full items-center justify-center rounded-xl bg-gray-50 p-8">
                <div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
              </div>
            }
          >
            <Whiteboard whiteboardId={subject.id} />
          </Suspense>
        </div>
      )}
    </div>
  );
};

export default SubjectDetailPage;
