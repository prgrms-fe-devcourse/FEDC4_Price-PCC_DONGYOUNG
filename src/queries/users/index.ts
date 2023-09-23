'use client'

import { useQuery } from '@tanstack/react-query'
import { useAuth } from '@/lib/contexts/authProvider'
import { getAllUsers } from '@/services/user'
import type User from '@/types/user'

const useGetAllUsers = () => {
  const { currentUser } = useAuth()

  return useQuery({
    queryKey: ['getAllUsers', currentUser],
    queryFn: async () => {
      const data: User<string>[] = await getAllUsers()
      return data
    },
  })
}

export default useGetAllUsers
