const APP_PATH = {
  home: () => '/',
  login: () => '/login',
  register: () => '/register',
  postDetail: (id: string) => `/post/${id}`,
  postNew: () => '/post/new',
  search: (keyword: string) => `search/${keyword}`,
  editProfile: () => '/user/edit/profile',
  editPassword: () => '/user/edit/password',
  userProfile: (id: string) => `/user/${id}`,
} as const

export default APP_PATH
