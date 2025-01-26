import { useState } from "react"
import { useDebounce } from "../hooks/useDebounce";

export const SearchBar = () => {
    const [filter,setFilter] = useState();
    const debounceValue = useDebounce(filter,500);
    return <div>
        <input
            placeholder="Type something here"
            type="text"
            onChange={(e)=>{
                setFilter(e.target.value);
            }}
        />
        <br/>
        <br/>
        <br/>
        <br/>

        <h1>{debounceValue}</h1>
    </div>
}