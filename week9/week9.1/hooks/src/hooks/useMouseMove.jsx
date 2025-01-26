import { useEffect, useState } from "react"

export const useMouseMove = () => {
    const [position, setPosition] = useState({
        x : 0,
        y : 0
    });

    const handleMpuseMove = (e) => {
            setPosition({
                x : e.clientX,
                y : e.clientY
            })
    }

    useEffect(()=>{
        window.addEventListener("mousemove", handleMpuseMove);
        return ()=>{
            window.removeEventListener("mousemove", handleMpuseMove);
        }
    });
    
    return position;
}