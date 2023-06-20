import { styled } from "../../styles";

export const TextContainer = styled('div', {
  backgroundColor: '$zinc-900',
  padding: '$3 $4',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  border: '2px solid $zinc-900',
  display: 'flex',
  alignItems: 'baseline',

  '&:has(textarea:focus)': {
    borderColor: '$primary-700'
  },
  '&:has(textarea:disabled)': {
    opacity: 0.2,
    cursor: "not-allowed"
  }
})

export const TextAreaInput = styled('textarea', {
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$white',
  fontWeight: '$regular',
  background: 'transparent',
  resize: 'vertical',
  border: 0,
  width: '100%',
  minHeight: 80,

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