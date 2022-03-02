import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${(props) => props.theme.colors.background};
        width: 100%;
        padding: 2rem;
        color: ${props => props.theme.colors.text};
    }

    body, input, textarea, button {
        font-family: Inter, sans-serif;
    }

    a {
        text-decoration: none;
    }

    button {
        cursor: pointer;
    }
`;
