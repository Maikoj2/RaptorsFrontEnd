import { Input, TextField } from '@mui/material'
import styled from 'styled-components'
interface CumstonInputProps {
  $backgroundColor?: string,
  $cl?: string,
}
export const CumstonInput = styled.input<CumstonInputProps>` 
display: block;
width: 100%;
padding: 0.5rem 0.75rem;
font-size: 0.875rem;
font-weight: 400;
line-height: 1.4rem;
color:  ${(props: any) => props.$cl || '#495057'};
background-color: ${(props: any) => props.$backgroundColor || '#fff'};
background-clip: padding-box;
border: 1px solid #d2d6da;
appearance: none;
border-radius: 0.5rem;
transition: box-shadow 0.15s ease, border-color 0.15s ease;

&:focus {
    color: #495057;
    background-color: #fff;
    border-color: #DA7625;
    outline: 0;
    box-shadow: 0 0 0 2px #e9aede;
  }
  &::-webkit-date-and-time-value {
    height: 1.4rem;
  }
  &::placeholder {
    color: #adb5bd;
    opacity: 1;
  }
  
  &:disabled{
    background-color: #e9ecef;
    opacity: 1;
}
&::file-selector-button {
    padding: 0.5rem 0.75rem;
    margin: -0.5rem -0.75rem;
    margin-inline-end: 0.75rem;
    color: #495057;
    background-color: #fff;
    pointer-events: none;
    border-color: inherit;
    border-style: solid;
    border-width: 0;
    border-inline-end-width: 1px;
    border-radius: 0;
    transition: all 0.15s ease-in;
  }
  &:not(:disabled):not([readonly])::file-selector-button {
    background-color: #f2f2f2;
  }
  &::-webkit-file-upload-button {
    padding: 0.5rem 0.75rem;
    margin: -0.5rem -0.75rem;
    margin-inline-end: 0.75rem;
    color: #495057;
    background-color: #fff;
    pointer-events: none;
    border-color: inherit;
    border-style: solid;
    border-width: 0;
    border-inline-end-width: 1px;
    border-radius: 0;
    transition: all 0.15s ease-in;
  }
  &:not(:disabled):not([readonly])::-webkit-file-upload-button {
    background-color: #f2f2f2;
  }
  
  @media (prefers-reduced-motion: reduce) {
    & {
        transition: none;
    }
    &::file-selector-button {
        transition: none;
      }
    &:-webkit-file-upload-button {
        transition: none;
    }
    
  }

`

export const LayoutcheckBoxInputswitch = styled.div` 
 padding-left: 3rem;
  display: block;
  min-height: 1.5rem;
  margin-bottom: 0.125rem;
`

export const CheckBoxInputswitch = styled.input` 
  width: 2.5rem;
  margin-left: -3rem;
  background-image: none;
  background-position: left center;
  appearance: none;
  border-radius: 2.5rem;
  border: 1px solid #e9ecef;
  margin-top: 0.135em;
 vertical-align: top;
  position: relative;
  background-color: rgba(58, 65, 111, 0.1);
  height: 1.25em;
  float: left;
  transition: background-color 0.25s ease, border-color 0.25s ease, background-position 0.15s ease-in-out, opacity 0.15s ease-out, box-shadow 0.15s ease-in-out;
  &:focus {
    background-image: none;
  }

  &:checked {
    background-position: right center;
    background-image: none;
}
&:after {
    transition: transform 0.25s ease-in-out, background-color 0.25s ease-in-out;
    content: "";
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    position: absolute;
    background-color: #B3B2B2;
    transform: translateX(1px);
    box-shadow: 0 0.3125rem 0.625rem 0 rgba(0, 0, 0, 0.12);
    top: 1px;
  }

  &:checked:after {
    transform: translateX(21px);
  }

  &:checked {
    border-color: rgba(58, 65, 111, 0.95);
    background-color: rgba(58, 65, 111, 0.95);
    background-position: right center;
    background-image: none;
  }
  
 

  
  @media (prefers-reduced-motion: reduce) {
    & {
        transition: none;
    } 
}
  
`
