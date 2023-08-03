import Image from 'next/image'

interface IconProps {
  icon: string
  title: string
}

const Icon = ({ icon, title }: IconProps) => {
  return (
    <div className="group relative w-max">
      <Image
        src={`images/icons/` + icon + `.svg`}
        alt={title + `Icon`}
        height={40}
        width={40}
        className="cursor-default hover:brightness-110"
      />
      <span className="pointer-events-none absolute -bottom-9 -left-1 z-20 rounded bg-purple-500 px-2 text-zinc-300 opacity-0 transition-opacity group-hover:opacity-100">
        {title}
      </span>
    </div>
  )
}

export default Icon
