import { configureStore } from "@reduxjs/toolkit";
import filter from "./slices/filterSlice";
import cartSlice from "./slices/cartSlice";

const store = configureStore({
  reducer: { filter, cart: cartSlice },
});

export default store;
