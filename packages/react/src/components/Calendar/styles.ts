import { styled } from '../../styles'

export const CalendarContainer = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyItems: 'center',
    background: '$gray-600',
    color: '$white',
    fontFamily: 'Roboto',
    fontSize: '$md',
    fontWeight: 400,
    lineHeight: '26px',
    letterSpacing: '0em'    
});

export const CalendarHeader = styled('header',{
    display: 'flex',
    justifyContent: 'space-around'
})