import type { Meta, StoryObj } from '@storybook/react'
import CardPostItem from './CardPostItem'

const meta = {
  title: 'Component/CardPostItem',
  component: CardPostItem,
} satisfies Meta<typeof CardPostItem>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
  argTypes: {},
}
