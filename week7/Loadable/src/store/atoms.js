import axios from "axios";
import { atom, atomFamily, selectorFamily } from "recoil";

export const todoAtomFamily = atomFamily({
    key : "todoAtomFamily",
    default : selectorFamily({
        key : "todoSelectorFamily",
        get : (id) => async ({get})=>{
            await new Promise(r=> setTimeout(r,5000));
            const res = await axios.get(`http://localhost:3000/todos?id=${id}`);
            return res.data;
        }
    })  
})