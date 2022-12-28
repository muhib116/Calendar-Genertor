import { useState, useContext } from 'react';
import Draggable from 'react-draggable';
import calendarContext from "@/context/calendarContext"
import useTextConfig from '@/Components/useTextConfig.js'


export default function MoveableBox({ style, title })
{
  const { 
      calendarImages
  } = useContext(calendarContext)
  const { handleText, getPageName } = useTextConfig()
  const handleInput = (e) => {
    let target = e.target
    handleText(target)
  }

  let bgStyle = {
    opacity: style.opacity,
    backgroundColor: style.backgroundColor,
  }

  let wrapperStyle = {...style}
  delete wrapperStyle.opacity
  delete wrapperStyle.backgroundColor
  return (
      <Draggable>
          <input 
            className='absolute top-0 z-30 p-0 border-none text-left bg-transparent' style={ wrapperStyle }
            name='title'
            onInput={ handleInput } 
            value={
              calendarImages.find(item => {
                return (item.name == getPageName()) && item
              }).text.title
          }
          />
      </Draggable>
  )
}
