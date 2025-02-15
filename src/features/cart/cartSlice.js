import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    cartItems:[],
    discount:0
}
const cartSlice = createSlice({
    name:'cartSlice',
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            //console.log(action)
            state.cartItems.push(action.payload)
        } ,
        updateCartItem:(state,action)=>{
            state.discount = 10;
        },
        deleteCartItem:(state,action)=>{
            console.log(action.payload)
            state.cartItems.splice(action.payload,1)
        },
        /* pageEnable:(state,action)=>{
            state.page=action.payload
        } */
    }
})
export const {addToCart,updateCartItem,deleteCartItem} = cartSlice.actions;
const cartReducer = cartSlice.reducer;
export default cartReducer