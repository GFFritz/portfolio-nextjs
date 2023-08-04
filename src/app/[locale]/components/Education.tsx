import Timeline from './Timeline'
import { useTranslations } from 'next-intl'

interface CourseData {
  period: string
  title: string
  subtitle: string
  description: string
}

interface CoursesData {
  [key: string]: CourseData
}

export function Education() {
  const t = useTranslations('Education')
  const courses: CoursesData = t.raw('courses')

  return (
    <div className="mx-auto flex w-full flex-col items-center gap-4">
      <h1 className="mb-4 text-center text-2xl font-medium text-zinc-100">
        {t('title')}
      </h1>

      {Object.values(courses).map((courseData, index) => (
        <Timeline
          key={index}
          period={courseData.period}
          title={courseData.title}
          subtitle={courseData.subtitle}
          text={courseData.description}
        />
      ))}
    </div>
  )
}
