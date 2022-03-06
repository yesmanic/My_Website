import { ButtonComponent } from "./styles";
import { lightTheme, darkTheme } from '../../styles/themes'

export default function Button() {
    return (
        <ButtonComponent>
            <div className="dark">
                <img src="dark-cv.svg" alt="" />
            </div>

            <div className="light">
                <img src="light-cv.svg" alt="" />
            </div>
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