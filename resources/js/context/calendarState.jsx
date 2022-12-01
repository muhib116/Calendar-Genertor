import { weeksList, DemoImageListForCalendar } from "@/calendarData"
import { useState } from "react"
import CalendarContext from "./calendarContext"
import { cloneDeep } from 'lodash'

const CalendarState = ({ children }) => {
    const [selectedYear, setSelectedYear] = useState(new Date().getFullYear())
    const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth())
    const [dateList, setDateList] = useState([])
    const [isCalendarEditable, setIsCalendarEditable] = useState(true)
    const [calendarTheme, setCalendarTheme] = useState('black')
    const [calendarContainerElement, setCalendarContainerElement] = useState('')
    const [language, setLanguage] = useState('english')
    const [activeWeekIndex, setActiveWeekIndex] = useState(0)
    const [selectedWeek, setSelectedWeek] = useState(0)
    const [weeks, setWeeks] = useState(cloneDeep(weeksList))
    const [calendarImages, setCalendarImages] = useState(cloneDeep(DemoImageListForCalendar))
    const [leftSideComponentName, setLeftSideComponentName] = useState('CalendarConfig')

    return (
        <CalendarContext.Provider 
            value={{ 
              selectedYear, 
              dateList, 
              selectedMonth,
              calendarTheme, 
              isCalendarEditable,
              calendarContainerElement,
              language,
              weeks,
              activeWeekIndex,
              calendarImages,
              leftSideComponentName,
              selectedWeek,
              setSelectedYear, 
              setDateList, 
              setSelectedMonth,
              setCalendarTheme,
              setIsCalendarEditable,
              setCalendarContainerElement,
              setLanguage,
              setWeeks,
              setActiveWeekIndex,
              setCalendarImages,
              setLeftSideComponentName,
              setSelectedWeek,
            }}
        >
            { children }
        </CalendarContext.Provider>
    )
}

export default CalendarState