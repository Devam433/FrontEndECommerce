import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../api/api';

export const fetchProducts = createAsyncThunk('fetchProducts', async (page=1) => {
  const skip = (page-1)*30; //to skip the no. of items for fetching next page
  const response = await api.get(`/products?limit=30&skip=${skip}`);
  return response.data;
});

//to fetch product by category
export const fetchProductsByCategory = createAsyncThunk('fetchProductsByCategory', async(categoryName)=>{
  const response = await api.get(`/products/category/${categoryName}`);
  return response.data.products;
})

//to filter fetch products 
export const fetchProductsByFilter = createAsyncThunk('fetchProductsByFilter',async({ sortBy, order })=>{
  const sort = sortBy.join(',');
  const response = await api.get(`/products?sortBy=${sort}&order=${order}`);
  return response.data;
})

const productSlice = createSlice({
  name: 'products',
  initialState: { products: [],currentPage:1,totalProducts:0,totalPages:0, status: 'idle', error: null, categoryProducts:[], filteredProducts:[] },
  reducers: {
    setCurrentPage:(state,action)=>{ //this is set here to keep track of the page for pagination
      state.currentPage = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // state.products = action.payload.products; 
        {/** action.payload.products is an array of objects */}
        state.products =[...state.products,...action.payload.products]; //destructured, so that the previous product details doesn't get removed. VVI for Pagination
        state.totalProducts = action.payload.total;
        state.totalPages = Math.ceil(action.payload.total / action.payload.limit);
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
      .addCase(fetchProductsByFilter.pending,(state)=>{
        state.status = 'loading';
      })
      .addCase(fetchProductsByFilter.fulfilled, (state,action)=>{
        state.status = 'fulfilled';
        state.products = action.payload.products; // here we overwrite the fetched products because the 'products' state should not contain the previously fetched products or it will display the previous products rather than the newly filte fetched products.
        state.totalPages = Math.ceil(action.payload.total / action.payload.limit);
      })
      .addCase(fetchProductsByFilter.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
  },
});

export default productSlice.reducer;
export const {setCurrentPage} = productSlice.actions;