import React from 'react'
import { Check } from "react-bootstrap-icons"
import { XLg } from "react-bootstrap-icons"

function TodoList({ todo, setTodo }) {

    return (
        <div className='bg-white dark:bg-input-dark rounded-lg shadow-lg shadow-light-shadow dark:shadow-dark-shadow'>
            {todo.map((myTodo, index) => (
                <div key={`${myTodo}-${index}`} className="todo py-5 border-b-2 dark:border-text-dark my-todo">
                    <div className="px-3 flex justify-between items-center">
                        <div className='flex items-center'>
                            <Check className='check-btn' />
                            <p className='text-text-dark dark:text-text-light md:text-lg pl-5 transition ease-in-out duration-400'>{myTodo.charAt(0).toUpperCase() + myTodo.slice(1)}</p>
                        </div>
                        <XLg className='clear-btn' />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default TodoList