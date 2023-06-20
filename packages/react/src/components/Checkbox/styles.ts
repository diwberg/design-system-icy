import { keyframes, styled } from "../../styles";
import * as Checkbox from '@radix-ui/react-checkbox';

export const CheckboxContainer = styled(Checkbox.Root, {
  all: 'unset',
  width: '$6',
  height: '$6',
  backgroundColor: '$zinc-900',
  borderRadius: '$xs',
  lineHeight: 0,
  cursor: 'pointer',
  overflow: 'hidden',
  boxSizing: 'border-box',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: '2px solid $zinc-900',
  transition: 'all 0.3s',

  '&:disabled': {
    opacity: 0.2,
    cursor: 'not-allowed',
  },

  '&:not(:disabled):focus': {
    border: '2px solid $primary-700',
  },
  
  '&[data-state="checked"]': {
    background: '$primary-700',
    border: '2px solid $primary-700',
  },

})

const slideIn = keyframes({
    from: {
        transform: 'translateY(-100%)',
    },
    to: {
        transform: 'translateY(0)',
    }
})

const slideOut = keyframes({
    from: {
        transform: 'translateY(0)',
    },
    to: {
        transform: 'translateY(-100%)',
    }
})

export const CheckboxIndicator = styled(Checkbox.Indicator, {
    color: '$white',
    width: '$4',
    height: '$4',

    '&[data-state="checked"]': {
        animation: `${slideIn} 200ms ease-out`
      },

    '&[data-state="unchecked"]': {
        animation: `${slideOut} 200ms ease-out`
      },
})