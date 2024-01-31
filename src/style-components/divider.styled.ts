import styled, { css } from 'styled-components'
interface divider {
  mode?: string
}
export const Divider = styled.hr`
  margin: 1rem 0;
  color: inherit;
  background-color: currentColor;
  border: 0;
  opacity: 0.25;
`
export const DividerHori = styled(Divider)<divider>`
    background-color: transparent;
    ${(props) => {
        switch (props.mode) {
             case '$light':
                return css`
                 background-image: linear-gradient(to right, rgba(255, 255, 255, 0), white, rgba(255, 255, 255, 0));             
            `
            default:
                return css`
                background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0));
             `
    }
}}

`
export const DividerVerti = styled(Divider)<divider>`
    position: absolute;
    background-color: transparent;
    height: 100%;
    right: 0;
    top: 0;
    width: 1px;
    ${(props) => {
        switch (props.mode) {
            case '$dark':
                return css`
                background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0));
            `
             case '$light':
                return css`
                 background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0), white, rgba(255, 255, 255, 0));             
            `
            default:
                return css`
                background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0));
             `
    }
}}

`
