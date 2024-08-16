import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../api/api";

export const fetchProductById = createAsyncThunk('fetchProductById', async (id)=>{
    const result = await api.get(`/products/${id}`);
    console.log(result.data);
    return result.data;
})

const productSlice = createSlice({
    name:'product',
    initialState:{
        Product:[], status: 'idle', error: null
    },
    reducers:{},
    extraReducers: (builder)=>{
        builder
        .addCase(fetchProductById.pending,(state)=>{
            state.status = 'loading';
        })
        .addCase(fetchProductById.fulfilled,(state,action)=>{
            state.Product = action.payload;
            state.status = 'succeeded';
            console.log(state.Product);
        })
        .addCase(fetchProductById.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
          });
    }
})

export default productSlice.reducer