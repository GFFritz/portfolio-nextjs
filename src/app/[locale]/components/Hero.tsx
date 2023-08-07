import { Linkedin, Github, Download, Mail, Code2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import LinkLang from 'next-intl/link'
import { useTranslations } from 'next-intl'

export function Hero() {
  const t = useTranslations('About')
  return (
    <div>
      <div className="my-4 mb-4 flex items-center justify-center gap-4 font-semibold text-zinc-200">
        <div className="group relative w-max">
          <LinkLang className="hover:opacity-80" href="/" locale="en">
            <Image
              src="images/icons/us_icon.svg"
              width={30}
              height={30}
              alt="US Flag"
            />
          </LinkLang>
          <span className="pointer-events-none absolute -bottom-9 -left-6 w-max rounded bg-purple-500 px-2 text-zinc-300 opacity-0 transition-opacity group-hover:opacity-100">
            In English
          </span>
        </div>

        <div className="group relative w-max">
          <LinkLang className="hover:opacity-80" href="/" locale="pt">
            <Image
              src="images/icons/br_icon.svg"
              width={30}
              height={30}
              alt="Brazil Flag"
            />
          </LinkLang>
          <span className="pointer-events-none absolute -bottom-9 -left-11 w-max rounded bg-purple-500 px-2 text-zinc-300 opacity-0 transition-opacity group-hover:opacity-100">
            Em Português
          </span>
        </div>
      </div>

      <div className="mb-4 mt-4 flex justify-center">
        <Image
          src="/images/gabriel_avatar.png"
          width={300}
          height={300}
          alt="Avatar Gabriel"
        />
      </div>

      <div className="mb-4 flex items-center justify-center gap-4">
        <div className="group relative w-max">
          <Link href="https://www.linkedin.com/in/gffritz/">
            <Linkedin className="text-zinc-400 transition-all duration-500 hover:text-purple-500" />
            <span className="pointer-events-none absolute -bottom-9 -left-6 w-max rounded bg-purple-500 px-2 text-zinc-300 opacity-0 transition-opacity group-hover:opacity-100">
              Linkedin
            </span>
          </Link>
        </div>

        <div className="group relative w-max">
          <Link href="https://github.com/GFFritz">
            <Github className="text-zinc-400 transition-all duration-500 hover:text-purple-500" />
          </Link>
          <span className="pointer-events-none absolute -bottom-9 -left-5 w-max rounded bg-purple-500 px-2 text-zinc-300 opacity-0 transition-opacity group-hover:opacity-100">
            Github
          </span>
        </div>
      </div>

      <div>
        <div className="text-center text-2xl font-normal uppercase text-zinc-100">
          Gabriel Ferreira Fritz
        </div>
        <div className="flex items-center justify-center gap-1 text-sm text-zinc-400">
          <Code2 width={15} />
          Full-stack Developer
        </div>
      </div>

      <div className="my-4 flex items-center justify-center gap-5">
        <Link
          href={t('link-cv')}
          className="flex items-center gap-2 rounded border border-purple-600 px-4 py-1 uppercase text-purple-500 transition-all duration-500 hover:border-transparent hover:bg-purple-800 hover:text-purple-400"
        >
          {t('btn-cv')}
          <Download size={17} />
        </Link>
        <Link
          href="mailto:gabrielf.frtiz@gmail.com"
          className="flex items-center gap-2 rounded border border-purple-600 px-4 py-1 uppercase text-purple-500 transition-all duration-500 hover:border-transparent hover:bg-purple-800 hover:text-purple-400"
        >
          {t('btn-contact')}
          <Mail size={17} />
        </Link>
      </div>
    </div>
  )
}
