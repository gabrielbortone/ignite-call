import { TooltipContainer, TooltipItemContainer, TooltipText, TrianguleTooltip } from "./styles"

export interface TooltipProps {
    text: string
}


export function Tooltip({text}: TooltipProps){
    return(
            <TooltipContainer>
                <TooltipItemContainer>
                    <TooltipText>
                        {text}
                    </TooltipText>
                </TooltipItemContainer>
                <TrianguleTooltip>
                </TrianguleTooltip>
            </TooltipContainer>
    )
}