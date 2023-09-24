'use client'

import { useState } from 'react'
import NotificationModal from '@/components/organisms/NotificationModal'
import Assets from '@/config/assets'
import { useAuth } from '@/lib/contexts/authProvider'
import ImageButton from '../ImageButton'

export default function NotificationButton() {
  const [isOpen, setIsOpen] = useState(false)
  const { currentUser } = useAuth()

  return (
    <>
      <ImageButton
        size={3}
        src={Assets.NotificationImage}
        onClick={() => setIsOpen(!isOpen)}
      />
      {<NotificationModal open={isOpen} currentUser={currentUser} />}
    </>
  )
}
