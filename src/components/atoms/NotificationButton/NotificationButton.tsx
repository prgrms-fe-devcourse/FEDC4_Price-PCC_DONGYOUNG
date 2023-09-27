'use client'

import { useEffect, useRef, useState } from 'react'
import NotificationModal from '@/components/organisms/NotificationModal'
import Assets from '@/config/assets'
import { useAuth } from '@/lib/contexts/authProvider'
import ImageButton from '../ImageButton'
import './index.scss'

export default function NotificationButton() {
  const notiRef = useRef<HTMLDivElement>(null)
  const [isOpen, setIsOpen] = useState(false)
  const { currentUser } = useAuth()

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (notiRef.current && !notiRef.current.contains(e.target as Node)) {
        setIsOpen(() => false)
      }
    }
    window.addEventListener('mousedown', handleClick)
    return () => window.removeEventListener('mousedown', handleClick)
  }, [notiRef])

  return (
    <div className="noti-container" ref={notiRef}>
      <ImageButton
        size={3}
        src={Assets.NotificationImage}
        onClick={() => setIsOpen(!isOpen)}
      />
      {<NotificationModal open={isOpen} currentUser={currentUser} />}
    </div>
  )
}
