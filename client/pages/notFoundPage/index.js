import React from 'react'
import propTypes from 'prop-types'
import { Head } from '../../components/head'

const NotFoundPage = (props) => {
  const {
    location,
    route,
  } = props

  return (
    <div>
      <Head location={location} route={route} />
      <h1>Ooops, route not found.</h1>
    </div>)
}

NotFoundPage.propTypes = {
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
  component: NotFoundPage,
}
