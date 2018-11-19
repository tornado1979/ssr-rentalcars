import React from 'react'
import propTypes from 'prop-types'
import { connect } from 'react-redux'
import { LocationsList } from './locationsList'
import { InputSearch } from './inputSearch'

import { fetchData } from './actionCreators'

import {
  getItems,
  getIsFetching,
  getNoResultsFound,
} from './selectors'

import * as contant from '../../contants'

class PickupLocation extends React.Component {
  changeHandler = (ev) => {
    const {
      getData,
      isFetching,
    } = this.props

    const searchString = ev.target.value
    // Request the API andpoint when is not fetching data
    if (!isFetching) {
      if (searchString.length > 2) {
        getData(searchString) // call API with the search string
      }
    }
    return false
  }

  render() {
    const {
      isFetching,
      items,
      noResultsFound,
    } = this.props

    return (
      <div className="pickup-location">
        <h2 className="title">
          Where are you going?
        </h2>
        <InputSearch
          changeHandler={(ev) => this.changeHandler(ev)}
          isFetching={isFetching}
          label={contant.label}
          placeholder={contant.placeholder}
        />
        <LocationsList
          items={items}
          noResultsFound={noResultsFound}
        />
      </div>
    )
  }
}

const loadData = (store) => {
  return store.dispatch(fetchData('London'))
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
  items: propTypes.arrayOf(propTypes.string).isRequired,
  noResultsFound: propTypes.string.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(PickupLocation)
