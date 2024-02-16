'use client'

import { Header } from './components/header'
import { Fira_Code } from 'next/font/google'
import './globals.css'

const firaCode = Fira_Code({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={firaCode.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
