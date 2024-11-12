import { type ReactNode } from 'react'
import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { Control, Controller, FieldError, UseFormClearErrors } from 'react-hook-form';
import { ErrorMsg } from '@/pages/Login';
import { FormUserValues } from '../../../models';

interface SelectOption {
  value: string
  label: string
}

interface SelectProps {
  label?: string
  m?: string
  name: string
  options: SelectOption[]
  disabled?: boolean
  children?: ReactNode
  minWidth?: string
  control: Control<any>,
  error?: FieldError,
}

const CustomSelect = ({
  label,
  options,
  disabled = false,
  children,
  name,
  m,
  minWidth,
  control,
  error,

}: SelectProps) => {
  return (
    <Box marginBottom={(!m) ? '1rem' : m}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <>
            <FormControl sx={{ m: (!m) ? '1rem' : m, minWidth: (!minWidth) ? 120 : minWidth }} size="small">
              {label && (
                <InputLabel id="demo-select-small-label" color="secondary">
                  {label}
                </InputLabel>
              )}
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                {...field}
                name={name}
                onChange={(e: any) => {field.onChange(e.target.value) }}
                disabled={disabled}
                sx={{
                  border: '1px solid #d2d6da',
                  borderRadius: '0.5rem',
                  padding: '0.07rem 0.75rem',
                }}
              >
                {options.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
                {children}
              </Select>
            </FormControl>
            {error && <ErrorMsg>{error.message}</ErrorMsg>}
          </>

        )}
      />
    </Box>
  )
}

export default CustomSelect
