import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
}

.invalid {
    border: 1px solid red;
}

.active-field {
    border-left: 2px solid #E5CF00;
    font-weight: 500;
    color: #000343;
    background-color: #CCCDE8;
}


`

export default GlobalStyles