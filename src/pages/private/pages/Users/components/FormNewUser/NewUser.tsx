import { Card, CardBody, CardHeader, CartTitle } from '@/pages/Login'
import { Container, Row } from '@/style-components'
import React from 'react'
import { CartLayout } from '../../../../../../style-components/layout.styled'
import { FormAddNewUser } from './FormAddNewUser'
export interface FormNewUserProps { }

const FormNewUser: React.FC<FormNewUserProps> = () => {
  return <Container>
		<Row>
			<CartLayout width$={'100%'}>
				<Card id='CardDialog'>
					<CardHeader>
						<CartTitle >
							Agregar nuevo usuario
						</CartTitle>
					</CardHeader>
					<CardBody>
						<FormAddNewUser></FormAddNewUser>
					</CardBody>
				</Card>
			</CartLayout>

		</Row>
	</Container>
}

export default FormNewUser
