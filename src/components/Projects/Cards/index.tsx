import { CardsComponent } from "./styles";

type CardsProps = {
    name: string,
    img: string,
    description: string,
}

export default function Cards(props: CardsProps) {
    return (
        <CardsComponent>
            <img className="image" src={props.img} alt={props.name} />
            <h2>{props.name}</h2>
            <p dangerouslySetInnerHTML={{__html:props.description}} /> 
            
            <div>
                Ver projeto
                <img src="/arrow.svg" alt="arrow" />
            </div>
        </CardsComponent>
    )
}