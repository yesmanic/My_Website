import styled from "styled-components";

export const SkillsComponent = styled.div`
    display: flex;
    flex-direction: column;

    h3 {
        margin-bottom: 2rem;
    }

    .skills {
        align-self: center;
        display: flex;
        flex-direction: column;
        width: min(100%, 400px);

        @media (min-width: 40rem) {
            flex-direction: row;
            width: 100%;
            gap: 2rem;
        }
    }

    margin-bottom: 5rem;
`