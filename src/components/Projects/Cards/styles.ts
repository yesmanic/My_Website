import styled from "styled-components";

export const CardsComponent = styled.div`

    margin-bottom: 4rem;

    .image {
        width: 100%;
        height: 10rem;
        border-radius: 1rem;
        margin-bottom: 1rem;

        object-fit: cover;
    }

    h2 {
        margin-bottom: 1rem;
    }

    p {
        text-indent: 2rem;
        text-align: justify;
        margin-bottom: 1.5rem;
    }

    a {
        color: ${props => props.theme.colors.primary};
        font-weight: 600;
    }

    div {
        display: flex;
        align-items: center;
        color: ${props => props.theme.colors.primary};
        font-weight: 700;

        img {
            width: 4rem;
            margin-left: 1.5rem;
        }
    }
`