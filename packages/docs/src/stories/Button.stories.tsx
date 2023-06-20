import { StoryObj, Meta } from '@storybook/react'
import { Button, ButtonProps } from '@icy-ui/react'
import { ArrowRight } from 'phosphor-react'

export default {
  title: 'Form/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    children: 'Exemple',
  },
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'success', 'cancel', 'warning'],
      control: {
        type: 'inline-radio',
      },
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'inline-radio',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    onClick: { action: 'clicked' },
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}

export const WithIcons: StoryObj<ButtonProps> = {
  args: {
    variant: 'primary',
    size: 'lg',
    children: (
      <>
        Próximo passo
        <ArrowRight weight="bold" />
      </>
    ),
  },
}
