
import { useState, useEffect } from 'react';
import { StepContent } from './components';

export interface FormAddNewStaffProps {
	step: number;
	values: any, 
	touched:Record<string, boolean>,
	errors: Record<string, string>,
	handleChange: (event: React.ChangeEvent<any>) => void

}
export interface FormAddNewStaffRef extends HTMLFormElement {
	submitForm: (event: React.FormEvent<HTMLFormElement>) => void;
}

const FormAddNewStaff = ({ step = 0, values , touched, errors ,handleChange }: FormAddNewStaffProps) => {
	const [nextStep, setNextStep] = useState(step);
	useEffect(() => {
		setNextStep(step);
	}, [step])
	return <StepContent step={nextStep} values={values} touched={touched} errors={errors} handleChange={handleChange} />




};

export default FormAddNewStaff;
