import { StoryObj, Meta } from '@storybook/react'
import { Button, ButtonProps } from '@icy-ui/react'

export default {
  title: 'Form / Button',
  component: Button,
  args: {
    children: 'Enviar',
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}
export const Large: StoryObj<ButtonProps> = {
  args: {
    size: 'large',
  },
}
