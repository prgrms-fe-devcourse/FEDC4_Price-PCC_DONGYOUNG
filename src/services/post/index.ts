import { ModifyUploadFormType } from '@/hooks/useModifyPostForm'
import { apiClient } from '@/lib/axios'

interface PostUserBody {
  title: {
    title: string
    description: string
  }
  image?: File
}

export const postUserPost = async (body: PostUserBody) => {
  const formData = new FormData()
  formData.append('title', JSON.stringify(body.title))
  formData.append('image', body.image!)
  const { data } = await apiClient.post('/api/posts/create', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
  return data
}

export const getUserPosts = async ({
  authorId,
  offset,
  limit,
}: {
  authorId: string
  offset: number
  limit: number
}) => {
  const { data } = await apiClient.get(
    `/api/posts/author?authorId=${authorId}&offset=${offset}&limit=${limit}`,
  )
  return data
}

export const getPostDetail = async (id: string) => {
  try {
    const { data } = await apiClient.get(`/api/post/${id}`)
    return data
  } catch (e) {
    if (e instanceof Error) throw new Error(e.message)
  }
}

export const putUserPost = async (body: ModifyUploadFormType) => {
  const title = JSON.stringify({
    title: body.title,
    description: body.description,
    mapping_ID: body.mapping_ID,
  })

  const formData = new FormData()
  formData.append('title', title)
  formData.append('postId', body.postId)

  // 기존 이미지가 있고, 변경 없을 때
  if (typeof body.imageSelective.image === 'string') {
    formData.append('image', '')
  }
  // 기존 이미지가 있든 없든 새로운 이미지가 있을 때
  else if (body.imageSelective.image instanceof File) {
    formData.append('image', body.imageSelective.image)
  }
  //  기존 이미지가 없고, 새로운 이미지가 없을 때
  else if (
    !body.imageSelective.image &&
    !body.imageSelective.imageToDeletePublicId
  ) {
    formData.append('image', '')
  }
  // 기존 이미지가 있고, 기존 이미지를 삭제할 때
  if (body.imageSelective.imageToDeletePublicId && !body.imageSelective.image) {
    formData.append(
      'imageToDeletePublicId',
      body.imageSelective.imageToDeletePublicId,
    )
  }

  const { data } = await apiClient.put('/api/posts/update', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
  return data
}

export const deleteUserPost = async (id: string) => {
  try {
    const { data } = await apiClient.delete(`api/post/${id}`)
    return data
  } catch (e) {
    if (e instanceof Error) throw new Error(e.message)
  }
}
