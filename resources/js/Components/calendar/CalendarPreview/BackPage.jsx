import classes from './index.module.css'

export default function CoverPage() {
  return (
    <div className={ [classes.cover_photo, classes.wrapper, 'h-full'].join(' ') }>
      <div className={ [classes.calendar, 'shadow h-full'].join(' ') }>
          <img 
            className={ [classes.back_image, 'h-full w-full block object-cover object-center'].join(' ') }
            src='https://images.unsplash.com/photo-1577640256262-8488aa247e17?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80' alt='' />
      </div>
    </div>
  )
}