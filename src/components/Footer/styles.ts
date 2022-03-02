import styled from "styled-components";

export const FooterComponent = styled.div`
    color: ${props => props.theme.colors.consoleStroke};
    border-top: 0.1rem solid ${props => props.theme.colors.consoleStroke};

    padding-top: 1rem;

    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 8rem;
`