import React from 'react'
import propTypes from 'prop-types'
import { findString } from '../../helpers/helpers'

export const LocationsList = (props) => {
  const {
    onItemClick,
    items,
    noResultsFound,
    searchString,
  } = props

  function getListItems() {
    const stripBookingId = (bookingId) => bookingId.split('-')[0]

    const listItems = items.map(item => {
      const splitedName = findString(item.name, searchString)

      return (
        <li key={item.bookingId}>
          <div aria-pressed="false" onClick={() => { onItemClick(item.bookingId) }} role="button" tabIndex="0">
            <div className={`left bookingId ${stripBookingId(item.bookingId)}`}>{stripBookingId(item.bookingId)}</div>
            <div className="right">
              {splitedName.map((name, idx) => {
                return (
                  <span key={idx} className="name" style={name.toLowerCase() === searchString.toLowerCase() ? { fontWeight: 700 } : { fontWeight: 400 }}>
                    {name}
                  </span>
                )
              })}
              <span className="region">
                {item.region}
                <span>,</span>
                {item.country}
              </span>
              {item.isPopular && (
                <span className="popular">Popular</span>
              )}
            </div>
          </div>
        </li>
      )
    })

    return listItems
  }

  return (
    <ul className="items-list">
      {items.length > 0 && !noResultsFound && getListItems()}
      {items.length > 0 && noResultsFound && <li key="123">{noResultsFound}</li>}
    </ul>
  )
}

LocationsList.propTypes = {
  items: propTypes.arrayOf(propTypes.shape()).isRequired,
  noResultsFound: propTypes.oneOfType([propTypes.string, propTypes.bool]).isRequired,
  onItemClick: propTypes.func.isRequired,
  searchString: propTypes.string.isRequired,
}
