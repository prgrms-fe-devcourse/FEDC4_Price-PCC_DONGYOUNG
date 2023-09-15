import type { Meta, StoryObj } from '@storybook/react'
import Header from '.'

const meta = {
  title: 'Component/Header',
  component: Header,
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {},
  parameters: {
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: '/path',
        query: {
          keyword: 'storybook_test',
        },
      },
    },
  },
}
