interface TagProps {
  text: string
}

const Tag = ({ text }: TagProps) => {
  return (
    <div className="flex h-5 cursor-default items-center justify-center rounded bg-emerald-700 bg-opacity-25 px-2 text-[0.65rem] leading-3 text-emerald-400 hover:bg-emerald-600 hover:bg-opacity-25 hover:text-emerald-300 hover:shadow-sm hover:shadow-emerald-400/25">
      {text}
    </div>
  )
}

export default Tag
