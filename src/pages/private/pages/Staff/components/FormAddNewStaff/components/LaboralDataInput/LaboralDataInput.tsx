import React, { useState, useEffect } from 'react';
import { Box, useTheme } from '@mui/material';
import { Salary, roles } from '@/models';
import { ErrorMsg, CustomInput } from '@/pages/Login';
import { AutoCompleteField } from '@/pages/private/components/Table/Autocompleteinput';
import { useManagerApiDataContext } from '@/pages/private/Context';
import { CustomSelect } from '@/pages/private/pages/Users';
import { FlexBetween } from '@/pages/private/style-components-private';
import { Label } from '@/style-components';
import { DataInputsProps } from '../../models';



const LaboralDataInput: React.FC<DataInputsProps> = ({ values, touched, errors, handleChange }) => {
	const theme: any = useTheme()
	const [valuePerhour, setvaluePerHour] = useState(0);
	const { BaseSalaryState } = useManagerApiDataContext();
	const [Salaybase, setSalarybase] = useState(0);
	const options = BaseSalaryState.Data.map((data) => {
		return { value: data._id, label: data.position }
	})
	useEffect(() => {
		BaseSalaryState.Data.map((res) => {
			if (res._id === values.id_BaseSalary) {
				setvaluePerHour(res.valuePerHour as number)
				setSalarybase(res.BaseSalary as number)
				values.occupation = res.position
				values.baseSalary = res.BaseSalary
				values.valueperHour = res.valuePerHour
			}
		})
	}, [values.id_BaseSalary])
	const handleInputChange = (event: React.ChangeEvent<any>) => {
		handleChange(event)
	}
	return <><FlexBetween sx={{
		justifyContent: 'flex-start',

	}} >
		<Box margin={'1rem 1rem 1rem 0'} minWidth={'30%'}>
			<AutoCompleteField
				name='id_BaseSalary'
				options={options}
				label="Puesto Laboral"
				handleChange={handleInputChange}
				values={values}
			/>
			{errors.id_BaseSalary && <ErrorMsg>{errors.id_BaseSalary}</ErrorMsg>}
		</Box>
		<Box display={'flex'} flexDirection={'column'} minWidth={'30%'}>
			<Label $cl={theme.palette.neutral[100]}>Tipo de pago</Label>
			<CustomSelect
				value={values.TypeSalary}
				onChange={handleInputChange}
				name='TypeSalary'
				options={[
					{ value: Salary.MONTHLY, label: 'Mensual' },
					{ value: Salary.BIWEEKLY, label: 'Quincenal' },
					{ value: Salary.WEEKLY, label: 'Semanal' },
					{ value: Salary.DAILY, label: 'Diario' },
					{ value: Salary.PERHOUR, label: 'Por hora' }
				]}
				m={'0 1rem 1rem 0 '}
				minWidth='100%'
			/>
			{touched.TypeSalary && errors.TypeSalary && <ErrorMsg>{errors.TypeSalary}</ErrorMsg>}

		</Box>


	</FlexBetween>
		<FlexBetween sx={{
			justifyContent: 'flex-start',

		}} >
			<Box marginBottom={'1rem'} marginRight={'1rem'}>
				<Label $cl={theme.palette.neutral[100]}>salario Base</Label>
				<CustomInput
					type="number"
					placeholder="..."
					name="baseSalary"
					value={Salaybase}
					disabled
					$backgroundColor={theme.palette.background.alt}
					$cl={theme.palette.neutral[100]}
				/>

			</Box>
			<Box marginBottom={'1rem'} marginRight={'1rem'} >
				<Label $cl={theme.palette.neutral[100]}>Valor por hora</Label>
				<CustomInput
					type="number"
					placeholder="..."
					name="valueperHour"
					value={valuePerhour}
					$backgroundColor={theme.palette.background.alt}
					$cl={theme.palette.neutral[100]}
					disabled
				/>

			</Box>
			<Box marginBottom={'1rem'} marginRight={'1rem'}>
			<Label $cl={theme.palette.neutral[100]}>Rol</Label>
				<CustomSelect
					value={values.role}
					onChange={handleChange}
					name='role'
					options={[
						{ value: roles.ADMIN, label: 'Administrador' },
						{ value: roles.USER, label: 'Usuario' },
						{ value: roles.TEACHER, label: 'Profesor' }
					]}
					m={'0px'}
				/>
				{touched.role && errors.role && <ErrorMsg>{errors.role}</ErrorMsg>}

			</Box>
		</FlexBetween></>;
};

export default LaboralDataInput;
