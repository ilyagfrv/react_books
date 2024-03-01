import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'

import { createBookWithID } from 'utilities/createBookWithID'
import { Book } from 'types/Book'
import { setError } from 'redux/error/slice'

type State = {
  books: Book[]
  isLoadingAPI: boolean
}

const initialState: State = {
  books: [],
  isLoadingAPI: false,
}

export const fetchBook = createAsyncThunk(
  'books/fetchBook',
  async (url: string, thunkAPI) => {
    try {
      const response = await axios.get(url)
      return response.data
    } catch (error) {
      thunkAPI.dispatch(setError('There is some difficulties'))
      return thunkAPI.rejectWithValue(error)
    }
  }
)

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
