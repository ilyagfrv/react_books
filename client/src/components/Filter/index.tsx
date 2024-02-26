import style from './Filter.module.css'

export default function Filter() {
  return (
    <div className={style.filterContainer}>
      <input type='text' placeholder='filter by title...' />
      <input type='text' placeholder='filter by author...' />

      <label>
        <input type='checkbox' /> Only Favorite
      </label>

      <button type='button'>Reset filters</button>
    </div>
  )
}
