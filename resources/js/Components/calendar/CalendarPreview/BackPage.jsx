import calendarContext from '@/context/calendarContext'
import { useContext } from 'react'
import classes from './index.module.css'

export default function CoverPage() {
  let { calendarImages } = useContext(calendarContext)
  return (
    <div className={ [classes.cover_photo, classes.wrapper, 'h-full'].join(' ') }>
      <div className={ [classes.calendar, 'shadow h-full'].join(' ') }>
          <img 
            className={ [classes.back_image, 'h-full w-full block object-cover object-center'].join(' ') }
            src={ calendarImages.find(item=>item.name == 'back').path }
            alt='' 
          />
      </div>
    </div>
  )
}