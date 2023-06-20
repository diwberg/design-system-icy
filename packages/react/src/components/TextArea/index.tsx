import { ComponentProps } from 'react'
import { TextContainer, TextAreaInput } from './styles'

export interface TextAreaProps extends ComponentProps<typeof TextAreaInput>{}

export function TextArea(props: TextAreaProps) {
    return (
        <>
            <TextContainer>
                <TextAreaInput {...props} />
            </TextContainer>
        </>
    )
}

TextArea.displayName = 'TextArea'