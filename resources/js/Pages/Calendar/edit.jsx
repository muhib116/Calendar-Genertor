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
        setServerData
    } = useContext(calendarContext)

    useEffect(() => {
        const { year, month, language, week, theme } = data
        setServerData(data)
        setCalendarImages(JSON.parse(data.settings))
        setIsCalendarEditable(true)
        setSelectedYear(year)
        setSelectedMonth(month)
        setLanguage(language)
        setActiveWeekIndex(week)
        setCalendarTheme(theme)
    }, [])
    return (
        <Create />
    )
}
