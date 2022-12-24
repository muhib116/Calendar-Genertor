import { weeksList, DemoImageListForCalendar } from "@/calendarData"
import { useState } from "react"
import CalendarContext from "./calendarContext"
import { cloneDeep } from 'lodash'

const CalendarState = ({ children }) => {
    const [serverData, setServerData] = useState(new Date().getFullYear())
    const [selectedYear, setSelectedYear] = useState(new Date().getFullYear())
    const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth())
    const [dateList, setDateList] = useState([])
    const [isCalendarEditable, setIsCalendarEditable] = useState(false)
    const [isPreview, setIsPreview] = useState(true)
    const [calendarTheme, setCalendarTheme] = useState('black')
    const [calendarContainerElement, setCalendarContainerElement] = useState('')
    const [language, setLanguage] = useState('english')
    const [activeWeekIndex, setActiveWeekIndex] = useState(0)
    const [selectedWeek, setSelectedWeek] = useState(0)
    const [weeks, setWeeks] = useState(cloneDeep(weeksList))
    const [calendarImages, setCalendarImages] = useState(cloneDeep(DemoImageListForCalendar))
    const [leftSideComponentName, setLeftSideComponentName] = useState('CalendarConfig')
    const [media, setMedia] = useState([])
    const [calendarPrice, setCalendarPrice] = useState(0)
    const [SelectedPageSettings, setSelectedPageSettings] = useState({})

    return (
        <CalendarContext.Provider 
            value={{ 
                serverData,
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
                media,
                isPreview, 
                calendarPrice,
                SelectedPageSettings,
                setServerData, 
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
                setMedia,
                setIsPreview,
                setCalendarPrice,
                setSelectedPageSettings
            }}
        >
            { children }
        </CalendarContext.Provider>
    )
}

export default CalendarState