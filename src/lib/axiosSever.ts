import axios from 'axios'
import { Environment } from '@/config/environments'

export const apiServer = axios.create({
  baseURL: Environment.baseUrl(),
  headers: {
    'Content-Type': 'application/json',
  },
})
