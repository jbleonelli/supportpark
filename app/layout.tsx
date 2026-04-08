import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Support Park | Guidage Dynamique & Technologies Parking',
  description:
    'Spécialiste national de l\'installation, la maintenance et la supervision des technologies de parking. Guidage dynamique, bornes de recharge, barrières, éclairage intelligent.',
  keywords: 'parking, guidage dynamique, maintenance parking, supervision parking, bornes de recharge, technologie parking',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
