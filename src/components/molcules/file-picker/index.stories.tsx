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
    height: {
      control: 'range',
      defaultValue: 32,
    },
    label: {
      control: 'text',
      defaultValue: '',
    },
    className: {
      control: 'text',
      defaultValue: '',
    },
  },
}

Default.args = {
  name: 'File-Upload',
  height: 50,
  label: '파일을 업로드하세요',
  disabled: false,
  multiple: true,
}
