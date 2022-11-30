import classes from './index.module.css'
// import * as htmlToImage from 'html-to-image';
import { listOfMonth } from '../calendarData';
import useCalendar from '../useCalendar';
import { useContext } from 'react';
import calendarContext from '../../../context/calendarContext';
import { useRef } from 'react';
import { useEffect } from 'react';
import { memo } from 'react';


const CalendarPreview = ({ currentMonth, currentYear, style={} }) =>
{
  const calendarContainer = useRef()
  const { getDateList } = useCalendar()
  const { calendarTheme, setCalendarContainerElement, language, weeks } = useContext(calendarContext)
  useEffect(() => {
    setCalendarContainerElement(calendarContainer.current)
  })

  return (
    <div className={ [classes.wrapper, 'h-full'].join(' ') } ref={ calendarContainer }>
      <div className={ [classes.calendar, 'shadow h-full'].join(' ') }>
        <div className={ [classes.image].join(' ') }>
          <img 
            className='block w-full object-cover object-center'
            src='https://images.unsplash.com/photo-1669403337099-5ebd653cc99b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80' 
            alt=""
          />
        </div>

        <div className={ [ classes.body, calendarTheme === 'black' && 'bg-gray-800 text-white' ].join(' ') }>
          <div className='flex justify-between items-end px-6 py-4' style={ {backgroundColor: '#9992'} }>
            <div className='font-medium italic text-xl capitalize'>{ listOfMonth[currentMonth][language] }</div>
            <div className='text-orangered-500 font-bold text-red-400 italic text-3xl'>{ currentYear }</div>
          </div>

          <div className={ ['p-4 pt-0 text-xs'].join(' ') }>
            <div className='grid grid-cols-7'>
              {
                weeks[language].map(week => (
                  <span key={ week } className={ [classes.cell, 'text-semibold text-center px-2 py-2'].join(' ') }>
                    { week.slice(0, 3) }
                  </span>
                ))
              }
            </div>

            <div className='grid grid-cols-7'>
              {
                getDateList(currentMonth, currentYear).map((item, index) => (
                  <span 
                    className={ [
                      classes.cell,
                      item.isInactive&&'opacity-30',
                      item.isActive&&'bg-green-300',
                      'text-center px-2 py-2'
                    ].join(' ') } 
                    key={ 'cellKey-'+index }
                  >
                  {item.isActive}
                    { item.date }
                  </span>
                ))
              }
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}


export default memo(CalendarPreview)