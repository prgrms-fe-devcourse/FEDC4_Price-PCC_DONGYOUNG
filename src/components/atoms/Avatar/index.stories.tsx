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
    text: '텍스트',
    alt: '아바타 컴포넌트',
    textColor: 'danger',
    textDirection: 'bottom',
    subText: '아아아아아',
    textStyle: {
      display: 'flex',
      justifyContent: 'space-around',
      marginLeft: '50px',
    },
  },
}

Primary.argTypes = {
  color: {
    control: {
      type: 'color',
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
  subText: {
    control: 'text',
    defaultValue: '텍스트2',
  },
  text: {
    control: 'text',
    defaultValue: '텍스트',
  },
  textColor: {
    control: {
      type: 'color',
    },
  },
  textStyle: {
    control: {
      type: 'object',
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
