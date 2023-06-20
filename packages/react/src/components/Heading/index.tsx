import { ElementType, ComponentProps } from 'react';
import { styled } from "../../styles"

export interface HeadingProps extends ComponentProps<typeof Heading>{
    as?: ElementType
}

export const Heading = styled('h2', {
    fontFamily: "$default",
    lineHeight: '$shorter',
    margin: 0,
    color: '$zinc-100',

    variants: {
        size: {
        sm: { fontSize: '$xl'},
        md: { fontSize: '$2xl'},
        lg: { fontSize: '$4xl'},
        '2xl': { fontSize: '$5xl'},
        '3xl': { fontSize: '$6xp'},
        '4xl': { fontSize: '$7xp'},
        '5xl': { fontSize: '$8xp'},
        '6xl': { fontSize: '$9xp'},
          },
    },
    defaultVariants: {
        size: "md"
    }
})