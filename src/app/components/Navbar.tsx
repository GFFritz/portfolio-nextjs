import { BrainCog, Home, Kanban, Layers, Mail, User } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export function Navbar() {
  return (
    <nav className="mx-auto my-5 hidden w-11/12 justify-between rounded bg-purple-700 bg-opacity-5 px-4 py-2 sm:flex">
      <div>
        <Image
          className="invert"
          src="/images/logo.png"
          width={30}
          height={30}
          alt="Logo"
        />
      </div>
      <div className="flex gap-4 font-medium text-zinc-300">
        <Link
          href=""
          className="flex items-center gap-1 transition-colors duration-500 hover:text-purple-600"
        >
          <Home size={15} />
          Home
        </Link>
        <Link
          href=""
          className="flex items-center gap-1 transition-colors duration-500 hover:text-purple-600"
        >
          <User size={15} />
          About me
        </Link>
        <Link
          href=""
          className="flex items-center gap-1 transition-colors duration-500 hover:text-purple-600"
        >
          <Kanban size={15} />
          Portfolio
        </Link>
        <Link
          href=""
          className="flex items-center gap-1 transition-colors duration-500 hover:text-purple-600"
        >
          <Layers size={15} />
          Skill
        </Link>
        <Link
          href=""
          className="flex items-center gap-1 transition-colors duration-500 hover:text-purple-600"
        >
          <BrainCog size={15} />
          Experience
        </Link>
        <Link
          href=""
          className="flex items-center gap-1 transition-colors duration-500 hover:text-purple-600"
        >
          <Mail size={15} />
          Contact
        </Link>
      </div>
    </nav>
  )
}
