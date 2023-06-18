import { StoryObj, Meta } from '@storybook/react'
import { Text, Box, Checkbox, CheckboxProps } from '@icy-ui/react'

export default {
  title: 'Form / CheckboxProps',
  component: Checkbox,
  args: {},
} as Meta<CheckboxProps>

export const Primary: StoryObj<CheckboxProps> = {
  args: {
    disabled: false,
  },
}

export const Decorators: StoryObj<CheckboxProps> = {
  decorators: [
    (story) => (
      <Box
        as="label"
        css={{
          display: 'flex',
          justifyItems: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          gap: '$2',
        }}
      >
        {story()}
        <Text size="sm">Accept terms of use</Text>
      </Box>
    ),
  ],
  args: {
    placeholder: 'Type comment...',
    disabled: false,
  },
}
