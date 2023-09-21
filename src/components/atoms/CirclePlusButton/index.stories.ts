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
    width: 5.6,
    height: 5.6,
  },
  argTypes: {
    onClick: {
      type: 'function',
    },
    width: {
      type: 'number',
    },
    height: {
      type: 'number',
    },
  },
}
