import React, { useEffect } from 'react'
import { useState } from 'react'

import './App.css'
import { ClassLifecycle, Lifecycle, Lifecycle2 } from './components/Lifecycle'
import CustomHooks from './components/CustomHooks';
import { CustomHooks2 } from './components/CustomHooks2';
import { CustomHooks3 } from './components/CustomHooks3';
import { CustomHooks4 } from './components/CustomHooks4';
import { CustomHooks5 } from './components/CustomHooks5';
import { SearchBar } from './components/SearchBar';

function App() {
  const [render,setRender] = useState(true);

  useEffect(()=>{ 
    const timer = setTimeout(()=> setRender(false) , 10000);
    return () => clearTimeout(timer);
  },[])

  return (
    <>
      {/* <Mycomponent/> */}
      {/* <Lifecycle/> */}
      {/* {render && <><Lifecycle2/></> } */}
      {/* {render && <ClassLifecycle/> } */}
      {/* <CustomHooks/> */}
      {/* <CustomHooks2/> */}
      {/* <CustomHooks3/>  */}
      {/* <CustomHooks4/>  */}
      {/* <CustomHooks5/> */}
      <SearchBar/>
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
 