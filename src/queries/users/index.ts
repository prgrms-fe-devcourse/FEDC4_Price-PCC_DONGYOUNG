'use client'

import { useQuery } from '@tanstack/react-query'
import { useCurrentUser } from '@/hooks/useCurrentUser'
import { getAllUsers } from '@/services/user'
import type User from '@/types/user'

const useGetAllUsers = () => {
  const { currentUser } = useCurrentUser()

  return useQuery({
    queryKey: ['getAllUsers', currentUser?._id],
    queryFn: async () => {
      const data: User<string>[] = await getAllUsers()
      return data
    },
  })
}

export default useGetAllUsers
