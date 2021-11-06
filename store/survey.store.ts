import create from 'zustand';
import type { SurveyState } from '@/types/Survey.types';

export const useStore = create<SurveyState>((set) => ({
    surveys: [],
    addSurvey: (survey) => {
        set((state) => {

            const existingSurveyIndex = state.surveys.findIndex(
                (prev) => prev.id === survey.id
            );

            if (existingSurveyIndex >= 0) {
                const updatedSurvey = {
                    ...state.surveys[existingSurveyIndex],
                    ...survey,
                };

                const clonedSurveys = [...state.surveys];
                clonedSurveys.splice(existingSurveyIndex, 1, updatedSurvey);

                return {
                    surveys: clonedSurveys,
                };
            }

            return {
                surveys: [...state.surveys, survey],
            };
        });
    },
    removeSurvey: (id) => {
        set(state=>({
            surveys: state.surveys.filter(prev => prev.id !== id),
        }))
    },
}));
