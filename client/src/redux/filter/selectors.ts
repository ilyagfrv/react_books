import { RootState } from '../store'

export const selectTitleFilter = (state: RootState) => state.filter.title
export const selectAuthorFilter = (state: RootState) => state.filter.author
export const selectOnlyFavoriteFilter = (state: RootState) =>
  state.filter.onlyFavorite
