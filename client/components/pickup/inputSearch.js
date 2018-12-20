import React from 'react'
import propTypes from 'prop-types'
import { Loader } from './loader'
import debounce from '../../helpers/debounce'

export const InputSearch = ({
  changeHandler,
  click,
  isFetching,
  label,
  placeholder,
  requestData,
  value,
}) => {
  const wait = debounce(function(value) {
    console.log('you pressed the key', value)
    requestData()
  }, 250)

  function onChangeValue(ev) {
    const value = ev.target.value
    // update the input value every time a key is pressed
    changeHandler(value)
    // use debounce time to execute the REQUEST_DATA from server
    wait(value)
  }

  return (
    <form>
      <label htmlFor="searchInput">
        {label}
        <input id="searchInput" name="searchInput" onChange={(ev) => onChangeValue(ev)} onClick={click} placeholder={placeholder} type="text" value={value} />
        {isFetching && <Loader />}
      </label>
    </form>
  )
}

InputSearch.propTypes = {
  changeHandler: propTypes.func.isRequired,
  click: propTypes.func.isRequired,
  isFetching: propTypes.bool.isRequired,
  label: propTypes.string.isRequired,
  placeholder: propTypes.string.isRequired,
  requestData: propTypes.func.isRequired,
  value: propTypes.string.isRequired,
}
