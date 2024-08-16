import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../api/api';

export const fetchProducts = createAsyncThunk('fetchProducts', async () => {
  const response = await api.get('/products');
  return response.data.products;
});

export const fetchProductsByCategory = createAsyncThunk('fetchProductsByCategory', async(categoryName)=>{
  const response = await api.get(`/products/category/${categoryName}`);
  return response.data.products;
})

const productSlice = createSlice({
  name: 'products',
  initialState: { products: [], status: 'idle', error: null, categoryProducts:[], },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchProductsByCategory.pending,(state)=>{
        state.status = 'loading';
      })
      .addCase(fetchProductsByCategory.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.categoryProducts = action.payload;
      })
      .addCase(fetchProductsByCategory.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
  },
});

export default productSlice.reducer;
