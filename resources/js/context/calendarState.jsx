import { weeksList } from "@/Components/calendar/calendarData"
import { useState } from "react"
import CalendarContext from "./calendarContext"
const CalendarState = ({ children }) => {
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear())
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth())
    const [dateList, setDateList] = useState([])
    const [isCalendarEditable, setIsCalendarEditable] = useState(true)
    const [calendarTheme, setCalendarTheme] = useState('black')
    const [calendarContainerElement, setCalendarContainerElement] = useState('')
    const [language, setLanguage] = useState('english')
    const [activeWeekIndex, setActiveWeekIndex] = useState(0)
    
    
    // this weeks data also available in calendarData.js
    const [weeks, setWeeks] = useState({
      english: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      spanish: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
      french: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi']
    })

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
              setCurrentYear, 
              setDateList, 
              setCurrentMonth,
              setCalendarTheme,
              setIsCalendarEditable,
              setCalendarContainerElement,
              setLanguage,
              setWeeks,
              setActiveWeekIndex
            }}
        >
            { children }
        </CalendarContext.Provider>
    )
}

export default CalendarState