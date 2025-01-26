import { memo } from "react"
import { useTodo } from "../hooks/useTodo";

export default function CustomHooks() { 
   const {todos,loading} = useTodo();

    if(loading){
        return <div style={{display:"flex",justifyContent:"center",fontSize:"100px"}}>
            loading ....
        </div>
    }
 
    return <div>
        {todos.map((todo,index) => (
            <Todo key={index}  todo={todo}/>
        ))}
    </div>
}


const Todo = memo(({todo})=>{
    return <>
        <div>
            <h1>{todo.id}</h1>
            <h2>{todo.todo}</h2>
            <p>{todo.completed}</p>
            <p>{todo.userId}</p>
        </div>
    </>
})