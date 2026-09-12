import { useState, useCallback, useRef, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { StudySession, CoachSession } from '../types';
import { DatabaseSession } from '../types/supabase-types';
import { generateUUID, isUuid } from '../utils/uuid';
import { safeLocalStorage } from '../utils/storage/safeLocalStorage';

const getActiveUserId = (): string => {
    const cachedUser = safeLocalStorage.getJSON<{ id?: string } | null>('study_planner_user_cache', null);
    return cachedUser?.id && isUuid(cachedUser.id) ? cachedUser.id : 'guest';
};

export const useSessions = (awardXP?: (amount: number) => Promise<void>) => {
    const awardXPRef = useRef(awardXP);
    useEffect(() => {
        awardXPRef.current = awardXP;
    }, [awardXP]);

    const [sessions, setSessions] = useState<StudySession[]>(() => {
        const activeId = getActiveUserId();
        return safeLocalStorage.getJSON<StudySession[]>(`study_planner_sessions_cache_${activeId}`, []);
    });
    const [coachSessions, setCoachSessions] = useState<CoachSession[]>([]);

    const addSession = useCallback(async (sessionData: Partial<StudySession>): Promise<void> => {
        let activeUserId: string | null = null;
        try {
            const { data: { session } } = await supabase.auth.getSession();
            if (session?.user?.id) activeUserId = session.user.id;
        } catch {}

        if (!activeUserId) {
            const cachedUser = safeLocalStorage.getJSON<{ id?: string } | null>('study_planner_user_cache', null);
            if (cachedUser?.id && isUuid(cachedUser.id)) {
                activeUserId = cachedUser.id;
            }
        }

        const sessionId = sessionData.id || generateUUID();
        const validSubjectId =
            sessionData.subjectId && isUuid(sessionData.subjectId) ? sessionData.subjectId : undefined;
        const supabaseData: DatabaseSession = {
            id: sessionId,
            user_id: activeUserId && isUuid(activeUserId) ? activeUserId : 'guest',
            duration: sessionData.duration || 0,
            type: sessionData.type === 'break' ? 'break' : 'focus',
            completed: !!sessionData.completed,
            mood_before: sessionData.moodBefore === null ? undefined : sessionData.moodBefore,
            mood_after: sessionData.moodAfter === null ? undefined : sessionData.moodAfter,
            subject_id: validSubjectId,
            start_time: sessionData.startTime || new Date().toISOString()
        };

        const mappedSession: StudySession = {
            id: sessionId,
            subjectId: sessionData.subjectId,
            startTime: supabaseData.start_time,
            duration: supabaseData.duration,
            type: supabaseData.type as 'focus' | 'break',
            completed: supabaseData.completed,
            moodBefore: supabaseData.mood_before,
            moodAfter: supabaseData.mood_after
        };

        setSessions(prev => {
            const updated = [...prev, mappedSession];
            const activeId = activeUserId || getActiveUserId();
            safeLocalStorage.setJSON(`study_planner_sessions_cache_${activeId}`, updated);
            return updated;
        });

        try {
            const payload: any = { ...supabaseData };
            if (!payload.user_id || payload.user_id === 'guest') delete payload.user_id;
            const { data, error } = await supabase.from('study_sessions').insert(payload).select().maybeSingle();
            if (data && !error) {
                setSessions(prev => {
                    const updated = prev.map(s => s.id === sessionId ? {
                        ...data,
                        subjectId: data.subject_id,
                        startTime: data.start_time,
                        moodBefore: data.mood_before,
                        moodAfter: data.mood_after
                    } as StudySession : s);
                    const activeId = activeUserId || getActiveUserId();
                    safeLocalStorage.setJSON(`study_planner_sessions_cache_${activeId}`, updated);
                    return updated;
                });
            }
            if (awardXPRef.current) {
                await awardXPRef.current(sessionData.type === 'focus' ? 10 : 2);
            }
        } catch (e) {
            console.warn('[addSession] DB sync notice (local session preserved):', e);
        }
    }, []);

    const addCoachSession = useCallback(async (session: Partial<CoachSession>): Promise<void> => {
        let activeUserId: string | null = null;
        let userEmail: string | undefined = undefined;
        try {
            const { data: { session: authSession } } = await supabase.auth.getSession();
            if (authSession?.user?.id) {
                activeUserId = authSession.user.id;
                userEmail = authSession.user.email;
            }
        } catch {}

        if (!activeUserId) {
            const cachedUser = safeLocalStorage.getJSON<{ id?: string; email?: string } | null>('study_planner_user_cache', null);
            if (cachedUser?.id && isUuid(cachedUser.id)) {
                activeUserId = cachedUser.id;
                userEmail = cachedUser.email;
            }
        }

        const sessionId = session.id || generateUUID();
        const personaTitle = session.personaTitle || 'AI Coach';
        const fluencyScore = Number(session.fluencyScore) || 0;
        const pronunciationScore = Number(session.pronunciationScore) || fluencyScore;
        const vocabularyScore = Number(session.vocabularyScore) || 0;
        const grammarScore = Number(session.grammarScore) || 0;
        const overallScore = Math.round((fluencyScore + pronunciationScore + (vocabularyScore || fluencyScore) + (grammarScore || fluencyScore)) / 4);
        const feedback = session.feedback || '';
        const createdAt = session.createdAt || new Date().toISOString();

        // 1. Primary insert to speaking_sessions
        try {
            const speakingPayload: any = {
                id: sessionId,
                persona_title: personaTitle,
                topic: personaTitle,
                fluency_score: fluencyScore,
                pronunciation_score: pronunciationScore,
                vocabulary_score: vocabularyScore,
                grammar_score: grammarScore,
                overall_score: overallScore,
                duration_seconds: 120,
                feedback: feedback,
                ai_feedback: feedback,
                language: 'en',
                created_at: createdAt
            };
            if (activeUserId && isUuid(activeUserId)) {
                speakingPayload.user_id = activeUserId;
            }
            if (userEmail) {
                speakingPayload.user_email = userEmail;
            }
            await supabase.from('speaking_sessions').insert(speakingPayload);
        } catch (e) {
            console.warn('[useSessions] speaking_sessions insert notice:', e);
        }

        // 2. Insert to speaking_coach_sessions
        const dbCoachSession: any = {
            id: sessionId,
            persona: personaTitle,
            persona_title: personaTitle,
            topic: personaTitle,
            fluency_score: fluencyScore,
            pronunciation_score: pronunciationScore,
            vocabulary_score: vocabularyScore,
            grammar_score: grammarScore,
            overall_score: overallScore,
            feedback: feedback,
            created_at: createdAt
        };
        if (activeUserId && isUuid(activeUserId)) {
            dbCoachSession.user_id = activeUserId;
        }

        const { data, error } = await supabase.from('speaking_coach_sessions').insert(dbCoachSession).select().maybeSingle();

        if (error) {
            console.warn("Coach Session Supabase'ga saqlanmadi (lokal saqlanmoqda):", error);
            const newLocalSession: CoachSession = {
                id: sessionId,
                personaTitle: personaTitle,
                fluencyScore: fluencyScore,
                vocabularyScore: vocabularyScore,
                grammarScore: grammarScore,
                pronunciationScore: pronunciationScore,
                feedback: feedback,
                createdAt: createdAt
            };
            setCoachSessions(prev => [newLocalSession, ...prev]);
            return;
        }

        if (data) {
            setCoachSessions(prev => [{
                id: data.id,
                personaTitle: data.persona_title || data.persona || personaTitle,
                fluencyScore: data.fluency_score,
                vocabularyScore: data.vocabulary_score || vocabularyScore,
                grammarScore: data.grammar_score || grammarScore,
                pronunciationScore: data.pronunciation_score,
                feedback: data.feedback,
                createdAt: data.created_at
            }, ...prev]);
            if (awardXPRef.current) {
                await awardXPRef.current(15);
            }
        }
    }, []);

    const setSessionsState = useCallback((value: React.SetStateAction<StudySession[]>) => {
        setSessions(value);
    }, []);

    const setCoachSessionsState = useCallback((value: React.SetStateAction<CoachSession[]>) => {
        setCoachSessions(value);
    }, []);

    return {
        sessions,
        setSessions: setSessionsState,
        coachSessions,
        setCoachSessions: setCoachSessionsState,
        addSession,
        addCoachSession
    };
};
