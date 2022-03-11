import { CardsComponent } from "./styles";

type CardsProps = {
    name: string,
    img: string,
    description: string,
    link: string
}

export default function Cards(props: CardsProps) {
    return (
        <CardsComponent>

            
                <img className="image" src={props.img} alt={props.name} />

                <div className="details">
                    <h2>{props.name}</h2>
                    <p dangerouslySetInnerHTML={{__html:props.description}} /> 
                    
                    <a className="see-project" href={props.link} target="_blank">
                        Ver projeto
                        <img src="/arrow.svg" alt="arrow" />
                    </a>
                </div>
        </CardsComponent>
    )
}