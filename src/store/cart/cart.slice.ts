import {createSlice, PayloadAction} from "@reduxjs/toolkit";

import {IProduct} from "@/global/interfaces";

interface IInitialState {
  cartItems: IProduct[]
  totalAmount: number
  totalQuantity: number
}

const initialState: IInitialState = {
  cartItems: [],
  totalAmount: 0,
  totalQuantity: 0,
};

export const cart = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<IProduct>) => {
      const itemInCart = state.cartItems.find(item => item.id === action?.payload?.id);

      state.totalQuantity++;

      if (itemInCart && itemInCart?.quantity && itemInCart?.totalPrice) {
        itemInCart.quantity++;
        itemInCart.totalPrice = Number(itemInCart.totalPrice) + Number(action.payload.discount ? action.payload.price - action.payload.discount : action.payload.price)
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1, totalPrice: action.payload.discount ? action.payload.price - action.payload.discount : action.payload.price});
      }
      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.discount ? item.price - item.discount : item.price) * Number(item.quantity),
        0,
      );
    },
    incrementQuantity: (state, action: PayloadAction<{id: string}>) => {
      const item = state.cartItems.find(item => item.id === action.payload.id);
      if (item?.quantity && item.totalPrice) {
        item.quantity++;
        item.totalPrice = item.discount ? item.totalPrice + (item.price - item.discount) : item.totalPrice + item.price

        state.totalQuantity++;
        state.totalAmount = item.discount ? state.totalAmount + (item.discount ? item.price - item.discount : item.price) : state.totalAmount + item.price
      }

    },
    decrementQuantity: (state, action: PayloadAction<{id: string}>) => {
      const item = state.cartItems.find((item) => item.id === action.payload.id);
      if (item?.totalPrice && item?.quantity && item?.quantity === 1) {
        item.quantity = 1;
        item.totalPrice = item.totalPrice;
      }
      if (item?.totalPrice && item?.quantity && item?.quantity > 1) {
        item.quantity--;
        item.totalPrice = item.discount ? item.totalPrice - (item.price - item.discount) : item.totalPrice - item.price;
        state.totalQuantity--;
        state.totalAmount = item.discount ? state.totalAmount - (item.discount ? item.price - item.discount : item.price) : state.totalAmount - item.price
      }
    },
    removeProduct: (state, action: PayloadAction<{id: string}>) => {
      const existingItem = state.cartItems.find(item => item.id === action.payload.id);

      if (existingItem?.quantity && existingItem?.totalPrice) {
        state.cartItems = state.cartItems.filter(item => item.id !== existingItem.id);
        state.totalQuantity = state.totalQuantity - existingItem.quantity;
        state.totalAmount = state.totalAmount - existingItem.totalPrice;
      }
    }
  }
})

export const cartReducer = cart.reducer
export const cartActions = cart.actions