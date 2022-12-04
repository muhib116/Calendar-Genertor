import { useContext } from "react"
import calendarContext from "../../../context/calendarContext"
import useCalendar from "../useCalendar"
import fileLibraryIcon from '../../../assets/icons/file-library.png'
import addTextIcon from '../../../assets/icons/text-add.png'
import settingsIcon from '../../../assets/icons/settings.png'
import { Link } from "@inertiajs/inertia-react"


export default function Navigation({ page }) {
  const { isCalendarEditable, setIsPreview, isPreview, setLeftSideComponentName } = useContext(calendarContext)
  const { saveCalendar, updateCalendar } = useCalendar()

  const handlePreview = () => {
    setIsPreview(!isPreview)
  }

  return (
    <div className='flex justify-between'>
      <div className="flex gap-4">

        {
          page == 'calendar' &&
          <>
            <button onClick={ () => setLeftSideComponentName('CalendarConfig') } className="flex gap-2 items-center font-semibold">
              <img src={ settingsIcon } className={ ['w-5 h-5 block'] } alt="" />
              Settings
            </button>
            <button onClick={ () => setLeftSideComponentName('Media') } className="flex gap-2 items-center font-semibold">
              <img src={ fileLibraryIcon } className={ ['w-5 h-5 block'] } alt="" />
              My Files
            </button>
            <button className="flex gap-2 items-center font-semibold">
              <img src={ addTextIcon } className={ ['w-5 h-5 block'] } alt="" />
              Add Text
            </button>
          </>
        }
      </div>


      <div className='flex gap-4 items-center'>
        <a href="#guid">Guid</a>
        {
          page == 'calendar' &&
          <>
            <button onClick={ handlePreview }>Preview</button>

            {
              isCalendarEditable ?
              <button onClick={ updateCalendar } className='bg-blue-500 text-white rounded-full shadow py-1 px-4'>Update</button>
              :
              <button onClick={ saveCalendar } className='bg-green-500 text-white rounded-full shadow py-1 px-4'>Save</button>
            }
          </>
        }
        


        {
          page != 'calendar' &&
          <Link href='/calendar/create'>Create calenders</Link>
        }
        <Link href='/calendars'>My calenders</Link>
      </div>
    </div>
  )
}
