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
    height: '27.5rem',
    flexDirection: 'column'
});

export const CalendarHeader = styled('header',{
    display: 'flex',
    justifyContent: 'space-between',
    paddingLeft: '1.5rem',
    paddingRight: '1.5rem',
    width: '100%',
    marginTop: '1rem',
    boxSizing: 'border-box',
    flexDirection: 'row'
})

export const CalendarHeaderNavContainer = styled('div', {
    
})

export const CalendarContent = styled('section', {
    display: 'grid',
    gap: '0.5rem',
    rowGap: '0.5rem',
    gridTemplateColumns: 'repeat(7, 1fr)',
    padding: '1.5rem',
    alignItems: 'center'
})

export const CalendarContentTitleItem = styled('span', {
    fontSize: '0.875rem',
    fontFamily: 'Roboto',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex'
});

export const CalendarContentItem = styled('span', {
    fontSize: '1.1rem',
    fontFamily: 'Roboto',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    paddig: '1rem',
});