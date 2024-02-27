import { v4 as uuidv4 } from 'uuid'
import { IBook } from '../types/book'

export const createBookWithID = (book: IBook) => {
  return {
    ...book,
    isFavorite: false,
    id: uuidv4(),
  }
}
