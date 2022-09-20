import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const taskAutont=createAsyncThunk('',async(data)=>{
    let res=await axios.get('https://api.adstarks.com/public/api/tasks',data,
    {
        headers:{
            'Accept':'application/json',
            'Authorization':`${window.sessionStorage.getItem('Auto')}`
        }
    })
    return res.data
})

export const addTask=createSlice({
    name:'task',
    initialState:{
        data:[],
        loading:false,
        error:false
    },
    extraReducers:{
        [taskAutont.pending]:(state)=>{
            state.loading=true
        },
        [taskAutont.fulfilled]:(state,{payload})=>{
            console.log(payload)
            state.loading=false
        },
        [taskAutont.rejected]:(state)=>{
            console.log(window.sessionStorage.getItem('Auto'),'faild')
            state.error=true
        }
    }
})
export default addTask.reducer;