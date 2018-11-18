import React from 'react'
import propTypes from 'prop-types'
import { renderRoutes } from 'react-router-config'
import { Header } from './components/header'
import { Footer } from './components/footer'

const App = ({ route }) => {
  return (
    <div className="container">
      <Header />
      {renderRoutes(route.routes)}
      <Footer />
    </div>
  )
}

export default {
  component: App,
}

App.propTypes = {
  route: propTypes.shape().isRequired,
}
