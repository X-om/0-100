import { memo } from "react"
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil"
import { todoAtomFamill2 } from "../store/atom";


export default function SelectorFamily(){
    return <div>
        <RecoilRoot>
            <Todo id={1} />
            <Todo id={2}/>
            <Todo id={2}/>
            <Todo id={2}/>
            <Todo id={3}/>
        </RecoilRoot>
    </div>
}

const Todo = memo(({id})=>{
    const todo = useRecoilValue(todoAtomFamill2(id));

    return <div>
        <h1> id : {todo.id}</h1>
        <h2> title : {todo.title}</h2>
        <h4> description : {todo.description}</h4>
        <br/>
    </div>
})