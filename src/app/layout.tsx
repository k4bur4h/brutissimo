import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Brutissimo - Professzionális Automata Megoldások',
  description: 'Fedezze fel prémium vending automata kínálatunkat. Modern, megbízható megoldások irodák, gyárak és közintézmények számára.',
  keywords: 'vending automata, italautomata, snack automata, kávéautomata, üzemeltetés',
  authors: [{ name: 'Brutissimo' }],
  openGraph: {
    type: 'website',
    locale: 'hu_HU',
    url: 'https://brutissimo.hu',
    siteName: 'Brutissimo',
    title: 'Brutissimo - Professzionális Automata Megoldások',
    description: 'Fedezze fel prémium vending automata kínálatunkat.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Brutissimo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brutissimo - Professzionális Automata Megoldások',
    description: 'Fedezze fel prémium vending automata kínálatunkat.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  viewport: 'width=device-width, initial-scale=1',
}

import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="hu">
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}