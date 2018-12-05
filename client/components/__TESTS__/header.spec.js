import React from 'react'
import renderer from 'react-test-renderer'
import { BrowserRouter as Router } from 'react-router-dom'

import { Header } from '../header'

describe('Component header', () => {
  it('should render component corectly', () => {
    expect.assertions(1)
    const component = renderer
      .create(
        <Router>
          <Header />
        </Router>)
      .toJSON()

    expect(component).toMatchSnapshot()
  })
})
