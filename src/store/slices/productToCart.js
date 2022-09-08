import { createSlice } from '@reduxjs/toolkit';

export const productToCart = createSlice({
    name: 'productToCart',
    initialState: false,
    reducers: {
        setProductToCart: state => !state
    }
})

export const { setProductToCart } = productToCart.actions;

export default productToCart.reducer;