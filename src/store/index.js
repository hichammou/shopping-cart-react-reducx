import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./reducers/shoppingCartSlice";
export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});
