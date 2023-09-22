'use client'

import { useQuery } from '@tanstack/react-query'
import { getNotification } from '@/services/notification'
import type Notification from '@/types/notification'

const useGetNotification = () => {
  return useQuery({
    queryKey: ['getNotification'],
    queryFn: async () => {
      const data: Notification[] = await getNotification()
      return data
    },
  })
}

export default useGetNotification
