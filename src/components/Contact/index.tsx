import { ContactComponent } from "./styles";

export default function Contact() {
    return (
        <ContactComponent>
            <h3>Gostaria de ter o teu contato!</h3>

            <div>
                <div className="light">
                    <a href="https://www.linkedin.com/in/yesman-choque/" target="_blank">
                        <img src="linkedin.svg" alt="LinkedIn" />
                    </a>

                    <a href="https://github.com/yesmanic" target="_blank">
                        <img src="github.svg" alt="GitHub" />
                    </a>

                    <a href="https://t.me/yesmanic" target="_blank">
                        <img src="telegram.svg" alt="Telegram" />
                    </a>
                </div>
            </div>

            <h3>Tem um projeto em mente? Podemos torná-lo realidade!</h3>
            <h3 className="email">yesman.choque@gmail.com</h3>
        </ContactComponent>
    )
}