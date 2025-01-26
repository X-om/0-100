import { useEffect, useState } from "react"

export const useDebounce = (inputValue,timeout) => {
    
    const [debounceValue,setDebounceValue] = useState();

    useEffect(()=>{
        const timer = setTimeout(()=>{
            setDebounceValue(inputValue);

        },timeout);

        return () => clearTimeout(timer);
    },[inputValue])

    return debounceValue;
}