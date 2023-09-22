'use client'

import { useState } from 'react'
import NotificationModal from '@/components/organisms/NotificationModal'
import Assets from '@/config/assets'
import { useCurrentUser } from '@/hooks/useCurrentUser'
import ImageButton from '../ImageButton'

export default function NotificationButton() {
  const [isOpen, setIsOpen] = useState(false)
  const { currentUser } = useCurrentUser()

  return (
    <>
      <ImageButton
        size={3}
        src={Assets.NotificationImage}
        onClick={() => setIsOpen(!isOpen)}
      />
      {
        <NotificationModal
          open={isOpen}
          currentUser={currentUser}
          setIsOpen={setIsOpen}
        />
      }
    </>
  )
}
