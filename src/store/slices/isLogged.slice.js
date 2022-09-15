import { createSlice } from '@reduxjs/toolkit';

export const isLogged = createSlice({
    name: 'isLogged',
    initialState: false,
    reducers: {
        setIsLogged: state => !state
    }
})

export const { setIsLogged } = isLogged.actions;

export default isLogged.reducer;