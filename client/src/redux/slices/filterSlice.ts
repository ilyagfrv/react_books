import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  title: '',
  author: '',
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setTitleFilter(state, action) {
      state.title = action.payload
    },
    setAuthorFilter(state, action) {
      state.author = action.payload
    },
    resetFilters() {
      return initialState
    },
  },
  selectors: {
    selectTitleFilter: (state) => state.title,
    selectAuthorFilter: (state) => state.author,
  },
})

export const { setTitleFilter, setAuthorFilter, resetFilters } =
  filterSlice.actions

export const { selectTitleFilter, selectAuthorFilter } = filterSlice.selectors

export default filterSlice.reducer
