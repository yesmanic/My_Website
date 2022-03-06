import Button from '../components/Button'
import Header from '../components/Header'
import Presentation from '../components/Presentation'
import Console from '../components/Console'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import { WraperComponent } from '../components/Wraper/styles'

export default function Home() {
  return (
    <WraperComponent>
      <div className='container'>
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
  )
}
