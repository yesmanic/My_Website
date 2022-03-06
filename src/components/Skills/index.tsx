import { SkillsComponent } from "./styles";
import Window from "./Window";

export default function Skills() {
    return (
        <SkillsComponent>
            <h3>Habilidades</h3>

            <div className="skills">
                <Window img="/reactjs.svg" name="ReactJS" description="Biblioteca JavaScript para criar interfaces de usuário em páginas web"/>
                <Window img="/figma.svg" name="Figma" description="Editor gráfico de vetor e prototipagem para projetos de design"/>
                <Window img="/linux.svg" name="Linux" description="Termo empregado para se referir a sistemas que utilizam o Kernel Linux"/>
            </div>

        </SkillsComponent>
    )
}