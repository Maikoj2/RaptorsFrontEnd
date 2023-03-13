
import styled from 'styled-components';
export const IconStyler = styled.div.attrs( props => {
    {props.children}
})`
 font-size: ${props => props.$size}
`