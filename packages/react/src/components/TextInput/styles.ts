import { styled } from "../../styles";

export const TextInputContainer = styled('div', {
  backgroundColor: '$zinc-900',
  padding: '$3 $4',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  border: '2px solid $zinc-900',
  display: 'flex',
  alignItems: 'baseline',

  '&:has(input:focus)': {
    borderColor: '$primary-700'
  },
  '&:has(input:disabled)': {
    opacity: 0.2,
    cursor: "not-allowed"
  }
})

export const Prefix = styled('span', {
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$zinc-400',
  fontWeight: '$regular',
  paddingRight: '$1',
  whiteSpace: 'nowrap',

})

export const Input = styled('input', {
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$white',
  fontWeight: '$regular',
  background: 'transparent',
  border: 0,
  width: '100%',
  overflow: 'hidden',

  '&:focus': {
    outline: 'none',
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  '&:placeholder': {
    color: '$white'
  },

})