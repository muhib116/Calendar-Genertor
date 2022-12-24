import React, { useEffect, useContext } from 'react'
import calendarContext from "@/context/calendarContext"
import useTextConfig from '@/Components/useTextConfig.js'

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
            <label className='grid gap-2'>
                <span className="font-semibold">Title</span>
                <input 
                    type='text' 
                    name='title'
                    value={
                        calendarImages.find(item => {
                            return (item.name == getPageName()) && item
                        }).text.title
                    }
                    onInput={ handleInput } 
                    className='bg-transparent rounded border border-gray-400 border-opacity-50 px-4 py-2' 
                    placeholder='Enter your title' 
                />
            </label>

            <div className="flex gap-4 items-center">
                <label className='flex items-center gap-2'>
                    <span className="font-semibold">Text Color</span>
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
                <label className='flex items-center gap-2'>
                    <span className="font-semibold">Background</span>
                    <input 
                        type='color' 
                        name='backgroundColor'
                        value={
                            calendarImages.find(item => {
                                return (item.name == getPageName()) && item
                            }).text.style.backgroundColor
                        }
                        onInput={ handleInput } 
                        className='bg-transparent rounded border border-gray-400 border-opacity-50 px-1' 
                        placeholder='Enter your title' 
                    />
                </label>
            </div>

            <span className="font-semibold">Padding</span>
            <div className="flex gap-4 items-center">
                <label className='grid items-center gap-2'>
                    <span className="text-xs">Top</span>
                    <input 
                        type='number' 
                        name='paddingTop' 
                        value={
                            calendarImages.find(item => {
                                return (item.name == getPageName()) && item
                            }).text.style.paddingTop
                        }
                        min='0' 
                        onInput={ handleInput } 
                        className='bg-transparent rounded border w-16 border-gray-400 border-opacity-50 py-0 px-1'
                    />
                </label>
                <label className='grid items-center gap-2'>
                    <span className="text-xs">Right</span>
                    <input 
                        type='number' 
                        name='paddingRight' 
                        value={
                            calendarImages.find(item => {
                                return (item.name == getPageName()) && item
                            }).text.style.paddingRight
                        }
                        min='0' 
                        onInput={ handleInput } 
                        className='bg-transparent rounded border w-16 border-gray-400 border-opacity-50 py-0 px-1'
                    />
                </label>
                <label className='grid items-center gap-2'>
                    <span className="text-xs">Bottom</span>
                    <input 
                        type='number' 
                        name='paddingBottom' 
                        value={
                            calendarImages.find(item => {
                                return (item.name == getPageName()) && item
                            }).text.style.paddingBottom
                        }
                        min='0' 
                        onInput={ handleInput } 
                        className='bg-transparent rounded border w-16 border-gray-400 border-opacity-50 py-0 px-1' 
                    />
                </label>
                <label className='grid items-center gap-2'>
                    <span className="text-xs">Left</span>
                    <input 
                        type='number' 
                        name='paddingLeft' 
                        value={
                            calendarImages.find(item => {
                                return (item.name == getPageName()) && item
                            }).text.style.paddingLeft
                        }
                        min='0' 
                        onInput={ handleInput } 
                        className='bg-transparent rounded border w-16 border-gray-400 border-opacity-50 py-0 px-1' 
                    />
                </label>
            </div>


            <label className='grid items-center gap-2'>
                <span className="font-semibold">Opacity</span>
                <input 
                    type='range' 
                    name='opacity' 
                    value={
                        calendarImages.find(item => {
                            return (item.name == getPageName()) && item
                        }).text.style.opacity
                    }
                    onInput={ handleInput } 
                    min='0' 
                    max='1' 
                    step='any' 
                    className='bg-transparent rounded border border-gray-400 border-opacity-50 px-4' 
                />
            </label>

            <label className='grid items-center gap-2'>
                <span className="font-semibold">Top Position</span>
                <input 
                    type='number' 
                    name='top' 
                    value={
                        calendarImages.find(item => {
                            return (item.name == getPageName()) && item
                        }).text.style.top
                    }
                    onInput={ handleInput } 
                    className='bg-transparent rounded border border-gray-400 border-opacity-50 px-4' 
                />
            </label>

            <label className='grid items-center gap-2'>
                <span className="font-semibold">Text Align</span>
                <select 
                    name='textAlign' 
                    value={
                        calendarImages.find(item => {
                            return (item.name == getPageName()) && item
                        }).text.style.textAlign
                    }
                    onInput={ handleInput } 
                    className='bg-transparent rounded border border-gray-400 border-opacity-50 px-4'
                >
                    <option value={null}>-select-</option>
                    <option value="left">Left</option>
                    <option value="center">Center</option>
                    <option value="right">Right</option>
                </select>
            </label>

            <label className='grid items-center gap-2'>
                <span className="font-semibold">Font Size</span>
                <input 
                    type='number' 
                    name='fontSize' 
                    value={
                        calendarImages.find(item => {
                            return (item.name == getPageName()) && item
                        }).text.style.fontSize
                    }
                    onInput={ handleInput } 
                    min='16' 
                    className='bg-transparent rounded border border-gray-400 border-opacity-50 px-4' 
                    placeholder='Font size in px' 
                />
            </label>

            <label className='grid items-center gap-2'>
                <span className="font-semibold">Font Weight</span>
                <select 
                    name='fontWeight' 
                    value={
                        calendarImages.find(item => {
                            return (item.name == getPageName()) && item
                        }).text.style.fontWeight
                    }
                    onInput={ handleInput } 
                    className='bg-transparent rounded border border-gray-400 border-opacity-50 px-4'
                >
                    <option value={null}>-select-</option>
                    <option value="400">400</option>
                    <option value="500">500</option>
                    <option value="600">600</option>
                    <option value="700">700</option>
                    <option value="800">800</option>
                    <option value="900">900</option>
                </select>
            </label>

            {/* <label className='grid items-center gap-2'>
                <span className="font-semibold">Font Weight</span>
                <select className='bg-transparent rounded border border-gray-400 border-opacity-50 px-4'>
                    <option value={null}>-select-</option>
                    <option value="400">400</option>
                </select>
            </label> */}
            
        </div>
    )
}
