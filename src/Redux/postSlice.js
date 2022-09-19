import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from './api';
// const token='137|jr7WyxqtPU4b3mGmgtcOcntunmImnnSNkMV5V8I5'
export const postData = createAsyncThunk('/user', async () => {
    let res = await axios.post('https://api.adstarks.com/public/api/login',JSON.stringify({
        "identifier":"super_admin@simcc.com",
        "password": "school_manger2school_manger2"
    }),
        {
            headers:
        {
            'Content-type':'application/json',
            'Accept':'application/json'
        },
            withCredentials:false
        },
    )
    return res.data
})
// server will send payload 
export const postSlice = createSlice({
    name: 'post',
    initialState: {
        data: {
            name: "",
            email: ""
        },
        loading: false,
        error: false
    },
    extraReducers: {
        [postData.pending]: (state) => {
            state.loading = true
        },
        [postData.fulfilled]: (state, { payload }) => {
            console.log("sucess",payload.token)
            // state.data = payload;
            state.loading = false
        },
        [postData.rejected]: (state) => {
            state.error = true
            console.log("faild")
        }
    }
})
export default postSlice.reducer;