import React from 'react'
import propTypes from 'prop-types'
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

class PickupLocation extends React.Component {
  state = {
    searchString: '',
  }

  changeHandler = (ev) => {
    const {
      getData,
    } = this.props

    const {
      searchString, // eslint-disable-line
    } = this.state
    const inputString = ev.target.value
    this.setState({ searchString: inputString })

    if (inputString.length > 1) {
      getData(inputString) // call API with the search string
    }
  }

  render() {
    const {
      isFetching,
      items,
      noResultsFound,
    } = this.props

    const {
      searchString,
    } = this.state

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
        {searchString.length > 1 && (
          <LocationsList
            items={items}
            noResultsFound={noResultsFound}
          />)}
      </div>
    )
  }
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
  items: propTypes.arrayOf(propTypes.string).isRequired,
  noResultsFound: propTypes.string.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(PickupLocation)
