import type { Meta, StoryObj } from '@storybook/react'
import Loading from '.'

const meta = {
  title: 'Componentes/Loading',
  component: Loading,
} satisfies Meta<typeof Loading>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    size: 5,
    type: 'spinner',
  },
  argTypes: {
    size: {
      type: 'number',
    },
    type: {
      type: 'string',
    },
  },
}
