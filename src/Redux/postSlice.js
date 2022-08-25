import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const postData = createAsyncThunk('/api/data', async (data) => {
    let res = await axios.post('http://localhost:5000/api/data', data)
    return res.data;
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
            console.log(payload, "this is payload")
            state.data = payload;
            state.loading = false
        },
        [postData.rejected]: (state) => {
            state.error = true
            console.log("erroe")
        }
    }
})
export default postSlice.reducer;