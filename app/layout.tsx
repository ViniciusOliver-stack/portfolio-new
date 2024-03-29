'use client'

import { NextUIProvider } from '@nextui-org/react'
import { Header } from './components/header'
import { Fira_Sans } from 'next/font/google'
import './globals.css'
import { Footer } from './components/footer'
import { BackToTop } from './components/back-to-top'
const firaCode = Fira_Sans({ subsets: ['latin'], weight: ['400'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={firaCode.className}>
        <NextUIProvider>
          <Header />
          {children}
          <BackToTop />
          <Footer />
        </NextUIProvider>
      </body>
    </html>
  )
}
