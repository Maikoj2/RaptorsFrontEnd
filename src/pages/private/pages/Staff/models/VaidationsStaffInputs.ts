import { validateDateOfBirth } from "@/helpers";

export const validationsStaffInputs = {
	id: {
		validators: [(value: any) => value.length > 0,],
		errorMessages: ['The id is required']
	},
	Names: {
		validators: [(value: any) => value.length > 0],
		errorMessages: ['The name is required']
	},
	SureNames: {
		validators: [(value: any) => value.length > 0],
		errorMessages: ['The name is required']
	},
	email: {
		validators: [
			(value: any) => value.length > 0,
			(value: any) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
		],
		errorMessages: ['The email is required', 'The email is not valid']
	},
	Gender: {
		validators: [
			(value: any) => !!value ,
		],
		errorMessages: ['The Gender is required']
	},
	Phone: {
		validators: [
			(value: any) => value.length > 0,
		],
		errorMessages: ['The password must be repeated', 'The passwords do not match']
	},
	role: {
		validators: [
			(value: any) => value !== null,
		],
		errorMessages: ['The role must be select one option']
	},
	id_BaseSalary: {
		validators: [
			(value: any) => value !== null,
		],
		errorMessages: ['The id_BaseSalary must be select one option']
	},
	TypeSalary: {
		validators: [
			(value: any) => value !== null,
		],
		errorMessages: ['The TypeSalary must be select one option']
	},
	DateofBirth: {
		validators: [
			(value: any) => validateDateOfBirth(value, 18),
		],
		errorMessages: ['Menores de edad no pueden ser trabajadores']
	},
	DepartamentBirth: {
		validators: [
			(value: any) => value !== null,
		],
		errorMessages: ['The DepartamentBirth must be select one option']
	},
	MunicipeBirth: {
		validators: [
			(value: any) => value !== null,
		],
		errorMessages: ['The MunicipeBirth must be select one option']
	},
	EPS: {
		validators: [
			(value: any) => value.length > 0,
		],
		errorMessages: ['The EPS must be select one option']
	},
}
