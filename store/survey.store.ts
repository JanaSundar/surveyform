import create from 'zustand';
import type { SurveyState } from '@/types/Survey.types';

export const useStore = create<SurveyState>((set) => ({
    survey: [],
    addSurvey: (survey) => {
        set((state) => {

            const surveyIndex = state.survey.findIndex(
                (prev) => prev.id === survey.id
            );

            if (surveyIndex >= 0) {
                const updatedSurvey = {
                    ...state.survey[surveyIndex],
                    survey,
                };

                const clonedSurvey = [...state.survey ]
                clonedSurvey.splice(surveyIndex, 1, updatedSurvey);

                return {
                    survey: clonedSurvey,
                };
            }

            return {
                survey: [...state.survey, survey],
            };
        });
    },
    removeSurvey: (id) => {
        set(state=>({
            survey: state.survey.filter(prev => prev.id !== id),
        }))
    },
}));
