import { useState } from 'react'
import { ChapterWipe } from './components/ChapterWipe'
import { IntroLoader } from './components/IntroLoader'
import { shouldPlayIntro } from './lib/intro'
import { Nav } from './components/Nav'
import { ScrollProgress } from './components/ScrollProgress'
import { About } from './components/sections/About'
import { Contact } from './components/sections/Contact'
import { Credentials } from './components/sections/Credentials'
import { CtaTicker } from './components/sections/CtaTicker'
import { Experience } from './components/sections/Experience'
import { Hero } from './components/sections/Hero'
import { Manifesto } from './components/sections/Manifesto'
import { Process } from './components/sections/Process'
import { Services } from './components/sections/Services'
import { Work } from './components/sections/Work'
import { useLenis } from './hooks/useLenis'

export default function App() {
  const [introActive, setIntroActive] = useState(() => shouldPlayIntro())
  useLenis()

  return (
    <>
      <IntroLoader
        active={introActive}
        onComplete={() => setIntroActive(false)}
      />
      <div className="page-glow" aria-hidden />
      <ScrollProgress />
      <Nav />
      <main>
        <Hero ready={!introActive} />

        <ChapterWipe id="work" label="01" title="Work" />
        <Work />
        <Credentials />
        <Manifesto />

        <ChapterWipe id="practice" label="02" title="Practice" />
        <Services />
        <Process />
        <Experience />

        <ChapterWipe id="about" label="03" title="About" />
        <About />
        <CtaTicker />
        <Contact />
      </main>
    </>
  )
}
