import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from './api';
// const token='137|jr7WyxqtPU4b3mGmgtcOcntunmImnnSNkMV5V8I5'
export const postData = createAsyncThunk('/user', async (data) => {
    let res = await axios.post('',data,
        {
            headers:
        {
            'Content-type':'application/json',
            'Accept':'application/json',
        }
        }
    )
    return res.data
})
// server will send payload 
export const postSlice = createSlice({
    name: 'post',
    initialState: {
        token:'',
        loading: false,
        error: false
    },
    extraReducers: {
        [postData.pending]: (state) => {
            state.loading = true
        },
        [postData.fulfilled]: (state, { payload }) => {
            console.log("sucess",payload.token)
            state.token = payload.token;
            window.sessionStorage.setItem('Auto',payload.token)
            state.loading = false
        },
        [postData.rejected]: (state) => {
            state.error = true
            console.log("faild")
        }
    }
})
export default postSlice.reducer;