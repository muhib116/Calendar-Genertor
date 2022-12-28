import { useContext, useState } from "react"
import calendarContext from "@/context/calendarContext"
import { listOfMonth } from '@/calendarData'
import { get, cloneDeep, isEmpty } from 'lodash'

export default function useTextConfig()
{
    const [FilteredImageData] = useState({})
    const { selectedMonth, calendarImages, setCalendarImages } = useContext(calendarContext)
    
    const getPageName = () => {
        let monthName = get(listOfMonth, `${selectedMonth}.english`)
        let pageName = selectedMonth == -1 ? 'cover' : selectedMonth == 12 ? 'back' : ''
        return monthName ? monthName : pageName      
    }

    const handleText = (target) => {    
        setCalendarImages(prevState => {
            return (prevState.map(item => {       
                if(item.name == getPageName()){
                    if(target.name == 'title'){
                        item.text[target.name] = target.value
                    }else{
                        let arrayForPx = ['fontSize', 'top', 'paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft']
                        item.text['style'][target.name] = `${target.value}${(arrayForPx.includes(target.name)) ? 'px' : ''}`
                    }
                }
                return item
            }))
        })
    }

    return {
        handleText,
        calendarImages,
        setCalendarImages,
        FilteredImageData,
        getPageName
    }
}