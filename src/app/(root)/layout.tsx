import React from 'react'
import type { Metadata } from 'next'
import NavBar from '@/components/common/navBar.tsx'
import TanstackQueryContext from '@/lib/contexts/tanstackQueryContext'

export const metadata: Metadata = {
  title: 'sweet trade website',
  description: 'judge your trades by their sweetness',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <TanstackQueryContext>
        <body>
          <NavBar />
          {children}
        </body>
      </TanstackQueryContext>
    </html>
  )
}
