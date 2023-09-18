import axios from 'axios'
import { redirect } from 'next/navigation'
import APP_PATH from '@/config/paths'

export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_INTERNAL_ADDRESS,
  headers: {
    'Content-Type': 'application/json',
  },
})

apiClient.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    console.log(error)
    //TODO: 필요한 경우 toast 메시지 추가
    switch (error.response.status) {
      case 401:
        redirect(APP_PATH.login())
      case 404:
        // toast.error('요청하신 정보를 찾을 수 없습니다.');
        break
      default:
        if (error.response.status.toString().startsWith('5')) {
          // toast.error('서버에 오류가 발생했습니다.');
        } else {
          // toast.error('알 수 없는 오류가 발생했습니다.');
        }
        break
    }
    return Promise.reject(error)
  },
)
