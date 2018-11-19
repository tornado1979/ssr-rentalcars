import React from 'react'
import propTypes from 'prop-types'

export const LocationsList = (props) => {
  const {
    onItemClick,
    items,
    noResultsFound,
  } = props

  function getListItems() {
    const stripBookingId = (bookingId) => bookingId.split('-')[0]

    const listItems = items.map(item => (
      <li key={item.bookingId}>
        <div aria-pressed="false" onClick={() => { onItemClick(item.bookingId) }} role="button" tabIndex="0">
          <div className={`left bookingId ${stripBookingId(item.bookingId)}`}>{stripBookingId(item.bookingId)}</div>
          <div className="right">
            <span className="name">
              {item.name}
            </span>
            <span className="region">
              {item.region}
              ,
              {item.country}
            </span>
            {item.isPopular && (
              <span className="popular">
                  Popular
              </span>
            )}
          </div>
        </div>
      </li>
    ))

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
}
