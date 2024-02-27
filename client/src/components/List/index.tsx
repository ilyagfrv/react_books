import { BiBookBookmark, BiSolidBookBookmark } from 'react-icons/bi'

import { useAppDispatch, useAppSelector } from '../../redux/redux-hook'
import { deleteBook, toggleFavorite } from '../../redux/slices/booksSlice'
import {
  selectTitleFilter,
  selectAuthorFilter,
} from '../../redux/slices/filterSlice'

import style from './List.module.css'

export default function List() {
  const dispatch = useAppDispatch()
  const books = useAppSelector((state) => state.books)
  const titleFilter = useAppSelector(selectTitleFilter)
  const authorFilter = useAppSelector(selectAuthorFilter)

  const handleDeleteBook = (id: string) => {
    dispatch(deleteBook(id))
  }

  const handleToggleFavorite = (id: string) => {
    dispatch(toggleFavorite(id))
  }

  const filteredBooks = books.filter((book) => {
    const matchesTitle = book.title
      .toLowerCase()
      .includes(titleFilter.toLowerCase())

    const matchesAuthor = book.author
      .toLowerCase()
      .includes(authorFilter.toLowerCase())

    return matchesTitle && matchesAuthor
  })

  return (
    <div className={style.listContainer}>
      <h2>Book List</h2>
      {books.length === 0 ? (
        <h3>No books yet.</h3>
      ) : (
        <ul>
          {filteredBooks.map((book, i) => (
            <li key={book.id}>
              <p>
                {++i}. "{book.title}" by <strong>{book.author}</strong>
              </p>

              <div className={style.actions}>
                {book.isFavorite ? (
                  <BiSolidBookBookmark
                    className={style.icon}
                    onClick={() => handleToggleFavorite(book.id!)}
                  />
                ) : (
                  <BiBookBookmark
                    className={style.icon}
                    onClick={() => handleToggleFavorite(book.id!)}
                  />
                )}
                {/* </span> */}

                <button onClick={() => handleDeleteBook(book.id!)}>
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
