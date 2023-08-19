import './globals.css'

import type { Metadata } from 'next'
import type { ChildrenProps } from 'react'

import Footer from './Footer'
import Header from './Header'

if (process.env.NEXT_PUBLIC_API_MOCKING === 'true') {
  import('../../mocks')
}

export const metadata: Metadata = {
  title: 'Next.js Tailwind Template',
  description: 'Next.js Tailwind Template',
}

export default function RootLayout({ children }: ChildrenProps) {
  return (
    <html className="h-full" lang="en" data-theme="light">
      <body className="flex h-full flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
