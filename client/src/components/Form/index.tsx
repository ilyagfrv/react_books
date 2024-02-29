import * as React from 'react'

import style from './Form.module.css'

import { useAppDispatch } from 'redux/redux-hook'
import { addBook, fetchBook } from 'redux/book/slice'

import { createBookWithID } from 'utilities/createBookWithID'
import booksData from 'data/books.json'

export default function Form() {
  const dispatch = useAppDispatch()
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
    dispatch(fetchBook())
  }

  return (
    <div className={style.formContainer}>
      <h2>Add a book</h2>

      <form onSubmit={handleSubmit}>
        <div>
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
            add Random
          </button>
          <button type='button' onClick={handleAddRandomBookViaAPI}>
            add random API
          </button>
        </div>
      </form>
    </div>
  )
}
