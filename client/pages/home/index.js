import React from 'react'
import propTypes from 'prop-types'
import PickupLocation from '../../components/pickup'
import { HorizontalImage } from '../../components/horizontalImage'
import { Head } from '../../components/head'

const Home = (props) => {
  const {
    location,
    route,
  } = props
  return (
    <main>
      <Head location={location} route={route} />
      <HorizontalImage />
      <div className="pickup-location-container">
        <PickupLocation />
      </div>
    </main>
  )
}

Home.propTypes = {
  location: propTypes.shape({
    hash: propTypes.string,
    pathname: propTypes.string,
    search: propTypes.string,
  }).isRequired,
  route: propTypes.shape({
    decription: propTypes.string,
    keywords: propTypes.string,
    path: propTypes.string,
    title: propTypes.string,
  }).isRequired,
}

export default {
  component: Home,
}
