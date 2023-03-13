import React from 'react';
import { dialogCloseSubject$ } from '@/components/Customdialago/Customdialago';
import { Box, DialogContent, Divider, Typography } from '@mui/material';
import CustomTitleDialog from '@/components/CustomTitleDialog/CustomTitleDialog';
import {  Card } from '../../style-components/cart.style';


export interface DialogTitleProps {
	title: string;
	children?: React.ReactNode;
}
const handleClose = () => {
	dialogCloseSubject$.setSubject = true;
}

const DialogError = ({ title, children }: DialogTitleProps) => {

	return (
		<>
		 <Box> 

			<Card id='CardError'>
				<CustomTitleDialog 
				id="customized-dialog-title" 
				handleClose={handleClose} 
				fontWeight={700} 
				letterSpacing={'5px'}  
				fontSize={'1.3rem'}
				
				>
					{title}
				</CustomTitleDialog>
				<Divider />
				<DialogContent sx={{
					padding: '1rem 8rem 0 0rem'
				}} >
					<Typography gutterBottom>
						{children}
					</Typography>
				</DialogContent>
			</Card>
		 </Box>
		</>)
};

export default DialogError;

