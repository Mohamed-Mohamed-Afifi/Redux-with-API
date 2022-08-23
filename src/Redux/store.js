import { configureStore } from '@reduxjs/toolkit';
import fetchSlice from './fetchSlice';
const store = configureStore({
    reducer: {
        Get: fetchSlice
    }
})
export default store;