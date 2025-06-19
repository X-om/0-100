import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id : [],
    items : 0,
    price : 0
}

const cart = createSlice({
    name: 'cart',
    initialState,
    reducers : {
        addItem : (state, action) => {
            state.id.push(action.payload.id)
            state.items += 1;   
            state.price += action.payload.price  
        },
        removeItem : (state, action) => {
            const indexOf = state.id.indexOf(action.payload.id);
            if(indexOf != -1){ 
                state.id.splice(indexOf,1);
                state.items -= 1;   
                state.price -= action.payload.price  }
        }   
    }
});

export const { addItem, removeItem } = cart.actions
export default  cart.reducer