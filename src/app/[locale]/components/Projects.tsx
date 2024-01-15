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
  const personalProject: ProjectsData = t.raw('personal')

  return (
    <div className="mx-auto w-4/5">
      <h1 className="mb-4 text-center text-2xl font-medium text-zinc-100">
        {t('title')}
      </h1>

      <h2 className="mb-3 flex justify-center text-lg text-zinc-400">
        {t('pro-title')}
      </h2>
      <div className="mx-auto grid max-w-[70%] grid-cols-1 gap-4 sm:max-w-none sm:grid-cols-2 xl:grid-cols-4">
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

      <h2 className="mb-3 mt-6 flex justify-center text-lg text-zinc-400">
        {t('personal-title')}
      </h2>
      <div className="mx-auto grid max-w-[70%] grid-cols-1 gap-4 sm:max-w-none sm:grid-cols-2 xl:grid-cols-4">
        {Object.values(personalProject).map((ProjectsData, index) => (
          <Project
            key={index}
            title={ProjectsData.title}
            link={ProjectsData.link}
            github={ProjectsData.github}
            description={ProjectsData.description}
            tags={ProjectsData.stacks}
          />
        ))}
      </div>
    </div>
  )
}
