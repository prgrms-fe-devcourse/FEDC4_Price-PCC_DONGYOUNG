import { cookies } from 'next/headers'
import { constants } from '@/config/constants'

export function useServerCookie() {
  if (typeof window !== 'undefined') {
    throw new Error('This hook should be used in server-side only')
  }

  const cookieStore = cookies()
  const token = cookieStore.get(constants.AUTH_TOKEN)?.value!

  return { token }
}
