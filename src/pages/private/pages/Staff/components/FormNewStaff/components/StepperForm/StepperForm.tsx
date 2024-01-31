import React from 'react';
import { Stepper, Typography, Step, StepLabel } from '@mui/material';
export interface StepperFormProps {
	steps: string[]
	activeStep: number,
	skipped:Set<number>,
	isStepOptional: (step: number) => boolean,
	isStepSkipped:(step: number) => boolean,
}

const StepperForm : React.FC<StepperFormProps> = ({steps = [], activeStep , skipped, isStepSkipped, isStepOptional}) => {

	return <Stepper activeStep={activeStep} sx={{
		alignItems: 'flex-start',
		marginTop: '1rem 1rem',
		'&.Mui-completed': {
			fontWeight: 700
		}
	}}>
		{steps.map((label, index) => {
			const stepProps: { completed?: boolean } = {};
			const labelProps: {
				optional?: React.ReactNode;
			} = {};
			if (isStepOptional(index)) {
				labelProps.optional = (
					<Typography variant="caption">Optional</Typography>
				);
			}
			if (isStepSkipped(index)) {
				stepProps.completed = false;
			}
			return (
				<Step key={label} {...stepProps} sx={{

				}}>
					<StepLabel {...labelProps} sx={{
						flexDirection: { xs: 'column', sm: 'row' },
						width: { xs: '100%', sm: 'auto' }
					}}>{label}</StepLabel>
				</Step>
			);
		})}
	</Stepper>;
};

export default StepperForm;
