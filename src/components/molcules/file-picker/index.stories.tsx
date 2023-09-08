import type { Meta, StoryObj } from '@storybook/react'
import FilePicker from '.'

const meta = {
  title: 'Component/file-picker',
  component: FilePicker,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof FilePicker>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  argTypes: {
    name: {
      control: 'text',
      defaultValue: '',
    },
    multiple: {
      control: 'boolean',
      defaultValue: false,
    },
    disabled: {
      control: 'boolean',
      defaultValue: false,
    },
    width: {
      control: 'number',
      defaultValue: 150,
    },
    height: {
      control: 'number',
      defaultValue: 150,
    },
    className: {
      control: 'text',
      defaultValue: '',
    },
  },
}

Default.args = {
  name: 'File-Upload',
  height: 150,
  width: 150,
  disabled: false,
  multiple: true,
}
