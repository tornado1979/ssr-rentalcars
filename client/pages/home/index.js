import React, { Component } from 'react'
import PickupLocation from '../../components/pickup'
import { HorizontalImage } from '../../components/horizontalImage'

class Home extends Component {
  render() {
    return (
      <main>
        <HorizontalImage />
        <div className="pickup-location-container">
          <PickupLocation />
        </div>
      </main>
    )
  }
}

export default {
  component: Home,
}
