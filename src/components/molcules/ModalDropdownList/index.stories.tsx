import type { Meta, StoryObj } from '@storybook/react'
import ModalDropdownList from '.'

const meta = {
  title: 'Component/ModalDropdownList',
  component: ModalDropdownList,
} satisfies Meta<typeof ModalDropdownList>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: { userId: 'testId', isOpen: true },
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
