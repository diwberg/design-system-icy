import { styled } from "../../styles";

export const ButtonContainer = styled('button', {
    all: "unset",

    borderRadius: '$sm',
    fontSize: '$sm',
    fontWeight: '$medium',
    fontFamily: '$default',
    textAlign: 'center',
    minWidth: 80,
    boxSizing: 'border-box',

    cursor: 'pointer',
    '&:disabled': {
        cursor: 'not-allowed',
        opacity: 0.2,
        
    },
    
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '$2',

    variants: {
        variant:{
            primary: {
                color: '$gray-100',
                background: '$purple-700',

                transition: 'all 0.2s',
                '&:not(:disabled):hover': {
                    color: '$white',
                    background: '$purple-500',
                },
            },
            secundary: {
                color: '$gray-300',
                border: '2px solid $purple-700',

                transition: 'all 0.2s',
                '&:not(:disabled):hover': {
                    color: '$white',
                    background: '$purple-700',
                },
                '&:disabled': {
                    color: '$gray-900',
                    borderColor: '$gray-800',
                }
            },
            
            success: {
                color: '$gray-100',
                background: '$green-700',

                transition: 'all 0.2s',
                '&:not(:disabled):hover': {
                    color: '$white',
                    background: '$green-500',
                },
            },
            
            cancel: {
                color: '$gray-100',
                background: '$red-700',

                transition: 'all 0.2s',
                '&:not(:disabled):hover': {
                    color: '$white',
                    background: '$red-500',
                },
            },

            warning: {
                color: '$gray-100',
                background: '$yellow-700',

                transition: 'all 0.2s',
                '&:not(:disabled):hover': {
                    color: '$white',
                    background: '$yellow-500',
                },
            },
        },
        size: {
            sm: {
                padding: '$2',
                height: '$8',
                svg: {
                    width: '$4',
                    height: '$4'
                },
            },
            md: {
                padding: '$3',
                height: '$12',
                svg: {
                    width: '$6',
                    height: '$6'
                },
            },
            lg: {
                padding: '$4',
                height: '$16',
                svg: {
                    width: '$7',
                    height: '$7'
                },
            },
        },
    },

    defaultVariants: {
        variant: 'primary',
        size: 'md',
    }

})
