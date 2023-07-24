import './globals.css'
import { Bai_Jamjuree as BaiJamjuree } from 'next/font/google'

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
  return (
    <html lang="en">
      <body className={baiJamjuree.className}>{children}</body>
    </html>
  )
}
