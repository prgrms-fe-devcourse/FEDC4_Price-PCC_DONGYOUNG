import axios from 'axios'
import { redirect } from 'next/navigation'
import { Environment } from '@/config/environments'
import APP_PATH from '@/config/paths'
import { ApiAddressTypes } from '@/types/config'

const baseUrlTable: ApiAddressTypes = {
  production: 'http://localhost:3000',
  development: 'http://localhost:3000',
  test: 'http://localhost:3000',
}

export const apiClient = axios.create({
  baseURL: baseUrlTable[Environment.nodeEnv()],
  headers: {
    'Content-Type': 'application/json',
  },
})

apiClient.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (error.response.status === 401) {
      redirect(APP_PATH.HOME)
    }
    return Promise.reject(error)
  },
)
