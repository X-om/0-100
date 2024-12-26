import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { todoAtomFamily } from "../store/atom";
import { memo, useEffect, useState } from "react";

export default function AtomFamily() {
    const [id, setId] = useState(0);
    const [count, setCount] = useState(0);

    return (
        <div>
            <input
                onChange={(e) => setId(Number(e.target.value))}
                type="number"
                placeholder="Enter ID"
            />
            <RecoilRoot>
                <UpdateTodoDescription id={id} />
                <Todo id={1}/>
                <Todo id={2}/>
                <Todo id={2}/>
                <Todo id={2}/>
                <Todo id={2}/>
                <Todo id={2}/>
                <button onClick={() => setCount((c) => c + 1)}>Count {count}</button>
            </RecoilRoot>
        </div>
    );
}

const Todo = memo(({ id }) => {
    console.log("Todo rendered for ID:", id);
    const todo = useRecoilValue(todoAtomFamily(id));

    return (
        <div style={{ backgroundColor: "black", borderRadius: "10px", padding: "10px", margin: "10px" }}>
            <h5>{todo.title}</h5>
            <h5>{todo.description}</h5>
            <br />
        </div>
    );
});

const UpdateTodoDescription = memo(({ id }) => {
    console.log("UpdateTodoDescription ran with id:", id);

    const updateTodoDes = useSetRecoilState(todoAtomFamily(id));
    
    useEffect(() => {
        if (!id) return; 

        const timer = setTimeout(() => {
            updateTodoDes((prev) => ({
                ...prev,
                description: `Updated description for ID ${id}`,
            }));
        }, 5000);

        return () => clearTimeout(timer); 
    }, [id, updateTodoDes]);

    return <div></div>;
});
