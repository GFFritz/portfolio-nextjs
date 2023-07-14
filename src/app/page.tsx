import { Biography } from './components/Biography'
import { Education } from './components/Education'
import { Experiences } from './components/Experiences'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'

export default function Home() {
  return (
    <div className="container mx-auto my-3">
      <Hero />
      <Biography />
      <Skills />
      <Experiences />
      <Projects />
      <Education />
    </div>
  )
}
