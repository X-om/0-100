import { useEffect } from "react"

export const useInterval = (callback,timeout) => {
    useEffect(()=>{
        const interval = setInterval(()=>{callback()},timeout);
        return () => clearInterval(interval);
    },[timeout])
}