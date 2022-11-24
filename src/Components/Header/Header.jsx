import React from 'react'
import { BrightnessLowFill } from "react-bootstrap-icons"
import { MoonFill } from "react-bootstrap-icons"

function Header() {
    return (
        <div className='py-5'>
            <div className="text-2xl md:text-4xl text-white flex justify-between mb-9">
                <h3 className='font-extrabold items-center'>TODO</h3>
                <BrightnessLowFill className="cursor-pointer hidden" />
                <MoonFill className="cursor-pointer md:text-3xl" />
            </div>
            <input type="text" className='w-full h-11 px-3 py-8 rounded-lg outline-blue-500 text-lg md:text-xl text-gray-700' placeholder='Create a new todo...' />
        </div>
    )
}

export default Header