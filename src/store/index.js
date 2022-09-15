import { configureStore } from '@reduxjs/toolkit'
import products from './slices/products.slice'
import productToCart from './slices/productToCart'
import isLogged from './slices/isLogged.slice'

export default configureStore({
  reducer: {
    products,
    productToCart,
    isLogged
    }
}) 
