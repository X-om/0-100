import axios from "axios"
import { useEffect, useMemo, useState } from "react"
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import { filterAtom, filterSelector, todoAtom } from "../store/atoms/todos"

export default function ShowTodos(){
    const [todos,setTodos] = useRecoilState(todoAtom);

    useEffect(()=>{
        const fetchTodos = () => {
            axios.get('http://localhost:3000/gettodos')
                .then((response)=>{
                    setTodos(response.data);
                })
        }

        fetchTodos();

        const interval = setInterval(fetchTodos,10000);

        return () => clearInterval(interval); 
    },[]);

    
    

    return (
        <div>
            <FilteredTodos/>
        </div>
    )
}

function FilteredTodos(){
    const setFilter = useSetRecoilState(filterAtom);
    const filtered = useRecoilValue(filterSelector);

    return(
        <div>
            <input onChange={(e)=>{
                setFilter(e.target.value);
            }} placeholder="Enter to search : "></input>
            <br/><br/><br/>
            <div style={{backgroundColor:"beige", color:"gray"}}>
                {
                    filtered.map((todo)=>(
                        <div key={todo.id}>
                            <h1>{todo.title}</h1>
                            <h4>{todo.description}</h4>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}