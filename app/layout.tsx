import type { Metadata } from 'next'
import './globals.css'
import LenisProvider from '@/components/LenisProvider'

export const metadata: Metadata = {
  title: 'BUGATTI — The Unveiling | Beyond Measure',
  description: 'Enter the vault. Witness the cinematic reveal of the most extraordinary hypercar ever conceived. A digital unveiling ceremony by Bugatti.',
  keywords: 'Bugatti, hypercar, luxury, reveal, Chiron, automotive, cinematic',
  openGraph: {
    title: 'BUGATTI — The Unveiling',
    description: 'A cinematic digital unveiling ceremony.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  )
}
