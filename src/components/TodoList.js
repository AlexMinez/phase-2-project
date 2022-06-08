import React from 'react'
import '../assets/Todostyles.css'
import UpdatingTodos from './UpdatingTodos';

function TodoList(props) {
  const {todos, removeTodo, patchTodo} = props;




  return (
    <div >
        <ul>
            {todos.map((todo,id) => <li className='render-li'key={id}>{todo.firstTodo}
            <button className="delete-btn"onClick={() => removeTodo(todo.id)}>Delete</button>

            <UpdatingTodos todo={todo} patchTodo={patchTodo}/>
            
            </li>)}
        </ul>
    </div>
  )
}

export default TodoList