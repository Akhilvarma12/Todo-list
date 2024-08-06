import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import TodoItem from './components/TodoItem'
import Button from './components/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='todo-container'>
    <Header/>
    <TodoItem/>
    <TodoItem/>
    <TodoItem/>
    <TodoItem/>
    <TodoItem/>
    <Button/>
</div>
    </>
  )
}

export default App
