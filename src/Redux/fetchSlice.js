import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const fetchData = createAsyncThunk('/api/fetch', async () => {
    return await fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.json())
})

export const fetchSlice = createSlice({
    name: "fetch",
    initialState: {
        data: [],
        loading: false,
        error: false
    },
    extraReducers: {
        [fetchData.pending]: (state) => {
            state.loading = true
        },
        [fetchData.fulfilled]: (state, { payload }) => {
            state.data = payload;
            state.loading = false
        },
        [fetchData.rejected]: (state) => {
            state.error = true
        }
    }
})
export default fetchSlice.reducer;