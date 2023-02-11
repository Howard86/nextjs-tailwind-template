import type { ChildrenProps } from 'react';

import Footer from './Footer';
import Header from './Header';

import '../styles/globals.css';

if (process.env.NEXT_PUBLIC_API_MOCKING === 'true') {
  import('../../mocks');
}

export default function RootLayout({ children }: ChildrenProps) {
  return (
    <html className="h-full" lang="en" data-theme="light">
      <head>
        <title>Next.js Tailwind Template</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="flex h-full flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
