import React from 'react'

const locationsList = (items) => {
  const stripBookingId = (bookingId) => bookingId.split('-')[0]

  const listItems = items.items.map(item => (
    <li key={item.bookingId}>
      <div className="left bookingId">{stripBookingId(item.bookingId)}</div>
      <div className="right">
        <span className="name">
          {item.name}
        </span>
        <span className="region">
          {item.region}
          ,
          {item.country}
        </span>
      </div>
    </li>
  ))
  return (
    <ul className="items-list">
      {listItems}
    </ul>
  )
}

export const LocationsList = locationsList
