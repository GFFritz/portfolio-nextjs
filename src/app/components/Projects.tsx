import { Folder, Github, Link } from 'lucide-react'
import Tag from './Tags'

export function Projects() {
  return (
    <div className="mx-auto w-4/5">
      <h1 className="mb-4 text-center text-2xl font-medium text-zinc-100">
        Projects
      </h1>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        <div className="rounded bg-purple-800 bg-opacity-20 px-5 py-4 hover:bg-opacity-30">
          <div className="flex justify-between text-purple-500">
            <div>
              <Folder size={20} />
            </div>
            <div className="flex gap-1">
              <Github size={20} />
              <Link size={20} />
            </div>
          </div>
          <div className="mt-4 font-semibold text-zinc-300">PROJECT NAME</div>
          <div className="my-3 text-xs text-zinc-400">Project description</div>
          <div className="flex flex-wrap gap-2">
            <Tag text="NextJS" />
            <Tag text="Tailwindcss" />
            <Tag text="Typescript" />
          </div>
        </div>

        <div className="rounded bg-purple-800 bg-opacity-20 px-5 py-4 shadow-purple-400 hover:bg-opacity-30">
          <div className="flex justify-between text-purple-500">
            <div>
              <Folder size={20} />
            </div>
            <div className="flex gap-1">
              <Github size={20} />
              <Link size={20} />
            </div>
          </div>
          <div className="mt-4 font-semibold text-zinc-300">PROJECT NAME</div>
          <div className="my-3 text-xs text-zinc-400">Project description</div>
          <div className="flex flex-wrap gap-2">
            <Tag text="NextJS" />
            <Tag text="Tailwindcss" />
            <Tag text="Typescript" />
          </div>
        </div>

        <div className="rounded bg-purple-800 bg-opacity-20 px-5 py-4 shadow-purple-400 hover:bg-opacity-30">
          <div className="flex justify-between text-purple-500">
            <div>
              <Folder size={20} />
            </div>
            <div className="flex gap-1">
              <Github size={20} />
              <Link size={20} />
            </div>
          </div>
          <div className="mt-4 font-semibold text-zinc-300">PROJECT NAME</div>
          <div className="my-3 text-xs text-zinc-400">Project description</div>
          <div className="flex flex-wrap gap-2">
            <Tag text="NextJS" />
            <Tag text="Tailwindcss" />
            <Tag text="Typescript" />
          </div>
        </div>
      </div>
    </div>
  )
}
