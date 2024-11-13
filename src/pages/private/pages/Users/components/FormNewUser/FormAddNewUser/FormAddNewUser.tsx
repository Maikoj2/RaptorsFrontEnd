import { dialogCloseSubject$ } from "@/components/Customdialago/Customdialago"
// import { useForm } from "@/hooks"
import { roles } from "@/models"
import { CustomInput, ErrorMsg } from "@/pages/Login"
import { useUserDataManager } from "@/pages/private/hooks"
import { FlexBetween } from "@/pages/private/style-components-private"
import { ButtonCustom, Label } from "@/style-components"
import { Box, useTheme } from "@mui/material"
import { CustomSelect } from "../CustomSelect"
import { useManagerApiDataContext } from "@/pages/private/Context"
import { zodResolver } from "@hookform/resolvers/zod"
import { SubmitHandler, useForm, Controller } from 'react-hook-form';
import { NewUserSchema, FormUserValues } from '../../../models/SchemaZod';
import { InputForm } from "@/pages/Login/components/CustomForm/Components"


export interface FormAddNewUserProps { }

const initialUserValues = {
	Names: '',
	email: '',
	password: '',
	repeatPassword: '',
	img: '',
	role: ''
}

const FormAddNewUser = () => {
	const { UserState: { Data, status }, addUser } = useManagerApiDataContext()
	const { control, handleSubmit, reset, formState: { errors, isValid, } } = useForm<FormUserValues>({
		resolver: zodResolver(NewUserSchema),
		defaultValues: initialUserValues,
	})
	const roleOptions = [
		{ value: roles.ADMIN, label: 'Administrador' },
		{ value: roles.USER, label: 'Usuario' },
		{ value: roles.TEACHER, label: 'Profesor' }
	]
	const onSubmit: SubmitHandler<FormUserValues> = (data) => {
		isValid && addUser(data);
	}
	const handleClic = () => {
		if (isValid) {
			setTimeout(() => {
				reset()
			}, 10)
			dialogCloseSubject$.setSubject = true
		}
	}

	const theme: any = useTheme()
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<InputForm
				name="Names"
				control={control}
				type="text"
				label="Nombre Completo"
				$cl={theme.palette.neutral[100]}
				placeholder="Nombres..."
				error={errors.Names}
				$backgroundColor={theme.palette.background.alt}
			/>
			<InputForm
				name="email"
				control={control}
				type="email"
				label="E-mail"
				$cl={theme.palette.neutral[100]}
				placeholder="Examples@example.com"
				error={errors.email}
				$backgroundColor={theme.palette.background.alt}
			/>
			<InputForm
				name="password"
				control={control}
				type="password"
				label="Contraseña"
				$cl={theme.palette.neutral[100]}
				placeholder=""
				error={errors.password}
				$backgroundColor={theme.palette.background.alt}
			/>
			<InputForm
				name="repeatPassword"
				control={control}
				type="password"
				label="Repita Contraseña"
				$cl={theme.palette.neutral[100]}
				placeholder=""
				error={errors.repeatPassword}
				$backgroundColor={theme.palette.background.alt}
			/>

			<Label $cl={theme.palette.neutral[100]} >Role</Label>
			<FlexBetween >
				<Box display={'flex'} flexDirection={'column'}>
					<Controller
						name="role"
						control={control}
						render={({ field }) => (

							<CustomSelect
								name='role'
								label="Select Role"
								options={roleOptions}
								value={field.value} 
								error={errors.role}
								onChange={field.onChange} 
								m={'0px'}
							/>
						)}
					/>
				</Box>
				<Box marginBottom={'1rem'}>
					<ButtonCustom
						onClick={handleClic}
						type='submit'
						name='primary'
						$color={theme.palette.neutral[100]}
					// disabled={!isValid}
					>Agregar</ButtonCustom>
				</Box>
			</FlexBetween>

		</form >
	)
}

export default FormAddNewUser
