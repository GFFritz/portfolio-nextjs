import Image from 'next/image'
import Link from 'next/link'

export function Navbar() {
  return (
    <nav className="mx-auto my-5 hidden w-4/5 justify-between rounded bg-purple-700 bg-opacity-5 px-4 py-2 sm:flex">
      <div>
        <Image
          className="invert"
          src="/images/logo.png"
          width={30}
          height={30}
          alt="Logo"
        />
      </div>
      <div className="flex gap-3 font-medium text-zinc-300">
        <Link href="" className="hover:text-purple-600">
          Home
        </Link>
        <Link href="" className="hover:text-purple-600">
          About me
        </Link>
        <Link href="" className="hover:text-purple-600">
          Portfolio
        </Link>
        <Link href="" className="hover:text-purple-600">
          Skill
        </Link>
        <Link href="" className="hover:text-purple-600">
          Experience
        </Link>
        <Link href="" className="hover:text-purple-600">
          Contact
        </Link>
      </div>
    </nav>
  )
}
