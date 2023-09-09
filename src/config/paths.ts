const APP_PATH = {
  home: () => '/',
  login: () => '/login',
  register: () => '/register',
  postDetail: (id: string) => `/post/${id}`,
  postNew: () => '/post/new',
  search: (keyword: string) => `search/${keyword}`,
  editProfile: () => '/user/edit/profile',
  editPassword: () => '/user/edit/password',
  myPage: () => '/user',
} as const

export default APP_PATH
