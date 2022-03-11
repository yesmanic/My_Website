import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import SwitchTheme from '../components/SwitchTheme';

import GlobalStyle from '../styles/global'
import { lightTheme, darkTheme } from '../styles/themes'

import { setCookie, parseCookies } from 'nookies'
import { useState } from 'react';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <Head>
        <meta property="og:url" content="yesman.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="fb:app_id" content="your fb app id" />
        <meta
          property="og:title"
          content="Yesman Choque"
        />
        <meta name="twitter:card" content="summary" />
        <meta
          property="og:description"
          content="Desenvolvedor Frontend"
        />
        <meta property="og:image" content={"/preview.png"} />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
