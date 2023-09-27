import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '.'

const meta = {
  title: 'Component/Button',
  component: Button,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Button>

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

export const PostButton: Story = {
  argTypes: {
    text: {
      control: 'text',
      defaultValue: '',
    },
    width: {
      control: 'number',
      defaultValue: 0,
    },
    height: {
      control: 'number',
      defaultValue: 0,
    },
  },
}

PostButton.args = {
  text: '완료',
  width: 12.0625,
  height: 3.6875,
}

export const EditPasswordButton: Story = {
  argTypes: {
    text: {
      control: 'text',
      defaultValue: '',
    },
    width: {
      control: 'number',
      defaultValue: 0,
    },
    height: {
      control: 'number',
      defaultValue: 0,
    },
  },
}

EditPasswordButton.args = {
  text: '비밀번호 변경하기',
  width: 14.0625,
  height: 2.0625,
}

export const EditProfileButton: Story = {
  argTypes: {
    text: {
      control: 'text',
      defaultValue: '',
    },
    width: {
      control: 'number',
      defaultValue: 0,
    },
    height: {
      control: 'number',
      defaultValue: 0,
    },
  },
}

EditProfileButton.args = {
  text: '수정 완료',
  width: 33.875,
  height: 3.6875,
}

export const DeleteButton: Story = {
  argTypes: {
    text: {
      control: 'text',
      defaultValue: '',
    },
    width: {
      control: 'number',
      defaultValue: 0,
    },
    height: {
      control: 'number',
      defaultValue: 0,
    },
  },
}

DeleteButton.args = {
  text: '삭제',
  width: 5.3125,
  height: 2.82606,
}
