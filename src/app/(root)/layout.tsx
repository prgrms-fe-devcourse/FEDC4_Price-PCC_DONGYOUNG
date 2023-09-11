import React from 'react'
import type { Metadata } from 'next'
import NavBar from '@/components/organisms/NavBar'
import AuthProvider from '@/lib/contexts/authProvider'
import TanstackQueryContext from '@/lib/contexts/tanstackQueryContext'
import '@/styles/global-layout.scss'

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
        <AuthProvider>
          <body className={`pcc-theme--light`}>
            <NavBar />
            {children}
          </body>
        </AuthProvider>
      </TanstackQueryContext>
    </html>
  )
}
