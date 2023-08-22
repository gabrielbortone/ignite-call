import { styled } from '../../styles'

export const CalendarContainer = styled('div', {
    display: 'flex',
    background: '$gray600',
    color: '$white',
    fontFamily: 'Roboto',
    fontSize: '$md',
    fontWeight: 400,
    lineHeight: '26px',
    letterSpacing: '0em',
    width: '33.75rem',
    height: '27.5rem'    
});

export const CalendarHeader = styled('header',{
    display: 'flex',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: '1rem',
})

export const CalendarHeaderNavContainer = styled('div', {
    
})

export const CalendarContent = styled('section', {
    display: 'grid',
    gap: '0.5rem',
    rowGap: '0.5rem',
    gridTemplateColumns: 'repeat(1fr, 7)'
})