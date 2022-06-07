import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// export const fetchPizzas = createAsyncThunk('pizza/fetchPizzasStatus', async (params) => {
//   const { API, category, order, searchInput, sortType, currentPage } = params;

//   const { data } = await axios.get(
//     `${API}?search=${searchInput}&${category}&sortBy=${sortType}&order=${order}&page=${currentPage}&limit=8`,
//   );
//   return data;
// });

const initialState = {
  items: [],
  status: "loading" /*loading,success,error SCELETON*/,
};

const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
  },
  // extraReducers: {
  //   [fetchPizzas.pending]: (state) => {
  //     state.status = 'loading';
  //     state.items = [];
  //   },
  //   [fetchPizzas.fulfilled]: (state, action) => {
  //     state.items = action.payload;
  //     state.status = 'success';
  //   },
  //   [fetchPizzas.rejected]: (state, action) => {
  //     state.status = 'error';
  //     state.items = [];
  //   },
  // },
});

export const { setItems } = pizzaSlice.actions;
export default pizzaSlice.reducer;
