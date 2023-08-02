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
    <div className="block w-4/5 gap-5 md:w-2/4 lg:flex xl:w-2/5">
      <div className="w-2/3 text-sm text-zinc-400 lg:w-1/3 xl:w-2/5 2xl:w-1/5">
        {period}
      </div>
      <div className="lg:w-5/6">
        <div className="">
          <h1 className="font-semibold uppercase text-zinc-200">{title}</h1>
          {subtitle && (
            <h1 className="text-xs font-semibold uppercase text-zinc-400">
              {subtitle}
            </h1>
          )}
        </div>
        <span className="text-sm text-zinc-300">{text}</span>
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

export default Timeline
