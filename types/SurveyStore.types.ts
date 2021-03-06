enum SurveyType {
    'Text',
    'Radio',
    'Checkbox',
    'Yes/No',
    'Dropdown',
    'Rating',
    'Date',
}

interface Survey {
    id: string;
    question: string;
    answer: string;
    type: SurveyType;
    required?: boolean;
}

interface SurveyState {
    surveys: Survey[];
    addSurvey: (survey: Survey) => void;
    removeSurvey: (id: string) => void;
}

export type { SurveyState };
