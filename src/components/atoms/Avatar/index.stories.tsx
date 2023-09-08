import type { Meta, StoryObj } from '@storybook/react'
import Avatar from '.'

const meta = {
  title: 'Component/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    color: 'yellow_dark',
    size: 50,
    shape: 'circle',
    src: 'https://picsum.photos/200/200',
    text: '오오',
    textColor: 'danger',
    textDirection: 'bottom',
  },
}

Primary.argTypes = {
  color: {
    control: {
      type: 'color',
      options: [
        'yellow_primary',
        'yellow_dark',
        'yellow_secondary',
        'gray_primary',
        'gray_dark',
        'gray-light',
        'gray_secondary',
        'danger',
      ],
    },
  },
  shape: {
    control: {
      type: 'select',
      options: ['rounded', 'circle', 'square'],
    },
  },
  size: {
    control: {
      type: 'number',
      min: 0,
    },
  },
  src: {
    control: 'text',
    defaultValue: 'https://picsum.photos/200/200',
  },
  text: {
    control: 'text',
  },
  textColor: {
    control: {
      type: 'color',
      options: [
        'yellow_primary',
        'yellow_dark',
        'yellow_secondary',
        'gray_primary',
        'gray_dark',
        'gray-light',
        'gray_secondary',
        'danger',
      ],
    },
  },
  textDirection: {
    control: {
      type: 'select',
      options: ['top', 'medium', 'bottom'],
    },
  },
  style: {
    control: 'object',
  },
}
