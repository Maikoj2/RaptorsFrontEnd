import styled from "styled-components";
import second from '../../../../src/assets/Rts.png'

export const BackGrounImg = styled.div`
    overflow: hidden;
    width: 50%;
    height: 100% !important;
    position: absolute;
    background-image: url(${second});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
@media (min-width: 768px) {
    display: block !important
}
 
`;