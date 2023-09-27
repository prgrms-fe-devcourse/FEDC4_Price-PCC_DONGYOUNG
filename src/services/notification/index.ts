import { apiClient } from '@/lib/axios'

export const getNotification = async () => {
  const { data } = await apiClient.get('/api/notifications')
  return data
}

export const putNotification = async () => {
  const { data } = await apiClient.put('/api/notifications/seen')
  return data
}
