import type { Meta, StoryObj } from '@storybook/react'
import LikeDislikeCount from './LikeDislikeCount'

const meta = {
  title: 'Component/LikeDislikeCount',
  component: LikeDislikeCount,
} satisfies Meta<typeof LikeDislikeCount>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    like: 230,
    dislike: 180,
  },
  argTypes: {
    like: {
      type: 'number',
    },
    dislike: {
      type: 'number',
    },
  },
}
