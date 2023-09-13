import type { Meta, StoryObj } from '@storybook/react'
import Card from './Card'

const meta = {
  title: 'Component/Card',
  component: Card,
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: null,
    width: 22,
    height: 20.25,
  },
  argTypes: {
    width: {
      control: {
        type: 'number',
        min: 10,
      },
    },
    height: {
      control: {
        type: 'number',
        min: 10,
      },
    },
  },
}
