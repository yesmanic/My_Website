import { SkillsComponent } from "./styles";
import Window from "./Window";

export default function Skills() {
    return (
        <SkillsComponent>
            <h3>Habilidades</h3>
            <Window img="/reactjs.svg" name="ReactJS" description="Uma biblioteca JavaScript para criar interfaces de usuário em páginas web"/>
            <Window img="/figma.svg" name="Figma" description="Um editor gráfico de vetor e prototipagem para projetos de design"/>
        </SkillsComponent>
    )
}