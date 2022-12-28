import React, { useEffect, useContext } from 'react'
import calendarContext from "@/context/calendarContext"
import useTextConfig from '@/Components/useTextConfig.js'
import InputFontSize from './InputFontSize'

export default function TextConfig() {
    const { 
        calendarImages
    } = useContext(calendarContext)
    const { handleText, getPageName } = useTextConfig()
    
    const handleInput = (e) => {
        let target = e.target
        handleText(target)
    }

    return (
        <div className='grid gap-3'>
            <div className="flex gap-4">
                <label className='flex items-center gap-2'>
                    {/* <span className="font-semibold">Text Color</span> */}
                    <input 
                        type='color' 
                        name='color'
                        value={
                            calendarImages.find(item => {
                                return (item.name == getPageName()) && item
                            }).text.style.color
                        }
                        onInput={ handleInput } 
                        className='bg-transparent rounded border border-gray-400 border-opacity-50 px-1' 
                        placeholder='Enter your title' 
                    />
                </label>

                <label className='grid items-center gap-2'>
                    {/* <span className="font-semibold">Text Align</span> */}
                    <select 
                        name='textAlign' 
                        value={
                            calendarImages.find(item => {
                                return (item.name == getPageName()) && item
                            }).text.style.textAlign
                        }
                        onInput={ handleInput } 
                        className='bg-transparent rounded border border-gray-400 border-opacity-50 px-3 py-0 w-[100px]'
                    >
                        <option value={null}>-select-</option>
                        <option value="left">Left</option>
                        <option value="center">Center</option>
                        <option value="right">Right</option>
                    </select>
                </label>

                <label className='grid items-center gap-2'>
                    {/* <span className="font-semibold">Font Size</span> */}
                    <InputFontSize />
                </label>
            </div>




            <div className="grid grid-cols-2 gap-4">
                <label className='grid items-center gap-2'>
                    <span className="font-semibold text-sm">Font Weight</span>
                    <select 
                        name='fontWeight' 
                        value={
                            calendarImages.find(item => {
                                return (item.name == getPageName()) && item
                            }).text.style.fontWeight
                        }
                        onInput={ handleInput } 
                        className='bg-transparent rounded border border-gray-400 border-opacity-50 px-4 py-0 text-sm'
                    >
                        <option selected value={null}>-select-</option>
                        <option value="400">400</option>
                        <option value="500">500</option>
                        <option value="600">600</option>
                        <option value="700">700</option>
                        <option value="800">800</option>
                        <option value="900">900</option>
                    </select>
                </label>

                <label className='grid items-center gap-2'>
                    <span className="font-semibold text-sm">Text Decoration</span>
                    <select 
                        name='textDecoration' 
                        value={
                            calendarImages.find(item => {
                                return (item.name == getPageName()) && item
                            }).text.style.textDecoration
                        } 
                        onInput={ handleInput } 
                        className='bg-transparent rounded border border-gray-400 border-opacity-50 px-4 py-0 text-sm'
                    >
                        <option value={ null }>-select-</option>
                        <option value="none">None</option>
                        <option value="underline">Under Line</option>
                        <option value="overline">Over Line</option>
                    </select>
                </label>
            </div>

            
        </div>
    )
}
