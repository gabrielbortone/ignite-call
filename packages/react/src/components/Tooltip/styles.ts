import { styled } from "../../styles";

export const TooltipItemContainer = styled('div', {
    background: '$gray900',
    padding: '0.75rem',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: "center",
    maxWidth: '13.75rem',
    flexDirection: 'column',
    boxSizing: 'border-box'
})

export const TooltipContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
})

export const TooltipText = styled('p', {
    color: '$gray100',
    fontFamily: '$code',
    fontSize: '$md',
    textAlign: 'center'
})

export const TrianguleTooltip = styled('div', {
    width: '0',
    height: '0', 
    marginTop: '-2px',
    borderRight: '25px solid transparent',
    borderLeft: '25px solid transparent',
    borderTop: '25px solid $gray900',
    justifyItems:"center",
    display: 'flex'
})