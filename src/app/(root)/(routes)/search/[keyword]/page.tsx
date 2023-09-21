import { redirect } from 'next/navigation'
import { searchData } from '@/services/search'
import Post from '@/types/post'
import User from '@/types/user'

type keywordProps = {
  params: {
    keyword: string
  }
}

export default async function Search({ params }: keywordProps) {
  const data = await searchData(params.keyword).catch(() => {
    redirect('/')
  })

  const user: User[] = []
  const post: Post[] = []

  const isUser = (target: User | Post): target is User => {
    return (target as User).fullName !== undefined
  }

  data.forEach((value: User | Post) => {
    isUser(value) ? user.push(value) : post.push(value)
  })

  return <></>
}
