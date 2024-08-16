import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../api/api";

export const addToCart = createAsyncThunk('addtocart', async(payload,{rejectWithValue})=>{
    try {
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

        const result = await res.json();
        return result.products[0];         
    } catch (error) {
        return rejectWithValue({message:'An error occured'});
    }

})

const cartSlice = createSlice({
    name:'cart',
    initialState:{cart:[],status:'idel',error:null},
    reducers:{
        deleteCartItem:(state,action)=>{
            state.cart = action.payload;
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(addToCart.pending,(state)=>{
            state.status = 'loading';
        })
        .addCase(addToCart.fulfilled,(state,action)=>{
            const updatedPayload = {...action.payload, date:new Date()}; //adds a date property.
            state.cart.push(updatedPayload);
            state.status = 'succeeded';
            console.log(state.cart); //emmer js immutibility,something something, Study about the internals of Redux/RTK. **VVI NOTE**
        })
        .addCase(addToCart.rejected,(state,action)=>{
            state.error = action.error.message;
            state.status = 'fail';
        })
    }
})

export default cartSlice.reducer;
export const {deleteCartItem} = cartSlice.actions 