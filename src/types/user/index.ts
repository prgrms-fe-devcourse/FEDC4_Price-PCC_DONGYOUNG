import Follow from '../follow'
import Like from '../like'
import Message from '../message'
import Notification from '../notification'
import Post from '../post'

interface User<T = Follow> {
  name: string
  email: string
  coverImage?: string
  image?: string
  role?: string
  isOnline?: boolean
  posts?: Post[]
  likes?: Like[]
  comments?: string[]
  followers?: T[]
  following?: T[]
  notifications?: Notification[]
  messages?: Message[]
  _id: string
  fullName: string
  createdAt?: string
  updatedAt?: string
  __v?: number
}
export interface UserSummary {
  role: string
  emailVerified?: boolean
  banned?: boolean
  isOnline?: boolean
  posts?: Post[]
  likes?: Like[]
  comments?: string[]
  followers: string[]
  following: string[]
  notifications?: Notification[]
  messages?: Message[]
  _id: string
  fullName: string
  email: string
  createdAt?: string
  updatedAt?: string
  __v?: number
}

interface Following {
  _id: string
  user: string
  follower: string
  createdAt: string
  updatedAt: string
}

interface Follower {
  _id: string
  user: string
  follower: string
  createdAt: string
  updatedAt: string
}

export default User
