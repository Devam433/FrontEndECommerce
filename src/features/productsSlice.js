import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../api/api';

export const fetchProducts = createAsyncThunk('fetchProducts', async () => {
  const response = await api.get('/products');
  console.log(response.data.products);
  return response.data.products;
});

const productSlice = createSlice({
  name: 'products',
  initialState: { products: [], status: 'idle', error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        console.log(action.payload);
        state.products = action.payload;
        console.log(state.products);
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;
