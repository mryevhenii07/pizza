import { createSlice } from "@reduxjs/toolkit";

const initialState = { items: [], totalPrice: 0 };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    minusItem: (state, action) => {
      const findItem = state.items.find((obj) => obj.id === action.payload);
      if (findItem) {
        findItem.count--;
      }
    },

    addItems: (state, action) => {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);
      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }

      state.totalPrice = state.items.reduce(
        (sum, obj) => obj.count * obj.price + sum,
        0
      );
    },

    removeItems: (state, action) => {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
    },

    clearItems: (state) => {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { addItems, removeItems, clearItems, minusItem } =
  cartSlice.actions;
export default cartSlice.reducer;
