import { useQuery } from '@tanstack/react-query'
import { getAllUsers } from '@/services/user'
import type User from '@/types/user'

const useGetAllUsers = () => {
  return useQuery({
    queryKey: ['getAllUsers'],
    queryFn: async () => {
      const data: User<string>[] = await getAllUsers()
      return data
    },
  })
}

export default useGetAllUsers
