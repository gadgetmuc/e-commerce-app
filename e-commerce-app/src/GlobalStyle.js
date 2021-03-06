import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
    *{
        box-sizing: border-box;
    }
    body{
        font-size: 112.5%;
        font-family: 'Roboto', sans-serif;
        margin: 0;
        font-weight: bold;
    }
    input, textarea, button {
        font-size: 1em;
    }
`;
