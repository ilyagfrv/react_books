import * as React from 'react'
import { v4 as uuidv4 } from 'uuid'

import { useAppDispatch } from '../../redux/redux-hook'
import { addBook } from '../../redux/books/actionCreators'

import style from './Form.module.css'

// import booksData from '../../data/books.json'

export default function Form() {
  const dispatch = useAppDispatch()
  const [title, setTitle] = React.useState('')
  const [author, setAuthor] = React.useState('')

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()

    if (title && author) {
      const book = {
        title,
        author,
        id: uuidv4(),
      }

      dispatch(addBook(book))

      setTitle('')
      setAuthor('')
    }
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
            onChange={(e) => setTitle(e.target.value)}
          />

          <label htmlFor='author'>Author</label>
          <input
            type='text'
            id='author'
            placeholder='Who is the author?'
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />

          <button type='submit'>new Book</button>
          <button type='button' onClick={handleAddRandomBook}>
            add Random
          </button>
          <button type='button'>add random API</button>
        </div>
      </form>
    </div>
  )
}
