import { ButtonContainer } from "./styles";
import { ComponentProps, ElementType } from "react";

export interface ButtonProps extends ComponentProps<typeof ButtonContainer> {
    as?: ElementType
}
export function Button(props: ButtonProps) {

    return (
    <ButtonContainer {...props} />

    )
}