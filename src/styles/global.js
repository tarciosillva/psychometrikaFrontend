import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, border-style, #root{
    max-height: 100vh;
    max-width: 100vw;

    height: 100vh;
    width: 100vw;
    }

    *,button, input{
        border: 0;
        background: none;
        font-family: 'Segoe UI', sans-serif;
    }

    p{
        margin: 0;
    }

    input:focus{
        outline: none;
    }
    html{
        background: var(--primary);
    }

    :root{
        --primary: ##E5E5E5;
    }

`;
