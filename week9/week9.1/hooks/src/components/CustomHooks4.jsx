import { useDimenssions } from "../hooks/useDimenssions"

export const CustomHooks4 = () =>{
    const dimenssions = useDimenssions();

    return <>
        <div>
            <h1>Current width and height</h1>
            <br/><br/>
            <h2>width : {dimenssions.width}</h2>
            <h2>height : {dimenssions.height}</h2>
        </div>
    </>
}