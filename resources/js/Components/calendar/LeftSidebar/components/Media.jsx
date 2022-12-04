import calendarContext from '@/context/calendarContext'
import { useContext, useEffect, useState } from 'react'
import { DemoImages, listOfMonth } from '../../../../calendarData'
import FileUpload from '@/Components/FileUpload'
import useMedia from '@/Components/useMedia'


export default function Media() {
    const { media } = useContext(calendarContext)
    const { getMedia, deleteMedia, handleImage } = useMedia()

    useEffect(() => {
        getMedia()
    }, [])

    return (
        <div>
            <FileUpload />

            <p className='mb-3 font-semibold text-lg'>Library</p>
            <div className='gap-3 grid grid-cols-3 content-start overflow-y-auto' style={{ height: '930px' }}>
                {
                    // DemoImages.map((image, index) => (
                        media.map((image, index) => (
                        <div 
                            onClick={ () => handleImage(image.path) } key={ 'img-'+index } 
                            className='relative cursor-pointer h-20 bg-gray-200 overflow-hidden'
                        >
                            <button 
                                className='absolute z-10 bg-[#ff3b04] text-white block w-6 h-6 scale-90 right-0 opacity-90 hover:opacity-100 hover:shadow-lg' 
                                onClick={ () => {
                                    if(confirm("Are you sure to delete this?")){
                                        deleteMedia(image.id)
                                    }
                                }}
                            >
                                <svg>
                                    <path fill="none" stroke="currentColor" strokeWidth="2" d="M7,7 L17,17 M7,17 L17,7"/>
                                </svg>
                            </button>
                            <img className="block w-full h-full object-cover object-center hover:scale-110 hover:rotate-3 transition" src={image.path} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
