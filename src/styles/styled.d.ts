import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            type: string,
            background: string;
            primary: string;
            text: string;
            consoleBackground: string;
            consoleStroke: string;
            consoleText: string;
            consoleTitle:string
        }
    }
}