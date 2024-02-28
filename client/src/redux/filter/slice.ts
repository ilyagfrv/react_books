import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Book } from 'types/Book'

const initialState = {
  title: '',
  author: '',
  onlyFavorite: false,
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setTitleFilter(state, action: PayloadAction<Book['title']>) {
      state.title = action.payload
    },
    setAuthorFilter(state, action: PayloadAction<Book['author']>) {
      state.author = action.payload
    },
    setOnlyFavoriteFilter(state) {
      state.onlyFavorite = !state.onlyFavorite
    },
    resetFilters() {
      return initialState
    },
  },
  // selectors: {
  //   selectTitleFilter: (state) => state.title,
  //   selectAuthorFilter: (state) => state.author,
  //   selectOnlyFavoriteFilter: (state) => state.onlyFavorite,
  // },
})

export const {
  setTitleFilter,
  setAuthorFilter,
  setOnlyFavoriteFilter,
  resetFilters,
} = filterSlice.actions

// export const {
//   selectTitleFilter,
//   selectAuthorFilter,
//   selectOnlyFavoriteFilter,
// } = filterSlice.selectors

export default filterSlice.reducer
