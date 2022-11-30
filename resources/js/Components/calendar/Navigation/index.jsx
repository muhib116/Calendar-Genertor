import { useContext } from "react"
import calendarContext from "../../../context/calendarContext"
import fileLibraryIcon from '../../../assets/icons/file-library.png'
import addTextIcon from '../../../assets/icons/text-add.png'

export default function Navigation() {
  const { isCalendarEditable, setIsCalendarEditable } = useContext(calendarContext)

  const handlePreview = () => {
    setIsCalendarEditable(!isCalendarEditable)
  }

  return (
    <div className='flex justify-between'>
      <div className="flex gap-4">
        <button className="flex gap-2 items-center font-semibold">
          <img src={ fileLibraryIcon } className={ ['w-5 h-5 block'] } alt="" />
          My Files
        </button>
        <button className="flex gap-2 items-center font-semibold">
          <img src={ addTextIcon } className={ ['w-5 h-5 block'] } alt="" />
          Add Text
        </button>
      </div>
      <div className='flex gap-4 items-center'>
        <a href="#guid">Guid</a>
        <button onClick={ handlePreview }>Preview</button>
        <a href="#Save" className='bg-green-500 text-white rounded-full shadow py-1 px-4'>Save</a>
        <a href="#My calenders">My calenders</a>
      </div>
    </div>
  )
}
