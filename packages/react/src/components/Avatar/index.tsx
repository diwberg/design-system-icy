import { User } from "phosphor-react";
import { AvatarContainer, AvatarFallback, AvatarImage } from "./styles";
import { ComponentProps } from "react";

export interface AvatarProps extends ComponentProps<typeof AvatarImage> {
    size?: 'sm' | 'md' | 'lg';
}

export function Avatar(props: AvatarProps) {

    return (
        <AvatarContainer {...props}>
            <AvatarImage {...props} />
            <AvatarFallback delayMs={600} >
                <User />
            </AvatarFallback>
        </AvatarContainer>
    )
}