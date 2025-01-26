import { useState } from "react"
import { useInterval } from "../hooks/useInterval";

export const CustomHooks5 = () => {
    const [count,setCount] = useState(0);

    useInterval(()=>{
        setCount(prev => prev + 1);
    },1000);


    return <div>
        <h1>Timer {count}</h1>
    </div>
}