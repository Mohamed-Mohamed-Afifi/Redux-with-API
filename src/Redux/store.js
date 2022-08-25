import { configureStore } from '@reduxjs/toolkit';
import fetchSlice from './fetchSlice';
import postSlice from './postSlice';
const store = configureStore({
    reducer: {
        Get: fetchSlice,
        Post: postSlice
    }
})
export default store;