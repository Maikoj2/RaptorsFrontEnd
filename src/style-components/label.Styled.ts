import styled, { css } from 'styled-components'

export const Label = styled.label`

  ${(props) => {
    switch (props.className) {
      case "checkLabel":
        return css`
        cursor: pointer;
        font-size: 0.875rem;
        font-weight: 400;
        `;
      default:
        return css`
        font-size: 0.75rem;
        font-weight: 700;
        margin-bottom: 0.5rem;
        color: #344767;
        margin-left: 0.25rem;
        `;
    }
  }}
`;