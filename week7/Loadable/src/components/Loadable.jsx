import { memo } from "react";
import { RecoilRoot, useRecoilValueLoadable } from "recoil";
import { todoAtomFamily } from "../store/atoms";

export default function Loadable(){
    return <div>
        <RecoilRoot>
            <MainLodable/>
        </RecoilRoot>       
    </div>
}

function MainLodable(){
    return (
        <div>
            <Todo id={1}/>
            <Todo id={2}/>
        </div>
    )
}

const Todo = memo(({id})=>{

    const todo = useRecoilValueLoadable(todoAtomFamily(id));
    
    if(todo.state == 'loading'){
       return <div>
            <Loading/>
       </div>
    } else if (todo.state === 'hasValue'){
        return <div>
            <DisplayValue todo={todo}/>
        </div>
    } else{
        return <div>
            <ShowError/>
        </div>
        
    }
}) 

function Loading(){
    return (
        <div>
            <h1>Loading...</h1>
        </div>
    )
}

function DisplayValue({todo}){
    return(
        <div>
            <h1>id : {todo.contents.id}</h1>
            <h2>titile : {todo.contents.title}</h2>
            <h3>description : {todo.contents.description}</h3>
        </div>
    )
}

function ShowError(){
    return <div>
        <b>Error while getting data from backend</b>
    </div>
}



