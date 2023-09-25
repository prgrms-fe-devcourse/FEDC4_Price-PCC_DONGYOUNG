import React from 'react'
import type { Metadata } from 'next'
import { cookies } from 'next/headers'
import ToastContainer from '@/components/atoms/Toast/ToastContainer'
import Header from '@/components/organisms/Header/Header'
import NavBar from '@/components/organisms/NavBar'
import { AuthProvider } from '@/lib/contexts/authProvider'
import TanstackQueryContext from '@/lib/contexts/tanstackQueryContext'
import '@/styles/global-layout.scss'
import pretendardFont from '../../constants/font'

export const metadata: Metadata = {
  title: 'sweet trade website',
  description: 'judge your trades by their sweetness',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const cookieStore = cookies()
  const isDark = cookieStore.get('pcc-darkmode')?.value
  const THEME_CLASSNAME =
    isDark === 'true' ? 'pcc-theme--dark' : 'pcc-theme--light'

  return (
    <html lang="ko">
      <TanstackQueryContext>
        <AuthProvider>
          <body
            className={`${pretendardFont.Regular.className} ${THEME_CLASSNAME}`}
          >
            <NavBar />
            <div className="main-container">
              <Header />
              <main>{children}</main>
            </div>
            <ToastContainer />
          </body>
        </AuthProvider>
      </TanstackQueryContext>
    </html>
  )
}
