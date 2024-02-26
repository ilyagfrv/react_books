import { IBook } from '../../types/book'

import * as actions from './actionTypes'

type AddBook = {
  type: 'ADD_BOOK'
  payload: IBook
}

type DeleteBook = {
  type: 'DELETE_BOOK'
  payload: string
}

type Actions = AddBook | DeleteBook

const initialState: IBook[] = []

const booksReducer = (state = initialState, { type, payload }: Actions) => {
  switch (type) {
    case actions.ADD_BOOK:
      return [...state, payload]
    case actions.DELETE_BOOK:
      return state.filter((book) => book.id !== payload)
    default:
      return state
  }
}

export default booksReducer
