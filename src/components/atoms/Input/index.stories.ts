import type { Meta, StoryObj } from '@storybook/react'
import Input from './index'
import './index.scss'

const meta = {
  title: 'Input',
  component: Input,
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    variant: 'default',
  },
}

export const Disabled: Story = {
  args: {
    variant: 'disabled',
  },
}

export const Error: Story = {
  args: {
    variant: 'error',
  },
}
