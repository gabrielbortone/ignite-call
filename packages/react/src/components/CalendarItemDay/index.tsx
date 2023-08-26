import { CalendarItemDayItemAvailable, CalendarItemDayItemNotAvailable } from "./styles"

export interface CalendarItemDayProps {
    month: number
    year: number
    dayOfWeekend: number
    day: number
    available: boolean
} 

export default function CalendarItemDay({available, month, year, dayOfWeekend, day}: CalendarItemDayProps) {
    console.log(available, day, month, year, dayOfWeekend);
    return (
        available ? <CalendarItemDayItemAvailable>{day}</CalendarItemDayItemAvailable> :  
        <CalendarItemDayItemNotAvailable>{day}</CalendarItemDayItemNotAvailable>
    )

}