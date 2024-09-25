import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    searchTerm: "",
    selectedCategory: "All",
  },
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
    },
    setSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    setCategory(state, action) {
      state.selectedCategory = action.payload;
    },
  },
});

export const { setProducts, setSearchTerm, setCategory } =
  productsSlice.actions;
export default productsSlice.reducer;
