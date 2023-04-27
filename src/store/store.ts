import {configureStore} from "@reduxjs/toolkit";
import {cartReducer} from "@/store/cart/cart.slice";
import {createWrapper} from "next-redux-wrapper";

export function makeStore() {
  return configureStore({
    reducer: {
      cart: cartReducer
    },
  })
};

export const store = makeStore();

export type TypeRootState = ReturnType<typeof store.getState>;
export type AppStore = ReturnType<typeof makeStore>;
export const wrapper = createWrapper<AppStore>(makeStore);