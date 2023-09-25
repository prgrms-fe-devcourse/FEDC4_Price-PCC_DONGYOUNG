import type { Meta, StoryObj } from '@storybook/react'
import DarkModeButton from '.'

const meta = {
  title: 'Buttons/DarkModeButton',
  component: DarkModeButton,
} satisfies Meta<typeof DarkModeButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    _darkMode: true,
  },
  argTypes: {
    _darkMode: {
      type: 'boolean',
    },
  },
}
