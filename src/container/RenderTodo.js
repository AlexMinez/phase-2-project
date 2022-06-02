import React , {useState, useEffect} from 'react'
import '../assets/Todostyles.css'
import { addTodos, deleteTodos, getTodos } from './Fetchdb'
import TodoForm from '../components/TodoForm'
import TodoList from '../components/TodoList'



function RenderTodo() {

    const [todos , setTodos] = useState([])

//calling the Getodos fetch and setting setTodos to the data we have fetched 
useEffect(() => {
    getTodos()
    .then(todos => setTodos(todos))
},[])


// Adding a todo item / creating a copy of todos and adding the data to the setTodos
const newTodo = (todo) => {
     addTodos(todo)
    .then(data => {
        setTodos([...todos,data])   
    })
    
    
}
//Removing a todo item / filtering through the todos to check if the id is not equal
const removeTodo = (id) => {
    return deleteTodos(id)
    .then(() => {
        setTodos(todos.filter(todo => todo.id !== id))
    })
}

  return (
    <div className='render-div'>
        <h1>Todo List!</h1>
        <TodoForm newTodo={newTodo} />

        <TodoList setTodos={setTodos} todos={todos} removeTodo={removeTodo} />
    </div>
  )
}

export default RenderTodo