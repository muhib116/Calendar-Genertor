import React, { useEffect, useContext, useState } from 'react'
import calendarContext from "@/context/calendarContext"
import useTextConfig from '@/Components/useTextConfig.js'
import InputFontSize from './InputFontSize'
import useFont from '@/Components/useFont.js'
import { cloneDeep } from 'lodash'

export default function TextConfig() {
    const { 
        calendarImages
    } = useContext(calendarContext)
    const { handleText, getPageName, handleFontFamily } = useTextConfig()
    
    const handleInput = (e) => {
        let target = e.target
        handleText(target)
    }

    
    const { fonts } = useFont()
    const [FilteredFont, setFilteredFont] = useState(cloneDeep(fonts))
    const handleFilter = (e) => {
        let target = e.target
        setFilteredFont(() => {
            let res = fonts.filter(font => font.title.toLowerCase().indexOf(target.value.toLowerCase())>=0)
            return res
        })
    }
    const makeFontSelected = (title, FilteredFont) => {
        FilteredFont.forEach(item => item.isSelected = item.title == title)
    }

    const [ShowFont, setShowFont] = useState(false)

    return (
        <div className='grid gap-3 py-4'>
            <div className="grid grid-cols-2 gap-4">
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
                        className='bg-transparent rounded border border-gray-400 border-opacity-50 px-1 w-[80px] ml-6' 
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
                        className='bg-transparent rounded border border-gray-400 border-opacity-50 px-3 py-0'
                    >
                        <option value={null}>-select-</option>
                        <option value="left">Left</option>
                        <option value="center">Center</option>
                        <option value="right">Right</option>
                    </select>
                </label>
            </div>


            <div className="grid grid-cols-2 gap-4">
                <label className='grid items-center gap-2'>
                    {/* <span className="font-semibold">Font Size</span> */}
                    <InputFontSize />
                </label>
                <label className='grid items-center gap-2'>
                    {/* <span className="font-semibold text-sm">Text Decoration</span> */}
                    <select 
                        name='textDecoration' 
                        value={
                            calendarImages.find(item => {
                                return (item.name == getPageName()) && item
                            }).text.style.textDecoration
                        } 
                        onInput={ handleInput } 
                        className='bg-transparent rounded border border-gray-400 border-opacity-50 px-4 py-1 text-sm'
                    >
                        <option value={ null }>-select-</option>
                        <option value="none">None</option>
                        <option value="underline">Under Line</option>
                        <option value="overline">Over Line</option>
                    </select>
                </label>
            </div>
            


            {/* fonts start */}
            <div className='grid items-center gap-2 mt-4'>
                <span onClick={ () => setShowFont((prev) => !prev) } className="font-semibold text-sm border px-4 py-2 flex justify-between items-center cursor-pointer">
                    Select Font
                    <svg className='w-4 h-4' width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M4.219 10.781 2.78 12.22l12.5 12.5.719.687.719-.687 12.5-12.5-1.438-1.438L16 22.562Z"/></svg>
                </span>
                
                {
                    ShowFont && 
                    <div className="fonts_wrapper" >
                        <div className="search">
                            <input type="search" onInput={ handleFilter } placeholder='Search' className='py-1 px-4 block w-full border border-gray-200 mb-4' />
                        </div>
                        <div className="body h-[680px] overflow-y-auto">
                            {
                                FilteredFont.map(font => (
                                    font.fontWeight.map(weight => (
                                        <div 
                                            key={ font.title+'-'+weight } 
                                            style={{ fontFamily: font.fontFamily, fontWeight: weight }}
                                            className={[
                                                'px-4 py-2 border -mb-[1px] hover:bg-gray-100 cursor-pointer text-2xl',
                                                font.isSelected && 'bg-gray-100'
                                            ].join(' ')}
                                            onClick={() => {
                                                handleFontFamily(font.fontFamily, weight)
                                                makeFontSelected(font.title, FilteredFont)
                                            }}
                                        >
                                            { font.title }
                                        </div>
                                    ))
                                ))
                            }
                        </div>
                    </div>
                }
            </div>
            
        </div>
    )
}
