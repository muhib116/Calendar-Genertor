import React, { useEffect, useState } from 'react'
import useTextConfig from '@/Components/useTextConfig.js'

export default function TextConfig() {
    const { handleText } = useTextConfig()
    
    const handleInput = (e) => {
        let target = e.target
        handleText(target)
    }


    return (
        <div className='grid gap-3'>
            <label className='grid gap-2'>
                <span className="font-semibold">Title</span>
                <input type='text' name='title' onInput={ handleInput } className='bg-transparent rounded border border-gray-400 border-opacity-50 px-4 py-2' placeholder='Enter your title' />
            </label>

            <div className="flex gap-4 items-center">
                <label className='flex items-center gap-2'>
                    <span className="font-semibold">Text Color</span>
                    <input type='color' name='color' onInput={ handleInput } className='bg-transparent rounded border border-gray-400 border-opacity-50 px-1' placeholder='Enter your title' />
                </label>
                <label className='flex items-center gap-2'>
                    <span className="font-semibold">Background</span>
                    <input type='color' name='backgroundColor' onInput={ handleInput } className='bg-transparent rounded border border-gray-400 border-opacity-50 px-1' placeholder='Enter your title' />
                </label>
            </div>

            <label className='grid items-center gap-2'>
                <span className="font-semibold">Text Align</span>
                <select name='textAlign' onInput={ handleInput } className='bg-transparent rounded border border-gray-400 border-opacity-50 px-4'>
                    <option value={null}>-select-</option>
                    <option value="left">Left</option>
                    <option value="center">Center</option>
                    <option value="right">Right</option>
                </select>
            </label>
            <label className='grid items-center gap-2'>
                <span className="font-semibold">Font Size</span>
                <input type='number' name='fontSize' onInput={ handleInput } min='16' className='bg-transparent rounded border border-gray-400 border-opacity-50 px-4' placeholder='Font size in px' />
            </label>

            <label className='grid items-center gap-2'>
                <span className="font-semibold">Font Weight</span>
                <select name='fontWeight' onInput={ handleInput } className='bg-transparent rounded border border-gray-400 border-opacity-50 px-4'>
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
