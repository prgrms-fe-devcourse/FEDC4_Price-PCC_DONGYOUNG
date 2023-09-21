const POST_CONSTANT = {
  CHANNEL_ID: 'channelId',
  LIKE_ERROR: '좋아요는 로그인 된 사용자만 가능합니다.',
  DISLIKE_ERROR: '싫어요는 로그인 된 사용자만 가능합니다.',
  LIKE_API_ERROR: '좋아요 호출 시 문제가 발생했습니다.',
  DISLIKE_API_ERROR: '싫어요 호출 시 문제가 발생했습니다.',
} as const

export { POST_CONSTANT }
