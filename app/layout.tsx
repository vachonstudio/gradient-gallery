import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Vachon - UX Design Studio',
  description: 'Crafting Digital Experiences That Matter - UX Design Studio specializing in transforming complex problems into intuitive digital solutions.',
  keywords: ['UX Design', 'UI Design', 'Design Studio', 'User Experience', 'Digital Design'],
  authors: [{ name: 'Vachon UX Studio' }],
  openGraph: {
    title: 'Vachon - UX Design Studio',
    description: 'Crafting Digital Experiences That Matter',
    images: ['/og-image.jpg'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vachon - UX Design Studio',
    description: 'Crafting Digital Experiences That Matter',
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}