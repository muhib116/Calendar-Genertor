import { Link } from '@inertiajs/inertia-react'
import CoverPage from '@/Components/calendar/CalendarPreview/CoverPage'
import useCalendar from '@/Components/calendar/useCalendar'
import { toast } from 'react-toastify'
import { useState } from 'react'

export default function Item({ calendar })
{
    const [Price, setPrice] = useState(calendar.price)
    const getCoverPhoto = (settings, key) => {
        console.log(settings)
        return settings.find(item => item.name == key)
    }
    const { updateCalendarPrice, deleteCalendar, makeCalendarSaleable } = useCalendar()
    const handlePrice = (e) => {
        let price = e.target.value
        setPrice(price)
    }

    const updatePrice = (price, id) => {
        updateCalendarPrice(price, id)
        toast.success('Price Updated !', {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        })
    }


    return (
        <div className='flex gap-5 items-start'>
            <div className='w-52 h-[330px]'>
                <Link href={ `calendar/edit/${calendar.id}` }>
                    {/* <CoverPage img={ calendarImages.length>0 ? calendarImages.find(item=>item.name == 'cover') : '' } /> */}
                    <CoverPage style={{ width: '200px', height: 'auto' }} img={ getCoverPhoto(calendar.settings, 'cover') } />
                </Link>
            </div>
            <input type='number' value={ Price } min="0" onInput={ handlePrice } className='py-1 border-gray-300 bg-transparent' />
            <div className="flex gap-4">
                <button 
                    className='px-4 py-1 bg-green-500 rounded shadow'
                    onClick={ () => updatePrice(Price, calendar.id) }
                >
                    Update
                </button>
                <button 
                    className='px-4 py-1 bg-red-500 text-white rounded shadow'
                    onClick={ () => {
                        if(confirm("Are you sure to delete this?")){
                            deleteCalendar(calendar.id)
                        }
                    } }
                >
                    Delete
                </button>
                <label
                    className='flex gap-2 items-center cursor-pointer'
                    onChange={ () => {
                        makeCalendarSaleable(calendar.id)
                    }}
                >
                    <input type="radio" name='saleable' checked={ calendar.is_salable } />
                    Salable
                </label>
            </div>
        </div>
    )
}
