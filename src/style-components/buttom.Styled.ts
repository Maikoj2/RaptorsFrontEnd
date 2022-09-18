import styled, { css } from 'styled-components'

export const ButtonCustom = styled.button`
    display: inline-block;
    line-height: 1.4;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    user-select: none;
    background-color: transparent;
    border: 0 ;
    padding: 0.75rem 1.5rem;
    font-size: 0.75rem;
    border-radius: 0.5rem;
    transition: all 0.15s ease-in;
    font-weight: 700;
    
    &:not(:disabled){
        cursor: pointer;
    }
    @media (prefers-reduced-motion: reduce) {
        & {
            transition: none;
        }
    }
    &:hover {
         color: #67748e;
    }
    &:hover:not(.btn-icon-only) {
        box-shadow: 0 3px 5px -1px rgb(0 0 0 / 9%), 0 2px 3px -1px rgb(0 0 0 / 7%);
        transform: scale(1.02);
    
    }
    &:disabled{
        pointer-events: none;
        opacity: 0.65;
    }
    &:focus{
        outline: 0;
        box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.09), 0 2px 3px -1px rgba(0, 0, 0, 0.07);
    }
 ${(props) => {

        switch (props.name) {
            case "primary":
                return css`
                        color: #fff;
                        background-color: #cb0c9f;
                        border-color: #cb0c9f;
                        width: 100%;
                        &:hover{
                            color: #fff;
                            background-color: #ad0a87;
                            border-color: #a20a7f;
                        }
                        &:focus {
                            color: #fff;
                            background-color: #ad0a87;
                            border-color: #a20a7f;
                            box-shadow: 0 0 0 0.2rem rgba(211, 48, 173, 0.5);
                        }
                        &:active{
                            color: #fff;
                            background-color: #a20a7f;
                            border-color: #980977;
                        }
                        `;

            case 'btnGradient':
                return css`
                         width: 100%;
                     & {
                         background-image: linear-gradient(310deg,#154294,#0090D6);
                        }
                        &:hover {
                            background-color: #17c1e8;
                            border-color: #17c1e8;
                            color: #fff;
                        }
                        `
            default:
                return css`
                        border: 0;
                        color: rgb( 20,  65, 145);
                        text-align: center;
                        font-size: 1em;
                        background-image: linear-gradient(310deg,rgb(235, 112,  41),rgb(248, 200,  20));
                        &:focus{
                            box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.09), 0 2px 3px -1px rgba(0, 0, 0, 0.07);
                        }
                        `;
        }
    }}

`