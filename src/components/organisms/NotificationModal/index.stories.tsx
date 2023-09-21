import type { Meta, StoryObj } from '@storybook/react'
import NotificationModal from '.'

const meta = {
  title: 'Component/NotificationModal',
  component: NotificationModal,
} satisfies Meta<typeof NotificationModal>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    data: {
      data: [
        {
          seen: true,
          _id: 'test123',
          user: {
            name: 'test',
            email: 'test@naver.com',
            image: 'https://picsum.photos/200/200',
            _id: 'test_id',
            fullName: '테스트',
          },
          follow: 'test123',
        },
        {
          seen: true,
          _id: 'test123',
          user: {
            name: 'test',
            email: 'test@naver.com',
            image: 'https://picsum.photos/200/200',
            _id: 'test_id',
            fullName: '테스트',
          },
          comment: {
            _id: 'test123',
            comment: 'test123',
            author: {
              name: 'test',
              email: 'test@naver.com',
              image: 'https://picsum.photos/200/200',
              _id: 'test_id',
              fullName: '테스트',
            },
          },
        },
        {
          seen: true,
          _id: 'test123',
          user: {
            name: 'test',
            email: 'test@naver.com',
            image: 'https://picsum.photos/200/200',
            _id: 'test_id',
            fullName: '테스트',
          },
          follow: 'test123',
        },
        {
          seen: true,
          _id: 'test123',
          user: {
            name: 'test',
            email: 'test@naver.com',
            image: 'https://picsum.photos/200/200',
            _id: 'test_id',
            fullName: '테스트',
          },
          comment: {
            _id: 'test123',
            comment: 'test123',
            author: {
              name: 'test',
              email: 'test@naver.com',
              image: 'https://picsum.photos/200/200',
              _id: 'test_id',
              fullName: '테스트',
            },
          },
        },
      ],
    },
    setIsOpen: () => {
      alert('테스트')
    },
  },
}
