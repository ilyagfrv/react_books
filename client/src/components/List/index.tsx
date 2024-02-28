import { BiBookBookmark, BiSolidBookBookmark } from 'react-icons/bi'

import { useAppDispatch, useAppSelector } from '../../redux/redux-hook'
import {
  deleteBook,
  toggleFavorite,
  // selectBooks,
} from '../../redux/slices/bookSlice'
import {
  selectTitleFilter,
  selectAuthorFilter,
  selectOnlyFavoriteFilter,
} from '../../redux/slices/filterSlice'

import style from './List.module.css'

export default function List() {
  const dispatch = useAppDispatch()
  const books = useAppSelector((state) => state.books)
  const titleFilter = useAppSelector(selectTitleFilter)
  const authorFilter = useAppSelector(selectAuthorFilter)
  const onlyFavoriteFilter = useAppSelector(selectOnlyFavoriteFilter)

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

    const matchesFilter = onlyFavoriteFilter ? book.isFavorite : true

    return matchesTitle && matchesAuthor && matchesFilter
  })

  const highlightMatch = (text: string, filter: string) => {
    if (!filter) return text

    const regex = new RegExp(`(${filter})`, 'gi')
    return text.split(regex).map((substring, i) => {
      if (substring.toLowerCase() === filter.toLowerCase()) {
        return (
          <span key={i} className={style.highlight}>
            {substring}
          </span>
        )
      }
      return substring
    })
  }

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
                {++i}. "{highlightMatch(book.title, titleFilter)}" by{' '}
                <strong>{highlightMatch(book.author, authorFilter)}</strong>
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
