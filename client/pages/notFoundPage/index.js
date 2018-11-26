import React from 'react'
import propTypes from 'prop-types'
import { Head } from '../../components/head'

const NotFoundPage = ({ location, route, staticContext = {} }) => {
  staticContext.notFound = true // eslint-disable-line
  return (
    <div>
      <Head location={location} route={route} />
      <h1>Ooops, route not found.</h1>
    </div>)
}


NotFoundPage.defaultProps = {
  staticContext: {},
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
  staticContext: propTypes.shape(),
}

export default {
  component: NotFoundPage,
}
