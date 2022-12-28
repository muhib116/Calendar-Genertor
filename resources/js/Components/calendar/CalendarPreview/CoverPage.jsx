import classes from './index.module.css'
import MoveableBox from '../MoveableBox'
import { get } from 'lodash'

export default function CoverPage({ img, style }) {
  return (
    <div style={ style && style } className={ [classes.cover_photo, classes.wrapper, 'h-full relative'].join(' ') }>
      <div className={ [classes.calendar, 'shadow h-full'].join(' ') } id='calendar_main_wrapper'>
        {
          img && img.path != '' &&
          <img 
            className={ [classes.back_image, 'h-full w-full block object-cover object-center'].join(' ') }
            src={ img.path }
            alt='' 
          />
        }
      </div>

      {
        img &&
        <MoveableBox style={ get(img, 'text.style') } title={ get(img, 'text.title') } />
      }
    </div>
  )
}
