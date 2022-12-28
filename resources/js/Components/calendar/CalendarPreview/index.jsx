import classes from './index.module.css'
import { listOfMonth } from '../../../calendarData';
import useCalendar from '../useCalendar';
import { useContext } from 'react';
import calendarContext from '../../../context/calendarContext';
import { useRef } from 'react';
import { useEffect } from 'react';
import MoveableBox from '../MoveableBox'
import { get } from 'lodash'


const CalendarPreview = ({ img, style={}, selectedMonth, selectedYear }) =>
{
  const calendarContainer = useRef()
  const { getDateList } = useCalendar()
  const { calendarTheme, setCalendarContainerElement, language, weeks } = useContext(calendarContext)
  useEffect(() => {
    setCalendarContainerElement(calendarContainer.current)
  })

  return (
    <div className={ [classes.wrapper, 'h-full'].join(' ') } ref={ calendarContainer } style={style}>
      <div className={ [classes.calendar, 'shadow h-full relative'].join(' ') } id='calendar_main_wrapper'>
        <MoveableBox style={ get(img, 'text.style') } title={ get(img, 'text.title') } />
        <div className={ [classes.image].join(' ') }>
          {
            img && img.path != '' &&
            <img 
              className='block w-full object-cover object-center'
              src={ img.path }
              alt=""
            />
          }
        </div>

        <div className={ [ classes.body, calendarTheme === 'black' && 'bg-gray-800 text-white' ].join(' ') }>
          <div className='flex justify-between items-end px-6 py-4' style={ {backgroundColor: '#9992'} }>
            <div className='font-medium italic text-xl capitalize'>{ listOfMonth[selectedMonth][language] }</div>
            <div className='text-orangered-500 font-bold text-red-400 italic text-3xl'>{ selectedYear }</div>
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
                getDateList(selectedMonth, selectedYear).map((item, index) => (
                  <span 
                    className={ [
                      classes.cell,
                      item.isInactive&&'opacity-30',
                      item.isActive&&'bg-red-400 font-bold',
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


export default CalendarPreview