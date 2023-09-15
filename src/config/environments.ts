export const Environment = {
  nodeEnv: () => process.env.NODE_ENV,
  baseUrl: () => process.env.NEXT_PUBLIC_API_ADDRESS,
  internalApiAddress: () => process.env.NEXT_PUBLIC_INTERNAL,
  channelId: () => process.env.NEXT_PUBLIC_CHANNEL_ID,


function assertEnv(key: string) {
  return assertValue<string>(process.env[key], `${key}가 설정되지 않았습니다.`)
}
