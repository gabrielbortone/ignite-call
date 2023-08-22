import { CaretLeft, CaretRight } from "phosphor-react";
import { CalendarContainer, CalendarHeader, CalendarHeaderNavContainer } from "./styles";

export interface CalendarProps {
    month: number
    year: number
}


export function Calendar({month, year} : CalendarProps){
    const daysOfWeekend = ['DOM.', 'SEG.', 'TER.', 'QUA.', 'QUI.', 'SEX.', 'SAB.'];
    const monthNames = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
     'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
    
     return (
        <CalendarContainer>
            <CalendarHeader>
                <div>
                    <span>{monthNames[month-1]}</span>
                    <span>{year}</span>
                </div>
                <CalendarHeaderNavContainer>
                    <CaretLeft size={24} color="#A9A9B2"/>
                    <CaretRight size={24} color="#A9A9B2"/>
                </CalendarHeaderNavContainer>
            </CalendarHeader>
            
        </CalendarContainer>
    )
}