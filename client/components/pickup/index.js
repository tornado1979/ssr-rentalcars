import React, { useState, useEffect } from 'react'
import propTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'
import { LocationsList } from './locationsList'
import { InputSearch } from './inputSearch'

import {
  fetchData,
} from './actionCreators'

import {
  getItems,
  getIsFetching,
  getNoResultsFound,
} from './selectors'

import * as contant from '../../contants'

const PickupLocation = (props) => {
  const [itemSelected, setItemSelected] = useState(false)
  const [searchString, setSearchString] = useState('') // the string that the user types
  const [inputValue, setInputValue] = useState('') // input string & the selected value, when the user clicks on a list items

  const clickHandler = () => {
    setItemSelected(false)
    setInputValue(searchString)
  }

  function changeHandler(ev) {
    const inputString = ev

    // update localstate
    setSearchString(inputString)
    setInputValue(inputString)
    setItemSelected(false)
  }

  const requestData = () => {
    const {
      getData,
    } = props

    if (searchString.length > 1) {
      getData(searchString) // call API with the search string
    }
  }

  // display the animation border, around the pickuplocation component
  useEffect(() => {
    if (itemSelected) {
      const pick = document.getElementsByClassName('pickup-location')[0]
      // add animation class to the component
      pick.classList.add('animate-border')

      // after 0.5s, remove the animation class
      setTimeout(() => pick.classList.remove('animate-border'), 500)
    }
  }, [itemSelected])

  const selectItem = (itemId) => {
    const {
      items,
    } = props

    const obj = items.find(item => item.bookingId === itemId)

    const {
      country,
      name,
      region,
    } = obj

    // update localstate
    setInputValue(`${name},${country},${region}`)
    setItemSelected(true)
  }

  const {
    isFetching,
    items,
    noResultsFound,
  } = props

  return (
    <div className="pickup-location">
      {itemSelected
        && (
          <Helmet>
            <title>{`${inputValue} - rentalcars`}</title>
            <meta content={`${inputValue} - rentalcars`} property="og:title" />
          </Helmet>
        )}
      <h2 className="title">Where are you going?</h2>
      <InputSearch
        changeHandler={changeHandler}
        isFetching={isFetching}
        label={contant.label}
        placeholder={contant.placeholder}
        requestData={requestData}
        value={inputValue}
        click={clickHandler}
      />
      {(!itemSelected) && searchString.length > 1 && (
        <LocationsList
          items={items}
          noResultsFound={noResultsFound}
          onItemClick={selectItem}
          searchString={searchString}
        />)}
    </div>
  )
}

// I leave it here, in case we need to dispatch fetchData server side.
const loadData = (store) => {
  return store.dispatch(fetchData(''))
}

export { loadData }

const mapStateToProps = (state) => {
  return {
    isFetching: getIsFetching(state),
    items: getItems(state),
    noResultsFound: getNoResultsFound(state),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getData: (searchString) => {
      dispatch(fetchData(searchString))
    },
  }
}

PickupLocation.propTypes = {
  getData: propTypes.func.isRequired,
  isFetching: propTypes.bool.isRequired,
  items: propTypes.arrayOf(propTypes.shape()).isRequired,
  noResultsFound: propTypes.oneOfType([propTypes.string, propTypes.bool]).isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(PickupLocation)
