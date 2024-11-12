import { Children, cloneElement, isValidElement, ReactNode } from 'react';
import { Controller, useForm, SubmitHandler, FieldValues, DeepPartial, Control, UseFormHandleSubmit } from 'react-hook-form';
import { z, ZodSchema } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { ButtonCustom, Label } from '@/style-components';
import { Box } from '@mui/material';

interface CustomFormProps<T extends FieldValues> {
	onSubmit: (data: T) => void;
	children: ReactNode;
	handleSubmit: UseFormHandleSubmit<T>; // Recibiendo `handleSubmit` como prop
	isValid: boolean;      // Recibiendo `isValid` como prop
	reset: () => void;
}


const CustomForm = <T extends FieldValues>({
	onSubmit,
	children,
	isValid,
	reset,
	handleSubmit
}: CustomFormProps<T>) => {
	const onSubmitHandler: SubmitHandler<T> = (data) => {
		if (isValid) {
			onSubmit(data);
			reset()
		}
	}
	return (
		<form onSubmit={handleSubmit(onSubmitHandler)}>
			{children}
		</form>
	);
};

export default CustomForm;
