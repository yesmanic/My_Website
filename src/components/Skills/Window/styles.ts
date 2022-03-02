import styled from "styled-components";

export const WindowComponent = styled.div`
    background-color: ${props => props.theme.colors.consoleBackground};
    width: 100%;
    height: 20rem;

    border-radius: 1rem;
    border: 1px solid ${props => props.theme.colors.consoleStroke};

    padding: 1rem;

    color: ${props => props.theme.colors.consoleText};

    display: flex;
    flex-direction: column;

    margin-bottom: 2rem;

    .header {
        display: flex;
        height: 0.6rem;
    }

    .content {
        //background-color: blue;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;

        height: 100%;
        padding: 0 1rem;
        padding-bottom: 0.6rem;

        p:first-child {
            margin-bottom: 1rem;
        }

        img {
            height: 5rem;
            margin-bottom: 2rem;
        }
    }
`