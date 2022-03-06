import styled from "styled-components";

export const WraperComponent = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;

    .container {
        width: min(100%, 70rem);

        .presentation {
            display: flex;
            flex-direction: column;
            width: 100%;
            
            
            .console {
                display: flex;
                flex-direction: column;
                width: min(100%, 600px);
                align-self: center;

                @media (min-width: 800px) {
                    margin-left: 1.8rem;
                }
            }
            @media (min-width: 500px) {
                div:first-child{
                    font-size: 1.3rem;
                }
            }

            
            @media (min-width: 1000px) {
                flex-direction: row;
                justify-content: space-between;
            } 
            @media (min-width: 1200px) {
                div:first-child{
                    font-size: 1.8rem;
                }
            }
            
        }

        
    }
`