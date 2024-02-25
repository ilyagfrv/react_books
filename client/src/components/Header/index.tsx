import style from './Header.module.css'

export default function TheHeader() {
  return (
    <header className={style.header}>
      <h1 className={style.title}>
        Book Library <span>App</span>
      </h1>
    </header>
  )
}
