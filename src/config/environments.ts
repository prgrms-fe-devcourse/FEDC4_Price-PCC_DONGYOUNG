import { assertValue } from '@/utils/assertValue'

export const Environment = {
  internalUrl: () => assertEnv('NEXT_PUBLIC_API_INTERNAL_ADDRESS'),
  nodeEnv: () => process.env.NODE_ENV,
  baseUrl: () => assertEnv('NEXT_PUBLIC_API_ADDRESS'),
  channelId: () => assertEnv('NEXT_PUBLIC_CHANNEL_ID'),
  likeChannelId: () => assertEnv('NEXT_PUBLIC_LIKE_CHANNEL_ID'),
  dislikeChannelID: () => assertEnv('NEXT_PUBLIC_DISLIKE_CHANNEL_ID'),
}

function assertEnv(key: string) {
  return assertValue<string>(process.env[key], `${key}가 설정되지 않았습니다.`)
}
