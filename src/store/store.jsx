import { configureStore } from '@reduxjs/toolkit'
import  animeReducers  from './reducers/AnimeReducer'
import characterReducers from './reducers/CharacterReducer'

export const store = configureStore({
  reducer: {
   animeReducer: animeReducers,
   characterReducer : characterReducers
  },
})