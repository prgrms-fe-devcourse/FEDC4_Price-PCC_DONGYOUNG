import type { Meta, StoryObj } from '@storybook/react'
import LogInForm from '.'

const meta = {
  title: 'Component/LogInForm',
  component: LogInForm,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof LogInForm>

export default meta
type Story = StoryObj<typeof meta>

export const LogIn: Story = {}
