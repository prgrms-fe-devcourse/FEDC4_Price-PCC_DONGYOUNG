import { useQuery } from '@tanstack/react-query'
import { getUserDetail } from '@/services/user'
import type User from '@/types/user'

export const useGetUserDetail = (id: string) => {
  return useQuery({
    queryKey: ['getUserDetail', id],
    queryFn: async () => {
      const data: User = await getUserDetail(id)
      return data
    },
  })
}
