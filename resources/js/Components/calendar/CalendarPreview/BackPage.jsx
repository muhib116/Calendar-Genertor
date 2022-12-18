import classes from './index.module.css'

export default function CoverPage({ img, style={} }) {
  return (
    <div style={ style } className={ [classes.cover_photo, classes.wrapper, 'h-full'].join(' ') }>
      <div className={ [classes.calendar, 'shadow h-full'].join(' ') }>
        {
          img != '' &&
          <img 
            className={ [classes.back_image, 'h-full w-full block object-cover object-center'].join(' ') }
            src={ img }
            alt='' 
          />
        }
      </div>
    </div>
  )
}