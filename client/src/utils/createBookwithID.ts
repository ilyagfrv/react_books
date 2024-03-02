import { v4 as uuidv4 } from 'uuid'
import { Book } from 'types/book'

export const createBookWithID = (book: Book) => {
  return {
    ...book,
    isFavorite: false,
    id: uuidv4(),
  }
}
