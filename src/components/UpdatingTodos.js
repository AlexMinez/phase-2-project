import React, { useState } from 'react'

function UpdatingTodos(props) {

    const{todo , patchTodo} = props;

const [newTodo, SetNewTodo] = useState(todo.firstTodo)

const handleChange = (e) => {
    SetNewTodo(e.target.value)
}

  return (
    <div>
        <input type='text' value={newTodo} onChange={handleChange}></input>
        <button onClick={() => patchTodo({
            id:todo.id,
            firstTodo: newTodo
        })}>update</button>
    </div>
  )
}

export default UpdatingTodos