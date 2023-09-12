export async function getPostDetail(id: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_ADDRESS}/posts/${id}`,
    {
      cache: 'no-cache',
    },
  )

  const postDetail = await response.json()
  return postDetail
}
