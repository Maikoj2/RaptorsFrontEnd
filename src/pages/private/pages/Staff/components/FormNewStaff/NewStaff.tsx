import { Card, CardHeader, CartTitle } from '@/pages/Login';
import { CartLayout, Container, Row } from '@/style-components';
import React, { useEffect, useState } from 'react';
import FormAddNewStaff from '../FormAddNewStaff/FormAddNewStaff';
import { DividerHori } from '../../../../../../style-components/divider.styled';
import { StepperForm, FinishedFragment, ButtonStepper } from './components';
import { useForm } from '@/hooks';
import { initialStaffValues, validationsStaffInputs } from '../../models';
import { useManagerApiDataContext } from '@/pages/private/Context';
import { BackDropLoading } from '@/pages/private/components';
import { StatusData } from '@/models';

export interface FormNewStaffProps {

}
const steps = ['Datos Personales', 'detalles Personales', 'Datos laborales', 'detalles laborales'];
const FormNewStaff: React.FC<FormNewStaffProps> = () => {
	const { staffState, addStaff } = useManagerApiDataContext();
	const [isLoading, setIsLoading] = useState(false)
	const [activeStep, setActiveStep] = useState(0);
	const { values, errors, touched, handleChange, handleSubmit, handleReset, isValid} = useForm({
		initialValues: initialStaffValues,
		validations: validationsStaffInputs,
		onSubmit: () => {
			addStaff(values)
			handleReset()
		}
	})
	useEffect(() => {
		(staffState.status === StatusData.CHECKING)?setIsLoading(true):setIsLoading(false)
	}, [staffState.status])


	const [skipped, setSkipped] = useState(new Set<number>());
	const isStepOptional = (step: number) => {
		return step === 3;
	};

	const isStepSkipped = (step: number) => {
		return skipped.has(step);
	};

	const handleNext = () => {
		let newSkipped = skipped;
		if (isStepSkipped(activeStep)) {
			newSkipped = new Set(newSkipped.values());
			newSkipped.delete(activeStep);
		}

		setActiveStep((prevActiveStep) => prevActiveStep + 1);
		setSkipped(newSkipped);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleSkip = () => {
		if (!isStepOptional(activeStep)) {
			// You probably want to guard against something like this,
			// it should never occur unless someone's actively trying to break something.
			throw new Error("You can't skip a step that isn't optional.");
		}

		setActiveStep((prevActiveStep) => prevActiveStep + 1);
		setSkipped((prevSkipped) => {
			const newSkipped = new Set(prevSkipped.values());
			newSkipped.add(activeStep);
			return newSkipped;
		});
	};

	const handleResetStepper = () => {
		setActiveStep(0);
	};
	const handleSubmitForm = (e: any) => {
		handleSubmit(e)
		handleResetStepper()
	}


	return (
		<Container>
			<Row>
				<CartLayout width$={'100%'}>
					<Card id='CardDialog'>
						<CardHeader>
							<CartTitle >
								Agregar nuevo Empleado
							</CartTitle>
						</CardHeader>
						<DividerHori mode={'$light'} />
						<StepperForm steps={steps} skipped={skipped} activeStep={activeStep} isStepOptional={isStepOptional} isStepSkipped={isStepSkipped} />

						<form onSubmit={async (e) => { await handleSubmit(e) }} >
							{activeStep === steps.length ? (
								<FinishedFragment handleRefSubmit={handleSubmitForm} />
							) : (
								<React.Fragment>
									<DividerHori mode={'$light'} />
									<FormAddNewStaff
										step={activeStep}
										errors={errors}
										values={values}
										handleChange={handleChange}
										touched={touched} />
									<ButtonStepper
										activeStep={activeStep}
										steps={steps}
										handleBack={handleBack}
										handleNext={handleNext}
										isStepOptional={isStepOptional}
										handleSkip={handleSkip}
										isValid={isValid} />
								</React.Fragment>
							)}
						</form>
					</Card>
				</CartLayout>
				<BackDropLoading upLoading={isLoading}></BackDropLoading>
			</Row>
		</Container>
	)
};

export default FormNewStaff;
