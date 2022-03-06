import { ContactComponent } from "./styles";

export default function Contact() {
    return (
        <ContactComponent>
            <h3>Gostaria de ter o teu contato!</h3>

            <div>
                <div className="light">
                    <img src="linkedin.svg" alt="LinkedIn" />
                    <img src="github.svg" alt="GitHub" />
                    <img src="telegram.svg" alt="Telegram" />
                </div>

                <div className="dark">
                    <img src="linkedin-dark.svg" alt="LinkedIn" />
                    <img src="github-dark.svg" alt="GitHub" />
                    <img src="telegram-dark.svg" alt="Telegram" />
                </div>
            </div>

            <h3>Tem um projeto em mente? Podemos torná-lo realidade!</h3>
            <h3 className="email">yesman.choque@gmail.com</h3>
        </ContactComponent>
    )
}