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

  return (
    <div className="mx-auto flex w-full flex-col items-center gap-4">
      <h1 className="mb-4 text-center text-2xl font-medium text-zinc-100">
        {t('title')}
      </h1>

      {Object.values(exp).map((expData, index) => (
        <Timeline
          key={index}
          period={expData.period}
          title={expData.title}
          subtitle={expData.subtitle}
          text={expData.description}
          tags={expData.stacks}
        />
      ))}
    </div>
  )
}
