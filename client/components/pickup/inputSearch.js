import React from 'react'
import propTypes from 'prop-types'
import { Loader } from './loader'

export const InputSearch = ({
  changeHandler,
  isFetching,
  label,
  placeholder,
}) => {
  return (
    <form>
      <label htmlFor="searchInput">
        {label}
        <input id="searchInput" name="searchInput" onChange={changeHandler} placeholder={placeholder} type="text" />
        {isFetching && <Loader />}
      </label>
    </form>
  )
}

InputSearch.propTypes = {
  changeHandler: propTypes.func.isRequired,
  isFetching: propTypes.bool.isRequired,
  label: propTypes.string.isRequired,
  placeholder: propTypes.string.isRequired,
}
