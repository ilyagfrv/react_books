import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { createBookWithID } from 'utils/createBookwithID'
import { Book } from 'types/book'
import { fetchBook } from './asyncActions'

type BookSlice = {
  books: Book[]
  isLoadingAPI: boolean
}

const initialState: BookSlice = {
  books: [],
  isLoadingAPI: false,
}

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook(state, action: PayloadAction<Book>) {
      state.books.push(action.payload)
    },
    deleteBook(state, action: PayloadAction<Book['id']>) {
      return {
        ...state,
        books: state.books.filter((book) => book.id !== action.payload),
      }
    },
    toggleFavorite(state, action: PayloadAction<Book['id']>) {
      state.books.forEach((book) => {
        if (book.id === action.payload) {
          book.isFavorite = !book.isFavorite
        }
      })
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBook.pending, (state) => {
      state.isLoadingAPI = true
    })
    builder.addCase(fetchBook.fulfilled, (state, action) => {
      state.isLoadingAPI = false
      if (action.payload.title && action.payload.author) {
        state.books.push(createBookWithID(action.payload))
      }
    })
    builder.addCase(fetchBook.rejected, (state) => {
      state.isLoadingAPI = false
    })
  },
})

export const { addBook, deleteBook, toggleFavorite } = bookSlice.actions

export default bookSlice.reducer
