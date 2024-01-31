import { Backdrop, CircularProgress } from '@mui/material';
import React from 'react';
export interface BackDropLoadingProps { 
	upLoading: boolean;
}

const BackDropLoading: React.FC<BackDropLoadingProps> = ({upLoading}) => {
	return <Backdrop
		sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
		open={upLoading}
	>
		<CircularProgress color="inherit" />
	</Backdrop>
};

export default BackDropLoading;
