import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {removeTodo} from '../features/todo/todoSlice'

function Todos() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

  return (
    <div className="max-w-4xl mx-auto mt-16 px-4">
      {/* Formal Header with subtle accent */}
      <h2 className="text-3xl font-extralight tracking-tight text-zinc-100 mb-8 border-b border-zinc-800 pb-4">
        Active Project <span className="font-semibold text-emerald-500">Deliverables</span>
      </h2>
      
      <ul className="list-none space-y-4">
          {todos.map((todo) => (
            <li
              // Key changes: Precise spacing, cleaner background (zinc-950/60), subtle hover effect
              className="flex justify-between items-center bg-zinc-950/60 border border-zinc-900/60 p-5 rounded-sm shadow-inner transition hover:border-emerald-900/40 hover:bg-zinc-950/80"
              key={todo.id}
            >
              <div className='text-zinc-200 text-sm font-medium tracking-wide'>
                {todo.text}
              </div>
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                // Key changes: Minimal, professional, formal remove button with subtle red hover
                className="text-zinc-600 bg-transparent hover:text-red-400 p-2 rounded-full transition-colors duration-300 group"
                aria-label="Remove item" // Accessibility
              >
                {/* SVG is simplified and colored to be professional */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  // Key changes: Smaller size, more precise look
                  className="w-5 h-5 opacity-60 group-hover:opacity-100"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </button>
            </li>
          ))}
      </ul>
    </div>
  )
}

export default Todos