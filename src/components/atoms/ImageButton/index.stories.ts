import { Meta, StoryObj } from '@storybook/react'
import ImageButton from '.'

const meta = {
  title: 'Component/ImageButton',
  component: ImageButton,
} satisfies Meta<typeof ImageButton>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    shape: 'circle',
    size: 50,
    src: 'https://picsum.photos/200/200',
    alt: 'image-button',
    onClick: () => {
      console.log('이미지 버튼이 클릭되었습니다.')
    },
  },
}

Primary.argTypes = {
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
}
