import Notification from '../Notification'
import Like from '../like'
import Message from '../message'
import Post from '../post'

interface User {
  name: string
  age: number
  coverImage: string
  image: string
  role: string
  isOnline: boolean
  posts: Post[]
  likes: Like[]
  comments: string[]
  followers: string[]
  following: Following[]
  notifications: Notification[]
  messages: Message[]
  _id: string
  fullName: string
  email: string
  createdAt: string
  updatedAt: string
}

interface Following {
  _id: string
  user: string
  follower: string
  createdAt: string
  updatedAt: string
}
export default User
