import { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@icy-ui/react'

export default {
  title: 'Data display / Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/diwberg.png',
    alt: 'Diwberg',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {
  args: {
    size: 'md',
  },
}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
    alt: 'default avatar',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Após 0.6 segundos, caso a imagem não seja recarregada, será mostrado o `Fallback`',
      },
    },
  },
}
