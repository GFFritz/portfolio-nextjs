import { useTranslations } from 'next-intl'
import Project from './Project'

interface ProjectData {
  title: string
  link: string
  github?: string
  description: string
  stacks: string[]
}

interface ProjectsData {
  [key: string]: ProjectData
}

export function Projects() {
  const t = useTranslations('Projects')
  const project: ProjectsData = t.raw('pro')

  return (
    <div className="mx-auto w-4/5">
      <h1 className="mb-4 text-center text-2xl font-medium text-zinc-100">
        {t('title')}
      </h1>

      <h2 className="mb-3 flex justify-center text-lg text-zinc-400">
        {t('pro-title')}
      </h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {Object.values(project).map((projectData, index) => (
          <Project
            key={index}
            title={projectData.title}
            link={projectData.link}
            github={projectData.github}
            description={projectData.description}
            tags={projectData.stacks}
          />
        ))}
      </div>

      {/* <hr className="mx-auto my-10 flex w-2/4 rounded-full border-emerald-600 opacity-30" />

      <h2 className="mb-3 flex justify-center text-lg text-zinc-400">
        Projetos Pessoais
      </h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        <Project
          title="AlertaCar"
          link="https://alertacar.com.br"
          description="Project Description"
          tags={['Reacjs', 'Laravel 8', 'REST API']}
        />

        <Project
          link="https://alertacar.com.br"
          github="http://teste.com"
          title="IndikeGanhe"
          description="Project Description"
          tags={['Reacjs', 'Laravel 8', 'REST API']}
        />

        <Project
          link="https://alertacar.com.br"
          title="AlertaCar"
          description="Project Description"
          tags={['Reacjs', 'Laravel 8', 'REST API']}
        />
      </div> */}
    </div>
  )
}
