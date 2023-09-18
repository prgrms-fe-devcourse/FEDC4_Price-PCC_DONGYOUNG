import { LoginReqBody } from '@/hooks/useLogin'
import { SignupReqBody } from '@/hooks/useSignup'
import { apiClient } from '@/lib/axios'

export const loginUser = async ({ email, password }: LoginReqBody) => {
  const { data } = await apiClient.post('/api/login', { email, password })
  return data
}

export const signupUser = async ({
  email,
  password,
  fullName,
}: SignupReqBody) => {
  const { data } = await apiClient.post('/api/signup', {
    email,
    fullName,
    password,
  })
  return data
}

export const logoutUser = async (token: string) => {
  const { data } = await apiClient.post('/api/logout', {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  })
  return data
}

export const validateToken = async () => {
  const { data } = await apiClient.get('/api/auth-user')
  return data
}

export const editUserPassword = async (password: string, token: string) => {
  await apiClient.put('/api/settings/update-password', {
    headers: {
      Authorization: 'bearer ' + token,
    },
    body: {
      password,
    },
  })
}
