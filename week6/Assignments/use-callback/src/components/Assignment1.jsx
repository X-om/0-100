import { memo, useCallback, useState } from "react";

export function Assignment1(){
    const [count,setCount] = useState(0);

    const handleIncrement = useCallback(()=>{
        setCount((count) => {return count + 1});
    },[])

    const handleDecrement = useCallback(()=>{
        setCount((count) => {return count - 1});
    },[])

    return(
        <div>
            <h1>count {count}</h1>
            <ButtonComponent onIncrement={handleIncrement} onDecrement={handleDecrement}/>
        </div>
    )
}

const ButtonComponent = memo(({onIncrement , onDecrement}) => {
    console.log('component mounts')
    return(
        <div>
            <button onClick={onIncrement}>increment</button>
            <button onClick={onDecrement}>decrement</button>
        </div>
    )
})