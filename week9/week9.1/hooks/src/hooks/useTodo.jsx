import { useState,useEffect } from "react"
import axios from "axios";

export const useTodo = (n=5) => {
    const [todos,setTodos] = useState([]);
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
        const interval = setInterval(()=>{
            axios.get("https://dummyjson.com/todos")
            .then((response)=>{
                setTodos(response.data.todos)
                setLoading(false);
            });       
        },1000*n);

        axios.get("https://dummyjson.com/todos")
        .then((response)=>{
            setTodos(response.data.todos)
            setLoading(false);
        });       

        return () => clearInterval(interval);
    },[n]) 

        
    

    return {todos,loading};
}