import { useMouseMove } from "../hooks/useMouseMove"

export const CustomHooks3 = () => {
    const position = useMouseMove();

    return (
        <>
            <div>
                <h1>You'r mouse position is </h1>
                <h2>X = {position.x}</h2>
                <h2>Y = {position.y}</h2>
            </div>
        </>
    )
}