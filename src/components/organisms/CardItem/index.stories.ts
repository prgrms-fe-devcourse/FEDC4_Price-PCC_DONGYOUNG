import type { Meta, StoryObj } from '@storybook/react'
import CardItem from './CardItem'

const meta = {
  title: 'Component/CardItem',
  component: CardItem,
} satisfies Meta<typeof CardItem>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
  argTypes: {},
}
