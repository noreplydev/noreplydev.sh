import type { Metadata } from 'next'
import './globals.css'
import { JetBrains_Mono } from 'next/font/google'

export const metadata: Metadata = {
  title: 'noreplydev',
  description: 'just building things',
}

const jetbrains = JetBrains_Mono({
  weight: ['400', '300'],
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='h-full w-full'>
      <body className={`h-full w-full  ${jetbrains.className}`}>{children}</body>
    </html>
  )
}
