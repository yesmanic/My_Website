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
            </section>

            <img className="photo" src="/photo.png" alt="Yesman" />
        </ConsoleComponent>
    )
}