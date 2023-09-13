import type { Meta, StoryObj } from '@storybook/react'
import { SignInput } from '.'

const meta = {
  title: 'Component/SignInput',
  component: SignInput,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof SignInput>

export default meta
type Story = StoryObj<typeof meta>

export const IdInput: Story = {
  argTypes: {
    text: {
      control: 'text',
      defaultValue: '',
    },
    placeholder: {
      control: 'text',
      defatulValue: '',
    },
    type: {
      control: 'text',
      defaultValue: 'text',
    },
  },
}

export const PasswordInput: Story = {
  argTypes: {
    text: {
      control: 'text',
      defaultValue: '',
    },
    placeholder: {
      control: 'text',
      defatulValue: '',
    },
    type: {
      control: 'text',
      defaultValue: 'text',
    },
  },
}

IdInput.args = {
  text: '아이디',
  placeholder: '아이디를 입력해 주세요.',
}

PasswordInput.args = {
  text: '비밀번호',
  placeholder: '비밀번호를 입력해 주세요.',
  type: 'password',
}
