import { useState, useContext } from 'react';
import Draggable from 'react-draggable';
import calendarContext from "@/context/calendarContext"
import useTextConfig from '@/Components/useTextConfig.js'


export default function MoveableBox({ style, title })
{
  const { 
      calendarImages
  } = useContext(calendarContext)
  const { handleText, getPageName, setPosition } = useTextConfig()
  const handleInput = (e) => {
    let target = e.target
    handleText(target)
    target.style.height = target.scrollHeight+'px'
  }

  let bgStyle = {
    opacity: style.opacity,
    backgroundColor: style.backgroundColor,
  }

  let wrapperStyle = {...style}
  delete wrapperStyle.opacity
  delete wrapperStyle.backgroundColor

  const [IsDisabled, setIsDisabled] = useState(false)

  return (
      <Draggable
        defaultPosition={{x: Number(style.x), y: Number(style.y)}}
        position={{x: Number(style.x), y: Number(style.y)}}
        grid={[5, 5]}
        onStop={ setPosition }
        disabled={ IsDisabled }
      >
        <div className='pointer-events-none'>

          {
            IsDisabled &&
            <button className='pointer-events-auto' onClick={ () => setIsDisabled(false) }>
              <svg width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="#000" strokeWidth="2" d="m6 13 4.2 3.6L18 7"/></svg>
            </button>
          }

          <textarea 
            title='Double Click to Edit'
            className='pointer-events-auto absolute top-0 z-30 p-0 border-none text-left bg-transparent resize-none'  style={ wrapperStyle }
            name='title'
            onInput={ handleInput }
            value={
              calendarImages.find(item => {
                return (item.name == getPageName()) && item
              }).text.title
            }
            readOnly={ !IsDisabled }
            onDoubleClick={ () => setIsDisabled(true) }
          ></textarea>
        </div>
      </Draggable>
  )
}
