import React from 'react'
import renderer from 'react-test-renderer'

import { Header } from '../header'

describe('Component header', () => {
  it('should render component corectly', () => {
    expect.assertions(1)
    const component = renderer
      .create(<Header />)
      .toJSON()
    expect(component).toMatchSnapshot()
  })
})
