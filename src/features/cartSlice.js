import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../api/api";

export const addToCart = createAsyncThunk('addtocart', async(payload,{rejectWithValue})=>{
    try {
        // const result = await api.post(`/carts/${cartId}`,payload);
        // console.log(result.data);
      const res = await fetch('https://dummyjson.com/carts/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              userId: 1,
              products: [
                payload
              ]
            })
          })
        console.log(res);
        const result = await res.json();
        console.log(result.products[0]);
        return result.products[0];         
    } catch (error) {
        return rejectWithValue({message:'An error occured'});
    }

})

const cartSlice = createSlice({
    name:'cart',
    initialState:{cart:[],status:'idel',error:null},
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(addToCart.pending,(state)=>{
            state.status = 'loading';
        })
        .addCase(addToCart.fulfilled,(state,action)=>{
            state.cart.push(action.payload);
            state.status = 'succeeded';
            console.log(state.cart); //emmer js immutibility,something something, Study about the internals of Redux/RTK
        })
        .addCase(addToCart.rejected,(state,action)=>{
            state.error = action.error.message;
            state.status = 'fail';
        })
    }
})

export default cartSlice.reducer;