import { configureStore } from '@reduxjs/toolkit';
import fetchSlice from './fetchSlice';
import postSlice from './postSlice';
import  addTask  from './taskSlice';
const store = configureStore({
    reducer: {
        Get: fetchSlice,
        Post: postSlice,
        Tasks:addTask
    }
})
export default store;