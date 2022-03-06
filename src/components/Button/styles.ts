import styled from "styled-components";

export const ButtonComponent = styled.div`
    display: flex;
    justify-content: center;

    margin-bottom: 5rem;

    .dark {
        display: ${props => props.theme.colors.type === 'dark'?'flex':'none'};
    }
    .light {
        display: ${props => props.theme.colors.type === 'light'?'flex':'none'};
    }
`