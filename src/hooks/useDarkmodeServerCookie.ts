import { cookies } from 'next/headers'

export function useDarkmodeServerCookie(intialValue: boolean) {
  if (typeof window !== 'undefined') {
    throw new Error('This hook should be used in server-side only')
  }

  const cookieStore = cookies()
  let darkMode = intialValue
  const cookieVal = cookieStore.get('pcc-darkmode')
  if (cookieVal) {
    darkMode = JSON.parse(cookieVal?.value!)
  }

  return { darkMode }
}
