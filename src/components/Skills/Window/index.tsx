import { WindowComponent } from "./styles";

type WindowProps = {
    img: string,
    name: string,
    description: string
}

export default function Window(props: WindowProps) {
    return(
        <WindowComponent>
            <div className="header">
                <img src="/window-controller.svg" alt="" />
            </div>

            <div className="content">
                <p>{props.name}</p>
                <img src={props.img} alt={props.name} />
                <p>{props.description}</p>
            </div>
        </WindowComponent>
    )
}