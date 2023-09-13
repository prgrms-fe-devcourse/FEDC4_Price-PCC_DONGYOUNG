import type { Meta, StoryObj } from '@storybook/react'
import { Comment } from '.'

const meta = {
  title: 'Component/Comment',
  component: Comment,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Comment>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    _id: '123123',
    comment: '그거 너무 싸게 산거임',
    author: {
      image: '',
      fullName: '김효중',
    },
  },
}

Primary.argTypes = {
  comment: {
    control: 'text',
  },
  author: {
    control: 'object',
  },
}
