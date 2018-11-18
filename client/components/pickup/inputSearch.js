import React from 'react'
import propTypes from 'prop-types'

export const InputSearch = ({ label, placeholder }) => {
  return (
    <form>
      <label htmlFor="searchInput">{label}</label>
      <input id="searchInput" name="searchInput" placeholder={placeholder} type="text" />
    </form>
  )
}

InputSearch.propTypes = {
  label: propTypes.string.isRequired,
  placeholder: propTypes.string.isRequired,
}
