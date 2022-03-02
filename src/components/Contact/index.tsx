import { ContactComponent } from "./styles";

export default function Contact() {
    return (
        <ContactComponent>
            <h3>Gostaria de ter o teu contato!</h3>

            <div>
                <img src="linkedin.svg" alt="LinkedIn" />
                <img src="github.svg" alt="GitHub" />
                <img src="telegram.svg" alt="Telegram" />
            </div>

            <h3>Tem um projeto em mente? Podemos torná-lo realidade!</h3>
            <h3 className="email">yesman.choque@gmail.com</h3>
        </ContactComponent>
    )
}