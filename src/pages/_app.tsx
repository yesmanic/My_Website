import type { AppProps } from 'next/app'
import { useState } from 'react';
import { ThemeProvider } from 'styled-components'
import SwitchTheme from '../components/SwitchTheme';

import GlobalStyle from '../styles/global'
import { lightTheme, darkTheme } from '../styles/themes'

export default function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState(darkTheme);

  const toggleTheme = () => {
    setTheme(theme.colors.type === 'light' ? darkTheme : lightTheme)
  }
  
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle /> 
        <SwitchTheme toggleTheme={toggleTheme} />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
