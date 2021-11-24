import { useSurveyForm } from 'hooks/useSurveyForm';
import { AnimatePresence, motion } from 'framer-motion';

// type FormValues = {
//     data: { [x: string]: string }[];
// };

const Survey = () => {
    const { register, fields } = useSurveyForm();

    // const onSubmit = (data: FormValues) => {
    //     // TODO: handle submitted survey data
    // };

    return (
        <AnimatePresence>
            <motion.form className='flex' >
                {fields.map((field) => (
                    <motion.div className='flex-child' key={field.id}>
                        <div>
                            <p>What is your name?</p>
                            <input
                                type='text'
                                {...register(`survey[0].name`)}
                                name='text'
                            />
                        </div>
                    </motion.div>
                ))}
            </motion.form>
        </AnimatePresence>
    );
};

export default Survey;
