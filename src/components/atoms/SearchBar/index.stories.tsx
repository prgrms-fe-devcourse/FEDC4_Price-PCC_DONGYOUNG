import type { Meta, StoryObj } from '@storybook/react'
import SearchBar from '.'

const meta = {
  title: 'Component/SearchBar',
  component: SearchBar,
} satisfies Meta<typeof SearchBar>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {},
  parameters: {
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: '/search',
        query: {
          keyword: '키워드',
        },
      },
    },
  },
}
