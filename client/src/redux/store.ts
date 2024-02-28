import { configureStore } from '@reduxjs/toolkit'
import bookReducer from './slices/bookSlice'
import filterReducer from './slices/filterSlice'

export const store = configureStore({
  reducer: {
    books: bookReducer,
    filter: filterReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
