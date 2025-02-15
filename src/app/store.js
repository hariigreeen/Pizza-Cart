import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../slices/cartSlice'
import { pizzasApi } from "../services/pizzasApi";
import { setupListeners } from '@reduxjs/toolkit/query'
import { dissertsApi } from "../services/dissertsApi";
import searchReducer from '../features/cart/searchSlice';

import pageSlice from '../pagecomponents/pageWhich'

export const store = configureStore({
  reducer: {
    cartSl:cartReducer,
    whichPage:pageSlice,
    search:searchReducer
    //[pizzasApi.reducerPath]: pizzasApi.reducer,
    //[dissertsApi.reducerPath]: dissertsApi.reducer
  },
   //middleware: (getDefaultMiddleware) =>
    //getDefaultMiddleware().concat(pizzasApi.middleware,dissertsApi.middleware) 
})
setupListeners(store.dispatch)
export default store