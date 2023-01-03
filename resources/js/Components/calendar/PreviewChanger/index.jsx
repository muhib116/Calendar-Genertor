import { useContext, memo } from 'react'
import classes from './index.module.css'
import calendarContext from '../../../context/calendarContext'
import CoverPage from '../CalendarPreview/CoverPage'
import BackPage from '../CalendarPreview/BackPage'
import CalendarPreview from '@/Components/calendar/CalendarPreview/index'
import { listOfMonth } from '../../../calendarData'
import useCalendar from '../useCalendar'


const PreviewChanger = () => {
  const { calendarImages, selectedYear, selectedMonth, setSelectedPageSettings, setSelectedMonth, language, isPreview } = useContext(calendarContext)
  const { getSelectedCalendarData } = useCalendar()
  const handleMonth = (index) => {
    setSelectedMonth(index)
    setSelectedPageSettings(getSelectedCalendarData())
  }

  return (
    <div className={[classes.wrapper, 'h-full flex gap-2  overflow-x-auto text-xs w-full', !isPreview && 'justify-center'].join(' ')}>
      <div 
        onClick={ () => handleMonth(-1) } 
        className={ ['cursor-pointer p-1 text-center grid items-end border rounded hover:shadow active:scale-95 min-w-[80px]',
          (selectedMonth === -1) && 'shadow scale-95 border-red-500'
        ].join(' ') }
      >
        <div className='w-full h-[100px] overflow-hidden'>
          <CoverPage 
            img={ calendarImages.length>0 ? calendarImages.find(item=>item.name == 'cover') : '' }
            style={{ 
              transform: 'scale(0.14)',
              transformOrigin: 'left top',
              height: '700px'
            }}
          />
        </div>
        Cover
      </div>
      {
        listOfMonth.map((item, index) => (
          <div 
            onClick={ () => handleMonth(index) } 
            key={ 'previewChangerKey-'+index } 
            className={ [
              'cursor-pointer p-1 text-center grid items-end border min-w-[80px] hover:shadow-md active:scale-95 rounded',
              (selectedMonth === index) && 'shadow scale-95 border-red-500'
            ].join(' ') } 
          >
            <div className='w-full h-[104px] overflow-hidden'>
              <CalendarPreview 
                  img={ calendarImages.length>0 ? calendarImages.find(item=>item.name == listOfMonth[index]['english']) : '' }
                  selectedMonth={ index } 
                  selectedYear={ selectedYear } 
                  style={{ 
                    transform: 'scale(0.14)',
                    transformOrigin: 'left top',
                    height: '700px'
                  }}
              />
            </div>

            { item[language].slice(0, 3) } - { selectedYear }
          </div>
        ))
      }
      <div 
        onClick={ () => handleMonth(12) } 
        className={ ['cursor-pointer p-1 text-center grid items-end border min-w-[80px] rounded hover:shadow active:scale-95',
          (selectedMonth === 12) && 'shadow scale-95 border-red-500'
        ].join(' ') }
      >
        <div className='w-full h-[104px] overflow-hidden'>
          <BackPage 
            img={ calendarImages.length>0 ? calendarImages.find(item=>item.name == 'back') : '' }
            style={{ 
              transform: 'scale(0.14)',
              transformOrigin: 'left top',
              height: '700px'
            }}
          />
        </div>
        Back
      </div>
    </div>
  )
}


export default memo(PreviewChanger)