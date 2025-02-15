import { createSlice } from "@reduxjs/toolkit";
export const cartSlice = createSlice(
   {
    name:'cartSl',
    initialState:{
        cartItems:[]
    },
    reducers:{
        addToCart:(state,actions)=>{
            state.cartItems.push(actions.payload)
        }
    }
   }
)
export const {addToCart} = cartSlice.actions
export default cartSlice.reducer