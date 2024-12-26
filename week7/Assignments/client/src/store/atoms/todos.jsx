import { atom, selector } from "recoil";

export const todoAtom = atom({
    key : "todoAtom",
    default : []
});

export const filterAtom = atom({
    key : "filterAtom",
    default : ""
});

export const todoSelector = selector({
    key : "todoSelector",
    get : ({get})=>{
        const todos = get(todoAtom);
        return todos;
    }
});

export const filterSelector = selector({
    key : "filterSelector",
    get : ({get})=>{
        const todos = get(todoAtom);
        const filtered = get(filterAtom);

        if(!filtered) return todos;

        return todos.filter(
            (todo)=>
                todo.title.toLowerCase().includes(filtered.toLowerCase()) ||
                todo.description.toLowerCase().includes(filtered.toLowerCase())
        );
    }
});