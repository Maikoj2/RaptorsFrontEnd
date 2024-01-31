
import styled from 'styled-components'
import { Box } from '@mui/material';

export const BoxFooter = styled(Box).attrs(props => {
  { props.children }
})`
 padding-left: 0;
 font-size: 0.813rem;
 font-weight: 400;
 margin-top: 1rem;
 border: 1px solid rgba(255, 255, 255,);
`
export const BoxCopyright = styled(Box)`
    padding: 0.9rem;  
`
interface propsBodyCopyright{
    $color: string;
}
export const BodyCopyright = styled.p<propsBodyCopyright>`
    text-align: center; 
    margin: 0;
    color: ${props => props.$color || '#918f8f' } 
`