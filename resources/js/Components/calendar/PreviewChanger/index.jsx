import { useContext, memo } from 'react'
import classes from './index.module.css'
import calendarContext from '../../../context/calendarContext'
import CoverPage from '../CalendarPreview/CoverPage'
import BackPage from '../CalendarPreview/BackPage'
import whiteCalendar from '../../../assets/white-calendar.png'
import blackCalendar from '../../../assets/black-calendar.png'
import { listOfMonth } from '../calendarData'

const PreviewChanger = () => {
  const { currentYear, currentMonth, calendarTheme, setCurrentMonth, language } = useContext(calendarContext)
  const handleMonth = (index) => {
    setCurrentMonth(index)
  }

  return (
    <div className={[classes.wrapper, 'h-full flex gap-2 text-xs overflow-x-auto w-full justify-center'].join(' ')}>
      <div 
        onClick={ () => handleMonth(-1) } 
        className={ ['cursor-pointer p-1 text-center grid items-end border rounded hover:shadow active:scale-95',
          (currentMonth === -1) && 'shadow scale-95 border-red-500'
        ].join(' ') }
      >
        <CoverPage />
        Cover
      </div>
      {
        listOfMonth.map((item, index) => (
          <div 
            onClick={ () => handleMonth(index) } 
            key={ 'previewChangerKey-'+index } 
            className={ [
              'cursor-pointer p-1 text-center grid items-end border hover:shadow-md active:scale-95 rounded',
              (currentMonth === index) && 'shadow scale-95 border-red-500'
            ].join(' ') } 
          >
            <img 
              src={ calendarTheme == 'white' ? whiteCalendar : blackCalendar } 
              alt="" 
            />
            { item[language].slice(0, 3) } - { currentYear }
          </div>
        ))
      }
      <div 
        onClick={ () => handleMonth(12) } 
        className={ ['cursor-pointer p-1 text-center grid items-end border rounded hover:shadow active:scale-95',
          (currentMonth === 12) && 'shadow scale-95 border-red-500'
        ].join(' ') }
      >
        <BackPage />
        Back
      </div>
    </div>
  )
}


export default memo(PreviewChanger)