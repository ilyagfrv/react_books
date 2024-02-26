import { useAppDispatch, useAppSelector } from '../../redux/redux-hook'
import { deleteBook } from '../../redux/books/actionCreators'

import style from './List.module.css'

export default function List() {
  const dispatch = useAppDispatch()
  const books = useAppSelector((state) => state.books)

  const handleDeleteBook = (id: string) => {
    dispatch(deleteBook(id))
  }

  return (
    <div className={style.listContainer}>
      <h2>Book List</h2>
      {books.length === 0 ? (
        <h3>No books yet.</h3>
      ) : (
        <ul>
          {books.map((book, i) => (
            <li key={book.id}>
              <h4>
                {++i}. "{book.title}" by <strong>{book.author}</strong>
              </h4>

              <div className={style.actions}>
                <span>icon</span>
                <button onClick={() => handleDeleteBook(book.id)}>
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
