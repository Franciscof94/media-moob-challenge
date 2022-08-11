import styled, { css } from "styled-components";

export const Button = styled.button`
  color: white;
  padding: 13px 0;
  font-size: 1.9em;
  outline: none;
  border: none;
  border-radius: var(--border-radius);
  margin: 0 auto;
  cursor: pointer;
  max-width: 250px;
  width: 100%;
  ${(props) => {
    switch (props.variant) {
      case "primary":
        return css`
          background-color: #67bc4b;
        `;
      case "secondary":
        return css`
            background-color: gray;
       `;
       case "tertiary":
        return css`
            background-color: ${props => props.color === 'Ok' ? '#67bc4b' : props.color === 'NoOk' ? 'red' : null};}; 
            `
      default:
        break;
    }
  }}
`;
