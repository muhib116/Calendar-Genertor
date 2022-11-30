import { weeksList, DemoImageListForCalendar } from "@/Components/calendar/calendarData"
import { useState } from "react"
import CalendarContext from "./calendarContext"
import { cloneDeep } from 'lodash'

const CalendarState = ({ children }) => {
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear())
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth())
    const [dateList, setDateList] = useState([])
    const [isCalendarEditable, setIsCalendarEditable] = useState(true)
    const [calendarTheme, setCalendarTheme] = useState('black')
    const [calendarContainerElement, setCalendarContainerElement] = useState('')
    const [language, setLanguage] = useState('english')
    const [activeWeekIndex, setActiveWeekIndex] = useState(0)
    const [weeks, setWeeks] = useState(cloneDeep(weeksList))
    const [calendarImages, setCalendarImages] = useState(cloneDeep(DemoImageListForCalendar))

    return (
        <CalendarContext.Provider 
            value={{ 
              currentYear, 
              dateList, 
              currentMonth,
              calendarTheme, 
              isCalendarEditable,
              calendarContainerElement,
              language,
              weeks,
              activeWeekIndex,
              calendarImages,
              setCurrentYear, 
              setDateList, 
              setCurrentMonth,
              setCalendarTheme,
              setIsCalendarEditable,
              setCalendarContainerElement,
              setLanguage,
              setWeeks,
              setActiveWeekIndex,
              setCalendarImages
            }}
        >
            { children }
        </CalendarContext.Provider>
    )
}

export default CalendarState