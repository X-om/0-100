import { useRef, useState } from "react";

export function Assignment2(){
    const [,forceRender] = useState();
    
    let numberOfReRenders = useRef(0);
    
    const handleReRender = ()=>{
        forceRender(Math.random());
    }
    numberOfReRenders.current += 1;
    return (
        <div>
            <p>The current value of renders happened is {numberOfReRenders.current}</p>
            <button onClick={handleReRender}>force render</button>
        </div>
    )

    
}