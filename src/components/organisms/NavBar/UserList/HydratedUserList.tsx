import { Hydrate, dehydrate } from '@tanstack/react-query'
import getQueryClient from '@/lib/queryClient'
import { getAllUsers } from '@/services/user'
import UserList from './UserList'

export default async function HydratedUserList() {
  const queryClient = getQueryClient()
  await queryClient.prefetchQuery(['getAllUsers'], getAllUsers, {
    staleTime: Infinity,
  })
  const dehydratedState = dehydrate(queryClient)

  return (
    <Hydrate state={dehydratedState}>
      <UserList />
    </Hydrate>
  )
}
