import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import { Book } from 'types/book'
import { setError } from 'redux/error/slice'

export const fetchBook = createAsyncThunk<Book, string>(
  'books/fetchBook',
  async (url, thunkAPI) => {
    try {
      const response = await axios.get(url)
      return response.data
    } catch (error) {
      if (error instanceof Error) {
        thunkAPI.dispatch(setError(error.message))
        return thunkAPI.rejectWithValue(error)
      }
    }
  }
)
