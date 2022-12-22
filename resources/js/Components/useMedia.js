import { useContext } from "react"
import calendarContext from "@/context/calendarContext"
import axios from "axios"
import { usePage } from '@inertiajs/inertia-react'
import { cloneDeep, get, isEmpty } from 'lodash'
import { listOfMonth } from '@/calendarData'

export default function useMedia() {
    const { auth } = usePage().props
    const { selectedMonth, calendarImages, setCalendarImages, setMedia } = useContext(calendarContext)

    let timeoutId = null
    const getMedia = () => {
        clearTimeout(timeoutId)
        setTimeout(async () => {
            let { data } = await axios.get('media/'+auth.user.id)
            setMedia(data)
        }, 1000)
    }
    
    const handleImage = (image) => {
        let monthName = get(listOfMonth, `${selectedMonth}.english`)
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

        filteredImageData.path = image
        setCalendarImages(myCalendarImages)
    }

    const deleteMedia = async (mediaId) => {
        let status = await axios.delete(`media/delete/${mediaId}/${auth.user.id}`)
        if(status) {
            getMedia()
        }
    }

    return {
        getMedia,
        handleImage,
        deleteMedia
    }
}