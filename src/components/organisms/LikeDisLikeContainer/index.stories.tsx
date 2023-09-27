import type { Meta, StoryObj } from '@storybook/react'
import { LikeDisLikeContainer } from '.'

const meta = {
  title: 'Component/LikeDislikeContainer',
  component: LikeDisLikeContainer,
} satisfies Meta<typeof LikeDisLikeContainer>

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
