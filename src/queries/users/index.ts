import { useQuery } from '@tanstack/react-query'
import { getAllUsers } from '@/services/user'
import { UserSummary } from '@/types/user'

const useGetAllUsers = () => {
  return useQuery({
    queryKey: ['getAllUsers'],
    queryFn: async () => {
      const data: UserSummary[] = await getAllUsers()
      return data
    },
  })
}

export default useGetAllUsers
