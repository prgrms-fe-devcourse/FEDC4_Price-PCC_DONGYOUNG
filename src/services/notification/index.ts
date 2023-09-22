import { apiClient } from '@/lib/axios'

export const getNotification = async () => {
  const { data } = await apiClient.get('/api/notifications')
  return data
}

export const putNotification = async () => {
  await apiClient.put('/api/notifications/seen')
}
