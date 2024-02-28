import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Book } from '../../types/Book'

const initialState: Book[] = []

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook(state, action: PayloadAction<Book>) {
      state.push(action.payload)
    },
    deleteBook(state, action: PayloadAction<Book['id']>) {
      return state.filter((book) => book.id !== action.payload)
    },
    toggleFavorite(state, action: PayloadAction<Book['id']>) {
      return state.forEach((book) => {
        if (book.id === action.payload) {
          book.isFavorite = !book.isFavorite
        }
      })
    },
  },
  // selectors: {
  //   selectBooks: (state) => state.books,
  // },
})

export const { addBook, deleteBook, toggleFavorite } = bookSlice.actions
// export const { selectBooks } = bookSlice.selectors

export default bookSlice.reducer
