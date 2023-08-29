import { styled } from "../../styles";

export const ToastMainContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    border: '2px solid $gray800',
    background: '$gray600',
    width: '22.5rem',
    height: '5.125rem'
});

export const ToastTitulo = styled('h3', {
    fontSize: '$lg',
    fontFamily: '$default',
    fontWeight: '$bold',
    color: '$white'
});

export const ToastHeaderContainer = styled('header', {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-between',
    width: '100%',
    boxSizing: 'border-box',
    paddingLeft: '0.8rem',
    paddingRight: '0.8rem',
    lineHeight: 0.5
})

export const ToastCloseButton = styled('button', {
    all: 'unset',
    fontSize: '$lg',
    fontFamily: '$default',
    fontWeight: 'lighter',
    color: '$gray200',
    cursor: 'pointer'
})

export const ToastContent = styled('span', {
    maxWidth: '100%',
    boxSizing: 'border-box',
    fontSize: 'small',
    fontFamily: '$default',
    fontWeight: 'lighter',
    color: '$gray200',
    paddingLeft: '0.8rem',
    paddingRight: '0.8rem'

})