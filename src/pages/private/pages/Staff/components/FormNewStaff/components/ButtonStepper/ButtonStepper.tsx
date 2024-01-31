import React from 'react';
import { Box, Button, useTheme } from '@mui/material';
import { ButtonCustom } from '../../../../../../../../style-components/buttom.Styled';
import { FlexBetween } from '@/pages/private/style-components-private';

export interface ButtonStepperProps {
	activeStep: number,
	isValid: boolean,
	handleBack: () => void,
	handleSkip: () => void,
	isStepOptional: (step: number) => boolean,
	handleNext: () => void,
	steps: string[],


}

const ButtonStepper: React.FC<ButtonStepperProps> = ({ activeStep, handleBack, handleSkip, isStepOptional, steps, handleNext , isValid }) => {
	const theme = useTheme()
	return <FlexBetween>
		<Box>
			<ButtonCustom
				disabled={activeStep === 0}
				onClick={handleBack}
				name='btnGradient'
				sx={{ mr: 1 }}
				>Back</ButtonCustom>
		</Box>


		<FlexBetween>
			<Box sx={{ flex: '1 1 auto' }} />
			{isStepOptional(activeStep) && (<ButtonCustom onClick={handleSkip} name='btnGradient' sx={{ mr: 1 }}>Skip</ButtonCustom>)}
			<Box>
				<ButtonCustom onClick={handleNext} name='btnGradient' sx={{ mr: 1 }} disabled={!isValid}>{activeStep === steps.length - 1 ? 'Finish' : 'Next'}</ButtonCustom>
			</Box>
		</FlexBetween>
	</FlexBetween >;
};

export default ButtonStepper;
