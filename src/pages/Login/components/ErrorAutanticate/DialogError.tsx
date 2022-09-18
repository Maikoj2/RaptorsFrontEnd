import React from 'react';
import { dialogCloseSubject$ } from '@/components/Customdialago/Customdialago';
import { DialogContent, Typography } from '@mui/material';
import CustomTitleDialog from '@/components/CustomTitleDialog/CustomTitleDialog';
import { Container } from '@/style-components/layout.styled';
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
		 <Container>

			<Card id='CardError'>
				<CustomTitleDialog id="customized-dialog-title" handleClose={handleClose}>
					{title}
				</CustomTitleDialog>
				<DialogContent dividers >
					<Typography gutterBottom>
						{children}
					</Typography>
				</DialogContent>
			</Card>
		 </Container>
		</>)
};

export default DialogError;

