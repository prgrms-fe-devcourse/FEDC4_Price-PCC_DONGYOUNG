import type { Meta, StoryObj } from '@storybook/react'
import { SignUpForm } from '.'

const meta = {
  title: 'Component/SignUpForm',
  component: SignUpForm,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof SignUpForm>

export default meta
type Story = StoryObj<typeof meta>

export const SignUp: Story = {}
