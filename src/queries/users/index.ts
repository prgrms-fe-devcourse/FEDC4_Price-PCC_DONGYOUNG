import { useQuery } from '@tanstack/react-query'
import { getAllUsers } from '@/services/user'

export const useGetAllUsers = () => {
  return useQuery({
    queryKey: ['getAllUsers'],
    queryFn: getAllUsers,
  })
}
