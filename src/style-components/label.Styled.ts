import styled, { css } from 'styled-components'

interface labelProps {
  $className?: string
  $cl?: string
}
export const Label = styled.label<labelProps>`

  ${(props) => {
    switch (props.$className) {
      case 'checkLabel':
        return css`
        cursor: pointer;
        font-size: 0.875rem;
        font-weight: 400;
        `
      default:
        return css`
        font-size: 0.75rem;
        font-weight: 700;
       
        color: ${(props: any) => props.$cl || '#344767'} ;
        margin-left: 0.25rem;
        `
    }
  }}
`
