import { useQuery } from '@tanstack/react-query'
import { useCurrentUser } from '@/hooks/useCurrentUser'
import { getAllUsers } from '@/services/user'
import { UserSummary } from '@/types/user'

const useGetAllUsers = () => {
  const { currentUser } = useCurrentUser()
  return useQuery({
    queryKey: [
      'getAllUsers',
      currentUser?._id,
      currentUser?.coverImage,
      currentUser?.fullName,
      currentUser?.name,
    ],
    queryFn: async () => {
      const data: UserSummary[] = await getAllUsers()
      return data
    },
  })
}

export default useGetAllUsers
