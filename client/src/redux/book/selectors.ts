import { RootState } from '../store'

export const selectBooks = (state: RootState) => state.books.books
export const selectIsLoadingAPI = (state: RootState) => state.books.isLoadingAPI
