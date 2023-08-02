import { Linkedin, Github, Download, Mail, Code2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export function Hero() {
  return (
    <div>
      <div className="mt-4 flex items-center justify-center gap-4">
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

      <div className="flex justify-center">
        <Image
          src="/images/gabriel_avatar.png"
          width={300}
          height={300}
          alt="Avatar Gabriel"
        />
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
        <button className="flex items-center gap-2 rounded border border-purple-600 px-4 py-1 uppercase text-purple-500 transition-all duration-500 hover:border-transparent hover:bg-purple-800 hover:text-purple-400">
          Baixar CV
          <Download size={17} />
        </button>
        <button className="flex items-center gap-2 rounded border border-purple-600 px-4 py-1 uppercase text-purple-500 transition-all duration-500 hover:border-transparent hover:bg-purple-800 hover:text-purple-400">
          Contato
          <Mail size={17} />
        </button>
      </div>
    </div>
  )
}
