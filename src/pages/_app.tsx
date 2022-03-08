import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import SwitchTheme from '../components/SwitchTheme';

import GlobalStyle from '../styles/global'
import { lightTheme, darkTheme } from '../styles/themes'

import { setCookie, parseCookies } from 'nookies'
import { useState } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  
  console.log(pageProps)

  return (
    <>
        <Component {...pageProps} />
    </>
  )
}
