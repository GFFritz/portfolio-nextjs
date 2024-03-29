import Tag from './Tags'

interface TimelineProps {
  period: string
  title: string
  subtitle?: string
  text: string
  tags?: string[]
}

const Timeline = ({ period, title, subtitle, text, tags }: TimelineProps) => {
  return (
    <div className="block w-4/5 justify-center gap-5 rounded px-5 py-4 hover:bg-purple-700 hover:bg-opacity-5 md:w-3/5 lg:flex">
      <div className="flex whitespace-nowrap text-sm text-zinc-400 lg:justify-end 2xl:w-1/4">
        {period}
      </div>
      <div className="lg:w-5/6 2xl:w-3/4">
        <div className="">
          <h1 className="font-semibold uppercase text-zinc-200">{title}</h1>
          {subtitle && (
            <h1 className="mb-3 text-xs font-semibold uppercase text-zinc-400">
              {subtitle}
            </h1>
          )}
        </div>
        <span className="text-sm text-zinc-300">{text}</span>
        {tags && tags.length > 0 && (
          <div>
            <h1 className="mt-3 text-xs text-zinc-400">Stacks:</h1>
            <div className="my-2 flex flex-wrap gap-1">
              {tags.map((tag, index) => (
                <Tag key={index} text={tag} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Timeline
