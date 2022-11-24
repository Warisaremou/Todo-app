import React from 'react'
import { Check } from "react-bootstrap-icons"
// import { Home } from "react-bootstrap-icons"

function TodoList() {
    return (
        <div className='bg-white rounded-lg shadow-lg'>
            <div className="todo py-5 border-b-2">
                <div className="px-3 flex justify-between items-center">
                    <div className='flex items-center'>
                        <Check className='check-btn' />
                        <p className='text-gray-700 md:text-lg pl-5'>Complete online JavaScript course</p>
                    </div>
                    <Check className='clear-btn' />
                </div>
            </div>
            <div className="todo py-5 border-b-2">
                <div className="px-3 flex justify-between items-center">
                    <div className='flex items-center'>
                        <Check className='check-btn' />
                        <p className='text-gray-700 md:text-lg pl-5'>Jog around the park 3x</p>
                    </div>
                    <Check className='clear-btn' />
                </div>
            </div>
        </div>
    )
}

export default TodoList