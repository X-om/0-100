import { useCallback, useEffect, useRef } from "react"

export function Assignment1(){
    
    const inputRef = useRef();

    useEffect(()=>{
        inputRef.current.focus();
    },[inputRef])

    const handleFocus = useCallback(()=>{
        inputRef.current.value = "";
        inputRef.current.focus();
    }, [])

    return (
        <div>
            <input ref={inputRef} type="text" placeholder="Enter something here"></input>
            <br/><br/>
            <button onClick={handleFocus}>focus</button>
        </div>
        
    )
}