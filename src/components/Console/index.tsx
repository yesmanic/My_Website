import { ConsoleComponent } from "./styles";

export default function Console() {
    return (
        <ConsoleComponent>

            <section>

                <div className="header">
                    <img src="/window-controller.svg" />

                    <div>
                        yesman.json
                    </div>

                    <img src="/window-controller.svg" />
                </div>


                <div className="content">

                    <span>{`{`}
                        <span>{`"linguagem": ["JavaScript", "Java", "C", "C++"],`}</span>
                        <span>{`"educação" {`}
                            <span>"Bacharelado": "Sistemas de Informação",</span>
                            <span>"Curso": "Carrefour Web Developer"</span>
                            {`}`}
                        </span>
                        {`}`}
                    </span>

                </div>
            </section>

            <img className="photo" src="/photo.png" alt="Yesman" />
        </ConsoleComponent>
    )
}