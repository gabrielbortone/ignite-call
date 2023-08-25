import { CaretLeft, CaretRight } from "phosphor-react";
import { CalendarContainer, CalendarHeader, 
    CalendarHeaderNavContainer, CalendarContent,
    CalendarContentItem, CalendarContentTitleItem } from "./styles";
import { useState } from "react";

export interface CalendarProps {
    month: number
    year: number
}

interface CalendarDay {
    month: number
    year: number
    dayOfWeekend: number
    day: number
} 

export function Calendar({month, year} : CalendarProps){
    const daysOfWeekend = ['DOM.', 'SEG.', 'TER.', 'QUA.', 'QUI.', 'SEX.', 'SAB.'] as const;
    const daysOfMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const monthNames = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
     'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

    const lastMonth = 11;
    const nextMonth = 1;
    const [currentMonth, setCurrentMonth ] = useState<number>(month-1);
    const [ currentYear, setCurrentYear] = useState<number>(year);
    
    const days : CalendarDay[] = [];
    for(let d = 1; d <= daysOfMonth[currentMonth]; d++){
        const date = new Date(`${year}-${(month).toString().padStart(2,'0')}-${(d).toString().padStart(2,'0')}`);
        const dateBase : CalendarDay = {
            day: d,
            month: date.getMonth(),
            dayOfWeekend: date.getDay(),
            year: date.getFullYear()
        } 

        days.push(dateBase);
    }

    const firstDay = days.find(d=> d.day === 1)?.dayOfWeekend ?? 0;
    const spaces = [];
    for(let spc = 1; spc <= firstDay; spc++){
        spaces.push(spc);
    }


     return (
        <CalendarContainer>
            <CalendarHeader>
                <div>
                    <span>{monthNames[month-1]}</span>
                    <span>{year}</span>
                </div>
                <CalendarHeaderNavContainer>
                    <a href="#">
                        <CaretLeft size={24} color="#A9A9B2"/>
                    </a>
                    <a href="#">
                        <CaretRight size={24} color="#A9A9B2"/>
                    </a>
                </CalendarHeaderNavContainer>
            </CalendarHeader>
            <CalendarContent>
                {daysOfWeekend.map((item) => 
                    <CalendarContentTitleItem key={item}>
                        {item}
                    </CalendarContentTitleItem>)
                }
                {
                    spaces.map((s) => <CalendarContentItem key={s}>
                    
                   </CalendarContentItem>)
                }
                {
                    days.map((d) => <CalendarContentItem key={d.day}>
                         {d.day}
                        </CalendarContentItem>)
                }
            </CalendarContent>
        </CalendarContainer>
    )
}