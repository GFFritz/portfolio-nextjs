import Link from 'next/link'
import { About } from './components/About'
import { Divider } from './components/Divider'
import { Education } from './components/Education'
import { Experiences } from './components/Experiences'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'

import { useTranslations } from 'next-intl'

export default function Home() {
  const t = useTranslations('Main')

  return (
    <main>
      <header className="m-auto flex flex-col md:w-3/4">
        <Hero />
        <About />
        <Divider />
      </header>
      <div className="m-auto flex w-full flex-1 md:w-3/4">
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
        {new Date().getFullYear()} &copy; {t('footer')}:
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
