import { useState } from 'react'
import './App.css'
import AddTodo from './components/addtodo'
import Todos from './components/todos'

function App() {
  return (
    <div className="app-container">
      <h1>Syed Abdullah Shah</h1>
      
      <div className="todo-wrapper">
        <AddTodo />
        <Todos />
      </div>
    </div>
  )
}

export default App