import { StoryObj, Meta } from '@storybook/react'
import { Text, Box, TextArea, TextAreaProps } from '@icy-ui/react'

export default {
  title: 'Form / Text Area',
  component: TextArea,
  args: {},
} as Meta<TextAreaProps>

export const Primary: StoryObj<TextAreaProps> = {
  args: {
    placeholder: 'Type your name...',
  },
}

export const UseCase: StoryObj<TextAreaProps> = {
  decorators: [
    (story) => (
      <Box
        as="label"
        css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
      >
        <Text size="sm">Comment</Text>
        {story()}
      </Box>
    ),
  ],
  args: {
    placeholder: 'Type comment...',
    disabled: false,
  },
}
