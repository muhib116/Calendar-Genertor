import calendarContext from "@/context/calendarContext"
import { useContext } from "react"
import { weeksList } from "@/calendarData"
import { cloneDeep } from "lodash"
import { usePage } from '@inertiajs/inertia-react'
import { Inertia } from "@inertiajs/inertia"


export default function useCalendar() 
{
    const { serverData, activeWeekIndex, setSelectedWeek, calendarTheme, calendarImages, selectedMonth, selectedYear, weeks, setWeeks, language } = useContext(calendarContext)
    const { auth } = usePage().props
    const getDateList = (selectedMonth, selectedYear) => 
    {
        // Note: month and week index start from 0
        const dateList = []

        // work with previous month---
        let prevMonthLastDay = new Date(selectedYear, selectedMonth, 0).getDay()
        let selectedMonthFirstDay = new Date(selectedYear, selectedMonth, 1).getDay()
        let prevMonthLastDate    = new Date(selectedYear, selectedMonth, 0).getDate()
        const selectedMonthFirstDayIndexAccordingToModifiedWeeks = weeks.english.findIndex(week => week == weeksList.english[selectedMonthFirstDay])

        for(let i=0; i < selectedMonthFirstDayIndexAccordingToModifiedWeeks; i++){
            dateList.push({
                date: (prevMonthLastDate-selectedMonthFirstDayIndexAccordingToModifiedWeeks)+(i+1),
                isActive: false,
                isInactive: true
            })
        }

        // work with current month -----
        const selectedMonthLastDate = new Date(selectedYear, selectedMonth+1, 0).getDate()
        for(let i = 1; i <= selectedMonthLastDate; i++)
        {
            let isActive = false
            let date = new Date()
            if(date.getFullYear() === selectedYear && date.getMonth() === selectedMonth && date.getDate() === i){
                isActive = true
            }

            dateList.push({
                date: i,
                isActive,
                isInactive: false
            })
        }
        
        // work with next month -----
        const selectedMonthLastDay = new Date(selectedYear, selectedMonth+1, 0).getDay()
        const selectedMonthLastDayIndexAccordingToModifiedWeeks = weeks.english.findIndex(week => week == weeksList.english[selectedMonthLastDay])
        for(let i = 1; i < (7 - selectedMonthLastDayIndexAccordingToModifiedWeeks); i++){
            dateList.push({
                date: i,
                isActive: false,
                isInactive: true
            })
        }
        
        return dateList
    }

    const weekChanger = (weekIndex) => {
        let myWeeks = cloneDeep(weeksList)
        let modifiedWeeks = {}
        for(let language in myWeeks){
            let weeksInSingleLanguage = myWeeks[language]
            let splicedWeeks = weeksInSingleLanguage.splice(weekIndex)
            modifiedWeeks[language] = (splicedWeeks.concat(weeksInSingleLanguage))
        }
        setSelectedWeek(weekIndex)
        setWeeks(modifiedWeeks)
    }

    const saveCalendar = () => 
    {
        let data = {
            user_id: auth.user.id,
            year: selectedYear,
            month: selectedMonth,
            language,
            week: activeWeekIndex,
            theme: calendarTheme,
            settings: calendarImages

        }

        Inertia.post(route('calendar_save', data))
    }

    const updateCalendar = () => {
        let data = {
            id: serverData.id,
            user_id: auth.user.id,
            year: selectedYear,
            month: selectedMonth,
            language,
            week: activeWeekIndex,
            theme: calendarTheme,
            settings: calendarImages

        }

        Inertia.post(route('calendar_update', data))
    }

    return {
        getDateList,
        weekChanger,
        saveCalendar,
        updateCalendar
    }
}