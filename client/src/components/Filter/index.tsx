import React from 'react'

import { useAppDispatch, useAppSelector } from '../../redux/redux-hook'
import {
  setTitleFilter,
  setAuthorFilter,
  resetFilters,
  selectTitleFilter,
  selectAuthorFilter,
} from '../../redux/slices/filterSlice'

import style from './Filter.module.css'

export default function Filter() {
  const dispatch = useAppDispatch()
  const titleFilter = useAppSelector(selectTitleFilter)
  const authorFilter = useAppSelector(selectAuthorFilter)

  const handleTitleFilterChange = (e: React.FormEvent<HTMLInputElement>) => {
    dispatch(setTitleFilter(e.currentTarget.value))
  }

  const handleAuthorFilterChange = (e: React.FormEvent<HTMLInputElement>) => {
    dispatch(setAuthorFilter(e.currentTarget.value))
  }

  const handleResetFilters = () => {
    dispatch(resetFilters())
  }

  return (
    <div className={style.filterContainer}>
      <input
        type='text'
        placeholder='search by title...'
        value={titleFilter}
        onChange={handleTitleFilterChange}
      />
      <input
        type='text'
        placeholder='search by author...'
        value={authorFilter}
        onChange={handleAuthorFilterChange}
      />

      <label>
        <input type='checkbox' /> Only Favorite
      </label>

      <button type='button' onClick={() => handleResetFilters()}>
        Reset filters
      </button>
    </div>
  )
}
