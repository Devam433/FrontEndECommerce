import { configureStore } from '@reduxjs/toolkit'
import productsSlice from '../features/productsSlice'
import productSlice from '../features/productSlice'
import cartSlice from '../features/cartSlice'
export const store = configureStore({
    reducer:{
        products: productsSlice,
        Product: productSlice,
        cart: cartSlice,
    }
})