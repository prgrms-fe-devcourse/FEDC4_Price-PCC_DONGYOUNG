import type { Meta, StoryObj } from '@storybook/react'
import CardUserItem from '.'

const meta = {
  title: 'Component/CardUserItem',
  component: CardUserItem,
} satisfies Meta<typeof CardUserItem>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    _id: '테스트 아이디',
    image: 'https://picsum.photos/200/200',
    fullName: '테스트',
    followers: ['12', '1', '123'],
    following: ['12', '1', '123'],
  },
}
