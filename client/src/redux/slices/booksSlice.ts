import { createSlice } from '@reduxjs/toolkit'

import { IBook } from '../../types/book'

const initialState: IBook[] = []

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook(state, action) {
      state.push(action.payload)
    },
    deleteBook(state, action) {
      return state.filter((book) => book.id !== action.payload)
    },
    toggleFavorite(state, action) {
      return state.forEach((book) => {
        if (book.id === action.payload) {
          book.isFavorite = !book.isFavorite
        }
      })
    },
  },
})

export const { addBook, deleteBook, toggleFavorite } = bookSlice.actions

export default bookSlice.reducer
