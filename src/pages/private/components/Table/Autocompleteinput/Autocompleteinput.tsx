
import { Autocomplete, TextField } from '@mui/material';


interface Option {
    label: string;
    value: any;
}

interface AutoCompleteFieldProps {
    name: string;
    label: string;
    options: Option[];
    handleChange: any
    values: any
    disable?: boolean;
}

export const AutoCompleteField = ({ name, label, options = [{ value: '', label: '' }] , handleChange: handleChange, values, disable: disable=false}: AutoCompleteFieldProps) => {
  

    const handleAutocompleteChange = (event: React.SyntheticEvent<Element, Event>, value: Option | null) => {
        handleChange({
            target: {
                name,
                value: value?.value || null,
            },
        } as React.ChangeEvent<any>);

        value = values[name];
    };

    return (<>
        <Autocomplete
            options={options}
            value={options.find((option) => option.value === values[name]) || null}
            onChange={handleAutocompleteChange}
            getOptionLabel={(option: Option) => option.label}
            renderInput={(params) => <TextField {...params} label={label}  />}
            disabled= {disable}
            sx={{
                width: '100%',
                border: '1px solid #d2d6da',
                borderRadius: '0.5rem',
                marginRight: '1rem',
                '.MuiOutlinedInput-root':{
                    padding: '4px'
                }
                
            }}
        />
        
    </>

    );
};