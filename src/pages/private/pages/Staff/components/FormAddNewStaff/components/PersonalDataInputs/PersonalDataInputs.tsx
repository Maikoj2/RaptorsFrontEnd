import React from 'react';
import { useTheme, Box } from '@mui/material';
import { FlexBetween } from '@/pages/private/style-components-private';
import { Label } from '@/style-components';
import { typeid } from '@/models';
import { CustomSelect } from '@/pages/private/pages/Users';
import { CustomInput, ErrorMsg } from '@/pages/Login';
import { DataInputsProps } from '../../models';



const PersonalDataInputs: React.FC<DataInputsProps> = ({ values, touched, errors, handleChange }) => {
	const theme: any = useTheme();
	const handleInputChange = (event:React.ChangeEvent<any>) => {
		handleChange(event)
	}
	return <><FlexBetween sx={{
		justifyContent: 'start',
	}} >
		<Box display={'flex'} flexDirection={'column'}>
			<Label $cl={theme.palette.neutral[100]}>Tipo de identificación</Label>
			<CustomSelect
				value={values.IdType}
				onChange={handleInputChange}
				name='IdType'
				options={[
					{ value: typeid.ID, label: 'Cédula ciudadanía' },
					{ value: typeid.T_ID, label: 'Tarjeta identidad' },
					{ value: typeid.PASSPORT, label: 'Pasaporte' }
				]}
				m={'0 1rem 1rem 0 '}

			/>
			{errors.IdType && <ErrorMsg>{errors.IdType}</ErrorMsg>}

		</Box>
		<Box marginBottom={'1rem'}>
			<Label $cl={theme.palette.neutral[100]}>N Identificación</Label>

			<CustomInput
				type="number"
				placeholder="ejemplo 12532..."
				name="id"
				value={values.id}
				onChange={handleInputChange}
				$backgroundColor={theme.palette.background.alt}
				$cl={theme.palette.neutral[100]}
			/>
			{touched.id && errors.id && <ErrorMsg>{errors.id}</ErrorMsg>}
		</Box>
	</FlexBetween>
		<FlexBetween sx={{
			justifyContent: 'start',
		}} >
			<Box marginBottom={'1rem'} marginRight={'1rem'}>
				<Label $cl={theme.palette.neutral[100]}>Nombres</Label>
				<CustomInput
					type="text"
					placeholder="Nombres..."
					name="Names"
					value={values.Names}
					onChange={handleInputChange}
					$backgroundColor={theme.palette.background.alt}
					$cl={theme.palette.neutral[100]}
				/>
				{touched.Names && errors.Names && <ErrorMsg>{errors.Names}</ErrorMsg>}
			</Box>
			<Box marginBottom={'1rem'}>
				<Label $cl={theme.palette.neutral[100]}>Apellidos</Label>
				<CustomInput
					type="text"
					placeholder="Apellidos..."
					name="SureNames"
					value={values.SureNames}
					onChange={handleInputChange}
					$backgroundColor={theme.palette.background.alt}
					$cl={theme.palette.neutral[100]}
				/>
				{touched.SureNames && errors.SureNames && <ErrorMsg>{errors.SureNames}</ErrorMsg>}
			</Box>
			<Box display={'flex'} flexDirection={'column'}>
				<Label $cl={theme.palette.neutral[100]}>Sexo</Label>
				<CustomSelect
					value={values.Gender}
					onChange={handleInputChange}
					name='Gender'
					options={[
						{ value: 'M', label: 'Masculino' },
						{ value: 'F', label: 'Femenino' },
						{ value: 'N/A', label: 'Otro' }
					]}
					m={'0 1rem 1rem  1rem'}

				/>
				{touched.Gender && errors.Gender && <ErrorMsg>{errors.Gender}</ErrorMsg>}

			</Box>
		</FlexBetween>
		<FlexBetween sx={{
			justifyContent: 'start',

		}} >

			<Box marginBottom={'1rem'}>
				<Label $cl={theme.palette.neutral[100]}>E-mail</Label>

				<CustomInput
					type="email"
					placeholder="Examples@example.com"
					name="email"
					value={values.email}
					onChange={handleInputChange}
					$backgroundColor={theme.palette.background.alt}
					$cl={theme.palette.neutral[100]}
				/>
				{touched.email && errors.email && <ErrorMsg>{errors.email}</ErrorMsg>}
			</Box>
			<Box marginBottom={'1rem'} marginLeft={'1rem'}>
				<Label $cl={theme.palette.neutral[100]}>Teléfono</Label>
				<CustomInput
					type="text"
					placeholder=""
					name="Phone"
					value={values.Phone}
					onChange={handleInputChange}
					$backgroundColor={theme.palette.background.alt}
					$cl={theme.palette.neutral[100]}
				/>
				{touched.Phone && errors.Phone && <ErrorMsg>{errors.Phone}</ErrorMsg>}
			</Box>
			<Box marginBottom={'1rem'} marginLeft={'1rem'}>
				<Label $cl={theme.palette.neutral[100]}>Profesión </Label>
				<CustomInput
					type="text"
					placeholder=""
					name="profession"
					value={values.profession}
					onChange={handleInputChange}
					$backgroundColor={theme.palette.background.alt}
					$cl={theme.palette.neutral[100]}
				/>
				{touched.profession && errors.profession && <ErrorMsg>{errors.profession}</ErrorMsg>}
			</Box>
		</FlexBetween>

	</>;
};

export default PersonalDataInputs;
