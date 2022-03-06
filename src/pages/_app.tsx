import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../styles/global'
import { lightTheme, darkTheme } from '../styles/themes'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyle /> 
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
