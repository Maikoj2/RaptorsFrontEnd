import { useForm } from '@/hooks'
import React from 'react'
import { ButtonCustom, Label } from '@/style-components'
import { Box, useTheme } from '@mui/material'
import { CumstonInput, ErrorMsg } from '@/pages/Login'
import { CustomSelect } from '../CustomSelect'
import { roles } from '@/models'
import { FlexBetween } from '@/pages/private/style-components-private'
import { useUserStore } from '@/pages/private/hooks'

import { dialogCloseSubject$ } from '@/components/Customdialago/Customdialago'

export interface FormAddNewUserProps { }

const initialValues = {
	Names: '',
	email: '',
	password: '',
	repeatPassword: '',
	img: '',
	role: ''
}

const FormAddNewUser: React.FC<FormAddNewUserProps> = () => {
	const { AddUsersDataBase } = useUserStore()
	const { values, errors, touched, handleChange, handleSubmit, handleReset, isValid } = useForm({
		initialValues,
		validations: {
			Names: {
				validators: [(value: any) => value.length > 0],
				errorMessages: ['The name is required']
			},
			email: {
				validators: [
					(value: any) => value.length > 0,
					(value: any) => /\S+@\S+\.\S+/.test(value)
				],
				errorMessages: ['The email is required', 'The email is not valid']
			},
			password: {
				validators: [
					(value: any) => value.length > 0,
					(value: any) => value.length >= 8
				],
				errorMessages: ['The password is required', 'The password must be at least 8 characters']
			},
			repeatPassword: {
				validators: [
					(value: any) => value.length > 0,
					(value: any) => value === values.password
				],
				errorMessages: ['The password must be repeated', 'The passwords do not match']
			},
			role: {
				validators: [
					(value: any) => value !== ''
				],
				errorMessages: ['The role must be select one option']
			}
		},
		onSubmit: ({ Names, email, password, img, role }: any) => {
			AddUsersDataBase({ Names, email, password, img, role })
		}
	})
	const handleClic = () => {
		setTimeout(() => {
			handleReset()
		}, 10)
		dialogCloseSubject$.setSubject = true
	}

	const theme: any = useTheme()
	return (
		<form onSubmit={async (e) => { await handleSubmit(e) }}>
			<Label $cl={theme.palette.neutral[100]}>Nombre Completo</Label>
			<Box marginBottom={'1rem'}>
				<CumstonInput
					type="text"
					placeholder="Nombres..."
					name="Names"
					value={values.Names}
					onChange={handleChange}
					$backgroundColor={theme.palette.background.alt}
					$cl={theme.palette.neutral[100]}
				/>
				{touched.Names && errors.Names && <ErrorMsg>{errors.Names}</ErrorMsg>}
			</Box>
			<Label $cl={theme.palette.neutral[100]}>E-mail</Label>
			<Box marginBottom={'1rem'}>
				<CumstonInput
					type="email"
					placeholder="Examples@example.com"
					name="email"
					value={values.email}
					onChange={handleChange}
					$backgroundColor={theme.palette.background.alt}
					$cl={theme.palette.neutral[100]}
				/>
				{touched.email && errors.email && <ErrorMsg>{errors.email}</ErrorMsg>}
			</Box>
			<Label $cl={theme.palette.neutral[100]}>Contraseña</Label>
			<Box marginBottom={'1rem'}>
				<CumstonInput
					type="password"
					placeholder=""
					name="password"
					value={values.password}
					onChange={handleChange}
					$backgroundColor={theme.palette.background.alt}
					$cl={theme.palette.neutral[100]}
				/>
				{touched.password && errors.password && <ErrorMsg>{errors.password}</ErrorMsg>}
			</Box>
			<Label $cl={theme.palette.neutral[100]}>Repita Contraseña</Label>
			<Box marginBottom={'1rem'}>
				<CumstonInput
					type="password"
					placeholder=""
					name="repeatPassword"
					value={values.repeatPassword}
					onChange={handleChange}
					$backgroundColor={theme.palette.background.alt}
					$cl={theme.palette.neutral[100]}
				/>
				{touched.repeatPassword && errors.repeatPassword && <ErrorMsg>{errors.repeatPassword}</ErrorMsg>}
			</Box>
			<Label $cl={theme.palette.neutral[100]} >Role</Label>
			<FlexBetween >
				<Box display={'flex'} flexDirection={'column'}>
					<CustomSelect
						value={values.role}
						onChange={handleChange}
						name='role'
						options={[
							{ value: roles.ADMIN, label: 'Administrador' },
							{ value: roles.USER, label: 'Usuario' },
							{ value: roles.TEACHER, label: 'Profesor' }
						]}
					/>
					{touched.role && errors.role && <ErrorMsg>{errors.role}</ErrorMsg>}

				</Box>
				<Box marginBottom={'1rem'}>

					<ButtonCustom
						onClick={handleClic}
						type='submit'
						name='primary'
						color={theme.palette.neutral[100]}
						disabled={!isValid}>Agregar</ButtonCustom>
				</Box>

			</FlexBetween>

		</form >
	)
}

export default FormAddNewUser
