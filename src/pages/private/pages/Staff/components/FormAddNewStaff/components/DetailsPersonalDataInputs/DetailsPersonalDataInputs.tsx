import React, { useEffect, useState } from 'react';
import { FlexBetween } from '@/pages/private/style-components-private';
import { CustomInput, ErrorMsg } from '@/pages/Login';
import { Label } from '@/style-components';
import { useTheme, Box } from '@mui/material';
import { AutoCompleteField } from '@/pages/private/components/Table/Autocompleteinput/Autocompleteinput';
import { Colombia } from '@/pages/private/models';
import { DataInputsProps } from '../../models/inputDataProps';



const DetailsPersonalDataInputs: React.FC<DataInputsProps> = ({ values, touched, errors, handleChange }) => {
	const theme: any = useTheme();
	const [MunicipeOptions, setMunicipeOptions] = useState<any>([{ value: '', label: '' }]);
	const handleInputChange = (event: React.ChangeEvent<any>) => {
		handleChange(event)
	}
	const DeparmentOption = Colombia.map((data) => {
		return { value: data.departamento, label: data.departamento }
	})
	useEffect(() => {
		if (values.DepartamentBirth !== '' || undefined) {
			const departamentBirth = values.DepartamentBirth
			const ciudades = Colombia.find((data) => {
				if (departamentBirth === data.departamento) { return data }
			})
			const cityOptions = ciudades?.ciudades.map((value) => { return { value: value, label: value } })
			setMunicipeOptions(cityOptions)
		}

	}, [values.DepartamentBirth])

	return <>
		<FlexBetween  >
			<Box marginBottom={'1rem'}>
				<Label $cl={theme.palette.neutral[100]}>Fecha de Nacimiento</Label>

				<CustomInput
					type="date"
					name="DateofBirth"
					value={values.DateofBirth}
					onChange={handleInputChange}
					$backgroundColor={theme.palette.background.alt}
					$cl={theme.palette.neutral[100]}
					max={new Date().toISOString().split("T")[0]}
				/>
				{touched.DateofBirth && errors.DateofBirth && <ErrorMsg>{errors.DateofBirth}</ErrorMsg>}
			</Box>
			<Box marginBottom={'1rem'} minWidth={'30%'}>
				<Label $cl={theme.palette.neutral[100]}>lugar de Nacimiento</Label>
				<AutoCompleteField
					name='DepartamentBirth'
					options={DeparmentOption}
					label="Departamento"
					handleChange={handleInputChange}
					values={values}
				/>
				{touched.DepartamentBirth && errors.DepartamentBirth && <ErrorMsg>{errors.DepartamentBirth}</ErrorMsg>}
			</Box>
			<Box marginBottom={'1rem'} marginTop={'1rem'} minWidth={'30%'}>
				<AutoCompleteField
					name='MunicipeBirth'
					options={MunicipeOptions}
					label="ciudades"
					handleChange={handleInputChange}
					values={values}
					disable={values.DepartamentBirth === '' || undefined}

				/>
				{touched.MunicipeBirth && errors.MunicipeBirth && <ErrorMsg>{errors.MunicipeBirth}</ErrorMsg>}

			</Box>
		</FlexBetween>
		<FlexBetween sx={{

		}} >

			<Box marginBottom={'1rem'} marginRight={'1rem'}>
				<Label $cl={theme.palette.neutral[100]}>EPS</Label>

				<CustomInput
					type="text"
					placeholder=""
					name="EPS"
					value={values.EPS}
					onChange={handleInputChange}
					$backgroundColor={theme.palette.background.alt}
					$cl={theme.palette.neutral[100]}
				/>
				{touched.EPS && errors.EPS && <ErrorMsg>{errors.EPS}</ErrorMsg>}
			</Box>
			<Box marginBottom={'1rem'} marginRight={'1rem'}>
				<Label $cl={theme.palette.neutral[100]}>Dirección</Label>
				<CustomInput
					type="text"
					placeholder=""
					name="Address"
					value={values.Address}
					onChange={handleInputChange}
					$backgroundColor={theme.palette.background.alt}
					$cl={theme.palette.neutral[100]}
				/>
				{touched.Address && errors.Address && <ErrorMsg>{errors.Address}</ErrorMsg>}
			</Box>
			<Box marginBottom={'1rem'} >
				<Label $cl={theme.palette.neutral[100]}>Barrio</Label>

				<CustomInput
					type="text"
					placeholder=""
					name="neighborhood"
					value={values.neighborhood}
					onChange={handleInputChange}
					$backgroundColor={theme.palette.background.alt}
					$cl={theme.palette.neutral[100]}
				/>
				{touched.neighborhood && errors.neighborhood && <ErrorMsg>{errors.neighborhood}</ErrorMsg>}
			</Box>

		</FlexBetween>
	</>;
};

export default DetailsPersonalDataInputs;
