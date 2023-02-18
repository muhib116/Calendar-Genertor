import { useContext } from "react"
import calendarContext from "../../../context/calendarContext"
import useCalendar from "../useCalendar"
import fileLibraryIcon from '../../../assets/icons/file-library.png'
import addTextIcon from '../../../assets/icons/text-add.png'
import settingsIcon from '../../../assets/icons/settings.png'
import useTextConfig from '@/Components/useTextConfig.js'
import { Link } from "@inertiajs/inertia-react"
import { usePage } from '@inertiajs/inertia-react'


export default function Navigation({ page }) {
  const { component } = usePage()
  const { isCalendarEditable, setIsPreview, isPreview, setLeftSideComponentName } = useContext(calendarContext)
  const { saveCalendar, updateCalendar } = useCalendar()
  const { setDefaultText } = useTextConfig()

  const handlePreview = () => {
    setIsPreview(!isPreview)
  }
  
  return (
    <div className='flex justify-between'>
      <div className="flex gap-4">

        {
          route().current() == 'calendar' &&
          <>
            <button onClick={ () => setLeftSideComponentName('CalendarConfig') } className="flex gap-2 items-center font-semibold">
              <img src={ settingsIcon } className={ ['w-5 h-5 block'] } alt="" />
              Settings
            </button>
            <button onClick={ () => setLeftSideComponentName('Media') } className="flex gap-2 items-center font-semibold">
              <img src={ fileLibraryIcon } className={ ['w-5 h-5 block'] } alt="" />
              My Files
            </button>
            <button 
              onClick={ () => {
                setLeftSideComponentName('TextConfig') 
                setDefaultText()
              }}
              className="flex gap-2 items-center font-semibold"
            >
              <img src={ addTextIcon } className={ ['w-5 h-5 block'] } alt="" />
              Add Text
            </button>
          </>
        }
      </div>


      <div className='flex gap-4 items-center'>
        <a href="#guid">Guide</a>
        {
          route().current() == 'calendar' &&
          <>
            {
              component != 'Calendar/edit' &&
              <button className={ [!isPreview && 'text-red-500'].join(' ') } onClick={ handlePreview }>Preview</button>
            }

            {
              !isCalendarEditable ?
              <button onClick={ saveCalendar } className='bg-green-500 text-white rounded-full shadow py-1 px-4'>Save</button>
              :
              ''
            }
          </>
        }
        {
          (route().current() != 'calendar') &&
          <Link href={ route('calendar') }>Create</Link>
        }

        {
          (location.pathname != 'talent/calendars') &&
          <Link href={route('my_calendars')}>My calenders</Link>
        }
      </div>
    </div>
  )
}
