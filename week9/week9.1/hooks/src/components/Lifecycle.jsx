import React, { useEffect, useState } from "react"

export const Lifecycle = () => {
    useEffect(()=>{
        console.error("component mounted"); 

        return () => {
            console.log("component unmounted");  // this is clean up code for useEffect it is like a cleanUp function for repective useEffect
        }
    },[])

    return (
        <div>
            From inside the Lifecycle component
        </div>
    )
}


export const Lifecycle2 = () =>{

    const [count, setCount] = useState(0);
    
    useEffect(()=>{
        console.log("Component mounted for count " , count);

        return () => {
            console.error("Component is unmounting for count = ",count);
        }
    },[count])


    return (
        <>
            <p>{count}</p>
            <button onClick={()=>{
                setCount(prev => prev + 1);
            }}>count ++</button>
        </>
    )
}

export class ClassLifecycle extends React.Component{

    componentDidMount(){
        console.error("class base component mounted");
    }

    componentWillUnmount(){
        console.log("class base component unmounted");
    }

    render(){
        return (
            <>
                Hello There
            </>
        )
    }

}