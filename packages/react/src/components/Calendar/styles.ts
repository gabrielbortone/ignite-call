import { styled } from '../../styles'

export const CalendarContainer = styled('div', {
    display: 'flex',
    background: '$gray800',
    color: '$white',
    fontFamily: 'Roboto',
    fontSize: '$md',
    fontWeight: 400,
    lineHeight: '26px',
    letterSpacing: '0em',
    width: '33.75rem',
    height: '30rem',
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

export const CalendarHeaderDiv = styled('div', {
    display: 'flex',
    gap: '0.8rem',
    paddingLeft: '1rem',
    paddingRight: '1rem',
    boxSizing: 'border-box'
})

export const CalendarHeaderYearSpan = styled('span', {
    color: '$gray200',
})

export const CalendarHeaderNavContainer = styled('div', {
    display: 'flex',
    gap: '0.8rem'
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
    display: 'flex',
    color: '$gray200',
});

export const CalendarContentItem = styled('span', {
    fontSize: '1.1rem',
    fontFamily: 'Roboto',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    paddig: '1rem',
});

export const ButtonChangeMonth = styled('a',{
    padding: '0.4rem 0',
    cursor: 'pointer'
})