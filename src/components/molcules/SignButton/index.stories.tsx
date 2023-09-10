import type { Meta, StoryObj } from '@storybook/react'
import SignButton from '.'

const meta = {
  title: 'Component/SignButton',
  component: SignButton,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof SignButton>

export default meta
type Story = StoryObj<typeof meta>

export const SignUpButton: Story = {
  argTypes: {
    text: {
      control: 'text',
      defaultValue: '',
    },
  },
}

export const SignInButton: Story = {
  argTypes: {
    text: {
      control: 'text',
      defaultValue: '',
    },
  },
}

SignUpButton.args = {
  text: '회원가입',
}

SignInButton.args = {
  text: '로그인',
}
