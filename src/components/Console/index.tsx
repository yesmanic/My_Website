import { ConsoleComponent } from "./styles";

export default function Console() {
    return (
        <ConsoleComponent>

            <div className="header">
                <img src="/window-controller.svg" />

                <div>
                    yesman.json
                </div>

                <img src="/window-controller.svg" />
            </div>


            <div className="content">

                <span>{`{`}
                    <span>"profissão": "programador"</span>
                    <span>{`"linguagem": ["JavaScript", "Java"]`}</span>
                    <span>{`"educação" {`}
                        <span>"Udemy": "Cursos de JS"</span>
                        <span>"Livros": "Java 8: como programar"</span>
                        {`}`}
                    </span>
                    {`}`}
                </span>

            </div>
        </ConsoleComponent>
    )
}