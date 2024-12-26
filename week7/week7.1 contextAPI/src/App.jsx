import { useContext, useState } from "react"
import { CountContext } from "./context";

function App() {
  const [count , setCount] = useState(0);
  return (
    <div>
      <CountContext.Provider value={{count , setCount}}>
        <ChildA/>
      </CountContext.Provider>
    </div>
  )
}

function ChildA(){
  return(
    <div>
      <ChildB/>
    </div>
  )
}
function ChildB(){
  return(
    <div>
      <CountRenderer/>
      <Buttons/>
    </div>
  )
}
function CountRenderer(){
  const {count} = useContext(CountContext);
  return(
    <div>
      count {count}
    </div>
  )
}
function Buttons(){
  const {count , setCount} = useContext(CountContext);
  return(
    <div>
        <button onClick={()=>{
            setCount(count + 1);
        }}>increment count</button>
        
        <button onClick={()=>{
            setCount(count - 1);
        }}>decrement count</button>
    </div>
  )
}

export default App
