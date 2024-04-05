import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Cartslice"

let Store =configureStore({
    reducer:{
        cart:cartReducer
    }
})
export default Store;