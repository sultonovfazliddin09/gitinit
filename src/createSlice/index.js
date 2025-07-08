import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allProducts: [],
};

const ProductsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.allProducts = action.payload;
    },
  },
});

export const { setProducts } = ProductsSlice.actions;
export default ProductsSlice.reducer;
