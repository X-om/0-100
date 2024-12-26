import { atomFamily, selectorFamily } from "recoil";
import { TODO } from "../todos";
import axios from "axios";


export const todoAtomFamily = atomFamily({
    key : "todoAtomFamily",
    default : (id) => { 
        return TODO.find(todo => todo.id === id);
    }
})

export const todoAtomFamill2 = atomFamily({
    key : "todoAtomFamill2",
    default : selectorFamily({
        key : "todoAtomFamily2Selector",
        get : (id) => async ({get}) => {
                const res = await axios.get(`http://localhost:3000/todos?id=${id}`);
                return res.data;
        }
    })
})