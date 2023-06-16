import { colors } from '@icy-ui/tokens'
import { styled } from './styles'

import { ComponentProps } from 'react'

export const Button = styled('button', {
  fontFamily: '$default',
  background: '$primary',
  borderRadius:'$sm',
  border: 'none',
  padding: '$2 $4',
  fontWeight: 'bold',
  color: colors.white,
  cursor: 'pointer',

  variants: {
    size: {
      small: {
        fontSize: 14,
        padding: '$2 $4',
      },
      large: {
        fontSize: 16,
        padding: '$3 $6',
      },
    }
   },

   defaultVariants: {
    size: 'small'
   }

})

export type ButtonProps = ComponentProps<typeof Button>