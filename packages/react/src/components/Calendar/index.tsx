import { CalendarContainer, CalendarHeader } from "./styles";

interface CalendarProps {
    month: number
    year: number
}


export default function Calendar({month, year} : CalendarProps){
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
                

            </CalendarHeader>
        </CalendarContainer>
    )
}