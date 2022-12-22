import { useContext } from "react"
import calendarContext from "@/context/calendarContext"
import { listOfMonth } from '@/calendarData'
import { get, cloneDeep, isEmpty } from 'lodash'

export default function useTextConfig()
{
    const { selectedMonth, calendarImages, setCalendarImages } = useContext(calendarContext)
    const monthName = get(listOfMonth, `${selectedMonth}.english`)

    const handleText = (target) => {
        let myCalendarImages = cloneDeep(calendarImages)
        let filteredImageData = {}

        if(monthName){
            filteredImageData = myCalendarImages.find(img => img.name == monthName)
        }else{
            if(selectedMonth == '-1'){
                // cover photo
                filteredImageData = myCalendarImages.find(img => img.name == 'cover')
            }
            if(selectedMonth == '12'){
                // back photo
                filteredImageData = myCalendarImages.find(img => img.name == 'back')
            }
        }
        
        if(isEmpty(filteredImageData)) return

        if(target.name == 'title'){
            filteredImageData['text'][target.name] = target.value
        }else{
            filteredImageData['text']['style'][target.name] = `${target.value}${(target.name == 'fontSize') ? 'px' : ''}`
        }


        setCalendarImages(myCalendarImages)
    }

    return {
        handleText,
        calendarImages,
        setCalendarImages
    }
}