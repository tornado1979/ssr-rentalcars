import React from 'react'
import loader from './img/preloader64.gif'

export const Loader = () => {
  return (
    <div className="loader" id="loader">
      <img alt="pre-loader" id="loader-gif" src={loader} />
      <span>
        this is a test message
      </span>
    </div>
  )
}
