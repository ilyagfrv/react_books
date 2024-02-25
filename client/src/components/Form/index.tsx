import style from './Form.module.css'

export default function Form() {
  return (
    <div className={style.root}>
      <h3>Add a Book</h3>

      <form onSubmit={() => {}}>
        <div>
          <label htmlFor='title'>Title</label>
          <input type='text' id='title' placeholder='What book?' />

          <label htmlFor='author'>Author</label>
          <input type='text' id='author' placeholder='Who is the author?' />

          <button type='submit'>new Book</button>
          <button type='submit'>add Random</button>
          <button type='submit'>add random API</button>
        </div>
      </form>
    </div>
  )
}
