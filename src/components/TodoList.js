import React from 'react'
import '../assets/Todostyles.css'

function TodoList(props) {


const {todos, removeTodo} = props;


  return (
    <div >
        <ul>
            {todos.map((todo,id) => <li className='render-li'key={id}>{todo.firstTodo}
            <button className="delete-btn"onClick={() => removeTodo(todo.id)}>Delete</button>
            </li>)}
        </ul>
    </div>
  )
}

export default TodoList