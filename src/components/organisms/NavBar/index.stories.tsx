import type { Meta, StoryObj } from '@storybook/react'
import NavBar from '.'

const meta = {
  title: 'Component/NavBar',
  component: NavBar,
} satisfies Meta<typeof NavBar>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  parameters: {
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: 'path',
        query: {
          keyword: 'storybook test',
        },
      },
    },
  },
}
