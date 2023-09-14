import type { Meta, StoryObj } from '@storybook/react'
import HeaderButtons from '.'

const meta = {
  title: 'Component/HeaderButtons',
  component: HeaderButtons,
} satisfies Meta<typeof HeaderButtons>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {},
}
