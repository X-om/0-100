import { useEffect, useState } from "react"

export const useDimenssions = () => {
    const [dimenssions,setDimenssions] = useState({
        width : window.innerWidth,
        height : window.innerHeight
    });

    const handleResize = (e) => {
        setDimenssions({
            width : e.target.innerWidth,
            height : e.target.innerHeight
        })
    }

    useEffect(()=>{
        window.addEventListener("resize", handleResize)

        return () => {window.removeEventListener("resize", handleResize)}
    },[])
    
    return dimenssions
}