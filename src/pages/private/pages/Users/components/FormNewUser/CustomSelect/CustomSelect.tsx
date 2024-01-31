import React, { type ReactNode } from 'react'
import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material'

interface SelectOption {
  value: string
  label: string
}

interface SelectProps {
  label?: string
  value?: string
  m?: string
  name?: string
  options: SelectOption[]
  onChange: (value: any) => void
  disabled?: boolean
  children?: ReactNode
  minWidth?: string 
}

const CustomSelect: React.FC<SelectProps> = ({
  label,
  value,
  options,
  onChange,
  disabled = false,
  children,
  name,
  m,
  minWidth
}) => {
  return (
    <Box marginBottom={(!m)?'1rem':m}>
      <FormControl sx={{ m: (!m)?'1rem':m, minWidth: (!minWidth)?120:minWidth }} size="small">
        {label && (
          <InputLabel id="demo-select-small-label" color="secondary">
            {label}
          </InputLabel>
        )}
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={value}
          name={name}
          onChange={(e: any) => { onChange(e) }}
          disabled={disabled}
          sx= {{
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
    </Box>
  )
}

export default CustomSelect
