import styled from "styled-components";

export const ConsoleComponent = styled.div`
    background-color: ${props => props.theme.colors.consoleBackground};
    width: 100%;
    border-radius: 1rem;
    border: 1px solid ${props => props.theme.colors.consoleStroke};

    padding: 1rem 1rem 0 1rem;

    color: ${props => props.theme.colors.consoleText};

    margin-bottom: 2rem;

    font-family: "JetBrains Mono";
    
    display: flex;
    flex-direction: column;

    @media (min-width: 800px) {
        flex-direction: row;
    }

    .header {
        display: flex;
        margin-bottom: 1.5rem;

        height: 0.8rem;

        justify-content: space-between;
        align-items: center;

        color: ${props => props.theme.colors.text}

        img {
            height: 100%;
        }

        div {
            height: 100%;
            background-color: ${props => props.theme.colors.consoleStroke};
            border-radius: 1rem;
            padding: 0.1rem 2rem;

            font-size: 0.8rem;

            display: flex;
            align-items: center;
            justify-content: center;
        };

        img:last-child {
            visibility: hidden;
        }
    }

    .content {
        color: ${props => props.theme.colors.jsonText};
        line-height: 1.8rem;

        font-size: 1rem;

        span {
            display: block;
    
            span {
                margin-left: 2rem;
            }
        }
    }

    .photo {
        max-height: 20rem;
        width: auto;

        align-self: center;
    }

`