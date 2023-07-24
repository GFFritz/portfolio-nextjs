import { Linkedin, Github, MapPin, Download, Mail } from 'lucide-react'
import Image from 'next/image'

export function Hero() {
  return (
    <div>
      <div className="flex items-center justify-center gap-4">
        <Linkedin className="text-zinc-400 hover:text-purple-500" />
        <Github className="text-zinc-400 hover:text-purple-500" />
      </div>

      <div>
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
          <MapPin width={15} />
          Viamão, RS · Brasil · +55 (51) 98605-2303
        </div>
      </div>

      <div className="my-4 flex items-center justify-center gap-5">
        <button className="flex items-center gap-2 rounded border border-purple-500 px-4 py-1 uppercase text-purple-500 hover:border-transparent hover:bg-indigo-800 hover:text-purple-400">
          Baixar CV
          <Download size={17} />
        </button>
        <button className="flex items-center gap-2 rounded border border-purple-500 px-4 py-1 uppercase text-purple-500 hover:border-transparent hover:bg-indigo-800 hover:text-purple-400">
          Contato
          <Mail size={17} />
        </button>
      </div>
    </div>
  )
}
