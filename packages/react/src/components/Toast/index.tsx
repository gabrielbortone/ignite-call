import { ToastCloseButton, ToastContent, ToastHeaderContainer, ToastMainContainer, ToastTitulo } from "./styles";

export interface ToastProps {
    title: string
    content: string
}


export function Toast({ title, content } : ToastProps){
    return (
        <ToastMainContainer>
            <ToastHeaderContainer>
                <ToastTitulo>{title}</ToastTitulo>
                <ToastCloseButton>X</ToastCloseButton>
            </ToastHeaderContainer>
            <ToastContent>
                {content}
            </ToastContent>
        </ToastMainContainer>
    )
}