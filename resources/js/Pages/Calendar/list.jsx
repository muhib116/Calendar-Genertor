import classes from '../Calendar/index.module.css'
import Navigation from '@/Components/calendar/Navigation'
import Item from './components/Item'

export default function index({calendars})
{
    return (
        <div className={ ['m-auto min-h-screen bg-slate-100'].join(' ') }>
            <nav className={ ['p-4 bg-white border-b px-10 sticky top-0 z-50'].join(' ') }>
                <Navigation />
            </nav>
            <div className={ [classes.leftSidebarAndMainContent, 'h-full'].join(' ') }>
                <div className='grid gap-5 p-10'>
                    {
                        calendars && 
                        calendars.map((calendar, index) => (
                            <Item calendar={ calendar } key={ index } />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
