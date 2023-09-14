import axios from 'axios'
import { redirect } from 'next/navigation'
import APP_PATH from '@/config/paths'

export const apiClient = axios.create({
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
    if (error.response.status === 401) {
      redirect(APP_PATH.home())
    }
    if (error.response.status === 413) {
      alert('이미지 용량이 너무 큽니다.')
    }
    return Promise.reject(error)
  },
)
