import { Biography } from './components/Biography'
import { Education } from './components/Education'
import { Experiences } from './components/Experiences'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="flex w-full flex-1">
        <div className="mx-auto my-3">
          <Hero />
          <Biography />
          <Skills />
          <Experiences />
          <Projects />
          <Education />
        </div>
      </div>
    </main>
  )
}
