import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'

import { createBookWithID } from 'utilities/createBookWithID'
import { Book } from 'types/Book'

const initialState: Book[] = []

export const fetchBook = createAsyncThunk('books/fetchBook', async () => {
  const res = await axios.get('http://localhost:4000/random-book')
  return res.data
})

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
  extraReducers: (builder) => {
    builder.addCase(fetchBook.pending, (state, action) => {})
    builder.addCase(fetchBook.fulfilled, (state, action) => {
      if (action.payload.title && action.payload.author) {
        state.push(createBookWithID(action.payload))
      }
    })
  },
})

export const { addBook, deleteBook, toggleFavorite } = bookSlice.actions

export default bookSlice.reducer
