import { createGlobalStyle } from "styled-components";
import Screen from "./Screen";

export const GlobalStyles = createGlobalStyle`

    :root {
        --border-radius: 4px;
    }


    body {
        font-family: 'Open Sans', sans-serif;
        background-color: black;
        font-size: 0.5rem;   
        overflow: ${props => props.showModal ? 'hidden' : 'auto'};
     
    ${Screen.sm`
        font-size: 0.562rem;  
     `}
    ${Screen.md`
        font-size: 0.625rem; 
    `}
    ${Screen.lg`
        font-size: 0.8rem; 
   `}
     
    }
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }
`;
