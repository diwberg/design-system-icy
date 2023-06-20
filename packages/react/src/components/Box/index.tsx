import { ElementType, ComponentProps } from 'react';
import { styled } from '../../styles';

export interface BoxProps extends ComponentProps<typeof Box>{
    as?: ElementType
}

export const Box = styled('div', {
    padding: '$4',
    borderRadius: '$md',
    backgroundColor: "$zinc-800",
    border: '0 0 0 2px zinc-800',
    color: '$white'

})

Box.displayName = 'Box'