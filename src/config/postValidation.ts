import z from 'zod'

export const postValidation = {
  title: () => z.string().trim().min(1, { message: '제목을 입력해주세요.' }),
  description: () =>
    z.string().trim().min(1, { message: '내용을 입력해주세요.' }),
  image: () => z.any(),
}
