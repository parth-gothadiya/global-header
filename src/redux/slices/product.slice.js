import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
  loading: false,
  error: false,
  success: false,
  message: "",
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    // get data

    fetchProductStart: (state) => {
      state.loading = true;
    },
    fetchProductSuccess: (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.error = false;
      state.success = true;
    },
    fetchProductError: (state, action) => {
      state.data = null;
      state.loading = false;
      state.error = true;
      state.success = false;
      state.message = action.payload;
    },

    // post data
    postProductStart: (state) => {
      state.loading = true;
    },
    postProductSuccess: (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.error = false;
      state.success = true;
    },
    postProductError: (state, action) => {
      state.data = null;
      state.loading = false;
      state.error = true;
      state.success = false;
      state.message = action.payload;
    },

    // update data
    updateProductStart: (state) => {
      state.loading = true;
    },
    updateProductSuccess: (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.error = false;
      state.success = true;
    },
    updateProductError: (state, action) => {
      state.data = null;
      state.loading = false;
      state.error = true;
      state.success = false;
      state.message = action.payload;
    },

    // delete data
    deleteProductStart: (state) => {
      state.loading = true;
    },
    deleteProductSuccess: (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.error = false;
      state.success = true;
    },
    deleteProductError: (state, action) => {
      state.data = null;
      state.loading = false;
      state.error = true;
      state.success = false;
      state.message = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  fetchProductStart,
  fetchProductSuccess,
  fetchProductError,
  postProductStart,
  postProductSuccess,
  postProductError,
  updateProductStart,
  updateProductSuccess,
  updateProductError,
  deleteProductStart,
  deleteProductSuccess,
  deleteProductError,
} = productSlice.actions;

export default productSlice.reducer;
