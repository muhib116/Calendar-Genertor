import React, { useContext } from 'react'
import calendarContext from "@/context/calendarContext"
import useTextConfig from '@/Components/useTextConfig.js'

export default function InputFontSize() {
    const { 
        calendarImages,
        setCalendarImages
    } = useContext(calendarContext)
    const { handleText, getPageName } = useTextConfig()

    const handleFontSize = (direction) => {
        setCalendarImages(prevState => {
            return (prevState.map(item => {       
                if(item.name == getPageName())
                {
                    if(+(item.text['style']['fontSize']) + direction>0){
                        item.text['style']['fontSize'] = +(item.text['style']['fontSize']) + direction
                    }
                }
                return item
            }))
        })
    }

  return (
    <div className="flex">
        <button onClick={ () => handleFontSize(-1) } className='px-2 text-lg'>-</button>
        <span 
            type='text' 
            name='fontSize' 
            className='bg-transparent text-center rounded border border-gray-400 border-opacity-50 px-2 w-[80px] py-0' 
        >
            {
                calendarImages.find(item => {
                    return (item.name == getPageName()) && item
                }).text.style.fontSize
            }
        </span>
        <button onClick={ () => handleFontSize(1) } className='px-2 text-lg'>+</button>
    </div>
  )
}
