import React from 'react'
import type { Metadata } from 'next'
import Header from '@/components/organisms/Header/Header'
import NavBar from '@/components/organisms/NavBar'
import AuthProvider from '@/lib/contexts/authProvider'
import TanstackQueryContext from '@/lib/contexts/tanstackQueryContext'
import '@/styles/global-layout.scss'
import pretendardFont from '../../constants/font'

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
          <body
            className={`${pretendardFont.Regular.className} pcc-theme--light`}
          >
            <NavBar />
            <div className="main-container">
              <Header />
              <main>{children}</main>
            </div>
          </body>
        </AuthProvider>
      </TanstackQueryContext>
    </html>
  )
}
