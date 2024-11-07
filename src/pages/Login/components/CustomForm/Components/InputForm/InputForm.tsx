import { Box } from "@mui/material";
import { CustomInput, ErrorMsg } from '@/pages/Login';
import { Label } from '@/style-components';
import { Control, Controller, FieldError } from "react-hook-form";

export type InputFormProps = {
	name: string,
	control: Control<any>
	label: string,
	type?: string,
	error?: FieldError,
	placeholder?: string

}

const InputForm = ({ name, type, control, placeholder, error, label }: InputFormProps) => {

	return (
		<>
			<Label htmlFor={name}>{label}</Label>
			<Box marginBottom={'1rem'}>
				<Controller
					name={name}
					control={control}
					render={({ field }) => (
						<>
							<CustomInput
								id={name}
								type={type}
								{...field}
								placeholder={placeholder}
								name={name} 
							/>
							{error && <ErrorMsg>{error.message}</ErrorMsg>}
						</>
					)
					}
				/>


			</Box>
		</>
	)
};

export default InputForm;
