import classes from '../Calendar/index.module.css'
import Navigation from '@/Components/calendar/Navigation'
import CoverPage from '@/Components/calendar/CalendarPreview/CoverPage'

export default function index({calendars})
{
    const getCoverPhoto = (settings, key) => {
        return JSON.parse(settings).find(item => item.name == key)
    }

    return (
        <div className={ [classes.main_wrapper, 'grid items-start m-auto min-h-screen bg-slate-100'].join(' ') }>
            <nav className={ ['p-4 bg-white border-b px-10 sticky top-0'].join(' ') }>
                <Navigation />
            </nav>
            <div className={ [classes.leftSidebarAndMainContent, 'h-full'].join(' ') }>
                <div className='grid gap-5 p-10'>
                    {
                        calendars.map((calendar, index) => (
                            <div className='w-52' key={ index }>
                                <CoverPage img={ getCoverPhoto(calendar.settings, 'cover').path } />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
