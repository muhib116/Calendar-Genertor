import calendarContext from '@/context/calendarContext'
import React, { useContext, useEffect } from 'react'
import Create from './create'
export default function edit({ data }) {
    const { 
        setCalendarImages, 
        setIsCalendarEditable,
        setSelectedYear,
        setSelectedMonth,
        setLanguage,
        setActiveWeekIndex,
        setCalendarTheme,
        setServerData,
        setCalendarPrice
    } = useContext(calendarContext)

    useEffect(() => {
        document.title = 'Update Calendar'

        const { year, month, language, week, theme, price } = data
        setServerData(data)
        setCalendarImages(data.settings)
        setIsCalendarEditable(true)
        setSelectedYear(year)
        setSelectedMonth(month)
        setLanguage(language)
        setActiveWeekIndex(week)
        setCalendarTheme(theme)
        setCalendarPrice(price)

        return () => {
            setIsCalendarEditable(false)
        }
    }, [])
    return (
        <Create />
    )
}
