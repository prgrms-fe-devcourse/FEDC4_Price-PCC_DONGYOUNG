'use client'

import { useQuery } from '@tanstack/react-query'
import { getAllUsers } from '@/services/user'
import type User from '@/types/user'

//TODO - 사용자 목록 무한 스크롤 구현하기
const useGetAllUsers = () => {
  return useQuery({
    queryKey: ['getAllUsers'],
    queryFn: async () => {
      const data: User[] = await getAllUsers()
      return data
    },
  })
}

export default useGetAllUsers
