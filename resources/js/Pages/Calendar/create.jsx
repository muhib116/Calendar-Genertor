import classes from './index.module.css'
import LeftSidebar from '../../Components/calendar/LeftSidebar'
import CalendarPreview from '../../Components/calendar/CalendarPreview'
import PreviewChanger from '../../Components/calendar/PreviewChanger'
import Navigation from '../../Components/calendar/Navigation'
import calendarContext from '../../context/calendarContext'
import { useContext, useEffect } from 'react'
import AngleIcon from '../../assets/icons/AngleIcon'
import CoverPage from '../../Components/calendar/CalendarPreview/CoverPage'
import BackPage from '../../Components/calendar/CalendarPreview/BackPage'
import { listOfMonth, DemoImageListForCalendar } from '@/calendarData'
import useCalendar from '@/Components/calendar/useCalendar'
import { cloneDeep } from 'lodash'

export default function Master()
{
    const { getSelectedCalendarData } = useCalendar()

    const { 
        setCalendarImages, 
        calendarImages, 
        isPreview, 
        selectedMonth, 
        selectedYear, 
        setSelectedMonth,
        setIsPreview,
        setSelectedPageSettings,
        SelectedPageSettings
    } = useContext(calendarContext)

    const handleMonth = (direction) => {
        setSelectedPageSettings(getSelectedCalendarData())
        if((+selectedMonth + direction) >= -1 && (+selectedMonth + direction) <= 12){
            setSelectedMonth(prevSelectedMonth => {
                return prevSelectedMonth + direction
            })
        }
    }

    useEffect(() => {
        document.title = 'Create Calendar'
        setCalendarImages(cloneDeep(DemoImageListForCalendar))
    }, [])
  
  return (
    <div className={ [classes.main_wrapper, 'grid items-start m-auto min-h-screen bg-slate-100'].join(' ') }>
        <nav className={ ['p-4 bg-white border-b px-10 z-50 sticky top-0'].join(' ') }>
            <Navigation page='calendar' />
        </nav>
        <div className={ [
                classes.leftSidebarAndMainContent, 
                'h-full gap-4',
                isPreview && 'grid'
            ].join(' ') }
        >
            {
                isPreview && 
                <div className={ [classes.left_sidebar, 'p-4 h-full bg-white'].join(' ') }>
                    <LeftSidebar />
                </div>
            }

              <div className={ [classes.main_content, ' w-full gap-4'].join(' ') }>
                <div className={ [classes.main_preview, 'p-4 relative select-none'].join(' ') }>
                    
                    {
                        !isPreview &&
                        <h1 onClick={ () => setIsPreview(!isPreview) } className='flex gap-2 cursor-pointer hover:text-green-500 w-fit'>
                            <svg width="24px" height="24px" viewBox="0 0 24 24" fill='currentColor'>
                                <path d="M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z"/>
                            </svg>
                            Back to Design
                        </h1>
                    }

                    <div className='flex justify-between absolute top-1/2 w-full left-0'>
                        <AngleIcon className='cursor-pointer' onClick={ () => handleMonth(-1) } />
                        <AngleIcon className='cursor-pointer rotate-180' onClick={ () => handleMonth(1) } />
                    </div>

                    <div className={[classes.calendar_container].join(' ')}>
                        {
                            (selectedMonth === -1) &&
                            <CoverPage img={ calendarImages.length>0 ? calendarImages.find(item=>item.name == 'cover') : '' } />
                        }
                        {
                            (selectedMonth >= 0 && selectedMonth<=11) &&
                            <CalendarPreview 
                                img={ calendarImages.length>0 ? calendarImages.find(item=>item.name == listOfMonth[selectedMonth]['english']) : '' }
                                selectedMonth={ selectedMonth } 
                                selectedYear={ selectedYear } 
                            />
                        }
                        {
                            (selectedMonth === 12) &&
                            <BackPage img={ calendarImages.length>0 ? calendarImages.find(item=>item.name == 'back') : '' } />
                        }
                    </div>
                </div>
                <div className={ [classes.main_slide, 'p-4 bg-white h-full w-full overflow-x-auto self-end'].join(' ') }>
                    <PreviewChanger />
                </div>
            </div>
        </div>
    </div>
  )
}