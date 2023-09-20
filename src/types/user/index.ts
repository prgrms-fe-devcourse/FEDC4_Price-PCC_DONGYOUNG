import Follow from '../follow'
import Like from '../like'
import Message from '../message'
import Notification from '../notification'
import Post from '../post'

interface User {
  name: string
  email: string
  coverImage?: string
  image?: string
  role?: string
  isOnline?: boolean
  posts?: Post[]
  likes?: Like[]
  comments?: string[]
  followers?: Follow[]
  following?: Follow[]
  notifications?: Notification[]
  messages?: Message[]
  _id: string
  fullName: string
  createdAt?: string
  updatedAt?: string
  __v?: number
}
export default User
