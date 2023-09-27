import type { Meta, StoryObj } from '@storybook/react'
import { LikeDislikeCount } from '.'

const meta = {
  title: 'Component/LikeDislikeCount',
  component: LikeDislikeCount,
} satisfies Meta<typeof LikeDislikeCount>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    initalState: 'init',
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
