import axios from 'axios'
import { redirect } from 'next/navigation'
import { notify } from '@/components/atoms/Toast'
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
    switch (error.response.status) {
      case 400:
        break
      case 401:
        notify('error', '로그인이 필요합니다.')
        redirect(APP_PATH.login())
      case 404:
        notify('error', '페이지를 찾을 수 없습니다.')
        break
      default:
        if (error.response.status.toString().startsWith('5')) {
          notify(
            'error',
            '서버에 오류가 발생했습니다. 잠시 후 다시 시도해주세요.',
          )
        } else {
          notify('error', '알 수 없는 오류가 발생했습니다.')
        }
        break
    }
    return Promise.reject(error)
  },
)
