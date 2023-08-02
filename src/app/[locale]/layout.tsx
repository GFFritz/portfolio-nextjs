import './globals.css'
import { Bai_Jamjuree as BaiJamjuree } from 'next/font/google'
import { useLocale } from 'next-intl'
import { notFound } from 'next/navigation'

const baiJamjuree = BaiJamjuree({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-bai-jamjuree',
})

export const metadata = {
  title: 'Gabriel Ferreira Fritz',
  description: 'Fullstack Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const locale = useLocale()

  // Show a 404 error if the user requests an unknown locale
  if (locale !== 'en' && locale !== 'pt') {
    notFound()
  }

  return (
    <html lang={locale}>
      <body className={`${baiJamjuree.className} bg-ebony-950`}>
        {children}
      </body>
    </html>
  )
}
