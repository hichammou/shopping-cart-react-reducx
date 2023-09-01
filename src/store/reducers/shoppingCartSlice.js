import { createSlice } from "@reduxjs/toolkit";

const cartState = {
  cartItems: [],
  totalItems: 0,
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: cartState,
  reducers: {
    addItem(state, action) {
      const checkExistance = state.cartItems.find(
        (product) => action.payload.id === product.id
      );
      if (checkExistance) {
        checkExistance.quantity++;
      } else {
        const newProduct = action.payload;
        newProduct.quantity++;
        state.cartItems.push(newProduct);
      }
      state.totalItems++;
      state.totalPrice += Number(action.payload.price);
    },
    removeItem(state, action) {
      const productExist = state.cartItems.find(
        (product) => product.id === action.payload.id
      );
      if (productExist) {
        if (productExist.quantity === 1) {
          state.cartItems = state.cartItems.filter(
            (product) => product.id !== action.payload.id
          );
        }
        productExist.quantity--;
        state.totalItems--;
        state.totalPrice -= Number(action.payload.price);
      } else return;
    },
  },
});

export const cartSliceActions = cartSlice.actions;

// dispatchEvent(state, {
//     id: 1,
//     name: "ASUS ROG Strix G16",
//     price: "1649",
//     imageUrl: "https://m.media-amazon.com/images/I/71v0BQo8T8L._AC_SL1500_.jpg",
//   });
