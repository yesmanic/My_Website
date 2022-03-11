import styled from "styled-components";

export const ButtonComponent = styled.div`
    width: min(100%, 70rem); 
    justify-content: flex-end;
    display: flex;
    margin: 0 auto;
    margin-bottom: 5rem;
    height: 1rem;

    button {
        background-color: rgba(255, 255, 255, 0);
        border: 0;
    
        img {
            height: 100%;
        }
    }


    .dark {
        display: ${props => props.theme.colors.type === 'dark'?'flex':'none'};
    }
    .light {
        display: ${props => props.theme.colors.type === 'light'?'flex':'none'};
    }
`