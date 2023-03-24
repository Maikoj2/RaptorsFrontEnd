import React from 'react';
import { Card, CardBody, CardHeader, CartTitle } from '@/pages/Login';
import { ButtonCustom, CartLayout, Container, Row } from '@/style-components';
import { FlexBetween } from '../../style-components-private/flexBetween';
import { Box, useTheme, Typography } from '@mui/material';
import { dialogCloseSubject$ } from '@/components/Customdialago/Customdialago';
import { DividerHori } from '@/style-components/divider.styled';
import { useManagerContext } from '../../Context';
export interface WindowsToConfirmProps { }

const WindowsToConfirm: React.FC<WindowsToConfirmProps> = () => {
	const {  setConfirm   } =	useManagerContext()
	const theme: any = useTheme()
	const handleClic = (confirm:boolean) => {
		setConfirm(confirm)
		dialogCloseSubject$.setSubject = true
	}
	return <Container>
		<Row>
			<CartLayout width$={'100%'}>
				<Card id='CardPdialog'>
					<CardHeader>
						<Typography variant='h5' color={theme.palette.neutral[100]} fontSize={'1.5rem'}>
							Comfirmar 
						</Typography>
						<DividerHori mode={'$ligt'}/>
						<p>seguro que quieres
						eliminal este
						elemento?
						</p>
						
					</CardHeader>
					<CardBody>
						<FlexBetween justifyContent={'space-evenly'} >
							<Box width={'8rem'}>
								<ButtonCustom
									onClick={()=>handleClic(true)}
									type='submit'
									name='primary'
									color={theme.palette.neutral[100]}
								>si</ButtonCustom>
							</Box>
							<Box width={'8rem'}>
								<ButtonCustom
									onClick={()=>handleClic(false)}
									type='submit'
									name='primary'
									color={theme.palette.neutral[100]}
								>no</ButtonCustom>
							</Box>
						</FlexBetween>
					</CardBody>
				</Card>
			</CartLayout>

		</Row>
	</Container>;
};

export default WindowsToConfirm;
