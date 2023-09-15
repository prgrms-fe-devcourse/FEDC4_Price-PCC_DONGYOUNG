import { Meta, StoryObj } from '@storybook/react'
import ImageButton from '.'

const meta = {
  title: 'Buttons/ImageButton',
  component: ImageButton,
} satisfies Meta<typeof ImageButton>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    shape: 'circle',
    size: 5,
    src: 'https://picsum.photos/200/200',
    alt: 'image-button',
    onClick: () => {
      alert('이미지 버튼을 클릭했습니다.')
    },
  },
}

Primary.argTypes = {
  shape: {
    control: {
      type: 'text',
      defaultValue: 'circle', //circle, rounded, square
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
  onClick: {
    defaultValue: () => {
      alert('이미지 버튼을 클릭했습니다.')
    },
  },
}
