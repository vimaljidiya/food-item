import { createSlice } from "@reduxjs/toolkit";


let Cartslice = createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        add(state,action){
            state.push(action.payload);
        },
        remove(state,action){
            let kk =state.filter((item)=> item.id !== action.payload);
            return kk;
        },
        removeAllItems(state, action) {
    
            return [];
        },
        increment(state,action){
            let item =state.find((item)=>item.id ===action.payload);
            if(item){
                item.quntity += 1;
            }
        },
        decrement(state,action){
            let item =state.find((item)=>item.id ===action.payload);
            if(item && item.quntity > 1){
                item.quntity -= 1;
            }
        }
        
    }
});

export let {add,remove,increment,decrement,removeAllItems}=Cartslice.actions;
export default Cartslice.reducer;