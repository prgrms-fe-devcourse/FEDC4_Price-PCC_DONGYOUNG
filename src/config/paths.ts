const APP_PATH = {
  HOME: '/',
  SIGNIN: '/signin',
  SIGNUP: '/signup',
  POST_DETAIL: '/post/[postid]',
  POST_NEW: '/post/new',
  SEARCH: '/search/[keyword]',
  EDIT_PROFILE: '/user/edit/profile',
  EDIT_PASSWORD: '/user/edit/password',
  MYPAGE: '/user/mypage',
} as const

export default APP_PATH
