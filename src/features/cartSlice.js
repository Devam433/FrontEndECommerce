import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../api/api";

export const addToCart = createAsyncThunk('addtocart', async (payload, { rejectWithValue }) => {
    try {
      const response = await api.post('/carts/add', {
        userId: 1,
        products: [payload]
      });
  
      return response.data.products[0];
    } catch (error) {
      return rejectWithValue({ message: 'An error occurred' });
    }
  });

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
            const updatedPayload = {...action.payload, date:new Date()}; //adding a date property to the payload
            state.cart.push(updatedPayload); //adding a date property to the payload (successful)
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