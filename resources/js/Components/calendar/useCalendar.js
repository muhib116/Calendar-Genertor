import calendarContext from "@/context/calendarContext"
import { useContext } from "react"
import { weeksList } from "./calendarData"

export default function useCalendar() 
{
    const { weeks, setWeeks } = useContext(calendarContext)

    const getDateList = (currentMonth, currentYear) => 
    {
        // Note: month and week index start from 0
        const dateList = []

        // work with previous month---
        let prevMonthLastDay = new Date(currentYear, currentMonth, 0).getDay()
        let currentMonthFirstDay = new Date(currentYear, currentMonth, 1).getDay()
        let prevMonthLastDate    = new Date(currentYear, currentMonth, 0).getDate()
        const currentMonthFirstDayIndexAccordingToModifiedWeeks = weeks.english.findIndex(week => week == weeksList.english[currentMonthFirstDay])

        // this code valid if week changeable or not
        for(let i=0; i < currentMonthFirstDayIndexAccordingToModifiedWeeks; i++){
            dateList.push({
                date: prevMonthLastDate++,
                isActive: false,
                isInactive: true
            })
        }

        // this code valid if week day is not changeable
        // for(let i = prevMonthLastDay; i >= 0; i--){
        //     dateList.push({
        //         date: prevMonthLastDate - i,
        //         isActive: false,
        //         isInactive: true
        //     })
        // }


        // work with current month -----
        const currentMonthLastDate = new Date(currentYear, currentMonth+1, 0).getDate()
        for(let i = 1; i <= currentMonthLastDate; i++)
        {
            let isActive = false
            let date = new Date()
            if(date.getFullYear() === currentYear && date.getMonth() === currentMonth && date.getDate() === i){
                isActive = true
            }

            dateList.push({
                date: i,
                isActive,
                isInactive: false
            })
        }
        
        // work with next month -----
        const currentMonthLastDay = new Date(currentYear, currentMonth+1, 0).getDay()
        const currentMonthLastDayIndexAccordingToModifiedWeeks = weeks.english.findIndex(week => week == weeksList.english[currentMonthLastDay])
        for(let i = 1; i < (7 - currentMonthLastDayIndexAccordingToModifiedWeeks); i++){
            dateList.push({
                date: i,
                isActive: false,
                isInactive: true
            })
        }
        
        return dateList
    }

    const weekChanger = (weekIndex) => {
        let myWeeks = { ...weeks }
        
        // const splicedWeeks = weeks['english'].splice(weekIndex)

        let modifiedWeeks = {}
        for(let language in myWeeks){
            let weeksInSingleLanguage = myWeeks[language]
            let splicedWeeks = weeksInSingleLanguage.splice(weekIndex)
            modifiedWeeks[language] = (splicedWeeks.concat(weeksInSingleLanguage))
        }

        setWeeks(modifiedWeeks)
    }

    return {
        getDateList,
        weekChanger
    }
}