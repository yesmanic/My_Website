import { ButtonComponent } from "./styles";
import { lightTheme, darkTheme } from '../../styles/themes'

export default function Button() {
    return (
        <ButtonComponent >
            <a className="dark" href='/cv.pdf'>
                <img src="cv-dark.svg" alt="" />
            </a>

            <a className="light" href='/cv.pdf'>
                <img src="cv.svg" alt="" />
            </a>
        </ButtonComponent>
    );
};

// const Button: React.FC = (props: ButtonProps) => {
//     return (
//         <Container>
//             {props.text}
//         </Container>
//     );
// }

// export default Button;