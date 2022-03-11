import styled from "styled-components";

export const ContactComponent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    margin-bottom: 2rem;

    h3:first-child {
        font-weight: 400;
        margin-bottom: 2rem;
    }

    div {
        width: 100%;

        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 1.5rem;

        margin-bottom: 5rem;
    }

    
    .email {
        margin-top: 2rem;
        color: ${props => props.theme.colors.primary}
    }
    
    a {
        cursor: pointer;
        img {
            filter: ${props => props.theme.colors.type === 'dark'?'invert(1)':'invert(0)'}
        }
    }
`