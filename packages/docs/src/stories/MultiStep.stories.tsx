import { StoryObj, Meta } from '@storybook/react'
import { Box, MultiStep, MultiStepProps } from '@icy-ui/react'

export default {
  title: 'Form / MultiStep',
  component: MultiStep,
  args: {
    currentStep: 1,
    size: 4,
  },
} as Meta<MultiStepProps>

export const Primary: StoryObj<MultiStepProps> = {}

export const Decorators: StoryObj<MultiStepProps> = {
  decorators: [
    (story) => (
      <Box
        as="label"
        css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
      >
        {story()}
      </Box>
    ),
  ],
}
