import { createGlobalStyle } from "styled-components";
import Theme from ".";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}
    body{
        font-family: ${props => props.theme.fonts.base};
        padding: 15px;
        box-sizing: border-box;
        overflow: visible;
        background-color: #eee;
    }
    a{
        text-decoration: none;
    }
    .mainContainer{
        display: flex;
        gap: 10%;
    }
    button{
        color: white;
        background-color: #151515;
        padding: 5px;
        border-radius: 5px;
        margin: 0px;
        width: 98%;
        margin: auto;
        cursor: pointer;
        outline: none;
        border: none;
    }
`

export default GlobalStyle