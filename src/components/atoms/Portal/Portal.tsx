'use client'

import React, { ReactElement, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

const Portal = ({ children }: { children: ReactElement }) => {
  const [mounted, setMounted] = useState<boolean>(false)

  useEffect(() => {
    setMounted(true)
    return () => setMounted(false)
  }, [])

  if (typeof window === 'undefined') return <></>

  return mounted ? (
    createPortal(children, document.getElementById('modal') as HTMLElement)
  ) : (
    <></>
  )
}

export default Portal
