import type { Meta, StoryObj } from '@storybook/react'
import { SignTitle } from '.'

const meta = {
  title: 'Component/SignTitle',
  component: SignTitle,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof SignTitle>

export default meta
type Story = StoryObj<typeof meta>

export const SignUpTitle: Story = {
  argTypes: {
    text: {
      control: 'text',
      defaultValue: '',
    },
  },
}

SignUpTitle.args = {
  text: '로그인',
}
