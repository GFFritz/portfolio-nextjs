import Link from 'next/link'
import { About } from './components/About'
import { Divider } from './components/Divider'
import { Education } from './components/Education'
import { Experiences } from './components/Experiences'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'

export default function Home() {
  return (
    <main>
      <header>
        <Navbar />
        <Hero />
        <About />
        <Divider />
      </header>
      <div className="flex w-full flex-1">
        <div className="mx-auto my-3">
          <Skills />
          <Divider />
          <Experiences />
          <Divider />
          <Projects />
          <Divider />
          <Education />
        </div>
      </div>
      <footer className="my-6 flex items-center justify-center text-zinc-400">
        {new Date().getFullYear()} &copy; Developed by:
        <Link
          className="ms-1 font-semibold"
          href={'mailto:gabrielf.fritz@gmail.com'}
        >
          Gabriel Fritz
        </Link>
      </footer>
    </main>
  )
}
