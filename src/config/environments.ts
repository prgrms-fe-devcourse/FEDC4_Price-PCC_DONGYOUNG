export const Environment = {

  nodeEnv: () => process.env.NODE_ENV!,
  baseUrl: () => process.env.NEXT_PUBLIC_API_ADDRESS!,
  internalApiAddress: () => process.env.NEXT_PUBLIC_INTERNAL!,
  channelId: () => process.env.NEXT_PUBLIC_CHANNEL_ID!,

}

