import React from 'react'
import propTypes from 'prop-types'
import { Helmet } from 'react-helmet'

import { serverBasePath } from '../../contants'

export const Head = ({ location, route }) => {
  const pathname = location.pathname.split('/')[1]

  return (
    <Helmet>
      <title>{`${pathname} ${route.title}`}</title>
      <meta content={`${route.description}`} name="description" />
      <meta content={`${route.keywords}`} name="keywods" />
      <meta content={`${route.title}`} property="og:title" />
      <meta content="website" property="og:type" />
      <meta content={`${serverBasePath}/${pathname}`} property="og:url" />
    </Helmet>
  )
}

Head.propTypes = {
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
