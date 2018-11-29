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
  const [searchString, setSearchString] = useState('')

  const changeHandler = (ev) => {
    const {
      getData,
    } = props

    const inputString = ev.target.value

    // update localstate
    setSearchString(inputString)
    setItemSelected(false)

    if (inputString.length > 1) {
      getData(inputString) // call API with the search string
    }
  }

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
    setSearchString(`${name},${country},${region}`)
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
            <title>{`${searchString} - rentalcars`}</title>
            <meta content={`${searchString} - rentalcars`} property="og:title" />
          </Helmet>
        )}
      <h2 className="title">Where are you going?</h2>
      <InputSearch
        changeHandler={(ev) => changeHandler(ev)}
        isFetching={isFetching}
        label={contant.label}
        placeholder={contant.placeholder}
        value={searchString}
      />
      {!itemSelected && searchString.length > 1 && (
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
