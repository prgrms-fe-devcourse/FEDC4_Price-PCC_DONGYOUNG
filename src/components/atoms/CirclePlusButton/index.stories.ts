import type { Meta, StoryObj } from '@storybook/react'
import CirclePlusButton from '.'

const meta = {
  title: 'Buttons/CirclePlusButton',
  component: CirclePlusButton,
} satisfies Meta<typeof CirclePlusButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    onClick: () => {},
  },
  argTypes: {
    onClick: {
      type: 'function',
    },
  },
}
