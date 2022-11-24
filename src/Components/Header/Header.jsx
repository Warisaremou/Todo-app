import React from 'react'
import { BrightnessLowFill } from "react-bootstrap-icons"
import { MoonFill } from "react-bootstrap-icons"

function Header({ inputValue, setInputValue, setTodo }) {

    function keyPressed(e) {
        if (e.keyCode === 13) {
            console.log(inputValue)
            setTodo(currentInput => [...currentInput, inputValue])
            setInputValue('')
        }
    }

    return (
        <div className='py-5'>
            <div className="text-2xl md:text-4xl text-white flex justify-between mb-9">
                <h3 className='font-extrabold items-center'>TODO</h3>
                <BrightnessLowFill className="cursor-pointer hidden" />
                <MoonFill className="cursor-pointer md:text-3xl" />
            </div>
            <input type="text" value={inputValue} className='todo-input' placeholder='Create a new todo...' onChange={(e) => setInputValue(e.target.value)} onKeyDown={keyPressed} />
        </div>
    )
}

export default Header