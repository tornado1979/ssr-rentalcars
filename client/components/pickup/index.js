import React from 'react'
import propTypes from 'prop-types'
import { connect } from 'react-redux'
import { LocationsList } from './locationsList'
import { InputSearch } from './inputSearch'

import { fetchData } from './actionCreators'

import {
  getItems,
  getIsFetching,
} from './selectors'

import * as contant from '../../contants'

class PickupLocation extends React.Component {
  render() {
    const {
      items,
    } = this.props

    return (
      <div className="pickup-location">
        <h2 className="title">
          Where are you going?
        </h2>
        <InputSearch
          isFetching
          label={contant.label}
          placeholder={contant.placeholder}
        />
        <LocationsList
          items={items}
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
  items: propTypes.arrayOf(propTypes.string).isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(PickupLocation)
