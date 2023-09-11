import type { Meta, StoryObj } from '@storybook/react'
import Comment from '.'

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
    author: {
      fullName: '사용자',
      image: 'https://picsum.photos/200/200',
    },
    comment: '그거 너무 싸게 산거임',
    _id: '1',
    createAt: '2023-09-11',
  },
}

Primary.argTypes = {
  _id: {
    control: 'text',
  },
  comment: {
    control: 'text',
  },
  createAt: {
    control: 'text',
  },
}
