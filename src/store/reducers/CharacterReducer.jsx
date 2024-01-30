import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios  from 'axios'
import api from '../Axios'


export const getAllData2 = createAsyncThunk("characters",async()=>{
const response = await api.get("/characters")
const result = response.data;
return result;
})

const initialState = {
   characters:[],
   loading:false,
   error:null
  }
export const characterReducers= createSlice({
    name: 'character',
    initialState,
    extraReducers: (builder) => {
        builder
          .addCase(getAllData2.pending, (state) => {
            state.loading = true;
          })
          .addCase(getAllData2.fulfilled, (state, action) => {
            state.loading = false;
            state.users = action.payload;
          })
          .addCase(getAllData2.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
          });
      },
})
export default characterReducers.reducer