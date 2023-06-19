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
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}

export const Secundary: StoryObj<ButtonProps> = {
  args: {
    variant: 'secundary',
    children: 'New',
    disabled: false,
  },
}

export const Success: StoryObj<ButtonProps> = {
  args: {
    variant: 'success',
    children: 'Success',
  },
}

export const Cancel: StoryObj<ButtonProps> = {
  args: {
    variant: 'cancel',
    children: 'Cancel',
  },
}

export const Warning: StoryObj<ButtonProps> = {
  args: {
    variant: 'warning',
    children: 'Warning',
  },
}

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    variant: 'primary',
    children: 'Disabled',
    disabled: true,
  },
}

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
