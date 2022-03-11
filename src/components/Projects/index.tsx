import { ProjectsComponent } from "./styles";
import Cards from "./Cards";

export default function Projects() {
    return (
        <ProjectsComponent>
                <h3>Últimos projetos</h3>

                <div className="projects">
                    <Cards 
                        name="Risum" 
                        img="/risum.jpg" 
                        description={`Projeto pessoal desenvolvido inicialmente com 4 membros, é uma rede social de entretenimento (publicação de "memes") desenvolvida para dispositivos móveis.`}
                        link={"https://github.com/Risum-Corporation/risum"}
                    />
                    <Cards 
                        name="Bouncy Trader" 
                        img="/bouncy-trader.jpg" 
                        description="Projeto pessoal feito com <a href='https://github.com/Educg550'>DogeDev</a>, uma ferramente para estimar os lucros de um investimento, tanto a curto-prazo quanto a longo-prazo."
                        link="https://github.com/Educg550/BouncyTrader"
                    />
                </div>
        </ProjectsComponent>
    )
}