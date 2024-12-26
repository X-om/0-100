import { useEffect } from "react";
import { useMemo, useState } from "react";


export function Assignment1(){

    const [input,setInput] = useState();
    const [count,setCount] = useState(0);

    let expemsiveValue = useMemo(()=>{
        console.log('expensive loop starts');
        let f = 1;
        for(let i = 1; i <= input; i++){
            f *= i;
        }
        return f;
    }, [input]);


    return (
        <div>
            <input
                type="number"
                value={input}
                onChange={(e)=>{setInput(e.target.value)}}
            ></input>
            <p>expensive value {expemsiveValue}</p>

            <button onClick={()=>{
                setCount(count + 1);
            }}>count {count}</button>
        </div>
    )

}