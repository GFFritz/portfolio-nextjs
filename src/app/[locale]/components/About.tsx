import { useTranslations } from 'next-intl'

export function About() {
  const t = useTranslations('About')
  return (
    <div className="flex w-full justify-center">
      <div className="w-4/5 md:w-2/4">
        <h1 className="mb-4 text-center text-2xl font-medium text-zinc-100">
          {t('title')}
        </h1>
        <span className="text-sm leading-[1.2rem] text-zinc-200 md:text-base md:leading-[1.45rem]">
          {t('text')}
        </span>
      </div>
    </div>
  )
}
