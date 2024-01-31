import { Box, Button, Typography } from '@mui/material';
import React from 'react';
export interface FinishedFragmentProps {
	handleRefSubmit: (e:any) => void
}

const FinishedFragment: React.FC<FinishedFragmentProps> = ({ handleRefSubmit }) => {

	const handleClick = (e:any) => handleRefSubmit(e)

	return <React.Fragment>
		<Typography sx={{ mt: 2, mb: 1 }}>
			All steps completed - you&apos;re finished
		</Typography>

		<Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
			<Box sx={{ flex: '1 1 auto' }} />
			<Button type='submit' onClick={ async (e) => { await handleClick(e)}}>Guardar información</Button>
		</Box>
	</React.Fragment>;
};

export default FinishedFragment;
