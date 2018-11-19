import React from 'react'
import propTypes from 'prop-types'
import { Loader } from './loader'

export const InputSearch = ({
  changeHandler,
  isFetching,
  label,
  placeholder,
  value,
}) => {
  return (
    <form>
      <label htmlFor="searchInput">
        {label}
        <input id="searchInput" name="searchInput" onChange={changeHandler} placeholder={placeholder} type="text" value={value} />
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
  value: propTypes.string.isRequired,
}
