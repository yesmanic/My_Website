import styled from "styled-components";

export const CardsComponent = styled.div`

    margin-bottom: 4rem;
    display: flex;
    flex-direction: column;

    .image {
        object-fit: cover;
        width: 100%;
        height: 10rem;
        border-radius: 1rem;
        border: 1px solid ${props => props.theme.colors.consoleStroke};
        margin-bottom: 1rem;


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

    .see-project {
        display: flex;
        align-items: center;
        color: ${props => props.theme.colors.primary};
        font-weight: 700;
        cursor: pointer;

        img {
            width: 4rem;
            margin-left: 1.5rem;
        }
    }

    @media (min-width: 40rem) {
        flex-direction: row;

        gap: 2rem;

        width: min(100%, 800px);
        margin-left: auto;
        margin-right: auto;

        .details {
            width: min(100%, 600px);
        }

        .image {
            margin-bottom: 0;
            height: 13rem;
        }

    }
`