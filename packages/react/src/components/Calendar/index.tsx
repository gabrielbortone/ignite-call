import { CaretLeft, CaretRight } from "phosphor-react";
import { CalendarContainer, CalendarHeader, 
    CalendarHeaderNavContainer, CalendarContent,
    CalendarContentItem, CalendarContentTitleItem } from "./styles";

export interface CalendarProps {
    month: number
    year: number
}


export function Calendar({month, year} : CalendarProps){
    const daysOfWeekend = ['DOM.', 'SEG.', 'TER.', 'QUA.', 'QUI.', 'SEX.', 'SAB.'] as const;
    const monthNames = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
     'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

     let days = [];
     for(let d = 1; d <= 31; d++){
        days.push(d);
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
                    days.map((d) => <CalendarContentItem key={d}>
                         {d}
                        </CalendarContentItem>)
                }
            </CalendarContent>
        </CalendarContainer>
    )
}