import {useState, useEffect, useMemo, memo, useCallback} from "react"
import axios from "axios";

// function App() {
//   const [value , setValue] = useState(0);
//   return (
//   <div>
//       <button onClick={()=>setValue(1)}>1</button>

//       <button onClick={()=>setValue(2)}>2</button>
      
//       <button onClick={()=>setValue(3)}>3</button>

//       <button onClick={()=>setValue(4)}>4</button>
      
//       <button onClick={()=>setValue(5)}>5</button>

//       <Todo id={value}/>

//   </div>
//   )
  
// }

// function Todo({id}){

//   const [todo , setTodo] = useState({});

//   useEffect(()=>{
//     axios.get(`http://localhost:8000/todos?id=${id}`)
//       .then(function (response){
//         setTodo(response.data);
//       }) 
//   },[id])
 
//   return(
//     <div>
//       <h1>{todo.title}</h1>
//       <h3>{todo.description}</h3>
//       <br/>
//     </div>
//   )
//}


// useMemo()



// function App(){
//   const [count, setCount] = useState(0);
//   const [inputValue, setInputValue] = useState(0);

//   let fact = useMemo(()=>{
//     console.log('running for ' , inputValue);
//     let count = 0;
//     for(let i = 1; i <= inputValue; i++){
//       count+=i;
//     }
//     return count;
//   }, [inputValue])
  
//   return (
//     <div>
//       <input onChange={(e)=>{
//         setInputValue(e.target.value)
//       }} placeholder="Enter the value to calculate factorial"/>
//       <br/>
//       sum from 1 to {inputValue} is {fact}
//       <br/>
//       <button onClick={()=>{
//         setCount(count + 1);
//       }}>count {count}</button>
//     </div>
//   )
// }


// useCallback()


// function App(){

//   const [count,setCount] = useState(0);
//   const [run,setRun] = useState(0);

//   const inputValue = useCallback(()=>{
//     console.log("Hello from inputValue");
//   },[]);


//   return (
//     <div>
//       <ButtonComponent inputFunction={inputValue} run={run} setRun={setRun}/>
//       <button onClick={()=>{
//         setCount(count + 1);
//       }}>count {count}</button>
//     </div>
//   )
// }

// const ButtonComponent = memo(({inputFunction,run,setRun})=>{
//   inputFunction();
//   return (
//       <div>
//         <button
//         onClick={()=>{
//           setRun(run + 1);
//         }}
//         >run input function again</button>
//       </div>
//     )
// })



// custome Hooks 

function useTodos(){
  const [todos , setTodos] = useState([]);
  useEffect(()=>{
    axios.get('http://localhost:8000/todos')
    .then(async function(response){
        const Todo = await response.data;
        setTodos(Todo);
    })
    .catch((error)=>{
      console.log(`error fetching todos ${error}`);
    })
  },[])

  return [todos , setTodos];
}
function App(){

  const [count, setCount] = useState(0);
  const [todos, setTodos] = useTodos();


  
  return (
    <div>
        <button onClick={()=>{
          setCount(count+1);
        }}>count {count}</button>
        <br/><br/><br/>

        <ul>
          {todos.map((todo)=>(
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
    </div>
  )



}



export default App
