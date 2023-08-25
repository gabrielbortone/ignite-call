import { CalendarItemDayItem } from "./styles"

export interface CalendarItemDayProps {
    month: number
    year: number
    dayOfWeekend: number
    day: number
} 

export default function CalendarItemDay({month, year, dayOfWeekend, day}: CalendarItemDayProps) {
    return (
        <CalendarItemDayItem>
            {' '+day+' '}
        </CalendarItemDayItem>
    )
}