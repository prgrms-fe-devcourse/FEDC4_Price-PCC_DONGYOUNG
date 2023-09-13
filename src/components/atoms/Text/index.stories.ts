import type { Meta, StoryObj } from '@storybook/react'
import Text from './Text'

const meta = {
  title: 'Component/Text',
  component: Text,
} satisfies Meta<typeof Text>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'test title',
    textStyle: 'heading1-bold',
  },
  argTypes: {
    textStyle: {
      control: {
        type: 'select',
        options: [
          'heading0-bold',
          'heading1-bold',
          'heading2',
          'heading2-bold',
          'subtitle1',
          'subtitle1-bold',
          'subtitle2',
          'body1',
          'body1-bold',
          'body2',
          'body2-bold',
          'caption1',
          'caption1-bold',
        ],
      },
    },
    color: {
      control: {
        type: 'select',
        options: [
          'highlight',
          'primary-1',
          'primary-2',
          'primary-3',
          'primary-4',
          'primary-5',
          'bg-1',
          'bg-2',
          'gray-1',
          'gray-2',
          'gray-3',
          'gray-4',
          'gray-5',
        ],
      },
    },
  },
}
