import { Folder, Github, LinkIcon } from 'lucide-react'
import Link from 'next/link'
import Tag from './Tags'

interface ProjectProps {
  title: string
  description: string
  link?: string
  github?: string
  tags?: string[]
}

const Project = ({ title, description, link, github, tags }: ProjectProps) => {
  return (
    <div className="rounded bg-purple-800 bg-opacity-20 px-5 py-4 hover:bg-opacity-30">
      <div className="flex justify-between text-purple-500">
        {link && (
          <div className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-purple-800 hover:bg-opacity-25">
            <Link href={link} target="_blank">
              <LinkIcon size={20} />
            </Link>
          </div>
        )}

        {github && (
          <div className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-purple-800 hover:bg-opacity-25">
            <Link href={github}>
              <Github size={20} />
            </Link>
          </div>
        )}
      </div>
      <div className="mt-4 font-semibold text-zinc-300">{title}</div>
      <div className="my-3 text-xs text-zinc-400">{description}</div>
      <div className="flex flex-wrap gap-1">
        {tags && tags.length > 0 && (
          <div className="my-2 flex flex-wrap gap-1">
            {tags.map((tag, index) => (
              <Tag key={index} text={tag} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Project
