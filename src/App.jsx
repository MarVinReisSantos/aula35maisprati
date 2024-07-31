import { useState } from 'react'
import Todo from './components/Todo/index'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <Todo/>
    </div>
  )
}

export default App
