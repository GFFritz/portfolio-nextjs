import Timeline from './Timeline'
import { useTranslations } from 'next-intl'

interface ExperienceData {
  period: string
  title: string
  subtitle: string
  description: string
  stacks: string[]
}

interface ExperiencesData {
  [key: string]: ExperienceData
}

export function Experiences() {
  const t = useTranslations('Experiences')
  const exp: ExperiencesData = t.raw('exp')

  // Função para ordenar os projetos em ordem decrescente com base no índice
  const sortByIndex = (
    a: [string, ExperienceData],
    b: [string, ExperienceData],
  ) => parseInt(b[0]) - parseInt(a[0])

  // Ordena os projetos em ordem decrescente
  const orderedExperiences = Object.entries(exp).sort(sortByIndex)

  return (
    <div className="mx-auto flex w-full flex-col items-center gap-4">
      <h1 className="mb-4 text-center text-2xl font-medium text-zinc-100">
        {t('title')}
      </h1>

      {orderedExperiences.map(([index, ExperienceData]) => (
        <Timeline
          key={index}
          period={ExperienceData.period}
          title={ExperienceData.title}
          subtitle={ExperienceData.subtitle}
          text={ExperienceData.description}
          tags={ExperienceData.stacks}
        />
      ))}
    </div>
  )
}
