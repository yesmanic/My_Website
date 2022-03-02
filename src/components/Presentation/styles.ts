import styled from "styled-components";

export const PresentationComponent = styled.div`

    h2 {
        font-weight: 600;
    }

    h2:first-child, h1:last-child {
        color: ${props => props.theme.colors.primary};
    }

    div:first-child {
        margin-bottom: 1rem;
    }

    div:last-child {
        margin-bottom: 3rem;
    }
`