import { configureStore } from '@reduxjs/toolkit'
import products from './slices/products.slice'
import productToCart from './slices/productToCart'

export default configureStore({
  reducer: {
    products,
    productToCart
    }
}) 
