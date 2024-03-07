import style from './Button.module.css'

import { Button } from 'types/button'

export default function Button(props: Button) {
  const { children, disabled = false } = props

  return (
    <button {...props} className={style.button} disabled={disabled}>
      {children}
    </button>
  )
}
