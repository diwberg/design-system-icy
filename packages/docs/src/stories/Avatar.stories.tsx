import { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@icy-ui/react'

export default {
  title: 'Data display / Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/diwberg.png',
    alt: 'Diwberg',
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {
  args: {
    size: 'sm',
  },
}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}