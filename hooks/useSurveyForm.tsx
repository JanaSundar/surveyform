import { useFieldArray, useForm } from 'react-hook-form';

export const useSurveyForm = () => {
    const form = useForm();

    const fieldArray = useFieldArray({
        control: form.control,
        name: 'survey',
    });

    return { ...form, ...fieldArray };
};
