import type { Meta, StoryObj } from '@storybook/react'
import Button from '.'

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
    color: {
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
    color: {
      control: 'text',
      defaultValue: '',
    },
  },
}

SignUpButton.args = {
  text: '회원가입',
  color: 'yellow',
}

SignInButton.args = {
  text: '로그인',
  color: 'yellow',
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
    color: {
      control: 'text',
      defaultValue: '',
    },
  },
}

PostButton.args = {
  text: '완료',
  width: 12.0625,
  height: 3.6875,
  color: 'yellow',
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
    color: {
      control: 'text',
      defaultValue: '',
    },
  },
}

EditPasswordButton.args = {
  text: '비밀번호 변경하기',
  width: 14.0625,
  height: 2.0625,
  color: 'yellow',
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
    color: {
      control: 'text',
      defaultValue: '',
    },
  },
}

EditProfileButton.args = {
  text: '수정 완료',
  width: 33.875,
  height: 3.6875,
  color: 'yellow',
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
    color: {
      control: 'text',
      defaultValue: '',
    },
  },
}

DeleteButton.args = {
  text: '삭제',
  width: 5.3125,
  height: 2.82606,
  color: 'red',
}
