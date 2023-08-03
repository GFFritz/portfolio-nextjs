import Icon from './Icon'

export function Skills() {
  return (
    <div className="m-auto flex w-3/5 flex-col items-center justify-center gap-4 text-zinc-300">
      <h1 className="mb-3 text-center text-2xl font-medium text-zinc-100">
        Skills
      </h1>

      <h2 className="text-lg text-zinc-400">Principais Stacks:</h2>
      <div className="mb-4 grid grid-cols-5 items-center justify-center gap-4 md:grid-cols-10">
        <Icon icon="htmlIcon" title="HTML" />
        <Icon icon="cssIcon" title="CSS" />
        <Icon icon="laravelIcon" title="Laravel" />
        <Icon icon="javascriptIcon" title="Javascript" />
        <Icon icon="tailwindIcon" title="Tailwindcss" />
        <Icon icon="reactIcon" title="React js" />
        <Icon icon="nextjsIcon" title="NextJS" />
        <Icon icon="phpIcon" title="PHP" />
        <Icon icon="gitIcon" title="Git" />
        <Icon icon="mysqlIcon" title="Wordpress" />
      </div>

      <h2 className="text-lg text-zinc-400">Stacks que já usei:</h2>
      <div className="grid grid-cols-5 items-center justify-center gap-4">
        <Icon icon="typescriptIcon" title="Typescript" />
        <Icon icon="bootstrapIcon" title="Boostrap" />
        <Icon icon="nodeIcon" title="Node" />
        <Icon icon="dockerIcon" title="Docker" />
        <Icon icon="figmaIcon" title="Figma" />
      </div>
    </div>
  )
}
