import React from 'react'

import img from './img/landscape.jpg'

export const HorizontalImage = () => {
  const divStyle = {
    backgroundImage: `url(${img})`,
  }
  return (
    <div className="horizontalImage" style={divStyle} />
  )
}
