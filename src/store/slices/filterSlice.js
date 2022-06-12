import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryId: 0,
  currentPage: 1,
  searchInput: "",
  sort: {
    name: "популярності",
    sortProperty: "rating",
  },
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setCategoryId(state, action) {
      console.log(action);
      state.categoryId = action.payload;
    },
    setSort(state, action) {
      console.log(action);
      state.sort = action.payload;
    },
    setCurrentPage(state, action) {
      console.log(action);
      state.currentPage = action.payload;
    },
    setSearchInput(state, action) {
      console.log(action);
      state.searchInput = action.payload;
    },
  },
});

export const { setCategoryId, setSort, setCurrentPage, setSearchInput } =
  filterSlice.actions;

export default filterSlice.reducer;
