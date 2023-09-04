import { assertValue } from '@/utils/assertValue'

export const Environment = {
  nodeEnv: () => process.env.NODE_ENV,
  baseUrl: () => assertEnv('NEXT_PUBLIC_API_ADDRESS'),
}

function assertEnv(key: string) {
  return assertValue<string>(process.env[key], `${key}가 설정되지 않았습니다.`)
}
