import { StoryObj, Meta } from '@storybook/react'
import { Modal, BoxProps, Text } from '@icy-ui/react'

export default {
  title: 'Surfaces / Modal',
  component: Modal,
  args: {
    children: <Text>Testando o Elemento Box</Text>,
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
