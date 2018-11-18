import React from 'react'

const locationsList = (items) => {
  const listItems = items.items.map(item => (
    <li key={item.bookingId}>
      {item.country}
    </li>
  ))
  return (
    <ul className="items-list">
      {listItems}
    </ul>
  )
}

export const LocationsList = locationsList
