import Tag from './Tags'

interface ExperienceProps {
  period: string
  title: string
  text: string
  tags: string[]
}

const Exp = ({ period, title, text, tags }: ExperienceProps) => {
  return (
    <div className="w-4/5 gap-5 md:flex md:w-2/4">
      <div className="text-sm text-zinc-400">{period}</div>
      <div>
        <h1 className="font-semibold uppercase text-zinc-200">{title}</h1>
        <span className="text-sm text-zinc-300">{text}</span>
        <div className="my-2 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Tag key={index} text={tag} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Exp
