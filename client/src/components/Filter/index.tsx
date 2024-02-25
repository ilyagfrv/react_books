import style from './Filter.module.css'

export default function Filter() {
  return (
    <div className={style.root}>
      <div className={style.col}>
        <input type='text' placeholder='filter by title...' />
      </div>
      <div className={style.col}>
        <input type='text' placeholder='filter by author...' />
      </div>
      <div className={style.col}>
        <label>
          <input type='checkbox' /> Only Favorite
        </label>
      </div>
      <div className={style.col}>
        <button type='button'>Reset filters</button>
      </div>
    </div>
  )
}
