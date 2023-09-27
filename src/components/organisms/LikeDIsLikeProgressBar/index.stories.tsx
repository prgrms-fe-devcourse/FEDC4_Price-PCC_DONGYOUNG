import type { Meta, StoryObj } from '@storybook/react'
import LikeDisLikeProgressBar from '.'

const meta = {
  title: 'Component/LikeDislikeProgressBar',
  component: LikeDisLikeProgressBar,
} satisfies Meta<typeof LikeDisLikeProgressBar>

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
