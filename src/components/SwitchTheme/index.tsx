import { ButtonComponent } from "./styles";
import { lightTheme, darkTheme } from '../../styles/themes'


interface Props {
    toggleTheme(): void;
}

export default function SwitchTheme ({toggleTheme}: Props) {
    return (
        <ButtonComponent>

            <button onClick={toggleTheme}>
                <div className="dark">
                    <img src="sun.svg" alt="" />

                </div>

                <div className="light">
                    <img src="moon.svg" alt="" />
                </div>

            </button>
        </ButtonComponent>
    );
};

// const Button2: React.FC<Props> = ({toggleTheme}) => {
//     return (
//         <ButtonComponent onClick={toggleTheme}>
//             <div className="dark">
//                 <img src="sun.svg" alt="" />
//             </div>

//             <div className="light">
//                 <img src="moon-cv.svg" alt="" />
//             </div>
//         </ButtonComponent>
//     );
// };

// export default Button2;

// const Button: React.FC = (props: ButtonProps) => {
//     return (
//         <Container>
//             {props.text}
//         </Container>
//     );
// }

// export default Button;