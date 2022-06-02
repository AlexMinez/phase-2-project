import React, { useState } from 'react'
import '../assets/Todostyles.css'

const TodoForm = (props) => {
    const {newTodo } = props;

const [todo , setTodo] = useState({
    firstTodo: "",
})

//Creating a copy of todo and adding the target name with the target value of the input
    const onChangeHandler = (e) => {
        setTodo({
            ...todo,
            [e.target.name]: e.target.value
        })
    
    }

// once the submit has been clicked we are preventing the default action and calling the newTodo from Rendertodos and passing in the state.
    const submitHandler = (e) => {
        e.preventDefault();
        newTodo(todo) 
        
    }




  return (
    <div className='render-div-2'>
        <form onSubmit={submitHandler}>
            <input
            name='firstTodo' 
            value={todo.firstTodo}
            onChange={onChangeHandler} 
            type='text'
            className='todo-input'/>
            <button className="add-btn" type='submit'>Add Todo</button>
        </form>
    </div>
  )
}

export default TodoForm