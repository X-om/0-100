import { useState } from "react"

function App() {
  const [todos , setTodo] = useState([
    { title : "Todo 1", descreption : "new descreption", completed : false },
    { title : "Todo 2", descreption : "new descreption", completed : false }
  ]);

  return (
    
   <div>
    <button onClick={function (){
        setTodo([...todos,{
          title : "new Todo",
          descreption : "new descreption",
          completed : false
        }])
    }}>Add To Do</button>

      {
        todos.map(function (todo){
          return <Todo title = {todo.title} descreption = {todo.descreption}/>
        })
      }
   </div> 
  )
  
  
}

function Todo(props){

  return (
    <div>
      <h1>{props.title}</h1>
      <h3>{props.descreption}</h3>
    </div>
  )
}

export default App
