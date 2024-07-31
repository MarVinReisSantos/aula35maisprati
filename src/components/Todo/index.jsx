import { useState } from 'react'
import './style.css'

function Todo() {
  const [todos, setTodos] = useState([])
  const [inputValue, setInputValue] = useState([])

  const addTodo = () =>{
    setTodos([... todos, inputValue])
    setInputValue('')
  }

  return (
    <div>
      <input type="text" value={inputValue} onChange={(e) => setInputValue}/>
      <button onClick={addTodo}>Adicionar Tarefa</button>

      <ul>
        {todos.map((todo, index) =>(
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  )
}

export default Todo
