import type { Meta, StoryObj } from '@storybook/react'
import Quill from './Quill'

const meta = {
  title: 'Quill',
  component: Quill,
} satisfies Meta<typeof Quill>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    onEdit: (contents: string) => {
      console.log(contents)
    },
  },
}
