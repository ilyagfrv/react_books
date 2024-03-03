import { BiBookBookmark, BiSolidBookBookmark } from 'react-icons/bi'
import { useSelector } from 'react-redux'

import style from './List.module.css'
import { Book } from 'types/book'
import { Button } from 'components'

import { useAppDispatch } from 'redux/redux-hook'
import { deleteBook, toggleFavorite } from 'redux/book/slice'
import { selectBooks } from 'redux/book/selectors'
import {
  selectTitleFilter,
  selectAuthorFilter,
  selectOnlyFavoriteFilter,
} from 'redux/filter/selectors'

export default function List() {
  const dispatch = useAppDispatch()
  const books = useSelector(selectBooks)
  const titleFilter = useSelector(selectTitleFilter)
  const authorFilter = useSelector(selectAuthorFilter)
  const onlyFavoriteFilter = useSelector(selectOnlyFavoriteFilter)

  const handleDeleteBook = (id: Book['id']) => {
    dispatch(deleteBook(id))
  }

  const handleToggleFavorite = (id: Book['id']) => {
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
                {++i}. "{highlightMatch(book.title, titleFilter)}"{' '}
                <span className={style.separator}>by</span>{' '}
                <strong>{highlightMatch(book.author, authorFilter)}</strong>
              </p>

              <div
                className={style.actions}
                onClick={() => handleToggleFavorite(book.id!)}
              >
                {book.isFavorite ? (
                  <BiSolidBookBookmark className={style.icon} />
                ) : (
                  <BiBookBookmark className={style.icon} />
                )}

                <Button onClick={() => handleDeleteBook(book.id!)}>
                  Delete
                </Button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
