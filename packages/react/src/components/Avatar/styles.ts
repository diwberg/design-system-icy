import { styled } from '../../styles';
import * as Avatar from '@radix-ui/react-avatar';

export const AvatarContainer = styled(Avatar.Root, {
    borderRadius: '$full',
    display: 'inline-block',
    overflow: 'hidden',

    variants: {
        size: {
            sm: {
                width: '$8',
                height: '$8',
            },
            md: {
                width: '$16',
                height: '$16',
            },
            lg: {
                width: '$40',
                height: '$40',
            },
        },
    },
    defaultVariants: {
        size: 'md'
    }

})

export const AvatarImage = styled(Avatar.Image, {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: 'inherit',

})


export const AvatarFallback = styled(Avatar.Fallback, {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '$zinc-500',
    color: '$zinc-300',

    svg: {
        width: '70%',
        height: '70%',
    }
})