

export function getTodos() {
    return fetch('http://localhost:4000/todo')
    .then(res => res.json())
    .then(data => data)
  }
  export function addTodos(todo){
    return fetch('http://localhost:4000/todo' , {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(todo)
    }).then(res => res.json())
    .then(data => data)
  }
  
  export function deleteTodos(id) {
    return fetch(`http://localhost:4000/todo/${id}` , {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .then(data => data)
  }