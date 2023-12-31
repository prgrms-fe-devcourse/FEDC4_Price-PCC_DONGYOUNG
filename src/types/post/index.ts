import Channel from '../channel'
import Comment from '../comment'
import Like from '../like'
import User from '../user'

interface Post {
  likes: Like[]
  disLikes?: Like[]
  mapping_ID?: string
  comment: Comment[]
  _id: string
  image?: string
  imagePublicId?: string
  title: string
  description: string
  channel: Channel
  author: User
  createdAt: string
  updatedAt: string
}

export default Post
