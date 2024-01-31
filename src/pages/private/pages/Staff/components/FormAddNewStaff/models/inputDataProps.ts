export interface DataInputsProps {
	values: any;
	touched: Record<string, boolean>;
	errors: Record<string, string>;
	handleChange: (event: React.ChangeEvent<any>) => void;
}