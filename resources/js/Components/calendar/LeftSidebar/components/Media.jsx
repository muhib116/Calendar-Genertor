import calendarContext from '@/context/calendarContext'
import { useContext } from 'react'
import { DemoImages, listOfMonth } from '../../../../calendarData'
import { cloneDeep, get, isEmpty } from 'lodash'

export default function Media() {
    const { selectedMonth, calendarImages, setCalendarImages } = useContext(calendarContext)
    const handleImage = (image) => {
        let monthName = get(listOfMonth, `${selectedMonth}.english`)
        let myCalendarImages = cloneDeep(calendarImages)
        let filteredImageData = {}

        if(monthName){
            filteredImageData = myCalendarImages.find(img => img.name == monthName)
        }else{
            if(selectedMonth == '-1'){
                // cover photo
                filteredImageData = myCalendarImages.find(img => img.name == 'cover')
            }
            if(selectedMonth == '12'){
                // back photo
                filteredImageData = myCalendarImages.find(img => img.name == 'back')
            }
        }
        
        if(isEmpty(filteredImageData)) return

        filteredImageData.path = image
        setCalendarImages(myCalendarImages)
    }

    return (
        <>
            <div className='grid justify-center'>
                <label className={ ['bg-green-500 px-5 py-1 mb-6 font-semibold cursor-pointer text-white rounded shadow mx-auto inline-block'].join(' ') }>
                    + Upload File
                    <input type="file" hidden />
                </label>
            </div>

            <div className='gap-3 grid grid-cols-3 content-start overflow-y-auto' style={{ height: '930px' }}>
                {
                    DemoImages.map((image, index) => (
                        <div onClick={ () => handleImage(image) } key={ 'img-'+index } className='cursor-pointer h-20 hover:brightness-75'>
                            <img className="block w-full h-full object-cover object-center" src={image} />
                        </div>
                    ))
                }
            </div>
        </>
    )
}
