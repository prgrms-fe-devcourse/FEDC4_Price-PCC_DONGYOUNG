'use client'

import { useState } from 'react'
import NotificationModal from '@/components/organisms/NotificationModal'
import Assets from '@/config/assets'
import useGetNotification from '@/queries/notifications'
import ImageButton from '../ImageButton'

export default function NotificationButton() {
  const data = useGetNotification()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <ImageButton
        size={3}
        src={Assets.NotificationImage}
        onClick={() => setIsOpen(!isOpen)}
      />
      {isOpen && <NotificationModal data={data} setIsOpen={setIsOpen} />}
    </>
  )
}
