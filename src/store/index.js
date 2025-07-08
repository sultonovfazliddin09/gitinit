import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../createSlice/index";

const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});

export default store;
