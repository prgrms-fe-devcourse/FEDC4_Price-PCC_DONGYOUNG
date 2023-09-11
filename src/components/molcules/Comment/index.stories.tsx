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
    authorImage: 'https://picssum.phtos/200/200',
    authorName: '사용자',
    comment: '그거 너무 싸게 산거임',
    createAt: '2023-09-11',
  },
}

Primary.argTypes = {
  comment: {
    control: 'text',
  },
  createAt: {
    control: 'text',
  },
  authorImage: {
    control: 'text',
  },
  authorName: {
    control: 'text',
  },
}
