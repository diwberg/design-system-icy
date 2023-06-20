import { StoryObj, Meta } from '@storybook/react'
import { Box, Text, TextInput, TextInputProps } from '@icy-ui/react'

export default {
  title: 'Form / Text Input',
  component: TextInput,
  args: {
    disabled: false,
  },
  argTypes: {
    prefix: { text: 'Email', control: 'text' },
  },
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'Type your name...',
  },
}

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: 'Email:',
  },
}

export const UseCase: StoryObj<TextInputProps> = {
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
