import { useContext } from "react"
import calendarContext from "../../../context/calendarContext"
import fileLibraryIcon from '../../../assets/icons/file-library.png'

export default function Navigation() {
  const { isCalendarEditable, setIsCalendarEditable } = useContext(calendarContext)

  const handlePreview = () => {
    setIsCalendarEditable(!isCalendarEditable)
  }

  return (
    <div className='flex justify-between'>
      <div>
        <button className="flex gap-1 items-center">
          <img src={ fileLibraryIcon } className={ ['w-7 h-7 block'] } alt="" />
          My Files
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
