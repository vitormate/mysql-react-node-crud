import { createGlobalStyle } from 'styled-components'

export const Global = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        font-family: 'Roboto', sans-serif;
    }

    body {
        width: 100vw;
        height: 100vw;
        display: flex;
        justify-content: center;
        background: linear-gradient(269.97deg, #3FB4BA 0.03%, #195275 97.99%);
        /* background-color: #3FB4BA; */
    }
`;