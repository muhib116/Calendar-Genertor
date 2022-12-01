import classes from './index.module.css'
import LeftSidebar from '../../Components/calendar/LeftSidebar'
import CalendarPreview from '../../Components/calendar/CalendarPreview'
import PreviewChanger from '../../Components/calendar/PreviewChanger'
import Navigation from '../../Components/calendar/Navigation'
import calendarContext from '../../context/calendarContext'
import { useContext } from 'react'
import AngleIcon from '../../assets/icons/AngleIcon'
import CoverPage from '../../Components/calendar/CalendarPreview/CoverPage'
import BackPage from '../../Components/calendar/CalendarPreview/BackPage'
import { listOfMonth } from '@/calendarData'

export default function Master() {
    const { 
        calendarImages, 
        isCalendarEditable, 
        selectedMonth, 
        selectedYear, 
        setSelectedMonth
    } = useContext(calendarContext)

    const handleMonth = (direction) => {
        if((selectedMonth + direction) >= -1 && (selectedMonth + direction) <= 12){
            setSelectedMonth(selectedMonth + direction)
        }
    }
  
  return (
    <div className={ [classes.main_wrapper, 'grid items-start m-auto min-h-screen bg-slate-100'].join(' ') }>
        <nav className={ ['p-4 bg-white border-b px-10 z-50 sticky top-0'].join(' ') }>
            <Navigation page='calendar' />
        </nav>
        <div className={ [
                classes.leftSidebarAndMainContent, 
                'h-full gap-4',
                isCalendarEditable && 'grid'
            ].join(' ') }
        >
            {
                isCalendarEditable && 
                <div className={ [classes.left_sidebar, 'p-4 h-full bg-white'].join(' ') }>
                    <LeftSidebar />
                </div>
            }

              <div className={ [classes.main_content, ' w-full gap-4'].join(' ') }>
                <div className={ [classes.main_preview, 'p-4 relative select-none'].join(' ') }>
                    <div className='flex justify-between absolute top-1/2 w-full left-0'>
                        <AngleIcon className='cursor-pointer' onClick={ () => handleMonth(-1) } />
                        <AngleIcon className='cursor-pointer rotate-180' onClick={ () => handleMonth(1) } />
                    </div>

                    <div className={[classes.calendar_container].join(' ')}>
                        {
                            (selectedMonth === -1) &&
                            <CoverPage img={ calendarImages.find(item=>item.name == 'cover').path } />
                        }
                        {
                            (selectedMonth >= 0 && selectedMonth<=11) &&
                            <CalendarPreview 
                                img={ calendarImages.find(item=>item.name == listOfMonth[selectedMonth]['english']).path }
                                selectedMonth={ selectedMonth } 
                                selectedYear={ selectedYear } 
                            />
                        }
                        {
                            (selectedMonth === 12) &&
                            <BackPage img={ calendarImages.find(item=>item.name == 'back').path } />
                        }
                    </div>
                </div>
                <div className={ [classes.main_slide, 'p-4 bg-white h-full self-end'].join(' ') }>
                    <PreviewChanger />
                </div>
            </div>
        </div>
    </div>
  )
}