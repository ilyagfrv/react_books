import * as actions from './actionTypes'

import { IBook } from '../../types/book'

export const addBook = (newBook: IBook) => ({
  type: actions.ADD_BOOK,
  payload: newBook,
})

export const deleteBook = (id: string) => ({
  type: actions.DELETE_BOOK,
  payload: id,
})
