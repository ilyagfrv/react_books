import { configureStore } from '@reduxjs/toolkit'

import bookReducer from './book/slice'
import filterReducer from './filter/slice'
import errorReducer from './error/slice'

export const store = configureStore({
  reducer: {
    books: bookReducer,
    filter: filterReducer,
    error: errorReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
