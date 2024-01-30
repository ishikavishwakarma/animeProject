import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios  from 'axios'
import api from '../Axios'


export const getAllData = createAsyncThunk("anime",async()=>{
const response = await api.get("/top/anime?filter=bypopularity")
const result = response.data;
return result;
})


const initialState = {
   users:[],
   loading:false,
   error:null
  }
export const animeReducers= createSlice({
    name: 'anime',
    initialState,
  
    extraReducers: (builder) => {
        builder
          .addCase(getAllData.pending, (state) => {
            state.loading = true;
          })
          .addCase(getAllData.fulfilled, (state, action) => {
            state.loading = false;
            state.users = action.payload;
          })
          .addCase(getAllData.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
          })
          
      },
})
export const {addAnime}=animeReducers.actions

export default animeReducers.reducer
