import * as React from 'react'
import { FaSpinner } from 'react-icons/fa'
import { useSelector } from 'react-redux'

import style from './Form.module.css'

import booksData from 'data/books.json'
import { createBookWithID } from 'utils/createBookwithID'

import { useAppDispatch } from 'redux/redux-hook'
import { addBook } from 'redux/book/slice'
import { fetchBook } from 'redux/book/asyncActions'
import { selectIsLoadingAPI } from 'redux/book/selectors'

export default function Form() {
  const dispatch = useAppDispatch()
  const isLoadingAPI = useSelector(selectIsLoadingAPI)
  const [title, setTitle] = React.useState('')
  const [author, setAuthor] = React.useState('')

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()

    if (title && author) {
      dispatch(addBook(createBookWithID({ title, author })))

      setTitle('')
      setAuthor('')
    }
  }

  const handleAddRandomBook = () => {
    const randomIndex = Math.floor(Math.random() * booksData.length)
    const randomBook = booksData[randomIndex]

    dispatch(addBook(createBookWithID(randomBook)))
  }

  const handleAddRandomBookViaAPI = () => {
    dispatch(fetchBook('http://localhost:4000/random-book-delayed'))
  }

  return (
    <div className={style.formContainer}>
      <h2>Add a book</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor='title'>Title</label>
        <input
          type='text'
          id='title'
          placeholder='What book?'
          value={title}
          onChange={(e) => setTitle(e.currentTarget.value)}
        />

        <label htmlFor='author'>Author</label>
        <input
          type='text'
          id='author'
          placeholder='Who is the author?'
          value={author}
          onChange={(e) => setAuthor(e.currentTarget.value)}
        />

        <button type='submit'>new Book</button>
        <button type='button' onClick={handleAddRandomBook}>
          random Book
        </button>

        <button
          type='button'
          onClick={handleAddRandomBookViaAPI}
          disabled={isLoadingAPI}
        >
          {isLoadingAPI ? (
            <>
              <span>Loading...</span>
              <FaSpinner className={style.spinner} />
            </>
          ) : (
            'random API Book'
          )}
        </button>
      </form>
    </div>
  )
}
