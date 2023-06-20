import { StoryObj, Meta } from '@storybook/react'
import { Text, Box, Checkbox, CheckboxProps } from '@icy-ui/react'

export default {
  title: 'Form / Checkbox',
  component: Checkbox,
  args: {},
  argTypes: {
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    checked: {
      control: {
        type: 'boolean',
      },
    },
  },
} as Meta<CheckboxProps>

export const Primary: StoryObj<CheckboxProps> = {
  args: {
    disabled: false,
  },
}

export const UseCase: StoryObj<CheckboxProps> = {
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
