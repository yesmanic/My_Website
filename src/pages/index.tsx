import Button from '../components/Button'
import Header from '../components/Header'
import Presentation from '../components/Presentation'
import Console from '../components/Console'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import { WraperComponent } from '../components/Wraper/styles'

import { parseCookies, setCookie } from 'nookies'
import { lightTheme, darkTheme } from '../styles/themes'
import { useState, useEffect } from 'react'
import SwitchTheme from '../components/SwitchTheme'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../styles/global'

export default function Home(props) {

  console.log(props)
  const [theme, setTheme] = useState(() => {
    if (props) {
      return props.theme === 'light' ? lightTheme : darkTheme
    } else {
      return lightTheme
    }
  })

  
  
  setCookie(null, 'theme', theme.colors.type, {
    path: '/',
    maxAge: 60 * 60 * 24 * 7,
  })


  const toggleTheme = () => {
    setTheme(theme.colors.type === 'dark' ? lightTheme : darkTheme)
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <WraperComponent>
        <div className='container'>
          <SwitchTheme toggleTheme={toggleTheme}/>
          <div className='presentation'>
            <Presentation />
            <div className='console'>
              <Console />
              <Button />
            </div>
          </div>
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </WraperComponent>
    </ThemeProvider>
  )
}

export async function getServerSideProps(ctx) {
  return {
    props: parseCookies(ctx)
  }
}