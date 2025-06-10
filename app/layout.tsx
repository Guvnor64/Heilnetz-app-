import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'Heilnetz 3.0',
  description: 'Multilingual mental health app for the DACH region',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  )
}
