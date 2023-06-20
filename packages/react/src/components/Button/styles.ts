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
                color: '$zinc-100',
                background: '$primary-700',

                transition: 'all 0.2s',
                '&:not(:disabled):hover': {
                    color: '$white',
                    background: '$primary-500',
                },
            },
            secondary: {
                color: '$zinc-300',
                border: '2px solid $primary-700',

                transition: 'all 0.2s',
                '&:not(:disabled):hover': {
                    color: '$white',
                    background: '$primary-700',
                },
            },
            
            success: {
                color: '$zinc-300',
                background: '$green-700',

                transition: 'all 0.2s',
                '&:not(:disabled):hover': {
                    color: '$white',
                    background: '$green-500',
                },
            },
            
            cancel: {
                color: '$zinc-300',
                background: '$red-700',

                transition: 'all 0.2s',
                '&:not(:disabled):hover': {
                    color: '$white',
                    background: '$red-500',
                },
            },

            warning: {
                color: '$zinc-200',
                background: '$orange-700',

                transition: 'all 0.2s',
                '&:not(:disabled):hover': {
                    color: '$white',
                    background: '$orange-500',
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
