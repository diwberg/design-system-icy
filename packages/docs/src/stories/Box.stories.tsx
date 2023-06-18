import { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps, Text } from '@icy-ui/react'

export default {
  title: 'Surfaces / Box',
  component: Box,
  args: {
    children: <Text>Testando o Elemento Box</Text>,
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
