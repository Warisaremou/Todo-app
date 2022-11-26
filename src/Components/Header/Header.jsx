import React from 'react'
import { BrightnessLowFill } from "react-bootstrap-icons"
import { MoonFill } from "react-bootstrap-icons"

function Header({ inputValue, setInputValue, setTodo, theme, setTheme }) {

    function keyPressed(e) {
        if (e.keyCode === 13) {
            console.log(inputValue)
            setTodo(currentInput => [...currentInput, inputValue])
            setInputValue('')
        }
    }

    const handleThemeSwitch = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return (
        <div className='py-5'>
            <div className="text-2xl md:text-4xl text-white flex justify-between mb-9 items-center">
                <h3 className='font-extrabold tracking-widest'>TODO</h3>
                {theme === 'light' ? (
                    <BrightnessLowFill className="cursor-pointer toogle-btn" onClick={handleThemeSwitch} />
                ) : (
                    <MoonFill className="cursor-pointer md:text-3xl toogle-btn" onClick={handleThemeSwitch} />
                )}
            </div>
            <input type="text" value={inputValue} className='todo-input' placeholder='Create a new todo...' onChange={(e) => setInputValue(e.target.value)} onKeyDown={keyPressed} />
        </div>
    )
}

export default Header