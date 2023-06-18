import { StoryObj, Meta } from '@storybook/react'
import { Box, Text, TextInput, TextInputProps } from '@icy-ui/react'

export default {
  title: 'Form / Text Input',
  component: TextInput,
  args: {},
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'Type your name...',
  },
}

export const Decorators: StoryObj<TextInputProps> = {
  decorators: [
    (story) => (
      <Box
        as="label"
        css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
      >
        <Text size="sm">Email</Text>
        {story()}
      </Box>
    ),
  ],
  args: {
    placeholder: 'Type your email...',
    disabled: false,
  },
}

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: 'Nome:',
  },
}

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
    prefix: 'Nome:',
  },
}
