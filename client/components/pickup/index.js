import React from 'react'
import propTypes from 'prop-types'
import { connect } from 'react-redux'
import { LocationsList } from './locationsList'
import { InputSearch } from './inputSearch'

import {
  clearResults,
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
    itemSelected: false,
    searchString: '',
  }

  changeHandler = (ev) => {
    const {
      emptyResults,
      getData,
    } = this.props

    const {
      searchString, // eslint-disable-line
    } = this.state
    const inputString = ev.target.value
    this.setState({ searchString: inputString, itemSelected: false })

    if (inputString.length > 1) {
      getData(inputString) // call API with the search string
    } else if (inputString.length === 1) {
      // dispatch action  EMPTY_RESULTS
      emptyResults(inputString)
    }
  }

  selectItem = (itemId) => {
    const {
      items,
    } = this.props

    const obj = items.find(item => item.bookingId === itemId)

    const {
      country,
      name,
      region,
    } = obj

    this.setState({ itemSelected: true, searchString: `${name},${country},${region}` })
  }

  render() {
    const {
      isFetching,
      items,
      noResultsFound,
    } = this.props

    const {
      itemSelected,
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
          value={searchString}
        />
        {!itemSelected && (
          <LocationsList
            items={items}
            noResultsFound={noResultsFound}
            onItemClick={this.selectItem}
            searchString={searchString}
          />
        )}
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
    emptyResults: (inputString) => dispatch(clearResults(inputString)),
    getData: (searchString) => {
      dispatch(fetchData(searchString))
    },
  }
}

PickupLocation.propTypes = {
  emptyResults: propTypes.func.isRequired,
  getData: propTypes.func.isRequired,
  isFetching: propTypes.bool.isRequired,
  items: propTypes.arrayOf(propTypes.shape()).isRequired,
  noResultsFound: propTypes.oneOfType([propTypes.string, propTypes.bool]).isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(PickupLocation)
