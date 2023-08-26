import { CaretLeft, CaretRight } from "phosphor-react";
import { CalendarContainer, CalendarHeader, 
    CalendarHeaderNavContainer, CalendarContent,
    CalendarContentItem, CalendarContentTitleItem, CalendarHeaderDiv, CalendarHeaderYearSpan, ButtonChangeMonth } from "./styles";
import { useEffect, useState } from "react";
import CalendarItemDay from "../CalendarItemDay";

export interface CalendarProps {
    month: number
    year: number
}

export interface CalendarDay {
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
    const [ days, setDays] = useState<CalendarDay[]>([]);
    const [currentMonth, setCurrentMonth ] = useState<number>(month-1);
    const [ currentYear, setCurrentYear] = useState<number>(year);
    const [spaces, setSpaces] = useState<number[]>([]);
    const [ daysNotAvailable, setdaysNotAvailable] = useState<CalendarDay[]>([]);

    useEffect(()=> {
        const daysList : CalendarDay[] = [];
        for(let d = 1; d <= daysOfMonth[currentMonth]; d++){
            const date = new Date(currentYear,currentMonth,d,6,30,0,0);
            const dateBase : CalendarDay = {
                day: d,
                month: date.getMonth(),
                dayOfWeekend: date.getDay(),
                year: date.getFullYear()
            } 
            daysList.push(dateBase);
        }


        setDays(daysList);

    }, [currentMonth, currentYear])
    
    useEffect(() => {
        const firstDay = days.find(d=> d.day === 1);
        const firstDayOfWeekend = firstDay?.dayOfWeekend ?? 0
        const spaceList = [];
        for(let spc = 1; spc <= firstDayOfWeekend; spc++){
            spaceList.push(spc);
        }
        setSpaces(spaceList);
    }, [days])
    

    function increaseMonth(){
        if(currentMonth < 11){
            setCurrentMonth((state)=> state + 1);
        }
        else{
            setCurrentMonth(0);
            setCurrentYear((state)=> state + 1);
        }
    }

    function decreaseMonth(){
        if(currentMonth === 0){
            setCurrentMonth(11);
            setCurrentYear((state)=> state - 1);
        }
        else{
            setCurrentMonth((state)=> state -1);
        }

    }



     return (
        <CalendarContainer>
            <CalendarHeader>
                <CalendarHeaderDiv>
                    <span>{monthNames[currentMonth]}</span>
                    <CalendarHeaderYearSpan>{currentYear}</CalendarHeaderYearSpan>
                </CalendarHeaderDiv>
                <CalendarHeaderNavContainer>
                    <ButtonChangeMonth onClick={decreaseMonth}>
                        <CaretLeft size={24} color="#A9A9B2"/>
                    </ButtonChangeMonth>
                    <ButtonChangeMonth onClick={increaseMonth}>
                        <CaretRight size={24} color="#A9A9B2"/>
                    </ButtonChangeMonth>
                </CalendarHeaderNavContainer>
            </CalendarHeader>
            <CalendarContent>
                {daysOfWeekend.map((item) => 
                    <CalendarContentTitleItem key={item}>
                        {item}
                    </CalendarContentTitleItem>)
                }
                {
                    spaces.map((s) => <CalendarContentItem key={s}></CalendarContentItem>)
                }
                {
                    days.map((d) => <CalendarItemDay key={d.day} 
                    available={daysNotAvailable.find(dna=> dna.day == d.day && dna.month == d.month 
                        && dna.year == d.year) === undefined} 
                    month={currentMonth} year={currentYear}
                    dayOfWeekend={d.dayOfWeekend} day={d.day} />)
                }
            </CalendarContent>
        </CalendarContainer>
    )
}