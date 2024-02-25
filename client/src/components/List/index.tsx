import style from './List.module.css'

export default function List() {
  return (
    <div className={style.root}>
      <h2 className={style.title}>Book List</h2>
      {/* <h3 className={style.subtitle}>No books yet.</h3> */}

      <ul>
        <li className={style.book}>
          <h4>
            1. "Book name" by <strong>Author name</strong>
          </h4>

          <div className={style.actions}>
            <span className={style.icon}>icon</span>
            <button className={style.deleteBtn}>Delete</button>
          </div>
        </li>
      </ul>
    </div>
  )
}
