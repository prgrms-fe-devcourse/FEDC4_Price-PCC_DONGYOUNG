import type { Meta, StoryObj } from '@storybook/react'
import NotificationButton from '.'

const meta = {
  title: 'Buttons/NotificationButton',
  component: NotificationButton,
} satisfies Meta<typeof NotificationButton>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
