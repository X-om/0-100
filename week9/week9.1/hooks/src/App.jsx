import React from 'react'
import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Mycomponent/>
    </>
  )
}

// const Mycomponent = () =>{

//   const [count,setCount] = useState(0);

//   const increment = () => {
//     setCount(count + 1);
//   }

//   return(
//     <div>
//         <p>{count}</p>
//         <button onClick={increment}>Increment</button>
//     </div>
//   )
// }


// class base component

class Mycomponent extends React.Component{
  constructor(props){
    super(props);
    this.state = { count : 0}
  }

  increment = () => {
    this.setState({ count : this.state.count + 1})
  }

  render() {
    return <div>
        <p>{this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
    </div>
  }
}


export default App
 